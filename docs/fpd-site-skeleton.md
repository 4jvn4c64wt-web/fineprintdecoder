# FinePrintDecoder — Site Skeleton

*All pages, sections, and content structure for the website.*

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
1. Hero / headline. One sentence: what this site does. No fluff.
2. Search bar. Prominent. "Search for a company or policy type."
3. Most popular summaries. 6–8 cards linking to highest-traffic pages.
4. Category navigation. Cards or links to the 5 main categories.
5. Recent additions. Last 5 published summaries.
6. Footer CTA. "Can't find a policy? Tell us what to decode next." (links to contact/request form)

**What is NOT on the homepage:**
- A long "about us" section
- A mission statement
- Stock photos
- Anything that delays the reader from getting to a policy summary

### 2.2 Category Index Page (e.g., /return-policies/)

**Purpose:** Browsable list of all summaries in a category.

**Sections:**
1. Category title and one-line description. "Return Policies — decoded from the actual documents."
2. Search/filter. Filter by company name or sort alphabetically.
3. Summary cards. Each card shows: Company name, policy type, bottom-line excerpt (first 100 chars), last verified date.
4. Pagination if needed.

### 2.3 Policy Summary Page (the core product)

**Purpose:** The actual decoded policy. This is what people come for. The page is structured so the practical answer is above the fold and the comprehensive read is one click away.

**URL pattern:** `/[company-slug]/[policy-type]`

**Frontmatter (in markdown file):**

```yaml
---
title: "Amazon Return Policy"
company: "Amazon"                # Specific product/sub-product
vendorSlug: "amazon"             # Parent-vendor grouping key — matches sources/ folder
policyType: "Return Policy"
category: "return-policies"
sourceUrl: "https://www.amazon.com/gp/help/customer/display.html?nodeId=GKM69DUUYKQWKBER"
sourceUrlsAdditional: []         # secondary URLs if the policy spans multiple pages
sourceFiles:
  - "sources/amazon/return-policy_2026-03-15.pdf"
lastVerified: "2026-03-15"
lastUpdated: "2026-03-15"
status: "current"                # current | stale | needs-review
tier: 1                          # 1=quarterly review, 2=semi-annual, 3=annual
summary: "Most items can be returned within 30 days of delivery for a full refund. Some categories have shorter or longer windows."
searchKeywords: ["return", "returns", "refund", "amazon return"]   # optional; defaults to []
---
```

**The `searchKeywords` field feeds the global search bar.** It's optional. The search engine already auto-matches on title, company, policyType, and category, so most summaries don't need many keywords. Use it for plausible user phrasings the auto-matcher would miss: synonyms ("send back" for return), informal verbs ("unsubscribe" for cancel), or sub-product names. Cross-summary "sibling" matching is automatic via vendorSlug — if a user types "prime" and the Prime cancellation summary hits, the Amazon return policy and Prime Video TOS will surface below it because they share `vendorSlug: amazon`. So you don't need to redundantly list "amazon" in every keyword array.

**The `vendorSlug` field is the join key for vendor-grouped UI.** Every summary that belongs to the same parent vendor uses the same slug, regardless of how `company` differs. Amazon's main return policy, Amazon Prime's cancellation policy, and Amazon Prime Video's TOS all share `vendorSlug: amazon` because they're all under the Amazon corporate umbrella. The sidebar showing "Other Amazon policies" queries the content collection by `vendorSlug` to find siblings. The slug also matches the `sources/[vendorSlug]/` folder, which is intentional — the source archive's grouping and the live site's grouping use the same key.

**Page layout (above the fold — always visible):**

