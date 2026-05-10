import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// =================================================================
// policies collection — one entry per (vendor, reader intent)
// Each policy summary is a markdown file under src/content/policies/<category>/<slug>.md
// =================================================================

const policies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/policies' }),
  schema: z.object({
    // Identification
    title: z.string(),
    company: z.string(),                       // Specific product (e.g., "Amazon Prime")
    policyType: z.string(),
    category: z.enum([
      'return-policies',
      'cancellation-policies',
      'credit-card-agreements',
      'warranty-fine-print',
      'terms-of-service',
    ]),

    // vendorSlug groups summaries that share a parent vendor (matches sources/[vendorSlug]/
    // and the corresponding entry in the vendors collection).
    vendorSlug: z.string().regex(/^[a-z0-9][a-z0-9-]*$/, 'vendorSlug must be lowercase, hyphenated, no spaces'),

    // Source provenance
    sourceUrl: z.string().url(),
    sourceUrlsAdditional: z.array(z.string().url()).default([]),
    sourceFiles: z.array(z.string()).default([]),

    // Freshness tracking
    lastVerified: z.coerce.date(),
    lastUpdated: z.coerce.date(),
    status: z.enum(['current', 'stale', 'needs-review']).default('current'),
    tier: z.union([z.literal(1), z.literal(2), z.literal(3)]).default(2),

    // Meta description / search snippet
    summary: z.string().min(20).max(280),

    // Search keywords (per-policy; vendor-level matching is automatic via vendorSlug)
    searchKeywords: z.array(z.string()).default([]),

    // Above-the-fold structured content
    bottomLine: z.string(),
    keyFacts: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .min(1),
    howTo: z.array(z.string()).optional(),
    watchOutFor: z
      .array(
        z.object({
          headline: z.string(),
          detail: z.string(),
        })
      )
      .max(4, 'Watch Out For caps at 4 items per the style guide'),

    // NOTE: legalFinePrint is intentionally NOT on policy summaries anymore.
    // Legal-procedural facts (governing law, dispute venue, arbitration, liability cap,
    // account termination, privacy, term modification) live on the vendor entry,
    // surfaced via the merchant overview page at /[vendorSlug]/.

    whatChanged: z
      .array(
        z.object({
          date: z.coerce.date(),
          note: z.string(),
        })
      )
      .default([]),
  }),
});

// =================================================================
// vendors collection — one entry per parent vendor
// Each vendor entry is a markdown file under src/content/vendors/<vendorSlug>.md
// Used to generate merchant overview pages at /[vendorSlug]/
// =================================================================

const vendors = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/vendors' }),
  schema: z.object({
    // Identification — vendorSlug MUST match the filename and the policies' vendorSlug field
    vendorSlug: z.string().regex(/^[a-z0-9][a-z0-9-]*$/, 'vendorSlug must be lowercase, hyphenated'),
    displayName: z.string(),                   // h1 on the merchant page
    oneSentenceWhat: z.string().min(20).max(280),  // one-sentence intro under the h1

    // Freshness
    lastVerified: z.coerce.date(),
    lastUpdated: z.coerce.date(),
    status: z.enum(['current', 'stale', 'needs-review']).default('current'),

    // Whether this vendor appears in the Popular Merchants carousel on the homepage
    featured: z.boolean().default(false),

    // === Legal & Contractual Snapshot — the 8 universal fields ===
    // Per site-skeleton §2.8.1. Every field filled; "Not specified" if silent.
    governingLaw: z.string(),
    disputeVenue: z.string(),
    juryTrial: z.string(),
    arbitration: z.string(),                   // covers arbitration + class action
    liabilityCap: z.string(),
    accountTermination: z.string(),
    privacyHighLevel: z.string(),              // high-level paragraph only
    termModification: z.string(),

    // Source provenance — typically multiple documents feed a vendor entry
    sourceUrls: z.array(z.string().url()),
    sourceFiles: z.array(z.string()).default([]),

    // Vendor-wide Watch Out For (rare; usually empty)
    watchOutFor: z
      .array(
        z.object({
          headline: z.string(),
          detail: z.string(),
        })
      )
      .max(3)
      .default([]),

    // Search keywords for the search bar
    searchKeywords: z.array(z.string()).default([]),
  }),
});

export const collections = { policies, vendors };
