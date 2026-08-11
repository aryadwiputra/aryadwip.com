import type { Route } from "./+types/proyek-detail";
import { Link, useLoaderData } from "react-router";
import { SITE, PROJECTS } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
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
                <span className="inline-block bg-dark text-primary text-xs font-semibold px-2 py-1 mb-4">
                  {project.tag}
                </span>
                <p className="font-mono text-sm leading-relaxed">{project.stack}</p>
              </div>
            </Reveal>

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
