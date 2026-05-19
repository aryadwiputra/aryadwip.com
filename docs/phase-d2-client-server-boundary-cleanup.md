# Phase D2 — Client/Server Boundary Cleanup

Dokumen ini membahas audit dan pembersihan boundary Client Component vs Server Component agar arsitektur App Router lebih idiomatik.

## 1. Objective

Tujuan utama:

- mengecilkan area `use client`
- menurunkan markup statis ke server component
- menjaga interaksi hanya berada di client island kecil

## 2. Scope

### Included

- audit semua Client Component
- pemecahan file client besar
- pemindahan behavior kecil ke island terpisah

### Excluded

- backend integration besar
- data fetching dinamis eksternal kompleks

## 3. Dependency

- route/section/domain utama sudah stabil

## 4. Current Risk Areas

- portfolio listing filter
- artikel listing filter/search
- article detail progress/copy
- contact form feedback

## 5. Desired End State

- page route mayoritas server-first
- client component kecil dan spesifik
- tidak ada DOM imperative besar di page client monolitik

## 6. Work Breakdown

- [ ] audit semua `use client`
- [ ] identifikasi area yang bisa turun ke server
- [ ] pecah filter/search/progress/copy/form menjadi island kecil
- [ ] hilangkan branch hydration-risk
- [ ] audit `next/image fill` wrapper

## 7. Risks & Watchouts

- hydration mismatch
- props serializability
- accidental behavioral regression

## 8. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] browser console bebas hydration warning
- [ ] interaction test manual

## 9. Acceptance Criteria

- [ ] area `use client` menyusut
- [ ] interaksi tetap jalan
- [ ] tidak ada hydration warning baru

## 10. Recommended Next Step

- `Phase D3` — Styles & Assets Organization

