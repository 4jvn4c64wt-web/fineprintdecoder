# FinePrintDecoder — Site Skeleton

**All pages, sections, and content structure for the website.**

---

## 1. Site Architecture Overview

```
fineprintdecoder.com/
│
├── / (homepage)
├── /about
├── /how-we-work
│
├── /return-policies/
│   ├── /return-policies/ (category index)
│   ├── /amazon/return-policy
│   ├── /walmart/return-policy
│   ├── /target/return-policy
│   ├── /costco/return-policy
│   ├── /best-buy/return-policy
│   ├── /apple/return-policy
│   ├── /nike/return-policy
│   ├── /home-depot/return-policy
│   ├── /nordstrom/return-policy
│   ├── /ikea/return-policy
│   └── ... (expand over time)
│
├── /cancellation-policies/
│   ├── /cancellation-policies/ (category index)
│   ├── /planet-fitness/cancellation-policy
│   ├── /netflix/cancellation-policy
│   ├── /spotify/cancellation-policy
│   ├── /adobe-creative-cloud/cancellation-policy
│   ├── /amazon-prime/cancellation-policy
│   ├── /xfinity/cancellation-policy
│   ├── /att/cancellation-policy
│   ├── /youtube-premium/cancellation-policy
│   ├── /equinox/cancellation-policy
│   └── ... (expand over time)
│
├── /credit-card-agreements/
│   ├── /credit-card-agreements/ (category index)
│   ├── /chase-sapphire-preferred/card-agreement
│   ├── /chase-sapphire-reserve/card-agreement
│   ├── /amex-platinum/card-agreement
│   ├── /amex-gold/card-agreement
│   ├── /capital-one-venture-x/card-agreement
│   ├── /citi-double-cash/card-agreement
│   ├── /discover-it/card-agreement
│   └── ... (expand over time)
│
├── /warranty-fine-print/
│   ├── /warranty-fine-print/ (category index)
│   ├── /apple/applecare-terms
│   ├── /samsung/warranty-terms
│   ├── /best-buy/geek-squad-protection
│   ├── /home-depot/protection-plan
│   └── ... (expand over time)
│
├── /terms-of-service/
│   ├── /terms-of-service/ (category index)
│   ├── /openai/terms-of-service
│   ├── /uber/terms-of-service
│   ├── /airbnb/terms-of-service
│   ├── /venmo/user-agreement
│   └── ... (expand over time)
│
├── /search (client-side search via Pagefind)
├── /contact
└── /disclaimer
```

---

## 2. Page Templates

### 2.1 Homepage

**Purpose:** Explain what the site does in 5 seconds. Direct people to what they're looking for.

**Sections:**
1. **Hero / headline.** One sentence: what this site does. No fluff.
2. **Search bar.** Prominent. "Search for a company or policy type."
3. **Most popular summaries.** 6–8 cards linking to highest-traffic pages.
4. **Category navigation.** Cards or links to the 5 main categories.
5. **Recent additions.** Last 5 published summaries.
6. **Footer CTA.** "Can't find a policy? Tell us what to decode next." (links to contact/request form)

**What is NOT on the homepage:**
- A long "about us" section
- A mission statement
- Stock photos
- Anything that delays the reader from getting to a policy summary

### 2.2 Category Index Page (e.g., /return-policies/)

**Purpose:** Browsable list of all summaries in a category.

**Sections:**
1. **Category title and one-line description.** "Return Policies — decoded from the actual documents."
2. **Search/filter.** Filter by company name or sort alphabetically.
3. **Summary cards.** Each card shows: Company name, policy type, bottom-line excerpt (first 100 chars), last verified date.
4. **Pagination** if needed.

### 2.3 Policy Summary Page (the core product)

**Purpose:** The actual decoded policy. This is what people come for.

**URL pattern:** `/[company-slug]/[policy-type]`

**Frontmatter (in markdown file):**
```yaml
---
title: "Amazon Return Policy — Decoded"
company: "Amazon"
policyType: "Return Policy"
category: "return-policies"
sourceUrl: "https://www.amazon.com/gp/help/customer/display.html?nodeId=GKM69DUUYKQWKBER"
lastVerified: "2026-03-15"
lastUpdated: "2026-03-15"
status: "current" # current | stale | needs-review
summary: "Most items can be returned within 30 days of delivery for a full refund. Some categories have shorter windows or are non-returnable."
---
```

**Page layout:**

