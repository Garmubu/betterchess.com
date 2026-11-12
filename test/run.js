#!/usr/bin/env node
/* Tests without dependency: node test/run.js (or npm test).
 * Rules (perft), data (every line legal), translations (nothing missing), coach (move classes). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

/* load the browser scripts that do not touch the page into one shared context */
const SRC = path.join(__dirname, '..', 'src');
const ctx = vm.createContext({ navigator: { language: 'en', languages: ['en'] }, console });
const html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
const files = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
for (const f of files.filter(f => /^(chess|data|i18n)\//.test(f)).concat(['ui/util.js', 'ui/coach.js'])) {
  vm.runInContext(fs.readFileSync(path.join(SRC, f), 'utf8'), ctx, { filename: f });
}
const G = expr => vm.runInContext(expr, ctx);
const Chess = G('Chess'), OPENINGS = G('OPENINGS'), TACTICS = G('TACTICS'), THEMES = G('THEMES'), I18N = G('I18N');

let failures = 0, passes = 0;
function test(name, fn) {
  try { fn(); passes++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + e.message); }
}
function eq(actual, expected, what) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error((what || 'value') + ': expected ' + JSON.stringify(expected) + ', got ' + JSON.stringify(actual));
}
function playLine(fen, line, label) {
  const pos = Chess.create(fen);
  for (const san of line) {
    const m = pos.fromSan(san);
    if (!m) throw new Error(label + ': illegal move ' + san + ' in ' + pos.fen());
    if (pos.san(m) !== san) throw new Error(label + ': ' + san + ' should be written ' + pos.san(m));
    pos.make(m);
  }
  return pos;
}

console.log('rules');
const PERFT = [
  [Chess.START, 4, 197281],
  ['r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1', 3, 97862],
  ['8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1', 4, 43238],
  ['r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1', 3, 9467],
  ['rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8', 3, 62379],
];
for (const [fen, depth, nodes] of PERFT) test('perft ' + depth + ' ' + fen.split(' ')[0].slice(0, 20), () => eq(Chess.create(fen).perft(depth), nodes, 'nodes'));
test('engine finds a mate in one', () => eq(Chess.create('6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1').think({ depth: 3 })[0].uci, 'a1a8'));
test('fen round trip', () => eq(Chess.create(PERFT[1][0]).fen(), PERFT[1][0]));

console.log('data');
test('openings: unique ids, legal lines', () => {
  eq(new Set(OPENINGS.map(o => o.id)).size, OPENINGS.length, 'unique ids');
  for (const o of OPENINGS) {
    playLine(Chess.START, o.moves.split(' '), o.id);
    if (!['w', 'b'].includes(o.side)) throw new Error(o.id + ': side');
    if (!/^[kqrbnp]+$/.test(o.keyPieces)) throw new Error(o.id + ': keyPieces');
  }
});
test('puzzles: unique ids, known themes, legal lines, mates are mates', () => {
  eq(new Set(TACTICS.map(x => x.id)).size, TACTICS.length, 'unique ids');
  for (const x of TACTICS) {
    if (!THEMES[x.theme]) throw new Error(x.id + ': unknown theme ' + x.theme);
    const pos = playLine(x.fen, x.line, x.id);
    if (x.line[x.line.length - 1].includes('#') && (pos.legal().length || !pos.inCheck())) throw new Error(x.id + ': not mate');
    if (x.line.length % 2 === 0) throw new Error(x.id + ': the line must end with a player move');
  }
});
test('every theme has puzzles', () => { for (const th in THEMES) if (!TACTICS.some(x => x.theme === th)) throw new Error(th); });

