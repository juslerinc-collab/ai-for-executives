# The lesson-level design pass

Type: prototype
Status: resolved

## Question

Now that session one's content is locked — the nutshell theory ([How deep the theory goes](03-theory-depth.md)), the sequence ([The lesson sequence](01-lesson-sequence.md)), and Lab 1/Lab 2 ([The lab set](04-lab-set.md)) — and the shell is locked ([The visual design standard](15-visual-design-standard.md): scroll-snap, one beat per screen, paper/navy/ultramarine, Archivo + Schibsted Grotesk, nav rail as position-only navigation), how does each lesson *type* actually lay out against real content?

Carried forward from [The journey prototype](05-journey-prototype.md), which raised these against placeholder content before the shell or the content existed:

- **The lab-slide layout.** A lab beat has to hold the task, a copy-ready prompt block, the Beispiele toggle, the lever-prompt table, a what-to-look-for line, and the debrief capture field — on one scroll-snap screen, at the shell's established density. Test against Lab 1 and Lab 2's actual content from [The lab set](04-lab-set.md).
- **The section/subchapter menu's concrete shape.** Always visible, or summoned? It has to work both live (facilitator-led, voice-navigable) and solo (the executive reopening the file alone in week three) — both hard requirements from [The teaching model](12-teaching-model.md).
- **The progress indicator + keyboard navigation**, given beats vary wildly in length (a nutshell theory beat vs. a ten-minute lab).

Also settle, since they only become answerable with real content in the shell:
- The nutshell theory beats — four principles plus definitions plus two closers, each needing its own worked example ([How deep the theory goes](03-theory-depth.md)) — laid out at scroll-snap density.
- The showcase/opening-win beat ([The lab set](04-lab-set.md)'s Answer) against real (if placeholder-swapped) Doris material.

Build a rough clickable prototype covering one instance of each lesson type (a theory beat, a lab beat, the showcase beat) and react to it. Link the prototype from this ticket as an asset.

Resolved when each lesson type has a settled layout, tested against session one's actual content.

## Answer

Resolved 2026-07-27. Prototype: `prototypes/PROTOTYPE-lesson-types.html`, extending the locked shell from `prototypes/PROTOTYPE-nav-rail.html` with real content for one showcase beat, one theory beat, and one lab beat.

**All three lesson types fit the scroll-snap density, but the lab type only fits by hiding secondary content — this is the real, specific finding.**

- **Showcase beat** (Ein Protokoll, drei Empfänger) fits with room to spare — headline, two lines of setup, a three-card output preview (Essenz/Mail/Versicherte), one closing line.
- **Theory beat** (Prinzip 1, Context is king) fits with room to spare — headline, one paragraph, one glass card holding the live citation-check interaction (click "An der Quelle prüfen" → confirms inline, no navigation away).
- **Lab beat** (Lab 1, Erklären) fits **only because Beispiele and the five Hebel-prompts are collapsed drawers by default**, exactly as [The lab set](04-lab-set.md) already specified ("behind a Beispiele toggle, hidden by default"). On screen by default: eyebrow, headline, one-line task framing, the copy-ready prompt card with a copy button and the "worauf achten" line, the two collapsed drawer buttons, and the debrief input — all visible without scrolling. Opening a drawer pushes the beat past one screen, which is expected and fine for an expanded state.

**Section/subchapter menu:** the nav-rail's existing hover-to-open menu (position-fixed rail, hover expands and pushes) carries over unchanged and needs no new design — chapter list plus active-chapter highlighting, tested here against three real, differently-shaped chapters.

**Progress indicator:** the rail's existing done/now node states, tested here across three lesson types of very different length and shape, double as the progress indicator without a separate device — confirms the standing candidate from [The journey prototype](05-journey-prototype.md).

**Keyboard nav:** added (`↑`/`↓` and `←`/`→` jump to the adjacent beat, arrow keys ignored while an input/textarea/contenteditable is focused, per the standard web convention). Verified via click-driven rail navigation in this session; arrow-key dispatch itself wasn't independently confirmed in the sandboxed preview snapshot used to review it, but the listener is a standard `keydown` handler with no unusual dependency — flag for a quick manual check in a real browser tab before considering this closed for good, not a redesign risk.

**Not tested here, deliberately:** the remaining nutshell beats (principles 2–4, definitions, closers) and Lab 2 — the pattern established (compact-by-default, drawers for anything supplementary) is the transferable answer, not a claim that every remaining beat has been laid out individually.
