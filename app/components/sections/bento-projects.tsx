import { Link } from "react-router";
import { PROJECTS } from "~/lib/portfolio-data";
import { formatMonthYear } from "~/lib/format";

import Reveal from "~/components/reveal";

const CARD_COLORS = ["bg-mustard", "bg-sage", "bg-white", "bg-white", "bg-terracotta"];
// Rotasi hanya di kartu featured (i===0) — grid lain rapi, aksen tetap playful.
// Shadow hanya muncul saat hover — selektif, bukan semua elemen.

export default function BentoProjects() {
  return (
    <Reveal>
      <section
        id="proyek"
        className="bg-white py-20 px-6 border-b-2 border-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Proyek
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-xl mx-auto">
            Proyek yang pernah saya kerjakan.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => {
              const featured = i === 0;
              const rotate = featured ? "-rotate-1" : "";
              const bg = featured
                ? "bg-terracotta"
                : CARD_COLORS[(i - 1) % CARD_COLORS.length];
              const period = project.end_date
                ? `${formatMonthYear(project.start_date)} – ${formatMonthYear(project.end_date)}`
                : `${formatMonthYear(project.start_date)} – sekarang`;
              return (
                <div
                  key={project.title}
                  className={`${bg} border-2 border-black p-6 space-y-4 flex flex-col ${rotate} ${
                    featured ? "md:col-span-2 md:row-span-2 md:p-8" : ""
                  } hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow`}
                >
                  <span className="text-xs font-semibold bg-dark text-paper px-2 py-1 self-start">
                    {project.tag}
                  </span>
                  <h3
                    className={`font-display font-bold tracking-tight ${
                      featured
                        ? "text-3xl md:text-4xl"
                        : "text-xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    {project.summary}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-mono leading-relaxed">
                      {project.stack}
                    </p>
                    <p className="font-mono text-[11px] text-gray-500">
                      {"// "}{period} · {project.case_study_label}
                    </p>
                    <Link
                      to={`/proyek/${project.slug}`}
                      className="inline-block text-sm font-semibold underline underline-offset-4 hover:text-gray-600"
                    >
                      Baca Studi Kasus →
                    </Link>
                    {"website" in project && project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm font-semibold underline underline-offset-4 hover:text-gray-600"
                      >
                        Kunjungi Website →
                      </a>
                    )}
                    {"repo" in project && project.repo && (
                      <a
                        href={project.repo}
                        className="block text-sm font-semibold underline underline-offset-4 hover:text-gray-600"
                      >
                        Lihat Repository →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
