# Skill Prompt: Executive AI Enablement Session Builder (1:1, 3 Hours)

Copy the block below into your skill as the core instruction body.

---

## THE PROMPT

### How to read this brief: everything here is a first draft

Nothing in this document is settled. The content, the design, and the instructional method are all open, and all three should be challenged.

These are considered drafts, not arbitrary ones. Every choice here has a reason behind it, and the fastest way to be useful is to find the reason first and then attack it. But none of them should survive simply because they are already written down. Drafts develop a gravitational pull the moment they exist, and the point of this session is to break that pull.

**Layer 1 - Content.** The block structure, the sequence of theory and labs, the topics covered, the exercises, the supplied assets, the use-case menu, the discovery conversation. Question whether each lab earns its place, whether the order builds correctly, whether anything essential is missing, and whether anything here exists only because it sounded good.

**Layer 2 - Design and messaging.** The session title, the two message threads, the closing line, the color rhythm, the typography, the icon system, the image style, the slop constraints. The framing was chosen for a specific emotional target: an executive with deep judgment who feels behind on a tool their junior staff use casually and quietly does not want to look foolish. Test whether the messaging actually hits that target or just sounds pleasant. Test whether the visual system is genuinely distinctive or merely competent.

**Layer 3 - Instructional method.** The debrief structure, the andragogy principles, the ladder of autonomy as spine, the theory-then-practice rhythm, the decision to demonstrate rather than teach agents. These are drawn from established learning theory, which makes them defensible but not automatically right for this format, this audience, or this length. Challenge whether the theory is being applied correctly or just cited.

**How to challenge well.** Be specific and propose replacements. "The middle section drags" is less useful than "Lab 3 and Lab 4 teach the same lesson twice, cut one and use the time for X." Where you think something is wrong, say what you would do instead. Where you think something is right, say so briefly and move on rather than padding the critique. Disagreement is the deliverable here, not diplomacy.

### Framing and messaging

**Session title:** You Already Know How to Do This
**Subtitle:** The assistant you always wished for.
**Closing line:** If you can brief a person, you can do this.

The audience is an executive with deep judgment and decades of experience who feels behind on a tool their junior staff use casually, and who quietly does not want to look foolish. Every line in the deck should carry the same underlying message: you are not missing a technical skill, you are missing someone to hand things to. Briefing a model is briefing a person. They have done that ten thousand times.

Two threads run through the whole session and should be called back explicitly:

*Thread A - you already have the skill.* Prompting is briefing. Context, task, format, constraints, an example of what good looks like. That is exactly what they give a new team member on day one. Reinforce this at every lab: when a prompt works better, name why in delegation language, not technical language. Never say "prompt engineering." Say "a better brief."

*Thread B - the assistant you always wished for.* Frame the tool as a capable new hire: extremely well read, tireless, available at eleven at night, no memory of yesterday unless you remind it, occasionally confidently wrong, and in need of a clear brief. Every limitation becomes an onboarding quirk rather than a technical flaw. Every strength becomes a reason to delegate.

Tone rules that follow from this:
- Never imply they are behind or need to catch up.
- No jargon, and no vocabulary that sounds like software. Brief, delegate, review, hand over, sanity-check.
- Their experience is the scarce ingredient. The machine supplies hands, they supply judgment. Say this plainly at least twice.
- Confidence is the actual deliverable. Understanding is a means to it.

**Opening slide.** Full-bleed cinematic image: a human hand and a robotic hand reaching toward each other, close-up, Sistine Chapel tension, deep navy background with electric blue rim light. Text set left over the lower third, in three clear tiers of hierarchy:

1. Headline, large, two-tone: "You already know how to do this" with the last three words in accent blue.
2. Subtitle, lighter weight, smaller: "The assistant you always wished for."
3. A single quiet line at the bottom, small, in accent blue, set apart with generous space above it: "If you can brief a person, you can do this."

The third line is the confidence unlock and it must appear here, on the first slide, before any theory. State it, then let the facilitator say it out loud and move on. Do not explain it yet. The whole session is the proof.

No logo clutter, no bullet points, no agenda preview. The image does the emotional work, the headline does the framing, the last line does the reassurance.

Image generation prompt for the opening slide: extreme close-up of a weathered human hand and a precision robotic hand reaching toward one another, fingertips almost touching, shallow depth of field, cinematic key light from the left, deep navy blue background with soft electric blue rim lighting on the metal, photorealistic, high detail on skin texture and machined surfaces, film grain, moody and premium, wide aspect ratio with negative space on the left for text.

