// Shared definition for ingredient-specific landing pages. Each page is a
// Cups-to-Grams calculator locked to one ingredient, with SEO-targeted copy
// for that single keyword cluster.

import type { Locale } from "@/lib/site";

export interface IngredientLandingCopy {
  title: string;
  metaDescription: string;
  h1: string;
  tldr: string;
  intro: string;
  // Inline section content (kept tight; the calculator + chart carries the page).
  quickRefTitle: string;
  quickRefBody: string;
  quickRefItems: string[];
  detailsTitle: string;
  detailsBody: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
}

export interface IngredientLanding {
  // The id from lib/ingredients.ts to lock the converter to.
  ingredientId: string;
  pathEn: string;
  pathEs: string;
  copyEn: IngredientLandingCopy;
  copyEs: IngredientLandingCopy;
}

export const INGREDIENT_LANDINGS: IngredientLanding[] = [
  {
    ingredientId: "flour-ap",
    pathEn: "/flour-cups-to-grams",
    pathEs: "/es/harina-tazas-a-gramos",
    copyEn: {
      title: "Flour Cups to Grams Converter (All-Purpose)",
      metaDescription:
        "Convert flour cups to grams. 1 cup of all-purpose flour is 120 grams when spooned and leveled. Includes a chart and tips on the right way to measure.",
      h1: "Flour cups to grams",
      tldr:
        "1 cup of all-purpose flour is 120 grams. 1/2 cup is 60 grams. 2 cups are 240 grams. This works when you spoon the flour into the cup and level the top. Scooping straight from the bag packs the flour and adds 10 to 25 grams.",
      intro:
        "Flour is the one ingredient most home bakers get wrong with a cup. The same one-cup measure can hold 110 grams or 145 grams of flour. The trick is how you scoop. The tool above uses the spoon-and-level value of 120 grams per US cup. If you weigh, you skip the mistake.",
      quickRefTitle: "Common flour amounts in cups and grams",
      quickRefBody: "All-purpose flour, US cup, spoon-and-level method:",
      quickRefItems: [
        "1/4 cup flour = 30 g",
        "1/3 cup flour = 40 g",
        "1/2 cup flour = 60 g",
        "2/3 cup flour = 80 g",
        "3/4 cup flour = 90 g",
        "1 cup flour = 120 g",
        "1 1/4 cups flour = 150 g",
        "1 1/2 cups flour = 180 g",
        "2 cups flour = 240 g",
        "3 cups flour = 360 g",
        "4 cups flour = 480 g",
      ],
      detailsTitle: "Why scoop-and-pack gives the wrong answer",
      detailsBody: [
        "When you push a measuring cup into a bag of flour, the flour packs in. A scooped cup of all-purpose flour weighs 130 to 145 grams. The recipe writer almost always meant 120 grams. You end up with 10 to 20 percent too much flour, which is enough to dry out cookies, toughen muffins, and shrink a cake.",
        "The fix is two parts. First, fluff the flour in the bag with a spoon. Second, spoon the flour into the cup, then level the top with the flat side of a knife. No tapping, no shaking. The cup ends up around 120 grams, the number recipes assume.",
        "If you bake more than once a week, get a kitchen scale. A 20-dollar digital scale solves the problem forever and pays for itself the first time it saves a batch.",
      ],
      faqs: [
        {
          question: "How many grams is 1 cup of flour?",
          answer:
            "1 US cup of all-purpose flour is 120 grams when spooned and leveled. Bread flour is 127 grams. Cake flour is 114 grams. Whole wheat is 113 grams.",
        },
        {
          question: "How many grams is 2 cups of flour?",
          answer:
            "2 US cups of all-purpose flour is 240 grams. Some recipes round it to 250 grams.",
        },
        {
          question: "Is 1 cup of flour 125 grams?",
          answer:
            "Some references list 125 grams. King Arthur Baking and most modern recipe writers use 120 grams. The 4 percent difference is small but real. If your recipe came from King Arthur, use 120. If it came from another source, the writer's note will say.",
        },
        {
          question: "Why does my flour cup weigh more than 120 grams?",
          answer:
            "You probably scooped instead of spooning. Scooping packs the flour and adds 10 to 25 grams. Use a spoon to fill the cup, then level the top with a knife. Or weigh on a scale and skip the question.",
        },
        {
          question: "Does the brand of flour change the weight per cup?",
          answer:
            "A little. Different brands have different particle sizes and starch contents. The variation is usually under 5 percent for all-purpose flour. For most baking it does not change the result.",
        },
      ],
      related: [
        { label: "Sugar cups to grams", href: "/sugar-cups-to-grams" },
        { label: "Butter converter", href: "/butter-converter" },
        { label: "Cups to grams (any food)", href: "/cups-to-grams" },
        { label: "Recipe scaler", href: "/recipe-scaler" },
      ],
    },
    copyEs: {
      title: "Harina: Tazas a Gramos (común)",
      metaDescription:
        "Convierte tazas de harina a gramos. 1 taza de harina común son 120 gramos con cuchareo y nivelado. Tabla y consejos para medir bien.",
      h1: "Harina: tazas a gramos",
      tldr:
        "1 taza de harina común son 120 gramos. 1/2 taza son 60 gramos. 2 tazas son 240 gramos. Esto sirve cuando cuchareas la harina en la taza y nivelas. Si sumerges la taza en la bolsa, la compactas y agregas de 10 a 25 gramos.",
      intro:
        "La harina es el ingrediente que más se mide mal con taza. La misma taza puede llevar 110 o 145 gramos. El truco es cómo la metes. La herramienta arriba usa el valor de cuchareo y nivelado: 120 gramos por taza estadounidense. Si pesas, te ahorras el error.",
      quickRefTitle: "Cantidades comunes de harina en tazas y gramos",
      quickRefBody: "Harina común, taza estadounidense, método de cuchareo y nivelado:",
      quickRefItems: [
        "1/4 de taza de harina = 30 g",
        "1/3 de taza de harina = 40 g",
        "1/2 taza de harina = 60 g",
        "2/3 de taza de harina = 80 g",
        "3/4 de taza de harina = 90 g",
        "1 taza de harina = 120 g",
        "1 1/4 tazas de harina = 150 g",
        "1 1/2 tazas de harina = 180 g",
        "2 tazas de harina = 240 g",
        "3 tazas de harina = 360 g",
        "4 tazas de harina = 480 g",
      ],
      detailsTitle: "Por qué sumergir y compactar da el número equivocado",
      detailsBody: [
        "Cuando sumerges la taza en la bolsa, la harina se compacta. Una taza así pesa entre 130 y 145 gramos. El autor de la receta casi siempre quiso 120 gramos. Terminas con 10 a 20 por ciento de más, suficiente para resecar galletas, endurecer panqués y achicar un bizcocho.",
        "El arreglo tiene dos pasos. Primero, esponja la harina en la bolsa con una cuchara. Segundo, cucharéala dentro de la taza y nivela con el filo plano de un cuchillo. No golpees ni sacudas. La taza queda cerca de 120 gramos, el número que las recetas asumen.",
        "Si horneas más de una vez por semana, consigue una báscula de cocina. Una digital de 20 dólares resuelve el problema para siempre y se paga sola la primera vez que salva una tanda.",
      ],
      faqs: [
        {
          question: "¿Cuántos gramos son 1 taza de harina?",
          answer:
            "1 taza estadounidense de harina común son 120 gramos con cuchareo y nivelado. La harina de pan son 127 gramos. La harina para pastel son 114 gramos. La integral son 113 gramos.",
        },
        {
          question: "¿Cuántos gramos son 2 tazas de harina?",
          answer:
            "2 tazas estadounidenses de harina común son 240 gramos. Algunas recetas redondean a 250 gramos.",
        },
        {
          question: "¿1 taza de harina son 125 gramos?",
          answer:
            "Algunas referencias dicen 125 gramos. King Arthur Baking y la mayoría de autores modernos usan 120 gramos. La diferencia del 4 por ciento es pequeña pero real. Si tu receta es de King Arthur, usa 120. Si es de otra fuente, la nota del autor te dirá.",
        },
        {
          question: "¿Por qué mi taza de harina pesa más de 120 gramos?",
          answer:
            "Seguramente sumergiste en vez de cucharear. Sumergir compacta la harina y agrega de 10 a 25 gramos. Cuchárea hacia la taza y nivela con un cuchillo. O pesa con báscula y olvídate de la duda.",
        },
        {
          question: "¿La marca de harina cambia el peso por taza?",
          answer:
            "Un poco. Distintas marcas tienen tamaños de partícula y contenidos de almidón distintos. La variación suele ser menor al 5 por ciento para harina común. Para la mayoría de las recetas no cambia el resultado.",
        },
      ],
      related: [
        { label: "Azúcar: tazas a gramos", href: "/es/azucar-tazas-a-gramos" },
        { label: "Conversor de mantequilla", href: "/es/conversor-de-mantequilla" },
        { label: "Tazas a gramos (cualquier alimento)", href: "/es/tazas-a-gramos" },
        { label: "Escalador de recetas", href: "/es/escalador-de-recetas" },
      ],
    },
  },
  {
    ingredientId: "sugar-granulated",
    pathEn: "/sugar-cups-to-grams",
    pathEs: "/es/azucar-tazas-a-gramos",
    copyEn: {
      title: "Sugar Cups to Grams Converter (Granulated White)",
      metaDescription:
        "Convert sugar cups to grams. 1 cup of granulated white sugar is 200 grams. Includes chart, powdered sugar weights, and tips.",
      h1: "Sugar cups to grams",
      tldr:
        "1 cup of granulated white sugar is 200 grams. 1/2 cup is 100 grams. 2 cups are 400 grams. White sugar packs the same way every time, so this number is reliable.",
      intro:
        "White sugar is one of the cleanest cup-to-gram swaps in the kitchen. The crystals pack the same way each time, so 200 grams per cup is a number you can trust. Brown sugar and powdered sugar are different and live on their own pages.",
      quickRefTitle: "Common sugar amounts in cups and grams",
      quickRefBody: "Granulated white sugar, US cup:",
      quickRefItems: [
        "1/4 cup sugar = 50 g",
        "1/3 cup sugar = 67 g",
        "1/2 cup sugar = 100 g",
        "2/3 cup sugar = 133 g",
        "3/4 cup sugar = 150 g",
        "1 cup sugar = 200 g",
        "1 1/4 cups sugar = 250 g",
        "1 1/2 cups sugar = 300 g",
        "2 cups sugar = 400 g",
        "Powdered sugar, 1 cup = 113 g (lighter)",
        "Brown sugar, packed, 1 cup = 213 g (heavier)",
      ],
      detailsTitle: "Why white sugar is easy to measure by cup",
      detailsBody: [
        "Sugar crystals are small and dry. They settle into a cup the same way each time you scoop. Unlike flour, sugar does not get fluffier from sitting or denser from packing. That makes the 200 grams-per-cup value steady from batch to batch.",
        "The one mistake to avoid is using powdered or brown sugar when a recipe says 'sugar' without saying which. Powdered sugar is 113 grams per cup, almost half the weight. Brown sugar is 213 grams per cup when packed, but only 145 if loose. Always check what your recipe wants.",
      ],
      faqs: [
        {
          question: "How many grams is 1 cup of sugar?",
          answer:
            "1 US cup of granulated white sugar is 200 grams. Powdered sugar is 113 grams per cup. Brown sugar, packed, is 213 grams per cup.",
        },
        {
          question: "How many grams is 1/2 cup of sugar?",
          answer:
            "1/2 US cup of granulated sugar is 100 grams. It is one of the cleanest splits in baking.",
        },
        {
          question: "Do I need to weigh sugar?",
          answer:
            "For granulated white sugar, the cup is reliable. For brown sugar and powdered sugar, weighing is more dependable because the packing and clumping change.",
        },
        {
          question: "Is white sugar the same weight as brown sugar by cup?",
          answer:
            "No. Brown sugar weighs more when packed (213 grams per cup). Loose brown sugar weighs less (about 145 grams per cup). Most recipes assume packed.",
        },
      ],
      related: [
        { label: "Brown sugar cups to grams", href: "/brown-sugar-cups-to-grams" },
        { label: "Flour cups to grams", href: "/flour-cups-to-grams" },
        { label: "Cups to grams (any food)", href: "/cups-to-grams" },
        { label: "Recipe scaler", href: "/recipe-scaler" },
      ],
    },
    copyEs: {
      title: "Azúcar: Tazas a Gramos (blanca granulada)",
      metaDescription:
        "Convierte tazas de azúcar a gramos. 1 taza de azúcar blanca son 200 gramos. Incluye tabla, peso de azúcar glas y consejos.",
      h1: "Azúcar: tazas a gramos",
      tldr:
        "1 taza de azúcar blanca granulada son 200 gramos. 1/2 taza son 100 gramos. 2 tazas son 400 gramos. La azúcar blanca se acomoda igual cada vez, así que el número es confiable.",
      intro:
        "La azúcar blanca es una de las conversiones más limpias en la cocina. Los cristales se acomodan igual cada vez, así que 200 gramos por taza es un número que puedes confiar. La azúcar morena y la glas son distintas y tienen sus propias páginas.",
      quickRefTitle: "Cantidades comunes de azúcar en tazas y gramos",
      quickRefBody: "Azúcar blanca granulada, taza estadounidense:",
      quickRefItems: [
        "1/4 de taza de azúcar = 50 g",
        "1/3 de taza de azúcar = 67 g",
        "1/2 taza de azúcar = 100 g",
        "2/3 de taza de azúcar = 133 g",
        "3/4 de taza de azúcar = 150 g",
        "1 taza de azúcar = 200 g",
        "1 1/4 tazas de azúcar = 250 g",
        "1 1/2 tazas de azúcar = 300 g",
        "2 tazas de azúcar = 400 g",
        "Azúcar glas, 1 taza = 113 g (más ligera)",
        "Azúcar morena, compactada, 1 taza = 213 g (más pesada)",
      ],
      detailsTitle: "Por qué la azúcar blanca es fácil de medir por taza",
      detailsBody: [
        "Los cristales de azúcar son pequeños y secos. Se acomodan en la taza igual cada vez. A diferencia de la harina, la azúcar no se esponja con el tiempo ni se compacta. Por eso 200 gramos por taza queda estable entre tandas.",
        "El error a evitar es usar azúcar glas o morena cuando la receta dice 'azúcar' sin más. La azúcar glas son 113 gramos por taza, casi la mitad. La azúcar morena compactada son 213 gramos por taza, pero suelta solo 145. Siempre revisa qué pide la receta.",
      ],
      faqs: [
        {
          question: "¿Cuántos gramos son 1 taza de azúcar?",
          answer:
            "1 taza estadounidense de azúcar blanca son 200 gramos. La azúcar glas son 113 gramos por taza. La azúcar morena, compactada, son 213 gramos por taza.",
        },
        {
          question: "¿Cuántos gramos son 1/2 taza de azúcar?",
          answer:
            "1/2 taza de azúcar blanca son 100 gramos. Es una de las divisiones más limpias en repostería.",
        },
        {
          question: "¿Tengo que pesar la azúcar?",
          answer:
            "Para azúcar blanca, la taza es confiable. Para azúcar morena y glas, pesar es más seguro porque el grado de compactación o de apelmazado cambia.",
        },
        {
          question: "¿La azúcar blanca pesa igual que la morena por taza?",
          answer:
            "No. La morena pesa más compactada (213 gramos por taza). Suelta pesa menos (cerca de 145 g por taza). Casi todas las recetas la quieren compactada.",
        },
      ],
      related: [
        { label: "Azúcar morena: tazas a gramos", href: "/es/azucar-morena-tazas-a-gramos" },
        { label: "Harina: tazas a gramos", href: "/es/harina-tazas-a-gramos" },
        { label: "Tazas a gramos (cualquier alimento)", href: "/es/tazas-a-gramos" },
        { label: "Escalador de recetas", href: "/es/escalador-de-recetas" },
      ],
    },
  },
  {
    ingredientId: "sugar-brown",
    pathEn: "/brown-sugar-cups-to-grams",
    pathEs: "/es/azucar-morena-tazas-a-gramos",
    copyEn: {
      title: "Brown Sugar Cups to Grams Converter (Packed)",
      metaDescription:
        "Convert brown sugar cups to grams. 1 cup of packed brown sugar is 213 grams. Loose is closer to 145 grams. Includes chart and packing tips.",
      h1: "Brown sugar cups to grams",
      tldr:
        "1 cup of brown sugar, packed firm, is 213 grams. 1/2 cup packed is 107 grams. 2 cups packed are 426 grams. Loose brown sugar weighs less, about 145 grams per cup. Most recipes mean packed.",
      intro:
        "Brown sugar is unique because the recipe almost always assumes you packed it into the cup. Loose brown sugar weighs 30 percent less. If you scoop without pressing, you under-measure and your cookies, sauces, and bars come out off.",
      quickRefTitle: "Common brown sugar amounts (packed)",
      quickRefBody: "Brown sugar, packed firm, US cup:",
      quickRefItems: [
        "1/4 cup packed = 53 g",
        "1/3 cup packed = 71 g",
        "1/2 cup packed = 107 g",
        "2/3 cup packed = 142 g",
        "3/4 cup packed = 160 g",
        "1 cup packed = 213 g",
        "1 1/2 cups packed = 320 g",
        "2 cups packed = 426 g",
        "1 cup loose (rare) = about 145 g",
      ],
      detailsTitle: "How to pack brown sugar the right way",
      detailsBody: [
        "Brown sugar holds molasses, which makes it sticky. Loose, it looks like a cup of damp sand with air pockets. Packed, the molasses fills those pockets and the sugar reaches its real weight.",
        "To pack, press the brown sugar firmly into the cup with the back of a spoon or your hand. Level the top with a knife. When you turn the cup over, the sugar should hold the cup's shape for a second before falling out.",
        "If you weigh, you skip the question. 213 grams equals 1 packed cup. Anything else means the recipe was written differently and the writer's note will say so.",
      ],
      faqs: [
        {
          question: "How many grams is 1 cup of packed brown sugar?",
          answer:
            "1 US cup of brown sugar, packed firm, is 213 grams. Loose brown sugar in the same cup is about 145 grams, which is why most recipes specify packed.",
        },
        {
          question: "Do I really need to pack brown sugar?",
          answer:
            "Yes, for most recipes. Loose brown sugar weighs 30 percent less than packed. A recipe written for 1 cup of packed brown sugar will be sweet, moist, and balanced; the same recipe with loose brown sugar will be drier and less sweet.",
        },
        {
          question: "What if my brown sugar is hard?",
          answer:
            "Soften it. Microwave a small bowl of brown sugar for 20 seconds with a damp paper towel on top, or put a slice of bread in the bag overnight. Hard brown sugar still weighs 213 grams per packed cup, but it is hard to pack accurately.",
        },
        {
          question: "Is light brown sugar the same weight as dark?",
          answer:
            "Close. Dark brown sugar has slightly more molasses, but the weight per cup is the same to within 1 to 2 percent. Both are 213 grams per packed cup for cooking purposes.",
        },
      ],
      related: [
        { label: "Sugar cups to grams", href: "/sugar-cups-to-grams" },
        { label: "Flour cups to grams", href: "/flour-cups-to-grams" },
        { label: "Cups to grams (any food)", href: "/cups-to-grams" },
        { label: "Recipe scaler", href: "/recipe-scaler" },
      ],
    },
    copyEs: {
      title: "Azúcar Morena: Tazas a Gramos (compactada)",
      metaDescription:
        "Convierte tazas de azúcar morena a gramos. 1 taza compactada son 213 gramos. Suelta son cerca de 145 gramos. Incluye tabla y consejos.",
      h1: "Azúcar morena: tazas a gramos",
      tldr:
        "1 taza de azúcar morena, compactada con firmeza, son 213 gramos. 1/2 taza compactada son 107 gramos. 2 tazas son 426 gramos. Suelta pesa menos, cerca de 145 gramos por taza. Casi todas las recetas quieren compactada.",
      intro:
        "La azúcar morena es única porque la receta casi siempre asume que la presionaste en la taza. Suelta pesa 30 por ciento menos. Si la cuchareas sin apretar, te queda corto y las galletas, salsas o bizcochos salen distintos.",
      quickRefTitle: "Cantidades comunes de azúcar morena (compactada)",
      quickRefBody: "Azúcar morena, compactada con firmeza, taza estadounidense:",
      quickRefItems: [
        "1/4 de taza compactada = 53 g",
        "1/3 de taza compactada = 71 g",
        "1/2 taza compactada = 107 g",
        "2/3 de taza compactada = 142 g",
        "3/4 de taza compactada = 160 g",
        "1 taza compactada = 213 g",
        "1 1/2 tazas compactada = 320 g",
        "2 tazas compactada = 426 g",
        "1 taza suelta (raro) = cerca de 145 g",
      ],
      detailsTitle: "Cómo compactar bien la azúcar morena",
      detailsBody: [
        "La azúcar morena tiene melaza, lo que la hace pegajosa. Suelta, parece arena húmeda con bolsas de aire. Compactada, la melaza llena esos huecos y la azúcar llega a su peso real.",
        "Para compactarla, presiona la azúcar morena con firmeza en la taza con el dorso de una cuchara o la mano. Nivela el top con un cuchillo. Cuando volteas la taza, la azúcar debe mantener la forma un segundo antes de caer.",
        "Si pesas, te saltas la duda. 213 gramos son 1 taza compactada. Cualquier otro número viene de una receta escrita distinto y la nota del autor lo dirá.",
      ],
      faqs: [
        {
          question: "¿Cuántos gramos son 1 taza de azúcar morena compactada?",
          answer:
            "1 taza estadounidense de azúcar morena, compactada con firmeza, son 213 gramos. Suelta en la misma taza son cerca de 145 gramos, por eso las recetas piden compactada.",
        },
        {
          question: "¿De verdad tengo que compactar la azúcar morena?",
          answer:
            "Sí, para la mayoría de recetas. La suelta pesa 30 por ciento menos. Una receta para 1 taza compactada queda dulce, húmeda y equilibrada; la misma con suelta queda más seca y menos dulce.",
        },
        {
          question: "¿Y si mi azúcar morena está dura?",
          answer:
            "Ablándala. Calienta un bol pequeño en el microondas 20 segundos con una toalla de papel húmeda encima, o pon una rebanada de pan en la bolsa de un día para otro. La azúcar morena dura sigue pesando 213 gramos por taza compactada, pero cuesta compactarla con exactitud.",
        },
        {
          question: "¿La morena clara pesa igual que la oscura?",
          answer:
            "Casi. La morena oscura tiene un poco más de melaza, pero el peso por taza es igual con una diferencia del 1 al 2 por ciento. Las dos son 213 gramos por taza compactada para cocina.",
        },
      ],
      related: [
        { label: "Azúcar: tazas a gramos", href: "/es/azucar-tazas-a-gramos" },
        { label: "Harina: tazas a gramos", href: "/es/harina-tazas-a-gramos" },
        { label: "Tazas a gramos (cualquier alimento)", href: "/es/tazas-a-gramos" },
        { label: "Escalador de recetas", href: "/es/escalador-de-recetas" },
      ],
    },
  },
  {
    ingredientId: "cocoa",
    pathEn: "/cocoa-cups-to-grams",
    pathEs: "/es/cacao-tazas-a-gramos",
    copyEn: {
      title: "Cocoa Powder Cups to Grams Converter (Unsweetened)",
      metaDescription:
        "Convert cocoa powder cups to grams. 1 cup of unsweetened cocoa powder is 85 grams. Includes chart and notes on Dutch vs natural cocoa.",
      h1: "Cocoa powder cups to grams",
      tldr:
        "1 cup of unsweetened cocoa powder is 85 grams. 1/2 cup is 42 grams. 1/4 cup is 21 grams. Cocoa is light and fluffy, so the cup is less than half the weight of the same cup of sugar.",
      intro:
        "Cocoa powder is light, dry, and full of air. A cup of it weighs less than half a cup of granulated sugar. That low density catches people off guard, which is one reason chocolate cakes can come out too dry or too dense when measured by cup instead of weight.",
      quickRefTitle: "Common cocoa powder amounts",
      quickRefBody: "Unsweetened cocoa powder, US cup:",
      quickRefItems: [
        "1 tablespoon cocoa = 5 g",
        "2 tablespoons cocoa = 11 g",
        "1/4 cup cocoa = 21 g",
        "1/3 cup cocoa = 28 g",
        "1/2 cup cocoa = 42 g",
        "2/3 cup cocoa = 57 g",
        "3/4 cup cocoa = 64 g",
        "1 cup cocoa = 85 g",
        "1 1/2 cups cocoa = 128 g",
        "2 cups cocoa = 170 g",
      ],
      detailsTitle: "Why cocoa is hard to measure by cup",
      detailsBody: [
        "Cocoa clumps. Even after sifting, the powder packs and unpacks at different rates depending on humidity. A scooped cup of cocoa can weigh from 75 to 95 grams. The 85 grams here is the spoon-and-level average.",
        "For baking, weigh. Cocoa is one of the ingredients with the biggest cup-to-cup variation, and a 10 percent error in cocoa changes the color, richness, and acid balance of a chocolate bake.",
        "Dutch-process and natural cocoa weigh the same per cup. The difference is acidity and color, not density. Recipes that call for one usually do not work with the other.",
      ],
      faqs: [
        {
          question: "How many grams is 1 cup of cocoa powder?",
          answer:
            "1 US cup of unsweetened cocoa powder is 85 grams. The number is the same for Dutch-process and natural cocoa.",
        },
        {
          question: "How many grams is 2 tablespoons of cocoa?",
          answer:
            "2 US tablespoons of unsweetened cocoa powder is about 11 grams. 1 tablespoon is about 5 grams.",
        },
        {
          question: "Should I sift cocoa before measuring?",
          answer:
            "Sifting helps for accuracy with cups because it breaks up clumps that throw off the volume. If you weigh, you can skip sifting.",
        },
        {
          question: "Is Dutch-process cocoa heavier than natural cocoa?",
          answer:
            "No. The weight per cup is the same. The difference is the acidity (and color), which matters for how the cocoa reacts with baking soda or baking powder.",
        },
      ],
      related: [
        { label: "Sugar cups to grams", href: "/sugar-cups-to-grams" },
        { label: "Flour cups to grams", href: "/flour-cups-to-grams" },
        { label: "Cups to grams (any food)", href: "/cups-to-grams" },
        { label: "Recipe scaler", href: "/recipe-scaler" },
      ],
    },
    copyEs: {
      title: "Cacao en Polvo: Tazas a Gramos (sin azúcar)",
      metaDescription:
        "Convierte tazas de cacao en polvo a gramos. 1 taza de cacao sin azúcar son 85 gramos. Tabla y notas sobre cacao natural y alcalinizado.",
      h1: "Cacao en polvo: tazas a gramos",
      tldr:
        "1 taza de cacao en polvo sin azúcar son 85 gramos. 1/2 taza son 42 gramos. 1/4 de taza son 21 gramos. El cacao es ligero y esponjoso, así que la taza pesa menos de la mitad que la misma taza de azúcar.",
      intro:
        "El cacao en polvo es ligero, seco y lleno de aire. Una taza pesa menos que media taza de azúcar blanca. Esa densidad baja sorprende a la gente, y por eso los bizcochos de chocolate salen secos o densos cuando se miden con taza en vez de báscula.",
      quickRefTitle: "Cantidades comunes de cacao",
      quickRefBody: "Cacao en polvo sin azúcar, taza estadounidense:",
      quickRefItems: [
        "1 cucharada de cacao = 5 g",
        "2 cucharadas de cacao = 11 g",
        "1/4 de taza de cacao = 21 g",
        "1/3 de taza de cacao = 28 g",
        "1/2 taza de cacao = 42 g",
        "2/3 de taza de cacao = 57 g",
        "3/4 de taza de cacao = 64 g",
        "1 taza de cacao = 85 g",
        "1 1/2 tazas de cacao = 128 g",
        "2 tazas de cacao = 170 g",
      ],
      detailsTitle: "Por qué el cacao es difícil de medir en taza",
      detailsBody: [
        "El cacao se apelmaza. Aunque lo tamices, el polvo se compacta y suelta a ritmos distintos según la humedad. Una taza sumergida puede pesar de 75 a 95 gramos. Los 85 gramos de aquí son el promedio con cuchareo y nivelado.",
        "Para repostería, pesa. El cacao es de los ingredientes con más variación entre tazas, y un 10 por ciento de error cambia el color, la riqueza y el balance de ácido del bizcocho.",
        "El cacao alcalinizado y el natural pesan lo mismo por taza. La diferencia es la acidez y el color, no la densidad. Las recetas que piden uno casi nunca funcionan con el otro.",
      ],
      faqs: [
        {
          question: "¿Cuántos gramos son 1 taza de cacao en polvo?",
          answer:
            "1 taza estadounidense de cacao sin azúcar son 85 gramos. El número es igual para el cacao natural y el alcalinizado.",
        },
        {
          question: "¿Cuántos gramos son 2 cucharadas de cacao?",
          answer:
            "2 cucharadas estadounidenses de cacao sin azúcar son cerca de 11 gramos. 1 cucharada son cerca de 5 gramos.",
        },
        {
          question: "¿Debo tamizar el cacao antes de medir?",
          answer:
            "Tamizar ayuda a la precisión con tazas porque rompe los grumos que cambian el volumen. Si pesas, no hace falta.",
        },
        {
          question: "¿El cacao alcalinizado pesa más que el natural?",
          answer:
            "No. El peso por taza es igual. La diferencia es la acidez (y el color), que sí cambia cómo reacciona con bicarbonato o polvo de hornear.",
        },
      ],
      related: [
        { label: "Azúcar: tazas a gramos", href: "/es/azucar-tazas-a-gramos" },
        { label: "Harina: tazas a gramos", href: "/es/harina-tazas-a-gramos" },
        { label: "Tazas a gramos (cualquier alimento)", href: "/es/tazas-a-gramos" },
        { label: "Escalador de recetas", href: "/es/escalador-de-recetas" },
      ],
    },
  },
  {
    ingredientId: "honey",
    pathEn: "/honey-cups-to-grams",
    pathEs: "/es/miel-tazas-a-gramos",
    copyEn: {
      title: "Honey Cups to Grams Converter",
      metaDescription:
        "Convert honey cups to grams. 1 cup of honey is 336 grams. Includes chart and tips for measuring sticky liquids cleanly.",
      h1: "Honey cups to grams",
      tldr:
        "1 cup of honey is 336 grams. 1/2 cup is 168 grams. 2 tablespoons is 42 grams. Honey is the heaviest common kitchen ingredient by volume because of its sugar content and density.",
      intro:
        "Honey is dense. A cup of it weighs about 1.4 times what a cup of water weighs, because honey is mostly sugar plus a small amount of water. The cup measure works, but the sticky surface tension can leave 5 to 10 percent of the honey in the cup. Weighing skips that loss.",
      quickRefTitle: "Common honey amounts",
      quickRefBody: "Honey, US cup:",
      quickRefItems: [
        "1 tablespoon honey = 21 g",
        "2 tablespoons honey = 42 g",
        "1/4 cup honey = 84 g",
        "1/3 cup honey = 112 g",
        "1/2 cup honey = 168 g",
        "2/3 cup honey = 224 g",
        "3/4 cup honey = 252 g",
        "1 cup honey = 336 g",
        "1 1/2 cups honey = 504 g",
        "2 cups honey = 672 g",
      ],
      detailsTitle: "How to measure honey without losing half of it",
      detailsBody: [
        "Coat the measuring cup or spoon with a thin layer of cooking spray or vegetable oil first. The honey slides out clean instead of clinging to the sides.",
        "If your honey has crystallized, gently warm it in a bowl of warm water until it loosens. Do not microwave honey at high heat; it can scorch.",
        "For baking, weigh. A scale catches the honey that would have stayed on the cup. The difference is small but compounds across a recipe.",
      ],
      faqs: [
        {
          question: "How many grams is 1 cup of honey?",
          answer:
            "1 US cup of honey is 336 grams. Honey is one of the heaviest ingredients by volume in a typical kitchen.",
        },
        {
          question: "How many grams is 1 tablespoon of honey?",
          answer:
            "1 US tablespoon of honey is about 21 grams. 2 tablespoons is 42 grams.",
        },
        {
          question: "Why is my honey weight different from this number?",
          answer:
            "Honey weight varies slightly by source and water content. Most table honey is between 330 and 345 grams per cup. The 336 here is the standard for cooking.",
        },
        {
          question: "Can I swap honey for sugar in a recipe?",
          answer:
            "Sometimes. Honey is sweeter and wetter than sugar, so you typically use 3/4 cup honey for 1 cup sugar, and you reduce other liquids by 2 tablespoons. Baking soda usually goes up by 1/4 teaspoon to balance honey's acidity.",
        },
      ],
      related: [
        { label: "Sugar cups to grams", href: "/sugar-cups-to-grams" },
        { label: "Flour cups to grams", href: "/flour-cups-to-grams" },
        { label: "Cups to grams (any food)", href: "/cups-to-grams" },
        { label: "Recipe scaler", href: "/recipe-scaler" },
      ],
    },
    copyEs: {
      title: "Miel: Tazas a Gramos",
      metaDescription:
        "Convierte tazas de miel a gramos. 1 taza de miel son 336 gramos. Tabla y consejos para medir líquidos pegajosos sin perder nada.",
      h1: "Miel: tazas a gramos",
      tldr:
        "1 taza de miel son 336 gramos. 1/2 taza son 168 gramos. 2 cucharadas son 42 gramos. La miel es el ingrediente común más pesado por volumen porque es casi pura azúcar.",
      intro:
        "La miel es densa. Una taza pesa cerca de 1.4 veces lo que pesa una taza de agua, porque la miel es casi toda azúcar más un poco de agua. La taza funciona, pero la superficie pegajosa puede dejar entre el 5 y el 10 por ciento de la miel en la taza. Pesar te ahorra esa pérdida.",
      quickRefTitle: "Cantidades comunes de miel",
      quickRefBody: "Miel, taza estadounidense:",
      quickRefItems: [
        "1 cucharada de miel = 21 g",
        "2 cucharadas de miel = 42 g",
        "1/4 de taza de miel = 84 g",
        "1/3 de taza de miel = 112 g",
        "1/2 taza de miel = 168 g",
        "2/3 de taza de miel = 224 g",
        "3/4 de taza de miel = 252 g",
        "1 taza de miel = 336 g",
        "1 1/2 tazas de miel = 504 g",
        "2 tazas de miel = 672 g",
      ],
      detailsTitle: "Cómo medir miel sin perder la mitad",
      detailsBody: [
        "Unta la taza o la cuchara con una capa fina de aceite o spray de cocina primero. La miel se desliza limpia en vez de pegarse a las paredes.",
        "Si la miel se cristalizó, caliéntala suave en un bol con agua tibia hasta que se afloje. No la calientes en microondas a alta potencia; se quema.",
        "Para repostería, pesa. La báscula atrapa la miel que se hubiera quedado en la taza. La diferencia es pequeña pero se suma en una receta.",
      ],
      faqs: [
        {
          question: "¿Cuántos gramos son 1 taza de miel?",
          answer:
            "1 taza estadounidense de miel son 336 gramos. La miel es uno de los ingredientes más pesados por volumen en una cocina típica.",
        },
        {
          question: "¿Cuántos gramos son 1 cucharada de miel?",
          answer:
            "1 cucharada estadounidense de miel son cerca de 21 gramos. 2 cucharadas son 42 gramos.",
        },
        {
          question: "¿Por qué mi miel pesa distinto al número que dan?",
          answer:
            "El peso de la miel varía un poco por origen y contenido de agua. La miel de mesa común está entre 330 y 345 gramos por taza. Los 336 de aquí son el estándar para cocina.",
        },
        {
          question: "¿Puedo cambiar miel por azúcar en una receta?",
          answer:
            "A veces. La miel es más dulce y más húmeda que la azúcar, así que normalmente usas 3/4 de taza de miel por 1 taza de azúcar, y bajas otros líquidos 2 cucharadas. El bicarbonato sube 1/4 de cucharadita para equilibrar la acidez de la miel.",
        },
      ],
      related: [
        { label: "Azúcar: tazas a gramos", href: "/es/azucar-tazas-a-gramos" },
        { label: "Harina: tazas a gramos", href: "/es/harina-tazas-a-gramos" },
        { label: "Tazas a gramos (cualquier alimento)", href: "/es/tazas-a-gramos" },
        { label: "Escalador de recetas", href: "/es/escalador-de-recetas" },
      ],
    },
  },
  {
    ingredientId: "oats-rolled",
    pathEn: "/oats-cups-to-grams",
    pathEs: "/es/avena-tazas-a-gramos",
    copyEn: {
      title: "Oats Cups to Grams Converter (Rolled)",
      metaDescription:
        "Convert oats cups to grams. 1 cup of rolled oats is 90 grams. Includes chart and notes on quick oats and steel-cut oats.",
      h1: "Oats cups to grams",
      tldr:
        "1 cup of rolled oats is 90 grams. 1/2 cup is 45 grams. 2 cups are 180 grams. Quick oats weigh the same. Steel-cut oats are denser, about 180 grams per cup uncooked.",
      intro:
        "Rolled oats are light and full of air. A cup weighs about 90 grams. Steel-cut oats, which are cut grains rather than rolled flakes, weigh twice as much per cup because they pack tighter. Always check which kind of oats your recipe wants.",
      quickRefTitle: "Common oat amounts",
      quickRefBody: "Rolled oats, US cup, dry:",
      quickRefItems: [
        "1/4 cup rolled oats = 23 g",
        "1/3 cup rolled oats = 30 g",
        "1/2 cup rolled oats = 45 g",
        "2/3 cup rolled oats = 60 g",
        "3/4 cup rolled oats = 68 g",
        "1 cup rolled oats = 90 g",
        "1 1/2 cups rolled oats = 135 g",
        "2 cups rolled oats = 180 g",
        "1 cup quick oats = 90 g (same as rolled)",
        "1 cup steel-cut oats, dry = 180 g (denser)",
      ],
      detailsTitle: "Rolled, quick, and steel-cut: which is which",
      detailsBody: [
        "Rolled oats (old-fashioned) are whole oat groats steamed and flattened. They are the standard for oatmeal cookies, granola, and overnight oats. 90 grams per cup.",
        "Quick oats are rolled oats cut smaller so they cook faster. The weight per cup is essentially the same as rolled oats. They give a softer texture in baking.",
        "Steel-cut oats are the whole groat chopped into pieces, not rolled. They look like coarse rice and take much longer to cook. A cup of dry steel-cut oats is about 180 grams, twice the weight of rolled.",
      ],
      faqs: [
        {
          question: "How many grams is 1 cup of oats?",
          answer:
            "1 US cup of rolled (old-fashioned) oats is 90 grams. Quick oats are the same. Steel-cut oats are 180 grams per cup, dry.",
        },
        {
          question: "Are rolled oats and old-fashioned oats the same?",
          answer:
            "Yes. Old-fashioned oats and rolled oats are the same product. Quick oats are also rolled oats, just cut smaller.",
        },
        {
          question: "How much do cooked oats weigh?",
          answer:
            "Cooked oats absorb water and gain weight. 1 cup of dry rolled oats yields about 2 cups of cooked oatmeal. The cooked weight depends on how much water you used.",
        },
        {
          question: "Can I use steel-cut oats instead of rolled in baking?",
          answer:
            "Not without changes. Steel-cut oats are harder and need cooking before they soften. Most baked goods that call for rolled oats will be crunchy and undercooked if you swap in steel-cut.",
        },
      ],
      related: [
        { label: "Flour cups to grams", href: "/flour-cups-to-grams" },
        { label: "Sugar cups to grams", href: "/sugar-cups-to-grams" },
        { label: "Cups to grams (any food)", href: "/cups-to-grams" },
        { label: "Recipe scaler", href: "/recipe-scaler" },
      ],
    },
    copyEs: {
      title: "Avena: Tazas a Gramos (en hojuelas)",
      metaDescription:
        "Convierte tazas de avena a gramos. 1 taza de avena en hojuelas son 90 gramos. Tabla y notas sobre avena instantánea y cortada al gravado.",
      h1: "Avena: tazas a gramos",
      tldr:
        "1 taza de avena en hojuelas son 90 gramos. 1/2 taza son 45 gramos. 2 tazas son 180 gramos. La avena instantánea pesa lo mismo. La avena cortada al gravado es más densa, cerca de 180 gramos por taza cruda.",
      intro:
        "La avena en hojuelas es ligera y llena de aire. Una taza pesa cerca de 90 gramos. La avena cortada al gravado, que son granos cortados en lugar de hojuelas, pesa el doble por taza porque se acomoda más compacta. Siempre revisa qué tipo de avena pide la receta.",
      quickRefTitle: "Cantidades comunes de avena",
      quickRefBody: "Avena en hojuelas, taza estadounidense, cruda:",
      quickRefItems: [
        "1/4 de taza de avena = 23 g",
        "1/3 de taza de avena = 30 g",
        "1/2 taza de avena = 45 g",
        "2/3 de taza de avena = 60 g",
        "3/4 de taza de avena = 68 g",
        "1 taza de avena = 90 g",
        "1 1/2 tazas de avena = 135 g",
        "2 tazas de avena = 180 g",
        "1 taza de avena instantánea = 90 g (igual que en hojuelas)",
        "1 taza de avena cortada al gravado, cruda = 180 g (más densa)",
      ],
      detailsTitle: "En hojuelas, instantánea y cortada: cuál es cuál",
      detailsBody: [
        "La avena en hojuelas (tradicional) son granos enteros de avena al vapor y aplanados. Es el estándar para galletas de avena, granola y avena de la noche. 90 gramos por taza.",
        "La avena instantánea son hojuelas cortadas más pequeñas para que se cocinen rápido. El peso por taza es casi igual que las hojuelas. Da una textura más suave al hornear.",
        "La avena cortada al gravado son el grano entero picado en pedacitos, no aplanado. Parece arroz grueso y tarda mucho más en cocinarse. Una taza cruda son cerca de 180 gramos, el doble de las hojuelas.",
      ],
      faqs: [
        {
          question: "¿Cuántos gramos son 1 taza de avena?",
          answer:
            "1 taza estadounidense de avena en hojuelas (tradicional) son 90 gramos. La instantánea es igual. La cortada al gravado son 180 gramos por taza, cruda.",
        },
        {
          question: "¿La avena en hojuelas y la tradicional son la misma?",
          answer:
            "Sí. La avena tradicional y la avena en hojuelas son el mismo producto. La instantánea también son hojuelas, solo cortadas más pequeñas.",
        },
        {
          question: "¿Cuánto pesa la avena cocida?",
          answer:
            "La avena cocida absorbe agua y gana peso. 1 taza cruda de avena en hojuelas rinde cerca de 2 tazas cocidas. El peso cocido depende de cuánta agua usaste.",
        },
        {
          question: "¿Puedo usar avena cortada al gravado en vez de en hojuelas para hornear?",
          answer:
            "No sin cambios. La cortada al gravado es más dura y necesita cocinarse antes de ablandarse. Casi todo lo horneado con hojuelas queda crujiente y crudo si la cambias por cortada.",
        },
      ],
      related: [
        { label: "Harina: tazas a gramos", href: "/es/harina-tazas-a-gramos" },
        { label: "Azúcar: tazas a gramos", href: "/es/azucar-tazas-a-gramos" },
        { label: "Tazas a gramos (cualquier alimento)", href: "/es/tazas-a-gramos" },
        { label: "Escalador de recetas", href: "/es/escalador-de-recetas" },
      ],
    },
  },
];
