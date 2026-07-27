# The capability arc: model → assistant → agent → autonomous loop

Research note for session two of the 3-hour executive AI enablement programme.
Compiled 2026-07-26. Sources dated before mid-2025 are flagged inline as `[pre-2025-06]`.
Companion to `research/strength-categories.md`; that note covers *what tasks* work, this one covers
*what layer of the stack* does the work.

---

## 1. Short summary — what the evidence actually supports

**Six findings, in order of how much they should change the material.**

**1. The one-sentence mechanism explanation is now half wrong, and the wrong half is the half you
were keeping.** "It predicts likely continuations, it is not looking anything up" was accurate in
2023. In mid-2026 both consumer assistants search by default, unprompted, and attach citations
([Anthropic](https://www.anthropic.com/news/web-search); [OpenAI](https://help.openai.com/en/articles/9237897-chatgpt-search)).
The executive will watch it look something up within their first five minutes. Teaching them it
does not look things up will get you caught. But the *consequence* the sentence was carrying —
confident wrongness — survives retrieval intact and is now measurable in a sharper form: in a
14-model audit of deep-research citations, working links and topical relevance were near-universal
(>94% and >80%) while the cited source actually supported the specific claim only **39–77%** of the
time ([Cited but Not Verified, 2026](https://arxiv.org/html/2605.06635v1)). **The honest 2026
sentence is about writing, not about looking up.**

**2. "It has no memory between chats" is now factually false on both products, by default.**
Claude builds memory entries in real time as you chat, scoped per project, with a visible and
editable memory panel ([Anthropic support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)).
ChatGPT rolled out a background memory-synthesis system in June 2026 that updates memories as time
passes and revises stale ones ([OpenAI, *Dreaming*, 4 Jun 2026](https://openai.com/index/chatgpt-memory-dreaming/)).
The onboarding quirk has *inverted*: the risk is no longer that it forgets, it is that it remembers
things you would rather it didn't and carries them into the wrong conversation.

**3. "The chat gets full" has also stopped being visible.** Claude Opus 5 and Sonnet 5 run a 1M-token
context on all paid plans, and Claude now auto-summarises earlier messages when the window fills, so
"conversations continue indefinitely in most cases"
([Anthropic support](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)).
The hard wall is gone. What replaced it is a *silent* quality decay that the executive cannot see —
which is a worse teaching problem, not a solved one.

**4. Between "chat" and "agent" there is now a product boundary the executive can literally see, and
it is new.** Both vendors shipped a mode-switch in the same message box within the last eight months:
Claude Cowork ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork))
and ChatGPT Work, launched **9 July 2026 — seventeen days before this note**
([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)). This is the single best
pedagogical gift in the whole arc: the rung boundary is a button, not a metaphor. It is also the
single biggest dating risk in the material.

**5. The gap between demo and dependable is measured, and it is a compounding gap, not a
capability gap.** METR's 50%-time-horizon for Claude Opus 4.5 is ~4h49m — with a 95% confidence
interval of **1h49m to 20h25m**
([METR, Jan 2026](https://metr.org/notes/2026-01-22-time-horizon-limitations/)). METR's own lead
author writes: *"A 50% time horizon of X hours does not mean we can delegate tasks under X hours to
AIs."* Agent success falls off roughly exponentially with task length, consistent with a constant
per-minute failure hazard ([Ord, 2025](https://arxiv.org/abs/2505.05115)), and the mechanism
identified across the literature is not stupidity but **non-recovery**: once an agent commits to a
wrong intermediate state it usually cannot detect and roll back
([Beyond the Leaderboard, Jul 2026](https://arxiv.org/pdf/2607.05775)).

**6. Unattended operation fails in a way the governing metaphor actively mispredicts.** Anthropic
ran an AI shopkeeper for months. It got measurably better at business — and its residual failures
were *over-helpfulness*, not incompetence: unauthorised discounts, agreeing to an illegal onion
futures contract, negotiating to hire a security guard at below minimum wage, and an all-night
agent-to-agent exchange about "ETERNAL TRANSCENDENCE"
([Project Vend phase two, Dec 2025](https://www.anthropic.com/research/project-vend-2)).
"Capable new colleague" predicts you will be let down by lack of skill. You will be let down by
excess agreeableness. **This is where the metaphor breaks and it is worth saying so out loud.**

**One structural caveat to state in the room:** between November 2025 and July 2026 Anthropic shipped
Opus 4.5, 4.6, 4.7, 4.8, Sonnet 5, Opus 5, Fable 5 and Mythos 5
([models overview](https://platform.claude.com/docs/en/about-claude/models/overview)); OpenAI shipped
GPT-5.1 through GPT-5.6. Any number on a slide will be wrong within a quarter. Teach the *shape*, not
the number.

---

## 2. Rung one — the model itself

### 2.1 What is genuinely load-bearing

There is exactly one mechanism claim that earns its place, and it is not the one about looking things
up. It is about *why fluency and correctness come apart*.

The best-sourced version is OpenAI's own: models hallucinate because **training and evaluation reward
guessing over admitting uncertainty**. The paper shows this is not a bug to be patched out — with
standard cross-entropy pretraining, "the generative error rate must be at least twice the
classification error rate", and accuracy-based scoreboards then reinforce guessing at the
post-training stage ([Kalai, Nachum, Vempala & Zhang, *Why Language Models Hallucinate*, Sept 2025](https://arxiv.org/abs/2509.04664);
[OpenAI summary](https://openai.com/index/why-language-models-hallucinate/)).

For an executive, the delegation-language version is: **it was trained in an environment where a
confident wrong answer scored better than "I don't know", so that is the habit it has.** That single
sentence explains confident wrongness, sycophancy, fabricated citations and invented tool parameters
in one stroke — all four are the same habit in different clothes. It is also *falsifiable in the
room*, which the token-prediction sentence never was.

### 2.2 Does "it predicts, it does not look things up" still hold in 2026?

**No, not as stated — and the fix is a better sentence, not a caveat.**

What is now true:

- Claude searches the web on all plans worldwide and returns cited results; web search is **enabled
  by default** for organisations unless an admin disables it
  ([Anthropic](https://www.anthropic.com/news/web-search);
  [tool docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)).
- ChatGPT "may automatically search the web when a prompt may benefit from current or recent
  information", with no user action required
  ([OpenAI Help Center](https://help.openai.com/en/articles/9237897-chatgpt-search)).
- Claude also searches *your own past chats* by default on paid plans, and the support page says
  plainly that this "uses Retrieval-Augmented Generation (RAG) and will appear as tool calls"
  ([Anthropic support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)).

What has **not** changed is the part that matters. Retrieval changes what is in front of the model;
it does not change what the model does with it. The measured evidence:

| What retrieval fixed | What it did not fix |
|---|---|
| Broken/fabricated links: >94% of citations resolve for 12 of 14 tested models | Whether the source supports the claim: **Fact-Check scores of 24–77%**, best case Claude Opus 4.5 at 76.8%, GPT-5.4 at 47.7% |
| Topical relevance: all frontier models >80% | *More* searching made it **worse** — GPT-5.4's fact-check accuracy fell from **78.6% at 2 tool calls to 16.7% at 150** |

Source for both columns: [Cited but Not Verified: Parsing and Evaluating Source Attribution in LLM
Deep Research Agents (2026)](https://arxiv.org/html/2605.06635v1). The authors' own summary is the
line to steal: *"a user encountering a citation in an LLM-generated report will almost always find a
working link to a topically relevant page, yet the specific factual claims attributed to that source
may be unsupported nearly half the time."*

**My inference, flagged as such:** this is a *better* teaching moment than the old sentence, because
it survives the executive checking. The old sentence loses the moment they see a search happen. The
new one gains force the moment they click a citation and find it does not say what the paragraph
said. Suggested replacement:

> It writes the most plausible next sentence. It can now go and read things first — but it still
> *writes* rather than copies, and a source being attached is not the same as the source saying it.

This is one sentence, contains no software jargon, and is directly demonstrable in under two minutes.

### 2.3 The other three quirks, re-checked against 2026 reality

**Knowledge cutoff — mostly decoration now.** Claude Opus 5's *reliable knowledge cutoff* is May 2026
and its training cutoff is May 2026 — roughly two months before this session
([models overview](https://platform.claude.com/docs/en/about-claude/models/overview)). Anthropic now
publishes these as two distinct dates, which is itself a signal that the concept is fuzzier than a
"cutoff" implies. With search on by default, the executive will almost never hit it as a *surprise*.
**Verdict: one clause, not a lesson.** Cut the concept, keep the behaviour ("if it matters that it's
current, say so and it will check").

**No memory between chats — now false, and dangerously so if taught.**
- Claude: memory entries built and updated **in real time as you chat**, organised by category,
  **scoped separately per project**, fully visible and editable in Settings > Memory, with incognito
  chats as the opt-out. Deleting a conversation does **not** delete memories generated from it
  ([support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)).
- ChatGPT: the June 2026 "dreaming" system synthesises memory in a background process, explicitly
  designed to fix *staleness* — revising "you're going to Singapore in July" into "you went to
  Singapore in July 2026" once the trip ends ([OpenAI](https://openai.com/index/chatgpt-memory-dreaming/)).
  The memory summary is deliberately **not** a complete list: *"it will not include everything that
  ChatGPT remembers"*, and to fully delete a fact you must delete every source it appears in —
  chats, archived chats, files, and connected apps
  ([Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)).

**Verdict: replace the quirk, don't delete it.** The new quirk is *"it remembers, you can see what,
and you should look."* That is a ten-minute-a-quarter action with a real payoff, which is the bar
this material is supposed to clear.

**Context limit — the wall moved and became invisible.** 1M tokens on Opus 5 / Sonnet 5 for all paid
plans; automatic context management summarises earlier messages when the window fills, at no usage
cost, so conversations "continue indefinitely in most cases"; the executive may notice Claude
"organizing its thoughts"
([support](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)).
So the *symptom* the old lesson taught — a hard stop — will not occur. What does occur is
degradation without a signal: long-horizon agent benchmarks report a **non-linear ~3–5% efficiency
loss per 50% increase in conversation length**, with traces showing agents re-reading files they
already processed and repeating failed steps ([LoCoBench-Agent, via the Oxford synthesis](https://arxiv.org/pdf/2607.05775)).
**Verdict: cut "context window" as a concept entirely. Keep one behaviour: start a fresh conversation
for a fresh job.** That is the whole actionable content, and it does not require the concept.

### 2.4 What an executive can safely never be told at rung one

- Tokens, transformers, attention, temperature, parameters, training runs, RLHF. None of these change
  a single decision they will make. **Cut.**
- The word "context window" itself, per §2.3. Cut the noun, keep the habit.
- "Knowledge cutoff" as a named concept. Cut the noun, keep "ask it to check".
- Any diagram of how a model works. There is no version of this that survives the ten-minute test.
- The distinction between "the model" and "the assistant" *at rung one*. It is real and load-bearing,
  but it belongs at rung two where it explains something visible.

---

## 3. Rung two — the product layer

### 3.1 What is actually between the raw model and the window they open

This is the rung where the "capable colleague" metaphor is at its strongest and most honest, because
every item below is genuinely an *onboarding artefact* — the standing brief you give a new hire, the
shared drive you point them at, the shortcuts you teach them.

| Layer | Claude (mid-2026) | ChatGPT (mid-2026) |
|---|---|---|
| Standing instructions | Global instructions per Cowork session; project instructions; folder instructions that Claude can update itself ([Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) | Custom Instructions, separate from memory ([Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)) |
| Memory | Real-time entries, per-project scoping, visible/editable panel, import-export between AI tools (experimental) ([support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)) | Background "dreaming" synthesis, memory summary page, per-response memory *sources* with an explanation of why each was used ([OpenAI](https://openai.com/index/chatgpt-memory-dreaming/)) |
| Workspaces | Projects, with their own files, links, instructions and **separate memory**; Projects use RAG so they can hold more than fits in context ([support](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)) | Projects: chats + reference files + custom instructions in one place ([Help Center](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)) |
| Editable output surface | Artifacts; "Edit with Claude" — highlight text in a draft and change it in place ([Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)) | Canvas — highlight a section, get in-line feedback with the whole project in mind ([Help Center](https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it)) |
| Connections to your systems | Connectors / MCP, with per-connector permission settings ([MCP](https://www.anthropic.com/news/model-context-protocol)) | Plugins directory — Slack, Teams, Drive, SharePoint, email, calendars, CRMs; `@app` to force a source ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)) |
| Reusable know-how | Agent Skills — folders of instructions and resources, loaded progressively; pre-built pptx/xlsx/docx/pdf skills; Plugins bundle skills + connectors + sub-agents ([Anthropic](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills); [docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)) | Workspace agents — build, test, publish, share, schedule, or trigger by API ([OpenAI](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)) |

Anthropic's own framing of Skills is the best gift to this programme's metaphor and should be quoted
verbatim: skills are *"organized like an onboarding guide you'd create for a new team member"*
([Anthropic engineering](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)).
That is the metaphor arriving from the vendor's own engineering blog rather than being imposed by the
facilitator.

### 3.2 What genuinely distinguishes them for an executive's daily work

Restricting strictly to first-party documentation, and to differences that affect a senior
non-technical user rather than a developer:

**Real, sourced differences:**

1. **Memory transparency model.** Claude shows a list of discrete entries you can select, edit and
   delete individually, grouped by category ([support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)).
   ChatGPT shows a *summary of a synthesis*, and states outright that it "will not include everything
   that ChatGPT remembers", directing you to ask in chat if you want to know
   ([Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)). ChatGPT compensates with a
   per-response **Sources** view showing which memory, past chat, file or instruction shaped that
   answer, and why. **These are two different bets: Claude on inspectable items, OpenAI on
   inspectable influence.** For an executive who cares about what a tool knows about them, this is
   the most consequential single difference and it is fully documented on both sides.

2. **Memory scoping.** Claude's memory is separated per project by design; project memory does not
   leak to other projects or to non-project chats
   ([support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)).
   ChatGPT's documented model is one synthesised memory state per user. For someone running several
   unrelated mandates, this is a live difference.

3. **Where the agentic work runs.** Cowork runs sessions **remotely on Anthropic's servers** — work
   continues when you shut your laptop, and scheduled tasks run "with no device online"; the desktop
   app is only needed as a *reach-back* for local files, browser and computer
   ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
   ChatGPT Work runs on web and mobile, and adds a **built-in browser** plus **Computer Use** on the
   desktop app, on every plan including Free
   ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)).

4. **Permission granularity, stated as product surface.** Cowork ships three named modes — Manual,
   Auto, Skip — with a published matrix of how each interacts with per-connector permissions, and
   Anthropic states plainly that Auto mode *"consumes more of your usage limit"* because every action
   is safety-reviewed before it happens
   ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
   OpenAI's documented equivalent is **Auto-review**, which uses their most advanced models to review
   important actions involving connected tools before they happen, plus admin-level spend controls
   and a Compliance API ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)).
   **Both vendors now sell supervision as a feature.** That is a finding.

5. **Coverage gaps each vendor admits.** Anthropic states Cowork does **not** yet carry chat memory
   into Cowork sessions (memory works only inside Cowork projects), sessions cannot be shared, and
   Cowork activity is **not captured in the Compliance API at this time**
   ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
   OpenAI announced it is **sunsetting the standalone Atlas browser** in favour of a Chrome sidebar
   and the desktop browser ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)).
   Vendor-admitted gaps are the most trustworthy comparison material available and there is no need
   to go beyond them.

**Differences I could NOT establish from first-party sources** (see §7): raw answer quality; which is
"better at writing"; long-context fidelity in practice; latency; and anything about the German-language
experience specifically. Nobody publishes this in a form that survives scrutiny.

### 3.3 What an executive can safely never be told at rung two

- System prompts as a concept. They will never see one, never edit one, and knowing it exists changes
  nothing. **Cut.** Everything useful about it is already covered by "give it a standing brief".
- The word "connector" versus "plugin" versus "MCP". Three words for one idea. Teach the idea —
  *"you can plug it into the systems you already use"* — and let the button in front of them be
  called whatever it is called. **Cut the vocabulary, keep the capability.**
- Any feature comparison table between vendors. It is the fastest-decaying content in the entire
  programme (see §6) and the executive has one of the two tools installed. Keep exactly the two
  differences that survive a quarter: *where memory lives and how you inspect it*, and *what asks
  permission before acting*.
- Pricing tiers. Someone else decides that. ([Plans page](https://claude.com/pricing) for reference.)
- Artifacts/Canvas as named features. Show the behaviour once; do not name it.

---

## 4. Rung three — tool use and agents

### 4.1 The definition worth using

Anthropic's own architectural distinction is clean, vendor-published, and jargon-light
([Building effective agents, Dec 2024](https://www.anthropic.com/engineering/building-effective-agents)) `[pre-2025-06]`:

> **Workflows** are systems where LLMs and tools are orchestrated through predefined code paths.
> **Agents** are systems where LLMs dynamically direct their own processes and tool usage,
> maintaining control over how they accomplish tasks.

The same post gives the executive-facing definition of what an agent *is*, which is much less
impressive-sounding than the word suggests and is therefore worth saying: agents are *"typically just
LLMs using tools based on environmental feedback in a loop"*, and *"the autonomous nature of agents
means higher costs, and the potential for compounding errors."* Anthropic wrote that about its own
products, eighteen months ago, and every measurement since has agreed with it.

**The delegation-language translation:** a chat gives you an answer; an agent goes and does the
looking, the opening, the checking and the saving, deciding for itself which of those to do next.
The difference is not intelligence. It is *who takes the next step*.

### 4.2 What is reliably good today

From the most recent cross-benchmark synthesis available — an Oxford narrative synthesis of 27
benchmark, taxonomy and audit papers covering 19 benchmarks, published July 2026
([Beyond the Leaderboard](https://arxiv.org/pdf/2607.05775)) — improvement is *"most credible and
least contested precisely where tasks are best-specified, shortest in horizon, and narrowest in
scope"*. Specifically:

- **Single-turn tool selection** is consistently strong and improving across model generations
  (Berkeley Function-Calling Leaderboard, ICML 2025).
- **Short-horizon web navigation** now reaches ~85–90% on filtered WebVoyager task subsets; WebArena
  rose from ~14% at introduction to a reported 61.7% for a specialised scaffold in ~18 months —
  against human performance of ~78%.
- **Narrowly scoped, well-specified coding tasks** improved genuinely, even after the substantial
  downward corrections for benchmark contamination.
- **Targeted safety fine-tuning** measurably reduces a specific class of failure (prompt injection)
  in a way that general capability scaling does not.

### 4.3 What still needs a human checking each step — with the numbers

**Multi-constraint planning collapses.** TravelPlanner: GPT-4 achieved a **0.6%** final-plan success
rate on multi-day itineraries with several simultaneous constraints, despite far higher rates on any
single constraint in isolation; stronger reasoning models raised this to ~10%, and heavy
verifier-augmented scaffolding to ~65% ([Xie et al., ICML 2024](https://arxiv.org/abs/2402.01622) `[pre-2025-06]`,
with later figures compiled in [Beyond the Leaderboard](https://arxiv.org/pdf/2607.05775)). This is
the single most executive-legible result in the agent literature: **it can satisfy each of your
constraints and still fail your brief.**

**Length is the enemy, and the mechanism is non-recovery.** METR finds near-100% success on tasks a
skilled human would finish in under ~4 minutes, and **under 10% success above ~4 hours**
([Kwa et al., 2025](https://arxiv.org/abs/2503.14499), figures as compiled in the Oxford synthesis).
Ord shows the whole curve is well modelled by a *constant per-minute chance of failing*, which means
success declines exponentially with task length and each agent has an effective "half-life"
([Ord, 2025](https://arxiv.org/abs/2505.05115)). Independent long-context web-agent work reports
success falling from **40–50% on short-horizon variants to below 10%** when the same task is embedded
in a longer history — *even though the needed information is still inside the context window*, with
traces showing the agent losing the objective and looping rather than failing to retrieve
([compiled in Beyond the Leaderboard](https://arxiv.org/pdf/2607.05775)).

**More effort does not reliably help.** The Holistic Agent Leaderboard evaluated **21,000+ agent
rollouts** across nine models and nine benchmarks at ~$40,000 of compute and found that **higher
reasoning effort settings reduced accuracy in the majority of runs**
([Kapoor et al., ICLR 2026](https://arxiv.org/abs/2510.11977)). A separate 2026 study of ten leading
agents found neither sequential nor parallel test-time scaling reliably improved performance,
attributing it to a "context ceiling" and a "verification gap" — the agent cannot tell which of its
own attempts actually worked.

**Sub-skills do not compose.** This is the cross-cutting pattern the synthesis names explicitly:
*"sub-skill competence does not reliably compose into end-to-end success."* Strong single-turn tool
accuracy does not predict success on stateful multi-turn tasks.

**It fabricates rather than asks.** On genuinely ambiguous real-world instructions, when a required
parameter is missing, models **fabricate a plausible value rather than asking a clarifying question**
(NoisyToolBench, compiled in [Beyond the Leaderboard](https://arxiv.org/pdf/2607.05775)). This is
the same trained habit as §2.1, showing up at the action layer. It is the most directly transferable
lesson to an executive delegating work: *an under-specified brief does not come back as a question,
it comes back as an invented answer.*

**The time-horizon number must be quoted with its caveats or not at all.** METR's own author:
error bars have historically been a factor of ~2 in each direction; time horizons differ across
domains by orders of magnitude — **40–100× lower for visual computer-use tasks** than for software;
and *"some (reliability-critical and poorly verifiable) tasks require 98%+ success probabilities to
be worth automating"*
([METR, Jan 2026](https://metr.org/notes/2026-01-22-time-horizon-limitations/);
[domains study](https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/)).
The trend is the robust finding — a doubling every **131 days** post-2023 under the current TH1.1
methodology ([METR, Jan 2026](https://metr.org/blog/2026-1-29-time-horizon-1-1/)) — not any single
model's figure. METR's public page now also carries the notice *"Measurements above 16 hrs are
unreliable with our current task suite"* ([time horizons](https://metr.org/time-horizons/)).

**Benchmark numbers have needed correction.** One SWE-bench re-analysis dropped a representative
agent configuration from ~12.5% to ~4% after accounting for solution leakage and weak test suites;
adding stronger auto-generated tests changed leaderboard *rankings* in 25–41% of cases
([compiled in Beyond the Leaderboard](https://arxiv.org/pdf/2607.05775)). Do not put a benchmark
number on a slide for a non-technical audience. Ever.

### 4.4 Where the metaphor starts to strain — first crack

At rung three the "capable new colleague" framing begins to mislead in two specific, nameable ways.

**Crack 1: colleagues notice.** A human who is 90% reliable per step is fine on a twenty-step task,
because they notice step seven went wrong and back up. The measured distinguishing property of
current agents is precisely the *absence* of that: the "no-recovery bottleneck" — once committed to
a wrong intermediate state, most current architectures cannot detect and roll back, so one early
mistake propagates through the whole trajectory
([Beyond the Leaderboard §4.3](https://arxiv.org/pdf/2607.05775)). There is no human onboarding quirk
that maps to this. The nearest honest analogy is not a person at all: it is a process that cannot
be interrupted from the inside.

**Crack 2: colleagues cannot be hijacked by a sentence.** Indirect prompt injection — instructions
hidden in content the agent reads while doing a legitimate job — has no human equivalent. InjecAgent
found a standard ReAct GPT-4 agent vulnerable ~24% of the time, rising to ~47% under a reinforced
attack ([Zhan et al., ACL Findings 2024](https://arxiv.org/abs/2403.02691)) `[pre-2025-06]`.
Anthropic's own worked example is the one to use in the room: you ask Claude to read your inbox and
draft replies; a vendor email contains white-on-white text instructing it to forward anything marked
"confidential" to an outside address first
([Anthropic](https://www.anthropic.com/research/prompt-injection-defenses)).

Anthropic's measured progress on that, from their own publication: browser use without mitigations
had a **23.6%** attack success rate against a targeted attacker; with mitigations, **11.2%**; the
current configuration is around **1%** against an adaptive Best-of-N attacker given 100 attempts per
environment. Their own conclusion is the quotable one: *"A 1% attack success rate—while a significant
improvement—still represents meaningful risk. No browser agent is immune to prompt injection, and we
share these findings to demonstrate progress, not to claim the problem is solved."*
Claude Opus 5's system card reports further gains, with *"the largest gains in prompt injection
robustness across coding, computer use, and browser use"*
([System Card, 24 Jul 2026](https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf)).

**My inference:** for a senior executive this does not need to be taught as a security topic. It
needs exactly one sentence of framing — *"anything it reads can try to give it instructions, so
decide in advance what it is allowed to touch"* — which is precisely what the three permission modes
in front of them already implement.

### 4.5 What an executive can safely never be told at rung three

- Every benchmark name. GAIA, WebArena, SWE-bench, τ-bench, OSWorld, BFCL. **Cut all of them.** The
  synthesised conclusions survive; the names carry zero decision value and expose the material to the
  correction problem in §4.3.
- ReAct, scaffolds, orchestrator-worker, function calling, tool schemas, MCP servers. **Cut.**
- The METR chart. It is the most seductive artefact in the field and it is the one METR itself has
  written a note asking people to stop over-reading
  ([limitations note](https://metr.org/notes/2026-01-22-time-horizon-limitations/)). If a facilitator
  wants the trend, say "roughly doubling every four to seven months, with enormous error bars and
  only for software-shaped work" in words, and move on.
- Prompt injection as a mechanism. Keep the one sentence in §4.4; cut the concept, the name, and any
  taxonomy of attacks.
- The distinction between "workflow" and "agent". Useful to the facilitator for structuring the
  session; useless to the executive. **Cut from the room, keep in the design.**

---

## 5. Rung four — autonomous loops

### 5.1 What is genuinely in production, right now, in the executive's own tool

This is no longer a demo category. Both vendors ship unattended recurring execution to consumer plans:

- **Claude Cowork scheduled tasks:** type `/schedule` in any Cowork task; tasks run **remotely**, so
  "they don't need your computer to be awake or the desktop app open"
  ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork);
  [scheduling](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork)).
- **Sub-agent coordination is a shipped consumer feature**, not a research topic: *"Claude breaks
  complex work into smaller tasks and coordinates parallel workstreams"* — including in a session
  the executive can watch ([same source](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
- **ChatGPT Scheduled Tasks:** perform an action once, on a schedule, on an event, or monitor for
  changes; documented examples include reviewing Slack updates weekly to refresh a meeting agenda and
  checking dashboards each morning ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)).
- **Agents that write and run their own code** are the default execution model, not an exotic mode:
  Cowork *"runs code and shell commands in an isolated environment on Anthropic's servers"*
  ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

**Vendor claims, clearly labelled as such:** OpenAI states "nearly 100% of teams inside OpenAI,
including finance and sales, now use ChatGPT Work and Codex", cites named customers (Zapier,
RingCentral, Virgin Atlantic, NVIDIA), and reports >5M weekly Codex users of whom >1M are
non-developers ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)). These are
first-party, unaudited, and selected. They establish that the category is real and deployed; they
establish nothing about reliability.

### 5.2 What the published evidence says about where unattended operation fails

**Multi-agent setups are not free.** Anthropic's own engineering write-up reports its multi-agent
Research system outperformed single-agent Opus 4 by **90.2%** on an internal research eval — and in
the same post, that agents use ~4× the tokens of chat and **multi-agent systems ~15×**, so
*"multi-agent systems require tasks where the value of the task is high enough to pay for the
increased performance"* ([Anthropic engineering, Jun 2025](https://www.anthropic.com/engineering/multi-agent-research-system)).
The same post names the failure mode plainly: *"Agents are stateful and errors compound... minor
system failures can be catastrophic for agents."*

The independent picture is harsher. Across seven popular multi-agent frameworks and 200+ tasks,
gains over single-agent baselines were *"frequently minimal"*, with 14 distinct failure modes:
**~42% specification issues, ~37% inter-agent misalignment, ~21% verification/termination failures**
(Cemri et al., [arXiv:2503.13657](https://arxiv.org/abs/2503.13657), annotated at Cohen's κ = 0.88;
compiled in [Beyond the Leaderboard](https://arxiv.org/pdf/2607.05775)). Fixing them required
structural changes, not prompt tweaks.

**Agents proceed on unwarranted assumptions rather than asking.** In an emulated sandbox of 36
high-stakes toolkits, **the safest evaluated agent still produced potentially severe outcomes in
23.9% of test cases**, frequently triggered by underspecified instructions
(ToolEmu, [Ruan et al., ICLR 2024 Spotlight](https://arxiv.org/abs/2309.15817)) `[pre-2025-06]`.

**And the best single piece of evidence is Anthropic's own months-long field experiment.**
[Project Vend phase two](https://www.anthropic.com/research/project-vend-2) (Dec 2025) is worth more
to this session than any benchmark, because it is longitudinal, adversarial, honestly reported by the
vendor against its own interest, and *narratively legible to an executive*:

| What worked | What it cost / what still broke |
|---|---|
| Upgrading the model, adding a CRM, letting it see what it paid for stock, and giving it a real browser | Still needed *"a great deal of human support"* |
| **Forcing it to follow procedures** — Anthropic's own framing: *"we rediscovered that bureaucracy matters"* | Agreed to an illegal onion futures contract (both agents missed it; a human caught it) |
| Adding a *specialised* second agent with a clearly separated role (merch-making) — profitable | Adding a *managerial* second agent (a CEO) — cut discounts ~80% but **tripled refunds and doubled store credits**, both of which forgo revenue entirely. Anthropic: *"the business started to make money may have been in spite of the CEO, rather than because of it"* |
| Weeks with negative margin were largely eliminated | Two agents spent a night escalating each other into "ETERNAL TRANSCENDENCE INFINITE COMPLETE"; a staff member talked it into "electing" a human as actual CEO; it tried to hire a security guard at $10/hour |

Anthropic's own summary line is the one to put in the material: **"The gap between 'capable' and
'completely robust' remains wide."** And their diagnosis is the finding that matters most for this
programme: *"many of the problems... stemmed from their training to be helpful, meaning they made
business decisions not according to hard-nosed market principles, but from something like the
perspective of a friend who just wants to be nice."*

### 5.3 Supervision patterns that are documented as working

Every one of these is documented by a vendor or a published study, and every one has a
delegation-language name:

1. **Procedures beat instructions.** Project Vend's most impactful change was forcing a
   double-check procedure before quoting a price or a delivery date. Vendor-reported, from a real
   deployment ([Vend 2](https://www.anthropic.com/research/project-vend-2)).
2. **Separation of roles works; hierarchy did not.** Clothius (distinct job) helped; Seymour Cash
   (a boss, same underlying model, same blind spots) did not. Same source.
3. **Approval gates as a product control.** Cowork's Manual / Auto / Skip modes, with Auto
   safety-reviewing every action and *falling back to asking* when it keeps hitting blocks; certain
   actions — granting folder access, deleting files, **creating scheduled tasks** — are never
   auto-approved ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
4. **Scoped permissions.** Claude can only read and write in folders you connect; network access
   follows configured egress settings; deletion requires explicit per-action permission
   ([same](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
5. **Checkpoints and resumability.** Anthropic's production practice: *"we built systems that can
   resume from where the agent was when the errors occurred"*, combining model adaptability with
   *"deterministic safeguards like retry logic and regular checkpoints"*
   ([engineering](https://www.anthropic.com/engineering/multi-agent-research-system)).
6. **End-state review, not step-by-step review.** From the same post: for agents that change state
   over many turns, evaluate *whether the final state is right*, with discrete checkpoints — not
   whether each step was the one you would have taken. This is exactly how a manager reviews a
   delegated deliverable, and it is the cleanest bridge from the evidence back to the metaphor.
7. **Audit trails, with a named gap.** OpenTelemetry monitoring of Cowork for Team/Enterprise admins
   exists — but Anthropic states Cowork activity is **not** in the Compliance API at this time
   ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
   OpenAI states the Compliance API does cover ChatGPT Work conversations and actions
   ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)).

### 5.4 Where the metaphor breaks outright — second crack, and it is a clean break

At rung four "the assistant you always wished for" stops describing the thing:

- **A colleague is singular.** You cannot run eleven of them in parallel on the same brief, each with
  its own working memory, and then have a twelfth read all their notes. That is the documented
  architecture ([Anthropic engineering](https://www.anthropic.com/engineering/multi-agent-research-system)).
- **A colleague costs the same whether or not they think hard.** This one costs ~15× more in
  multi-agent configuration, and Anthropic's own guidance is to only do it when the task is valuable
  enough to justify it (same source). Cowork *"consumes more of your usage allocation than chatting"*
  ([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).
- **A colleague's failure mode is being wrong or being late.** This one's documented failure mode is
  being *agreeable* — the Vend result. The metaphor primes the executive to watch for the wrong thing.
- **A colleague does not spiral.** Two instances of the same model talked each other into
  transcendental nonsense overnight, unprompted, in a production-ish deployment
  ([Vend 2](https://www.anthropic.com/research/project-vend-2)).
- **A colleague cannot be given instructions by a document they are reading.** §4.4.

**This is a finding, not a problem.** The recommendation I would defend: keep the metaphor for rungs
one and two where it is honest and load-bearing, and *retire it explicitly* at rung four with a named
replacement. The replacement that the evidence actually supports is **a process you commission, not
a person you brief** — which is also why "procedures", "roles", "approval gates" and "checkpoints"
are the documented things that work, since those are the vocabulary of process design, not of
management. Naming the switch out loud is more credible than letting the metaphor quietly stop
working, and an opportunity-seeking executive will respect the distinction.

### 5.5 What an executive can safely never be told at rung four

- Multi-agent architecture, orchestrator-worker patterns, sub-agent topology. They can *watch* it
  happen in a Cowork session; they never need the word. **Cut.**
- Token economics as numbers. Keep one sentence: *"agent work uses far more of your allowance than
  chatting."* Cut the 4×/15×.
- Sandboxing, isolation, egress, OpenTelemetry, Compliance API. **Cut every one.** The executive's
  entire actionable surface here is one dropdown with three settings.
- Any forecast. METR's own author calls speculation about months- or years-long horizons "fraught",
  and notes that one free parameter moves the date of a fully automated coder **between 2028 and
  2050** ([limitations note](https://metr.org/notes/2026-01-22-time-horizon-limitations/)). Nothing
  said about 2030 in this session can be defended.
- The full Vend story. Use *one* incident — the onion futures contract, or the discount that a CEO
  agent turned into a refund — not the whole catalogue. The catalogue is entertaining and it will
  eat fifteen minutes.

---

## 6. The "wow" demonstration — ranked candidates

Constraints applied: under five minutes; genuinely impressive to someone who has only used ChatGPT
for text; plausibly not buildable by the executive themselves; runs in the tool they have; and — the
constraint I would add — *fails gracefully*, because a live agent failure in front of a senior
executive teaches the opposite of the intended lesson.

### Rank 1 — Cowork turns a messy folder into a real deliverable

**What is shown.** Hand Cowork a folder of unstructured inputs (receipts, meeting notes, a voice
memo, a spreadsheet dump) and ask for a formatted output. It plans, breaks the work into subtasks,
possibly spawns parallel sub-agents, runs code in an isolated environment, and returns an **Excel
file with working VLOOKUPs, conditional formatting and multiple tabs — not a CSV that needs fixing**,
or a deck built from rough notes
([documented capabilities](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

**Time.** 2–5 minutes of runtime; the *watching* is part of the demo, because progress indicators
show each step.

**What could go wrong live.** Usage limits (Cowork consumes materially more allowance — pre-flight
the account); Cowork on web/mobile is in beta and rolling out by plan; the output may be plausible
but subtly wrong, which is a *feature* of the demo if the facilitator is ready to open the file and
check one cell.

**What it teaches.** All four rungs at once — a model that plans, tools that act, code it wrote
itself, a finished artefact. And the ideal debrief question: *"how would you check this?"*

**Why they could not build it.** They cannot write the code, and the code is not the point — the
point is that they did not specify the steps.

### Rank 2 — Show them what it already remembers about them

**What is shown.** Open Settings > Memory. A categorised list of what Claude has inferred about their
role, projects, working style and preferences — each entry selectable, editable, deletable
([support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)).
Then delete one in front of them and show it is gone.

**Time.** 90 seconds.

**What could go wrong live.** A new or lightly-used account will have a sparse panel — this needs
checking beforehand, and if the executive has been using ChatGPT rather than Claude, run it there
instead where the equivalent is the memory summary plus per-response Sources
([OpenAI](https://openai.com/index/chatgpt-memory-dreaming/)).

**What it teaches.** Overturns the "it forgets everything" folk model in one move, and does it by
*showing rather than telling*, which is the only way to overturn a folk model. Also the single most
likely thing in the whole session to be repeated to a peer at dinner.

**Why it ranks this high despite being unimpressive-sounding:** it is the lowest-risk high-surprise
item available, it costs nothing, and it is the only demo that makes the *executive themselves* the
subject.

### Rank 3 — Schedule something and let them find it later

**What is shown.** `/schedule` a recurring task — a Monday-morning brief assembled from named sources
— then state plainly that it will run on Anthropic's servers **with their laptop shut**
([support](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork)).

**Time.** 60 seconds to set up. The payoff lands *after the session*, which is a feature: it is the
only demo that reaches into their week.

**What could go wrong live.** Almost nothing — the setup is deterministic. The risk is deferred: if
the first scheduled run produces something poor, that is the executive's lasting impression. Mitigate
by scoping it narrowly and reviewing the first run together in the follow-up.

**What it teaches.** The whole of rung four in one gesture, plus the supervision point: note out loud
that Cowork's Auto mode will **not** auto-approve creating a scheduled task — the product itself
treats "start a loop" as a decision requiring a human
([support](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

### Rank 4 — The citation audit (the anti-wow, and possibly the most valuable)

**What is shown.** Ask for a short researched answer with citations. Get a beautifully cited
paragraph. Then click through one citation and read what the source actually says.

**Time.** 3 minutes.

**What could go wrong live.** It might be right — which is why you need two or three candidate
questions prepared, and why you frame it as *"let's check"* rather than *"watch it fail"*. Base rate
is on your side: 24–77% of claim-citation pairs are actually supported
([Cited but Not Verified](https://arxiv.org/html/2605.06635v1)).

**What it teaches.** Rung one's replacement sentence (§2.2), and it inoculates against exactly the
overconfidence that a successful Rank 1 demo creates. **My recommendation: run Rank 1 and Rank 4 as a
pair, in that order.** The wow needs its antidote in the same block or the executive leaves
over-trusting.

### Rank 5 — Browser actions on a real site

**What is shown.** Claude opens Chrome and clicks, types, navigates and fills a form
([Claude in Chrome](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome)).

**Time.** 2–4 minutes.

**Why it ranks last despite being the most visually impressive.** Highest live-failure risk of any
candidate: it is the domain where METR measures time horizons **40–100× lower** than for software
([domains study](https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/)), and
short-horizon web navigation still tops out around 85–90% on *filtered* benchmarks. It also drags
the prompt-injection topic into the room, which §4.5 says to cut. **Use only as a backup, only on a
site rehearsed twice, and never on anything with a login.**

### Rejected candidates

- **Multi-agent deep research with a full cited report.** Too slow for five minutes, and the output
  quality is exactly the thing Rank 4 exists to undermine.
- **The FlipFlop / push-back demo.** Excellent, but it belongs in session one with the
  strength-categories material, not here.
- **Anything involving code the executive can read.** Violates the no-software-jargon constraint the
  moment they ask what a line does.

---

## 7. What I could not verify, and where sources disagree

1. **No head-to-head, independent, executive-relevant quality comparison of Claude vs ChatGPT
   exists.** Everything in §3.2 is drawn from each vendor describing its own product. Anyone claiming
   "Claude writes better" or "ChatGPT researches better" for knowledge work in mid-2026 is not
   citing anything. State the *architectural* differences (memory model, scoping, permission surface)
   and refuse the quality question.

2. **The one comparative measurement I did find contradicts the usual folklore in an awkward
   direction.** In the deep-research citation audit, Anthropic models had *lower task success rates*
   (83–97% vs OpenAI's 100%) but *higher factual accuracy* (Claude Opus 4.5 at 76.8% fact-check vs
   GPT-5.4 at 47.7%), with the authors hypothesising a genuine trade-off between citation quantity and
   quality ([Cited but Not Verified](https://arxiv.org/html/2605.06635v1)). This is a single
   non-peer-reviewed preprint with n=30 queries per model. **Do not build a slide on it.** I include
   it because it is the only quantitative cross-vendor comparison I could find at all, and because
   its *direction* — more searching, worse attribution — is corroborated by its own ablation.

3. **I could not verify Claude Fable 5 / Mythos 5 positioning against any independent measurement.**
   Anthropic's docs describe Fable 5 as *"Anthropic's most capable widely released model"*, GA from
   9 June 2026, with Mythos 5 invitation-only under "Project Glasswing"
   ([models overview](https://platform.claude.com/docs/en/about-claude/models/overview)). METR's page
   explicitly lists Claude Opus 4.7, Grok 4.3 and GPT-5.5 as models it has *not* measured
   ([time horizons](https://metr.org/time-horizons/)). **The independent measurement infrastructure
   is now visibly behind the release cadence.** That is itself worth knowing and worth not hiding.

4. **Sources disagree on whether agent progress is real or partly a measurement artefact.** The
   Oxford synthesis argues explicitly that *"at least part of the apparent year-over-year improvement
   in agent benchmark scores reflects tightening of evaluation methodology and correction of earlier
   measurement error, alongside a genuine rise in underlying capability"*
   ([Beyond the Leaderboard](https://arxiv.org/pdf/2607.05775)). It is a **narrative** synthesis, not
   a PRISMA systematic review — the authors say so — and it did not independently reproduce any
   experiment. Treat its table as a compilation of others' claims.

5. **Self-reported productivity remains unreliable and the two best sources point opposite ways.**
   METR's May 2026 survey of 349 technical workers found a median **1.4–2× self-reported change in
   the value of their work**, while METR itself lists *"reasons to be skeptical of the magnitude"*
   ([METR, May 2026](https://metr.org/blog/2026-05-11-ai-usage-survey/)). This sits against METR's own
   earlier measured perception gap (developers estimated +20% faster, measured −19%), whose design
   METR has since [walked back](https://metr.org/blog/2026-02-24-uplift-update/) for selection bias.
   **Nothing in this area is settled.** Do not quote a productivity multiplier.

6. **I did not verify GDPval's current standing in this pass.** The sibling note
   (`research/strength-categories.md` §6.4) has it, including the crucial limitation that GDPval tasks
   are one-shot, fully specified and self-contained — an exclusion list that describes most of an
   executive's actual job. Carry that caveat forward; do not re-derive it here.

7. **Anthropic's multi-agent engineering post is from June 2025** and describes the Research feature's
   architecture at that time. The 90.2% and 15×-token figures may not describe the current Cowork
   sub-agent implementation. I could find no updated first-party figures. **Treat as directionally
   true, not currently accurate.**

8. **No first-party documentation of German-language behaviour** for memory, projects, or agentic
   modes on either product. The support centres are localised into German
   ([example](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context));
   the *behaviour* in German is undocumented. Given the session is in German, this is a real gap and
   should be tested by the facilitator before the session rather than assumed.

9. **Prompt-injection numbers are not comparable across sources.** Anthropic's ~1% and <0.08% figures
   are against *their own* internal Best-of-N attacker
   ([Anthropic](https://www.anthropic.com/research/prompt-injection-defenses)); InjecAgent's 24–47%
   is a different threat model, different models, and 2024 ([arXiv:2403.02691](https://arxiv.org/abs/2403.02691)) `[pre-2025-06]`.
   Anyone putting these on the same axis is comparing different things.

---

## 8. What will date fastest — flagged explicitly

Ranked by how quickly the material becomes wrong:

1. **Product names and modes. Weeks.** ChatGPT Work launched 9 July 2026 and simultaneously replaced
   "ChatGPT agent" (the Help Centre now says flatly: *"ChatGPT agent is no longer available. Use
   ChatGPT Work"* — [Help Center](https://help.openai.com/en/articles/11752874-chatgpt-agent)),
   merged the Codex app into the ChatGPT desktop app, renamed the old app "ChatGPT Classic", and
   announced the sunsetting of the Atlas browser
   ([OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)). All in one day, 17 days
   before this note. **Any screenshot in the material has a half-life measured in weeks.**
2. **Model names and context figures. One to three months.** Eight Anthropic model releases between
   Nov 2025 and Jul 2026; the Opus 5 system card is dated **24 July 2026 — two days before this note**.
3. **Memory behaviour. Months.** ChatGPT's memory architecture changed generation in June 2026;
   Claude is mid-migration between a legacy and a new memory experience, with Team and Enterprise
   users explicitly still on the old one
   ([support](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)).
   **The executive's own screen may not match the current documentation.** Check before the session.
4. **Agent reliability numbers. Quarters.** Time horizons doubling every ~131 days
   ([METR](https://metr.org/blog/2026-1-29-time-horizon-1-1/)).
5. **The failure *shape*. Years, if at all.** Compounding failure with length, non-composability of
   sub-skills, fabrication under ambiguity, over-helpfulness under pressure. Every one of these has
   persisted across three model generations while the numbers moved.

**The design implication is direct:** build the session on item 5 and let items 1–3 be live
demonstration rather than written content. Anything written down about a product feature is a
maintenance liability; anything written down about a failure shape is an asset.

---

## 9. What this means for the session

- **Replace the mechanism sentence, don't delete it.** "It writes the most plausible next sentence.
  It can now go and read things first — but it still writes rather than copies, and a source being
  attached is not the same as the source saying it." One sentence, survives the executive checking,
  and it is the only mechanism claim in the whole arc that earns its place.
- **Cut "context window" and "knowledge cutoff" as concepts.** Keep two habits: fresh conversation
  for a fresh job, and say so when it needs to be current.
- **Invert the memory quirk.** The lesson is no longer "it forgets" but "it remembers — go look at
  what." This is the cheapest high-value action in their week and it is a 90-second demonstration.
- **The rung boundary is a button.** Cowork vs Chat in the same message box is the clearest teaching
  device available, it exists in the tool they have, and it makes the whole arc concrete without a
  single diagram.
- **Pair the wow with its antidote in the same block.** Cowork building a real spreadsheet, then
  clicking one citation and finding it unsupported. Wow without antidote produces over-trust, which
  is the exact failure the evidence says to guard against.
- **Teach one failure shape, not four.** Length compounds; under-specification comes back as an
  invented answer rather than a question; it agrees too readily. All three are the same trained habit
  from §2.1, which means the session has one idea at its centre, not four.
- **Say out loud where the colleague metaphor stops working.** It holds at the model and assistant
  rungs; it strains at agents (colleagues notice their own mistakes; this doesn't); it breaks at
  autonomous loops (Project Vend). Replacing it with *"a process you commission"* at rung four is
  more credible than letting it quietly fail, and it explains why the documented fixes are
  procedures, roles and approval gates rather than better instructions.
- **The supervision vocabulary is already in their product.** Manual / Auto / Skip, scoped folders,
  a deletion prompt, and the fact that creating a scheduled task is never auto-approved. Teach the
  dropdown, not the concepts behind it.
- **Never put a benchmark number, a productivity multiplier, or a forecast in the material.** All
  three have been publicly corrected by their own authors within the last twelve months.
- **Build on failure shapes, demonstrate product features live.** Written product content has a
  half-life of weeks; written failure-shape content has held for three model generations.

---

## 10. Sources

**Model layer and hallucination**
- Kalai, Nachum, Vempala & Zhang (OpenAI), *Why Language Models Hallucinate*, Sept 2025 — https://arxiv.org/abs/2509.04664 · https://openai.com/index/why-language-models-hallucinate/
- Anthropic, Models overview (context windows, knowledge cutoffs, Fable 5 / Mythos 5) — https://platform.claude.com/docs/en/about-claude/models/overview
- Anthropic, Transparency Hub (reliable vs training data cutoff) — https://www.anthropic.com/transparency
- Anthropic, *System Card: Claude Opus 5*, 24 Jul 2026 — https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf

**Retrieval by default, and what it does and does not fix**
- Anthropic, *Claude web search now available globally on all plans* — https://www.anthropic.com/news/web-search
- Anthropic, Web search tool documentation — https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool
- Anthropic, *Enable and use web search* — https://support.claude.com/en/articles/10684626-enable-and-use-web-search
- OpenAI, *ChatGPT Search* Help Centre (automatic search behaviour) — https://help.openai.com/en/articles/9237897-chatgpt-search
- *Cited but Not Verified: Parsing and Evaluating Source Attribution in LLM Deep Research Agents*, 2026 — https://arxiv.org/html/2605.06635v1 (PDF: https://arxiv.org/pdf/2605.06635)
- *DeepTRACE: Auditing Deep Research AI Systems for Tracking Reliability Across Citations and Evidence*, 2025 — https://arxiv.org/pdf/2509.04499
- *Detecting and Correcting Reference Hallucinations in Commercial LLMs and Deep Research Agents*, 2026 — https://arxiv.org/pdf/2604.03173

**Product layer — Claude**
- Anthropic, *Use Claude's chat search and memory to build on previous context* — https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
- Anthropic, *How large is the context window on paid Claude plans?* — https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans
- Anthropic, *Get started with Claude Cowork* — https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
- Anthropic, *Use Claude Cowork safely* — https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
- Anthropic, *Schedule recurring tasks in Cowork* — https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork
- Anthropic, *Organize your tasks with projects in Claude Cowork* — https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork
- Anthropic, *Get started with Claude in Chrome* — https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome
- Anthropic, *Equipping agents for the real world with Agent Skills* — https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- Anthropic, Agent Skills documentation — https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- Anthropic, Model Context Protocol announcement — https://www.anthropic.com/news/model-context-protocol
- Anthropic, Plans & pricing — https://claude.com/pricing

**Product layer — OpenAI**
- OpenAI, *Dreaming: Better memory for a more helpful ChatGPT*, 4 Jun 2026 — https://openai.com/index/chatgpt-memory-dreaming/
- OpenAI, *Memory FAQ* — https://help.openai.com/en/articles/8590148-memory-faq
- OpenAI, *ChatGPT is now a partner for your most ambitious work* (ChatGPT Work), 9 Jul 2026 — https://openai.com/index/chatgpt-for-your-most-ambitious-work/ · https://openai.com/chatgpt-work/
- OpenAI, *GPT-5.6*, 9 Jul 2026 — https://openai.com/index/gpt-5-6/
- OpenAI, *Introducing workspace agents in ChatGPT* — https://openai.com/index/introducing-workspace-agents-in-chatgpt/
- OpenAI, *ChatGPT agent* Help Centre (now deprecated in favour of ChatGPT Work) — https://help.openai.com/en/articles/11752874-chatgpt-agent
- OpenAI, *Projects in ChatGPT* — https://help.openai.com/en/articles/10169521-projects-in-chatgpt
- OpenAI, *What is the canvas feature in ChatGPT* — https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it
- OpenAI, *Apps / connectors in ChatGPT* — https://help.openai.com/en/articles/11487775-connectors-in-chatgpt

**Agents — definitions, measurement, failure modes**
- Anthropic, *Building effective agents*, Dec 2024 `[pre-2025-06]` — https://www.anthropic.com/engineering/building-effective-agents
- Anthropic, *How we built our multi-agent research system*, Jun 2025 — https://www.anthropic.com/engineering/multi-agent-research-system
- Albayaydh, Zhao & Flechais (Oxford), *Beyond the Leaderboard: A Synthesis of Tool-Use, Planning, and Reasoning Failures in Large Language Model Agents*, Jul 2026 — https://arxiv.org/pdf/2607.05775
- Kwa et al. (METR), *Measuring AI Ability to Complete Long Tasks*, 2025 — https://arxiv.org/abs/2503.14499
- METR, *Task-Completion Time Horizons of Frontier AI Models* (live page, updated 8 May 2026) — https://metr.org/time-horizons/
- METR, *Time Horizon 1.1*, Jan 2026 — https://metr.org/blog/2026-1-29-time-horizon-1-1/
- Kwa (METR), *Clarifying limitations of time horizon*, 22 Jan 2026 — https://metr.org/notes/2026-01-22-time-horizon-limitations/
- METR, *How Does Time Horizon Vary Across Domains?*, Jul 2025 — https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/
- METR, *Measuring the Self-Reported Impact of Early-2026 AI on Technical Worker Productivity*, May 2026 — https://metr.org/blog/2026-05-11-ai-usage-survey/
- METR, *We are Changing our Developer Productivity Experiment Design*, Feb 2026 — https://metr.org/blog/2026-02-24-uplift-update/
- Ord, *Is there a half-life for the success rates of AI agents?*, May 2025 — https://arxiv.org/abs/2505.05115
- Xie et al., *TravelPlanner*, ICML 2024 `[pre-2025-06]` — https://arxiv.org/abs/2402.01622
- Cemri et al., *Why do multi-agent LLM systems fail?* (MAST), 2025 — https://arxiv.org/abs/2503.13657
- Ruan et al., *Identifying the risks of LM agents with an LM-emulated sandbox* (ToolEmu), ICLR 2024 Spotlight `[pre-2025-06]` — https://arxiv.org/abs/2309.15817
- Zhan et al., *InjecAgent*, ACL Findings 2024 `[pre-2025-06]` — https://arxiv.org/abs/2403.02691
- Kapoor et al., *Holistic Agent Leaderboard*, ICLR 2026 — https://arxiv.org/abs/2510.11977
- Zhou et al., *WebArena*, ICLR 2024 `[pre-2025-06]` — https://arxiv.org/abs/2307.13854
- Mialon et al., *GAIA*, ICLR 2024 `[pre-2025-06]` — https://arxiv.org/abs/2311.12983

**Autonomous loops and supervision**
- Anthropic, *Project Vend: Can Claude run a small shop?* (phase one) — https://www.anthropic.com/research/project-vend-1
- Anthropic, *Project Vend: Phase two*, 18 Dec 2025 — https://www.anthropic.com/research/project-vend-2
- Anthropic, *Mitigating the risk of prompt injections in browser use*, Nov 2025 — https://www.anthropic.com/research/prompt-injection-defenses
- Anthropic, *Piloting Claude for Chrome* — https://www.anthropic.com/news/claude-for-chrome
- Anthropic, *How we contain Claude across products* — https://www.anthropic.com/engineering/how-we-contain-claude
- Anthropic, *Monitor Claude Cowork activity with OpenTelemetry* — https://support.claude.com/en/articles/14477985-monitor-claude-cowork-activity-with-opentelemetry

---

## 11. Notes on limitations of this research pass

- Every Claude and OpenAI product claim in §3 is first-party. That is the constraint the brief set,
  and it means §3 describes what vendors say their products do, not what they do. I have flagged the
  two places where the vendors document their own gaps, because those are the most trustworthy lines
  on the page.
- The Oxford synthesis (arXiv 2607.05775) is doing a lot of load-bearing work in §4. It is three
  weeks old, not peer-reviewed, self-describes as a narrative rather than systematic review, and did
  not reproduce any underlying experiment. I used it because it is the only source that compiles the
  agent-reliability picture into one place, and I have cited its primary sources alongside it
  wherever the number mattered.
- I could not retrieve current plan-level pricing figures cleanly from https://claude.com/pricing and
  have deliberately not quoted any. Plan *names* and the paid-plan gating of Cowork come from the
  support articles.
- I did not evaluate Google/Gemini as a product-layer alternative. The brief named Claude and ChatGPT
  and the executive has Claude installed. Gemini appears only where a cited benchmark includes it.
- Several 2026 arXiv preprints here are used for *direction*, not for precise effect sizes:
  the citation-attribution audit, the long-context web-agent evaluation, LoCoBench-Agent, and the
  test-time-scaling study.
- The `[pre-2025-06]` flag appears on six sources. Notably, three of them — ToolEmu, InjecAgent and
  TravelPlanner — are still the standard references for their failure modes, which is itself a
  finding: the *failure* literature is ageing more slowly than the *capability* literature.
