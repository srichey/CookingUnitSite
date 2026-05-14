export const fahrenheitToCelsiusEn = {
  title: "Fahrenheit to Celsius Oven Converter (with Gas Marks)",
  metaDescription:
    "Convert oven temperatures from Fahrenheit to Celsius and back. Includes gas marks for UK and older recipes. Quick presets for common baking heat.",
  h1: "Fahrenheit to Celsius oven converter",
  tldr:
    "350°F is 177°C, which is gas mark 4. To change Fahrenheit to Celsius, subtract 32, times by 5, then divide by 9. To go the other way, times Celsius by 9, divide by 5, then add 32.",
  intro:
    "Most US recipes use Fahrenheit. Most metric recipes use Celsius. UK recipes sometimes use gas marks. This tool gives all three so you can match your oven to any recipe.",
  sections: {
    quickRef: {
      title: "Common oven temperatures",
      body: "The most common baking temperatures and what they mean in each system:",
      items: [
        "275°F = 135°C = gas mark 1 (low)",
        "300°F = 150°C = gas mark 2 (low)",
        "325°F = 163°C = gas mark 3 (moderate)",
        "350°F = 177°C = gas mark 4 (moderate, most baking)",
        "375°F = 191°C = gas mark 5 (moderate-hot)",
        "400°F = 204°C = gas mark 6 (hot)",
        "425°F = 218°C = gas mark 7 (hot)",
        "450°F = 232°C = gas mark 8 (very hot, roasting)",
        "475°F = 246°C = gas mark 9 (very hot, pizza)",
      ],
    },
    howItWorks: {
      title: "The math",
      body: [
        "Fahrenheit to Celsius: take the Fahrenheit number, subtract 32, times by 5, then divide by 9. Example: 350 minus 32 is 318. 318 times 5 is 1590. 1590 divided by 9 is 177.",
        "Celsius to Fahrenheit: take Celsius, times by 9, divide by 5, then add 32. Example: 177 times 9 is 1593. 1593 divided by 5 is 318.6. 318.6 plus 32 is 350.6.",
      ],
    },
    accuracy: {
      title: "Why your oven still bakes differently",
      body: [
        "Oven dials are not exact. A 350°F oven can be 25 degrees off in either direction. Buy a cheap oven thermometer and check yours. The number is more of a guide than a fact.",
        "Convection ovens (with a fan) cook hotter for the same setting. Drop the dial by 25°F (15°C) or check the food earlier. Bake times shrink by 10 to 15 percent.",
      ],
    },
    metric: {
      title: "Gas marks for UK recipes",
      body:
        "UK gas marks run from 1/2 (very low) to 9 (very hot). Gas mark 4 is the baking standard, the same as 350°F or 177°C. The chart above shows the full set.",
    },
    geo: {
      title: "Why the formula is the way it is",
      body:
        "The Fahrenheit scale puts water freezing at 32 and boiling at 212. The Celsius scale puts water freezing at 0 and boiling at 100. The math (subtract 32, scale by 5/9) lines those two scales up. The British gas mark scale runs roughly in 25°F steps from 275°F.",
    },
  },
  commonMistakes: {
    title: "Common Fahrenheit and Celsius mistakes",
    items: [
      "Forgetting to subtract 32 before scaling. Without it, 350°F looks like 194°C, which is wrong.",
      "Mixing up the direction of the math. Going from C to F adds 32 at the end. Going from F to C subtracts it at the start.",
      "Using the conversion on a convection oven without lowering the dial. Convection ovens cook hotter for the same number.",
      "Trusting the oven dial instead of a thermometer. Most home ovens are 10 to 25 degrees off.",
      "Treating UK gas marks as if they were Fahrenheit. Gas mark 5 is not 5°F. It is 375°F.",
    ],
  },
  faqs: [
    {
      question: "What is 350°F in Celsius?",
      answer:
        "350°F is about 177°C. Most cookbooks round it to 175°C or 180°C. Either is close enough to bake with. In the UK, this is gas mark 4.",
    },
    {
      question: "What is the formula for Fahrenheit to Celsius?",
      answer:
        "Subtract 32 from the Fahrenheit number, times by 5, then divide by 9. So (F minus 32) times 5 divided by 9 equals C.",
    },
    {
      question: "Is 200°C the same as 400°F?",
      answer:
        "Almost. 200°C is 392°F, which most recipes round up to 400°F. Going the other way, 400°F is 204°C, usually rounded to 200°C.",
    },
    {
      question: "Do I lower the temperature for a fan oven?",
      answer:
        "Yes. Drop the recipe temperature by about 25°F or 15°C when you use convection (fan) on a recipe written for a regular oven. Or keep the heat the same and check the food 10 to 15 percent earlier.",
    },
    {
      question: "Why do British recipes use gas marks?",
      answer:
        "British gas ovens used a numbered scale long before digital dials. The scale stuck even on modern ovens. Gas mark 4 is the baking standard, matching 350°F (177°C).",
    },
  ],
  related: {
    title: "Related tools",
    items: [
      { label: "All calculators", href: "/calculators" },
      { label: "Recipe scaler", href: "/recipe-scaler" },
      { label: "Cups to grams", href: "/cups-to-grams" },
      { label: "Cooking FAQ", href: "/faq" },
    ],
  },
};
