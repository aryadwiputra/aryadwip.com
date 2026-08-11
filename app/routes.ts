import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("kontak", "routes/contact.tsx"),
  route("layanan", "routes/layanan.tsx"),
  route("tentang", "routes/tentang.tsx"),
  route("proyek", "routes/proyek.tsx"),
  route("proyek/:slug", "routes/proyek-detail.tsx"),
  route("artikel", "routes/artikel.tsx"),
  route("artikel/:slug", "routes/artikel-detail.tsx"),
  route("testimoni", "routes/testimoni.tsx"),
  route("faq", "routes/faq.tsx"),
  route("sitemap.xml", "routes/sitemap.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
