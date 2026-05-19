# Phase D3 — Styles & Assets Organization

Dokumen ini membahas perapihan style global dan organisasi asset agar project lebih mudah dirawat dalam jangka panjang.

## 1. Objective

Tujuan utama:

- memisahkan animasi reusable dari global CSS utama
- merapikan organisasi asset
- mengurangi kekacauan pencarian style dan image/icon/logo

## 2. Scope

### Included

- `styles/animations.css`
- audit `globals.css`
- audit asset folder

### Excluded

- redesign visual
- token theming besar

## 3. Dependency

- route/component structure sudah stabil

## 4. Target Structure

```txt
src/
├─ styles/
│  └─ animations.css
└─ assets/
   ├─ images/
   ├─ icons/
   └─ logos/
```

Catatan:

- untuk runtime Next.js, aset yang butuh akses publik bisa tetap diserve dari `public/`
- organisasi source harus mempertimbangkan praktik tersebut

## 5. Work Breakdown

- [ ] audit animasi di `globals.css`
- [ ] pindahkan animasi reusable ke `styles/animations.css`
- [ ] audit naming asset
- [ ] kelompokkan images/icons/logos
- [ ] pastikan path asset tetap aman

## 6. Risks & Watchouts

- asset path broken
- CSS import order berubah
- class animation hilang

## 7. Validation Plan

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] visual check animasi
- [ ] visual check asset/logo/image

## 8. Acceptance Criteria

- [ ] animasi reusable tidak bercampur liar di globals
- [ ] asset lebih mudah dicari
- [ ] tidak ada asset path rusak

## 9. Recommended Next Step

- `Phase D4` — Move to `src/`

