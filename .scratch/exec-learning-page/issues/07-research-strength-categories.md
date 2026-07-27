# Where AI is genuinely strong

Type: research
Status: resolved

## Question

What are the categories of work where current frontier LLMs are genuinely, reliably strong — and where do they reliably fail?

Feeds [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md), which turns the findings into the session's shared vocabulary. This ticket gathers evidence; it does not pick the final list.

What to find:

- Published taxonomies of LLM task categories and capability areas — from model providers' own documentation, evaluation benchmarks, and credible practitioner sources. What categories do people who study this actually use?
- Evidence on which categories hold up in real knowledge work rather than in benchmarks. Where does measured performance diverge from perceived performance?
- The failure side, stated as concretely as the strengths: what categories are still unreliable, and what is the tell that you are in one?
- Specific attention to **challenging / critique / sparring** as a category — it is a strong candidate for the session because it inverts the expectation that machines are bad at judgment work. Is it actually well-supported, or does it just feel good?
- Anything credible on knowledge-work task shapes for senior/executive roles specifically, as opposed to individual-contributor work.

Constraints: high-trust primary sources. Skip vendor marketing and listicles. Where a claim is contested, say so rather than resolving it. Capture findings as a Markdown file in the repo and link it from this ticket.

## Answer

Full findings: [research/strength-categories.md](../research/strength-categories.md) — 645 lines, sourced, with a substantial "contested or thin" section.

**Headline: the challenging category survives, but only when narrowed.** ArgBench (46 argumentation tasks, 11 models) measures argument *generation* at F1 0.83–0.86 and argument *quality assessment* at F1 0.34–0.48 — the worst argumentation skill measured. So "give me the three strongest objections to this" is well-supported; "is my argument sound?" is not. That split is exactly the sycophancy threat this ticket was asked to probe, and it resolves it by narrowing the claim rather than dropping the category. Supporting: Cheng et al. (*Science*) find frontier models affirm users ~50% more than humans do, **and users rate the sycophantic answers as higher quality** — so the failure is invisible from the inside. A related June 2026 result finds models correct others' errors far better than their own, which means the executive bringing their own argument puts the model in its stronger regime.

**Category recommendations.** Keep drafting (strongest evidence), summarising (scoped to one bounded document), extracting. Narrow comparing to *structured comparison against an explicit rubric* — bare "which is better?" suffers >10pp accuracy swings from paste order alone. Split combining: perspective-combining is well-supported, volume-combining across many documents degrades badly. Drop reconciling as a standalone category and reuse it as the failure-mode demonstration, since the model finds *some* conflicts but never all, and the misses are invisible.

**Three additions argued for:** Übertragen (register translation, technical → board-level), Einordnen (classifying/routing — the category that converts into delegated repeatable work rather than one-off chat), Erklären (explaining — the largest single artefact type in Anthropic's usage telemetry).

**A candidate demo, not previously in the brief:** the FlipFlop effect — push back on an answer the model got right and it reverses ~46% of the time, with a 17% accuracy drop. Teaches model epistemics faster than any warning slide.

**Numbers discipline.** Do not put "+40% quality" on a slide: the peer-reviewed version dropped the figure, and three different numbers exist for one result. The stable BCG figures are 12.2% more tasks completed and 25.1% faster. Several widely-quoted findings (METR's developer slowdown, GDPval "matching experts", "sycophancy is solved") are flagged as over-claimed in both directions.

**Caveat carried forward, unverified.** These citations came from a research subagent and have not been independently checked. Several are dated 2026 and sit close to the edge of what can be confirmed. Before any number reaches client-facing material, verify it at source — a wrong statistic in front of a paying executive costs more than the slide is worth.
