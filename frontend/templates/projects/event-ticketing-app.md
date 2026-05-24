```yaml
title: "Tickety - Platform Penjualan dan Validasi Tiket Event"
slug: "tickety-platform-penjualan-tiket-event"
summary: "Aplikasi web event ticketing berbasis Laravel untuk menampilkan event, mengelola tiket, menerima checkout manual, menerbitkan e-ticket PDF ber-QR code, dan memvalidasi tiket saat check-in melalui panel admin."
client_name: "Internal / Personal Project"
role: "Full-Stack Laravel Developer"
tech_stack:
  - Laravel 10
  - PHP 8.1
  - MySQL
  - Laravel Jetstream
  - Laravel Sanctum
  - Livewire
  - Blade
  - Tailwind CSS
  - Vite
  - DomPDF
  - Simple QR Code
  - Vue 2
  - Axios
categories:
  - laravel
  - ticketing
  - dashboard
  - qr-code
  - pdf
featured_image: "/assets/portfolio/tickety/cover.png"
featured_image_alt: "Halaman publik dan dashboard admin aplikasi Tickety"
start_date: "2023-06-19"
end_date: "2023-07-31"
is_featured: true
sort_order: 1
status: published
```

## Latar Belakang

Tickety merupakan aplikasi web untuk kebutuhan penjualan tiket event skala kecil hingga menengah dengan alur yang sederhana namun lengkap: publik bisa melihat daftar event, memilih tiket, melakukan checkout, lalu admin memverifikasi pembayaran dan menerbitkan e-ticket. Project ini cocok untuk penyelenggara event yang belum membutuhkan integrasi payment gateway penuh, tetapi tetap ingin proses penjualan, distribusi tiket, dan validasi kehadiran berjalan lebih rapi dibanding pencatatan manual.

Pengguna utama sistem ini terbagi menjadi dua sisi. Sisi pertama adalah pengunjung event yang membutuhkan pengalaman pemesanan tiket yang cepat dari landing page publik. Sisi kedua adalah admin event yang perlu mengelola data event, kategori, jenis tiket, transaksi pembelian, hingga proses check-in peserta di lokasi acara.

## Tantangan Utama

Tantangan terbesar dalam project ini adalah menyatukan beberapa proses bisnis event ticketing dalam aplikasi yang tetap ringan:

- event harus bisa dipublikasikan dengan kategori, jadwal, lokasi, foto, dan beberapa tier tiket
- pembelian harus cukup sederhana untuk pengguna umum, tanpa membuat alur checkout terlalu panjang
- setiap transaksi perlu menghasilkan tiket individual yang dapat diverifikasi saat hari-H
- admin membutuhkan panel operasional untuk approval pembayaran manual dan pengecekan tiket di lokasi
- sistem harus mampu membedakan data master seperti event dan ticket dengan data transaksi dan detail tiket terbit

Selain itu, ada kebutuhan untuk membuat e-ticket yang benar-benar operasional, bukan sekadar invoice. Karena itu tiap tiket diterbitkan sebagai unit unik dengan kode sendiri, lalu divisualisasikan dalam PDF dan QR code agar bisa dipakai untuk proses check-in.

## Solusi yang Diterapkan

Solusi yang dipilih adalah membangun aplikasi monolith berbasis Laravel dengan dua area utama: frontend publik untuk discovery dan checkout, serta backend admin untuk operasional event. Arsitektur ini dipilih agar pengelolaan data, autentikasi admin, rendering halaman, pengiriman email, dan pembuatan PDF tetap berada dalam satu codebase yang sederhana untuk di-deploy dan dirawat.

Beberapa modul inti yang menjadi pusat solusi:

