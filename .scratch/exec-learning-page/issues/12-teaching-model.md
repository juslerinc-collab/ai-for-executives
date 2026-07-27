# The teaching model

Type: grilling
Status: resolved

## Question

What is the right instructional approach for a 1:1 session with a senior executive — and what does that make the page *be*?

This is Layer 3 of the brief and it was missing from the map. It blocks [The lesson sequence](01-lesson-sequence.md), because the format decision below changes what the sequence even is.

**The core challenge.** Both briefs carry group-training DNA: slides, a deck, speaker notes, a presentation. But slides exist to synchronise the attention of a room, and there is no room. With one person the screen competes with the conversation rather than supporting it. The proposal is that the page is a **workbench and a spine**, not a presentation — which changes what belongs on screen and what belongs in the air.

To resolve:

- **Who drives the mouse, and from when?** Neither brief mentions this and it may be the highest-leverage decision in the whole design. If the facilitator drives for three hours, the executive watched a demo. If the executive drives from minute ten — including the page itself, not just Claude — they had an experience. Decide it explicitly, and decide what the page does to invite it.
- **One session or two?** The brief admits single sessions reliably fail to change behaviour, then designs a single 3-hour session and patches it with weekly catch-ups. Two sessions of ~90 minutes a week apart fixes it structurally: session one ends with three things to try, session two opens with what actually happened. That is Kolb's cycle genuinely closed rather than cited, and it makes the follow-up program read as the design rather than an upsell. Cost: two calendar slots is a harder sell, and some executives will only give one block. If it stays one session, the break needs to do far more work than the brief gives it.
- **Attention budget.** Three hours 1:1 is more tiring than three hours in a group — there is nowhere to hide and the executive will be performing competence throughout. What are the deliberate silences, the solo working stretches, the moments the facilitator shuts up or physically steps away?
- **What is on screen versus in the air.** If the page carries real content (settled), what does the facilitator add that the page cannot? And what should the page deliberately *not* say because it is better asked?
- **The debrief.** Three fixed questions after every lab is sound, but in a 1:1 it is just a conversation and may not need to be on screen at all — except that the solo reader in week three has nobody to answer to. This interacts directly with [Facilitated versus alone](10-self-study-mode.md).
- **Andragogy, applied not cited.** The brief invokes Knowles correctly: state the why before the how, never teach a concept that does not cash out within ten minutes, let them choose within labs. Verify each of these actually survives into the sequence rather than remaining a stated principle.

## Answer

### Format: two sessions, not one

**Two sessions of ~90 minutes of content, a week apart, each booked at two hours** so overrun costs nothing and nobody watches a clock. Weekly one-hour follow-ups continue after. The brief's contradiction — admitting single sessions fail to change behaviour, then designing one — is resolved structurally rather than patched.

The week between is the only genuinely new asset this format buys, and it is treated as the design's engine: the executive uses the tool on real work, and session two runs on that evidence. Total content budget is unchanged from the three-hour block.

**Two hours per slot is a booking decision, not a content decision.** Never author 120 minutes of content against it.

### The room: parallel copies, facilitator leads by voice

**No screen share.** Facilitator and executive each have the page open on their own screen. The facilitator leads movement by voice; the executive follows on theirs and copies the prompts directly from it.

Rejected: facilitator-drives-only (the executive has then never navigated the artifact they are expected to reopen alone), executive-drives-only (no pacing control, and remote the facilitator is blind), and alternating (the switching is friction and the page never becomes theirs).

The executive's hand stays on the artifact for the whole session. That is not ergonomics — it is the cheapest possible rehearsal for using it alone in week three, which is a first-class requirement (see below).

**Consequences that are now requirements, not preferences:**

- **The page must be voice-navigable.** There is no shared cursor to point with, so every page needs a short speakable address and re-syncing after a drift must cost one instruction. *„Gehen Sie auf Lab 2"* has to land in seconds.
- **A facilitator-only view is now cheap and safe**, because the screens are already separate and there is no mis-share risk. Whether to build one is [Facilitated versus alone](10-self-study-mode.md)'s decision; this ticket only establishes that it became affordable.

### Page behaviour: click through, then all of it together

Settled against a prototype run on real German content — see `prototypes/PROTOTYPE-density-treatments.html`, variant 4.

