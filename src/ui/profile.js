/* Profile tab: Elo chart, totals, recent games, reset. */
const Profile = {
  resetArmedAt: 0,

  eloChart(ranked) {
    if (!ranked.length) return '<p class="muted small">' + t('profile.graphEmpty') + '</p>';
    const pts = [DEFAULT_PROFILE.elo].concat(ranked.map(x => x.elo));
    const lo = Math.min(...pts) - 40, hi = Math.max(...pts) + 40, W = 320, H = 120;
    const X = i => 8 + i * (W - 16) / Math.max(1, pts.length - 1), Y = v => H - 10 - (v - lo) * (H - 24) / (hi - lo);
    let path = 'M' + X(0) + ' ' + Y(pts[0]);
    for (let i = 1; i < pts.length; i++) path += ' H' + X(i) + ' V' + Y(pts[i]); // pixel-style steps
    const last = pts.length - 1, label = (y, v) => '<text x="6" y="' + y + '" fill="#a9bfae" font-size="10" font-family="Pixelify Sans,monospace">' + v + '</text>';
    return '<svg class="graph" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(t('profile.graphAria', { a: pts[0], b: pts[last] })) + '">' +
      '<path d="' + path + '" fill="none" stroke="#58c46f" stroke-width="2" shape-rendering="crispEdges"/>' +
      '<rect x="' + (X(last) - 3) + '" y="' + (Y(pts[last]) - 3) + '" width="6" height="6" fill="#c4f5a6"/>' +
      label(12, Math.max(...pts)) + label(H - 3, Math.min(...pts)) + '</svg>';
  },

  html() {
    const p = Store.profile, ranked = p.history.filter(x => x.mode === 'ranked');
    const games = p.history.slice(-12).reverse().map(x =>
      '<li><span class="r ' + x.result + '">' + t(RESULT_KEYS[x.result]) + '</span>' +
      '<span class="grow">' + esc(t('profile.row', { color: sideName(x.colour), opp: x.opponent, n: x.moves, reason: t('reason.' + x.reason) })) +
      (x.accuracy !== null && x.accuracy !== undefined ? ' · ' + x.accuracy + ' %' : '') + '</span>' +
      '<span class="chip">' + (x.mode === 'ranked' ? formatDelta(x.delta) : t('game.casual')) + '</span></li>').join('');
    const stat = (label, value, total) => '<div class="card"><span class="label">' + t(label) + '</span><span class="stat-num">' + value +
      (total ? '<small class="muted"> / ' + total + '</small>' : '') + '</span></div>';
    const engineNote = Engine.kind === 'stockfish' ? t('engine.noteSf', { name: esc(Engine.name) }) : t('engine.noteMini');

    return '<div class="cols"><div class="stack">' +
        '<div class="card glow"><span class="label">' + t('profile.elo') + '</span><div class="elo">' + p.elo + '</div>' + this.eloChart(ranked) + '</div>' +
        '<div class="stats">' + stat('profile.games', p.games) + stat('profile.best', p.best) +
          stat('profile.openings', Store.solvedCount('openings', OPENINGS), OPENINGS.length) +
          stat('profile.tactics', Store.solvedCount('tactics', TACTICS), TACTICS.length) + '</div>' +
        '<p class="muted small">' + t('profile.wdl', p.record) + '</p></div>' +
      '<div class="stack"><div class="card"><span class="label">' + t('profile.last') + '</span>' +
        (games ? '<ul class="hist">' + games + '</ul>' : '<p class="muted">' + t('profile.none') + '</p>') + '</div>' +
        '<p class="muted small">' + t(Store.synced ? 'profile.synced' : 'profile.local') + ' ' + engineNote + '</p>' +
        '<div class="row">' + button('reset', t(isArmed(this.resetArmedAt) ? 'profile.resetConfirm' : 'profile.reset'), 'sm ko') + '</div>' +
      '</div></div>';
  },

  reset() {
    if (isArmed(this.resetArmedAt)) {
      this.resetArmedAt = 0;
      Store.reset();
      toast(t('profile.resetDone'));
      return App.render();
    }
    this.resetArmedAt = Date.now();
    App.render();
    setTimeout(() => { if (App.view() === 'profile') App.render(); }, ARM_MS + 100);
  },
};
