"use client";

import { useState } from "react";
import type { Locale } from "@/lib/site";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "@/lib/conversions";
import { formatAmount, parseAmount } from "@/lib/format";

interface Props {
  locale: Locale;
  defaultDirection: "f-to-c" | "c-to-f";
  defaultValue?: number;
}

const STRINGS = {
  en: {
    fahrenheit: "Fahrenheit",
    celsius: "Celsius",
    gasMark: "Gas mark",
    swap: "Swap",
    chart: "Common oven temperatures",
    note: "These are common baking temperatures with gas mark equivalents.",
  },
  es: {
    fahrenheit: "Fahrenheit",
    celsius: "Celsius",
    gasMark: "Marca de gas",
    swap: "Cambiar",
    chart: "Temperaturas comunes del horno",
    note: "Temperaturas comunes de repostería con sus equivalentes en marca de gas.",
  },
};

const OVEN_CHART = [
  { f: 250, c: 121, gas: 0.5, label: { en: "Very low", es: "Muy baja" } },
  { f: 275, c: 135, gas: 1, label: { en: "Low", es: "Baja" } },
  { f: 300, c: 150, gas: 2, label: { en: "Low", es: "Baja" } },
  { f: 325, c: 163, gas: 3, label: { en: "Moderate", es: "Moderada" } },
  { f: 350, c: 177, gas: 4, label: { en: "Moderate", es: "Moderada" } },
  { f: 375, c: 191, gas: 5, label: { en: "Moderate-hot", es: "Moderada-alta" } },
  { f: 400, c: 204, gas: 6, label: { en: "Hot", es: "Alta" } },
  { f: 425, c: 218, gas: 7, label: { en: "Hot", es: "Alta" } },
  { f: 450, c: 232, gas: 8, label: { en: "Very hot", es: "Muy alta" } },
  { f: 475, c: 246, gas: 9, label: { en: "Very hot", es: "Muy alta" } },
];

export function TemperatureConverter({ locale, defaultDirection, defaultValue = 350 }: Props) {
  const s = STRINGS[locale];
  const startF = defaultDirection === "f-to-c" ? defaultValue : celsiusToFahrenheit(defaultValue);
  const startC = defaultDirection === "f-to-c" ? fahrenheitToCelsius(defaultValue) : defaultValue;
  const [fText, setFText] = useState(formatAmount(startF, { decimal: true, decimals: 1 }));
  const [cText, setCText] = useState(formatAmount(startC, { decimal: true, decimals: 1 }));

  const fNum = parseAmount(fText);

  function handleFChange(value: string) {
    setFText(value);
    const n = parseAmount(value);
    if (n !== null) setCText(formatAmount(fahrenheitToCelsius(n), { decimal: true, decimals: 1 }));
  }

  function handleCChange(value: string) {
    setCText(value);
    const n = parseAmount(value);
    if (n !== null) setFText(formatAmount(celsiusToFahrenheit(n), { decimal: true, decimals: 1 }));
  }

  function quickPickF(f: number) {
    handleFChange(String(f));
  }

  const closestGas =
    fNum !== null
      ? OVEN_CHART.reduce((best, row) =>
          Math.abs(row.f - fNum) < Math.abs(best.f - fNum) ? row : best,
        ).gas
      : null;

  return (
    <section className="kc-card p-4 sm:p-6">
      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2 sm:gap-3">
        <FieldF locale={locale} label={s.fahrenheit} value={fText} onChange={handleFChange} />
        <button
          type="button"
          aria-label={s.swap}
          title={s.swap}
          onClick={() => {
            const oldF = fText;
            handleFChange(cText);
            handleCChange(oldF);
          }}
          className="kc-btn-secondary mb-1 inline-flex h-11 w-11 items-center justify-center self-end rounded-full text-[color:var(--color-ink-muted)]"
        >
          <span aria-hidden="true">⇄</span>
        </button>
        <FieldF locale={locale} label={s.celsius} value={cText} onChange={handleCChange} />
      </div>
      {closestGas !== null && (
        <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
          {s.gasMark}:{" "}
          <strong className="text-[color:var(--color-ink)]">
            {closestGas === 0.5 ? "1/2" : closestGas}
          </strong>
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {[300, 325, 350, 375, 400, 425, 450].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => quickPickF(f)}
            className="kc-btn-secondary px-3 py-1.5 text-sm font-medium"
          >
            {f}°F
          </button>
        ))}
      </div>

      <details className="mt-6 rounded-md border border-[color:var(--color-line)] bg-white/40 p-3 text-sm">
        <summary className="cursor-pointer font-medium text-[color:var(--color-ink)]">
          {s.chart}
        </summary>
        <table className="mt-3 w-full text-sm">
          <thead className="text-left text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-muted)]">
            <tr>
              <th className="py-1">°F</th>
              <th className="py-1">°C</th>
              <th className="py-1">{s.gasMark}</th>
              <th className="py-1">{locale === "es" ? "Calor" : "Heat"}</th>
            </tr>
          </thead>
          <tbody className="text-[color:var(--color-ink)]">
            {OVEN_CHART.map((row) => (
              <tr key={row.f} className="border-t border-[color:var(--color-line)]">
                <td className="py-1 tabular-nums">{row.f}°</td>
                <td className="py-1 tabular-nums">{row.c}°</td>
                <td className="py-1 tabular-nums">{row.gas === 0.5 ? "1/2" : row.gas}</td>
                <td className="py-1">{row.label[locale]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-xs text-[color:var(--color-ink-muted)]">{s.note}</p>
      </details>
    </section>
  );
}

function FieldF({
  locale: _locale,
  label,
  value,
  onChange,
}: {
  locale: Locale;
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
        className="kc-input kc-result w-full px-3 py-3 text-2xl"
      />
    </label>
  );
}
