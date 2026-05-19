import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section" | "aside";
};

export function Card({ as = "div", className, ...rest }: CardProps) {
  const Component = as;

  return <Component className={cn("rounded-card border border-brand-border bg-white", className)} {...rest} />;
}
