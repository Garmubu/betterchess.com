/* Sounds, synthesised with the Web Audio API: no audio file to ship or license.
   Browsers only allow audio after a user gesture, hence wake() on the first pointer press. */
const Sound = {
  ctx: null,

  wake() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    } catch (e) { /* no audio available */ }
  },

  /* wooden "knock": filtered noise burst plus a falling sine thump */
  knock(at, freq, vol, len) {
    const c = this.ctx, n = Math.floor(c.sampleRate * len), buf = c.createBuffer(1, n, c.sampleRate), data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3);
    const noise = c.createBufferSource(), band = c.createBiquadFilter(), gain = c.createGain();
    noise.buffer = buf;
    band.type = 'bandpass'; band.frequency.value = freq; band.Q.value = 1.4;
    gain.gain.value = vol;
    noise.connect(band); band.connect(gain); gain.connect(c.destination);
    noise.start(at);

    const osc = c.createOscillator(), og = c.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * .28, at);
    osc.frequency.exponentialRampToValueAtTime(freq * .12, at + len);
    og.gain.setValueAtTime(vol * .9, at);
    og.gain.exponentialRampToValueAtTime(.001, at + len);
    osc.connect(og); og.connect(c.destination);
    osc.start(at); osc.stop(at + len + .02);
  },

  tone(at, freq, len, vol, type) {
    const c = this.ctx, osc = c.createOscillator(), gain = c.createGain();
    osc.type = type || 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(.0001, at);
    gain.gain.exponentialRampToValueAtTime(vol, at + .012);
    gain.gain.exponentialRampToValueAtTime(.001, at + len);
    osc.connect(gain); gain.connect(c.destination);
    osc.start(at); osc.stop(at + len + .03);
  },

  /* name → recipe; `at` is the start time */
  recipes: {
    move(at) { this.knock(at, 820, .5, .07); },
    capture(at) { this.knock(at, 1250, .75, .06); this.knock(at + .045, 620, .6, .09); },
    castle(at) { this.knock(at, 820, .5, .07); this.knock(at + .13, 700, .5, .07); },
    promote(at) { this.knock(at, 820, .5, .07); this.tone(at + .05, 784, .18, .16); this.tone(at + .13, 1175, .25, .16); },
    check(at) { this.knock(at, 900, .55, .07); this.tone(at + .03, 988, .16, .2, 'square'); this.tone(at + .14, 1319, .22, .18, 'square'); },
    mate(at) { this.knock(at, 700, .8, .12); this.tone(at + .04, 196, .7, .25, 'sawtooth'); this.tone(at + .04, 293.7, .7, .18, 'square'); },
    win(at) { [523, 659, 784, 1047].forEach((f, i) => this.tone(at + i * .13, f, .5, .2)); },
    lose(at) { [523, 440, 349, 262].forEach((f, i) => this.tone(at + i * .16, f, .55, .2)); },
    draw(at) { this.tone(at, 440, .4, .18); this.tone(at + .18, 440, .5, .18); },
    wrong(at) { this.tone(at, 160, .18, .2, 'square'); },
    start(at) { this.tone(at, 659, .14, .14); this.tone(at + .1, 880, .2, .14); },
  },

  play(name) {
    if (!Store.profile.sound || !this.ctx || this.ctx.state !== 'running') return;
    try { this.recipes[name].call(this, this.ctx.currentTime + .01); } catch (e) { /* ignore audio errors */ }
  },

  /* Sound for a move that was just played. pos is the position after the move. */
  forMove(m, pos, captured) {
    if (pos.inCheck()) return this.play(pos.legal().length ? 'check' : 'mate');
    const flag = Move.flag(m);
    if (flag === Move.CASTLE_K || flag === Move.CASTLE_Q) this.play('castle');
    else if (Move.promo(m)) this.play('promote');
    else if (captured || flag === Move.EN_PASSANT) this.play('capture');
    else this.play('move');
  },
};

document.addEventListener('pointerdown', () => Sound.wake(), true);