console.log('translations');
const en = I18N.en, placeholders = s => [].concat(s).join(' ').match(/\{\w+\}/g) || [];
for (const code of Object.keys(I18N)) {
  const L = I18N[code];
  test(code + ': same keys and placeholders as English', () => {
    const missing = Object.keys(en.ui).filter(k => !(k in L.ui)), extra = Object.keys(L.ui).filter(k => !(k in en.ui));
    if (missing.length || extra.length) throw new Error('missing ' + missing + ' / unknown ' + extra);
    for (const k in en.ui) eq(placeholders(L.ui[k]).sort(), placeholders(en.ui[k]).sort(), k);
    if (L.pieces.length !== 5) throw new Error('pieces must be 5 letters');
  });
  test(code + ': every opening and theme explained', () => {
    for (const o of OPENINGS) {
      if (!L.openings[o.id] || L.openings[o.id].length !== 2) throw new Error('openings.' + o.id);
      if (!L.learn.openings[o.id] || L.learn.openings[o.id].length !== 4) throw new Error('learn.openings.' + o.id);
    }
    for (const th in THEMES) if (!L.learn.themes[th] || L.learn.themes[th].length !== 4) throw new Error('learn.themes.' + th);
  });
}
test('every key used by the interface exists', () => {
  const code = fs.readdirSync(path.join(SRC, 'ui')).map(f => fs.readFileSync(path.join(SRC, 'ui', f), 'utf8')).join('\n');
  const literal = [...code.matchAll(/\bt\('([\w.]+)'\s*[,)]/g)].map(m => m[1]);
  const listed = [...code.matchAll(/'((?:lobby|result|drill|tactics|openings|game|coach|profile|engine|sound|board|learn)\.\w+)'(?!\s*\+)/g)].map(m => m[1]);
  const dynamic = [
    ...Object.keys(G('CLASSES')).flatMap(c => ['class.' + c, 'comment.' + c]),
    ...['mate', 'stalemate', 'material', 'fifty', 'repetition', 'resign', 'time'].map(r => 'reason.' + r),
    ...Object.keys(THEMES).map(th => 'theme.' + th),
    ...OPENINGS.flatMap(o => o.style).map(s => 'tag.' + s),
    ...'nbrqkp'.split('').map(p => 'piece.' + p),
    ...['play', 'openings', 'tactics', 'profile'].map(v => 'nav.' + v),
    ...['W', 'B'].flatMap(s => ['tactics.mate' + s, 'tactics.win' + s]),
    ...['openings', 'tactics'].flatMap(p => [p + '.retry', p + '.new']),
  ];
  const missing = [...new Set(literal.concat(listed, dynamic))].filter(k => !(k in en.ui));
  if (missing.length) throw new Error('missing: ' + missing.join(', '));
  const unused = Object.keys(en.ui).filter(k => !literal.includes(k) && !listed.includes(k) && !dynamic.includes(k));
  if (unused.length) throw new Error('never used: ' + unused.join(', '));
});

console.log('coach');
const rate = G('rateMove'), line = (uci, cp) => ({ uci, cp, mate: null });
const base = { legalCount: 30, inBook: false, sacrifice: 0, pieceType: 2, recapture: false, after: null };
test('engine move is "best"', () => eq(rate({ ...base, uci: 'a', pre: [line('a', 30), line('b', 20)] }).cls, 'best'));
test('only good move is "great"', () => eq(rate({ ...base, uci: 'a', pre: [line('a', 150), line('b', -200)] }).cls, 'great'));
test('giving away a piece is a "blunder"', () => eq(rate({ ...base, uci: 'c', pre: [line('a', 50), line('c', -400)] }).cls, 'blunder'));
test('only legal move is "forced"', () => eq(rate({ ...base, legalCount: 1, uci: 'c', pre: [line('a', 50), line('c', -400)] }).cls, 'forced'));
test('sound sacrifice is "brilliant"', () => eq(rate({ ...base, sacrifice: 300, uci: 'a', pre: [line('a', 80), line('b', 60)] }).cls, 'brilliant'));
test('Elo: +16 for a win after placement', () => eq(G('eloDelta')(1, 20), 16));

console.log('\n' + passes + ' passed, ' + failures + ' failed');
process.exit(failures ? 1 : 0);
