import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact/ContactSections";
import { ContactPageSection } from "@/components/sections/contact/ContactPageSection";

export const metadata: Metadata = { title: "Contact — Arya Dwi Putra" };

export default function Page() {
  return (
    <main>
      <ContactHeroSection />
      <ContactPageSection />
    </main>
  );
}
