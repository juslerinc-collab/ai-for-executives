# The lesson sequence

Type: grilling
Status: resolved
Resolved: 2026-07-27

## Question

What is the final, ordered list of lessons and labs — the spine the whole build hangs off?

The reshape in [Charting session decisions](00-charting-decisions.md) fixed the *moves* (open with a win, compress the basics, ladder early, keep the data lab, split governance, backlog builds itself, add the sweet-spot lesson). It did not produce the actual sequence.

Resolve to a numbered list where each entry carries: its name, whether it is theory or lab, the one thing it must land, and which rung of the ladder it sits on.

Open sub-questions to work through:

- What is the opening hands-on win? It has to work in under ten minutes, on a first-timer, with no setup, and produce a visible "oh" — while requiring no technique they have not been taught yet.
- Where does the sweet-spot lesson sit? Argument for early: it converts "what is AI" into "what do I hand over," and every later lab becomes an instance of a named pattern.
- Does the brief's four-block structure survive at all, or does the reshape produce different blocks? The break has to land somewhere sensible.
- Does the closing callback ("Wenn Sie einen Menschen briefen können, können Sie das hier") still work in German, and does it still bookend correctly given the opening now includes a hands-on moment rather than being purely a promise?

## Inherited from [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md)

**The starting section's internal order is fixed:** basics (how it works, briefing, context management, skills) → the AI-versus-automation decision tree → the four steps as the wrap-up. The four steps then guide every lab, so the starting section is what makes everything after it legible.

**This answers one of the sub-questions above.** The sweet-spot lesson does not sit somewhere in the sequence — it *is* the starting section's wrap-up.

**The four steps are fixed and ordered: Erklären → Aufsetzen → Aufbereiten → Hinterfragen** — an escalation by how much already exists, and every rung is a legitimate entry point (a colleague hands you a document, you start at *Aufbereiten*). Strong candidate for the sequence's actual spine rather than one lesson inside it.

**The user specified basics content beyond mechanism:** briefing, context management, and skills belong in the basics block. That overlaps [How deep the theory goes](03-theory-depth.md), which is scoped to mechanism only — the two must agree on what the basics block contains.

**New sibling ticket:** [The AI-versus-automation decision tree](14-ai-vs-automation.md) is a distinct piece of basics content and needs its own slot.

**For the opening win:** *Erklären* is now first and needs no technique and no supplied asset, making it the cheapest possible opening. But the brief's 12-year-old exercise is *Aufbereiten*, not *Erklären*. See the conflict flagged in [The lab set](04-lab-set.md).

## Unblocked by [The teaching model](12-teaching-model.md) — the container is now fixed

**This is no longer one sequence. It is two, and they mirror.**

- **Session one** (~90 min of content): basic theory → **all four steps introduced** → labs for **Erklären** and **Aufsetzen** → first matrix run.
- **Session two** (~90 min): advanced theory (agents, context management) → labs for **Aufbereiten** and **Hinterfragen** → second, cumulative matrix run.

Both sessions run **Theorie → Anwendung → Matrix**. Do not produce a foundation-then-limits split; it was considered and rejected.

**Hard constraints on the sequence you produce:**

1. **Session one must end on appetite, not completion.** Two named-but-unpractised steps are the intended cliffhanger; do not resolve them early.
2. **Session two opens on the overview page** as its resync — *„Hier waren wir. Das haben Sie probiert. Diese zwei fehlen noch."* Budget for it.
3. **~90 minutes of content per session.** The two-hour booking is overrun buffer. Never author against 120.
4. **Every entry passes the three andragogy tests** from ticket 12: the *why* in one line before the *how*; the concept cashes out within ten minutes or gets cut; the executive chooses something inside the lab.
5. **Each content page is a click-through ending on an overview.** A lesson that cannot be beaten into beats is a lesson that is too long.

**The open question this ticket inherits, unresolved on purpose.** The user placed **skills** — what a saved, reusable brief is — at the end of session one. Skills are **rung three** of the ladder of autonomy, so rung three would arrive before half the four steps are practised and the ladder stops being an escalation.

