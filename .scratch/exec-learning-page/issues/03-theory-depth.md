# How deep the theory goes

Type: grilling
Status: resolved
Resolved: 2026-07-27

## Question

How much mechanism does the basics lesson actually teach?

The tension, unresolved from charting: the user does not want to teach "how it's guessing" or the details of an LLM. But the brief makes "prediction, not retrieval" its load-bearing idea, because it is what turns *confidently wrong* from a mystery into an obvious consequence.

The proposal put to the user but not yet answered: keep exactly one sentence of mechanism — *it predicts likely continuations, it is not looking anything up* — and make everything after that behavioural. Drop tokens, transformers, training runs, temperature entirely.

To resolve:

- Does that one sentence stay, or does the explanation go purely behavioural ("it is built to sound fluent, and fluent and correct are different things")?
- Same test applied to the other three quirks the brief wants: context window, knowledge cutoff, no memory between chats. Each earns its place only if it explains something the executive will hit in week one — otherwise cut.
- The brief frames every limitation as an onboarding quirk of a capable new hire. Does that framing survive when the audience is opportunity-seeking rather than anxious, or does it start to feel like an excuse for the tool?
- "How it evolves" was named as something to teach. What does that mean concretely — capability trajectory, or something narrower?

## Widened by [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md)

**This ticket was scoped to mechanism. The user has now put more in the basics block:** briefing, context management, and skills — *"how to use it best"* — alongside the mechanism question. So the ticket is no longer only "how deep does the theory go" but "what is in the basics block at all, and how deep does each part go."

Resolve alongside the above:

- Where does the briefing/context/skills material sit relative to the mechanism sentence — before it, after it, or replacing part of it? Note the map's standing constraint: never the words "prompt engineering", always *„ein besseres Briefing"*.
- The block now also has to carry [The AI-versus-automation decision tree](14-ai-vs-automation.md) and hand off into the four steps as its wrap-up. Three pieces of content plus a wrap-up is a lot for a block that was meant to be *compressed* from the brief's lessons 1–3. Check it still fits the time, and decide what gets cut if it does not.
- **A boundary is now fixed and belongs in this block:** the honest framing constraint from [Where AI is genuinely strong](07-research-strength-categories.md) — the jagged-frontier result was produced with GPT-4 in 2023, the *existence* of jaggedness replicates but its *shape* has moved. This is a candidate answer to the "how it evolves" sub-question above, and it is better evidenced than a capability-trajectory story.

## Answer

**The basics block is rebuilt from scratch as a single section, "AI in a nutshell," restructured around four first principles rather than a list of topics — mechanism (mechanism sentence, context window, memory, evolution) is now the *evidence* for each principle, not a standalone topic.**

**The four principles — researched and confirmed against primary sources** (`research/mastery-principles.md`): no vendor publishes a canonical "N principles" list, so 4 isn't validated by matching someone else's count — each principle stands on its own evidentiary support instead.
1. **Context is king** — the model only knows what's in the current conversation. (Anthropic's context-window docs, "working memory" framing, context rot.)
2. **Confidently wrong is a mechanism, not a character flaw** — trained where a confident guess scores better than "I don't know." (Near word-for-word match to OpenAI's own paper, "Why Language Models Hallucinate," 2025.)
3. **Brief it like you'd brief a new colleague** — vague in, vague out. (Near-verbatim match to Anthropic's own prompting docs: "brilliant but new employee," the colleague-review golden rule.)
4. **It's a product built on a model, not the model itself** — ChatGPT/Claude are a layer (fine-tuning, system prompt, tools) on top of a raw model. (Anthropic's glossary, explicit on fine-tuning/RLHF/system-prompt as separate steps.)

**One mechanism sentence dropped.** The originally-proposed single mechanism sentence is superseded — mechanism is now spread across the four principles' evidence rather than compressed to one line, because the block grew from "one sentence plus behavioural framing" into a full ~30-minute grounding section at the user's explicit request (research found this is *more* depth than either vendor gives lay audiences directly, but it services principles the user wants taught explicitly rather than left implicit).

**Context window / knowledge cutoff / no-memory:** context window survives as principle 1's evidence. Knowledge cutoff and no-memory-between-chats did not get individual airtime — folded implicitly into the context-is-king framing ("what's not in front of it doesn't exist for it") rather than taught as separate quirks.

**"Onboarding quirk of a capable new hire" framing:** superseded by the four-principles framing — principles are stated as facts about how the tool works, not softened as new-hire quirks. This changes nothing about the central metaphor itself (still "the assistant you always wished for"), it just changes how the *limitations* are taught: as mechanism, not personality.

**"How it evolves":** narrowed away from a standalone topic. The jagged-frontier point (findings from [Where AI is genuinely strong](07-research-strength-categories.md)) isn't taught as its own block; it's available as a footnote/qualifier if she asks how reliable this all is going forward, not authored as session content.

**The full "AI in a nutshell" content, researched against primary sources** (`research/llm-ai-basics-pedagogy.md`):

**Reordered 2026-07-27** — a short scene-setting intro first, then definitions, then all four principles back-to-back in order, then the two application-level closers:

