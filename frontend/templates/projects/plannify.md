# Portfolio Content — Plannify

## Frontmatter

```yaml
title: "Plannify"
slug: "plannify"
summary: "Aplikasi manajemen tugas kolaboratif berbasis workspace untuk mengatur board, assignment, checklist, lampiran, dan komentar dalam satu alur kerja yang ringkas."
client_name: ""
client_website: ""
client_description: "Plannify adalah proyek mandiri yang dirancang sebagai task management app multi-user dengan fokus pada kolaborasi tim, visibilitas pekerjaan, dan pengalaman dashboard yang modern."
case_study_label: "Proyek Mandiri"
role: "Laravel / Full-Stack Developer"
tech_stack:
  - Laravel 11
  - Inertia.js
  - React
  - MySQL
  - Tailwind CSS
  - Radix UI
  - Chart.js
categories:
  - laravel
  - fullstack
  - dashboard
teaser_label: "Task Collaboration Platform"
featured_image: "/assets/portfolio/plannify/cover.png"
featured_image_alt: "Tampilan dashboard dan workspace board aplikasi Plannify"
demo_url: ""
repo_url: "https://github.com/aryadwiputra/Plannify"
start_date: "2025-05-26"
end_date: "2025-06-12"
is_featured: true
sort_order: 1
status: published
sidebar_title: "Konteks Implementasi"
sidebar_description: "Plannify dibangun sebagai aplikasi task management kolaboratif yang memadukan board per workspace, assignment lintas user, serta detail pekerjaan yang tetap ringan dipakai sehari-hari."
```

## Latar Belakang

Plannify dibuat untuk menjawab kebutuhan pengelolaan pekerjaan yang tidak berhenti di level to-do list pribadi. Banyak tim kecil membutuhkan ruang kerja bersama untuk memecah pekerjaan menjadi board, kartu tugas, checklist, dan penanggung jawab, tetapi tetap ingin alur yang sederhana seperti aplikasi produktivitas personal.

Project ini memosisikan **workspace** sebagai pusat kolaborasi. Setiap workspace dapat diatur sebagai **public** atau **private**, lalu diisi kumpulan card/task yang bisa dikelola oleh owner maupun anggota yang diundang. Dengan pendekatan ini, aplikasi cocok dipakai untuk koordinasi tim internal, side project, atau operasional harian yang perlu keterlihatan progres secara cepat.

## Tantangan Utama

Beberapa tantangan utama yang terlihat dari implementasi proyek ini adalah:

- Menjaga alur kolaborasi tetap sederhana, tetapi tetap memiliki pembatasan akses yang jelas antara owner, member, dan admin.
- Menyusun relasi data yang cukup fleksibel untuk mendukung keanggotaan di level **workspace** dan **card** tanpa membuat struktur tabel terlalu rumit.
- Membuat board task yang nyaman dipakai, termasuk **status-based workflow**, **reorder task**, filter, search, serta detail card yang lebih kaya.
- Menyatukan pengalaman dashboard, workspace board, my tasks, user management, attachment, checklist, dan komentar dalam satu stack Laravel + Inertia + React.
- Menjaga aplikasi tetap mudah dikembangkan, terutama saat fitur bertambah seperti komentar card, upload lampiran, perbaikan akses workspace, dan penyempurnaan UI/UX.

## Solusi yang Diterapkan

Pendekatan yang dipilih adalah membangun aplikasi full-stack monolit modern dengan **Laravel 11** di backend dan **Inertia.js + React** di frontend. Struktur ini memberi kecepatan pengembangan untuk aplikasi produktivitas internal tanpa harus memisahkan API dan SPA ke dua codebase yang berbeda.

Solusi utamanya mencakup:

