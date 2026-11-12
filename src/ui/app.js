/* The shell: tabs (from the URL hash), header controls, and every click of the page.
 * Buttons say what they do with data-act="<action>" (plus data-* arguments); App.actions maps
 * each action to its handler, so the markup never holds inline JavaScript.
 */
const SCREENS = { play: Game, openings: Openings, tactics: Tactics, profile: Profile };

const App = {
  view() {
    const name = location.hash.slice(1);
    return SCREENS[name] ? name : 'play';
  },
  go(name) { if (this.view() !== name) location.hash = name; },

  render() {
    const name = this.view(), screen = SCREENS[name];
    document.querySelectorAll('.nav button').forEach(b => {
      if (b.dataset.view === name) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    $('#view').innerHTML = screen.html();
    if (screen.paint) screen.paint();
    this.paintEngine();
    this.paintSound();
  },

  /* re-render unless the player is in the middle of a game or an exercise (used after a sync) */
  refreshIfIdle() {
    this.applyLang();
    if (!Game.current && !Openings.drill && !Tactics.puzzle) this.render();
    else if (this.view() === 'profile') this.render();
  },

  applyLang() {
    setLang(Store.profile.lang);
    const select = $('#langSel');
    if (!select.options.length) select.innerHTML = Object.keys(I18N).map(code => '<option value="' + code + '">' + I18N[code].name + '</option>').join('');
    select.value = LANG;
    select.setAttribute('aria-label', t('language'));
    document.querySelectorAll('.nav button').forEach(b => { b.querySelector('span').textContent = t('nav.' + b.dataset.view); });
  },

  paintEngine() {
    const chip = $('#engChip');
    chip.textContent = Engine.name;
    chip.className = 'chip ' + (Engine.kind === 'stockfish' ? 'ok' : 'warn');
  },

  paintSound() {
    const b = $('#sndBtn'), on = !!Store.profile.sound;
    b.textContent = t(on ? 'sound.on' : 'sound.off');
    b.setAttribute('aria-pressed', String(on));
  },

  actions: {
    nav: el => App.go(el.dataset.view),
    square: el => SCREENS[App.view()].square(+el.dataset.sq),
    sound() {
      const p = Store.profile;
      p.sound = !p.sound;
      Store.save();
      App.paintSound();
      if (p.sound) { Sound.wake(); Sound.play('move'); }
    },

    /* lobby and game */
    ranked: () => Game.start({ mode: 'ranked', kind: 'ranked', coach: false, colour: randInt(2), botElo: Store.profile.elo }),
    coached: () => Game.start({ mode: 'casual', kind: 'coached', coach: true, colour: randInt(2), botElo: Store.profile.elo }),
    custom() {
      const l = Game.lobby, colour = { white: 0, black: 1 }[l.colour];
      Game.start({ mode: 'casual', kind: 'custom', coach: l.coach, colour: colour === undefined ? randInt(2) : colour, botElo: l.level || Game.defaultLevel() });
    },
    colour(el) { Game.lobby.colour = el.dataset.colour; App.render(); },
    promote: el => Game.promote(+el.dataset.move),
    review: el => Game.review(+el.dataset.ply),
    live: () => Game.current && Game.review(Game.current.moves.length),
    undo: () => Game.undo(),
    resign: () => Game.resign(),
    again: () => Game.again(),
    lobby: () => Game.quit(),

    /* openings */
    drill(el) { Openings.start(el.dataset.id); scrollTo(0, 0); },
    'drill-again': withDrill(d => Openings.start(d.op.id)),
    'drill-quit': withDrill(() => Openings.quit()),
    'drill-line': withDrill(() => Openings.toggleLine()),
    'drill-hint': withDrill(d => Trainer.hint(d)),
    'drill-show': withDrill(d => { if (Trainer.showMove(d)) Openings.paint(); }),
    'drill-play': withDrill(d => Trainer.continueAgainstEngine(d, d.op.id)),

    /* tactics */
    puzzle(el) { Tactics.start(el.dataset.id); scrollTo(0, 0); },
    'puzzle-again': withPuzzle(z => Tactics.start(z.x.id)),
    'puzzle-next': withPuzzle(() => { Tactics.next(); scrollTo(0, 0); }),
    'puzzle-quit': withPuzzle(() => Tactics.quit()),
    'puzzle-theme': withPuzzle(() => Tactics.revealTheme()),
    'puzzle-hint': withPuzzle(z => Trainer.hint(z)),
    'puzzle-show': withPuzzle(() => Tactics.showMove()),
    'puzzle-play': withPuzzle(z => Trainer.continueAgainstEngine(z, null)),

    /* profile */
    reset: () => Profile.reset(),
  },
};

function withDrill(fn) { return () => { if (Openings.drill) fn(Openings.drill); }; }
function withPuzzle(fn) { return () => { if (Tactics.puzzle) fn(Tactics.puzzle); }; }

document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  const action = el && App.actions[el.dataset.act];
  if (action) action(el);
});
document.addEventListener('input', e => {
  if (e.target.id === 'lvl') { Game.lobby.level = +e.target.value; $('#lvlOut').textContent = Game.lobby.level; }
});
document.addEventListener('change', e => {
  if (e.target.id === 'coachSw') Game.lobby.coach = e.target.checked;
  if (e.target.id === 'langSel') { Store.profile.lang = e.target.value; Store.save(); App.applyLang(); App.render(); }
});
window.addEventListener('hashchange', () => { App.render(); scrollTo(0, 0); });
