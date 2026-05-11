import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  type Locale,
} from "./site";

export interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  // For pages that have a translated counterpart.
  alternatePath?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata(input: PageMetaInput): Metadata {
  const fullUrl = `${SITE_URL}${input.path}`;
  const ogImage = input.ogImage || DEFAULT_OG_IMAGE;

  const languages: Record<string, string> = {
    [input.locale === "en" ? "en-US" : "es-419"]: fullUrl,
    "x-default": `${SITE_URL}${input.locale === "en" ? input.path : input.alternatePath || "/"}`,
  };
  if (input.alternatePath) {
    const otherLocale = input.locale === "en" ? "es-419" : "en-US";
    languages[otherLocale] = `${SITE_URL}${input.alternatePath}`;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: input.title,
    description: input.description,
    alternates: {
      canonical: fullUrl,
      languages,
    },
    openGraph: {
      type: "website",
      url: fullUrl,
      title: input.title,
      description: input.description,
      siteName: SITE_NAME,
      locale: input.locale === "en" ? "en_US" : "es_419",
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [ogImage],
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
