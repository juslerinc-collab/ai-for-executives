# "AI in a Nutshell" — grounding research for session-one theory block

Research note for the 3-hour executive AI enablement session. Compiled 2026-07-26.
Scope: primary-source grounding for five sub-topics the facilitator wants to cover in
~30 minutes of opening theory, plus a synthesis on how well-regarded educational sources
pitch this material to non-technical audiences. Where I could not find a first-party
primary source, I say so explicitly rather than presenting a secondary source as fact.

---

## 1. What is an LLM, how does it work (conceptually, non-mathematically)

**Primary source: Anthropic's official glossary** ([Glossary — Claude Docs](https://platform.claude.com/docs/en/about-claude/glossary))

- **LLM, defined by Anthropic:** "Large language models (LLMs) are AI language models with many
  parameters that are capable of performing a variety of surprisingly useful tasks. These models
  are trained on vast amounts of text data and can generate human-like text, answer questions,
  summarize information, and more."
- **Pretraining, defined by Anthropic:** "Pretraining is the initial process of training language
  models on a large unlabeled corpus of text. In Claude's case, autoregressive language models
  (such as Claude's underlying model) are pretrained to predict the next word, given the previous
  context of text in the document. These pretrained models are not inherently good at answering
  questions or following instructions, and often require deep skill in prompt engineering to
  elicit desired behaviors."
- This is the cleanest first-party statement of the core mechanic: **next-word prediction over a
  huge training corpus**, and it explicitly separates that raw capability from
  instruction-following behavior (which is added later — see §3).

**Primary source: Anthropic research blog, lay-audience framing of internal mechanics**
([Tracing the thoughts of a large language model](https://www.anthropic.com/research/tracing-thoughts-language-model))

This is Anthropic's own interpretability research written for a general audience, and it is the
best first-party source for *conceptually* explaining that an LLM is not merely predicting the
literal next word with no forward planning:

- "Claude writes text one word at a time" — stated as the surface-level behavior — but Anthropic
  then shows this is not the whole story.
- On poetry generation: "Claude will plan what it will say many words ahead, and write to get to
  that destination" — their example shows the model identifying candidate rhyming words *before*
  writing the line that leads to them.
- On arithmetic: "Claude employs multiple computational paths that work in parallel. One path
  computes a rough approximation of the answer and the other focuses on precisely determining the
  last digit" — used to illustrate that the model has learned internal strategies, not a lookup
  table or an explicit taught algorithm.
- Anthropic's own framing device for this research: building "a kind of AI microscope that will
  let us identify patterns of activity and flows of information" — explicitly borrowed from
  neuroscience, i.e. Anthropic itself reaches for a biological-inspection analogy rather than a
  mathematical one when addressing a general audience.

**Gap / caveat:** I could not retrieve a clean, current, first-party OpenAI equivalent explainer.
`openai.com/policies/how-chatgpt-and-our-foundation-models-are-developed` and
`help.openai.com/en/articles/7842364` both returned HTTP 403 to automated fetching. A web-search
snippet (not independently verified against the primary text) attributes to that OpenAI page:
"During training, the model analyzes relationships within data and uses that understanding to
predict the next most likely word when generating a response" — directionally consistent with
Anthropic's framing, but **flagged as secondary-sourced** since I could not confirm it against the
original page text.

**Technical grounding (primary, but not for direct use with the executive):** The transformer
architecture that underlies both companies' models originates in Vaswani et al., *"Attention Is
All You Need"* (2017). Anthropic's own context-window documentation (see §5) references the
same attention mechanism directly when explaining *why* context is limited — "every token attends
to every other token across the entire context," producing "n² pairwise relationships for n
tokens" ([Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)).
This is useful as your own backstop for accuracy but should not surface in the lay-audience
material — see §6.

---

## 2. AI vs. Machine Learning vs. LLM — the accurate distinction

**No single first-party Anthropic or OpenAI page defines all three terms side by side as a
taxonomy.** Anthropic's glossary (linked above) defines "LLM" but does not define "artificial
intelligence" or "machine learning" as standalone entries. I could not find an OpenAI glossary
page defining these three terms together either. This is a genuine gap in vendor-native
documentation — the terminology hierarchy has to be sourced from academic/standards bodies.

**Best available anchor — academic consensus (secondary in the sense of not being
Anthropic/OpenAI, but this is the canonical textbook, not a blog explainer):**
Russell & Norvig, *Artificial Intelligence: A Modern Approach* — defines AI in terms of
**intelligent agents**: systems that perceive their environment and act to achieve goals/maximize
an objective. Under this framing, **machine learning is one implementation approach among
several** for building such agents (the alternative being explicitly hand-coded/symbolic
approaches) — i.e., ML is a subset of AI defined by *how* the system acquires its behavior
(learned from data and experience, rather than hand-programmed rule by rule).

**Standards-body anchor:** ISO/IEC 22989:2022 ("Information technology — Artificial intelligence —
Concepts and terminology") is the closest thing to a clean, citable international standard
defining this vocabulary, and per secondary summaries defines machine learning as "a process using
computational algorithms that improve through experience." **I could not access the ISO standard's
primary text directly** (it sits behind ISO's paywall) — this is reported via secondary
summaries (ANSI blog, Nemko, arc42), so treat the exact wording as unverified, only the existence
and rough content of the standard as reliable.

NIST publishes a parallel effort ("The Language of Trustworthy AI: An In-Depth Glossary of
Terms" via its [AI Resource Center glossary](https://airc.nist.gov/glossary/)) but the actual term
definitions live in a linked spreadsheet/PDF rather than the page itself, and I was not able to
pull the underlying definitions in this pass — flagged as **unconfirmed**, not fabricated.

**Where this leaves the accurate distinction, stated conservatively:**
- **AI** = the broad field/goal: building systems that perform tasks associated with human
  intelligence (Russell & Norvig's "intelligent agent" framing; loosely mirrored in NIST's
  framing of AI systems generating "predictions, recommendations, or decisions" per secondary
  summaries of the NIST AI RMF).
- **Machine learning** = a specific *method* for building AI systems: instead of hand-coding
  rules, the system learns patterns from data/experience. ML is a subset of AI defined by
  approach, not by capability level.
- **LLM** = a specific *type* of machine-learned model: a neural network (transformer
  architecture) trained via next-token prediction on very large text corpora (Anthropic glossary,
  above). LLMs are a subset of ML models, which are a subset of AI systems.

This nesting (AI ⊃ ML ⊃ LLM) is the standard hierarchy taught in essentially every serious source
I found, first-party or academic — the disagreement in the literature is about precise boundary
definitions, not about the containment relationship itself.

---

## 3. The "layers on top" of an LLM — what ChatGPT/Claude are as products

**Primary source: Anthropic's glossary**, which is explicit that the deployed product and the raw
model are different things:

- "Claude is not a bare language model; it has already been fine-tuned to be a helpful
  assistant." (Fine-tuning entry)
- "Claude is a conversational assistant based on a large language model that has been fine-tuned
  and trained using RLHF to be more helpful, honest, and harmless." (LLM entry)
- **Fine-tuning, defined:** "the process of further training a pretrained language model using
  additional data. This causes the model to start representing and mimicking the patterns and
  characteristics of the fine-tuning dataset."
- **RLHF, defined:** "a technique used to train a pretrained language model to behave in ways
  that are consistent with human preferences... Human feedback consists of ranking a set of two
  or more example texts, and the reinforcement learning process encourages the model to prefer
  outputs that are similar to the higher-ranked ones. Claude has been trained using RLHF to be a
  more helpful assistant."
- **HHH** (Anthropic's own stated design target, distinct from the raw pretrained model's
  behavior): "helpful," "honest," "harmless" — defined in the same glossary as the explicit goal
  layered onto the base model.

**System prompts as a further layer (primary, Anthropic API docs — context-window page):**
Anthropic's own docs state plainly that "everything in the request counts toward the context
window: the system prompt, every message in `messages`... and your tool definitions" — confirming
that the system prompt is a distinct, developer/product-controlled layer sitting outside the
user's visible conversation, injected before the model ever sees the user's message.

**Tool use as a further layer:** covered in Anthropic's agents documentation (see §4) — tools are
explicitly described as something a product wraps *around* an LLM call, not something inherent to
the base model.

**OpenAI side (secondary-sourced, flagged):** I could not get past a 403 on OpenAI's own
"system message" / Custom Instructions documentation. A community-forum summary (not
Anthropic/OpenAI first-party) states that in the ChatGPT product UI, the equivalent lay-facing
feature is called "Custom Instructions," while the raw API exposes the same mechanism as a
`system` role message — i.e., ChatGPT-the-product wraps the same "system prompt" concept Anthropic
documents, just under different product-facing naming. **This should be treated as directionally
correct but not verified against OpenAI's own text.**

**Net for the session:** The accurate, defensible claim is: *"ChatGPT"/"Claude.ai" = (a) a
pretrained base model, plus (b) fine-tuning/RLHF that shapes its default behavior, plus (c) a
system prompt injected by the company that isn't visible to the user, plus (d) a chat interface,
plus, increasingly, (e) tool access.* Each of (b)–(e) is a distinct "productization" layer, and
all are independently confirmed as real, separate steps by Anthropic's own documentation.

---

## 4. What is an "agent" — how it differs from a chatbot / plain LLM call

**Primary source: Anthropic, "Building Effective AI Agents"**
([anthropic.com/engineering/building-effective-agents](https://www.anthropic.com/engineering/building-effective-agents))
— this is exactly the canonical first-party piece the task brief anticipated, and it exists.

Key verbatim definitions:
- **Workflows** (explicitly *not* what Anthropic calls agents): "systems where LLMs and tools are
  orchestrated through predefined code paths."
- **Agents:** "systems where LLMs dynamically direct their own processes and tool usage,
  maintaining control over how they accomplish tasks."
- On the boundary with a plain LLM call: "Agents begin their work with either a command from, or
  interactive discussion with, the human user. Once the task is clear, agents plan and operate
  independently, potentially returning to the human for further information or judgment... gaining
  'ground truth' from the environment at each step (such as tool call results or code execution) to
  assess its progress."
- The compact one-line summary Anthropic itself offers: "Agents are typically just LLMs using
  tools based on environmental feedback in a loop."

This gives a clean, accurate, non-technical-safe distinction for the session: **a plain LLM
call/chatbot turn is a single input → single output exchange; an agent is a loop** — the model
takes an action (often a tool call), observes what happened in the real world/environment as a
result, and decides the next step itself, repeating until the task is done, without a human
manually re-prompting at each step.

**OpenAI side:** OpenAI has published a parallel document, *"A Practical Guide to Building
Agents"* (PDF, [cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)).
I confirmed this URL is genuine and hosted on OpenAI's own CDN, but the PDF's text layer did not
extract cleanly through automated fetching (image/FlateDecode-heavy encoding), so I cannot give
verbatim quotes with confidence. A web-search summary attributes to it: agents are "systems that
independently accomplish tasks on your behalf," able to "perform workflows on the users' behalf
with a high degree of independence." **This is consistent with Anthropic's framing** (autonomy +
tool-mediated task completion vs. a single exchange) but should be treated as
paraphrase-confidence, not verbatim-confidence, until someone opens the PDF directly.

**Consensus point across both vendors:** the defining features of "agent" as a term of art are
(1) tool use, (2) multi-step autonomy — the system decides its own next step rather than following
a fixed script, and (3) a feedback loop where each step's real-world result informs the next
decision. A single question-and-answer chatbot exchange has none of these three properties.

---

## 5. Why "context is king" — what a context window is and why it matters

**Primary source: Anthropic glossary:**
"The 'context window' refers to the amount of text a language model can look back on and
reference when generating new text. This is different from the large corpus of data the language
model was trained on, and instead represents a 'working memory' for the model."

**Primary source: Anthropic's dedicated context-windows doc**
([Context windows — Claude Docs](https://platform.claude.com/docs/en/build-with-claude/context-windows)):
- "The 'context window' refers to all the text a language model can reference when generating a
  response, including the response itself... represents a 'working memory' for the model."
- Critically, Anthropic states plainly that **bigger is not simply better**: "A larger context
  window allows the model to handle more complex and lengthy prompts, but more context isn't
  automatically better. As token count grows, accuracy and recall degrade, a phenomenon known as
  *context rot*. This makes curating what's in context just as important as how much space is
  available."
- Everything counts against the budget: "Everything in the request counts toward the context
  window: the system prompt, every message in `messages` (including tool results, images, and
  documents), and your tool definitions. The output Claude generates for the turn... counts too."
- Practically, once the limit is hit: for older models the API simply errors ("prompt is too
  long"); for newer models generation can stop mid-response once it hits the ceiling
  (`model_context_window_exceeded`).

**Primary source: "Effective context engineering for AI agents"**
([anthropic.com/engineering/effective-context-engineering-for-ai-agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents))
— explains *why* the degradation happens mechanically, in terms accessible without heavy math:
- "LLMs have an 'attention budget' that they draw on when parsing large volumes of context" — a
  scarcity framing.
- Root cause: the transformer's attention mechanism means "every token [attends] to every other
  token across the entire context," creating "n² pairwise relationships for n tokens" — so cost
  and interference grow much faster than the amount of text does.
- **Anthropic's own human-cognition analogy**, useful for the lay audience: humans have "limited
  working memory capacity," and just as people don't memorize entire libraries but instead build
  "external organization and indexing systems," well-engineered context management for an LLM
  mirrors that same principle rather than simply cramming everything in.

**Practical takeaway for "someone briefing it" (directly usable framing, grounded in the above):**
the model has *no memory or awareness beyond what's physically present in the current context
window* — no persistent memory of past conversations (absent a separate product feature), no
access to anything not explicitly included by the user, the system prompt, or a tool result. This
is precisely why "context is king": the quality of what an executive puts into the conversation —
not the model's general "intelligence" — is often the single largest lever on output quality, and
the Anthropic docs are explicit that more context can actively *hurt* if it's not curated
(context rot).

**OpenAI side (secondary, flagged):** OpenAI's own key-concepts documentation
([platform.openai.com/docs/concepts](https://developers.openai.com/api/docs/concepts), which
redirects to developers.openai.com) confirms the token/context-length constraint mechanically:
"for a text generation model the prompt and the generated output combined must be no more than
the model's maximum context length," and gives the rough conversion "1 token is approximately 4
characters or 0.75 words for English text." This is first-party OpenAI text (successfully
fetched), but OpenAI's page is written for developers, not lay audiences, and does not include an
analogy comparable to Anthropic's working-memory framing.

---

## 6. What a lay-audience explanation typically keeps vs. cuts

Synthesizing across the sources actually retrieved above (Anthropic's glossary, its context and
agents engineering posts, its interpretability research post, and OpenAI's developer docs):

**What good non-technical explainers keep:**
- **The "working memory" analogy for context** — Anthropic uses this exact phrase itself even in
  developer-facing docs, which signals it's considered accurate enough to stand without caveats,
  not just a dumbed-down simplification.
- **The idea that "more isn't automatically better"** for context — this is stated directly by
  Anthropic even to a technical audience, and it survives simplification well because it's
  actionable and counter-intuitive (useful "surprise" content for an executive audience).
- **The behavioral, functional distinction between a raw model and a product** (pretrained →
  fine-tuned → system prompt → interface → tools) — Anthropic states each of these as separate,
  named steps even in a two-paragraph glossary entry, which suggests the *staged* framing, not the
  underlying math, is what carries the explanatory weight.
- **The loop framing for "agent"** — Anthropic's own one-line summary ("LLMs using tools based on
  environmental feedback in a loop") is itself already a lay-audience-safe compression of a more
  technical idea; it does not need further dumbing down, it needs a business-relevant example
  layered on top.
- **Concrete illustrative examples over formal mechanism** — Anthropic's interpretability post
  reaches for a poetry-writing example and an arithmetic example rather than describing attention
  mathematically; both are memorable, verifiable-feeling ("oh, I can see why it would need to plan
  the rhyme"), and require no technical vocabulary.

**What good explainers deliberately cut:**
- **The actual attention mechanism / matrix math.** Anthropic's own technical audience content
  gestures at "n² pairwise relationships" only when justifying *why* context rot happens; it is
  never presented as something the reader needs to compute or visualize in full.
  Zero first-party lay content found in this research surfaces the attention-weights math itself.
- **Precise numerical thresholds** (exact token counts, parameter counts). These appear only in
  developer-facing docs (context-window sizes by model, token-to-character ratios) — never in the
  interpretability/lay-audience post.
- **Formal AI/ML/LLM taxonomy citations.** Notably, *neither* Anthropic nor OpenAI publishes a
  side-by-side "AI vs ML vs LLM" definition for general readers — this suggests well-regarded
  vendor communicators treat the terminology-hierarchy question as a side issue not worth
  belaboring for a product audience, in contrast to how central the facilitator's brief treats it.
  If the session leans on this distinction, it will be drawing more from academic/standards
  sources (Russell & Norvig, ISO/IEC 22989) than from anything Anthropic or OpenAI themselves
  publish for a general reader.
- **Training infrastructure detail** (data pipelines, compute, RLHF's reward-model mechanics
  beyond "rank two outputs, prefer the better one"). Anthropic's own RLHF glossary entry stops at
  exactly the level of detail useful for understanding *what changed*, not *how the training loop
  is implemented*.

**Implication for the session design:** the safest and most "on-brand" (i.e., consistent with how
Anthropic itself talks about its own product) way to hit all five of the facilitator's points in
~30 minutes is to lean on (a) the staged-layers framing for LLM→product, (b) the loop framing for
agents, (c) the working-memory/context-rot framing for context, and (d) two or three concrete
illustrative examples (poetry planning, arithmetic parallel paths) rather than any mechanistic or
mathematical description — and to treat the AI/ML/LLM terminology question as a brief, standalone
containment diagram (AI ⊃ ML ⊃ LLM) rather than something either vendor has already pre-packaged
for a lay audience, since neither has.

---

## Sources referenced

- [Glossary — Claude Docs](https://platform.claude.com/docs/en/about-claude/glossary) (Anthropic, primary)
- [Context windows — Claude Docs](https://platform.claude.com/docs/en/build-with-claude/context-windows) (Anthropic, primary)
- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (Anthropic, primary)
- [Building Effective AI Agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic, primary)
- [Tracing the thoughts of a large language model](https://www.anthropic.com/research/tracing-thoughts-language-model) (Anthropic, primary)
- [Key concepts — OpenAI API docs](https://developers.openai.com/api/docs/concepts) (OpenAI, primary; redirect target of platform.openai.com/docs/concepts)
- [A Practical Guide to Building Agents (PDF)](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) (OpenAI, primary URL confirmed; text extraction failed — quotes below primary-URL confidence)
- Vaswani et al., "Attention Is All You Need" (2017) — referenced indirectly via Anthropic's own explanation of attention/context rot; not independently re-fetched in this pass
- Russell & Norvig, *Artificial Intelligence: A Modern Approach* — academic canonical source for AI/ML containment relationship (accessed via secondary summaries only; not independently verified against book text)
- ISO/IEC 22989:2022 — cited via secondary summaries only (ANSI blog, Nemko, arc42); primary standard text not accessible (paywalled)
- NIST AI Resource Center glossary landing page (https://airc.nist.gov/glossary/) — definitions live in a linked spreadsheet not retrieved in this pass; **flagged as unconfirmed**
- `openai.com/policies/how-chatgpt-and-our-foundation-models-are-developed` and `help.openai.com/en/articles/7842364` — both returned HTTP 403; content **not independently verified**, any claims attributed to these are secondary-sourced only
