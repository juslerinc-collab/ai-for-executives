# The journey prototype

Type: prototype
Status: resolved

## Question

How does moving through this thing actually feel?

The design brief settles the *look* — navy, radial fades, Space Grotesk over Inter, two-tone left-aligned headlines, Lucide at 1.5px, the four-rung ladder rail as the only decorative element. None of that is in question here.

> **Correction, from [The teaching model](12-teaching-model.md): the paragraph above is no longer true.** The user is not convinced by the design language, and it is now open as [The visual design standard](15-visual-design-standard.md). This ticket still owns the *journey*; it no longer gets to assume the look is decided underneath it. Do not settle layout against a palette that may not survive.

What is in question is the journey, and it cannot be settled in prose. Build a rough clickable prototype with placeholder content and react to it.

To answer:

- Slide-like discrete steps, or a scrolling page with sections? The charting conversation landed on "PowerPoint-like, click-throughable, with a section menu" — but a lesson that carries real content may not fit a fixed viewport, and the moment one lesson scrolls, the whole model wobbles.
- What does the section menu look like, and is it always visible or summoned? It is the thing that makes the page navigable in week three, so it matters more for the revisit than for the live session.
- Where does the ladder rail live, and does it move with the lesson or stay fixed?
- How does a lab slide lay out? It has to hold the task, a copy-ready prompt block, a download, a what-to-look-for line, and the debrief — that is a lot for a design language built on restraint, and it is the layout that will make or break the build.
- What does the density actually look like once slides carry real content rather than three lines? This is the concrete test of the decision to abandon the deck constraint.
- Keyboard navigation and what a progress indicator looks like when lessons vary wildly in length.

Link the prototype from this ticket as an asset.

## Inherited from [The teaching model](12-teaching-model.md)

**The first sub-question above is answered — discrete steps, not a scrolling page.** Settled against a real prototype (`prototypes/PROTOTYPE-density-treatments.html`, variant 4): content pages **click through one beat at a time, then close on an overview showing all beats together**, with the overview items clickable back to their individual beat. Full-density pages were built and rejected — at 244 words they scroll, which breaks the fixed viewport and, worse, lets two parallel copies sit at different points on a page both parties believe they share.

**The density question is therefore also answered, and not the way this ticket expected.** Pages stay under ~75 words and ~20 seconds of reading because the content is *serialised*, not because it was thinned. The settled "slides carry real content" decision survives intact.

**Two hard navigation requirements, from two different directions:**
- **Voice-navigable.** The session runs on parallel copies with no screen share, so there is no shared cursor. Every page needs a short speakable address and re-syncing after drift must cost one spoken instruction.
- **Chapters *and* subchapters.** Solo revisit is a design target — the executive reopens the file alone to revisit theory and re-run examples.

Together these kill this ticket's assumption that the section menu "matters more for the revisit than for the live session." It is infrastructure in both modes.

**The overview page is the answer to "what does a progress indicator look like when lessons vary wildly in length"** — or at least the strongest candidate. It is already the resync point and the navigation hub; test whether it also carries progress rather than adding a separate device.

## Answer — superseded, split between resolved and fog

Resolved 2026-07-27 by cross-checking against [The visual design standard](15-visual-design-standard.md)'s shell decision, now on the map.

**Two sub-questions are answered, and this ticket's own "Inherited from teaching model" section above is now stale:** the shell is **scroll-snap, one beat per screen** — not the click-through-then-close-on-overview model this ticket previously recorded. And the ladder rail is settled as **navigation only, position-fixed, hover-expand-and-push**, not a moving element tied to lesson content.

**Three sub-questions remain genuinely open and are not answered anywhere else on the map:** the lab-slide layout (task + prompt block + download + what-to-look-for + debrief on one screen), the section/subchapter menu's concrete shape, and progress indicator + keyboard nav for beats of varying length. Rather than leave them stranded in a closed ticket, they're folded into the map's existing **"lesson-level design pass"** fog item, which was already waiting on real content to specify precisely — see the map for the current text.
