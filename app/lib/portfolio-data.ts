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
  product: {
    name: "Marikoding",
    url: "https://marikoding.com",
    tagline: "Platform belajar coding Indonesia dengan e-book terstruktur",
    description:
      "Produk sendiri: platform belajar coding dengan 4 e-book PHP — dari fondasi, web development, modern PHP, sampai project-based. Dibangun dengan Bun/Hono + React Router SSR.",
  },
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
    slug: "marikoding",
    title: "Marikoding.com",
    tag: "Platform Belajar Coding",
    summary:
      "Produk sendiri: platform belajar coding Indonesia dengan kurikulum e-book PHP terstruktur — PHP Fondasi, PHP Web Development, Modern PHP, dan Project-Based PHP.",
    stack: "Bun, Hono, React Router SSR, MySQL, Nginx",
    role: "Founder & Developer",
    start_date: "2026-06-01",
    end_date: null,
    case_study_label: "Produk Sendiri",
    website: "https://marikoding.com",
    repo: "https://github.com/aryadwiputra/marikoding.com",
    challenge:
      "Banyak developer pemula di Indonesia bingung memilih jalur belajar PHP yang terstruktur. Materi tersebar di berbagai sumber, tidak ada kurikulum yang runtut dari nol sampai project nyata. Tantangan: membangun platform e-book interaktif dengan quiz, progress tracking, dan content CMS berbasis file — sambil menjaga performa di VPS kecil (2GB).",
    solution:
      "Arsitektur Bun/Hono untuk API + React Router SSR untuk frontend. Konten e-book disimpan sebagai file markdown (file-based CMS) dengan script sync ke database — mudah ditulis tanpa admin panel berat. 4 e-book disusun sebagai roadmap: fondasi → web → modern PHP → project-based.",
    features: [
      "4 e-book PHP sebagai roadmap belajar terstruktur",
      "Konten markdown dengan quiz interaktif per bab",
      "File-based CMS: tulis markdown, sync otomatis ke DB",
      "SSR React Router untuk SEO & performa",
      "CI/CD GitHub Actions — push main = auto-deploy",
      "Backend Bun/Hono yang hemat memory di VPS 2GB",
    ],
    outcome:
      "Platform belajar coding dengan kurikulum runtut yang bisa diakses siapa saja. Menunjukkan kemampuan end-to-end: product thinking, content engineering, arsitektur, deployment, dan CI/CD.",
    gallery: [
      { src: "/images/projects/marikoding/1.png", alt: "Homepage Marikoding", label: "Landing page & daftar e-book" },
      { src: "/images/projects/marikoding/2.png", alt: "Detail e-book PHP Fondasi", label: "Struktur kurikulum e-book" },
      { src: "/images/projects/marikoding/3.png", alt: "Halaman materi & quiz", label: "Materi bab + quiz interaktif" },
    ],
  },
  {
    slug: "plannify",
    title: "Plannify",
    tag: "Task Collaboration Platform",
    summary: "Aplikasi manajemen tugas kolaboratif berbasis workspace — board, assignment, checklist, dan lampiran dalam satu stack Laravel + Inertia + React.",
    stack: "Laravel 11, Inertia.js, React, MySQL, Tailwind CSS, Radix UI",
    role: "Laravel / Full-Stack Developer",
    start_date: "2025-05-26",
    end_date: "2025-06-12",
    case_study_label: "Proyek Mandiri",
    repo: "https://github.com/aryadwiputra/Plannify",
    challenge:
      "Tim kecil sering kehilangan visibilitas pekerjaan karena tugas tersebar di spreadsheet dan chat — tidak ada satu sumber kebenaran. Tantangan teknis: relasi data membership polymorphik (workspace + card), board task dengan reorder/filter/search, authorization berlapis (owner/member/admin), dan skalabilitas fitur tanpa bikin codebase berantakan.",
    solution:
      "Laravel 11 + Inertia.js + React sebagai monolith. Workspace jadi root konteks data — card, attachment, comment nempel ke workspace. Membership pakai polymorphic model biar reusable. Policy + Gate untuk authorization operasional; Spatie Permission untuk admin. Card status pakai enum: Todo → In Progress → On Review → Done. Detail card jadi pusat eksekusi: checklist, assignee, attachment, comment dari satu tempat.",
    features: [
      "Board & list tugas dengan drag-and-drop",
      "Assignment & deadline per anggota tim",
      "Checklist bertingkat + lampiran file",
      "Multi-workspace dengan visibility public/private",
      "Dashboard produktivitas dengan Chart.js",
      "Authorization berlapis: owner, member, admin",
    ],
    outcome:
      "Tim kecil bisa mengelola pekerjaan kolaboratif dari satu tempat — bukan list terpisah. Progres card terlihat dari workflow status. Codebase siap dikembangkan karena arsitektur domain sudah dipisah pakai enum, policy, dan request.",
    gallery: [
      { src: "/images/projects/plannify/1.png", alt: "Dashboard Plannify", label: "Dashboard & productivity chart" },
      { src: "/images/projects/plannify/2.png", alt: "Board workspace", label: "Board workspace per status" },
      { src: "/images/projects/plannify/3.png", alt: "Detail card", label: "Detail card: checklist, assignee, lampiran" },
    ],
  },
  {
    slug: "hatti",
    title: "HATTI",
    tag: "Website Organisasi & Operasional",
    summary: "Platform Laravel untuk profil organisasi, CMS konten, manajemen anggota, generator KTA PDF, dan pendaftaran event dengan pricing bertingkat — semua dalam satu aplikasi.",
    stack: "Laravel 10, MySQL, Tailwind CSS, AdminLTE, Alpine.js, DomPDF",
    role: "Laravel / Full-Stack Developer",
    start_date: "2025-06-20",
    end_date: "2026-05-22",
    case_study_label: "Proyek Klien",
    client_name: "HATTI",
    challenge:
      "Organisasi butuh website publik sekaligus panel admin untuk mengelola konten, keanggotaan, dan event. Sebelumnya: manual, chat, spreadsheet — inkonsistensi tinggi. Tantangan teknis: banyak domain fitur berbeda dalam satu codebase (keanggotaan, konten, event), generator KTA PDF dengan preview dan download aman, event registration dengan pricing bertingkat + add-on + invoice, dan migrasi konten legacy.",
    solution:
      "Laravel 10 monolith dengan route terpisah: publik, auth, admin. Service layer untuk logika bisnis kompleks — controller tetap tipis. Spatie Permission untuk RBAC admin. Service: Member, Post, EventPricing, KTA Signature, LegacyImport. Event pricing: period, rate, add-on, invoice, upload bukti bayar. KTA: PDF generator dengan preview + signed URL download.",
    features: [
      "Website publik: landing, artikel, profil organisasi, agenda event",
      "CMS konten (post, kategori, slider, visi-misi, struktur organisasi)",
      "Manajemen anggota dengan data terstruktur",
      "Generator KTA PDF dengan preview & download aman",
      "Event registration: custom field, pricing bertingkat, add-on",
      "Invoice & upload bukti bayar",
      "RBAC admin dengan Spatie Permission",
      "Migrasi konten legacy ke sistem baru",
    ],
    outcome:
      "Admin mengelola website dan operasional dari satu dashboard. Publikasi konten tanpa kode. KTA bisa preview dan download. Event registration dari pencarian sampai konfirmasi pembayaran.",
    gallery: [
      { src: "/images/projects/hatti/1.png", alt: "Homepage HATTI", label: "Landing page publik" },
      { src: "/images/projects/hatti/2.png", alt: "Dashboard admin anggota", label: "Manajemen anggota & KTA" },
      { src: "/images/projects/hatti/3.png", alt: "Modul event", label: "Event registration & pricing" },
      { src: "/images/projects/hatti/4.png", alt: "CMS konten", label: "Pengelolaan konten website" },
    ],
  },
  {
    slug: "asetku",
    title: "Asetku",
    tag: "Asset Operations Platform",
    summary: "Platform manajemen aset multi-organisasi dengan audit trail immutable, QR publik, maintenance scheduling, dan kontrol akses berbasis peran.",
    stack: "Laravel 13, Inertia.js v3, React 19, TypeScript, MySQL, Redis",
    role: "Laravel / Full-Stack Developer",
    start_date: "2026-04-13",
    end_date: "2026-05-20",
    case_study_label: "Proyek Mandiri",
    challenge:
      "Multi-organisasi sulit melacak aset karena data tersebar dan tidak ada jejak audit yang jelas. Tantangan teknis: isolasi data per organisasi dalam satu database (organization_id + global scope), lifecycle aset harus immutable, authorization kompleks (role + permission + organisasi aktif + impersonation + delegation), banyak modul (organizations, assets, maintenance, audits, reports, API), dan public QR page tanpa login.",
    solution:
      "Laravel 13 + Inertia.js v3 + React + TypeScript sebagai monolith modern. Multi-organization via organization_id + global scope. Lifecycle: asset_histories sebagai audit trail immutable — tidak bisa dihapus/diedit. Auth: Fortify (email verification, 2FA TOTP) + Socialite (Google, Microsoft 365 SSO). Workspace switcher tanpa logout. Public QR page terpisah, akses via secret token. Wayfinder untuk type-safe routing. Queue via Horizon + Redis.",
    features: [
      "Multi-organization workspace dengan organization switcher",
      "Registrasi aset: metadata, custom field, dokumen, foto, lokasi",
      "Asset lifecycle immutable: movement, loan, return, maintenance, audit, disposal",
      "Audit trail lengkap — tidak bisa dimanipulasi",
      "Public QR page untuk cek aset tanpa login",
      "RBAC: role, permission, impersonation, delegation",
      "2FA TOTP + SSO Google & Microsoft 365",
      "Dashboard KPI, reporting inventory & maintenance cost",
      "API v1 via Sanctum, dokumentasi OpenAPI via Scramble",
    ],
    outcome:
      "Pencatatan aset terstruktur dari onboarding sampai aktivitas harian. Histori immutable — auditor puas. Tim operasional akses data dari dashboard, filter, atau scan QR di lapangan.",
    gallery: [
      { src: "/images/projects/asetku/1.png", alt: "Dashboard Asetku", label: "Dashboard KPI aset" },
      { src: "/images/projects/asetku/2.png", alt: "Manajemen aset", label: "Daftar aset dengan filter" },
      { src: "/images/projects/asetku/3.png", alt: "Audit trail", label: "Lifecycle & audit trail" },
      { src: "/images/projects/asetku/4.png", alt: "QR publik", label: "Halaman publik QR aset" },
    ],
  },
  {
    slug: "tickety",
    title: "Tickety",
    tag: "Platform Event Ticketing",
    summary: "Aplikasi event ticketing berbasis Laravel untuk publik lihat event, beli tiket, admin verifikasi pembayaran, terbit e-ticket PDF ber-QR code, dan validasi check-in.",
    stack: "Laravel 10, PHP 8.1, MySQL, Jetstream, Livewire, Blade, DomPDF, Simple QR Code",
    role: "Full-Stack Laravel Developer",
    start_date: "2023-06-19",
    end_date: "2023-07-31",
    case_study_label: "Proyek Mandiri",
    challenge:
      "Penyelenggara event skala kecil-menengah butuh sistem ticketing tanpa komisi platform besar. Tantangan teknis: event harus support multiple ticket tiers, kategori, jadwal, dan lokasi; alur checkout harus pendek untuk publik; tiap tiket harus unit unik dengan QR code untuk verifikasi; admin butuh panel approval pembayaran; e-ticket beda dari invoice.",
    solution:
      "Laravel monolith dengan dua area: publik (discovery + checkout) dan admin (operasional). Katalog event publik dengan filter kategori. Checkout session-based cart. Admin: CRUD event/ticket, approval transaksi, generate PDF + QR. QR code per tiket, discan pas check-in via Vue 2 + vue-qrcode-reader. Email notification kirim e-ticket setelah approval. Alur: checkout → transaction dibuat → admin approve → generate PDF + QR → kirim email → scan pas event.",
    features: [
      "Katalog event publik dengan filter kategori & upcoming",
      "Checkout multi-tier ticket dengan keranjang sesi",
      "E-ticket PDF per tiket unit dengan QR code unik",
      "Admin panel: CRUD event, approval pembayaran",
      "QR code scanner untuk validasi check-in",
      "Email notification pengiriman e-ticket",
      "Soft delete di tabel utama",
    ],
    outcome:
      "Publik beli tiket tanpa kontak manual panitia. Admin manage event, tiket, transaksi dari satu panel. Penjualan dan check-in paperless dan terverifikasi.",
    gallery: [
      { src: "/images/projects/tickety/1.png", alt: "Halaman event", label: "Katalog event publik" },
      { src: "/images/projects/tickety/2.png", alt: "Checkout", label: "Alur checkout tiket" },
      { src: "/images/projects/tickety/3.png", alt: "Admin event", label: "Dashboard admin event" },
      { src: "/images/projects/tickety/4.png", alt: "Scan QR", label: "Validasi check-in QR" },
      { src: "/images/projects/tickety/5.png", alt: "E-ticket PDF", label: "Contoh e-ticket PDF" },
    ],
  },
  {
    slug: "taruna-insani-boarding-school",
    title: "Taruna Insani Boarding School",
    tag: "Website Sekolah & PPDB",
    summary: "Platform sekolah Laravel yang menggabungkan website profil, CMS admin, dan portal PPDB orang tua — dari pendaftaran sampai penjadwalan tes, dalam satu aplikasi.",
    stack: "Laravel 12, PHP 8.2, MySQL, Tailwind CSS 4, Alpine.js, DomPDF, Laravel Excel, Spatie Permission",
    role: "Laravel / Full-Stack Developer",
    start_date: "2026-01-12",
    end_date: "2026-05-07",
    case_study_label: "Proyek Klien",
    client_name: "Taruna Insani Boarding School",
    challenge:
      "PPDB sekolah masih manual: form kertas, pembayaran terpisah, verifikasi dokumen berulang. Tantangan teknis: landing page harus dinamis dari CMS (hero, program, berita, testimonial); alur PPDB punya banyak state (draft → submit → bayar → verifikasi → jadwal tes → hasil → daftar ulang); parent portal butuh auth terpisah dari admin (guard berbeda); data alamat Indonesia butuh hirarki provinsi–kabupaten–kecamatan–kelurahan; perubahan status harus trigger email notification.",
    solution:
      "Laravel monolith dengan tiga area route berbeda (publik, admin, parent) dan guard terpisah. Website publik: landing page dinamis via CMS. Admin: kelola konten + kontrol PPDB. Parent portal: self-service pendaftaran + tracking status. Modul PPDB paling kompleks — entity Application, Applicant, Address, Guardian, Sibling, Payment, Document, RegistrationWave, AcademicYear, TestSchedule, TestResult. Laravolt Indonesia untuk data wilayah hirarkis. EmailService untuk notifikasi tiap state. DomPDF + Laravel Excel untuk output dokumen.",
    features: [
      "Website sekolah dinamis via CMS (hero, program, berita, testimonial)",
      "Dashboard admin CMS konten",
      "Formulir pendaftaran online dengan multi-step",
      "Upload & validasi dokumen",
      "Verifikasi pembayaran",
      "Penjadwalan tes seleksi",
      "Tracking status pendaftaran oleh wali murid",
      "Export Excel & PDF bukti pendaftaran",
      "Email notification tiap perubahan status",
      "Data alamat Indonesia hirarkis (Laravolt Indonesia)",
    ],
    outcome:
      "Wali murid selesaikan seluruh proses PPDB dari satu portal — dari daftar hingga jadwal tes. Admin update konten website tanpa developer.",
    gallery: [
      { src: "/images/projects/taruna-insani/1.png", alt: "Landing page sekolah", label: "Website profil sekolah" },
      { src: "/images/projects/taruna-insani/2.png", alt: "Dashboard admin", label: "Dashboard admin CMS & PPDB" },
      { src: "/images/projects/taruna-insani/3.png", alt: "Portal wali murid", label: "Portal pendaftaran & tracking" },
      { src: "/images/projects/taruna-insani/4.png", alt: "Verifikasi PPDB", label: "Verifikasi dokumen & status" },
    ],
  },
  {
    slug: "pos-retail-operasional",
    title: "Point of Sales & Operasional Retail",
    tag: "Sistem Operasional",
    summary: "Aplikasi POS + backoffice retail terpadu: transaksi kasir, inventory, piutang, hutang, retur, shift kasir, CRM, laporan operasional — satu sistem untuk semuanya.",
    stack: "Laravel 12, Inertia.js 2, React 18, MySQL, Tailwind CSS, Spatie Laravel Permission",
    role: "Laravel / Full-Stack Developer",
    start_date: "2024-06-01",
    end_date: null,
    case_study_label: "Proyek Mandiri",
    challenge:
      "Toko retail membutuhkan sistem kasir yang terintegrasi dengan inventory dan pembukuan piutang/hutang —tanpa spreadsheet terpisah. Tantangan teknis: satu transaksi kasir harus affect stock, profit, document printing, payment status, dan piutang (pay_later) secara simultan; middleware cashier shift; payment gateway Midtrans & Xendit via webhook dengan adapter pattern; RBAC granular; audit log untuk semua perubahan.",
    solution:
      "Aplikasi modular di satu codebase Laravel. Modul: POS (kasir), inventory (stock opname, mutasi), finance (receivable, payable, return), cashier shift, audit log. Middleware EnsureActiveCashierShift. PaymentGatewayManager dengan adapter pattern untuk Midtrans + Xendit. Satu transaksi -> update stock, profit, printable docs, payment status. Spatie Laravel Permission untuk RBAC. PDF: invoice, receipt, shipping, receivable, payable.",
    features: [
      "Transaksi kasir cepat real-time",
      "Manajemen inventory: stock opname, mutasi, tracking",
      "Piutang & hutang dagang",
      "Retur barang",
      "Shift kasir dengan EnsureActiveCashierShift",
      "CRM dasar untuk pelanggan",
      "Integrasi payment gateway Midtrans & Xendit via webhook",
      "Laporan operasional harian",
      "Dokumen PDF: invoice, receipt, shipping, receivable, payable",
      "Audit log perubahan data",
    ],
    outcome:
      "Operasional toko — kasir, stok, dan laporan — berjalan dari satu sistem terpadu. Tidak ada lagi pembukuan manual. Stok akurat real-time.",
    gallery: [
      { src: "/images/projects/pos/1.png", alt: "Kasir POS", label: "Transaksi kasir" },
      { src: "/images/projects/pos/2.png", alt: "Inventory", label: "Manajemen inventory & stok" },
    ],
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
