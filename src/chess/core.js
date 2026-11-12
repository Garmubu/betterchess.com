/* Chess rules and a small built-in engine, with no dependency.
 *
 * Board: 0x88 layout. Square index = rank * 16 + file (a1 = 0, h8 = 119); an index with
 * (sq & 0x88) set is off the board.
 * Piece: type | colour << 3, with type 1..6 = pawn, knight, bishop, rook, queen, king
 * and colour 0 = white, 1 = black. 0 is an empty square.
 * Move: a packed integer  from | to << 7 | promotion type << 14 | flag << 17,
 * flag 1 = en passant, 2 = castle king side, 3 = castle queen side, 4 = pawn double step.
 *
 * The built-in engine (think) is a plain alpha-beta search with quiescence, about 1500 Elo.
 * It is the fallback when Stockfish cannot be loaded, and it also runs in a Web Worker:
 * keep ChessLib self-contained (no reference to outer variables).
 */
function ChessLib() {
  const WHITE = 0, BLACK = 1;
  const PAWN = 1, KNIGHT = 2, BISHOP = 3, ROOK = 4, QUEEN = 5, KING = 6;
  const EP = 1, CASTLE_K = 2, CASTLE_Q = 3, DOUBLE = 4;

  const KNIGHT_STEPS = [-33, -31, -18, -14, 14, 18, 31, 33];
  const KING_STEPS = [-17, -16, -15, -1, 1, 15, 16, 17];
  const DIAGONALS = [-17, -15, 15, 17];
  const LINES = [-16, -1, 1, 16];
  const PROMOTIONS = [QUEEN, KNIGHT, ROOK, BISHOP];

  const START = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  const VAL = [0, 100, 320, 330, 500, 900, 0];
  const MATE = 100000, INF = 1000000;

  /* Castling rights are 4 bits: 1 = K, 2 = Q, 4 = k, 8 = q. A move from or to one of these
     squares clears the matching rights (castle &= CASTLE_MASK[from] & CASTLE_MASK[to]). */
  const CASTLE_MASK = new Int8Array(128).fill(15);
  CASTLE_MASK[0] = 13; CASTLE_MASK[7] = 14; CASTLE_MASK[4] = 12;
  CASTLE_MASK[112] = 7; CASTLE_MASK[119] = 11; CASTLE_MASK[116] = 3;

  /* Piece-square tables, from White's point of view, a8 first (index = (7 - rank) * 8 + file). */
  const PST = [null,
    [0,0,0,0,0,0,0,0,50,50,50,50,50,50,50,50,10,10,20,30,30,20,10,10,5,5,10,25,25,10,5,5,0,0,0,20,20,0,0,0,5,-5,-10,0,0,-10,-5,5,5,10,10,-20,-20,10,10,5,0,0,0,0,0,0,0,0],
    [-50,-40,-30,-30,-30,-30,-40,-50,-40,-20,0,0,0,0,-20,-40,-30,0,10,15,15,10,0,-30,-30,5,15,20,20,15,5,-30,-30,0,15,20,20,15,0,-30,-30,5,10,15,15,10,5,-30,-40,-20,0,5,5,0,-20,-40,-50,-40,-30,-30,-30,-30,-40,-50],
    [-20,-10,-10,-10,-10,-10,-10,-20,-10,0,0,0,0,0,0,-10,-10,0,5,10,10,5,0,-10,-10,5,5,10,10,5,5,-10,-10,0,10,10,10,10,0,-10,-10,10,10,10,10,10,10,-10,-10,5,0,0,0,0,5,-10,-20,-10,-10,-10,-10,-10,-10,-20],
    [0,0,0,0,0,0,0,0,5,10,10,10,10,10,10,5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,-5,0,0,0,0,0,0,-5,0,0,0,5,5,0,0,0],
    [-20,-10,-10,-5,-5,-10,-10,-20,-10,0,0,0,0,0,0,-10,-10,0,5,5,5,5,0,-10,-5,0,5,5,5,5,0,-5,0,0,5,5,5,5,0,-5,-10,5,5,5,5,5,0,-10,-10,0,5,0,0,0,0,-10,-20,-10,-10,-5,-5,-10,-10,-20],
    [-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-30,-40,-40,-50,-50,-40,-40,-30,-20,-30,-30,-40,-40,-30,-30,-20,-10,-20,-20,-20,-20,-20,-20,-10,20,20,0,0,0,0,20,20,20,30,10,0,0,10,30,20]];
  const KING_ENDGAME = [-50,-40,-30,-20,-20,-30,-40,-50,-30,-20,-10,0,0,-10,-20,-30,-30,-10,20,30,30,20,-10,-30,-30,-10,30,40,40,30,-10,-30,-30,-10,30,40,40,30,-10,-30,-30,-10,20,30,30,20,-10,-30,-30,-30,0,0,0,0,-30,-30,-50,-30,-30,-30,-30,-30,-30,-50];
  const PHASE = [0, 0, 1, 1, 2, 4, 0];

  const offBoard = sq => sq & 0x88;
  function sqName(sq) { return 'abcdefgh'[sq & 7] + ((sq >> 4) + 1); }
  function sqIdx(name) { return (name.charCodeAt(0) - 97) + ((name.charCodeAt(1) - 49) << 4); }
  function uci(m) {
    const promo = (m >> 14) & 7;
    return sqName(m & 127) + sqName((m >> 7) & 127) + (promo ? ' pnbrq'[promo] : '');
  }

  function create(fen) {
    const b = new Int8Array(128);
    const king = [0, 0];
    let turn = WHITE, castle = 0, ep = -1, half = 0, full = 1;
    /* undo stack: one entry per move played */
    const history = [];

    function load(f) {
      b.fill(0);
      history.length = 0;
      const parts = f.trim().split(/\s+/);
      let rank = 7, file = 0;
      for (const ch of parts[0]) {
        if (ch === '/') { rank--; file = 0; }
        else if (ch >= '1' && ch <= '8') file += +ch;
        else {
          const lower = ch.toLowerCase(), type = 'pnbrqk'.indexOf(lower) + 1, colour = ch === lower ? BLACK : WHITE;
          b[rank * 16 + file] = type | colour << 3;
          if (type === KING) king[colour] = rank * 16 + file;
          file++;
        }
      }
      turn = parts[1] === 'b' ? BLACK : WHITE;
      const c = parts[2] || '-';
      castle = (c.includes('K') ? 1 : 0) | (c.includes('Q') ? 2 : 0) | (c.includes('k') ? 4 : 0) | (c.includes('q') ? 8 : 0);
      ep = parts[3] && parts[3] !== '-' ? sqIdx(parts[3]) : -1;
      half = +(parts[4] || 0);
      full = +(parts[5] || 1);
    }

    function placement() {
      let s = '';
      for (let rank = 7; rank >= 0; rank--) {
        let empty = 0;
        for (let file = 0; file < 8; file++) {
          const p = b[rank * 16 + file];
          if (!p) { empty++; continue; }
          if (empty) { s += empty; empty = 0; }
          const ch = ' pnbrqk'[p & 7];
          s += (p >> 3) ? ch : ch.toUpperCase();
        }
        if (empty) s += empty;
        if (rank) s += '/';
      }
      return s;
    }
    function castleText() {
      return ((castle & 1 ? 'K' : '') + (castle & 2 ? 'Q' : '') + (castle & 4 ? 'k' : '') + (castle & 8 ? 'q' : '')) || '-';
    }
    /* FEN without the move counters: identifies a position for repetitions and the opening book. */
    function key() { return placement() + (turn ? ' b ' : ' w ') + castleText() + ' ' + (ep >= 0 ? sqName(ep) : '-'); }
    function toFen() { return key() + ' ' + half + ' ' + full; }

    function attacked(sq, by) {
      let c;
      if (by === WHITE) {
        c = sq - 15; if (!offBoard(c) && b[c] === PAWN) return true;
        c = sq - 17; if (!offBoard(c) && b[c] === PAWN) return true;
      } else {
        c = sq + 15; if (!offBoard(c) && b[c] === (PAWN | 8)) return true;
        c = sq + 17; if (!offBoard(c) && b[c] === (PAWN | 8)) return true;
      }
      const knight = KNIGHT | by << 3, kingP = KING | by << 3, bishop = BISHOP | by << 3, rook = ROOK | by << 3, queen = QUEEN | by << 3;
      for (let i = 0; i < 8; i++) {
        c = sq + KNIGHT_STEPS[i]; if (!offBoard(c) && b[c] === knight) return true;
        c = sq + KING_STEPS[i]; if (!offBoard(c) && b[c] === kingP) return true;
      }
      return slides(sq, DIAGONALS, bishop, queen) || slides(sq, LINES, rook, queen);
    }
    /* is the first piece met along one of the directions equal to p1 or p2? */
    function slides(sq, dirs, p1, p2) {
      for (let i = 0; i < 4; i++) {
        const d = dirs[i];
        let c = sq + d;
        while (!offBoard(c)) {
          const q = b[c];
          if (q) { if (q === p1 || q === p2) return true; break; }
          c += d;
        }
      }
      return false;
    }

    /* Pseudo-legal moves (may leave the king in check). capturesOnly: captures and promotions. */
    function generate(capturesOnly) {
      const out = [], us = turn, them = us ^ 1;
      for (let s = 0; s < 120; s++) {
        if (offBoard(s)) { s += 7; continue; }
        const p = b[s];
        if (!p || (p >> 3) !== us) continue;
        const type = p & 7;
        if (type === PAWN) {
          const dir = us === WHITE ? 16 : -16, rank = s >> 4, lastRank = us === WHITE ? 6 : 1, startRank = us === WHITE ? 1 : 6, f = s + dir;
          if (!b[f] && (!capturesOnly || rank === lastRank)) {
            if (rank === lastRank) for (const pr of PROMOTIONS) out.push(s | f << 7 | pr << 14);
            else {
              out.push(s | f << 7);
              if (rank === startRank && !b[f + dir]) out.push(s | (f + dir) << 7 | DOUBLE << 17);
            }
          }
          for (let side = -1; side <= 1; side += 2) {
            const c = f + side;
            if (offBoard(c)) continue;
            const q = b[c];
            if (q && (q >> 3) === them) {
              if (rank === lastRank) for (const pr of PROMOTIONS) out.push(s | c << 7 | pr << 14);
              else out.push(s | c << 7);
            } else if (!q && c === ep) out.push(s | c << 7 | EP << 17);
          }
        } else if (type === KNIGHT || type === KING) {
          for (const d of type === KNIGHT ? KNIGHT_STEPS : KING_STEPS) {
            const c = s + d;
            if (offBoard(c)) continue;
            const q = b[c];
            if (!q) { if (!capturesOnly) out.push(s | c << 7); }
            else if ((q >> 3) === them) out.push(s | c << 7);
          }
          if (type === KING && !capturesOnly) {
            const home = us === WHITE ? 4 : 116;
            if (s === home) {
              const kRight = us === WHITE ? 1 : 4, qRight = us === WHITE ? 2 : 8, ourRook = ROOK | us << 3;
              if ((castle & kRight) && !b[home + 1] && !b[home + 2] && b[home + 3] === ourRook &&
                  !attacked(home, them) && !attacked(home + 1, them) && !attacked(home + 2, them))
                out.push(s | (home + 2) << 7 | CASTLE_K << 17);
              if ((castle & qRight) && !b[home - 1] && !b[home - 2] && !b[home - 3] && b[home - 4] === ourRook &&
                  !attacked(home, them) && !attacked(home - 1, them) && !attacked(home - 2, them))
                out.push(s | (home - 2) << 7 | CASTLE_Q << 17);
            }
          }
        } else {
          const dirs = type === BISHOP ? DIAGONALS : type === ROOK ? LINES : KING_STEPS;
          for (const d of dirs) {
            let c = s + d;
            while (!offBoard(c)) {
              const q = b[c];
              if (!q) { if (!capturesOnly) out.push(s | c << 7); }
              else { if ((q >> 3) === them) out.push(s | c << 7); break; }
              c += d;
            }
          }
        }
      }
      return out;
    }

    function make(m) {
      const from = m & 127, to = (m >> 7) & 127, promo = (m >> 14) & 7, flag = m >> 17, p = b[from], us = turn;
      let captured = b[to];
      b[to] = promo ? (promo | us << 3) : p;
      b[from] = 0;
      if (flag === EP) { const cs = to + (us === WHITE ? -16 : 16); captured = b[cs]; b[cs] = 0; }
      else if (flag === CASTLE_K) { b[to - 1] = b[to + 1]; b[to + 1] = 0; }
      else if (flag === CASTLE_Q) { b[to + 1] = b[to - 2]; b[to - 2] = 0; }
      history.push({ m, captured, castle, ep, half });
      if ((p & 7) === KING) king[us] = to;
      ep = flag === DOUBLE ? (from + to) >> 1 : -1;
      castle &= CASTLE_MASK[from] & CASTLE_MASK[to];
      half = ((p & 7) === PAWN || captured) ? 0 : half + 1;
      if (us === BLACK) full++;
      turn ^= 1;
    }

    function unmake() {
      const h = history.pop(), m = h.m;
      castle = h.castle; ep = h.ep; half = h.half;
      turn ^= 1;
      const us = turn, from = m & 127, to = (m >> 7) & 127, promo = (m >> 14) & 7, flag = m >> 17;
      const p = promo ? PAWN | us << 3 : b[to];
      b[from] = p;
      b[to] = flag === EP ? 0 : h.captured;
      if (flag === EP) b[to + (us === WHITE ? -16 : 16)] = h.captured;
      else if (flag === CASTLE_K) { b[to + 1] = b[to - 1]; b[to - 1] = 0; }
      else if (flag === CASTLE_Q) { b[to - 2] = b[to + 1]; b[to + 1] = 0; }
      if ((p & 7) === KING) king[us] = from;
      if (us === BLACK) full--;
    }

    const inCheck = () => attacked(king[turn], turn ^ 1);
    /* after make(): did the side that just moved leave its king in check? */
    const leftInCheck = () => attacked(king[turn ^ 1], turn);

    function legal() {
      const out = [];
      for (const m of generate(false)) { make(m); if (!leftInCheck()) out.push(m); unmake(); }
      return out;
    }

    /* Standard Algebraic Notation in English (K Q R B N), with + or # */
    function san(m) {
      const from = m & 127, to = (m >> 7) & 127, promo = (m >> 14) & 7, flag = m >> 17, type = b[from] & 7;
      let s;
      if (flag === CASTLE_K) s = 'O-O';
      else if (flag === CASTLE_Q) s = 'O-O-O';
      else {
        const capture = b[to] || flag === EP;
        if (type === PAWN) s = (capture ? 'abcdefgh'[from & 7] + 'x' : '') + sqName(to) + (promo ? '=' + ' PNBRQK'[promo] : '');
        else {
          /* disambiguation when another piece of the same type can reach the same square */
          let other = false, sameFile = false, sameRank = false;
          for (const o of legal()) {
            const of = o & 127;
            if (of !== from && ((o >> 7) & 127) === to && (b[of] & 7) === type) {
              other = true;
              if ((of & 7) === (from & 7)) sameFile = true;
              if ((of >> 4) === (from >> 4)) sameRank = true;
            }
          }
          const dis = !other ? '' : !sameFile ? 'abcdefgh'[from & 7] : !sameRank ? String((from >> 4) + 1) : sqName(from);
          s = ' PNBRQK'[type] + dis + (capture ? 'x' : '') + sqName(to);
        }
      }
      make(m);
      if (inCheck()) s += legal().length ? '+' : '#';
      unmake();
      return s;
    }
    function fromSan(str) {
      const want = str.replace(/[+#!?]/g, '');
      for (const m of legal()) if (san(m).replace(/[+#]/g, '') === want) return m;
      return 0;
    }
    function fromUci(u) {
      for (const m of legal()) if (uci(m) === u) return m;
      return 0;
    }

    /* Only kings, or kings and a single minor piece. */
    function insufficient() {
      let minors = 0;
      for (let s = 0; s < 120; s++) {
        if (offBoard(s)) { s += 7; continue; }
        const type = b[s] & 7;
        if (type === PAWN || type === ROOK || type === QUEEN) return false;
        if (type === KNIGHT || type === BISHOP) minors++;
      }
      return minors <= 1;
    }

    /* Static exchange: net material the side to move wins by capturing on sq (0 if it loses). */
    function see(sq) {
      let best = 0, bestValue = 1e9;
      for (const m of generate(true)) {
        if (((m >> 7) & 127) !== sq || (m >> 17) === EP) continue;
        const v = VAL[b[m & 127] & 7] || 10000;
        if (v < bestValue) {
          make(m);
          const ok = !leftInCheck();
          unmake();
          if (ok) { bestValue = v; best = m; }
        }
      }
      if (!best) return 0;
      const gain = VAL[b[sq] & 7];
      make(best);
      const r = gain - see(sq);
      unmake();
      return r > 0 ? r : 0;
    }

    /* Material + piece-square tables, king table blended between middlegame and endgame. */
    function evaluate() {
      let score = 0, kingMid = 0, kingEnd = 0, phase = 0;
      for (let s = 0; s < 120; s++) {
        if (offBoard(s)) { s += 7; continue; }
        const p = b[s];
        if (!p) continue;
        const type = p & 7, rank = s >> 4, file = s & 7, sign = (p >> 3) ? -1 : 1;
        const i = ((p >> 3) ? rank : 7 - rank) * 8 + file;
        if (type === KING) { kingMid += sign * PST[KING][i]; kingEnd += sign * KING_ENDGAME[i]; }
        else { score += sign * (VAL[type] + PST[type][i]); phase += PHASE[type]; }
      }
      if (phase > 24) phase = 24;
      score += ((kingMid * phase + kingEnd * (24 - phase)) / 24) | 0;
      return turn === WHITE ? score : -score;
    }

    /* ---- search ---- */
    let nodes = 0, stopAt = 0, stopped = false, canStop = false, rootDepth = 1;

    /* captures first (most valuable victim, least valuable attacker), then promotions */
    function order(moves) {
      const score = moves.map(m => {
        const victim = b[(m >> 7) & 127], promo = (m >> 14) & 7;
        let v = victim ? 10000 + 10 * VAL[victim & 7] - VAL[b[m & 127] & 7] : 0;
        if (promo) v += 9000 + promo;
        if ((m >> 17) === EP) v = 10900;
        return v;
      });
      return moves.map((_, i) => i).sort((x, y) => score[y] - score[x]).map(i => moves[i]);
    }

    function quiesce(alpha, beta) {
      nodes++;
      const standPat = evaluate();
      if (standPat >= beta) return beta;
      if (standPat > alpha) alpha = standPat;
      for (const m of order(generate(true))) {
        make(m);
        if (leftInCheck()) { unmake(); continue; }
        const score = -quiesce(-beta, -alpha);
        unmake();
        if (score >= beta) return beta;
        if (score > alpha) alpha = score;
      }
      return alpha;
    }

    function alphaBeta(depth, alpha, beta, ply) {
      if (canStop && (nodes & 1023) === 0 && Date.now() > stopAt) stopped = true;
      if (stopped) return 0;
      if (half >= 100) return 0;
      const check = inCheck();
      if (check && ply < 2 * rootDepth) depth++;
      if (depth <= 0) return quiesce(alpha, beta);
      nodes++;
      let played = 0;
      for (const m of order(generate(false))) {
        make(m);
        if (leftInCheck()) { unmake(); continue; }
        played++;
        const score = -alphaBeta(depth - 1, -beta, -alpha, ply + 1);
        unmake();
        if (stopped) return 0;
        if (score >= beta) return beta;
        if (score > alpha) alpha = score;
      }
      if (!played) return check ? -MATE + ply : 0;
      return alpha;
    }

    /* Iterative deepening. o = { multipv, depth, movetime }.
       Returns the best `multipv` moves: [{ uci, cp, mate, depth }], best first, from the side to move's view.
       Mates are reported as cp = ±(10000 - 10 * moves) like the Stockfish wrapper does. */
    function think(o) {
      const multipv = o.multipv || 1, maxDepth = o.depth || 6;
      let root = order(legal());
      if (!root.length) return [];
      nodes = 0; stopped = false; stopAt = Date.now() + (o.movetime || 500);
      let out = [], reached = 0;
      for (let d = 1; d <= maxDepth; d++) {
        rootDepth = d; canStop = d > 1;
        const res = [];
        for (const m of root) {
          make(m);
          const floor = res.length >= multipv ? res[multipv - 1].score : -INF;
          const score = -alphaBeta(d - 1, -INF, -floor, 1);
          unmake();
          if (stopped) break;
          res.push({ m, score });
          res.sort((x, y) => y.score - x.score);
        }
        if (stopped) break;
        out = res; reached = d; root = res.map(x => x.m);
        if (Math.abs(res[0].score) > MATE - 1000 && d >= 2) break;
        if (Date.now() > stopAt) break;
      }
      return out.slice(0, multipv).map(x => {
        let mate = null, cp = x.score;
        if (x.score > MATE - 1000) { mate = Math.ceil((MATE - x.score) / 2); cp = 10000 - mate * 10; }
        else if (x.score < -MATE + 1000) { mate = -Math.ceil((MATE + x.score) / 2); cp = -10000 - mate * 10; }
        return { uci: uci(x.m), cp, mate, depth: reached };
      });
    }

    function perft(depth) {
      if (!depth) return 1;
      let n = 0;
      for (const m of legal()) { make(m); n += perft(depth - 1); unmake(); }
      return n;
    }

    load(fen || START);
    return {
      load, fen: toFen, key, make, unmake, legal, inCheck, san, fromSan, fromUci, insufficient, see, think, perft,
      get: sq => b[sq],
      turn: () => turn,
      half: () => half,
      kingSquare: () => king[turn],
    };
  }

  return { create, sqName, sqIdx, uci, START, VAL };
}

if (typeof module !== 'undefined') module.exports = ChessLib;
