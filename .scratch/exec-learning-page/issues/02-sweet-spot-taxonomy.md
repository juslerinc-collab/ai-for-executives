# The sweet-spot pattern vocabulary

Type: grilling
Status: resolved
Blocked by: 07

## Question

What is the definitive list of patterns that today's AI is genuinely strong at — and what is the real example attached to each?

This is load-bearing well beyond its own lesson. The patterns are the shared vocabulary of the entire session: every lab announces which pattern it is teaching, every debrief drops a card tagged with a pattern, and the same patterns are the category axis of the final use-case matrix. Get this list wrong and three other things inherit the error.

Starting candidates from the charting conversation: comparing, combining, reconciling, summarising, extracting, drafting, and **challenging** — the sparring-partner use, which is the one executives least expect a machine to be good at and the one that most directly serves someone whose scarce ingredient is judgment. [Where AI is genuinely strong](07-research-strength-categories.md) supplies the evidence base; this ticket decides the final list.

To resolve:

- How many patterns? Few enough to hold in the head — likely five to seven. More than that and it stops being a vocabulary and becomes a taxonomy nobody remembers.
- Each needs a one-line example an executive recognises instantly, in their own working life, not a generic one.
- Are these framed as things AI is good at, or as shapes of work you can hand over? The second is more consistent with the delegation language the session runs on.
- What is the honest opposite — the anti-patterns, where handing it over goes badly? The session needs this to be credible, and it is where the "confidently wrong" material can cash out practically instead of theoretically.
- Do the patterns need to survive the executive's own vocabulary, i.e. are they German terms an executive would use, not translated jargon?

## Answer

### The four steps

**Erklären → Aufsetzen → Aufbereiten → Hinterfragen.** Four, not seven. Each named by *what the executive is holding when they start*, phrased as a handover to a colleague.