```
[Breadcrumb: Home > Return Policies > Amazon]

# Amazon Return Policy — Decoded

Last verified: March 15, 2026 · Source: [Official policy →]

[ THE BOTTOM LINE — colored sidebar callout ]
2–3 sentences. The answer to why someone googled this. Lead with the practical fact.

[ KEY FACTS — data-table treatment, not bullets ]
Return window:        30 days from delivery
Refund method:        Original payment method
Restocking fee:       None (most items)
Return shipping:      Free for most items
Receipt required:     No (order history serves as receipt)
Condition:            Items must be unused, in original packaging

[ HOW TO RETURN AN ITEM — numbered steps ]
1. Go to Your Orders → find the item → "Return or replace items."
2. Pick a reason and a return method. Most options are free.
3. Print the label, drop it at any UPS/Kohl's/Whole Foods location, or schedule a pickup.
4. Refund hits your original payment method within 3–5 business days after the return is received.

[ WATCH OUT FOR — amber sidebar callout ]
- Holiday returns extended to January 31 only for items shipped Oct 1–Dec 31. Outside that window, the standard 30 days applies.
- Items marked "Final Sale" or sold by some third-party sellers can't be returned. Check the listing.
- Some categories — opened software, hazmat, custom — are non-returnable even within 30 days.
```

**Below the fold (collapsed by default):**

```
<details>
<summary>Read the full breakdown</summary>

[Section-by-section walkthrough in plain English. Organized by logical topic, not by the order of the source document. Quote the policy directly when wording matters; cite the section so the reader can verify.]

### Standard returns
[Content]

### Electronics and special categories
[Content]

### Third-party seller returns
[Content]

### Refund timing
[Content]

</details>

<details>
<summary>Legal fine print (venue, arbitration, liability)</summary>

[FAQ-style. Each topic is one row. Most readers ignore this section, and that's fine — it's here for the people who care.]

**Governing law:** [Plain answer in 1–2 sentences.]
**Dispute venue:** [Plain answer.]
**Jury trial:** [Waived / preserved / silent — and what that means.]
**Arbitration / class action:** [Required? Opt-out window? Carve-outs?]
**Account termination:** [Conditions under which the company can end your account.]
**Liability cap:** [The dollar number, if there is one. The standard "as-is, no warranty" boilerplate gets one sentence here, not a paragraph.]
**Privacy & data use (high level):** [One paragraph. What's collected, what's shared, where their full privacy policy lives. Not the place to lecture readers about tracking.]

</details>

<details>
<summary>What changed</summary>

- 2026-03-15: Initial FinePrintDecoder summary published.
- [Future entries appear here as the policy is re-verified.]

</details>

---

(No separate "Original Document" section. The source URL is exposed automatically in two places by the layout: a button at the top of the page ("Read the official policy →") and an inline link inside the disclaimer paragraph at the very bottom. A third source-link block is repetition; don't add one in the body.)

[Disclaimer text — same on every page, includes the inline "original document" link]

[Footer: "Is something out of date? Let us know →"]
```

**Section rules:**
- **Title format:** Just `[Vendor] [Policy Type]`. No "— Decoded" suffix. The breadcrumb at the top makes the framing clear; appending "Decoded" is filler.
- The Bottom Line is always 2–3 sentences max. Never longer.
- Key Facts is rendered as a data table by the layout component. Write it as a list of label/value pairs and let the template style it. Values may contain HTML when scannability calls for it (e.g., a refund-timing fact that lists each payment method on its own line with the method bolded).
- How To is required for return policies, cancellation policies, and warranty claims. Optional for credit card agreements (no single "how to"; replace with "What This Card Actually Costs" and "What's Conditional"). Skip for TOS pages — they're not action-oriented documents.
- Watch Out For: 2–4 items, max. Each is a real, actionable gotcha for a normal user. If you have more than 4, you're including things that aren't actionable — move them to Full Breakdown or cut.
- Full Breakdown and Legal Fine Print are always inside `<details>` blocks. They are collapsed by default. Do not put core practical info in them.
- **`legalFinePrint` is only for TOS-style summaries.** The fields (governingLaw, disputeVenue, juryTrial, arbitration, accountTermination, liabilityCap, privacyHighLevel) come from the legal/dispute machinery in a Terms of Service or Conditions of Use document. Return policies, cancellation policies, and warranty pages typically don't carry that material — those documents have their own procedural details (return abuse rules, ID requirements, claim deadlines), which belong in Watch Out For or the Full Breakdown, not in `legalFinePrint`. If a return policy summary has nothing to put in `legalFinePrint`, omit the field entirely; the layout will skip the collapsible. When the related TOS page is published, the return summary's Full Breakdown can link to it for the deeper legal procedure.

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

**Content:** Full disclaimer text covering:
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
14. NYT Digital Subscripti