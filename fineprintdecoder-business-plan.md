# FinePrintDecoder — Business Plan

**Version:** 1.0
**Date:** March 18, 2026
**Principals:** Claude (strategy, content, development) · Chris (agent, deployment, QA, legal review)

---

## 1. Purpose & Vision

### What is FinePrintDecoder?

FinePrintDecoder is a reference website that translates the fine print of consumer agreements — return policies, terms of service, cancellation terms, warranty conditions, credit card agreements, subscription traps — into plain, structured, scannable English.

### Why does it exist?

Every day, millions of people google things like "Amazon return policy," "Costco membership cancellation," or "Chase Sapphire annual fee waiver." What they get back is either:

- The company's own page — written in legalese, buried in a 4,000-word document, designed to obscure more than inform
- SEO content farms — thin articles that rewrite the first paragraph of the policy and pad the rest with filler

Nobody is doing this well. Nobody is reading the *entire* agreement, extracting the clauses that actually matter, flagging the gotchas, and presenting it in a format a normal person can use in 30 seconds.

That's what FinePrintDecoder does.

### Core promise to the reader

> "We read the fine print so you don't have to. But we show you exactly what it says."

### Why this business, specifically

This plays to a unique combination of strengths:

- **Claude's strengths:** Dense document comprehension, legal language parsing, structured summarization, high-volume content generation, consistent quality
- **Chris's strengths:** Legal training (Harvard Law, litigation associate), credit card/financial product expertise, existing web infrastructure (VPS + Cloudflare), QA judgment
- **Structural advantage:** Accurate legal summarization is hard to fake. AI-generated SEO slop can't reliably parse a 12,000-word Terms of Service and extract the three clauses that actually matter. Our content has a quality moat.

---

## 2. Goals

### Phase 1 — Foundation (Months 1–3)

- Launch site with 50–75 high-quality policy summaries across 3–4 categories
- Establish content format, style guide, and editorial standards
- Begin indexing in Google; target first organic traffic
- Set up basic analytics (Umami or similar privacy-respecting option)
- Revenue target: $0 (investment phase)

### Phase 2 — Growth (Months 4–8)

- Scale to 200+ policy summaries
- Implement ad monetization (display ads via Mediavine, AdSense, or similar)
- Begin affiliate integration where natural (credit cards, insurance, etc.)
- Launch social media presence (Twitter/X, maybe TikTok) with "outrageous fine print" content
- Target: 10,000+ monthly organic visitors
- Revenue target: $500–1,500/month

### Phase 3 — Authority (Months 9–18)

- 500+ policy summaries; become the definitive reference
- Build email list; launch weekly "Fine Print Watch" newsletter
- Pursue backlinks from consumer advocacy sites, personal finance blogs
- Explore premium features (alerts when policies you care about change)
- Target: 50,000+ monthly visitors
- Revenue target: $3,000–8,000/month

### Long-term north star

Become the Snopes of fine print — the site people instinctively go to (or link to) when they want to know what an agreement actually says.

---

## 3. Content Strategy

### 3.1 Content categories (launch priority order)

1. **Return & refund policies** — Highest search volume. Amazon, Walmart, Target, Costco, Best Buy, Apple, Nike, etc.
2. **Subscription & cancellation terms** — Gyms, streaming services, SaaS, subscription boxes. High frustration = high engagement.
3. **Credit card agreements** — Annual fees, APR triggers, benefit fine print, foreign transaction fees, price protection clauses. Plays directly to Chris's expertise.
4. **Warranty & protection plans** — Electronics, appliances, extended warranties. What's actually covered vs. what people assume.
5. **Terms of service (key clauses)** — Not full TOS summaries (too broad), but focused extracts: arbitration clauses, data usage, account termination rights.

### 3.2 Content format (per policy summary)

Each page follows a consistent, scannable structure:

```
[Company Name] [Policy Type] — Decoded

LAST VERIFIED: [Date]
SOURCE: [Link to original policy]

⚡ THE BOTTOM LINE
[2–3 sentence plain-English summary of what you need to know]

🔑 KEY FACTS
- [Structured key-value pairs: return window, restocking fee, etc.]

⚠️ WATCH OUT FOR
- [Gotcha clauses, hidden conditions, non-obvious restrictions]

📋 FULL BREAKDOWN
[Section-by-section walkthrough of the policy in plain English]

🔄 WHAT CHANGED
[Log of policy changes over time, if applicable]

📎 ORIGINAL DOCUMENT
[Link to source]
```

