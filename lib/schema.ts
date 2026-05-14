// JSON-LD structured data builders. Sanitise via stringify-and-escape per Next 16 guidance.

import { SITE_NAME, SITE_URL } from "./site";

export function sanitiseJsonLd(payload: object): string {
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

// Public profiles for the Kitchen Converts brand. Listed in Organization.sameAs
// so Google and AI engines can link the entity across the web. Add new URLs
// here when you create the account, do not leave dead URLs. Empty entries are
// filtered out before serialising.
//
// TODO(scott): add Pinterest, X/Twitter, Instagram, YouTube, LinkedIn as those
// brand accounts come online. Pinterest is highest priority for this niche.
export const BRAND_PROFILES: string[] = [
  // "https://www.pinterest.com/kitchenconverts",
  // "https://x.com/kitchenconverts",
  // "https://www.instagram.com/kitchenconverts",
];

const ORG_DESCRIPTION =
  "Cooking and baking unit conversions, ingredient weight charts, and a smart recipe scaler for home cooks. Bilingual (English and Spanish), privacy-first, mobile-friendly.";

export function organizationSchema() {
  const sameAs = BRAND_PROFILES.filter((u) => u.length > 0);
  const payload: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "KitchenConverts.com",
    url: SITE_URL,
    description: ORG_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      // Google's logo guidance prefers a single raster image (PNG) at a
      // square aspect ratio. SVG works inconsistently across rich results
      // surfaces, so we use the 512x512 PNG for both url and contentUrl.
      url: `${SITE_URL}/android-chrome-512x512.png`,
      contentUrl: `${SITE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@kitchenconverts.com",
        availableLanguage: ["English", "Spanish"],
      },
    ],
  };
  if (sameAs.length > 0) payload.sameAs = sameAs;
  return payload;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "KitchenConverts.com",
    url: SITE_URL,
    description: ORG_DESCRIPTION,
    inLanguage: ["en-US", "es-419"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export interface WebAppSchemaInput {
  name: string;
  description: string;
  path: string;
  inLanguage: "en-US" | "es-419";
}

export function webApplicationSchema(input: WebAppSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    inLanguage: input.inLanguage,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
