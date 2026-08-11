export const SITE = {
  name: "Arya Dwi Putra",
  url: "https://aryadwip.com",
  title: "Software Developer & Laravel Specialist",
  tagline: "Software developer spesialis Laravel di Indonesia. 6+ tahun pengalaman membuat aplikasi & website Laravel — API design, database, dan arsitektur yang scalable.",
  bio: "Software Developer dengan spesialisasi Laravel (Laravel 5–13) dan pengalaman 6+ tahun. Membangun aplikasi web end-to-end untuk klien Indonesia & global — perancangan API, database design, integrasi pihak ketiga, hingga deployment dan infrastruktur.",
  email: "aryaadwptr@gmail.com",
  phone: "+6285173202701", // format E.164 untuk JSON-LD/schema
  phoneDisplay: "0851-7320-2701", // format lokal untuk tampilan UI
  wa: "6285173202701",
  location: "Bogor, Indonesia",
  github: "https://github.com/aryadwiputra/",
  linkedin: "https://www.linkedin.com/in/aryadwiputra/",
};

export const STATS = [
  { value: "6+", label: "Tahun pengalaman di ekosistem Laravel", short: "Tahun Laravel" },
  { value: "20+", label: "Proyek aplikasi & sistem dikerjakan", short: "Proyek Selesai" },
  { value: "4+", label: "Industri yang pernah dilayani", short: "Industri" },
];

export const NAV_ITEMS = [
  { label: "Layanan", href: "/layanan" },
  { label: "Tentang", href: "/tentang" },
  { label: "Proyek", href: "/proyek" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

export const CLIENTS = [
  "LPSK",
  "PT. Wifiku Indonesia",
  "PT. Citanusa",
  "Taruna Insani Boarding School",
  "Himpunan Ahli Teknik Tanah",
];

export const FEATURES = [
  {
    title: "Laravel Ecosystem",
    desc: "RESTful API, queue processing (Redis), task scheduling, event listeners, form requests, Laravel v5–13.",
    icon: "/icons/tech/laravel.svg",
  },
  {
    title: "Database Design",
    desc: "ERD design, query optimization, composite indexing, N+1 elimination. MySQL & PostgreSQL.",
    icon: "/icons/tech/mysql.svg",
  },
  {
    title: "API Integration",
    desc: "Xendit, Midtrans (webhook, adapter pattern), WhatsApp Gateway, Telegram Bot, OAuth Socialite.",
    icon: "/icons/tech/php.svg",
  },
  {
    title: "Frontend",
    desc: "React (18/19), Vue.js, Inertia.js, Alpine.js, Tailwind CSS (v3/v4), Radix UI, Chart.js.",
    icon: "/icons/tech/react.svg",
  },
  {
    title: "Infrastructure",
    desc: "Docker, Nginx, Redis, Git, CI/CD pipeline, Laravel Forge, Linux server management.",
    icon: "/icons/tech/docker.svg",
  },
  {
    title: "Tooling",
    desc: "DomPDF, Laravel Excel, Laravolt Indonesia, QR Code, Scramble (OpenAPI), Pest PHP.",
    icon: "/icons/tech/git.svg",
  },
];

export const HOW_I_WORK = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "Diskusi 30–60 menit untuk memahami kebutuhan, scope proyek, goals, dan memastikan kita cocok bekerja sama.",
  },
  {
    step: "02",
    title: "Proposal & Planning",
    desc: "Saya buat proposal teknis — arsitektur sistem, timeline milestone, dan estimasi biaya yang transparan.",
  },
  {
    step: "03",
    title: "Development & Iterasi",
    desc: "Eksekusi dengan milestone-based delivery, update rutin, dan iterasi berdasarkan feedback Anda.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    desc: "Testing, deployment, dokumentasi, handoff, dan support pasca-launch untuk memastikan semuanya berjalan.",
  },
];

