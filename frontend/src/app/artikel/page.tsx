import type { Metadata } from "next";
import { ArticleListingSection } from "@/components/sections/artikel/ArticleListingSection";

export const metadata: Metadata = { title: "Artikel — Arya Dwi Putra" };

export default function Page() {
  return <ArticleListingSection />;
}
