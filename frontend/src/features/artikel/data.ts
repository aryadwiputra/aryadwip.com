import type { ArticleFilter, ArticleItem } from "@/features/artikel/types";

const sharedDetail = {
  standfirst:
    "Banyak aplikasi mulai terasa lambat atau sulit dipelihara bukan ketika trafik sudah sangat besar, tetapi ketika pertumbuhan fitur berjalan jauh lebih cepat daripada kemampuan fondasi teknisnya untuk beradaptasi.",
  featureGraphicLabel: "[Feature Graphic: Refactoring Monolith Architecture Diagram]",
  introParagraphs: [
    "Sebelum berbicara tentang *scaling* atau memecah modul, ada satu pertanyaan penting yang perlu dijawab secara jujur: apakah aplikasi Anda sudah cukup mudah dipahami, dipantau, dan diubah oleh engineer lain? Dalam banyak proyek komersial, jawaban jujurnya adalah belum. Controller mulai menebal, query kustom menumpuk di sembarang tempat, standarisasi penamaan (*naming convention*) tidak konsisten, dan perubahan kecil pada satu baris kode mulai memicu efek samping (*side-effects*) yang tidak terduga di modul lain.",
    "Masalah struktural seperti ini belum tentu langsung membuat aplikasi gagal beroperasi hari ini, tetapi perlahan bertindak sebagai beban tidak terlihat yang memperlambat semua orang. Tim jadi lebih ragu saat merilis perubahan baru, proses *onboarding engineer* baru memakan waktu lebih lama, dan keputusan teknis cenderung diambil secara reaktif karena sistem sudah terasa terlalu rapuh untuk disentuh dengan penuh percaya diri.",
  ],
  signalsTitle: "Tiga sinyal utama fondasi sistem perlu dirapikan",
  signalsIntro:
    "Bagaimana mengidentifikasi bahwa aplikasi Laravel Anda sudah mencapai titik jenuh teknis sebelum beban trafik puncak (*peak traffic*) datang? Perhatikan tiga gejala empiris berikut:",
  signals: [
    {
      bulletClassName: "bg-accent-purple",
      title: "Siklus rilis melambat:",
      description:
        "Waktu pengerjaan fitur baru terus bertambah secara tidak wajar, walaupun ruang lingkup (*scope*) perubahan relatif kecil.",
    },
    {
      bulletClassName: "bg-accent-pink",
      title: "Bug berantai:",
      description:
        "Munculnya eror fungsional yang terisolasi di area yang seharusnya sama sekali tidak ikut termodifikasi oleh commit terbaru.",
    },
    {
      bulletClassName: "bg-accent-blue",
      title: "Ketiadaan sekat logis:",
      description:
        "Performa respon mulai sulit ditebak karena tidak ada batas yang tegas antara logika bisnis (*domain logic*), kueri data mentah (*raw query*), dan orkestrasi proses API eksternal.",
    },
  ],
  quote:
    "Fondasi arsitektur yang baik bukan berarti membuat sistem menjadi rumit penuh abstraksi. Justru sebaliknya, tujuannya adalah membuat perubahan harian terasa aman, terukur, dan berbiaya murah.",
  midParagraph:
    "Di fase kritis ini, pendekatan terbaik biasanya bukanlah melakukan perombakan total (*big-bang refactor*). Yang jauh lebih efektif adalah mendeteksi titik operasional dengan dampak (*leverage*) paling tinggi: mengisolasi aturan penulisan ke dalam *Service Layer* khusus untuk alur bisnis yang paling sering mengalami mutasi fitur, mengaudit n+1 query via *eager loading* di kueri halaman utama dashboard, serta memperjelas kepemilikan data.",
  strategyTitle: "Mulai dari alur bisnis riil, bukan dari dogma pola desain",
  strategyParagraph:
    "Salah satu kesalahan umum dari tim pengembang adalah terlalu cepat menerapkan pola arsitektur mutakhir (seperti microservices atau DDD kompleks) hanya karena terlihat ideal di atas kertas. Dalam praktik, kebutuhan alur bisnis riil harus tetap menjadi kompas utama.",
  codeTitle: "OrderService.php (Kaidah Pemisahan Logika)",
  codeMeta: "PHP 8.3 / Clean Service",
  codeBlock: `final class OrderService\n{\n    public function create(OrderPayload $payload): Order\n    {\n        return DB::transaction(function () use ($payload) {\n            $order = $this->orderRepository->store($payload);\n\n            $this->inventoryAllocator->reserve($order);\n            $this->timelineLogger->recordCreated($order);\n            $this->eventDispatcher->dispatch(new OrderCreated($order));\n\n            return $order;\n        });\n    }\n}`,
  closingParagraph:
    "Pada akhirnya, tujuan refactor fondasi bukan sekadar membuat kode tampak lebih bersih ketika dibaca, tetapi memastikan sistem bisnis bisa tumbuh tanpa selalu dibayar dengan kecemasan teknis. Engineer harus punya ruang bernapas untuk mengembangkan fitur baru, sedangkan pemilik bisnis berhak mendapatkan platform yang keputusan teknisnya dibangun berdasarkan kalkulasi metrik beban riil, bukan berdasarkan rasa cemas.",
  consultationLabel: "Layanan Konsultasi Teknis",
  consultationTitle: "Apakah platform digital Anda mulai terasa berat untuk diubah?",
  consultationDescription:
    "Itu adalah sinyal awal bahwa sistem Anda membutuhkan audit kode dan profiling database sebelum trafik transaksi melonjak lebih tinggi. Perbaikan kecil terarah di waktu yang tepat jauh lebih efisien daripada stabilisasi darurat saat platform kolaps di jam operasional sibuk.",
  consultationButtonLabel: "Jadwalkan Audit Teknis Monolith",
  publicationTitle: "Detail Publikasi",
  shareTitle: "Bagikan Artikel",
  relatedSectionLabel: "Kelanjutan Bacaan",
  relatedSectionTitle: "Artikel teknis terkait lainnya",
};