// Harga adalah estimasi awal; final disepakati setelah discovery call & proposal.
export const SERVICES = [
  {
    id: "company-profile",
    title: "Website Company Profile",
    tagline: "Identitas digital profesional untuk bisnis & instansi.",
    desc: "Website company profile modern dengan CMS, SEO-ready, dan desain yang mencerminkan brand Anda.",
    includes: ["Desain & development custom", "CMS konten", "Optimasi SEO dasar", "Responsive & mobile-first"],
    price: "Mulai Rp 3,5 jt",
    icon: "/icons/tech/laravel.svg",
  },
  {
    id: "sistem-informasi",
    title: "Sistem Informasi Custom",
    tagline: "Dashboard, CRUD, laporan, dan role permission sesuai alur bisnis.",
    desc: "Sistem informasi yang disesuaikan proses bisnis Anda — dari manajemen data, approval, hingga laporan.",
    includes: ["Dashboard & role permission", "Modul CRUD custom", "Laporan & ekspor (Excel/PDF)", "Multi-user & audit trail"],
    price: "Mulai Rp 8 jt",
    icon: "/icons/tech/php.svg",
  },
  {
    id: "ecommerce",
    title: "Aplikasi E-commerce",
    tagline: "Toko online dengan pembayaran terintegrasi.",
    desc: "Toko online atau aplikasi jual-beli dengan katalog produk, keranjang, dan payment gateway.",
    includes: ["Katalog & manajemen produk", "Keranjang & checkout", "Midtrans / Xendit", "Invoice & status pesanan"],
    price: "Mulai Rp 10 jt",
    icon: "/icons/tech/mysql.svg",
  },
  {
    id: "api-backend",
    title: "Backend & RESTful API",
    tagline: "API yang solid untuk aplikasi web, mobile, atau integrasi.",
    desc: "RESTful API dengan Laravel — dokumentasi OpenAPI, queue, webhook, dan keamanan berlapis.",
    includes: ["RESTful API & dokumentasi", "Queue & job processing (Redis)", "Webhook & integrasi pihak ketiga", "Keamanan & rate limiting"],
    price: "Mulai Rp 6 jt",
    icon: "/icons/tech/redis.svg",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    tagline: "Website & sistem yang terawat dan aman.",
    desc: "Pemeliharaan rutin: bug fix, update versi Laravel, backup, dan monitoring.",
    includes: ["Bug fix & perbaikan", "Update versi & keamanan", "Backup & monitoring", "Respon prioritas"],
    price: "Mulai Rp 1,5 jt/bulan",
    icon: "/icons/tech/docker.svg",
  },
  {
    id: "migrasi-optimasi",
    title: "Migrasi & Optimasi",
    tagline: "Upgrade sistem lama ke Laravel modern.",
    desc: "Migrasi dari WordPress/CodeIgniter/sistem lama ke Laravel, plus optimasi query & performa.",
    includes: ["Migrasi data & fitur", "Upgrade versi Laravel", "Optimasi query database", "Perbaikan performa"],
    price: "Mulai Rp 3 jt",
    icon: "/icons/tech/git.svg",
  },
];

