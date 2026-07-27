# The visual design standard

Type: grilling
Status: claimed

## Question

What does this thing actually look like — as a house style that ships for every client, not just for this executive?

**Why this ticket exists.** The map inherited the design brief's visual language as settled: navy `#0A1628`–`#0D1B2A` with radial fades, electric blue `#4DA3FF`–`#6FC3FF` accent, Space Grotesk over Inter, two-tone left-aligned headlines, Lucide at 1.5px, the four-rung ladder rail as the only decorative element, 75/25 dark-to-light rhythm. [The journey prototype](05-journey-prototype.md) explicitly scoped the look out — "none of that is in question here."

**That is no longer true.** Seeing the language rendered against real German content in [The teaching model](12-teaching-model.md)'s prototype, the user said plainly they are *not convinced yet on the design* and asked for it as a separate discussion. The brief's visual system is a first draft like everything else, and nothing in the map has yet challenged it.

To resolve:

- **Is the navy-and-electric-blue register right at all?** It was chosen for an executive who "quietly does not want to look foolish" — an audience framing the charting session already replaced with opportunity-seeking. A palette picked for reassurance may be wrong for a palette that should signal capability. Note also that navy-plus-blue-glow is close to the default look of every AI product on the market, which cuts against the brief's own anti-slop constraint.
- **Does Space Grotesk over Inter survive German?** German runs longer than English and compounds hard (*Sicherheitsgefühl*, *Vorstandsvorlage*). Headline sizes and measures tuned on English copy will break. Test against the actual decided German, not lorem.
- **The 75/25 dark-light rhythm.** Justify it or drop it. Dark is a presentation convention, and this is a workbench the executive reads on their own screen for ninety minutes, twice — plus alone in week three, possibly in daylight. Ask whether the dominant mode should invert.
- **What is fixed and what is swappable per client?** This is the reusable question. Colour variables are the easy answer, but decide whether a client ever gets their own palette or whether the house style is deliberately constant — the second is a positioning choice, not a technical one.
- **Does the ladder rail earn being the only decorative element,** given it now also carries the four-step vocabulary from [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md)? Two different four-item structures on one page is a collision worth resolving.
- ~~**The image pipeline and the hand-meets-robot-hand imagery** — see [Image generation pipeline](13-image-pipeline.md). Decide whether generated imagery survives at all before spending on a pipeline for it.~~ **Resolved 2026-07-26 → [ADR-0001](../../../docs/adr/0001-illustration-system.md).** Imagery survives. The register is a drawn single-colour axonometry, generated via `media-gen`; the hand-meets-robot-hand motif dies with the rest of the `#4DA3FF` brief. One consequence lands back in *this* ticket and is still open: the **tone** clash between a drawn line and Archivo 800 for a Vorstandsvorlage. The **icon-set collision is closed** — the two registers coexist on purpose. Lucide survives untouched (1.5, ohne Füllung, eine Familie, durchgängiges Gestaltungselement); the illustrations are deliberately a different instrument. Icons mark and label, illustrations carry a concept; they share the palette and nothing else. Neither gets bent toward the other.

Deliberately *not* in this ticket: how a lesson lays out, and how dense a page can get. Those are journey and lesson-level questions, already held by [The journey prototype](05-journey-prototype.md) and the map's fog.

## Zwischenstand — settled so far

Recorded mid-ticket so the decisions survive a session boundary. Not yet the resolution; **two** sub-questions remain open (rail collision, per-client swappability) — imagery closed 2026-07-26 via [ADR-0001](../../../docs/adr/0001-illustration-system.md), which added two open questions of its own (tone, icon-set collision).

**Illustration, settled.** Full reasoning and the seven-variant evidence are in the ADR; the short version:

| Rolle | Hex | Regel |
|---|---|---|
| Form / Kontur | `#1E2FDB` | die einzige Farbe, die beide Flächen überlebt |
| Füllung | `#B3CCF4` | nur Fläche, nie Kontur — darf auf Papier fast verschwinden |
| Weiss | — | gibt es nicht; wo Weiss stünde, wird ein Loch gestanzt (`fill-rule="evenodd"`) |

No cast shadows (a shadow implies a ground plane, and a ground plane is the forbidden third surface), no greys, no gradients, no texture. One exception in the whole deck: the opening may be a full-bleed image with its own ground.

