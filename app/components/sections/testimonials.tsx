import { TESTIMONIALS } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

const STICKERS = [
  { bg: "bg-white", rotate: "rotate-2", tape: "bg-pink", star: "text-primary" },
  { bg: "bg-pink", rotate: "-rotate-2", tape: "bg-blue", star: "text-dark" },
  { bg: "bg-blue", rotate: "rotate-1", tape: "bg-primary", star: "text-dark" },
];

export default function Testimonials() {
  return (
    <Reveal>
      <section className="bg-muted py-20 px-6 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight">
            Nilai yang Saya Bawa
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 items-start">
            {TESTIMONIALS.map((item, i) => {
              const s = STICKERS[i % STICKERS.length];
              return (
                <div
                  key={item.name}
                  className={`relative ${s.bg} border-2 border-black p-6 space-y-4 ${s.rotate} hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow`}
                >
                  {/* tape effect */}
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 ${s.tape} w-16 h-4 border-2 border-black rotate-2 opacity-90`}
                  />
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={`${s.star} text-lg`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
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
