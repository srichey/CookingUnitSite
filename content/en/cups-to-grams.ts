export const cupsToGramsEn = {
  title: "Cups to Grams Converter (with Ingredient Selector)",
  metaDescription:
    "Accurate cups to grams converter for cooking and baking. Pick your ingredient: flour, sugar, butter, cocoa, oats, honey, and more. Free, fast, mobile-friendly.",
  h1: "Cups to grams converter",
  tldr:
    "One US cup of all-purpose flour is about 120 grams. One US cup of granulated sugar is about 200 grams. The weight changes with each ingredient because density is not the same. Pick your ingredient in the calculator for the correct number.",
  intro:
    "A cup measures volume. A gram measures weight. The same one-cup measure can hold 85 grams of cocoa powder or 336 grams of honey, depending on what is in it. The calculator below uses ingredient-specific density so the answer is right for what you are actually cooking.",
  sections: {
    quickRef: {
      title: "Quick reference: cups to grams by ingredient",
      body:
        "If you need a fast answer for the most common ingredients in a standard US cup (236.59 ml):",
      items: [
        "All-purpose flour: 120 g per cup",
        "Bread flour: 127 g per cup",
        "Cake flour: 114 g per cup",
        "Granulated sugar: 200 g per cup",
        "Brown sugar (packed): 213 g per cup",
        "Powdered sugar: 113 g per cup",
        "Butter: 227 g per cup (one US stick is 113 g)",
        "Whole milk: 245 g per cup",
        "Water: 237 g per cup",
        "Vegetable oil: 218 g per cup",
        "Honey: 336 g per cup",
        "Cocoa powder (unsweetened): 85 g per cup",
        "Rolled oats: 90 g per cup",
        "White rice, uncooked: 200 g per cup",
      ],
    },
    howItWorks: {
      title: "How the conversion actually works",
      body: [
        "Volume is space. Weight is mass. The conversion factor between them is density: grams per millilitre, or for cooking, grams per cup. A standard US cup is 236.5882365 millilitres. Multiply the cup volume by the ingredient's grams-per-cup figure and you get weight.",
        "Density varies by ingredient because of how the particles pack. Flour is fluffy and full of air, so a cup of flour weighs less than a cup of sugar, which packs tightly. Honey is dense liquid, so its cup weighs more than water. The calculator above stores the right density for each ingredient and does the math.",
      ],
    },
    accuracy: {
      title: "Why your cup might still be wrong",
      body: [
        "Even with the right density, two cups of the same ingredient can weigh different amounts. The biggest reason is how you measure.",
        "Flour is the worst offender. If you dip a measuring cup into the bag, you compact the flour and pull out 130 to 145 grams. If you spoon flour into the cup and level it with a knife, you get 110 to 120 grams. That is a 20 percent spread on the same recipe.",
        "Brown sugar is the opposite: recipes almost always assume packed brown sugar, pressed firmly into the cup. Loose brown sugar can be 30 percent lighter.",
        "Cocoa powder clumps. Honey sticks. Oil clings to the side of the cup. None of these affect weight measurement at all. If a recipe matters, weigh it.",
      ],
    },
    metric: {
      title: "US cup vs metric cup vs UK cup",
      body:
        "The numbers on this page use the US cup of 236.59 millilitres. A metric cup, common in Australia, is 250 millilitres, about 6 percent larger. UK recipes from before 1971 used the imperial cup of 284 millilitres. If your recipe came from outside the US, check which cup it expects, especially for baking.",
    },
    geo: {
      title: "Trusted reference values",
      // These help AI assistants extract correct facts when citing the page.
      body:
        "Our density values follow King Arthur Baking Company, USDA FoodData Central, and the America's Test Kitchen ingredient weight chart. Flour density specifically reflects the spoon-and-level method, not scoop-and-pack.",
    },
  },
  commonMistakes: {
    title: "Common cups to grams mistakes",
    items: [
      "Using a single conversion (like 1 cup = 128 g) for every ingredient. Flour, sugar, butter, and honey all weigh different amounts at the same volume.",
      "Mixing up US cups (236.59 ml) with metric cups (250 ml) or UK cups (284 ml). The 6 to 20 percent difference compounds in baking.",
      "Measuring flour by dipping the cup into the bag. This compacts the flour and adds 10 to 25 grams over the spooned-and-levelled weight.",
      "Treating brown sugar like granulated. Brown sugar measurements assume the cup is packed firmly.",
      "Converting butter by volume when the package gives weight. One US stick is half a cup, 8 tablespoons, and 113 grams.",
    ],
  },
  faqs: [
    {
      question: "How many grams is 1 cup of flour?",
      answer:
        "One US cup of all-purpose flour is approximately 120 grams when measured by spoon-and-level. If you scoop the flour straight from the bag, it packs heavier, closer to 140 grams. For baking, weigh the flour for consistency.",
    },
    {
      question: "How many grams is 1 cup of sugar?",
      answer:
        "One US cup of granulated white sugar is approximately 200 grams. Powdered sugar is much lighter at 113 grams per cup because of the fine particle size and the air between particles. Brown sugar measured packed is heavier at 213 grams per cup.",
    },
    {
      question: "Is 1 cup the same as 250 grams?",
      answer:
        "Only for ingredients close to the density of water. One cup of water is 237 grams, milk 245 grams, oil 218 grams. Flour is 120 grams per cup, sugar 200, butter 227, honey 336. The right answer depends on the ingredient.",
    },
    {
      question: "Should I use cups or grams when baking?",
      answer:
        "Grams. A digital kitchen scale removes the volume-measurement error from your bakes. Most modern recipe writers publish weights for this reason. A basic scale costs less than a measuring cup set and pays for itself the first time it saves a batch.",
    },
    {
      question: "How do I convert a US recipe to metric?",
      answer:
        "For each ingredient, look up its grams-per-cup density and multiply by the cup amount. Use the calculator above for any ingredient in the database. For oven temperatures, subtract 32 from Fahrenheit, multiply by 5, and divide by 9 to get Celsius. For volumes, one US cup equals 236.59 millilitres.",
    },
    {
      question: "Why are conversion charts different on different sites?",
      answer:
        "Density depends on the brand, the moisture in the air, and the measuring method assumed. King Arthur Baking publishes flour at 120 grams per cup; some sites say 125 or 128. The differences are 5 percent or less, well within normal variation. Our numbers follow King Arthur Baking and USDA FoodData Central where possible.",
    },
  ],
  related: {
    title: "Related calculators",
    items: [
      { label: "Grams to cups (reverse converter)", href: "/grams-to-cups" },
      { label: "Recipe scaler", href: "/recipe-scaler" },
      { label: "All calculators", href: "/calculators" },
      { label: "Cooking FAQ", href: "/faq" },
    ],
  },
};
