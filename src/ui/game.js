/* Games against the engine: 10-minute clocks, ranked (no coach, Elo at stake) or casual
 * (optional live coach, take-backs allowed).
 *
 * Flow: on the player's turn the engine analyses the position (pre). After the player's move,
 * the engine analyses the reply position (after); both are used to rate the move, then the bot
 * picks its move from the same analysis.
 */
const CLOCK_MS = 10 * 60 * 1000;
const RESULT_KEYS = { w: 'result.win', d: 'result.draw', l: 'result.loss' };
const LOW_TIME_MS = 30000;

const Game = {
  current: null,
  lobby: { level: null, colour: 'random', coach: true },

  /* o: { mode: 'ranked'|'casual', kind: 'ranked'|'coached'|'custom' (for "play again"),
          coach, colour (0|1), botElo, fen (optional start position), opening (optional id) } */
  start(o) {
    const pos = Chess.create(o.fen || Chess.START);
    this.current = Object.assign(newSelection(), {
      pos, mode: o.mode, kind: o.kind, coachOn: !!o.coach, me: o.colour, botElo: o.botElo,
      fens: [pos.fen()], keys: [pos.key()], moves: [],
      clock: [CLOCK_MS, CLOCK_MS], tickAt: Date.now(), running: pos.turn(),
      over: null, done: false, thinking: false,
      pre: null, preFen: '',      // analysis of the position before the player's move
      coach: null,                // null | { pending: true } | { rec }: what the coach box shows
      evalWhite: 0,               // last evaluation, White's view, for the eval bar
      view: -1,                   // ply shown when reviewing, -1 = live
      promo: null, resignArmedAt: 0,
      opening: o.opening || null,
      outOfBook: !!o.fen,         // a game from a drill or a puzzle starts out of book
    });
    App.go('play');
    App.render();
    Sound.play('start');
    this.step(this.current);
  },

  isCurrent(g) { return this.current === g && !g.over; },
  tick(g) {
    if (g.running < 0) return;
    const now = Date.now();
    g.clock[g.running] = Math.max(0, g.clock[g.running] - (now - g.tickAt));
    g.tickAt = now;
  },
  /* evaluation from the player's view → White's view */
  setEval(g, cpForPlayer) { g.evalWhite = g.me === 0 ? cpForPlayer : -cpForPlayer; },

  endState(g) {
    const p = g.pos;
    if (!p.legal().length) return p.inCheck() ? { winner: p.turn() ^ 1, reason: 'mate' } : { winner: -1, reason: 'stalemate' };
    if (p.insufficient()) return { winner: -1, reason: 'material' };
    if (p.half() >= 100) return { winner: -1, reason: 'fifty' };
    const key = p.key();
    if (g.keys.filter(k => k === key).length >= 3) return { winner: -1, reason: 'repetition' };
    return null;
  },

  record(g, rec) {
    g.moves.push(rec);
    g.fens.push(g.pos.fen());
    g.keys.push(g.pos.key());
    const name = Book.openingAt(g.pos.key());
    if (name && !g.outOfBook) g.opening = name;
  },

  step(g) {
    const end = this.endState(g);
    if (end) return this.finish(g, end);
    if (g.pos.turn() !== g.me) return this.botTurn(g, null);
    g.thinking = false;
    const fen = g.pos.fen();
    g.preFen = fen;
    g.pre = Engine.analyse(fen, { multipv: 3 });
    g.pre.then(lines => {
      if (this.isCurrent(g) && g.preFen === fen && lines && lines.length) { this.setEval(g, lines[0].cp); this.paintEval(); }
    }, () => {});
    this.paint();
  },

  playerMove(m) {
    const g = this.current;
    this.tick(g);
    const pos = g.pos, from = Move.from(m), to = Move.to(m), keyBefore = pos.key(), uci = Chess.uci(m), prev = g.moves[g.moves.length - 1];
    const capturedValue = Move.flag(m) === Move.EN_PASSANT ? 100 : Chess.VAL[pos.get(to) & 7];
    const inBook = !g.outOfBook && Book.has(keyBefore, uci);
    if (!inBook) g.outOfBook = true;
    /* what the coach needs to rate the move, once the analyses are in */
    const facts = {
      uci, inBook, pre: g.pre,
      legalCount: pos.legal().length,
      pieceType: pos.get(from) & 7,
      recapture: !!(prev && prev.capture && prev.to === to),
      sacrifice: 0,
    };
    const rec = { san: pos.san(m), uci, from, to, by: 'me', capture: capturedValue > 0, cls: null, loss: null };
    playMove(pos, m);
    facts.sacrifice = Math.max(0, pos.see(to) - capturedValue);
    this.record(g, rec);
    clearSelection(g);
    g.promo = null;
    g.coach = { pending: true };
    g.running = pos.turn();
    g.tickAt = Date.now();

    const end = this.endState(g);
    if (!end) return this.botTurn(g, { rec, facts });
    /* the player's move ended the game: rate it against the final score */
    g.over = end;
    g.running = -1;
    this.paint();
    const final = end.winner === g.me ? 9990 : 0;
    Promise.resolve(facts.pre)
      .then(pre => { if (pre && pre.length) this.rate(g, rec, facts, pre, null, final); }, () => {})
      .then(() => this.finish(g, end));
  },

  rate(g, rec, facts, pre, after, final) {
    const r = rateMove(Object.assign({}, facts, { pre, after, final }));
    rec.cls = r.cls;
    rec.loss = r.loss;
    if (after && after.length) this.setEval(g, -after[0].cp);
    else if (final !== undefined && final !== null) this.setEval(g, final);
    g.coach = { rec };
  },

  /* pending: the player's last move, still to be rated with this analysis */
  async botTurn(g, pending) {
    g.thinking = true;
    this.paint();
    const fen = g.pos.fen(), startedAt = Date.now();
    let lines = null;
    try { lines = await Engine.analyse(fen, { multipv: 5 }); } catch (e) { /* bot plays without analysis */ }
    if (!this.isCurrent(g)) return;
    if (pending) {
      let pre = null;
      try { pre = await pending.facts.pre; } catch (e) {}
      if (!this.isCurrent(g)) return;
      if (pre && pre.length && lines && lines.length) this.rate(g, pending.rec, pending.facts, pre, lines, null);
      else g.coach = null;
      this.paint();
    }

    const pos = g.pos, key = pos.key();
    let uci = !g.outOfBook && Math.random() < 0.92 ? Book.randomMove(key) : null;
    const fromBook = !!uci;
    if (!uci) { uci = botMove(lines, g.botElo, pos); g.outOfBook = true; }

    /* human-like thinking time, short when the bot is low on time */
    let think = g.moves.length < 10 ? 500 + Math.random() * 900 : 900 + Math.random() * 2400;
    if (g.clock[g.me ^ 1] < 60000) think = 300;
    await sleep(Math.max(0, think - (Date.now() - startedAt)));
    if (!this.isCurrent(g)) return;

    this.tick(g);
    const m = pos.fromUci(uci) || pos.legal()[0], to = Move.to(m);
    const rec = { san: pos.san(m), uci: Chess.uci(m), from: Move.from(m), to, by: 'bot', cls: null };
    if (lines) {
      const line = lines.find(x => x.uci === rec.uci);
      if (line) this.setEval(g, -line.cp);
    }
    rec.capture = playMove(pos, m);
    this.record(g, rec);
    if (!fromBook) g.outOfBook = true;
    g.running = pos.turn();
    g.tickAt = Date.now();
    g.thinking = false;
    this.step(g);
  },

  finish(g, end) {
    if (g.done) return;
    Object.assign(g, { done: true, over: end, running: -1, thinking: false, promo: null });
    clearSelection(g);
    const result = end.winner === g.me ? 'w' : end.winner < 0 ? 'd' : 'l';
    const rated = g.moves.filter(x => x.by === 'me' && x.cls);
    g.counts = {};
    let total = 0, n = 0;
    for (const x of rated) {
      g.counts[x.cls] = (g.counts[x.cls] || 0) + 1;
      if (x.loss !== null && x.cls !== 'book' && x.cls !== 'forced') { total += accuracy(x.loss); n++; }
    }
    g.accuracy = n ? Math.round(total / n) : null;
    g.result = result;
    g.delta = 0;

    const p = Store.profile;
    /* a casual game abandoned before any move is not recorded */
    if (g.moves.length >= 2 || g.mode === 'ranked') {
      if (g.mode === 'ranked') {
        g.delta = eloDelta(result === 'w' ? 1 : result === 'd' ? 0.5 : 0, p.games);
        p.elo = Math.max(100, p.elo + g.delta);
        p.best = Math.max(p.best, p.elo);
        p.games++;
        p.record[result]++;
      }
      Store.addGame({
        at: Date.now(), mode: g.mode, result, colour: g.me, elo: p.elo, delta: g.delta, opponent: g.botElo,
        moves: Math.ceil(g.moves.length / 2), accuracy: g.accuracy, reason: end.reason,
      });
    }
    if (this.current === g) {
      this.paint();
      setTimeout(() => Sound.play(result === 'w' ? 'win' : result === 'l' ? 'lose' : 'draw'), end.reason === 'mate' ? 650 : 60);
    }
  },

  /* ---- player actions ---- */
  square(sq) {
    const g = this.current;
    if (!g || g.over || g.view >= 0 || g.pos.turn() !== g.me || g.promo) return;
    const moves = pickMove(g, g.pos, sq, g.me);
    if (moves && moves.length > 1) g.promo = moves;
    else if (moves) return this.playerMove(moves[0]);
    this.paintBoard();
  },
  promote(m) {
    const g = this.current;
    if (!g || !g.promo) return;
    g.promo = null;
    if (m) this.playerMove(m);
    else this.paintBoard();
  },
  resign() {
    const g = this.current;
    if (!g || g.over) return;
    if (isArmed(g.resignArmedAt)) { this.tick(g); return this.finish(g, { winner: g.me ^ 1, reason: 'resign' }); }
    g.resignArmedAt = Date.now();
    this.paintActions();
    setTimeout(() => { if (this.isCurrent(g)) this.paintActions(); }, ARM_MS + 100);
  },
  canUndo(g) { return !g.over && g.mode !== 'ranked' && g.pos.turn() === g.me && g.moves.length >= 2; },
  undo() {
    const g = this.current;
    if (!g || !this.canUndo(g)) return;
    g.pos.unmake(); g.pos.unmake();
    g.moves.length -= 2; g.fens.length -= 2; g.keys.length -= 2;
    clearSelection(g);
    g.coach = null;
    g.view = -1;
    this.step(g);
  },
  review(ply) {
    const g = this.current;
    if (!g) return;
    g.view = ply === g.moves.length ? -1 : ply;
    clearSelection(g);
    this.paintBoard(); this.paintMoves(); this.paintActions();
  },
  quit() { this.current = null; App.render(); },
  again() { App.actions[this.current.kind](); },

  /* ---- screen ---- */
  html() {
    const g = this.current;
    if (!g) return this.lobbyHtml();
    return '<section class="game"><div class="left">' +
      '<div class="pbar" id="pTop"></div>' +
      '<div class="bwrap"><div class="evalbar' + (g.me ? ' flip' : '') + '" id="evalbar" aria-hidden="true"><i id="evFill"></i></div><div class="board" id="board"></div></div>' +
      '<div class="pbar" id="pBot"></div></div>' +
      '<div class="side"><div id="coach"></div><div class="moves" id="moves" aria-label="' + t('game.movesAria') + '"></div>' +
      '<div class="row" id="actions"></div><div id="resultBox"></div></div></section>';
  },

  paint() {
    if (App.view() !== 'play' || !this.current) return;
    if (!$('#coach')) return App.render();
    this.paintBars(); this.paintBoard(); this.paintEval(); this.paintCoach(); this.paintMoves(); this.paintActions(); this.paintResult();
  },

  paintBars() {
    const g = this.current, bot = g.me ^ 1;
    const name = Engine.kind === 'stockfish' ? 'Stockfish' : t('engine.short');
    $('#pTop').innerHTML = '<span class="who"><i class="' + (bot ? 'b' : 'w') + '"></i>' + esc(name) + ' · ' + g.botElo +
      (g.thinking && !g.over ? ' <span class="chip">' + t('game.thinking') + '</span>' : '') + '</span><span class="clock" id="ck' + bot + '"></span>';
    $('#pBot').innerHTML = '<span class="who"><i class="' + (g.me ? 'b' : 'w') + '"></i>' + t('game.you') + ' · ' + Store.profile.elo +
      ' <span class="chip">' + t(g.mode === 'ranked' ? 'game.ranked' : 'game.casual') + '</span></span><span class="clock" id="ck' + g.me + '"></span>';
    this.paintClocks();
  },

  paintClocks() {
    const g = this.current;
    if (!g) return;
    for (const c of [0, 1]) {
      const el = $('#ck' + c);
      if (!el) continue;
      el.textContent = formatClock(g.clock[c]);
      el.className = 'clock' + (g.running === c ? (g.clock[c] < LOW_TIME_MS ? ' low' : ' on') : '');
    }
  },

  paintBoard() {
    const g = this.current, el = $('#board');
    if (!el) return;
    const live = g.view < 0, ply = live ? g.moves.length : g.view;
    const pos = live ? g.pos : Chess.create(g.fens[ply]), last = ply > 0 ? g.moves[ply - 1] : null;
    /* the coach badge sits on the player's last rated move, unless the bot has since landed there */
    let badge = null;
    if (g.coachOn) {
      const mine = g.moves.slice(Math.max(0, ply - 2), ply).reverse().find(x => x.by === 'me');
      if (mine && mine.cls) badge = { sq: mine.to, cls: mine.cls };
      if (badge && last && last.by === 'bot' && last.to === badge.sq) badge = null;
    }
    drawBoard(el, {
      pos, flip: g.me === 1, last: last ? [last.from, last.to] : null, badge,
      sel: live ? g.sel : -1, targets: live ? g.targets : null, promo: live ? g.promo : null,
    });
  },

  paintEval() {
    const g = this.current, bar = $('#evalbar');
    if (!bar) return;
    bar.hidden = !g.coachOn;
    $('#evFill').style.height = (winChance(g.evalWhite) * 100).toFixed(1) + '%';
  },

  paintCoach() {
    const g = this.current, el = $('#coach');
    if (!el) return;
    const opening = g.opening ? ' · ' + esc(openingName(openingById(g.opening))) : '';
    const box = (cls, label, body) => '<div class="card coach' + cls + '"' + (cls.includes('c-') ? ' aria-live="polite"' : '') + '><span class="label">' + label + '</span>' + body + '</div>';
    if (!g.coachOn) {
      el.innerHTML = box(' soft', t(g.mode === 'ranked' ? 'coach.ranked' : 'coach.noCoach') + opening, '<p class="muted small">' + t('coach.noFeedback') + '</p>');
    } else if (g.coach && g.coach.rec && g.coach.rec.cls) {
      const r = g.coach.rec;
      el.innerHTML = box(' c-' + r.cls, t('coach.coach') + ' · ' + esc(localSan(r.san)),
        '<div class="ttl"><b>' + CLASSES[r.cls] + '</b>' + t('class.' + r.cls) + '<span class="chip">' + formatEval(g.evalWhite) + '</span></div>' +
        '<p>' + esc(t('comment.' + r.cls)) + '</p>');
    } else if (g.coach && g.coach.pending) {
      el.innerHTML = box('', t('coach.coach'), '<p class="muted">' + t('coach.analysing') + '</p>');
    } else {
      const state = g.over ? 'coach.over' : g.pos.turn() === g.me ? 'coach.yourTurn' : 'coach.engineThinks';
      el.innerHTML = box('', t('coach.coach') + opening, '<p class="muted">' + t(state) + '</p>');
    }
  },

  paintMoves() {
    const g = this.current, el = $('#moves');
    if (!el) return;
    const [, side, , , , fullmove] = g.fens[0].split(' ');
    const first = +fullmove || 1, blackStarts = side === 'b', shown = g.view < 0 ? g.moves.length : g.view;
    const showClass = g.coachOn || g.done;
    let h = '';
    g.moves.forEach((m, i) => {
      const ply = i + (blackStarts ? 1 : 0);
      if (ply % 2 === 0 || i === 0) h += '<span class="n">' + (first + Math.floor(ply / 2)) + (ply % 2 ? '…' : '.') + '</span>';
      const rated = m.cls && showClass;
      h += '<button data-act="review" data-ply="' + (i + 1) + '"' + (shown === i + 1 ? ' aria-current="true"' : '') +
        ' class="' + (rated && m.by === 'me' ? 'mine c-' + m.cls : '') + '"' + (rated ? ' title="' + t('class.' + m.cls) + '"' : '') + '>' +
        esc(localSan(m.san)) + '</button>';
    });
    el.innerHTML = h || '<span class="muted small">' + t('game.movesEmpty') + '</span>';
    if (g.view < 0) el.scrollTop = el.scrollHeight;
  },

  paintActions() {
    const g = this.current, el = $('#actions');
    if (!el) return;
    let h = '';
    if (g.view >= 0) h += button('live', t('game.live'), 'sm primary');
    if (!g.over) {
      if (g.mode !== 'ranked') h += button('undo', t('game.undo'), 'sm', this.canUndo(g) ? '' : ' disabled');
      h += button('resign', t(isArmed(g.resignArmedAt) ? 'game.resignConfirm' : 'game.resign'), 'sm ko');
    }
    el.innerHTML = h;
  },

  paintResult() {
    const g = this.current, el = $('#resultBox');
    if (!el) return;
    if (!g.done) { el.innerHTML = ''; return; }
    let h = '<div class="card glow result"><span class="label">' + esc(t('reason.' + g.over.reason)) + '</span>' +
      '<h2>' + t(RESULT_KEYS[g.result]) + '</h2>';
    if (g.mode === 'ranked') h += '<div class="row"><span class="delta ' + (g.delta > 0 ? 'up' : g.delta < 0 ? 'down' : '') + '">' + formatDelta(g.delta) + '</span>' +
      '<span>' + t('result.newElo', { elo: Store.profile.elo }) + '</span></div>';
    if (g.accuracy !== null) h += '<p>' + t('result.accuracy', { n: g.accuracy }) + '</p>';
    h += '<div class="tally">' + SUMMARY_CLASSES.map(c =>
      '<div class="c-' + c + '"><b>' + CLASSES[c] + '</b>' + t('class.' + c) + '<span class="k">' + (g.counts[c] || 0) + '</span></div>').join('') + '</div>';
    h += '<p class="muted small">' + t('result.review') + '</p>';
    h += '<div class="row">' + button('again', t('result.again'), 'primary') + button('lobby', t('result.back')) + '</div></div>';
    el.innerHTML = h;
  },

  /* ---- lobby ---- */
  defaultLevel() { return Math.round(Store.profile.elo / 50) * 50; },
  lobbyHtml() {
    const p = Store.profile, l = this.lobby, level = l.level || this.defaultLevel();
    const colours = [['white', 'lobby.white'], ['random', 'lobby.random'], ['black', 'lobby.black']];
    return '<div class="cols3">' +
      '<div class="card glow"><span class="label">' + t('lobby.rankedLabel') + '</span>' +
        '<div class="row between"><div class="elo">' + p.elo + '</div><div class="muted small right">' +
        t('lobby.wdl', p.record) + '<br>' + t('lobby.record', { n: p.best }) + '</div></div>' +
        '<p>' + t('lobby.rankedText', { k: eloK(p.games) / 2 }) + '</p>' +
        (p.games < PLACEMENT_GAMES ? '<p class="muted small">' + t('lobby.placement', { n: PLACEMENT_GAMES - p.games }) + '</p>' : '') +
        button('ranked', t('lobby.rankedBtn'), 'primary wide') + '</div>' +
      '<div class="card"><span class="label">' + t('lobby.coachLabel') + '</span><h2>' + t('lobby.coachTitle') + '</h2>' +
        '<p>' + t('lobby.coachText') + '</p><p class="muted small">' + t('lobby.coachSub', { elo: p.elo }) + '</p>' +
        button('coached', t('lobby.coachBtn'), 'wide') + '</div>' +
      '<div class="card"><span class="label">' + t('lobby.customLabel') + '</span>' +
        '<div class="row between"><label for="lvl">' + t('lobby.level') + '</label><span class="stat-num" id="lvlOut">' + level + '</span></div>' +
        '<input type="range" id="lvl" min="300" max="2500" step="50" value="' + level + '">' +
        '<div class="seg" role="group" aria-label="' + t('lobby.color') + '">' +
          colours.map(([c, key]) => '<button data-act="colour" data-colour="' + c + '" aria-pressed="' + (l.colour === c) + '">' + t(key) + '</button>').join('') + '</div>' +
        '<label class="switch" for="coachSw"><input type="checkbox" id="coachSw"' + (l.coach ? ' checked' : '') + '><span>' + t('lobby.coachSwitch') + '</span></label>' +
        button('custom', t('lobby.customBtn'), 'wide') + '</div>' +
      '</div>';
  },
};

const formatClock = ms => { const s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const formatDelta = d => (d > 0 ? '+' : d < 0 ? '−' : '±') + Math.abs(d);
/* centipawns → "+1.4", mates → "+M3" */
function formatEval(cp) {
  if (Math.abs(cp) > 9000) return (cp > 0 ? '+' : '−') + 'M' + Math.round((10000 - Math.abs(cp)) / 10);
  return (cp > 0 ? '+' : cp < 0 ? '−' : '') + localDecimal((Math.abs(cp) / 100).toFixed(1));
}

/* clocks */
setInterval(() => {
  const g = Game.current;
  if (!g || g.over || g.running < 0) return;
  Game.tick(g);
  if (g.clock[g.running] <= 0) return Game.finish(g, { winner: g.running ^ 1, reason: 'time' });
  Game.paintClocks();
}, 200);
