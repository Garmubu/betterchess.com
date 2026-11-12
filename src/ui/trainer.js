/* Shared logic of the exercises where the player must find the moves of a known line:
 * opening drills (openings.js) and tactics puzzles (tactics.js).
 *
 * A trainer holds a position and a line (SAN moves, player and opponent alternating).
 * The player's moves are checked against the line; the opponent's replies are played
 * automatically. The screen object owning the trainer provides:
 *   isActive(tr)         false once the trainer was replaced or closed
 *   accepts(tr, san, expected, isLast)
 *   messages             { good, wrong } i18n keys, with {san}
 *   finished(tr)         record the result
 *   paint()
 */
const REPLY_DELAY = 500;

const Trainer = {
  create(screen, fen, line, me) {
    return Object.assign(newSelection(), {
      screen, line, me,
      pos: Chess.create(fen),
      idx: 0,                 // next move of the line to play
      errors: 0, errorsHere: 0,
      helped: false,          // used the hint, the arrow or looked at the line
      done: false, clean: false, busy: false,
      hint: -1, arrow: null, last: null,
      msg: null,              // { ok, text } feedback on the last move
    });
  },

  expected(tr) { return tr.pos.fromSan(tr.line[tr.idx]); },
  playersTurn(tr) { return !tr.done && !tr.busy && tr.pos.turn() === tr.me; },

  square(tr, sq) {
    if (!tr || !this.playersTurn(tr)) return;
    const moves = pickMove(tr, tr.pos, sq, tr.me);
    if (moves) this.tryMove(tr, autoQueen(moves));
    else tr.screen.paint();
  },

  tryMove(tr, m) {
    const s = tr.screen, expected = tr.line[tr.idx], san = tr.pos.san(m), isLast = tr.idx === tr.line.length - 1;
    clearSelection(tr);
    if (!s.accepts(tr, san, expected, isLast)) {
      Sound.play('wrong');
      tr.errors++;
      tr.errorsHere++;
      tr.msg = { ok: false, text: t(s.messages.wrong, { san: localSan(san) }) };
      /* second miss on the same move: outline the piece to move */
      if (tr.errorsHere >= 2) tr.hint = Move.from(this.expected(tr));
      return s.paint();
    }
    this.advance(tr, m);
    Object.assign(tr, { errorsHere: 0, hint: -1, arrow: null, msg: { ok: true, text: t(s.messages.good, { san: localSan(san) }) } });
    if (tr.idx >= tr.line.length) return this.finish(tr);
    this.reply(tr);
  },

  advance(tr, m) {
    playMove(tr.pos, m);
    tr.last = [Move.from(m), Move.to(m)];
    tr.idx++;
  },

  /* the opponent's move of the line, after a short pause */
  reply(tr) {
    if (tr.idx >= tr.line.length) return this.finish(tr);
    tr.busy = true;
    tr.screen.paint();
    setTimeout(() => {
      if (!tr.screen.isActive(tr)) return;
      this.advance(tr, this.expected(tr));
      tr.busy = false;
      if (tr.idx >= tr.line.length) this.finish(tr);
      else tr.screen.paint();
    }, REPLY_DELAY);
  },

  finish(tr) {
    tr.done = true;
    tr.busy = false;
    tr.clean = !tr.errors && !tr.helped;
    tr.screen.finished(tr);
    tr.screen.paint();
    const mated = tr.pos.inCheck() && !tr.pos.legal().length; // let the mate sound play first
    setTimeout(() => Sound.play(tr.clean ? 'win' : 'draw'), mated ? 650 : 250);
  },

  hint(tr) {
    if (!this.playersTurn(tr)) return;
    tr.hint = Move.from(this.expected(tr));
    tr.helped = true;
    tr.screen.paint();
  },
  showMove(tr) {
    if (!this.playersTurn(tr)) return false;
    const m = this.expected(tr);
    tr.arrow = [Move.from(m), Move.to(m)];
    tr.helped = true;
    return true;
  },

  /* keep playing the position against the engine, with the coach */
  continueAgainstEngine(tr, opening) {
    Game.start({ mode: 'casual', kind: 'coached', coach: true, colour: tr.me, botElo: Store.profile.elo, fen: tr.pos.fen(), opening });
  },

  /* ---- screen parts ---- */
  html(withBar) {
    return '<section class="game"><div class="left"><div class="pbar"><span class="who" id="trWho"></span><span class="chip" id="trProgress"></span></div>' +
      '<div class="bwrap"><div class="board" id="board"></div></div>' + (withBar ? '<div class="bar" id="trBar"></div>' : '') + '</div>' +
      '<div class="side"><div id="trCard"></div><div class="row" id="trActions"></div><div id="trLearn"></div></div></section>';
  },

  /* returns false when the screen skeleton is missing (the caller re-renders) */
  paint(tr, who, progress) {
    if (!$('#trCard')) return false;
    $('#trWho').innerHTML = '<i class="' + (tr.me ? 'b' : 'w') + '"></i>' + esc(who);
    $('#trProgress').textContent = progress;
    drawBoard($('#board'), { pos: tr.pos, flip: tr.me === 1, last: tr.last, sel: tr.sel, targets: tr.targets, hint: tr.hint, arrow: tr.arrow });
    return true;
  },

  feedback(tr, idle) {
    return tr.msg ? verdict(tr.msg.ok, tr.msg.text) : '<p class="muted">' + idle + '</p>';
  },

  /* the explanation panel is only rebuilt when its content changes, so an opened panel stays open */
  paintLearn(key, html) {
    const el = $('#trLearn');
    if (el.dataset.key !== key) { el.innerHTML = html; el.dataset.key = key; }
  },
};
