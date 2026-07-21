import { SITE, NAV_ITEMS } from "~/lib/portfolio-data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#hero" className="font-bold text-xl tracking-tight">
          aryadwip.com
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="font-medium hover:underline underline-offset-4">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${SITE.email}`}
          className="bg-dark text-primary px-5 py-3 font-semibold text-sm hover:opacity-90 transition-opacity hidden md:block"
        >
          Hubungi Saya
        </a>
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <details className="md:hidden group relative">
      <summary className="list-none cursor-pointer p-2 -mr-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-2 bg-primary border-2 border-black shadow-lg w-48">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="block px-4 py-3 font-medium border-b border-black/20 hover:bg-black/5">
            {item.label}
          </a>
        ))}
        <a href={`mailto:${SITE.email}`} className="block px-4 py-3 font-semibold bg-dark text-primary text-center">
          Hubungi Saya
        </a>
      </div>
    </details>
  );
}
