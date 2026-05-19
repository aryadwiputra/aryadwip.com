import { ContactFormClient } from "@/components/sections/contact/ContactFormClient";

export function ContactPageSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactFormClient />
        </div>

        <div className="w-full space-y-6 lg:col-span-5 lg:sticky lg:top-24">
          <div className="space-y-5 rounded-card border border-brand-border bg-white p-6 shadow-soft">
            <h3 className="border-b border-brand-border pb-3 text-sm font-semibold text-brand-dark">Saluran Komunikasi Langsung</h3>
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-brand-muted">Korespondensi Email Utama</span>
                <a href="mailto:hello@aryadwiputra.com" className="mt-0.5 block text-sm font-medium text-brand-dark transition-colors hover:text-accent-purple">hello@aryadwiputra.com</a>
              </div>
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-brand-muted">Lokasi Kerja</span>
                <span className="mt-0.5 block font-medium text-brand-dark">Indonesia • Global Jarak Jauh Coordination Ready</span>
              </div>
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-brand-muted">Jam Koordinasi Efektif</span>
                <span className="mt-0.5 block font-medium text-brand-dark">Senin – Jumat, 09.00 – 18.00 WIB</span>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-card border border-brand-border bg-gray-50 shadow-soft">
            <iframe title="Lokasi Arya Dwi Putra" src="https://www.google.com/maps?q=Jakarta%20Indonesia&z=10&output=embed" width="100%" height="100%" style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.85)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}
