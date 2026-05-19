import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PortfolioListingClient } from "@/features/portfolio/components/PortfolioListingClient";

export function PortfolioPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-border bg-white pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="absolute left-12 top-16 hidden h-10 w-10 animate-float-1 rounded-full border-[3px] border-accent-purple/20 sm:block"></div>
      <div className="absolute bottom-12 right-16 hidden h-6 w-6 animate-float-2 rounded-card border border-accent-blue/20 bg-accent-blue/5 sm:block"></div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 lg:col-span-8">
          <Badge className="bg-accent-purple/5 text-accent-purple" withDot dotClassName="bg-accent-purple">Selected Works</Badge>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            Studi kasus produk digital, arsitektur data, dan integrasi skala enterprise.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
            Kumpulan proyek representatif yang menguji kapabilitas saya dalam memecahkan masalah bisnis nyata melalui ekosistem **Laravel**, optimasi query kompleks, serta pengiriman kode yang *clean* dan terstruktur.
          </p>
        </div>
        <div className="w-full lg:col-span-4">
          <Card className="group relative overflow-hidden p-6 shadow-soft">
            <div className="absolute right-0 top-0 -z-10 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-gray-50 to-transparent"></div>
            <p className="border-b border-brand-border pb-3 text-xs font-semibold uppercase tracking-widest text-brand-dark/40">Konteks Produksi</p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
              <div>
                <span className="block text-3xl font-semibold tracking-tight text-brand-dark">06</span>
                <span className="mt-0.5 block text-xs text-brand-muted">Sistem Aktif</span>
              </div>
              <div>
                <span className="block text-3xl font-semibold tracking-tight text-brand-dark">4+</span>
                <span className="mt-0.5 block text-xs text-brand-muted">Domain Industri</span>
              </div>
              <div>
                <span className="mt-1 block w-fit rounded bg-accent-purple/5 px-2 py-0.5 text-xs font-semibold text-accent-purple">Laravel 11+</span>
                <span className="mt-1 block text-[11px] text-brand-muted">Core Backend</span>
              </div>
              <div>
                <span className="mt-1 block w-fit rounded bg-accent-green/5 px-2 py-0.5 text-xs font-semibold text-accent-green">Robust</span>
                <span className="mt-1 block text-[11px] text-brand-muted">End-to-End Delivery</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PortfolioCtaSection() {
  return (
    <section className="relative overflow-hidden border-y border-brand-border bg-brand-dark py-20 text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent-purple/10 blur-[100px]"></div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-4 lg:col-span-8">
          <Badge className="border border-accent-green/20 bg-accent-green/10 text-accent-green" withDot dotClassName="bg-accent-green animate-pulse">Open for collaboration</Badge>
          <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight md:text-4xl">
            Mencari partner teknis berpengalaman untuk mengamankan backend platform Anda?
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
            Saya terbiasa bergabung sejak tahap inisiasi arsitektur (*discovery phase*), stabilisasi sistem *legacy* yang rentan kolaps, hingga implementasi modul kritis yang membutuhkan *delivery* cepat namun tetap *maintainable*.
          </p>
        </div>
        <div className="flex lg:col-span-4 lg:justify-end">
          <Button href="/kontak" variant="secondary" size="lg" className="group w-full sm:w-auto">
            Diskusikan Proyek <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PortfolioListingSection() {
  return (
    <>
      <PortfolioPageHero />
      <PortfolioListingClient />
      <PortfolioCtaSection />
    </>
  );
}
