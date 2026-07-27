# The Session Zero whiteboard

Type: prototype
Status: resolved
Blocked by: 17

## Question

What does the Session Zero chapter ("Kapitel 0 – Wo stehen Sie?") actually look like and behave like, in the shell's existing visual language?

[Session Zero](17-session-zero.md) settled the content this chapter needs to hold: a live placement on the four-level AI-maturity ladder, her stated goal, and a facilitator-typed project-scoping one-pager — built interactively during the conversation, facilitator-only input, no new deploy or gate, its own rail chapter before the session-one showcase.

Not yet decided:

- Layout of the maturity ladder — four selectable levels as an on-screen control the facilitator clicks live, versus something lighter.
- Shape of the goal/notes capture — freeform text field(s), category buttons, pre-populated prompt questions to unstick a quiet room (all three named by the user in the original ask), or some combination.
- Whether/how the resulting one-pager renders as a closing summary beat within Kapitel 0, in the same spirit as session one's former "closing overview" (now superseded by the rail per [The visual design standard](15-visual-design-standard.md)) — or whether it has no on-screen summary at all and only exists as the facilitator's notes.
- How this reads against the two-surface, Archivo/Inter, ultramarine-accent system from [The visual design standard](15-visual-design-standard.md) — this is a new *kind* of beat (data entry, not content delivery), unlike anything else on the page so far.

Time-boxed: the user has an actual client session using this imminently, so this prototype should aim for something usable, not exhaustive.

**Hard requirement, added mid-build:** same JSON-export-as-record-of-truth pattern already used for the matrix ([Hosting and handover](11-hosting-handover.md), handed to [The use-case backlog and matrix](06-backlog-matrix-prototype.md)). Nothing here lives in durable browser storage, so a **small, deliberately unobtrusive "export JSON" control** must let the facilitator download a snapshot of everything typed so far, at any point — a safety net against a refresh or closed tab losing the live conversation's notes. Not synced anywhere; a local download only.

## Answer

**Confirmed as the reference build for the implementation phase.** `prototypes/PROTOTYPE-session-zero-whiteboard.html` is the settled design for the Session 0 chapter — build it from this file, not from scratch. (Full round-by-round history below for *why* each decision landed where it did; skip to here for *what* to build.)

### Final state

