import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButtonProps = SharedProps & ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type ButtonAsLinkProps = SharedProps & Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-dark text-white shadow-soft hover:bg-opacity-90",
  secondary: "bg-white text-brand-dark shadow-soft hover:bg-gray-50",
  outline: "border border-brand-border bg-white text-brand-dark hover:bg-gray-50",
  ghost: "bg-transparent text-brand-dark hover:bg-gray-50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs font-semibold",
  md: "px-5 py-3 text-sm font-medium",
  lg: "h-12 px-6 text-sm font-semibold",
};

function getButtonClassName({
  className,
  variant = "primary",
  size = "md",
}: Pick<SharedProps, "className" | "variant" | "size">) {
  return cn(
    "inline-flex items-center justify-center rounded-button transition-all",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const { children, className, variant, size, href, ...rest } = props;

    return (
      <Link href={href} className={getButtonClassName({ className, variant, size })} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  const { children, className, variant, size, ...rest } = buttonProps;
  const type = buttonProps.type ?? "button";

  return (
    <button type={type} className={getButtonClassName({ className, variant, size })} {...rest}>
      {children}
    </button>
  );
}
