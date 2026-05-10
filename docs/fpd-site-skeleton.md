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
├── /merchants/                                  ← new directory page
│   ├── /amazon/                                 ← merchant home page
│   ├── /costco/
│   ├── /chase-sapphire-preferred/
│   └── ... (one per vendorSlug, expanding over time)
│
├── /return-policies/                            ← category index (still exists)
│   ├── /return-policies/amazon/                 ← per-policy summary
│   ├── /return-policies/walmart/
│   └── ...
│
├── /cancellation-policies/
│   ├── /cancellation-policies/amazon-prime/
│   ├── /cancellation-policies/planet-fitness/
│   └── ...
│
├── /credit-card-agreements/
│   ├── /credit-card-agreements/chase-sapphire-preferred/
│   └── ...
│
├── /warranty-fine-print/
│   └── ...
│
├── /terms-of-service/                           ← still exists, no longer in top nav
│   ├── /terms-of-service/amazon-prime-video/
│   └── ...
│
├── /search.json                                 (client-side search index)
├── /contact
└── /disclaimer
```

**Two URL shapes for vendor-related content:**
- `/[vendorSlug]/` is the **merchant home page** — the legal snapshot, all decoded policies for that vendor, Content Creator section if applicable.
- `/[category]/[slug]/` is a **specific policy summary** — operational content for one reader intent (returning something, cancelling something, etc.).

A user searching "amazon" probably wants `/amazon/` (the merchant home). A user searching "amazon return policy" wants `/return-policies/amazon/` (the specific summary). Search ranking should reflect that.

---

## 2. Page Templates

### 2.1 Homepage

**Purpose:** Explain what the site does in 5 seconds. Direct people to what they're looking for.

**Sections (top to bottom):**

1. **Hero with headline + search bar.** One sentence on what the site does. The search bar is the primary action — typed query autocompletes to merchants and specific summaries.
2. **Popular Summaries.** Curated grid of 6–8 cards linking to the highest-value individual policy summaries (returns, cancellations, etc.). Manually curated for now; as analytics come online, traffic-driven later. Each card shows: vendor + policy type, one-line excerpt.
3. **Popular Merchants (carousel).** Single horizontal row of merchant cards. Left/right arrow buttons cycle through. Each card is a vendor (Amazon, Costco, Chase, etc.) linking to that merchant's home page. Curated list; as we publish merchant pages, they enter the carousel pool.
4. **Browse by Category.** Cards for the 4 nav categories (Return Policies, Cancellation Policies, Credit Cards, Warranties). No card for Terms of Service — it's not in the top nav anymore.
5. **Footer CTA.** "Can't find a policy? Tell us what to decode next." (links to contact)

**Explicitly removed:** the "Recently Added" section. Reasoning: users don't browse for new — they search for what they need. Recency is engagement bait that doesn't serve the practical-first principle.

**What else is NOT on the homepage:**
- A long "about us" section
- A mission statement
- Stock photos
- Anything that delays the reader from getting to what they want

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

### 2.8 Merchant Home Page (the vendor hub)

**Purpose:** A single entry point per vendor that surfaces every decoded policy for that vendor and provides a standardized comparable snapshot of the vendor's legal-procedural terms (governing law, arbitration, liability, etc.). This is the most important page-type after individ