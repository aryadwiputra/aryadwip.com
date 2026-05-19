# Phase D1 — UI Primitives

Dokumen ini membahas ekstraksi komponen UI primitive reusable setelah route, sections, dan domain utama mulai stabil.

## 1. Objective

Tujuan utama:

- mengurangi pengulangan pola UI
- menjaga konsistensi visual
- menyiapkan foundation UI yang reusable tanpa over-abstraction

## 2. Scope

### Included

- ekstraksi komponen primitive yang benar-benar berulang
- pembentukan folder `components/ui/`

### Excluded

- design system besar
- token theming kompleks
- perubahan visual bebas

## 3. Dependency

- struktur sections dan layout utama harus relatif stabil

## 4. Target Files

- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/SectionTitle.tsx`

## 5. Candidate Extraction Rules

Hanya ekstrak jika:

- dipakai berulang nyata
- API komponennya masuk akal
- tidak membuat styling jadi lebih sulit dibaca

Jangan ekstrak jika:

- cuma dipakai sekali
- variasinya terlalu banyak
- justru menambah kebingungan

## 6. Work Breakdown

- [ ] audit pola tombol berulang
- [ ] audit pola card berulang
- [ ] audit pola badge berulang
- [ ] audit pola title section berulang
- [ ] bentuk primitive minimum
- [ ] replace usage secara bertahap

## 7. Risks & Watchouts

- over-abstraction
- prop API terlalu rumit
- visual berubah karena class utility tidak identik

## 8. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] visual compare section penting

## 9. Acceptance Criteria

- [ ] primitive dipakai untuk pola yang benar-benar berulang
- [ ] code lebih konsisten
- [ ] tidak ada visual regression

## 10. Recommended Next Step

- `Phase D2` — Client/Server Boundary Cleanup