export const PROJECTS = [
  {
    slug: "plannify",
    title: "Plannify",
    tag: "Task Collaboration Platform",
    summary: "Aplikasi manajemen tugas kolaboratif berbasis workspace untuk mengatur board, assignment, checklist, dan lampiran.",
    stack: "Laravel 11, Inertia.js, React, MySQL, Tailwind CSS, Radix UI",
    repo: "https://github.com/aryadwiputra/Plannify",
    challenge: "Tim kecil sering kehilangan visibilitas pekerjaan karena tugas tersebar di spreadsheet dan chat — tidak ada satu sumber kebenaran.",
    solution: "Membangun aplikasi manajemen tugas berbasis workspace dengan board, assignment, checklist, dan lampiran file.",
    features: [
      "Board & list tugas",
      "Assignment & deadline per anggota",
      "Checklist & lampiran file",
      "Multi-workspace dengan role permission",
    ],
    outcome: "Produk open-source yang membantu tim mengelola proyek kolaboratif secara terstruktur dari satu tempat.",
  },
  {
    slug: "hatti",
    title: "HATTI",
    tag: "Website Organisasi & Operasional",
    summary: "Platform profil organisasi, CMS konten, manajemen anggota, generator KTA PDF, dan pendaftaran event.",
    stack: "Laravel 10, MySQL, AdminLTE, Alpine.js, DomPDF",
    challenge: "Organisasi membutuhkan identitas digital dan pengelolaan keanggotaan yang masih manual — pencatatan KTA dan pendaftaran event.",
    solution: "Platform profil organisasi dengan CMS konten, manajemen anggota, generator KTA PDF, dan pendaftaran event.",
    features: [
      "CMS konten website",
      "Manajemen data anggota",
      "Generator KTA PDF otomatis",
      "Pendaftaran & manajemen event",
    ],
    outcome: "Administrasi keanggotaan yang sebelumnya manual kini tersentralisasi di satu sistem.",
  },
  {
    slug: "asetku",
    title: "Asetku",
    tag: "Asset Operations Platform",
    summary: "Platform manajemen aset multi-organisasi dengan audit trail, QR publik, maintenance, dan pelaporan.",
    stack: "Laravel 13, Inertia.js v3, React 19, TypeScript, Redis",
    challenge: "Multi-organisasi kesulitan melacak aset karena data tersebar dan tidak ada jejak audit yang jelas.",
    solution: "Platform manajemen aset dengan audit trail, QR code publik per aset, dan jadwal maintenance.",
    features: [
      "Manajemen aset multi-organisasi",
      "Audit trail lengkap",
      "QR code publik per aset",
      "Jadwal & riwayat maintenance",
    ],
    outcome: "Setiap aset dapat dilacak riwayatnya dari pengadaan hingga maintenance hanya dengan memindai QR.",
  },
  {
    slug: "tickety",
    title: "Tickety",
    tag: "Platform Event Ticketing",
    summary: "Aplikasi web event ticketing untuk menampilkan event, mengelola tiket, checkout manual, e-ticket PDF ber-QR code, dan validasi check-in.",
    stack: "Laravel 10, PHP 8.1, MySQL, Livewire, Blade, DomPDF, Simple QR Code",
    challenge: "Penyelenggara event butuh sistem ticketing cepat tanpa membayar komisi platform besar.",
    solution: "Aplikasi event ticketing: daftar event, kelola tiket, checkout manual, e-ticket PDF ber-QR, dan validasi check-in.",
    features: [
      "Pembuatan & kelola event",
      "Checkout manual multi-metode",
      "E-ticket PDF dengan QR code",
      "Validasi check-in",
    ],
    outcome: "Proses penjualan dan check-in tiket menjadi paperless dan terverifikasi.",
  },
  {
    slug: "taruna-insani-boarding-school",
    title: "Taruna Insani Boarding School",
    tag: "Website Sekolah & PPDB",
    summary: "Platform sekolah dengan website profil, CMS admin, dan portal PPDB — alur pendaftaran, pembayaran, verifikasi dokumen, penjadwalan tes.",
    stack: "Laravel 12, PHP 8.2, MySQL, Tailwind CSS 4, Alpine.js, DomPDF, Spatie Permission",
    challenge: "PPDB sekolah masih menggunakan alur manual: form kertas, pembayaran terpisah, dan verifikasi dokumen berulang.",
    solution: "Portal PPDB terpadu: alur pendaftaran, pembayaran, verifikasi dokumen, dan penjadwalan tes.",
    features: [
      "Formulir pendaftaran online",
      "Pembayaran & verifikasi",
      "Upload & validasi dokumen",
      "Penjadwalan tes seleksi",
    ],
    outcome: "Calon pendaftar dapat menyelesaikan seluruh proses PPDB dari satu portal, dari daftar hingga jadwal tes.",
  },
  {
    slug: "pos-retail-operasional",
    title: "Point of Sales & Operasional Retail",
    tag: "Sistem Operasional",
    summary: "Aplikasi POS dengan transaksi kasir, inventory, piutang, hutang, retur, shift kasir, CRM dasar, dan laporan operasional.",
    stack: "Laravel 12, Inertia.js 2, React 18, MySQL, Tailwind CSS, Midtrans, Xendit",
    challenge: "Toko retail membutuhkan sistem kasir yang terintegrasi dengan inventory dan pembukuan piutang/hutang.",
    solution: "Aplikasi POS: transaksi kasir, inventory, piutang/hutang, retur, shift kasir, CRM dasar, dan laporan operasional — dengan integrasi payment gateway Midtrans & Xendit.",
    features: [
      "Transaksi kasir cepat",
      "Manajemen inventory & stok",
      "Piutang, hutang & retur",
      "Integrasi Midtrans & Xendit",
      "Laporan operasional harian",
    ],
    outcome: "Operasional toko — kasir, stok, dan laporan — berjalan dari satu sistem terpadu.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Kode yang terstruktur dengan service layer pattern membuat produk mudah dimaintain dan dikembangkan oleh tim.",
    name: "Code Quality",
    role: "Prinsip Utama",
  },
  {
    quote: "Kemampuan menerjemahkan kebutuhan bisnis kompleks menjadi arsitektur teknis yang elegan dan scalable.",
    name: "System Architecture",
    role: "Keahlian Inti",
  },
  {
    quote: "Pengalaman production dengan ribuan user harian di produk-produk kritikal berskala nasional.",
    name: "Production Experience",
    role: "Track Record",
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Laravel Developer",
    company: "PT Tri Cipta Integra",
    period: "Jun 2025 – Sekarang",
    description: "DataKelola (omnichannel contact center untuk BeaCukai, Ditjen AHU, Pelni) dan WhatsApp Centralized Platform untuk FIF Group.",
  },
  {
    role: "IT Support & Web Developer",
    company: "LPSK",
    period: "Okt 2024 – Mei 2025",
    description: "Membangun Opera (Opini Penyusunan Rakyat), maintenance internal website.",
  },
  {
    role: "Web Developer",
    company: "PT Wifiku Indonesia",
    period: "Nov 2023 – Sep 2024",
    description: "CRM dengan integrasi Xendit, purchase order, sistem pemesanan wifi by location.",
  },
  {
    role: "Supervisor IT",
    company: "PT Iconmedia Nusantara Abadi",
    period: "Jul 2022 – Nov 2023",
    description: "Gelosys CRM, WhatsApp gateway, billing system, cafe ordering system.",
  },
];

