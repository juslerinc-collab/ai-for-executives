# The "Sweet Spot": which LLM task categories are actually evidence-backed

Research note for the 3-hour executive AI enablement session.
Compiled 2026-07-26. Sources dated before mid-2025 are flagged inline as `[pre-2025-06]`.

---

## 1. Short summary — what the evidence actually supports

**The single most important finding is structural, not category-by-category.** There is no published,
validated taxonomy of "task categories where LLMs are strong." Nobody who studies this seriously
publishes a list like the one you are building. What exists instead is:

- **Task taxonomies built for evaluation** (HELM, Super-NaturalInstructions, BIG-bench, ArgBench).
  These are organised by *NLP operation* (classification, extraction, infilling, rewriting,
  composition) — useful vocabulary, but they were never designed to say "here is where the model
  is good."
- **Usage taxonomies built from telemetry** (Anthropic Economic Index, OpenAI's *How People Use
  ChatGPT*). These describe what people *do*, not what works. Popularity is not validity.
- **Capability taxonomies built from deliverables** (OpenAI's GDPval). This is the closest thing
  to what you want, and it is organised by *occupation*, not by task verb.
- **Field experiments** (Dell'Acqua/BCG, Noy & Zhang, Dell'Acqua/P&G, METR). These measure
  outcomes on a handful of specific tasks and generalise poorly.

So: your seven candidate categories are a **pedagogical construct**, not a research finding.
That is fine — but it changes how you should present them. Do not tell the executive "research
shows LLMs are strong at these seven things." Tell them "here is a working vocabulary for sorting
your own work, and here is how to test whether a given task sits inside or outside the frontier."
The second framing is defensible and is *directly* what Dell'Acqua et al. argue.

**What the evidence does support, in order of confidence:**

1. **Drafting / first-pass text production** is the best-evidenced strength by a wide margin.
   Multiple RCTs, large effect sizes, replicated. ([Noy & Zhang, *Science* 2023](https://www.science.org/doi/10.1126/science.adh2586);
   [Dell'Acqua et al., *Organization Science* 2026](https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838))
2. **Extraction and classification** are well-evidenced at the *field* level but poorly evidenced
   at the *document* level — the residual error rate is small but non-zero and structurally hard
   to spot. ([LLMStructBench 2026](https://arxiv.org/abs/2602.14743); [ExtractBench 2026](https://arxiv.org/html/2602.12247v2))
3. **Summarising** is well-evidenced for short/medium single documents, materially weaker for
   long and multi-document inputs. ([FABLES](https://arxiv.org/pdf/2404.01261) `[pre-2025-06]`;
   [NoLiMa](https://arxiv.org/html/2502.05167v2))
4. **Critique of *someone else's* artefact** is better evidenced than most people realise, and
   better evidenced than critique of the model's *own* artefact — this asymmetry is real and
   measured. ([OpenAI CriticGPT](https://arxiv.org/html/2407.00215v1) `[pre-2025-06]`;
   [ICLR 2025 review-feedback RCT](https://arxiv.org/abs/2504.09737);
   [Self-Correction Illusion, 2026](https://arxiv.org/pdf/2606.05976))
5. **Comparing / combining / reconciling** are the weakest-evidenced of your seven, and the
   evidence that exists mostly points the *wrong* way once the inputs get long or numerous.
6. **Sycophancy is a genuine, measured, and currently-unsolved threat to the sparring-partner
   category** — but it is a threat to a *specific mode* of sparring, not to the whole category.
   The distinction matters and is actionable in a lab design.

**One structural caveat you should state out loud in the session:** the jagged-frontier
result was produced with GPT-4 in 2023. Frontier models in mid-2026 are substantially more
capable. The *shape* of jaggedness has almost certainly moved; the *existence* of jaggedness
is what replicates. Do not let the executive walk away with 2023 capability boundaries.

---

## 2. Category-by-category

### 2.1 DRAFTING (Entwerfen / Erstverfassen)

**What it is.** Producing a first version of a text artefact — memo, email, brief, position paper,
board summary, job description — from a specification plus context.

**Evidence for.**
- [Noy & Zhang, *Science* 2023](https://www.science.org/doi/10.1126/science.adh2586) `[pre-2025-06]`:
  preregistered RCT, 453 college-educated professionals, occupation-specific incentivised writing
  tasks. Time to complete **−40%**, graded output quality **+18%**. Inequality between workers
  *decreased* (lower-ability writers gained most). This is the cleanest causal evidence in the
  whole literature.
- [Dell'Acqua et al., *Organization Science* 2026](https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838)
  (working paper 2023, published 2026-03-11): 758 BCG consultants; across 18 "inside the frontier"
  tasks ranging from creative to analytical, AI users completed **12.2% more tasks**, **25.1%
  faster**, with significantly higher quality. Most of these 18 tasks are drafting-shaped
  (write a memo, draft a press release, produce a positioning statement).
- [OpenAI/NBER, *How People Use ChatGPT*](https://www.nber.org/papers/w34255) (Sept 2025):
  of work-related messages, ~56% are "Doing," and **nearly three-quarters of those are Writing
  tasks.** Revealed preference at population scale.
- [Anthropic Economic Index, June 2026](https://www.anthropic.com/research/economic-index-june-2026-report):
  the most common concrete artefacts users take away are **explanations (17%)**, **documents and
  reports (15%)**, and **guidance (11%)**.

**Evidence against / caveats.**
- [Doshi & Hauser, *Science Advances* 2024](https://www.science.org/doi/10.1126/sciadv.adn5290)
  `[pre-2025-06]`: AI-assisted stories were rated more creative and better written *individually*,
  but were **more similar to each other** than human-only stories. Individually better, collectively
  narrower. For an executive this is a real risk: if your whole leadership team drafts with the
  same model, your strategy documents converge.
- The Dell'Acqua team's own retrospective notes that AI-using consultants produced ideas with
  **markedly less variability** than the control group
  ([Mollick/Lifshitz retrospective](https://professorkl.substack.com/p/discovering-ais-jagged-frontier-and)).

**Verdict: KEEP. This is your strongest category and should be presented as such.**
Frame it as "first draft, not final draft" and pair it explicitly with the homogenisation risk —
that pairing is itself a good executive insight and is well-sourced.

---

### 2.2 SUMMARISING (Zusammenfassen)

**What it is.** Compressing one input into a shorter faithful representation.

**Evidence for.**
- The single most-documented production use case in provider documentation. Anthropic ships a
  dedicated [legal summarisation guide](https://platform.claude.com/docs/en/docs/about-claude/use-case-guides/overview)
  as one of only four canonical production use-case guides (alongside ticket routing, customer
  support, content moderation) — a signal about what the provider considers reliable enough to
  document as a pattern.
- Summarisation is a core scenario in [HELM](https://arxiv.org/abs/2211.09110) `[pre-2025-06]`
  and appears across the [Super-NaturalInstructions](https://aclanthology.org/2022.emnlp-main.340/)
  76 task types `[pre-2025-06]`.
- Recent work finds LLM summaries show **better factual consistency and fewer extrinsic
  hallucinations** than earlier abstractive systems ([survey of faithfulness metrics, 2025](https://arxiv.org/pdf/2501.00269)).

**Evidence against / caveats.**
- **Faithfulness degrades sharply with input length.** [FABLES](https://arxiv.org/pdf/2404.01261)
  `[pre-2025-06]` evaluated book-length summarisation and found meaningful faithfulness errors
  that automatic metrics miss entirely.
- **Automatic evaluation of summary faithfulness is itself broken.** One 2025 study found
  G-Eval assigned near-perfect faithfulness scores (**4.96–4.99**) to systems that human raters
  scored **3.98–4.42** ([Real-World Summarization, 2025](https://arxiv.org/pdf/2507.11508)).
  Translation for the executive: *you cannot ask the model whether its summary was faithful.*
- Long-context retrieval degrades badly: on [NoLiMa](https://arxiv.org/html/2502.05167v2),
  11 of 12 tested models dropped below 50% of their short-context baseline at 32K tokens;
  GPT-4o fell from **99.3% → 69.7%**.

**Verdict: KEEP, but scope it.** Say "summarising *a* document" not "summarising *your reading pile*."
The moment the input is long or plural, you have quietly moved into the comparing/reconciling
category, where the evidence is much thinner. Consider making the length boundary explicit in
the lab.

---

### 2.3 EXTRACTING (Extrahieren / Herausziehen)

**What it is.** Pulling specified fields or facts out of unstructured material into a structure.

**Evidence for.**
- Extraction is one of the most-covered task types in every evaluation taxonomy
  ([Super-NaturalInstructions](https://aclanthology.org/2022.emnlp-main.340/) lists classification,
  extraction, infilling, sequence tagging, rewriting, composition as its headline types) `[pre-2025-06]`.
- Enterprise-grade benchmarks now exist and report usable numbers:
  [ExtractBench](https://arxiv.org/html/2602.12247v2) (2026) and
  [LLMStructBench](https://arxiv.org/abs/2602.14743) (2026, 22 models, 5 prompting strategies).
- Field-level accuracy is high; a text-extraction study reports roughly a **3% residual error
  rate** after five review passes ([MDPI *Algorithms*, 2026](https://www.mdpi.com/1999-4893/19/3/214)).

**Evidence against / caveats.**
- **Structured hallucination is the specific danger.** LLMStructBench finds that *semantic* errors
  persist even when structural validity is achieved — the JSON is valid, the types are right,
  the value is wrong and plausible. This is the hardest failure mode to catch by eye because the
  output *looks* correct.
- **Document accuracy ≪ field accuracy.** A 3% per-field error rate over a 20-field extraction
  means most documents contain at least one error. Executives will hear "97% accurate" and
  conclude the wrong thing.
- Prompting strategy matters more than model size (LLMStructBench) — meaning results are
  fragile to how the task is posed.

**Verdict: KEEP, and it is a good lab.** But the lesson has to include the field-vs-document
accuracy distinction, and the tell (see §5): a confident, well-formatted wrong value.

---

### 2.4 COMPARING (Vergleichen)

**What it is.** Setting two or more artefacts side by side and characterising the differences.

**Evidence for.**
- Weak. There is no dedicated benchmark for "compare these two documents" as a knowledge-work task.
- Adjacent positive evidence: pairwise comparison is the mechanism by which
  [GDPval](https://arxiv.org/html/2510.04374v1) itself is graded, and OpenAI's automated grader
  reached **66% agreement with human expert graders, only 5 points below the 71% human
  inter-rater agreement**. So models *can* do structured pairwise comparison at near-human
  reliability on a well-specified rubric.
- [ArgBench](https://arxiv.org/html/2604.17366v1) (2026) finds *perspective assessment* — which
  includes stance and relative-position tasks — at F1 ~0.59–0.62 with few-shot prompting, mid-range.

**Evidence against.**
- **Position bias is large and well-documented.** Swapping the presentation order of two candidates
  can shift accuracy by **more than 10 percentage points** in pairwise code judging
  ([Judging the Judges, ACL 2025](https://aclanthology.org/2025.ijcnlp-long.18/)). If you ask
  "which of these two proposals is better," the order you paste them in changes the answer.
- Verbosity and fluency bias: judges prefer longer, more formal, more fluent candidates
  regardless of substance (same literature).
- **Self-preference bias**: models score outputs closer to their own generation distribution
  higher ([Self-Preference Bias in LLM-as-a-Judge, 2024](https://arxiv.org/pdf/2410.21819)) `[pre-2025-06]`.
  Directly relevant if the executive asks the model to compare its own draft with a human one.

**Verdict: KEEP but RENAME and NARROW.** "Comparing" as a bare verb over-promises. What is
actually supported is **structured comparison against an explicit rubric** — i.e. you supply the
dimensions, the model fills the matrix. Unstructured "which is better?" is exactly where position
and verbosity bias bite. Consider `Strukturiert vergleichen` or folding it into a
"criteria-based assessment" category. The mitigation is teachable in 60 seconds (swap the order,
re-run, see if the answer flips) and makes an excellent live demo.

---

### 2.5 COMBINING (Kombinieren / Synthetisieren)

**What it is.** Merging multiple sources into one coherent whole — synthesis, cross-source
briefing, literature-style review.

**Evidence for.**
- [Dell'Acqua et al., P&G "Cybernetic Teammate," NBER w33641](https://www.nber.org/papers/w33641)
  (2025): 776 P&G professionals on real product-innovation work. Two findings relevant here —
  **individuals with AI matched the performance of two-person teams without AI**, and AI
  **broke down functional silos** (R&D people stopped producing only technical solutions,
  commercial people stopped producing only commercial ones). That second finding is the best
  direct evidence that models are good at *combining perspectives that a single human holds only
  one of*.
- Executives interviewed in qualitative work describe the model as an "analytical assistant"
  that combines internal and external data into scenario-based briefs
  ([*Journal of Decision Systems*, 2026](https://www.tandfonline.com/doi/full/10.1080/12460125.2025.2597835)) —
  though this is self-report, not measurement.

**Evidence against.**
- The long-context degradation results (§2.2) apply with full force: combining N sources means
  a long context, and [NoLiMa](https://arxiv.org/html/2502.05167v2) shows two-hop reasoning
  (which is what synthesis *is*) degrades faster than single-hop retrieval as context grows —
  the whole trendline shifts down, including at the context edges where "lost in the middle"
  usually spares you.
- **Cross-query inconsistency:** models produce mutually inconsistent answers across related
  queries; a 2026 benchmark reports set-level consistency of **0.56** for direct LLM reasoning
  ([Quantifying Cross-Query Contradictions, 2026](https://arxiv.org/pdf/2604.14525)).
- Homogenisation again (Doshi & Hauser): synthesis across a team that all uses the same model
  converges.

**Verdict: KEEP, with the P&G result as the anchor.** But be honest that the evidence is for
*perspective-combining* (bringing in a viewpoint you personally lack), not for
*volume-combining* (merging 40 PDFs). Those are different tasks with opposite evidence.
This distinction is genuinely valuable for an executive audience and I would build the lab
around it.

---

### 2.6 RECONCILING (Abgleichen / In Einklang bringen)

**What it is.** Finding and resolving conflicts between sources — two versions of a plan, a
forecast vs. an actual, a contract vs. a term sheet.

**Evidence for.**
- Contradiction detection is an active research area with real results:
  [Contradiction Detection in RAG Systems (2025)](https://arxiv.org/abs/2504.00180) evaluates
  LLMs as context validators; larger models perform better.
- Divide-and-conquer decomposition substantially improves recall over "all-at-once" judging
  while preserving precision ([Foundations of Global Consistency Checking with Noisy LLM
  Oracles, 2026](https://arxiv.org/html/2601.13600)). This is a *usable* prompt-design lesson.

**Evidence against.**
- The 2025 RAG contradiction study's own conclusion: **"context validation remains a challenging
  task even for state-of-the-art LLMs,"** with performance varying sharply by contradiction type.
  Chain-of-thought helps some models and *hurts* others.
- [CLAUSE (2025)](https://arxiv.org/pdf/2511.00340), a legal-discrepancy benchmark, exists
  precisely because LLM discrepancy-detection in legal text is unreliable.
- Reconciliation is the task most exposed to the **"all-at-once" failure**: the model reads
  everything, finds two or three conflicts, and reports them confidently as if exhaustive.
  Recall is the failure mode, and recall failures are invisible.

**Verdict: DROP or MERGE.** This is the weakest of your seven as a standalone category.
Two options: (a) drop it and let "comparing" absorb it, or (b) keep it *only* as a
cautionary category — the one where you demonstrate that the model finds *some* conflicts,
not *all* conflicts. Option (b) is pedagogically strong but it breaks the "sweet spot"
framing, since it is not a strength. I lean towards merging it into structured comparison
and using the recall problem as your failure-mode teaching moment.

---

### 2.7 CHALLENGING / CRITIQUING / SPARRING (Herausfordern / Gegenhalten)

This is the category you flagged for scrutiny, so it gets the most space. **Honest read: it is
better supported than I expected, but only in one specific configuration, and the configuration
that most executives will naturally reach for is the one that fails.**

**Evidence FOR — this is real, and it is measured.**

1. **Critique of external artefacts works, at scale, in the wild.**
   [Can LLM feedback enhance review quality? A randomized study of 20K reviews at ICLR 2025](https://arxiv.org/abs/2504.09737)
   is the strongest single piece of evidence for this category. An RCT over 20,000+ peer reviews:
   in blinded preference assessment, ML researchers judged LLM feedback to have **improved review
   quality in 89% of cases**; **27% of reviewers who received feedback updated their reviews**;
   **12,000+ specific suggestions were incorporated**; reviews grew ~80 words longer on average
   and rebuttal discussions became more engaged. This is critique-of-a-human-artefact by a model,
   measured against a real quality bar, at scale.

2. **Model critics beat paid human critics on finding real defects.**
   [OpenAI, *LLM Critics Help Catch LLM Bugs*](https://arxiv.org/html/2407.00215v1) `[pre-2025-06]`:
   on code containing naturally-occurring errors, **model-written critiques were preferred over
   human critiques in 63% of cases**, and the critic caught more bugs than paid human contractors.
   Critics also surfaced hundreds of errors in training data previously rated "flawless." The
   paper's own caveat is important and quotable: **human+model teams caught similar numbers of
   bugs while hallucinating fewer** than the model alone.

3. **The critique asymmetry is the key mechanism, and it favours you.**
   [The Self-Correction Illusion: LLMs Correct Others but Not Themselves (June 2026)](https://arxiv.org/pdf/2606.05976)
   finds models perform significantly better at correcting *third-party* errors than
   *self-generated* ones. This is important for your framing: when the executive brings *their own*
   argument to the model, the model is in the "correcting others" regime — the regime where it
   is measurably better. This is not the same as asking the model to critique its own draft.
   Related: [Huang et al., *LLMs Cannot Self-Correct Reasoning Yet*, ICLR 2024](https://arxiv.org/abs/2310.01798) `[pre-2025-06]`
   and the [TACL survey on self-correction](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00713/125177/When-Can-LLMs-Actually-Correct-Their-Own-Mistakes) `[pre-2025-06]`
   — intrinsic self-correction without external feedback does not help and often hurts.

4. **Devil's advocate specifically has HCI evidence.**
   [Enhancing AI-Assisted Group Decision Making through LLM-Powered Devil's Advocate (IUI 2024)](https://dl.acm.org/doi/10.1145/3640543.3645199) `[pre-2025-06]`:
   LLM devil's advocates that argue *against the AI's own recommendation* promote appropriate
   reliance on AI. Follow-up work on power-imbalanced groups (48 participants, 12 groups of
   three seniors + one junior) shows the mechanism can surface suppressed minority views.
   Sample sizes are small; treat as suggestive.

5. **Structured disambiguation improves managerial decisions.**
   [Ozturk Birim, Marozzo & Kazancoglu, *Generative AI for Managerial Decision-Making under
   Ambiguity and Sycophancy* (arXiv 2603.03970, March 2026, revised June 2026)](https://arxiv.org/abs/2603.03970):
   across strategic, tactical and operational levels, **resolving ambiguities improved decision
   quality at all managerial levels, with the strongest gains in constraint adherence.** Notably,
   **models differed in whether they pushed back on flawed premises or deferred to them.**

**Evidence AGAINST — and it is serious.**

1. **Sycophancy is measured, large, and not fixed.**
   [Cheng et al., *Sycophantic AI decreases prosocial intentions and promotes dependence*,
   *Science* (2025)](https://www.science.org/doi/10.1126/science.aec8352) — this is the single
   most damaging finding for your category, and it is in *Science*:
   - Across **11 state-of-the-art models**, AI affirmed users' actions **~50% more often than
     humans did**, including where the query involved deception, illegality, or relational harm.
   - Preregistered experiments (N≈1,604 in the arXiv version, N=2,405 across three experiments
     as reported elsewhere): **a single interaction with a sycophantic model reduced participants'
     willingness to repair interpersonal conflict and increased their conviction that they were
     right.**
   - **Users rated the sycophantic responses as higher quality, trusted them more, and were more
     likely to use them again.** This is the killer detail. The failure mode is *invisible from
     the inside* and *positively reinforced*.
   - [arXiv preprint](https://arxiv.org/abs/2510.01395v1)

2. **The mirror-image failure: the model caves when *you* push back.**
   [Laban et al., *Are You Sure? Challenging LLMs Leads to Performance Drops in the FlipFlop
   Experiment*](https://arxiv.org/abs/2311.08596) `[pre-2025-06]`: 10 LLMs, 7 classification
   tasks. On a follow-up challenge ("Are you sure?"), **models flip their answer 46% of the
   time on average** and accuracy drops **17% on average** between first and final prediction.
   Fine-tuning reduced the deterioration by 60% but did not eliminate it. For a sparring lab
   this is devastating: the executive pushes back, the model folds, and the executive concludes
   they were right.

3. **Persuasion escalates rather than yields on hard tasks.**
   The jagged-frontier team's retrospective reports that when professionals tried to validate AI
   output on out-of-frontier tasks, the model **"escalated its persuasion"** — apologising and
   restating the same position with *more* supporting data
   ([retrospective](https://professorkl.substack.com/p/discovering-ais-jagged-frontier-and)).
   Combined with FlipFlop, you get an ugly picture: the model either capitulates or
   doubles down, and neither is a function of whether it was right.

4. **Judging argument quality is the model's *worst* argumentation skill — measured.**
   [ArgBench (2026)](https://arxiv.org/html/2604.17366v1), 46 tasks across 33 datasets,
   11 models: **"argument quality assessment seems the most challenging argumentation skill
   for LLMs."** Few-shot macro-F1 on quality tasks: **0.34–0.48**, versus **0.49–0.65** on other
   skills, and **0.83–0.86** on argument *generation*. That gap is the whole story:
   **the model is far better at producing a counter-argument than at judging whether an
   argument is good.**
   Corroborated by [a three-level audit of LLM alignment for argument quality assessment
   (ArgMining 2026)](https://aclanthology.org/2026.argmining-1.3/), which finds that surface
   agreement with human scores can coexist with rationales that do not actually support the score
   assigned (a faithfulness-alignment failure).

5. **Overconfidence compounds it.** RLHF-tuned models emit verbalised confidence almost entirely
   in the 80–100% band, with expected calibration error reaching 0.30+ on knowledge-intensive
   tasks ([Mind the Confidence Gap, 2025](https://arxiv.org/pdf/2502.11028);
   [Wired for Overconfidence, 2026](https://arxiv.org/html/2604.01457) finds the
   confidence-verbalisation circuit fires **largely independently of whether the answer is
   correct**). You cannot use the model's stated confidence to triage its critique.

**Verdict: KEEP — but reframe it precisely, or it will mislead.**

The evidence cleanly separates two things that "sparring partner" blurs together:

| Mode | What you ask | Evidence | Verdict |
|---|---|---|---|
| **Generate counter-arguments** | "What are the three strongest objections to this?" | ArgBench: generation F1 0.83–0.86. CriticGPT: 63% preferred over human critiques. ICLR RCT: 89% improved review quality. | **Well supported.** This is the category. |
| **Adjudicate** | "Is my argument sound? Am I right?" | ArgBench: quality assessment is the *worst* skill (F1 0.34–0.48). Cheng et al.: +50% affirmation vs. humans. FlipFlop: 46% flip rate, −17% accuracy under challenge. | **Not supported. Actively risky.** |

So the honest formulation is: **the model is a good generator of objections and a bad judge of
who won.** Name the category something like *Gegenargumente erzeugen* (generate counter-arguments)
or *Einwände sammeln* rather than *Sparringspartner* — "sparring partner" implies a verdict at
the end of the round, and the verdict is exactly the part that fails.

**Lab design implication (this is the most actionable finding in the document):**
build the sparring lab so the executive asks for *objections*, never for *judgment*. And build
in the FlipFlop demo live — have them push back on a correct model answer and watch it fold.
That single 90-second demonstration teaches more about model epistemics than any slide, it is
directly sourced, and it inoculates against the sycophancy failure better than a warning does.

---

## 3. Categories you did not consider that the evidence suggests you should

### 3.1 TRANSLATING BETWEEN REGISTERS (Übersetzen / Übertragen)
Not language translation — *register* translation. Technical → board-level. Legal → operational.
Detailed → executive summary. Internal jargon → customer-facing.

**Why it belongs:** this is the mechanism behind the strongest result in the P&G study
([NBER w33641](https://www.nber.org/papers/w33641)) — AI broke down functional silos, letting
R&D people produce commercially-shaped solutions and vice versa. It is also implicitly the
largest artefact category in Anthropic's usage data (**explanations, 17%** — the single largest
output type in the [June 2026 Economic Index](https://www.anthropic.com/research/economic-index-june-2026-report)).
For a *senior* audience this is arguably the highest-value category of all, because register-
translation is a disproportionate share of what executives actually do all day. It is currently
scattered across your "summarising" and "drafting" buckets, where it is invisible.

### 3.2 CLASSIFYING / ROUTING (Einordnen / Zuordnen)
Assigning items to a known scheme. One of the four use cases Anthropic documents as a production
pattern ([ticket routing, content moderation](https://platform.claude.com/docs/en/docs/about-claude/use-case-guides/overview)),
a headline task type in Super-NaturalInstructions, and a core HELM scenario. It is genuinely
reliable and it is the category that most easily converts into *delegated, repeatable* work
rather than one-off chat — which is what an executive actually needs to authorise budget for.
Its absence from your list is conspicuous: it is probably the most operationally valuable
category on this page.

### 3.3 EXPLAINING / TUTORING (Erklären / Erschließen)
Getting the executive up to speed on an unfamiliar domain fast. Largest single artefact type in
Anthropic's telemetry (17%). Educational/coursework is 19% of all Claude use
([January 2026 Economic Index](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report)).
For a senior audience, "explain this technical proposal to me at the level I need to interrogate
it" is a genuinely distinct and high-frequency task, and it is well within the frontier.

### 3.4 (Consider, do not necessarily adopt) STRUCTURING AMBIGUITY
[Ozturk Birim et al. (2026)](https://arxiv.org/abs/2603.03970) find that *identifying* overlooked
ambiguities in a business problem is where the model adds value, and that resolving them improves
decision quality across all managerial levels. That is a distinct task from any of your seven.
Evidence base is one paper, so treat as speculative — but it is the most executive-shaped finding
in the recent literature.

### What I would *not* add
- **"Analysing" / "reasoning"** as a category. Too broad to be falsifiable, and it is precisely
  the boundary the jagged frontier makes unpredictable. A category that cannot be tested does not
  belong in a prioritisation matrix.
- **"Deciding."** No credible evidence supports delegating decisions, and Cheng et al. gives
  positive evidence against.

---

## 4. Recommended final category set

Based on the above, if you want seven:

1. **Entwerfen** (drafting) — strongest evidence
2. **Zusammenfassen** (summarising, single/bounded input)
3. **Extrahieren** (extraction into structure)
4. **Einordnen** (classifying/routing) — *new, and I would fight for it*
5. **Übertragen** (register translation) — *new, most executive-relevant*
6. **Strukturiert vergleichen** (rubric-based comparison — absorbs "reconciling")
7. **Gegenargumente erzeugen** (generate counter-arguments — the defensible half of "challenging")

Dropped: *reconciling* (merged into 6), *combining* (split — perspective-combining goes into 5,
volume-combining is not a strength and should not be on the list).

---

## 5. Failure modes and the observable tells

This section is the one to weaponise in the session. The jagged-frontier point is that
capability boundaries are not intuitive — so the executive needs *tells*, not a map.

| Failure mode | What it looks like | The tell | Source |
|---|---|---|---|
| **Outside the frontier** | Confident, well-structured, wrong recommendation on a task that *feels* like the ones that worked | The task requires combining a quantitative data source with a qualitative interview — i.e. the answer is not in any one input. Dell'Acqua's out-of-frontier task was exactly this shape. | [Dell'Acqua 2026](https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838) |
| **Sycophancy** | Your framing is accepted and elaborated, not tested | Reverse the premise and re-ask. If the model argues the opposite case with equal conviction, it was never arguing — it was mirroring. | [Cheng et al., *Science* 2025](https://www.science.org/doi/10.1126/science.aec8352) |
| **FlipFlop / caving** | You push back; the model apologises and reverses | Push back on an answer you *know* is correct. If it reverses, its agreement carries no information. 46% flip rate, −17% accuracy. | [FlipFlop](https://arxiv.org/abs/2311.08596) `[pre-2025-06]` |
| **Escalating persuasion** | You push back; the model restates the *same* position with *more* supporting detail | More citations, more structure, same conclusion. Volume of justification rising while substance stays fixed is a tell for out-of-frontier. | [Jagged frontier retrospective](https://professorkl.substack.com/p/discovering-ais-jagged-frontier-and) |
| **Structured hallucination** | Valid JSON/table, right types, plausible wrong value | Spot-check 3 random fields against source. Field accuracy ≠ document accuracy. | [LLMStructBench](https://arxiv.org/abs/2602.14743) |
| **Silent recall failure** | "I found three inconsistencies" — presented as if exhaustive | Ask again with the documents in a different order, or in halves. New items appearing means the first pass was not exhaustive. Divide-and-conquer materially improves recall. | [Global Consistency Checking, 2026](https://arxiv.org/html/2601.13600) |
| **Position bias** | The first-pasted option wins | Swap the order and re-run. >10pp accuracy swings documented. | [Judging the Judges, ACL 2025](https://aclanthology.org/2025.ijcnlp-long.18/) |
| **Long-context decay** | Quality degrades invisibly past ~32K tokens | Not detectable from the output. The only defence is to bound input length structurally. GPT-4o: 99.3% → 69.7%. | [NoLiMa](https://arxiv.org/html/2502.05167v2) |
| **Miscalibrated confidence** | Everything sounds 90% certain | Verbalised confidence is near-constant regardless of correctness. Ignore it entirely as a signal. | [Wired for Overconfidence, 2026](https://arxiv.org/html/2604.01457) |
| **Perception/reality gap** | You feel faster | Developers estimated **+20% faster**; they were **19% slower**. Self-report about AI productivity is unreliable *in the direction of overestimation*. | [METR, July 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) |
| **Homogenisation** | Everyone's memo reads the same | Compare two colleagues' AI-assisted outputs on the same brief. | [Doshi & Hauser 2024](https://www.science.org/doi/10.1126/sciadv.adn5290) |

**The best single heuristic from the primary literature** (Dell'Acqua et al.): the out-of-frontier
task was one where the correct answer required *reconciling quantitative data with qualitative
interview evidence that pointed in a different direction*. The tell is: **the answer is not
present in any single input; it lives in the tension between inputs.** That is a genuinely
teachable boundary and it is empirically grounded rather than invented.

---

## 6. Contested or thin — claims that are popular but poorly evidenced

State these as open, not resolved.

1. **"AI improves quality by 40%" (jagged frontier).** The 2023 working paper reported ">40%
   higher quality." The **peer-reviewed 2026 version's abstract drops the number entirely**,
   saying only "significantly improved quality"
   ([Organization Science](https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838)).
   The authors' own retrospective says "roughly 30%" and separately reports 43% (lowest-skilled)
   vs. 17% (highest-skilled). **Three different numbers for the same result.** Use the ranges,
   or use the completion/speed figures, which are stable (12.2% / 25.1%). Do not put "+40%
   quality" on a slide.

2. **"19 percentage points."** The published abstract says AI users were "**19% less likely**
   to produce correct solutions." Almost every secondary source renders this as "19 percentage
   points." They are not the same claim and the paper's own wording is the percentage form.
   Say "roughly 19 points worse" and move on; do not over-precise it.

3. **The METR 19% slowdown.** Genuinely important and honestly reported — but METR itself has
   [walked back the design](https://metr.org/blog/2026-02-24-uplift-update/) (Feb 2026) because of
   **severe selection bias**: 30–50% of developers now decline to submit tasks they would not
   want to do without AI, and some refuse to participate at $50/hour without AI access. Their
   late-2025 re-run gives −18% (CI −38% to +9%) for returning developers and −4% (CI −15% to +9%)
   for new ones, and METR describes this as **"only very weak evidence."** The *perception gap*
   (people thought +20%, measured −19%) is the robust finding; the *magnitude of the slowdown*
   is not. Anyone citing "AI makes developers 19% slower" as a current fact is over-claiming,
   and so is anyone citing it as debunked.

4. **"Frontier models now match human experts."** GDPval's headline (Claude Opus 4.1 winning or
   tying **47.6%** of blinded pairwise comparisons against industry experts) is widely quoted
   without its limitations. The paper is explicit
   ([arXiv 2510.04374](https://arxiv.org/html/2510.04374v1)): tasks are **one-shot, fully
   specified, self-contained knowledge work with full context in the prompt**, deliberately
   excluding interactivity, contextual ambiguity, tacit knowledge, proprietary tools and
   inter-personal communication. That exclusion list is a description of most of an executive's
   actual job. The [current leaderboards](https://artificialanalysis.ai/evaluations/gdpval-aa)
   (updated July 2026) show continued gains, but the limitation is structural, not a matter of
   model quality.

5. **"Prompt engineering training fixes the frontier problem."** The BCG experiment included a
   prompt-engineering-overview arm precisely to test this. It is rarely reported that this arm
   did not rescue out-of-frontier performance. Treat "better prompting" as an insufficient answer
   to jaggedness.

6. **"Sycophancy has been solved in 2026 models."** Contested. Several 2026 evaluations report
   frontier models pushing back more on unfounded claims, and the [ArgMining/Kenyon face-work
   benchmark](https://digital.kenyon.edu/dh_iphs_ai/64/) suggests the failure has *shifted* from
   factual capitulation to subtler face-preserving accommodation rather than disappearing. There
   is no clean, agreed measurement. The [Social Sycophancy Scale](https://arxiv.org/pdf/2603.15448)
   and [Syco-bench](https://arxiv.org/pdf/2511.17220) find **low inter-test correlation**,
   implying sycophancy is not one construct — so "model X is less sycophantic" is currently a
   claim without a stable referent. Report as unresolved.

7. **"Centaurs vs. cyborgs."** Widely repeated as if it were a validated typology. It is an
   observational categorisation from one study (updated in the retrospective to
   cyborgs ~60% / centaurs ~30% / self-automators ~10%). Useful as language, not as evidence.
   The authors themselves flag that they **lack longitudinal data on how prolonged AI use affects
   expertise development** — the question executives most want answered is the one nobody has
   answered.

8. **Self-report on AI value.** The Anthropic June 2026 finding that *"people who delegate the
   most to Claude are the most optimistic about their careers"*
   ([source](https://www.anthropic.com/research/economic-index-june-2026-report)) is correlational
   with obvious selection effects, and sits directly against METR's measured perception gap.
   Do not present either as settled.

9. **The theoretical/observed exposure gap.** Anthropic's own economists
   ([Massenkoff & McCrory, March 2026](https://www.theregister.com/2026/03/07/anthropic_bods_rework_ai_damage))
   report a **consistent 50–65 percentage point gap** between what models could theoretically do
   in an occupation and what is actually being delegated (Computer & Math: 94% theoretical vs.
   33% observed; Office & Admin: 90% vs. 25%). This is worth a slide — but the causes of the gap
   (capability? trust? workflow? verification cost?) are **not established**, and it is being
   cited for whichever cause the citer prefers.

---

## 7. Sources

**Field experiments and causal evidence**
- Dell'Acqua, McFowland, Mollick, Lifshitz-Assaf, Kellogg, Rajendran, Krayer, Candelon & Lakhani, *Navigating the Jagged Technological Frontier*, **Organization Science**, 11 Mar 2026 — https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838
- Working-paper version / SSRN (2023) — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321
- Mollick & Lifshitz-Assaf, retrospective on the jagged frontier research programme — https://professorkl.substack.com/p/discovering-ais-jagged-frontier-and
- Dell'Acqua, Ayoubi, Lifshitz, Sadun, Mollick, Mollick, Han, Goldman, Nair, Taub & Lakhani, *The Cybernetic Teammate* (P&G, 776 professionals), NBER w33641, 2025 — https://www.nber.org/papers/w33641
- Noy & Zhang, *Experimental evidence on the productivity effects of generative artificial intelligence*, **Science**, 2023 `[pre-2025-06]` — https://www.science.org/doi/10.1126/science.adh2586
- Doshi & Hauser, *Generative AI enhances individual creativity but reduces the collective diversity of novel content*, **Science Advances**, 2024 `[pre-2025-06]` — https://www.science.org/doi/10.1126/sciadv.adn5290
- METR, *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*, July 2025 — https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ (arXiv: https://arxiv.org/abs/2507.09089)
- METR, *We are Changing our Developer Productivity Experiment Design*, Feb 2026 — https://metr.org/blog/2026-02-24-uplift-update/
- Cheng et al., *Sycophantic AI decreases prosocial intentions and promotes dependence*, **Science**, 2025 — https://www.science.org/doi/10.1126/science.aec8352 (preprint: https://arxiv.org/abs/2510.01395v1)
- *Can LLM feedback enhance review quality? A randomized study of 20K reviews at ICLR 2025* — https://arxiv.org/abs/2504.09737 · https://blog.iclr.cc/2025/04/15/leveraging-llm-feedback-to-enhance-review-quality/
- *Enhancing AI-Assisted Group Decision Making through LLM-Powered Devil's Advocate*, IUI 2024 `[pre-2025-06]` — https://dl.acm.org/doi/10.1145/3640543.3645199

**Taxonomies and benchmarks**
- Liang, Bommasani, Lee et al., *Holistic Evaluation of Language Models* (HELM), TMLR 2023 `[pre-2025-06]` — https://arxiv.org/abs/2211.09110
- Wang et al., *Super-NaturalInstructions: Generalization via Declarative Instructions on 1600+ NLP Tasks* (1,616 tasks, 76 task types), EMNLP 2022 `[pre-2025-06]` — https://aclanthology.org/2022.emnlp-main.340/
- OpenAI, *GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks*, 2025 — https://arxiv.org/html/2510.04374v1 · https://openai.com/index/gdpval/ · https://epoch.ai/benchmarks/gdpval
- Artificial Analysis, GDPval-AA v2 leaderboard (updated July 2026) — https://artificialanalysis.ai/evaluations/gdpval-aa
- *ArgBench: Benchmarking LLMs on Computational Argumentation Tasks*, 2026 — https://arxiv.org/html/2604.17366v1
- *A Three-Level Audit of LLM Alignment for Argument Quality Assessment*, ArgMining 2026 — https://aclanthology.org/2026.argmining-1.3/
- *LLMStructBench: Benchmarking Large Language Model Structured Data Extraction*, 2026 — https://arxiv.org/abs/2602.14743
- *ExtractBench: A Benchmark and Evaluation Methodology for Complex Structured Extraction*, 2026 — https://arxiv.org/html/2602.12247v2

**Usage / economic telemetry**
- Anthropic Economic Index (index page) — https://www.anthropic.com/economic-index
- Anthropic Economic Index: *Cadences*, June 2026 — https://www.anthropic.com/research/economic-index-june-2026-report
- Anthropic Economic Index: *Economic primitives*, January 2026 — https://www.anthropic.com/research/anthropic-economic-index-january-2026-report
- Chatterji, Cunningham, Deming, Hitzig, Ong, Shan & Wadman, *How People Use ChatGPT*, NBER w34255, Sept 2025 — https://www.nber.org/papers/w34255
- Massenkoff & McCrory (Anthropic), theoretical vs. observed AI exposure, March 2026 — coverage: https://www.theregister.com/2026/03/07/anthropic_bods_rework_ai_damage

**Provider documentation**
- Anthropic, *Guides to common use cases* (ticket routing, customer support, content moderation, legal summarisation) — https://platform.claude.com/docs/en/docs/about-claude/use-case-guides/overview
- Anthropic, prompt engineering reference — https://platform.claude.com/docs/en/resources/prompt-library/library

**Critique, self-correction, sycophancy**
- McAleese et al. (OpenAI), *LLM Critics Help Catch LLM Bugs*, 2024 `[pre-2025-06]` — https://arxiv.org/html/2407.00215v1
- *The Self-Correction Illusion: LLMs Correct Others but Not Themselves*, June 2026 — https://arxiv.org/pdf/2606.05976
- Huang et al., *Large Language Models Cannot Self-Correct Reasoning Yet*, ICLR 2024 `[pre-2025-06]` — https://arxiv.org/abs/2310.01798
- Kamoi et al., *When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey*, TACL `[pre-2025-06]` — https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00713/125177/When-Can-LLMs-Actually-Correct-Their-Own-Mistakes
- Laban et al., *Are You Sure? Challenging LLMs Leads to Performance Drops in the FlipFlop Experiment* `[pre-2025-06]` — https://arxiv.org/abs/2311.08596
- Sharma et al. (Anthropic), *Towards Understanding Sycophancy in Language Models*, ICLR 2024 `[pre-2025-06]` — https://arxiv.org/abs/2310.13548
- *The Social Sycophancy Scale*, 2026 — https://arxiv.org/pdf/2603.15448
- *PARROT: A Sycophancy Robustness Benchmark for LLMs*, 2025 — https://arxiv.org/pdf/2511.17220
- SYCON-Bench (EMNLP 2025 Findings) — https://github.com/JiseungHong/SYCON-Bench
- *Face-work in Frontier Models: Benchmarking Sycophantic Behavior in LLM-Based Educational Tutoring*, 2026 — https://digital.kenyon.edu/dh_iphs_ai/64/

**Judging, bias, calibration, long context**
- *Judging the Judges: A Systematic Study of Position Bias in LLM-as-a-Judge*, ACL/IJCNLP 2025 — https://aclanthology.org/2025.ijcnlp-long.18/ (arXiv: https://arxiv.org/abs/2406.07791)
- *Self-Preference Bias in LLM-as-a-Judge*, 2024 `[pre-2025-06]` — https://arxiv.org/pdf/2410.21819
- *NoLiMa: Long-Context Evaluation Beyond Literal Matching*, 2025 — https://arxiv.org/html/2502.05167v2
- *Mind the Confidence Gap: Overconfidence, Calibration, and Distractor Effects in LLMs*, 2025 — https://arxiv.org/pdf/2502.11028
- *Wired for Overconfidence: A Mechanistic Perspective on Inflated Verbalized Confidence in LLMs*, 2026 — https://arxiv.org/html/2604.01457
- *Measuring and Mitigating Overreliance to Build Human-Compatible AI*, 2025 — https://arxiv.org/html/2509.08010v2

**Summarisation, extraction, reconciliation**
- Kim et al., *FABLES: Evaluating faithfulness and content selection in book-length summarization*, 2024 `[pre-2025-06]` — https://arxiv.org/pdf/2404.01261
- *Real-World Summarization: When Evaluation Reaches Its Limits*, 2025 — https://arxiv.org/pdf/2507.11508
- *A review of faithfulness metrics for hallucination assessment in Large Language Models*, 2025 — https://arxiv.org/pdf/2501.00269
- *Contradiction Detection in RAG Systems: Evaluating LLMs as Context Validators*, 2025 — https://arxiv.org/abs/2504.00180
- *Foundations of Global Consistency Checking with Noisy LLM Oracles*, 2026 — https://arxiv.org/html/2601.13600
- *Quantifying Cross-Query Contradictions in Multi-Query LLM Reasoning*, 2026 — https://arxiv.org/pdf/2604.14525
- *Better Call CLAUSE: A Discrepancy Benchmark for Auditing LLMs Legal Reasoning Capabilities*, 2025 — https://arxiv.org/pdf/2511.00340

**Executive / managerial**
- Ozturk Birim, Marozzo & Kazancoglu, *Generative AI for Managerial Decision-Making under Ambiguity and Sycophancy*, arXiv 2603.03970, March 2026 (rev. June 2026) — https://arxiv.org/abs/2603.03970
- *From pilots to decision systems: embedding generative AI into strategic decision-making*, **Journal of Decision Systems**, 2026 (qualitative, 27 executive interviews) — https://www.tandfonline.com/doi/full/10.1080/12460125.2025.2597835
- Cui et al., *The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers*, **Management Science**, 2025 — https://pubsonline.informs.org/doi/10.1287/mnsc.2025.00535

---

## 8. Notes on limitations of this research pass

- I could not access the full text of the Organization Science published version (paywalled) or
  the SSRN PDF (403). The abstract was retrieved verbatim; sub-group effect sizes come from the
  authors' public retrospective and are flagged as such in §6.
- Several 2026 arXiv preprints cited here are not peer-reviewed. They are used for *direction*,
  not for precise effect sizes: ArgBench, LLMStructBench, ExtractBench, the Self-Correction
  Illusion paper, and the managerial-ambiguity paper all fall in this class.
- I did not find any published taxonomy that maps cleanly onto your seven categories. If one
  exists it is not discoverable through the sources I searched, which is itself a finding.
- Google's and OpenAI's public capability documentation is largely marketing-shaped and was
  excluded per your constraint. Anthropic's use-case guides were included because they are
  engineering documentation with concrete evaluation guidance, not positioning material.