**Content pages advance one beat at a time, then close on an overview showing everything together.** The overview items are clickable back to their individual beat, so the closing page doubles as the navigation hub and the resync point.

Three treatments were built and rejected:

| Variante | Wörter | Stille Lesezeit | Verworfen weil |
|---|---|---|---|
| Volle Dichte | 244 | 73 s | The page scrolls. Breaks the fixed viewport, and with parallel copies both parties can be scrolled to different thirds of a page they believe they share |
| Schrittweise (ohne Übersicht) | 63 | 19 s | Never shows the whole vocabulary; the solo reader clicks four times to see one idea |
| Geteilt (dünne Theorie, dichtes Lab) | 65 | 20 s | Partially rolls back the settled "slides carry real content" decision |

**This also settles the screen-versus-air question by construction.** The worry was that parallel copies would let the executive read ahead while the facilitator talks — a problem created deliberately by the "real content" decision. With one beat on screen there is nothing ahead to read. The dense-page reading-silence model is therefore *not* needed and was dropped.

Both parties click. *„Klicken Sie weiter"* is the sync mechanism, and it keeps the executive's hand moving.

**Where the loop line goes.** *„Jeden dieser vier Schritte können Sie auch schleifen…"* belongs on the overview, not on any single step — it is a property of all four and only makes sense once all four are visible.

### Session shape: mirrored, not foundation-then-limits

**Both sessions run the same shape: Theorie → Anwendung → Matrix.**

Rejected: a foundation session followed by a limits session. It is structurally tidier but session one then ends on competence rather than appetite, and session one must end with the executive wanting the second one.

**The split:**

- **Session one** — basic theory (how it works, briefing, context, skills) → **all four steps introduced** → labs for **Erklären** and **Aufsetzen** → first matrix run.
- **Session two** — advanced theory (agents, context management) → labs for **Aufbereiten** and **Hinterfragen** → second matrix run, cumulative.

**Introduce four, practise two — this is load-bearing.** Splitting the vocabulary two-and-two was proposed and rejected: [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md) established the four as one escalation and the shared tag-set for every lab, every card and the matrix axis. Teaching only two would mean session one's cards can carry only half the vocabulary, and the overview page could not run at all.

Introducing all four costs one page-run of about ten minutes and buys three things: the vocabulary stays whole; session one ends on an unmanufactured cliffhanger (two named steps, visibly not yet done); and session two opens on the overview as its natural resync — *„Hier waren wir. Das haben Sie probiert. Diese zwei fehlen noch."*

### The board: cumulative, carried as a file the facilitator holds

**The matrix runs in both sessions, cumulatively.** Session one closes on a board with its two categories filled. Session two reopens *with session one's cards still on it*, adds whatever the week produced, and fills the remaining two — closing on all four categories on one canvas.

This kills the commercial risk of putting the payoff in session two: a no-show still leaves the executive holding a real board. And it preserves the clustering that is the matrix's entire point — [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md) rejected seven categories precisely to protect it, and two parallel boards of two categories each would have thrown it away by another route.

**Carried between sessions as a downloadable JSON.** Steer to [The use-case backlog and matrix](06-backlog-matrix-prototype.md): the **facilitator holds that file between sessions, not the executive.** Asking a senior executive to manage a `.json` between two appointments is both a small indignity and a live failure mode; the facilitator is setting up session two anyway. The executive's own copy matters for the solo revisit, which is a different path.

This makes persistence load-bearing rather than nice-to-have — a hard constraint handed to ticket 06.

### After each lab: one capture question, reflection stays in the air

**The brief's fixed three-question debrief is killed.** It is group-training machinery — a template exists to make thirty people reflect on cue. At a desk with one person, reflection happens without scaffolding, and three questions printed on a shared page make a conversation feel administered.

The template also conflated two different jobs: **reflection**, which only works as talk, and **capture**, which is a mechanism and is the only part that must be on screen.

**One generic capture question, repeated after every lab, on screen with a field. That answer is the card.**

Recommended wording, for [The lab set](04-lab-set.md) to finalise: **„Wo hätte Ihnen das zuletzt geholfen?"**

