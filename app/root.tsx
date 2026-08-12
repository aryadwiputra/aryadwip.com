import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { SITE } from "~/lib/portfolio-data";
import "./app.css";

// Inter di-self-host via @fontsource-variable/inter (diimport di app.css)
// sehingga tidak ada request render-blocking ke fonts.googleapis.com.
export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
];

// HTML must never be cached: stale documents reference asset hashes that no
// longer exist after a new build is deployed (causing 404s like the one this
// prevents). Hashed static assets under /assets are cached immutably by the
// server, so disabling HTML caching has no performance downside.
export function headers() {
  return {
    "Cache-Control": "no-cache, no-store, must-revalidate",
  };
}

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.title,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogor",
    addressCountry: "ID",
  },
  sameAs: [SITE.github, SITE.linkedin],
  owns: {
    "@type": "Brand",
    name: SITE.product.name,
    url: SITE.product.url,
    slogan: SITE.product.tagline,
  },
  knowsAbout: ["PHP", "Laravel", "React", "Inertia.js", "MySQL", "Bun", "Hono"],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${SITE.name} — ${SITE.title}`,
  url: SITE.url,
  inLanguage: "id",
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffe17c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
