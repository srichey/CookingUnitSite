"use client";

// Butter is its own thing: US sticks, tablespoons, cups, and grams all map cleanly.
// One US stick = 1/2 cup = 8 tbsp = 113 g.

import { useState } from "react";
import type { Locale } from "@/lib/site";
import { formatAmount, parseAmount } from "@/lib/format";

// Anchor: grams. All units derive from grams to keep math symmetrical.
const G_PER_STICK = 113.398;
const G_PER_TBSP = G_PER_STICK / 8;
const G_PER_CUP = G_PER_STICK * 2;
const G_PER_OUNCE = 28.3495231;
const G_PER_POUND = 453.59237;

type Field = "sticks" | "tbsp" | "cups" | "grams" | "ounces" | "pounds";

const STRINGS = {
  en: {
    sticks: "Sticks (US)",
    tbsp: "Tablespoons",
    cups: "Cups",
    grams: "Grams",
    ounces: "Ounces",
    pounds: "Pounds",
    note: "US stick butter: 1 stick = 1/2 cup = 8 tbsp = 113 g (4 oz).",
  },
  es: {
    sticks: "Barras (EE. UU.)",
    tbsp: "Cucharadas",
    cups: "Tazas",
    grams: "Gramos",
    ounces: "Onzas",
    pounds: "Libras",
    note: "Mantequilla en barra estadounidense: 1 barra = 1/2 taza = 8 cucharadas = 113 g (4 oz).",
  },
};

const ALL_FIELDS: Field[] = ["sticks", "tbsp", "cups", "grams", "ounces", "pounds"];

function gramsFrom(field: Field, value: number): number {
  switch (field) {
    case "sticks": return value * G_PER_STICK;
    case "tbsp": return value * G_PER_TBSP;
    case "cups": return value * G_PER_CUP;
    case "grams": return value;
    case "ounces": return value * G_PER_OUNCE;
    case "pounds": return value * G_PER_POUND;
  }
}

function fromGrams(field: Field, grams: number): number {
  switch (field) {
    case "sticks": return grams / G_PER_STICK;
    case "tbsp": return grams / G_PER_TBSP;
    case "cups": return grams / G_PER_CUP;
    case "grams": return grams;
    case "ounces": return grams / G_PER_OUNCE;
    case "pounds": return grams / G_PER_POUND;
  }
}

interface Props {
  locale: Locale;
}

export function ButterConverter({ locale }: Props) {
  const s = STRINGS[locale];
  const [texts, setTexts] = useState<Record<Field, string>>({
    sticks: "1",
    tbsp: "8",
    cups: "0.5",
    grams: "113.4",
    ounces: "4",
    pounds: "0.25",
  });

  function update(field: Field, value: string) {
    const v = parseAmount(value);
    if (v === null) {
      setTexts((t) => ({ ...t, [field]: value }));
      return;
    }
    const g = gramsFrom(field, v);
    setTexts(() => {
      const next: Record<Field, string> = { ...texts, [field]: value };
      for (const f of ALL_FIELDS) {
        if (f === field) continue;
        next[f] = formatAmount(fromGrams(f, g), {
          decimal: f === "grams" || f === "ounces" || f === "pounds",
          decimals: f === "grams" ? 1 : 2,
        });
      }
      return next;
    });
  }

  return (
    <section className="kc-card p-4 sm:p-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <ButterField label={s.sticks} value={texts.sticks} onChange={(v) => update("sticks", v)} />
        <ButterField label={s.tbsp} value={texts.tbsp} onChange={(v) => update("tbsp", v)} />
        <ButterField label={s.cups} value={texts.cups} onChange={(v) => update("cups", v)} />
        <ButterField label={s.grams} value={texts.grams} onChange={(v) => update("grams", v)} />
        <ButterField label={s.ounces} value={texts.ounces} onChange={(v) => update("ounces", v)} />
        <ButterField label={s.pounds} value={texts.pounds} onChange={(v) => update("pounds", v)} />
      </div>
      <p className="mt-4 text-xs text-[color:var(--color-ink-muted)]">{s.note}</p>
    </section>
  );
}

function ButterField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-[color:var(--color-ink-muted)]">{label}</span>
      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="kc-input kc-result w-full px-3 py-2.5 text-xl"
      />
    </label>
  );
}
