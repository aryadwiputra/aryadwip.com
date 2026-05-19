const workSteps = [
  {
    number: "01",
    title: "Discovery & Requirement Mapping",
    description:
      "Bedah kebutuhan bisnis klien untuk menetapkan fungsionalitas sistem informasi, kebutuhan user role, cakupan skalabilitas, serta penentuan timeline rilis yang masuk akal.",
  },
  {
    number: "02",
    title: "Database & Architecture Planning",
    description:
      "Merancang skema Entity-Relationship Diagram (ERD), normalisasi data, pendefinisian relasi tabel, indeks kolom penting, serta menetapkan API design pattern yang bersih.",
  },
  {
    number: "03",
    title: "Clean Implementation",
    description:
      "Penulisan kode berbasis standar PSR-12, pemanfaatan Service Classes, Form Requests, Observers, serta pemisahan logika bisnis yang rigid dari controller agar project mudah di-maintain jangka panjang.",
  },
  {
    number: "04",
    title: "Testing & Optimasi",
    description:
      "Menjalankan PHPUnit testing, penanganan N+1 query menggunakan eager loading, serta optimasi caching data menggunakan Redis guna memangkas response time aplikasi.",
  },
  {
    number: "05",
    title: "Deployment & Maintenance",
    description:
      "Mengotomatisasi siklus deploy melalui CI/CD pipeline, konfigurasi server Nginx via Laravel Forge, serta integrasi logging error real-time untuk memastikan high-availability.",
  },
];

export function WorkMethodSection() {
  return (
    <section id="workflow" className="border-t border-brand-border bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-5 lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-50 via-white to-accent-purple/5 p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)] md:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div className="pointer-events-none absolute -left-10 top-10 hidden h-28 w-28 rounded-full bg-accent-purple/10 blur-2xl md:block"></div>
            <div className="pointer-events-none absolute -right-10 bottom-12 hidden h-36 w-36 rounded-full bg-accent-blue/10 blur-2xl md:block"></div>

            <div className="relative space-y-4">
              <div className="overflow-hidden rounded-[1.75rem] bg-white/85 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] md:bg-white/70 md:backdrop-blur">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(139,92,246,0.08),rgba(59,130,246,0.06),rgba(244,114,182,0.06))] p-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-purple">Brief</p>
                      <p className="mt-2 text-xs text-brand-muted">Tujuan bisnis, user flow, dan scope fitur dipetakan lebih dulu.</p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-blue">ERD</p>
                      <p className="mt-2 text-xs text-brand-muted">Struktur data dirancang agar aman dipakai dan enak dikembangkan.</p>
                    </div>
                    <div className="col-span-2 rounded-[1.35rem] bg-brand-dark p-4 text-white shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Delivery Flow</p>
                          <p className="mt-2 text-sm font-semibold">Plan → Build → Test → Deploy</p>
                        </div>
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium text-white/80">
                          Maintainable
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 rounded-2xl bg-white/80 p-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-accent-green"></span>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-green">Quality Gate</p>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-center text-[10px] font-medium text-brand-muted">PSR-12</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-center text-[10px] font-medium text-brand-muted">Testing</span>
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-center text-[10px] font-medium text-brand-muted">Observability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2 shadow-[0_10px_20px_rgba(15,23,42,0.06)] md:border-white/60 md:bg-white/90 md:shadow-[0_12px_30px_rgba(15,23,42,0.08)] md:backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse"></span>
                <div>
                  <h4 className="text-sm font-semibold text-brand-dark">Arsitektur Terarah & Terukur</h4>
                  <p className="mt-0.5 text-xs text-brand-muted">Mengurangi redundansi kode serta memperjelas jalur delivery dari planning sampai deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 md:col-span-7">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-pink">How I Work</span>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">A structured process to ship reliable products</h2>
          </div>

          <div className="relative mt-8 space-y-10 border-l border-brand-border pl-6">
            {workSteps.map((step) => (
              <div key={step.number} className="relative">
                <span className="absolute -left-[35px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-brand-border bg-white text-xs font-medium text-brand-dark">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-brand-dark">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