The argument for keeping it there is strong: a saved brief is precisely the artifact that generates real evidence during the intervening week, which is what session two opens on. Resolve it here — and note the map's fog entry *Two four-item spines*, because if the ladder and the four steps cannot both be the backbone, this collision is the symptom rather than the disease.

**Also fixed:** the agent demonstration now sits in session two's theory block. *What* is demonstrated remains fog.

## Decided so far — session of 2026-07-26, ticket still open

Recorded mid-grill so the work is not lost. These are settled; the ticket stays claimed because the sequence itself is not yet written.

### 1. The hands-on win survives as a prologue, and the collision is dissolved

[Charting session decisions](00-charting-decisions.md) demanded a win *before any theory*; [The teaching model](12-teaching-model.md) fixed both sessions as *Theorie → Anwendung → Matrix*. **The win is a prologue, not a block**, so both hold. Theory then lands on an experience instead of in a vacuum.

Rejected: opening cold on theory (a senior executive lectured for thirty minutes is the exact failure the reshape exists to prevent), and pulling the *Erklären* lab forward to minute ten (it would run before the four steps are introduced, breaking the vocabulary-first order fixed in [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md)).

### 2. The prologue is a facilitator **showcase**, not a lab — and it is the biggest wow available

**What it is.** A folder of ordinary mess — meeting notes, a supplier mail thread, a voice-memo transcript, a CSV, an `..._final_v3.xlsx` — handed over with one instruction, producing **a file**: an Excel with working formulas, multiple tabs and a source column. 2–4 minutes of runtime, and the watching is the point.

**Why this and not a better paragraph.** [The capability arc](16-capability-arc-research.md) ranks it first of five candidates. The executive's mental model is *„ChatGPT schreibt Text"*; the „oh" is that it produced an artifact, having planned and run its own code, without being told a single step.

**The facilitator runs it; the executive watches — user's decision, reversing the recommendation.** This is the *only* point in either session where the executive's hand is off the artifact, and it is deliberate: it removes all setup and usage-limit risk from the first five minutes, and their hand goes on from Lab 1 onward and stays there. The parallel-copies principle from ticket 12 survives because minute three is explicitly framed as a demonstration.

**It is left unnamed, and named retroactively** at the four-steps overview: *„das am Anfang war Aufbereiten — nur vier Dateien auf einmal."* That plants session two's lab from lived experience instead of stealing session one's.

**Assets exist:** `start demo/` at the repo root — the data file plus a `REGIE-KARTE.md` carrying the three verbatim German prompts, the live commentary, the failure table, and the per-client swap rules. Hand to [The supplied lab assets](08-lab-assets.md) rather than rebuilding.

**Revised twice on 2026-07-26. Both earlier versions are dead; keep the reasoning so they are not rebuilt.**

- **v1, the messy folder** (notes, mail thread, voice memo, CSV, junk Excel → one sheet). Killed as too complex and too far from the executive's own world. Archived at `assets/auftakt-showcase/`.
- **v2, the big spreadsheet** (1,186 consulting projects, chart, engineered margin finding). Killed as still too complex. The failure worth remembering: it was impressive *about* consulting in general, and it made the demo a data-analysis trick rather than a picture of the executive's own working day.

**Instance one is now known and it narrows everything.** The executive is Doris Krummenacher, Seeds Consulting (`seeds-consulting.ch`) — a Swiss boutique in occupational pensions, working with foundation boards, HR functions and pension funds. Strategy, project work, **and communication to different audiences**, which she sells as a service. Her stated method is *„Zuhören – Essenz erarbeiten – umsetzen."*

**v3: one ordinary document, three prompts, and the arc is her own method.** `start demo/Unterlage/Protokoll Stiftungsratssitzung 11.06.2026.docx` — a pension fund board's minutes, nine agenda items, about three pages, mixing decisions with discussion.

1. *Essenz* — five lines, what was decided against what stays open.
2. *Mail an die Personalleiterin* — three paragraphs, what she needs to know, what is needed from her, by when. The 31 July data deadline is buried in item 6 and is not addressed to her anywhere in the document.
3. *Dasselbe für die Versicherten, ohne Fachbegriffe* — same content, different audience.

