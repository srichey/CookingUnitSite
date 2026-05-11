export const recipeScalerCopyEn = {
  title: "Recipe Scaler: Resize Recipes by Servings",
  metaDescription:
    "Scale any recipe up or down by servings. Halve, double, triple, or set a custom serving count. Smart unit handling for cups, tablespoons, teaspoons, grams, and ounces.",
  h1: "Recipe scaler",
  intro:
    "Type your recipe below, then choose the new serving count. Every ingredient updates as you type, with fractions where they make sense and decimals where they do not.",
  directAnswer:
    "To scale a recipe, divide the desired servings by the original servings, then multiply every ingredient amount by that factor. A recipe for 4 doubled to 8 multiplies each amount by 2; halved to 2, by 0.5.",
  sections: {
    howItWorks: {
      title: "How recipe scaling works",
      body: [
        "Recipe scaling is one calculation repeated for each ingredient. The scaling factor is the new serving count divided by the original. Multiply every ingredient by that number and the proportions stay the same.",
        "The math is simple. What is not simple is what to do with awkward numbers. A factor of 1.5 turns 2/3 cup into 1 cup, but it also turns 1 teaspoon into 1.5 teaspoons, which is half a tablespoon plus half a teaspoon. The scaler snaps to common kitchen fractions when the result is close to one, and gives a clean decimal otherwise.",
      ],
    },
    cookTimeWarning: {
      title: "Cooking time does not scale linearly",
      body:
        "Doubling a casserole does not double its baking time. A bigger pan or deeper batter changes heat penetration. As a rule, increase the time by roughly 25 percent when doubling, then check often. For thin batters and shallow pans, scaling up is closer to linear. For roasts, breads, and anything deep, lean on a thermometer.",
    },
    bakingNote: {
      title: "Baking is more sensitive than cooking",
      body:
        "Cookies, cakes, breads, and pastries depend on ratios of flour, fat, sugar, and liquid. Scaling them by an odd factor (1.3, 1.7) can break the structure. If a baked recipe needs to change size, halving or doubling is safer than a fractional multiplier, and weighing in grams beats measuring cups every time.",
    },
    commonMistakes: {
      title: "Common scaling mistakes",
      body: [
        "Salt and spices do not always scale linearly. A doubled recipe with doubled salt can taste much saltier than expected. Start with about 1.5x the salt and adjust at the end.",
        "Leavening agents (baking soda, baking powder, yeast) usually scale linearly for moderate changes, but very small or very large batches behave differently. For yeasted bread, weigh the yeast.",
        "Egg sizes are quantised. A scaling factor of 1.5 against 3 eggs gives 4.5 eggs. Round to whole eggs and adjust other liquids by a tablespoon or two.",
      ],
    },
  },
  faqs: [
    {
      question: "How do I halve a recipe with 3 eggs?",
      answer:
        "Halving 3 eggs gives 1.5 eggs. Crack one egg, beat it lightly, and use half. Save the rest for tomorrow's omelette or freeze it for baking. Some bakers substitute one egg yolk for a half egg in custards.",
    },
    {
      question: "Can I double a baking recipe?",
      answer:
        "Yes for most cookies, muffins, and quick breads. Be careful with delicate cakes, choux pastry, and meringues where mixing volume changes the texture. If you can split the doubled recipe across two pans of the original size, that is the safest path.",
    },
    {
      question: "Why are scaled fractions like 0.667 cups in my output?",
      answer:
        "The scaler shows 2/3 cup instead of 0.667 when the value is close enough to a common kitchen fraction. If you see a decimal, the math did not land near 1/8, 1/4, 1/3, 1/2, 2/3, or 3/4. You can measure with a kitchen scale for accuracy, or round to the nearest fraction.",
    },
    {
      question: "Do I need to scale the cooking temperature?",
      answer:
        "No. Temperature stays the same. Only ingredient amounts and (sometimes) cooking time change when you scale a recipe.",
    },
    {
      question: "Is it better to weigh ingredients when scaling?",
      answer:
        "For baking, yes. Volume measurements like cups carry compounding error when you scale. Weighing in grams keeps proportions exact regardless of scale factor, which is why professional bakeries always work in weights.",
    },
  ],
  related: {
    title: "Related tools",
    items: [
      { label: "Cups to grams converter", href: "/recipe-scaler" },
      { label: "Tablespoons to teaspoons", href: "/recipe-scaler" },
      { label: "Fahrenheit to Celsius oven converter", href: "/recipe-scaler" },
    ],
  },
};
