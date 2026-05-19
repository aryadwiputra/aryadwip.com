# Phase D5 — Final Cleanup

Dokumen ini membahas tahap akhir setelah seluruh struktur besar selesai dirapikan.

## 1. Objective

Tujuan utama:

- membersihkan file legacy
- menghapus duplikasi
- memastikan codebase akhir benar-benar siap dipakai dan dikembangkan

## 2. Scope

### Included

- hapus file/folder lama yang obsolete
- rapikan naming sisa
- rapikan import tidak terpakai
- audit consistency akhir

### Excluded

- feature baru
- redesign baru

## 3. Dependency

- semua phase sebelumnya selesai

## 4. Cleanup Targets

- route lama yang sudah diganti
- folder lama yang kosong/obsolete
- komponen duplikat
- import path/alias lama
- file sementara dokumentasi implementasi internal bila sudah tidak diperlukan

## 5. Work Breakdown

- [ ] hapus file route lama
- [ ] hapus folder legacy yang tidak terpakai
- [ ] hapus komponen duplikat
- [ ] rapikan naming campur bahasa yang tersisa
- [ ] rapikan import tidak terpakai
- [ ] audit final structure
- [ ] update README singkat bila perlu

## 6. Risks & Watchouts

- menghapus file yang ternyata masih terpakai
- import hidden dependency yang tertinggal
- mismatch path asset atau style

## 7. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] audit tree akhir
- [ ] smoke test route utama

## 8. Acceptance Criteria

- [ ] tidak ada file legacy yang membingungkan
- [ ] struktur akhir sesuai target besar
- [ ] codebase lebih mudah dipahami developer baru
- [ ] app tetap stabil

## 9. Recommended Next Step

- dokumentasikan struktur akhir dalam README atau engineering notes

