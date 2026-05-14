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
import { gramosATazasEs as copy } from "@/content/es/gramos-a-tazas";

const PATH = "/es/gramos-a-tazas";
const ALT_PATH = "/grams-to-cups";
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
    { name: "Gramos a tazas", path: PATH },
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
    name: "Kitchen Converts: Densidades de ingredientes (gramos, tazas, cucharadas)",
    description:
      "Valores de peso por densidad para ingredientes comunes de cocina y repostería, expresados como gramos a taza y cucharada estadounidenses. Mismo conjunto de datos que tazas a gramos, indexado para la búsqueda inversa.",
    variableMeasured: ["Masa por taza estadounidense (gramos)", "Masa por cucharada estadounidense (gramos)"],
    distributionPath: "/data/ingredient-densities.json",
    distributionFormat: "application/json",
    citedSources: [
      { label: "King Arthur Baking ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
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
        { name: "Gramos a tazas" },
      ]}
      h1={copy.h1}
      intro={copy.intro}
      tldr={copy.tldr}
      calculator={<CupsGramsConverter locale="es" defaultDirection="grams-to-cups" />}
      chart={<IngredientChart locale="es" direction="grams-to-cups" />}
      quickRef={copy.sections.quickRef}
      howItWorks={copy.sections.howItWorks}
      accuracy={copy.sections.accuracy}
      metric={copy.sections.metric}
      geo={copy.sections.geo}
      commonMistakes={copy.commonMistakes}
      faqs={copy.faqs}
      related={copy.related}
      alternateLink={{
        label: "Need this tool in English? Open the grams to cups converter.",
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
