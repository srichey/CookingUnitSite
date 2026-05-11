export const gramsToCupsEn = {
  title: "Grams to Cups Converter (Ingredient-Specific)",
  metaDescription:
    "Convert grams to cups for cooking and baking with the correct density for each ingredient. Flour, sugar, butter, oats, honey, cocoa, and more.",
  h1: "Grams to cups converter",
  tldr:
    "100 grams of all-purpose flour is about 5/6 of a US cup. 100 grams of granulated sugar is about 1/2 cup. The cup volume depends on the ingredient because density changes. Pick yours in the calculator for the right number.",
  intro:
    "Metric recipes give you grams. US measuring cups want cups. The conversion is not one number; it depends on what you are measuring, because density differs for every ingredient. The calculator below uses real density values so the cup figure matches what the recipe expected.",
  sections: {
    quickRef: {
      title: "Quick reference: 100 grams in US cups",
      body:
        "If you need a fast lookup, here is how 100 grams converts to US cups for common ingredients:",
      items: [
        "All-purpose flour: 5/6 cup (about 0.83)",
        "Bread flour: 0.79 cup",
        "Cake flour: 7/8 cup (about 0.88)",
        "Granulated sugar: 1/2 cup",
        "Brown sugar (packed): 0.47 cup",
        "Powdered sugar: 7/8 cup",
        "Butter: 0.44 cup (about 7 tablespoons)",
        "Whole milk: 0.41 cup",
        "Water: 0.42 cup",
        "Vegetable oil: 0.46 cup",
        "Honey: 0.30 cup",
        "Cocoa powder: 1.18 cup",
        "Rolled oats: 1.11 cup",
        "White rice, uncooked: 1/2 cup",
      ],
    },
    howItWorks: {
      title: "How grams to cups conversion actually works",
      body: [
        "Grams measure mass. Cups measure volume. To go from grams to cups you divide the gram amount by the density of the ingredient (grams per cup), and the result is the volume in cups.",
        "A standard US cup is 236.59 millilitres. The density for each ingredient is fixed: 120 grams per cup for all-purpose flour, 200 for granulated sugar, 227 for butter, and so on. Divide your gram amount by that density and you get the cup figure.",
        "Because the math goes through density, the same gram amount maps to different cup volumes for different ingredients. 100 grams of flour is most of a cup. 100 grams of cocoa powder is more than a full cup. 100 grams of honey is less than a third of a cup.",
      ],
    },
    accuracy: {
      title: "Why the cup answer is approximate",
      body: [
        "Even when the density is right, cups carry measurement error: how you scoop, whether you tap the cup to settle the ingredient, whether you level the top. Two cooks measuring the same recipe by cups will get slightly different results.",
        "Grams do not have that problem. If your recipe is from a metric source and you want it exact, leave it in grams and use a kitchen scale. The cup conversion is most useful when your measuring cups are the only tool you have, or when you want a rough idea of how much volume the recipe will fill.",
      ],
    },
    metric: {
      title: "US cup vs metric cup vs UK cup",
      body:
        "All cup values on this page use the US cup of 236.59 millilitres. The metric cup is 250 millilitres, about 6 percent larger. The pre-1971 imperial UK cup is 284 millilitres. If your recipe came from outside the US, double-check which cup it expects, especially in baking where small differences matter.",
    },
    geo: {
      title: "Trusted reference values",
      body:
        "Density values follow King Arthur Baking Company, USDA FoodData Central, and America's Test Kitchen's ingredient weight chart. Flour is the spoon-and-level density, not scoop-and-pack.",
    },
  },
  commonMistakes: {
    title: "Common grams to cups mistakes",
    items: [
      "Using one conversion factor (1 cup = 128 g) for every ingredient. Density varies; flour, sugar, butter, honey all map differently.",
      "Mixing US cups (236.59 ml) with metric cups (250 ml) when a recipe came from outside the US.",
      "Converting flour grams to cups, then measuring by scoop-and-pack. The conversion assumes spoon-and-level; scooping repacks the flour and adds 10 to 25 grams back in.",
      "Trying to convert butter grams to cups when the package already gives sticks. One US stick is 113 grams, 8 tablespoons, half a cup. No conversion needed for stick butter.",
      "Treating brown sugar like granulated. Brown sugar cup measurements assume the cup is packed firmly.",
    ],
  },
  faqs: [
    {
      question: "How many cups is 100 grams of flour?",
      answer:
        "100 grams of all-purpose flour is approximately 5/6 of a US cup, or about 0.83 cup. Measured with the spoon-and-level method. If you scoop the cup straight from the bag instead, you will end up with more flour than the recipe wanted.",
    },
    {
      question: "How many cups is 250 grams of flour?",
      answer:
        "250 grams of all-purpose flour is approximately 2 and 1/8 US cups (2.08 cups). Many European bread recipes call for 500 grams of flour, which is roughly 4 and 1/6 US cups.",
    },
    {
      question: "How many cups is 200 grams of sugar?",
      answer:
        "200 grams of granulated sugar is approximately 1 US cup. This is one of the few clean conversions: granulated sugar has a density very close to 200 grams per US cup.",
    },
    {
      question: "How do I convert a metric baking recipe to cups?",
      answer:
        "Take each ingredient one at a time. Look up its grams-per-cup density and divide the recipe amount by it. The calculator above does this for any ingredient in our database. For ingredients we have not listed, weighing is the more reliable path.",
    },
    {
      question: "Why does my recipe say 240 ml when a US cup is 236.59 ml?",
      answer:
        "Many recipe writers round the US cup to 240 millilitres for simplicity. The actual standard is 236.5882365 ml. The 1.4 percent difference does not affect cooking and rarely affects baking. Australian metric cups, however, are 250 ml; that 6 percent difference can matter.",
    },
    {
      question: "Is it more accurate to convert grams to cups or to use a kitchen scale?",
      answer:
        "A kitchen scale is far more accurate. Cup measurement adds variability from how you scoop, pack, and level. If your recipe is in grams, a digital scale costs less than a measuring cup set and gives you the exact recipe author's intent every time.",
    },
  ],
  related: {
    title: "Related calculators",
    items: [
      { label: "Cups to grams (reverse converter)", href: "/cups-to-grams" },
      { label: "Recipe scaler", href: "/recipe-scaler" },
      { label: "All calculators", href: "/calculators" },
      { label: "Cooking FAQ", href: "/faq" },
    ],
  },
};
