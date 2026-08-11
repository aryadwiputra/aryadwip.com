import { SITE, PROJECTS, ARTICLES } from "~/lib/portfolio-data";

const PAGES = [
  { loc: "/", priority: "1.0", changefreq: "monthly" },
  { loc: "/layanan", priority: "0.9", changefreq: "monthly" },
  { loc: "/proyek", priority: "0.9", changefreq: "monthly" },
  { loc: "/artikel", priority: "0.8", changefreq: "weekly" },
  { loc: "/tentang", priority: "0.7", changefreq: "monthly" },
  { loc: "/kontak", priority: "0.8", changefreq: "monthly" },
  { loc: "/faq", priority: "0.6", changefreq: "monthly" },
  { loc: "/testimoni", priority: "0.6", changefreq: "monthly" },
];

export function loader() {
  const lastmod = new Date().toISOString().split("T")[0];

  const dynamic = [
    ...PROJECTS.map((p) => ({
      loc: `/proyek/${p.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
    ...ARTICLES.map((a) => ({
      loc: `/artikel/${a.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
  ];

  const urls = [...PAGES, ...dynamic]
    .map(
      (p) => `  <url>
    <loc>${SITE.url}${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
