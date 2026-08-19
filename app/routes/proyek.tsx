import type { Route } from "./+types/proyek";
import { Link } from "react-router";
import { SITE, PROJECTS } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import { formatMonthYear } from "~/lib/format";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `Portofolio Proyek — ${SITE.name}`,
    description:
      "Portofolio proyek software developer Laravel: platform kolaborasi, sistem informasi, PPDB sekolah, event ticketing, POS retail, dan manajemen aset.",
    path: "/proyek",
  });
}

const CARD_COLORS = ["bg-terracotta", "bg-sage", "bg-mustard", "bg-white", "bg-white", "bg-terracotta"];
const CARD_ROTATE = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "", "-rotate-1"];

const ITEMLIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    url: `${SITE.url}/proyek/${p.slug}`,
  })),
};

export default function Proyek() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_SCHEMA) }}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="PORTOFOLIO"
          title="Proyek yang Pernah Saya Kerjakan"
          description="Dari platform kolaborasi, sistem informasi instansi, hingga POS retail, semuanya dibangun dengan Laravel. Klik untuk melihat studi kasusnya."
        />

        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => {
              const period = project.end_date
                ? `${formatMonthYear(project.start_date)} – ${formatMonthYear(project.end_date)}`
                : `${formatMonthYear(project.start_date)} – Sekarang`;
              return (
                <Reveal key={project.slug}>
                  <Link
                    to={`/proyek/${project.slug}`}
                    className={`block h-full border-2 border-black p-6 flex flex-col gap-3 ${CARD_COLORS[i % CARD_COLORS.length]} ${CARD_ROTATE[i % CARD_ROTATE.length]} hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow`}
                  >
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-semibold bg-dark text-paper px-2 py-1">
                        {project.tag}
                      </span>
                      <span className="text-xs font-semibold border-2 border-black px-2 py-1">
                        {project.case_study_label}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black tracking-tight">{project.title}</h2>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">{project.summary}</p>
                    <p className="text-xs text-gray-600 font-mono leading-relaxed line-clamp-2">
                      {project.stack}
                    </p>
                    <p className="text-xs font-mono font-semibold text-gray-700">{period}</p>
                    <span className="inline-block text-sm font-semibold underline underline-offset-4">
                      Baca Studi Kasus →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
