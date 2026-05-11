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
import { ouncesToGramsEn as copy } from "@/content/en/ounces-to-grams";

const PATH = "/ounces-to-grams";
const ALT_PATH = "/es/onzas-a-gramos";
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
    { name: "Ounces to grams", path: PATH },
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
        { name: "Ounces to grams" },
      ]}
      h1={copy.h1}
      intro={copy.intro}
      tldr={copy.tldr}
      calculator={
        <GenericUnitConverter
          locale="en"
          group="weight"
          defaultFromUnit="ounce"
          defaultToUnit="gram"
          defaultFromValue={4}
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
        label: "¿Necesitas esta herramienta en español? Ver onzas a gramos.",
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
