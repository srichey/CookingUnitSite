export const recipeScalerCopyEn = {
  title: "Recipe Scaler: Resize Recipes by Servings",
  metaDescription:
    "Scale any recipe up or down by servings. Halve, double, triple, or set a custom count. Smart fractions for cups, tablespoons, teaspoons, grams, and ounces.",
  h1: "Recipe scaler",
  intro:
    "Type your recipe below and pick the new serving count. Each ingredient updates as you type. Fractions where they make sense, decimals where they do not.",
  directAnswer:
    "To scale a recipe, divide the servings you want by the servings the recipe makes. That gives you the scale number. Multiply every ingredient by it. A recipe for 4 doubled to 8 multiplies each amount by 2. Cut in half to 2, multiply by 0.5.",
  sections: {
    howItWorks: {
      title: "How recipe scaling works",
      body: [
        "Recipe scaling is one little math problem, repeated for each ingredient. The scale number is the new servings divided by the old servings. Multiply every ingredient by that number and the recipe stays balanced.",
        "The hard part is what to do with awkward results. A scale of 1.5 turns 2/3 cup into 1 cup, but it also turns 1 teaspoon into 1.5 teaspoons (which is 1/2 tablespoon plus 1/2 teaspoon). The scaler snaps to clean kitchen fractions when it can. If the result has no clean fraction nearby, it shows a decimal so you can measure on a scale.",
      ],
    },
    cookTimeWarning: {
      title: "Cook time does not double when you double the recipe",
      body:
        "Doubling a casserole does not double the time in the oven. A bigger pan or deeper batter changes how heat gets in. As a rule, add about 25 percent to the time when you double and check often. For thin batters in wide pans, the change is closer to linear. For roasts, breads, and anything deep, use a thermometer.",
    },
    bakingNote: {
      title: "Baking is more sensitive than cooking",
      body:
        "Cookies, cakes, breads, and pastries depend on tight ratios of flour, fat, sugar, and liquid. Scaling them by an odd number (1.3, 1.7) can break the texture. If a baked recipe needs to change size, halving or doubling is safer than a strange multiplier. And weighing in grams always beats measuring in cups.",
    },
    commonMistakes: {
      title: "Common scaling mistakes",
      body: [
        "Salt and spices do not scale linear. A doubled recipe with double the salt can taste too salty. Start with 1.5 times the salt and adjust at the end.",
        "Leavening (baking soda, baking powder, yeast) usually scales linear for normal changes, but very small or very large batches behave different. For yeast bread, weigh the yeast.",
        "Eggs are whole units. A scale of 1.5 on 3 eggs gives 4.5 eggs. Round to whole eggs and adjust other liquids by a tablespoon or two.",
      ],
    },
  },
  faqs: [
    {
      question: "How do I halve a recipe with 3 eggs?",
      answer:
        "Half of 3 eggs is 1.5 eggs. Crack one egg, beat it lightly, and use half by volume. Save the other half for tomorrow's omelette or freeze it for baking. Some bakers swap one egg yolk for half an egg in custards.",
    },
    {
      question: "Can I double a baking recipe?",
      answer:
        "Yes for most cookies, muffins, and quick breads. Be careful with delicate cakes, choux pastry, and meringues, where the mixing volume changes the texture. If you can bake the doubled recipe across two pans of the original size, that is safer than one big pan.",
    },
    {
      question: "Why are scaled fractions like 0.667 cups in my output?",
      answer:
        "The scaler shows 2/3 cup instead of 0.667 when the result is close to a common kitchen fraction. If you see a decimal, the math did not land near 1/8, 1/4, 1/3, 1/2, 2/3, or 3/4. You can measure with a scale, or round to the closest fraction.",
    },
    {
      question: "Do I need to change the cooking temperature?",
      answer:
        "No. The temperature stays the same. Only ingredient amounts (and sometimes the cook time) change when you scale.",
    },
    {
      question: "Is it better to weigh ingredients when scaling?",
      answer:
        "For baking, yes. Volume measures like cups carry small errors that grow when you scale up. Weighing in grams keeps the ratios exact, no matter what scale number you use. That is why pro bakeries always work in weights.",
    },
  ],
  related: {
    title: "Related tools",
    items: [
      { label: "Cups to grams", href: "/cups-to-grams" },
      { label: "Tablespoons to cups", href: "/tablespoons-to-cups" },
      { label: "Fahrenheit to Celsius oven", href: "/fahrenheit-to-celsius" },
    ],
  },
};
