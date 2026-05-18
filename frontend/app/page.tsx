import Link from "next/link";

import { PortraitCard, SiteShell } from "@/components/site-shell";
import { PrimaryLink, SectionIntro, SecondaryLink } from "@/components/sections";
import { featuredArticles, portfolioItems, stackItems, workSteps } from "@/lib/site-data";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-green)]" />
              Available for remote work
            </div>
            <div className="space-y-6">
              <p className="text-base font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Senior Laravel Engineer</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[var(--ink)] md:text-6xl lg:text-7xl">
                I build scalable web apps, clean backend systems, and business-ready digital products.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Spesialis dalam merancang arsitektur MVC dan REST API menggunakan ekosistem Laravel modern, lengkap dengan dashboard admin untuk mengelola konten dan operasi harian.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <PrimaryLink href="/portfolio">View Portfolio</PrimaryLink>
              <SecondaryLink href="/contact">Contact Me</SecondaryLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["6+ Years", "Experience"],
                ["Laravel", "Specialist"],
                ["100%", "Fullstack Delivery"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
                  <p className="text-2xl font-semibold text-[var(--ink)]">{value}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <PortraitCard />
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8 text-sm font-medium tracking-[0.18em] text-[var(--muted)] uppercase md:px-10">
          {["Datakelola", "Komodo Voyage", "Nexus Tech", "Vertex Indo", "Amarta Labs", "Stellar Digital"].map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <SectionIntro
            eyebrow="Ecosystem & Stack"
            title="The toolkit behind robust platforms"
            description="Kombinasi backend tangguh, pengelolaan data efisien, dan antarmuka modern untuk menghasilkan performa terbaik."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stackItems.map((item, index) => (
              <div key={item} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {index % 4 === 0 ? "Core" : index % 4 === 1 ? "Runtime" : index % 4 === 2 ? "Data" : "UI"}
                </p>
                <p className="mt-3 text-xl font-semibold text-[var(--ink)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <SectionIntro
            eyebrow="Selected Works"
            title="Proven digital systems in production"
            description="Studi kasus pengembangan platform kompleks dari tahap inisiasi arsitektur database hingga deployment siap pakai."
            action={<PrimaryLink href="/portfolio">Lihat semua portfolio</PrimaryLink>}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <article key={item.slug} className="group flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]">
                <div className="mb-5 aspect-[16/10] rounded-[var(--radius-md)]" style={{ background: `linear-gradient(135deg, ${item.accent}, color-mix(in srgb, ${item.accent} 16%, white))` }} />
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{item.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/portfolio/${item.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] transition group-hover:translate-x-1">
                  View Case Study <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <SectionIntro
            eyebrow="How I Work"
            title="A structured process to ship reliable products"
            description="Dari discovery sampai maintenance, setiap tahap dirancang untuk mengurangi risiko teknis dan mempercepat keputusan bisnis."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {workSteps.map((step) => (
              <div key={step.number} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <p className="text-sm font-semibold text-[var(--accent-purple)]">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--ink)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <SectionIntro
            eyebrow="Technical Writing"
            title="Insights from engineering trenches"
            description="Berbagi pengalaman empiris seputar performa framework, rancangan sistem backend, dan praktik membangun dashboard admin yang aman."
            action={<PrimaryLink href="/articles">Lihat semua artikel</PrimaryLink>}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <article key={article.slug} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <p className="text-sm text-[var(--muted)]">
                  {article.category} <span className="mx-2">•</span> {article.date}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--ink)]">{article.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{article.summary}</p>
                <Link href={`/articles/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
                  Read Article <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] py-16 text-white md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60">Let&apos;s work together</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Need a reliable engineer to turn your idea into a scalable web application?
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              Konsultasikan kebutuhan sistem informasi, migrasi database legacy, atau dashboard admin untuk pengelolaan konten dan operasional secara profesional.
            </p>
          </div>
          <PrimaryLink href="/contact">Start a Conversation</PrimaryLink>
        </div>
      </section>
    </SiteShell>
  );
}
