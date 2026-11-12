/* The coach: rates the player's moves after they are played, picks the bot's moves, computes Elo.
 * It never shows the best move: it only compares the move played with the engine's lines.
 */

/* Move classes, best to worst, with their symbol. Names and comments are in i18n
   ("class.<name>", "comment.<name>"); colours in style.css (.c-<name>). */
const CLASSES = {
  brilliant: '!!', great: '!', best: '★', excellent: '✓', good: '+', book: '≡',
  inaccuracy: '?!', mistake: '?', miss: '×', blunder: '??', forced: '→',
};
/* classes counted in the end-of-game summary (a forced move says nothing about the player) */
const SUMMARY_CLASSES = Object.keys(CLASSES).filter(c => c !== 'forced');

/* Centipawns → probability of winning for the side to move (same curve as Lichess). */
const winChance = cp => 1 / (1 + Math.exp(-0.00368208 * cp));

/* Accuracy of one move from its loss of win chance (0..1), Lichess-style formula. */
function accuracy(loss) {
  return Math.max(0, Math.min(100, 103.1668 * Math.exp(-0.04354 * loss * 100) - 3.1669));
}

/* Rate one move.
 * m.pre      engine lines before the move, from the mover's view (best first)
 * m.after    engine lines after the move, from the opponent's view, or null when the game ended
 * m.final    the final score from the mover's view, when after is null (mate given: 9990, else 0)
 * m.uci      the move played
 * m.legalCount, m.inBook, m.sacrifice (material offered, from see()), m.pieceType, m.recapture
 * Returns { cls, loss } where loss is the win chance given away (0..1).
 */
function rateMove(m) {
  const pre = m.pre, best = pre[0];
  let cp;
  if (m.uci === best.uci) cp = best.cp;
  else {
    const line = pre.find(x => x.uci === m.uci);
    if (line) cp = line.cp;
    else {
      /* not among the engine's lines: score it from the reply analysis, no better than the worst line */
      cp = m.after ? -m.after[0].cp : m.final;
      cp = Math.min(cp, pre[pre.length - 1].cp);
    }
  }
  const bestChance = winChance(best.cp), playedChance = winChance(cp);
  const loss = Math.max(0, bestChance - playedChance);
  const top = m.uci === best.uci || loss < 0.002;
  const onlyGoodMove = pre.length > 1 && bestChance - winChance(pre[1].cp) >= 0.15;

  let cls;
  if (m.legalCount === 1) cls = 'forced';
  else if (m.inBook) cls = 'book';
  /* brilliant: a sound sacrifice of a piece (pawn moves excluded), in a position not already won */
  else if ((top || loss <= 0.02) && m.sacrifice >= 200 && m.pieceType !== 1 && playedChance >= 0.45 && bestChance <= 0.97 && best.mate !== 1) cls = 'brilliant';
  else if (top) cls = onlyGoodMove && !m.recapture && bestChance >= 0.35 ? 'great' : 'best';
  else if (loss > 0.10 && bestChance >= 0.80 && playedChance >= 0.40) cls = 'miss';
  else if (loss <= 0.02) cls = 'excellent';
  else if (loss <= 0.05) cls = 'good';
  else if (loss <= 0.10) cls = 'inaccuracy';
  else if (loss <= 0.20) cls = 'mistake';
  else cls = 'blunder';
  return { cls, loss };
}

/* Bot move for a given Elo, from the engine's lines (scores from the bot's view).
 * Weaker bots play more random moves and pick worse lines more often. */
function botMove(lines, elo, pos) {
  const legal = pos.legal();
  const randomMove = () => Chess.uci(legal[randInt(legal.length)]);
  if (!lines || !lines.length) return randomMove();
  if (lines[0].mate === 1 && Math.random() < 0.5 + elo / 2000) return lines[0].uci;
  /* a free capture is rarely missed, even by a beginner */
  const freeCapture = pos.get(Chess.sqIdx(lines[0].uci.slice(2, 4))) && (lines.length < 2 || lines[0].cp - lines[1].cp >= 200);
  const randomRate = Math.max(0, 0.40 - (elo - 400) / 3250) * (freeCapture ? 0.2 : 1);
  if (Math.random() < randomRate) return randomMove();
  /* softmax over the lines: the lower the Elo, the flatter the choice */
  const temperature = Math.max(1, 180 - elo * 0.075);
  const weights = lines.map(x => Math.exp(-(lines[0].cp - x.cp) / temperature));
  let r = Math.random() * weights.reduce((a, b) => a + b, 0);
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return lines[i].uci;
  }
  return lines[0].uci;
}

/* Elo change after a ranked game, the bot playing at the player's own Elo (expected score 0.5).
   The first 10 games count more, to find the player's level faster. */
const PLACEMENT_GAMES = 10;
const eloK = games => games < PLACEMENT_GAMES ? 48 : 32;
const eloDelta = (score, games) => Math.round(eloK(games) * (score - 0.5));
