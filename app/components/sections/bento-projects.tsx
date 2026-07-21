import { PROJECTS } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

export default function BentoProjects() {
  return (
    <Reveal><section id="proyek" className="bg-white py-20 px-6 border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proyek</h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-xl mx-auto">
          Proyek yang pernah saya kerjakan.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.title} className="bg-primary border-2 border-black p-6 space-y-4 flex flex-col hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
              <span className="text-xs font-semibold bg-dark text-primary px-2 py-1 self-start">
                {project.tag}
              </span>
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">{project.summary}</p>
              <div className="space-y-2">
                <p className="text-xs text-gray-500 font-mono leading-relaxed">{project.stack}</p>
                {'repo' in project && project.repo && (
                  <a
                    href={project.repo}
                    className="inline-block text-sm font-semibold underline underline-offset-4 hover:text-gray-600"
                  >
                    Lihat Repository →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section></Reveal>
  );
}
