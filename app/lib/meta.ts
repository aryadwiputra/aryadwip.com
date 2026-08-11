import { SITE } from "./portfolio-data";

type PageMetaArgs = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

/**
 * Build consistent SEO meta descriptors (title, description, canonical,
 * Open Graph, Twitter Card) for a page. Pass `noindex` for pages like 404.
 */
export function pageMeta({
  title,
  description,
  path = "/",
  noindex = false,
}: PageMetaArgs) {
  const url = `${SITE.url}${path}`;
  const image = `${SITE.url}/images/og-image.png`;
  return [
    { title },
    { name: "description", content: description },
    ...(noindex
      ? []
      : [{ tagName: "link" as const, rel: "canonical", href: url }]),
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "id_ID" },
    { property: "og:site_name", content: "aryadwip.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    ...(noindex ? [{ name: "robots", content: "noindex" }] : []),
  ];
}
