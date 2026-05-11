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
}

export const PAGES: PageEntry[] = [
  {
    id: "home",
    kind: "home",
    paths: { en: "/", es: "/es" },
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    id: "recipe-scaler",
    kind: "calculator",
    paths: { en: "/recipe-scaler", es: "/es/escalador-de-recetas" },
    priority: 0.95,
    changefreq: "monthly",
  },
  {
    id: "privacy",
    kind: "legal",
    paths: { en: "/privacy", es: "/es/privacidad" },
    priority: 0.2,
    changefreq: "yearly",
  },
  {
    id: "terms",
    kind: "legal",
    paths: { en: "/terms", es: "/es/terminos" },
    priority: 0.2,
    changefreq: "yearly",
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
