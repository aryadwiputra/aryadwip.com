import Image from "next/image";
import Link from "next/link";

export function AboutPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-border bg-white pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded bg-accent-purple/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-purple">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-purple"></span> About Me
          </span>
          <h1 className="text-4xl font-semibold tracking-tight leading-[1.1] text-brand-dark md:text-5xl lg:text-6xl">
            Saya membantu bisnis merapikan arsitektur sistem digital agar siap bertumbuh secara massal.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
            Fokus utama saya bertumpu pada *backend engineering* tangguh berbasis **Laravel**, manajemen performa data relasional, serta pengiriman solusi *end-to-end* pragmatis yang menjembatani kebutuhan logis bisnis dengan operasional harian tim.
          </p>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="w-full max-w-[320px] rounded-card border border-brand-border bg-white p-4 shadow-soft animate-drift md:max-w-sm">
            <div className="relative aspect-square w-full overflow-hidden rounded-card border border-brand-border/60 bg-gray-50">
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-brand-muted/20">
                Profile Placeholder
              </div>
              <Image
                src="/assets/images/arya-dwi-putra.png"
                alt="Arya Dwi Putra"
                fill
                priority
                sizes="(min-width: 1024px) 384px, 320px"
                className="relative z-10 object-cover opacity-95 grayscale mix-blend-multiply"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-brand-dark">Arya Dwi Putra</h2>
                <p className="mt-0.5 text-xs text-brand-muted">Senior Laravel Engineer &bull; Fullstack Delivery</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-accent-green"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPagePhilosophy() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-accent-blue">Filosofi Kerja</span>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">Pragmatisme terstruktur untuk ketahanan software</h2>
          </div>
          <p className="text-sm leading-relaxed text-brand-muted md:text-base">
            Saya percaya kode yang baik bukan sekadar baris pemrograman yang cepat selesai dibangun, melainkan ekosistem logic yang mudah dipahami tim, terdokumentasi dengan jernih, serta memiliki kelenturan arsitektur saat skala bisnis berkembang pesat.
          </p>
          <p className="text-sm leading-relaxed text-brand-muted md:text-base">
            Menjaga kenyamanan bekerja di persimpangan alur operasional *stakeholder*, kedalaman optimasi *database indexing*, hingga kerapian performa rendering client-side adalah komitmen utama saya. Pendekatan saya murni berbasis solusi nyata: menghindari *over-engineering* yang melelahkan namun tetap memprioritaskan keamanan serta kecepatan siklus rilis.
          </p>
        </div>

        <div className="w-full lg:col-span-5">
          <div className="space-y-6 rounded-card border border-brand-border bg-gray-50/60 p-6 shadow-soft md:p-8">
            <h3 className="border-b border-brand-border pb-3 text-xs font-semibold uppercase tracking-widest text-brand-dark/40">
              Prinsip Rekayasa
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple"></span>
                <p className="text-sm leading-normal text-brand-muted">
                  <strong className="font-medium text-brand-dark">Domain-Driven Orientation:</strong> Memetakan logika pemrograman dari fondasi proses bisnis nyata, bukan sekadar pelunasan daftar fitur.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-pink"></span>
                <p className="text-sm leading-normal text-brand-muted">
                  <strong className="font-medium text-brand-dark">Maintainability First:</strong> Mengedepankan struktur rancangan modular dan penulisan kode yang mudah didelegasikan antartim.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange"></span>
                <p className="text-sm leading-normal text-brand-muted">
                  <strong className="font-medium text-brand-dark">Clear Communication:</strong> Memecahkan kebuntuan teknis yang rumit menjadi opsi solusi taktis yang mudah dipahami manajerial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const careerItems = [
  {
    badge: "B2B",
    title: "Senior Backend Engineer",
    company: "Perusahaan Teknologi B2B Hub • Kontrak Enterprise",
    period: "2024 — Sekarang",
    description:
      "Memimpin tim rekayasa untuk inisiasi stabilisasi core platform internal, melakukan arsitektur ulang skema modul Laravel masif yang rentan kolaps, mengoptimalkan pipeline redis queue, serta mengamankan sinkronisasi database mutasi data lintas divisi operasional.",
    hoverColor: "group-hover:text-accent-purple",
  },
  {
    badge: "DSG",
    title: "Fullstack Engineer",
    company: "Digital Agency & Software House Studio",
    period: "2021 — 2024",
    description:
      "Bertanggung jawab penuh dalam delivery dashboard analitik interaktif, integrasi eksternal RESTful API pihak ketiga, penanganan webhook, serta merancang antarmuka kustom web aplikasi dengan performa retensi memori ringan.",
    hoverColor: "group-hover:text-accent-blue",
  },
  {
    badge: "AGC",
    title: "Web Developer",
    company: "Digital Solution Agency & Product Team",
    period: "2019 — 2021",
    description:
      "Membangun fondasi aplikasi berbasis web, modul CMS kustom, dan optimalisasi kerangka fungsional dasar database relasional sembari memperdalam implementasi bersih antarmuka administrasi internal.",
    hoverColor: "group-hover:text-accent-pink",
  },
] as const;

