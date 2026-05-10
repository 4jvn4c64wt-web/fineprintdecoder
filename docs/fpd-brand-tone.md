# FinePrintDecoder — Brand Tone & Personality

*What the site feels like to a visitor. Separate from (but aligned with) the writing style guide.*

---

## 1. The One-Sentence Brand

**FinePrintDecoder is the friend who actually reads the contract before you sign it.**

---

## 2. Brand Personality Traits

If FinePrintDecoder were a person at a party, here's how they'd come across:

**Competent, not showy.** They clearly know what they're talking about, but they don't name-drop their credentials or try to impress you. They just explain things well.

**Dry, not jokey.** They might deadpan a comment about an absurd clause ("They reserved the right to change the terms at any time, for any reason, with or without notice — so, at their complete discretion. Comforting."). But they're not doing a bit. The humor is in the observation, not in trying to be funny.

**Helpful, not eager.** They answer your question directly. They don't ask if there's anything else they can help with. They don't sign off with a smiley face.

**Neutral, not adversarial.** They tell you what the policy says — the dollar amount, the deadline, the condition — and let you decide whether you like it. They don't say "the company hopes you won't notice" or "they bury this on purpose." That kind of framing reads like a consumer-advocacy blog with an axe to grind, and it makes the reader trust the summary less, not more. The facts of an unfavorable clause are persuasive on their own. Editorializing on top is noise. If a policy is fair, we say so. If a clause is unusual, we describe what makes it unusual without speculating about why the company wrote it that way.

**Precise, not pedantic.** They care about accuracy. "14 calendar days" and "14 business days" are different things, and they'll make sure you know which one applies. But they won't lecture you about why the distinction matters.

---

## 3. The Triage Philosophy

Every page is built around a question: *what did this reader come here to do?*

A person searching "Amazon return policy" is trying to return something. They are not trying to audit Amazon's contractual relationship with humanity. The page should:

- Answer the practical question first, in seconds.
- Then offer the practical mechanics (the "how to").
- Then flag what could trip them up while doing the practical thing.
- Then — and only then, behind a click — offer the deeper read for people who actually want it.

This means most pages will have a visible portion that is short and an expandable portion that is comprehensive. The voice is the same in both, but the visible portion is ruthlessly triaged for actionability and the expandable portion can be more thorough.

Why this matters: the alternative — dumping everything we found into one long page — is what every other site does. It makes us feel diligent ("we read the whole thing!") but it makes the reader's job harder. A reference site that wastes reader attention isn't a reference site. It's a content farm with better intentions.

---

## 4. How the Tone Shifts by Page Type

### Policy summary pages (the core product)
- **Most neutral.** Informational. Factual. Occasional raised eyebrow.
- Think: a well-written reference page. Not a blog post. Not an opinion piece.
- The "Watch Out For" section is where the slight editorial voice comes through — flagging things that are unusually restrictive or non-obvious. But even here, the tone is "here's what you should know," not "can you believe this?!"

### Homepage
- **Slightly warmer.** This is the one place we sell the concept. Still direct. No marketing speak.
- Confident: "We read the fine print so you don't have to."
- Not cute: no wordplay, no puns, no trying too hard.

### About / How We Work pages
- **Most personal.** This is where Chris's credibility comes through.
- Still concise. No origin story epic. Just: who we are, why we do this, how we do it.

### Social media / content marketing
- **Most personality.** This is where the dry humor gets a longer leash.
- The format is: surface the most surprising or absurd clause, state it plainly, link to the full decode.
- Not outrage bait. Not clickbait. Just: "Here's a real clause from a real agreement."

### Error pages / empty states / footer
- **Brief and human.** A 404 page can say "This page doesn't exist. The policy you're looking for may not be on the site yet." One line. Done.

---

## 5. What We Sound Like vs. What We Don't

| We sound like | We don't sound like |
|---|---|
| A smart colleague explaining something over coffee | A law firm's website |
| A well-edited Wikipedia article with personality | A Reddit rant about corporate greed |
| Consumer Reports, but less dry | BuzzFeed, but less breathless |
| The Wirecutter's "Bottom Line" boxes | A terms-of-service document |
| A good newspaper's consumer section | A personal blog with a grievance |

---

## 6. Design Tone (for when we build the actual site)

The visual design should match the verbal tone:

- **Clean, not minimal-chic.** We're not a design portfolio. We're a reference tool. The design should get out of the way of the content. Think Wirecutter, not Apple.
- **Readable above all.** Big enough type. Enough whitespace. High contrast. People come here to read, fast.
- **Professional but not corporate.** No stock photos. No gradients. No hero images of smiling people. If we use color, it's functional (status indicators, category coding).
- **The template IS the brand.** The consistent structure of every policy summary — Bottom Line, Key Facts, How To, Watch Out For, with Full Breakdown and Legal Fine Print collapsed by default — is the most distinctive thing about the site. Nail the template, and the brand follows.
- **No emojis.** Visual hierarchy comes from typography, color, and layout — not icon characters. Emojis are an AI tell and they cheapen a reference site. The only acceptable use of unicode-icon-like marks is functional UI affordances (a `+` to indicate a collapsible expanding, a back arrow in breadcrumbs).

### Color associations (suggested, not final)
- Primary: a deep blue or dark teal. Trustworthy. Not flashy.
- Accent: a warm amber or orange. For warnings, highlights, the "Watch Out For" section.
- Background: white or very light warm gray. Nothing dark-mode-first.
- Text: near-black (#1a1a1a), not pure black. Easier on the eyes.

### Typography direction
- Body: a clean sans-serif with good readability at small sizes. Inter, Source Sans, or similar.
- Headings: the same family, or a slightly heavier weight. We're not mixing fonts for style.
- Monospace only if quoting exact policy language verbatim.

---

## 7. What Distinguishes Our Tone from the Competition

**vs. TOS;DR:** They rate policies with shields/grades. Their tone is community-wiki — functional but flat. We have a voice. We explain *why* something matters, not just that it exists.

**vs. SEO content farms ("What is Amazon's return policy?"):** They pad 200 words of actual information with 1,800 words of filler to hit a word count. We lead with the answer and stop when we've said what needs saying.

**vs. Consumer advocacy blogs:** They often have an angry or activist tone — "Company X is SCREWING you." We don't. We don't even use phrases like "companies hope you won't read this" or "buried in fine print to trap you." We flag the same restrictive clauses but our tone is calm and factual. The reader draws their own conclusion. The neutrality is a deliberate trust signal: a calm description of an unfavorable clause is more credible than an outraged one.

**vs. The company's own policy page:** They bury the important stuff in legal language and structure the document to protect themselves, not to inform you. We restructure around what the reader actually needs to know.

---

## 8. Tone Guardrails

Things that would break the brand if they appeared on the site:

- Exclamation points in policy summaries (the homepage gets one, maybe)
- The word "amazing" or "incredible" or "game-changing" describing anything
- **Any emoji, anywhere.** Section headers, inline, footers, error pages — none of it. They're an AI tell. The site's visual hierarchy is typographic, not iconographic.
- A pop-up asking for an email address before the reader has seen any content
- Autoplaying anything
- Any sentence that starts with "In today's"
- Any comparison to other companies' policies unless directly relevant and factual
- Affiliate links without disclosure
- Content that reads like