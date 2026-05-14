import type { BlogPost } from "@/lib/blog";

export const postsEn: BlogPost[] = [
{
    slug: "high-altitude-baking-conversions",
    locale: "en",
    author: "S. Richey",
    title: "High-Altitude Baking: How Cup and Gram Conversions Change Above 3,000 Feet",
    description:
      "Above 3,000 feet, the same recipe that worked at sea level falls flat, runs over the pan, or comes out dry. Lower air pressure changes how flour behaves, how leavening works, and how liquids evaporate. Here is exactly what to change and by how much.",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    tags: ["altitude", "baking", "measurement", "leavening", "moisture"],
    sources: [
      { label: "King Arthur Baking: High-altitude baking", url: "https://www.kingarthurbaking.com/learn/resources/high-altitude-baking" },
      { label: "Colorado State University Extension: High altitude food preparation", url: "https://extension.colostate.edu/topic-areas/nutrition-food-safety-health/high-altitude-food-preparation-p41/" },
      { label: "USDA Food Safety: High altitude cooking", url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/high-altitude-cooking" },
      { label: "America's Test Kitchen: High altitude baking adjustments", url: "https://www.americastestkitchen.com/articles/3470-high-altitude-baking" },
    ],
    body: [
      {
        kind: "p",
        text:
          "If you live in Denver, Albuquerque, Salt Lake City, Boise, Reno, Flagstaff, or anywhere above about 3,000 feet, the recipe you copied from a sea-level cookbook does not work the same way in your kitchen. Cakes sink. Cookies spread too thin. Bread proofs too fast and tastes yeasty. The recipe is not wrong. The air is.",
      },
      {
        kind: "callout",
        text:
          "Quick answer: above 3,000 feet, reduce leavening (baking soda, baking powder, yeast) by 15 to 25 percent, increase liquid by 1 to 4 tablespoons per cup, increase oven temperature by 15 to 25 degrees Fahrenheit, and add 1 to 2 tablespoons of flour per cup. The exact amount depends on your elevation. The chart further down has the numbers.",
      },
      { kind: "h2", text: "Why altitude breaks baking" },
      {
        kind: "p",
        text:
          "Atmospheric pressure drops about 3 percent for every 1,000 feet of elevation. By 5,000 feet, you have lost 15 percent of the air pressure that was holding your batter together at sea level. Three things change as a result.",
      },
      {
        kind: "ol",
        items: [
          "Gases expand more easily. Carbon dioxide from baking soda, baking powder, and yeast pushes harder against weaker air. The dough rises faster, often before its structure has set, and then collapses.",
          "Water boils at a lower temperature. At sea level, water boils at 212°F (100°C). At 5,000 feet, it boils at 203°F (95°C). At 7,500 feet, 198°F (92°C). Liquids evaporate sooner, doughs dry out faster, and sugars concentrate, throwing off the sugar-to-flour ratio.",
          "Flour absorbs moisture differently. The combination of faster evaporation and (in most western US states) lower humidity means a cup of King Arthur all-purpose flour at 6,000 feet feels and behaves like a cup that has had a tablespoon of water pulled out of it.",
        ],
      },
      { kind: "h2", text: "The four adjustments that fix most recipes" },
      {
        kind: "p",
        text:
          "There is no single universal correction. The right combination depends on what you are baking and how high you are. But four levers cover almost every problem.",
      },
      {
        kind: "ol",
        items: [
          "Reduce leavening. Cut baking powder and baking soda by 1/8 teaspoon per teaspoon at 3,000 to 5,000 feet, by 1/4 teaspoon at 5,000 to 7,000 feet, and by up to 1/2 teaspoon at 7,000 feet and up. For yeast, use about 25 percent less and watch the rise; do not let it go past doubled.",
          "Increase liquid. Add 1 tablespoon of water, milk, or other liquid per cup of flour at 3,000 to 5,000 feet, 2 tablespoons at 5,000 to 7,000 feet, and 3 to 4 tablespoons above 7,000 feet. This replaces the moisture lost to faster evaporation.",
          "Increase oven temperature. Bump the oven up by 15 to 25°F (about 10 to 15°C). This sets the structure of the cake or cookie before the over-active gas can collapse it.",
          "Add flour. Strengthen the structure with 1 tablespoon of extra flour per cup at 3,000 to 5,000 feet, and 2 tablespoons per cup above 5,000 feet. Use the same flour the recipe calls for; do not switch types here.",
        ],
      },
      {
        kind: "callout",
        text:
          "Adjust one variable at a time when you are tuning a favorite recipe. Cut leavening first; that fixes the most common altitude failure (collapsed cake, deflated muffin). If the result is still dry, add liquid. If it is still spreading, add flour. If the texture is still off, raise the oven.",
      },
      { kind: "h2", text: "How much to adjust at each elevation" },
      {
        kind: "p",
        text:
          "Use this as a starting point. Every kitchen and every recipe behaves a little differently, so make small notes in the margin of your cookbook and adjust again next time.",
      },
      {
        kind: "ul",
        items: [
          "3,000 to 5,000 feet: reduce baking powder by 1/8 tsp per tsp, add 1 tbsp liquid per cup of flour, raise oven by 15°F, add up to 1 tbsp flour per cup.",
          "5,000 to 7,000 feet: reduce baking powder by 1/4 tsp per tsp, add 2 tbsp liquid per cup of flour, raise oven by 20°F, add 1 to 2 tbsp flour per cup.",
          "7,000 to 9,000 feet: reduce baking powder by 1/4 to 1/2 tsp per tsp, add 3 to 4 tbsp liquid per cup of flour, raise oven by 25°F, add 2 tbsp flour per cup.",
          "Above 9,000 feet: King Arthur Baking recommends seeking out altitude-specific recipes; the corrections become large enough that small changes do not always behave linearly.",
        ],
      },
      { kind: "h2", text: "Flour at altitude: why brand and type matter more" },
      {
        kind: "p",
        text:
          "At sea level, the difference between a cup of King Arthur all-purpose flour (120 grams per cup spoon-and-leveled) and a cup of Bob's Red Mill all-purpose flour (130 grams per cup) is real but rarely a recipe killer. At 6,000 feet, the same 10-gram gap matters more, because every other variable is already off. Weighing your flour with a scale becomes the single most useful change you can make. The scale gives you the same number every time, regardless of how dry the air was when you scooped.",
      },
      {
        kind: "p",
        text:
          "Bread flour and high-protein flours like King Arthur Bread Flour (127 grams per cup) hold up better at altitude than cake flour, because the extra protein gives the dough more structure to fight the over-active gas. If you bake bread at altitude, this is the lever to reach for.",
      },
      { kind: "h2", text: "What changes by recipe type" },
      {
        kind: "ul",
        items: [
          "Cakes and quick breads: most affected. Reduce leavening first. A vanilla cake recipe written for sea level will rise too fast, set in a dome, then collapse in the middle if you do not.",
          "Cookies: spread more at altitude. Add 1 to 2 tablespoons of flour per cup of flour in the recipe, and chill the dough for 30 minutes before baking.",
          "Yeast breads: rise faster. Use about 25 percent less yeast, watch the rise instead of the clock, and shape the dough as soon as it has doubled. Two short rises beat one long one above 5,000 feet.",
          "Custards, puddings, and stovetop syrups: lower boiling point means slower temperature climbs and longer cook times. A candy thermometer is essential; do not trust the recipe time.",
          "Fried foods and braises: water boils at a lower temperature, so the food cooks slightly more slowly. Add 5 to 10 percent to braising and simmering time.",
        ],
      },
      { kind: "h2", text: "Tools that make altitude baking easier" },
      {
        kind: "p",
        text:
          "Three pieces of kit do more than any single recipe adjustment.",
      },
      {
        kind: "ol",
        items: [
          "A digital kitchen scale with a tare button and gram precision. This is the single most useful upgrade for any baker, and it matters double at altitude.",
          "A candy thermometer that reads to at least 400°F. Boiling-point math gets you in the right ballpark; the thermometer tells you exactly when the syrup or custard has set.",
          "A standalone oven thermometer. Most home ovens are 10 to 25°F off from the dial, and at altitude that gap can be the difference between a set cake and a fallen one.",
        ],
      },
      { kind: "h2", text: "When to swap recipes instead of adjusting" },
      {
        kind: "p",
        text:
          "Some recipes do not adjust well no matter how careful you are. Souffles, angel food cakes, popovers, and chiffon cakes depend on a precise air structure that altitude disrupts hard. For these, find a recipe written by a baker who works above 5,000 feet. The Colorado State University Extension publishes a free, peer-reviewed altitude baking handbook with tested recipes for each elevation band, and King Arthur Baking has a high-altitude collection. These will save you the trial-and-error that comes from forcing a sea-level recipe to behave at altitude.",
      },
      {
        kind: "callout",
        text:
          "Bottom line: at altitude, weighing your ingredients in grams matters more than at sea level, not less. The cup measurement assumes a particular flour density, a particular humidity, and a particular air pressure. Altitude changes all three. A scale removes one of those variables and lets you focus the adjustment on leavening, liquid, and oven temperature.",
      },
      { kind: "h2", text: "Common altitude baking questions" },
      {
        kind: "h3",
        text:
          "Do I need to adjust at exactly 3,000 feet?",
      },
      {
        kind: "p",
        text:
          "Most recipes start to feel the difference between 2,500 and 3,500 feet. If you are at 3,000 feet, try the original recipe first; if it sinks, collapses, or runs, apply the 3,000 to 5,000 foot adjustments next time.",
      },
      {
        kind: "h3",
        text: "Why do my cookies spread into one big sheet at altitude?",
      },
      {
        kind: "p",
        text:
          "Lower air pressure plus drier air lets butter melt and run faster than the cookie structure can set. Add a tablespoon of flour per cup, chill the dough firm, and bake on a cool sheet pan (not one straight from the previous batch).",
      },
      {
        kind: "h3",
        text: "Does altitude affect cooking, or only baking?",
      },
      {
        kind: "p",
        text:
          "It affects both, but baking is more sensitive because the dough or batter has to set and trap gas in a precise window. For cooking, the main change is that water-based methods (boiling, simmering, braising) take a little longer because water boils at a lower temperature.",
      },
      {
        kind: "h3",
        text: "Should I switch to high-altitude recipes entirely?",
      },
      {
        kind: "p",
        text:
          "For cakes, yeast breads, and any recipe where structure matters (souffles, popovers, angel food, chiffon), yes. For cookies, quick breads, brownies, and most everyday baking, adjusting a sea-level recipe with the corrections above works fine.",
      },
      {
        kind: "link",
        text: "Open the recipe scaler",
        href: "/recipe-scaler",
        description:
          "Use the scaler to halve, double, or otherwise resize a recipe in cups and grams. Scale first, then apply altitude adjustments.",
      },
    ],
  },
  {
    slug: "why-scale-and-cup-disagree",
    locale: "en",
    author: "S. Richey",
    title: "Why Your Kitchen Scale and Measuring Cup Disagree",
    description:
      "You measured 1 cup of flour, then weighed it. The scale showed 145 grams. Your recipe wanted 120. Both tools are right. The cup just held more than the recipe expected.",
    publishedAt: "2026-05-14",
    readingMinutes: 4,
    alternateSlug: "por-que-bascula-y-taza-no-coinciden",
    tags: ["measurement", "tools", "baking"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "America's Test Kitchen: Why you should weigh your baking ingredients", url: "https://www.americastestkitchen.com/articles/2095-why-you-should-weigh-your-baking-ingredients" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You measured 1 cup of flour. You put it on the scale to double-check. The scale showed 145 grams. The recipe wanted 120 grams. Neither tool is broken. Both are telling the truth. The two-number gap is the whole problem with cup measurement.",
      },
      {
        kind: "callout",
        text:
          "A measuring cup tells you volume. A scale tells you weight. The same cup of flour can weigh 110 to 145 grams depending on how you scooped. The recipe writer picked one of those numbers, and there is no way to know which without weighing. The scale always wins for accuracy.",
      },
      { kind: "h2", text: "Why two cups of the same thing weigh differently" },
      {
        kind: "p",
        text:
          "Three things change what your cup of flour (or sugar, oats, cocoa) actually weighs:",
      },
      {
        kind: "ol",
        items: [
          "How you scoop. Dipping the cup straight into the bag packs the food in tight, adding 10 to 25 percent more than spooning gently.",
          "How settled the food is. A bag of flour that just got shaken in the car packs denser than one that sat still for a week.",
          "Humidity. Flour, cocoa, and brown sugar all absorb moisture from the air. The same cup weighs more on a wet day.",
        ],
      },
      { kind: "h2", text: "Which weight number is \"right\"?" },
      {
        kind: "p",
        text:
          "Whichever weight the recipe writer used. King Arthur Baking publishes 120 grams per cup of all-purpose flour. America's Test Kitchen publishes 142. Both are correct for their own kitchens; they just measure differently. When in doubt, check the recipe site for an ingredient weight chart.",
      },
      {
        kind: "image",
        alt: "A measuring cup of flour next to a kitchen scale showing 145 grams, with a label noting that the recipe wanted 120 grams.",
        placeholder:
          "A flat-lay shot: a metal dry-measuring cup full of flour sits next to a digital kitchen scale reading 145 g. A sticky note nearby says 'Recipe asked for 120 g.' Soft natural light.",
      },
      { kind: "h2", text: "When the gap matters and when it does not" },
      { kind: "h3", text: "Does not matter" },
      {
        kind: "ul",
        items: [
          "Soups, stews, and sauces. A spoonful of variance disappears in a pot.",
          "Rice and pasta. The cooking water absorbs the difference.",
          "Stir-fries and casual cooking. Taste, do not measure.",
        ],
      },
      { kind: "h3", text: "Matters a lot" },
      {
        kind: "ul",
        items: [
          "Cookies. A 20-gram flour mistake turns soft cookies into hockey pucks.",
          "Cakes. Too much flour kills the rise. The cake comes out short and dry.",
          "Bread. Hydration percentages matter. Off-weight flour throws off the dough.",
          "Pastry. The fat-to-flour ratio decides flakiness.",
        ],
      },
      { kind: "h2", text: "The fastest way to fix the gap" },
      {
        kind: "p",
        text:
          "A digital kitchen scale. Around $20, lasts years, ends the argument. Set the bowl on the scale, hit tare, pour until you see the right number. No scooping technique, no settling, no humidity worry. The scale is the single biggest accuracy upgrade you can make in the kitchen.",
      },
      { kind: "h2", text: "If you do not want a scale" },
      {
        kind: "p",
        text:
          "Use the spoon-and-level method consistently. Fluff the flour in the bag first, spoon it into the cup, level with a knife. Do not tap or settle. Same method every time. You will still be a few percent off the recipe writer's intent, but at least your own bakes will be consistent batch to batch.",
      },
      {
        kind: "link",
        text: "Open the cups to grams converter",
        href: "/cups-to-grams",
        description: "See the recipe weights for any common food, by cup.",
      },
    ],
  },
{
    slug: "reading-metric-recipes-with-us-cups",
    locale: "en",
    author: "S. Richey",
    title: "How to Read a Metric Recipe When You Only Have US Cups",
    description:
      "European and Australian recipes give grams and milliliters. US cookware gives cups and tablespoons. Here is the cheat sheet to translate without ruining the recipe.",
    publishedAt: "2026-05-11",
    readingMinutes: 5,
    alternateSlug: "recetas-metricas-con-tazas-estadounidenses",
    tags: ["measurement", "international", "fundamentals"],
    sources: [
      { label: "NIST Office of Weights and Measures", url: "https://www.nist.gov/pml/owm" },
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You found a perfect French tart recipe. The flour amount is 250 grams. The butter is 200 grams. The oven says 180°C. None of those numbers match what you have in your kitchen. A few simple conversions get you to a US-cup recipe you can actually follow.",
      },
      {
        kind: "callout",
        text:
          "The fastest translation: buy a kitchen scale. 250 grams of flour is 250 grams, no matter what cup you own. Failing that, learn five conversions and you can read almost any European recipe: 1 US cup = 237 ml, 1 stick of butter = 113 g, 180°C = 350°F, 200°C = 400°F, and 1 tablespoon = 15 ml.",
      },
      { kind: "h2", text: "The five conversions that cover most recipes" },
      {
        kind: "ol",
        items: [
          "Flour: 120 grams = 1 US cup. So 250 g flour ÷ 120 = about 2 cups plus 1 tablespoon.",
          "Sugar: 200 grams = 1 US cup. So 100 g sugar = 1/2 cup. So 250 g sugar = 1 1/4 cups.",
          "Butter: 113 grams = 1 US stick (1/2 cup). So 200 g butter = about 1 3/4 sticks, or 7/8 cup.",
          "Oven: 180°C = 350°F. 200°C = 400°F. 220°C = 425°F. (Formula: C × 1.8 + 32 = F.)",
          "Volume: 1 US cup = 237 ml. 1 tablespoon = 15 ml. 1 teaspoon = 5 ml.",
        ],
      },
      { kind: "h2", text: "Liquids are easier than solids" },
      {
        kind: "p",
        text:
          "Milliliters are space, and so are cups. The conversion is fixed for all liquids:",
      },
      {
        kind: "ul",
        items: [
          "60 ml = 1/4 cup",
          "120 ml = 1/2 cup",
          "180 ml = 3/4 cup",
          "240 ml = 1 cup (rounded; actual 237 ml)",
          "500 ml = 2 cups plus a hair",
          "1 liter = 4 cups plus a hair",
        ],
      },
      { kind: "h2", text: "Solids are trickier" },
      {
        kind: "p",
        text:
          "Grams measure weight. Cups measure space. Each food has its own weight per cup:",
      },
      {
        kind: "ul",
        items: [
          "All-purpose flour: 120 g per cup",
          "Bread flour: 127 g per cup",
          "White sugar: 200 g per cup",
          "Brown sugar (packed): 213 g per cup",
          "Butter: 227 g per cup (2 sticks)",
          "Rolled oats: 90 g per cup",
          "Cocoa powder: 85 g per cup",
          "Honey: 336 g per cup",
        ],
      },
      {
        kind: "image",
        alt: "A French baking recipe written in grams next to a US cup measuring set on the same kitchen counter.",
        placeholder:
          "A clean printout of a French tart recipe with metric measurements taped beside a set of nested US measuring cups and a digital scale. Caption: 'Two systems, one kitchen.'",
      },
      { kind: "h2", text: "When the recipe says \"metric cup\"" },
      {
        kind: "p",
        text:
          "An Australian or Canadian \"1 cup\" is 250 ml, not the US 237 ml. That is a 6 percent gap. For 1 metric cup, use 1 US cup plus 1 tablespoon. The math: 1 US cup (237 ml) + 1 tbsp (15 ml) = 252 ml, close enough to 250.",
      },
      { kind: "h2", text: "Oven temperature shortcuts" },
      {
        kind: "ul",
        items: [
          "150°C = 300°F (low)",
          "160°C = 325°F (low)",
          "175°C = 350°F (most baking)",
          "180°C = 350°F (close enough)",
          "190°C = 375°F",
          "200°C = 400°F",
          "220°C = 425°F",
          "230°C = 450°F",
        ],
      },
      { kind: "h2", text: "When in doubt, weigh" },
      {
        kind: "p",
        text:
          "A digital kitchen scale ends the question for solids. The recipe says 250 grams of flour, you put 250 grams of flour on the scale, done. No cup confusion, no math, no calculator needed. A simple scale costs less than a set of measuring cups and lasts 10 years.",
      },
      {
        kind: "link",
        text: "Open the milliliters to cups converter",
        href: "/ml-to-cups",
        description: "Quick liquid conversions between metric and US cups.",
      },
    ],
  },
{
    slug: "how-to-measure-sticky-honey",
    locale: "en",
    author: "S. Richey",
    title: "How to Measure Sticky Honey Without Losing Half in the Cup",
    description:
      "Honey clings to the cup. You can lose 10 percent before it makes it into your bowl. A thin oil coating fixes it. Weighing fixes it better.",
    publishedAt: "2026-05-09",
    readingMinutes: 3,
    alternateSlug: "como-medir-miel-pegajosa",
    tags: ["honey", "measurement", "baking"],
    sources: [
      { label: "National Honey Board: Science of honey", url: "https://www.honey.com/honey-industry/science-of-honey" },
      { label: "USDA FoodData Central: Honey", url: "https://fdc.nal.usda.gov/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You poured 1 cup of honey into the measuring cup. You tipped it over your bowl. A thick coat of honey stayed inside the cup. Your recipe is now short 10 percent honey, and that is the part of the sweetness it counted on.",
      },
      {
        kind: "callout",
        text:
          "1 US cup of honey weighs 336 grams. The cleanest way to measure: weigh the honey directly. The second cleanest: coat the measuring cup or spoon with a thin layer of cooking spray or vegetable oil first. The honey slides out clean.",
      },
      { kind: "h2", text: "Why honey clings" },
      {
        kind: "p",
        text:
          "Honey is mostly sugar dissolved in a small amount of water. Its surface tension pulls hard against any dry surface it touches. Plastic, glass, metal: they all hold onto honey. Add a film of oil between the cup and the honey, and the surface tension breaks. The honey lets go.",
      },
      { kind: "h2", text: "The three working methods" },
      { kind: "h3", text: "1. Spray-or-oil method (volume)" },
      {
        kind: "p",
        text:
          "Lightly spray the inside of the measuring cup with cooking spray. Or rub a few drops of vegetable oil around the inside with a paper towel. Pour the honey. Tip into the bowl. Almost all of it comes out.",
      },
      { kind: "h3", text: "2. The scale method (best)" },
      {
        kind: "p",
        text:
          "Place your mixing bowl on a kitchen scale. Hit tare. Pour honey from the jar directly into the bowl until you see the right number of grams. No measuring cup at all. No honey left behind.",
      },
      { kind: "h3", text: "3. The other-liquid trick" },
      {
        kind: "p",
        text:
          "If the recipe also calls for oil or butter, measure the oil or butter first. The cup is already coated. Pour the honey in next; it slides out cleanly without extra prep.",
      },
      {
        kind: "image",
        alt: "Two side-by-side measuring cups: one with honey clinging heavily to the inside walls and one that came out clean after being sprayed with cooking spray.",
        placeholder:
          "Two glass measuring cups on a wooden counter. Left: heavy honey residue coating the inside. Right: nearly empty, just a thin film. Caption: 'Plain cup loses 10%. Oiled cup wins.'",
      },
      { kind: "h2", text: "Crystallized honey" },
      {
        kind: "p",
        text:
          "Honey crystallizes when it sits at cool temperatures. It is still good. To re-liquefy, set the jar in a bowl of warm (not boiling) water for 10 minutes. Do not microwave at high power; honey can scorch.",
      },
      { kind: "h2", text: "Quick weights" },
      {
        kind: "ul",
        items: [
          "1 tablespoon honey = 21 grams",
          "1/4 cup honey = 84 grams",
          "1/2 cup honey = 168 grams",
          "1 cup honey = 336 grams",
          "2 cups honey = 672 grams (about 1.5 pounds)",
        ],
      },
      {
        kind: "link",
        text: "Open the honey cups to grams converter",
        href: "/honey-cups-to-grams",
        description: "Convert any honey amount between cups and grams.",
      },
    ],
  },
{
    slug: "yeast-packets-vs-tablespoons",
    locale: "en",
    author: "S. Richey",
    title: "Yeast: Why 1 Packet Is Not 1 Tablespoon",
    description:
      "A standard packet of yeast is 7 grams or about 2 and 1/4 teaspoons. That is 3/4 of a tablespoon, not a full one. Using a full tablespoon adds 33 percent more yeast.",
    publishedAt: "2026-05-07",
    readingMinutes: 4,
    alternateSlug: "levadura-sobres-vs-cucharadas",
    tags: ["yeast", "baking", "measurement", "bread"],
    sources: [
      { label: "Fleischmann's Yeast: Baking with yeast", url: "https://www.fleischmannsyeast.com/baking-with-yeast/" },
      { label: "Red Star Yeast: Baking lessons", url: "https://redstaryeast.com/yeast-baking-lessons/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Bread recipe says \"1 packet of yeast.\" You opened the cabinet and found a jar of yeast, not a packet. So you measured a tablespoon, because that is the closest measure you remembered. The bread rose too fast, tasted yeasty, and collapsed in the oven. You used 33 percent too much.",
      },
      {
        kind: "callout",
        text:
          "1 standard packet of yeast = 7 grams = 2 and 1/4 teaspoons = 3/4 of a tablespoon. NOT a full tablespoon. A full tablespoon of yeast is 9 grams, about 33 percent more than a packet. The math: 1 teaspoon of yeast weighs 3 grams. 3 teaspoons make a tablespoon, which makes 9 grams.",
      },
      { kind: "h2", text: "The packet math, written out" },
      {
        kind: "ul",
        items: [
          "1 yeast packet = 7 g = 2 1/4 tsp = 1/4 oz",
          "1 tsp yeast = 3 g (roughly)",
          "1 tbsp yeast = 9 g = 1 1/3 packets",
          "2 packets = 14 g = 4 1/2 tsp = 1 1/2 tbsp",
          "3 packets = 21 g = about 1 oz (a half-strip of packets)",
        ],
      },
      { kind: "h2", text: "Active dry vs instant: do not confuse them" },
      {
        kind: "p",
        text:
          "Two main yeast types fill home cupboards:",
      },
      { kind: "h3", text: "Active dry yeast" },
      {
        kind: "p",
        text:
          "Larger grains. Needs to be \"proofed\" in warm water with sugar before you mix it into dough. The recipe usually says \"dissolve in warm water for 5 minutes.\" If it foams, the yeast is alive.",
      },
      { kind: "h3", text: "Instant yeast (sometimes called rapid-rise or bread machine yeast)" },
      {
        kind: "p",
        text:
          "Smaller grains. Mixes directly into the flour, no proofing needed. Acts about 25 percent faster than active dry. Convenient for hands-on baking.",
      },
      { kind: "h3", text: "Swap rule" },
      {
        kind: "p",
        text:
          "To use active dry where the recipe calls for instant, multiply by 1.25 (use 25 percent more). To use instant where the recipe calls for active dry, multiply by 0.75 (use 25 percent less). By weight, they are close enough at small amounts that 1 packet of either works in most recipes.",
      },
      {
        kind: "image",
        alt: "A 7-gram yeast packet, a teaspoon measure with yeast, and a kitchen scale showing 7 grams of yeast, all arranged on a wooden board.",
        placeholder:
          "Flat-lay: one yeast packet (Fleischmann's-style red and yellow), a teaspoon with yeast piled in it, and a digital scale showing 7 g. Caption: 'One packet, three ways to measure.'",
      },
      { kind: "h2", text: "Fresh yeast (cake yeast)" },
      {
        kind: "p",
        text:
          "Less common in home kitchens. Sold as a small wet block in the refrigerator section. The conversion: 1 packet of dry yeast = about 17 grams of fresh yeast. The math is 1:2.5 (dry to fresh) by weight. Fresh yeast lasts only 2 to 3 weeks; dry yeast lasts a year in the fridge.",
      },
      { kind: "h2", text: "Storing yeast so it stays alive" },
      {
        kind: "ul",
        items: [
          "Sealed packets: store at room temperature until the expiration date on the package.",
          "Open jars or strip packs: transfer to a clean airtight container, store in the fridge for up to 4 months, or freezer for up to a year.",
          "Always proof old yeast (warm water + pinch of sugar, wait 5 minutes for foam). If it does not foam, it is dead.",
        ],
      },
      {
        kind: "link",
        text: "Open the tablespoons to cups converter",
        href: "/tablespoons-to-cups",
        description: "Convert tablespoons, teaspoons, cups, and milliliters.",
      },
    ],
  },
{
    slug: "rolled-vs-quick-vs-steel-cut-oats",
    locale: "en",
    author: "S. Richey",
    title: "Rolled vs Quick vs Steel-Cut Oats: Same Name, Different Weight",
    description:
      "Rolled and quick oats both weigh about 90 grams per cup. Steel-cut oats weigh 180 grams per cup. Swapping one for another in a recipe changes everything.",
    publishedAt: "2026-05-05",
    readingMinutes: 4,
    alternateSlug: "avena-en-hojuelas-instantanea-cortada",
    tags: ["oats", "baking", "measurement"],
    sources: [
      { label: "Quaker Oats: Oats and grains", url: "https://www.quakeroats.com/oats-do-more/oats-and-grains" },
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "The grocery store has four shelves of oats. They all say \"oats\" on the front. The recipe just says \"1 cup of oats.\" The wrong choice can make oatmeal cookies that crunch like gravel or overnight oats that stay raw.",
      },
      {
        kind: "callout",
        text:
          "1 cup of rolled oats (old-fashioned) is about 90 grams. Quick oats weigh the same. 1 cup of dry steel-cut oats is about 180 grams, twice the weight, because the pieces pack tighter. Instant oats sit in the middle at around 80 grams per cup.",
      },
      { kind: "h2", text: "What each kind actually is" },
      { kind: "h3", text: "Rolled oats (old-fashioned)" },
      {
        kind: "p",
        text:
          "Whole oat groats steamed and pressed flat. They look like coins. They take 5 to 10 minutes to cook into oatmeal. Best for oatmeal cookies, granola, crumbles, and overnight oats. 90 grams per cup.",
      },
      { kind: "h3", text: "Quick oats" },
      {
        kind: "p",
        text:
          "Rolled oats cut smaller so they cook in 1 to 3 minutes. Same weight per cup as rolled. They give a softer, more porridge-like texture in baking. You can usually swap them for rolled, but cookies and granola will be less chewy.",
      },
      { kind: "h3", text: "Steel-cut oats (Irish oats)" },
      {
        kind: "p",
        text:
          "Whole oat groats chopped into pieces with steel blades, not rolled flat. They look like coarse rice. Cook time: 20 to 30 minutes. Used for stovetop oatmeal, savory oats, and risotto-style dishes. Almost never used in baking.",
      },
      { kind: "h3", text: "Instant oats" },
      {
        kind: "p",
        text:
          "Pre-cooked, dried, and rolled even thinner. Ready in 1 minute with hot water. Mainly found in flavored single-serve packets. Not used in baking; the texture turns to mush.",
      },
      {
        kind: "image",
        alt: "Four small bowls in a row, each holding a different type of oats (rolled, quick, steel-cut, instant), labeled by name and weight per cup.",
        placeholder:
          "Four small white bowls on a wood board. Each holds one cup of oats. Labels: 'Rolled 90 g', 'Quick 90 g', 'Steel-cut 180 g', 'Instant 80 g'. Side lighting shows the different textures.",
      },
      { kind: "h2", text: "Why steel-cut weighs twice as much" },
      {
        kind: "p",
        text:
          "Rolled and quick oats are mostly air. Each flake holds its shape, leaving gaps. Steel-cut is solid grain chopped into pieces, with much less air between them. The same cup volume packs in nearly twice the mass.",
      },
      { kind: "h2", text: "Can I swap them in a recipe?" },
      {
        kind: "ul",
        items: [
          "Rolled ↔ quick: usually yes. Cookies will be less chewy with quick. Granola will be finer. Overnight oats work with either.",
          "Rolled → steel-cut in baking: no. Steel-cut needs cooking before it softens. Baked goods will crunch.",
          "Steel-cut → rolled in stovetop oatmeal: yes, but cook time drops from 25 minutes to 10. Texture goes from chewy to creamy.",
          "Instant → anything in baking: no. The texture is too soft and breaks down.",
        ],
      },
      { kind: "h2", text: "What about gluten-free oats?" },
      {
        kind: "p",
        text:
          "Same weights per cup. Gluten-free oats are normal oats grown and processed separately from wheat, so the weight and texture match standard oats of the same cut.",
      },
      {
        kind: "link",
        text: "Open the oats cups to grams converter",
        href: "/oats-cups-to-grams",
        description: "Convert any oat type between cups and grams.",
      },
    ],
  },
{
    slug: "halve-recipe-with-one-egg",
    locale: "en",
    author: "S. Richey",
    title: "How to Halve a Recipe With One Egg",
    description:
      "Half of one egg is 25 grams or 2 tablespoons. Crack the egg, whisk it smooth, and use half. Save the rest for tomorrow's omelette.",
    publishedAt: "2026-05-03",
    readingMinutes: 4,
    alternateSlug: "como-partir-receta-con-un-huevo",
    tags: ["recipe scaling", "eggs", "baking"],
    sources: [
      { label: "King Arthur Baking: How to reduce a recipe", url: "https://www.kingarthurbaking.com/blog/2020/11/23/how-to-reduce-a-recipe" },
      { label: "Food Network: How to halve an egg for baking", url: "https://www.foodnetwork.com/how-to/packages/food-network-essentials/how-to-halve-an-egg-for-baking" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You found a small-batch recipe online, but you want it smaller. The recipe makes 12 cookies. You only want 6. The math is easy: cut everything in half. Then you get to the eggs. There is one. Now what?",
      },
      {
        kind: "callout",
        text:
          "A large egg out of the shell weighs about 50 grams. Half is 25 grams. Crack the egg into a small bowl, whisk it until the yolk and white are one color, and measure out 2 tablespoons (or weigh out 25 grams). That is half an egg.",
      },
      { kind: "h2", text: "The three ways to halve an egg" },
      { kind: "h3", text: "1. By weight (most accurate)" },
      {
        kind: "p",
        text:
          "Crack the egg into a bowl. Whisk until smooth. Place the bowl on a kitchen scale, hit tare, and pour out 25 grams. This is the method professional bakers use because it removes all the guessing.",
      },
      { kind: "h3", text: "2. By volume (no scale needed)" },
      {
        kind: "p",
        text:
          "Crack and whisk the same way. Use a tablespoon measure to scoop 2 tablespoons. A large beaten egg measures about 4 tablespoons total, so 2 tablespoons is right at half.",
      },
      { kind: "h3", text: "3. The yolk-and-white split (for custards)" },
      {
        kind: "p",
        text:
          "For custards and creams, some bakers use one whole yolk in place of half an egg. The yolk gives richness and binding. Skip the white. This is a baker's shortcut, not a universal swap; it works for crème brûlée, custard, and curd.",
      },
      {
        kind: "image",
        alt: "A whisked egg in a small bowl on a kitchen scale, with the display reading 50 grams, and a tablespoon measure beside it.",
        placeholder:
          "Top-down shot: a whisked large egg in a small white bowl, kitchen scale showing 50 g, a tablespoon measure with 2 tbsp of egg in it. Caption: 'Same egg, two ways to measure half.'",
      },
      { kind: "h2", text: "What to do with the other half" },
      {
        kind: "p",
        text:
          "Cover the remaining whisked egg and refrigerate. It keeps for up to 2 days. Use it in:",
      },
      {
        kind: "ul",
        items: [
          "Tomorrow's scrambled eggs or omelette (just whisk into more eggs)",
          "A small batch of pancakes",
          "An egg wash for bread or pastry (mix with a splash of water)",
          "French toast batter",
        ],
      },
      { kind: "h2", text: "When the egg ratio really matters" },
      {
        kind: "p",
        text:
          "Eggs do four jobs in baking: they bind, they leaven, they add moisture, and they emulsify. The more a recipe depends on egg structure, the more accuracy matters.",
      },
      {
        kind: "ul",
        items: [
          "Cookies and quick breads: eyeballing half an egg is fine.",
          "Pound cakes and butter cakes: weigh it.",
          "Sponge cakes, soufflés, and meringues: do not halve. Make the full recipe or scale to a different yolk-to-white ratio entirely.",
        ],
      },
      { kind: "h2", text: "What about extra-large or jumbo eggs?" },
      {
        kind: "p",
        text:
          "US large eggs are 50 grams out of the shell. Extra-large are 56 grams. Jumbo are 63 grams. If your recipe says \"large egg\" and you only have jumbo, weighing avoids the mismatch. For halving, use 25 grams regardless of egg size.",
      },
      {
        kind: "link",
        text: "Open the recipe scaler",
        href: "/recipe-scaler",
        description: "Halve, double, or triple any recipe and see the new amounts.",
      },
    ],
  },
{
    slug: "doubling-recipe-cook-time",
    locale: "en",
    author: "S. Richey",
    title: "Doubling a Recipe Does Not Double the Cook Time",
    description:
      "When you double a recipe, the food does not need twice as long in the oven. Add 25 to 30 percent, watch closely, and use a thermometer.",
    publishedAt: "2026-05-01",
    readingMinutes: 4,
    alternateSlug: "duplicar-receta-tiempo-coccion",
    tags: ["recipe scaling", "baking", "cooking time"],
    sources: [
      { label: "America's Test Kitchen: No, you can't always just double a recipe", url: "https://www.americastestkitchen.com/articles/8047-no-you-cant-always-just-double-a-recipe" },
      { label: "KitchenAid: Doubling a recipe", url: "https://www.kitchenaid.com/pinch-of-help/countertop-appliances/doubling-a-recipe.html" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You doubled your favorite banana bread. The recipe said 60 minutes at 350°F. So 120 minutes, right? No. Two hours later you have a brick. The math you used works for ingredients. It does not work for time.",
      },
      {
        kind: "callout",
        text:
          "When you double a recipe and bake it in one larger pan, add 25 to 30 percent to the cooking time, not 100 percent. If your recipe says 60 minutes, try 75 to 80 minutes and start checking at 60. If you split the doubled batch across two pans of the original size, the time stays roughly the same.",
      },
      { kind: "h2", text: "Why time does not scale with volume" },
      {
        kind: "p",
        text:
          "Heat travels through food from the outside in. The thicker the food, the longer the heat takes to reach the center. But the relationship is not linear. Doubling the volume only adds about 25 to 30 percent to the cook time because the surface area still does most of the work.",
      },
      {
        kind: "p",
        text:
          "Think of it like a bathtub. Filling a tub twice as big does not take twice as long if you also use a bigger hose. The oven is the hose; the food is the tub. The surface area scales, just slower than the volume.",
      },
      {
        kind: "image",
        alt: "Two banana bread loaves side by side, one in a standard pan and one in a wider doubled pan, with cook times labeled.",
        placeholder:
          "Two banana bread loaves cooling on a rack. Left: standard loaf, 60 minutes. Right: doubled batter in a wider loaf pan, 78 minutes. A thermometer probe sticks out of one.",
      },
      { kind: "h2", text: "The two ways to bake a doubled batch" },
      { kind: "h3", text: "Option A: Two pans of the original size" },
      {
        kind: "p",
        text:
          "Split the doubled batter between two pans the same size as the recipe used. Bake both at once. The cook time stays the same as the original. This is the safest method, especially for cakes and breads.",
      },
      { kind: "h3", text: "Option B: One larger pan" },
      {
        kind: "p",
        text:
          "Pour all the doubled batter into a pan with twice the area (or close to it). The cook time goes up by 25 to 30 percent. The risk: the outside dries out before the inside cooks. To help, drop the oven temperature by 25°F and bake longer, so the heat gets in more evenly.",
      },
      { kind: "h2", text: "Foods where you should NOT double cook time" },
      {
        kind: "ul",
        items: [
          "Cookies. Same temperature, same time, just more sheet pans. Bake in batches.",
          "Muffins and cupcakes. Same time, just two pans.",
          "Roast chicken or turkey. Cook time is determined by weight (about 13 minutes per pound at 350°F), not the recipe number.",
          "Pies. Same time. Double the pie means baking two pies side by side.",
        ],
      },
      { kind: "h2", text: "Use a thermometer, always" },
      {
        kind: "p",
        text:
          "Internal temperature beats timing on any large bake. Quick breads and most cakes are done at 200 to 210°F in the center. Yeast bread is done at 190 to 200°F. Chicken is done at 165°F. The thermometer ends the guessing.",
      },
      {
        kind: "link",
        text: "Open the recipe scaler",
        href: "/recipe-scaler",
        description: "Double, halve, or triple any recipe with clean fractions.",
      },
    ],
  },
{
    slug: "why-cocoa-powder-is-hard-to-measure",
    locale: "en",
    author: "S. Richey",
    title: "Why Cocoa Powder Is So Hard to Measure by Cup",
    description:
      "Cocoa is light, fluffy, and clumps. A scooped cup can weigh anywhere from 75 to 100 grams. Here is why, and how to get a number you can trust.",
    publishedAt: "2026-04-28",
    readingMinutes: 4,
    alternateSlug: "por-que-cacao-en-polvo-es-dificil-medir",
    tags: ["baking", "cocoa", "measurement"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "Wikipedia: Dutch process cocoa", url: "https://en.wikipedia.org/wiki/Dutch_process_cocoa" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You measured 1 cup of cocoa powder for a chocolate cake. The cake came out dry. You read three recipes online and they all gave different gram weights for 1 cup of cocoa: 75, 85, 100. Which one is right? Sort of all of them.",
      },
      {
        kind: "callout",
        text:
          "Natural unsweetened cocoa powder weighs about 82 grams per US cup. Dutch-process cocoa weighs more, around 96 grams per cup, because the alkali treatment makes it denser. We use 85 grams as a working average. If you sift first, the cup weighs even less, around 75 grams.",
      },
      { kind: "h2", text: "What makes cocoa so variable" },
      {
        kind: "p",
        text:
          "Three things work against you when you measure cocoa by cup:",
      },
      {
        kind: "ol",
        items: [
          "It clumps. Cocoa pulls moisture from the air. The clumps trap pockets of air inside the cup, so the cup weighs less than it should.",
          "It compresses. If you tap the cup or pack the cocoa down, you crush the clumps. The cup now weighs more.",
          "It varies by type. Natural cocoa is lighter and fluffier. Dutch-process (alkalized) cocoa is denser and weighs more per cup.",
        ],
      },
      {
        kind: "image",
        alt: "A cup of cocoa powder with visible clumps next to a smaller bowl of sifted cocoa, both on a digital scale.",
        placeholder:
          "Two small bowls of cocoa powder side by side: one clumpy and unsifted (scale shows 95 g), one finely sifted (scale shows 75 g). Caption: 'Same cup, same cocoa, different weight.'",
      },
      { kind: "h2", text: "Natural vs Dutch-process: more than density" },
      {
        kind: "p",
        text:
          "Natural cocoa is acidic. It reacts with baking soda to give cakes rise. Dutch-process cocoa is treated with alkali, which neutralizes the acid. It is darker, smoother in flavor, and does not react with baking soda the same way.",
      },
      {
        kind: "p",
        text:
          "If a recipe says natural cocoa, swapping in Dutch-process can flatten the cake. The math is more than just weight; the chemistry changes. Read the recipe before you substitute.",
      },
      { kind: "h2", text: "How to measure cocoa accurately" },
      {
        kind: "ul",
        items: [
          "Best: weigh on a kitchen scale. 85 grams per cup as a default for unsweetened cocoa.",
          "Good: sift the cocoa first, then spoon and level into the cup. Closer to the recipe writer's intent.",
          "Acceptable: stir the cocoa in the can to break up clumps, then spoon and level.",
          "Avoid: scooping the measuring cup straight into the can. The clumps fool you about the real weight.",
        ],
      },
      { kind: "h2", text: "A small note on chocolate quality" },
      {
        kind: "p",
        text:
          "Brand matters more for cocoa than for most ingredients. A high-fat Dutch-process cocoa (22 to 24 percent cocoa butter) makes deeper chocolate flavor than a low-fat natural cocoa (10 to 12 percent). If a chocolate dessert tastes flat, the cocoa may be the issue before the recipe is.",
      },
      {
        kind: "link",
        text: "Open the cocoa cups to grams converter",
        href: "/cocoa-cups-to-grams",
        description: "Convert any cocoa amount between cups and grams with the right density.",
      },
    ],
  },
{
    slug: "cup-sizes-around-the-world",
    locale: "en",
    author: "S. Richey",
    title: "Imperial Cup vs Metric Cup vs US Cup: Which Does Your Recipe Mean?",
    description:
      "There are at least three cup sizes in cooking. US 236.59 ml. Metric 250 ml. Imperial 284 ml. Here is how to spot which one your recipe wants.",
    publishedAt: "2026-04-25",
    readingMinutes: 5,
    alternateSlug: "tamanos-de-taza-en-el-mundo",
    tags: ["measurement", "international", "fundamentals"],
    sources: [
      { label: "NIST Office of Weights and Measures", url: "https://www.nist.gov/pml/owm" },
      { label: "Wikipedia: Cup (unit)", url: "https://en.wikipedia.org/wiki/Cup_(unit)" },
    ],
    body: [
      {
        kind: "p",
        text:
          "\"1 cup of flour.\" The same three words appear in cookbooks all over the world. They mean different amounts of flour depending on where the cookbook was written. Some recipes survive the gap. Some do not.",
      },
      {
        kind: "callout",
        text:
          "Three main cup sizes in cooking: US 236.59 ml (often rounded to 240). Metric 250 ml, used in Australia, Canada, and New Zealand. Imperial 284 ml, the old British cup, mostly gone but appears in pre-1971 UK cookbooks. A US cup is about 6 percent smaller than metric and about 17 percent smaller than imperial.",
      },
      { kind: "h2", text: "The full list of cup sizes that exist" },
      {
        kind: "ul",
        items: [
          "US customary cup: 236.59 ml (the actual standard; often rounded to 240).",
          "Metric cup (Australia, Canada, New Zealand, most of Europe): 250 ml.",
          "UK imperial cup, pre-1971: 284.13 ml. Rare in modern recipes.",
          "Japanese rice cup: 180 ml. Used specifically for rice cookers.",
          "Japanese cooking cup: 200 ml. Used in general Japanese recipes.",
          "Latin America: varies; most modern recipes use 240 ml or skip cups for metric.",
        ],
      },
      {
        kind: "image",
        alt: "Five measuring cups in a row showing US, metric, imperial, Japanese cooking, and Japanese rice sizes with milliliter labels.",
        placeholder:
          "Five glass measuring cups in a row, each filled to its mark and labeled: US (236), Metric (250), Imperial (284), Japan Cooking (200), Japan Rice (180). Soft warm lighting, white background.",
      },
      { kind: "h2", text: "How to tell which cup your recipe means" },
      {
        kind: "ol",
        items: [
          "Country of origin. US sites, US books, US TV: 236.59 ml. Australian/Canadian/NZ sites: 250 ml. UK modern recipes: usually grams instead of cups.",
          "Domain. .com, .net, and major US sites = US cup. .com.au, .co.nz, .ca = metric cup. .co.uk = often grams.",
          "Publication date. Old British cookbooks (1971 and earlier) use the imperial cup. Modern UK recipes do not.",
          "Side-by-side grams. If a recipe lists both cups and grams, the grams settle the question. Use them.",
          "Spoon size. Australian tablespoons are 20 ml (4 teaspoons). US and UK tablespoons are 15 ml (3 teaspoons). If the recipe uses an Australian tablespoon, it likely uses the Australian cup too.",
        ],
      },
      { kind: "h2", text: "Quick conversion guide" },
      {
        kind: "ul",
        items: [
          "1 US cup = 0.95 metric cup = 0.83 imperial cup",
          "1 metric cup = 1.06 US cups = 0.88 imperial cup",
          "1 imperial cup = 1.20 US cups = 1.14 metric cup",
          "If a recipe calls for 1 metric cup and you only have US cups, use 1 US cup plus 1 tablespoon (251 ml). Close enough.",
          "If a recipe calls for 1 imperial cup and you only have US cups, use 1 US cup plus 3 tablespoons plus 1 teaspoon. Or weigh.",
        ],
      },
      { kind: "h2", text: "Why this matters for baking" },
      {
        kind: "p",
        text:
          "Cooking forgives small measurement gaps. A 6 percent cup difference disappears in soup. Baking does not forgive. Cakes, cookies, breads, pastries are chemistry. A 6 percent gap in flour or sugar shows up in texture, rise, and flavor.",
      },
      {
        kind: "p",
        text:
          "If you are baking an international recipe and it does not give grams, look up which cup the country uses, then convert. Or skip the cup question and weigh.",
      },
      { kind: "h2", text: "The shortcut that beats every cup size" },
      {
        kind: "p",
        text:
          "Buy a digital kitchen scale. 20 dollars. Tare button, gram precision, 5 kg capacity. You will never have to know which cup your recipe means again. A gram is a gram in every country.",
      },
      {
        kind: "link",
        text: "Open the cups to grams converter",
        href: "/cups-to-grams",
        description: "Pick your food, pick your cup size, get the grams.",
      },
    ],
  },
{
    slug: "convection-oven-25-degrees",
    locale: "en",
    author: "S. Richey",
    title: "Convection Oven: Drop 25°F (and Here Is Why)",
    description:
      "A convection fan moves hot air over your food. That makes it cook faster and hotter at the same dial setting. Lower the temperature by 25°F or shorten the cook time by about 30 percent.",
    publishedAt: "2026-04-22",
    readingMinutes: 4,
    alternateSlug: "horno-conveccion-bajar-25-grados",
    tags: ["oven", "baking", "temperature"],
    sources: [
      { label: "America's Test Kitchen: Convection oven cooking", url: "https://support.americastestkitchen.com/hc/en-us/articles/22917926810779-Convection-Oven-Cooking" },
      { label: "GE Appliances: Adapting recipes for convection cooking", url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=18176" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Your recipe says 350°F. Your oven has a convection button. Do you push it? If you do, you need to make one small change: lower the dial by 25 degrees, or take the food out sooner. The why is in the fan.",
      },
      {
        kind: "callout",
        text:
          "Standard convection rule: drop the recipe temperature by 25°F (about 15°C), or keep the temperature and reduce baking time by roughly 30 percent. Most new ovens do this automatically when you select convection. Check the manual.",
      },
      { kind: "h2", text: "What the convection fan actually does" },
      {
        kind: "p",
        text:
          "A regular oven heats the air inside the box. The air sits still. The food next to the heating element cooks faster than the food in the middle.",
      },
      {
        kind: "p",
        text:
          "A convection oven adds a fan. The fan moves the hot air around constantly. Every side of the food gets the same heat. That sounds small, but it changes how fast the surface dries out, how fast browning happens, and how evenly the inside cooks.",
      },
      {
        kind: "image",
        alt: "Cross-section of a convection oven showing the fan circulating hot air around food on three racks.",
        placeholder:
          "Simple diagram: oven box, fan at the back drawn with arrows showing air moving over food on multiple racks. Caption: 'Moving air = faster, more even heat.'",
      },
      { kind: "h2", text: "Why 25°F is the magic number" },
      {
        kind: "p",
        text:
          "Manufacturers and test kitchens settled on 25°F because it lines convection results up with conventional results. America's Test Kitchen, KitchenAid, and GE all recommend the same adjustment.",
      },
      {
        kind: "p",
        text:
          "For 350°F set the dial to 325. For 400°F set 375. For 425°F set 400. The food browns the same and cooks in roughly the same time as a regular oven at the recipe's stated temperature.",
      },
      { kind: "h2", text: "When NOT to adjust" },
      {
        kind: "ul",
        items: [
          "Cakes with a delicate rise (chiffon, angel food). The fan can crack the top. Stick to conventional for these.",
          "Custards, cheesecakes, and water-bath bakes. They cook gently; convection can over-dry.",
          "Anything with a high liquid content where you do not want a crust.",
          "Recipes that already say \"convection 350°F.\" The writer already adjusted.",
        ],
      },
      { kind: "h2", text: "Quick adjustment table" },
      {
        kind: "ul",
        items: [
          "Recipe 300°F → Convection 275°F",
          "Recipe 325°F → Convection 300°F",
          "Recipe 350°F → Convection 325°F",
          "Recipe 375°F → Convection 350°F",
          "Recipe 400°F → Convection 375°F",
          "Recipe 425°F → Convection 400°F",
          "Recipe 450°F → Convection 425°F",
        ],
      },
      {
        kind: "p",
        text:
          "Check the food about 10 to 15 percent earlier than the recipe says, even with the temperature dropped. Use a thermometer for anything where doneness matters.",
      },
      {
        kind: "link",
        text: "Open the Fahrenheit to Celsius oven converter",
        href: "/fahrenheit-to-celsius",
        description: "Convert any oven temperature with gas marks for UK recipes.",
      },
    ],
  },
{
    slug: "european-butter-vs-american-sticks",
    locale: "en",
    author: "S. Richey",
    title: "European Butter Blocks vs American Sticks: The 250g vs 113g Problem",
    description:
      "A US butter stick is 113 grams. A European block is 250 grams. They do not divide evenly, and the butterfat is different. How to swap without ruining the bake.",
    publishedAt: "2026-04-20",
    readingMinutes: 5,
    alternateSlug: "mantequilla-europea-vs-barras-estadounidenses",
    tags: ["butter", "baking", "international"],
    sources: [
      { label: "USDA AMS: Butter grading standards", url: "https://www.ams.usda.gov/grades-standards/butter-standard" },
      { label: "European Commission Regulation 1308/2013 (butter standards)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32013R1308" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Your recipe says \"2 sticks of butter.\" You opened the fridge and found a 250-gram block of European butter. They look about the same size. They are not. Using the whole block adds 24 extra grams, which sounds like nothing until you taste the cookies.",
      },
      {
        kind: "callout",
        text:
          "1 US stick of butter = 113 grams (4 oz, 1/2 cup, 8 tablespoons). 1 European block = typically 250 grams. So 2 sticks = 226 g, NOT 250 g. Cut 24 grams off a European block to match \"2 sticks.\" European butter is also 82 percent butterfat (vs 80 percent US), which can change pastry texture.",
      },
      { kind: "h2", text: "Why the sizes are different" },
      {
        kind: "p",
        text:
          "US butter is sold in 1-pound packages of four sticks. Each stick is a quarter pound, or 4 ounces, or 113 grams. The factories chose this shape in the early 1900s and it stuck. Every American recipe assumes it.",
      },
      {
        kind: "p",
        text:
          "European butter comes in blocks, not sticks. Most common sizes: 250 grams (Germany, France, Spain), 200 grams (some UK), or 227 grams (Irish, same as 2 US sticks). The dairy industry there standardized around metric weights long before the US dairy aisle changed.",
      },
      {
        kind: "image",
        alt: "A foil-wrapped American butter stick and a paper-wrapped 250 g European butter block on a cutting board with a digital scale showing 113 g.",
        placeholder:
          "Flat-lay: 1 US stick (paper wrapper, marked with tablespoon lines), 1 European 250 g block (foil wrap), and a digital scale showing 113 g. Caption: 'Same shape, different math.'",
      },
      { kind: "h2", text: "Quick conversion table" },
      {
        kind: "ul",
        items: [
          "1 US stick = 113 g = 1/2 cup = 8 tablespoons",
          "2 US sticks = 226 g = 1 cup = 16 tablespoons",
          "1 European 200 g block = 1.77 US sticks (cut 27 g to make 1.5 sticks)",
          "1 European 250 g block = 2.21 US sticks (cut 24 g to make 2 sticks)",
          "1 Irish 227 g block = 2.01 US sticks (use the whole block for \"2 sticks\")",
          "1 European 500 g block = 4.42 US sticks (cut 47 g to make 4 sticks)",
        ],
      },
      { kind: "h2", text: "The butterfat difference (and when it matters)" },
      {
        kind: "p",
        text:
          "EU regulations require a minimum of 82 percent butterfat. US standard butter is 80 percent. The extra 2 percent is mostly less water. Water becomes steam in the oven, and steam matters for puff pastry, croissants, and pie crusts.",
      },
      {
        kind: "ul",
        items: [
          "Cookies: barely noticeable. European butter spreads a bit less.",
          "Cakes: small change in tenderness. Most home bakers will not tell.",
          "Pie crust: noticeable. European butter gives flakier layers.",
          "Croissants and puff pastry: significant. European butter is the better choice.",
          "Buttercream: smoother and richer with European butter.",
        ],
      },
      { kind: "h2", text: "When to spend the extra money" },
      {
        kind: "p",
        text:
          "European-style butter costs 50 to 100 percent more than standard American butter. The premium is worth it for laminated doughs (croissants, danish, puff pastry), butter-forward cookies (shortbread, sablés), and the buttercream on a layer cake. For everything else, regular American butter does the same job at half the price.",
      },
      { kind: "h2", text: "Salted vs unsalted, while we are here" },
      {
        kind: "p",
        text:
          "American recipes default to unsalted butter unless they say otherwise, so the recipe controls the salt. European butter is often sold lightly salted as the default. Check the wrapper. If you only have salted butter, reduce the recipe's added salt by 1/4 teaspoon per stick.",
      },
      {
        kind: "link",
        text: "Open the butter converter",
        href: "/butter-converter",
        description: "Switch between sticks, tablespoons, cups, grams, ounces, and pounds.",
      },
    ],
  },
{
    slug: "250-ml-is-not-1-us-cup",
    locale: "en",
    author: "S. Richey",
    title: "The 250 ml Cup Is Not the US Cup (Australian Recipe Gotcha)",
    description:
      "An Australian metric cup is 250 ml. A US cup is 236.59 ml. The 6 percent gap can ruin a small-batch cake. Here is what to watch for.",
    publishedAt: "2026-04-17",
    readingMinutes: 4,
    alternateSlug: "250-ml-no-es-1-taza-estadounidense",
    tags: ["measurement", "international", "baking"],
    sources: [
      { label: "NIST Handbook 44 (US customary units)", url: "https://www.nist.gov/pml/owm/publications/handbook-44" },
      { label: "Wikipedia: Cup (unit)", url: "https://en.wikipedia.org/wiki/Cup_(unit)" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You pulled a great recipe off a food blog. The pavlova or the lamingtons look perfect. You measure 1 cup of sugar. The recipe is from Sydney. Your cup is from Target. The result is sweeter or drier than the photo. The cups are not the same size.",
      },
      {
        kind: "callout",
        text:
          "US cup: 236.59 ml. Metric cup (Australia, Canada, New Zealand): 250 ml. Old UK imperial cup: 284 ml. The metric cup is about 6 percent bigger than the US cup. That gap matters in baking, less so in cooking.",
      },
      { kind: "h2", text: "Where each cup is used" },
      {
        kind: "ul",
        items: [
          "United States: 236.59 ml. Often rounded to 240 ml in cookbooks.",
          "Australia: 250 ml metric cup, with a 20 ml tablespoon (4 teaspoons, not 3).",
          "Canada: 250 ml metric cup; older Canadian recipes may use 227 ml (the old British cup).",
          "New Zealand: 250 ml metric cup.",
          "United Kingdom: most modern UK recipes use grams; old imperial cup was 284 ml.",
          "Japan: 200 ml rice cup, separate from the cooking cup.",
        ],
      },
      {
        kind: "image",
        alt: "Three measuring cups side by side, labeled US (236.59 ml), Metric (250 ml), and Imperial (284 ml), each filled to the brim.",
        placeholder:
          "Three identical-shaped glass measuring cups in a row. Each shows a different fill line: US 236 ml, Metric 250 ml, Imperial 284 ml. Caption: 'Same word, three different cups.'",
      },
      { kind: "h2", text: "When 6 percent matters" },
      {
        kind: "p",
        text:
          "For everyday cooking, the 6 percent gap between US and metric cups disappears in the pot. Soups, stews, stir-fries: a little more or less broth changes nothing.",
      },
      {
        kind: "p",
        text:
          "For baking, 6 percent shows up. A doubled recipe with that gap adds up to 12 percent extra flour or sugar. Cookies spread differently. Cakes brown faster. Bread proofs slower. The math compounds.",
      },
      { kind: "h2", text: "How to tell which cup the recipe used" },
      {
        kind: "ul",
        items: [
          "Recipes that also list grams: trust the grams. Skip the cup question entirely.",
          "Recipes from .com.au, .co.nz, or .ca domains: 250 ml metric cup.",
          "Recipes from US cookbooks, US food blogs, or US TV shows: 236.59 ml.",
          "Old British cookbooks (pre-1971): imperial cup. Convert with care.",
        ],
      },
      { kind: "h2", text: "Easy conversions if the recipe is metric" },
      {
        kind: "p",
        text:
          "If your recipe says 1 metric cup and you only have US cups, you have two options:",
      },
      {
        kind: "ol",
        items: [
          "Use 1 US cup plus 1 tablespoon. That is 251 ml, close enough.",
          "Use the milliliters directly. A liquid measuring cup with metric markings makes it easy: 250 ml on the side of the cup, no math.",
        ],
      },
      { kind: "h2", text: "The fix that ends all cup arguments" },
      {
        kind: "p",
        text:
          "Weigh the dry ingredients. The flour does not care which country's cup you have. 120 grams is 120 grams in Sydney, Toronto, or Texas. A digital kitchen scale is the one tool that crosses all borders.",
      },
      {
        kind: "link",
        text: "Open the milliliters to cups converter",
        href: "/ml-to-cups",
        description: "Convert any cup size to milliliters, with the metric and imperial gap.",
      },
    ],
  },
{
    slug: "powdered-sugar-vs-granulated-by-weight",
    locale: "en",
    author: "S. Richey",
    title: "Powdered Sugar Weighs Half of Granulated (By Cup)",
    description:
      "1 cup of granulated sugar weighs 200 grams. 1 cup of powdered sugar weighs 113 grams. Swapping them by volume will sweeten or starve your recipe.",
    publishedAt: "2026-04-14",
    readingMinutes: 4,
    alternateSlug: "azucar-glas-vs-blanca-por-peso",
    tags: ["sugar", "baking", "measurement"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "USDA FoodData Central: Sugars", url: "https://fdc.nal.usda.gov/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "A recipe calls for 1 cup of sugar. You only have powdered sugar in the cabinet. You shrug and pour. The cookies come out flat and not sweet enough. The cup looked the same, but the math was not.",
      },
      {
        kind: "callout",
        text:
          "1 US cup of granulated white sugar = 200 grams. 1 US cup of powdered (confectioners') sugar = 113 grams. The same cup, but powdered sugar weighs 43 percent less because the particles are smaller and full of air. You cannot swap them by volume.",
      },
      { kind: "h2", text: "Why the same cup weighs so differently" },
      {
        kind: "p",
        text:
          "Granulated sugar has uniform, dense crystals. They pack tightly into the cup. Powdered sugar is granulated sugar ground into a fine dust, then mixed with 3 percent cornstarch to keep it from clumping. The fine powder traps a lot of air. A cup of fluff weighs less than a cup of crystals.",
      },
      { kind: "h2", text: "When the swap is possible (and when it is not)" },
      { kind: "h3", text: "By weight: yes, sometimes" },
      {
        kind: "p",
        text:
          "If you weigh, you can swap powdered for granulated by weight in some recipes. Frostings, glazes, and dustings expect powdered. Cakes and cookies expect granulated for structure. The sugar does different jobs in each.",
      },
      { kind: "h3", text: "By volume: almost never" },
      {
        kind: "p",
        text:
          "If you swap 1 cup of granulated for 1 cup of powdered, you just cut the sugar by 43 percent. The cookies will be drier and less sweet. Cookies and cakes need that sugar weight to spread, brown, and stay tender.",
      },
      {
        kind: "image",
        alt: "Two cups side by side, one heaped with white granulated sugar and one with fluffy powdered sugar, both on a kitchen scale showing different weights.",
        placeholder:
          "Two clear glass cups on a kitchen scale. Left: granulated sugar, scale reads 200 g. Right: powdered sugar, scale reads 113 g. Both filled to the same height. Caption: 'Same cup, half the weight.'",
      },
      { kind: "h2", text: "All three white sugars by the cup" },
      {
        kind: "ul",
        items: [
          "Granulated white sugar: 200 g per cup. The default for most baking.",
          "Powdered (confectioners') sugar: 113 g per cup. Used in frostings, glazes, royal icing, and as a dusting.",
          "Superfine (caster) sugar: about 195 g per cup. Sits between the two. Used in meringues and sponge cakes where it dissolves faster than granulated.",
        ],
      },
      { kind: "h2", text: "If your recipe says powdered and you only have granulated" },
      {
        kind: "p",
        text:
          "Process granulated sugar in a clean coffee grinder or food processor for 30 seconds to make a rough powdered sugar. Add 1 teaspoon of cornstarch per cup to mimic the anti-caking. The texture is close but not exact; do not use for delicate icings.",
      },
      { kind: "h2", text: "If your recipe says granulated and you only have powdered" },
      {
        kind: "p",
        text:
          "No clean swap. Powdered sugar has cornstarch in it, which changes the texture of cookies and cakes. Better to wait until you have the right sugar, or pick a different recipe that uses powdered sugar (like shortbread or Mexican wedding cookies).",
      },
      {
        kind: "link",
        text: "Open the sugar cups to grams converter",
        href: "/sugar-cups-to-grams",
        description: "Convert any sugar between cups and grams. Pick the type.",
      },
    ],
  },
{
    slug: "wet-vs-dry-measuring-cups",
    locale: "en",
    author: "S. Richey",
    title: "Wet vs Dry Measuring Cups: When the Difference Actually Matters",
    description:
      "A wet measuring cup and a dry measuring cup hold the same volume. They are not the same tool. Using the wrong one for baking will throw off the recipe.",
    publishedAt: "2026-04-12",
    readingMinutes: 4,
    alternateSlug: "tazas-medidoras-liquidos-vs-secos",
    tags: ["measurement", "baking", "tools"],
    sources: [
      { label: "King Arthur Baking: When to use dry vs liquid measuring cups", url: "https://www.kingarthurbaking.com/blog/2025/07/28/dry-vs-liquid-measuring-cups" },
      { label: "America's Test Kitchen: Dry versus liquid measuring cups", url: "https://www.americastestkitchen.com/articles/5516-do-you-really-have-to-use-different-measuring-cups-for-liquid-and-dry-ingredients" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Your kitchen drawer has two kinds of measuring cups. The glass one with the spout is for liquids. The flat metal or plastic ones are for solids. They both say \"1 cup\" on them. They both hold 240 ml. So why have both?",
      },
      {
        kind: "callout",
        text:
          "Wet (liquid) cups and dry cups hold the same volume, but the shape and how you measure are different. Liquid cups are taller with markings below the rim and a spout for pouring. Dry cups fill to the rim so you can level the top with a knife. Using one for the other introduces real error in baking.",
      },
      { kind: "h2", text: "What each cup is designed for" },
      { kind: "h3", text: "Wet (liquid) measuring cup" },
      {
        kind: "p",
        text:
          "Usually clear glass or plastic, with a spout. The markings stop short of the top so you have headroom and can read the meniscus (the curve where liquid touches the side). Used for water, milk, oil, broth, juice, honey, any pourable liquid.",
      },
      { kind: "h3", text: "Dry measuring cup" },
      {
        kind: "p",
        text:
          "Usually metal or plastic. Each cup holds exactly its labeled amount, level with the rim. You fill it past the top, then drag a knife across to scrape off the extra. Used for flour, sugar, oats, nuts, anything you can level.",
      },
      {
        kind: "image",
        alt: "A glass liquid measuring cup with milk and a metal dry measuring cup with flour leveled flat with a knife, side by side.",
        placeholder:
          "Side-by-side on a kitchen counter. Left: tall glass cup with milk, showing the meniscus at the 1-cup line. Right: flat metal cup heaped with flour and a knife laid across the top, ready to scrape. Caption: 'Different tools, same volume, different jobs.'",
      },
      { kind: "h2", text: "What goes wrong when you mix them up" },
      { kind: "h3", text: "Liquid in a dry cup" },
      {
        kind: "p",
        text:
          "No spout to pour from cleanly. The cup is filled to the very top, so you spill on the way to the bowl. Reading the meniscus is hard because the cup is full. Result: usually under-measures because some liquid spills.",
      },
      { kind: "h3", text: "Flour in a liquid cup" },
      {
        kind: "p",
        text:
          "The markings stop below the rim. You cannot level the flour, because there is no flat reference to scrape against. You either eyeball the line (inaccurate) or fill to the top (over-measures by 5 to 10 percent). Either way, the cup ends up heavier than the recipe expected.",
      },
      { kind: "h2", text: "When the mix-up does not matter" },
      {
        kind: "p",
        text:
          "For cooking, the difference disappears in the pot. Pasta sauce, soup, stew, stir-fry: a tablespoon of variance changes nothing. The cups are interchangeable for casual cooking.",
      },
      {
        kind: "p",
        text:
          "For baking, the difference shows. Cake recipes, cookies, bread, pastry: use the right cup. Or skip cups entirely and weigh.",
      },
      { kind: "h2", text: "The shortcut" },
      {
        kind: "p",
        text:
          "If you bake often, owning both is worth the $10 to $20. If you bake rarely, a digital kitchen scale does the job of both for under $30. The scale never asks which cup you grabbed.",
      },
      {
        kind: "link",
        text: "Open the cups to grams converter",
        href: "/cups-to-grams",
        description: "Skip the cup question. Pick your food, get the weight.",
      },
    ],
  },
{
    slug: "sifted-vs-unsifted-flour",
    locale: "en",
    author: "S. Richey",
    title: "Sifted vs Unsifted Flour: The Weight Gap That Breaks Bakes",
    description:
      "One cup of sifted flour weighs about 110 grams. The same cup unsifted weighs 142 grams. That 25 percent gap is the difference between a tender cake and a tough one.",
    publishedAt: "2026-04-10",
    readingMinutes: 5,
    alternateSlug: "harina-tamizada-vs-sin-tamizar",
    tags: ["baking", "measurement", "flour"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "Food Science Institute: Sifting and measuring flour", url: "https://foodscienceinstitute.com/2018/12/18/sifting-and-measuring-flour/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "You measure 1 cup of flour. Your friend measures 1 cup. The two cups can weigh 30 grams apart. That gap shows up in your cake, your cookies, and your bread. The biggest reason: one of you sifted, and one of you did not.",
      },
      {
        kind: "callout",
        text:
          "1 cup of sifted all-purpose flour weighs about 110 to 115 grams. 1 cup of unsifted, scooped flour weighs 140 to 145 grams. That is a 25 percent jump. King Arthur Baking lists their standard at 120 grams, which sits in the middle (spoon and level, no sifting).",
      },
      {
        kind: "image",
        alt: "Side-by-side comparison of a measuring cup filled with sifted flour and one with scooped flour, both leveled.",
        placeholder:
          "Two 1-cup measuring cups on a kitchen scale, side by side. Left: 'sifted, 110 g'. Right: 'scooped, 145 g'. Same recipe, same cup, different worlds.",
      },
      { kind: "h2", text: "Why sifting makes such a big difference" },
      {
        kind: "p",
        text:
          "Flour packs over time. The bag is full of air when it's milled, but settling, shipping, and sitting on a shelf push the grains closer together. A scoop into that packed bag gives you a denser cup than the recipe writer used.",
      },
      {
        kind: "p",
        text:
          "Sifting fluffs the flour back up. Air goes between the grains, and the same cup holds less flour by weight. The cup still looks full, but you have 25 percent less flour inside it.",
      },
      { kind: "h2", text: "The order of words in your recipe matters" },
      {
        kind: "p",
        text:
          "Two phrases look almost the same but mean different things:",
      },
      {
        kind: "ul",
        items: [
          "\"1 cup sifted flour\" means sift the flour first, then measure 1 cup. You end up with about 110 grams.",
          "\"1 cup flour, sifted\" means measure 1 cup first, then sift it. You end up with about 120 to 125 grams.",
        ],
      },
      {
        kind: "p",
        text:
          "The comma is doing real work. Most modern recipes have moved away from this language because of how often readers miss it. If you see either phrase, the safer bet is to weigh.",
      },
      { kind: "h2", text: "When to sift and when to skip it" },
      {
        kind: "p",
        text:
          "Sift when the recipe says to sift. Sift when you are combining cocoa powder, powdered sugar, or baking soda with flour and want them to mix evenly. Sift when you want extra-tender cakes or sponge cakes where air matters more than ratio.",
      },
      {
        kind: "p",
        text:
          "Skip sifting for most cookies, muffins, quick breads, and any recipe that gives weights in grams. If you weigh, the cup size does not matter, and neither does the sift order.",
      },
      { kind: "h2", text: "The simplest fix: weigh, do not sift" },
      {
        kind: "p",
        text:
          "A digital kitchen scale ends the question. The recipe says 120 grams of flour, you put 120 grams on the scale, sifted or not. The same number, every time. Sifting becomes a step you do for texture, not for measurement.",
      },
      {
        kind: "link",
        text: "Open the flour cups to grams converter",
        href: "/flour-cups-to-grams",
        description:
          "Type cups, get grams for AP, bread, cake, and whole wheat flour.",
      },
    ],
  },
{
    slug: "why-pack-brown-sugar",
    locale: "en",
    author: "S. Richey",
    title: "Why You Should Pack Brown Sugar (and What Happens If You Don't)",
    description:
      "Brown sugar cup measurements assume you packed it firm. Loose brown sugar weighs 30 percent less, and your cookies or sauce will taste off. The 60-second fix.",
    publishedAt: "2026-04-07",
    readingMinutes: 3,
    alternateSlug: "por-que-compactar-azucar-morena",
    tags: ["baking", "measurement", "sugar"],
    sources: [
      { label: "King Arthur Baking: Measuring brown sugar", url: "https://www.kingarthurbaking.com/blog/2018/02/14/measuring-brown-sugar" },
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
    ],
    body: [
      {
        kind: "p",
        text:
          "If a recipe says \"1 cup brown sugar,\" it almost always means 1 cup packed brown sugar. That is not how brown sugar comes out of the bag, and that is where home cooks lose track of their recipe.",
      },
      { kind: "h2", text: "What packed means" },
      {
        kind: "p",
        text:
          "Brown sugar has molasses in it. The molasses makes the sugar sticky and creates air pockets when you spoon it into a cup. Loose, those pockets stay. Packed, you press the sugar down with the back of a spoon or your hand until the pockets close up.",
      },
      {
        kind: "p",
        text:
          "To check that you packed it right, turn the cup over. The brown sugar should hold the cup's shape for a moment before falling out. If it just falls out as a loose pile, it was not packed.",
      },
      { kind: "h2", text: "Why this matters" },
      {
        kind: "p",
        text:
          "Packed brown sugar weighs 213 grams per US cup. Loose brown sugar weighs about 145 grams per cup. That is a 30 percent gap. If the recipe wanted 213 grams and you used 145, you cut almost a third of the sugar.",
      },
      {
        kind: "p",
        text:
          "Cookies turn out drier. Sauces taste less sweet. Bars and bread come out flat. The recipe still works, but it is not the recipe the writer made.",
      },
      { kind: "h2", text: "The easy fixes" },
      {
        kind: "ul",
        items: [
          "Use a measuring cup with straight sides (not a curved scoop). It packs more reliably.",
          "Press with the back of a spoon, the bottom of a smaller cup, or clean fingers.",
          "Level the top with a knife after packing.",
          "Or skip all of this and weigh: 213 grams equals 1 packed cup.",
        ],
      },
      { kind: "h2", text: "What if my brown sugar is hard?" },
      {
        kind: "p",
        text:
          "Hard brown sugar still weighs the same per cup once packed, but it is hard to actually pack. To soften it: put a damp paper towel on top in a microwave-safe bowl and heat for 20 seconds. Or put a slice of bread in the bag overnight.",
      },
      {
        kind: "callout",
        text:
          "1 cup packed brown sugar = 213 grams. 1/2 cup packed = 107 grams. 2 cups packed = 426 grams.",
      },
      {
        kind: "link",
        text: "Open the brown sugar cups to grams converter",
        href: "/brown-sugar-cups-to-grams",
        description: "Type cups or grams and see the other. Packed value built in.",
      },
    ],
  },
{
    slug: "how-to-measure-flour-correctly",
    locale: "en",
    author: "S. Richey",
    title: "How to Measure Flour Correctly (Spoon and Level, Not Scoop)",
    description:
      "Most flour mistakes come from how you scoop the cup. Spoon and level adds the right amount. Scooping packs too much. Here is the fix in 30 seconds.",
    publishedAt: "2026-04-04",
    readingMinutes: 4,
    alternateSlug: "como-medir-la-harina-bien",
    tags: ["baking", "measurement", "fundamentals"],
    sources: [
      { label: "King Arthur Baking: How to measure flour", url: "https://www.kingarthurbaking.com/blog/2020/10/29/how-to-measure-flour" },
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
    ],
    body: [
      {
        kind: "p",
        text:
          "If your cookies came out dry or your cake felt too dense, the flour is the first thing to check. Not the brand. The way you measured.",
      },
      {
        kind: "p",
        text:
          "The same one-cup measuring cup can hold 110 grams of flour or 145 grams of flour. That is a 30 percent gap in the same cup. The recipe writer picked one of those numbers, and if you picked the other, your bake is off.",
      },
      { kind: "h2", text: "The fix is two steps" },
      {
        kind: "ol",
        items: [
          "Fluff the flour in the bag with a spoon or a fork. Flour packs over time. Loosen it up first.",
          "Spoon the flour into the measuring cup. Do not push the cup into the bag. Heap the cup, then drag the flat side of a knife across the top to level it.",
        ],
      },
      {
        kind: "p",
        text:
          "That is it. The cup now holds about 120 grams of all-purpose flour, which is the number most recipes assume.",
      },
      { kind: "h2", text: "Why scooping is the problem" },
      {
        kind: "p",
        text:
          "When you push the measuring cup down into the bag, the flour packs tight. Air gets squeezed out. The same cup now holds 130 to 145 grams instead of 120. You just added 10 to 25 grams of flour you did not mean to. In a single-cup recipe, that is too much. In a three-cup recipe, it is a lot.",
      },
      {
        kind: "p",
        text:
          "Too much flour makes cookies dry. It toughens muffins. It shrinks cakes. It is the most common reason a recipe that worked for the writer does not work for you.",
      },
      { kind: "h2", text: "The best fix: use a scale" },
      {
        kind: "p",
        text:
          "A digital kitchen scale costs less than a set of measuring cups. It pays for itself the first time it saves a batch. Set the bowl on the scale, hit tare, and pour flour until the number is right. No scooping, no leveling, no guessing.",
      },
      {
        kind: "callout",
        text:
          "1 cup of all-purpose flour is 120 grams. 1/2 cup is 60 grams. 2 cups are 240 grams. Save this number; it covers most home baking.",
      },
      { kind: "h2", text: "Common questions" },
      { kind: "h3", text: "Is 1 cup of flour 125 grams or 120 grams?" },
      {
        kind: "p",
        text:
          "Both numbers show up on different sites. King Arthur Baking, the most-cited US source, uses 120 grams. Some older charts use 125 or 128. The gap is 4 to 7 percent, small but real. If your recipe came from King Arthur, use 120.",
      },
      { kind: "h3", text: "Does sifting change the weight?" },
      {
        kind: "p",
        text:
          "Sifting adds air. A sifted cup of flour weighs less, around 100 to 110 grams. If a recipe says \"1 cup sifted flour,\" it means sift first, then measure. \"1 cup flour, sifted\" means measure first, then sift. The order matters.",
      },
      { kind: "h3", text: "What about bread flour or cake flour?" },
      {
        kind: "p",
        text:
          "Bread flour is slightly denser at 127 grams per cup. Cake flour is lighter at 114 grams per cup. Whole wheat is 113 grams per cup. The spoon-and-level method works for all of them.",
      },
      {
        kind: "link",
        text: "Open the flour cups to grams converter",
        href: "/flour-cups-to-grams",
        description: "Type the cups, get the grams, with weights for AP, bread, cake, and whole wheat.",
      },
    ],
  },
{
    slug: "why-bakers-weigh-ingredients",
    locale: "en",
    author: "S. Richey",
    title: "Why Bakers Weigh Ingredients Instead of Using Cups",
    description:
      "The short reason serious bakers switched to grams: cups lie. A guide to volume drift, scoop method, and the one tool that fixes both.",
    publishedAt: "2026-04-01",
    readingMinutes: 4,
    alternateSlug: "por-que-los-panaderos-pesan-ingredientes",
    tags: ["baking", "measurement", "fundamentals"],
    sources: [
      { label: "King Arthur Baking: Why baking by weight is better", url: "https://www.kingarthurbaking.com/blog/2023/01/17/why-bake-by-weight" },
      { label: "America's Test Kitchen: Why you should weigh your baking ingredients", url: "https://www.americastestkitchen.com/articles/2095-why-you-should-weigh-your-baking-ingredients" },
    ],
    body: [
      {
        kind: "p",
        text:
          "If you have made the same cookie recipe twice and ended up with different cookies, the flour is the first place to look. Not the brand. The cup of it.",
      },
      {
        kind: "p",
        text:
          "Measuring by cup is fast, but it can be off by 10 to 25 percent for dry foods. The same one-cup measure can hold 110 grams of flour or 145 grams of flour. It depends on how you scoop. That gap is the difference between soft and tough.",
      },
      { kind: "h2", text: "What changes between two cups of the same thing" },
      {
        kind: "ul",
        items: [
          "How you scoop. Pushing the cup into the bag packs more flour than spooning it in.",
          "Settling. A bag of flour that got shaken on the way home packs tighter than one that sat still.",
          "Humidity. Flour soaks up water from the air on a wet day. It weighs a little more for the same cup.",
          "Brand. One brand's flour can have a different grain size than another.",
        ],
      },
      {
        kind: "p",
        text:
          "Sugar is more forgiving because the grains pack the same way each time. Brown sugar is the opposite; it has to be pressed in firmly. Cocoa powder clumps. Honey works fine by volume but makes a mess. The rule of thumb: the more a recipe depends on exact ratios, the more weight matters.",
      },
      { kind: "h2", text: "Why grams fix the problem" },
      {
        kind: "p",
        text:
          "A gram is a gram. It does not care how you scooped, how the bag was shaken, or what the weather is. When a recipe says 120 grams of flour and you put 120 grams on the scale, you have what the recipe writer wanted.",
      },
      {
        kind: "p",
        text:
          "There is a second win: weight scales clean. Doubling a recipe in cups doubles the scoop error too. Doubling in grams is just one number times two. That is why our recipe scaler shows clean fractions for cups and exact decimals for grams. If you have a scale, use the grams.",
      },
      { kind: "h2", text: "The tool that fixes both" },
      {
        kind: "p",
        text:
          "A digital kitchen scale, around 20 to 40 US dollars. Look for one with gram precision, a tare button (so you can zero out the bowl), 5 kilograms of capacity, and a flat top big enough for a mixing bowl. That is it. No app, no Bluetooth, no Wi-Fi.",
      },
      {
        kind: "callout",
        text:
          "If your recipe gives weights, use them. If it only gives cups, convert with our cups-to-grams tool and write the weights into the recipe so you only do it once.",
      },
      { kind: "h2", text: "When cups are fine" },
      {
        kind: "p",
        text:
          "Soup, stews, stir-fries, pasta, rice: anywhere a 10 percent gap in seasoning or starch will not break the dish, cups are fine. Bakers care because bread, pastry, cookies, and cakes are chemistry. Chemistry needs ratios.",
      },
      { kind: "h2", text: "If you only do one thing" },
      {
        kind: "p",
        text:
          "Weigh the flour. It has the biggest volume-to-weight gap of any common kitchen food. The error grows in every batch. Salt and sugar are usually fine in cups for everyday baking. The big wins live in the flour.",
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
