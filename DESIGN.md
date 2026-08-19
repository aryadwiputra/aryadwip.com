# DESIGN.md — aryadwip.com v2

> Dokumen arah desain. Dibaca bersama `antislop.md` (filter) untuk setiap pekerjaan UI di project ini.
> Diputuskan bersama user pada 2026-08-12. Revisi hanya dengan persetujuan user.

## 1. Identitas & Positioning

**Siapa:** Arya Dwi Putra — Senior Laravel Developer, 6+ tahun, spesialis backend/arsitektur, pernah mengerjakan sistem skala nasional (contact center omnichannel BeaCukai, platform WhatsApp FIF Group), founder Marikoding.com.

**Cerita yang disampaikan:** *"Saya orang yang presisi, bekerja dengan dokumen yang rapi. Saya membangun sistem yang bisa dipercaya instansi dan korporasi."*

**Audiens utama:** klien instansi/korporasi, decision maker non-teknis hingga teknis, HR/recruiter. Mereka butuh: bukti, kejelasan, kepercayaan. Bukan gimmick.

## 2. Design Read & Dials

> *Reading this as: vendor qualification document untuk klien korporat, dalam bahasa visual Swiss-Editorial dengan tone kertas hangat, dial **ENERGY 1 / RHYTHM 2 / MOTION 1**.*

| Dial | Nilai | Arti |
|---|---|---|
| ENERGY | 1 (calm) | Tenang, percaya diri, tidak berteriak |
| RHYTHM | 2 (balanced) | Tiap section beda komposisi, tapi dalam satu sistem yang koheren |
| MOTION | 1 (hover only) | Hover + reveal halus sekali. Tidak ada animasi loop, marquee, atau float |

## 3. Prinsip Desain (dengan alasan tertulis, R-31)

1. **Tipografi adalah antarmuka utamanya** — bukan kartu, bukan shadow, bukan warna. Hierarki dibangun dari skala tipografi, bukan dari kotak berwarna.
2. **Setiap angka punya sumber** — statistik tidak pernah tampil tanpa anotasi asal datanya (R-17).
3. **Konten real, label jujur** — tidak ada yang dibuat-buat; section yang isinya bukan testimoni tidak diberi label "testimoni" (R-18, R-38).
4. **Whitespace adalah struktur** — ruang kosong memisahkan section, bukan sisa.
5. **Satu momen kontras per halaman** — section produk (Marikoding) boleh gelap sebagai satu-satunya aksen besar; sisanya tenang (zero accent = steril, accent di mana-mana = slop).

## 4. Palet (R-29: 2-3 core + 1 aksen, semua verifikasi kontras)

| Token | Hex | Peran | Kontras vs base |
|---|---|---|---|
| `--paper` | `#FAF9F6` | Base kertas hangat | — |
| `--ink` | `#1C2421` | Teks utama, hijau kehitaman | ~13.5:1 ✅ |
| `--teal` | `#0F766E` | Aksen utama (link, garis, highlight) | ~5.2:1 ✅ |
| `--terracotta` | `#9A3412` | Micro-aksen, maks 3 momen per halaman | ~7.0:1 ✅ |

- Semua pairing **pass WCAG AA** (dihitung, bukan ditebak — R-25).
- Alasan: hijau tua = pertumbuhan & kepercayaan, teknis tanpa "corporate blue" klise. Terracotta = identitas Indonesia yang hangat, dipakai hemat.
- Dilarang: kuning `#ffe17c`, pink `#ff90e8`, biru `#8ec5fc` — warna neobrutalism lama (kecuali sebagai foto/gambar, bukan UI).

## 5. Tipografi — IBM Plex (self-hosted via Fontsource)

| Peran | Font | Alasan |
|---|---|---|
| Display / headline | **IBM Plex Serif** 600/700 | Asosiasi institusional (IBM), tegas tapi hangat; identitas |
| Body | **IBM Plex Sans** 400/500 | Readable, netral, profesional |
| Data teknis (anotasi) | **IBM Plex Mono** 400 | Stack, versi, periode, path — mono di sini karena isinya kode/fakta, bukan estetika (R-06 lolos) |

- Skala: `h1 = clamp(2.5rem, 5vw, 3.75rem)` serif; body `1rem/1.7`; anotasi mono `0.8125rem`.
- Section label: **bukan** uppercase + tracking ekstrem (R-06 flag) — pakai nomor mono `01` + sans medium dengan tracking moderat `0.05em`.

## 6. Identity Motif (R-20 — "kalau logo diganti, tetap terasa milik Arya")

Dua motif yang diulang konsisten, keduanya berasal dari **cara developer bekerja**:

