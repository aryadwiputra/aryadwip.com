import Link from "next/link";
import type { ReactNode } from "react";

export function SectionIntro({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-medium tracking-[0.18em] text-[var(--muted)] uppercase">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">{title}</h2>
        <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">{description}</p>
      </div>
      {action}
    </div>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--ink)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition hover:opacity-90">
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--surface-soft)]">
      {children}
    </Link>
  );
}
