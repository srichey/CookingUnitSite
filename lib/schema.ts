// JSON-LD structured data builders. Sanitise via stringify-and-escape per Next 16 guidance.

import { SITE_NAME, SITE_URL } from "./site";

export function sanitiseJsonLd(payload: object): string {
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
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
