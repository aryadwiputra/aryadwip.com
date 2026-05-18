export type NavItem = {
  href: string;
  label: string;
};

export type PortfolioItem = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  accent: string;
  challenge: string;
  solution: string;
  result: string[];
};

export type ArticleItem = {
  slug: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  accent: string;
  content: string[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Artikel" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export const stackItems = [
  "Laravel",
  "PHP 8.3",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "REST API",
  "Tailwind CSS",
  "React",
  "Vue",
  "Docker",
  "Nginx",
  "Node.js",
];

export const workSteps = [
  {
    number: "01",
    title: "Discovery & Requirement Mapping",
    description:
      "Memetakan kebutuhan bisnis, peran pengguna, risiko integrasi, dan ruang lingkup delivery agar fondasi teknis relevan sejak awal.",
  },
  {
    number: "02",
    title: "Database & Architecture Planning",
    description:
      "Menyusun ERD, indeks kunci, boundary domain, dan kontrak API supaya sistem tetap efisien ketika skala transaksi bertambah.",
  },
  {
    number: "03",
    title: "Clean Implementation",
    description:
      "Membangun modul yang maintainable dengan service layer, form request, observer, dan dashboard yang fokus pada use case nyata.",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description:
      "Menekan bottleneck lewat profiling query, caching strategis, dan automated test untuk alur bisnis yang paling kritikal.",
  },
  {
    number: "05",
    title: "Deployment & Maintenance",
    description:
      "Menutup siklus dengan pipeline rilis yang stabil, observability, dan langkah maintenance yang mudah dioperasikan tim internal.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "asset-management-system",
    category: "Enterprise App",
    title: "Asset Management System",
    summary:
      "Sistem pelacakan inventaris internal dengan depresiasi otomatis, approval multi-gudang, dan dashboard operasional harian.",
    tags: ["Laravel 11", "InertiaJS", "PostgreSQL"],
    accent: "var(--accent-purple)",
    challenge:
      "Tim operasional membutuhkan satu sumber data aset yang akurat tanpa spreadsheet terpisah dan approval yang rawan human error.",
    solution:
      "Mendesain domain aset, histori mutasi, approval flow berlapis, dan API internal untuk sinkronisasi lintas unit bisnis.",
    result: [
      "Alur pengadaan dan mutasi aset lebih mudah diaudit.",
      "Perhitungan depresiasi berjalan otomatis dan konsisten.",
      "Dashboard admin membantu monitoring stok, status, dan ownership aset.",
    ],
  },
  {
    slug: "realtime-inventory-dashboard",
    category: "Dashboard",
    title: "Realtime Inventory Dashboard",
    summary:
      "Visualisasi stok pergudangan real-time dengan scanner barcode, notifikasi push, dan panel monitoring yang cepat dibaca.",
    tags: ["Laravel Octane", "Vue", "Redis"],
    accent: "var(--accent-blue)",
    challenge:
      "Informasi stok lambat diperbarui dan operator kesulitan mengambil keputusan ketika terjadi selisih persediaan.",
    solution:
      "Menghubungkan event pergerakan barang ke pipeline real-time berbasis Redis dan dashboard status yang responsif.",
    result: [
      "Tim gudang melihat perubahan stok hampir seketika.",
      "Supervisor lebih cepat menindak selisih dan bottleneck operasional.",
      "Riwayat pergerakan barang tersimpan rapi untuk analisis lanjutan.",
    ],
  },
  {
    slug: "saas-hris-platform",
    category: "SaaS App",
    title: "SaaS HRIS Platform",
    summary:
      "Platform HRIS multi-tenant untuk absensi, payroll, geofencing, dan penilaian kinerja dengan alur admin yang jelas.",
    tags: ["Laravel Multi-tenant", "Alpine.js", "MySQL"],
    accent: "var(--accent-pink)",
    challenge:
      "Kebutuhan tenant berbeda-beda, tetapi tim produk tetap membutuhkan pengelolaan konfigurasi dan konten dari satu dashboard pusat.",
    solution:
      "Membangun arsitektur tenant-aware, modul payroll, serta panel admin untuk mengelola konfigurasi, role, dan publikasi konten.",
    result: [
      "Tenant memiliki workflow HR yang konsisten namun fleksibel.",
      "Admin pusat dapat mengontrol konfigurasi tanpa deployment ulang.",
      "Fitur payroll dan absensi lebih mudah dipelihara seiring pertumbuhan produk.",
    ],
  },
];

export const featuredArticles: ArticleItem[] = [
  {
    slug: "laravel-performance-optimization",
    category: "Optimization",
    date: "May 10, 2026",
    title: "Deep Dive: Laravel Performance Optimization on High Traffic API Platforms",
    summary:
      "Panduan mengonfigurasi Laravel Octane, database pooling, dan strategi chunking data untuk menekan beban memori server.",
    accent: "var(--accent-purple)",
    content: [
      "Optimasi performa tidak berhenti pada menambah cache. Sistem yang sehat dimulai dari query yang disiplin, boundary domain yang rapi, dan observability yang cukup untuk membaca perilaku aplikasi saat trafik naik.",
      "Pada API dengan beban tinggi, kombinasi queue untuk pekerjaan berat, eager loading yang tepat, dan validasi payload yang hemat query sering memberi dampak lebih besar dibanding optimasi prematur di level infrastruktur.",
      "Ketika metrik utama sudah jelas, barulah Octane, Redis, dan strategi concurrency menjadi alat yang relevan untuk memperpanjang napas sistem tanpa mengorbankan maintainability.",
    ],
  },
  {
    slug: "database-schemas-for-scaling",
    category: "Database Architecture",
    date: "Apr 22, 2026",
    title: "Designing Maintainable Database Schemas For E-commerce Scaling",
    summary:
      "Membahas skema relasional, composite index, dan titik kompromi antara normalisasi dengan kebutuhan query yang intensif.",
    accent: "var(--accent-orange)",
    content: [
      "Skema database yang baik harus menyeimbangkan kejelasan domain dengan pola baca-tulis yang paling sering terjadi di produksi.",
      "Composite index, nama constraint yang konsisten, dan keputusan kapan perlu snapshot data transaksi membantu tim menumbuhkan sistem tanpa refactor yang menyakitkan.",
    ],
  },
  {
    slug: "secure-admin-dashboard-rbac",
    category: "Security",
    date: "Mar 15, 2026",
    title: "Building Secure Admin Dashboards: RBAC Best Practices in Core Laravel",
    summary:
      "Menerapkan role-based access control menggunakan Gates dan Policies, plus mitigasi celah IDOR pada dashboard admin.",
    accent: "var(--accent-green)",
    content: [
      "Dashboard admin yang baik bukan cuma nyaman dipakai, tetapi juga ketat dalam memvalidasi siapa yang boleh mengakses data tertentu.",
      "RBAC yang jelas, audit trail, dan pembatasan akses berbasis konteks membantu menjaga dashboard tetap aman walau fitur terus bertambah.",
    ],
  },
];
