import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { navItems } from "@/lib/site-data";

function Brand() {
  return (
    <Link href="/" className="text-base font-semibold tracking-tight text-[var(--ink)]">
      arya<span className="text-[var(--accent-purple)]">dwiputra</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:rgba(255,255,255,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="rounded-[var(--radius-sm)] bg-[var(--ink)] px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:opacity-90">
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
}

export function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-white px-4 py-2 md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-around">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-[10px] font-medium tracking-wide text-[var(--muted)] transition hover:text-[var(--ink)]">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white py-12">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_repeat(3,1fr)] md:px-10">
        <div className="space-y-4">
          <Brand />
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            Senior Laravel Engineer yang berfokus membangun produk digital berkualitas tinggi dengan arsitektur server-side yang andal.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">Navigation</h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="transition hover:text-[var(--ink)]">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">Services</h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <p>Backend API Development</p>
            <p>Database Engineering & Profiling</p>
            <p>Custom System Integration</p>
            <p>Fullstack App Architecture</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">Connect</h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-[var(--ink)]">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-[var(--ink)]">
              LinkedIn
            </a>
            <a href="mailto:hello@aryadwiputra.com" className="transition hover:text-[var(--ink)]">
              hello@aryadwiputra.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}

export function PortraitCard() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-soft)] shadow-[var(--shadow-soft)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(155,92,255,0.25),_transparent_48%),radial-gradient(circle_at_bottom_right,_rgba(74,144,226,0.2),_transparent_36%)]" />
      <div className="relative flex h-full items-end justify-center p-6">
        <Image
          src="/images/arya-dwi-putra.png"
          alt="Arya Dwi Putra"
          width={640}
          height={800}
          className="h-full w-full object-cover object-top grayscale-[10%]"
          priority
        />
      </div>
    </div>
  );
}
