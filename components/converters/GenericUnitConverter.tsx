"use client";

// Generic two-unit converter. Drives tablespoons-to-cups, ml-to-cups,
// ounces-to-grams, and any other future volume/weight pair pages.
// Math lives in lib/conversions.ts.

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/site";
import type { Unit } from "@/lib/conversions";
import { isVolume, isWeight, toMilliliters, toGrams } from "@/lib/conversions";
import { UNITS, formatUnit } from "@/lib/units";
import { formatAmount, parseAmount } from "@/lib/format";

type UnitGroup = "volume" | "weight";

interface Props {
  locale: Locale;
  group: UnitGroup;
  defaultFromUnit: Unit;
  defaultToUnit: Unit;
  // Defaults to fill in so the page is useful without typing.
  defaultFromValue: number;
}

export function GenericUnitConverter({
  locale,
  group,
  defaultFromUnit,
  defaultToUnit,
  defaultFromValue,
}: Props) {
  const [fromUnit, setFromUnit] = useState<Unit>(defaultFromUnit);
  const [toUnit, setToUnit] = useState<Unit>(defaultToUnit);
  const [fromText, setFromText] = useState(formatAmount(defaultFromValue));
  const [toText, setToText] = useState(() =>
    formatAmount(convert(defaultFromValue, defaultFromUnit, defaultToUnit, group) ?? 0, {
      decimal: true,
      decimals: 3,
    }),
  );
  const lastEdited = useRef<"from" | "to">("from");

  // Filter unit list to the active group, drop "count".
  const unitOptions = UNITS.filter((u) => {
    if (u.unit === "count") return false;
    return group === "volume" ? isVolume(u.unit) : isWeight(u.unit);
  });

  useEffect(() => {
    if (lastEdited.current === "from") {
      const v = parseAmount(fromText);
      if (v === null) return;
      const result = convert(v, fromUnit, toUnit, group);
      if (result !== null) setToText(formatAmount(result, { decimal: true, decimals: 3 }));
    } else {
      const v = parseAmount(toText);
      if (v === null) return;
      const result = convert(v, toUnit, fromUnit, group);
      if (result !== null) setFromText(formatAmount(result, { decimal: true, decimals: 3 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromUnit, toUnit, group]);

  function handleFromChange(value: string) {
    setFromText(value);
    lastEdited.current = "from";
    const v = parseAmount(value);
    if (v === null) return;
    const result = convert(v, fromUnit, toUnit, group);
    if (result !== null) setToText(formatAmount(result, { decimal: true, decimals: 3 }));
  }

  function handleToChange(value: string) {
    setToText(value);
    lastEdited.current = "to";
    const v = parseAmount(value);
    if (v === null) return;
    const result = convert(v, toUnit, fromUnit, group);
    if (result !== null) setFromText(formatAmount(result, { decimal: true, decimals: 3 }));
  }

  function swap() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromText(toText);
    setToText(fromText);
  }

  const swapLabel = locale === "es" ? "Cambiar" : "Swap";
  const fromInvalid = parseAmount(fromText) === null && fromText.trim() !== "";
  const toInvalid = parseAmount(toText) === null && toText.trim() !== "";

  return (
    <section className="kc-card p-4 sm:p-6">
      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2 sm:gap-3">
        <UnitField
          locale={locale}
          unit={fromUnit}
          value={fromText}
          options={unitOptions}
          onChangeUnit={setFromUnit}
          onChangeValue={handleFromChange}
          invalid={fromInvalid}
          autoFocus
        />
        <button
          type="button"
          onClick={swap}
          aria-label={swapLabel}
          title={swapLabel}
          className="kc-btn-secondary mb-1 inline-flex h-11 w-11 items-center justify-center self-end rounded-full text-base text-[color:var(--color-ink-muted)]"
        >
          <span aria-hidden="true">⇄</span>
        </button>
        <UnitField
          locale={locale}
          unit={toUnit}
          value={toText}
          options={unitOptions}
          onChangeUnit={setToUnit}
          onChangeValue={handleToChange}
          invalid={toInvalid}
        />
      </div>
      <p className="mt-3 text-xs text-[color:var(--color-ink-muted)]">
        {locale === "es"
          ? "Cambia las unidades o escribe en cualquiera de los dos cuadros."
          : "Pick units or type in either box."}
      </p>
    </section>
  );
}

function UnitField({
  locale,
  unit,
  value,
  options,
  onChangeUnit,
  onChangeValue,
  invalid,
  autoFocus,
}: {
  locale: Locale;
  unit: Unit;
  value: string;
  options: typeof UNITS;
  onChangeUnit: (u: Unit) => void;
  onChangeValue: (v: string) => void;
  invalid: boolean;
  autoFocus?: boolean;
}) {
  const n = parseAmount(value);
  const labelN = n === null ? 1 : n;
  return (
    <div>
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-[color:var(--color-ink-muted)]">
          {formatUnit(unit, labelN, locale) || (locale === "es" ? "Valor" : "Value")}
        </span>
        <input
          type="text"
          inputMode="decimal"
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => onChangeValue(e.target.value)}
          aria-invalid={invalid}
          className="kc-input kc-result w-full px-3 py-3 text-2xl"
        />
      </label>
      <select
        value={unit}
        onChange={(e) => onChangeUnit(e.target.value as Unit)}
        className="kc-input mt-2 w-full px-3 py-2 text-sm"
      >
        {options.map((u) => (
          <option key={u.unit} value={u.unit}>
            {u.labels[locale].plural} ({u.labels[locale].short})
          </option>
        ))}
      </select>
    </div>
  );
}

function convert(value: number, from: Unit, to: Unit, group: UnitGroup): number | null {
  if (from === to) return value;
  if (group === "volume") {
    const ml = toMilliliters(value, from);
    if (ml === null) return null;
    // Reverse: ml back to target unit by dividing.
    const oneTo = toMilliliters(1, to);
    if (oneTo === null || oneTo === 0) return null;
    return ml / oneTo;
  }
  if (group === "weight") {
    const g = toGrams(value, from);
    if (g === null) return null;
    const oneTo = toGrams(1, to);
    if (oneTo === null || oneTo === 0) return null;
    return g / oneTo;
  }
  return null;
}
