import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Static JSON endpoint that emits a unified search index of both policy summaries and
// merchant overview pages. Pre-rendered at build time. The SearchBar fetches this once
// per session and filters in memory.
//
// Entry shape is uniform across both content types, with `kind` distinguishing them.
// Vendor entries rank higher for vendor-name queries because their title IS the vendor name.

type IndexEntry = {
  kind: 'policy' | 'vendor';
  url: string;
  title: string;
  company: string;
  vendorSlug: string;
  policyType: string;     // 'Overview' for vendor entries
  category: string;       // 'overview' for vendor entries
  keywords: string[];
  summary: string;
};

export const GET: APIRoute = async () => {
  const policies = await getCollection('policies');
  const vendors = await getCollection('vendors');

  const policyEntries: IndexEntry[] = policies.map((p) => {
    const cleanId = p.id.replace(/\.md$/, '');
    const [category, ...rest] = cleanId.split('/');
    const slug = rest.join('/');
    return {
      kind: 'policy',
      url: `/${category}/${slug}/`,
      title: p.data.title,
      company: p.data.company,
      vendorSlug: p.data.vendorSlug,
      policyType: p.data.policyType,
      category: p.data.category,
      keywords: p.data.searchKeywords,
      summary: p.data.summary,
    };
  });

  const vendorEntries: IndexEntry[] = vendors.map((v) => ({
    kind: 'vendor',
    url: `/${v.data.vendorSlug}/`,
    title: v.data.displayName,
    company: v.data.displayName,
    vendorSlug: v.data.vendorSlug,
    policyType: 'Overview',
    category: 'overview',
    keywords: v.data.searchKeywords,
    summary: v.data.oneSentenceWhat,
  }));

  return new Response(JSON.stringify([...vendorEntries, ...policyEntries]), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
