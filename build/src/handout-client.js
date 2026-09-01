/* ============================================================
   Take-home handout: generated client-side at Session 1's close
   from a fixed template + the executive's own Session 0 answers.
   Delivery mechanism (client-side Blob download) chosen because
   spec.md left the mechanism open and this needs no separate
   build artifact — same pattern as the JSON exports.
   ============================================================ */
(function () {
  const btn = document.getElementById("downloadHandout");
  if (!btn) return;
  btn.onclick = () => {
    const s0 = window.__session0State ? window.__session0State() : null;
    const vorname = s0?.person?.vorname || "";
    const alltagAnswers = (s0?.alltag || []).map((a) => a.answer).filter((a) => a && a !== "•");
    const zielAnswers = (s0?.ziel || []).map((a) => a.answer).filter((a) => a && a !== "•");

    const uebung1 = alltagAnswers[0]
      ? `Nehmen Sie sich Ihre Antwort auf „Welche Aufgabe kostet Sie am meisten Zeit, ohne dass es das wert wäre?" vor:\n\n${alltagAnswers[0]}\n\nInstruieren Sie Claude dazu genau wie in Lab 1 (Erklären) oder Lab 2 (Aufsetzen) — je nachdem, ob Sie zuerst verstehen oder zuerst aufsetzen wollen.`
      : `Nehmen Sie eine wiederkehrende Aufgabe aus Ihrem Alltag und instruieren Sie Claude dazu wie in Lab 1 oder Lab 2.`;

    const uebung2 = zielAnswers[0]
      ? `Ihr Ziel war: „${zielAnswers[0]}" — probieren Sie diese Woche eine Anwendung von Erklären oder Aufsetzen, die genau darauf einzahlt.`
      : `Probieren Sie diese Woche eine Anwendung von Erklären oder Aufsetzen auf ein echtes Thema aus Ihrem Alltag aus.`;

    const md = `# Take-home — nach Sitzung 1${vorname ? ` für ${vorname}` : ""}

## So benutzen Sie dieses Dokument

Fügen Sie den ganzen Text unten in einen neuen Chat mit Claude ein und stellen Sie Ihre Fragen direkt dagegen —
zum Beispiel „Teste mich zu Frage 3" oder „Passe Übung 1 an mein eigenes Thema an". Das Dokument ist der
Kontext, nicht die Antwort.

## Kurz zusammengefasst

Sie haben heute zwei der vier Schritte geübt: **Erklären** (Sie halten nur ein Thema, das Sie nicht kennen)
und **Aufsetzen** (Sie halten nichts, ein leeres Blatt). Beide funktionieren, weil Sie instruieren wie eine neue
Assistenz — mit Zielgruppe, Tiefe, einem Beispiel, und der Gewohnheit, das Ergebnis zu prüfen, bevor Sie es
weitergeben.

## Testen Sie sich

1. Was ist der Unterschied zwischen Erklären und Aufsetzen — woran erkennen Sie, welcher Schritt gerade gefragt ist?
2. Warum klingt Claude manchmal selbstsicher, obwohl die Antwort falsch ist?
3. Was tun Sie, um eine Zahl zu prüfen, die Ihnen zurückkommt?
4. Was ändert eine gute Instruktion gegenüber einer faulen — nennen Sie zwei Hebel.
5. Wann gehört eine Aufgabe eher zu KI, wann zu Automatisierung, wann bleibt sie bei Ihnen?

## Ihre Übungen

**Übung 1 (Ihr Alltag).** ${uebung1}

**Übung 2 (Ihr Ziel).** ${uebung2}

**Übung 3 (frei).** Nehmen Sie ein Dokument aus Ihrem Alltag und probieren Sie Prompt 3 aus dem Auftakt
noch einmal selbst: dieselbe Sache für eine andere Zielgruppe umschreiben.

## Noch nicht dran

Sitzung 2 bringt **Aufbereiten** (ein bestehendes Dokument in die richtige Form bringen) und
**Hinterfragen** (etwas Fertiges auf Einwände prüfen) — beide wurden heute nur benannt, nicht geübt.

---
Generiert am ${new Date().toISOString().slice(0, 10)}.
`;

    downloadFile(md, "take-home-sitzung-1.md", "text/markdown");
  };
})();

/* ============================================================
   Second take-home, for the close of Session 2. Same mechanism as
   above; the seed block is read at runtime rather than substituted at
   build time, because build.mjs only rewrites seed placeholders inside content
   HTML — never inside these scripts.
   ============================================================ */