| Teil | Inhalt | Min |
|---|---|---|
| 0. Der Assistent, den Sie sich schon immer gewünscht haben | Callback zum Untertitel der Startseite. *„Sie haben das schon auf der ersten Seite gelesen. Was heißt das konkret? Eine Kollegin, die Sie gerade eingestellt haben — extrem belesen, nie müde, um elf Uhr abends verfügbar. Ohne Erinnerung an gestern, wenn Sie sie nicht erinnern. Manchmal selbstsicher falsch. Ihre Aufgabe ist nicht, zu verstehen, wie sie tickt — sondern, sie gut zu instruieren. Genau das lernen Sie jetzt: vier Dinge, die diese Kollegin von jeder anderen unterscheiden."* Sets up the central metaphor before any technical content, and makes the opening page's subtitle pay off rather than sitting there as decoration | ~2 |
| a. KI, ML, LLM — was ist was | Container-Diagramm KI ⊃ ML ⊃ LLM | 3 |
| b. Context is king | Arbeitsgedächtnis-Analogie, context rot (Prinzip 1). Beispiel bleibt: eine Zahl live an der Quelle prüfen (absorbs the killed Footnote-Test block) | 6 |
| c. Wie das Ding wirklich tickt | Next-token-prediction; warum selbstsicher falsch möglich ist (Prinzip 2) | 6 |
| d. Ein besseres Briefing | Prinzip 3 — vier Durchläufe derselben Aufgabe: faul, mit Kontext, mit Beispiel, Claude selbst um ein Briefing bitten. **Moved in from the old standalone session-one row 3** — see [Ein besseres Briefing](19-besseres-briefing-demo.md) | ~12 |
| e. Die Schichten obendrauf | Prinzip 4. e1 Grundschichten (Modell → feingetunt → System-Prompt → Oberfläche → Werkzeuge); e2 offen vs. geschlossen (Llama/Mistral/DeepSeek vs. Claude/GPT, vendor-neutral); e3 Anwendung ≠ nur Chat-Fenster (Perplexity als Orchestrator-Beispiel: Sprachmodell + Live-Websuche); e4 eine Firma, mehrere Auftritte (Claude Chat / Cowork / Code) | 8 |
| f. Projekte in Claude | Ein Arbeitsbereich mit eigenem Gedächtnis für wiederkehrende Themen. **Skills explicitly excluded** — moves to session two, taught alongside automation/loops, not here | 3 |
| g. Gehört das überhaupt hierher? | KI / Automatisierung / bleibt bei Ihnen, Fall Rechnungen-gegen-Bestellungen (absorbs the old AI-vs-automation slot) | 8 |
| | **Gesamt** | **~48** |

All four principles now sit together (b–e), bracketed by a scene-setting intro and definitions before (0, a) and application-level closers after (f, g) — every principle has its worked example inline, in principle-number order (1, 2, 3, 4).

**Footnote Test (old item 3) killed as a standalone block** — its live citation-check example survives folded into (d).

**Old mechanism block (old item 2) and AI-vs-automation tree (old item 5) are absorbed into this section, not standalone anymore** — see amendment to [The lesson sequence](01-lesson-sequence.md).

**Skills formally moves to session two, paired with automation/loops/agents.** Session one plants no vocabulary for it — not even a teaser. The retroactive-naming trick used for the showcase ("das war Aufbereiten") does **not** apply here since there's no in-session act to retroactively name — see the take-home redesign below.

**Session-one take-home redesigned — no more in-session artifact-building (old item 9 killed).** Instead: a single downloadable `.md` handout, generated at session one's close, adapted from the `teach` skill's philosophy (mission-grounded, retrieval-practice quiz with normalized answer lengths, real-world exercises) but collapsed into one static file rather than a stateful lesson workspace, and **explicitly capped** — no new material, anything past session one's scope gets a named "kommt in Sitzung 2" rather than an answer. Full shape:
- Kurz zusammengefasst (recap)
- Testen Sie sich (4-6 recall questions, normalized answer length)
- Ihre Übungen (2-3 exercises built from her Session Zero one-pager, applying Erklären/Aufsetzen to her real work)
- Noch nicht dran (explicit scope cap)

Delivery mechanism (download button, generation timing, per-client seeding) is a task for [Hosting and handover](11-hosting-handover.md), not decided here — only the content shape is fixed.

**Budget, after all changes:** nutshell (34) + Ein besseres Briefing (10, unchanged) + Die vier Schritte (10, unchanged) = 54 min theory. Fixed showcase+labs+board drops from 45 to 37 min (item 9's 8 min removed — the take-home is now a post-session download, not in-session time). **Session one total: 91 min authored**, against the 120-min hard ceiling — back near the original 90-min soft target, ~29 min buffer restored.

**Amended 2026-07-27 — Ein besseres Briefing moved inside the nutshell as part (g).** It's no longer a standalone session-one row; see [The lesson sequence](01-lesson-sequence.md) for the renumbered table. Exact minute totals are not being held to strictly at this stage of drafting — treat the numbers above and in the table as approximate, not a hard budget, until content is closer to final.
