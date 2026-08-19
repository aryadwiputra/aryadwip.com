import { FEATURES, STATS } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

const STAT_CARDS = [
  { ...STATS[0], color: "bg-mustard", note: "// 2019–sekarang" },
  { ...STATS[1], color: "bg-sage", note: "// klien & mandiri" },
];
// Rotasi hanya di 2 kartu stat (aksen), grid features tanpa rotasi (rapi).

export default function Features() {
  return (
    <Reveal>
      <section
        id="keahlian"
        className="relative py-20 px-6 bg-paper border-y-2 border-black overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, black 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Keahlian
          </h2>
          <p className="text-center text-lg mb-12 max-w-xl mx-auto">
            Stack dan teknologi yang saya kuasai dalam 6+ tahun di ekosistem
            Laravel.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAT_CARDS.map((stat, i) => (
              <div
                key={stat.value}
                className={`${stat.color} border-2 border-black p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                }`}
              >
                <p className="font-display font-bold text-6xl leading-none">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold mt-4">{stat.label}</p>
                <p className="font-mono text-[11px] text-dark/50 mt-1">
                  {stat.note}
                </p>
              </div>
            ))}
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-white border-2 border-black p-6 space-y-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="w-8 h-8"
                />
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
