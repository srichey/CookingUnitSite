"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { INGREDIENTS, type Ingredient } from "@/lib/ingredients";
import type { Locale } from "@/lib/site";
import { volumeToGrams, gramsToVolume } from "@/lib/conversions";
import { formatAmount, parseAmount } from "@/lib/format";

type Direction = "cups-to-grams" | "grams-to-cups";

const QUICK_CUPS = [0.25, 0.333333, 0.5, 0.666667, 0.75, 1, 1.5, 2];
const QUICK_GRAMS = [50, 100, 150, 200, 250, 500];

const STRINGS = {
  en: {
    ingredientLabel: "Ingredient",
    cupsLabel: "Cups",
    gramsLabel: "Grams",
    swap: "Swap",
    quickCups: "Quick fill (cups)",
    quickGrams: "Quick fill (grams)",
    invalid: "Use a number or a fraction like 1 1/2.",
    densityNoteIntro: "Conversion uses",
    densityNoteOf: "for",
    densityNoteUnit: "g per US cup",
    sourceNote: "Cup size: US 236.59 ml. Weights are approximate.",
    categories: {
      flour: "Flours",
      sugar: "Sugars",
      fat: "Fats",
      liquid: "Liquids",
      grain: "Grains",
      other: "Other",
    } as Record<Ingredient["category"], string>,
  },
  es: {
    ingredientLabel: "Ingrediente",
    cupsLabel: "Tazas",
    gramsLabel: "Gramos",
    swap: "Cambiar",
    quickCups: "Llenado rápido (tazas)",
    quickGrams: "Llenado rápido (gramos)",
    invalid: "Usa un número o una fracción como 1 1/2.",
    densityNoteIntro: "La conversión usa",
    densityNoteOf: "para",
    densityNoteUnit: "g por taza estadounidense",
    sourceNote: "Tamaño de taza: 236.59 ml (estándar estadounidense). Los pesos son aproximados.",
    categories: {
      flour: "Harinas",
      sugar: "Azúcares",
      fat: "Grasas",
      liquid: "Líquidos",
      grain: "Granos",
      other: "Otros",
    } as Record<Ingredient["category"], string>,
  },
} as const;

interface Props {
  locale: Locale;
  // Which direction the page is framed around. Affects initial focus and order
  // of fields, not the math. User can swap freely.
  defaultDirection: Direction;
  // Optional: lock the ingredient picker to a specific ingredient (for
  // ingredient-specific landing pages like /flour-cups-to-grams).
  lockIngredientId?: string;
}

