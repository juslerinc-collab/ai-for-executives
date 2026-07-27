# Session Zero

Type: grilling
Status: resolved

## Question

Should a discovery/intake session precede the two ~90-minute teaching sessions, and if so: what is its purpose, what does it need to capture, how is it run, and how does it change [The teaching model](12-teaching-model.md) and [Hosting and handover](11-hosting-handover.md) — both already resolved on a two-session, two-deploy design?

Raised by the user directly: after running this format, they feel they need an open conversation *before* session one — where the executive stands, what they want to achieve, what their daily work actually looks like — so facilitator and executive share a common understanding of the gap and the goal before any teaching starts.

Bundled into the same ask, but a distinct decision: the user wants a whiteboard-style surface, in the shell's existing visual language, for this conversation — buttons, categories, freeform notes, possibly pre-populated questions. Per this map's own sequencing rule ("content leads, design follows"), that is a separate **prototype** ticket, blocked by this one, not resolved here.

To resolve:

- **What is Session Zero *for*, precisely?** Rapport and logistics only, or does it produce an artifact (e.g. a first draft of the matrix's categories, a rough map of her daily work) that session one opens on the way session two opens on session one's evidence?
- **Does it change the teaching model's cadence?** [The teaching model](12-teaching-model.md) closed on two sessions of ~90 min, a week apart, each booked at two hours, with the intervening week as the design's engine. Where does Session Zero sit relative to that rhythm — same week, further out, a different booking length?
- **Facilitated or does the executive drive?** [The teaching model](12-teaching-model.md) settled parallel-copies-no-screen-share for sessions one and two specifically because both parties navigate the same artifact. Session Zero is a different kind of conversation — open-ended, discovery, not instructional. Does the same mechanic apply, or is this the one place the executive doesn't need a copy at all?
- **What does the whiteboard actually hold?** Categories (e.g. daily tasks, pain points, goals), freeform capture, pre-populated prompt questions to unstick a quiet room — the user named all three. Which are load-bearing versus nice-to-have fog for the prototype ticket to explore?
- **Who writes on it?** [Hosting and handover](11-hosting-handover.md) settled that the executive's copy is read-only and the facilitator is the only input path, specifically to eliminate storage failure modes and because "executives do not want to type into a form while talking." Does that constraint carry into Session Zero, or is this exploratory session exactly the place a shared, editable whiteboard earns its keep?
- **Does output from Session Zero feed the matrix?** [The teaching model](12-teaching-model.md) made the matrix cumulative across sessions one and two, carried as a facilitator-held JSON. Does Session Zero's whiteboard seed that same file, or is it a separate artifact that never becomes matrix cards?
- **Deploy and gating consequences.** [Hosting and handover](11-hosting-handover.md) fixed "exactly two deploys, same URL, then frozen" and a hardcoded joke gate structure (`doris` / `askclaude`) tied to a two-session shape. A third session likely means a third deploy and reopens the gating scheme.
- **Does this get its own chapter on the rail**, per [The visual design standard](15-visual-design-standard.md)'s shell — a third top-level entry alongside session one and two — or does it live outside the scroll-snap session structure entirely, e.g. as a standalone pre-call?

## Answer

**Session Zero exists, and it is folded into the front of session one — not a separate booking.** No fixed time budget; it takes as long as it takes. This simplifies most of the open questions below by removing the need for a third deploy or a new gate.

**Purpose.** A live, interactive, facilitator-led conversation to build a shared understanding before any teaching starts: her current AI maturity, what she's already tried, how her daily work actually looks, and what she wants to achieve. It produces a **project-scoping one-pager** — closer to the front page of an engagement brief than a data-collection form. Deliberately **not** a task inventory; the daily-work texture feeds the narrative rather than being logged as a discrete list.

**Separate artifact from the matrix.** Does not pre-seed [The use-case backlog and matrix](06-backlog-matrix-prototype.md). The matrix's four categories (Erklären/Aufsetzen/Aufbereiten/Hinterfragen) are only legible once she's learned the vocabulary in session one — pre-sorting raw material into them before that would mean the facilitator does the categorizing for her, undercutting the "she builds this herself" mechanic established in [The teaching model](12-teaching-model.md). The matrix still starts cold in session one, now just better-aimed.

**A fixed, reusable AI-maturity ladder — four levels, same for every client:**

| Stufe | Name | Kennzeichen |
|---|---|---|
| 1 | **Installiert, nicht im Alltag** | Hat es vielleicht kurz ausprobiert, aber kein wiederkehrender Einsatz. Kein Vertrauen, was es eigentlich kann. |
| 2 | **Ad-hoc-Nutzerin** | Setzt es gelegentlich für einzelne Aufgaben ein — spontan, ohne festes Vorgehen, jedes Mal bei null. |
| 3 | **Regelmäßig, aber ohne Methode** | Nutzt es im Alltag für wiederkehrende Aufgaben, intuitiv — kein wiederverwendbares Briefing, keine bewusste Unterscheidung der vier Schritte. |
| 4 | **Bereits mit System** | Arbeitet schon mit eigenem Kontext (Firmenwissen, Notizen wie Obsidian, „Company Brain"), eigenen Skills/Projects — hat sich ein Setup gebaut. Für sie verschiebt sich Session Zero von den Grundlagen hin zum **Aufspüren noch unbearbeiteter Use Cases**, die gemeinsam aufgebaut werden. |

Deliberately coarse — three or four minutes of live placement, not a teaching instrument. Doesn't compete with the four-step vocabulary taught later in session one.

**Input stays facilitator-only.** Same rule as the rest of the site ([Hosting and handover](11-hosting-handover.md)): the executive's copy never reads or writes storage, so the facilitator types while she talks. **A real-time, jointly-editable "mirror" backend (both parties writing to the same live board over Netlify) is the user's stated long-term ideal, explicitly deferred — recorded here as a backlog idea, not a requirement of this build.**

**Structure.** A standalone rail chapter — "Kapitel 0 – Wo stehen Sie?" — voice-navigable like every other chapter, appearing before the existing session-one showcase. Chosen over folding it into the showcase's opening beat because it's substantial enough (interactive, produces a standalone artifact) to be its own addressable stop.

**Deploy and gating: unchanged.** Ships as part of the existing "before session one" deploy from [Hosting and handover](11-hosting-handover.md). No new deploy, no new gate.

**Handed downstream.** [The Session Zero whiteboard](18-session-zero-whiteboard.md) — the actual visual build: categories, buttons, pre-populated questions, in the shell's existing design language, holding the maturity ladder and the one-pager.

## Amendment — superseded by [The Session Zero whiteboard](18-session-zero-whiteboard.md)

Two details above are stale, updated during the build rather than here: the ladder is now **five levels** (a Power-User tier was added, reversing this ticket's own "four is enough"), and the chapter is named **"Session 0 — wo stehen wir heute?"**, not "Kapitel 0 – Wo stehen Sie?" Everything else here — folded into session one, no separate booking, facilitator-only input, separate from the matrix, no new deploy/gate — stands. Ticket 18 is the reference for exact current wording and structure.