export function AboutPageCareer() {
  return (
    <section className="border-y border-brand-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl space-y-3">
          <span className="inline-flex items-center justify-center rounded bg-accent-blue/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Riwayat Karir
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-dark md:text-4xl">
            Jalur rekam jejak profesional dalam industri rekayasa perangkat lunak
          </h2>
        </div>

        <div className="relative space-y-5 pl-4 md:pl-0">
          {careerItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-card border border-brand-border bg-white p-6 transition-all hover:border-brand-dark/20 hover:shadow-soft md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-brand-border bg-gray-50 font-mono text-xs font-semibold tracking-wider text-brand-muted">
                    {item.badge}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold leading-tight text-brand-dark transition-colors ${item.hoverColor}`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-brand-muted">{item.company}</p>
                  </div>
                </div>
                <span className="h-fit w-fit rounded border border-brand-border/60 bg-gray-50 px-2.5 py-1 font-mono text-xs font-semibold tracking-wider text-brand-muted md:order-2">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-brand-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const expertiseItems = [
  {
    label: "Inti Stack",
    labelClassName: "bg-accent-purple/5 text-accent-purple",
    title: "Laravel Ecosystem",
    titleClassName: "group-hover:text-accent-purple",
    description:
      "Penguasaan ekosistem penuh framework Laravel: RESTful/GraphQL API Architecture, optimalisasi Task Scheduling, Redis Queue Processing, Event Listeners, Enforce Form Requests, serta unit testing solid memakai PHPUnit/Pest.",
  },
  {
    label: "Data Thinking",
    labelClassName: "bg-accent-blue/5 text-accent-blue",
    title: "Relational Database Hub",
    titleClassName: "group-hover:text-accent-blue",
    description:
      "Perancangan database ERD yang clean melalui kaidah normalisasi ketat, eliminasi bottleneck performa query N+1 via Eager Loading terarah, optimasi komposit indeks MySQL/PostgreSQL, serta isolasi arsitektur log mutasi data transaksi.",
  },
  {
    label: "Working Style",
    labelClassName: "bg-accent-green/5 text-accent-green",
    title: "Pragmatic Delivery",
    titleClassName: "group-hover:text-accent-green",
    description:
      "Saya menerapkan ritme kerja terukur yang tenang, komunikatif, transparan, serta mengutamakan dokumentasi modular komprehensif agar siklus maintenance sistem pasca-release tetap stabil dan minim kejutan teknis.",
  },
] as const;

export function AboutPageExpertise() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-card border border-brand-border p-6 transition-colors hover:border-brand-dark md:p-8"
            >
              <div className="space-y-4">
                <span className={`block w-fit rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${item.labelClassName}`}>
                  {item.label}
                </span>
                <h3 className={`text-xl font-semibold tracking-tight text-brand-dark transition-colors ${item.titleClassName}`}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-brand-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPageCta() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 text-white md:py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-purple/10 blur-[100px]"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12">
        <div className="space-y-3 lg:col-span-8">
          <span className="inline-block rounded border border-accent-green/20 bg-accent-green/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent-green">
            Terbuka untuk peran engineering
          </span>
          <h2 className="text-2xl font-semibold tracking-tight leading-[1.2] md:text-4xl">
            Mencari engineer komunikatif yang andal menangani sistem digital kompleks?
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-400">
            Mari diskusikan rencana penambahan modul backend baru, audit optimasi performa server, pengembangan sistem informasi pergudangan, atau kustomisasi arsitektur software Anda secara matang.
          </p>
        </div>
        <div className="flex lg:col-span-4 lg:justify-end">
          <Link
            href="/kontak"
            className="inline-flex h-12 w-full items-center justify-center rounded-button bg-white px-6 text-xs font-semibold text-brand-dark shadow-soft transition-all hover:bg-gray-50 sm:w-auto"
          >
            Mulai Diskusi Teknis
          </Link>
        </div>
      </div>
    </section>
  );
}