- **Katalog event publik** untuk menampilkan event mendatang, filter kategori, dan halaman detail event
- **Modul checkout** untuk mengumpulkan tiket terpilih, menyimpan ringkasan transaksi ke session, lalu membuat transaksi pembelian
- **Manajemen event dan tiket** pada panel admin untuk CRUD event, upload foto, dan pengaturan tier tiket
- **Modul transaksi** untuk memantau pembelian, melakukan approval, dan mengirim e-ticket ke email pembeli
- **Penerbitan tiket digital** berbentuk PDF dengan QR code per tiket
- **Check-in scanner** untuk menandai tiket sebagai sudah digunakan saat peserta datang ke venue

Aliran datanya dimulai dari publik yang memilih event dan jumlah tiket. Setelah checkout, sistem membuat record transaksi dan sekumpulan `transaction_details` sebagai tiket individual. Ketika admin menyetujui transaksi, sistem meng-generate PDF tiket, melampirkannya ke email, lalu mengirimkannya ke pembeli. Saat acara berlangsung, kode tiket dipindai melalui halaman scan admin dan status tiket diperbarui menjadi sudah diredeem.

## Implementasi Teknis

### Backend

Backend dibangun dengan Laravel 10 dan memanfaatkan Eloquent ORM untuk memisahkan entitas inti berikut:

- `categories` untuk klasifikasi event
- `events` untuk data acara, jadwal, lokasi, headline, tipe acara, dan galeri foto
- `tickets` untuk tier tiket per event lengkap dengan harga, kuota, dan batas beli
- `transactions` untuk header pembelian
- `transaction_details` untuk unit tiket individual yang memiliki kode unik dan status redeem

Struktur relasi ini penting karena satu transaksi dapat menghasilkan banyak tiket aktual. Dengan pendekatan tersebut, sistem lebih mudah mendukung penerbitan QR code per tiket dan validasi check-in satu per satu.

Validasi backend diterapkan lewat Form Request pada area admin, khususnya untuk CRUD event dan ticket. Untuk area admin, autentikasi menggunakan Laravel Jetstream dan Sanctum dengan proteksi route berbasis middleware `auth`, `verified`, dan session auth milik Jetstream. Ini membuat panel admin terpisah jelas dari sisi publik namun tetap berada dalam aplikasi yang sama.

Logika bisnis utama tersebar di controller yang relatif fokus:

- `HomeController` menangani daftar event mendatang dan kategori populer
- `EventController` menangani detail event, checkout, pembayaran manual, dan halaman sukses
- `Admin\\EventController` menangani CRUD event sekaligus API scan tiket
- `Admin\\TicketController` menangani CRUD ticket per event
- `Admin\\TransactionController` menangani daftar transaksi, approval, dan generate PDF tiket

Pembuatan dokumen tiket dilakukan menggunakan `barryvdh/laravel-dompdf`, sementara QR code dibangkitkan dengan `simplesoftwareio/simple-qrcode`. Kombinasi ini membuat satu approval transaksi langsung bisa menghasilkan lampiran tiket yang siap digunakan di lapangan.

### Frontend

Frontend menggunakan Blade template, Tailwind CSS, dan Vite. Pendekatan ini cukup efektif untuk project yang fokus pada delivery cepat tanpa kompleksitas SPA. Halaman publik terdiri dari:

- landing page daftar event
- filter kategori event
- halaman detail event
- form pemilihan tiket
- halaman checkout
- halaman sukses setelah transaksi dibuat

Sementara itu area admin memakai layout dashboard Jetstream untuk pengelolaan data. Admin dapat membuat event baru, mengunggah beberapa foto, menambahkan beberapa jenis tiket, memeriksa daftar transaksi, dan membuka halaman scan saat event berlangsung.

Untuk kebutuhan scanner, digunakan Vue 2 dan `vue-qrcode-reader` pada halaman admin scan. Pilihan ini cukup pragmatis karena fitur scan membutuhkan akses kamera dan event-based interaction yang lebih nyaman ditangani di sisi client tanpa harus membangun SPA penuh.

### Integrasi

