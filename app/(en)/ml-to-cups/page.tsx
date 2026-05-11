import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  sanitiseJsonLd,
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/lib/schema";
import { CalculatorPageShell } from "@/components/CalculatorPageShell";
import { GenericUnitConverter } from "@/components/converters/GenericUnitConverter";
import { mlToCupsEn as copy } from "@/content/en/ml-to-cups";

const PATH = "/ml-to-cups";
const ALT_PATH = "/es/mililitros-a-tazas";
const LAST_UPDATED = "2026-05-11";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "en",
});

export default function Page() {
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Calculators", path: "/calculators" },
    { name: "Milliliters to cups", path: PATH },
  ]);
  const ldFaq = faqSchema(copy.faqs);
  const ldWebApp = webApplicationSchema({
    name: copy.h1,
    description: copy.metaDescription,
    path: PATH,
    inLanguage: "en-US",
  });

  return (
    <CalculatorPageShell
      locale="en"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Calculators", href: "/calculators" },
        { name: "Milliliters to cups" },
      ]}
      h1={copy.h1}
      intro={copy.intro}
      tldr={copy.tldr}
      calculator={
        <GenericUnitConverter
          locale="en"
          group="volume"
          defaultFromUnit="milliliter"
          defaultToUnit="cup"
          defaultFromValue={240}
        />
      }
      quickRef={copy.sections.quickRef}
      howItWorks={copy.sections.howItWorks}
      accuracy={copy.sections.accuracy}
      metric={copy.sections.metric}
      geo={copy.sections.geo}
      commonMistakes={copy.commonMistakes}
      faqs={copy.faqs}
      related={copy.related}
      alternateLink={{
        label: "¿Necesitas esta herramienta en español? Ver mililitros a tazas.",
        href: ALT_PATH,
        hrefLang: "es-419",
      }}
      lastUpdatedIso={LAST_UPDATED}
      jsonLdScripts={
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldBreadcrumb) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldFaq) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldWebApp) }} />
        </>
      }
    />
  );
}