- **Headline:** *„Wer das Ziel kennt, findet auch den Weg."* — lede: *„Jede Reise mit KI beginnt am selben Punkt: zu wissen, wo man steht."* No eyebrow above the headline.
- **Top mark:** plain, unadorned small text, top-right — brand + "Session 0" only, no shape/background (rounds 5, 7–9 tried a navy pill, a hangtag, and a quarter-circle; all rejected in favor of this).
- **Left rail:** present, same visual language as `PROTOTYPE-nav-rail.html` — Session 0 lit as the current/unlocked stop, Session 1/2 shown as locked placeholders (real chapter lists still live only in the actual nav-rail build).
- **The card, "Ihr Profil":** four tabs — **Über Sie** (Vorname, Rolle/Position, Unternehmen, Webseite, Kurzbeschreibung Firma), **AI Reifegrad** (five-level ascending staircase, see below), **Ihr Arbeitsalltag** (three bulleted answer fields), **Ihr Ziel mit AI** (three bulleted answer fields). First name + role + company echo live top-right of the card as it's typed.
- **AI Reifegrad — five levels, staircase layout:** Installiert, nicht im Alltag → Ad-hoc-Nutzung → Regelmäßig, aber ohne Methode → Bereits mit System → **Power-User** (added round 15, reversing round 3's "four is enough"). Selecting a step shows only its description below, with a fade/lift-in animation — no repeated title.
- **All copy addresses the executive directly** ("Sie"), since she may be looking at the screen too (round 13) — except the tool's own chrome (lede, staircase placeholder), which uses *du* for the facilitator.
- **The six discovery questions** (three Arbeitsalltag, three Ziel mit AI) were checked against published AI-readiness-assessment practice and tightened accordingly (round 16), then the three Ziel questions were further genericized to drop specific time anchors (rounds 17–18). Every answer field auto-bullets (starts with "• ", Enter continues the list) — round 19.
- **"Weiter zu Sitzung 1" button** below the card opens a full-screen navy closing popup — *„Das Ziel ist klar. Jetzt beginnt der Weg."* — with a CTA into Session 1 and a back link (round 20). The CTA is a stub pending real Session 1 navigation.
- **Export JSON**, bottom-right, small and unobtrusive — safety-net download of everything captured (person, reifegrad, and every question/answer pair), matching the matrix's existing export pattern from [Hosting and handover](11-hosting-handover.md).

### Round-by-round history

Three structurally different variants, built and verified against real content — `prototypes/PROTOTYPE-session-zero-whiteboard.html`, switchable via `?v=1..3`, served from `http://localhost:4173`:

1. **Leiter (Sidebar)** — the four-level maturity ladder as a vertical selectable list on the left; a single scrolling flow on the right with two glass panels (Alltag, Ziel & Rahmen), each holding pre-populated question chips above a capture textarea. Closest to the rest of the shell's visual rhythm.
2. **Dossier (Reiter)** — one glass card, three tabs (Reifegrad / Alltag / Ziel & Rahmen). Most compact — best for a small laptop screen live in the room.
3. **Board (Karten)** — a three-column kanban-style board (Reifegrad / Alltag / Ziel & Rahmen), each pre-populated question rendered as its own editable card, plus a "Karte hinzufügen" button per column for anything unplanned. Most literally a **whiteboard**, and closest to the user's original description (buttons, categories, pre-populated questions).

All three share one JS state object, so switching variants mid-conversation never loses what's been typed. All three carry the required **Export JSON** button (bottom-right, small and unobtrusive) — verified to produce a clean payload: `{ exportedAt, reifegrad: {n, name, desc}, alltag, ziel }`.

**Bug fixed during build and verification:** card inputs in the original variant 3 initially shared a `data-field` attribute with the summary textareas used by variants 1/2, so the export-sync logic silently overwrote every card in a column with the same text. Fixed by dropping that attribute — verified independently-typed fields keep independent values and the exported JSON reflects them correctly.

### Round 2 — the user picked Variant 2 (Dossier/Reiter) and refined it

The three-variant switcher is retired. `prototypes/PROTOTYPE-session-zero-whiteboard.html` is now a single design, not a switcher:

- **A fourth tab, "Person"** — Name, Rolle/Position, Unternehmen/Website. The entered name (plus role and company) echoes live top-right of the card, so it reads as an actual customer card, not a generic form.
- **Per-question dedicated fields**, replacing the single shared textarea-plus-chips mechanic — Alltag and Ziel & Rahmen each render their fixed questions as its own label with its own answer field beneath, so all six answers stay individually visible and individually exported.
- **The maturity ladder redrawn as an ascending staircase** — four steps of increasing height, left to right, selected step filled ultramarine with the full name/description surfacing in a panel below. **A fifth "power user" tier was proposed and explicitly rejected — four stays the ceiling**, per the user directly.
- **Register fix:** the tool's own facilitator-facing copy (lede, staircase placeholder) switched from *Sie* to *du* — this addresses the facilitator using the tool, not the executive. The interview questions themselves stay in *Sie*, since that's client-facing course copy and belongs to the map's still-open, larger register decision (`Not yet specified` → German register and tone), not this ticket.
- **Chapter naming:** "Kapitel 0 – Wo stehen Sie?" replaced with **"Session 0 — wo stehen wir heute?"**, no eyebrow line above it.

Export JSON payload now includes `person` and question/answer pairs for both `alltag` and `ziel`, verified end-to-end via a live browser check.

### Round 3 — polish pass, live with the user

- **Top mark deduplicated.** It repeated the H1 verbatim; now reads just "Session 0", bolder and in ultramarine so it stays legible without restating the headline.
- **Headline rewritten** to state the reason Session 0 exists rather than describe it: *„Nur wer den Start kennt, kennt auch den Weg."*
- **Card renamed "AI Kundenkarte."**
- **Person tab: first name only** ("Vorname", not full name), and **Unternehmen / Webseite split into two separate fields** rather than one combined field.
- **Card header simplified:** shows the first name, with the company alone (not role or website) echoed small underneath — matching the "customer card" read the user wants at a glance.
- **Placeholder de-identified:** the company-field example was `seeds-consulting.ch` (the real instance-one client) — replaced with a generic `Musterfirma AG` / `musterfirma.ch`, since this is meant to ship as a reusable, per-client tool, not carry one client's name into every future deploy.

### Round 4 — left status rail added, header shows role + company

- **Left nav rail added**, reusing the exact visual language of `PROTOTYPE-nav-rail.html` (nodes, hover-expand-and-push, chapter menu) — Session 0 shown as the current/unlocked stop, Session 1 and 2 as locked placeholders. Matches "the other sessions" as asked.
- **Card header now shows Rolle · Firma together**, not company alone — e.g. "Geschäftsführerin · Musterfirma AG" underneath the first name.

### Round 5 — top mark restyled as a navy bubble

The top-right mark is now a pill on the shell's navy surface (`#16226B` → `#08102A`, per [The visual design standard](15-visual-design-standard.md)'s two-surface system) rather than floating text: "AI for **Executives**" (Executives in Eisblau, matching the navy-surface accent rule), with the Session 0 tagline underneath in translucent white.

