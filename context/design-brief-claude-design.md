# Design-Brief fuer Claude Design

Diesen Text in Claude Design einfuegen, zusammen mit den vier Referenzbildern (Hand-Motiv priorisieren).

---

## Was gebaut wird

Drei Schluesselscreens fuer eine Praesentations-Site. Kein Code-Deliverable, nur der Look. Ziel: Farbe, Typo und Rhythmus festnageln, bevor die echte Site entsteht.

**Screen 1 - Opening.** Vollflaechiges Bild: menschliche Hand und Roboterhand, die sich einander naehern. Kinematisch, dunkelblau, blaues Rimlight, Negativraum links fuer Typo. Text in drei Stufen links unten: Headline gross und zweifarbig, Subtitle leichter, darunter mit viel Abstand eine kleine Zeile in Akzentblau.

**Screen 2 - Dunkler Content-Slide.** Eine Headline, ein kurzer Absatz, drei Icons mit je einer Zeile. Links am Rand eine vertikale Sprossen-Anzeige, die zeigt, auf welcher Stufe man gerade ist.

**Screen 3 - Heller Break-Slide.** Fast weisser Hintergrund, dunkler Text, dieselbe Typo. Bewusst als Rhythmuswechsel.

## Farben

| Rolle | Hex |
|---|---|
| Navy tief | #080F1C |
| Navy Basis | #0A1628 |
| Navy Lift (Fade-Zentrum) | #16375C |
| Akzent | #4DA3FF |
| Akzent hell | #6FC3FF |
| Papier | #F7F8FA |
| Tinte | #0B0F14 |

Etwa 75 Prozent der Slides dunkel, 25 Prozent hell. Dunkle Flaechen nie flach fuellen, immer ein weicher radialer Verlauf mit einem helleren Fokuspunkt ausserhalb der Mitte.

## Typografie

Space Grotesk fuer Headlines, 600, sehr enges Tracking (-0.03em), Zeilenhoehe knapp ueber 1. Inter fuer Fliesstext, 300 fuer lange Zeilen, 400 fuer kurze. Eyebrow-Labels in Inter 500, 0.28em Letterspacing, Grossbuchstaben, klein.

Headlines immer zweifarbig: der Grossteil weiss, das Schluesselwort in Akzentblau. Immer linksbuendig. Nie zentriert.

## Icons

Lucide, Strichstaerke 1.5, keine Fuellung. Auf dunklen Slides in Akzentblau, auf hellen in Dunkelblau. Nie mit anderen Icon-Familien mischen, nie Emojis.

## Signature-Element

Die vertikale Sprossen-Leiste am linken Rand. Vier Sprossen fuer die vier Stufen der Autonomie (fragen, briefen, wiederverwenden, delegieren). Erledigte Sprossen gedimmt blau, die aktuelle leuchtend mit weichem Glow und einem kleinen Label daneben, kommende grau. Das ist das einzige dekorative Element im Deck und traegt gleichzeitig echte Information.

## Verboten

Lila Verlaeufe. Glassmorphism-Karten. Emoji-Listen. Zentrierte Layouts. Gluehende Gehirne auf Platinen. Schwebende Hologramm-Icon-Collagen. Mehr als drei Zeilen Fliesstext pro Slide.

---

# Handover an Claude Code

Wenn der Look steht, baut Claude Code daraus die echte Site:

- Sub-Page pro Lektion, nicht ein Monolith
- `/assets` Ordner mit den Download-Dateien: chaotische Excel, Beispieldokument, schlechte Beispiel-Mail, Meeting-Transkript, Szenario-Brief
- Print-Stylesheet fuer den PDF-Export der erfassten Use Cases
- Design-Tokens als CSS-Variablen in einer Datei, nicht verstreut
- Speaker Notes pro Slide, ausblendbar
- Browser-Storage fuer die erfassten Eingaben, damit ein Reload nichts loescht
- Sauber im Repo versioniert
