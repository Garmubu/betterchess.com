/* Small helpers shared by every screen. */
const Chess = ChessLib();

const $ = sel => document.querySelector(sel);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const randInt = n => Math.floor(Math.random() * n);
const clone = o => JSON.parse(JSON.stringify(o));

/* Moves are packed integers, see src/chess/core.js. */
const Move = {
  from: m => m & 127,
  to: m => (m >> 7) & 127,
  promo: m => (m >> 14) & 7,
  flag: m => m >> 17,
  EN_PASSANT: 1, CASTLE_K: 2, CASTLE_Q: 3,
  QUEEN: 5,
};
const colourOf = piece => piece >> 3;
const sideName = black => t(black ? 'lobby.black' : 'lobby.white');

/* Local day number, so "of the day" items change at local midnight. */
function dayIndex() {
  const d = new Date();
  return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
}

/* "Arm then confirm" buttons (resign, reset): the first click arms for 4 s, the second confirms. */
const ARM_MS = 4000;
const isArmed = since => Date.now() - since < ARM_MS;

let toastTimer = 0;
function toast(text) {
  const el = $('#toast');
  el.textContent = text;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
}

/* Shared markup bits */
function statusChip(stat, okKey, prefix) {
  if (stat.ok) return '<span class="chip ok">' + t(okKey, { n: stat.ok }) + '</span>';
  if (stat.tries) return '<span class="chip warn">' + t(prefix + '.retry') + '</span>';
  return '<span class="chip">' + t(prefix + '.new') + '</span>';
}
function verdict(ok, text) {
  return '<p class="verdict ' + (ok ? 'ok' : 'ko') + '" aria-live="polite">' + esc(text) + '</p>';
}
function button(act, label, cls, extra) {
  return '<button class="btn' + (cls ? ' ' + cls : '') + '" data-act="' + act + '"' + (extra || '') + '>' + label + '</button>';
}
