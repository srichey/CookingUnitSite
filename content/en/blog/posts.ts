import type { BlogPost } from "@/lib/blog";

export const postsEn: BlogPost[] = [
  {
    slug: "sifted-vs-unsifted-flour",
    locale: "en",
    title: "Sifted vs Unsifted Flour: The Weight Gap That Breaks Bakes",
    description:
      "One cup of sifted flour weighs about 110 grams. The same cup unsifted weighs 142 grams. That 25 percent gap is the difference between a tender cake and a tough one.",
    publishedAt: "2026-05-13",
    readingMinutes: 5,
    alternateSlug: "harina-tamizada-vs-sin-tamizar",
    tags: ["baking", "measurement", "flour"],
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
    slug: "convection-oven-25-degrees",
    locale: "en",
    title: "Convection Oven: Drop 25°F (and Here Is Why)",
    description:
      "A convection fan moves hot air over your food. That makes it cook faster and hotter at the same dial setting. Lower the temperature by 25°F or shorten the cook time by about 30 percent.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "horno-conveccion-bajar-25-grados",
    tags: ["oven", "baking", "temperature"],
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
    slug: "halve-recipe-with-one-egg",
    locale: "en",
    title: "How to Halve a Recipe With One Egg",
    description:
      "Half of one egg is 25 grams or 2 tablespoons. Crack the egg, whisk it smooth, and use half. Save the rest for tomorrow's omelette.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "como-partir-receta-con-un-huevo",
    tags: ["recipe scaling", "eggs", "baking"],
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
    slug: "250-ml-is-not-1-us-cup",
    locale: "en",
    title: "The 250 ml Cup Is Not the US Cup (Australian Recipe Gotcha)",
    description:
      "An Australian metric cup is 250 ml. A US cup is 236.59 ml. The 6 percent gap can ruin a small-batch cake. Here is what to watch for.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "250-ml-no-es-1-taza-estadounidense",
    tags: ["measurement", "international", "baking"],
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
    slug: "european-butter-vs-american-sticks",
    locale: "en",
    title: "European Butter Blocks vs American Sticks: The 250g vs 113g Problem",
    description:
      "A US butter stick is 113 grams. A European block is 250 grams. They do not divide evenly, and the butterfat is different. How to swap without ruining the bake.",
    publishedAt: "2026-05-13",
    readingMinutes: 5,
    alternateSlug: "mantequilla-europea-vs-barras-estadounidenses",
    tags: ["butter", "baking", "international"],
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
    slug: "why-cocoa-powder-is-hard-to-measure",
    locale: "en",
    title: "Why Cocoa Powder Is So Hard to Measure by Cup",
    description:
      "Cocoa is light, fluffy, and clumps. A scooped cup can weigh anywhere from 75 to 100 grams. Here is why, and how to get a number you can trust.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "por-que-cacao-en-polvo-es-dificil-medir",
    tags: ["baking", "cocoa", "measurement"],
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
    slug: "doubling-recipe-cook-time",
    locale: "en",
    title: "Doubling a Recipe Does Not Double the Cook Time",
    description:
      "When you double a recipe, the food does not need twice as long in the oven. Add 25 to 30 percent, watch closely, and use a thermometer.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "duplicar-receta-tiempo-coccion",
    tags: ["recipe scaling", "baking", "cooking time"],
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
    slug: "cup-sizes-around-the-world",
    locale: "en",
    title: "Imperial Cup vs Metric Cup vs US Cup: Which Does Your Recipe Mean?",
    description:
      "There are at least three cup sizes in cooking. US 236.59 ml. Metric 250 ml. Imperial 284 ml. Here is how to spot which one your recipe wants.",
    publishedAt: "2026-05-13",
    readingMinutes: 5,
    alternateSlug: "tamanos-de-taza-en-el-mundo",
    tags: ["measurement", "international", "fundamentals"],
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
    slug: "how-to-measure-flour-correctly",
    locale: "en",
    title: "How to Measure Flour Correctly (Spoon and Level, Not Scoop)",
    description:
      "Most flour mistakes come from how you scoop the cup. Spoon and level adds the right amount. Scooping packs too much. Here is the fix in 30 seconds.",
    publishedAt: "2026-05-12",
    readingMinutes: 4,
    alternateSlug: "como-medir-la-harina-bien",
    tags: ["baking", "measurement", "fundamentals"],
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
    slug: "why-pack-brown-sugar",
    locale: "en",
    title: "Why You Should Pack Brown Sugar (and What Happens If You Don't)",
    description:
      "Brown sugar cup measurements assume you packed it firm. Loose brown sugar weighs 30 percent less, and your cookies or sauce will taste off. The 60-second fix.",
    publishedAt: "2026-05-12",
    readingMinutes: 3,
    alternateSlug: "por-que-compactar-azucar-morena",
    tags: ["baking", "measurement", "sugar"],
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
