// Unit label and parsing helpers. The display layer (and the search-engine answer)
// reads short, plural-aware labels in EN and ES. The parser accepts loose user
// input ("1 1/2 cups", "0.5 cup", "1/2c") and returns a normalised amount + Unit.

import type { Unit } from "./conversions";
import type { Locale } from "./site";

export interface UnitDescriptor {
  unit: Unit;
  // Singular and plural labels per locale.
  labels: Record<Locale, { singular: string; plural: string; short: string }>;
  // Lowercased synonyms the parser accepts.
  synonyms: string[];
  group: "volume" | "weight" | "informal";
}

export const UNITS: UnitDescriptor[] = [
  {
    unit: "cup",
    labels: {
      en: { singular: "cup", plural: "cups", short: "c" },
      es: { singular: "taza", plural: "tazas", short: "tz" },
    },
    synonyms: ["cup", "cups", "c", "taza", "tazas", "tz"],
    group: "volume",
  },
  {
    unit: "tablespoon",
    labels: {
      en: { singular: "tablespoon", plural: "tablespoons", short: "tbsp" },
      es: { singular: "cucharada", plural: "cucharadas", short: "cda" },
    },
    synonyms: [
      "tablespoon",
      "tablespoons",
      "tbsp",
      "tbs",
      "tb",
      "cucharada",
      "cucharadas",
      "cda",
      "cdas",
    ],
    group: "volume",
  },
  {
    unit: "teaspoon",
    labels: {
      en: { singular: "teaspoon", plural: "teaspoons", short: "tsp" },
      es: { singular: "cucharadita", plural: "cucharaditas", short: "cdta" },
    },
    synonyms: [
      "teaspoon",
      "teaspoons",
      "tsp",
      "ts",
      "cucharadita",
      "cucharaditas",
      "cdta",
      "cdtas",
    ],
    group: "volume",
  },
  {
    unit: "milliliter",
    labels: {
      en: { singular: "milliliter", plural: "milliliters", short: "ml" },
      es: { singular: "mililitro", plural: "mililitros", short: "ml" },
    },
    synonyms: ["ml", "milliliter", "milliliters", "millilitre", "millilitres", "mililitro", "mililitros"],
    group: "volume",
  },
  {
    unit: "liter",
    labels: {
      en: { singular: "liter", plural: "liters", short: "L" },
      es: { singular: "litro", plural: "litros", short: "L" },
    },
    synonyms: ["l", "liter", "liters", "litre", "litres", "litro", "litros"],
    group: "volume",
  },
  {
    unit: "fluid_ounce",
    labels: {
      en: { singular: "fluid ounce", plural: "fluid ounces", short: "fl oz" },
      es: { singular: "onza líquida", plural: "onzas líquidas", short: "fl oz" },
    },
    synonyms: ["fl oz", "fluid ounce", "fluid ounces", "floz", "fl. oz.", "onza liquida", "onzas liquidas"],
    group: "volume",
  },
  {
    unit: "gram",
    labels: {
      en: { singular: "gram", plural: "grams", short: "g" },
      es: { singular: "gramo", plural: "gramos", short: "g" },
    },
    synonyms: ["g", "gram", "grams", "gramo", "gramos"],
    group: "weight",
  },
  {
    unit: "kilogram",
    labels: {
      en: { singular: "kilogram", plural: "kilograms", short: "kg" },
      es: { singular: "kilogramo", plural: "kilogramos", short: "kg" },
    },
    synonyms: ["kg", "kilogram", "kilograms", "kilogramo", "kilogramos", "kilo", "kilos"],
    group: "weight",
  },
  {
    unit: "ounce",
    labels: {
      en: { singular: "ounce", plural: "ounces", short: "oz" },
      es: { singular: "onza", plural: "onzas", short: "oz" },
    },
    synonyms: ["oz", "ounce", "ounces", "onza", "onzas"],
    group: "weight",
  },
  {
    unit: "pound",
    labels: {
      en: { singular: "pound", plural: "pounds", short: "lb" },
      es: { singular: "libra", plural: "libras", short: "lb" },
    },
    synonyms: ["lb", "lbs", "pound", "pounds", "libra", "libras"],
    group: "weight",
  },
  {
    unit: "pinch",
    labels: {
      en: { singular: "pinch", plural: "pinches", short: "pinch" },
      es: { singular: "pizca", plural: "pizcas", short: "pizca" },
    },
    synonyms: ["pinch", "pinches", "pizca", "pizcas"],
    group: "informal",
  },
  {
    unit: "stick",
    labels: {
      en: { singular: "stick", plural: "sticks", short: "stick" },
      es: { singular: "barra", plural: "barras", short: "barra" },
    },
    synonyms: ["stick", "sticks", "barra", "barras"],
    group: "informal",
  },
  {
    unit: "count",
    labels: {
      en: { singular: "", plural: "", short: "" },
      es: { singular: "", plural: "", short: "" },
    },
    synonyms: [],
    group: "informal",
  },
];

export function getUnit(unit: Unit): UnitDescriptor {
  const found = UNITS.find((u) => u.unit === unit);
  if (!found) throw new Error(`Unknown unit: ${unit}`);
  return found;
}

export function formatUnit(unit: Unit, amount: number, locale: Locale): string {
  const u = getUnit(unit);
  if (unit === "count") return "";
  const labels = u.labels[locale];
  const plural = Math.abs(amount - 1) > 0.0001;
  return plural ? labels.plural : labels.singular;
}
