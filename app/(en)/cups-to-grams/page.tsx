import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  sanitiseJsonLd,
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
  datasetSchema,
} from "@/lib/schema";
import { CalculatorPageShell } from "@/components/CalculatorPageShell";
import { CupsGramsConverter } from "@/components/cups-grams/CupsGramsConverter";
import { IngredientChart } from "@/components/cups-grams/IngredientChart";
import { cupsToGramsEn as copy } from "@/content/en/cups-to-grams";

const PATH = "/cups-to-grams";
const ALT_PATH = "/es/tazas-a-gramos";
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
    { name: "Cups to grams", path: PATH },
  ]);
  const ldFaq = faqSchema(copy.faqs);
  const ldWebApp = webApplicationSchema({
    name: copy.h1,
    description: copy.metaDescription,
    path: PATH,
    inLanguage: "en-US",
  });
  const ldDataset = datasetSchema({
    path: PATH,
    name: "Kitchen Converts: Ingredient Densities (cups, tablespoons, grams)",
    description:
      "Density-based weight values for common cooking and baking ingredients, including all-purpose flour, bread flour, cake flour, almond flour, granulated sugar, brown sugar, butter, honey, cocoa powder, and oats. US cup is 236.588 ml.",
    variableMeasured: ["Mass per US cup (grams)", "Mass per US tablespoon (grams)"],
    distributionPath: "/data/ingredient-densities.json",
    distributionFormat: "application/json",
    citedSources: [
      { label: "King Arthur Baking ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
      { label: "America's Test Kitchen ingredient chart", url: "https://www.americastestkitchen.com/articles/2095-why-you-should-weigh-your-baking-ingredients" },
    ],
    inLanguage: "en-US",
    dateModified: LAST_UPDATED,
  });

  return (
    <CalculatorPageShell
      locale="en"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Calculators", href: "/calculators" },
        { name: "Cups to grams" },
      ]}
      h1={copy.h1}
      intro={copy.intro}
      tldr={copy.tldr}
      calculator={<CupsGramsConverter locale="en" defaultDirection="cups-to-grams" />}
      chart={<IngredientChart locale="en" direction="cups-to-grams" />}
      quickRef={copy.sections.quickRef}
      howItWorks={copy.sections.howItWorks}
      accuracy={copy.sections.accuracy}
      metric={copy.sections.metric}
      geo={copy.sections.geo}
      commonMistakes={copy.commonMistakes}
      faqs={copy.faqs}
      related={copy.related}
      alternateLink={{
        label: "¿Necesitas esta herramienta en español? Ver el conversor de tazas a gramos.",
        href: ALT_PATH,
        hrefLang: "es-419",
      }}
      lastUpdatedIso={LAST_UPDATED}
      jsonLdScripts={
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldBreadcrumb) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldFaq) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldWebApp) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldDataset) }}
          />
        </>
      }
    />
  );
}
