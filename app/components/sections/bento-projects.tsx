import { PROJECTS } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

const CARD_COLORS = ["bg-pink", "bg-blue", "bg-white", "bg-white", "bg-primary"];
const CARD_ROTATE = ["rotate-1", "-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

export default function BentoProjects() {
  return (
    <Reveal>
      <section
        id="proyek"
        className="bg-white py-20 px-6 border-b-2 border-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 tracking-tight">
            Proyek
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-xl mx-auto">
            Proyek yang pernah saya kerjakan.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => {
              const featured = i === 0;
              const rotate =
                i === 0
                  ? "-rotate-1"
                  : CARD_ROTATE[(i - 1) % CARD_ROTATE.length];
              const bg =
                i === 0 ? "bg-primary" : CARD_COLORS[(i - 1) % CARD_COLORS.length];
              return (
                <div
                  key={project.title}
                  className={`${bg} border-2 border-black p-6 space-y-4 flex flex-col ${rotate} ${
                    featured ? "md:col-span-2 md:row-span-2 md:p-8" : ""
                  } hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow`}
                >
                  <span className="text-xs font-semibold bg-dark text-primary px-2 py-1 self-start">
                    {project.tag}
                  </span>
                  <h3
                    className={`font-black tracking-tight ${
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
                    {"repo" in project && project.repo && (
                      <a
                        href={project.repo}
                        className="inline-block text-sm font-semibold underline underline-offset-4 hover:text-gray-600"
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