### Positioning: model, not brand
This is not a Claude course. Teach the underlying technology and treat the chat application as one window onto it.

- The large language model is the engine. Claude, ChatGPT, Gemini, Copilot, Codex and the rest are different cockpits built on comparable machinery.
- Make this explicit early: what they learn transfers. Prompting, context, verification and judgment work the same everywhere. Only the buttons move.
- Name the landscape once, briefly and neutrally, so they understand the category rather than a single product. Do not benchmark or rank vendors.
- Use Claude for the labs because it is what they have installed, and say so plainly. Where a feature is product-specific (file upload, projects, artifacts), flag it as "most tools have some version of this."

### Audience and context
- One senior executive, smart but non-technical. No jargon without explanation.
- Prerequisite: Claude installed and logged in. Nothing else required.
- Goal by the end: they understand how the technology works, know its limits, have run 8-10 prompts hands-on, and leave with 3-5 use cases they selected themselves plus a PDF of their own session output.
- No prerequisite homework and no dependency on material they bring. See exercise design below.

### Exercise design: everything is supplied
Every lab runs on material the deck provides. The executive should never need to hunt through their inbox or find a document. This keeps the session on schedule and lets them focus on the technique rather than the content.

- Each lab slide carries a downloadable asset where relevant, embedded as a base64 data URI or a clearly marked file link so the deck stays self-contained.
- Assets to generate and include: a messy sample spreadsheet (timekeeping data, inconsistent formatting, a few hundred rows), a long sample report or policy document as PDF or text, a badly written sample email, and a sample meeting transcript.
- Each lab states the exact task, the copy-ready prompt, and one line on what to look for in the output.
- Real personal material is optional and welcome, never required. Add an "if you'd rather use your own" note on each lab.

### Deliverable
One HTML file (or small set of linked pages) as a clickable presentation:
- Structured as lessons and labs, navigable by click or arrow keys, with a subtle progress indicator.
- Slides deliberately light: a headline, at most three short lines, one visual. Depth lives in the labs and speaker notes, not on screen.
- Design: see the established design language section below. It must NOT look like generic AI-generated slop: no purple gradient on everything, no glassmorphism cards everywhere, no emoji bullet lists, no centered-everything layouts. Asymmetry, generous whitespace, restraint, strong typographic hierarchy.
- Typography: a distinctive Google Font pairing loaded via link tag. A geometric display font with character for headlines (Space Grotesk, Sora, or Outfit) paired with a clean text font (Inter or IBM Plex Sans). Never Roboto or Open Sans.
- All colors and fonts as CSS variables at the top for easy rebranding.
- Hidden or collapsible speaker notes per slide, written for a 1:1 facilitator: conversation starters, questions to ask, things to watch for. Not a script.
- **Export function.** Anything the executive types into the deck must survive the session. Include a clearly visible export button that produces a clean PDF of their captured use cases and notes, styled to match the deck. Persist entries in browser storage so an accidental refresh does not wipe the session.

### Image generation pipeline

[IMAGE GENERATION SETUP - to be filled in: which integration, MCP server, or tool will actually generate these images, plus the model, aspect ratios, and output path convention. Until this is specified, generate the placeholder blocks and their prompts only, and do not attempt to produce images directly.]

Once the pipeline is specified above, every [IMAGE] placeholder should carry a prompt written in the format that pipeline expects, and images should be generated and embedded rather than left as placeholders.

### Image and animation placeholders
- Where a visual strengthens a slide, insert a marked placeholder: a styled div labeled [IMAGE], a one-line description, and a ready-to-use generation prompt (Flux, Midjourney, or similar) matching the aesthetic below.
- Place 6-8 across the deck, concentrated on theory slides where an image carries the concept better than text: opening slide, the "well-read new hire" analogy, strengths vs weaknesses, context, the use-case gallery, the closing slide.
- Everywhere else use icons rather than images. A well-set icon plus a short headline beats a generated picture on most slides.
- Subtle CSS animation only: fade-in on slide entry, gentle accent motion. Nothing that competes with the conversation.

### Established design language

