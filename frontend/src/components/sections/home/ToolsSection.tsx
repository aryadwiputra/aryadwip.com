import Image from "next/image";
import { stackItems } from "@/lib/home-data";

export function ToolsSection() {
  return (
      <section id="tools" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                  <span className="text-xs font-semibold text-accent-orange uppercase tracking-wider">Ecosystem & Stack</span>
                  <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">Perangkat andalan di balik platform yang solid</h2>
                  <p className="text-brand-muted text-sm md:text-base">Kombinasi backend tangguh, pengelolaan data efisien, dan antarmuka modern untuk menghasilkan performa terbaik.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  {stackItems.map((item) => {
                      const Icon = item.icon;

                      return (
                          <div
                              key={item.label}
                              className={`${item.cardClassName} flex h-32 flex-col justify-between rounded-card p-5 transition-all`}
                          >
                              <div className="flex items-center justify-between gap-3">
                                  <span className={`${item.badgeClassName} inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold`}>
                                      {item.category}
                                  </span>
                                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/80 text-brand-dark">
                                      {item.mode === "logo" && item.logoSrc ? (
                                          <div className="relative h-5 w-5">
                                              <Image
                                                  src={item.logoSrc}
                                                  alt={item.logoAlt ?? item.label}
                                                  fill
                                                  sizes="20px"
                                                  className={item.logoClassName}
                                              />
                                          </div>
                                      ) : Icon ? (
                                          <Icon width={20} height={20} strokeWidth={1.8} />
                                      ) : null}
                                  </div>
                              </div>
                              <p className="mt-auto text-base font-semibold text-brand-dark">
                                  {item.label}
                              </p>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>
  );
}
