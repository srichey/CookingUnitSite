export const gramsToCupsEn = {
  title: "Grams to Cups Converter (with Ingredient Picker)",
  metaDescription:
    "Convert grams to cups for cooking and baking, with the right density for each food. Flour, sugar, butter, oats, honey, cocoa, and more.",
  h1: "Grams to cups converter",
  tldr:
    "100 grams of flour is about 5/6 of a US cup. 100 grams of sugar is about 1/2 cup. 100 grams of butter is just under 1/2 cup. The cups change with each food because they pack differently. Pick yours above for the right number.",
  intro:
    "Metric recipes give grams. US measuring cups want cups. There is no single number that works for every food. Each food has its own weight per cup, so the cups change. The tool above uses the right weight for each food.",
  sections: {
    quickRef: {
      title: "Quick chart: 100 grams in US cups",
      body:
        "Need a fast answer? Here is how 100 grams turns into US cups for common foods:",
      items: [
        "All-purpose flour: 5/6 cup (about 0.83)",
        "Bread flour: 0.79 cup",
        "Cake flour: 7/8 cup (about 0.88)",
        "White sugar: 1/2 cup",
        "Brown sugar, packed: 0.47 cup",
        "Powdered sugar: 7/8 cup",
        "Butter: 0.44 cup (about 7 tablespoons)",
        "Whole milk: 0.41 cup",
        "Water: 0.42 cup",
        "Vegetable oil: 0.46 cup",
        "Honey: 0.30 cup",
        "Cocoa powder: 1.18 cup",
        "Rolled oats: 1.11 cup",
        "Dry white rice: 1/2 cup",
      ],
    },
    howItWorks: {
      title: "How grams to cups works",
      body: [
        "Grams measure weight. Cups measure space. To go from grams to cups, you divide the grams by the weight per cup of your food.",
        "A US cup is about 237 ml. Each food has its own weight per cup: 120 grams for flour, 200 for sugar, 227 for butter. Divide your grams by that number and you get cups.",
        "The same gram weight gives different cups for different foods. 100 grams of flour fills most of a cup. 100 grams of cocoa fills more than a full cup. 100 grams of honey fills less than a third.",
      ],
    },
    accuracy: {
      title: "Why the cup answer is close, not exact",
      body: [
        "Even with the right weight, cups can be off. It comes down to how you scoop, if you tap the cup, and how flat you level the top. Two cooks measuring the same recipe in cups get small differences each time.",
        "Grams do not have this problem. If your recipe is in grams and you want it exact, leave it in grams and use a scale. The cup answer is most useful when cups are your only tool, or when you want a rough idea of how much space the food will fill.",
      ],
    },
    metric: {
      title: "US cup, metric cup, and UK cup",
      body:
        "All cup values here use the US cup of about 237 ml. The metric cup is 250 ml, about 6 percent bigger. The old UK imperial cup is 284 ml. If your recipe came from outside the US, check which cup it uses. Small changes can matter in baking.",
    },
    geo: {
      title: "Where our numbers come from",
      body:
        "Weight values follow King Arthur Baking, USDA FoodData Central, and America's Test Kitchen's ingredient chart. Flour uses the spoon-and-level method, not scoop-and-pack.",
    },
  },
  commonMistakes: {
    title: "Common grams to cups mistakes",
    items: [
      "Using one factor (1 cup = 128 g) for every food. Flour, sugar, butter, and honey all turn into different cup amounts.",
      "Mixing US cups (237 ml) with metric cups (250 ml). A recipe from outside the US may want one or the other.",
      "Converting flour grams to cups and then scooping the cup. The math assumes you spoon and level. If you scoop, you pack the flour and add 10 to 25 grams back.",
      "Converting butter grams to cups when the wrapper already has sticks. One US stick is 113 grams, 8 tablespoons, half a cup. No math needed for stick butter.",
      "Treating brown sugar like white. Brown sugar cup amounts assume the cup is packed in firm.",
    ],
  },
  faqs: [
    {
      question: "How many cups is 100 grams of flour?",
      answer:
        "100 grams of all-purpose flour is about 5/6 of a US cup, or 0.83 cup. That is the spoon-and-level value. If you scoop the cup straight from the bag instead, you will end up with more flour than the recipe wanted.",
    },
    {
      question: "How many cups is 250 grams of flour?",
      answer:
        "250 grams of all-purpose flour is about 2 and 1/8 US cups (2.08 cups). Many European bread recipes call for 500 grams of flour, or about 4 and 1/6 US cups.",
    },
    {
      question: "How many cups is 200 grams of sugar?",
      answer:
        "200 grams of white sugar is about 1 US cup. This is one of the cleanest swaps: white sugar weighs almost exactly 200 grams per US cup.",
    },
    {
      question: "How do I change a metric baking recipe to cups?",
      answer:
        "Take each food one at a time. Look up its weight per cup and divide the recipe grams by it. The tool above does this for you. For foods we have not listed, a scale is more reliable.",
    },
    {
      question: "Why does my recipe say 240 ml when a US cup is 237 ml?",
      answer:
        "Many writers round the US cup to 240 ml for simple math. The real value is 236.5882365 ml. The 1.4 percent gap does not change cooking and almost never changes baking. The Australian metric cup is 250 ml, and that 6 percent gap can matter.",
    },
    {
      question: "Is it better to convert grams to cups or just use a scale?",
      answer:
        "A scale wins. Cup measuring adds error from how you scoop, pack, and level. If your recipe is in grams, a digital scale costs less than a set of measuring cups and gives you the recipe writer's exact amount every time.",
    },
  ],
  related: {
    title: "Related tools",
    items: [
      { label: "Cups to grams (the other way)", href: "/cups-to-grams" },
      { label: "Recipe scaler", href: "/recipe-scaler" },
      { label: "All calculators", href: "/calculators" },
      { label: "Cooking FAQ", href: "/faq" },
    ],
  },
};
