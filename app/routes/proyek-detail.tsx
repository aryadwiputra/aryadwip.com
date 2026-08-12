import type { Route } from "./+types/proyek-detail";
import { Link, useLoaderData } from "react-router";
import { SITE, PROJECTS } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import { formatMonthYear } from "~/lib/format";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function loader({ params }: Route.LoaderArgs) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    throw new Response("Proyek tidak ditemukan", { status: 404 });
  }
  return project;
}

export function meta({ loaderData, params }: Route.MetaArgs) {
  const project = loaderData ?? PROJECTS.find((p) => p.slug === params.slug);
  const title = project ? `${project.title} — Studi Kasus` : "Proyek Tidak Ditemukan";
  const description = project?.summary ?? "Proyek tidak ditemukan.";
  return pageMeta({
    title,
    description,
    path: `/proyek/${params.slug}`,
    noindex: !loaderData,
  });
}

export default function ProyekDetail() {
  const project = useLoaderData<typeof loader>();

  const period = project.end_date
    ? `${formatMonthYear(project.start_date)} – ${formatMonthYear(project.end_date)}`
    : `${formatMonthYear(project.start_date)} – Sekarang`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Portofolio", item: `${SITE.url}/proyek` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE.url}/proyek/${project.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="STUDI KASUS"
          title={project.title}
          description={project.summary}
          crumb={{ label: "Portofolio", href: "/proyek" }}
        />

        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <Reveal>
              <div className="border-2 border-black p-6 md:p-8 bg-primary">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-dark text-primary text-xs font-semibold px-2 py-1">
                    {project.tag}
                  </span>
                  <span className="inline-block bg-white text-dark text-xs font-semibold px-2 py-1 border-2 border-black">
                    {project.case_study_label}
                  </span>
                  {"client_name" in project && project.client_name && (
                    <span className="inline-block bg-blue text-dark text-xs font-semibold px-2 py-1 border-2 border-black">
                      Klien: {project.client_name}
                    </span>
                  )}
                </div>
                <dl className="grid sm:grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-gray-600">Peran</dt>
                    <dd className="font-medium">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-gray-600">Periode</dt>
                    <dd className="font-medium">{period}</dd>
                  </div>
                </dl>
                <p className="font-mono text-sm leading-relaxed">{project.stack}</p>
              </div>
            </Reveal>

            {project.gallery.length > 0 && (
              <Reveal>
                <section className="border-2 border-black p-6 md:p-8 bg-white">
                  <h2 className="text-2xl font-black tracking-tight mb-4">Screenshot</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.gallery.map((g) => (
                      <figure key={g.src} className="border-2 border-black bg-muted">
                        <div className="aspect-video flex items-center justify-center bg-muted">
                          <span className="font-mono text-xs text-gray-500 px-4 text-center">
                            {g.src}
                          </span>
                        </div>
                        <figcaption className="px-3 py-2 text-xs font-medium border-t-2 border-black">
                          {g.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-gray-500 font-mono">
                    Tempatkan screenshot di folder <code>public/images/projects/{project.slug}/</code>.
                  </p>
                </section>
              </Reveal>
            )}

            <Reveal>
              <section className="border-2 border-black p-6 md:p-8">
                <h2 className="text-2xl font-black tracking-tight mb-3">Tantangan</h2>
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </section>
            </Reveal>

            <Reveal>
              <section className="border-2 border-black p-6 md:p-8">
                <h2 className="text-2xl font-black tracking-tight mb-3">Solusi</h2>
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </section>
            </Reveal>

            <Reveal>
              <section className="border-2 border-black p-6 md:p-8 bg-white">
                <h2 className="text-2xl font-black tracking-tight mb-4">Fitur Utama</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <li key={f} className="border-2 border-black p-3 text-sm font-medium flex gap-2 items-start">
                      <span aria-hidden="true" className="font-black">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section className="border-2 border-black p-6 md:p-8 bg-blue">
                <h2 className="text-2xl font-black tracking-tight mb-3">Hasil</h2>
                <p className="font-medium leading-relaxed">{project.outcome}</p>
              </section>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap gap-4 pt-2">
                {"website" in project && project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark text-primary font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
                  >
                    Kunjungi Website →
                  </a>
                )}
                {"repo" in project && project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark text-primary font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
                  >
                    Lihat Repository →
                  </a>
                )}
                <Link
                  to="/kontak"
                  className="border-2 border-dark text-dark font-semibold px-6 py-3 text-sm hover:bg-dark hover:text-primary transition-colors"
                >
                  Kerjakan Proyek Serupa
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
