import { FEATURES } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

export default function Features() {
  return (
    <Reveal><section id="keahlian" className="relative py-20 px-6 bg-primary border-y-2 border-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Keahlian</h2>
        <p className="text-center text-lg mb-12 max-w-xl mx-auto">
          Stack dan teknologi yang saya kuasai dalam 6+ tahun di ekosistem Laravel.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="bg-white border-2 border-black p-6 space-y-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section></Reveal>
  );
}