**Why prompt 3 is the moment and not a flourish.** Audience-appropriate communication is the service she sells. She is not watching a toy; she is watching the first draft of her own work. The line that closes it: *„Das ist nicht das, was Sie abgeben. Das ist das, was Sie sonst um halb sieben abends anfangen zu schreiben."*

**Why three prompts rather than one.** The effect is the escalation, and each step is one of her three working steps in order. A single prompt produces one third of it.

**A 20-second verification stays part of the demo.** Look up one number from the summary in the document itself. It plants the antidote before the theory block and shows checking costs seconds.

**Teil B, added at the user's request: analysing a pension-fund communication.** Second asset, `Entwurf Information an die Versicherten.docx` — the same fund's draft letter to its members. Technically correct, useless as communication: a 60-word opening sentence, six unexplained technical terms, wall-to-wall passive, and *„Es besteht kein Anlass zur Beunruhigung"*, which manufactures the alarm it denies. Two prompts: *read this as a 58-year-old with no prior knowledge — what does she not understand, and where does she get uneasy?*, then *what is missing that she most wants to know?* The answer being: what it means for **her** pension. The draft names four numbers and none of them concern the reader.

**A third prompt was added: the fact-check against the minutes, and it is now Teil B's ending.** The draft states a funding ratio of **110.4 %**; the minutes say **108.4 %**. The error is not cosmetic — the minutes tie any additional interest credit to a funding ratio **above 110 %**, so the typo silently promises the workforce money the board never granted. It is invisible when proofreading the letter alone and only appears when two documents are laid side by side, which is exactly the work nobody has time for at seven in the evening. If the tool misses it, one sharpening prompt finds it, and that is the lesson rather than a failure; if it invents an error, show that too — both halves are why one verifies.

**This is the best-evidenced move in the whole session, and it is her actual service.** [Where AI is genuinely strong](07-research-strength-categories.md) found critique of *someone else's* artefact better evidenced than critique of one's own — so the one place where the tool is most defensible is also the place where this executive sells. The *Beurteilen* anti-pattern rides along for twenty seconds: ask *„ist das gut?"*, watch it agree, then push the other way and watch it fold.

**One conversation, staged attachments — and this is a design decision, not a mechanic.** Teil A attaches only the minutes; the draft letter is attached at the start of Teil B, in the *same* chat. Attaching both up front blurs prompt 1's summary and prompt 2's mail across two documents. Keeping one conversation is what makes the B3 fact-check possible at all — the minutes are still in context, so no re-attaching is needed.

**This produces the session's cheapest context lesson, unforced:** *what is in the conversation, it can use; what is not in it does not exist for it.* One sentence in the right moment, and [How deep the theory goes](03-theory-depth.md) can spend less on context as a topic. The most likely facilitator error — starting Teil B in a fresh chat — is itself a usable demonstration of the same point.

**Teil B is optional in session one and belongs to the *Hinterfragen* lab in session two.** Hand to [The lab set](04-lab-set.md): this is a ready-made asset for that lab, not just a demo extension.

**Swiss German is now a live constraint on all content, not just this asset.** No ß; *Stiftungsrat*, *Personalorientierung*, AHV. Flagged to [How deep the theory goes](03-theory-depth.md) and [The lab set](04-lab-set.md) — every example line in the course has to pass this test.

**The antidote is not optional and it is now a sequencing constraint.** Cited answers look immaculate while the cited source supports the specific claim only 24–77 % of the time. **Session one's basics block must contain a live citation check, and it must come after the showcase, never before** — an opening that begins with a warning is not an opening. Binds [How deep the theory goes](03-theory-depth.md).

### 3. The data lab survives, it is hands-on, and it sits in session two

**User's decision, against the recommendation to kill it.** The showcase demonstrates; the data lab is where the executive does it themselves. The reasoning that would have merged them — the capability is already displayed — confuses *seeing* with *having done*.

