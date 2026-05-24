---
title: "HATTI — Website Organisasi, Keanggotaan, dan Manajemen Event"
slug: "hatti-website-keanggotaan-dan-event"
summary: "Platform Laravel untuk profil organisasi, CMS konten, manajemen anggota, generator KTA PDF, serta pendaftaran event dengan pricing bertingkat dan dashboard admin terpusat."
client_name: "HATTI"
client_website: ""
client_description: "Organisasi/professional association yang membutuhkan website publik sekaligus panel admin untuk mengelola konten, keanggotaan, struktur organisasi, dan kegiatan event."
case_study_label: "Proyek Klien"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel 10
  - PHP 8.3
  - MySQL
  - Tailwind CSS
  - AdminLTE
  - Alpine.js
  - Vite
  - DOMPDF
categories:
  - laravel
  - fullstack
  - dashboard
  - integration
teaser_label: "Website Organisasi & Operasional"
featured_image: "/assets/portfolio/hatti/cover.png"
featured_image_alt: "Halaman publik dan dashboard admin HATTI"
demo_url: ""
repo_url: ""
start_date: "2025-06-20"
end_date: "2026-05-22"
is_featured: true
sort_order: 1
status: published
sidebar_title: "Konteks Implementasi"
sidebar_description: "Project ini dibangun sebagai platform operasional terpusat untuk organisasi, sehingga website publik, data anggota, KTA, konten, dan event dapat dikelola dari satu aplikasi yang konsisten."
---

## Latar Belakang

HATTI membutuhkan aplikasi yang tidak hanya berfungsi sebagai website profil organisasi, tetapi juga sebagai pusat operasional harian untuk tim admin. Kebutuhan tersebut mencakup publikasi konten, pengelolaan struktur organisasi dan pengurus daerah, database anggota, penerbitan KTA, hingga pengelolaan event dengan alur registrasi yang lebih fleksibel.

Sebelumnya, proses-proses ini cenderung tersebar: sebagian berada di halaman publik, sebagian lagi dikerjakan manual oleh admin. Akibatnya, pembaruan data membutuhkan waktu lebih lama, risiko inkonsistensi cukup tinggi, dan pengalaman pengguna di sisi publik maupun admin terasa terputus.

Melalui project ini, seluruh kebutuhan tersebut disatukan ke dalam satu aplikasi Laravel dengan dua wajah utama: website publik untuk pengunjung dan panel admin untuk tim internal.

## Tantangan Utama

Beberapa tantangan utama pada implementasi project ini adalah:

- Menyatukan banyak domain fitur dalam satu codebase tanpa membuat alur admin menjadi rumit.
- Menyusun model data yang cukup fleksibel untuk keanggotaan, konten, dan event yang masing-masing punya kebutuhan berbeda.
- Membangun generator KTA berbasis PDF yang dapat dipreview dan diunduh dengan aman, termasuk dukungan tanda tangan aktif.
- Menyediakan sistem event yang mendukung pendaftaran internal, custom field, kategori peserta, harga bertingkat, add-on, invoice, dan unggah bukti pembayaran.
- Menjaga agar halaman publik tetap mudah diakses pengunjung non-teknis, sementara panel admin tetap efisien dipakai operator harian.
- Mengakomodasi migrasi/import konten legacy agar transisi dari sistem lama tidak mengorbankan aset dan struktur konten yang sudah ada.

## Solusi yang Diterapkan

Pendekatan implementasi difokuskan pada pemisahan concern yang jelas antara area publik, area admin, service layer, dan model data inti.

- Routing dipisahkan antara halaman publik, autentikasi, dan dashboard admin agar flow akses lebih rapi.
- Role dan permission diterapkan untuk membatasi akses admin menggunakan `spatie/laravel-permission`.
- Service layer dipakai pada modul-modul utama seperti member, post, event pricing, KTA signature, dan import konten legacy untuk menjaga controller tetap tipis.
- Modul event dibangun dengan struktur yang mendukung pricing period, pricing rate, add-on, registrasi, invoice, dan status pembayaran.
- Modul keanggotaan dilengkapi generator KTA PDF, preview bertanda tangan digital, dan endpoint download yang diproteksi signed URL.
- CMS internal disiapkan untuk post, kategori, tag, slider, visi-misi, struktur organisasi, dan pengurus daerah agar tim admin dapat memperbarui website tanpa perubahan kode.

## Implementasi Teknis

### Backend

Aplikasi ini dibangun di atas Laravel 10 dengan pola MVC yang diperkuat service layer untuk logika bisnis yang lebih kompleks.

Fitur backend utama yang diimplementasikan antara lain:

- Autentikasi admin dengan Laravel Breeze.
- Role-based access control untuk area admin.
- CRUD terstruktur untuk user, member, category, tag, post, slider, visi-misi, struktur organisasi, pengurus daerah, custom field, dan event.
- Modul `MemberController` dan `MemberKtaController` untuk pengelolaan anggota, preview KTA, dan unduh kartu anggota.
- `KtaSignatureService` untuk mengelola tanda tangan aktif yang digunakan saat render PDF.
- `EventPricingService` untuk menentukan harga registrasi berdasarkan role pendaftar, kategori peserta, periode harga aktif, dan add-on yang dipilih.
- Alur registrasi event dengan penyimpanan snapshot harga agar invoice tetap konsisten meskipun konfigurasi harga berubah di kemudian hari.
- Fitur import konten legacy melalui `LegacyContentExtractor`, `LegacyAssetMigrator`, dan `LegacyContentImporter` untuk memindahkan konten lama beserta metadata dan asetnya.