```
[Breadcrumb: Home > Return Policies > Amazon]

# Amazon Return Policy — Decoded

Last verified: March 15, 2026 | Source: [Official policy →]

---

⚡ THE BOTTOM LINE
[2–3 sentences. The answer to why someone googled this.]

---

🔑 KEY FACTS
[Structured list of the essential data points. Scannable.]
- Return window: 30 days from delivery
- Refund method: Original payment method
- Restocking fee: None (most items)
- Return shipping: Free for most items
- Receipt required: No (order history serves as receipt)
- Condition: Items must be unused, in original packaging

---

⚠️ WATCH OUT FOR
[Gotchas, non-obvious restrictions, things people get tripped up by.]
- [Specific clause or condition, in plain English]
- [Another one]

---

📋 FULL BREAKDOWN
[Section-by-section walkthrough. This is the long-form content.]
[Organized by logical topic, not by the order of the source document.]

### Standard returns
[Content]

### Electronics and special categories
[Content]

### Third-party seller returns
[Content]

### Refund timing
[Content]

---

🔄 WHAT CHANGED
[Changelog. Empty for new summaries. Updated when policy changes are detected.]
- March 2026: Initial summary published.

---

📎 ORIGINAL DOCUMENT
[Full name of the policy document with link to source.]

---

[Disclaimer text — same on every page]

[Sidebar or footer: "Was this helpful? Is something out of date? Let us know →"]
```

### 2.4 About Page

**Purpose:** Establish credibility and explain our approach.

**Content outline:**
1. What FinePrintDecoder is (2 sentences)
2. Why it exists (the problem, briefly)
3. How we produce summaries (our process — read the full document, extract what matters, verify against source)
4. Who's behind it (Chris's bio — law background, bar admission, relevant credibility signals. Keep it brief.)
5. Our editorial policy (we don't take money from companies we cover, we link to sources, we date everything)

### 2.5 How We Work Page

**Purpose:** Explain the methodology for readers who care (and for SEO).

**Content outline:**
1. We read the actual document (not a summary of a summary)
2. We structure the summary using a consistent template
3. We link to the original source
4. We date-stamp everything and review on a schedule
5. We rely on reader feedback to flag changes
6. We are not lawyers and this is not legal advice

### 2.6 Contact / Request Page

**Purpose:** Let readers flag errors and request new summaries.

**Content:**
1. "Found something out of date? Let us know." (simple form or email link)
2. "Want us to decode a policy we haven't covered yet? Request it." (simple form)
3. No phone number. No live chat. Email or form only.

### 2.7 Disclaimer Page

**Purpose:** Legal protection.

**Content:**
Full disclaimer text covering:
- This is not legal advice
- No attorney-client relationship
- Summaries are for informational purposes
- We make efforts to be accurate but cannot guarantee completeness
- Always refer to the original document
- We are not affiliated with any companies we cover

---

## 3. Launch Content Plan (First 50 Pages)

### Batch 1 — Return Policies (20 pages)
Priority order based on estimated search volume:
1. Amazon
2. Walmart
3. Target
4. Costco
5. Best Buy
6. Apple
7. Home Depot
8. Nike
9. Nordstrom
10. IKEA
11. Lowe's
12. Macy's
13. Sephora
14. REI
15. Kohl's
16. Wayfair
17. Zara
18. H&M
19. Chewy
20. Etsy (marketplace policy)

### Batch 2 — Cancellation Policies (15 pages)
1. Planet Fitness
2. Netflix
3. Amazon Prime
4. Spotify
5. Adobe Creative Cloud
6. YouTube Premium / YouTube TV
7. Xfinity / Comcast
8. AT&T
9. Equinox
10. LA Fitness
11. Hulu
12. Peloton
13. HelloFresh
14. NYT Digital Subscription
15. Audible

### Batch 3 — Credit Card Agreements (10 pages)
1. Chase Sapphire Preferred
2. Chase Sapphire Reserve
3. Amex Platinum
4. Amex Gold
5. Capital One Venture X
6. Citi Double Cash
7. Chase Freedom Unlimited
8. Discover it Cash Back
9. Capital One SavorOne
10. Apple Card

### Batch 4 — Warranty / Protection Plans (5 pages)
1. AppleCare+
2. Best Buy / Geek Squad Protection
3. Samsung Care+
4. Home Depot Protection Plan
5. Costco Warranty (Costco's extended warranty on electronics)

---

## 4. Navigation Structure

**Top nav:**
- Home
- Return Policies
- Cancellation Policies
- Credit Cards
- Warranties
- Terms of Service
- Search (icon)

**Footer:**
- About
- How We Work
- Contact / Request a Decode
- Disclaimer
- [Social links when applicable]

---

## 5. Technical Notes

- Every policy summary is a single markdown file with YAML frontmatter
- Category index pages are auto-generated from frontmatter metadata
- Search is client-side (Pagefind) — no server dependency
- "Last verified" date drives the stale-content warning banner logic: if > 12 months old, show warning
- Sitemap.xml auto-generated for SEO
- RSS feed for new additions (useful for newsletter later)
- Open Graph / social meta tags on every page (for link previews when shared)

---

*This skeleton is the structural blueprint. Individual page content is produced per the Voice & Style Guide.*
