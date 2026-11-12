/* "Understand" panels: why an opening or a tactic works, written for beginners. */

const LEARN_ROWS = {
  openings: ['learn.plan', 'learn.strengths', 'learn.weaknesses', 'learn.pieces'],
  themes: ['learn.what', 'learn.why', 'learn.when', 'learn.pieces'],
};
const ROW_STYLE = { 'learn.strengths': ' str', 'learn.weaknesses': ' weak' };

function keyPiecesHtml(letters, black) {
  return '<span class="picons">' + [...letters].map(p => pieceIcon(p, black ? 1 : 0, t('piece.' + p))).join('') + '</span>';
}

function styleTags(tags) {
  return '<span class="tags">' + tags.map(x => '<span class="chip tag t-' + x + '">' + t('tag.' + x) + '</span>').join('') + '</span>';
}

/* kind: 'openings' | 'themes'; open: panel unfolded at first */
function learnHtml(kind, id, open) {
  const isOpening = kind === 'openings';
  const item = isOpening ? openingById(id) : THEMES[id];
  const texts = learnText(kind, id);
  const black = isOpening && item.side === 'b';
  const rows = LEARN_ROWS[kind].map((key, i) =>
    '<div class="lr' + (ROW_STYLE[key] || '') + '"><dt>' + t(key) + (key === 'learn.pieces' ? keyPiecesHtml(item.keyPieces, black) : '') + '</dt>' +
    '<dd>' + esc(texts[i]) + '</dd></div>').join('');
  return '<details class="card learn"' + (open ? ' open' : '') + '><summary>' +
    '<span class="label">' + t(isOpening ? 'learn.title' : 'learn.titleTheme') + '</span>' + (isOpening ? styleTags(item.style) : '') +
    '</summary><dl>' + rows + '</dl></details>';
}
