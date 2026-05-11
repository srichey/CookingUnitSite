import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();
  for (const page of PAGES) {
    for (const locale of ["en", "es"] as const) {
      const path = page.paths[locale];
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: now,
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
  return entries;
}
