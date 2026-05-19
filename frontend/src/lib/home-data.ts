import type { ComponentType, SVGProps } from "react";
import { Network } from "iconoir-react";

export const clientLogos = [
  { src: "/assets/logos/clients/citanusa.png", alt: "Citanusa" },
  { src: "/assets/logos/clients/htti-logo.png", alt: "HTTI" },
  { src: "/assets/logos/clients/logo-lpsk.png", alt: "LPSK" },
  { src: "/assets/logos/clients/lsp-geoteknik.png", alt: "LSP Geoteknik" },
  { src: "/assets/logos/clients/tibs-logo.png", alt: "TIBS" },
  { src: "/assets/logos/clients/wifiku-logo.png", alt: "Wifiku" },
] as const;

export type StackItem = {
  label: string;
  category: string;
  cardClassName: string;
  badgeClassName: string;
  mode: "logo" | "icon";
  logoSrc?: string;
  logoAlt?: string;
  logoClassName?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export const stackItems: StackItem[] = [
  {
    label: "Laravel",
    category: "Inti",
    cardClassName:
      "bg-accent-purple/5 border border-accent-purple/20 hover:shadow-soft",
    badgeClassName:
      "text-accent-purple bg-white border border-accent-purple/10",
    mode: "logo",
    logoSrc: "/assets/icons/tech/laravel.svg",
    logoAlt: "Laravel",
    logoClassName: "object-contain",
  },
  {
    label: "PHP",
    category: "Runtime",
    cardClassName:
      "bg-accent-pink/5 border border-accent-pink/20 hover:shadow-soft",
    badgeClassName: "text-accent-pink bg-white border border-accent-pink/10",
    mode: "logo",
    logoSrc: "/assets/icons/tech/php.svg",
    logoAlt: "PHP",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "MySQL",
    category: "Database",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/mysql.svg",
    logoAlt: "MySQL",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "PostgreSQL",
    category: "Database",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/postgresql.svg",
    logoAlt: "PostgreSQL",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "Redis",
    category: "Cache",
    cardClassName:
      "bg-accent-orange/5 border border-accent-orange/20 hover:shadow-soft",
    badgeClassName:
      "text-accent-orange bg-white border border-accent-orange/10",
    mode: "logo",
    logoSrc: "/assets/icons/tech/redis.svg",
    logoAlt: "Redis",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "REST API",
    category: "API",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "icon",
    icon: Network,
  },
  {
    label: "Tailwind CSS",
    category: "UI",
    cardClassName:
      "bg-accent-blue/5 border border-accent-blue/20 hover:shadow-soft",
    badgeClassName: "text-accent-blue bg-white border border-accent-blue/10",
    mode: "logo",
    logoSrc: "/assets/icons/tech/tailwindcss.svg",
    logoAlt: "Tailwind CSS",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "ReactJS",
    category: "UI",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/react.svg",
    logoAlt: "React",
    logoClassName: "object-contain",
  },
  {
    label: "Vue.js",
    category: "UI",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/vue.svg",
    logoAlt: "Vue.js",
    logoClassName: "object-contain",
  },
  {
    label: "Docker",
    category: "Ops",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/docker.svg",
    logoAlt: "Docker",
    logoClassName: "object-contain",
  },
  {
    label: "Nginx",
    category: "Ops",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/nginx.svg",
    logoAlt: "Nginx",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "Node.js",
    category: "JS",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/nodejs.svg",
    logoAlt: "Node.js",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
  {
    label: "Git",
    category: "VCS",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/git.svg",
    logoAlt: "Git",
    logoClassName: "object-contain",
  },
  {
    label: "Bootstrap",
    category: "UI",
    cardClassName:
      "bg-white border border-brand-border hover:border-brand-dark hover:shadow-soft",
    badgeClassName: "text-brand-muted bg-gray-100 border border-brand-border",
    mode: "logo",
    logoSrc: "/assets/icons/tech/bootstrap.svg",
    logoAlt: "Bootstrap",
    logoClassName: "object-contain opacity-80 brightness-0 saturate-0",
  },
];