1. **Section numbering ala dokumen teknis** — `01 · PROFIL`, `02 · KEAHLIAN` dengan garis tipis horizontal. Seperti indeks laporan resmi.
2. **Margin annotation ala code comment** — catatan mono kecil di samping data/fakta, persis `// komentar` di kode:
   - Statistik "6+ tahun" → anotasi `// 2019–sekarang · Laravel 5→13`
   - Proyek → `// 2026 · 6 modul · Laravel 13 + React 19`
   - Ini sangat "Arya" (developer) dan tidak akan ditemukan di portfolio AI generik.

## 7. Layout

- Container `max-w-7xl`, grid 12 kolom, whitespace section `py-24` (desktop) / `py-16` (mobile).
- Border halus `1px ink/15` — pengganti border hitam 2px tebal.
- **Tanpa shadow** (R-12): elevation ditunjukkan lewat tipografi & spacing, bukan kotak melayang.
- Radius: sangat kecil (`2px`) atau nol — konsisten, bukan pill (R-11).

## 8. Komponen per Section (perubahan dari neobrutalism)

| Section | Sekarang (neobrutalism) | Menjadi (editorial) |
|---|---|---|
| Hero | Card miring, warna cerah, badge mono | Headline serif besar kiri + anotasi teknis kanan + foto asli (border halus, caption mono). Tanpa card, tanpa rotasi |
| Stats | 3 kartu berwarna | Angka serif besar + label + anotasi sumber, tanpa kartu |
| Client logos | Marquee jalan + "Dipercaya oleh instansi" | Grid tenang + nama real (LPSK, Wifiku, Citanusa, Taruna Insani, HATTI) + deskripsi singkat proyeknya |
| Keahlian | 6 kartu identik berwarna | Grid asimetris: nomor + judul + deskripsi, tanpa ikon kartu seragam (R-14) |
| How I Work | 4 kartu step | Proses vertikal bergaris dengan nomor dokumen (bukan 3-step template, R-05) |
| Proyek (bento) | Kartu miring, warna flat | Grid asimetris editorial: screenshot besar + meta mono, tanpa rotasi/shadow |
| Prinsip Kerja | Label "Testimoni" | **Label diganti "Prinsip Kerja"** — isinya memang prinsip, bukan review klien (jujur, R-18) |
| Kontak | Form dengan shadow kasar | Form minimal: border halus, fokus teal jelas, tanpa dekorasi |
| Footer | 4 kolom template | Blok identitas + 2 kolom (Navigasi, Kontak) + link Produk Marikoding (R-05) |
| Product showcase | Section gelap | **Tetap gelap (ink)** — satu-satunya momen kontras, sebagai puncak cerita |

## 9. Motion (MOTION 1)

- Hover: underline muncul, warna link berubah, kartu proyek border menguat (bukan lift + shadow).
- Scroll reveal: opacity 0→1 halus tanpa translate besar, sekali saja.
- `prefers-reduced-motion: reduce` → semua animasi mati (sudah ada, dipertahankan).
- Dilarang: float loop (tech ring), marquee, animasi terus-menerus.

## 10. Aksesibilitas (hard requirement)

- Semua pairing teks pass WCAG AA (tabel palet di atas).
- Focus indicator: outline teal `2px` + offset, terlihat jelas (R-32).
- Tap target ≥ 44px di mobile (R-03).
- Keyboard navigable penuh; mobile menu tetap `<details>` native.

## 11. Do / Don't

**DO:** whitespace besar · hierarki tipografi · anotasi mono · garis tipis · foto & screenshot asli · satu momen kontras (produk) · nomor section.

**DON'T:** shadow tebal · border hitam 2px · rotasi card · warna kuning/pink/blue · emoji di UI · arrow `→` di semua tombol (hanya yang benar-benar butuh arah, R-08) · marquee · grid background · pill radius · uppercase tracking ekstrem · testimoni palsu.

## 12. Data Real yang Dipertahankan (keputusan user)

Seluruh isi `portfolio-data.ts` tetap: SITE, STATS, NAV_ITEMS, CLIENTS, FEATURES, HOW_I_WORK, SERVICES, PROJECTS (6 proyek + Marikoding), TESTIMONIALS (relabel jadi "Prinsip Kerja"), EXPERIENCE, FAQS, ARTICLES. **Hanya presentasi yang berubah, bukan datanya.** Struktur route, meta, JSON-LD, sitemap, SEO, cross-link Marikoding — dipertahankan.

## 13. Catatan Jujur

1. **"Testimoni" → "Prinsip Kerja"**: bukan downgrade, ini anti-slop yang benar (R-18). Isinya memang bukan review klien. Jika nanti ada testimoni klien asli, tambahkan sebagai testimoni sungguhan.
2. **Hero bergantung pada foto**: foto sekarang (`arya-dwi-putra.png`, 517KB) dipakai sesuai keputusan user; akan dioptimasi kompresinya tanpa mengubah isi.
