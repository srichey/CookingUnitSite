// Canonical outbound source citations. Rendered as a Sources block on every
// calculator page and ingredient landing. Outbound links to authority domains
// help both classic SEO (E-E-A-T) and AI engines deciding whether to cite us
// in generated answers.
//
// Use rel="noopener noreferrer" on every outbound link (already applied in
// the renderer). PageRank passthrough is not a concern here. Citing
// authority is the point.

export interface Source {
  label: string;
  url: string;
  // Short note shown after the label so the citation explains why it matters.
  note?: string;
}

// Weight-per-volume sources. Used on every cups-to-grams style calculator and
// every ingredient landing page.
export const WEIGHT_SOURCES: Source[] = [
  {
    label: "King Arthur Baking: Ingredient weight chart",
    url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart",
    note: "Industry-standard flour and baking ingredient weights.",
  },
  {
    label: "USDA FoodData Central",
    url: "https://fdc.nal.usda.gov/",
    note: "Official US government nutrient and density database.",
  },
  {
    label: "America's Test Kitchen: How to Weigh Ingredients and Why It's So Important",
    url: "https://www.americastestkitchen.com/articles/8004-how-to-weigh-ingredients",
    note: "Independent test-kitchen rationale and method for weighing ingredients.",
  },
  {
    label: "NIST Office of Weights and Measures",
    url: "https://www.nist.gov/pml/owm",
    note: "Authoritative US unit definitions.",
  },
];

// Temperature conversion sources. Used on Fahrenheit-to-Celsius pages.
export const TEMPERATURE_SOURCES: Source[] = [
  {
    label: "NIST: SI Units for Temperature",
    url: "https://www.nist.gov/pml/owm/si-units-temperature",
    note: "Official US definitions of kelvin, Celsius, and Fahrenheit.",
  },
  {
    label: "BIPM: The International System of Units (SI)",
    url: "https://www.bipm.org/en/measurement-units",
    note: "International authority on SI units including kelvin and celsius.",
  },
  {
    label: "King Arthur Baking: Conversions reference",
    url: "https://www.kingarthurbaking.com/pro/reference/conversion",
    note: "Practical baking conversions reference, including Fahrenheit and Celsius.",
  },
];

// Recipe scaling sources. Used on the Recipe Scaler page.
export const SCALING_SOURCES: Source[] = [
  {
    label: "King Arthur Baking: How to reduce a recipe",
    url: "https://www.kingarthurbaking.com/blog/2020/11/23/how-to-reduce-a-recipe",
    note: "Practical baking-specific guide to scaling recipes up or down.",
  },
  {
    label: "King Arthur Baking: Recipe Success Guide",
    url: "https://www.kingarthurbaking.com/recipes/resources/recipe-success-guide",
    note: "Reference for measuring, weighing, and adapting recipes.",
  },
  {
    label: "America's Test Kitchen: No, You Can't Always Just Double a Recipe",
    url: "https://www.americastestkitchen.com/articles/8047-no-you-cant-always-just-double-a-recipe",
    note: "Why doubling is not always linear: pan size, oven heat, and dough physics.",
  },
];

// Spanish-language labels for the Sources heading. The links themselves stay
// in English because the destinations are English-language authorities.
export const SOURCES_HEADING = {
  en: "Sources",
  es: "Fuentes",
} as const;

export const SOURCES_INTRO = {
  en: "Our numbers and methodology cross-reference these authorities:",
  es: "Nuestros números y método se basan en estas fuentes:",
} as const;
