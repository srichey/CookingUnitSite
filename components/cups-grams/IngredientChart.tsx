// Static ingredient density chart. Rendered server-side so search engines and
// AI extractors get the values without running JS. Used on both the cups-to-grams
// and grams-to-cups pages with reversed framing.

import { INGREDIENTS, type Ingredient } from "@/lib/ingredients";
import { volumeToGrams, gramsToVolume } from "@/lib/conversions";
import { formatAmount } from "@/lib/format";
import type { Locale } from "@/lib/site";

type Direction = "cups-to-grams" | "grams-to-cups";

interface Props {
  locale: Locale;
  direction: Direction;
  // Optional: limit to a single ingredient for landing pages.
  onlyIngredientId?: string;
}

const CUP_FRACTIONS = [0.25, 0.333333, 0.5, 0.666667, 0.75, 1];
const GRAM_AMOUNTS = [50, 100, 150, 200, 250];

const HEADINGS = {
  en: {
    ingredient: "Ingredient",
    chartTitleCups: "Cups to grams chart",
    chartTitleGrams: "Grams to cups chart",
    captionCups:
      "Approximate weight of one US cup (236.59 ml) for common cooking ingredients. Values are rounded.",
    captionGrams:
      "Approximate volume in US cups for common cooking ingredients at standard gram amounts. Values are rounded.",
  },
  es: {
    ingredient: "Ingrediente",
    chartTitleCups: "Tabla de tazas a gramos",
    chartTitleGrams: "Tabla de gramos a tazas",
    captionCups:
      "Peso aproximado de una taza estadounidense (236.59 ml) para ingredientes comunes de cocina. Valores redondeados.",
    captionGrams:
      "Volumen aproximado en tazas estadounidenses para ingredientes comunes a cantidades estándar en gramos. Valores redondeados.",
  },
} as const;

export function IngredientChart({ locale, direction, onlyIngredientId }: Props) {
  const h = HEADINGS[locale];
  const items: Ingredient[] = onlyIngredientId
    ? INGREDIENTS.filter((i) => i.id === onlyIngredientId)
    : INGREDIENTS.slice(0, 10);

  if (direction === "cups-to-grams") {
    return (
      <figure className="mt-6 overflow-x-auto rounded-md border border-[color:var(--color-line)] bg-white">
        <table className="min-w-full divide-y divide-[color:var(--color-line)] text-sm">
          <caption className="px-4 py-3 text-left font-serif text-lg font-semibold text-[color:var(--color-ink)]">
            {h.chartTitleCups}
          </caption>
          <thead className="bg-[color:var(--color-line)]/30 text-left">
            <tr>
              <th scope="col" className="px-4 py-2 font-semibold">{h.ingredient}</th>
              {CUP_FRACTIONS.map((f) => (
                <th key={f} scope="col" className="px-3 py-2 text-right font-semibold tabular-nums">
                  {formatAmount(f)} {locale === "es" ? "tz" : "c"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[color:var(--color-line)]">
            {items.map((it) => (
              <tr key={it.id} className="hover:bg-[color:var(--color-line)]/20">
                <th scope="row" className="px-4 py-2 text-left font-medium text-[color:var(--color-ink)]">
                  {it.names[locale]}
                </th>
                {CUP_FRACTIONS.map((f) => {
                  const grams = volumeToGrams(f, "cup", it.gramsPerCup);
                  return (
                    <td key={f} className="px-3 py-2 text-right tabular-nums text-[color:var(--color-ink-muted)]">
                      {grams !== null ? `${formatAmount(grams, { decimal: true, decimals: 0 })} g` : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <figcaption className="px-4 py-3 text-xs text-[color:var(--color-ink-muted)]">{h.captionCups}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="mt-6 overflow-x-auto rounded-md border border-[color:var(--color-line)] bg-white">
      <table className="min-w-full divide-y divide-[color:var(--color-line)] text-sm">
        <caption className="px-4 py-3 text-left font-serif text-lg font-semibold text-[color:var(--color-ink)]">
          {h.chartTitleGrams}
        </caption>
        <thead className="bg-[color:var(--color-line)]/30 text-left">
          <tr>
            <th scope="col" className="px-4 py-2 font-semibold">{h.ingredient}</th>
            {GRAM_AMOUNTS.map((g) => (
              <th key={g} scope="col" className="px-3 py-2 text-right font-semibold tabular-nums">
                {g} g
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[color:var(--color-line)]">
          {items.map((it) => (
            <tr key={it.id} className="hover:bg-[color:var(--color-line)]/20">
              <th scope="row" className="px-4 py-2 text-left font-medium text-[color:var(--color-ink)]">
                {it.names[locale]}
              </th>
              {GRAM_AMOUNTS.map((g) => {
                const cups = gramsToVolume(g, "cup", it.gramsPerCup);
                return (
                  <td key={g} className="px-3 py-2 text-right tabular-nums text-[color:var(--color-ink-muted)]">
                    {cups !== null ? `${formatAmount(cups)} ${locale === "es" ? "tz" : "c"}` : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="px-4 py-3 text-xs text-[color:var(--color-ink-muted)]">{h.captionGrams}</figcaption>
    </figure>
  );
}
