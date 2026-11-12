/* Opening book built from OPENINGS: used by the bot (it plays book moves), by the coach
 * ("book" moves) and to name the opening of a game.
 */
const Book = {
  moves: new Map(),    // position key → Set of book moves (uci)
  openings: new Map(), // position key → Set of opening ids reaching it

  build() {
    for (const o of OPENINGS) {
      const pos = Chess.create();
      o.line = o.moves.split(' ');
      for (const san of o.line) {
        const m = pos.fromSan(san);
        if (!m) throw new Error('Illegal move ' + san + ' in opening ' + o.id);
        addTo(this.moves, pos.key(), Chess.uci(m));
        pos.make(m);
        addTo(this.openings, pos.key(), o.id);
      }
    }
    function addTo(map, key, value) {
      if (!map.has(key)) map.set(key, new Set());
      map.get(key).add(value);
    }
  },

  has(key, uci) { return this.moves.has(key) && this.moves.get(key).has(uci); },
  randomMove(key) {
    const set = this.moves.get(key);
    return set ? [...set][randInt(set.size)] : null;
  },
  /* the opening id when only one opening goes through this position */
  openingAt(key) {
    const set = this.openings.get(key);
    return set && set.size === 1 ? [...set][0] : null;
  },
};

const openingById = id => OPENINGS.find(o => o.id === id);
