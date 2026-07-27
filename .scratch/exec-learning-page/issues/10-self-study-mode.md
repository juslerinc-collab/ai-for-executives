# Facilitated versus alone

Type: grilling
Status: open
Blocked by: 05

## Question

What is different about the page when the executive opens it alone in week three, with no facilitator?

The whole reason for abandoning the deck format was that a deck puts the substance in speaker notes the executive never sees again. That decision solves the problem in principle. It does not say what the two modes actually are.

To resolve:

- Is there a mode switch at all, or one page that simply works both ways? A switch is honest but adds a whole second state to design and build.
- What does the facilitator need that the executive should not see — pacing weight, conversation starters, things to watch for, the questions to ask? And does the facilitator need it on screen at all, given they are sitting beside one person rather than presenting?
- Conversely: what does the solo reader need that the live session supplies out loud? The debrief questions are the sharp case — live, they are asked and discussed; alone, they are three questions on a page with nobody to answer to.
- Does the executive re-run labs alone, or is the revisit really about the backlog and the reusable brief? This decides whether the lab pages need to stand on their own or can assume the session happened.
- What happens to captured data if they reopen a fresh copy of the file — see the persistence problem in [The use-case backlog and matrix](06-backlog-matrix-prototype.md).

## Inherited from [The teaching model](12-teaching-model.md)

**Solo revisit was promoted from fallback to design target.** The executive is expected to reopen the file alone after each session to revisit the theory and re-run the examples. That settles one sub-question above in the strict direction: **lab pages cannot assume the session happened.**

**Two levels of navigation are required — chapters and subchapters.** Jumping to a specific lesson, or to a part within it, must be trivial with no facilitator present. Combined with the voice-navigation requirement below, the section menu is load-bearing in *both* modes — which kills this ticket's inherited assumption that navigation mattered mainly for the revisit.

**A facilitator-only view became cheap and safe.** The session runs on **parallel copies with no screen share**, so the two screens are already separate and there is no mis-share risk. Whether to build one is still this ticket's call — but the cost argument that would have counted against it is gone.

**Two things are now looking for a home on the facilitator's side, if that view exists:**
- **The reflection questions.** The brief's fixed three-question debrief was killed; only the single capture question is on the executive's screen. Reflection stays in the air — but Kolb's reflection stage is the one corporate training reliably skips, and a facilitator running late will skip it too. Prompts on the facilitator's copy are the obvious hedge.
- **Pacing weight and the resync burden.** Leading by voice across two independent copies means the facilitator carries navigation state in their head. *(Graduated in from the map's fog: **Facilitator pacing aids** and **Revisit behaviour** were both fog patches and are now this ticket's, sharply enough to work.)*

**A live moment to design for:** loading last session's JSON board at the start of session two, on both screens — see [The use-case backlog and matrix](06-backlog-matrix-prototype.md).