**It lands in session two, and it does not get a slot of its own: it is the *Aufbereiten* lab.** A messy spreadsheet turned into something usable is exactly the step — the executive holds something, in the wrong form. This resolves the budget problem without cutting anything, and it satisfies the rule from [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md) that every lab announces which step it teaches.

### 4. Session two's agent demonstration has a leading candidate

The showcase has taken the folder-to-Excel demo, so the map's fog entry no longer has its obvious answer. [The capability arc](16-capability-arc-research.md) ranks **the scheduled task — set it up in 60 seconds, it runs on Monday with the laptop shut** — third overall and it is the only candidate that reaches into the executive's week. Not yet decided here.

## The sequence

Both sessions run **Theorie → Anwendung → Board**. Minutes are content minutes against a 90-minute budget; the two-hour booking is buffer and is never authored against.

### Sitzung 1 — „Was kann das, und wie briefe ich es?"

| # | Name | Typ | Was landen muss | Schritt | Min |
|---|---|---|---|---|---|
| 1 | **Ein Protokoll, drei Empfänger** | Showcase (Sie führen vor) | Essenz, Mail, Version für die Versicherten — ihre eigenen drei Arbeitsschritte in drei Minuten | — (rückwirkend: *Aufbereiten*) | 3 |
| 2 | **Wie das Ding arbeitet** | Theorie | Warum es selbstsicher falsch sein kann: es wurde darauf trainiert, dass eine selbstbewusste falsche Antwort besser abschneidet als „ich weiß es nicht" | — | 10 |
| 3 | **Der Fußnoten-Test** | Theorie, live | Es sieht immer aus wie belegt. Eine Fußnote aufmachen und nachlesen, was da wirklich steht | — | 7 |
| 4 | **Ein besseres Briefing** | Theorie | Dieselbe Aufgabe, dreimal: faul, mit Kontext, mit Beispiel. Der Qualitätssprung wird gefühlt, nicht behauptet | — | 10 |
| 5 | **Gehört das überhaupt hierher?** | Theorie | Drei Wege: KI / Automatisierung / bleibt bei Ihnen. Am Fall *Rechnungen gegen Bestellungen* — und die ehrliche Antwort ist: kein KI-Fall | — | 8 |
| 6 | **Die vier Schritte** | Theorie, Wrap-up | Alle vier eingeführt, benannt danach, was Sie in der Hand halten. Schließt auf der Übersicht | alle vier | 10 |
| 7 | **Lab 1 — Erklären** | Lab | Ein Thema, das Sie nicht kennen, in zehn Minuten so weit, dass Sie mitreden. Und: was Sie zitieren würden, prüfen Sie an der Quelle | Erklären | 10 |
| 8 | **Lab 2 — Aufsetzen** | Lab | Das leere Blatt ist weg. Die letzte Fassung schreiben immer Sie | Aufsetzen | 12 |
| 9 | **Das Briefing von eben aufheben** | Lab, Fortsetzung von 8 | Aus dem, was gerade funktioniert hat, wird etwas Wiederverwendbares — das ist der Auftrag für die Woche | Aufsetzen | 8 |
| 10 | **Das Board, Lauf 1** | Board | Zwei Kategorien gefüllt, mit ihren eigenen Karten. Einmal die Organisationsfrage | — | 12 |
| | | | | | **90** |

**Der Auftakt läuft in 3 Minuten** — eine große Datei, drei Prompts nacheinander, je 30–50 Sekunden. Die zwei gewonnenen Minuten gehen an das Board, das mit 10 Minuten für den ersten Lauf knapp bemessen war. Regie und wörtliche Prompts: `start demo/REGIE-KARTE.md`.

**Warum Nummer 9 dort steht und nicht früher.** Das war die offene Frage dieses Tickets — *skills* am Ende von Sitzung 1, obwohl es Sprosse drei der Leiter ist. Sie ist aufgelöst, aus zwei Richtungen: [The visual design standard](15-visual-design-standard.md) hat die Leiter von der Navigation genommen und zur gesprochenen Rahmung degradiert, also gibt es keine sichtbare Eskalation mehr, die gebrochen werden könnte. Und inhaltlich ist es keine eigene Lektion, sondern **die Fortsetzung von Lab 2**: man hebt kein Briefing auf, das man nicht gerade selbst geschrieben hat. Es ist zugleich der einzige Auftrag für die Zwischenwoche — und genau das, worauf Sitzung 2 aufsetzt.

