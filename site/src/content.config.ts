import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each policy summary is a markdown file under src/content/policies/<category>/<slug>.md
// Schema enforces the structure laid out in docs/fpd-site-skeleton.md §2.3.
//
// Above-the-fold sections (bottomLine, keyFacts, howTo, watchOutFor) are structured
// frontmatter so the layout component can render them with consistent visual treatment.
// The markdown body itself is rendered inside the collapsible "Read the full breakdown"
// section. Legal Fine Print and What Changed are also frontmatter, rendered in
// collapsibles by the layout.
//
// The 4-item cap on watchOutFor is enforced at the schema level — see voice-style-guide
// §3 (Practical-First) and §7 (Quality Check).

const policies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/policies' }),
  schema: z.object({
    // Identification
    title: z.string(),
    company: z.string(),
    policyType: z.string(),
    category: z.enum([
      'return-policies',
      'cancellation-policies',
      'credit-card-agreements',
      'warranty-fine-print',
      'terms-of-service',
    ]),

    // Source provenance — the local archived copies are authoritative for what we summarized.
    // sourceFiles is an array because (a) one summary may cite multiple source documents
    // (e.g., a Chase card summary citing both the cardmember agreement and the rewards
    // program agreement), and (b) one source document may also produce multiple summaries
    // (each cites the same file). Paths are relative to the project workspace, e.g.
    // "sources/amazon/prime_terms-of-service_2026-05-10.txt".
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
    howTo: z.array(z.string()).optional(), // numbered steps; omit for TOS / credit card
    watchOutFor: z
      .array(
        z.object({
          headline: z.string(),
          detail: z.string(),
        })
      )
      .max(4, 'Watch Out For caps at 4 items per the style guide'),

    // Collapsed by default
    legalFinePrint: z
      .object({
        governingLaw: z.string().optional(),
        disputeVenue: z.string().optional(),
        juryTrial: z.string().optional(),
        arbitration: z.string().optional(),
        accountTermination: z.string().optional(),
        liabilityCap: z.string().optional(),
        privacyHighLevel: z.string().optional(),
      })
      .optional(),

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

export const collections = { policies };
