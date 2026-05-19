export type SiteSection = "home" | "portfolio" | "articles" | "about" | "contact";

export const siteConfig = {
  name: "Arya Dwi Putra",
  description: "Portfolio website Arya Dwi Putra.",
} as const;

export const siteNavItems = [
  { key: "home", href: "/", label: "Beranda" },
  { key: "portfolio", href: "/portfolio", label: "Portfolio" },
  { key: "articles", href: "/artikel", label: "Artikel" },
  { key: "about", href: "/tentang", label: "Tentang" },
  { key: "contact", href: "/kontak", label: "Kontak" },
] as const;

export function getActiveSiteSection(pathname: string | null | undefined): SiteSection {
  if (!pathname || pathname === "/") {
    return "home";
  }

  if (pathname.startsWith("/portfolio")) {
    return "portfolio";
  }

  if (pathname.startsWith("/artikel")) {
    return "articles";
  }

  if (pathname.startsWith("/tentang")) {
    return "about";
  }

  if (pathname.startsWith("/kontak")) {
    return "contact";
  }

  return "home";
}
