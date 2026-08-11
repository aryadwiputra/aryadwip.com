import type { Route } from "./+types/home";
import { SITE } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import Navbar from "~/components/sections/navbar";
import Hero from "~/components/sections/hero";
import ClientMarquee from "~/components/sections/client-marquee";
import CareerTimeline from "~/components/sections/career-timeline";
import Features from "~/components/sections/features";
import HowIWork from "~/components/sections/how-i-work";
import Testimonials from "~/components/sections/testimonials";
import BentoProjects from "~/components/sections/bento-projects";
import ContactCTA from "~/components/sections/contact-cta";
import Footer from "~/components/sections/footer";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `${SITE.name} — ${SITE.title}`,
    description:
      "Backend engineer spesialis Laravel. 6+ tahun pengalaman di API architecture, database design, dan infrastructure planning.",
  });
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientMarquee />
      <CareerTimeline />
      <Features />
      <HowIWork />
      <Testimonials />
      <BentoProjects />
      <ContactCTA />
      <Footer />
    </>
  );
}
