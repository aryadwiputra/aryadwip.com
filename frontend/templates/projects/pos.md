# Portfolio Template

Gunakan file ini sebagai template sumber konten untuk 1 portfolio/project.

## Cara pakai

- 1 file Markdown = 1 project
- Isi bagian `Frontmatter` untuk metadata utama
- Isi bagian `Content` untuk deskripsi panjang project
- Bagian `Gallery` dipakai untuk daftar screenshot/preview
- Bagian `Sidebar Points` dipakai untuk poin konteks implementasi yang ingin ditampilkan di sidebar

---

## Frontmatter

```yaml
title: "Point of Sales & Operasional Retail"
slug: "point-of-sales-operasional-retail"
summary: "Aplikasi POS berbasis Laravel dan React untuk mengelola transaksi kasir, inventory, piutang, hutang, retur, shift kasir, CRM dasar, dan laporan operasional dalam satu dashboard terintegrasi."
client_name: ""
client_website: ""
client_description: "Aplikasi ini ditujukan untuk kebutuhan operasional toko atau bisnis retail yang membutuhkan alur kasir, kontrol stok, pengelolaan keuangan dasar, dan kontrol akses berbasis peran dalam satu sistem."
case_study_label: "Proyek Mandiri"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel 12
  - PHP 8.2
  - Inertia.js 2
  - React 18
  - MySQL
  - Tailwind CSS 3
  - Vite 5
  - Spatie Laravel Permission
categories:
  - laravel
  - fullstack
  - dashboard
  - integration
teaser_label: "Sistem Operasional"
featured_image: "/assets/portfolio/point-of-sales-operasional-retail/cover.png"
featured_image_alt: "Dashboard aplikasi point of sales dan operasional retail"
demo_url: ""
repo_url: ""
start_date: "2024-06-13"
end_date: "2026-05-05"
is_featured: true
sort_order: 1
status: published
sidebar_title: "Konteks Implementasi"
sidebar_description: "Project ini dibangun sebagai sistem operasional retail yang menyatukan alur kasir, inventory, pembayaran, laporan, dan kontrol akses agar proses bisnis harian lebih rapi dan mudah dikembangkan."
```

### Catatan field

- `title` — judul project
- `slug` — URL portfolio, contoh: `sistem-manajemen-aset`
- `summary` — ringkasan pendek untuk card/listing
- `client_name` — nama klien, boleh kosong kalau project mandiri
- `client_website` — website klien, opsional
- `client_description` — deskripsi singkat konteks klien / bisnis
- `case_study_label` — contoh: `Proyek Klien` atau `Proyek Mandiri`
- `role` — peran kamu di project
- `tech_stack` — daftar stack utama
- `categories` — gunakan kombinasi dari:
  - `laravel`
  - `fullstack`
  - `dashboard`
  - `integration`
- `teaser_label` — label kecil di card, contoh: `Sistem Operasional`
- `featured_image` — gambar cover utama
- `featured_image_alt` — alt text cover utama
- `demo_url` — link demo/live, opsional
- `repo_url` — link repository, opsional
- `start_date` / `end_date` — format `YYYY-MM-DD`
- `is_featured` — `true` atau `false`
- `sort_order` — urutan tampil
- `status` — untuk sekarang gunakan `published`
- `sidebar_title` / `sidebar_description` — isi panel kanan detail project

---

## Content

> Bagian ini akan menjadi isi utama `detail.content`.
> Boleh pakai heading Markdown, bullet list, dan paragraf biasa.

## Latar Belakang

Project ini dikembangkan sebagai platform operasional retail yang menggabungkan alur kasir dan kebutuhan backoffice dalam satu aplikasi. Fokus utamanya bukan hanya mencatat transaksi penjualan, tetapi juga menjaga agar stok, piutang pelanggan, hutang supplier, retur, konfigurasi pembayaran, dan laporan bisnis tetap sinkron dalam satu dashboard.

Pengguna utamanya adalah admin toko, kasir, dan tim operasional yang membutuhkan alur kerja cepat di sisi front-office, tetapi tetap memiliki kontrol data yang rapi untuk kebutuhan audit dan pengambilan keputusan harian.

## Tantangan Utama

Tantangan terbesar dalam project ini ada pada penggabungan banyak proses bisnis yang saling berhubungan. Satu transaksi penjualan misalnya tidak berhenti di checkout, tetapi juga memengaruhi stok, profit, dokumen cetak, status pembayaran, bahkan bisa berlanjut ke piutang jika metode bayarnya `pay_later`.