### Round 6 — lede rewritten, company description field added

- **Lede rewritten** to connect to the headline's "Start/Weg" metaphor and name the subject directly: *„Jede Reise mit KI beginnt am selben Punkt: zu wissen, wo man steht. Kein Formular — du tippst mit, während sie erzählt."*
- **Person tab: "Kurzbeschreibung" field added** — what the company does, one to two sentences — captured and included in the JSON export alongside name/role/firma/website.

### Round 7 — the navy bubble was too heavy; replaced with a subtle hangtag

The navy pill from round 5 was rejected as too loud. Replaced with a small, light glass tag — `rgba(255,255,255,.5)` with blur, thin border, no navy fill — sized down (11px brand, 10px tagline) so it reads as quiet chrome rather than a headline-competing badge. Label corrected to **"Kurzbeschreibung Firma"** for clarity against a person-level description.

### Round 8 — top mark is now a navy quarter-circle flush into the corner

Replaced the floating hangtag with a navy quarter-circle filling the top-right corner itself — flush against the top and right viewport edges, curving away at the bottom-left (`border-bottom-left-radius:100%` on a 300×300 box), same navy gradient as the shell's dark surface. Brand and Session 0 tagline sit nested inside, near the corner.

### Round 9 — quarter-circle toned down: smaller, flatter, quieter

200×200 instead of 300×300, a flat two-stop navy gradient instead of the radial burst, a much softer shadow, and smaller/lighter type (brand down to 12px/700, tagline 10px/300 at 50% opacity). Reads as quiet corner chrome now rather than a competing shape.

### Round 10 — lede cut to one line

Dropped the mechanics sentence ("Kein Formular — du tippst mit…"). The lede is now just *„Jede Reise mit KI beginnt am selben Punkt: zu wissen, wo man steht."* — states the section's purpose, not how the tool works.

### Round 11 — quarter-circle dropped; back to plain text

The corner shape (rounds 8–9) didn't land. Top mark is now plain, unadorned text — no background, no border, no shadow, no shape — just small right-aligned type in the corner, matching the original nav-rail shell's `#mark` most closely of any version tried.

### Round 12 — tab renamed

"Reifegrad" tab → **"AI Reifegrad"**.

### Round 13 — rewritten assuming the executive can see the screen too

Everything so far implicitly assumed a facilitator-only screen, describing her in the third person ("hat es ausprobiert…", "setzt es ein…") — awkward and slightly clinical if she's actually looking at it alongside the facilitator. Rewritten to address her directly:

- Card eyebrow **"AI Kundenkarte" → "Ihr Profil."**
- Tabs: **"Person" → "Über Sie"**, **"Alltag" → "Ihr Alltag"**, **"Ziel & Rahmen" → "Ihr Ziel."** "AI Reifegrad" kept as-is (already neutral/factual).
- **Maturity ladder descriptions rewritten from third-person notes to direct "Sie" address** — e.g. *„Setzt es gelegentlich für einzelne Aufgaben ein"* → *„Sie setzen es gelegentlich für einzelne Aufgaben ein."* Level 2's name softened from "Ad-hoc-Nutzerin" (labels her) to **"Ad-hoc-Nutzung"** (names the behavior, not her).
- Staircase placeholder rewritten from a facilitator instruction ("Wähl eine Stufe, während du zuhörst") to a direct question she could answer herself: **"Welche Stufe passt am besten zu Ihnen?"**

### Round 14 — headline reworked around the goal, description panel de-duplicated with a fade-in