### 3.3 Editorial standards

- Every summary must link to the original source document
- Every summary must include a "Last Verified" date
- We state what the policy says — we do not give legal advice
- We do not editorialize beyond flagging objectively unusual or consumer-unfriendly clauses
- Tone: direct, clear, slightly wry. Not corporate, not angry-consumer-blog.
- Disclaimer on every page: "This is a plain-English summary for informational purposes. It is not legal advice. Always refer to the original agreement for the authoritative terms."

### 3.4 Content production workflow

1. **Claude** identifies target policy (or Chris requests one)
2. **Chris** locates the current, authoritative source document (or Claude identifies the URL)
3. **Claude** reads and produces the full structured summary
4. **Chris** reviews for accuracy, flags anything questionable
5. **Chris** publishes to the site
6. Summary enters the **update queue** (see Section 5)

Estimated throughput: 3–5 summaries per session. At 2–3 sessions per week, that's 6–15 new summaries/week during active production.

---

## 4. Technical Architecture

### 4.1 Site stack

**Static site generator** — The site is content-heavy and read-heavy with minimal interactivity. A static site is the right choice for speed, security, SEO, and low maintenance.

- **Framework:** Astro, Hugo, or 11ty (recommendation: Astro for flexibility + island architecture if we add interactive elements later)
- **Hosting:** Cloudflare Pages (free tier, global CDN, integrates with Chris's existing Cloudflare setup)
- **Domain:** fineprintdecoder.com (or similar — see domain options below)
- **CMS:** Markdown files in a Git repo. Claude produces markdown; Chris commits and deploys.
- **Search:** Pagefind (static search, runs client-side, no server needed)
- **Analytics:** Umami (self-hosted on Chris's VPS) or Cloudflare Web Analytics (zero-config)

### 4.2 Domain options (for Chris to check availability)

- fineprintdecoder.com
- readthefineprint.com
- decoded.fyi
- fineprintwatch.com
- whatthefineprint.com

### 4.3 SEO architecture

Each policy summary lives at a clean URL:
```
/amazon/return-policy
/costco/membership-cancellation
/chase-sapphire-preferred/annual-fee
```

Category index pages:
```
/return-policies
/cancellation-policies
/credit-card-agreements
```

Each page includes:
- Schema.org structured data (FAQPage or Article)
- Meta description matching the "Bottom Line" summary
- Internal links to related policies
- Breadcrumb navigation

### 4.4 Deployment workflow

1. Claude produces summary as a markdown file with frontmatter
2. Chris adds it to the repo (copy-paste or git commit)
3. Cloudflare Pages auto-deploys on push
4. No server management, no databases, no downtime risk

---

## 5. The Update Problem (and How We Solve It)

This is the hardest operational question: **How do we keep 500+ policy summaries current when companies change their terms without notice?**

### 5.1 Honesty about the challenge

We cannot monitor every policy in real time. We are not building a scraping infrastructure. We need a system that is honest about freshness and sustainable at our scale.

### 5.2 The tiered freshness system

**Tier 1 — High-traffic, high-change (quarterly review)**
~30–50 policies. The Amazons, Walmarts, major credit cards. These drive the most traffic and change most frequently.
- Claude re-reads the source policy every quarter
- Chris verifies the source URL is still current
- "Last Verified" date updates even if nothing changed (signals freshness to readers and Google)

**Tier 2 — Medium-traffic, moderate-change (semi-annual review)**
~100–150 policies. Mid-tier retailers, streaming services, popular SaaS.
- Reviewed every 6 months
- Prioritized by traffic data (analytics tells us which pages people actually visit)

**Tier 3 — Long-tail, low-change (annual review + reactive)**
Everything else. Niche retailers, smaller services.
- Annual review cycle
- Updated reactively if a reader flags a change (see 5.3)

### 5.3 Community-assisted freshness

Every page includes:
- "Is this still accurate? [Let us know]" link → simple feedback form or email
- This turns readers into a distributed monitoring network
- When someone reports a change, it jumps to the front of Claude's review queue

### 5.4 The "Last Verified" contract

Every summary prominently displays when it was last verified. This is our integrity mechanism:
- If a summary is stale (>12 months unverified), it shows a warning banner
- We never silently let a summary rot — it either gets updated or flagged
- This honesty *is the brand*. We're the site you trust because we tell you when we might be wrong.

### 5.5 Change detection (future enhancement)

If the site grows enough to justify it:
- Set up Visualping or a similar service to monitor source URLs for changes
- When a change is detected, the policy enters Claude's review queue
- This costs money (~$10–50/month depending on scale) but dramatically improves reliability

### 5.6 Operational cadence

Chris's weekly time commitment (estimated 2–4 hours):

| Task | Time | Frequency |
|------|------|-----------|
| Session with Claude: new summaries (3–5) | 60–90 min | 2x/week |
| Session with Claude: review/update queue | 30–45 min | 1x/week |
| Review & publish new content | 15–30 min | 2x/week |
| Check analytics, triage reader feedback | 15 min | 1x/week |
| Social media post (optional) | 15 min | 1–2x/week |

---

## 6. Revenue Model

### 6.1 Primary: Display advertising

- **Requirement:** Most premium ad networks (Mediavine, Raptive) require 50,000+ sessions/month
- **Interim:** Google AdSense (no minimum) or Ezoic (lower threshold)
- **Estimated RPM:** $8–15 for informational/financial content (this niche skews high because of adjacent financial product intent)
- **At 50K monthly visitors, $10 RPM:** ~$500/month
- **At 200K monthly visitors, $12 RPM:** ~$2,400/month

### 6.2 Secondary: Affiliate revenue

- Credit card comparison pages → affiliate links (NerdWallet, Credit Karma style, but as a natural extension of our content, not the focus)
- "Better alternative" recommendations where relevant (e.g., "This subscription has terrible cancellation terms — here's a competitor with better ones")
- Amazon affiliate links for products mentioned in warranty content

### 6.3 Tertiary (future): Newsletter / premium

- Weekly "Fine Print Watch" newsletter — free, ad-supported or sponsored
- Premium alerts: "Get notified when policies you care about change" — small subscription ($3–5/month)
- This is a Phase 3+ consideration, not a launch priority

### 6.4 What we will NOT do

- We will not accept payment from companies to alter or soften their summaries
- We will not run sponsored content disguised as policy summaries
- We will not sell reader data
- Editorial independence is the product. Compromising it destroys the business.

---

## 7. Content Marketing & Distribution

### 7.1 SEO (primary channel)

The entire content strategy is built around search intent. Every policy summary targets queries people already search for:
- "[company] return policy"
- "[company] cancellation policy"
- "[credit card] annual fee"
- "can I return [product] to [store] after [time period]"
- "[company] terms of service explained"

These are high-volume, low-competition queries because the current results are either the company's own page or thin content.

### 7.2 Social media (amplification)

**Format:** Short, punchy posts highlighting the most surprising or outrageous fine print discoveries.

Examples:
- "Did you know [Gym]'s cancellation policy requires a certified letter sent to a PO box in [random state]? Here's what actually happens if you just stop paying →"
- "[Airline]'s 'free cancellation' policy has a clause that says [absurd thing]. We decoded the full policy →"

This content is inherently shareable. People love sharing "can you believe this?" consumer content.

**Platforms:** Twitter/X first (fast iteration, easy linking). Consider TikTok/Reels for video format ("Let me read you the worst clause I found this week").

### 7.3 Backlink strategy

- Submit to personal finance and consumer advocacy roundups
- Offer to be a source for journalists covering consumer rights stories
- Cross-reference with subreddits (r/personalfinance, r/churning, r/askcarsales, etc.) — not spamming, but genuinely answering questions with links to relevant summaries

---

## 8. Legal Considerations

### 8.1 Are we allowed to summarize companies' policies?

Yes. Summarizing and commenting on publicly available legal documents is protected speech (fair use / fair comment). We are:
- Summarizing, not reproducing verbatim
- Adding transformative value (plain-English interpretation)
- Not competing with the original (we link to it)
- Serving a public interest purpose

### 8.2 Disclaimer

Every page carries a disclaimer:
> "FinePrintDecoder provides plain-English summaries of publicly available policies and agreements for informational purposes only. This is not legal advice. Summaries may not reflect the most recent policy changes. Always refer to the company's official terms for the authoritative and current version."

### 8.3 Potential risks

- **Cease and desist from a company:** Unlikely given fair use, but possible. Response: we summarize public documents and link to the original. This is journalism/commentary.
- **Accuracy complaints:** Mitigated by the "Last Verified" system, source linking, and reader feedback mechanism.
- **Chris's bar obligations:** Chris should not present himself as providing legal advice through the site. The site provides informational summaries, not counsel. No attorney-client relationship is formed.

---

## 9. Competitive Landscape

| Competitor | What they do | Our advantage |
|---|---|---|
| TOS;DR (tosdr.org) | Crowdsourced TOS ratings | We go deeper per-policy; they rate, we decode. Different use case. |
| Company's own page | The source document | We make it readable and flag the gotchas they bury. |
| SEO content farms | Thin rewrites of policies | We actually read the whole document. Our content is meaningfully better. |
| NerdWallet / The Points Guy | Credit card comparisons | They focus on selling cards; we focus on explaining what you agreed to. Complementary, not competitive. |

### Why isn't anyone doing this well already?

- It's labor-intensive to read entire legal documents carefully
- There's no obvious "big" revenue model — it's a slow-build content business
- SEO farms can churn thin content faster (but at lower quality)
- Nobody had a "tireless legal document reader" available before (that's Claude)

---

## 10. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Google algorithm change tanks traffic | Medium | High | Diversify with newsletter, social, direct traffic |
| Slow traffic growth in first 6 months | High | Medium | Expected — content SEO is a long game. Maintain production cadence. |
| Accuracy error causes trust damage | Low | High | Rigorous editorial process; prominent "Last Verified" dates; reader feedback loop |
| Company sends C&D | Very Low | Medium | Fair use defense is strong; consult if needed |
| Chris gets too busy / loses interest | Medium | High | Keep operational burden minimal; batch content production |
| AI competitors flood the space | Medium | Medium | Our moat is accuracy + editorial standards + established trust, not volume |

---

## 11. Success Metrics

### Leading indicators (Months 1–3)
- Pages published (target: 50–75)
- Google Search Console: pages indexed, impressions
- Time on page (are people actually reading?)

### Growth indicators (Months 4–8)
- Organic traffic (monthly uniques)
- Search rankings for target queries
- Backlinks acquired
- Reader feedback submissions

### Business indicators (Months 9+)
- Revenue (ads + affiliate)
- Email subscribers
- Returning visitor rate
- Revenue per visitor

---

## 12. Immediate Next Steps

### Chris's action items (Agent tasks)

1. **Check domain availability** — fineprintdecoder.com and alternates listed in Section 4.2
2. **Register domain** — via existing registrar
3. **Confirm Cloudflare Pages setup** — ensure deployment pipeline works with existing account
4. **Decision: Analytics** — Umami on VPS or Cloudflare Web Analytics?

### Claude's action items (next session)

1. **Build site skeleton** — Astro project with page templates, category structure, search, SEO setup
2. **Create style guide** — detailed content format specification with examples
3. **Produce first 10 policy summaries** — targeting highest-search-volume return policies
4. **Draft homepage copy and about page**

---

## 13. Open Questions

- **Brand voice refinement:** How irreverent do we want to be? Range from "Consumer Reports serious" to "slightly snarky but trustworthy." Recommendation: lean toward the latter.
- **Do we attribute authorship?** Options: (a) "FinePrintDecoder team," (b) Chris's name for credibility, (c) anonymous. Recommendation: (a) for now, with Chris's bio on the About page for authority signals.
- **Do we want to incorporate?** Not necessary at launch. Revisit if revenue exceeds $1K/month or if we want to formalize the business.

---

*This document is the operating blueprint for FinePrintDecoder. It should be updated as decisions are made and the business evolves.*
