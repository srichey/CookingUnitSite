// Core conversion logic.
//
// All volume conversions use the US customary cup of 236.5882365 ml as
// canonical. The metric cup (250 ml) is more common in Australia and
// some European recipes; if needed later, add a CupSystem option.

export type Unit =
  | "cup"
  | "tablespoon"
  | "teaspoon"
  | "milliliter"
  | "liter"
  | "fluid_ounce"
  | "gram"
  | "kilogram"
  | "ounce"
  | "pound"
  | "pinch"
  | "stick"
  | "count";

export const VOLUME_UNITS: Unit[] = [
  "cup",
  "tablespoon",
  "teaspoon",
  "milliliter",
  "liter",
  "fluid_ounce",
];

export const WEIGHT_UNITS: Unit[] = [
  "gram",
  "kilogram",
  "ounce",
  "pound",
];

export function isVolume(unit: Unit): boolean {
  return VOLUME_UNITS.includes(unit);
}

export function isWeight(unit: Unit): boolean {
  return WEIGHT_UNITS.includes(unit);
}

// Conversion factors to milliliters (for volumes).
const ML_PER_UNIT: Partial<Record<Unit, number>> = {
  cup: 236.5882365,
  tablespoon: 14.7867647,
  teaspoon: 4.92892159,
  milliliter: 1,
  liter: 1000,
  fluid_ounce: 29.5735296,
};

// Conversion factors to grams (for weights).
const G_PER_UNIT: Partial<Record<Unit, number>> = {
  gram: 1,
  kilogram: 1000,
  ounce: 28.3495231,
  pound: 453.59237,
};

// Stick is a butter-specific count; treat as 8 tbsp for any ingredient when used.
// Pinch is informal; treat as 1/16 teaspoon.
const SPECIAL_AS_ML: Partial<Record<Unit, number>> = {
  stick: 118.29411825, // 8 tbsp
  pinch: 0.308057599, // 1/16 tsp
};

export function toMilliliters(amount: number, unit: Unit): number | null {
  if (unit in ML_PER_UNIT) return amount * (ML_PER_UNIT[unit] as number);
  if (unit in SPECIAL_AS_ML) return amount * (SPECIAL_AS_ML[unit] as number);
  return null;
}

export function toGrams(amount: number, unit: Unit): number | null {
  if (unit in G_PER_UNIT) return amount * (G_PER_UNIT[unit] as number);
  return null;
}

// Volume to weight requires an ingredient density (g per cup).
export function volumeToGrams(
  amount: number,
  unit: Unit,
  gramsPerCup: number,
): number | null {
  const ml = toMilliliters(amount, unit);
  if (ml === null) return null;
  // 1 cup = 236.5882365 ml. Scale density.
  return (ml / ML_PER_UNIT.cup!) * gramsPerCup;
}

export function gramsToVolume(
  grams: number,
  unit: Unit,
  gramsPerCup: number,
): number | null {
  if (!(unit in ML_PER_UNIT)) return null;
  const ml = (grams / gramsPerCup) * ML_PER_UNIT.cup!;
  return ml / (ML_PER_UNIT[unit] as number);
}

// Temperature.
export function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9;
}
export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

// Recipe scaling factor.
export function scalingFactor(
  originalServings: number,
  desiredServings: number,
): number {
  if (originalServings <= 0) return 1;
  return desiredServings / originalServings;
}