**Sitzung 1 endet auf Appetit, nicht auf Vollständigkeit.** Zwei Schritte sind benannt, sichtbar auf der Übersicht, und nicht gemacht.

### Sitzung 2 — „Was mache ich damit, und wo hört es auf?"

| # | Name | Typ | Was landen muss | Schritt | Min |
|---|---|---|---|---|---|
| 1 | **Hier waren wir** | Resync auf der Übersicht | Vier Schritte, zwei geübt, zwei offen | alle vier | 5 |
| 2 | **Was die Woche ergeben hat** | Gespräch | Das aufgehobene Briefing lief oder lief nicht. Beides ist Material | — | 5 |
| 3 | **Vom Gespräch zum Auftrag** | Theorie | Der Unterschied ist nicht Intelligenz, sondern: es benutzt Werkzeuge und macht mehrere Schritte allein. Und es merkt eigene Fehler unterwegs nicht | — | 12 |
| 4 | **Es läuft, während Ihr Rechner zu ist** | Demo (Sie führen vor) | Ein wiederkehrender Auftrag, in 60 Sekunden eingerichtet. Ab hier briefen Sie keine Person mehr, Sie beauftragen einen Prozess | — | 5 |
| 5 | **Lab 3 — Aufbereiten (das Datenlab)** | Lab | Eine unsortierte Tabelle, selbst gemacht. Danach: wer in Ihrem Haus macht genau das von Hand? | Aufbereiten | 18 |
| 6 | **Lab 4 — Hinterfragen** | Lab | Nie „ist das gut?", immer „was sind die drei stärksten Einwände?" — inklusive Widerspruchs-Test | Hinterfragen | 15 |
| 7 | **Wo es kippt** | Theorie, kurz | Die Grenzen der vier, jede mit ihrem Gegenmittel. Und die Schleifen-Zeile: jeden Schritt kann man wiederholen lassen — dann wird ein Prozess daraus | alle vier | 7 |
| 8 | **Das Board, Lauf 2** | Board | Die Karten aus Sitzung 1 liegen noch da. Alle vier Kategorien voll, sortiert nach Wirkung und Aufwand | — | 15 |
| 9 | **Das war's** | Abschluss | Der Rückruf zum Anfang | — | 8 |
| | | | | | **90** |

### Der Rückruf am Schluss

*„Wenn Sie einen Menschen briefen können, können Sie das hier"* — er hält, aber **nicht mehr für alles**, und das ist ein Gewinn, kein Verlust. Für die vier Schritte stimmt er; ab Sitzung 2, Nummer 4 stimmt er nicht mehr, weil man dort keine Person mehr briefet, sondern einen Prozess beauftragt. Vorschlag für den Schluss, der beides trägt:

> *„Vier Schritte. Wenn Sie einen Menschen briefen können, können Sie alle vier. Das Einzige, was Sie zusätzlich brauchen, ist die Angewohnheit, das Ergebnis aufzumachen, bevor Sie es weitergeben."*

Der zweite Satz ist das, was der Fußnoten-Test in Sitzung 1 und Lab 4 in Sitzung 2 beide gelehrt haben, und er ist der einzige Satz, den der Executive in drei Monaten noch braucht.

## Amended by [How deep the theory goes](03-theory-depth.md) — session-one's theory rows superseded

Items 2 ("Wie das Ding arbeitet"), 3 ("Der Fußnoten-Test"), and 5 ("Gehört das überhaupt hierher?") are no longer standalone rows — they're absorbed into a single new section, **AI in a nutshell** (34 min), built around four researched first principles rather than a topic list. See ticket 03's Answer for the full breakdown (a-f) and sourcing.

