"use client";

import { useId, useMemo, useState } from "react";
import type { Unit } from "@/lib/conversions";
import { scalingFactor } from "@/lib/conversions";
import { UNITS, formatUnit } from "@/lib/units";
import { formatAmount, parseAmount } from "@/lib/format";
import type { Locale } from "@/lib/site";

interface Row {
  id: number;
  name: string;
  amount: string;
  unit: Unit;
}

const STARTER_ROWS: Row[] = [
  { id: 1, name: "Flour", amount: "2", unit: "cup" },
  { id: 2, name: "Sugar", amount: "1", unit: "cup" },
  { id: 3, name: "Butter", amount: "4", unit: "tablespoon" },
];

const STARTER_ROWS_ES: Row[] = [
  { id: 1, name: "Harina", amount: "2", unit: "cup" },
  { id: 2, name: "Azúcar", amount: "1", unit: "cup" },
  { id: 3, name: "Mantequilla", amount: "4", unit: "tablespoon" },
];

interface Strings {
  originalServings: string;
  desiredServings: string;
  halve: string;
  double: string;
  triple: string;
  reset: string;
  ingredient: string;
  amount: string;
  unit: string;
  remove: string;
  addIngredient: string;
  scaledTitle: string;
  factor: string;
  copy: string;
  copied: string;
  print: string;
  unitNone: string;
}

const STRINGS_BY_LOCALE: Record<Locale, Strings> = {
  en: {
    originalServings: "Original servings",
    desiredServings: "Desired servings",
    halve: "Halve",
    double: "Double",
    triple: "Triple",
    reset: "Reset",
    ingredient: "Ingredient",
    amount: "Amount",
    unit: "Unit",
    remove: "Remove",
    addIngredient: "Add ingredient",
    scaledTitle: "Scaled recipe",
    factor: "Scaling factor",
    copy: "Copy",
    copied: "Copied",
    print: "Print",
    unitNone: "(no unit)",
  },
  es: {
    originalServings: "Porciones originales",
    desiredServings: "Porciones deseadas",
    halve: "Mitad",
    double: "Doble",
    triple: "Triple",
    reset: "Reiniciar",
    ingredient: "Ingrediente",
    amount: "Cantidad",
    unit: "Unidad",
    remove: "Quitar",
    addIngredient: "Agregar ingrediente",
    scaledTitle: "Receta ajustada",
    factor: "Factor de ajuste",
    copy: "Copiar",
    copied: "Copiado",
    print: "Imprimir",
    unitNone: "(sin unidad)",
  },
};

interface Props {
  locale: Locale;
}

