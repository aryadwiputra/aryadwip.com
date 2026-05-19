import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/kontak/ContactSections";
import { ContactPageSection } from "@/components/sections/kontak/ContactPageSection";

export const metadata: Metadata = { title: "Kontak — Arya Dwi Putra" };

export default function Page() {
  return (
    <main>
      <ContactHeroSection />
      <ContactPageSection />
    </main>
  );
}