**Item 9 ("Das Briefing von eben aufheben") is killed as an in-session lab continuation.** No more in-session artifact-building for the take-home. Replaced by a downloadable `.md` handout generated at session one's close (quiz + exercises, capped scope, no new material) — see ticket 03's Answer. This also means **Skills is no longer taught in session one at all**, not even as a teaser — it moves entirely to session two, alongside automation/loops/agents. The retroactive-naming trick used for the showcase does not apply to Skills, since there's no in-session act left to retroactively name.

**Revised session-one table, 2026-07-27 — row 3 folded into row 2:**

"Ein besseres Briefing" is no longer a standalone row. It moved inside "AI in a nutshell" as part (g) — principle 3's worked example, alongside the other three principles' examples — see [How deep the theory goes](03-theory-depth.md) and [Ein besseres Briefing](19-besseres-briefing-demo.md). Minute totals below are approximate, not held to strictly at this stage.

| # | Name | Typ | Was landen muss | Schritt | Min |
|---|---|---|---|---|---|
| 1 | Ein Protokoll, drei Empfänger | Showcase | (unchanged) | — (rückwirkend: Aufbereiten) | 3 |
| 2 | AI in a nutshell | Theorie | Vier Prinzipien, jedes mit eigenem Beispiel: Context is king, confidently-wrong-als-Mechanismus, **briefen-wie-eine-Kollegin (inkl. Ein besseres Briefing, vier Durchläufe)**, Produkt-vs-Modell — inkl. KI/ML/LLM, Schichten, Projekte, KI-vs-Automatisierung | — | ~46 |
| 3 | Die vier Schritte | Theorie, Wrap-up | (unchanged) | alle vier | 10 |
| 4 | Lab 1 — Erklären | Lab | (unchanged) | Erklären | 10 |
| 5 | Lab 2 — Aufsetzen | Lab | (unchanged) | Aufsetzen | 12 |
| 6 | Das Board, Lauf 1 | Board | (unchanged) | — | 12 |
| | | | | | **~93** |

~~Old table (7 rows, standalone briefing row, 91 min) — superseded above.~~

**Take-home handout** (not a numbered row — happens after the page closes): quiz + exercises `.md`, downloaded at session end.

**Session two must now additionally carry Skills' formal introduction**, opening on the Project she built during the week rather than a saved brief: *"das, was Sie letzte Woche in Ihr Projekt gelegt haben — daraus machen wir jetzt etwas, das sich von selbst merkt."* This slots into session two's existing block 3 ("Vom Gespräch zum Auftrag") territory but isn't yet written into that row — flagged to the map's fog.

## Still open in this ticket

- ~~**19 of session one's 90 minutes are theory blocks 2 and 3** (mechanism plus the citation test).~~ **Closed as stale.** [How deep the theory goes](03-theory-depth.md) resolved by rebuilding session one's theory entirely into the 34-min "AI in a nutshell" section, absorbing the old mechanism block and the Footnote Test this note was worried about. No separate spend decision needed here.
- ~~**Session two, block 5 is 18 minutes**, the longest single item in either session.~~ **Deferred, not resolved here.** The 18-min budget stands as authored; whether the data lab actually beats into beats at that length is [The lab set](04-lab-set.md)'s job to test against real content, not this ticket's.
- ~~**The agent demo at session two, block 4 is a recommendation, not a decision.**~~ **Locked in.** Session two block 4 ("Es läuft, während Ihr Rechner zu ist") is confirmed as the scheduled-task demo — the only agent-demo candidate that reaches into the executive's week, which outweighs its third-place ranking in [The capability arc](16-capability-arc-research.md).

## Answer

Resolved 2026-07-27, against the three open points above:

1. **The theory-spend note is stale**, superseded by [How deep the theory goes](03-theory-depth.md)'s restructuring — closed, not re-litigated.
2. **Session two block 5 keeps its 18-min allocation**, unchallenged; testing it against real content is explicitly [The lab set](04-lab-set.md)'s responsibility, inherited from here.
3. **Session two block 4 is locked as the scheduled-task demo**, closing the map's long-open "agent demonstration" fog item.

Both session tables (in "The sequence" and the "Amended by [How deep the theory goes]" revision above) stand as the final, authored sequence — nothing left open in this ticket.
