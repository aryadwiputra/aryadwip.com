import type { Metadata } from "next";

import { ContactPageClient } from "@/components/pages/contact-page-client";

export const metadata: Metadata = { title: "Kontak — Arya Dwi Putra" };

export default function Page() {
  return <ContactPageClient />;
}