**Color rhythm.** Roughly 75 percent of slides are dark: deep navy base (#0A1628 to #0D1B2A) with a soft radial fade, lighter toward one focal area, never a flat fill. The remaining 25 percent are light slides on near-white (#F7F8FA) with near-black text, used deliberately as rhythm breaks: before the break, at the start of a new block, and for the discovery conversation where a bright canvas invites writing. Accent is a luminous electric blue (#4DA3FF to #6FC3FF) for highlights, icon strokes, and single emphasized words.

**Headline treatment.** Two-tone headlines: part white, the key word in accent blue or a heavier weight. Left-aligned, large, tight leading. One idea per slide.

**Icons.** An icon system throughout, structural rather than decorative: every use case, lab and concept gets one. Lucide (lucide.dev) as primary library, loaded via CDN or inline SVG so the file stays self-contained. Phosphor Icons as fallback for missing glyphs. Stroke-based, 1.5px weight, accent blue on dark slides, near-black on light. Never mix icon families. Never use emoji as icons.

**Image generation style.** Human-meets-machine register: a human hand and a robotic hand reaching toward each other, close-up mechanical detail, cinematic lighting, deep navy background with blue rim light. Photographic and rendered, deliberately artificial but with a human element in frame. Also acceptable: minimal line-art diagrams in accent blue on dark, and clean 3D renders on white for light slides.

**Avoid.** Glowing-brain-on-circuit-board imagery and floating-hologram-icon collages. They are the visual equivalent of a stock photo handshake and undercut the premium feel. Prefer bold typographic layouts with a single icon, or the hand imagery, over generic AI symbolism.

### Instructional method

The session follows the experiential learning cycle (Kolb): concrete experience, reflection, conceptualization, then application. Most technology training skips reflection entirely and stays a demo. This one must not.

**Every lab ends with a structured debrief.** Three questions, on the slide, worked through out loud before moving on:
1. What just happened?
2. Why did it work, or why didn't it?
3. Where else in your week does this exact shape appear?

The third question is the one that transfers the learning. Without it the executive has watched a trick. With it they have found a pattern. Keep the debrief short but never skip it.

**Andragogy principles that govern the tone** (Knowles): adults need to know why before how, they are self-directed, their prior experience is the richest resource in the room, and they are problem-centered rather than content-centered. Practical consequences for this deck:
- State the why before every theory section. One line, then the content.
- Their thirty years of context is the scarce ingredient, not an obstacle. The model supplies fluency, they supply judgment about what is actually true and what actually matters here.
- Never teach a concept that does not cash out in something they do within the next ten minutes.
- Let them choose within labs wherever possible. Supplied material is the default, their own material always an option.

**Rhythm.** Theory is front-loaded within each block, not perfectly alternating throughout. Block 1 is short theory bursts with quick labs. Block 2 is longer working stretches with much less talking. Block 3 shifts again into reuse and demonstration. That change in texture is what stops the later hours feeling like a repeat of the first.

**Honest constraint to design around.** Single-session formats reliably fail to change behavior on their own, because concepts need to be applied to real problems and refined with feedback over time. This session is therefore explicitly framed as the kickoff of a program, not a course. The weekly follow-ups are not an upsell, they are the part that makes the session work, and the deck should say so plainly near the end.

### The ladder of autonomy

Introduce this early, as one slide with four rungs and one icon each, then return to it at the start of every block so the executive always knows which rung they are standing on. It is the spine of the whole session.

1. **Ask.** A question, an answer. Where most people stop.
2. **Brief.** Context, task, format, constraints. Where the quality jump happens.
3. **Reuse.** A brief you write once and use forever, saved into the tool.
4. **Delegate.** Something that acts on its own, takes multiple steps, and reports back.

Rungs 1 to 3 are taught hands-on. Rung 4 is demonstrated, not built. The point of showing rung 4 is imagination, not skill: they should leave able to picture where this goes, and curious enough to ask about it at the next catch-up.

### Curriculum to implement

This is a content sequence, not a schedule. Durations are deliberately omitted. The session runs roughly three hours, but the facilitator follows the conversation: if a lab opens something up, stay in it; if a theory section lands in two minutes, move on. Do not print timings on slides. Speaker notes may carry a rough sense of weight (short, medium, extended) where it helps pacing.

---

**BLOCK 1 - HOW IT ACTUALLY WORKS**
Short theory bursts, quick labs, fast wins. Goal of this block: demystify, and get the first "oh" out of the way early.

**0. Opening**
Title slide as specified above. The promise: by the end you'll know when to use this, when not to, and you'll have done real work with it. Land Thread A immediately, before any theory.

**1. The engine and the cockpit**
What a language model is and what the chat window is. The model is the engine, the apps are cockpits built on comparable machinery. Name the landscape once, neutrally, no rankings. Say plainly that everything they learn today transfers.

**2. How it actually produces an answer**
Prediction, not retrieval. It is not looking anything up. Cover, in plain language and with a visual: it was trained on an enormous amount of text and predicts what comes next; it has a knowledge cutoff; it has a context window, which behaves like short-term memory and is why long conversations start to forget the beginning; and it has no memory of yesterday unless you tell it. This is the single most useful theory slide in the deck because every quirk they will hit later traces back to it.

**3. Why it is sometimes confidently wrong**
Hallucination explained as a direct consequence of prediction, not as a bug or a mystery. Fluency and accuracy are separate things. Rule of thumb: use it where you can verify the output, and verification is exactly what their experience makes cheap for them.

**LAB 1 - First contact and the skeptic test**
Two quick rounds. First, ask it to explain your own role to a 12-year-old, then follow up, then disagree with it and watch it reconsider. Second, ask something from your own field where you know the answer cold, then something obscure and specific, and catch it being confidently wrong.
Debrief: what happened, why, where else does this shape appear.

**4. The ladder of autonomy**
Introduce the four rungs. Tell them where today goes: hands-on to rung three, a look at rung four. This slide is the map for the rest of the session.

---

**BLOCK 2 - THE BRIEF**
Longer working stretches, much less talking. Goal of this block: the quality jump, felt personally.

**5. Prompting is briefing**
Context, task, format, constraints, an example of good. Frame it entirely in delegation language. The words "prompt engineering" do not appear in this deck. Their briefing instinct is the skill; the only new part is that this colleague needs everything said out loud because it cannot read the room.

**LAB 2 - The same task, three ways**
Supplied scenario and background brief, e.g. declining a vendor proposal. Round one: the lazy six-word prompt. Round two: add context and audience. Round three: add format, tone, length and one example sentence they like. Compare side by side.
Debrief, plus the explicit callback: nothing technical happened here, they just briefed better.

**6. Context is the leverage**
Why it improves dramatically once it has their material. Documents, data, background, constraints. The difference between asking a stranger and briefing a colleague who has read the file.

**LAB 3 - The document lab**
Supplied long report or policy document. Three tasks: summarize for a peer in five bullets, extract every decision and open question, then find what is weak or missing in the argument. The third task is the one that surprises people, because critique is what they expected a machine to be bad at.
Debrief.

**LAB 4 - The data lab**
Supplied messy spreadsheet: timekeeping data, inconsistent formats, merged cells, a few hundred rows, a couple of planted errors. Tasks: find the pattern, build the formula they would otherwise google, clean the mess, produce a chart-ready summary.
Debrief, and one extra question asked deliberately and then left alone: how long would that normally have taken you? Do not editorialize the answer. Let the number sit.

---

**BREAK**

---

**BLOCK 3 - REUSE AND AUTONOMY**
Goal of this block: raise the ceiling. They have seen it work; now show them it compounds.

**7. From a good brief to a reusable one**
Rung three. Most tools now let you save a brief so you never write it again: saved instructions, projects, custom assistants, skills. Keep it vendor-neutral, demonstrate in Claude because that is what they have. The pitch: you already wrote a good brief in Lab 2. Writing it once and reusing it forever is the entire idea.

**LAB 5 - Build your own reusable brief**
They take the best brief from earlier in the session, refine it, and save it. This is the single most valuable artifact they leave with and it goes into the PDF export. Keep it small and achievable: one brief, done properly.
Debrief.

**8. What an agent actually is - demonstration only**
Rung four. Multi-step work, uses tools, acts, reports back. Facilitator demonstrates one genuinely agentic task live. The executive watches. Do not attempt to have them build one; that burns time and confidence for no gain. The deliverable here is imagination, and a question they bring to the next catch-up.

**9. Judgment, risk and governance**
Confidentiality basics and what not to paste. Verification as a habit, not a fear. Drafts not decisions, accountability stays human. No regulatory or compliance content in this session.

---

**BLOCK 4 - MAKING IT YOURS**
Goal of this block: convert everything into their own list.

**10. Where would you want an assistant?**
The payoff. Three parts.

*Part A - the menu.* A browsable gallery of 20-25 concrete use cases as icon cards, grouped by category: communication, analysis, preparation, research, drafting, decision support, routine admin. Each card is one plain line, e.g. "turn a messy meeting transcript into decisions and owners" or "reconcile two lists that should match but don't." The menu exists because almost nobody can answer "what would you automate?" from a blank page, but everyone recognizes their own pain instantly when they see it named. Cards are selectable.

*Part B - the personal lens.* Facilitator works through: which recurring tasks eat your time but not your brain? Where do you move information from one place to another by hand? What do you always postpone because it's tedious? Where do you wish you had a sparring partner before deciding? If a sharp assistant started Monday, what's the first thing you'd hand over?

*Part C - the organizational lens.* The second pass, and commercially the most important slide in the deck. Same cards, different question: where does this same pattern repeat across your organization? Who else does this task, how often, in how many departments? One executive's tedious Tuesday is mildly interesting. The same task performed by forty people across three functions is a business case. Capture these separately from the personal list.

Both lists are captured in editable fields and carried into the export.

**11. Your next 30 days**
The habit, stated simply. Then the follow-up structure, framed honestly: a single session does not change behavior on its own, which is why the weekly catch-ups exist. Review what they tried, unblock what stalled, turn captured use cases into deeper work. Export the PDF together on screen so they leave holding it: their reusable brief, their personal list, their organizational list.

**12. Closing slide**
Full screen, the same line that opened the session: "If you can brief a person, you can do this." Echo the opening image at reduced opacity behind it. Nothing else.

The repetition is deliberate and must not be varied. On slide one it was a promise they had no reason to believe. Here it describes what they just spent three hours doing. Same words, entirely different weight. The facilitator says nothing after showing it.

---

### Build instructions
1. First output a one-page scope summary: structure, page list, font pairing, color variables, list of image placeholders, list of supplied assets. Proceed unless something is genuinely ambiguous.
2. Generate the supplied lab assets as real files, then embed or link them from the relevant lab slides.
3. Then build the complete HTML.
4. Keep slide text minimal. More than three lines of body text means it belongs in speaker notes.
5. Every lab slide gets the exact copy-ready prompt, the supplied asset, a "what to look for" line, and the three-question debrief. No countdown timers.
6. Assets to generate: a messy spreadsheet, a long report or policy document, a badly written email, a meeting transcript, and a one-paragraph scenario brief for Lab 2.
7. Tone: confident, warm, slightly playful. A working session between two adults, not a keynote.

---

## Notes for you (not part of the prompt)

**What the research changed.** Three things.

*Debriefs.* Kolb's experiential cycle is experience, reflection, conceptualization, application. Corporate tech training almost always does the first and skips the second, which is why demos feel great and change nothing. Adding a fixed three-question debrief after every lab is the highest-leverage edit in this version and costs about two minutes each.

*Andragogy.* Knowles' principles line up almost eerily with the framing you already chose: adults are problem-centered, self-directed, and their prior experience is the richest resource available. "You already know how to do this" is not just a nice line, it is the textbook-correct pedagogy for this audience. The deck now states the why before each theory section and never teaches a concept that does not get used within ten minutes.

*Honesty about single sessions.* The literature on executive AI programs is consistent that one-off workshops rarely produce lasting behavior change, because concepts need repeated application with feedback. Rather than hide from that, the deck now says it out loud near the end. It makes your weekly catch-ups sound like the design rather than the upsell, which is both true and considerably more persuasive.

**What competitors are doing.** Executive AI programs cluster around a common shape: a readiness assessment up front, hands-on demonstration rather than lecture, use-case identification as the core workshop, risk and governance as a module, and a 90-day roadmap co-created at the end. Your structure now covers all of it except the readiness assessment, which you deliberately cut. Where you differ, and where the offer is stronger, is the 1:1 format and the reusable brief they physically leave with.

**Content gaps that were worth closing.** The old version never explained the context window, which is the root cause of half the confusing behavior they will hit in week one. It also never mentioned the knowledge cutoff or explained hallucination as a consequence of prediction rather than a mysterious defect. Those three ideas are now one theory block and they will save you a dozen confused questions at the catch-ups.

**On timing.** Deliberately unspecified. Each block is self-contained: if you run long, Lab 4 and a few use-case cards are the natural things to drop. Lesson 10 never gets cut, whatever the clock says.

**On the two-lens discovery.** Part C is the commercial engine of the whole session. Everything before it builds the credibility to ask that question well.