- **Workspace-centric architecture**: workspace menjadi root konteks data, lalu card berada di dalam workspace, sementara task checklist, attachment, comment, dan membership menempel pada card.
- **Membership polymorphic model**: tabel `members` memakai relasi morph sehingga konsep anggota dapat dipakai ulang untuk workspace maupun card.
- **Role dan authorization berlapis**: akses admin dikelola lewat `spatie/laravel-permission`, sedangkan akses operasional harian dijaga lewat policy dan gate khusus seperti `update_workspace`, `member_card`, dan `task_card`.
- **Board workflow berbasis status**: card memakai enum status `Todo`, `In Progress`, `On Review`, dan `Done`, sehingga progres pekerjaan bisa divisualisasikan sebagai board yang jelas.
- **Card detail sebagai pusat eksekusi**: checklist bertingkat, assignee, attachment, dan comment ditempatkan di detail card agar eksekusi tugas tidak terpecah ke banyak halaman.

## Implementasi Teknis

### Backend

Backend dibangun dengan Laravel 11 dan memanfaatkan kombinasi **controller + request validation + policy/gate + API resource** untuk menjaga kode tetap terstruktur.

Komponen penting yang terlihat dari repo:

- **Model inti**: `Workspace`, `Card`, `Task`, `Comment`, `Attachment`, `Member`, dan `User`.
- **Enum domain**: `WorkspaceVisibility`, `CardStatus`, dan `CardPriority` untuk menjaga konsistensi nilai status/priority.
- **Relasi data**:
  - workspace memiliki banyak card
  - card memiliki task, attachment, comment, dan member
  - task mendukung parent-child untuk checklist bertingkat
  - member memakai relasi polymorphic untuk workspace maupun card
- **Authorization**:
  - workspace hanya bisa diubah/dihapus owner
  - card hanya bisa diedit owner
  - task, attachment, dan comment hanya bisa diakses user yang memang menjadi member card
- **Resource layer**: resource seperti `WorkspaceResource`, `CardResource`, `TaskResource`, `CommentResource`, dan `MyTaskResource` dipakai untuk merapikan payload ke frontend Inertia.
- **Observer**: terdapat observer untuk workspace dan card, menandakan ada lifecycle logic yang dipisahkan dari controller.
- **Upload handling**: trait `HasFile` dipakai untuk upload dan delete file attachment maupun aset lain agar logikanya reusable.

Dari sisi database, struktur tabel cukup jelas untuk aplikasi kolaborasi:

- `workspaces` menyimpan identitas, slug, cover, logo, dan visibility
- `cards` menyimpan judul, deskripsi, deadline, order, status, dan priority
- `tasks` menyimpan checklist dengan dukungan nested item melalui `parent_id`
- `attachments` mendukung file maupun link
- `comments` menambahkan diskusi kontekstual langsung di card
- `members` menjadi tabel penghubung fleksibel untuk membership
- tabel permission dari Spatie dipakai untuk role `admin` dan `member`

### Frontend

Frontend memakai **React + Inertia.js** sehingga halaman tetap terasa seperti SPA, tetapi server-side routing dan data flow Laravel tetap sederhana.

Beberapa implementasi penting di sisi UI:

- **Dashboard** menampilkan ringkasan jumlah workspace, task, task selesai, serta productivity chart 6 bulan menggunakan `Chart.js`.
- **Workspace board** menjadi area kerja utama untuk melihat card berdasarkan status, melakukan pencarian, filter priority, filter assignee, dan membuka detail card.
- **Card detail workflow** memusatkan informasi penting seperti metadata card, checklist task, assignee, attachment, dan comments dalam satu alur kerja yang lebih cepat.
- **My Tasks page** menampilkan seluruh card yang di-assign ke user, lengkap dengan search, sorting, dan pagination.
- **User management** tersedia khusus admin dan sudah diarahkan ke pola CRUD yang lebih ringkas.
- **Theme support** menggunakan `next-themes` agar aplikasi mendukung mode terang/gelap.
- **Component approach** memanfaatkan Radix UI, utility components, dan layout terpisah agar antarmuka tetap modular.