export const articleFilters: ArticleFilter[] = [
  { key: "all", label: "Semua" },
  { key: "laravel", label: "Laravel" },
  { key: "database", label: "Database" },
  { key: "architecture", label: "Arsitektur" },
];

export const articleItems: ArticleItem[] = [
  {
    slug: "merapikan-fondasi-laravel-sebelum-trafik-bertambah",
    title: "Merapikan Fondasi Laravel Sebelum Trafik Bertambah",
    summary:
      "Tanda-tanda awal aplikasi akan mulai kewalahan sering muncul jauh sebelum server benar-benar tumbang. Artikel ini membahas indikator praktis penanganan N+1 query, penyusunan Service Classes yang terisolasi, serta langkah stabilisasi arsitektur sejak dini.",
    date: "12 Mei 2026",
    dateIso: "2026-05-12",
    readingTime: "8 min baca",
    categoryLabel: "Laravel • 8 min baca",
    categoryBadgeClassName: "text-accent-purple bg-accent-purple/5",
    hoverAccentClassName: "group-hover:text-accent-purple",
    categories: ["laravel", "architecture"],
    tags: ["Refactoring", "Scale"],
    heroLabel: "Laravel Architecture",
    detail: {
      ...sharedDetail,
      publicationInfo: {
        primaryTopic: "Software Architecture",
        framework: "Laravel 11.x Inti",
        contentLevel: "Senior Level",
        contentLevelClassName: "text-accent-purple bg-accent-purple/5",
      },
    },
  },
  {
    slug: "mengurangi-query-mahal-di-dashboard-operasional",
    title: "Mengurangi Query Mahal di Dashboard Operasional",
    summary:
      "Dashboard sering lambat bukan karena volume datanya yang terlalu besar secara mutlak, melainkan karena eksekusi sub-query agregasi berulang yang tidak terindeks. Kita bedah trik implementasi database view dan caching layer bermutu.",
    date: "03 Mei 2026",
    dateIso: "2026-05-03",
    readingTime: "6 min baca",
    categoryLabel: "Database • 6 min baca",
    categoryBadgeClassName: "text-accent-orange bg-accent-orange/5",
    hoverAccentClassName: "group-hover:text-accent-orange",
    categories: ["database"],
    tags: ["Indexing", "MySQL"],
    heroLabel: "Database Performance",
    detail: {
      ...sharedDetail,
      publicationInfo: {
        primaryTopic: "Database Performance",
        framework: "MySQL / Query Layer",
        contentLevel: "Applied Level",
        contentLevelClassName: "text-accent-orange bg-accent-orange/5",
      },
    },
  },
  {
    slug: "kapan-sebaiknya-memecah-modul-menjadi-service-terpisah",
    title: "Kapan Sebaiknya Memecah Modul Menjadi Service Terpisah?",
    summary:
      "Tidak semua problem perlu dipecah menjadi microservices. Pembahasan taktis mengenai batas konteks domain (*bounded contexts*), pola mutasi data, serta kalkulasi ongkos overhead infrastruktur sebelum melakukan split modul.",
    date: "28 April 2026",
    dateIso: "2026-04-28",
    readingTime: "7 min baca",
    categoryLabel: "Architecture • 7 min baca",
    categoryBadgeClassName: "text-accent-blue bg-accent-blue/5",
    hoverAccentClassName: "group-hover:text-accent-blue",
    categories: ["architecture"],
    tags: ["Monolith", "DDD"],
    heroLabel: "Software Architecture",
    detail: {
      ...sharedDetail,
      publicationInfo: {
        primaryTopic: "Service Boundaries",
        framework: "Laravel / Domain Design",
        contentLevel: "Senior Level",
        contentLevelClassName: "text-accent-blue bg-accent-blue/5",
      },
    },
  },
  {
    slug: "strategi-queue-untuk-proses-bisnis-yang-tidak-boleh-menghambat-user",
    title: "Strategi Queue untuk Proses Bisnis yang Tidak Boleh Menghambat User",
    summary:
      "Pengalaman pengguna akan melonjak drastis saat proses I/O berat dipindahkan dengan pas ke latar belakang. Memahami konfigurasi worker prioritas, penanganan *failed jobs*, dan sinkronisasi real-time status antrean.",
    date: "17 April 2026",
    dateIso: "2026-04-17",
    readingTime: "5 min baca",
    categoryLabel: "Laravel • 5 min baca",
    categoryBadgeClassName: "text-accent-green bg-accent-green/5",
    hoverAccentClassName: "group-hover:text-accent-green",
    categories: ["laravel"],
    tags: ["Redis", "Asynchronous"],
    heroLabel: "Queue Strategy",
    detail: {
      ...sharedDetail,
      publicationInfo: {
        primaryTopic: "Async Processing",
        framework: "Laravel Queue / Redis",
        contentLevel: "Applied Level",
        contentLevelClassName: "text-accent-green bg-accent-green/5",
      },
    },
  },
  {
    slug: "merancang-skema-data-yang-tetap-enak-diubah-saat-produk-bertumbuh",
    title: "Merancang Skema Data yang Tetap Enak Diubah Saat Produk Bertumbuh",
    summary:
      "Keputusan awal di level tabel, relasi polimorfik, serta status histori transaksi sangat memengaruhi kelincahan iterasi fitur kedepan. Artikel ini mengupas kaidah menjaga skalabilitas skema tanpa merusak integritas referensial.",
    date: "10 April 2026",
    dateIso: "2026-04-10",
    readingTime: "9 min baca",
    categoryLabel: "Data Model • 9 min baca",
    categoryBadgeClassName: "text-accent-pink bg-accent-pink/5",
    hoverAccentClassName: "group-hover:text-accent-pink",
    categories: ["database", "architecture"],
    tags: ["Schema Design", "Migrations"],
    heroLabel: "Data Modeling",
    detail: {
      ...sharedDetail,
      publicationInfo: {
        primaryTopic: "Schema Design",
        framework: "Relational Database",
        contentLevel: "Senior Level",
        contentLevelClassName: "text-accent-pink bg-accent-pink/5",
      },
    },
  },
  {
    slug: "menyusun-scope-mvp-tanpa-mengorbankan-fondasi-teknis",
    title: "Menyusun Scope MVP Tanpa Mengorbankan Fondasi Teknis",
    summary:
      "MVP yang sukses tidak sama dengan menulis kode asal jadi. Bagaimana membatasi ruang lingkup fitur di sisi bisnis sembari tetap menaruh pondasi unit testing dan pola arsitektur kode yang terukur sejak hari pertama.",
    date: "01 April 2026",
    dateIso: "2026-04-01",
    readingTime: "6 min baca",
    categoryLabel: "Delivery • 6 min baca",
    categoryBadgeClassName: "text-accent-purple bg-accent-purple/5",
    hoverAccentClassName: "group-hover:text-accent-purple",
    categories: ["architecture"],
    tags: ["MVP Scope", "Product Engineering"],
    heroLabel: "Product Delivery",
    detail: {
      ...sharedDetail,
      publicationInfo: {
        primaryTopic: "Product Engineering",
        framework: "MVP Planning",
        contentLevel: "Applied Level",
        contentLevelClassName: "text-accent-purple bg-accent-purple/5",
      },
    },
  },
];
