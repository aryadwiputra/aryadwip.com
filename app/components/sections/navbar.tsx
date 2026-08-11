import { Link, useLocation } from "react-router";
import { NAV_ITEMS } from "~/lib/portfolio-data";

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  // Anchor sections live on the home page; prefix with "/" when elsewhere.
  const anchorHref = (href: string) => (onHome ? href : `/${href}`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-tight">
          aryadwip.com
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} to={anchorHref(item.href)} className="font-medium hover:underline underline-offset-4">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/kontak"
          className="bg-dark text-primary px-5 py-3 font-semibold text-sm hover:opacity-90 transition-opacity hidden md:block"
        >
          Hubungi Saya
        </Link>
        <MobileMenu anchorHref={anchorHref} />
      </div>
    </nav>
  );
}

function MobileMenu({ anchorHref }: { anchorHref: (href: string) => string }) {
  return (
    <details className="md:hidden group relative">
      <summary className="list-none cursor-pointer p-2 -mr-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-2 bg-primary border-2 border-black shadow-lg w-48">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} to={anchorHref(item.href)} className="block px-4 py-3 font-medium border-b border-black/20 hover:bg-black/5">
            {item.label}
          </Link>
        ))}
        <Link to="/kontak" className="block px-4 py-3 font-semibold bg-dark text-primary text-center">
          Hubungi Saya
        </Link>
      </div>
    </details>
  );
}
