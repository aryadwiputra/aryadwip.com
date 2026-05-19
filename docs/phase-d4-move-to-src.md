# Phase D4 — Move to `src/`

Dokumen ini membahas pemindahan source tree ke bawah folder `src/` setelah struktur arsitektur utama stabil.

## 1. Objective

Tujuan utama:

- menyesuaikan codebase ke bentuk final target
- menjadikan source tree lebih rapi dan terisolasi

## 2. Scope

### Included

- pemindahan folder source utama ke `src/`
- update alias path/import
- validasi seluruh app tetap jalan

### Excluded

- perubahan visual
- perubahan logic produk

## 3. Dependency

- struktur akhir `app`, `components`, `features`, `lib`, `hooks`, `types`, `styles` sudah relatif stabil

## 4. Move Plan

Target:

- `app` → `src/app`
- `components` → `src/components`
- `features` → `src/features`
- `lib` → `src/lib`
- `hooks` → `src/hooks`
- `types` → `src/types`
- `styles` → `src/styles`

## 5. Config Updates

Checklist:

- [ ] update `tsconfig.json` alias path
- [ ] pastikan `@/` resolve ke root source final
- [ ] cek Next resolve `src/app`

## 6. Risks & Watchouts

- import path patah
- alias config salah
- CSS import path berubah

## 7. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] smoke test semua route utama

## 8. Acceptance Criteria

- [ ] seluruh source utama berada di `src/`
- [ ] import alias tetap bersih
- [ ] app tetap buildable dan visual tetap aman

## 9. Recommended Next Step

- `Phase D5` — Final Cleanup

