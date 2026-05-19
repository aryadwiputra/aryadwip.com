import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn("space-y-3", align === "center" ? "mx-auto max-w-2xl text-center" : "", className)}>
      {eyebrow ? eyebrow : null}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-dark">{title}</h2>
      {description ? <p className="text-sm text-brand-muted md:text-base">{description}</p> : null}
    </div>
  );
}
