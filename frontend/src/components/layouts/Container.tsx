import type { WithChildren } from "@/types";

type ContainerProps = WithChildren & {
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={className ? `mx-auto max-w-7xl px-6 ${className}` : "mx-auto max-w-7xl px-6"}>{children}</div>;
}
