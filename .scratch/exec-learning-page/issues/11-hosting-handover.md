# Hosting and handover

Type: grilling
Status: resolved

## Question

How does the executive actually receive this, and does anything gate access?

Settled already: authored as multiple files, built into one self-contained HTML file. That single file is both the emailable artifact and the thing that gets hosted, so this ticket does not reopen the architecture — only the delivery.

To resolve:

- File handover, hosted URL, or both? Both is nearly free given the build output is one file.
- If hosted: where. GitHub Pages was the user's instinct, but it cannot password-protect — it is public, full stop. Cloudflare Pages and Netlify can gate properly. A password baked into static HTML is bypassable via view-source and is a "do not wander in" sign rather than security.
- Does anything here genuinely need gating? The content is a training session, not client-confidential material. The honest answer may be that a soft gate is sufficient and the whole question is smaller than it looks.
- Versioning across clients: when the content improves after client three, do earlier clients' copies update? A hosted URL says yes, a handed-over file says no, and that is a real difference in what you are promising.

Low priority — nothing else in the map is blocked on it.

## Answer

**The ticket was mis-titled.** [The teaching model](12-teaching-model.md) requires **parallel copies, no screen share** — the executive opens her own copy in the first minute of session one. This was never a handover after the fact; it is an access problem from the start, and a handover only at the very end.

### Delivery

**A hosted URL is the sole delivery for the whole engagement.** The single-file download is offered **once, at the end of session two**, as a permanent offline archive.

The ticket's own premise — *"both is nearly free given the build output is one file"* — is wrong, for two reasons:

- **State fragments across origins.** `file:///…` and `https://…` are different origins with separate, non-shared browser storage. A copy opened both ways splits its data silently, with no warning. (Rendered moot by the read-only decision below, but it was the decisive argument at the time and still rules out casual dual delivery.)
- **Corporate mail gateways routinely strip or quarantine `.html` attachments** — a standard malware vector. Emailing a senior executive an HTML file has a real chance of never arriving, and it fails at the worst possible moment: the opening minute of session one.

### Hosting

**Netlify. One site per customer.** Long term, a subdomain of one owned domain — `kunde.deinefirma.de` — rather than a registered domain each: same per-client isolation, no per-client purchase, no renewal calendar stretching years past the engagement. **For customer one, a neutral `*.netlify.app` subdomain** — the domain purchase waits until there is a second customer.

Because her copy stores nothing (below), **moving her to a custom subdomain later is free** — a redirect, nothing lost. Had the data lived in her browser, changing origin would wipe it.

**Name the subdomain neutrally.** Not `ai-for-executives.netlify.app`. Since the gates are decorative, an unguessable URL is the only real barrier there is.

**Hosting runs indefinitely** — frozen static sites cost nothing on the free tier — with no maintenance promise attached. The archive file is what she owns outright; the URL is what gets hosted.

### Gating

**No real access control. Two hardcoded in-page gates, both jokes, in the same playful register:**

| Gate | Password | Purpose |
|---|---|---|
| Front door | `doris` | Opens with her own name — *this was built for you*, before she has read a word |
| Session two | `askclaude` | The hook, hinted by *„Was tun Sie, wenn Sie etwas nicht wissen?"* |

**Two joke gates cohere better than one real gate plus one joke.** A genuine login at the door followed by a playful one would make the second read as a broken authentication. Sharing a register establishes the pattern at the front door — by the time she reaches `askclaude`, she knows this site plays games with its locks.

**Early unlock of session two is a feature, and this overturns [The visual design standard](15-visual-design-standard.md)'s stated rationale.** That ticket locked session two so *"the executive should not skim unfacilitated material"*. The hint contains its own answer, so as an anti-skim measure the gate is decorative — and that is correct. An executive who solves the riddle has just performed the exact behaviour the engagement exists to install: she hit something she did not know and asked instead of stopping. Punishing the one person who demonstrated the habit would be perverse. **The lock's job is therefore a signpost and a teaching beat, not a barrier.** It also cannot leak much: behind it are titles and placeholders only until deploy 2.

**Neither password persists between visits.** She retypes `doris` each time — it keeps "her copy stores nothing" absolutely true, and the joke lands every visit rather than once.

