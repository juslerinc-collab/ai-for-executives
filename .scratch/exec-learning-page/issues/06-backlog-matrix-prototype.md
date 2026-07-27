# The use-case backlog and matrix

Type: prototype
Status: resolved
Blocked by: 02, 04

## Question

How does the use-case backlog get built, sorted, and exported?

This is the highest-value component in the build and the piece the executive still has in three months. It is also the most complex thing to make. Blocked on the pattern vocabulary (it supplies the categories) and the lab set (it supplies the capture points).

Build a rough working prototype and react to it.

To answer:

- **Capture.** Cards arrive from three places: the debrief question after every lab, the browsable menu of 20–25 supplied use cases, and free entry. How do those three feel as one flow rather than three mechanisms?
- **The menu.** The brief wants 20–25 supplied cards grouped by category, because almost nobody answers "what would you automate?" from a blank page but everyone recognises their own pain when they see it named. Do those categories become the sweet-spot patterns?
- **The matrix.** Impact against implementation effort. Drag, or pick a cell, or two sliders? Dragging is satisfying and fiddly on a laptop trackpad in front of a client.
- **The two lenses.** The brief separates the personal list from the organizational list, and calls the organizational one the commercially important part. Are they two matrices, one matrix with a toggle, or a per-card flag?
- **Persistence.** Browser storage so a refresh does not wipe the session — but the file may be opened from disk on one machine and later from a hosted URL, which are different origins and therefore different storage. Decide what happens to their data across that gap, including whether an explicit save/load-a-file escape hatch is needed.
- **Export.** A clean PDF styled to match, produced via a print stylesheet. What is on it: the ranked backlog, the matrix itself, their reusable brief, their notes.

## Inherited from [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md)

**The categories are four, fixed and ordered: Erklären · Aufsetzen · Aufbereiten · Hinterfragen.** That answers the menu sub-question above — yes, the supplied cards are grouped by these. Four was chosen partly *for this component*: eight debrief cards across four buckets clusters visibly, where six or seven left it near one-per-card and destroyed the insight the matrix exists to produce ("five of your eight are the same shape, and four people here do that shape by hand").

**Cards may need a second tag: the decision-tree branch.** [The AI-versus-automation decision tree](14-ai-vs-automation.md) splits work three ways — KI / Automatisierung / bleibt bei Ihnen. A backlog tagged only by step silently asserts everything on it is an AI case, which is exactly the error the tree exists to prevent. Decide whether the branch is a card field, a filter, or left out.

## Inherited from [The teaching model](12-teaching-model.md) — persistence is now a hard requirement

**The board runs twice, cumulatively.** Session one closes on a board with two of the four categories filled. Session two **reopens with session one's cards still on it**, adds whatever the intervening week produced, and fills the remaining two — closing on all four categories on one canvas.

This was chosen over two independent per-session boards specifically to protect the clustering payoff that four categories exist to produce, and over a single end-of-session-two board to keep no-show insurance: session one must end with the executive holding something real.

**Consequences for this ticket:**

- **The persistence sub-question above is no longer "decide what happens".** State must survive a week, across two sessions, and browser storage alone cannot carry it. A **downloadable JSON** is the accepted direction.
- **The facilitator holds that file between sessions, not the executive.** Asking a senior executive to manage a `.json` between two appointments is a small indignity and a live failure mode; the facilitator is setting up session two regardless. The executive's own copy matters for the **solo revisit**, which is a separate path and must also work.
- **Import has to be as designed as export.** Loading last session's board in front of the client, on the facilitator's screen and the executive's, is now a live moment in the session rather than a recovery mechanism.

**Capture is now one mechanism, not three.** The three-question debrief is dead: after every lab there is **one generic capture question** on screen with a field — recommended wording *„Wo hätte Ihnen das zuletzt geholfen?"* — and that answer is the card. The organizational lens is asked **once per session, at the board**, which makes the board a place the session visits deliberately rather than a component it ends at.

## Inherited from [Hosting and handover](11-hosting-handover.md) — the facilitator is the only input path