| Schritt | Sie halten… | Evidenz |
|---|---|---|
| **Erklären** | nur ein Thema, das Sie nicht kennen. | Größter Artefakttyp in Anthropics Telemetrie (17%); Educational 19% aller Nutzung |
| **Aufsetzen** | nichts. Leeres Blatt. | Stärkste Evidenz mit Abstand — mehrere RCTs, repliziert |
| **Aufbereiten** | etwas, aber in der falschen Form: der Bericht vom Kollegen, das Angebot, die 40 Seiten. | Extraktion/Klassifikation (#2) und Zusammenfassen einzelner Dokumente (#3) |
| **Hinterfragen** | etwas Fertiges, und es muss halten. | Kritik an *fremden* Artefakten (#4) — stärker belegt als Kritik am eigenen Output |

**Order is an escalation by how much already exists, and every rung is a legitimate entry point.** A colleague hands you a document, you start at *Aufbereiten*. It also happens to end on the biggest surprise, which the brief claims is the find-the-weakness task.

### Construction direction: work-in, research vetoes

The list was built from shapes of senior work, not from measured capabilities, so every name is a handover an executive would say out loud. The research then had veto rights: anything thin was narrowed until defensible or demoted to the shadow list. This is why *Aufbereiten* and *Erklären* earn seats — they are work-shapes that were invisible inside "summarising" and "drafting".

### Abarbeiten: killed

Considered as a fifth term (any of the four, run a hundred times, without you) and rejected. It is the same four steps with the question of whether they are automated, which the decision tree already answers. It survives as **one line, a property of the four**: *„jeden dieser vier Schritte können Sie auch schleifen — dann wird daraus ein Prozess statt eines Gesprächs."* That line is the handoff to the automation branch of the tree and to the ladder's upper rungs.

### Names: the reasoning, so it is not relitigated

- **Einordnen / Vorsortieren / Zuordnen / Sichten / Einteilen — all rejected.** All sorting words; sorting sounds clerical, which is both beneath the audience and an undersell. The category itself was then dissolved into *Aufbereiten* plus the loop line.
- **Übertragen → Aufbereiten.** *Übertragen* is ambiguous in German (transfer, transmit, broadcast, delegate) and needs an object. *„Bereiten Sie das für den Vorstand auf"* is the actual sentence.
- **Gegenhalten → Hinterfragen.** *Gegenhalten* implies sparring with your own thinking, which is the narrower read. *Prüfen* was rejected for over-promising — it implies certification. *Hinterfragen* raises questions without certifying, which is exactly the honest scope.
- **Entwerfen → Aufsetzen**, and **Erstellen rejected.** *Erstellen* is what a system does; *aufsetzen* is what you ask a person to do.
- **Zusammenfassen** and **Herausziehen** dissolved into *Aufbereiten* as named moves (*kürzer machen* / *für andere aufbereiten*), not categories. Promoting a technique to a category is what makes a vocabulary feel like a taxonomy.

**Aufbereiten is deliberately broad.** Challenged on exactly this and kept: that is where the volume of real executive work sits, and splitting it produces five categories, which is the count already rejected as unmemorable.

### The shadows and the Gegenmittel

Every step carries a boundary *and the move that beats it*. The Gegenmittel are techniques, so they are practisable in labs rather than readable off a warning slide — this was a user addition and it is load-bearing.

| Schritt | Grenze | Gegenmittel |
|---|---|---|
| **Erklären** | Sich orientieren ja; sich auf Zahlen verlassen, die Sie weitergeben, nein. | Alles, was Sie zitieren würden, an der Quelle prüfen. Das ausgesprochene Sicherheitsgefühl ignorieren — es ist nahezu konstant, ob die Antwort stimmt oder nicht. |
| **Aufsetzen** | Erster Entwurf ja, Endfassung nein. Zwei Kollegen mit demselben Briefing bekommen denselben Text. | Die letzte Version schreiben immer Sie. Eigenes Beispiel mitgeben, sonst klingt es wie alle. |
| **Aufbereiten** | *Ein* begrenztes Dokument ja, zwanzig nein. Die Antwort muss im Text stehen — liegt sie *zwischen* zwei Quellen, die sich widersprechen, sind Sie draußen. | Stapel halbieren, zweimal fragen: tauchen neue Punkte auf, war Durchgang eins nicht vollständig. Bei Vergleichen: Reihenfolge tauschen und neu fragen. |
| **Hinterfragen** | Einwände *erzeugen* ja (F1 0,83–0,86), *Urteil abgeben* nein (F1 0,34–0,48). | Nie *„ist das gut?"*, immer *„was sind die drei stärksten Einwände?"*. Prämisse umdrehen: argumentiert es die Gegenseite genauso überzeugt, hat es gespiegelt, nicht argumentiert. |

**One anti-pattern promoted to full billing: Beurteilen**, demonstrated live via the FlipFlop effect — push back on an answer you know is right, watch it fold (~46% flip rate, −17% accuracy). Chosen over *Abgleichen* because it needs no supplied asset, triggers in ninety seconds, is the exact mirror of *Hinterfragen* rather than a new concept, and the executive can trigger it themselves.

### The decision tree — three branches, in the basics section

Not a gate in front of the four. A separate thinking tool answering a different question: *should I be here at all?* The four answer *what do I hand over?*

- **KI** — Sprache rein, Sprache raus, Urteil im Spiel, „gut genug und ich schaue drüber" ist akzeptabel.
- **Automatisierung** — die Regel steht, das Ergebnis muss jedes Mal exakt stimmen.
- **Bleibt bei Ihnen** — Entscheidung, Verantwortung, Beziehung. Oder: die Antwort steht in keiner einzelnen Quelle, sondern zwischen zwei, die sich widersprechen.

Three branches, not two: a two-branch tree implies everything is either AI or automatable and has no honest answer for *„zwei Beraterberichte widersprechen sich"*, which is a case the executive will actually bring. The third branch is also where the best-evidenced frontier boundary in the research sits (Dell'Acqua's out-of-frontier task).

**The demonstration case is Rechnungen gegen Bestellungen abgleichen** — raised by the user as the test of whether the vocabulary is usable, and the honest answer is that it is *not* an AI case. The ERP does a three-way match exactly and every time; an LLM does it approximately and confidently. AI enters one step later, at the *Klärungsmail an den Lieferanten*. An executive who can say that sentence has got more from the session than one who memorised four verbs.

### Section structure this fixes

The starting section runs: **basics** (how it works, briefing, context management, skills) → **the decision tree** → **the four steps as the wrap-up**, which then guide every lab. Feeds [The lesson sequence](01-lesson-sequence.md) and [How deep the theory goes](03-theory-depth.md).

### Framing constraint — non-negotiable

The research is explicit: *there is no published, validated taxonomy of task categories where LLMs are strong.* The four are a **pedagogical construct**. The session must never say *„Forschung zeigt, KI ist gut in diesen vier Dingen."* It says: here is a working vocabulary for sorting your own work, and here is how to test whether a task sits inside the frontier. That second framing is what Dell'Acqua et al. actually argue.

Also carried forward from [Where AI is genuinely strong](07-research-strength-categories.md): the citations are unverified, and the jagged-frontier result was produced with GPT-4 in 2023 — the *existence* of jaggedness replicates, the *shape* has moved. Say so out loud rather than shipping 2023 boundaries.

### Moved out of this ticket

The concrete example per step. Mis-scoped here — it depends on how the labs are structured, so it moves to [The lab set](04-lab-set.md).

### Rejected along the way

- **Seven categories** (the research's set): two entries were *moves* rather than steps, two would go unpractised, and at seven the matrix tag becomes one-per-card, which destroys the clustering that is the matrix's entire payoff.
- **Six** (five plus Erklären): chosen briefly, then killed by the recognition test — *Abarbeiten* answered "how many times?" while the others answered "what operation?", so any problem with both a pile and an operation sat ambiguously between two non-competing answers.
- **Nouns instead of verbs** (Text · Struktur · Urteil · Wissen): abandons the handover grammar.
- **Naming categories after situations** rather than verbs: best recognition, but loses the handover grammar. Solved instead by naming verbs after what you are holding.
- **Comparing / Gegenüberstellen as its own category**: the research finds comparing, combining and reconciling the *weakest*-evidenced of the candidates, with evidence pointing the wrong way as inputs lengthen. It lives inside *Aufbereiten* with an explicit-rubric requirement.
- **A separate anti-pattern section**: reintroduces the warning lesson the map deliberately dismantled when it split governance.