Dari dependency frontend, terlihat fokus pada pengalaman penggunaan modern:

- `@dnd-kit/*` untuk interaksi drag-and-drop/reorder
- `@radix-ui/*` untuk primitive UI yang accessible
- `chart.js` dan `react-chartjs-2` untuk visualisasi produktivitas
- `sonner` untuk feedback/notification
- `ziggy-js` untuk jembatan route Laravel ke frontend

### Integrasi

Walaupun proyek ini bukan aplikasi integrasi-heavy, ada beberapa integrasi teknis penting:

- **Inertia.js** sebagai jembatan backend Laravel dan frontend React
- **Ziggy** untuk konsumsi route Laravel di React
- **Spatie Laravel Permission** untuk pengelolaan role admin/member
- **Vite + SSR build** untuk pipeline asset modern
- **File storage** Laravel untuk attachment dan aset upload

Dengan kombinasi ini, aplikasi tetap ringan secara arsitektur tetapi sudah punya fondasi yang bagus untuk dikembangkan menjadi produk yang lebih besar.

## Hasil dan Dampak

Hasil implementasi Plannify menunjukkan sebuah aplikasi task management yang sudah memiliki fondasi produk yang nyata, bukan sekadar CRUD sederhana.

Dampak yang paling menonjol:

- Pengguna dapat mengelola pekerjaan dalam konteks **workspace kolaboratif**, bukan daftar tugas yang terpisah-pisah.
- Progres card lebih mudah dipantau melalui workflow status yang jelas.
- Assignment tugas menjadi lebih rapi karena member bisa ditambahkan di level workspace maupun card.
- Eksekusi pekerjaan lebih praktis karena checklist, attachment, dan comment tersedia langsung di detail card.
- Dashboard memberi gambaran cepat tentang beban kerja, task aktif, dan tren produktivitas.
- Struktur kode cukup siap untuk dikembangkan lebih lanjut karena domain utama sudah dipisah dengan enum, policy, request, resource, dan komponen UI modular.

## Catatan Tambahan

Beberapa hal yang layak dicatat dari sudut pandang engineering:

- Proyek menggunakan **Laravel Breeze** sebagai fondasi autentikasi, lalu dikembangkan menjadi aplikasi kolaboratif yang lebih kaya fitur.
- Ada proses iterasi UI/UX yang cukup aktif, terlihat dari histori commit yang mencakup perombakan board workspace, detail card workflow, modal-first user CRUD, serta perbaikan theme persistence.
- Fitur komentar card ditambahkan belakangan, menandakan arsitektur masih cukup fleksibel untuk menerima pengembangan lanjutan.
- Scope berikutnya yang potensial untuk produk ini antara lain notifikasi real-time, activity log, due date reminder, dan reporting yang lebih dalam.

---

## Gallery

```yaml
gallery:
  - src: "/assets/portfolio/plannify/gallery-01.png"
    alt: "Dashboard aplikasi Plannify dengan statistik dan grafik produktivitas"
    label: "Dashboard ringkasan dan productivity chart"
  - src: "/assets/portfolio/plannify/gallery-02.png"
    alt: "Workspace board Plannify dengan daftar card per status"
    label: "Board workspace dengan filter dan grouping status"
  - src: "/assets/portfolio/plannify/gallery-03.png"
    alt: "Detail card Plannify berisi checklist, assignee, lampiran, dan komentar"
    label: "Detail card sebagai pusat eksekusi tugas"
```

---

## Sidebar Points

```yaml
sidebar_points:
  - title: "Jenis proyek:"
    description: "Aplikasi manajemen tugas kolaboratif berbasis workspace"
  - title: "Periode:"
    description: "Mei 2025 — Juni 2025"
  - title: "Stack teknis:"
    description: "Laravel 11, Inertia.js, React, MySQL, Tailwind CSS"
  - title: "Fitur kunci:"
    description: "Workspace, board task, assignee, checklist bertingkat, attachment, comments, dashboard"
```
