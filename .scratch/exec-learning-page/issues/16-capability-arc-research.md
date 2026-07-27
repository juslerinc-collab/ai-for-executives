# The capability arc: from LLM to autonomous agent

Type: research
Status: resolved
Resolved: 2026-07-26 → `research/capability-arc.md`

## Question

What should an executive actually be taught about the arc from *what an LLM is* → *the apps and assistants built on top of it* (Claude, ChatGPT, and what distinguishes them) → *agents that use tools and act* → *autonomous loops that run without you in the chair*?

Raised by the user during [The lesson sequence](01-lesson-sequence.md). Two things depend on it:

- **Session two's theory block** is *„advanced theory (agents, context management)"* per [The teaching model](12-teaching-model.md), and the map's fog entry **Agent demonstration** is explicitly open: what is demonstrated at the top of the arc, given it must impress without being buildable by the executive.
- **Session one's basics block** — [How deep the theory goes](03-theory-depth.md) — owns the bottom of the arc and is scoped to *one sentence of mechanism*. This ticket must not smuggle a machine-learning lecture back in through the top.

Gathers evidence only. It does not pick the final content — [How deep the theory goes](03-theory-depth.md) and the session-two theory slot do that.

## Constraints the findings had to respect

- Vendor-neutral in framing; Claude is the tool in the room because that is what the executive has.
- No jargon that sounds like software. Never *prompt engineering*.
- The central metaphor governs: *the assistant you always wished for*.
- Anything that cannot cash out within ten minutes of an executive's own working life gets cut.
- No EU AI Act, regulatory, or compliance content.

## Answer

Full note with inline citations: **`research/capability-arc.md`** (11 sections, sources dated, unverified claims listed separately).

### The finding that invalidates settled material

**„Es sagt das nächste Wort voraus, es schlägt nichts nach" is now half false — and the false half is the half being kept.** Both consumer assistants search and cite by default in 2026, so a facilitator saying *„es schlägt nichts nach"* gets caught inside five minutes by an executive who can see the footnotes.

The consequence survives in a **sharper and better-measured form**: in a 14-model deep-research audit, links resolve (>94 %) and sources are topically relevant (>80 %), but the cited source actually supports the specific claim only **24–77 %** of the time — and *more* searching makes it worse (GPT-5.4: 78.6 % fact-check at 2 tool calls → 16.7 % at 150).

**The better-evidenced replacement is OpenAI's own explanation:** models were trained in a regime where a confident wrong answer scored better than *„ich weiß es nicht."* One sentence, and it explains confident wrongness, sycophancy, fabricated citations and invented tool parameters together. **Hand to [How deep the theory goes](03-theory-depth.md) — that ticket's central proposal needs rewriting, not trimming.**

### Two of the brief's four quirks are factually dead

Not to be trimmed — **inverted**:

- **„Kein Gedächtnis zwischen Chats"** is false. Memory is on by default on both products (Claude: real-time per-project entries in an editable panel; ChatGPT: background synthesis, June 2026).
- **„Das Kontextfenster ist voll"** is false as a hard wall. 1M tokens on paid plans plus automatic summarisation, so conversations continue indefinitely in most cases. The wall is gone; what replaced it is **invisible decay**, which is a different and harder lesson.

Recommendation carried into ticket 03: cut *Kontextfenster* and *Wissensstichtag* as nouns entirely.

### Where the central metaphor breaks — two clean, sourced cracks

- **Rung 3 (agents).** Colleagues notice their own mistakes. The measured distinguishing property of agents is the **no-recovery bottleneck** — an error made at step four is carried, not caught.
- **Rung 4 (autonomous loops).** It breaks outright. Project Vend phase two documents failures of **over-helpfulness**, not incompetence: an illegal onion-futures contract, a CEO agent that cut discounts 80 % and tripled refunds, two agents spiralling into „ETERNAL TRANSCENDENCE" overnight.

**The research argues for retiring the metaphor explicitly at rung four and naming its replacement out loud:** *ein Prozess, den Sie beauftragen — keine Person, die Sie briefen.* That is why every documented fix is a procedure, a role, or an approval gate rather than a better instruction. This is a genuine finding, not a caveat: the map treats the metaphor as governing everything, and there is now a sourced boundary on it.

### Demo ranking (§6), and what the map already did with it

1. **Cowork: messy folder → real Excel with working formulas.** → **Taken.** Became session one's opening showcase (see [The lesson sequence](01-lesson-sequence.md)); assets built at `assets/auftakt-showcase/`.
2. **Show them what it already remembers about them.** 90 seconds, lowest risk, highest surprise, and the most likely thing in the session to be repeated to a peer at dinner. Needs a non-empty account — fails on a fresh one.
3. **Schedule a task and let them find it later** — runs with their laptop shut. The only demo that reaches into their week. **Leading candidate for session two's agent demonstration.**
4. **The citation audit** — the anti-wow. *Run 1 and 4 as a pair, in that order*; the wow needs its antidote in the same block.
5. **Browser actions.** Backup only: METR measures computer-use time horizons **40–100× lower** than software, and it drags prompt injection into the room.

Rejected: multi-agent deep research (too slow, and its output is what #4 exists to undermine); FlipFlop (excellent, but belongs in session one); anything with readable code.

### Cut lists

Per rung in §2.4, §3.3, §4.5, §5.5. Cut everywhere: all benchmark names, all of prompt injection as a mechanism, the METR time-horizon chart (its own author published a note asking people to stop over-reading it), and every forecast.

### What could not be verified — nine items in §7, two that matter

- **No independent head-to-head quality comparison of Claude vs ChatGPT for knowledge work exists.** Anyone claiming one writes better is citing nothing. §3.2 therefore restricts itself to *architectural* differences that are first-party documented — memory transparency, memory scoping, where agentic work runs, permission granularity, vendor-admitted gaps. **The session must refuse the quality question**, which an executive will certainly ask.
- **No first-party documentation of German-language behaviour for any of these features.** Given the session language, this needs testing before delivery — a candidate task ticket.

### Dating risk

§8 ranks it. The product layer moves fastest: ChatGPT Work launched 9 July 2026 — seventeen days before this research — simultaneously killing „ChatGPT agent" and sunsetting Atlas. The rung-3/rung-4 boundary is currently **a literal button in the same message box**, which is the best teaching device available and also the material most likely to be wrong by the third client.
