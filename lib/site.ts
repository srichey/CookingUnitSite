// Single source of truth for site-wide constants.
// All references to the public URL go through SITE_URL so swapping the
// production domain is a one-env-var change.

export const SITE_NAME = "Cooking Units";

export const SITE_TAGLINE_EN =
  "Convert and scale recipes without guessing.";
export const SITE_TAGLINE_ES =
  "Convierte y ajusta recetas sin adivinar.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const DEFAULT_OG_IMAGE = "/opengraph-image";

// AdSense client ID. Empty by default; flip on by setting NEXT_PUBLIC_ADSENSE_CLIENT
// in .env.production once approved. Placeholders render either way.
export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

// Vercel Analytics / Speed Insights are auto-loaded when deployed to Vercel.
// No client ID needed.

export type Locale = "en" | "es";
export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: Locale[] = ["en", "es"];