The reasoning, so it is not relitigated:
- *„das"* points at the thing they just did, so the question needs no abstraction. The brief's *„wo taucht diese Form noch auf?"* asked for recall against a concept — the same failure the brief itself diagnoses when it justifies a 20–25 card use-case menu. **Recognition beats recall.**
- *„zuletzt"* rather than a fixed window. *„letzte Woche"* recalls more sharply but fails outright on a quiet or atypical week, in front of the client.
- Rejected: *„Was hätten Sie sich damit gespart?"* — strongest feed into the business case, but it presumes the answer and teaches the executive to perform enthusiasm rather than report their week.

**Supporting examples per step, behind a toggle — not visible by default.** Five examples sitting under the question get picked off the list instead of prompting a real one, and a card that says *„40 Seiten vor der Sitzung"* is worth nothing because it is generic. They are a rescue for when the room goes quiet, not a menu. Draft example sets per step are recorded in [The lab set](04-lab-set.md).

**Role-specific example sets (Vertrieb, Finanzen, HR, Operations) deferred, not rejected.** Sharper recognition, but a content pass on every reuse — the same trade ticket 02 weighed on facilitator-swapped placeholders. Revisit once the generic version has run with a real executive.

**The organizational lens — *„Wer in Ihrem Haus macht genau das auch?"* — is asked once per session, at the board, not after every lab.** It is the commercially decisive question, it is answered better with the cards in view, and asking it four times a session blunts it.

### Solo revisit is a first-class mode

The executive is expected to reopen the file alone after each session to revisit the theory and re-run the examples. This is **not** a graceful-degradation afterthought — it is a design target, and it promotes navigation from convenience to infrastructure.

**Two levels of navigation are required: chapters and subchapters.** Jumping directly to a specific lesson *or* to a specific part within it must be trivial with no facilitator present. Combined with the voice-navigation requirement above, the section menu is now load-bearing in both modes — which contradicts the assumption in [The journey prototype](05-journey-prototype.md) that the menu mattered mainly for the revisit.

### Attention budget

Largely dissolved by the decisions above rather than answered separately. Two 90-minute sessions replace one three-hour block; beats are short; and the executive is clicking, copying and typing throughout rather than being presented at. No deliberate silences need designing in — the original need for them came from the dense-page model that was rejected.

### Andragogy: a standing test, handed to the sequence

Knowles is invoked correctly in the brief but remains a stated principle. It converts into three tests [The lesson sequence](01-lesson-sequence.md) must apply to every entry it produces:

1. Is the *why* stated before the *how*, in one line?
2. Does this concept cash out in something the executive does within ten minutes? If not, cut it.
3. Where can they choose within the lab?

### Unresolved, handed on deliberately

**The skills / rung-three collision.** Session one ends with *skills* — what a saved, reusable brief is. Skills are **rung three** of the ladder of autonomy, so under this split rung three arrives before half the four steps have been practised, and the ladder stops being an escalation.

There is a real argument it is fine: a saved brief is exactly the artifact that generates evidence during the intervening week, which is what session two opens on. But it is a genuine collision with the ladder-as-spine and it belongs to [The lesson sequence](01-lesson-sequence.md), which this ticket unblocks.

### Assets

- `prototypes/PROTOTYPE-density-treatments.html` — throwaway. Four page treatments switchable at `?v=1..4`, run against real decided German content, with a live readout of words on screen, silent reading time and clicks-to-finish. Variant 4 is the accepted model.

## Revision — die Beat-Mechanik ist überholt

**Superseded by [The visual design standard](15-visual-design-standard.md).** Confirmed by the user against `prototypes/PROTOTYPE-nav-rail.html`, which is now the shell standard.

This ticket settled that pages **click through one beat at a time and then close on an overview of all of them**. That is no longer the model.

**The session is one continuously scrolling page with scroll-snap.** Each beat is still exactly one full screen — `scroll-snap-stop: always` guarantees it, so the "one beat at a time" discipline that mattered here is preserved. What changed is the input (scroll, not click) and the closing overview, which is replaced by the hover-navigation menu: the whole session is reachable at any moment from the rail, so a dedicated end-of-chapter overview no longer earns its place.

**What survives from this ticket unchanged:** two sessions of ~90 min a week apart, the mirrored Theorie → Anwendung → Matrix shape, parallel copies with no screen share, all four steps introduced in session one with two practised per session, the cumulative board carried as a facilitator-held JSON, the single capture question, and the solo revisit as a design target.

**Strengthened, not weakened:** this ticket promoted chapter *and* subchapter navigation from convenience to infrastructure. The rail now delivers exactly that, and does it in one device.