Di sisi lain, aplikasi juga harus tetap aman untuk dipakai banyak peran dengan hak akses berbeda. Karena itu, kebutuhan authorization, audit trail, dan validasi flow operasional menjadi bagian penting dari implementasi, terutama untuk modul sensitif seperti payment settings, cashier shift, retur, dan dokumen transaksi.

## Solusi yang Diterapkan

Solusi yang dipilih adalah membangun aplikasi full-stack berbasis Laravel, Inertia.js, dan React agar alur backend dan dashboard tetap terintegrasi tanpa memisahkan aplikasi menjadi dua codebase yang berbeda.

Secara arsitektur, routing dashboard dipusatkan di Laravel dengan middleware `auth`, permission berbasis Spatie, dan middleware tambahan seperti `active_shift` untuk membatasi aksi transaksi yang memang hanya boleh dilakukan ketika kasir sedang membuka shift aktif.

Modul yang paling penting dalam sistem ini meliputi:

- POS dan transaksi kasir dengan cart, hold/resume, checkout multi-metode pembayaran, dan cetak dokumen
- inventory melalui produk, stock opname, dan histori mutasi stok
- keuangan operasional melalui receivables dan payables
- sales return untuk koreksi pasca-transaksi
- cashier shift untuk kontrol aktivitas kasir
- audit logs untuk observability perubahan pada modul sensitif
- settings, payment gateway, dan bank account sebagai fondasi operasional harian

Alur data dirancang supaya perubahan penting tidak berdiri sendiri. Checkout memperbarui transaksi, detail transaksi, profit, stok, dan piutang bila diperlukan. Stock opname dan retur juga menghasilkan penyesuaian stok melalui service khusus agar histori mutasi tetap konsisten. Sementara itu, shared props Inertia dipakai untuk membagikan auth state, permission, notifikasi, dan profil toko ke seluruh dashboard.

## Implementasi Teknis

### Backend

Backend dibangun dengan Laravel 12 dan PHP 8.2, menggunakan pola controller modular di `app/Http/Controllers/Apps/` untuk memisahkan tiap domain fitur. Logika lintas modul dipindahkan ke layer service seperti `StockMutationService`, `CashierShiftService`, `ReceivableService`, `PurchaseOrderService`, `SupplierReturnService`, `CrmAutomationService`, dan `AuditLogService` agar controller tetap fokus pada orkestrasi request.

Aplikasi ini juga memakai RBAC berbasis `spatie/laravel-permission`, sehingga setiap route dashboard dapat diproteksi dengan permission yang spesifik. Untuk flow yang lebih sensitif, sistem menambahkan middleware khusus seperti `EnsureActiveCashierShift`, `EnsureBotGuard`, `EnsurePublicRegistrationEnabled`, dan middleware step-up confirmation pada aksi tertentu. Di level data, aplikasi menangani domain yang cukup lengkap: transaksi, detail transaksi, profit, receivable, payable, retur, mutasi stok, stock opname, bank account, payment settings, customer segment, voucher pelanggan, hingga audit log.

Dokumen PDF untuk invoice, receipt, shipping, receivable, dan payable dihasilkan melalui integrasi `barryvdh/laravel-dompdf`. Pengujian memanfaatkan SQLite in-memory agar test suite tetap ringan dan cepat dijalankan selama pengembangan.

### Frontend

Frontend dashboard dibangun menggunakan Inertia.js 2 dan React 18, sehingga pengalaman pengguna tetap terasa seperti SPA tetapi tetap mengikuti pola routing dan response dari Laravel. Struktur halaman dipisahkan per modul di `resources/js/Pages/Dashboard/`, misalnya untuk transaksi, produk, stock opname, receivables, payables, audit logs, cashier shifts, CRM, dan laporan.

Untuk pengalaman penggunaan, aplikasi memanfaatkan Tailwind CSS 3 dengan semantic color token, Ziggy untuk helper routing di sisi React, `react-hot-toast` dan `sweetalert2` untuk feedback interaksi, serta `chart.js` untuk visualisasi laporan. Pendekatan ini membuat dashboard cukup konsisten untuk alur operasional yang padat, terutama pada POS, histori transaksi, monitoring stok, dan halaman laporan.

### Integrasi