Project ini mengintegrasikan beberapa komponen pendukung yang langsung relevan dengan proses bisnis:

- **Email** untuk mengirim e-ticket ke pembeli setelah transaksi disetujui admin
- **PDF generator** untuk membuat tiket dalam format yang mudah diunduh dan dibagikan
- **QR code generator** untuk menyematkan kode unik per tiket
- **Storage public** untuk menyimpan foto-foto event
- **Session** untuk menahan state checkout sebelum transaksi benar-benar dibuat

Model pembayarannya masih berupa `manual_transfer`, sehingga alur verifikasi dilakukan admin secara manual. Ini justru sesuai untuk use case event organizer kecil atau komunitas yang belum memerlukan integrasi payment gateway otomatis.

## Hasil dan Dampak

Setelah modul-modul utama digabungkan, aplikasi ini berhasil membentuk alur event ticketing end-to-end dalam satu sistem:

- publik bisa menemukan event dan membeli tiket tanpa kontak manual dengan panitia
- admin memiliki panel operasional untuk mengelola event, tiket, dan transaksi
- setiap pembelian menghasilkan tiket digital yang bisa dikirim melalui email
- proses check-in di lokasi menjadi lebih cepat karena cukup memindai QR code atau kode tiket
- data transaksi dan status redeem lebih mudah dipantau dibanding pencatatan spreadsheet terpisah

Dari sudut pandang portofolio, project ini menunjukkan kemampuan membangun sistem bisnis yang utuh, mulai dari desain skema database, CRUD dashboard, checkout flow, email automation, dokumen PDF, hingga validasi tiket berbasis QR code.

## Catatan Tambahan

Beberapa catatan teknis yang relevan untuk dipublikasikan:

- aplikasi menggunakan pendekatan monolith sehingga deployment lebih sederhana untuk tahap awal
- panel admin diamankan lewat autentikasi Laravel Jetstream dan verifikasi user
- event disaring sebagai `upcoming` pada halaman publik agar daftar lebih relevan untuk calon peserta
- file foto event disimpan sebagai array path pada kolom JSON `photos`
- sistem menggunakan soft delete di banyak tabel utama agar data operasional tidak langsung hilang
- struktur database sudah cukup siap untuk dikembangkan lebih lanjut, misalnya integrasi payment gateway, reporting, atau notifikasi otomatis

Kalau project ini dikembangkan ke tahap berikutnya, roadmap yang paling masuk akal adalah menambahkan payment gateway, pengurangan stok tiket otomatis saat checkout, pencegahan redeem ganda yang lebih ketat, audit log admin, dan dashboard reporting penjualan event.

---

## Gallery

```yaml
gallery:
  - src: "/assets/portfolio/tickety/gallery-home.png"
    alt: "Halaman daftar event publik"
    label: "Landing page dan katalog event"
  - src: "/assets/portfolio/tickety/gallery-checkout.png"
    alt: "Halaman checkout pembelian tiket"
    label: "Alur checkout tiket"
  - src: "/assets/portfolio/tickety/gallery-admin-events.png"
    alt: "Dashboard admin untuk mengelola event"
    label: "Manajemen event di panel admin"
  - src: "/assets/portfolio/tickety/gallery-scan.png"
    alt: "Halaman scan QR code untuk check-in peserta"
    label: "Validasi tiket saat check-in"
```

---

## Sidebar Points

```yaml
sidebar_points:
  - title: "Tipe project:"
    description: "Web app event ticketing"
  - title: "Peran:"
    description: "Full-stack Laravel developer"
  - title: "Fitur utama:"
    description: "Event catalog, checkout, e-ticket PDF, QR scan, admin dashboard"
  - title: "Stack teknis:"
    description: "Laravel 10, MySQL, Blade, Tailwind CSS, Jetstream, DomPDF, QR Code"
  - title: "Arsitektur:"
    description: "Monolith Laravel dengan area publik dan admin"
```
