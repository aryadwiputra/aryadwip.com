export function ContactHeroSection() {
  return (
    <section className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded bg-accent-purple/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-purple">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-purple"></span> Mari Terhubung
          </span>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            Punya kebutuhan backend, dashboard, atau integrasi sistem? Yuk ngobrol dulu.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
            Saya terbuka untuk diskusi soal pengembangan produk baru, audit teknis, perapihan fondasi aplikasi, atau kebutuhan sistem yang harus siap dipakai tim operasional sehari-hari.
          </p>
        </div>
      </div>
    </section>
  );
}
