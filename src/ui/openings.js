/* Openings tab: opening of the day, the list, and the drill where the player replays a line. */
const Openings = {
  drill: null,

  daily() { return OPENINGS[dayIndex() % OPENINGS.length]; },
  movesCount(o) { return Math.ceil(o.line.length / 2); },

  /* ---- drill (a Trainer, see trainer.js) ---- */
  messages: { good: 'drill.good', wrong: 'drill.wrong' },
  isActive(tr) { return this.drill === tr; },
  accepts(tr, san, expected) { return stripCheck(san) === stripCheck(expected); },
  finished(tr) { Store.recordExercise('openings', tr.op.id, tr.clean); },

  start(id) {
    const op = openingById(id);
    if (!op) return;
    const me = op.side === 'w' ? 0 : 1;
    this.drill = Object.assign(Trainer.create(this, Chess.START, op.line, me), { op, showLine: false });
    App.render();
    if (me === 1) Trainer.reply(this.drill);
  },
  quit() { this.drill = null; App.render(); },
  square(sq) { Trainer.square(this.drill, sq); },
  toggleLine() {
    const d = this.drill;
    d.showLine = !d.showLine;
    if (d.showLine) d.helped = true;
    this.paint();
  },

  /* ---- screens ---- */
  html() { return this.drill ? Trainer.html(true) : this.listHtml(); },

  listHtml() {
    const d = this.daily();
    const row = o => '<li><button class="op" data-act="drill" data-id="' + o.id + '" style="--c:' + sideColour(o.side) + '">' +
      '<span class="grow"><span class="o-name">' + esc(openingName(o)) + '</span><br>' +
      '<span class="o-sub">' + o.eco + ' · ' + t('openings.moves', { n: this.movesCount(o) }) + ' · ' + t('tag.' + o.style[0]) + '</span></span>' +
      statusChip(Store.exercise('openings', o.id), 'openings.ok', 'openings') + '</button></li>';
    const column = (side, label) => '<div class="stack"><span class="label">' + t(label) + '</span><ul class="ops">' +
      OPENINGS.filter(o => o.side === side).map(row).join('') + '</ul></div>';
    return '<div class="card glow"><span class="label">' + t('openings.daily') + ' · ' + d.eco + '</span>' +
        '<h2>' + esc(openingName(d)) + '</h2><p>' + esc(openingIdea(d)) + '</p>' +
        '<p class="muted small">' + t('openings.youPlay', { side: sideName(d.side === 'b'), n: this.movesCount(d) }) + '</p>' +
        button('drill', t('openings.train'), 'primary wide', ' data-id="' + d.id + '"') + '</div>' +
      learnHtml('openings', d.id, true) +
      '<div class="row between"><h2>' + t('openings.all') + '</h2><span class="chip acc">' +
        t('openings.doneCount', { a: Store.solvedCount('openings', OPENINGS), b: OPENINGS.length }) + '</span></div>' +
      '<div class="cols">' + column('w', 'openings.withWhite') + column('b', 'openings.withBlack') + '</div>';
  },

  paint() {
    const d = this.drill;
    if (!d || App.view() !== 'openings') return;
    const op = d.op, n = op.line.length;
    const mine = upTo => op.line.slice(0, upTo).filter((_, i) => i % 2 === d.me).length;
    if (!Trainer.paint(d, openingName(op), mine(d.idx) + ' / ' + mine(n))) return App.render();
    $('#trBar').innerHTML = op.line.map((_, i) => '<i class="' + (i < d.idx ? 'on' : i === d.idx && !d.done ? 'cur' : '') + '"></i>').join('');

    if (d.done) {
      const result = d.clean ? t('drill.clean') : t('drill.errors', { n: d.errors }) + (d.helped ? t('drill.withHelp') : '') + t('drill.replay');
      $('#trCard').innerHTML = '<div class="card glow"><span class="label">' + op.eco + ' · ' + t('drill.finished') + '</span>' +
        '<h2>' + esc(openingName(op)) + '</h2>' + verdict(d.clean, result) +
        '<p>' + esc(openingIdea(op)) + '</p><p class="line">' + lineText(op.line, n) + '</p></div>';
      $('#trActions').innerHTML = button('drill-again', t('drill.again'), 'primary') + button('drill-play', t('drill.continue')) + button('drill-quit', t('drill.others'));
    } else {
      const line = d.showLine ? lineText(op.line, n) : lineText(op.line, d.idx) + (d.idx < n ? ' <span class="muted">…</span>' : '');
      $('#trCard').innerHTML = '<div class="card"><span class="label">' + op.eco + ' · ' + t('drill.youPlay', { side: sideName(d.me) }) + '</span>' +
        '<p>' + esc(openingIdea(op)) + '</p>' + Trainer.feedback(d, t('drill.prompt')) + '<p class="line">' + line + '</p></div>';
      $('#trActions').innerHTML = button('drill-hint', t('drill.hint'), 'sm') + button('drill-show', t('drill.show'), 'sm') +
        button('drill-line', t(d.showLine ? 'drill.hideLine' : 'drill.showLine'), 'sm') +
        button('drill-again', t('drill.restart'), 'sm') + button('drill-quit', t('drill.quit'), 'sm');
    }
    Trainer.paintLearn(LANG + op.id, learnHtml('openings', op.id, true));
  },
};

const stripCheck = san => san.replace(/[+#]/g, '');
const sideColour = side => side === 'w' ? '#f2f8e6' : '#54745c';
/* "1. e4 e5 2. Nf3" for the first `upTo` moves, in the local notation */
function lineText(line, upTo) {
  return line.slice(0, upTo).map((san, i) => (i % 2 === 0 ? (i / 2 + 1) + '. ' : '') + esc(localSan(san))).join(' ');
}