export const FAQS = [
  {
    q: "Berapa lama waktu pengerjaan proyek?",
    a: "Tergantung kompleksitas. Website company profile umumnya 2–4 minggu, sistem informasi custom 1–3 bulan. Timeline detail disepakati di awal lewat proposal.",
  },
  {
    q: "Bagaimana alur kerjanya?",
    a: "Discovery call → proposal & planning → development dengan milestone → delivery & support. Anda mendapat update rutin di setiap tahap.",
  },
  {
    q: "Apakah tersedia layanan maintenance setelah launch?",
    a: "Ya. Saya menyediakan paket maintenance bulanan: bug fix, update versi, backup, dan monitoring.",
  },
  {
    q: "Teknologi apa yang digunakan?",
    a: "Utamanya Laravel (PHP) untuk backend, React/Vue untuk frontend, MySQL/PostgreSQL untuk database, dan Redis untuk caching & queue.",
  },
  {
    q: "Apakah bisa bekerja remote untuk klien luar kota / luar negeri?",
    a: "Bisa. Saya bekerja remote penuh untuk klien Indonesia dan global, dengan komunikasi via WhatsApp, email, atau meeting online.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Umumnya DP 50% di awal dan 50% setelah selesai, atau skema milestone sesuai kesepakatan. Pembayaran via transfer bank.",
  },
  {
    q: "Apakah ada revisi atau garansi?",
    a: "Setiap paket mencakup revisi sesuai scope yang disepakati. Setelah launch, ada periode garansi bug fix.",
  },
  {
    q: "Bisakah website lama (WordPress/CodeIgniter) dimigrasikan ke Laravel?",
    a: "Bisa. Saya menawarkan layanan migrasi — data, fitur, dan tampilan dipertahankan, dengan arsitektur dan performa yang lebih baik.",
  },
];

