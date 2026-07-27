# The AI-versus-automation decision tree

Type: grilling
Status: open

## Question

What does the decision tree in the basics section actually contain, and how far into automation does the session go?

Opened by [The sweet-spot pattern vocabulary](02-sweet-spot-taxonomy.md), which fixed the tree's three branches but not its content. Raised by the user as a content requirement in its own right: *"where AI helps and where it doesn't, where automation is better with the deterministic workflows."*

Settled already, do not reopen:

- **Three branches**, not two: **KI** (Sprache rein, Sprache raus, Urteil im Spiel, „gut genug und ich schaue drüber" akzeptabel) / **Automatisierung** (die Regel steht, das Ergebnis muss jedes Mal exakt stimmen) / **Bleibt bei Ihnen** (Entscheidung, Verantwortung, Beziehung — oder die Antwort steht zwischen zwei Quellen, die sich widersprechen).
- It sits **in the basics section, before the four steps** — it is not a gate the four hang off. It answers *should I be here at all?*; the four answer *what do I hand over?*
- The demonstration case is **Rechnungen gegen Bestellungen abgleichen**, and the answer is that it is not an AI case. AI enters one step later, at the *Klärungsmail an den Lieferanten*.

To resolve:

- **How far into automation does this go?** Naming that deterministic workflows exist and are better for exact-every-time work is one thing. Naming tools, RPA, ERP capabilities, or iPaaS is another, and it risks turning an AI session into an automation consultation. Where is the line?
- **How many worked examples per branch?** One each is fast and might be too thin to make the tree usable on a problem the executive brings. Three each is a lesson rather than a tool.
- **Is it interactive on the page, or static?** The page is a click-through site and the use-case matrix is already an interactive component. A clickable tree the executive can walk with their own problem would be the second interactive piece — decide whether that is worth the build, or whether a static diagram carries it.
- **Does the tree reappear at the backlog?** Every debrief drops a card, and the cards should arguably be tagged with a branch, not just a step — otherwise the backlog silently assumes everything on it is an AI case. Check against [The use-case backlog and matrix](06-backlog-matrix-prototype.md).
- **Where do the mixed cases go?** Most real executive work is an automation pipeline with a language step inside it. The tree as stated forces a single branch per problem. Decide whether that simplification is acceptable or whether the tree needs an explicit "beides" path — noting that the four steps' loop line (*„jeden Schritt können Sie auch schleifen"*) is where this reconnects.
- **Does this need its own lab, or is it a thinking tool only?** It is the one piece of content whose payoff is an executive *declining* to use AI, which is hard to make hands-on.
