# aryadwip.com

React Router Framework Mode app (SSR). Bun + npm scripts.

## Commands

```bash
npm run dev      # Dev server at localhost:5173
npm run build    # Production build
npm run typecheck # react-router typegen && tsc
npm run start    # Run production build
```

## Architecture

- **Framework Mode**: Uses `react-router.config.ts`, `app/routes.ts`, route modules
- **SSR**: Enabled by default (`ssr: true`)
- **Path alias**: `~/*` → `./app/*`
- **Tailwind v4**: Uses `@tailwindcss/vite` plugin, no tailwind.config.js
- **Type gen**: Route types auto-generated to `.react-router/types/` (must run before `tsc`)

## Route Conventions

- Routes defined in `app/routes.ts` using `index()`/`route()` helpers
- Route modules export: `loader`, `action`, `ErrorBoundary`, `meta`, `links`, `headers`
- Import types from `./+types/<route-name>` (auto-generated)
- `app/root.tsx`: Root layout with `<Outlet />`, `<Links />`, `<Meta />`

## Docker

```bash
docker build -t aryadwip.com .
docker run -p 3000:3000 aryadwip.com
```

## No Lint/Tests

No ESLint, Prettier, or test suite configured.