Project ini memiliki integrasi pembayaran dengan Midtrans dan Xendit melalui webhook API di `routes/api.php`. Sistem menyediakan `PaymentGatewayManager` beserta adapter gateway terpisah untuk menjaga implementasi pembayaran tetap modular. Selain payment gateway, aplikasi juga mengintegrasikan data wilayah Indonesia menggunakan `laravolt/indonesia`, barcode generator untuk kebutuhan identifikasi produk atau dokumen, serta storage publik Laravel untuk file seperti gambar produk.

Integrasi penting lainnya ada pada dokumen publik dan internal: invoice publik, receipt cetak, shipping label, dan PDF finansial untuk piutang maupun hutang. Konfigurasi `APP_URL` menjadi elemen penting karena webhook pembayaran membutuhkan endpoint publik agar callback provider dapat bekerja dengan benar.

## Hasil dan Dampak

Hasil akhirnya adalah sebuah platform operasional retail yang jauh lebih terstruktur dibanding sekadar aplikasi kasir sederhana. Transaksi, stok, retur, piutang, hutang, dan laporan bergerak dalam alur data yang lebih konsisten sehingga potensi pencatatan ganda atau koreksi manual bisa ditekan.

Beberapa dampak yang paling terasa dari implementasi ini adalah:

- proses kasir menjadi lebih cepat melalui flow cart, hold/resume, dan checkout multi-pembayaran
- kontrol stok menjadi lebih akurat karena setiap penyesuaian penting diarahkan ke histori mutasi
- proses penagihan dan pembayaran operasional lebih rapi melalui modul receivables dan payables
- keamanan akses lebih terjaga dengan permission per modul dan pembatasan shift aktif
- perubahan penting lebih mudah ditelusuri melalui audit log dan dokumen transaksi yang terdokumentasi
- fondasi pengembangan fitur lanjutan menjadi lebih kuat karena domain bisnis sudah dipisahkan ke modul dan service yang jelas

## Catatan Tambahan

Project ini juga menunjukkan perhatian pada maintainability dan kesiapan operasional. Dokumentasi internal sudah dipisahkan per modul, sehingga onboarding developer dan maintenance fitur menjadi lebih mudah. Dari sisi keamanan, route sensitif dilindungi dengan kombinasi auth, permission, throttle protection, dan kontrol registration publik. Dari sisi deployment, sistem sudah menandai beberapa kebutuhan environment yang penting seperti `storage:link`, migrasi terbaru, serta `APP_URL` publik untuk webhook pembayaran.

Secara keseluruhan, project ini cocok diposisikan sebagai studi kasus full-stack Laravel untuk sistem operasional retail yang tidak hanya fokus pada checkout, tetapi juga pada observability, kontrol akses, integrasi pembayaran, dan konsistensi data lintas modul.

---

## Gallery

Gunakan list YAML ini untuk screenshot tambahan.

```yaml
gallery:
  - src: "/assets/portfolio/point-of-sales-operasional-retail/gallery-01.png"
    alt: "Dashboard overview aplikasi point of sales"
    label: "Dashboard utama dan ringkasan operasional"
  - src: "/assets/portfolio/point-of-sales-operasional-retail/gallery-02.png"
    alt: "Halaman transaksi kasir dengan cart dan checkout"
    label: "Modul POS dan checkout kasir"
  - src: "/assets/portfolio/point-of-sales-operasional-retail/gallery-03.png"
    alt: "Halaman inventory dan stock opname"
    label: "Inventory, stock opname, dan mutasi stok"
```

---

## Sidebar Points

Gunakan list YAML ini untuk poin sidebar detail project.

```yaml
sidebar_points:
  - title: "Tipe proyek:"
    description: "Sistem POS dan operasional retail internal"
  - title: "Periode:"
    description: "Juni 2024 — Mei 2026"
  - title: "Stack teknis:"
    description: "Laravel 12, React 18, Inertia.js 2, MySQL, Tailwind CSS"
  - title: "Cakupan:"
    description: "POS, inventory, receivables, payables, retur, shift kasir, CRM, laporan, dan payment gateway"
```

---

## Contoh singkat

```yaml
title: "Sistem Manajemen Gudang"
slug: "sistem-manajemen-gudang"
summary: "Platform internal untuk mengelola stok, approval, dan pelaporan gudang multi-lokasi."
client_name: "PT Contoh Distribusi"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel
  - MySQL
  - Tailwind CSS
categories:
  - laravel
  - dashboard
  - integration
featured_image: "/assets/portfolio/sistem-manajemen-gudang/cover.png"
featured_image_alt: "Tampilan dashboard sistem manajemen gudang"
start_date: "2025-01-01"
end_date: "2025-04-15"
is_featured: true
sort_order: 2
status: published
```
