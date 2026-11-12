/* English */
I18N.en = {
  name: "English",
  pieces: "KQRBN", // letters for King, Queen, Rook, Bishop, Knight in move notation
  decimal: ".",

  ui: {
    "nav.play": "Play",
    "nav.openings": "Openings",
    "nav.profile": "Profile",
    "nav.tactics": "Tactics",

    "language": "Language",

    "sound.on": "Sound: on",
    "sound.off": "Sound: off",

    "engine.builtin": "Built-in engine",
    "engine.short": "Engine",
    "engine.noteSf": "Opponent and analysis: {name}, running in your browser.",
    "engine.noteMini": "Stockfish is not loaded right now. The weaker built-in engine (about 1500 at most) is filling in.",

    "board.promotion": "Promotion",
    "board.cancel": "Cancel",

    "piece.n": "Knight",
    "piece.b": "Bishop",
    "piece.r": "Rook",
    "piece.q": "Queen",
    "piece.k": "King",
    "piece.p": "Pawn",

    "class.brilliant": "Brilliant",
    "class.great": "Great move",
    "class.best": "Best move",
    "class.excellent": "Excellent",
    "class.good": "Good move",
    "class.book": "Book",
    "class.inaccuracy": "Inaccuracy",
    "class.mistake": "Mistake",
    "class.miss": "Miss",
    "class.blunder": "Blunder",
    "class.forced": "Forced",

    "comment.brilliant": "A sacrifice that holds up. The engine finds nothing better.",
    "comment.great": "The only move that really held the position.",
    "comment.best": "Exactly the engine's move.",
    "comment.excellent": "Very close to the best move.",
    "comment.good": "Playable, nothing more.",
    "comment.book": "A known opening theory move.",
    "comment.forced": "You had only one legal move.",
    "comment.inaccuracy": "There was something more precise here.",
    "comment.mistake": "This move gives up ground.",
    "comment.miss": "You had a winning move and let it slip.",
    "comment.blunder": "This move loses a lot.",

    "reason.mate": "checkmate",
    "reason.stalemate": "stalemate",
    "reason.material": "insufficient material",
    "reason.fifty": "50-move rule",
    "reason.repetition": "repetition",
    "reason.resign": "resignation",
    "reason.time": "time out",

    "game.thinking": "thinking",
    "game.you": "You",
    "game.ranked": "ranked",
    "game.casual": "casual",
    "game.movesAria": "Moves played",
    "game.movesEmpty": "Moves will appear here.",
    "game.live": "Back to the current position",
    "game.undo": "Take back",
    "game.resign": "Resign",
    "game.resignConfirm": "Confirm resignation",

    "coach.ranked": "Ranked game",
    "coach.noCoach": "No coach",
    "coach.noFeedback": "No feedback during the game. Your move review appears at the end.",
    "coach.coach": "Coach",
    "coach.analysing": "Analysing your move…",
    "coach.over": "Game over.",
    "coach.yourTurn": "Your move. Each move is rated as soon as you play it.",
    "coach.engineThinks": "The engine is thinking.",

    "result.win": "Victory",
    "result.loss": "Defeat",
    "result.draw": "Draw",
    "result.newElo": "New Elo: <b>{elo}</b>. Your next opponent will play at this level.",
    "result.accuracy": "Your accuracy: <b>{n}%</b>",
    "result.review": "Tap a move in the list to review the position.",
    "result.again": "Play again",
    "result.back": "Back",

    "lobby.rankedLabel": "Ranked · 10 min rapid",
    "lobby.record": "peak {n}",
    "lobby.wdl": "{w} W · {d} D · {l} L",
    "lobby.rankedText": "No coach. The engine plays at your Elo: a win earns {k} points, a loss costs {k}.",
    "lobby.placement": "Your first 10 games count more, to find your level faster ({n} left).",
    "lobby.rankedBtn": "Play a ranked game",
    "lobby.coachLabel": "With the coach · casual",
    "lobby.coachTitle": "Every move rated",
    "lobby.coachText": "As soon as you move, you learn whether it was brilliant, the best move, an inaccuracy or a blunder. The right move is never shown.",
    "lobby.coachSub": "Engine at your level ({elo}), no Elo at stake. You can take moves back.",
    "lobby.coachBtn": "Play with the coach",
    "lobby.customLabel": "Custom game · no Elo",
    "lobby.level": "Engine level",
    "lobby.color": "Colour",
    "lobby.white": "White",
    "lobby.random": "Random",
    "lobby.black": "Black",
    "lobby.coachSwitch": "Live coach",
    "lobby.customBtn": "Start the game",

    "openings.daily": "Opening of the day",
    "openings.youPlay": "You play {side}. {n} moves to find.",
    "openings.train": "Train this opening",
    "openings.all": "All openings",
    "openings.doneCount": "{a} / {b} completed",
    "openings.withWhite": "As White",
    "openings.withBlack": "As Black",
    "openings.moves": "{n} moves",
    "openings.ok": "completed ×{n}",
    "openings.retry": "to review",
    "openings.new": "new",

    "drill.good": "Well played: {san}",
    "drill.wrong": "{san} is not the move of this line. Try again.",
    "drill.finished": "line complete",
    "drill.clean": "Flawless. Opening validated.",
    "drill.errors": ["{n} mistake", "{n} mistakes"],
    "drill.withHelp": ", with help",
    "drill.replay": ". Play it again to validate it.",
    "drill.youPlay": "you play {side}",
    "drill.prompt": "Play the move of the line.",
    "drill.again": "Replay the line",
    "drill.continue": "Continue against the engine",
    "drill.others": "Other openings",
    "drill.hint": "Hint",
    "drill.show": "Show the move",
    "drill.hideLine": "Hide the line",
    "drill.showLine": "See the whole line",
    "drill.restart": "Restart",
    "drill.quit": "Quit",

    "tactics.daily": "Tactic of the day",
    "tactics.intro": "Every puzzle starts from a middlegame position. Find the winning line, then read why it works.",
    "tactics.solve": "Solve",
    "tactics.themes": "Themes",
    "tactics.count": "{a} / {b} solved",
    "tactics.ok": "solved ×{n}",
    "tactics.retry": "to review",
    "tactics.new": "new",
    "tactics.puzzle": "Puzzle {n}",
    "tactics.mateW": "White to play and mate in {n}.",
    "tactics.mateB": "Black to play and mate in {n}.",
    "tactics.winW": "White to play and win material.",
    "tactics.winB": "Black to play and win material.",
    "tactics.good": "Well spotted: {san}",
    "tactics.wrong": "{san} does not work here. Try again.",
    "tactics.solved": "Tactic solved",
    "tactics.clean": "Found without a mistake.",
    "tactics.errors": ["Solved with {n} mistake.", "Solved with {n} mistakes."],
    "tactics.helped": "Solved with help.",
    "tactics.hidden": "Theme hidden",
    "tactics.reveal": "Show the theme",
    "tactics.theme": "Theme: {th}",
    "tactics.next": "Next puzzle",
    "tactics.list": "All puzzles",

    "theme.fork": "Fork",
    "theme.pin": "Pin",
    "theme.skewer": "Skewer",
    "theme.discovered": "Discovered attack",
    "theme.double": "Double check",
    "theme.backrank": "Back-rank mate",
    "theme.smothered": "Smothered mate",
    "theme.decoy": "Decoy",
    "theme.promotion": "Promotion",
    "theme.removal": "Removing the defender",
    "theme.kiss": "Kiss of death",

    "tag.attack": "Aggressive",
    "tag.sharp": "Sharp",
    "tag.gambit": "Gambit",
    "tag.solid": "Solid",
    "tag.positional": "Slow play",
    "tag.counter": "Counter-attack",
    "tag.system": "Easy setup",
    "tag.open": "Open game",
    "tag.closed": "Closed game",

    "learn.title": "Understand the opening",
    "learn.titleTheme": "Understand the tactic",
    "learn.plan": "The plan",
    "learn.strengths": "Strengths",
    "learn.weaknesses": "Weaknesses",
    "learn.pieces": "Key pieces",
    "learn.what": "The idea",
    "learn.why": "What it is for",
    "learn.when": "When to look for it",

    "profile.elo": "Ranked Elo",
    "profile.graphEmpty": "The chart appears after your first ranked game.",
    "profile.graphAria": "Elo over time, from {a} to {b}",
    "profile.games": "Games",
    "profile.best": "Peak",
    "profile.openings": "Openings",
    "profile.wdl": "{w} wins · {d} draws · {l} losses",
    "profile.last": "Recent games",
    "profile.none": "No games yet.",
    "profile.row": "{color} against {opp} · {n} moves · {reason}",
    "profile.synced": "Progress saved to your account: you will find it on your other devices.",
    "profile.local": "Progress saved in this browser.",
    "profile.reset": "Reset profile",
    "profile.resetConfirm": "Confirm reset",
    "profile.resetDone": "Profile reset",
    "profile.tactics": "Tactics"
  },

  /* opening id: [name, one-line idea] */
  openings: {
    italian: ["Italian Game", "Fast development, bishop aimed at f7, then c3 and d3 to prepare d4 at the right moment."],
    "ruy-lopez": ["Ruy Lopez", "Lasting pressure on the c6 knight that defends e5. Castle early and keep the bishop on the a2-g8 diagonal."],
    scotch: ["Scotch Game", "Open the centre at once with d4 to gain space and open lines."],
    "four-knights": ["Four Knights Game", "Symmetrical, solid development, then d4 to open the game without risk."],
    "evans-gambit": ["Evans Gambit", "Offer the b4 pawn to gain tempi on the bishop and build a big centre with c3 and d4."],
    "fried-liver": ["Fried Liver Attack", "Sacrifice the knight on f7 to drag the black king into the centre. Know it to punish Nxd5."],
    "vienna-gambit": ["Vienna Gambit", "A delayed King's Gambit: Nc3 first, then f4 to attack Black's centre."],
    "kings-gambit": ["King's Gambit", "Give the f-pawn to deflect e5, open the f-file and attack fast. Very sharp."],
    "sicilian-alapin": ["Sicilian, Alapin", "Against the Sicilian: c3 prepares d4 to keep a pawn centre, without open-line theory."],
    "smith-morra": ["Smith-Morra Gambit", "A pawn for a lead in development and open c- and d-files for the rooks."],
    "french-advance": ["French, Advance Variation", "e5 gains space and locks in the c8 bishop. Then hold d4, which Black attacks from all sides."],
    "caro-kann-advance": ["Caro-Kann, Advance Variation", "Space in the centre and calm development: Nf3, Be2, castle, then react to c5."],
    "queens-gambit-declined": ["Queen's Gambit Declined", "c4 attacks Black's centre. Develop naturally and pin the f6 knight with Bg5."],
    "queens-gambit-accepted": ["Queen's Gambit Accepted", "Black takes c4; win the pawn back calmly with e3 and Bxc4, keeping a good centre."],
    london: ["London System", "A setup to play against almost anything: Bf4, e3, c3, Nd2, Ngf3. Solid and easy to remember."],
    catalan: ["Catalan Opening", "A Queen's Gambit with a fianchettoed bishop: long-term pressure on the long diagonal."],
    english: ["English Opening", "A Sicilian with an extra tempo: control d5 from the wing and fianchetto the king's bishop."],
    "kings-indian-attack": ["King's Indian Attack", "The same setup whatever Black does: fianchetto, castle, d3, Nbd2, then e4."],
    "sicilian-najdorf": ["Sicilian Najdorf", "a6 controls b5 and prepares e5 or b5. The most ambitious defence against 1.e4."],
    "sicilian-dragon": ["Sicilian Dragon", "The g7 bishop rakes the long diagonal. Very tactical play with opposite-side castling."],
    "sicilian-sveshnikov": ["Sicilian Sveshnikov", "e5 chases the knight at the price of a hole on d5, in return for very active pieces."],
    french: ["French Defence", "A solid structure: give White space, then attack the pawn chain with c5."],
    "caro-kann": ["Caro-Kann Defence", "Like the French, but the c8 bishop comes out before e6. Very solid, few weaknesses."],
    scandinavian: ["Scandinavian Defence", "Break the centre on move one. The queen comes out early but finds a good post on a5."],
    petrov: ["Petrov Defence", "Counter-attack e4 instead of defending e5. Careful: d6 before taking back on e4."],
    "two-knights": ["Two Knights Defence", "Against Ng5: d5 then Na5, giving a pawn for the initiative instead of walking into the Fried Liver."],
    philidor: ["Philidor Defence", "e5 defended by d6: a slightly passive but very solid position with little theory."],
    pirc: ["Pirc Defence", "Give White the centre to attack it later, with a fianchettoed bishop."],
    alekhine: ["Alekhine Defence", "The knight provokes White's pawns forward to turn them into targets."],
    "kings-indian": ["King's Indian Defence", "White takes the centre, Black strikes with e5 and then attacks on the kingside with f5."],
    "nimzo-indian": ["Nimzo-Indian Defence", "Bb4 pins the knight and stops e4. Ready to give the bishop pair to damage the pawns."],
    "queens-indian": ["Queen's Indian Defence", "Control e4 from afar with the queen's bishop. Ba6 hampers White's development by hitting c4."],
    grunfeld: ["Grünfeld Defence", "Let White build a big centre, then bombard it with Bg7 and c5."],
    slav: ["Slav Defence", "c6 supports d5 without locking in the c8 bishop, which comes out to f5 before e6."],
    dutch: ["Dutch Defence", "f5 controls e4 and announces a kingside attack. Leningrad variation with a fianchetto."],
    benko: ["Benko Gambit", "A pawn for lasting pressure on the a- and b-files, even in the endgame."]
  },

  learn: {
    /* opening id: [plan, strengths, weaknesses, key pieces] */
    openings: {
      italian: [
        "Develop fast, castle, then prepare d4 with c3 to take the centre. The c4 bishop aims at f7, the weakest point in Black's camp.",
        "Natural, easy-to-understand moves and immediate pressure on f7.",
        "If Black plays accurately the game turns quiet and level. The c4 bishop can be traded off by Na5 or Be6.",
        "The c4 bishop aimed at f7, and the f3 knight that supports d4 and can jump to g5."
      ],
      "ruy-lopez": [
        "Attack the defender of e5 (the c6 knight), castle, play Re1, then c3 and d4 to build a solid centre. Slow pressure that lasts the whole game.",
        "A lasting, risk-free edge and very rich middlegame plans.",
        "A lot of theory. The bishop gets chased by a6 and b5, and the edge takes time to convert.",
        "The bishop, which ends up on b3 aiming at f7, and the e1 rook supporting e4."
      ],
      scotch: [
        "Open the centre at once with d4 to trade the e5 pawn and play with active pieces and space.",
        "Clear play, few locked pawns and quick initiative.",
        "The open centre activates Black's pieces too. After Nxc6 bxc6 Black gets a decent pawn centre.",
        "The d4 knight in the centre, then the queen and bishops on the open lines."
      ],
      "four-knights": [
        "Develop everything symmetrically, castle, then open the game with d4 once the king is safe.",
        "Very safe, simple logic (knights before bishops) and few traps.",
        "Not ambitious: the position often stays level and symmetrical.",
        "The knights controlling d5 and e4, and the bishop arriving on d3."
      ],
      "evans-gambit": [
        "Give the b4 pawn to gain two tempi (c3 then d4), build a big centre and attack Black's king while it is still in the middle.",
        "Huge initiative, open diagonals towards f7 and plenty of traps.",
        "A pawn down: if the attack fizzles out, the endgame is bad.",
        "The c4 bishop and the queen (often on b3) aiming at f7 together, then a rook on the e-file."
      ],
      "fried-liver": [
        "Punish 5...Nxd5 by sacrificing the knight on f7 to drag Black's king into the centre and attack it with queen, bishop and knights.",
        "A very strong attack if the defence is not precise. Great for quick wins at club level.",
        "A piece down. Against 5...Na5 (the right reply) the sacrifice does not exist.",
        "The queen on f3 and the c4 bishop pinning the d5 knight, plus the c3 knight adding pressure."
      ],
      "vienna-gambit": [
        "Control d5 with Nc3, then play f4 to break e5 and open the f-file towards Black's king.",
        "A kingside attack backed by the f-rook.",
        "White's king is weakened on the g1-a7 diagonal, and the ...d5 counter hits the centre.",
        "The f1 rook on the f-file, and the c3 knight."
      ],
      "kings-gambit": [
        "Give the f-pawn to deflect e5, take the centre with d4 and attack f7 down the f-file.",
        "Instant initiative and chaotic positions where the better-prepared player wins.",
        "White's king is exposed, a pawn is gone, and several lines are refuted.",
        "The f1 rook on the open file, the c4 bishop aiming at f7, and the knights jumping to e5 or g5."
      ],
      "sicilian-alapin": [
        "Against the Sicilian, play c3 then d4 to keep a pawn centre without entering Black's favourite lines.",
        "Avoids a mountain of theory, with a solid centre and simple play.",
        "c3 takes the b1 knight's square, and Black equalises easily with Nf6 or d5.",
        "The d4 pawn, the pivot of the centre, and the bishop on c4 or d3 aiming at the castled king."
      ],
      "smith-morra": [
        "Offer the c-pawn to develop every piece fast and use the open c- and d-files.",
        "Lead in development, fast attacks and many traps.",
        "A pawn down: if Black finishes developing safely, the edge disappears.",
        "The rooks on c1 and d1, the c4 bishop aiming at f7, and the knight jumping to d5."
      ],
      "french-advance": [
        "Push e5 to gain space and lock in the c8 bishop, defend the d4-e5 chain, then attack on the kingside.",
        "Space, a clear plan and a natural attack on the castled king.",
        "d4 is attacked from everywhere (c5, Nc6, Qb6): if the chain gives way, the centre collapses.",
        "The f3 knight defending d4, and the d3 bishop pointing at h7."
      ],
      "caro-kann-advance": [
        "Take space with e5, develop calmly, then react to Black's c5 push.",
        "Space and risk-free play.",
        "Black has already brought the good bishop out to f5, and Black's structure stays very solid.",
        "The f3 knight and the e3 bishop holding d4."
      ],
      "queens-gambit-declined": [
        "Attack Black's centre with c4, develop naturally, then pin the f6 knight with Bg5 to win the battle for the centre.",
        "Lasting pressure without taking risks.",
        "Slow play against a very solid black setup.",
        "The g5 bishop pinning f6, and the knights on c3 and f3 eyeing d5 and e5."
      ],
      "queens-gambit-accepted": [
        "Black takes on c4: win the pawn back calmly with e3 and Bxc4, then use the centre.",
        "Easy development and a strong centre.",
        "Black gets free play and hits d4 with c5.",
        "The very active c4 bishop and the d4 pawn."
      ],
      london: [
        "Play the same setup against almost anything (Bf4, e3, c3, Nd2, Ngf3), then start a slow kingside attack.",
        "Very little theory and a solid structure: perfect for beginners.",
        "Not ambitious. An informed opponent attacks b2 with Qb6 and chases the f4 bishop.",
        "The f4 bishop, developed before e3, and the knight settling on e5."
      ],
      catalan: [
        "Put the bishop on g2 on the long diagonal and apply slow pressure on the centre and the queenside.",
        "Long-term pressure and a very safe king.",
        "Slow play. The c4 pawn can be taken and take time to win back.",
        "The g2 bishop aiming at b7, and the queen on c2."
      ],
      english: [
        "Control d5 from the flank with c4 and Nc3, fianchetto the king's bishop, and adapt the plan to Black's setup.",
        "Flexible, with far less theory than 1.e4 or 1.d4.",
        "Less direct: Black can take the centre with e5 and d5.",
        "The g2 bishop and the c3 knight, both aimed at d5."
      ],
      "kings-indian-attack": [
        "The same setup whatever Black does (fianchetto, castle, d3, Nbd2), then e4-e5 and a kingside attack.",
        "Easy to learn, with a clear plan.",
        "A bit passive if Black grabs space in the centre.",
        "The g2 bishop, and the knights rushing towards Black's king after e5."
      ],
      "sicilian-najdorf": [
        "a6 controls b5. Black keeps an extra central pawn and counter-attacks on the queenside down the c-file.",
        "Ambitious: you play to win with Black.",
        "A huge amount of theory, and Black's king can come under attack very fast.",
        "The rook on the c-file, the bishop on e6 or e7, and the knight heading for c4."
      ],
      "sicilian-dragon": [
        "Fianchetto on g7, castle, then attack on the queenside down the c-file while White attacks the kingside.",
        "The g7 bishop is fearsome and the counter-attack comes fast.",
        "If White opens the h-file (h4-h5), Black's king is in danger: it is a race.",
        "The g7 bishop, never to be traded without a reason, and the rook on c8."
      ],
      "sicilian-sveshnikov": [
        "Push e5 to chase the d4 knight, accepting a hole on d5 in exchange for very active pieces and the f5 push.",
        "Dynamic, with lots of initiative.",
        "The d5 square is weak and the d6 pawn is backward.",
        "The dark-squared bishop and the f5 pawn. You must stop a white knight from settling on d5."
      ],
      french: [
        "A solid e6-d5 structure: give White space, then attack the base of White's pawn chain with c5 and f6.",
        "A sturdy structure and a clear plan: attack the chain.",
        "The c8 bishop is shut in behind e6 and Black is short of space.",
        "The c5 pawn and the queen on b6 against d4. The c8 bishop must be freed (b6 then Ba6)."
      ],
      "caro-kann": [
        "Play c6-d5, bring the c8 bishop out before e6, keep a structure with no weaknesses and play calmly.",
        "Very solid, with endgames that often favour Black.",
        "A little passive, with fewer chances of a quick win.",
        "The bishop on f5 or g6, out before it gets locked in, and the d7-f6 knight."
      ],
      scandinavian: [
        "Break the centre on move one: the queen recaptures on d5, drops back to a5, then quick development with c6 and Bf5.",
        "Little theory and a simple structure.",
        "The early queen lets White gain tempi.",
        "The queen on a5 and the f5 bishop."
      ],
      petrov: [
        "Counter-attack e4 instead of defending e5, for a symmetrical and very solid position.",
        "Very hard to beat.",
        "Few winning chances. Trap: taking back on e4 before d6 loses the queen.",
        "The active e4 knight, then the bishops."
      ],
      "two-knights": [
        "Nf6 attacks e4. Against Ng5, give back a pawn with d5 then Na5 to seize the initiative.",
        "Active, tricky play.",
        "A pawn down, in tactical positions you need to know.",
        "The a5 knight chasing the bishop, then the active queen and bishops."
      ],
      philidor: [
        "Support e5 with d6, develop behind it and keep a compact position.",
        "Little theory and very solid.",
        "Passive: little space and the f8 bishop is somewhat shut in.",
        "The knights on d7 and f6, and the e5 pawn that must be held."
      ],
      pirc: [
        "Let White have the centre, then attack it with e5 or c5, with the bishop on g7.",
        "Flexible, with counterplay.",
        "Wait too long and White's pawns roll forward and crush the position.",
        "The g7 bishop and the c5 and e5 pawns that strike the centre."
      ],
      alekhine: [
        "Use the knight to lure White's pawns forward, then turn them into targets.",
        "Unbalanced positions that surprise the opponent.",
        "The knight loses time, and if White consolidates, the space advantage tells.",
        "The knight (d5 then b6) and the g4 bishop bothering the f3 knight."
      ],
      "kings-indian": [
        "Give up the centre, strike with e5, then attack the kingside with f5-f4 and g5 while White attacks the queenside.",
        "A very dangerous attack on White's king.",
        "A race: Black's queenside is fragile.",
        "The g7 bishop, even when it looks blocked, the f5 pawn, and the knights heading for the kingside."
      ],
      "nimzo-indian": [
        "Bb4 pins the c3 knight and stops e4. The bishop is often traded to double White's pawns, which then become targets.",
        "A damaged white structure and a clear plan.",
        "You give up the bishop pair.",
        "The knights, strong in closed positions against bishops, and the b4 bishop."
      ],
      "queens-indian": [
        "Control e4 from afar with the fianchettoed bishop. Ba6 hampers the c4 push.",
        "Very solid.",
        "A little passive.",
        "The bishop on b7 or a6."
      ],
      grunfeld: [
        "Let White build a big centre, then bombard it with Bg7, c5 and Nc6.",
        "Dynamic, with strong pressure on d4.",
        "If White's centre holds, it crushes Black's position.",
        "The g7 bishop on the long diagonal and the c5 pawn."
      ],
      slav: [
        "c6 supports d5 without shutting in the c8 bishop, which comes out to f5 before e6.",
        "Very solid.",
        "A little passive, with some theory.",
        "The f5 bishop and the c6 pawn."
      ],
      dutch: [
        "f5 controls e4 and prepares a kingside attack, with the bishop on g7 (Leningrad variation).",
        "Unbalanced positions and play for a win.",
        "Black's king is weakened (the e8-h5 diagonal), and so is the e6 square.",
        "The g7 bishop and the f5 pawn."
      ],
      benko: [
        "Give the b-pawn to open the a- and b-files and keep up the pressure, even in the endgame.",
        "Long-term pressure that is easy to play.",
        "A pawn down.",
        "The rooks on a8 and b8, and the g7 bishop."
      ]
    },
    /* theme id: [the idea, what it is for, when to look for it, key pieces] */
    themes: {
      fork: [
        "One piece attacks two targets at once. The opponent can only save one.",
        "Win material, often with check so the opponent has no time to react.",
        "When two enemy pieces (or the king and a piece) are a knight's jump apart or on one of your queen's lines.",
        "The knight, which hits squares of both colours and cannot be blocked, and the pawn."
      ],
      pin: [
        "A piece cannot move because it shields a more valuable piece behind it.",
        "Freeze a piece, then attack it a second time to win it.",
        "When an enemy piece stands on the same line as its king or queen.",
        "The bishop and the rook, which work at a distance along diagonals and files."
      ],
      skewer: [
        "The reverse of a pin: you attack the most valuable piece, it has to move, and you take the one behind it.",
        "Win the piece hiding behind the king or the queen.",
        "When the king or queen is lined up in front of another piece.",
        "The bishop and the rook, which attack through lines."
      ],
      discovered: [
        "A piece steps aside and unmasks an attack by the piece behind it. Two threats in a single move.",
        "Win material: the moving piece makes its own threat while the other one attacks.",
        "When one of your pieces blocks the line of your bishop, rook or queen towards a target.",
        "The piece that moves (often the knight) and the long-range piece behind it."
      ],
      double: [
        "A discovered attack where both pieces give check at once. The only way out is to move the king.",
        "Mate or win a lot: nobody can block or capture two pieces at once.",
        "When your knight or bishop stands between your rook and the enemy king.",
        "The knight, which gives check as it jumps, and the rook behind it."
      ],
      backrank: [
        "A rook or queen mates the king on its back rank, trapped behind its own pawns.",
        "Mate, or force the opponent to give up material to avoid it.",
        "When the enemy king has no escape square and its back rank is poorly defended.",
        "The rooks and the queen, which control a whole rank."
      ],
      smothered: [
        "The knight mates a king surrounded by its own pieces, which smother it.",
        "Mate, often after a queen sacrifice that forces a piece to block the last square.",
        "When the enemy king sits in a corner surrounded by its pieces and your knight can reach the mating square (f7 or h6 against a king on h8).",
        "The knight, the only piece that jumps over others, helped by the queen."
      ],
      decoy: [
        "You sacrifice a piece to lure an enemy piece (often the king) onto a bad square.",
        "Put the enemy piece where a fork or a mate becomes possible.",
        "When a fork or mate exists but the enemy piece is not on the right square yet.",
        "The rook or queen that sacrifices itself, then the forking knight."
      ],
      promotion: [
        "A pawn reaches the last rank and becomes a queen.",
        "Make a new queen, often by deflecting the piece that blocked the pawn.",
        "When one of your pawns is on the seventh rank.",
        "The pawn, and the rook that deflects the defender."
      ],
      removal: [
        "You capture or chase away the piece defending a square or another important piece.",
        "Clear the way to mate, or win the piece that is no longer defended.",
        "When a single enemy piece is all that stops your attack.",
        "The bishop that trades off the defender, and the queen that cashes in."
      ],
      kiss: [
        "The queen mates the king at close range, protected by another piece.",
        "Mate a poorly defended castled king fast.",
        "When your queen and another piece aim at the same square next to the king (often h7 or h2).",
        "The queen, and the bishop supporting it from afar."
      ]
    }
  }
};