export const ARTICLES = [
  {
    slug: "cara-memilih-jasa-pembuatan-website-laravel",
    title: "Cara Memilih Jasa Pembuatan Website Laravel yang Tepat",
    excerpt: "Panduan praktis sebelum memesan jasa pembuatan website — dari mengecek portofolio, proses kerja, hingga hal yang wajib ada di kesepakatan.",
    category: "Panduan",
    date: "2026-08-01",
    readTime: 6,
    tags: ["Laravel", "Tips", "Klien"],
    content: [
      {
        heading: "Kenapa Laravel?",
        paragraphs: [
          "Laravel adalah framework PHP paling populer untuk aplikasi web berskala bisnis. Arsitekturnya yang rapi (MVC), ekosistem yang lengkap, dan standar keamanan bawaan membuatnya cocok untuk website dan sistem yang akan terus berkembang.",
          "Namun framework terbaik pun tidak berarti apa-apa tanpa developer yang tepat. Memilih jasa pembuatan website Laravel berarti memilih siapa yang akan memegang fondasi sistem Anda — jadi proses seleksinya perlu dilakukan dengan hati-hati.",
        ],
      },
      {
        heading: "Hal yang perlu dicek sebelum memesan",
        paragraphs: [
          "Periksa portofolio: apakah pernah mengerjakan proyek dengan kompleksitas serupa? Tanyakan stack dan versi Laravel yang digunakan.",
          "Minta alur kerja yang jelas — proses, timeline, dan milestone. Developer yang profesional akan transparan tentang bagaimana proyek dikerjakan.",
          "Pastikan ada kesepakatan tentang revisi, garansi, dan maintenance pasca-launch. Ini melindungi Anda dari masalah setelah website tayang.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Pilih developer yang tidak hanya bisa coding, tapi juga bisa menjelaskan keputusan teknis dengan bahasa yang Anda pahami. Komunikasi yang baik adalah fondasi proyek yang sukses.",
        ],
      },
    ],
  },
  {
    slug: "laravel-vs-wordpress",
    title: "Laravel vs WordPress: Kapan Harus Memilih Laravel",
    excerpt: "Perbandingan jujur antara Laravel dan WordPress — dan kapan investasi di Laravel benar-benar sepadan untuk bisnis Anda.",
    category: "Perbandingan",
    date: "2026-07-20",
    readTime: 5,
    tags: ["Laravel", "WordPress", "Teknologi"],
    content: [
      {
        heading: "Kapan WordPress cukup",
        paragraphs: [
          "WordPress sangat cocok untuk blog, company profile sederhana, atau toko kecil yang mengandalkan plugin. Biayanya murah, cepat jadi, dan mudah dikelola sendiri.",
          "Masalahnya mulai muncul ketika kebutuhan bisnis menyimpang dari apa yang plugin sediakan — custom logic, integrasi khusus, atau performa tinggi.",
        ],
      },
      {
        heading: "Kapan Laravel lebih tepat",
        paragraphs: [
          "Laravel unggul untuk sistem dengan logika bisnis custom: role & permission, integrasi API, alur approval, data sensitif, atau sistem yang akan berkembang dalam 2–3 tahun ke depan.",
          "Dengan Laravel Anda tidak bergantung pada plugin pihak ketiga — setiap fitur dibangun sesuai kebutuhan, dengan kode yang bisa diuji dan dirawat.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Laravel bukan 'lebih baik' secara mutlak — tapi untuk sistem custom yang akan dipakai bertahun-tahun, ini investasi yang tepat.",
        ],
      },
    ],
  },
  {
    slug: "deploy-laravel-vps-bun-nginx",
    title: "Deploy Aplikasi Laravel di VPS dengan Bun dan Nginx",
    excerpt: "Langkah praktis mendeploy aplikasi Laravel ke VPS — setup Nginx sebagai reverse proxy dan systemd untuk auto-restart.",
    category: "Tutorial",
    date: "2026-07-05",
    readTime: 8,
    tags: ["Laravel", "DevOps", "Nginx"],
    content: [
      {
        heading: "Persiapan",
        paragraphs: [
          "Install Bun di server, clone repository aplikasi, dan pastikan domain mengarah ke IP VPS. Buat user deploy terpisah agar akses lebih aman.",
        ],
      },
      {
        heading: "Build & service systemd",
        paragraphs: [
          "Install dependency dengan bun install --frozen-lockfile, lalu bun run build untuk memproduksi asset produksi.",
          "Buat unit systemd yang menjalankan bun run start dengan Environment=PORT=3000, WorkingDirectory mengarah ke folder aplikasi, dan Restart=always supaya aplikasi otomatis bangun saat crash maupun boot.",
        ],
      },
      {
        heading: "Nginx sebagai reverse proxy",
        paragraphs: [
          "Konfigurasi server block yang meneruskan semua request ke 127.0.0.1:3000. Aktifkan gzip, dan jangan biarkan Nginx meng-cache halaman HTML — asset ber-hash di /assets justru boleh di-cache lama karena immutable.",
        ],
      },
      {
        heading: "Verifikasi",
        paragraphs: [
          "Cek status service dengan systemctl status, uji header respons dengan curl, dan pastikan hanya satu proses yang mendengarkan port 3000. Setelah itu, update aplikasi cukup dengan script deploy yang menjalankan pull, install, build, lalu restart service.",
        ],
      },
    ],
  },
  {
    slug: "optimasi-performa-laravel",
    title: "Optimasi Performa Laravel: Query, Cache, dan Queue",
    excerpt: "Teknik optimasi yang paling berdampak: eliminasi N+1, indexing, cache, dan memindahkan pekerjaan berat ke queue.",
    category: "Tips",
    date: "2026-06-18",
    readTime: 7,
    tags: ["Laravel", "Performa", "Database"],
    content: [
      {
        heading: "Eliminasi query N+1",
        paragraphs: [
          "Query N+1 terjadi saat relasi di-load per record. Gunakan eager loading dengan with() untuk mengambil relasi sekaligus, dan has()/whereHas() untuk memfilter tanpa menarik data berlebihan.",
        ],
      },
      {
        heading: "Index & desain query",
        paragraphs: [
          "Buat index yang tepat untuk kolom yang sering difilter dan di-join. Hindari fungsi pada kolom di klausa WHERE karena membuat index tidak terpakai, dan biasakan membaca hasil EXPLAIN untuk memeriksa rencana query.",
        ],
      },
      {
        heading: "Cache & queue",
        paragraphs: [
          "Simpan data yang jarang berubah (konfigurasi, master data, hasil aggregasi) ke Redis cache. Pindahkan pekerjaan berat — email, notifikasi, ekspor, proses batch — ke queue agar request pengguna tidak menunggu.",
        ],
      },
    ],
  },
  {
    slug: "apa-itu-restful-api",
    title: "Apa itu RESTful API dan Kapan Bisnis Membutuhkannya",
    excerpt: "Penjelasan sederhana tentang API, REST, dan tanda-tanda bahwa bisnis Anda sudah saatnya punya API.",
    category: "Konsep",
    date: "2026-06-01",
    readTime: 5,
    tags: ["API", "Konsep"],
    content: [
      {
        heading: "API itu apa?",
        paragraphs: [
          "API (Application Programming Interface) adalah perantara yang memungkinkan satu sistem berbicara dengan sistem lain — seperti pelayan yang menghubungkan tamu dengan dapur restoran.",
        ],
      },
      {
        heading: "Kapan bisnis membutuhkan API",
        paragraphs: [
          "Anda membutuhkan API ketika ada aplikasi mobile yang perlu backend, ketika ingin terhubung dengan payment gateway atau WhatsApp gateway, atau ketika ingin membuka data untuk pihak ketiga.",
        ],
      },
      {
        heading: "Contoh nyata",
        paragraphs: [
          "Webhook Midtrans mengirim notifikasi status pembayaran ke server Anda; WhatsApp gateway memungkinkan sistem mengirim notifikasi otomatis. Dengan pola adapter, integrasi semacam ini bisa diganti tanpa mengubah logika inti aplikasi.",
        ],
      },
    ],
  },
];