**Dominant mode — inverted.** 75 % light / 25 % dark. The brief's 75/25 dark was a projector convention; there is no projector, and the executive reads and types on their own screen for 90 minutes twice, plus alone in week three. No rule binds dark to a page *type* — that falls out of the lesson-level pass.

**Two surfaces only, never three.** Cool grey paper and near-black navy. A full-bleed ultramarine ground was prototyped and **rejected by the user as ugly** — ultramarine is an accent, never a field. This also killed the "blue as ground" reading of the reference.

**Palette.** Deliberately *not* warm cream — an off-white/cream ground with a warm accent was prototyped and rejected for being, in effect, Anthropic's own palette, which violates the anti-slop constraint from the inside.

| Rolle | Hex |
|---|---|
| Papier | `#F4F5F7` (Verlauf `#F9FAFC` → `#E7EBF4`) |
| Tinte | `#0A1330` |
| Navy Fläche | `#08102A`, Tiefen `#16226B` / `#1B2A82` |
| Ultramarin | `#1E2FDB` |
| Ultramarin tief | `#1526A8` |
| Eisblau | `#B3CCF4` |
| Eis-Tint | `#E4EBFB` |

Ultramarine is a *pigment* blue, not the emissive `#4DA3FF` glow of the brief — that swatch is dead. It failed contrast on a light ground (~2.4:1) and read as an unclicked hyperlink; `#1E2FDB` on paper is ~8.5:1. Warm accents (peach, amber) tried and cut: the system is purely cool.

**Verläufe throughout, low amplitude.** Paper carries a cool wash plus faint ultramarine blooms; navy carries blue as depth. The brief's "dunkle Flächen nie flach" survives, and now applies to light ones too.

**Glassmorphism — the brief's ban is lifted.** Explicitly forbidden in `context/design-brief-claude-design.md` ("Verboten: Glassmorphism-Karten"); overridden by the user. Two registers: a dark glass on navy and a light glass on paper. The constraint that shaped it: glass needs a backdrop to refract, so the paper blooms were strengthened specifically to give the light register something to pick up.

**Typografie — Space Grotesk / Inter is dead.** **Archivo (Headlines) + Inter (Fließtext).** Headline **800**, tracking `-0.036em`, line-height 1.00. Archivo is variable on the width axis, so **800 at width 88** is held in reserve as a per-page override for headlines carrying monster compounds (*Wirtschaftlichkeitsbetrachtung*) — one rule plus one documented exception, rather than compressing every headline to survive the worst case. Candidates tried and rejected: Inter Tight (too generic), Bricolage Grotesque, Instrument Serif + Schibsted.

**Icons — the brief's spec survives.** Lucide, Strichstärke 1.5, no fill, one family, never mixed, no emoji. Promoted from decoration to a **durchgängiges Gestaltungselement** at user request: eyebrow, each of the four steps, panel labels, tree branches, capture field, button.

### Assets

