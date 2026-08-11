import { Link } from "react-router";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  crumb?: { label: string; href?: string };
};

export default function PageHero({ eyebrow, title, description, crumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 px-6 bg-primary border-b-2 border-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-7xl mx-auto space-y-5">
        {crumb && (
          <nav aria-label="Breadcrumb" className="font-mono text-sm">
            <Link to="/" className="hover:underline underline-offset-4">
              Beranda
            </Link>
            {" / "}
            {crumb.href ? (
              <Link to={crumb.href} className="hover:underline underline-offset-4">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-bold">{crumb.label}</span>
            )}
          </nav>
        )}
        <span className="inline-block bg-dark text-primary text-sm font-semibold px-3 py-1 font-mono">
          {"// "}
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