export function RecipeScalerForm({ locale }: Props) {
  const strings = STRINGS_BY_LOCALE[locale];
  const reactId = useId();
  const [originalServings, setOriginalServings] = useState("4");
  const [desiredServings, setDesiredServings] = useState("8");
  const [rows, setRows] = useState<Row[]>(
    locale === "es" ? STARTER_ROWS_ES : STARTER_ROWS,
  );
  const [nextId, setNextId] = useState(rows.length + 1);
  const [copied, setCopied] = useState(false);

  const origNum = parseAmount(originalServings) || 0;
  const desNum = parseAmount(desiredServings) || 0;
  const factor = useMemo(
    () => scalingFactor(origNum || 1, desNum || origNum || 1),
    [origNum, desNum],
  );

  function applyPreset(multiplier: number) {
    const newDesired = (origNum || 1) * multiplier;
    setDesiredServings(formatAmount(newDesired, { decimal: false }));
  }

  function updateRow(id: number, patch: Partial<Row>) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }

  function removeRow(id: number) {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  function addRow() {
    setRows((prev) => [
      ...prev,
      { id: nextId, name: "", amount: "", unit: "cup" },
    ]);
    setNextId((n) => n + 1);
  }

  function reset() {
    setOriginalServings("4");
    setDesiredServings("8");
    setRows(locale === "es" ? STARTER_ROWS_ES : STARTER_ROWS);
    setNextId(STARTER_ROWS.length + 1);
  }

  const scaledRows = rows.map((row) => {
    const parsed = parseAmount(row.amount);
    const scaled = parsed === null ? null : parsed * factor;
    return { ...row, scaled };
  });

  async function copyToClipboard() {
    const lines = scaledRows
      .filter((r) => r.name.trim() || r.scaled !== null)
      .map((r) => {
        if (r.scaled === null) return r.name;
        const amount = formatAmount(r.scaled);
        const unitLabel = r.unit === "count" ? "" : ` ${formatUnit(r.unit, r.scaled, locale)}`;
        return `${amount}${unitLabel} ${r.name}`.trim();
      });
    const header =
      locale === "es"
        ? `Receta para ${formatAmount(desNum || origNum)} porciones:`
        : `Recipe for ${formatAmount(desNum || origNum)} servings:`;
    const text = `${header}\n${lines.join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail on non-secure contexts. Quietly ignore.
    }
  }

  function print() {
    window.print();
  }

  return (
    <section
      aria-labelledby={`${reactId}-heading`}
      className="kc-card p-4 sm:p-6"
    >
      <h2 id={`${reactId}-heading`} className="sr-only">
        {strings.scaledTitle}
      </h2>

      {/* Servings row */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-[color:var(--color-ink-muted)]">
            {strings.originalServings}
          </span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="any"
            value={originalServings}
            onChange={(e) => setOriginalServings(e.target.value)}
            className="kc-input w-full px-3 py-3 text-lg"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-[color:var(--color-ink-muted)]">
            {strings.desiredServings}
          </span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="any"
            value={desiredServings}
            onChange={(e) => setDesiredServings(e.target.value)}
            className="kc-input w-full px-3 py-3 text-lg"
          />
        </label>
      </div>

      {/* Quick presets */}
      <div className="mt-3 flex flex-wrap gap-2 no-print">
        <PresetButton onClick={() => applyPreset(0.5)}>{strings.halve}</PresetButton>
        <PresetButton onClick={() => applyPreset(2)}>{strings.double}</PresetButton>
        <PresetButton onClick={() => applyPreset(3)}>{strings.triple}</PresetButton>
        <PresetButton onClick={reset} variant="ghost">
          {strings.reset}
        </PresetButton>
        <span className="ml-auto self-center text-sm text-[color:var(--color-ink-muted)]">
          {strings.factor}: <span className="font-medium text-[color:var(--color-ink)]">×{formatAmount(factor, { decimal: true, decimals: 3 })}</span>
        </span>
      </div>

      {/* Ingredients editor */}
      <div className="mt-6 space-y-2">
        <div className="hidden text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-muted)] sm:grid sm:grid-cols-[1fr_5.5rem_8rem_2.5rem] sm:gap-2 no-print">
          <span>{strings.ingredient}</span>
          <span>{strings.amount}</span>
          <span>{strings.unit}</span>
          <span className="sr-only">{strings.remove}</span>
        </div>
        {rows.map((row) => (
          <IngredientRow
            key={row.id}
            row={row}
            locale={locale}
            strings={strings}
            onChange={(patch) => updateRow(row.id, patch)}
            onRemove={() => removeRow(row.id)}
          />
        ))}
        <button
          type="button"
          onClick={addRow}
          className="no-print mt-2 inline-flex items-center gap-2 rounded-md border border-dashed border-[color:var(--color-line-strong)] px-3 py-2 text-sm font-medium text-[color:var(--color-ink-muted)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
        >
          <span aria-hidden="true">+</span> {strings.addIngredient}
        </button>
      </div>

      {/* Scaled output */}
      <div className="mt-8 rounded-md bg-[color:var(--color-line)]/40 p-4 sm:p-5">
        <h3 className="mb-3 font-serif text-lg font-semibold">
          {strings.scaledTitle} ({formatAmount(desNum || origNum)})
        </h3>
        <ul className="divide-y divide-[color:var(--color-line-strong)]/40">
          {scaledRows.map((r) => (
            <li
              key={r.id}
              className="flex items-baseline justify-between gap-3 py-2 text-base"
            >
              <span className="text-[color:var(--color-ink)]">
                {r.name || <span className="text-[color:var(--color-ink-muted)]/60">·</span>}
              </span>
              <span className="font-medium tabular-nums text-[color:var(--color-ink)]">
                {r.scaled !== null
                  ? `${formatAmount(r.scaled)}${
                      r.unit === "count"
                        ? ""
                        : " " + formatUnit(r.unit, r.scaled, locale)
                    }`
                  : ""}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2 no-print">
          <button
            type="button"
            onClick={copyToClipboard}
            className="kc-btn-primary px-4 py-2 text-sm font-medium"
          >
            {copied ? strings.copied : strings.copy}
          </button>
          <button
            type="button"
            onClick={print}
            className="kc-btn-secondary px-4 py-2 text-sm font-medium"
          >
            {strings.print}
          </button>
        </div>
      </div>
    </section>
  );
}

function PresetButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "ghost";
}) {
  const base =
    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus)]";
  const styles =
    variant === "primary"
      ? "kc-btn-primary"
      : "kc-btn-secondary text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]";
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

function IngredientRow({
  row,
  locale,
  strings,
  onChange,
  onRemove,
}: {
  row: Row;
  locale: Locale;
  strings: Strings;
  onChange: (patch: Partial<Row>) => void;
  onRemove: () => void;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-2 sm:grid-cols-[1fr_5.5rem_8rem_2.5rem]">
      <input
        type="text"
        placeholder={strings.ingredient}
        value={row.name}
        onChange={(e) => onChange({ name: e.target.value })}
        className="kc-input col-span-2 px-3 py-2 text-base sm:col-span-1"
      />
      <input
        type="text"
        inputMode="decimal"
        placeholder={strings.amount}
        aria-label={strings.amount}
        value={row.amount}
        onChange={(e) => onChange({ amount: e.target.value })}
        className="kc-input px-3 py-2 text-base"
      />
      <select
        value={row.unit}
        aria-label={strings.unit}
        onChange={(e) => onChange({ unit: e.target.value as Unit })}
        className="kc-input px-2 py-2 text-base"
      >
        {UNITS.map((u) => (
          <option key={u.unit} value={u.unit}>
            {u.unit === "count" ? strings.unitNone : u.labels[locale].plural}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`${strings.remove} ${row.name}`}
        className="col-span-2 rounded-md border border-transparent px-2 py-2 text-[color:var(--color-ink-muted)] hover:bg-[color:var(--color-line)]/50 hover:text-[color:var(--color-warm-strong)] sm:col-span-1"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}
