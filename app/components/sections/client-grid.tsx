import { CLIENTS } from "~/lib/portfolio-data";

// Grid statis klien (bukan marquee berjalan) — lebih kredibel & bukan ciri
// template AI. Nama real + cerita singkat dari pengalaman kerja nyata.

const CLIENT_STORIES: Record<string, string> = {
  LPSK: "Sistem Opera (Opini Penyusunan Rakyat) & website internal",
  "PT. Wifiku Indonesia": "CRM dengan integrasi Xendit & pemesanan wifi",
  "PT. Citanusa": "Proyek pengembangan aplikasi",
  "Taruna Insani Boarding School": "Website sekolah & portal PPDB orang tua",
  "Himpunan Ahli Teknik Tanah": "Website organisasi & keanggotaan",
};

export default function ClientGrid() {
  return (
    <section className="bg-dark text-paper py-12 px-6 border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-paper/60 mb-8">
          {"// "}PERNAH MENGERJAKAN PROYEK UNTUK
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="border-2 border-primary/30 p-4 hover:border-primary transition-colors"
            >
              <p className="font-bold text-sm mb-1">{client}</p>
              {CLIENT_STORIES[client] && (
                <p className="text-xs text-paper/50 leading-relaxed">
                  {CLIENT_STORIES[client]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
