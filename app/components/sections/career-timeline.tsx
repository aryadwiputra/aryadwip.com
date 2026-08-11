import { EXPERIENCE } from "~/lib/portfolio-data";
import Reveal from "~/components/reveal";

export default function CareerTimeline() {
  return (
    <Reveal>
      <section
        id="pengalaman"
        className="bg-white py-20 px-6 border-b-2 border-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 tracking-tight">
            Pengalaman
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-xl mx-auto">
            Perjalanan karir sebagai backend engineer.
          </p>
          <div className="max-w-4xl mx-auto relative">
            {/* garis mobile: kiri */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark/20 md:hidden" />
            {/* garis desktop: tengah */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-dark/20" />
            {EXPERIENCE.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative pl-20 pb-12 last:pb-0 md:pl-0 ${
                    left ? "md:pr-14 md:w-1/2" : "md:pl-14 md:ml-auto md:w-1/2"
                  }`}
                >
                  {/* node */}
                  <div
                    className={`absolute top-1 left-4 w-9 h-9 rounded-full bg-primary border-2 border-dark flex items-center justify-center text-sm font-bold z-10 ${
                      left
                        ? "md:left-full md:-translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="border-2 border-black p-6 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                    <span className="inline-block bg-dark text-primary text-xs font-semibold px-2 py-1 mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-gray-500 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
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
