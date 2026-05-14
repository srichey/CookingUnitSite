import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

// The sitemap is served at /sitemap.xml by Next.js convention. It lists every
// page Google should know about: the static pages in lib/routes.ts plus every
// blog post in each language. Each entry carries an hreflang alternates map
// when a translated counterpart exists, so Google understands the EN/ES pairs.

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  // Fallback for any page that has not declared a lastUpdated date yet.
  // Stable across builds so Google does not see a sitemap that claims every
  // page was modified on every crawl (a known anti-pattern that gets the
  // lastmod field discounted site-wide).
  const fallbackLastModified = new Date("2026-05-11");

  // Static pages and calculator pages from the routes registry.
  for (const page of PAGES) {
    const lastModified = page.lastUpdated
      ? new Date(page.lastUpdated)
      : fallbackLastModified;
    for (const locale of ["en", "es"] as const) {
      const path = page.paths[locale];
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: page.changefreq || "monthly",
        priority: page.priority ?? 0.5,
        alternates: {
          languages: {
            "en-US": `${SITE_URL}${page.paths.en}`,
            "es-419": `${SITE_URL}${page.paths.es}`,
          },
        },
      });
    }
  }

  // Individual blog posts in each language.
  for (const locale of ["en", "es"] as const) {
    const prefix = locale === "en" ? "/blog" : "/es/blog";
    const altPrefix = locale === "en" ? "/es/blog" : "/blog";
    for (const post of getAllPosts(locale)) {
      const altLang = locale === "en" ? "es-419" : "en-US";
      const sameLang = locale === "en" ? "en-US" : "es-419";
      const languages: Record<string, string> = {
        [sameLang]: `${SITE_URL}${prefix}/${post.slug}`,
      };
      if (post.alternateSlug) {
        languages[altLang] = `${SITE_URL}${altPrefix}/${post.alternateSlug}`;
      }
      entries.push({
        url: `${SITE_URL}${prefix}/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
