// Ingredient density data. Volume-to-weight conversions depend on the ingredient.
// Sources: King Arthur Baking, USDA FoodData Central, ATK ingredient weight charts.
// grams_per_cup is the canonical reference; other units derive from it.
//
// IMPORTANT: when you add or change an entry here, also update
// public/data/ingredient-densities.json. That file is the public Dataset
// distribution referenced by the JSON-LD on /cups-to-grams. Until we have
// a build-time generator, both files must be edited together.

import type { Locale } from "./site";

export interface Ingredient {
  id: string;
  // Display names per locale.
  names: Record<Locale, string>;
  category: "flour" | "sugar" | "fat" | "liquid" | "grain" | "other";
  // Weight of one US cup (236.588 ml) of this ingredient, in grams.
  gramsPerCup: number;
  // Optional per-tablespoon override. If absent, computed as gramsPerCup / 16.
  gramsPerTablespoon?: number;
  // Short note shown near the ingredient picker.
  notes?: Record<Locale, string>;
}

export const INGREDIENTS: Ingredient[] = [
  {
    id: "water",
    names: { en: "Water", es: "Agua" },
    category: "liquid",
    gramsPerCup: 237,
  },
  {
    id: "milk-whole",
    names: { en: "Whole milk", es: "Leche entera" },
    category: "liquid",
    gramsPerCup: 245,
  },
  {
    id: "oil",
    names: { en: "Vegetable oil", es: "Aceite vegetal" },
    category: "liquid",
    gramsPerCup: 218,
  },
  {
    id: "flour-ap",
    names: { en: "All-purpose flour", es: "Harina común" },
    category: "flour",
    gramsPerCup: 120,
    notes: {
      en: "Spoon and level. Scooped flour packs heavier and throws bakes off.",
      es: "Cuchareada y nivelada. Si la sacas con la taza, queda compacta y altera la receta.",
    },
  },
  {
    id: "flour-bread",
    names: { en: "Bread flour", es: "Harina de pan" },
    category: "flour",
    gramsPerCup: 127,
  },
  {
    id: "flour-cake",
    names: { en: "Cake flour", es: "Harina para pastel" },
    category: "flour",
    gramsPerCup: 114,
  },
  {
    id: "flour-whole-wheat",
    names: { en: "Whole wheat flour", es: "Harina integral" },
    category: "flour",
    gramsPerCup: 113,
  },
  {
    id: "flour-almond",
    names: { en: "Almond flour", es: "Harina de almendra" },
    category: "flour",
    gramsPerCup: 96,
  },
  {
    id: "sugar-granulated",
    names: { en: "Granulated sugar", es: "Azúcar blanca" },
    category: "sugar",
    gramsPerCup: 200,
  },
  {
    id: "sugar-brown",
    names: { en: "Brown sugar (packed)", es: "Azúcar morena (compactada)" },
    category: "sugar",
    gramsPerCup: 213,
  },
  {
    id: "sugar-powdered",
    names: { en: "Powdered sugar", es: "Azúcar glas" },
    category: "sugar",
    gramsPerCup: 113,
  },
  {
    id: "butter",
    names: { en: "Butter", es: "Mantequilla" },
    category: "fat",
    gramsPerCup: 227,
    notes: {
      en: "One US stick is half a cup, 8 tablespoons, 113 g.",
      es: "Una barra estadounidense es media taza, 8 cucharadas, 113 g.",
    },
  },
  {
    id: "honey",
    names: { en: "Honey", es: "Miel" },
    category: "liquid",
    gramsPerCup: 336,
  },
  {
    id: "cocoa",
    names: { en: "Cocoa powder (unsweetened)", es: "Cacao en polvo (sin azúcar)" },
    category: "other",
    gramsPerCup: 85,
  },
  {
    id: "oats-rolled",
    names: { en: "Rolled oats", es: "Avena en hojuelas" },
    category: "grain",
    gramsPerCup: 90,
  },
  {
    id: "rice-white",
    names: { en: "White rice (uncooked)", es: "Arroz blanco (crudo)" },
    category: "grain",
    gramsPerCup: 200,
  },
];

export function getIngredient(id: string): Ingredient | undefined {
  return INGREDIENTS.find((i) => i.id === id);
}
