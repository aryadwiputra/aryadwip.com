import type { Metadata } from "next";

import { ArticleDetailPageClient } from "@/components/pages/article-detail-page-client";

export const metadata: Metadata = { title: "Detail Artikel — Arya Dwi Putra" };

export default function Page() {
  return <ArticleDetailPageClient />;
}
