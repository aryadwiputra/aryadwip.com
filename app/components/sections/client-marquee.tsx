import { CLIENTS } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

export default function ClientMarquee() {
  return (
    <Reveal><section className="bg-dark border-b-2 border-black overflow-hidden py-6">
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        <div className="flex gap-16 shrink-0">
          {CLIENTS.map((c, i) => (
            <span key={i} className="text-gray-400 text-sm font-semibold tracking-widest shrink-0">
              {c.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="flex gap-16 shrink-0">
          {CLIENTS.map((c, i) => (
            <span key={i} className="text-gray-400 text-sm font-semibold tracking-widest shrink-0">
              {c.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section></Reveal>
  );
}
