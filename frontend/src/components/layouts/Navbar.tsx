"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/ui/Button";
import { getActiveSiteSection, siteNavItems } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const active = getActiveSiteSection(pathname);

  return (
    <header className="sticky top-0 z-50 hidden w-full border-b border-brand-border bg-white/90 backdrop-blur-md md:block">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark transition-opacity hover:opacity-80">
          arya<span className="text-accent-purple">dwiputra</span>
        </Link>
        <nav className="flex items-center space-x-8">
          {siteNavItems.map((item) => {
            const isActive = item.key === active;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={
                  isActive
                    ? "text-sm font-medium text-brand-dark transition-colors hover:text-accent-purple"
                    : "text-sm font-medium text-brand-muted transition-colors hover:text-brand-dark"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button href="/contact" size="sm" className="px-4 py-2 text-sm">
          Yuk Ngobrol
        </Button>
      </Container>
    </header>
  );
}