- **Headline replaced:** *„Nur wer den Start kennt, kennt auch den Weg"* → **„Wer das Ziel kennt, findet auch den Weg"** — shifts the emphasis from knowing the starting point to knowing the destination, which reads better against the "Ihr Ziel" tab and the section's actual point.
- **Staircase selection no longer repeats the level name** in the description panel below (it's already on the selected step itself) — shows only the description text now.
- **Added a small entrance animation**: the description fades and lifts in on each selection (`descIn` keyframe, .32s), and the selected step itself lifts slightly (`translateY(-5px)`) instead of just changing color.

### Round 15 — layout breathing room, tab renames, and a fifth maturity level

- **Stage padding widened** (`112px` → `176px` left, `64px` → `80px` right) so the left rail — especially its hover-expanded 330px menu — has clear room and the card reads more centered.
- **Tabs renamed** for clarity: "Ihr Alltag" → **"Ihr Arbeitsalltag"**, "Ihr Ziel" → **"Ihr Ziel mit AI."**
- **A fifth maturity level added: "Stufe 5 — Power-User."** This explicitly reverses the round-3 decision ("four is enough," the user's own words at the time) — recorded here since it contradicts an earlier answer on this same ticket. *„Sie orchestrieren mehrere Tools und Agents, denken in Workflows statt Einzel-Prompts, und könnten anderen im Haus das Thema beibringen."* Staircase width/heights rescaled (150px→130px steps, shorter height increments) so five columns still fit inside the 900px card without crowding — verified at both 800px and 1440px viewports.

### Round 16 — the three-question sets checked against AI-readiness-assessment practice

Web-checked the Arbeitsalltag/Ziel-mit-AI question sets against published AI-readiness-assessment patterns ([Notch's 50-question framework](https://wearenotch.com/blog/ai-readiness-assessment/), [Lumenalta](https://lumenalta.com/insights/assess-ai-readiness), [OvalEdge](https://www.ovaledge.com/blog/measuring-ai-readiness)). The recurring axes there — time-cost/automation-susceptible tasks, repetition, coordination bottlenecks, concrete time-boxed goals, personal success markers, engagement scope — already matched five of the six existing questions closely. **One tightened:** Arbeitsalltag's first question, *„Was beschäftigt Sie an einem normalen Tag am meisten?"*, was ambiguous between stress and time-cost, when time-cost is the actual signal the research keeps pointing at. Replaced with **„Welche Aufgabe kostet Sie am meisten Zeit, ohne dass es das wert wäre?"** The other five questions are unchanged — they were already well-aligned.

### Round 17 — Ziel's third question opened up

*„Was darf am Ende dieser zwei Sitzungen stehen, damit Sie zufrieden sind?"* → **„Was wünschen Sie sich von diesem Engagement?"** — more open, and scoped to the engagement as a whole rather than narrowly to the two sessions.

### Round 18 — all three Ziel-mit-AI questions opened up

All three genericized, dropping the specific time anchors ("in drei Monaten", "heute"):
1. *„Was soll sich für Sie verändern?"*
2. *„Woran würden Sie merken, dass es sich gelohnt hat?"*
3. *„Was wünschen Sie sich von diesem Engagement?"* (unchanged from round 17)

### Round 19 — answer fields always bulleted

Every Arbeitsalltag/Ziel answer textarea now auto-starts with "• " on first focus, and Enter inserts a new "• " line instead of a bare newline — so answers come out as bullet lists by construction rather than relying on the facilitator to type the bullet herself. Placeholder text updated to "• Antwort …" to signal this up front. Verified via direct keyboard-event dispatch: `"• Wochenberichte\n• "` after Enter.

### Round 20 — closing popup added, bridging into Session 1

Resolves the "closing summary beat" question left open since round 2. A **"Weiter zu Sitzung 1"** pill button now sits below the card; clicking it opens a full-screen navy popup (same mesh gradient as the shell's dark surface) with a motivational headline tied to the section's own theme — *„Das Ziel ist klar. Jetzt beginnt der Weg."* — a short supporting line, a primary **"Los geht's mit Sitzung 1"** button, and a "Zurück" link to dismiss. Escape also closes it. The primary button is a prototype stub (shows an inline note rather than navigating, since there's no real Session 1 build to jump to yet) — verified open/close both work via the click handlers.

**Not yet decided:** the eventual fold-in into the real nav-rail shell — right now Session 1/2 are placeholder stubs local to this file, and the closing popup's "Los geht's" action needs real navigation once Session 0 is wired into the actual `NAV` array (`PROTOTYPE-nav-rail.html`) alongside the real session-one/two chapter lists.
