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

## Kurz zusammengefasst

Sie haben heute zwei der vier Schritte geübt: **Erklären** (Sie halten nur ein Thema, das Sie nicht kennen)
und **Aufsetzen** (Sie halten nichts, ein leeres Blatt). Beide funktionieren, weil Sie instruieren wie eine neue
Kollegin — mit Zielgruppe, Tiefe, einem Beispiel, und der Gewohnheit, das Ergebnis zu prüfen, bevor Sie es
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
Ihr Use-Case-Backlog aus heute bleibt bestehen und wird in Sitzung 2 vervollständigt.

---
Generiert am ${new Date().toISOString().slice(0, 10)}.
`;

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "take-home-sitzung-1.md";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
})();