Di sisi database, struktur tabel menunjukkan aplikasi dirancang cukup matang untuk kebutuhan operasional nyata, termasuk dukungan:

- data anggota dan atribut keanggotaan,
- event registrasi dan field tambahan,
- pricing matrix dan add-on event,
- konten artikel dan kategori/tag,
- data organisasi dan pengurus daerah,
- lampiran serta aset pendukung.

### Frontend

Frontend dibagi menjadi dua area utama.

Area publik meliputi:

- landing page organisasi,
- slider/banner homepage,
- listing dan detail artikel,
- halaman visi-misi,
- struktur organisasi,
- pengurus daerah,
- halaman keanggotaan,
- daftar agenda/event,
- detail event dan form registrasi,
- halaman thank-you dan invoice registrasi.

Area admin memanfaatkan AdminLTE untuk mempercepat usability dashboard, lalu dipadukan dengan Blade, Tailwind CSS, dan Alpine.js untuk interaksi yang lebih ringan.

UX admin dirancang agar operator bisa menjalankan tugas rutin dengan cepat, seperti:

- menambah dan memverifikasi data anggota,
- preview dan unduh KTA,
- mengelola konten website,
- menyusun event dan custom field registrasi,
- memantau data pendaftar event,
- mengekspor data registrasi.

### Integrasi

Project ini juga memuat beberapa integrasi penting yang menunjang operasional:

- `barryvdh/laravel-dompdf` untuk generate KTA PDF dan dokumen terkait event.
- `laravolt/indonesia` untuk kebutuhan data wilayah seperti provinsi/kota yang dipakai dalam form administrasi anggota.
- dukungan email untuk konfirmasi registrasi event dan instruksi pembayaran.
- integrasi webhook/mutasi pembayaran yang disiapkan melalui modul layanan seperti `MootaWebhookService`, `PaymentMatchingService`, dan audit log webhook untuk kebutuhan rekonsiliasi pembayaran.
- signed URL dan throttle pada endpoint tertentu untuk menjaga keamanan preview/download KTA serta akses invoice event.

## Hasil dan Dampak

Setelah modul-modul utama tersedia dalam satu aplikasi, dampak yang paling terasa adalah konsolidasi proses kerja.

- Tim admin dapat mengelola website publik dan data operasional dari satu dashboard.
- Data anggota menjadi lebih terstruktur, termasuk alur preview dan unduh KTA.
- Publikasi konten organisasi lebih cepat karena admin tidak bergantung pada perubahan manual di codebase.
- Event dapat dikelola lebih profesional dengan dukungan registrasi internal, custom field, pricing bertingkat, invoice, dan unggah bukti pembayaran.
- Struktur organisasi, pengurus daerah, dan halaman informasi utama menjadi lebih mudah diperbarui secara mandiri.
- Fondasi sistem menjadi lebih siap dikembangkan untuk kebutuhan organisasi jangka panjang.

## Catatan Tambahan

Beberapa poin teknis tambahan yang layak dicatat untuk portfolio ini:

- Project memiliki cakupan full-stack yang jelas: backend operasional, CMS, dashboard admin, dan halaman publik.
- Terdapat jejak pengembangan berkelanjutan dari pertengahan 2025 hingga 2026, termasuk iterasi pada event pricing, invoice flow, KTA, dan import konten legacy.
- Repository sudah memiliki test suite berbasis Pest untuk beberapa area penting, termasuk autentikasi, pricing event, draft preview event, participant type registration, dan import konten legacy.
- Struktur aplikasi cukup siap untuk pengembangan lanjutan seperti payment reconciliation yang lebih matang, audit trail tambahan, atau otomatisasi workflow admin.

## Gallery

```yaml
gallery:
  - src: "/assets/portfolio/hatti/gallery-homepage.png"
    alt: "Homepage website HATTI"
    label: "Landing page dan navigasi publik"
  - src: "/assets/portfolio/hatti/gallery-admin-members.png"
    alt: "Dashboard admin data anggota"
    label: "Manajemen anggota dan KTA"
  - src: "/assets/portfolio/hatti/gallery-events.png"
    alt: "Modul event dan registrasi"
    label: "Event, pricing, dan registrasi"
  - src: "/assets/portfolio/hatti/gallery-content.png"
    alt: "CMS artikel dan konten organisasi"
    label: "Pengelolaan konten website"
```

## Sidebar Points

```yaml
sidebar_points:
  - title: "Klien:"
    description: "HATTI"
  - title: "Periode:"
    description: "Juni 2025 — Mei 2026"
  - title: "Peran:"
    description: "Laravel / Full-Stack Developer"
  - title: "Stack teknis:"
    description: "Laravel 10, PHP 8.3, MySQL, Tailwind CSS, AdminLTE, Alpine.js, DOMPDF"
  - title: "Cakupan:"
    description: "Website publik, dashboard admin, keanggotaan, KTA PDF, CMS, dan event registration"
  - title: "Repository:"
    description: "Private repository"
```
