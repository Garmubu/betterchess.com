/* Board drawing and click-to-move, shared by games, opening drills and puzzles. */

/* el: the .board element. v: what to show
 *   pos        position to draw            flip      true to see it from Black's side
 *   last       [from, to] of the last move  sel       selected square (-1: none)
 *   targets    squares the selected piece can go to
 *   hint       square to outline (-1: none) arrow     [from, to] to draw
 *   badge      { sq, cls } coach badge      promo     moves to choose from, shows the promotion picker
 */
function drawBoard(el, v) {
  const pos = v.pos, check = pos.inCheck() ? pos.kingSquare() : -1;
  let h = '';
  for (let i = 0; i < 64; i++) {
    const row = i >> 3, col = i & 7;
    const rank = v.flip ? row : 7 - row, file = v.flip ? 7 - col : col, sq = rank * 16 + file, piece = pos.get(sq);
    let cls = 'sq ' + ((rank + file) % 2 === 0 ? 'dk' : 'lt');
    if (v.last && (v.last[0] === sq || v.last[1] === sq)) cls += ' last';
    if (v.sel === sq) cls += ' sel';
    if (check === sq) cls += ' chk';
    if (v.hint === sq) cls += ' hint';
    h += '<button class="' + cls + '" data-act="square" data-sq="' + sq + '" aria-label="' + Chess.sqName(sq) + '">';
    if (piece) h += pieceIcon(piece & 7, colourOf(piece));
    if (v.targets && v.targets.includes(sq)) h += '<i class="' + (piece ? 'ring' : 'dot') + '"></i>';
    if (v.badge && v.badge.sq === sq) h += '<b class="bdg c-' + v.badge.cls + '">' + CLASSES[v.badge.cls] + '</b>';
    if (col === 0) h += '<span class="co r">' + (rank + 1) + '</span>';
    if (row === 7) h += '<span class="co f">' + 'abcdefgh'[file] + '</span>';
    h += '</button>';
  }
  if (v.arrow) h += arrowSvg(v.arrow, v.flip);
  if (v.promo) h += promotionPicker(v.promo, colourOf(pos.get(Move.from(v.promo[0]))));
  el.innerHTML = h;
}

/* type: 1..6 or a letter of "pnbrqk"; colour: 0 white, 1 black */
function pieceIcon(type, colour, title) {
  const letter = typeof type === 'number' ? ' pnbrqk'[type] : type;
  return '<i class="pc ' + (colour ? 'b' : 'w') + letter + '"' + (title ? ' title="' + esc(title) + '"' : '') + '></i>';
}

function arrowSvg([from, to], flip) {
  const centre = sq => { const r = sq >> 4, f = sq & 7; return [(flip ? 7 - f : f) + .5, (flip ? r : 7 - r) + .5]; };
  const a = centre(from), b = centre(to);
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
  const ex = b[0] - ux * .32, ey = b[1] - uy * .32; // where the shaft stops and the head starts
  return '<svg class="arrow" viewBox="0 0 8 8">' +
    '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + ex + '" y2="' + ey + '" stroke="#1f7a8c" stroke-opacity=".85" stroke-width=".2"/>' +
    '<polygon fill="#1f7a8c" fill-opacity=".9" points="' + (b[0] - ux * .05) + ',' + (b[1] - uy * .05) + ' ' +
    (ex - uy * .24) + ',' + (ey + ux * .24) + ' ' + (ex + uy * .24) + ',' + (ey - ux * .24) + '"/></svg>';
}

function promotionPicker(moves, colour) {
  return '<div class="promo"><span class="label">' + t('board.promotion') + '</span><div class="row">' +
    moves.map(m => '<button data-act="promote" data-move="' + m + '" aria-label="' + t('piece.' + ' pnbrq'[Move.promo(m)]) + '">' +
      pieceIcon(Move.promo(m), colour) + '</button>').join('') +
    '</div><button class="btn sm" data-act="promote" data-move="0">' + t('board.cancel') + '</button></div>';
}

/* Click-to-move. sel holds { sel, targets, legal } for the screen; me is the player's colour.
   Returns the legal moves from the selected square to sq (four of them for a promotion),
   or null after updating the selection. */
function pickMove(sel, pos, sq, me) {
  if (sel.sel >= 0) {
    const moves = sel.legal.filter(m => Move.from(m) === sel.sel && Move.to(m) === sq);
    if (moves.length) return moves;
  }
  const piece = pos.get(sq);
  if (piece && colourOf(piece) === me && sel.sel !== sq) {
    sel.sel = sq;
    sel.legal = pos.legal();
    sel.targets = sel.legal.filter(m => Move.from(m) === sq).map(Move.to);
  } else clearSelection(sel);
  return null;
}
function clearSelection(sel) { sel.sel = -1; sel.targets = []; }
const newSelection = () => ({ sel: -1, targets: [], legal: [] });
const autoQueen = moves => moves.find(m => Move.promo(m) === Move.QUEEN) || moves[0];

/* Play m on pos with its sound. Returns true if the move captured something. */
function playMove(pos, m) {
  const captured = !!pos.get(Move.to(m)) || Move.flag(m) === Move.EN_PASSANT;
  pos.make(m);
  Sound.forMove(m, pos, captured);
  return captured;
}
