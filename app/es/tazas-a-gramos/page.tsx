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
import { tazasAGramosEs as copy } from "@/content/es/tazas-a-gramos";

const PATH = "/es/tazas-a-gramos";
const ALT_PATH = "/cups-to-grams";
const LAST_UPDATED = "2026-05-11";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "es",
});

export default function Page() {
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Inicio", path: "/es" },
    { name: "Calculadoras", path: "/es/calculadoras" },
    { name: "Tazas a gramos", path: PATH },
  ]);
  const ldFaq = faqSchema(copy.faqs);
  const ldWebApp = webApplicationSchema({
    name: copy.h1,
    description: copy.metaDescription,
    path: PATH,
    inLanguage: "es-419",
  });
  const ldDataset = datasetSchema({
    path: PATH,
    name: "Kitchen Converts: Densidades de ingredientes (tazas, cucharadas, gramos)",
    description:
      "Valores de peso por densidad para ingredientes comunes de cocina y repostería: harina común, harina de pan, harina para pastel, harina de almendra, azúcar blanca, azúcar morena, mantequilla, miel, cacao en polvo y avena. Una taza estadounidense equivale a 236.588 ml.",
    variableMeasured: ["Masa por taza estadounidense (gramos)", "Masa por cucharada estadounidense (gramos)"],
    distributionPath: "/data/ingredient-densities.json",
    distributionFormat: "application/json",
    citedSources: [
      { label: "King Arthur Baking ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
      { label: "America's Test Kitchen ingredient chart", url: "https://www.americastestkitchen.com/articles/2095-why-you-should-weigh-your-baking-ingredients" },
    ],
    inLanguage: "es-419",
    dateModified: LAST_UPDATED,
  });

  return (
    <CalculatorPageShell
      locale="es"
      breadcrumbs={[
        { name: "Inicio", href: "/es" },
        { name: "Calculadoras", href: "/es/calculadoras" },
        { name: "Tazas a gramos" },
      ]}
      h1={copy.h1}
      intro={copy.intro}
      tldr={copy.tldr}
      calculator={<CupsGramsConverter locale="es" defaultDirection="cups-to-grams" />}
      chart={<IngredientChart locale="es" direction="cups-to-grams" />}
      quickRef={copy.sections.quickRef}
      howItWorks={copy.sections.howItWorks}
      accuracy={copy.sections.accuracy}
      metric={copy.sections.metric}
      geo={copy.sections.geo}
      commonMistakes={copy.commonMistakes}
      faqs={copy.faqs}
      related={copy.related}
      alternateLink={{
        label: "Need this tool in English? Open the cups to grams converter.",
        href: ALT_PATH,
        hrefLang: "en-US",
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
