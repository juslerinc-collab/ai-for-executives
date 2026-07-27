# ADR-0001 — Illustration system: drawn axonometry, one colour, generated via media-gen

Status: **accepted**
Date: 2026-07-26
Supersedes: the imagery language in `context/design-brief-claude-design.md`
Resolves: the imagery sub-question of `.scratch/exec-learning-page/issues/15-visual-design-standard.md`, and unblocks `13-image-pipeline.md`

## Context

The visual system settled in ticket 15 has **two surfaces and only two** — Papier `#F4F5F7` and Navy `#08102A`. A full-bleed ultramarine ground was prototyped and rejected as ugly; a warm cream ground was rejected for being Anthropic's own palette.

That two-surface rule is what makes illustration hard. An asset with a transparent background has to sit on both grounds **unmodified** — if it needs a light version and a dark version, it is two assets, and the system has failed. Nothing in the map had tested whether that was achievable.

Seven registers were built and run side by side on both surfaces, same subject, same asset dropped on each ground with no recolour and no CSS `filter:`. See `.scratch/exec-learning-page/prototypes/PROTOTYPE-illustration-register.html` (variants A–G, arrows or ←/→ to cycle).

### What the run established

**Only one colour in the palette survives both grounds.**

| | Papier `#F4F5F7` | Navy `#08102A` |
|---|---|---|
| `#1526A8` Ultramarin tief | ✅ crisp | ❌ dead, ~1.6:1 |
| `#B3CCF4` Eisblau | ❌ nearly invisible | ✅ luminous |
| `#1E2FDB` **Ultramarin** | ✅ ~8.5:1 | ✅ separates by saturation |

This killed the first proposal outright. The original idea — "draw in mid-tones, both `#1526A8` and `#B3CCF4` are mid-tones, both will survive" — is wrong. `#1526A8` is only dark relative to paper, and `#B3CCF4` only light relative to navy. Variants **A** (ice fills, `#1526A8` contour) and **C** (ice fills, no contour) fail as exact mirror images of each other. Variant **D** (line only, no fill) fails hardest, and in doing so kills the tempting idea that the Lucide icon language can simply be scaled up: **icons may be recoloured per surface, a cut-out illustration may not.**

**The editorial register cannot be transparent at all.** A real generated image in the reference style (Holcroft / Maivisto — flat poster shapes, grain, long cast shadow) landed on-palette without being given the hex values, so the register itself translates. But its shadow lies *on the ground*. Keyed out (**B**), 54 % of the frame goes and the shadow is left as a loose navy wedge attached to nothing — a visible error on paper. Kept whole (**E**), the picture is correct precisely because it brings its own ground, which is the forbidden third surface, and on screen it reads as a foreign grey block on both. This register is available **only as a full-bleed image**, never as a spot.

**Monochrome registers pass, because they have nothing to come apart.** Variant **F**, in the hand-drawn doodle style, is the first to hold on both grounds unchanged — it has no contour-vs-fill split to fall out of balance, and it replaces white with *transparency*: the return-arrow glyph is punched out with `fill-rule="evenodd"`, so it shows paper on paper and navy on navy.

## Decision

**The house illustration register is variant G — "Gezeichnete Axonometrie":** the isometric construction and ice fill planes of A, drawn with the hand-drawn line and punched-out holes of F, with the form carried throughout by `#1E2FDB`.

Three rules, each one a finding from the run:

1. **The form is carried by `#1E2FDB`.** Contour, figures, and any shape that must be legible. It is the only palette colour that clears both grounds.
2. **`#B3CCF4` fills only, never contours.** It is allowed to fade almost to nothing on Papier — the image must not depend on it. Decoration, not structure.
3. **Where white would go, punch a hole.** `fill-rule="evenodd"`, never a white fill. The gap shows whichever surface is behind it, so the asset needs no ground of its own.

Three consequences that follow:

- **No cast shadows, ever.** A shadow implies a ground plane, and a ground plane is the third surface. This is what disqualified the editorial register and it applies to every generated asset.
- **No greys, no gradients, no shading, no texture.** Two inks and transparency.
- **Exactly one exception:** the opening hero may be a full-bleed image with its own ground, since it covers the whole slide and introduces no third surface *within* a slide. That is one slot in the entire deck, not a system.

### Production route

**Every illustration is generated through the `media-gen` skill, without exception.** They are never hand-authored — not in SVG, not by tracing, not as a "quick placeholder while we wait". The prototype's SVGs are throwaway shape studies that proved the rules; they are the **last** hand-drawn artwork in this project and must not be promoted into the build.

