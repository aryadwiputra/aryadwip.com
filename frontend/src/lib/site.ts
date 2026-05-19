export type SiteSection = "home" | "portfolio" | "articles" | "about" | "contact";

export const siteConfig = {
  name: "Arya Dwi Putra",
  description: "Portfolio website Arya Dwi Putra.",
} as const;

export const siteNavItems = [
  { key: "home", href: "/", label: "Beranda" },
  { key: "portfolio", href: "/portfolio", label: "Portfolio" },
  { key: "articles", href: "/articles", label: "Articles" },
  { key: "about", href: "/about", label: "About" },
  { key: "contact", href: "/contact", label: "Contact" },
] as const;

export function getActiveSiteSection(pathname: string | null | undefined): SiteSection {
  if (!pathname || pathname === "/") {
    return "home";
  }

  if (pathname.startsWith("/portfolio")) {
    return "portfolio";
  }

  if (pathname.startsWith("/articles")) {
    return "articles";
  }

  if (pathname.startsWith("/about")) {
    return "about";
  }

  if (pathname.startsWith("/contact")) {
    return "contact";
  }

  return "home";
}
