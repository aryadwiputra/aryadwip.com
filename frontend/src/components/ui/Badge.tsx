import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  dotClassName?: string;
  withDot?: boolean;
};

export function Badge({ className, dotClassName, withDot = false, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-widest",
        className,
      )}
      {...rest}
    >
      {withDot ? <span className={cn("h-1.5 w-1.5 rounded-full bg-current", dotClassName)}></span> : null}
      {children}
    </span>
  );
}
