import type { PortfolioFilter, PortfolioItem } from "@/features/portfolio/types";

const sharedDetail = {
  infoTitle: "Arsitektur Informasi",
  challengeTitle: "Problem yang Perlu Dipecahkan",
  solutionTitle: "Strategi Solusi yang Diterapkan",
  executionTitle: "Tahapan Eksekusi Teknis",
  impactTitle: "Dampak & Metrik Pasca Rilis",
  documentationTitle: "Dokumentasi Skema Arsitektur",
  sidebarTitle: "Orientasi Struktur Data",
  documentationPlaceholders: [
    "ERD Database Schema Blueprint [Placeholder]",
    "Caching & Queue Flow Diagram [Placeholder]",
  ] as [string, string],
  sidebarDescription:
    "Halaman studi kasus ini sengaja distrukturkan secara modular agar skema database relasional di backend dapat dipetakan dengan bersih:",
  executionSteps: [
    {
      eyebrow: "01 / Database Re-Modeling",
      eyebrowClassName: "text-accent-purple",
      title: "Normalisasi & Indeks",
      description:
        "Restrukturisasi schema ERD, pembuatan composite index pada kolom filter pencarian kueri, dan penataan foreign key cascade.",
    },
    {
      eyebrow: "02 / Async Job Pipeline",
      eyebrowClassName: "text-accent-blue",
      title: "Otomasi Queue",
      description:
        "Memindahkan engine agregasi laporan bulanan dan kalkulasi profit margin yang berat ke latar belakang via Redis Queue Jobs.",
    },
    {
      eyebrow: "03 / State Rigidity & UAT",
      eyebrowClassName: "text-accent-green",
      title: "Jejak Audit Berbasis State",
      description:
        "Menerapkan State Pattern untuk mengunci log status dokumen approval, menjamin rekonsiliasi histori tidak bisa dimanipulasi.",
    },
  ],
  impactItems: [
    {
      value: "-40%",
      label: "Query Latency",
      description:
        "Eager loading mengeliminasi isu N+1 kueri pada pemuatan log inventory.",
    },
    {
      value: "100%",
      label: "Data Accuracy",
      description:
        "Mekanisme Redis lock sukses memangkas angka selisih stok menjadi nol.",
    },
    {
      value: "Real-time",
      label: "Audit Trail",
      description:
        "Setiap perpindahan status tercatat otomatis saat proses approval dan request checkout gudang terjadi dalam milidetik yang sama.",
    },
  ],
  sidebarPoints: [
    {
      bulletClassName: "text-accent-purple",
      title: "Model Entity Relasi:",
      description:
        "Memudahkan integrasi tabel `warehouses`, `stocks`, `purchases`, dan `approval_logs`.",
    },
    {
      bulletClassName: "text-accent-blue",
      title: "Beban Kueri Terukur:",
      description:
        "Setiap metrik dampak di sebelah kiri berkorelasi langsung dengan optimasi query Eloquent scopes di database.",
    },
    {
      bulletClassName: "text-accent-green",
      title: "Mudah Diganti:",
      description:
        "Blade loop Anda nantinya cukup memetakan array data dari controller untuk mengisi setiap pas kartu infografis di atas.",
    },
  ],
};