**The executive types nothing into this component, ever.** Cards are captured by the facilitator on their own copy while the executive talks. This resolves the `Persistence` sub-question above outright and changes what has to be built.

- **The `Persistence` sub-question is dead as written.** It worried about "opened from disk on one machine and later from a hosted URL, which are different origins". Delivery is now a hosted URL only, and the executive's copy **never reads or writes browser storage at all**. `localStorage` survives solely as the facilitator's working store within a single session, so a refresh loses nothing.
- **Two distinct modes, one file.** A **facilitator edit mode** (capture, arrange, export) and a **read-only render** for the executive. Decide how edit mode is entered — a URL parameter and a hardcoded flag are both in the register the rest of the build already uses.
- **Export is mandatory, not a feature.** The JSON is the record of truth; browser storage is a convenience cache. This upgrades [The teaching model](12-teaching-model.md)'s facilitator-held JSON from a courtesy to the only durable copy.
- **Import is re-scoped, not cancelled.** Line 40 above made import "as designed as export" because it was a live moment on *both* screens. It is now a **facilitator-only** mechanism — loading last session's board onto their own screen at the start of session two. The executive never imports anything.
- **Her final board ships baked into the HTML**, as a `<script type="application/json" id="matrix-seed">` block written in at deploy 2, rendered as content. The board may still sort and filter; it just reads from that block. This is what makes the week-three solo revisit work with no file and no step.
- **The PDF export sub-question is unaffected** — still a print stylesheet, still the ranked backlog plus the matrix.

**There is no Abarbeiten category.** It was considered as a fifth and killed — it survives as a property of the four (*„jeden Schritt können Sie auch schleifen — dann wird daraus ein Prozess"*). If repeatability matters for prioritisation — and it plausibly does, since a looped step is a bigger prize than a one-off — it belongs as a per-card flag, not a category. Worth testing in the prototype.

## Answer

Three structurally different rough prototypes were built (`prototypes/PROTOTYPE-backlog-matrix.html`, variants A/B/C) and reacted to live, then converged into one settled design, iterated to `prototypes/PROTOTYPE-backlog-matrix-v3.html`:

- **One view, always editable.** No facilitator-edit vs. executive-read-only split, no mode toggle — settled against ticket 11's "facilitator is the only input path" framing, which this prototype doesn't need to model since it's about the shape of the backlog/matrix interaction itself, not the handover mechanics.
- **Capture is three visibly separate doors, not one undifferentiated tray** — *Aus dem Labor* (debrief captures) / *Ideen-Menü* (the four fixed sweet-spot categories, [ticket 02](02-sweet-spot-taxonomy.md)) / *Eigener Use Case* (free entry) — rendered as one compact, spreadsheet-narrow inventory table, not three boxy panels. A row is "used" by dragging it down into the backlog (click also works as a fallback); once used it's removed from the inventory.
- **Backlog is a sorted list, not a raw board.** Each row expands to Impact/Aufwand sliders, a Persönlich/Organisational tag, and the repeat (Abarbeiten) flag.
- **Persönlich/Organisational is a tag, not a view.** No segmented filter, no split boards — settled after reacting to variant B's two-matrix split feeling like unnecessary duplication once tried live.
- **The matrix is real axes with draggable bubbles**, not a scatter with no reference lines — dragging a bubble updates the same card's sliders and vice versa. Bubbles sharing a cell fan out into a small ring instead of stacking exactly on top of each other. The repeat flag still reads as a bigger bubble. Category colour is kept (it's the only categorical dimension available) but flagged as not fully resolved — no stronger alternative was proposed.
- **Export is a numbered list next to a numbered (not colour-coded) matrix** — the same number identifies a use case in both places, print-safe.
- **JSON download is the persistence escape hatch**, consistent with [Hosting and handover](11-hosting-handover.md)'s "JSON is the record of truth" — no backend, so the facilitator downloads the file to carry state forward.

Not resolved by this ticket, left as-is: which concrete color (if any) the matrix bubbles should carry instead of category colour — noted but not answered, since no alternative was proposed during the reaction.