**Rejected: real password protection.** Netlify's site-wide password is a **Pro-plan feature at ~$20/month** ([pricing](https://propicked.com/hosting/netlify/pricing)); Cloudflare Access does it free for up to 50 users via email one-time-codes. Either would have been defensible — a page that opens with a password *because it contains your company's use cases* is a professional signal, not friction. Ruled out for now as unnecessary ceremony on customer one.

**The rule that replaces it: nothing goes in the matrix she would not send in an unencrypted email.** This matters because baking her matrix in (below) **falsified this ticket's original premise** that *"the content is a training session, not client-confidential material."* Once her board is in the page, it holds her company's processes and bottlenecks. A password hardcoded in static HTML is visible in view-source, so the realistic protection is the unguessable URL, and the realistic threat is a forwarded link, not an attacker. In practice a use-case backlog says *"reports take too long to write"*, which clears that bar.

**Reversible per client.** Gating is per site, so a client with an actual security posture gets Netlify Pro and a real password. Nothing else in the design changes.

### Input and state — the executive's copy is read-only

**The facilitator is the only input path.** The executive types nothing into the page at any point.

Two reasons, and the second is the stronger one:

- **It removes every storage failure mode at once** — Safari's 7-day wipe of script-writable storage (which lands exactly on the one-week gap between sessions), cleared site data, private windows, laptop-versus-tablet splits. All of them were only risks because her machine held state. Now nothing of hers does. *(Internet Explorer is not a concern: retired June 2022, disabled February 2023. A corporate Windows laptop runs Edge, which is Chromium — no expiry. The 7-day rule is Safari-only.)*
- **Executives do not want to type into a form while talking.** Stopping a senior person mid-thought to fill a card kills the conversation the session exists to have. Scribing while they talk is how a good facilitator already works.

**Cost, accepted:** [The teaching model](12-teaching-model.md) argues her hand stays on the artifact all session as *"the cheapest possible rehearsal for using it alone in week three."* That argument now holds for the labs only — which is where the real rehearsal lives, hands-on in her own Claude window — and **not** for the matrix.

**How the board reaches her page — "baked", not synced.** `localStorage` never travels between browsers; it is the facilitator's working store during a session only, so a refresh loses nothing. The **JSON export is the record of truth**. At deploy 2 it becomes *source code*: written into the HTML as a `<script type="application/json" id="matrix-seed">` block and rendered as content.

Consequences: her page **never reads or writes browser storage**; her board is as durable as her headlines; the board can still sort and filter, it just reads from the baked block; and the hosted copy and the offline archive are byte-identical.

This is what makes the solo revisit work. She opens her link in week three and her board is simply there — no file, no import, no step. A file emailed in week one could never have gained her cards later; **only a URL can**.

### Deploys

**Exactly two, same URL, then frozen forever.**

1. **Before session one** — everything for session one; session two present but greyed out, titles and placeholders only behind `askclaude`.
2. **After session two** — session two's real content, plus her matrix baked in. This deploy's output is also the archive file she receives.

**Two deploys is a schedule concession, not a design principle** — session two's content is not written yet. Recorded explicitly because the lock has a *second, independent* justification (the hook above): anyone later reading only "we ran out of time" would be tempted to collapse the lock once time allows, throwing away the gag and the visible shape of the engagement. Both reasons stand on their own.

Same URL both times, so her link never changes and nothing she holds goes stale.

### Versioning across clients

**Frozen per client. No back-porting, ever.** When the content improves after client three, clients one and two do not receive it. Their page is the record of the sessions they had — their examples, their board, their language — and pushing a later client's improved sequence into it would overwrite their history with someone else's course. Outright errors get fixed; nothing else.

### Handed downstream

- **[The use-case backlog and matrix](06-backlog-matrix-prototype.md)** — hard requirements: a facilitator edit mode, mandatory JSON export, read-only rendering from a baked seed block. Its `Persistence` sub-question is answered and its import requirement is re-scoped.
- **[The visual design standard](15-visual-design-standard.md)** — unlock trigger filled in; anti-skim rationale amended.
- **Build** — must emit one self-contained HTML file that accepts a baked matrix seed block.
