import { TESTIMONIALS } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

export default function Testimonials() {
  return (
    <Reveal><section className="bg-muted py-20 px-6 border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nilai yang Saya Bawa</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div key={item.name} className="bg-white border-2 border-black p-6 space-y-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-primary text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">"{item.quote}"</p>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section></Reveal>
  );
}
