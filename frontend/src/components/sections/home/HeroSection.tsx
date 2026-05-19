import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-12 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12">
        <div className="order-2 space-y-6 md:order-1 md:col-span-7">
          <span className="inline-block rounded bg-accent-purple/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-purple">
            Senior Laravel Engineer
          </span>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            Saya membangun website yang stabil dan mudah dikembangkan untuk bisnis Anda.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-brand-muted md:text-lg">
            Dengan Laravel sebagai fondasi utama, saya terbiasa menangani arsitektur API, optimasi database, serta integrasi sistem untuk kebutuhan operasional yang lebih kompleks.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-button bg-brand-dark px-6 py-3 text-sm font-medium text-white shadow-soft transition-all hover:bg-opacity-90"
            >
              Lihat Portofolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-button border border-brand-border bg-white px-6 py-3 text-sm font-medium text-brand-dark transition-all hover:bg-gray-50"
            >
              Hubungi Saya
            </Link>
          </div>
          <div className="grid max-w-lg grid-cols-3 gap-4 border-t border-brand-border pt-10">
            <div>
              <p className="text-2xl font-semibold text-brand-dark">6+ Years</p>
              <p className="mt-1 text-xs text-brand-muted">Experience</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-dark">Laravel</p>
              <p className="mt-1 text-xs text-brand-muted">Specialist</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-dark">100%</p>
              <p className="mt-1 text-xs text-brand-muted">Fullstack Delivery</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 flex justify-center py-10 md:order-2 md:col-span-5 md:py-0">
          <div className="absolute left-10 top-4 hidden h-12 w-12 animate-float-1 rounded-full border-4 border-accent-purple/20 md:block"></div>
          <div className="absolute bottom-10 right-4 hidden h-0 w-0 animate-float-2 border-b-[35px] border-l-[20px] border-r-[20px] border-b-accent-pink/30 border-l-transparent border-r-transparent md:block"></div>
          <div className="absolute right-12 top-1/2 hidden h-8 w-8 animate-float-3 rounded-card bg-accent-blue/10 md:block"></div>
          <div className="absolute bottom-8 left-8 hidden h-16 w-16 animate-spin rounded-full border-2 border-dashed border-accent-orange/40 [animation-duration:20s] md:block"></div>

          <div className="relative z-10 w-full max-w-[320px] md:max-w-sm">
            <div className="absolute inset-x-4 bottom-5 top-5 rounded-[2.25rem] bg-gradient-to-br from-accent-purple/8 via-accent-blue/4 to-accent-pink/8 md:hidden"></div>
            <div className="absolute inset-x-6 bottom-8 top-10 hidden rounded-[2.75rem] bg-gradient-to-br from-accent-purple/10 via-accent-blue/5 to-accent-pink/10 blur-2xl md:block"></div>
            <div className="absolute -left-5 top-10 hidden h-32 w-32 rounded-full bg-accent-purple/8 blur-2xl md:block"></div>
            <div className="absolute -right-6 bottom-14 hidden h-36 w-36 rounded-full bg-accent-blue/8 blur-2xl md:block"></div>

            <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:rounded-[2.5rem] md:shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-gray-50 via-white to-gray-100 md:rounded-[2.5rem]">
                <Image
                  src="/assets/images/arya-dwi-putra.png"
                  alt="Arya Dwi Putra"
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 360px, 288px"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_45%),linear-gradient(to_top,rgba(15,23,42,0.08),transparent_35%)]"></div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.08)] md:border-white/60 md:bg-white/90 md:shadow-[0_12px_30px_rgba(15,23,42,0.10)] md:backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse"></span>
              <div>
                <p className="text-[11px] font-semibold text-brand-dark">Arya Dwi Putra</p>
                <p className="text-[10px] text-brand-muted">Siap untuk kerja remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