export const portfolioFilters: PortfolioFilter[] = [
  { key: "all", label: "All Projects" },
  { key: "laravel", label: "Laravel Ecosystem" },
  { key: "fullstack", label: "Fullstack (Inertia/Vue)" },
  { key: "dashboard", label: "Dashboard Internal" },
  { key: "integration", label: "Integration" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "asset-management-system",
    title: "Asset Management System (shelf.nu Model)",
    summary:
      "Sistem kustom pelacakan aset internal, depresiasi nilai otomatis barang penyusutan, alur persetujuan bertingkat (*multi-level approval*), dan manajemen multi-gudang.",
    year: "2026",
    teaserLabel: "Logistics & Asset",
    teaserLabelClassName: "text-accent-purple bg-accent-purple/5",
    hoverAccentClassName: "group-hover:text-accent-purple",
    image: "https://picsum.photos/600/375?random=1",
    imageAlt: "Asset Management System",
    stack: ["Laravel 11", "InertiaJS", "React", "Tailwind"],
    categories: ["laravel", "fullstack", "dashboard"],
    detail: {
      ...sharedDetail,
      caseStudyLabel: "Studi Kasus Enterprise",
      caseStudyLabelClassName: "text-accent-purple bg-accent-purple/5",
      title: "Platform Operasional untuk Distributor Multi Gudang",
      description:
        "Mendesain ulang arsitektur sistem manajemen pergudangan legacy menjadi platform modern berbasis domain terisolasi untuk mengamankan akurasi mutasi stok, otomatisasi purchasing order, dan transparansi approval internal.",
      info: {
        role: "Lead Laravel Engineer",
        duration: "4 Bulan Delivery",
        techStackSummary: "Laravel 11, Octane, MySQL, Redis",
        domainScope: "Multi-warehouse Stock Logic, Advanced RBAC, Auditable Workflow",
      },
      challengeBody: [
        "Sistem lama menangani mutasi stok, purchasing, dan approval internal dalam satu alur yang saling bertabrakan sehingga laporan akhir hari sering menghasilkan selisih data antar gudang.",
        "Selain itu, beban kueri meningkat drastis saat dashboard dipakai banyak operator secara bersamaan, terutama ketika proses sinkronisasi stok dan request checkout gudang terjadi dalam milidetik yang sama.",
      ],
      solutionBody: [
        "Pendekatan yang saya ambil adalah memecah domain menjadi modul yang lebih terisolasi: inventori, purchasing, approval, dan audit trail. Setiap domain diberi batas tanggung jawab yang jelas agar perubahan bisnis tidak merembet ke seluruh sistem.",
        "Pada sisi performa, saya menerapkan caching selektif, queue untuk proses berat, serta penguncian transaksi agar konsistensi stok tetap terjaga pada skenario multi-user dengan trafik operasional tinggi.",
      ],
    },
  },
  {
    slug: "warehouse-inventory-dashboard",
    title: "Warehouse & Realtime Inventory Dashboard",
    summary:
      "Modernisasi sistem legacy menjadi dashboard manajemen inventaris multi-gudang terpusat untuk monitoring stok, manajemen purchasing order, dan tracking manifest barang.",
    year: "2026",
    teaserLabel: "Distributor ERP",
    teaserLabelClassName: "text-accent-blue bg-accent-blue/5",
    hoverAccentClassName: "group-hover:text-accent-blue",
    image: "https://picsum.photos/600/375?random=2",
    imageAlt: "Inventory Dashboard",
    stack: ["Laravel Octane", "MySQL", "Redis Cache"],
    categories: ["laravel", "dashboard"],
    detail: {
      ...sharedDetail,
      caseStudyLabel: "Studi Kasus Dashboard",
      caseStudyLabelClassName: "text-accent-blue bg-accent-blue/5",
      title: "Dashboard Inventaris Realtime untuk Operasional Gudang",
      description:
        "Menyusun ulang alur monitoring stok dan purchasing menjadi dashboard terpusat yang lebih cepat dibaca tim operasional, sekaligus menjaga sinkronisasi data antar gudang tetap konsisten.",
      info: {
        role: "Fullstack Laravel Engineer",
        duration: "3.5 Bulan Delivery",
        techStackSummary: "Laravel Octane, MySQL, Redis Cache",
        domainScope: "Inventory Monitoring, Purchase Flow, Warehouse Reporting",
      },
      challengeBody: [
        "Tim operasional memakai beberapa layar dan laporan berbeda untuk memantau stok, pembelian, dan manifest, sehingga proses validasi sering terlambat.",
        "Data stok juga mudah berbeda antar modul saat pembaruan masuk dari beberapa gudang dalam waktu berdekatan.",
      ],
      solutionBody: [
        "Saya menyatukan tampilan monitoring ke satu dashboard operasional dengan sumber data yang lebih konsisten dan query yang dioptimasi untuk kebutuhan real-time.",
        "Untuk menjaga stabilitas, proses sinkronisasi dan agregasi dibuat lebih terukur agar operator bisa melihat kondisi stok terbaru tanpa menunggu laporan batch manual.",
      ],
    },
  },
  {
    slug: "enterprise-saas-hris-payroll-hub",
    title: "Enterprise SaaS HRIS & Automated Payroll Hub",
    summary:
      "Portal manajemen internal SDM, pencatatan absensi berbasis geofencing, kalkulasi komponen *payroll* otomatis berstandar perpajakan lokal, dan SLA KPI.",
    year: "2025",
    teaserLabel: "SaaS Platform",
    teaserLabelClassName: "text-accent-pink bg-accent-pink/5",
    hoverAccentClassName: "group-hover:text-accent-pink",
    image: "https://picsum.photos/600/375?random=3",
    imageAlt: "HRIS Platform",
    stack: ["Filament v3", "AlpineJS", "PostgreSQL"],
    categories: ["fullstack", "dashboard"],
    detail: {
      ...sharedDetail,
      caseStudyLabel: "Studi Kasus SaaS",
      caseStudyLabelClassName: "text-accent-pink bg-accent-pink/5",
      title: "Platform HRIS dan Payroll Otomatis untuk Operasional SDM",
      description:
        "Merancang platform internal SDM yang menggabungkan absensi, payroll, KPI, dan approval ke dalam satu sistem yang lebih mudah dipelihara dan diaudit.",
      info: {
        role: "Laravel Product Engineer",
        duration: "5 Bulan Delivery",
        techStackSummary: "Filament v3, AlpineJS, PostgreSQL",
        domainScope: "Attendance, Payroll, KPI Tracking, Approval Workflow",
      },
      challengeBody: [
        "Proses HR dan payroll sebelumnya tersebar di banyak spreadsheet dan tools terpisah, membuat validasi data karyawan rentan keliru.",
        "Tim HR juga kesulitan menelusuri histori perubahan saat approval cuti, absensi, dan komponen gaji terjadi bersamaan.",
      ],
      solutionBody: [
        "Sistem dibangun sebagai portal terpadu agar tim HR bisa menangani alur absensi, payroll, dan KPI dari satu titik kontrol yang sama.",
        "Fokus utama implementasi ada pada konsistensi data, kemudahan audit, dan aturan bisnis yang tetap fleksibel ketika perusahaan berkembang.",
      ],
    },
  },
  {
    slug: "finance-reconciliation-auditing-hub",
    title: "Finance Reconciliation & Auditing Hub",
    summary:
      "Engine background processor untuk sinkronisasi, validasi kepatuhan aturan bisnis keuangan, enkripsi data transaksi tinggi, dan pencatatan audit log mutasi saldo masif.",
    year: "2025",
    teaserLabel: "Fintech Core",
    teaserLabelClassName: "text-accent-orange bg-accent-orange/5",
    hoverAccentClassName: "group-hover:text-accent-orange",
    image: "https://picsum.photos/600/375?random=4",
    imageAlt: "Finance Reporting App",
    stack: ["PHP 8.3 Enforce", "Sanctum", "Queue Scheduler"],
    categories: ["laravel", "integration"],
    detail: {
      ...sharedDetail,
      caseStudyLabel: "Studi Kasus Fintech",
      caseStudyLabelClassName: "text-accent-orange bg-accent-orange/5",
      title: "Hub Rekonsiliasi dan Audit untuk Operasional Keuangan",
      description:
        "Menyusun pipeline backend untuk validasi transaksi, rekonsiliasi data, dan audit log keuangan agar tim internal bisa bergerak lebih aman dan terukur.",
      info: {
        role: "Backend Laravel Engineer",
        duration: "4 Bulan Delivery",
        techStackSummary: "PHP 8.3, Sanctum, Queue Scheduler",
        domainScope: "Transaction Sync, Compliance Rules, Audit Logging",
      },
      challengeBody: [
        "Sinkronisasi transaksi dan mutasi saldo membutuhkan validasi berlapis agar tidak ada data yang lolos tanpa jejak audit.",
        "Di saat yang sama, sistem harus tetap responsif walau banyak proses verifikasi berjalan di belakang layar.",
      ],
      solutionBody: [
        "Saya memisahkan proses kritis ke pipeline background processor supaya validasi data tetap aman tanpa membebani request utama.",
        "Audit log dan aturan bisnis dibuat lebih eksplisit agar tim bisa menelusuri perubahan saldo dengan lebih cepat saat investigasi diperlukan.",
      ],
    },
  },
  {
    slug: "datakelola-omnichannel-multichat-platform",
    title: "Datakelola Omnichannel Multichat Platform",
    summary:
      "Pembangunan arsitektur perpesanan tersentralisasi yang menghubungkan berbagai API chat stream masuk ke satu dasbor manajemen agen terpadu dengan respon latensi rendah.",
    year: "2026",
    teaserLabel: "Omnichannel Hub",
    teaserLabelClassName: "text-accent-green bg-accent-green/5",
    hoverAccentClassName: "group-hover:text-accent-green",
    image: "https://picsum.photos/600/375?random=5",
    imageAlt: "Omnichannel Multichat Platform",
    stack: ["Laravel API", "VueJS 3", "Webhooks Hub"],
    categories: ["laravel", "fullstack"],
    detail: {
      ...sharedDetail,
      caseStudyLabel: "Studi Kasus Integrasi",
      caseStudyLabelClassName: "text-accent-green bg-accent-green/5",
      title: "Platform Omnichannel untuk Agregasi Banyak Jalur Chat",
      description:
        "Membangun arsitektur perpesanan terpusat agar banyak channel chat bisa masuk ke satu dashboard agen dengan alur yang lebih rapi dan latensi tetap rendah.",
      info: {
        role: "Laravel Integration Engineer",
        duration: "4.5 Bulan Delivery",
        techStackSummary: "Laravel API, VueJS 3, Webhooks Hub",
        domainScope: "Multi-channel Messaging, Agent Dashboard, Webhook Aggregation",
      },
      challengeBody: [
        "Banyak channel chat eksternal memiliki format payload dan ritme event berbeda sehingga sulit ditangani dalam satu alur agen.",
        "Tanpa arsitektur yang rapi, performa dashboard cepat turun saat volume pesan masuk meningkat tajam.",
      ],
      solutionBody: [
        "Saya merancang lapisan integrasi yang menormalkan payload dari tiap channel sebelum diteruskan ke dashboard agen.",
        "Dengan begitu, tim operasional mendapat satu alur kerja yang lebih konsisten tanpa harus berpindah-pindah sistem untuk memantau percakapan.",
      ],
    },
  },
  {
    slug: "komodo-voyage-online-travel-booking-engine",
    title: "Komodo Voyage — Online Travel Booking Engine",
    summary:
      "Platform OTA kustom berskala komersial tinggi. Mengintegrasikan pemesanan tiket, sinkronisasi manifes perjalanan kapal otomatis, sistem invoice otomatis, dan *payment gateway hub*.",
    year: "2026",
    teaserLabel: "Booking Engine",
    teaserLabelClassName: "text-accent-purple bg-accent-purple/5",
    hoverAccentClassName: "group-hover:text-accent-purple",
    image: "https://picsum.photos/600/375?random=6",
    imageAlt: "Online Travel Agent Komodo Voyage",
    stack: ["Laravel Core", "Blade Component", "Third Party API"],
    categories: ["integration", "fullstack"],
    detail: {
      ...sharedDetail,
      caseStudyLabel: "Studi Kasus Booking Engine",
      caseStudyLabelClassName: "text-accent-purple bg-accent-purple/5",
      title: "Booking Engine untuk Operasional Travel yang Lebih Terintegrasi",
      description:
        "Menghubungkan proses pemesanan, manifest perjalanan, invoice, dan payment gateway ke dalam satu backend yang lebih terkontrol untuk kebutuhan operasional travel komersial.",
      info: {
        role: "Fullstack Product Engineer",
        duration: "6 Bulan Delivery",
        techStackSummary: "Laravel Core, Blade Component, Third Party API",
        domainScope: "Booking Flow, Manifest Sync, Invoicing, Payment Integration",
      },
      challengeBody: [
        "Alur booking, manifest kapal, dan pembayaran punya dependensi tinggi sehingga perubahan kecil mudah memicu gangguan operasional.",
        "Sinkronisasi ke pihak ketiga juga harus tetap konsisten supaya data penumpang dan transaksi tidak saling tertinggal.",
      ],
      solutionBody: [
        "Saya menyusun ulang arsitektur booking agar tiap domain punya batas tanggung jawab yang lebih jelas sejak proses order sampai invoice selesai.",
        "Integrasi pihak ketiga kemudian diposisikan sebagai lapisan terkontrol agar perubahan eksternal tidak langsung merusak alur inti platform.",
      ],
    },
  },
];
