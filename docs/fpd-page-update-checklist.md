# FinePrintDecoder — Page Update Checklist

**Use this checklist every time you add a new page or update an existing page. Do not skip steps.**

---

## When Adding a New Policy Summary Page

### 1. Create the page file

- [ ] Create directory and `index.astro` file at the correct path:
  - Return policies: `site/src/pages/return-policies/[slug]/index.astro`
  - Cancellation policies: `site/src/pages/cancellation-policies/[slug]/index.astro`
  - Credit card agreements: `site/src/pages/credit-card-agreements/[slug]/index.astro`
  - Warranty fine print: `site/src/pages/warranty-fine-print/[slug]/index.astro`
  - Terms of service: `site/src/pages/terms-of-service/[slug]/index.astro`
- [ ] Include all required `meta` fields in frontmatter: `title`, `company`, `policyType`, `category`, `sourceUrl`, `lastVerified`, `lastUpdated`, `status`, `summary`
- [ ] Include all template sections: Bottom Line, Key Facts, Watch Out For, Full Breakdown, What Changed, Original Document
- [ ] Include the disclaimer box and feedback CTA at the bottom
- [ ] Include breadcrumb navigation at the top
- [ ] Run content through the Voice & Style Guide quality checklist (`fpd-voice-style-guide.md`, Section 6)

### 2. Update the category index page

The category index is the listing page for the category the new summary belongs to. Each category has its own index file with a hardcoded array of entries.

| Category | File to update |
|---|---|
| Return Policies | `site/src/pages/return-policies/index.astro` |
| Cancellation Policies | `site/src/pages/cancellation-policies/index.astro` |
| Credit Card Agreements | `site/src/pages/credit-card-agreements/index.astro` |
| Warranty Fine Print | `site/src/pages/warranty-fine-print/index.astro` |
| Terms of Service | `site/src/pages/terms-of-service/index.astro` |

- [ ] Add the new entry to the array in the correct index file
- [ ] Set `ready: true` (or equivalent flag) so the card shows as live, not placeholder
- [ ] If the company wasn't previously listed, add it to the array
- [ ] If the company was already listed as a placeholder, update it to `ready: true`

### 3. Update the homepage (`site/src/pages/index.astro`)

Three sections on the homepage may need changes:

#### a. Popular Summaries (`popularSummaries` array)
- [ ] If this page should be featured, add it to `popularSummaries` with `ready: true`
- [ ] If this page was already in `popularSummaries` as a placeholder (`ready: false`), flip it to `ready: true`
- [ ] Keep the list to ~8 items max. Rotate out less relevant placeholders if needed.
- [ ] Remember: `ready: true` entries render as `<a>` links. `ready: false` entries render as non-clickable `<div>` cards. Every entry with `ready: true` must have a working page behind it.

#### b. Recent Additions (`recentAdditions` array)
- [ ] Add the new page to the **top** of the `recentAdditions` array
- [ ] Include `href`, `title`, and `date` (formatted like "March 19, 2026")
- [ ] Keep the list to ~5 items max. Remove the oldest entry if it gets longer.

#### c. Browse by Category (`categories` array)
- [ ] Usually no change needed — categories are static
- [ ] If adding a brand-new category (rare), add it here and create its index page

### 4. Cross-link from related pages

- [ ] If the same company has other decoded pages on the site (e.g., Amazon has both Conditions of Use and Privacy Notice), add a "Related" link or mention in each page's Full Breakdown or at the end of the page
- [ ] If the new page references another company's policy that we've already decoded, link to it

### 5. Build and verify

- [ ] Run `npm run build` from the `site/` directory — confirm zero errors
- [ ] Verify the new page URL works in the build output
- [ ] Spot-check: click through from homepage → category index → new page to confirm no dead links
- [ ] Spot-check: confirm the breadcrumb on the new page links back correctly

### 6. Commit and push

- [ ] Stage all changed files (new page, category index, homepage, any cross-linked pages)
- [ ] Write a descriptive commit message
- [ ] Push to the working branch

---

## When Updating an Existing Policy Summary Page

### 1. Update the page content

- [ ] Update the relevant sections (Bottom Line, Key Facts, Watch Out For, Full Breakdown, etc.)
- [ ] Update `lastVerified` and/or `lastUpdated` dates in the `meta` object
- [ ] Add a new entry to the "What Changed" section describing what changed and when
- [ ] If the source URL changed, update `sourceUrl` in meta and in the Original Document section
- [ ] Re-run the Voice & Style Guide quality checklist

### 2. Check downstream references

- [ ] If the `summary` (meta description) changed, it may affect how the card appears on category index pages — verify the description still reads well
- [ ] If the page title changed, update it in:
  - The category index array
  - The `popularSummaries` array on the homepage (if listed)
  - The `recentAdditions` array on the homepage (if listed)

### 3. Build, verify, commit, push

- [ ] Same as steps 5–6 above

---

## File Quick Reference

| What | File path |
|---|---|
| Homepage | `site/src/pages/index.astro` |
| Return Policies index | `site/src/pages/return-policies/index.astro` |
| Cancellation Policies index | `site/src/pages/cancellation-policies/index.astro` |
| Credit Card Agreements index | `site/src/pages/credit-card-agreements/index.astro` |
| Warranty Fine Print index | `site/src/pages/warranty-fine-print/index.astro` |
| Terms of Service index | `site/src/pages/terms-of-service/index.astro` |
| Base layout | `site/src/layouts/BaseLayout.astro` |
| Global styles | `site/src/styles/global.css` |
| Nav component | `site/src/components/Nav.astro` |
| Footer component | `site/src/components/Footer.astro` |

---

## Common Mistakes to Avoid

- **Adding a page but not updating the category index** — the page exists but nobody can find it from the category listing
- **Adding a page to `popularSummaries` with `ready: true` before the page file exists** — produces a 404 from the homepage
- **Forgetting to update `recentAdditions`** — new content is invisible on the homepage
- **Leaving a placeholder card as a clickable `<a>` link** — sends users to a 404
- **Updating content but not updating `lastVerified` / `lastUpdated`** — the page looks stale even though it's current
- **Forgetting to run `npm run build`** — Astro will catch template errors and broken imports at build time; always build before pushing

---

*This checklist is the single source of truth for deployment steps. Follow it every time.*
