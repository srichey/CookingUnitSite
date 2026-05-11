import type { BlogPost } from "@/lib/blog";

export const postsEn: BlogPost[] = [
  {
    slug: "why-bakers-weigh-ingredients",
    locale: "en",
    title: "Why Bakers Weigh Ingredients Instead of Using Cups",
    description:
      "The short reason serious bakers switched to grams: cups lie. A guide to volume drift, scoop method, and the one tool that fixes both.",
    publishedAt: "2026-05-11",
    readingMinutes: 4,
    alternateSlug: "por-que-los-panaderos-pesan-ingredientes",
    tags: ["baking", "measurement", "fundamentals"],
    body: [
      {
        kind: "p",
        text:
          "If you have ever made the same cookie recipe twice and gotten different cookies, the problem was probably the flour. Not the brand of flour. The cup of it.",
      },
      {
        kind: "p",
        text:
          "Volume measurement is fast and feels intuitive, but it carries an honest 10 to 25 percent error for dry ingredients. The same one-cup measure can hold 110 grams of all-purpose flour or 145 grams of all-purpose flour, depending on whether you spooned it gently or scooped it tightly. That spread is the difference between tender and tough.",
      },
      { kind: "h2", text: "What changes between two cups of the same thing" },
      {
        kind: "ul",
        items: [
          "Scoop method. Dipping the cup into the bag packs more flour in than spooning it.",
          "Settling. A bag of flour shaken on the way home from the store packs denser than one left undisturbed.",
          "Humidity. Flour absorbs moisture from the air on a wet day and weighs slightly more for the same volume.",
          "Brand. King Arthur AP flour and another brand's AP flour can have different particle sizes.",
        ],
      },
      {
        kind: "p",
        text:
          "Sugar is more forgiving because the crystals pack consistently. Brown sugar is the opposite because it is supposed to be pressed in firmly. Cocoa powder is a nightmare because it clumps. Honey is fine by volume but messy. The general rule: the more a recipe depends on the exact ratio, the more weight matters.",
      },
      { kind: "h2", text: "Why grams solve the problem" },
      {
        kind: "p",
        text:
          "A gram is a gram. It does not care how you scooped, how the bag was shaken, or what the humidity is. When a recipe says 120 grams of flour and you put 120 grams of flour on the scale, you have what the recipe writer intended.",
      },
      {
        kind: "p",
        text:
          "There is a second benefit: weight measurement scales cleanly. Doubling a recipe in cups means double the scoop variability. Doubling a recipe in grams means moving a number. This is also why our recipe scaler returns clean fractions for volume and exact decimals for weight: if you are scaling and you have a scale, you should use the scale.",
      },
      { kind: "h2", text: "The tool that fixes both problems" },
      {
        kind: "p",
        text:
          "A digital kitchen scale, around 20 to 40 US dollars. Look for one with gram precision, a tare button (so you can zero out the bowl), a 5-kilogram capacity, and a flat surface large enough for a mixing bowl. That is it. No app, no Bluetooth, no Wi-Fi.",
      },
      {
        kind: "callout",
        text:
          "If your recipe gives weights, use them. If it only gives cups, you can convert with our cups-to-grams tool (coming soon) and write the weights into the recipe so you only have to do it once.",
      },
      { kind: "h2", text: "When cups are fine" },
      {
        kind: "p",
        text:
          "Soup, stews, stir-fries, pasta, rice: anywhere that a 10 percent difference in seasoning or starch will not break the dish, cups are fine. The cookbook industry will not collapse if you measure broth in cups. The reason bakers care is that bread, pastry, cookies, and cakes are chemistry, and chemistry needs ratios.",
      },
      { kind: "h2", text: "Practical next step" },
      {
        kind: "p",
        text:
          "If you only do one thing, weigh the flour. It is the ingredient with the biggest volume-to-weight spread in most recipes and the one whose error compounds the most. Salt and sugar are usually fine in cups for everyday baking. Flour is where the wins are.",
      },
      {
        kind: "link",
        text: "Open the recipe scaler",
        href: "/recipe-scaler",
        description: "Resize a recipe to your servings with clean fraction output.",
      },
    ],
  },
];
