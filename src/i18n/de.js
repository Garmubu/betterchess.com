/* Deutsch */
I18N.de = {
  name: "Deutsch",
  pieces: "KDTLS", // letters for King, Queen, Rook, Bishop, Knight in move notation
  decimal: ",",

  ui: {
    "nav.play": "Spielen",
    "nav.openings": "Eröffnungen",
    "nav.profile": "Profil",
    "nav.tactics": "Taktik",

    "language": "Sprache",

    "sound.on": "Ton: an",
    "sound.off": "Ton: aus",

    "engine.builtin": "Eingebaute Engine",
    "engine.short": "Engine",
    "engine.noteSf": "Gegner und Analyse: {name}, in deinem Browser.",
    "engine.noteMini": "Stockfish ist gerade nicht geladen. Die schwächere eingebaute Engine (höchstens etwa 1500) springt ein.",

    "board.promotion": "Umwandlung",
    "board.cancel": "Abbrechen",

    "piece.n": "Springer",
    "piece.b": "Läufer",
    "piece.r": "Turm",
    "piece.q": "Dame",
    "piece.k": "König",
    "piece.p": "Bauer",

    "class.brilliant": "Brillant",
    "class.great": "Großartiger Zug",
    "class.best": "Bester Zug",
    "class.excellent": "Ausgezeichnet",
    "class.good": "Guter Zug",
    "class.book": "Theorie",
    "class.inaccuracy": "Ungenauigkeit",
    "class.mistake": "Fehler",
    "class.miss": "Verpasste Chance",
    "class.blunder": "Patzer",
    "class.forced": "Erzwungen",

    "comment.brilliant": "Ein Opfer, das funktioniert. Die Engine findet nichts Besseres.",
    "comment.great": "Der einzige Zug, der die Stellung wirklich hielt.",
    "comment.best": "Genau der Zug der Engine.",
    "comment.excellent": "Sehr nah am besten Zug.",
    "comment.good": "Spielbar, mehr nicht.",
    "comment.book": "Ein bekannter Zug der Eröffnungstheorie.",
    "comment.forced": "Du hattest nur einen legalen Zug.",
    "comment.inaccuracy": "Hier gab es etwas Genaueres.",
    "comment.mistake": "Dieser Zug kostet dich Boden.",
    "comment.miss": "Du hattest einen Gewinnzug und hast ihn ausgelassen.",
    "comment.blunder": "Dieser Zug verliert viel.",

    "reason.mate": "Schachmatt",
    "reason.stalemate": "Patt",
    "reason.material": "ungenügendes Material",
    "reason.fifty": "50-Züge-Regel",
    "reason.repetition": "Stellungswiederholung",
    "reason.resign": "Aufgabe",
    "reason.time": "Zeit abgelaufen",

    "game.thinking": "denkt nach",
    "game.you": "Du",
    "game.ranked": "gewertet",
    "game.casual": "frei",
    "game.movesAria": "Gespielte Züge",
    "game.movesEmpty": "Die Züge erscheinen hier.",
    "game.live": "Zurück zur aktuellen Stellung",
    "game.undo": "Zug zurücknehmen",
    "game.resign": "Aufgeben",
    "game.resignConfirm": "Aufgabe bestätigen",

    "coach.ranked": "Gewertete Partie",
    "coach.noCoach": "Ohne Trainer",
    "coach.noFeedback": "Keine Rückmeldung während der Partie. Die Auswertung deiner Züge erscheint am Ende.",
    "coach.coach": "Trainer",
    "coach.analysing": "Dein Zug wird analysiert…",
    "coach.over": "Partie beendet.",
    "coach.yourTurn": "Du bist am Zug. Jeder Zug wird bewertet, sobald du ihn spielst.",
    "coach.engineThinks": "Die Engine denkt nach.",

    "result.win": "Sieg",
    "result.loss": "Niederlage",
    "result.draw": "Remis",
    "result.newElo": "Neue Elo: <b>{elo}</b>. Der nächste Gegner spielt auf diesem Niveau.",
    "result.accuracy": "Genauigkeit deiner Züge: <b>{n} %</b>",
    "result.review": "Tippe auf einen Zug in der Liste, um die Stellung anzusehen.",
    "result.again": "Noch einmal",
    "result.back": "Zurück",

    "lobby.rankedLabel": "Gewertet · Schnellschach 10 Min",
    "lobby.record": "Bestwert {n}",
    "lobby.wdl": "{w} S · {d} R · {l} N",
    "lobby.rankedText": "Ohne Trainer. Die Engine spielt auf deiner Elo: Ein Sieg bringt {k} Punkte, eine Niederlage kostet {k}.",
    "lobby.placement": "Die ersten 10 Partien zählen mehr, damit dein Niveau schneller gefunden wird (noch {n}).",
    "lobby.rankedBtn": "Gewertete Partie spielen",
    "lobby.coachLabel": "Mit Trainer · frei",
    "lobby.coachTitle": "Jeder Zug bewertet",
    "lobby.coachText": "Sobald du ziehst, erfährst du, ob es brillant, der beste Zug, eine Ungenauigkeit oder ein Patzer war. Der richtige Zug wird nie gezeigt.",
    "lobby.coachSub": "Engine auf deinem Niveau ({elo}), ohne Elo-Wertung. Du kannst Züge zurücknehmen.",
    "lobby.coachBtn": "Mit Trainer spielen",
    "lobby.customLabel": "Eigene Partie · ohne Elo",
    "lobby.level": "Stärke der Engine",
    "lobby.color": "Farbe",
    "lobby.white": "Weiß",
    "lobby.random": "Zufall",
    "lobby.black": "Schwarz",
    "lobby.coachSwitch": "Trainer live",
    "lobby.customBtn": "Partie starten",

    "openings.daily": "Eröffnung des Tages",
    "openings.youPlay": "Du spielst {side}. {n} Züge zu finden.",
    "openings.train": "Diese Eröffnung üben",
    "openings.all": "Alle Eröffnungen",
    "openings.doneCount": "{a} / {b} geschafft",
    "openings.withWhite": "Mit Weiß",
    "openings.withBlack": "Mit Schwarz",
    "openings.moves": "{n} Züge",
    "openings.ok": "geschafft ×{n}",
    "openings.retry": "wiederholen",
    "openings.new": "neu",

    "drill.good": "Gut gespielt: {san}",
    "drill.wrong": "{san} ist nicht der Zug dieser Variante. Versuch es noch einmal.",
    "drill.finished": "Variante beendet",
    "drill.clean": "Fehlerfrei. Eröffnung bestanden.",
    "drill.errors": ["{n} Fehler", "{n} Fehler"],
    "drill.withHelp": ", mit Hilfe",
    "drill.replay": ". Spiel sie noch einmal, um sie zu bestehen.",
    "drill.youPlay": "du spielst {side}",
    "drill.prompt": "Spiel den Zug der Variante.",
    "drill.again": "Variante wiederholen",
    "drill.continue": "Gegen die Engine weiterspielen",
    "drill.others": "Andere Eröffnungen",
    "drill.hint": "Tipp",
    "drill.show": "Zug zeigen",
    "drill.hideLine": "Variante verbergen",
    "drill.showLine": "Ganze Variante zeigen",
    "drill.restart": "Neu starten",
    "drill.quit": "Beenden",

    "tactics.daily": "Taktik des Tages",
    "tactics.intro": "Jede Aufgabe beginnt in einer Mittelspielstellung. Finde die Gewinnfortsetzung und lies dann, warum sie funktioniert.",
    "tactics.solve": "Lösen",
    "tactics.themes": "Themen",
    "tactics.count": "{a} / {b} gelöst",
    "tactics.ok": "gelöst ×{n}",
    "tactics.retry": "wiederholen",
    "tactics.new": "neu",
    "tactics.puzzle": "Aufgabe {n}",
    "tactics.mateW": "Weiß zieht und setzt in {n} matt.",
    "tactics.mateB": "Schwarz zieht und setzt in {n} matt.",
    "tactics.winW": "Weiß zieht und gewinnt Material.",
    "tactics.winB": "Schwarz zieht und gewinnt Material.",
    "tactics.good": "Gut gesehen: {san}",
    "tactics.wrong": "{san} funktioniert hier nicht. Versuch es noch einmal.",
    "tactics.solved": "Taktik gelöst",
    "tactics.clean": "Ohne Fehler gefunden.",
    "tactics.errors": ["Mit {n} Fehler gelöst.", "Mit {n} Fehlern gelöst."],
    "tactics.helped": "Mit Hilfe gelöst.",
    "tactics.hidden": "Thema verborgen",
    "tactics.reveal": "Thema zeigen",
    "tactics.theme": "Thema: {th}",
    "tactics.next": "Nächste Aufgabe",
    "tactics.list": "Alle Aufgaben",

    "theme.fork": "Gabel",
    "theme.pin": "Fesselung",
    "theme.skewer": "Spieß",
    "theme.discovered": "Abzugsangriff",
    "theme.double": "Doppelschach",
    "theme.backrank": "Grundreihenmatt",
    "theme.smothered": "Ersticktes Matt",
    "theme.decoy": "Hinlenkung",
    "theme.promotion": "Umwandlung",
    "theme.removal": "Beseitigung des Verteidigers",
    "theme.kiss": "Kussmatt",

    "tag.attack": "Angriffslustig",
    "tag.sharp": "Scharf",
    "tag.gambit": "Gambit",
    "tag.solid": "Solide",
    "tag.positional": "Ruhiges Spiel",
    "tag.counter": "Gegenangriff",
    "tag.system": "Einfacher Aufbau",
    "tag.open": "Offenes Spiel",
    "tag.closed": "Geschlossenes Spiel",

    "learn.title": "Die Eröffnung verstehen",
    "learn.titleTheme": "Die Taktik verstehen",
    "learn.plan": "Der Plan",
    "learn.strengths": "Stärken",
    "learn.weaknesses": "Schwächen",
    "learn.pieces": "Schlüsselfiguren",
    "learn.what": "Die Idee",
    "learn.why": "Wozu sie dient",
    "learn.when": "Wann man sie sucht",

    "profile.elo": "Gewertete Elo",
    "profile.graphEmpty": "Das Diagramm erscheint nach deiner ersten gewerteten Partie.",
    "profile.graphAria": "Elo-Verlauf, von {a} bis {b}",
    "profile.games": "Partien",
    "profile.best": "Bestwert",
    "profile.openings": "Eröffnungen",
    "profile.wdl": "{w} Siege · {d} Remis · {l} Niederlagen",
    "profile.last": "Letzte Partien",
    "profile.none": "Noch keine Partie.",
    "profile.row": "{color} gegen {opp} · {n} Züge · {reason}",
    "profile.synced": "Fortschritt in deinem Konto gespeichert: Du findest ihn auf deinen anderen Geräten.",
    "profile.local": "Fortschritt in diesem Browser gespeichert.",
    "profile.reset": "Profil zurücksetzen",
    "profile.resetConfirm": "Zurücksetzen bestätigen",
    "profile.resetDone": "Profil zurückgesetzt",
    "profile.tactics": "Taktik"
  },

  /* opening id: [name, one-line idea] */
  openings: {
    italian: ["Italienische Partie", "Schnelle Entwicklung, Läufer auf f7 gerichtet, dann c3 und d3, um d4 im richtigen Moment vorzubereiten."],
    "ruy-lopez": ["Spanische Partie", "Dauerhafter Druck auf den Springer c6, der e5 verteidigt. Früh rochieren und den Läufer auf der Diagonale a2-g8 halten."],
    scotch: ["Schottische Partie", "Das Zentrum sofort mit d4 öffnen, um Raum und offene Linien zu gewinnen."],
    "four-knights": ["Vierspringerspiel", "Symmetrische, solide Entwicklung, dann d4, um das Spiel ohne Risiko zu öffnen."],
    "evans-gambit": ["Evans-Gambit", "Den Bauern b4 anbieten, um Tempi gegen den Läufer zu gewinnen und mit c3 und d4 ein großes Zentrum zu bauen."],
    "fried-liver": ["Fegatello-Angriff", "Springeropfer auf f7, um den schwarzen König ins Zentrum zu ziehen. Wichtig, um Sxd5 zu bestrafen."],
    "vienna-gambit": ["Wiener Gambit", "Ein verzögertes Königsgambit: zuerst Sc3, dann f4 gegen das schwarze Zentrum."],
    "kings-gambit": ["Königsgambit", "Den f-Bauern geben, um e5 abzulenken, die f-Linie zu öffnen und schnell anzugreifen. Sehr scharf."],
    "sicilian-alapin": ["Sizilianisch, Alapin", "Gegen Sizilianisch: c3 bereitet d4 vor, um ein Bauernzentrum zu behalten, ohne die Theorie der offenen Varianten."],
    "smith-morra": ["Smith-Morra-Gambit", "Ein Bauer für Entwicklungsvorsprung und offene c- und d-Linien für die Türme."],
    "french-advance": ["Französisch, Vorstoßvariante", "e5 gewinnt Raum und sperrt den Läufer c8 ein. Danach muss d4 gehalten werden, das Schwarz von allen Seiten angreift."],
    "caro-kann-advance": ["Caro-Kann, Vorstoßvariante", "Raum im Zentrum und ruhige Entwicklung: Sf3, Le2, Rochade, dann auf c5 reagieren."],
    "queens-gambit-declined": ["Abgelehntes Damengambit", "c4 greift das schwarze Zentrum an. Natürlich entwickeln und den Springer f6 mit Lg5 fesseln."],
    "queens-gambit-accepted": ["Angenommenes Damengambit", "Schwarz nimmt auf c4; den Bauern in Ruhe mit e3 und Lxc4 zurückholen, mit gutem Zentrum."],
    london: ["Londoner System", "Ein Aufbau gegen fast alles: Lf4, e3, c3, Sd2, Sgf3. Solide und leicht zu merken."],
    catalan: ["Katalanische Eröffnung", "Damengambit mit fianchettiertem Läufer: langfristiger Druck auf der langen Diagonale."],
    english: ["Englische Eröffnung", "Sizilianisch mit Mehrtempo: Kontrolle über d5 vom Flügel und Fianchetto des Königsläufers."],
    "kings-indian-attack": ["Königsindischer Angriff", "Derselbe Aufbau, egal was Schwarz spielt: Fianchetto, Rochade, d3, Sbd2, dann e4."],
    "sicilian-najdorf": ["Sizilianisch, Najdorf", "a6 kontrolliert b5 und bereitet e5 oder b5 vor. Die ehrgeizigste Verteidigung gegen 1.e4."],
    "sicilian-dragon": ["Sizilianisch, Drachenvariante", "Der Läufer g7 beherrscht die lange Diagonale. Sehr taktisches Spiel mit entgegengesetzten Rochaden."],
    "sicilian-sveshnikov": ["Sizilianisch, Sweschnikow", "e5 vertreibt den Springer zum Preis eines Lochs auf d5, dafür sehr aktives Figurenspiel."],
    french: ["Französische Verteidigung", "Solide Struktur: Weiß bekommt Raum, dann wird die Bauernkette mit c5 angegriffen."],
    "caro-kann": ["Caro-Kann-Verteidigung", "Wie Französisch, aber der Läufer c8 kommt vor e6 heraus. Sehr solide, wenige Schwächen."],
    scandinavian: ["Skandinavische Verteidigung", "Das Zentrum schon im ersten Zug aufbrechen. Die Dame kommt früh heraus, steht aber gut auf a5."],
    petrov: ["Russische Verteidigung", "Gegenangriff auf e4 statt Verteidigung von e5. Achtung: d6, bevor auf e4 zurückgenommen wird."],
    "two-knights": ["Zweispringerspiel im Nachzuge", "Gegen Sg5: d5 und dann Sa5, ein Bauer für die Initiative statt in den Fegatello zu laufen."],
    philidor: ["Philidor-Verteidigung", "e5 durch d6 gedeckt: etwas passiv, aber sehr solide und mit wenig Theorie."],
    pirc: ["Pirc-Verteidigung", "Weiß das Zentrum überlassen, um es später anzugreifen, mit fianchettiertem Läufer."],
    alekhine: ["Aljechin-Verteidigung", "Der Springer lockt die weißen Bauern vor, um sie danach zu Zielen zu machen."],
    "kings-indian": ["Königsindische Verteidigung", "Weiß nimmt das Zentrum, Schwarz schlägt mit e5 zu und greift dann mit f5 am Königsflügel an."],
    "nimzo-indian": ["Nimzoindische Verteidigung", "Lb4 fesselt den Springer und verhindert e4. Das Läuferpaar wird gegeben, um die Bauern zu schwächen."],
    "queens-indian": ["Damenindische Verteidigung", "Kontrolle über e4 aus der Ferne mit dem Damenläufer. La6 stört die weiße Entwicklung durch Druck auf c4."],
    grunfeld: ["Grünfeld-Indische Verteidigung", "Weiß darf ein großes Zentrum bauen, das dann mit Lg7 und c5 beschossen wird."],
    slav: ["Slawische Verteidigung", "c6 stützt d5, ohne den Läufer c8 einzusperren, der vor e6 nach f5 kommt."],
    dutch: ["Holländische Verteidigung", "f5 kontrolliert e4 und kündigt einen Angriff am Königsflügel an. Leningrader Variante mit Fianchetto."],
    benko: ["Wolga-Gambit", "Ein Bauer für dauerhaften Druck auf der a- und b-Linie, sogar im Endspiel."]
  },

  learn: {
    /* opening id: [plan, strengths, weaknesses, key pieces] */
    openings: {
      italian: [
        "Schnell entwickeln, rochieren, dann mit c3 den Vorstoß d4 vorbereiten, um das Zentrum zu nehmen. Der Läufer c4 zielt auf f7, den schwächsten Punkt im schwarzen Lager.",
        "Natürliche, leicht verständliche Züge und sofortiger Druck auf f7.",
        "Spielt Schwarz genau, wird die Partie ruhig und ausgeglichen. Der Läufer c4 kann mit Sa5 oder Le6 abgetauscht werden.",
        "Der Läufer c4, der auf f7 zielt, und der Springer f3, der d4 stützt und nach g5 springen kann."
      ],
      "ruy-lopez": [
        "Den Verteidiger von e5 (den Springer c6) angreifen, rochieren, Te1 spielen, dann c3 und d4 für ein festes Zentrum. Langsamer Druck, der die ganze Partie anhält.",
        "Ein dauerhafter, risikoloser Vorteil und sehr reiche Mittelspielpläne.",
        "Viel Theorie. Der Läufer wird mit a6 und b5 verjagt, und der Vorteil braucht Zeit.",
        "Der Läufer, der auf b3 landet und auf f7 zielt, und der Turm e1, der e4 stützt."
      ],
      scotch: [
        "Das Zentrum sofort mit d4 öffnen, den Bauern e5 abtauschen und mit aktiven Figuren und Raum spielen.",
        "Klares Spiel, wenige blockierte Bauern und schnelle Initiative.",
        "Das offene Zentrum aktiviert auch die schwarzen Figuren. Nach Sxc6 bxc6 bekommt Schwarz ein gutes Bauernzentrum.",
        "Der Springer d4 im Zentrum, dann Dame und Läufer auf den offenen Linien."
      ],
      "four-knights": [
        "Alles symmetrisch entwickeln, rochieren und erst dann mit d4 öffnen, wenn der König sicher steht.",
        "Sehr sicher, einfache Logik (Springer vor Läufern) und wenige Fallen.",
        "Wenig ehrgeizig: Die Stellung bleibt oft ausgeglichen und symmetrisch.",
        "Die Springer, die d5 und e4 kontrollieren, und der Läufer, der nach d3 kommt."
      ],
      "evans-gambit": [
        "Den Bauern b4 opfern, um zwei Tempi zu gewinnen (c3, dann d4), ein großes Zentrum bauen und den schwarzen König in der Mitte angreifen.",
        "Riesige Initiative, offene Diagonalen Richtung f7 und viele Fallen.",
        "Ein Bauer weniger: Verpufft der Angriff, ist das Endspiel schlecht.",
        "Der Läufer c4 und die Dame (oft auf b3), die gemeinsam auf f7 zielen, dann ein Turm auf der e-Linie."
      ],
      "fried-liver": [
        "5...Sxd5 bestrafen: den Springer auf f7 opfern, den schwarzen König ins Zentrum ziehen und mit Dame, Läufer und Springern angreifen.",
        "Ein sehr starker Angriff, wenn die Verteidigung ungenau ist. Ideal für schnelle Siege auf Vereinsniveau.",
        "Eine Figur weniger. Gegen 5...Sa5 (die richtige Antwort) gibt es das Opfer nicht.",
        "Die Dame auf f3 und der Läufer c4, die den Springer d5 fesseln, dazu der Springer c3."
      ],
      "vienna-gambit": [
        "d5 mit Sc3 kontrollieren, dann f4 spielen, um e5 aufzubrechen und die f-Linie zum schwarzen König zu öffnen.",
        "Ein Königsangriff mit Unterstützung des f-Turms.",
        "Der weiße König wird auf der Diagonale g1-a7 geschwächt, und der Gegenstoß d5 trifft das Zentrum.",
        "Der Turm f1 auf der f-Linie und der Springer c3."
      ],
      "kings-gambit": [
        "Den f-Bauern geben, um e5 abzulenken, mit d4 das Zentrum nehmen und f7 über die f-Linie angreifen.",
        "Sofortige Initiative und chaotische Stellungen, in denen der besser Vorbereitete gewinnt.",
        "Der weiße König steht offen, ein Bauer fehlt, und mehrere Varianten gelten als widerlegt.",
        "Der Turm f1 auf der offenen Linie, der Läufer c4 Richtung f7 und die Springer, die nach e5 oder g5 springen."
      ],
      "sicilian-alapin": [
        "Gegen Sizilianisch c3 und dann d4 spielen, um ein Bauernzentrum zu behalten, ohne in die Lieblingsvarianten von Schwarz zu geraten.",
        "Spart sehr viel Theorie, mit festem Zentrum und einfachem Spiel.",
        "c3 nimmt dem Springer b1 sein Feld, und Schwarz gleicht mit Sf6 oder d5 leicht aus.",
        "Der Bauer d4 als Drehpunkt des Zentrums und der Läufer auf c4 oder d3 gegen die Rochade."
      ],
      "smith-morra": [
        "Den c-Bauern anbieten, um alle Figuren sehr schnell zu entwickeln und die offenen c- und d-Linien zu nutzen.",
        "Entwicklungsvorsprung, schnelle Angriffe und viele Fallen.",
        "Ein Bauer weniger: Entwickelt sich Schwarz unbeschadet, verschwindet der Vorteil.",
        "Die Türme auf c1 und d1, der Läufer c4 Richtung f7 und der Springer, der nach d5 springt."
      ],
      "french-advance": [
        "Mit e5 Raum gewinnen und den Läufer c8 einsperren, die Kette d4-e5 verteidigen und am Königsflügel angreifen.",
        "Raum, ein klarer Plan und ein natürlicher Angriff auf die Rochade.",
        "d4 wird von überall angegriffen (c5, Sc6, Db6): Gibt die Kette nach, bricht das Zentrum zusammen.",
        "Der Springer f3, der d4 deckt, und der Läufer d3, der nach h7 zielt."
      ],
      "caro-kann-advance": [
        "Mit e5 Raum nehmen, ruhig entwickeln und dann auf den schwarzen Vorstoß c5 reagieren.",
        "Raum und risikoloses Spiel.",
        "Schwarz hat seinen guten Läufer schon nach f5 gebracht, und die schwarze Struktur bleibt sehr fest.",
        "Der Springer f3 und der Läufer e3, die d4 halten."
      ],
      "queens-gambit-declined": [
        "Das schwarze Zentrum mit c4 angreifen, natürlich entwickeln und den Springer f6 mit Lg5 fesseln, um den Kampf ums Zentrum zu gewinnen.",
        "Dauerhafter Druck ohne Risiko.",
        "Langsames Spiel gegen eine sehr solide schwarze Aufstellung.",
        "Der Läufer g5, der f6 fesselt, und die Springer c3 und f3 mit Blick auf d5 und e5."
      ],
      "queens-gambit-accepted": [
        "Schwarz nimmt auf c4: Den Bauern in Ruhe mit e3 und Lxc4 zurückholen und dann das Zentrum nutzen.",
        "Leichte Entwicklung und starkes Zentrum.",
        "Schwarz bekommt freies Spiel und greift d4 mit c5 an.",
        "Der sehr aktive Läufer c4 und der Bauer d4."
      ],
      london: [
        "Fast immer denselben Aufbau spielen (Lf4, e3, c3, Sd2, Sgf3) und dann langsam am Königsflügel angreifen.",
        "Sehr wenig Theorie und eine solide Struktur: ideal für Einsteiger.",
        "Wenig ehrgeizig. Ein informierter Gegner greift b2 mit Db6 an und jagt den Läufer f4.",
        "Der Läufer f4, der vor e3 herauskommt, und der Springer, der sich auf e5 festsetzt."
      ],
      catalan: [
        "Den Läufer auf g2 auf die lange Diagonale stellen und langsam Druck auf Zentrum und Damenflügel ausüben.",
        "Langfristiger Druck und ein sehr sicherer König.",
        "Langsames Spiel. Der Bauer c4 kann verloren gehen und ist mühsam zurückzugewinnen.",
        "Der Läufer g2 mit Blick auf b7 und die Dame auf c2."
      ],
      english: [
        "d5 vom Flügel aus mit c4 und Sc3 kontrollieren, den Königsläufer fianchettieren und den Plan an Schwarz anpassen.",
        "Flexibel, mit viel weniger Theorie als 1.e4 oder 1.d4.",
        "Weniger direkt: Schwarz kann mit e5 und d5 das Zentrum besetzen.",
        "Der Läufer g2 und der Springer c3, beide auf d5 gerichtet."
      ],
      "kings-indian-attack": [
        "Derselbe Aufbau, egal was Schwarz tut (Fianchetto, Rochade, d3, Sbd2), dann e4-e5 und Angriff am Königsflügel.",
        "Leicht zu lernen, mit klarem Plan.",
        "Etwas passiv, wenn Schwarz im Zentrum Raum gewinnt.",
        "Der Läufer g2 und die Springer, die nach e5 zum schwarzen König stürmen."
      ],
      "sicilian-najdorf": [
        "a6 kontrolliert b5. Schwarz behält einen zusätzlichen Zentralbauern und greift über die c-Linie am Damenflügel an.",
        "Ehrgeizig: Man spielt mit Schwarz auf Gewinn.",
        "Sehr viel Theorie, und der schwarze König kann schnell unter Beschuss geraten.",
        "Der Turm auf der c-Linie, der Läufer auf e6 oder e7 und der Springer mit Ziel c4."
      ],
      "sicilian-dragon": [
        "Fianchetto auf g7, rochieren, dann über die c-Linie am Damenflügel angreifen, während Weiß am Königsflügel angreift.",
        "Der Läufer g7 ist gefürchtet und der Gegenangriff kommt schnell.",
        "Öffnet Weiß die h-Linie (h4-h5), ist der schwarze König in Gefahr: Es ist ein Wettrennen.",
        "Der Läufer g7, der nie ohne Grund getauscht wird, und der Turm auf c8."
      ],
      "sicilian-sveshnikov": [
        "Mit e5 den Springer d4 vertreiben und ein Loch auf d5 hinnehmen, im Tausch für sehr aktive Figuren und den Vorstoß f5.",
        "Dynamisch, mit viel Initiative.",
        "Das Feld d5 ist schwach und der Bauer d6 rückständig.",
        "Der schwarzfeldrige Läufer und der Bauer f5. Ein weißer Springer darf sich nicht auf d5 festsetzen."
      ],
      french: [
        "Solide Struktur e6-d5: Weiß Raum lassen und dann die Basis der weißen Bauernkette mit c5 und f6 angreifen.",
        "Robuste Struktur und klarer Plan: die Kette angreifen.",
        "Der Läufer c8 ist hinter e6 eingesperrt, und Schwarz fehlt Raum.",
        "Der Bauer c5 und die Dame auf b6 gegen d4. Der Läufer c8 muss befreit werden (b6, dann La6)."
      ],
      "caro-kann": [
        "c6-d5 spielen, den Läufer c8 vor e6 herausbringen, eine Struktur ohne Schwächen behalten und ruhig spielen.",
        "Sehr solide, mit oft günstigen Endspielen.",
        "Etwas passiv, mit weniger Chancen auf einen schnellen Sieg.",
        "Der Läufer auf f5 oder g6, der vor dem Einsperren herauskommt, und der Springer d7-f6."
      ],
      scandinavian: [
        "Das Zentrum schon im ersten Zug aufbrechen: Die Dame schlägt auf d5 zurück, zieht sich nach a5 zurück, dann schnelle Entwicklung mit c6 und Lf5.",
        "Wenig Theorie und eine einfache Struktur.",
        "Die früh entwickelte Dame lässt Weiß Tempi gewinnen.",
        "Die Dame auf a5 und der Läufer auf f5."
      ],
      petrov: [
        "e4 angreifen statt e5 zu verteidigen, für eine symmetrische und sehr solide Stellung.",
        "Sehr schwer zu schlagen.",
        "Wenig Gewinnchancen. Falle: Auf e4 vor d6 zurückzuschlagen kostet die Dame.",
        "Der aktive Springer e4, danach die Läufer."
      ],
      "two-knights": [
        "Sf6 greift e4 an. Gegen Sg5 mit d5 und Sa5 einen Bauern zurückgeben, um die Initiative zu übernehmen.",
        "Aktives, trickreiches Spiel.",
        "Ein Bauer weniger, in taktischen Stellungen, die man kennen muss.",
        "Der Springer a5, der den Läufer vertreibt, dann aktive Dame und Läufer."
      ],
      philidor: [
        "e5 mit d6 stützen, dahinter entwickeln und eine kompakte Stellung halten.",
        "Wenig Theorie und sehr solide.",
        "Passiv: wenig Raum, und der Läufer f8 steht etwas eingesperrt.",
        "Die Springer d7 und f6 und der Bauer e5, der gehalten werden muss."
      ],
      pirc: [
        "Weiß das Zentrum überlassen und es später mit e5 oder c5 angreifen, mit dem Läufer auf g7.",
        "Flexibel, mit Gegenspiel.",
        "Wartet man zu lange, rollen die weißen Bauern vor und erdrücken die Stellung.",
        "Der Läufer g7 und die Bauern c5 und e5, die das Zentrum angreifen."
      ],
      alekhine: [
        "Mit dem Springer die weißen Bauern nach vorne locken und sie danach zu Zielen machen.",
        "Unausgeglichene Stellungen, die den Gegner überraschen.",
        "Der Springer verliert Zeit, und festigt Weiß seine Stellung, zählt der Raumvorteil.",
        "Der Springer (d5, dann b6) und der Läufer g4, der den Springer f3 stört."
      ],
      "kings-indian": [
        "Das Zentrum aufgeben, mit e5 zuschlagen und dann am Königsflügel mit f5-f4 und g5 angreifen, während Weiß am Damenflügel angreift.",
        "Ein sehr gefährlicher Angriff auf den weißen König.",
        "Ein Wettrennen: Der schwarze Damenflügel ist anfällig.",
        "Der Läufer g7, auch wenn er eingesperrt wirkt, der Bauer f5 und die Springer, die zum Königsflügel ziehen."
      ],
      "nimzo-indian": [
        "Lb4 fesselt den Springer c3 und verhindert e4. Oft wird der Läufer getauscht, um die weißen Bauern zu verdoppeln und sie dann anzugreifen.",
        "Beschädigte weiße Struktur und klarer Plan.",
        "Man gibt das Läuferpaar ab.",
        "Die Springer, stark in geschlossenen Stellungen gegen Läufer, und der Läufer b4."
      ],
      "queens-indian": [
        "e4 mit dem fianchettierten Läufer aus der Ferne kontrollieren. La6 erschwert den Vorstoß c4.",
        "Sehr solide.",
        "Etwas passiv.",
        "Der Läufer auf b7 oder a6."
      ],
      grunfeld: [
        "Weiß ein großes Zentrum bauen lassen und es dann mit Lg7, c5 und Sc6 beschießen.",
        "Dynamisch, mit starkem Druck auf d4.",
        "Hält das weiße Zentrum, erdrückt es die schwarze Stellung.",
        "Der Läufer g7 auf der langen Diagonale und der Bauer c5."
      ],
      slav: [
        "c6 stützt d5, ohne den Läufer c8 einzusperren, der vor e6 nach f5 kommt.",
        "Sehr solide.",
        "Etwas passiv, mit Theorie.",
        "Der Läufer f5 und der Bauer c6."
      ],
      dutch: [
        "f5 kontrolliert e4 und bereitet einen Königsangriff vor, mit dem Läufer auf g7 (Leningrader Variante).",
        "Unausgeglichene Stellungen und Spiel auf Gewinn.",
        "Der schwarze König ist geschwächt (Diagonale e8-h5), ebenso das Feld e6.",
        "Der Läufer g7 und der Bauer f5."
      ],
      benko: [
        "Den b-Bauern geben, um die a- und b-Linie zu öffnen und dauerhaft Druck zu machen, sogar im Endspiel.",
        "Langfristiger Druck, der leicht zu spielen ist.",
        "Ein Bauer weniger.",
        "Die Türme auf a8 und b8 und der Läufer g7."
      ]
    },
    /* theme id: [the idea, what it is for, when to look for it, key pieces] */
    themes: {
      fork: [
        "Eine Figur greift zwei Ziele gleichzeitig an. Der Gegner kann nur eines retten.",
        "Material gewinnen, oft mit Schach, damit der Gegner keine Zeit zum Reagieren hat.",
        "Wenn zwei gegnerische Figuren (oder König und Figur) einen Springersprung voneinander entfernt oder auf einer Linie deiner Dame stehen.",
        "Der Springer, der Felder beider Farben angreift und nicht blockiert werden kann, und der Bauer."
      ],
      pin: [
        "Eine Figur kann nicht ziehen, weil sie eine wertvollere Figur hinter sich schützt.",
        "Eine Figur festhalten und sie dann ein zweites Mal angreifen, um sie zu gewinnen.",
        "Wenn eine gegnerische Figur auf derselben Linie wie ihr König oder ihre Dame steht.",
        "Läufer und Turm, die auf Diagonalen und Linien aus der Ferne wirken."
      ],
      skewer: [
        "Das Gegenteil der Fesselung: Man greift die wertvollste Figur an, sie muss weg, und man schlägt die Figur dahinter.",
        "Die Figur hinter dem König oder der Dame gewinnen.",
        "Wenn König oder Dame vor einer anderen Figur auf einer Linie stehen.",
        "Läufer und Turm, die durch Linien hindurch angreifen."
      ],
      discovered: [
        "Eine Figur zieht weg und gibt den Angriff einer Figur dahinter frei. Zwei Drohungen mit einem Zug.",
        "Material gewinnen: Die ziehende Figur droht selbst, während die andere angreift.",
        "Wenn eine deiner Figuren die Linie deines Läufers, Turms oder deiner Dame zu einem Ziel verstellt.",
        "Die ziehende Figur (oft der Springer) und die langschrittige Figur dahinter."
      ],
      double: [
        "Ein Abzugsangriff, bei dem beide Figuren gleichzeitig Schach geben. Nur ein Königszug hilft.",
        "Mattsetzen oder viel gewinnen: Niemand kann zwei Figuren auf einmal blockieren oder schlagen.",
        "Wenn dein Springer oder Läufer zwischen deinem Turm und dem gegnerischen König steht.",
        "Der Springer, der beim Sprung Schach gibt, und der Turm dahinter."
      ],
      backrank: [
        "Turm oder Dame setzen den König auf seiner Grundreihe matt, eingesperrt hinter den eigenen Bauern.",
        "Mattsetzen oder den Gegner zwingen, Material zu geben, um das Matt zu verhindern.",
        "Wenn der gegnerische König kein Fluchtfeld hat und seine Grundreihe schlecht gedeckt ist.",
        "Die Türme und die Dame, die eine ganze Reihe beherrschen."
      ],
      smothered: [
        "Der Springer setzt einen König matt, der von seinen eigenen Figuren eingeschlossen ist.",
        "Mattsetzen, oft nach einem Damenopfer, das eine Figur zwingt, das letzte Feld zu verstellen.",
        "Wenn der gegnerische König in einer Ecke von eigenen Figuren umgeben ist und dein Springer das Mattfeld erreicht (f7 oder h6 gegen einen König auf h8).",
        "Der Springer, die einzige Figur, die über andere springt, unterstützt von der Dame."
      ],
      decoy: [
        "Man opfert eine Figur, um eine gegnerische Figur (oft den König) auf ein schlechtes Feld zu locken.",
        "Die gegnerische Figur dorthin bringen, wo eine Gabel oder ein Matt möglich wird.",
        "Wenn es eine Gabel oder ein Matt gibt, die gegnerische Figur aber noch nicht auf dem richtigen Feld steht.",
        "Turm oder Dame, die sich opfern, und danach der Springer, der die Gabel setzt."
      ],
      promotion: [
        "Ein Bauer erreicht die letzte Reihe und wird zur Dame.",
        "Eine neue Dame bekommen, oft indem man die Figur ablenkt, die den Bauern aufhielt.",
        "Wenn einer deiner Bauern auf der siebten Reihe steht.",
        "Der Bauer und der Turm, der den Verteidiger ablenkt."
      ],
      removal: [
        "Man schlägt oder vertreibt die Figur, die ein Feld oder eine andere wichtige Figur deckt.",
        "Den Weg zum Matt freimachen oder die nun ungedeckte Figur gewinnen.",
        "Wenn eine einzige gegnerische Figur deinen Angriff aufhält.",
        "Der Läufer, der den Verteidiger abtauscht, und die Dame, die davon profitiert."
      ],
      kiss: [
        "Die Dame setzt den König aus nächster Nähe matt, gedeckt von einer anderen Figur.",
        "Einen schlecht verteidigten rochierten König schnell mattsetzen.",
        "Wenn deine Dame und eine andere Figur auf dasselbe Feld neben dem König zielen (oft h7 oder h2).",
        "Die Dame und der Läufer, der sie aus der Ferne deckt."
      ]
    }
  }
};
