import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Static JSON endpoint that emits every published summary's searchable metadata.
// Pre-rendered at build time. The client-side SearchBar fetches this once per session
// and filters in memory. With ~50–500 summaries, the index stays well under 100 KB.

export const GET: APIRoute = async () => {
  const policies = await getCollection('policies');

  const index = policies.map((p) => {
    // entry.id may or may not include the .md extension depending on Astro version /
    // loader behavior. Strip it defensively (same pattern as the dynamic route).
    const cleanId = p.id.replace(/\.md$/, '');
    const [category, ...rest] = cleanId.split('/');
    const slug = rest.join('/');

    return {
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

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
