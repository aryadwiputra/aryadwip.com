import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6 order-2 md:order-1">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-purple bg-accent-purple/5 px-2.5 py-1 rounded">Senior Laravel Engineer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-dark tracking-tight leading-[1.1]">Saya membangun website yang stabil dan mudah dikembangkan untuk bisnis Anda.</h1>
          <p className="text-base md:text-lg text-brand-muted max-w-xl leading-relaxed">Dengan Laravel sebagai fondasi utama, saya terbiasa menangani arsitektur API, optimasi database, serta integrasi sistem untuk kebutuhan operasional yang lebih kompleks.</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white text-sm font-medium rounded-button hover:bg-opacity-90 transition-all shadow-soft">Lihat Portofolio</Link>
            <Link href="/kontak" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-dark border border-brand-border text-sm font-medium rounded-button hover:bg-gray-50 transition-all">Hubungi Saya</Link>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-brand-border max-w-lg">
            <div><p className="text-2xl font-semibold text-brand-dark">6+ Years</p><p className="text-xs text-brand-muted mt-1">Experience</p></div>
            <div><p className="text-2xl font-semibold text-brand-dark">Laravel</p><p className="text-xs text-brand-muted mt-1">Specialist</p></div>
            <div><p className="text-2xl font-semibold text-brand-dark">100%</p><p className="text-xs text-brand-muted mt-1">Fullstack Delivery</p></div>
          </div>
        </div>
        <div className="md:col-span-5 relative flex justify-center order-1 md:order-2 py-10 md:py-0">
          <div className="absolute top-4 left-10 w-12 h-12 rounded-full border-4 border-accent-purple/20 animate-float-1"></div>
          <div className="absolute bottom-10 right-4 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-accent-pink/30 border-r-[20px] border-r-transparent animate-float-2"></div>
          <div className="absolute top-1/2 right-12 w-8 h-8 bg-accent-blue/10 rounded-card animate-float-3"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full border-2 border-dashed border-accent-orange/40 animate-spin [animation-duration:20s]"></div>
          <div className="relative bg-white p-4 rounded-card border border-brand-border shadow-soft max-w-[320px] md:max-w-sm w-full z-10 transform hover:scale-[1.01] transition-transform">
            <div className="aspect-square w-full bg-gray-100 rounded-card overflow-hidden relative">
              <Image
                src="/assets/images/arya-dwi-putra.png"
                alt="Arya Dwi Putra"
                fill
                priority
                sizes="(min-width: 768px) 384px, 320px"
                className="relative z-10 w-full h-full object-cover mix-blend-multiply filter opacity-90"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-brand-dark">Arya Dwi Putra</h3>
                <p className="text-xs text-brand-muted">Siap untuk kerja remote</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
