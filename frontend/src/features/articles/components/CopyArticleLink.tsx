"use client";

export function CopyArticleLink() {
  async function handleCopy() {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link artikel berhasil disalin!");
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-8 items-center gap-1.5 rounded-button border border-brand-border bg-white px-3 text-xs font-medium text-brand-dark transition-all hover:border-brand-dark"
    >
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
      Copy Link
    </button>
  );
}
