import { ActiveSiteNav } from "@/components/layouts/ActiveSiteNav";

export function MobileBottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-border bg-white/95 px-4 py-2.5 shadow-[0_-2px_8px_rgba(0,0,0,0.025)] md:hidden safe-area-pb">
      <ActiveSiteNav variant="mobile" />
    </nav>
  );
}
