import { SITE } from "~/lib/portfolio-data";

const PAGES = [
  { loc: "/", priority: "1.0", changefreq: "monthly" },
  { loc: "/kontak", priority: "0.8", changefreq: "monthly" },
];

export function loader() {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = PAGES.map(
    (p) => `  <url>
    <loc>${SITE.url}${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  ).join("\n");

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
