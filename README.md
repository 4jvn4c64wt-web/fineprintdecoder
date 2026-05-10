# FinePrintDecoder

Plain-English summaries of consumer agreements — return policies, cancellation terms, credit card agreements, warranties, and terms of service. Each summary lays out the practical facts (windows, fees, conditions) and links back to the source document.

## Repository structure

```
.
├── docs/        Reference documents (business plan, voice guide, brand tone, site skeleton)
└── site/        The Astro project that renders the live site
    ├── src/
    │   ├── content/policies/   Policy summaries as structured markdown
    │   ├── layouts/            Base layout + per-page layouts
    │   ├── pages/              Static pages + dynamic policy route
    │   └── styles/             Global stylesheet
    └── astro.config.mjs
```

## Local development

```bash
cd site
npm install
npm run dev
```

Build:

```bash
npm run build
```

The build output goes to `site/dist/`. Cloudflare Pages is configured to deploy from this directory.

## Editorial process

Every summary on the site is built the same way:

1. The source policy document is downloaded and dated. Permanent record of what we summarized.
2. The full document is read carefully.
3. A structured summary is produced using the schema in `site/src/content.config.ts`.
4. A human reviews the draft against the voice and style guide before publishing.
5. Re-verification happens on a tiered schedule (quarterly / semi-annual / annual) per `docs/fineprintdecoder-business-plan.md` §5.

The process and editorial standards are documented in `docs/fpd-voice-style-guide.md` and `docs/fpd-brand-tone.md`.

## Disclaimer

The content of this site is for informational purposes only. It is not legal advice. See `/disclaimer` on the live site for the full disclaimer.
