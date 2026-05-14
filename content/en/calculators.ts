export interface CalculatorTile {
  title: string;
  description: string;
  href: string;
  status: "live" | "soon";
}

export interface CalculatorGroup {
  heading: string;
  tiles: CalculatorTile[];
}

export const calculatorsCopyEn = {
  title: "All Calculators: Kitchen Converters and Recipe Tools",
  metaDescription:
    "Every cooking and baking calculator on Kitchen Converts, grouped by use. Volume conversions, weight, oven temperature, ingredient-specific weights, and recipe scaling.",
  h1: "All calculators",
  intro:
    "Every cooking and baking tool on this site, grouped by what you are trying to do. New tools publish often; bookmark this page so you can find them.",
  groups: [
    {
      heading: "Recipe tools",
      tiles: [
        {
          title: "Recipe scaler",
          description: "Resize a recipe to the servings you need. Halve, double, triple, or set a custom count.",
          href: "/recipe-scaler",
          status: "live",
        },
        {
          title: "Baking pan size converter",
          description: "Swap a round pan for a square or rectangle and adjust batter volume.",
          href: "/calculators",
          status: "soon",
        },
      ],
    },
    {
      heading: "Volume to weight",
      tiles: [
        {
          title: "Cups to grams",
          description: "Convert cups to grams with ingredient-specific density. Flour, sugar, butter, more.",
          href: "/cups-to-grams",
          status: "live",
        },
        {
          title: "Grams to cups",
          description: "Reverse of cups to grams. Same engine, same accuracy, per-ingredient density.",
          href: "/grams-to-cups",
          status: "live",
        },
      ],
    },
    {
      heading: "Volume conversions",
      tiles: [
        {
          title: "Tablespoons to cups",
          description: "Common kitchen math: tbsp, tsp, fluid ounces, and cups.",
          href: "/tablespoons-to-cups",
          status: "live",
        },
        {
          title: "Milliliters to cups",
          description: "Quick metric-to-US volume conversion for liquids.",
          href: "/ml-to-cups",
          status: "live",
        },
      ],
    },
    {
      heading: "Weight conversions",
      tiles: [
        {
          title: "Ounces to grams",
          description: "US ounces to metric grams, and the reverse.",
          href: "/ounces-to-grams",
          status: "live",
        },
        {
          title: "Pounds to kilograms",
          description: "Bigger weights for batch cooking and bread baking.",
          href: "/calculators",
          status: "soon",
        },
      ],
    },
    {
      heading: "Temperature",
      tiles: [
        {
          title: "Fahrenheit to Celsius (oven)",
          description: "Convert oven temperatures, with gas mark equivalents.",
          href: "/fahrenheit-to-celsius",
          status: "live",
        },
      ],
    },
    {
      heading: "Ingredient-specific weights",
      tiles: [
        {
          title: "Butter converter",
          description: "Sticks, tablespoons, cups, and grams for US butter.",
          href: "/butter-converter",
          status: "live",
        },
        {
          title: "Flour cups to grams",
          description: "All-purpose flour weight with spoon-and-level tips.",
          href: "/flour-cups-to-grams",
          status: "live",
        },
        {
          title: "Sugar cups to grams",
          description: "Granulated white sugar weight per cup.",
          href: "/sugar-cups-to-grams",
          status: "live",
        },
        {
          title: "Brown sugar cups to grams",
          description: "Packed brown sugar, plus the loose value for reference.",
          href: "/brown-sugar-cups-to-grams",
          status: "live",
        },
        {
          title: "Cocoa powder cups to grams",
          description: "Unsweetened cocoa is light and tricky to cup-measure.",
          href: "/cocoa-cups-to-grams",
          status: "live",
        },
        {
          title: "Honey cups to grams",
          description: "Sticky and dense, honey weighs more than water per cup.",
          href: "/honey-cups-to-grams",
          status: "live",
        },
        {
          title: "Oats cups to grams",
          description: "Rolled, quick, and steel-cut oats by cup.",
          href: "/oats-cups-to-grams",
          status: "live",
        },
      ],
    },
  ] satisfies CalculatorGroup[],
  liveBadge: "Available now",
  soonBadge: "Coming soon",
};
