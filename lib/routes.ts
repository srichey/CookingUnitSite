// Page registry. Drives the sitemap, the language switcher, and internal links.
// Adding a new calculator means adding one entry here plus the page files.

import type { Locale } from "./site";

export type PageKind =
  | "home"
  | "calculator"
  | "chart"
  | "guide"
  | "legal";

export interface PageEntry {
  // Stable identifier used to match EN/ES pairs for the language switcher.
  id: string;
  kind: PageKind;
  // Path slug in each locale. Spanish uses Spanish slugs for SEO.
  paths: Record<Locale, string>;
  // Approximate sitemap priority and update cadence.
  priority?: number;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  // Real last-updated date in YYYY-MM-DD. Drives sitemap lastmod and the
  // visible "Last updated" line on calculator pages. Bump this when the
  // page's body content or calculator data changes. Do NOT bump it on
  // every build; Google detects and discounts that pattern.
  lastUpdated?: string;
}

export const PAGES: PageEntry[] = [
  {
    id: "home",
    kind: "home",
    paths: { en: "/", es: "/es" },
    priority: 1.0,
    changefreq: "weekly",
    lastUpdated: "2026-05-12",
  },
  {
    id: "calculators",
    kind: "guide",
    paths: { en: "/calculators", es: "/es/calculadoras" },
    priority: 0.9,
    changefreq: "weekly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "recipe-scaler",
    kind: "calculator",
    paths: { en: "/recipe-scaler", es: "/es/escalador-de-recetas" },
    priority: 0.95,
    changefreq: "monthly",
    lastUpdated: "2026-05-12",
  },
  {
    id: "cups-to-grams",
    kind: "calculator",
    paths: { en: "/cups-to-grams", es: "/es/tazas-a-gramos" },
    priority: 0.95,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "grams-to-cups",
    kind: "calculator",
    paths: { en: "/grams-to-cups", es: "/es/gramos-a-tazas" },
    priority: 0.9,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "fahrenheit-to-celsius",
    kind: "calculator",
    paths: { en: "/fahrenheit-to-celsius", es: "/es/fahrenheit-a-celsius" },
    priority: 0.9,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "tablespoons-to-cups",
    kind: "calculator",
    paths: { en: "/tablespoons-to-cups", es: "/es/cucharadas-a-tazas" },
    priority: 0.9,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "ml-to-cups",
    kind: "calculator",
    paths: { en: "/ml-to-cups", es: "/es/mililitros-a-tazas" },
    priority: 0.9,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "butter-converter",
    kind: "calculator",
    paths: { en: "/butter-converter", es: "/es/conversor-de-mantequilla" },
    priority: 0.85,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "ounces-to-grams",
    kind: "calculator",
    paths: { en: "/ounces-to-grams", es: "/es/onzas-a-gramos" },
    priority: 0.85,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "flour-cups-to-grams",
    kind: "calculator",
    paths: { en: "/flour-cups-to-grams", es: "/es/harina-tazas-a-gramos" },
    priority: 0.8,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "sugar-cups-to-grams",
    kind: "calculator",
    paths: { en: "/sugar-cups-to-grams", es: "/es/azucar-tazas-a-gramos" },
    priority: 0.8,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "brown-sugar-cups-to-grams",
    kind: "calculator",
    paths: { en: "/brown-sugar-cups-to-grams", es: "/es/azucar-morena-tazas-a-gramos" },
    priority: 0.8,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "cocoa-cups-to-grams",
    kind: "calculator",
    paths: { en: "/cocoa-cups-to-grams", es: "/es/cacao-tazas-a-gramos" },
    priority: 0.75,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "honey-cups-to-grams",
    kind: "calculator",
    paths: { en: "/honey-cups-to-grams", es: "/es/miel-tazas-a-gramos" },
    priority: 0.75,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "oats-cups-to-grams",
    kind: "calculator",
    paths: { en: "/oats-cups-to-grams", es: "/es/avena-tazas-a-gramos" },
    priority: 0.75,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "about",
    kind: "guide",
    paths: { en: "/about", es: "/es/acerca" },
    priority: 0.5,
    changefreq: "yearly",
    lastUpdated: "2026-05-14",
  },
  {
    id: "contact",
    kind: "legal",
    paths: { en: "/contact", es: "/es/contacto" },
    priority: 0.3,
    changefreq: "yearly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "faq",
    kind: "guide",
    paths: { en: "/faq", es: "/es/preguntas" },
    priority: 0.7,
    changefreq: "monthly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "blog",
    kind: "guide",
    paths: { en: "/blog", es: "/es/blog" },
    priority: 0.6,
    changefreq: "weekly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "privacy",
    kind: "legal",
    paths: { en: "/privacy", es: "/es/privacidad" },
    priority: 0.2,
    changefreq: "yearly",
    lastUpdated: "2026-05-11",
  },
  {
    id: "terms",
    kind: "legal",
    paths: { en: "/terms", es: "/es/terminos" },
    priority: 0.2,
    changefreq: "yearly",
    lastUpdated: "2026-05-11",
  },
];

export function getPageById(id: string): PageEntry | undefined {
  return PAGES.find((p) => p.id === id);
}

export function getPageByPath(path: string): PageEntry | undefined {
  const cleaned = path.replace(/\/$/, "") || "/";
  return PAGES.find(
    (p) => p.paths.en === cleaned || p.paths.es === cleaned,
  );
}

export function getCounterpartPath(
  fromPath: string,
  toLocale: Locale,
): string | null {
  const page = getPageByPath(fromPath);
  if (!page) return null;
  return page.paths[toLocale];
}
