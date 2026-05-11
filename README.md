# Cooking Units

Long-term SEO utility site for cooking conversions and recipe scaling. English and Spanish from day one. Static-first, mobile-first, ad-funded (placeholders only until approved).

**Stack:** Next.js 16, React 19, Tailwind v4, TypeScript. Deployed to Vercel.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000 for the English homepage or http://localhost:3000/es for the Spanish homepage.

## Scripts

- `npm run dev` start the dev server (Turbopack)
- `npm run build` production build
- `npm run start` start the built site
- `npm run lint` run ESLint
- `npm run typecheck` run TypeScript without emit

## Project structure

```
app/
  (en)/              English routes. Route group, not in URL.
    layout.tsx       Root layout for English (html, body, Header, Footer).
    page.tsx         English homepage (/).
    recipe-scaler/   /recipe-scaler
    privacy/         /privacy
    terms/           /terms
  es/                Spanish routes. URL prefix /es/.
    layout.tsx       Root layout for Spanish.
    page.tsx         Spanish homepage (/es).
    escalador-de-recetas/   /es/escalador-de-recetas
    privacidad/             /es/privacidad
    terminos/               /es/terminos
  globals.css        Tailwind + design tokens.
  sitemap.ts         Dynamic sitemap (drives off lib/routes.ts).
  robots.ts          Robots file.
  opengraph-image.tsx  Programmatic default OG image.
components/          Shared UI.
  recipe-scaler/     The Recipe Scaler client component.
content/             Page copy and FAQs (en/, es/).
lib/                 Conversions, ingredient data, formatting, i18n, SEO, schema.
```

## Adding a new calculator

1. Add the page entry to `lib/routes.ts` (this drives the sitemap and the language switcher).
2. Add the page copy to `content/en/<slug>.ts` and `content/es/<slug>.ts`.
3. Add `app/(en)/<slug>/page.tsx` and `app/es/<slug-es>/page.tsx`.
4. If the calculator has interactive state, add a client component in `components/<slug>/`.
5. Build a JSON-LD WebApplication and FAQPage block via the helpers in `lib/schema.ts`.

## i18n

The site uses two root layouts: `app/(en)/layout.tsx` and `app/es/layout.tsx`. English lives at `/...` (no URL prefix, hidden in the `(en)` route group). Spanish lives at `/es/...`. The language switcher maps known page pairs through `lib/routes.ts`. For unknown paths (blog posts not yet translated, etc.) it falls back to the locale root.

`hreflang` annotations are emitted via `lib/seo.ts` so Google understands the page pairs.

## Content rule

No em dashes in any user-facing content. Use commas, periods, or parentheses instead. This is intentional and applies to English and Spanish content alike.

## Monetisation

- AdSense placeholder slots are wired throughout the site via the `AdSlot` component. They render as empty reserved boxes until `NEXT_PUBLIC_ADSENSE_CLIENT` is set.
- Vercel Web Analytics can be enabled in the Vercel dashboard without code changes; it is cookieless and does not require a privacy banner.

## Domain

The canonical domain lives in `NEXT_PUBLIC_SITE_URL` (see `.env.example`). Swap it once a domain is registered.

## SEO checklist when shipping a new page

- Unique `title` and `description` (via `buildMetadata` in `lib/seo.ts`).
- Calculator above the fold; copy and explanation below.
- FAQ block at the bottom with FAQPage schema.
- BreadcrumbList schema where appropriate.
- Translated counterpart linked at the bottom of the page.
- Sitemap entry in `lib/routes.ts`.
- No em dashes.
