import { HOW_I_WORK } from "~/lib/portfolio-data";

import Reveal from "~/components/reveal";

const STEP_COLORS = ["bg-pink", "bg-blue", "bg-primary", "bg-white"];

export default function HowIWork() {
  return (
    <Reveal>
      <section className="bg-dark text-primary py-20 px-6 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 tracking-tight">
            Cara Saya Bekerja
          </h2>
          <p className="text-center text-primary/70 text-lg mb-12 max-w-xl mx-auto">
            Bagaimana saya bekerja dengan klien dari awal hingga delivery.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_I_WORK.map((step, i) => (
              <div
                key={step.step}
                className="border-2 border-primary/30 p-8 space-y-4 hover:border-primary transition-colors"
              >
                <span
                  className={`inline-flex w-14 h-14 items-center justify-center border-2 border-black font-black text-xl text-dark ${
                    STEP_COLORS[i % STEP_COLORS.length]
                  }`}
                >
                  {step.step}
                </span>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-primary/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
