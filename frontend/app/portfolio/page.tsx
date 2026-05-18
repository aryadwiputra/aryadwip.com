import type { Metadata } from "next";

import { PortfolioPageClient } from "@/components/pages/portfolio-page-client";

export const metadata: Metadata = { title: "Portfolio — Arya Dwi Putra" };

export default function Page() {
  return <PortfolioPageClient />;
}
