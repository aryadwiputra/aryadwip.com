export const SITE = {
  name: "Arya Dwi Putra",
  url: "https://aryadwip.com",
  title: "Backend Engineer & Tech Lead",
  tagline: "Backend engineer. Arsitek sistem. Tech lead. 6+ tahun di backend Laravel — API architecture, database design, infrastructure.",
  bio: "Tech Lead dan Senior Backend Engineer dengan pengalaman 6+ tahun di ekosistem Laravel (versi 5 sampai 13). Spesialisasi di arsitektur sistem, backend, database design, API integration, dan infrastructure planning.",
  email: "aryaadwptr@gmail.com",
  phone: "+6285173202701", // format E.164 untuk JSON-LD/schema
  phoneDisplay: "0851-7320-2701", // format lokal untuk tampilan UI
  wa: "6285173202701",
  location: "Bogor, Indonesia",
  github: "https://github.com/aryadwiputra/",
  linkedin: "https://www.linkedin.com/in/aryadwiputra/",
};

export const NAV_ITEMS = [
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
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

export const PROJECTS = [
  {
    title: "Plannify",
    tag: "Task Collaboration Platform",
    summary: "Aplikasi manajemen tugas kolaboratif berbasis workspace untuk mengatur board, assignment, checklist, dan lampiran.",
    stack: "Laravel 11, Inertia.js, React, MySQL, Tailwind CSS, Radix UI",
    repo: "https://github.com/aryadwiputra/Plannify",
  },
  {
    title: "HATTI",
    tag: "Website Organisasi & Operasional",
    summary: "Platform profil organisasi, CMS konten, manajemen anggota, generator KTA PDF, dan pendaftaran event.",
    stack: "Laravel 10, MySQL, AdminLTE, Alpine.js, DomPDF",
  },
  {
    title: "Asetku",
    tag: "Asset Operations Platform",
    summary: "Platform manajemen aset multi-organisasi dengan audit trail, QR publik, maintenance, dan pelaporan.",
    stack: "Laravel 13, Inertia.js v3, React 19, TypeScript, Redis",
  },
  {
    title: "Tickety",
    tag: "Platform Event Ticketing",
    summary: "Aplikasi web event ticketing untuk menampilkan event, mengelola tiket, checkout manual, e-ticket PDF ber-QR code, dan validasi check-in.",
    stack: "Laravel 10, PHP 8.1, MySQL, Livewire, Blade, DomPDF, Simple QR Code",
  },
  {
    title: "Taruna Insani Boarding School",
    tag: "Website Sekolah & PPDB",
    summary: "Platform sekolah dengan website profil, CMS admin, dan portal PPDB — alur pendaftaran, pembayaran, verifikasi dokumen, penjadwalan tes.",
    stack: "Laravel 12, PHP 8.2, MySQL, Tailwind CSS 4, Alpine.js, DomPDF, Spatie Permission",
  },
  {
    title: "Point of Sales & Operasional Retail",
    tag: "Sistem Operasional",
    summary: "Aplikasi POS dengan transaksi kasir, inventory, piutang, hutang, retur, shift kasir, CRM dasar, dan laporan operasional.",
    stack: "Laravel 12, Inertia.js 2, React 18, MySQL, Tailwind CSS, Midtrans, Xendit",
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
