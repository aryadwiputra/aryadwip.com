import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function CTASection() {
  return (
    <section id="contact" className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto bg-brand-dark rounded-card text-white p-8 md:p-16 relative overflow-hidden shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(122,61,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(59,137,255,0.14),_transparent_24%)] pointer-events-none"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <Badge className="border border-accent-green/20 bg-accent-green/10 text-accent-green">
              Siap bantu dari sisi teknis
            </Badge>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-[1.2]">
              Kalau kamu butuh partner yang bisa bantu merapikan backend, dashboard, atau integrasi sistem, kita bisa mulai dari yang paling penting dulu.
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-3xl leading-relaxed">
              Cocok untuk audit teknis, pengembangan fitur baru, perbaikan fondasi aplikasi, sampai penyiapan sistem yang lebih siap tumbuh.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Button href="/kontak" variant="secondary" size="md" className="font-semibold">
                Mulai Diskusi
              </Button>
              <Button href="/tentang" variant="ghost" size="md" className="border border-gray-700 text-white hover:bg-gray-800 hover:text-white">
                Tentang Saya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
