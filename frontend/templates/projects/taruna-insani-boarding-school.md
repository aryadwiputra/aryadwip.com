```yaml
title: "Website Profil & Sistem PPDB Taruna Insani Boarding School"
slug: "website-ppdb-taruna-insani-boarding-school"
summary: "Platform sekolah berbasis Laravel yang menggabungkan website profil, CMS admin, dan portal PPDB orang tua dengan alur pendaftaran, pembayaran, verifikasi dokumen, penjadwalan tes, serta notifikasi email."
client_name: "Taruna Insani Boarding School"
client_website: ""
client_description: "Lembaga pendidikan boarding school yang membutuhkan website publik informatif sekaligus sistem penerimaan peserta didik baru yang lebih terstruktur."
case_study_label: "Proyek Klien"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel 12
  - PHP 8.2
  - MySQL
  - Tailwind CSS 4
  - Alpine.js
  - Vite
  - DomPDF
  - Laravel Excel
  - Spatie Permission
  - Laravolt Indonesia
categories:
  - laravel
  - fullstack
  - dashboard
  - integration
teaser_label: "Website Sekolah & PPDB"
featured_image: "/assets/portfolio/taruna-insani-boarding-school/cover.png"
featured_image_alt: "Dashboard admin dan portal PPDB Taruna Insani Boarding School"
demo_url: ""
repo_url: ""
start_date: "2026-01-12"
end_date: "2026-05-07"
is_featured: true
sort_order: 1
status: published
sidebar_title: "Konteks Implementasi"
sidebar_description: "Project ini menggabungkan kebutuhan branding sekolah, pengelolaan konten, dan digitalisasi alur PPDB dalam satu codebase yang tetap mudah dirawat."
```

## Latar Belakang

Project ini dibuat untuk menggabungkan dua kebutuhan yang biasanya terpisah: website profil sekolah untuk publik dan sistem PPDB untuk operasional internal. Di sisi publik, sekolah membutuhkan landing page yang mudah diperbarui untuk menampilkan profil, program unggulan, kurikulum, fasilitas, ekskul, berita, lokasi, hingga halaman Al-Qur'an. Di sisi operasional, tim sekolah membutuhkan alur penerimaan siswa baru yang lebih rapi, terukur, dan tidak lagi bergantung pada proses manual yang tersebar di chat, spreadsheet, dan dokumen terpisah.

Pengguna utama sistem ini terbagi menjadi tiga lapisan. Pertama, calon wali murid yang mengakses informasi sekolah dan melakukan pendaftaran melalui portal parent. Kedua, admin sekolah yang mengelola konten website, data master, dan keseluruhan aplikasi PPDB. Ketiga, admin PPDB dan bendahara yang memverifikasi pembayaran, dokumen, hasil tes, dan status seleksi.

## Tantangan Utama

Tantangan utamanya bukan hanya membuat website company profile, tetapi menyatukan CMS konten dan workflow PPDB dalam satu aplikasi dengan pengalaman penggunaan yang tetap jelas untuk tiap peran.

Beberapa kompleksitas yang perlu dihadapi:

- landing page harus dinamis, sehingga konten seperti hero, program, profil, berita, testimonial, dan navigasi bisa dikelola admin tanpa edit kode
- alur PPDB memiliki banyak state: draft, submit, pembayaran, verifikasi dokumen, penjadwalan tes, hasil tes, daftar ulang, dan status akhir
- portal parent membutuhkan autentikasi terpisah dari admin, termasuk verifikasi email dan pembatasan akses berbasis guard
- data alamat Indonesia perlu dibuat lebih akurat melalui hirarki provinsi, kota, kecamatan, dan kelurahan
- sekolah membutuhkan dokumen output yang siap pakai secara operasional, seperti export Excel, halaman print, dan PDF bukti pendaftaran
- perubahan status penting harus memicu komunikasi yang konsisten ke wali murid melalui template email

## Solusi yang Diterapkan

Solusinya dibangun sebagai aplikasi Laravel monolith yang memisahkan area publik, admin, dan parent portal pada level route, layout, controller, dan guard autentikasi.

Arsitektur utamanya dibagi menjadi tiga domain besar:

- website publik untuk branding dan penyampaian informasi sekolah
- CMS admin untuk mengelola konten dan struktur website
- modul PPDB untuk pendaftaran, verifikasi, pembayaran, penjadwalan tes, dan monitoring hasil

Modul yang paling penting dalam implementasi ini adalah modul PPDB. Struktur datanya dipisah cukup detail ke dalam entitas seperti `Application`, `Applicant`, `Address`, `Guardian`, `Sibling`, `Payment`, `Document`, `RegistrationWave`, `AcademicYear`, `TestSchedule`, dan `TestResult`. Pendekatan ini membuat alur bisnis lebih eksplisit dan lebih mudah dikembangkan ketika sekolah ingin menambah tahap seleksi atau aturan administrasi.

Alur datanya berjalan seperti ini:

- calon wali murid membuat akun parent dan memverifikasi email
- parent mengisi form pendaftaran bertahap, termasuk data peserta, keluarga, alamat, pilihan program, dan pernyataan
- sistem mengaitkan pendaftaran dengan gelombang dan tahun ajaran aktif
- parent mengunggah bukti pembayaran dan dokumen persyaratan
- admin memverifikasi pembayaran dan dokumen, lalu memperbarui status aplikasi
- admin menjadwalkan tes diagnostik dan mengelola hasil seleksi
- sistem mengirim email notifikasi pada momen penting seperti submit pendaftaran, verifikasi pembayaran, penolakan dokumen, hingga hasil seleksi

Validasi dilakukan di level request dan controller sesuai konteks form, sedangkan otorisasi dipisahkan dengan guard `auth` untuk admin dan guard `parent` untuk wali murid. Pada area parent, akses ke data aplikasi juga dicek kembali dengan membandingkan `parent_user_id`, sehingga user hanya bisa melihat dan memodifikasi pendaftarannya sendiri.

## Implementasi Teknis

### Backend

Backend dibangun dengan Laravel 12 dan PHP 8.2. Routing dipisahkan ke beberapa file seperti `routes/web.php`, `routes/admin.php`, dan `routes/parent.php` agar batas antar domain lebih tegas. Area admin memakai resource controller untuk CRUD konten dan data master, sedangkan area parent berfokus pada self-service portal untuk pendaftaran dan pelacakan status.

Model dan migrasi dibuat cukup lengkap untuk mendukung CMS dan PPDB. Selain tabel konten seperti hero slide, profile entry, program, fasilitas, testimonial, artikel, kategori, tag, dan navigasi, sistem ini juga memiliki sekumpulan tabel PPDB yang menangani data master, data inti pendaftaran, pembayaran, dokumen, hingga test schedule dan test result.

Beberapa layanan pendukung yang cukup penting:

- `App\Services\SiteContentService` untuk menyuplai konten landing page
- `App\Services\NavigationResolver` untuk membentuk menu dinamis
- `App\Services\QuranDataService` untuk halaman Al-Qur'an
- `App\Services\EmailService` untuk mengirim email berbasis template dan mencatat log pengiriman
- `App\Services\FileUploadService` untuk membantu pengelolaan file pada area tertentu

Fitur backend yang menonjol:

- role dan permission menggunakan Spatie Laravel Permission
- export data pendaftaran ke Excel menggunakan Laravel Excel
- generate PDF dan halaman print bukti pendaftaran menggunakan DomPDF
- email template untuk notifikasi status PPDB
- soft delete dan verifikasi status pada dokumen pendaftaran
- data wilayah Indonesia melalui Laravolt Indonesia untuk input alamat yang lebih presisi

### Frontend

Frontend publik dan dashboard dibangun dengan Blade, Tailwind CSS 4, Alpine.js, dan Vite. Pendekatan ini cukup ringan, cepat untuk dikembangkan, dan cocok untuk kebutuhan website konten plus dashboard operasional.

Di sisi publik, halaman yang tersedia mencakup home, sejarah, visi misi, kurikulum, program unggulan, fasilitas, ekskul, testimoni, berita, lokasi, kontak, PPDB, dan halaman Al-Qur'an. Admin dapat memperbarui banyak bagian tersebut melalui CMS tanpa harus mengubah source code secara langsung.

Di sisi parent portal, UX difokuskan pada alur yang jelas dan bertahap:

- registrasi akun parent
- verifikasi email
- pengisian formulir pendaftaran
- upload bukti pembayaran
- upload dokumen persyaratan
- cek status verifikasi, jadwal tes, dan hasil seleksi
- unduh atau print bukti pendaftaran

Area admin juga dipisahkan berdasarkan tugas operasional, sehingga dashboard tidak hanya berfungsi sebagai CMS tetapi juga sebagai pusat kontrol PPDB.

### Integrasi

Integrasi di project ini bukan integrasi payment gateway penuh, tetapi integrasi operasional yang relevan untuk sekolah:

- email notification berbasis template untuk berbagai perubahan status PPDB
- export Excel untuk kebutuhan rekap administrasi
- generate PDF untuk bukti pendaftaran
- region dataset Indonesia untuk dropdown alamat bertingkat
- storage file dokumen dan bukti pembayaran di disk publik Laravel

Selain itu, tersedia endpoint data untuk kebutuhan dinamis seperti daftar gelombang pendaftaran, data wilayah, dan data surat/ayat pada halaman Al-Qur'an.

## Hasil dan Dampak

Dengan struktur ini, website sekolah tidak lagi hanya menjadi brosur digital, tetapi berubah menjadi platform operasional yang langsung dipakai dalam proses PPDB.

Dampak yang paling terasa:

- pengelolaan konten website menjadi lebih mandiri karena admin bisa mengubah hero, berita, program, fasilitas, dan halaman profil dari dashboard
- alur PPDB menjadi lebih tertib karena status pendaftaran, pembayaran, dokumen, dan hasil tes tercatat dalam satu sistem
- komunikasi ke wali murid menjadi lebih konsisten melalui email berbasis template pada titik-titik penting
- proses administrasi lebih cepat berkat fitur export Excel, print, dan PDF
- kualitas data alamat lebih baik karena input wilayah mengikuti struktur provinsi sampai kelurahan
- maintenance lebih mudah karena domain public site, admin CMS, dan parent portal dipisahkan dengan struktur route, controller, dan model yang cukup jelas

## Catatan Tambahan

Project ini juga menunjukkan pola implementasi yang cukup matang untuk skala sekolah atau institusi pendidikan menengah:

- menggunakan seeders untuk bootstrap role, user, konten CMS, master data PPDB, dokumen, payment type, dan template email
- memiliki dukungan testing untuk sebagian flow dokumen cetak
- memisahkan login admin dan parent agar boundary akses tidak bercampur
- menyediakan fondasi yang siap dikembangkan lebih lanjut ke payment gateway, approval berlapis, atau reporting yang lebih dalam
- riwayat git menunjukkan pengembangan berlangsung bertahap dari inisialisasi core system pada 12 Januari 2026 hingga penyempurnaan konten publik dan navigasi pada 7 Mei 2026

---

## Gallery

```yaml
gallery:
  - src: "/assets/portfolio/taruna-insani-boarding-school/gallery-01.png"
    alt: "Landing page website sekolah"
    label: "Landing page dan konten profil sekolah"
  - src: "/assets/portfolio/taruna-insani-boarding-school/gallery-02.png"
    alt: "Dashboard admin CMS dan PPDB"
    label: "Dashboard admin untuk konten dan PPDB"
  - src: "/assets/portfolio/taruna-insani-boarding-school/gallery-03.png"
    alt: "Portal parent untuk pendaftaran dan status"
    label: "Portal wali murid untuk pendaftaran dan monitoring"
  - src: "/assets/portfolio/taruna-insani-boarding-school/gallery-04.png"
    alt: "Verifikasi dokumen dan pembayaran PPDB"
    label: "Verifikasi pembayaran, dokumen, dan status seleksi"
```

---

## Sidebar Points

```yaml
sidebar_points:
  - title: "Klien:"
    description: "Taruna Insani Boarding School"
  - title: "Periode:"
    description: "Januari 2026 — Mei 2026"
  - title: "Peran:"
    description: "Laravel / Full-Stack Developer"
  - title: "Stack teknis:"
    description: "Laravel 12, PHP 8.2, MySQL, Tailwind CSS 4, Alpine.js, Vite"
  - title: "Fokus utama:"
    description: "Website sekolah, CMS admin, dan digitalisasi alur PPDB"
```
