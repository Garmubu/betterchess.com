/* Source of the tactics puzzles, read by tools/build-tactics.js.
 * moves: how many moves the player must find; first: the key move.
 * line: a full solution checked by hand, used as is (the built-in engine is too weak to find it).
 */
module.exports = {
  puzzles: [
    { id: "fork-c7", theme: "fork", moves: 2, first: "Nc7+",
      fen: "r3kb1r/pp3ppp/2p1pq2/1N6/8/8/PPP2PPP/R1BQ1RK1 w - - 0 1" },
    { id: "fork-pawn", theme: "fork", moves: 2, first: "e5",
      fen: "r4rk1/pp2bppp/2pq1n2/8/3PP3/2N2N2/PPP1QPPP/R1B2RK1 w - - 0 1" },
    { id: "fork-queen", theme: "fork", moves: 2, first: "Qd5+",
      fen: "r5k1/p1q3pp/8/8/8/8/PPP2PPP/3Q1RK1 w - - 0 1" },
    { id: "pin-pawn", theme: "pin", moves: 2, first: "f4",
      fen: "r1bqkb1r/ppp2ppp/3p4/4n3/8/7N/PPP2PPP/RN1QRBK1 w - - 0 1" },
    { id: "pin-rook", theme: "pin", moves: 2, first: "Re1",
      fen: "r1b1k2r/ppp2ppp/8/4q3/8/2NQ4/PPPB1PPP/1N3RK1 w - - 0 1" },
    { id: "skewer-b", theme: "skewer", moves: 2, first: "Bb3+",
      fen: "6q1/p6p/1p4p1/3kp3/8/P7/1P3PPP/3B1RK1 w - - 0 1" },
    { id: "disc-knight", theme: "discovered", moves: 2, first: "Nc6+",
      fen: "r1b1kb1r/ppp2ppp/8/4N3/1q6/8/PPPN1PPP/R1BQR1K1 w - - 0 1",
      line: ["Nc6+", "Be7", "Nxb4"] },
    { id: "disc-bishop", theme: "discovered", moves: 2, first: "Bxh7+",
      fen: "r1bq1rk1/ppp1nppp/8/8/8/2NB1N2/PPPQ1PPP/R2R2K1 w - - 0 1" },
    { id: "double-mate", theme: "double", moves: 1, first: "Nf6#",
      fen: "rnbqkbnr/pppp1ppp/8/8/4N3/8/PPPP1PPP/R1BQRBK1 w - - 0 1" },
    { id: "backrank-1", theme: "backrank", moves: 2, first: "Qxd8+",
      fen: "2rr2k1/pp3ppp/8/5q2/8/P7/1P1Q1PPP/3R2K1 w - - 0 1" },
    { id: "smothered", theme: "smothered", moves: 2, first: "Qg8+",
      fen: "r4r1k/pp4pp/1q5N/3Q4/8/8/PP3PPP/5RK1 w - - 0 1" },
    { id: "decoy-fork", theme: "decoy", moves: 3, first: "Rf8+",
      fen: "rb4k1/pp4pp/1q6/4N3/8/2N5/PPP3PP/R4R1K w - - 0 1",
      line: ["Rf8+", "Kxf8", "Nd7+", "Ke7", "Nxb6"] },
    { id: "promo", theme: "promotion", moves: 2, first: "Rd8+",
      fen: "2r3k1/2P2ppp/8/1n6/8/8/5PPP/3R2K1 w - - 0 1" },
    { id: "remove-def", theme: "removal", moves: 2, first: "Bxf6",
      fen: "r2q1rk1/ppp2ppp/3b1n2/6BQ/8/7R/PPP2PPP/5RK1 w - - 0 1" },
    { id: "kiss", theme: "kiss", moves: 1, first: "Qxh7#",
      fen: "r1bq1rk1/ppp2ppp/2n5/7Q/8/2NB4/PPP2PPP/R4RK1 w - - 0 1" }
  ],

  /* puzzles also offered from the other side of the board, colours swapped */
  mirrored: ["fork-queen", "disc-bishop", "smothered", "pin-rook", "backrank-1"],

  /* final order: colours alternate, simplest first (mirrored ids end with -n) */
  order: [
    "kiss", "fork-queen", "backrank-1-n", "fork-c7", "pin-rook", "smothered-n", "double-mate", "skewer-b", "fork-queen-n", "disc-knight",
    "promo", "pin-pawn", "disc-bishop-n", "backrank-1", "fork-pawn", "pin-rook-n", "smothered", "remove-def", "disc-bishop", "decoy-fork",
  ],
};
