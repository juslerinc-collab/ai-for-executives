# The image pipeline

Type: task
Status: resolved
Resolved: 2026-07-26 → [ADR-0001](../../../docs/adr/0001-illustration-system.md)

**Resolved.** Imagery survives, and the pipeline is `media-gen` (Fal.ai, `nano-banana-pro`). One real image exists — `02 Private Projects/Image Gen/2026-07-26-exec-key-editorial-spot/` — generated from a prompt that never named the palette's hex values and still landed on-palette. The accepted risk below (a mediocre generator landing late, after the design settled around it) did **not** materialise.

Two things changed shape versus the question as originally written:

- **The hero motif is not the priority image any more.** The hand-meets-robot-hand motif belongs to the dead `#4DA3FF` brief. The register that replaced it is a drawn single-colour axonometry; see the ADR. A full-bleed opening image is still permitted, as the one and only exception.
- **Resolution and compression are no longer the interesting constraint.** The assets are flat two-ink line work, which compresses to almost nothing. What actually constrains them is the keying step, especially enclosed holes — see the ADR's post-processing notes.

The remaining 6–8 images are build work, as originally scoped.

<details>
<summary>Original ticket, for the record</summary>

**Was blocked by [The visual design standard](15-visual-design-standard.md)**, which asked whether generated imagery survives at all. Do not stand up a pipeline for images that may be cut.

**Priority: last.** Deliberately deferred to the end of the map — no other ticket is blocked on it, and images are the cheapest thing to add once everything else is decided. Scoped down to a single trial run: prove the pipeline works and see what it produces. Producing all 6–8 images is build work, not a decision, and belongs after this map closes.

## Question

Which pipeline generates the images — and what does one real pass actually produce?

The brief leaves this as an explicit hole: *"[IMAGE GENERATION SETUP — to be filled in]"*, with instructions not to attempt generation until it is specified.

The hero is the opening motif: a weathered human hand and a precision robotic hand reaching toward each other, fingertips almost touching, shallow depth of field, cinematic key light from the left, deep navy background with electric blue rim light, negative space on the left for type. The design brief says to prioritise this motif above all others.

To settle:

- Which pipeline. The `media-gen` skill (Fal.ai, curated model registry) is already installed in this environment and is the obvious first candidate.
- Which model, aspect ratio, and where generated files land in the repo.
- How images get into a single self-contained HTML file — base64 inlining has a real size cost, so decide the resolution and compression budget per image. This interacts with the single-file delivery decision.
- How many images total. The brief says 6–8, concentrated on theory slides where an image carries the concept better than text, with icons everywhere else.

Resolved when the pipeline is written down and one real version of the opening image exists to look at. The remaining images are build work.

**One risk, accepted knowingly.** The design language leans hard on this motif — the design brief calls it the priority image and the closing slide echoes it. If the pipeline turns out to produce something mediocre, that lands late, with the rest of the design already settled around it. The single trial run is what keeps that risk small: it is cheap and it can be pulled forward at any point if the design work starts depending on the image being good.

</details>
