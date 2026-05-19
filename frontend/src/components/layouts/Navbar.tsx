import Link from "next/link";

import { ActiveSiteNav } from "@/components/layouts/ActiveSiteNav";
import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 hidden w-full border-b border-brand-border bg-white/95 md:block lg:bg-white/90 lg:backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight text-brand-dark transition-opacity hover:opacity-80">
          arya<span className="text-accent-purple">dwiputra</span>
        </Link>
        <ActiveSiteNav variant="desktop" />
        <Button href="/contact" size="sm" className="px-4 py-2 text-sm">
          Yuk Ngobrol
        </Button>
      </Container>
    </header>
  );
}
