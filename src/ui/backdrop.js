/* Animated background: a dark cave with glowing mushrooms and drifting spores, drawn at a quarter
   of the screen resolution and scaled up for the pixel look. Static if the user prefers reduced motion. */
(function cave() {
  const canvas = $('#cave'), ctx = canvas.getContext('2d');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, spores = [], mushrooms = [];

  function resize() {
    w = canvas.width = Math.ceil(innerWidth / 4);
    h = canvas.height = Math.ceil(innerHeight / 4);
    spores = Array.from({ length: Math.round(w * h / 700) }, () => ({
      x: Math.random() * w, y: Math.random() * h, speed: 2 + Math.random() * 5, phase: Math.random() * 6.28, size: Math.random() < .15 ? 2 : 1,
    }));
    const count = Math.max(4, Math.round(w / 26));
    mushrooms = Array.from({ length: count }, (_, i) => ({ x: (i + .2 + Math.random() * .6) * w / count, size: 2 + randInt(3), phase: Math.random() * 6.28 }));
    draw(0);
  }

  function draw(time) {
    ctx.fillStyle = '#060b08';
    ctx.fillRect(0, 0, w, h);
    /* stalactites */
    ctx.fillStyle = '#0a120d';
    for (let i = 0; i < w; i += 7) {
      const a = 3 + (i * 37) % 11, b = 2 + (i * 13) % 5;
      ctx.fillRect(i, 0, 5, a);
      ctx.fillRect(i + 1, a, 3, b);
      ctx.fillRect(i + 2, a + b, 1, 2);
    }
    /* mushrooms with a pulsing glow */
    for (const m of mushrooms) {
      const y = h - 3, glow = .55 + .25 * Math.sin(time * .0012 + m.phase), r = m.size * 7, cy = y - m.size * 2, x = m.x | 0;
      const halo = ctx.createRadialGradient(m.x, cy, 0, m.x, cy, r);
      halo.addColorStop(0, 'rgba(98,224,127,' + (.22 * glow) + ')');
      halo.addColorStop(1, 'rgba(98,224,127,0)');
      ctx.fillStyle = halo;
      ctx.fillRect(m.x - r, cy - r, r * 2, r * 2);
      ctx.fillStyle = '#1d3324';
      ctx.fillRect(x, cy, 1, m.size * 2 + 3);
      ctx.fillStyle = 'rgba(196,245,166,' + (.55 + .4 * glow) + ')';
      ctx.fillRect(x - m.size, cy - 1, m.size * 2 + 1, 1);
      ctx.fillRect(x - m.size + 1, cy - 2, m.size * 2 - 1, 1);
    }
    ctx.fillStyle = '#0a120d';
    ctx.fillRect(0, h - 2, w, 2);
    /* spores rising */
    for (const s of spores) {
      const alpha = .12 + .3 * (.5 + .5 * Math.sin(time * .001 + s.phase)), y = ((s.y - time * .001 * s.speed) % h + h) % h;
      ctx.fillStyle = 'rgba(150,240,160,' + alpha.toFixed(3) + ')';
      ctx.fillRect(s.x | 0, y | 0, s.size, s.size);
    }
  }

  resize();
  addEventListener('resize', resize);
  if (!still) setInterval(() => { if (!document.hidden) draw(performance.now()); }, 130);
})();
