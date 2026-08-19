import type { Route } from "./+types/artikel";
import { Link } from "react-router";
import { SITE, ARTICLES } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import { formatDate } from "~/lib/format";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";
import PageHero from "~/components/sections/page-hero";
import Reveal from "~/components/reveal";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `Artikel & Tips — ${SITE.name}`,
    description:
      "Artikel tentang Laravel, pengembangan web, dan tips untuk klien: cara memilih jasa pembuatan website, Laravel vs WordPress, deploy di VPS, dan optimasi performa.",
    path: "/artikel",
  });
}

const ITEMLIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ARTICLES.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.title,
    url: `${SITE.url}/artikel/${a.slug}`,
  })),
};

export default function Artikel() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_SCHEMA) }}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="ARTIKEL & TIPS"
          title="Tulisan tentang Laravel & Pengembangan Web"
          description="Panduan praktis dan pengetahuan seputar Laravel — untuk klien yang sedang riset maupun developer yang ingin belajar."
        />

        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {ARTICLES.map((article, i) => (
              <Reveal key={article.slug}>
                <Link
                  to={`/artikel/${article.slug}`}
                  className={`block border-2 border-black p-6 md:p-8 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow ${
                    i % 2 === 0 ? "bg-primary" : "bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-semibold">
                    <span className="bg-dark text-paper px-2 py-1">{article.category}</span>
                    <span className="text-gray-600">{formatDate(article.date)}</span>
                    <span className="text-gray-600">• {article.readTime} menit baca</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-xs border-2 border-black px-2 py-0.5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
