import Link from "next/link";

import { Container } from "@/components/layouts/Container";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white py-12 md:py-16">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="space-y-4 md:col-span-4">
          <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark">
            arya<span className="text-accent-purple">dwiputra</span>
          </Link>
          <p className="max-w-xs text-xs leading-relaxed text-brand-muted">
            Senior Laravel Engineer yang berfokus membangun produk digital berkualitas tinggi berbasis arsitektur server-side handal dan antarmuka interaktif modern.
          </p>
        </div>
        <div className="space-y-3 md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Navigasi</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="text-brand-muted transition-colors hover:text-brand-dark">Beranda</Link></li>
            <li><Link href="/portfolio" className="text-brand-muted transition-colors hover:text-brand-dark">Portfolio</Link></li>
            <li><Link href="/artikel" className="text-brand-muted transition-colors hover:text-brand-dark">Artikel</Link></li>
            <li><Link href="/tentang" className="text-brand-muted transition-colors hover:text-brand-dark">Tentang</Link></li>
          </ul>
        </div>
        <div className="space-y-3 md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Layanan</h4>
          <ul className="space-y-2 text-xs text-brand-muted">
            <li>Backend API Development</li>
            <li>Rekayasa Database & Profiling</li>
            <li>Custom System Integration</li>
            <li>Fullstack App Architecture</li>
          </ul>
        </div>
        <div className="space-y-3 md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Terhubung</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="https://github.com" target="_blank" rel="noopener" className="inline-flex items-center text-brand-muted transition-colors hover:text-brand-dark">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener" className="inline-flex items-center text-brand-muted transition-colors hover:text-brand-dark">LinkedIn</a></li>
            <li><a href="mailto:hello@aryadwiputra.com" className="text-brand-muted transition-colors hover:text-brand-dark">hello@aryadwiputra.com</a></li>
          </ul>
        </div>
      </Container>
      <Container className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-6 text-[11px] text-brand-muted sm:flex-row">
        <p>&copy; 2026 Arya Dwi Putra. All rights reserved.</p>
        <p className="text-gray-400">Dirancang dengan pendekatan visual modern yang tetap simpel dan nyaman dibaca.</p>
      </Container>
    </footer>
  );
}
