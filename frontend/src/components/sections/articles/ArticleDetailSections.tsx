import Link from "next/link";
import { CopyArticleLink } from "@/features/articles/components/CopyArticleLink";
import type { ArticleItem } from "@/features/articles/types";

function renderMarkdownBlocks(content: string) {
  const lines = content.split("\n");
  const blocks: Array<
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "code"; code: string }
    | { type: "divider" }
  > = [];

  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];
  let codeBuffer: string[] = [];
  let inCode = false;

  const flushParagraph = () => {
    if (paragraphBuffer.length) {
      blocks.push({ type: "paragraph", text: paragraphBuffer.join(" ").trim() });
      paragraphBuffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer.length) {
      blocks.push({ type: "list", items: [...listBuffer] });
      listBuffer = [];
    }
  };

  const flushCode = () => {
    if (codeBuffer.length) {
      blocks.push({ type: "code", code: codeBuffer.join("\n") });
      codeBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      flushParagraph();
      flushList();
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(rawLine);
      continue;
    }

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line === "---") {
      flushParagraph();
      flushList();
      blocks.push({ type: "divider" });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 3, text: line.replace(/^###\s+/, "") });
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 2, text: line.replace(/^##\s+/, "") });
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listBuffer.push(line.replace(/^-\s+/, ""));
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();
  flushCode();

  return blocks.map((block, index) => {
    if (block.type === "heading") {
      if (block.level === 2) {
        return <h2 key={index} className="pt-6 text-xl font-semibold tracking-tight text-brand-dark md:text-2xl">{block.text}</h2>;
      }

      return <h3 key={index} className="pt-3 text-lg font-semibold tracking-tight text-brand-dark md:text-xl">{block.text}</h3>;
    }

    if (block.type === "list") {
      return (
        <ul key={index} className="my-2 space-y-3 pl-1 text-sm text-brand-muted">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (block.type === "code") {
      return (
        <div key={index} className="my-6 overflow-hidden rounded-card border border-brand-border shadow-soft">
          <div className="border-b border-brand-border bg-gray-50 px-4 py-2 text-xs font-mono text-brand-muted">
            Code Example
          </div>
          <pre className="overflow-x-auto bg-white p-4 text-[13px] leading-relaxed text-brand-dark"><code>{block.code}</code></pre>
        </div>
      );
    }

    if (block.type === "divider") {
      return <div key={index} className="my-8 h-px w-full bg-brand-border/60" />;
    }

    return <p key={index} className="text-base leading-relaxed text-brand-muted">{block.text}</p>;
  });
}

export function ArticleHeroSection({ item }: { item: ArticleItem }) {
  return (
    <header className="border-b border-brand-border bg-white pb-12 pt-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mb-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-brand-muted">
          <Link href="/" className="transition-colors hover:text-brand-dark">Beranda</Link>
          <span className="text-brand-border">/</span>
          <Link href="/articles" className="transition-colors hover:text-brand-dark">Articles</Link>
          <span className="text-brand-border">/</span>
          <span className="text-brand-dark">Detail</span>
        </nav>
        <div className="space-y-5">
          <span className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-widest ${item.categoryBadgeClassName}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current"></span> {item.heroLabel}
          </span>
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            {item.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 border-t border-brand-border/60 pt-5 text-xs">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-border bg-gray-100 font-mono font-bold text-brand-dark">AD</div>
            <div className="flex flex-col gap-y-0.5 text-brand-muted sm:flex-row sm:items-center sm:gap-x-4">
              <span className="font-medium text-brand-dark">Arya Dwi Putra</span>
              <span className="hidden text-brand-border sm:inline">|</span>
              <time dateTime={item.dateIso}>{item.date}</time>
              <span className="hidden text-brand-border sm:inline">&bull;</span>
              <span className="inline-flex items-center gap-1">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg> {item.readingTime.replace("baca", "Baca")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function ArticleContentSection({ item }: { item: ArticleItem }) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12">
        <div className="mx-auto w-full max-w-2xl space-y-6 text-brand-dark lg:col-span-8 lg:mx-0">
          <p className="border-l-2 border-brand-dark py-1 pl-4 text-lg font-normal italic leading-relaxed tracking-normal text-brand-muted md:text-xl">
            {item.detail.standfirst}
          </p>

          <div className="relative my-8 flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-card border border-brand-border bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-soft">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-60"></div>
            <span className="z-10 text-center text-xs font-mono text-brand-muted/40">{item.detail.featureGraphicLabel}</span>
          </div>

          {renderMarkdownBlocks(item.detail.content)}
        </div>

        <aside className="w-full space-y-8 lg:col-span-4 lg:sticky lg:top-24">
          <div className="space-y-4 rounded-card border border-brand-border bg-white p-6 shadow-soft">
            <h4 className="border-b border-brand-border pb-2.5 text-xs font-semibold uppercase tracking-widest text-brand-dark/40">{item.detail.publicationTitle}</h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Topik Utama</span>
                <span className="text-right font-medium text-brand-dark">{item.detail.publicationInfo.primaryTopic}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Framework</span>
                <span className="text-right font-mono font-medium text-brand-dark">{item.detail.publicationInfo.framework}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-brand-muted">Tingkat Konten</span>
                <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${item.detail.publicationInfo.contentLevelClassName}`}>
                  {item.detail.publicationInfo.contentLevel}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-card border border-brand-border bg-white p-6 shadow-soft">
            <h4 className="border-b border-brand-border pb-2.5 text-xs font-semibold uppercase tracking-widest text-brand-dark/40">{item.detail.shareTitle}</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <CopyArticleLink />
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="inline-flex h-8 items-center rounded-button border border-brand-border bg-white px-3 text-xs font-medium text-brand-dark transition-all hover:border-brand-dark">
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ArticleBottomCTASection({ relatedItems }: { relatedItems: ArticleItem[] }) {
  return (
    <section className="border-t border-brand-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-brand-border/60 pb-4 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <span className="block text-xs font-semibold uppercase tracking-wider text-accent-blue">Kelanjutan Bacaan</span>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark">Artikel teknis lain yang masih nyambung</h2>
          </div>
          <Link href="/articles" className="group inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-brand-dark transition-colors hover:text-accent-purple">
            Lihat semua tulisan <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {relatedItems.map((item) => (
            <Link key={item.slug} href={`/articles/${item.slug}`} className="group flex flex-col justify-between rounded-card border border-brand-border bg-white p-5 transition-all hover:border-brand-dark/20 hover:shadow-soft">
              <div className="space-y-2.5">
                <span className={`block w-fit rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${item.categoryBadgeClassName}`}>{item.categoryLabel}</span>
                <h3 className={`text-base font-semibold leading-snug text-brand-dark transition-colors ${item.hoverAccentClassName}`}>{item.title}</h3>
              </div>
              <span className="mt-6 inline-flex items-center border-t border-dashed border-brand-border/40 pt-4 text-[11px] font-medium text-brand-muted">
                Baca artikel ini <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