- `prototypes/PROTOTYPE-palette-options.html` — throwaway. Four accents (amber / deep blue / petrol-teal / two-accent) on an off-white ground. Killed the neon blue and the warm-cream direction.
- `prototypes/PROTOTYPE-palette-blue.html` — throwaway. Three-surface ultramarine system, three executions. Its central proposal — ultramarine as a ground — was rejected.
- `prototypes/PROTOTYPE-type-and-glass.html` — **reference, not throwaway.** The settled system: two surfaces, gradients, both glass registers, icons, headline weight switchable at `?f=4a|4b|4c|4d`. (Earlier revisions of this ticket tagged it "throwaway, current" while it was still competing against `PROTOTYPE-palette-blue.html` — that tag is stale now that it's the answer, not a candidate. See the build map below.)

## Der Shell-Standard — `PROTOTYPE-nav-rail.html` ist ab jetzt die Referenz

Settled against the prototype and confirmed by the user. **This supersedes the interaction model in [The teaching model](12-teaching-model.md)** — see the revision note on that ticket.

**Eine Fläche.** No header bar, no navigation column, no dividers, no cards. A single fixed gradient; rail, type and menu all float transparently on it. The glass *card* is gone from the shell — the two glass registers survive only for content components (panels, tree branches), never as page furniture.

**Oben rechts, sonst nichts.** `AI for Executives` (working title — the user's to set), current chapter beneath it. The progress counter, the breadcrumb and the left-hand brand block were all tried and cut as noise.

**Durchgehendes Scrollen mit Snap.** The whole session is one document. Each beat is a full-viewport section with `scroll-snap-type: y mandatory` and `scroll-snap-stop: always`, so it reads as one page while every beat still lands square. Session 1 = 8 chapters → 23 beats; session 2 = one greyed closing beat.

**Die Leiste ist Navigation, kein Modell.** It counts *position*, not a four-item concept — which is what dissolved the two-spines collision. Closed: dots on the slide, done / current / upcoming. Hovered: expands 104px → 330px, fades in a soft white veil (a gradient, never a panel edge) and **pushes** the content right rather than overlaying it. Chapters as bare number + title, subchapters only under the active chapter. Chapter descriptions were tried and cut — too dense.

**Die Autonomie-Leiter ist abgestuft.** It survives as spoken framing and one page in session two's theory block, not as persistent furniture. Open consequence: rung four *delegieren* was the visual home of the agent demonstration, which now needs one — already in the map's fog.

**Session 2 ist gesperrt.** Dimmed to 34 %, `pointer-events: none`, `Nach Session 1` label; its rail dots render inert. ~~Reverses an earlier argument for leaving it open for the solo revisit — the executive should not skim unfacilitated material.~~ ~~**The unlock trigger is undecided**~~

> **Amended by [Hosting and handover](11-hosting-handover.md).** The unlock trigger is a **hardcoded in-page password gate: `askclaude`**, hinted by *„Was tun Sie, wenn Sie etwas nicht wissen?"* — a riddle whose answer is the session's core habit. It pairs with a second joke gate at the front door (`doris`); two gates in one playful register stop the second reading as a broken login. Neither persists between visits.
>
> **The anti-skim rationale above is overturned.** The hint contains its own answer, so the gate stops nobody — and that is correct. An executive who solves it has performed the exact behaviour the engagement installs: hit something unknown, asked instead of stopping. **The lock is a signpost and a teaching beat, not a barrier.** It also cannot leak much — behind it are titles and placeholders only, until the second of the two deploys.
>
> The visual treatment on this line is unchanged and still governs.

**Scroll-Spy per Scroll-Rechnung, nicht IntersectionObserver.** The observer does not fire reliably in a backgrounded tab, which left the rail out of sync after a tab switch — a real defect for a page that gets tabbed away from mid-session. A zero-height-viewport guard bails out rather than snapping the rail to the last chapter.

**Nicht verifiziert:** the scroll-spy was never confirmed working in-browser — the preview pane kept reporting `innerHeight: 0`, which collapses every `100vh` beat and makes scroll measurement meaningless. Needs a human pass before the build.

### Serving the prototypes

`file://` strips query strings, which breaks every variant switcher. `.claude/launch.json` + `.claude/static-server.mjs` serve the repo on `http://localhost:4173`. (`python3 -m http.server` cannot be used — it evaluates `os.getcwd()` eagerly at import and that is blocked in the sandbox.)

### Build map — which prototype governs what

Three prototypes, three separate concerns, deliberately **not** merged into one file. Each is the reference for its own slice; combining them would blur which prototype backs which decision when a future build questions one part of the look.

| Concern | Prototype | Status |
|---|---|---|
| Shell, scroll-snap, chapter rail, nav interaction | [`PROTOTYPE-nav-rail.html`](../prototypes/PROTOTYPE-nav-rail.html) | Reference, confirmed (§ "Der Shell-Standard" above) |
| Surfaces (Papier/Navy), gradients, glass, type, Lucide icons | [`PROTOTYPE-type-and-glass.html`](../prototypes/PROTOTYPE-type-and-glass.html) | Reference, confirmed |
| Illustration register | [`PROTOTYPE-illustration-register.html`](../prototypes/PROTOTYPE-illustration-register.html) | Reference, confirmed → [ADR-0001](../../../docs/adr/0001-illustration-system.md) |
| Session 0 chapter (content, layout, interaction) | [`PROTOTYPE-session-zero-whiteboard.html`](../prototypes/PROTOTYPE-session-zero-whiteboard.html) | Reference, confirmed → [The Session Zero whiteboard](18-session-zero-whiteboard.md) |

All prototypes share the same palette (`#1E2FDB` / `#B3CCF4` / Papier / Navy) — that's the thread that ties them together. Nothing else needs to. When the real build starts, each concern gets read from its own prototype rather than from one composited reference.

### Still open in this ticket

- **Imagery** — parked at user request, not decided. Blocks [The image pipeline](13-image-pipeline.md).
- **What is fixed vs. swappable per client** — untouched.
