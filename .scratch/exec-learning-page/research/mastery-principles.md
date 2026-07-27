# "Principles for mastering AI as a user" — draft checked against primary sources

Research note for the session-one "AI in a nutshell" opening theory block. Compiled 2026-07-26.
Scope: check the draft 4-principle set (context is king / confidently wrong is a mechanism / brief
it like a colleague / product-not-model) against first-party Anthropic and OpenAI end-user
guidance, and note where a well-established secondary framework converges or diverges. Where I
could not find first-party support for a claim, I say so explicitly rather than presenting a
secondary source as vendor-confirmed.

---

## Verdict up front

All four draft principles have solid — in two cases very close to verbatim — first-party
support. No fifth principle appears repeatedly enough across both vendors to demand inclusion.
The count of 4 is defensible, though see §6 for where "context" and "product vs. model" could
arguably be told as one story rather than two. Recommendation is at the end.

---

## 1. "Context is king" — the model only knows what's in the current conversation

**Primary source: Anthropic, Glossary — Context window**
([Glossary — Claude Docs](https://platform.claude.com/docs/en/about-claude/glossary))

> "The 'context window' refers to the amount of text a language model can look back on and
> reference when generating new text. This is different from the large corpus of data the
> language model was trained on, and instead represents a 'working memory' for the model."

**Primary source: Anthropic, Context windows guide**
([Context windows — Claude Docs](https://platform.claude.com/docs/en/build-with-claude/context-windows))

> "The 'context window' refers to all the text a language model can reference when generating a
> response, including the response itself... A larger context window allows the model to handle
> more complex and lengthy prompts, but more context isn't automatically better. As token count
> grows, accuracy and recall degrade, a phenomenon known as *context rot*. This makes curating
> what's in context just as important as how much space is available."

This is a strong, direct, first-party statement of exactly the draft principle: the model's
working knowledge in a given exchange is bounded to what's in the conversation (and system
prompt/tools), separate entirely from what it learned in training — and Anthropic itself flags
that **more context is not free**, which is a useful nuance the draft principle doesn't yet
capture ("context is king" could be read as "more is always better," which Anthropic explicitly
warns against).

**Secondary, but widely repeated framing:** multiple practitioner write-ups of Anthropic's
prompting guidance describe Claude as having "amnesia" between sessions (e.g. CXO Digitalpulse,
["Anthropic's Claude Prompting Guide: Treat AI Like a Smart New Hire With Amnesia"](https://www.cxodigitalpulse.com/anthropics-claude-prompting-guide-treat-ai-like-a-smart-new-hire-with-amnesia/)).
I could not find "amnesia" as Anthropic's own word choice in first-party docs — flagging this as
secondary color, not a vendor quote.

**OpenAI side:** I could not locate a first-party OpenAI end-user page that states the
context-window idea as plainly as Anthropic's. The closest first-party statement is in OpenAI's
"Does ChatGPT tell the truth?" help article (see §2), which notes model responses don't reflect
events past a knowledge cutoff "unless tools are used" — a related but distinct point (training
recency, not per-conversation memory). Treat the context-window framing as **Anthropic-sourced
primarily**, with no first-party OpenAI equivalent confirmed.

**Assessment:** well-supported, first-party, on the Anthropic side. Consider tightening the
principle's wording to include the "more isn't automatically better" nuance.

---

## 2. "Confidently wrong is a mechanism, not a character flaw"

**Primary source: OpenAI research, "Why Language Models Hallucinate"**
([openai.com/index/why-language-models-hallucinate](https://openai.com/index/why-language-models-hallucinate/),
paper: [arXiv:2509.04664](https://arxiv.org/abs/2509.04664), authors Kalai, Nachum, Vempala, Zhang)

This is the single best piece of primary-source support in the whole set, and it maps almost
exactly onto the draft principle's own language:

- The paper's central claim: hallucinations are not mysterious glitches but a predictable
  consequence of how models are **trained and evaluated** — standard benchmarks reward guessing
  over admitting uncertainty.
- The analogy OpenAI itself uses: a model is like a student taking a multiple-choice exam. If it
  doesn't know an answer and guesses, it has some chance of being right; if it says "I don't
  know," it scores zero. Existing accuracy-based leaderboards therefore **train models to bluff
  confidently rather than abstain**.
- OpenAI's own proposed fix is scoring-based (penalize wrong answers, not just reward right ones,
  score abstention neutrally) — i.e., OpenAI frames this as a systemic incentive problem, not a
  trait of any one model or a "flaw" to be shamed.

This directly substantiates "mechanism, not character flaw" — it is OpenAI's own framing, not an
inference.

**Primary source: Anthropic's Constitution — calibrated confidence**
([Claude's Constitution](https://www.anthropic.com/constitution))

> "Claude tries to have calibrated uncertainty in claims based on evidence and sound reasoning...
> It acknowledges its own uncertainty or lack of knowledge when relevant, and avoids conveying
> beliefs with more or less confidence than it actually has."

This is Anthropic's normative commitment (what Claude *should* do), which is a good complement to
OpenAI's descriptive/mechanistic explanation of *why* it sometimes doesn't. Anthropic's HHH
glossary entry frames it the same way: "An honest AI will give accurate information, and not
hallucinate or confabulate. It will acknowledge its limitations and uncertainties when
appropriate" ([Glossary — Claude Docs](https://platform.claude.com/docs/en/about-claude/glossary)).

**Primary source: Anthropic, Reduce hallucinations**
([Reduce hallucinations — Claude Docs](https://platform.claude.com/docs/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations))

> "Even the most advanced language models, like Claude, can sometimes generate text that is
> factually incorrect or inconsistent with the given context." Recommended user-facing
> countermeasure #1: "**Allow Claude to say 'I don't know'**: Explicitly give Claude permission to
> admit uncertainty. This simple technique can drastically reduce false information." And, in the
> closing note: "while these techniques significantly reduce hallucinations, they don't eliminate
> them entirely. **Always validate critical information, especially for high-stakes decisions.**"

**Primary source: Anthropic support (end-user help center)**
([Claude is providing incorrect or misleading responses — Claude Help Center](https://support.claude.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on))
advises users to "not rely on Claude as a singular source of truth," to check underlying/cited
sources, and notes the quality of Claude's answer depends on the quality of what it's grounded in.

**Primary source: OpenAI Help Center, "Does ChatGPT tell the truth?"**
([help.openai.com/en/articles/8313428](https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth)
— direct WebFetch to this page returned HTTP 403; content below is corroborated via search-result
snippets that quote the page, not independently verified against raw page text, so flag
accordingly): OpenAI's advice is reported as "use ChatGPT as a first draft, not a final source,"
and to verify quotes, data, technical information, and references. This matches the draft
principle's "verify anything you'd stake your name on" almost word for word, but **I'm flagging
it as secondary-sourced** since the fetch was blocked.

**Assessment:** very well supported, first-party, on both sides — arguably the single
best-evidenced principle in the set, thanks to OpenAI's own hallucination paper providing the
exact "mechanism, not flaw" framing.

---

## 3. "Brief it like you'd brief a new colleague"

**Primary source: Anthropic, Prompting best practices**
([Prompting best practices — Claude Docs](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices))

This is a near-verbatim match to the draft principle — closer than any other single source found
in this research pass:

> "**Be clear and direct.** Claude responds well to clear, explicit instructions... **Think of
> Claude as a brilliant but new employee who lacks context on your norms and workflows.** The more
> precisely you explain what you want, the better the result."
>
> "**Golden rule:** Show your prompt to a colleague with minimal context on the task and ask them
> to follow it. If they'd be confused, Claude will be too."
>
> "**Add context to improve performance.** Providing context or motivation behind your
> instructions, such as explaining to Claude why such behavior is important, can help Claude
> better understand your goals and deliver more targeted responses."

This is Anthropic's own "golden rule," and it is literally the colleague-briefing framing —
this principle should be presented to the executive as effectively a direct quote from Anthropic,
not a paraphrase our course invented.

**Primary source: OpenAI Help Center, "Prompt engineering best practices for ChatGPT"**
([help.openai.com/en/articles/10032626](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt))
— direct fetch also returned 403; via search snippet, key points: "Ensure your prompts are clear,
specific, and provide enough context... avoiding ambiguity," "use descriptive adjectives to
indicate tone," and treat prompting as **iterative** — write, review the response, refine. Flagging
the exact wording as secondary-sourced due to the blocked fetch, but the substance (clarity,
specificity, context, iteration) is consistent with Anthropic's first-party framing above and
with OpenAI's own published "six strategies" document below.

**Primary source: OpenAI, "Six strategies for getting better results" (GPT best practices guide)**
— widely reported first-party OpenAI guidance (originally an OpenAI Cookbook / API docs page,
mirrored at [OpenAI API prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)):
1. Write clear instructions, 2. Provide reference text, 3. Split complex tasks into simpler
subtasks, 4. Give the model time to "think," 5. Use external tools, 6. Test changes
systematically. "Write clear instructions" is explicitly glossed as "provide details, examples,
and specify the steps and format you want" — the same clarity/specificity core as Anthropic's
"golden rule," aimed instead at API developers rather than end users, so treat as strong
first-party support for the *underlying idea* even though the audience differs from our
non-technical-executive target.

**Assessment:** the best-supported principle of the four — Anthropic's own wording ("brilliant
but new employee," "golden rule... show your prompt to a colleague") is close enough to the draft
principle that the course could simply cite Anthropic directly rather than paraphrase.

---

## 4. "It's a product built on a model, not the model itself"

**Primary source: Anthropic, Glossary**
([Glossary — Claude Docs](https://platform.claude.com/docs/en/about-claude/glossary)) — this page
draws the model/product line explicitly, in the LLM and fine-tuning entries:

> "Claude is a conversational assistant **based on** a large language model that has been
> **fine-tuned and trained using RLHF** to be more helpful, honest, and harmless."
>
> "**Claude is not a bare language model; it has already been fine-tuned to be a helpful
> assistant.**"
>
> Pretraining entry: "These pretrained models are not inherently good at answering questions or
> following instructions... Fine-tuning and RLHF are used to refine these pretrained models,
> making them more useful for a wide range of tasks."

This is direct first-party confirmation of the "layer on top of a raw model" claim, specifically
naming the two mechanisms (fine-tuning, RLHF) the draft principle gestures at generically. It does
not, on this page, discuss the **system prompt** as part of that layer — that's sourced
separately below.

**Primary source: Anthropic, System prompts (release notes)**
([System prompts — Claude Docs](https://platform.claude.com/docs/en/release-notes/system-prompts))
confirms that claude.ai and the mobile apps inject a system prompt (e.g., current date, tool
availability) at the start of every conversation — i.e., what the end user experiences as "Claude"
already includes an invisible instruction layer before the user's first message, distinct from the
underlying model weights.

**OpenAI side — weaker first-party support than Anthropic's:** OpenAI Academy's "Models" resource
([academy.openai.com — Models](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/models))
does draw the product/model distinction at a basic level: "A model is a system trained on patterns
of language, math, code, and reasoning so it can generate helpful responses to your questions or
tasks," and "Models aren't unique to ChatGPT — many other AI tools and applications are built on
large language models." However, **this page does not go on to explain fine-tuning, system
prompts, or RLHF as the layer that turns a raw model into ChatGPT** — that mechanism-level
explanation is confirmed first-party only on the Anthropic side. Treat the "product = model +
fine-tuning + system prompt + tools" claim as **solidly Anthropic-sourced, only partially
OpenAI-sourced** (OpenAI confirms the product/model split exists but not the mechanics of the
layer).

**Assessment:** real and correct, but the weakest-evidenced of the four on the OpenAI side —
worth knowing before presenting it as "both vendors say this," since only Anthropic's
documentation spells out the mechanism (fine-tuning + RLHF + system prompt).

---

## 5. Does a canonical count of principles exist? Is 4 the right number?

No single first-party page from either vendor presents "N principles for using an AI assistant"
as a named, numbered list aimed at lay users. What exists instead, on both sides, are **numbered
lists of prompting techniques** (a narrower scope than our four principles), and these lists
don't converge on a stable number:

- **OpenAI's own "six strategies" guide:** 6 items (clear instructions, reference text, split
  tasks, give time to think, use tools, test systematically) —
  [OpenAI API prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Anthropic's "Prompting best practices" page:** organizes general technique guidance under
  headings that amount to 5 broad areas — clarity/examples, XML structuring, role prompting,
  thinking, prompt chaining —
  [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices).
- **Secondary, but a well-cited practitioner framework:** the O'Reilly book *Prompt Engineering
  for Generative AI* states "Five Principles of Prompting": Give Direction, Specify Format,
  Provide Examples, Evaluate Quality, Divide Labor
  ([oreilly.com](https://www.oreilly.com/library/view/prompt-engineering-for/9781098153427/ch01.html)).
  This is secondary (a published book, not vendor documentation) but is one of the more
  frequently cited attempts at a canonical count in this space.
- **Secondary, academic-library framework:** UNC/UC Davis library guides cite a "CLEAR" framework
  (Concise, Logical, Explicit, Adaptive, Reflective) from Leo Lo (UVA) — again secondary, and again
  5 items, not 4.

None of these are the same list as our 4 principles — they are all narrower ("how to write a good
prompt") where ours is broader ("how to think about using an assistant day to day," of which
prompting technique is only one piece, alongside context-window awareness, calibrated trust, and
product awareness). So there is **no authoritative precedent to match our count against
directly** — the comparison in this section is "count of prompting-technique lists," not "count of
user-mastery principles," because the latter doesn't appear to exist as a named vendor artifact.
Given that, 4 is neither validated nor contradicted by an external canonical number; it's simply a
different, and broader, category of list than what vendors publish.

---

## 6. Is anything significant missing from the draft?

Checked against everything gathered above, one candidate recurs but I'm labeling it a **possible
restructuring, not a missing principle**: both vendors' primary sources repeatedly pair "the model
doesn't remember/know everything automatically" (context) with "you have to tell it what you want
and why" (briefing) — e.g., Anthropic's context-window doc and its "add context to improve
performance" guidance sit right next to each other in the same document family, and both use the
word "context" for two related but distinct things (the conversation's contents vs. the
motivation/background you supply in a prompt). This is worth flagging to the facilitator as a
possible source of confusion in the German-language delivery (two different senses of "Kontext"),
but it does not surface a fifth principle that both vendors independently push — it's the same two
principles (1 and 3) sharing a word, not new content.

No first-party source from either vendor surfaced a distinct, repeated principle outside the four
already drafted (e.g., nothing about "iteration/refinement as a named principle" rose to the level
of a standalone pillar in vendor docs — it appears as a sub-tactic within "brief it like a
colleague" in both OpenAI's and Anthropic's technique lists, not as its own principle).

---

## Recommendation

Keep the 4 principles as drafted; do not add or swap any of them. Draft principles 2 and 3 are
each backed by strong, close-to-verbatim first-party language — OpenAI's own hallucination paper
frames "confidently wrong" as a scoring-incentive mechanism in almost exactly the terms the draft
uses, and Anthropic's "brilliant but new employee" / "golden rule: show your prompt to a colleague"
language is close enough to principle 3 that it can be presented as a near-direct citation rather
than a paraphrase. Principle 1 (context) is solidly Anthropic-sourced with no first-party OpenAI
equivalent found, and principle 4 (product vs. model) is well-supported by Anthropic's glossary
and system-prompt docs but only thinly by OpenAI's — so for principles 1 and 4, note in
facilitator materials that the primary evidence leans Anthropic-heavy, and lean on that vendor's
language when citing sources live in the session. No fifth principle recurs consistently enough
across both vendors to warrant expansion, and no first-party "canonical N" precedent exists to
argue for a different count — the vendor lists that do exist (5–6 items) describe prompting
technique specifically, a narrower and different category from the four broader mastery
principles this course is teaching.
