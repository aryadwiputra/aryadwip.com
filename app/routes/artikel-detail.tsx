import type { Route } from "./+types/artikel-detail";
import { Link, useLoaderData } from "react-router";
import { SITE, ARTICLES } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import { formatDate } from "~/lib/format";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function loader({ params }: Route.LoaderArgs) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    throw new Response("Artikel tidak ditemukan", { status: 404 });
  }
  return article;
}

export function meta({ loaderData, params }: Route.MetaArgs) {
  const article = loaderData ?? ARTICLES.find((a) => a.slug === params.slug);
  const title = article ? `${article.title} — ${SITE.name}` : "Artikel Tidak Ditemukan";
  const description = article?.excerpt ?? "Artikel tidak ditemukan.";
  return pageMeta({
    title,
    description,
    path: `/artikel/${params.slug}`,
    noindex: !loaderData,
  });
}

export default function ArtikelDetail() {
  const article = useLoaderData<typeof loader>();
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${SITE.url}/images/og-image.png`,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/og-image.png`,
      },
    },
    keywords: article.tags.join(", "),
    mainEntityOfPage: `${SITE.url}/artikel/${article.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Artikel", item: `${SITE.url}/artikel` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE.url}/artikel/${article.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow={`${article.category} · ${formatDate(article.date)} · ${article.readTime} MENIT BACA`}
          title={article.title}
          description={article.excerpt}
          crumb={{ label: "Artikel", href: "/artikel" }}
        />

        <article className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {article.content.map((section, i) => (
                <Reveal key={i}>
                  <section>
                    {section.heading && (
                      <h2 className="text-2xl font-black tracking-tight mb-3">{section.heading}</h2>
                    )}
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-gray-700 leading-relaxed mb-4">
                        {p}
                      </p>
                    ))}
                  </section>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs border-2 border-black px-2 py-0.5">
                  #{tag}
                </span>
              ))}
            </div>

            <Reveal>
              <div className="mt-12 bg-primary border-2 border-black p-6 md:p-8 text-center">
                <h2 className="text-2xl font-black tracking-tight mb-2">
                  Butuh Bantuan dengan Proyek Laravel?
                </h2>
                <p className="text-gray-700 mb-5">
                  Saya siap membantu — konsultasi awal gratis via WhatsApp.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    to="/layanan"
                    className="bg-dark text-primary font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
                  >
                    Lihat Layanan
                  </Link>
                  <Link
                    to="/kontak"
                    className="border-2 border-dark text-dark font-semibold px-6 py-3 text-sm hover:bg-dark hover:text-primary transition-colors"
                  >
                    Hubungi Saya
                  </Link>
                </div>
              </div>
            </Reveal>

            <div className="mt-12">
              <h2 className="text-xl font-black tracking-tight mb-4">Artikel Lainnya</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/artikel/${a.slug}`}
                    className="border-2 border-black p-5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                  >
                    <span className="text-xs font-semibold bg-dark text-primary px-2 py-1">
                      {a.category}
                    </span>
                    <p className="font-bold mt-3 leading-snug">{a.title}</p>
                    <p className="text-xs text-gray-600 mt-2">
                      {formatDate(a.date)} • {a.readTime} menit baca
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
