/* Italiano */
I18N.it = {
  name: "Italiano",
  pieces: "RDTAC", // letters for King, Queen, Rook, Bishop, Knight in move notation
  decimal: ",",

  ui: {
    "nav.play": "Gioca",
    "nav.openings": "Aperture",
    "nav.profile": "Profilo",
    "nav.tactics": "Tattica",

    "language": "Lingua",

    "sound.on": "Audio: sì",
    "sound.off": "Audio: no",

    "engine.builtin": "Motore integrato",
    "engine.short": "Motore",
    "engine.noteSf": "Avversario e analisi: {name}, nel tuo browser.",
    "engine.noteMini": "Stockfish non è caricato per ora. Il motore integrato, più debole (circa 1500 al massimo), lo sostituisce.",

    "board.promotion": "Promozione",
    "board.cancel": "Annulla",

    "piece.n": "Cavallo",
    "piece.b": "Alfiere",
    "piece.r": "Torre",
    "piece.q": "Donna",
    "piece.k": "Re",
    "piece.p": "Pedone",

    "class.brilliant": "Geniale",
    "class.great": "Ottima mossa",
    "class.best": "Mossa migliore",
    "class.excellent": "Eccellente",
    "class.good": "Buona mossa",
    "class.book": "Teorica",
    "class.inaccuracy": "Imprecisione",
    "class.mistake": "Errore",
    "class.miss": "Occasione mancata",
    "class.blunder": "Errore grave",
    "class.forced": "Forzata",

    "comment.brilliant": "Un sacrificio che regge. Il motore non trova di meglio.",
    "comment.great": "Era l'unica mossa che teneva davvero la posizione.",
    "comment.best": "Esattamente la mossa del motore.",
    "comment.excellent": "Molto vicina alla mossa migliore.",
    "comment.good": "Giocabile, niente di più.",
    "comment.book": "Mossa nota della teoria delle aperture.",
    "comment.forced": "Avevi una sola mossa legale.",
    "comment.inaccuracy": "C'era qualcosa di più preciso in questa posizione.",
    "comment.mistake": "Questa mossa ti fa perdere terreno.",
    "comment.miss": "Avevi una mossa vincente e te la sei lasciata sfuggire.",
    "comment.blunder": "Questa mossa perde molto.",

    "reason.mate": "scacco matto",
    "reason.stalemate": "stallo",
    "reason.material": "materiale insufficiente",
    "reason.fifty": "regola delle 50 mosse",
    "reason.repetition": "ripetizione",
    "reason.resign": "abbandono",
    "reason.time": "tempo scaduto",

    "game.thinking": "sta pensando",
    "game.you": "Tu",
    "game.ranked": "classificata",
    "game.casual": "amichevole",
    "game.movesAria": "Mosse giocate",
    "game.movesEmpty": "Le mosse appariranno qui.",
    "game.live": "Torna alla posizione attuale",
    "game.undo": "Riprendi la mossa",
    "game.resign": "Abbandona",
    "game.resignConfirm": "Conferma l'abbandono",

    "coach.ranked": "Partita classificata",
    "coach.noCoach": "Senza allenatore",
    "coach.noFeedback": "Nessun commento durante la partita. Il bilancio delle tue mosse appare alla fine.",
    "coach.coach": "Allenatore",
    "coach.analysing": "Analisi della tua mossa…",
    "coach.over": "Partita terminata.",
    "coach.yourTurn": "Tocca a te. Ogni mossa viene valutata appena la giochi.",
    "coach.engineThinks": "Il motore sta pensando.",

    "result.win": "Vittoria",
    "result.loss": "Sconfitta",
    "result.draw": "Patta",
    "result.newElo": "Nuovo Elo: <b>{elo}</b>. Il prossimo avversario giocherà a questo livello.",
    "result.accuracy": "Precisione delle tue mosse: <b>{n} %</b>",
    "result.review": "Tocca una mossa nella lista per rivedere la posizione.",
    "result.again": "Rigioca",
    "result.back": "Indietro",

    "lobby.rankedLabel": "Classificata · rapid 10 min",
    "lobby.record": "record {n}",
    "lobby.wdl": "{w} V · {d} P · {l} S",
    "lobby.rankedText": "Senza allenatore. Il motore gioca al tuo Elo: una vittoria vale {k} punti, una sconfitta ne costa {k}.",
    "lobby.placement": "Le prime 10 partite contano di più per trovare prima il tuo livello (ne restano {n}).",
    "lobby.rankedBtn": "Gioca una partita classificata",
    "lobby.coachLabel": "Con l'allenatore · amichevole",
    "lobby.coachTitle": "Ogni mossa valutata",
    "lobby.coachText": "Appena giochi, sai se era geniale, la mossa migliore, un'imprecisione o un errore grave. La mossa giusta non viene mai mostrata.",
    "lobby.coachSub": "Motore al tuo livello ({elo}), senza Elo in palio. Puoi riprendere le mosse.",
    "lobby.coachBtn": "Gioca con l'allenatore",
    "lobby.customLabel": "Partita personalizzata · senza Elo",
    "lobby.level": "Livello del motore",
    "lobby.color": "Colore",
    "lobby.white": "Bianco",
    "lobby.random": "Casuale",
    "lobby.black": "Nero",
    "lobby.coachSwitch": "Allenatore in diretta",
    "lobby.customBtn": "Avvia la partita",

    "openings.daily": "Apertura del giorno",
    "openings.youPlay": "Giochi con il {side}. {n} mosse da trovare.",
    "openings.train": "Allenati su questa apertura",
    "openings.all": "Tutte le aperture",
    "openings.doneCount": "{a} / {b} superate",
    "openings.withWhite": "Con il Bianco",
    "openings.withBlack": "Con il Nero",
    "openings.moves": "{n} mosse",
    "openings.ok": "superata ×{n}",
    "openings.retry": "da ripassare",
    "openings.new": "nuova",

    "drill.good": "Ben giocato: {san}",
    "drill.wrong": "{san} non è la mossa di questa linea. Riprova.",
    "drill.finished": "linea completata",
    "drill.clean": "Nessun errore. Apertura superata.",
    "drill.errors": ["{n} errore", "{n} errori"],
    "drill.withHelp": ", con aiuto",
    "drill.replay": ". Rigiocala per superarla.",
    "drill.youPlay": "giochi con il {side}",
    "drill.prompt": "Gioca la mossa della linea.",
    "drill.again": "Rigioca la linea",
    "drill.continue": "Continua contro il motore",
    "drill.others": "Altre aperture",
    "drill.hint": "Suggerimento",
    "drill.show": "Mostra la mossa",
    "drill.hideLine": "Nascondi la linea",
    "drill.showLine": "Vedi tutta la linea",
    "drill.restart": "Ricomincia",
    "drill.quit": "Esci",

    "tactics.daily": "Tattica del giorno",
    "tactics.intro": "Ogni esercizio parte da una posizione di mediogioco. Trova la continuazione vincente, poi leggi perché funziona.",
    "tactics.solve": "Risolvi",
    "tactics.themes": "Temi",
    "tactics.count": "{a} / {b} risolti",
    "tactics.ok": "risolto ×{n}",
    "tactics.retry": "da ripassare",
    "tactics.new": "nuovo",
    "tactics.puzzle": "Esercizio {n}",
    "tactics.mateW": "Il Bianco muove e dà matto in {n}.",
    "tactics.mateB": "Il Nero muove e dà matto in {n}.",
    "tactics.winW": "Il Bianco muove e vince materiale.",
    "tactics.winB": "Il Nero muove e vince materiale.",
    "tactics.good": "Ben visto: {san}",
    "tactics.wrong": "{san} qui non funziona. Riprova.",
    "tactics.solved": "Tattica risolta",
    "tactics.clean": "Trovata senza errori.",
    "tactics.errors": ["Risolta con {n} errore.", "Risolta con {n} errori."],
    "tactics.helped": "Risolta con aiuto.",
    "tactics.hidden": "Tema nascosto",
    "tactics.reveal": "Mostra il tema",
    "tactics.theme": "Tema: {th}",
    "tactics.next": "Esercizio successivo",
    "tactics.list": "Tutti gli esercizi",

    "theme.fork": "Forchetta",
    "theme.pin": "Inchiodatura",
    "theme.skewer": "Infilata",
    "theme.discovered": "Attacco di scoperta",
    "theme.double": "Scacco doppio",
    "theme.backrank": "Matto del corridoio",
    "theme.smothered": "Matto affogato",
    "theme.decoy": "Adescamento",
    "theme.promotion": "Promozione",
    "theme.removal": "Eliminazione del difensore",
    "theme.kiss": "Matto del bacio",

    "tag.attack": "Aggressiva",
    "tag.sharp": "Tagliente",
    "tag.gambit": "Gambetto",
    "tag.solid": "Solida",
    "tag.positional": "Gioco lento",
    "tag.counter": "Contrattacco",
    "tag.system": "Schema facile",
    "tag.open": "Gioco aperto",
    "tag.closed": "Gioco chiuso",

    "learn.title": "Capire l'apertura",
    "learn.titleTheme": "Capire la tattica",
    "learn.plan": "Il piano",
    "learn.strengths": "Punti di forza",
    "learn.weaknesses": "Punti deboli",
    "learn.pieces": "Pezzi chiave",
    "learn.what": "L'idea",
    "learn.why": "A cosa serve",
    "learn.when": "Quando cercarla",

    "profile.elo": "Elo classificato",
    "profile.graphEmpty": "Il grafico appare dopo la tua prima partita classificata.",
    "profile.graphAria": "Andamento dell'Elo, da {a} a {b}",
    "profile.games": "Partite",
    "profile.best": "Record",
    "profile.openings": "Aperture",
    "profile.wdl": "{w} vittorie · {d} patte · {l} sconfitte",
    "profile.last": "Ultime partite",
    "profile.none": "Ancora nessuna partita.",
    "profile.row": "{color} contro {opp} · {n} mosse · {reason}",
    "profile.synced": "Progressi salvati nel tuo account: li ritrovi sugli altri dispositivi.",
    "profile.local": "Progressi salvati in questo browser.",
    "profile.reset": "Azzera il profilo",
    "profile.resetConfirm": "Conferma l'azzeramento",
    "profile.resetDone": "Profilo azzerato",
    "profile.tactics": "Tattica"
  },

  /* opening id: [name, one-line idea] */
  openings: {
    italian: ["Partita italiana", "Sviluppo rapido, alfiere puntato su f7, poi c3 e d3 per preparare d4 al momento giusto."],
    "ruy-lopez": ["Partita spagnola", "Pressione duratura sul cavallo c6, che difende e5. Arrocca presto e tieni l'alfiere sulla diagonale a2-g8."],
    scotch: ["Partita scozzese", "Apri subito il centro con d4 per guadagnare spazio e linee aperte."],
    "four-knights": ["Partita dei quattro cavalli", "Sviluppo simmetrico e solido, poi d4 per aprire il gioco senza rischi."],
    "evans-gambit": ["Gambetto Evans", "Offri il pedone b4 per guadagnare tempi sull'alfiere e costruire un grande centro con c3 e d4."],
    "fried-liver": ["Attacco Fegatello", "Sacrificio di cavallo in f7 per trascinare il re nero al centro. Da conoscere per punire Cxd5."],
    "vienna-gambit": ["Gambetto viennese", "Un gambetto di re ritardato: prima Cc3, poi f4 per attaccare il centro nero."],
    "kings-gambit": ["Gambetto di re", "Si dà il pedone f per deviare e5, aprire la colonna f e attaccare in fretta. Molto tagliente."],
    "sicilian-alapin": ["Siciliana Alapin", "Contro la Siciliana: c3 prepara d4 per mantenere un centro di pedoni, senza la teoria delle linee aperte."],
    "smith-morra": ["Gambetto Smith-Morra", "Un pedone in cambio di vantaggio di sviluppo e colonne c e d aperte per le torri."],
    "french-advance": ["Francese, variante di spinta", "e5 guadagna spazio e chiude l'alfiere c8. Poi bisogna tenere d4, che il Nero attacca da ogni lato."],
    "caro-kann-advance": ["Caro-Kann, variante di spinta", "Spazio al centro e sviluppo tranquillo: Cf3, Ae2, arrocco, poi si reagisce a c5."],
    "queens-gambit-declined": ["Gambetto di donna rifiutato", "c4 attacca il centro nero. Sviluppo naturale e inchiodatura del cavallo f6 con Ag5."],
    "queens-gambit-accepted": ["Gambetto di donna accettato", "Il Nero prende in c4; recupera il pedone con calma con e3 e Axc4, con un buon centro."],
    london: ["Sistema di Londra", "Uno schema da giocare contro quasi tutto: Af4, e3, c3, Cd2, Cgf3. Solido e facile da ricordare."],
    catalan: ["Apertura catalana", "Gambetto di donna con l'alfiere in fianchetto: pressione a lungo termine sulla grande diagonale."],
    english: ["Apertura inglese", "Una Siciliana con un tempo in più: controllo di d5 dall'ala e fianchetto dell'alfiere di re."],
    "kings-indian-attack": ["Attacco est-indiano", "Lo stesso schema qualunque cosa giochi il Nero: fianchetto, arrocco, d3, Cbd2 e poi e4."],
    "sicilian-najdorf": ["Siciliana Najdorf", "a6 controlla b5 e prepara e5 o b5. La difesa più ambiziosa contro 1.e4."],
    "sicilian-dragon": ["Siciliana del Dragone", "L'alfiere g7 domina la grande diagonale. Gioco molto tattico con arrocchi opposti."],
    "sicilian-sveshnikov": ["Siciliana Sveshnikov", "e5 scaccia il cavallo al prezzo di un buco in d5, in cambio di pezzi molto attivi."],
    french: ["Difesa francese", "Struttura solida: si lascia spazio al Bianco e poi si attacca la catena di pedoni con c5."],
    "caro-kann": ["Difesa Caro-Kann", "Come la Francese, ma l'alfiere c8 esce prima di e6. Molto solida, poche debolezze."],
    scandinavian: ["Difesa scandinava", "Si rompe il centro alla prima mossa. La donna esce presto ma trova un buon posto in a5."],
    petrov: ["Difesa russa", "Contrattacco su e4 invece di difendere e5. Attenzione: d6 prima di riprendere in e4."],
    "two-knights": ["Difesa dei due cavalli", "Contro Cg5: d5 e poi Ca5, si dà un pedone per l'iniziativa invece di cadere nel Fegatello."],
    philidor: ["Difesa Philidor", "e5 difeso da d6: posizione un po' passiva ma molto solida, con poca teoria."],
    pirc: ["Difesa Pirc", "Si lascia il centro al Bianco per attaccarlo più tardi, con l'alfiere in fianchetto."],
    alekhine: ["Difesa Alekhine", "Il cavallo provoca l'avanzata dei pedoni bianchi per farne dei bersagli."],
    "kings-indian": ["Difesa est-indiana", "Il Bianco prende il centro, il Nero colpisce con e5 e poi attacca sull'ala di re con f5."],
    "nimzo-indian": ["Difesa nimzo-indiana", "Ab4 inchioda il cavallo e impedisce e4. Si è pronti a cedere la coppia degli alfieri per rovinare i pedoni."],
    "queens-indian": ["Difesa ovest-indiana", "Controllo di e4 a distanza con l'alfiere di donna. Aa6 disturba lo sviluppo bianco puntando su c4."],
    grunfeld: ["Difesa Grünfeld", "Si lascia al Bianco un grande centro, poi lo si bombarda con Ag7 e c5."],
    slav: ["Difesa slava", "c6 sostiene d5 senza chiudere l'alfiere c8, che esce in f5 prima di e6."],
    dutch: ["Difesa olandese", "f5 controlla e4 e annuncia un attacco sull'ala di re. Variante Leningrado con fianchetto."],
    benko: ["Gambetto Benko", "Un pedone in cambio di pressione duratura sulle colonne a e b, anche nel finale."]
  },

  learn: {
    /* opening id: [plan, strengths, weaknesses, key pieces] */
    openings: {
      italian: [
        "Sviluppare in fretta, arroccare e preparare d4 con c3 per prendere il centro. L'alfiere c4 punta su f7, il punto più debole del campo nero.",
        "Mosse naturali, facili da capire, e pressione immediata su f7.",
        "Se il Nero gioca con precisione, la partita diventa tranquilla e pari. L'alfiere c4 può essere cambiato con Ca5 o Ae6.",
        "L'alfiere c4, puntato su f7, e il cavallo f3 che sostiene d4 e può saltare in g5."
      ],
      "ruy-lopez": [
        "Attaccare il difensore di e5 (il cavallo c6), arroccare, giocare Te1 e poi c3 e d4 per un centro solido. Una pressione lenta che dura tutta la partita.",
        "Un vantaggio duraturo, senza rischi, e piani molto ricchi nel mediogioco.",
        "Molta teoria. L'alfiere viene cacciato con a6 e b5, e il vantaggio richiede tempo.",
        "L'alfiere, che finisce in b3 puntato su f7, e la torre e1 che sostiene e4."
      ],
      scotch: [
        "Aprire subito il centro con d4 per cambiare il pedone e5 e giocare con pezzi attivi e spazio.",
        "Gioco chiaro, pochi pedoni bloccati e iniziativa rapida.",
        "Il centro aperto attiva anche i pezzi neri. Dopo Cxc6 bxc6 il Nero ottiene un buon centro di pedoni.",
        "Il cavallo d4 al centro, poi donna e alfieri sulle linee aperte."
      ],
      "four-knights": [
        "Sviluppare tutto in modo simmetrico, arroccare e aprire il gioco con d4 quando il re è al sicuro.",
        "Molto sicura, logica semplice (cavalli prima degli alfieri) e poche trappole.",
        "Poco ambiziosa: la posizione resta spesso pari e simmetrica.",
        "I cavalli, che controllano d5 ed e4, e l'alfiere che arriva in d3."
      ],
      "evans-gambit": [
        "Dare il pedone b4 per guadagnare due tempi (c3 e poi d4), costruire un grande centro e attaccare il re nero ancora al centro.",
        "Iniziativa enorme, diagonali aperte verso f7 e tante trappole.",
        "Un pedone in meno: se l'attacco si spegne, il finale è cattivo.",
        "L'alfiere c4 e la donna (spesso in b3) puntati insieme su f7, poi una torre sulla colonna e."
      ],
      "fried-liver": [
        "Punire 5...Cxd5 sacrificando il cavallo in f7 per portare il re nero al centro e attaccarlo con donna, alfiere e cavalli.",
        "Un attacco molto forte se la difesa non è precisa. Ideale per vincere in fretta a livello amatoriale.",
        "Un pezzo in meno. Contro 5...Ca5 (la risposta giusta) il sacrificio non esiste.",
        "La donna in f3 e l'alfiere c4 che inchiodano il cavallo d5, più il cavallo c3 che aggiunge pressione."
      ],
      "vienna-gambit": [
        "Controllare d5 con Cc3, poi giocare f4 per rompere e5 e aprire la colonna f verso il re nero.",
        "Un attacco sull'ala di re sostenuto dalla torre f.",
        "Il re bianco è indebolito sulla diagonale g1-a7, e la risposta d5 colpisce il centro.",
        "La torre f1 sulla colonna f e il cavallo c3."
      ],
      "kings-gambit": [
        "Dare il pedone f per deviare e5, prendere il centro con d4 e attaccare f7 dalla colonna f.",
        "Iniziativa immediata e posizioni caotiche dove vince chi è più preparato.",
        "Il re bianco è esposto, manca un pedone e diverse linee sono confutate.",
        "La torre f1 sulla colonna aperta, l'alfiere c4 verso f7 e i cavalli che saltano in e5 o g5."
      ],
      "sicilian-alapin": [
        "Contro la Siciliana, giocare c3 e poi d4 per tenere un centro di pedoni senza entrare nelle linee preferite del Nero.",
        "Evita tantissima teoria, con un centro solido e un gioco semplice.",
        "c3 toglie la casa al cavallo b1, e il Nero pareggia facilmente con Cf6 o d5.",
        "Il pedone d4, perno del centro, e l'alfiere in c4 o d3 puntato sull'arrocco."
      ],
      "smith-morra": [
        "Offrire il pedone c per sviluppare tutti i pezzi molto in fretta e usare le colonne c e d aperte.",
        "Vantaggio di sviluppo, attacchi rapidi e molte trappole.",
        "Un pedone in meno: se il Nero completa lo sviluppo senza danni, il vantaggio sparisce.",
        "Le torri in c1 e d1, l'alfiere c4 verso f7 e il cavallo che salta in d5."
      ],
      "french-advance": [
        "Spingere e5 per guadagnare spazio e chiudere l'alfiere c8, difendere la catena d4-e5 e attaccare sull'ala di re.",
        "Spazio, un piano chiaro e un attacco naturale contro l'arrocco.",
        "d4 è attaccato da ogni lato (c5, Cc6, Db6): se la catena cede, il centro crolla.",
        "Il cavallo f3 che difende d4 e l'alfiere d3 rivolto verso h7."
      ],
      "caro-kann-advance": [
        "Prendere spazio con e5, svilupparsi con calma e reagire alla spinta c5 del Nero.",
        "Spazio e gioco senza rischi.",
        "Il Nero ha già portato il suo alfiere buono in f5 e la sua struttura resta molto solida.",
        "Il cavallo f3 e l'alfiere e3, che tengono d4."
      ],
      "queens-gambit-declined": [
        "Attaccare il centro nero con c4, svilupparsi in modo naturale e inchiodare il cavallo f6 con Ag5 per vincere la lotta per il centro.",
        "Pressione duratura senza rischi.",
        "Gioco lento contro una difesa nera molto solida.",
        "L'alfiere g5 che inchioda f6 e i cavalli c3 e f3 che guardano d5 ed e5."
      ],
      "queens-gambit-accepted": [
        "Il Nero prende in c4: si recupera il pedone con calma con e3 e Axc4, poi si sfrutta il centro.",
        "Sviluppo facile e centro forte.",
        "Il Nero ha gioco libero e colpisce d4 con c5.",
        "L'alfiere c4 molto attivo e il pedone d4."
      ],
      london: [
        "Giocare lo stesso schema contro quasi tutto (Af4, e3, c3, Cd2, Cgf3), poi lanciare un attacco lento sull'ala di re.",
        "Pochissima teoria e una struttura solida: perfetto per iniziare.",
        "Poco ambizioso. Un avversario preparato attacca b2 con Db6 e caccia l'alfiere f4.",
        "L'alfiere f4, uscito prima di e3, e il cavallo che si installa in e5."
      ],
      catalan: [
        "Mettere l'alfiere in g2 sulla grande diagonale ed esercitare una pressione lenta sul centro e sull'ala di donna.",
        "Pressione a lungo termine e re bianco molto sicuro.",
        "Gioco lento. Il pedone c4 può essere preso ed è lungo da recuperare.",
        "L'alfiere g2 puntato verso b7 e la donna in c2."
      ],
      english: [
        "Controllare d5 dall'ala con c4 e Cc3, fianchettare l'alfiere di re e adattare il piano al gioco nero.",
        "Flessibile, con molta meno teoria di 1.e4 o 1.d4.",
        "Meno diretta: il Nero può prendere il centro con e5 e d5.",
        "L'alfiere g2 e il cavallo c3, entrambi rivolti verso d5."
      ],
      "kings-indian-attack": [
        "Lo stesso schema qualunque cosa faccia il Nero (fianchetto, arrocco, d3, Cbd2), poi e4-e5 e attacco sull'ala di re.",
        "Facile da imparare, con un piano chiaro.",
        "Un po' passivo se il Nero prende spazio al centro.",
        "L'alfiere g2 e i cavalli che corrono verso il re nero dopo e5."
      ],
      "sicilian-najdorf": [
        "a6 controlla b5. Il Nero tiene un pedone centrale in più e contrattacca sull'ala di donna lungo la colonna c.",
        "Ambiziosa: si gioca per vincere con il Nero.",
        "Enormemente teorica, e il re nero può essere attaccato molto in fretta.",
        "La torre sulla colonna c, l'alfiere in e6 o e7 e il cavallo che punta su c4."
      ],
      "sicilian-dragon": [
        "Fianchetto in g7, arrocco, poi attacco sull'ala di donna lungo la colonna c mentre il Bianco attacca l'ala di re.",
        "L'alfiere g7 è temibile e il contrattacco arriva presto.",
        "Se il Bianco apre la colonna h (h4-h5), il re nero è in pericolo: è una corsa.",
        "L'alfiere g7, da non cambiare mai senza motivo, e la torre in c8."
      ],
      "sicilian-sveshnikov": [
        "Spingere e5 per cacciare il cavallo d4, accettando un buco in d5 in cambio di pezzi molto attivi e della spinta f5.",
        "Dinamica, con molta iniziativa.",
        "La casa d5 è debole e il pedone d6 è arretrato.",
        "L'alfiere camposcuro e il pedone f5. Bisogna impedire a un cavallo bianco di installarsi in d5."
      ],
      french: [
        "Struttura solida e6-d5: si lascia spazio al Bianco e poi si attacca la base della sua catena di pedoni con c5 e f6.",
        "Struttura robusta e piano chiaro: attaccare la catena.",
        "L'alfiere c8 resta chiuso dietro e6 e al Nero manca spazio.",
        "Il pedone c5 e la donna in b6 contro d4. L'alfiere c8 va liberato (b6 e poi Aa6)."
      ],
      "caro-kann": [
        "Giocare c6-d5, far uscire l'alfiere c8 prima di e6, tenere una struttura senza debolezze e giocare con calma.",
        "Molto solida, con finali spesso favorevoli.",
        "Un po' passiva, con meno possibilità di vincere in fretta.",
        "L'alfiere in f5 o g6, uscito prima di restare chiuso, e il cavallo d7-f6."
      ],
      scandinavian: [
        "Rompere il centro alla prima mossa: la donna riprende in d5, si ritira in a5, poi sviluppo rapido con c6 e Af5.",
        "Poca teoria e una struttura semplice.",
        "La donna uscita presto fa guadagnare tempi al Bianco.",
        "La donna in a5 e l'alfiere in f5."
      ],
      petrov: [
        "Contrattaccare e4 invece di difendere e5, per una posizione simmetrica e molto solida.",
        "Molto difficile da battere.",
        "Poche possibilità di vincere. Trappola: riprendere in e4 prima di d6 perde la donna.",
        "Il cavallo attivo in e4, poi gli alfieri."
      ],
      "two-knights": [
        "Cf6 attacca e4. Contro Cg5, restituire un pedone con d5 e poi Ca5 per prendere l'iniziativa.",
        "Gioco attivo e insidioso.",
        "Un pedone in meno, in posizioni tattiche da conoscere.",
        "Il cavallo a5 che caccia l'alfiere, poi donna e alfieri attivi."
      ],
      philidor: [
        "Sostenere e5 con d6, svilupparsi dietro e tenere una posizione compatta.",
        "Poca teoria e molto solida.",
        "Passiva: poco spazio e l'alfiere f8 un po' chiuso.",
        "I cavalli d7 e f6, e il pedone e5 da tenere."
      ],
      pirc: [
        "Lasciare il centro al Bianco e attaccarlo più tardi con e5 o c5, con l'alfiere in g7.",
        "Flessibile, con controgioco.",
        "Se si aspetta troppo, i pedoni bianchi avanzano e schiacciano la posizione.",
        "L'alfiere g7 e i pedoni c5 ed e5 che colpiscono il centro."
      ],
      alekhine: [
        "Provocare l'avanzata dei pedoni bianchi con il cavallo, per farne poi dei bersagli.",
        "Posizioni squilibrate che sorprendono l'avversario.",
        "Il cavallo perde tempo, e se il Bianco consolida, il suo spazio pesa.",
        "Il cavallo (d5 e poi b6) e l'alfiere g4 che disturba il cavallo f3."
      ],
      "kings-indian": [
        "Cedere il centro, colpire con e5, poi attaccare sull'ala di re con f5-f4 e g5 mentre il Bianco attacca l'ala di donna.",
        "Un attacco molto pericoloso contro il re bianco.",
        "Una corsa: l'ala di donna nera è fragile.",
        "L'alfiere g7, anche se sembra chiuso, il pedone f5 e i cavalli che vanno verso l'ala di re."
      ],
      "nimzo-indian": [
        "Ab4 inchioda il cavallo c3 e impedisce e4. Spesso si cambia l'alfiere per raddoppiare i pedoni bianchi, che poi diventano bersagli.",
        "Struttura bianca rovinata e piano chiaro.",
        "Si cede la coppia degli alfieri.",
        "I cavalli, forti nelle posizioni chiuse contro gli alfieri, e l'alfiere b4."
      ],
      "queens-indian": [
        "Controllare e4 a distanza con l'alfiere in fianchetto. Aa6 ostacola la spinta c4.",
        "Molto solida.",
        "Un po' passiva.",
        "L'alfiere in b7 o a6."
      ],
      grunfeld: [
        "Lasciare che il Bianco costruisca un grande centro e poi bombardarlo con Ag7, c5 e Cc6.",
        "Dinamica, con forte pressione su d4.",
        "Se il centro bianco regge, schiaccia la posizione nera.",
        "L'alfiere g7 sulla grande diagonale e il pedone c5."
      ],
      slav: [
        "c6 sostiene d5 senza chiudere l'alfiere c8, che esce in f5 prima di e6.",
        "Molto solida.",
        "Un po' passiva, con teoria.",
        "L'alfiere f5 e il pedone c6."
      ],
      dutch: [
        "f5 controlla e4 e prepara un attacco sull'ala di re, con l'alfiere in g7 (variante Leningrado).",
        "Posizioni squilibrate e gioco per vincere.",
        "Il re nero è indebolito (diagonale e8-h5), così come la casa e6.",
        "L'alfiere g7 e il pedone f5."
      ],
      benko: [
        "Dare il pedone b per aprire le colonne a e b e mantenere la pressione, anche nel finale.",
        "Pressione a lungo termine facile da giocare.",
        "Un pedone in meno.",
        "Le torri in a8 e b8, e l'alfiere g7."
      ]
    },
    /* theme id: [the idea, what it is for, when to look for it, key pieces] */
    themes: {
      fork: [
        "Un solo pezzo attacca due bersagli insieme. L'avversario può salvarne solo uno.",
        "Guadagnare materiale, spesso con scacco perché l'avversario non abbia tempo di reagire.",
        "Quando due pezzi avversari (o il re e un pezzo) sono a un salto di cavallo o su una stessa linea della tua donna.",
        "Il cavallo, che attacca case di entrambi i colori e non può essere bloccato, e il pedone."
      ],
      pin: [
        "Un pezzo non può muoversi perché protegge un pezzo più prezioso dietro di sé.",
        "Immobilizzare un pezzo e poi attaccarlo una seconda volta per vincerlo.",
        "Quando un pezzo avversario è sulla stessa linea del suo re o della sua donna.",
        "L'alfiere e la torre, che agiscono a distanza su diagonali e colonne."
      ],
      skewer: [
        "Il contrario dell'inchiodatura: si attacca il pezzo più prezioso, deve spostarsi, e si prende quello dietro.",
        "Vincere il pezzo nascosto dietro il re o la donna.",
        "Quando il re o la donna sono allineati davanti a un altro pezzo.",
        "L'alfiere e la torre, che attaccano attraverso le linee."
      ],
      discovered: [
        "Un pezzo si sposta e scopre l'attacco di un altro pezzo dietro di sé. Due minacce con una sola mossa.",
        "Guadagnare materiale: il pezzo che si muove fa la sua minaccia mentre l'altro attacca.",
        "Quando uno dei tuoi pezzi copre la linea del tuo alfiere, torre o donna verso un bersaglio.",
        "Il pezzo che si muove (spesso il cavallo) e il pezzo a lungo raggio che si scopre."
      ],
      double: [
        "Un attacco di scoperta in cui entrambi i pezzi danno scacco insieme. L'unica via d'uscita è muovere il re.",
        "Dare matto o vincere molto: nessuno può bloccare o catturare due pezzi insieme.",
        "Quando il tuo cavallo o alfiere sta tra la tua torre e il re avversario.",
        "Il cavallo, che dà scacco saltando, e la torre che si scopre."
      ],
      backrank: [
        "Torre o donna danno matto al re sulla sua ultima traversa, chiuso dietro i propri pedoni.",
        "Dare matto, o costringere l'avversario a cedere materiale per evitarlo.",
        "Quando il re avversario non ha case di fuga e la sua ultima traversa è mal difesa.",
        "Le torri e la donna, che controllano un'intera traversa."
      ],
      smothered: [
        "Il cavallo dà matto a un re circondato dai propri pezzi, che lo soffocano.",
        "Dare matto, spesso dopo un sacrificio di donna che costringe un pezzo a chiudere l'ultima casa.",
        "Quando il re avversario è in un angolo circondato dai suoi pezzi e il tuo cavallo può arrivare sulla casa del matto (f7 o h6 contro un re in h8).",
        "Il cavallo, l'unico pezzo che salta sugli altri, aiutato dalla donna."
      ],
      decoy: [
        "Si sacrifica un pezzo per attirare un pezzo avversario (spesso il re) su una casa sbagliata.",
        "Portare il pezzo avversario dove una forchetta o un matto diventano possibili.",
        "Quando esiste una forchetta o un matto ma il pezzo avversario non è ancora sulla casa giusta.",
        "La torre o la donna che si sacrificano, poi il cavallo che fa la forchetta."
      ],
      promotion: [
        "Un pedone arriva sull'ultima traversa e diventa donna.",
        "Ottenere una nuova donna, spesso deviando il pezzo che bloccava il pedone.",
        "Quando uno dei tuoi pedoni è sulla settima traversa.",
        "Il pedone, e la torre che devia il difensore."
      ],
      removal: [
        "Si cattura o si scaccia il pezzo che difende una casa o un altro pezzo importante.",
        "Aprire la strada al matto o vincere il pezzo rimasto indifeso.",
        "Quando un solo pezzo avversario impedisce al tuo attacco di riuscire.",
        "L'alfiere che cambia il difensore e la donna che ne approfitta."
      ],
      kiss: [
        "La donna dà matto al re a contatto, protetta da un altro pezzo.",
        "Dare matto in fretta a un re arroccato mal difeso.",
        "Quando la tua donna e un altro pezzo puntano sulla stessa casa vicino al re (spesso h7 o h2).",
        "La donna, e l'alfiere che la sostiene da lontano."
      ]
    }
  }
};
