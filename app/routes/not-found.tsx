import { Link } from "react-router";
import type { Route } from "./+types/not-found";
import { SITE } from "~/lib/portfolio-data";
import { pageMeta } from "~/lib/meta";
import Navbar from "~/components/sections/navbar";
import Footer from "~/components/sections/footer";

export function loader() {
  throw new Response("Halaman tidak ditemukan", { status: 404 });
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Halaman Tidak Ditemukan (404) — Arya Dwi Putra",
    description: "Halaman yang Anda cari tidak ditemukan.",
    noindex: true,
  });
}

function NotFoundContent() {
  return (
    <main className="relative min-h-[70vh] pt-40 pb-28 px-6 bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-block bg-dark text-primary font-black text-7xl md:text-9xl px-8 py-4 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          404
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto">
            Sepertinya URL ini salah ketik, sudah dipindahkan, atau tidak pernah
            ada. Mari kembali ke halaman utama.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-dark text-primary font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
          >
            Kembali ke Beranda
          </Link>
          <Link
            to="/kontak"
            className="border-2 border-dark text-dark font-semibold px-6 py-3 text-sm hover:bg-dark hover:text-primary transition-colors"
          >
            Hubungi Saya
          </Link>
        </div>
        <p className="text-sm text-gray-700">
          {SITE.url} — {SITE.name}
        </p>
      </div>
    </main>
  );
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <NotFoundContent />
      <Footer />
    </>
  );
}

export function ErrorBoundary() {
  return (
    <>
      <Navbar />
      <NotFoundContent />
      <Footer />
    </>
  );
}
