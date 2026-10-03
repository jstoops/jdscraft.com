# jdscraft.com

Personal resume and portfolio site for JDSCraft, built as a single-page React app and deployed as static files to Cloudflare Pages.

## Stack

- **React 18 + TypeScript**, bundled by **Vite 7** with SWC for Fast Refresh
- **Bootstrap 4** classes and custom CSS for the resume layout, with Font Awesome and `@lobehub/icons` for the tech-stack icons
- **PhotoSwipe** (via `react-photoswipe-gallery`) for the project screenshot galleries
- **Vitest** + Testing Library for unit tests, **Playwright** for end-to-end tests
- **Wrangler** for local preview and deployment

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Typechecks with `tsc`, then builds to `dist/` |
| `npm run lint` | ESLint over all `.ts`/`.tsx`, failing on any warning |
| `npm test` | Vitest unit tests in jsdom |
| `npm run test:e2e` | Playwright tests against a dev server on port 4173 |
| `npm run preview` | Builds, then serves `dist/` through Wrangler |
| `npm run deploy` | Builds, then deploys `dist/` to Cloudflare Pages |

## Structure

The page is one scrolling document. `src/App.tsx` composes a fixed `Navigation` sidebar with four sections — `About`, `Services`, `Projects` and `Skills` — each rendering its own content inline rather than reading from a data file, so edits happen directly in the component.

`Experience.tsx`, `Education.tsx` and `Interests.tsx` are complete components that are not currently rendered by `App.tsx`. They remain in the repo as sections that can be added back to the page.

Images live in `public/img/` and are referenced by root-relative path (`img/foo.jpg`), not imported as modules, so adding a screenshot means dropping the file in and pointing at it.

## Tests

Unit tests sit next to their components as `*.test.tsx`, plus `src/test/` for cross-cutting checks on content quality and the document shell. `@lobehub/icons` is aliased to a mock in `vitest.config.ts` to keep the suite fast.

Playwright runs `e2e/layout.spec.ts` against two projects, desktop Chrome and a Pixel 5 viewport, covering the layout, navigation scrolling and horizontal-overflow guards.

## Linting

ESLint uses the legacy `.eslintrc.cjs` format with `@typescript-eslint` v8 and `eslint-config-prettier`. The rules are deliberately not type-aware: the components contain no async or promise-based code, so the rules that justify the cost of a full type-aware pass would find nothing, and `npm run build` already typechecks under `tsc --strict`. If data fetching is ever added to `src/`, that tradeoff is worth revisiting.