export function CupsGramsConverter({ locale, defaultDirection, lockIngredientId }: Props) {
  const s = STRINGS[locale];

  const initialIngredient =
    INGREDIENTS.find((i) => i.id === (lockIngredientId || "flour-ap")) || INGREDIENTS[0];
  const [ingredientId, setIngredientId] = useState(initialIngredient.id);
  const ingredient =
    INGREDIENTS.find((i) => i.id === ingredientId) || initialIngredient;

  const [direction, setDirection] = useState<Direction>(defaultDirection);
  const [cupsText, setCupsText] = useState("1");
  const [gramsText, setGramsText] = useState(
    formatAmount(initialIngredient.gramsPerCup, { decimal: true, decimals: 1 }),
  );

  // `lastEdited` tracks which side the user is currently editing so the other
  // side recomputes without a feedback loop.
  const lastEdited = useRef<"cups" | "grams">(
    defaultDirection === "cups-to-grams" ? "cups" : "grams",
  );

  // Recompute when ingredient changes by re-projecting from the last-edited side.
  useEffect(() => {
    if (lastEdited.current === "cups") {
      const cups = parseAmount(cupsText);
      if (cups !== null) {
        const grams = volumeToGrams(cups, "cup", ingredient.gramsPerCup);
        if (grams !== null) {
          setGramsText(formatAmount(grams, { decimal: true, decimals: 1 }));
        }
      }
    } else {
      const grams = parseAmount(gramsText);
      if (grams !== null) {
        const cups = gramsToVolume(grams, "cup", ingredient.gramsPerCup);
        if (cups !== null) {
          setCupsText(formatAmount(cups));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredientId]);

  function handleCupsChange(value: string) {
    setCupsText(value);
    lastEdited.current = "cups";
    const cups = parseAmount(value);
    if (cups === null) return;
    const grams = volumeToGrams(cups, "cup", ingredient.gramsPerCup);
    if (grams !== null) {
      setGramsText(formatAmount(grams, { decimal: true, decimals: 1 }));
    }
  }

  function handleGramsChange(value: string) {
    setGramsText(value);
    lastEdited.current = "grams";
    const grams = parseAmount(value);
    if (grams === null) return;
    const cups = gramsToVolume(grams, "cup", ingredient.gramsPerCup);
    if (cups !== null) {
      setCupsText(formatAmount(cups));
    }
  }

  function applyQuickCups(value: number) {
    handleCupsChange(formatAmount(value));
  }

  function applyQuickGrams(value: number) {
    handleGramsChange(String(value));
  }

  function swapDirection() {
    setDirection((d) => (d === "cups-to-grams" ? "grams-to-cups" : "cups-to-grams"));
  }

  const cupsInvalid = cupsText.trim() !== "" && parseAmount(cupsText) === null;
  const gramsInvalid = gramsText.trim() !== "" && parseAmount(gramsText) === null;

  const grouped = useMemo(() => groupIngredients(), []);

  return (
    <section className="kc-card p-4 sm:p-6">
      {/* Ingredient picker */}
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-[color:var(--color-ink-muted)]">
          {s.ingredientLabel}
        </span>
        <select
          value={ingredientId}
          disabled={!!lockIngredientId}
          onChange={(e) => setIngredientId(e.target.value)}
          className="kc-input w-full px-3 py-3 text-base disabled:opacity-70"
        >
          {grouped.map((group) => (
            <optgroup key={group.category} label={s.categories[group.category]}>
              {group.items.map((it) => (
                <option key={it.id} value={it.id}>
                  {it.names[locale]}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>

      {/* Conversion fields. Visual order flips based on direction. */}
      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-end gap-2 sm:gap-3">
        {direction === "cups-to-grams" ? (
          <>
            <NumberField
              label={s.cupsLabel}
              value={cupsText}
              onChange={handleCupsChange}
              invalid={cupsInvalid}
              autoFocus
            />
            <SwapButton onClick={swapDirection} label={s.swap} />
            <NumberField
              label={s.gramsLabel}
              value={gramsText}
              onChange={handleGramsChange}
              invalid={gramsInvalid}
            />
          </>
        ) : (
          <>
            <NumberField
              label={s.gramsLabel}
              value={gramsText}
              onChange={handleGramsChange}
              invalid={gramsInvalid}
              autoFocus
            />
            <SwapButton onClick={swapDirection} label={s.swap} />
            <NumberField
              label={s.cupsLabel}
              value={cupsText}
              onChange={handleCupsChange}
              invalid={cupsInvalid}
            />
          </>
        )}
      </div>

      {(cupsInvalid || gramsInvalid) && (
        <p className="mt-2 text-xs text-[color:var(--color-warm-strong)]">{s.invalid}</p>
      )}

      {/* Quick fills */}
      <div className="mt-5 space-y-3">
        <QuickRow
          label={direction === "cups-to-grams" ? s.quickCups : s.quickGrams}
          values={direction === "cups-to-grams" ? QUICK_CUPS : QUICK_GRAMS}
          onPick={direction === "cups-to-grams" ? applyQuickCups : applyQuickGrams}
          locale={locale}
          kind={direction === "cups-to-grams" ? "cup" : "gram"}
        />
      </div>

      {/* Density note for transparency and GEO citation */}
      <p className="mt-5 text-xs text-[color:var(--color-ink-muted)]">
        {s.densityNoteIntro}{" "}
        <strong className="font-semibold text-[color:var(--color-ink)]">
          {ingredient.gramsPerCup} {s.densityNoteUnit}
        </strong>{" "}
        {s.densityNoteOf} {ingredient.names[locale].toLowerCase()}. {s.sourceNote}
      </p>

      {/* Optional ingredient note (e.g. flour spoon-and-level guidance) */}
      {ingredient.notes?.[locale] && (
        <p className="mt-2 rounded-md border-l-4 border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/8 p-3 text-sm text-[color:var(--color-ink)]">
          {ingredient.notes[locale]}
        </p>
      )}
    </section>
  );
}

function NumberField({
  label,
  value,
  onChange,
  invalid,
  autoFocus,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  invalid: boolean;
  autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-[color:var(--color-ink-muted)]">{label}</span>
      <input
        type="text"
        inputMode="decimal"
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={invalid}
        className="kc-input kc-result w-full px-3 py-3 text-2xl"
      />
    </label>
  );
}

function SwapButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="kc-btn-secondary mb-1 inline-flex h-11 w-11 items-center justify-center self-end rounded-full text-base text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]"
    >
      <span aria-hidden="true">⇄</span>
    </button>
  );
}

function QuickRow({
  label,
  values,
  onPick,
  locale,
  kind,
}: {
  label: string;
  values: number[];
  onPick: (v: number) => void;
  locale: Locale;
  kind: "cup" | "gram";
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-muted)]">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {values.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => onPick(v)}
            className="kc-btn-secondary px-3 py-1.5 text-sm font-medium text-[color:var(--color-ink)]"
          >
            {kind === "cup"
              ? formatAmount(v)
              : `${v} ${locale === "es" ? "g" : "g"}`}
          </button>
        ))}
      </div>
    </div>
  );
}

function groupIngredients() {
  const order: Ingredient["category"][] = ["flour", "sugar", "fat", "liquid", "grain", "other"];
  return order.map((category) => ({
    category,
    items: INGREDIENTS.filter((i) => i.category === category),
  }));
}
