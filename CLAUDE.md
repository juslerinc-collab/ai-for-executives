# AI for Executives

A ~3-hour 1:1 AI enablement session for a senior executive, delivered as a
click-through HTML site (not a deck). German throughout. Reusable across
clients — the current client is instance one.

## Build

`npm run build` assembles `build/{content,styles,src,assets}` into a single
self-contained `dist/index.html`; `npm test` runs the unit tests. `dist/` is
build output — gitignored, rebuilt by the Pages workflow on push to `main`.

- **Content** — `build/content/*.html`, concatenated in filename order. Adding
  a lesson means adding a numbered file.
- **Scripts** — `build/src/*.js`, concatenated in the explicit `jsFileOrder`
  list in `build/build.mjs`. A new `*-client.js` must be added there. Each
  `*-client.js` is wrapped in try/catch so one failure can't halt the rest.
- **Assets** — `build/assets/*.{png,svg}` are base64-inlined wherever content
  writes `{{ASSET:<basename>}}`. An asset with no placeholder ships nothing.
- **Per-client seed** — `build/src/seed-config.js` is the only place client
  specifics live. `{{Rolle}}`, `{{Branche}}`, `{{Publikum}}`, `{{Firma}}` are
  substituted at build time; a new client should mean editing that file only.

Preview with the `deck` launch config (serves `dist/` on :4173).
`.claude/static-server.mjs` serves the repo root for the `.scratch` prototypes,
whose variant switchers need query strings.

## Content conventions

- No EU AI Act, regulatory, or compliance content.
- No software jargon. Never "prompt engineering" — say "ein besseres Briefing".
  Delegation language throughout.
- Vendor-neutral in what is taught; labs use Claude because that is what the
  client has.
- Swiss German orthography: no ß.
- Pages carry real content — the "three lines per slide" deck constraint does
  not apply.

## Agent skills

- **Issue tracker** — issues and specs are local markdown under
  `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.
- **Triage labels** — the five canonical roles, default label strings. See
  `docs/agents/triage-labels.md`.
- **Domain docs** — single-context layout, `docs/adr/` at the repo root. See
  `docs/agents/domain.md`.