If a generated asset is not good enough, the fix is always another pass through media-gen with a sharper prompt. Reaching for a pen is not the escape hatch — it produces one asset nobody can reproduce, and the whole point of the route is that any illustration in the deck can be regenerated later from its prompt.

For each illustration, the design side of the work is: **supply a clear, complete prompt plus the design spec, and nothing else.** The generation itself runs through media-gen (Fal.ai, `nano-banana-pro`), which iterates the prompt with the user and requires approval before it sends anything.

Prompt template for this register — fill in `[SUBJECT]` and change nothing else:

```
A single-colour hand-drawn isometric line illustration of [SUBJECT]. Loose,
slightly wobbly ink outline of even weight, as if drawn by hand with a felt
pen — corners not quite meeting, edges gently bowed. Every contour in one
saturated ultramarine blue; flat pale ice-blue fill planes inside the shapes.
No other colours, no grey, no shading, no gradients, no texture, and no cast
shadow of any kind. Where a highlight would normally be white, leave it as an
empty gap in the ink instead. Isolated on a plain flat mid-grey background,
generous negative space around the subject, no scenery, no horizon line, no
text.
```

Standing parameters: `--aspect-ratio "1:1" --resolution "2K"`. Mid-grey ground, not white — white fringes when keyed.

Post-processing, per asset:

1. Key the ground out by flood-filling inward from the border (`prototypes/key-out.py`).
2. **Check the enclosed holes.** A border flood-fill only removes ground *connected to the edge*. Any gap enclosed by ink — the punched-out glyphs rule 3 depends on — will survive as a grey island and must be cleared explicitly. This is the single most likely way to ship a broken asset.
3. Verify on both grounds before accepting. The prototype file is the test harness; drop the asset into the `.art` slot and cycle the surfaces.

### Subjects

Illustrate the artefacts the executive actually touches — a chaotic spreadsheet resolving, a rewritten email, a meeting transcript folding down, a briefing handed over, a use-case tree. Never the generic AI iconography the brief already bans (glowing brains, circuit boards, node meshes, robot heads, holographic UI, isometric blobs).

## Consequences

**Open, and deliberately not decided here:**

- **Tone.** A drawn line next to Archivo 800 at `-0.036em`, aimed at a Vorstandsvorlage, pulls warmer and less formal than the type does. Ticket 15 chose that type to signal capability. This is a positioning judgement, and it was made in favour of the drawn register with the tone question still live.
- **Line quality.** The prototype's wobble comes from a seeded pseudo-random function, which at slide size still reads as slightly-skewed rectangles rather than as drawing. Generation via media-gen has to fix this — hand-drawing is not an available fallback (see below). If a generation comes back stiff, the answer is a better prompt, not a pen.

**Closed since the decision:**

- **Collision with the icon set — resolved: the two registers coexist on purpose.** Lucide stays exactly as ticket 15 specified: Strichstärke 1.5, no fill, one family, never mixed, no emoji, and still a *durchgängiges Gestaltungselement*. The illustrations are deliberately a different instrument, and nothing is bent to reconcile them. The division of labour is by scale and role: **Lucide marks and labels** (eyebrow, the four steps, panel labels, tree branches, capture field, button), **illustrations carry a concept** where an image says it better than text. They share the palette and nothing else — same `#1E2FDB`, same ban on greys and gradients. Do not thicken the icons toward the drawn line, and do not thin the drawn line toward the icons.

**Retired:** the risk flagged in ticket 13 that the pipeline might produce something mediocre and land late. It produces usable work; one real image exists at `02 Private Projects/Image Gen/2026-07-26-exec-key-editorial-spot/`.

**Dead:** the `#4DA3FF` accent from the design brief (already dead per ticket 15), the mid-tone rule as originally proposed, and any illustration approach depending on per-surface recolouring.

## Assets

- `.scratch/exec-learning-page/prototypes/PROTOTYPE-illustration-register.html` — the seven-variant harness. **Primary source. Keep.** Findings for every variant are in its header comment and in each variant's `verdict`.
- `.scratch/exec-learning-page/prototypes/assets/editorial-cutout.png` — the failed keyed editorial spot. Kept as evidence for why the register is full-bleed-only.
- `.scratch/exec-learning-page/prototypes/assets/editorial-ground.png` — the same image whole; candidate treatment for the opening hero.
- `.scratch/exec-learning-page/prototypes/key-out.py` — the background-keying script from step 1. Throwaway quality; rewrite properly when the real pipeline is built.