(function () {
  const btn = document.getElementById("downloadHandout2");
  if (!btn) return;
  btn.onclick = () => {
    const s0 = window.__session0State ? window.__session0State() : null;
    const vorname = s0?.person?.vorname || "";
    const alltagAnswers = (s0?.alltag || []).map((a) => a.answer).filter((a) => a && a !== "•");
    const zielAnswers = (s0?.ziel || []).map((a) => a.answer).filter((a) => a && a !== "•");

    const uebung1 = alltagAnswers[0]
      ? `Ihre zeitraubendste Aufgabe war:\n\n${alltagAnswers[0]}\n\nRichten Sie dafür ein Projekt ein (Lab 5) und arbeiten Sie zwei Wochen wirklich darin.`
      : `Wählen Sie die eine wiederkehrende Aufgabe, die Sie am meisten Zeit kostet, und richten Sie dafür ein Projekt ein (Lab 5).`;

    const uebung3 = zielAnswers[0]
      ? `Ihr Ziel war: „${zielAnswers[0]}“ — nehmen Sie das nächste Dokument, das darauf einzahlt, und lassen Sie es hinterfragen: „Was sind die drei stärksten Einwände?“`
      : `Nehmen Sie die nächste Vorlage, die bei Ihnen wirklich vorgelegt wird, und lassen Sie sie hinterfragen: „Was sind die drei stärksten Einwände?“`;

    const dauerInstruktion =
      `Sie arbeiten für ${SEED.Firma} im Bereich ${SEED.Branche}. Ihre Ansprechperson arbeitet ` +
      `als ${SEED.Rolle}, Adressat der meisten Texte ist der ${SEED.Publikum}. Schreiben Sie in ` +
      `Schweizer Rechtschreibung, kurze Sätze, keine Anglizismen. Nennen Sie zu jeder Zahl, aus ` +
      `welchem Dokument sie stammt — und wenn Sie sie nicht dort finden, sagen Sie das.`;

    const md = `# Take-home — nach Sitzung 2${vorname ? ` für ${vorname}` : ""}

## So benutzen Sie dieses Dokument

Fügen Sie den ganzen Text unten in einen neuen Chat ein und stellen Sie Ihre Fragen direkt dagegen —
zum Beispiel „Teste mich zu Frage 4“ oder „Passe Übung 2 an mein eigenes Thema an“. Das Dokument ist der
Kontext, nicht die Antwort.

## Kurz zusammengefasst

Die vier Schritte sind jetzt vollständig: **Erklären**, **Aufsetzen**, **Aufbereiten** (etwas Vorhandenes
in die richtige Form bringen) und **Hinterfragen** (etwas Fertiges auf Einwände prüfen). Dazu kam der
Wortschatz rund um Agenten — und die Einsicht, dass ein Agent nichts anderes ist als dieselbe Assistenz,
in einer Schleife und mit Werkzeugen.

## Ihr Wortschatz

- **Briefing** — was Sie sagen. Das Einzige, was Sie direkt in der Hand haben.
- **Kontext** — was auf dem Tisch liegt. Was nicht daliegt, gibt es nicht.
- **Projekt** — ein Raum, in dem dieser Kontext liegen bleibt.
- **Skill** — eine benannte Arbeitsanweisung für eine wiederkehrende Aufgabe.
- **Agent** — eine Assistenz, die in einer Schleife arbeitet und dabei handelt.
- **MCP** — der genormte Stecker zu Werkzeugen.
- **A2A** — Delegation von Assistenz zu Assistenz.
- **Halluzination** — eine Antwort, die richtig klingt und erfunden ist.

Formel: **Modell + Kontext + Werkzeuge + Delegation = Agent.** Was nicht drinsteht, ist das Prüfen.
Das bleibt bei Ihnen.

## Die vier Mythen

1. „Ein besseres Modell bringt ein besseres Ergebnis.“ — Die Modellwahl ist der kleinste Hebel.
2. „Mehr Kontext bringt ein besseres Ergebnis.“ — Mehr Material begräbt das Wesentliche. Auswählen, nicht abladen.
3. „Was zurückkommt, stimmt.“ — Der Ton ist kein Signal.
4. „Dafür brauchen wir einen Agenten.“ — Erst der feste Ablauf, Eigenständigkeit nur wo nötig.

## Testen Sie sich

1. Woran erkennen Sie, ob eine Aufgabe Aufbereiten oder Hinterfragen ist?
2. Warum ist „Ist das gut?“ die schlechteste Frage an eine Assistenz — und was fragen Sie stattdessen?
3. Was unterscheidet einen Agenten von einer Antwort? Nennen Sie die Folge, nicht die Technik.
4. Was ist der Unterschied zwischen einem Projekt und einem Skill?
5. Welcher der vier Mythen begegnet Ihnen in Ihrem Haus am häufigsten — und was antworten Sie darauf?

## Ihre Übungen

**Übung 1 (Projekt).** ${uebung1}

**Übung 2 (Skill).** Nehmen Sie die eine Aufbereitung, die Sie jede Woche machen. Schreiben Sie einmal
sauber auf: Schritte, Format, Grenzen. Geben Sie ihr einen Namen. Ab dann rufen Sie nur noch den Namen auf.

**Übung 3 (Hinterfragen).** ${uebung3}

## Ihre Dauer-Instruktion (zum Einfügen in die Projekt-Anweisung)

${dauerInstruktion}

---
Generiert am ${new Date().toISOString().slice(0, 10)}.
`;

    downloadFile(md, "take-home-sitzung-2.md", "text/markdown");
  };
})();
