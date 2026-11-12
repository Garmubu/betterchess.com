/* Tactics tab: puzzle of the day, puzzles grouped by theme, and the puzzle screen.
 * The theme stays hidden until the player asks for it or solves the puzzle,
 * so that recognising the pattern is part of the exercise. */
const Tactics = {
  puzzle: null,

  daily() { return TACTICS[(dayIndex() + 7) % TACTICS.length]; },
  number(x) { return TACTICS.indexOf(x) + 1; },
  playerColour(x) { return x.fen.split(' ')[1] === 'b' ? 1 : 0; },
  /* "White to play and mate in 2." */
  goal(x) {
    const side = this.playerColour(x) ? 'B' : 'W';
    return x.line[x.line.length - 1].includes('#') ? t('tactics.mate' + side, { n: Math.ceil(x.line.length / 2) }) : t('tactics.win' + side);
  },

  /* ---- puzzle (a Trainer, see trainer.js) ---- */
  messages: { good: 'tactics.good', wrong: 'tactics.wrong' },
  isActive(tr) { return this.puzzle === tr; },
  /* the last move may also be another listed move, or any other mate when the line ends in mate */
  accepts(tr, san, expected, isLast) {
    if (stripCheck(san) === stripCheck(expected)) return true;
    return isLast && (tr.x.alt.includes(san) || (expected.includes('#') && san.includes('#')));
  },
  finished(tr) {
    tr.showTheme = true;
    Store.recordExercise('tactics', tr.x.id, tr.clean);
  },

  start(id) {
    const x = TACTICS.find(q => q.id === id);
    if (!x) return;
    this.puzzle = Object.assign(Trainer.create(this, x.fen, x.line, this.playerColour(x)), { x, showTheme: false });
    App.render();
    Sound.play('start');
  },
  quit() { this.puzzle = null; App.render(); },
  square(sq) { Trainer.square(this.puzzle, sq); },
  /* the next unsolved puzzle after this one, or simply the next one */
  next() {
    const i = TACTICS.indexOf(this.puzzle.x);
    const after = TACTICS.slice(i + 1).concat(TACTICS.slice(0, i + 1));
    this.start((after.find(q => !Store.exercise('tactics', q.id).ok) || after[0]).id);
  },
  revealTheme() { this.puzzle.showTheme = true; this.paint(); },
  showMove() {
    if (Trainer.showMove(this.puzzle)) { this.puzzle.showTheme = true; this.paint(); }
  },

  /* ---- screens ---- */
  html() { return this.puzzle ? Trainer.html(false) : this.listHtml(); },

  listHtml() {
    const d = this.daily();
    const row = x => '<li><button class="op" data-act="puzzle" data-id="' + x.id + '" style="--c:' + sideColour(this.playerColour(x) ? 'b' : 'w') + '">' +
      '<span class="grow"><span class="o-name">' + t('tactics.puzzle', { n: this.number(x) }) + '</span><br><span class="o-sub">' + esc(this.goal(x)) + '</span></span>' +
      statusChip(Store.exercise('tactics', x.id), 'tactics.ok', 'tactics') + '</button></li>';
    const cards = Object.keys(THEMES).map(th => {
      const puzzles = TACTICS.filter(x => x.theme === th);
      if (!puzzles.length) return '';
      return '<div class="card theme"><div class="row between"><h3>' + t('theme.' + th) + '</h3>' + keyPiecesHtml(THEMES[th].keyPieces, false) + '</div>' +
        '<p class="small">' + esc(learnText('themes', th)[0]) + '</p>' +
        '<ul class="ops">' + puzzles.map(row).join('') + '</ul>' + learnHtml('themes', th, false) + '</div>';
    }).filter(Boolean);
    /* two columns, filled alternately */
    const column = parity => '<div class="stack">' + cards.filter((_, i) => i % 2 === parity).join('') + '</div>';
    return '<div class="card glow"><span class="label">' + t('tactics.daily') + ' · ' + t('tactics.puzzle', { n: this.number(d) }) + '</span>' +
        '<h2>' + esc(this.goal(d)) + '</h2><p class="muted">' + t('tactics.intro') + '</p>' +
        button('puzzle', t('tactics.solve'), 'primary wide', ' data-id="' + d.id + '"') + '</div>' +
      '<div class="row between"><h2>' + t('tactics.themes') + '</h2><span class="chip acc">' +
        t('tactics.count', { a: Store.solvedCount('tactics', TACTICS), b: TACTICS.length }) + '</span></div>' +
      '<div class="cols">' + column(0) + column(1) + '</div>';
  },

  paint() {
    const z = this.puzzle;
    if (!z || App.view() !== 'tactics') return;
    const x = z.x, total = Math.ceil(x.line.length / 2);
    if (!Trainer.paint(z, t('tactics.puzzle', { n: this.number(x) }), Math.min(Math.ceil(z.idx / 2), total) + ' / ' + total)) return App.render();
    const theme = t('theme.' + x.theme);

    if (z.done) {
      const result = z.clean ? t('tactics.clean') : z.errors ? t('tactics.errors', { n: z.errors }) : t('tactics.helped');
      $('#trCard').innerHTML = '<div class="card glow"><span class="label">' + t('tactics.solved') + ' · ' + theme + '</span>' +
        '<h2>' + esc(this.goal(x)) + '</h2>' + verdict(z.clean, result) + '<p class="line">' + x.line.map(s => esc(localSan(s))).join(' ') + '</p></div>';
      const gameOver = !z.pos.legal().length;
      $('#trActions').innerHTML = button('puzzle-next', t('tactics.next'), 'primary') + button('puzzle-again', t('drill.again')) +
        (gameOver ? '' : button('puzzle-play', t('drill.continue'))) + button('puzzle-quit', t('tactics.list'));
    } else {
      $('#trCard').innerHTML = '<div class="card"><span class="label">' + (z.showTheme ? t('tactics.theme', { th: theme }) : t('tactics.hidden')) + '</span>' +
        '<h2>' + esc(this.goal(x)) + '</h2>' + Trainer.feedback(z, t('tactics.intro')) + '</div>';
      $('#trActions').innerHTML = (z.showTheme ? '' : button('puzzle-theme', t('tactics.reveal'), 'sm')) +
        button('puzzle-hint', t('drill.hint'), 'sm') + button('puzzle-show', t('drill.show'), 'sm') +
        button('puzzle-again', t('drill.restart'), 'sm') + button('puzzle-quit', t('drill.quit'), 'sm');
    }
    Trainer.paintLearn(LANG + x.id + z.showTheme, z.showTheme ? learnHtml('themes', x.theme, true) : '');
  },
};
