/* Engine access. Stockfish (stockfish.js 10, GPLv3) is loaded from a CDN inside a Web Worker;
 * if every CDN fails, or Stockfish stops answering, the built-in engine of core.js takes over,
 * itself running in a worker built from ChessLib's source.
 *
 * analyse(fen, { multipv }) → Promise of [{ uci, cp, mate, depth }], best first, scores from the
 * side to move's view. Requests are queued: one analysis at a time.
 */
const STOCKFISH_URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js',
  'https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js',
  'https://unpkg.com/stockfish.js@10.0.2/stockfish.js',
];
const STOCKFISH_LOAD_TIMEOUT = 25000;
const STOCKFISH_MOVE_TIMEOUT = 9000;

const Engine = {
  kind: 'builtin', // 'stockfish' once loaded
  sfName: '',
  sf: null,
  builtin: null,
  pending: new Map(),
  nextId: 0,
  queue: Promise.resolve(),

  get name() {
    return this.kind === 'stockfish' ? (this.sfName || 'Stockfish').split(' by ')[0] : t('engine.builtin');
  },

  workerFrom(source) {
    return new Worker(URL.createObjectURL(new Blob([source], { type: 'text/javascript' })));
  },

  init() {
    this.startBuiltin();
    this.loadStockfish();
  },

  startBuiltin() {
    try {
      this.builtin = this.workerFrom(ChessLib.toString() +
        ';var lib=ChessLib(),pos=lib.create();' +
        'onmessage=function(e){pos.load(e.data.fen);postMessage({id:e.data.id,res:pos.think(e.data.opt)})}');
      this.builtin.onmessage = e => {
        const done = this.pending.get(e.data.id);
        if (done) { this.pending.delete(e.data.id); done(e.data.res); }
      };
      this.builtin.onerror = () => {
        this.builtin = null;
        for (const done of this.pending.values()) done(null);
        this.pending.clear();
      };
    } catch (e) { this.builtin = null; }
  },

  loadStockfish() {
    /* the worker tries each URL; stockfish.js either installs its own onmessage
       or exposes a STOCKFISH() factory that we wire up */
    const source = 'var ok=false,urls=' + JSON.stringify(STOCKFISH_URLS) + ';' +
      'for(var i=0;i<urls.length&&!ok;i++){try{importScripts(urls[i]);ok=true}catch(e){}}' +
      'if(ok&&typeof onmessage!=="function"&&typeof STOCKFISH==="function"){' +
      'var sf=STOCKFISH();sf.onmessage=function(l){postMessage(typeof l==="string"?l:l.data)};onmessage=function(e){sf.postMessage(e.data)}}' +
      'postMessage(ok?"__loaded":"__fail");';
    try {
      const w = this.workerFrom(source);
      const fail = () => { clearTimeout(timer); try { w.terminate(); } catch (e) {} App.paintEngine(); };
      const timer = setTimeout(fail, STOCKFISH_LOAD_TIMEOUT);
      w.onerror = fail;
      w.onmessage = e => {
        const line = e.data;
        if (typeof line !== 'string') return;
        if (line === '__fail') fail();
        else if (line === '__loaded') w.postMessage('uci');
        else if (line.startsWith('id name')) this.sfName = line.slice(8).trim();
        else if (line.includes('uciok')) {
          clearTimeout(timer);
          w.onerror = null;
          w.postMessage('setoption name Hash value 16');
          w.postMessage('ucinewgame');
          this.sf = w;
          this.kind = 'stockfish';
          App.paintEngine();
        }
      };
    } catch (e) { /* workers unavailable: built-in engine only */ }
  },

  analyse(fen, o) {
    const run = () => this.kind === 'stockfish' ? this.runStockfish(fen, o || {}) : this.runBuiltin(fen, o || {});
    const p = this.queue.then(run, run);
    this.queue = p.catch(() => {});
    return p;
  },

  runBuiltin(fen, o) {
    const opt = { multipv: o.multipv || 1, depth: 6, movetime: 650 };
    /* without workers, search on the main thread with a shorter budget */
    const inline = () => Chess.create(fen).think(Object.assign({}, opt, { movetime: 300, depth: 4 }));
    if (!this.builtin) return sleep(20).then(inline);
    return new Promise(resolve => {
      const id = ++this.nextId;
      this.pending.set(id, res => resolve(res || inline()));
      this.builtin.postMessage({ id, fen, opt });
    });
  },

  runStockfish(fen, o) {
    return new Promise(resolve => {
      const w = this.sf, lines = {};
      let done = false;
      /* Stockfish stuck: drop it for good and answer with the built-in engine */
      const deadline = setTimeout(() => {
        if (done) return;
        done = true;
        this.kind = 'builtin';
        try { w.terminate(); } catch (e) {}
        App.paintEngine();
        resolve(this.runBuiltin(fen, o));
      }, STOCKFISH_MOVE_TIMEOUT);

      w.onmessage = e => {
        const line = e.data;
        if (typeof line !== 'string' || done) return;
        if (line.startsWith('info') && line.includes(' pv ')) {
          const info = parseInfo(line);
          if (info) lines[info.multipv] = info;
        } else if (line.startsWith('bestmove')) {
          done = true;
          clearTimeout(deadline);
          let out = Object.keys(lines).sort((a, b) => a - b).map(k => lines[k]).filter(x => x.uci);
          const best = line.split(' ')[1];
          if (!out.length && best && best !== '(none)') out = [{ uci: best, cp: 0, mate: null, depth: 0 }];
          out.sort((a, b) => b.cp - a.cp);
          resolve(out);
        }
      };
      w.postMessage('setoption name MultiPV value ' + (o.multipv || 1));
      w.postMessage('position fen ' + fen);
      w.postMessage('go depth 14 movetime 800');
    });
  },
};

/* "info depth 12 multipv 2 score cp -35 … pv e7e5 …" → { multipv, uci, cp, mate, depth }.
   Mates are mapped to ±(10000 - 10 * moves), like the built-in engine. */
function parseInfo(line) {
  const words = line.split(' ');
  const after = k => { const i = words.indexOf(k); return i < 0 ? null : words[i + 1]; };
  const si = words.indexOf('score');
  if (si < 0) return null;
  const v = +words[si + 2], mate = words[si + 1] === 'mate' ? v : null;
  const cp = mate === null ? v : (mate > 0 ? 10000 - mate * 10 : -10000 - mate * 10);
  return { multipv: +(after('multipv') || 1), uci: after('pv'), cp, mate, depth: +(after('depth') || 0) };
}
