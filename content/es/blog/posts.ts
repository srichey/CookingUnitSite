import type { BlogPost } from "@/lib/blog";

export const postsEs: BlogPost[] = [
  {
    slug: "harina-tamizada-vs-sin-tamizar",
    locale: "es",
    title: "Harina tamizada vs sin tamizar: la diferencia que rompe la receta",
    description:
      "Una taza de harina tamizada pesa cerca de 110 gramos. La misma taza sin tamizar pesa 142 gramos. Esa diferencia del 25 por ciento separa un pastel suave de uno duro.",
    publishedAt: "2026-05-13",
    readingMinutes: 5,
    alternateSlug: "sifted-vs-unsifted-flour",
    tags: ["reposteria", "medicion", "harina"],
    body: [
      {
        kind: "p",
        text:
          "Tú mides 1 taza de harina. Tu amiga mide 1 taza. Las dos tazas pueden pesar 30 gramos de diferencia. Esa diferencia aparece en tu pastel, tus galletas y tu pan. La razón principal: una de ustedes tamizó, la otra no.",
      },
      {
        kind: "callout",
        text:
          "1 taza de harina común tamizada pesa cerca de 110 a 115 gramos. 1 taza sin tamizar, sumergida en la bolsa, pesa 140 a 145 gramos. Es un salto del 25 por ciento. King Arthur Baking usa 120 gramos como estándar (cuchareo y nivelado, sin tamizar), que queda en medio.",
      },
      {
        kind: "image",
        alt: "Dos tazas medidoras lado a lado: una con harina tamizada y otra con harina compactada, ambas niveladas.",
        placeholder:
          "Dos tazas de 1 taza sobre una báscula. Izquierda: 'tamizada, 110 g'. Derecha: 'sumergida, 145 g'. Misma receta, misma taza, mundos distintos.",
      },
      { kind: "h2", text: "Por qué tamizar hace tanta diferencia" },
      {
        kind: "p",
        text:
          "La harina se compacta con el tiempo. La bolsa sale del molino con aire entre los granos, pero el asentamiento, el transporte y los días en el estante empujan los granos a juntarse. Sumergir la taza en esa bolsa compacta saca una taza más densa que la que usó el autor de la receta.",
      },
      {
        kind: "p",
        text:
          "Tamizar esponja la harina. El aire vuelve entre los granos y la misma taza guarda menos harina en peso. La taza sigue viéndose llena, pero tiene 25 por ciento menos harina adentro.",
      },
      { kind: "h2", text: "El orden de las palabras importa" },
      {
        kind: "p",
        text:
          "Dos frases que parecen casi iguales pero significan cosas distintas:",
      },
      {
        kind: "ul",
        items: [
          "\"1 taza de harina tamizada\" quiere decir tamiza primero, luego mide 1 taza. Te quedan cerca de 110 gramos.",
          "\"1 taza de harina, tamizada\" quiere decir mide 1 taza primero, luego tamiza. Te quedan cerca de 120 a 125 gramos.",
        ],
      },
      {
        kind: "p",
        text:
          "La coma hace todo el trabajo. La mayoría de las recetas modernas se alejaron de este lenguaje porque la gente lo lee mal. Si ves cualquiera de las dos frases, lo seguro es pesar.",
      },
      { kind: "h2", text: "Cuándo tamizar y cuándo saltarlo" },
      {
        kind: "p",
        text:
          "Tamiza cuando la receta lo pide. Tamiza cuando mezclas cacao en polvo, azúcar glas o bicarbonato con harina y quieres que se mezclen parejo. Tamiza cuando quieres pasteles muy suaves o bizcochos esponjosos donde el aire importa más que la proporción exacta.",
      },
      {
        kind: "p",
        text:
          "Sáltalo en la mayoría de galletas, magdalenas, panes rápidos y cualquier receta que dé pesos en gramos. Si pesas, la taza no importa, y el orden del tamizado tampoco.",
      },
      { kind: "h2", text: "El arreglo más simple: pesa, no tamices" },
      {
        kind: "p",
        text:
          "Una báscula digital de cocina termina con la pregunta. La receta dice 120 gramos de harina, tú pones 120 gramos en la báscula, tamizada o no. El mismo número, cada vez. Tamizar se vuelve un paso para textura, no para medir.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas de harina a gramos",
        href: "/es/harina-tazas-a-gramos",
        description: "Escribe tazas, obtén gramos para harina común, de pan, para pastel e integral.",
      },
    ],
  },
  {
    slug: "horno-conveccion-bajar-25-grados",
    locale: "es",
    title: "Horno de convección: baja 25°F (y aquí está el porqué)",
    description:
      "El ventilador de convección mueve aire caliente sobre tu comida. Cocina más rápido y más caliente al mismo número del dial. Baja la temperatura 25°F o acorta el tiempo cerca de 30 por ciento.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "convection-oven-25-degrees",
    tags: ["horno", "reposteria", "temperatura"],
    body: [
      {
        kind: "p",
        text:
          "Tu receta dice 350°F. Tu horno tiene botón de convección. ¿Lo aprietas? Si lo haces, necesitas un cambio pequeño: baja el dial 25 grados o saca la comida antes. El porqué está en el ventilador.",
      },
      {
        kind: "callout",
        text:
          "Regla estándar de convección: baja la temperatura de la receta 25°F (cerca de 15°C), o mantén la temperatura y reduce el tiempo de horneado cerca de 30 por ciento. Muchos hornos nuevos lo hacen automático al seleccionar convección. Revisa el manual.",
      },
      { kind: "h2", text: "Qué hace el ventilador de convección" },
      {
        kind: "p",
        text:
          "Un horno normal calienta el aire dentro de la caja. El aire se queda quieto. La comida cerca de la resistencia se cocina más rápido que la del centro.",
      },
      {
        kind: "p",
        text:
          "Un horno de convección agrega un ventilador. El ventilador mueve el aire caliente todo el tiempo. Cada lado de la comida recibe el mismo calor. Suena pequeño, pero cambia qué tan rápido se seca la superficie, qué tan rápido se dora y qué tan parejo se cocina por dentro.",
      },
      {
        kind: "image",
        alt: "Corte de un horno de convección mostrando el ventilador haciendo circular aire caliente alrededor de comida en tres niveles.",
        placeholder:
          "Diagrama simple: caja del horno, ventilador atrás con flechas mostrando el aire moviéndose sobre comida en varias rejillas. Pie: 'Aire en movimiento = calor más rápido y parejo.'",
      },
      { kind: "h2", text: "Por qué 25°F es el número mágico" },
      {
        kind: "p",
        text:
          "Fabricantes y cocinas de prueba se pusieron de acuerdo en 25°F porque alinea los resultados de convección con los de horno normal. America's Test Kitchen, KitchenAid y GE recomiendan el mismo ajuste.",
      },
      {
        kind: "p",
        text:
          "Para 350°F pon el dial en 325. Para 400°F pon 375. Para 425°F pon 400. La comida se dora igual y se cocina en casi el mismo tiempo que un horno normal a la temperatura de la receta.",
      },
      { kind: "h2", text: "Cuándo NO ajustar" },
      {
        kind: "ul",
        items: [
          "Bizcochos de subida delicada (chifón, ángel). El ventilador puede partir la parte de arriba. Quédate con horno normal.",
          "Flanes, cheesecakes y baños maría. Se cocinan suave; la convección puede secarlos.",
          "Comida con mucho líquido donde no quieres costra.",
          "Recetas que ya dicen \"convección 350°F\". El autor ya ajustó.",
        ],
      },
      { kind: "h2", text: "Tabla rápida de ajuste" },
      {
        kind: "ul",
        items: [
          "Receta 300°F → Convección 275°F",
          "Receta 325°F → Convección 300°F",
          "Receta 350°F → Convección 325°F",
          "Receta 375°F → Convección 350°F",
          "Receta 400°F → Convección 375°F",
          "Receta 425°F → Convección 400°F",
          "Receta 450°F → Convección 425°F",
        ],
      },
      {
        kind: "p",
        text:
          "Revisa la comida entre 10 y 15 por ciento antes de lo que dice la receta, incluso con la temperatura bajada. Usa termómetro cuando el punto de cocción importa.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de Fahrenheit a Celsius del horno",
        href: "/es/fahrenheit-a-celsius",
        description: "Convierte cualquier temperatura del horno con marcas de gas para recetas británicas.",
      },
    ],
  },
  {
    slug: "como-partir-receta-con-un-huevo",
    locale: "es",
    title: "Cómo partir una receta con un solo huevo",
    description:
      "La mitad de un huevo son 25 gramos o 2 cucharadas. Cásalo, bátelo hasta que esté liso y usa la mitad. Guarda el resto para la tortilla de mañana.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "halve-recipe-with-one-egg",
    tags: ["ajuste de recetas", "huevos", "reposteria"],
    body: [
      {
        kind: "p",
        text:
          "Encontraste una receta para tanda pequeña, pero la quieres aún más pequeña. La receta hace 12 galletas. Tú quieres 6. La cuenta es fácil: parte todo a la mitad. Llegas al huevo. Hay uno. ¿Ahora qué?",
      },
      {
        kind: "callout",
        text:
          "Un huevo grande fuera del cascarón pesa cerca de 50 gramos. La mitad son 25 gramos. Cásalo en un bol pequeño, bátelo hasta que la yema y la clara sean un solo color y mide 2 cucharadas (o pesa 25 gramos). Eso es medio huevo.",
      },
      { kind: "h2", text: "Las tres formas de partir un huevo" },
      { kind: "h3", text: "1. Por peso (lo más exacto)" },
      {
        kind: "p",
        text:
          "Casca el huevo en un bol. Bate hasta que esté liso. Pon el bol en una báscula, dale tara y vierte 25 gramos. Este método lo usan los panaderos profesionales porque elimina la adivinanza.",
      },
      { kind: "h3", text: "2. Por volumen (sin báscula)" },
      {
        kind: "p",
        text:
          "Casca y bate igual. Usa una cuchara medidora para sacar 2 cucharadas. Un huevo grande batido mide cerca de 4 cucharadas en total, así que 2 cucharadas son la mitad.",
      },
      { kind: "h3", text: "3. La división yema y clara (para cremas)" },
      {
        kind: "p",
        text:
          "Para cremas y natillas, algunos panaderos usan una yema entera en lugar de medio huevo. La yema da riqueza y une. Saltas la clara. Es un truco de panadería, no un cambio universal; sirve para crème brûlée, natilla y curd.",
      },
      {
        kind: "image",
        alt: "Un huevo batido en un bol pequeño sobre una báscula que marca 50 gramos, con una cuchara medidora al lado.",
        placeholder:
          "Foto cenital: un huevo grande batido en un bol blanco, báscula marcando 50 g, una cuchara medidora con 2 cucharadas de huevo. Pie: 'Mismo huevo, dos formas de medir la mitad.'",
      },
      { kind: "h2", text: "Qué hacer con la otra mitad" },
      {
        kind: "p",
        text:
          "Tapa el huevo batido sobrante y refrigéralo. Aguanta hasta 2 días. Úsalo en:",
      },
      {
        kind: "ul",
        items: [
          "Huevos revueltos o tortilla de mañana (bátelo con más huevos)",
          "Una tanda pequeña de panqueques",
          "Un baño de huevo para pan o pastelería (mézclalo con un chorrito de agua)",
          "Masa de tostadas francesas",
        ],
      },
      { kind: "h2", text: "Cuándo la proporción de huevo importa de verdad" },
      {
        kind: "p",
        text:
          "Los huevos hacen cuatro trabajos en repostería: unen, leudan, dan humedad y emulsionan. Cuanto más depende la receta de la estructura del huevo, más importa la exactitud.",
      },
      {
        kind: "ul",
        items: [
          "Galletas y panes rápidos: estimar medio huevo está bien.",
          "Pound cakes y bizcochos con mantequilla: pesa.",
          "Bizcochos esponjosos, soufflés y merengues: no partas. Haz la receta entera o cambia la proporción yema-clara por separado.",
        ],
      },
      { kind: "h2", text: "¿Y los huevos extra grandes o jumbo?" },
      {
        kind: "p",
        text:
          "Los huevos grandes estadounidenses pesan 50 gramos fuera del cascarón. Los extra grandes pesan 56 gramos. Los jumbo pesan 63 gramos. Si tu receta dice \"huevo grande\" y solo tienes jumbo, pesar evita la diferencia. Para partir, usa 25 gramos sin importar el tamaño.",
      },
      {
        kind: "link",
        text: "Abrir el escalador de recetas",
        href: "/es/escalador-de-recetas",
        description: "Reduce a la mitad, duplica o triplica cualquier receta y mira las nuevas cantidades.",
      },
    ],
  },
  {
    slug: "250-ml-no-es-1-taza-estadounidense",
    locale: "es",
    title: "La taza de 250 ml no es la taza estadounidense (el truco con recetas australianas)",
    description:
      "Una taza métrica australiana son 250 ml. Una taza estadounidense son 236.59 ml. La diferencia del 6 por ciento puede arruinar un pastel de tanda pequeña. Esto es lo que debes saber.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "250-ml-is-not-1-us-cup",
    tags: ["medicion", "internacional", "reposteria"],
    body: [
      {
        kind: "p",
        text:
          "Sacaste una gran receta de un blog. La pavlova o los lamingtons se ven perfectos. Mides 1 taza de azúcar. La receta es de Sídney. Tu taza es de Target. El resultado sale más dulce o más seco que la foto. Las tazas no son del mismo tamaño.",
      },
      {
        kind: "callout",
        text:
          "Taza estadounidense: 236.59 ml. Taza métrica (Australia, Canadá, Nueva Zelanda): 250 ml. Taza imperial británica antigua: 284 ml. La taza métrica es cerca de 6 por ciento más grande que la estadounidense. Esa diferencia importa en repostería, menos en cocina.",
      },
      { kind: "h2", text: "Dónde se usa cada taza" },
      {
        kind: "ul",
        items: [
          "Estados Unidos: 236.59 ml. Muchas veces redondeado a 240 ml en libros.",
          "Australia: taza métrica de 250 ml, con cucharada de 20 ml (4 cucharaditas, no 3).",
          "Canadá: taza métrica de 250 ml; recetas más viejas pueden usar 227 ml (la taza británica antigua).",
          "Nueva Zelanda: taza métrica de 250 ml.",
          "Reino Unido: la mayoría de recetas modernas británicas usa gramos; la taza imperial antigua era 284 ml.",
          "Japón: taza de arroz de 200 ml, distinta a la taza de cocina.",
        ],
      },
      {
        kind: "image",
        alt: "Tres tazas medidoras lado a lado, marcadas EE. UU. (236.59 ml), métrica (250 ml) e imperial (284 ml), cada una llena hasta el borde.",
        placeholder:
          "Tres tazas medidoras idénticas en fila. Cada una muestra una línea distinta: EE. UU. 236 ml, métrica 250 ml, imperial 284 ml. Pie: 'Misma palabra, tres tazas distintas.'",
      },
      { kind: "h2", text: "Cuándo importa el 6 por ciento" },
      {
        kind: "p",
        text:
          "Para cocina diaria, la diferencia del 6 por ciento entre tazas se pierde en la olla. Sopas, guisos, salteados: un poco más o menos de caldo no cambia nada.",
      },
      {
        kind: "p",
        text:
          "Para repostería, el 6 por ciento aparece. Una receta duplicada con esa diferencia suma 12 por ciento de harina o azúcar de más. Las galletas se extienden distinto. Los pasteles se doran más rápido. El pan leuda más lento. La cuenta se acumula.",
      },
      { kind: "h2", text: "Cómo saber qué taza usó la receta" },
      {
        kind: "ul",
        items: [
          "Recetas que también dan gramos: confía en los gramos. Olvida la pregunta de la taza.",
          "Recetas de dominios .com.au, .co.nz o .ca: taza métrica de 250 ml.",
          "Recetas de libros estadounidenses, blogs estadounidenses o TV estadounidense: 236.59 ml.",
          "Libros británicos antiguos (antes de 1971): taza imperial. Convierte con cuidado.",
        ],
      },
      { kind: "h2", text: "Conversiones rápidas si la receta es métrica" },
      {
        kind: "p",
        text:
          "Si tu receta dice 1 taza métrica y solo tienes tazas estadounidenses, tienes dos opciones:",
      },
      {
        kind: "ol",
        items: [
          "Usa 1 taza estadounidense más 1 cucharada. Son 251 ml, lo bastante cerca.",
          "Usa los mililitros directos. Una taza medidora de líquidos con marcas métricas lo hace fácil: 250 ml en el costado de la taza, sin cuentas.",
        ],
      },
      { kind: "h2", text: "El arreglo que termina con la discusión" },
      {
        kind: "p",
        text:
          "Pesa los ingredientes secos. A la harina no le importa de qué país es tu taza. 120 gramos son 120 gramos en Sídney, Toronto o Texas. Una báscula digital es la herramienta que cruza todas las fronteras.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de mililitros a tazas",
        href: "/es/mililitros-a-tazas",
        description: "Convierte cualquier tamaño de taza a mililitros, con la diferencia métrica e imperial.",
      },
    ],
  },
  {
    slug: "mantequilla-europea-vs-barras-estadounidenses",
    locale: "es",
    title: "Mantequilla europea vs barras estadounidenses: el problema de 250 g vs 113 g",
    description:
      "Una barra estadounidense son 113 gramos. Un bloque europeo son 250 gramos. No se dividen parejo y la grasa de leche cambia. Cómo intercambiar sin arruinar la receta.",
    publishedAt: "2026-05-13",
    readingMinutes: 5,
    alternateSlug: "european-butter-vs-american-sticks",
    tags: ["mantequilla", "reposteria", "internacional"],
    body: [
      {
        kind: "p",
        text:
          "Tu receta dice \"2 barras de mantequilla\". Abriste el refri y encontraste un bloque europeo de 250 gramos. Se ven más o menos iguales. No lo son. Usar el bloque entero suma 24 gramos extra, lo cual suena a nada hasta que pruebas las galletas.",
      },
      {
        kind: "callout",
        text:
          "1 barra estadounidense = 113 gramos (4 oz, 1/2 taza, 8 cucharadas). 1 bloque europeo común = 250 gramos. Entonces 2 barras = 226 g, NO 250 g. Corta 24 gramos de un bloque europeo para igualar \"2 barras\". La mantequilla europea también tiene 82 por ciento de grasa de leche (vs 80 por ciento de la estadounidense), lo cual cambia la textura de la pastelería.",
      },
      { kind: "h2", text: "Por qué los tamaños son distintos" },
      {
        kind: "p",
        text:
          "La mantequilla estadounidense se vende en paquetes de 1 libra con cuatro barras. Cada barra es un cuarto de libra, o 4 onzas, o 113 gramos. Las fábricas eligieron esta forma a principios de 1900 y se quedó. Toda receta estadounidense lo asume.",
      },
      {
        kind: "p",
        text:
          "La mantequilla europea viene en bloques, no barras. Tamaños más comunes: 250 gramos (Alemania, Francia, España), 200 gramos (parte del Reino Unido) o 227 gramos (Irlanda, igual a 2 barras estadounidenses). La industria láctea estandarizó pesos métricos mucho antes de que el pasillo de lácteos estadounidense cambiara.",
      },
      {
        kind: "image",
        alt: "Una barra estadounidense en papel y un bloque europeo de 250 g en aluminio sobre una tabla, con una báscula digital marcando 113 g.",
        placeholder:
          "Foto plana: 1 barra estadounidense (envoltorio de papel con marcas de cucharada), 1 bloque europeo de 250 g (envoltorio de aluminio) y una báscula marcando 113 g. Pie: 'Misma forma, distintas cuentas.'",
      },
      { kind: "h2", text: "Tabla rápida de conversión" },
      {
        kind: "ul",
        items: [
          "1 barra estadounidense = 113 g = 1/2 taza = 8 cucharadas",
          "2 barras estadounidenses = 226 g = 1 taza = 16 cucharadas",
          "1 bloque europeo de 200 g = 1.77 barras (corta 27 g para hacer 1.5 barras)",
          "1 bloque europeo de 250 g = 2.21 barras (corta 24 g para hacer 2 barras)",
          "1 bloque irlandés de 227 g = 2.01 barras (usa el bloque entero para \"2 barras\")",
          "1 bloque europeo de 500 g = 4.42 barras (corta 47 g para hacer 4 barras)",
        ],
      },
      { kind: "h2", text: "La diferencia de grasa de leche (y cuándo importa)" },
      {
        kind: "p",
        text:
          "Las reglas de la UE piden mínimo 82 por ciento de grasa de leche. El estándar estadounidense es 80 por ciento. Ese 2 por ciento extra es casi todo menos agua. El agua se vuelve vapor en el horno, y el vapor importa para masa de hojaldre, croissants y masa de tarta.",
      },
      {
        kind: "ul",
        items: [
          "Galletas: casi no se nota. La mantequilla europea se extiende un poco menos.",
          "Pasteles: pequeño cambio en suavidad. Casi nadie en casa lo nota.",
          "Masa de tarta: se nota. La europea da capas más hojaldradas.",
          "Croissants y hojaldre: notable. La europea es mejor opción.",
          "Buttercream: más suave y rico con mantequilla europea.",
        ],
      },
      { kind: "h2", text: "Cuándo vale la pena el extra" },
      {
        kind: "p",
        text:
          "La mantequilla estilo europeo cuesta 50 a 100 por ciento más que la estadounidense estándar. El extra vale la pena para masas laminadas (croissants, danish, hojaldre), galletas donde la mantequilla destaca (shortbread, sablés) y el buttercream de un pastel de capas. Para todo lo demás, la mantequilla estadounidense regular hace el mismo trabajo a la mitad del precio.",
      },
      { kind: "h2", text: "Con sal o sin sal, ya que estamos" },
      {
        kind: "p",
        text:
          "Las recetas estadounidenses usan mantequilla sin sal por defecto a menos que digan otra cosa, para controlar la sal por receta. La mantequilla europea suele venderse ligeramente salada como predeterminada. Revisa el envoltorio. Si solo tienes con sal, baja la sal de la receta 1/4 de cucharadita por barra.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de mantequilla",
        href: "/es/conversor-de-mantequilla",
        description: "Cambia entre barras, cucharadas, tazas, gramos, onzas y libras.",
      },
    ],
  },
  {
    slug: "por-que-cacao-en-polvo-es-dificil-medir",
    locale: "es",
    title: "Por qué el cacao en polvo es tan difícil de medir en taza",
    description:
      "El cacao es ligero, esponjoso y se apelmaza. Una taza sumergida puede pesar entre 75 y 100 gramos. Aquí está el porqué, y cómo obtener un número confiable.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "why-cocoa-powder-is-hard-to-measure",
    tags: ["reposteria", "cacao", "medicion"],
    body: [
      {
        kind: "p",
        text:
          "Mediste 1 taza de cacao para un pastel de chocolate. El pastel salió seco. Leíste tres recetas en línea y todas dieron pesos distintos para 1 taza de cacao: 75, 85, 100. ¿Cuál es la correcta? Más o menos todas.",
      },
      {
        kind: "callout",
        text:
          "El cacao en polvo natural sin azúcar pesa cerca de 82 gramos por taza estadounidense. El cacao alcalinizado pesa más, cerca de 96 gramos por taza, porque el tratamiento con álcali lo hace más denso. Nosotros usamos 85 gramos como promedio. Si tamizas antes, la taza pesa aún menos, cerca de 75 gramos.",
      },
      { kind: "h2", text: "Qué hace al cacao tan variable" },
      {
        kind: "p",
        text:
          "Tres cosas trabajan en tu contra al medir cacao en taza:",
      },
      {
        kind: "ol",
        items: [
          "Se apelmaza. El cacao toma humedad del aire. Los grumos atrapan bolsas de aire dentro de la taza y la taza pesa menos de lo que debería.",
          "Se comprime. Si golpeas la taza o presionas el cacao, rompes los grumos. La taza ahora pesa más.",
          "Cambia por tipo. El cacao natural es más ligero y esponjoso. El cacao alcalinizado es más denso y pesa más por taza.",
        ],
      },
      {
        kind: "image",
        alt: "Una taza de cacao con grumos visibles junto a un bol pequeño de cacao tamizado, ambos sobre una báscula digital.",
        placeholder:
          "Dos boles pequeños de cacao en polvo lado a lado: uno con grumos sin tamizar (báscula marca 95 g), otro tamizado fino (báscula marca 75 g). Pie: 'Misma taza, mismo cacao, distinto peso.'",
      },
      { kind: "h2", text: "Natural vs alcalinizado: más que densidad" },
      {
        kind: "p",
        text:
          "El cacao natural es ácido. Reacciona con el bicarbonato para dar subida al pastel. El cacao alcalinizado se trata con álcali, lo cual neutraliza el ácido. Es más oscuro, más suave en sabor y no reacciona con el bicarbonato igual.",
      },
      {
        kind: "p",
        text:
          "Si una receta dice cacao natural, cambiarlo por alcalinizado puede aplastar el pastel. La cuenta es más que peso; la química cambia. Lee la receta antes de sustituir.",
      },
      { kind: "h2", text: "Cómo medir cacao con precisión" },
      {
        kind: "ul",
        items: [
          "Mejor: pesa en una báscula. 85 gramos por taza como estándar para cacao sin azúcar.",
          "Bien: tamiza primero, luego cucharea hacia la taza y nivela. Más cerca de lo que el autor quería.",
          "Aceptable: revuelve el cacao en el bote para romper grumos, luego cucharea y nivela.",
          "Evitar: sumergir la taza directo en el bote. Los grumos te engañan sobre el peso real.",
        ],
      },
      { kind: "h2", text: "Una nota sobre calidad del chocolate" },
      {
        kind: "p",
        text:
          "La marca importa más en cacao que en casi cualquier ingrediente. Un cacao alcalinizado alto en grasa (22 a 24 por ciento de manteca de cacao) da sabor a chocolate más profundo que un cacao natural bajo en grasa (10 a 12 por ciento). Si un postre de chocolate sabe plano, el cacao puede ser el problema antes que la receta.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas de cacao a gramos",
        href: "/es/cacao-tazas-a-gramos",
        description: "Convierte cualquier cantidad de cacao entre tazas y gramos con la densidad correcta.",
      },
    ],
  },
  {
    slug: "duplicar-receta-tiempo-coccion",
    locale: "es",
    title: "Duplicar una receta no duplica el tiempo de cocción",
    description:
      "Cuando duplicas una receta, la comida no necesita el doble de tiempo en el horno. Suma 25 a 30 por ciento, vigila de cerca y usa termómetro.",
    publishedAt: "2026-05-13",
    readingMinutes: 4,
    alternateSlug: "doubling-recipe-cook-time",
    tags: ["ajuste de recetas", "reposteria", "tiempo de coccion"],
    body: [
      {
        kind: "p",
        text:
          "Duplicaste tu pan de plátano favorito. La receta decía 60 minutos a 350°F. Entonces, ¿120 minutos? No. Dos horas después tienes un ladrillo. La cuenta que usaste sirve para ingredientes. No sirve para tiempo.",
      },
      {
        kind: "callout",
        text:
          "Cuando duplicas una receta y la horneas en un solo molde más grande, suma 25 a 30 por ciento al tiempo de cocción, no 100 por ciento. Si la receta dice 60 minutos, prueba 75 a 80 minutos y empieza a revisar a los 60. Si repartes la tanda duplicada en dos moldes del tamaño original, el tiempo queda casi igual.",
      },
      { kind: "h2", text: "Por qué el tiempo no escala con el volumen" },
      {
        kind: "p",
        text:
          "El calor entra a la comida desde fuera hacia adentro. Cuanto más gruesa la comida, más tarda el calor en llegar al centro. Pero la relación no es lineal. Duplicar el volumen solo suma 25 a 30 por ciento al tiempo porque la superficie sigue haciendo casi todo el trabajo.",
      },
      {
        kind: "p",
        text:
          "Piénsalo como una bañera. Llenar una bañera dos veces más grande no tarda el doble si también usas una manguera más grande. El horno es la manguera; la comida es la bañera. La superficie escala, solo más lento que el volumen.",
      },
      {
        kind: "image",
        alt: "Dos panes de plátano lado a lado, uno en molde estándar y otro en molde doble más ancho, con tiempos de cocción marcados.",
        placeholder:
          "Dos panes de plátano enfriándose en rejilla. Izquierda: pan estándar, 60 minutos. Derecha: masa duplicada en molde más ancho, 78 minutos. Un termómetro de sonda sale de uno.",
      },
      { kind: "h2", text: "Las dos formas de hornear una tanda duplicada" },
      { kind: "h3", text: "Opción A: Dos moldes del tamaño original" },
      {
        kind: "p",
        text:
          "Reparte la masa duplicada entre dos moldes del mismo tamaño que usó la receta. Hornea los dos al mismo tiempo. El tiempo queda igual que el original. Es el método más seguro, especialmente para pasteles y panes.",
      },
      { kind: "h3", text: "Opción B: Un molde más grande" },
      {
        kind: "p",
        text:
          "Vierte toda la masa duplicada en un molde con el doble de área (o cerca). El tiempo sube 25 a 30 por ciento. El riesgo: el exterior se seca antes de que el interior se cocine. Para ayudar, baja la temperatura del horno 25°F y hornea más tiempo para que el calor entre más parejo.",
      },
      { kind: "h2", text: "Comidas donde NO debes duplicar el tiempo" },
      {
        kind: "ul",
        items: [
          "Galletas. Misma temperatura, mismo tiempo, solo más bandejas. Hornea por tandas.",
          "Magdalenas y cupcakes. Mismo tiempo, solo dos moldes.",
          "Pollo o pavo al horno. El tiempo lo decide el peso (cerca de 13 minutos por libra a 350°F), no el número de la receta.",
          "Tartas. Mismo tiempo. Doble tarta significa hornear dos tartas a la vez.",
        ],
      },
      { kind: "h2", text: "Usa termómetro, siempre" },
      {
        kind: "p",
        text:
          "La temperatura interna le gana al tiempo en cualquier horneado grande. Panes rápidos y la mayoría de pasteles están listos a 200-210°F al centro. Pan con levadura a 190-200°F. Pollo a 165°F. El termómetro termina con la adivinanza.",
      },
      {
        kind: "link",
        text: "Abrir el escalador de recetas",
        href: "/es/escalador-de-recetas",
        description: "Duplica, reduce a la mitad o triplica cualquier receta con fracciones limpias.",
      },
    ],
  },
  {
    slug: "tamanos-de-taza-en-el-mundo",
    locale: "es",
    title: "Taza imperial vs métrica vs estadounidense: ¿cuál pide tu receta?",
    description:
      "Hay al menos tres tamaños de taza en cocina. Estadounidense 236.59 ml. Métrica 250 ml. Imperial 284 ml. Cómo identificar cuál quiere tu receta.",
    publishedAt: "2026-05-13",
    readingMinutes: 5,
    alternateSlug: "cup-sizes-around-the-world",
    tags: ["medicion", "internacional", "fundamentos"],
    body: [
      {
        kind: "p",
        text:
          "\"1 taza de harina\". Las mismas tres palabras aparecen en libros de cocina por todo el mundo. Significan cantidades distintas de harina según dónde se escribió el libro. Algunas recetas sobreviven la diferencia. Otras no.",
      },
      {
        kind: "callout",
        text:
          "Tres tamaños principales de taza en cocina: estadounidense 236.59 ml (a veces redondeada a 240). Métrica 250 ml, usada en Australia, Canadá y Nueva Zelanda. Imperial 284 ml, la taza británica antigua, casi extinta pero aparece en libros británicos previos a 1971. La taza estadounidense es cerca de 6 por ciento más chica que la métrica y 17 por ciento más chica que la imperial.",
      },
      { kind: "h2", text: "La lista completa de tamaños de taza que existen" },
      {
        kind: "ul",
        items: [
          "Taza estadounidense (customary): 236.59 ml (el estándar real; muchas veces redondeado a 240).",
          "Taza métrica (Australia, Canadá, Nueva Zelanda, mucho de Europa): 250 ml.",
          "Taza imperial británica, antes de 1971: 284.13 ml. Rara en recetas modernas.",
          "Taza japonesa de arroz: 180 ml. Usada específicamente para arroceras.",
          "Taza japonesa de cocina: 200 ml. Usada en recetas japonesas en general.",
          "América Latina: varía; las recetas modernas usan 240 ml o saltan tazas y dan métrico.",
        ],
      },
      {
        kind: "image",
        alt: "Cinco tazas medidoras en fila mostrando EE. UU., métrica, imperial, japonesa de cocina y japonesa de arroz con etiquetas en mililitros.",
        placeholder:
          "Cinco tazas medidoras de vidrio en fila, cada una llena a su marca y etiquetada: EE. UU. (236), métrica (250), imperial (284), Japón cocina (200), Japón arroz (180). Luz cálida suave, fondo blanco.",
      },
      { kind: "h2", text: "Cómo saber qué taza pide tu receta" },
      {
        kind: "ol",
        items: [
          "País de origen. Sitios y libros estadounidenses, TV estadounidense: 236.59 ml. Sitios australianos, canadienses, neozelandeses: 250 ml. Recetas británicas modernas: casi siempre gramos.",
          "Dominio. .com, .net y los grandes sitios estadounidenses = taza estadounidense. .com.au, .co.nz, .ca = taza métrica. .co.uk = casi siempre gramos.",
          "Fecha de publicación. Libros británicos viejos (1971 o antes) usan la taza imperial. Las recetas británicas modernas no.",
          "Gramos al lado. Si la receta lista tazas y gramos, los gramos resuelven la duda. Úsalos.",
          "Tamaño de la cucharada. La cucharada australiana son 20 ml (4 cucharaditas). La estadounidense y la británica son 15 ml (3 cucharaditas). Si la receta usa cucharada australiana, probablemente usa taza australiana también.",
        ],
      },
      { kind: "h2", text: "Guía rápida de conversión" },
      {
        kind: "ul",
        items: [
          "1 taza estadounidense = 0.95 taza métrica = 0.83 taza imperial",
          "1 taza métrica = 1.06 tazas estadounidenses = 0.88 taza imperial",
          "1 taza imperial = 1.20 tazas estadounidenses = 1.14 taza métrica",
          "Si una receta pide 1 taza métrica y solo tienes tazas estadounidenses, usa 1 taza estadounidense más 1 cucharada (251 ml). Lo bastante cerca.",
          "Si una receta pide 1 taza imperial y solo tienes tazas estadounidenses, usa 1 taza estadounidense más 3 cucharadas más 1 cucharadita. O pesa.",
        ],
      },
      { kind: "h2", text: "Por qué esto importa en repostería" },
      {
        kind: "p",
        text:
          "La cocina perdona pequeñas diferencias de medida. Un 6 por ciento de diferencia de taza se pierde en la sopa. La repostería no perdona. Pasteles, galletas, panes y pastelería son química. Un 6 por ciento de diferencia en harina o azúcar aparece en textura, subida y sabor.",
      },
      {
        kind: "p",
        text:
          "Si horneas una receta internacional y no da gramos, busca qué taza usa el país y luego convierte. O salta la pregunta y pesa.",
      },
      { kind: "h2", text: "El atajo que le gana a cualquier taza" },
      {
        kind: "p",
        text:
          "Compra una báscula digital de cocina. 20 dólares. Botón de tara, precisión al gramo, 5 kg de capacidad. Nunca más vas a tener que saber qué taza pide tu receta. Un gramo es un gramo en todos los países.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas a gramos",
        href: "/es/tazas-a-gramos",
        description: "Elige tu alimento, elige tu taza, obtén los gramos.",
      },
    ],
  },
  {
    slug: "como-medir-la-harina-bien",
    locale: "es",
    title: "Cómo medir bien la harina (cuchareo y nivelado, no sumergir)",
    description:
      "Casi todos los errores con la harina vienen del cuchareo. Cuchareo y nivelado pone la cantidad correcta. Sumergir compacta de más. Aquí está el truco en 30 segundos.",
    publishedAt: "2026-05-12",
    readingMinutes: 4,
    alternateSlug: "how-to-measure-flour-correctly",
    tags: ["reposteria", "medicion", "fundamentos"],
    body: [
      {
        kind: "p",
        text:
          "Si tus galletas salieron secas o el bizcocho denso, lo primero a revisar es la harina. No la marca. La forma en que la mediste.",
      },
      {
        kind: "p",
        text:
          "La misma taza de una taza puede llevar 110 gramos o 145 gramos de harina. Es una diferencia del 30 por ciento en la misma taza. El autor de la receta eligió uno de esos números. Si tú usaste el otro, tu bizcocho sale distinto.",
      },
      { kind: "h2", text: "El arreglo son dos pasos" },
      {
        kind: "ol",
        items: [
          "Esponja la harina en la bolsa con una cuchara o tenedor. La harina se asienta con el tiempo. Aflójala primero.",
          "Cucharea la harina hacia la taza. No sumerjas la taza en la bolsa. Amontona la harina en la taza y luego nivela con el filo plano de un cuchillo.",
        ],
      },
      {
        kind: "p",
        text:
          "Ya está. La taza ahora tiene cerca de 120 gramos de harina común, el número que la mayoría de las recetas asume.",
      },
      { kind: "h2", text: "Por qué sumergir es el problema" },
      {
        kind: "p",
        text:
          "Cuando empujas la taza hacia abajo en la bolsa, la harina se compacta. El aire sale. La misma taza ahora lleva entre 130 y 145 gramos en vez de 120. Sin querer, agregaste de 10 a 25 gramos de harina. En una receta de una taza, es mucho. En una receta de tres tazas, es muchísimo.",
      },
      {
        kind: "p",
        text:
          "Demasiada harina seca las galletas. Endurece los panqués. Achica los bizcochos. Es la razón más común de que una receta que le funcionó al autor no te funciona a ti.",
      },
      { kind: "h2", text: "El mejor arreglo: usa báscula" },
      {
        kind: "p",
        text:
          "Una báscula digital de cocina cuesta menos que un juego de tazas medidoras. Se paga sola la primera vez que salva una tanda. Pones el bol en la báscula, das tara y echas harina hasta llegar al número. Sin cucharear, sin nivelar, sin adivinar.",
      },
      {
        kind: "callout",
        text:
          "1 taza de harina común son 120 gramos. 1/2 taza son 60 gramos. 2 tazas son 240 gramos. Guarda estos números; cubren casi toda la repostería casera.",
      },
      { kind: "h2", text: "Preguntas comunes" },
      { kind: "h3", text: "¿1 taza de harina son 125 o 120 gramos?" },
      {
        kind: "p",
        text:
          "Los dos números aparecen en distintos sitios. King Arthur Baking, la fuente más citada en Estados Unidos, usa 120 gramos. Algunas tablas viejas usan 125 o 128. La diferencia es del 4 al 7 por ciento, pequeña pero real. Si tu receta viene de King Arthur, usa 120.",
      },
      { kind: "h3", text: "¿Tamizar cambia el peso?" },
      {
        kind: "p",
        text:
          "Tamizar agrega aire. Una taza de harina tamizada pesa menos, entre 100 y 110 gramos. Si la receta dice \"1 taza de harina tamizada,\" significa tamiza primero, luego mide. \"1 taza de harina, tamizada\" significa mide primero, luego tamiza. El orden importa.",
      },
      { kind: "h3", text: "¿Y la harina de pan o la harina para pastel?" },
      {
        kind: "p",
        text:
          "La harina de pan es un poco más densa, 127 gramos por taza. La harina para pastel es más ligera, 114 gramos por taza. La integral son 113 gramos por taza. El método de cuchareo y nivelado sirve para todas.",
      },
      {
        kind: "link",
        text: "Abre el conversor de tazas de harina a gramos",
        href: "/es/harina-tazas-a-gramos",
        description: "Escribe las tazas, obtén los gramos. Con valores para común, de pan, para pastel e integral.",
      },
    ],
  },
  {
    slug: "por-que-compactar-azucar-morena",
    locale: "es",
    title: "Por qué debes compactar la azúcar morena (y qué pasa si no)",
    description:
      "Las tazas de azúcar morena asumen que la compactaste firme. Suelta pesa 30 por ciento menos y la receta sale rara. El arreglo en 60 segundos.",
    publishedAt: "2026-05-12",
    readingMinutes: 3,
    alternateSlug: "why-pack-brown-sugar",
    tags: ["reposteria", "medicion", "azucar"],
    body: [
      {
        kind: "p",
        text:
          "Si una receta dice \"1 taza de azúcar morena,\" casi siempre quiere decir 1 taza compactada. La azúcar morena no sale así de la bolsa, y ahí es donde se pierde la receta.",
      },
      { kind: "h2", text: "Qué significa compactada" },
      {
        kind: "p",
        text:
          "La azúcar morena tiene melaza, lo que la hace pegajosa y crea bolsas de aire cuando la cuchareas en la taza. Suelta, esas bolsas se quedan. Compactada, presionas la azúcar con el dorso de una cuchara o la mano hasta que las bolsas se cierran.",
      },
      {
        kind: "p",
        text:
          "Para revisar que la compactaste bien, voltea la taza. La azúcar morena debe mantener la forma de la taza un segundo antes de caer. Si cae de inmediato como una pila suelta, no estaba compactada.",
      },
      { kind: "h2", text: "Por qué importa" },
      {
        kind: "p",
        text:
          "La azúcar morena compactada pesa 213 gramos por taza estadounidense. Suelta pesa cerca de 145 gramos por taza. Es una diferencia del 30 por ciento. Si la receta quería 213 gramos y usaste 145, le quitaste casi un tercio del azúcar.",
      },
      {
        kind: "p",
        text:
          "Las galletas salen más secas. Las salsas saben menos dulces. Los bizcochos salen planos. La receta sigue funcionando, pero no es la receta que escribió el autor.",
      },
      { kind: "h2", text: "Los arreglos rápidos" },
      {
        kind: "ul",
        items: [
          "Usa una taza con paredes rectas (no una cuchara curva). Compacta mejor.",
          "Presiona con el dorso de una cuchara, el fondo de una taza más pequeña o los dedos limpios.",
          "Nivela el top con un cuchillo después de compactar.",
          "O sáltate todo eso y pesa: 213 gramos son 1 taza compactada.",
        ],
      },
      { kind: "h2", text: "¿Y si mi azúcar morena está dura?" },
      {
        kind: "p",
        text:
          "La azúcar morena dura sigue pesando lo mismo por taza una vez compactada, pero cuesta compactarla. Para ablandarla: pon una toalla de papel húmeda encima en un bol apto para microondas y calienta 20 segundos. O pon una rebanada de pan en la bolsa de un día para otro.",
      },
      {
        kind: "callout",
        text:
          "1 taza de azúcar morena compactada = 213 gramos. 1/2 taza compactada = 107 gramos. 2 tazas compactadas = 426 gramos.",
      },
      {
        kind: "link",
        text: "Abre el conversor de tazas de azúcar morena a gramos",
        href: "/es/azucar-morena-tazas-a-gramos",
        description: "Escribe tazas o gramos y mira el otro número. Valor compactado incluido.",
      },
    ],
  },
  {
    slug: "por-que-los-panaderos-pesan-ingredientes",
    locale: "es",
    title: "Por qué los panaderos pesan los ingredientes en vez de usar tazas",
    description:
      "La razón corta por la que los panaderos serios se cambiaron a gramos: la taza miente. Guía sobre la variación de volumen, el método de cuchareo y la herramienta que arregla ambos.",
    publishedAt: "2026-05-11",
    readingMinutes: 4,
    alternateSlug: "why-bakers-weigh-ingredients",
    tags: ["reposteria", "medicion", "fundamentos"],
    body: [
      {
        kind: "p",
        text:
          "Si hiciste la misma receta de galletas dos veces y salieron distintas, la harina es el primer lugar donde buscar. No la marca. La taza.",
      },
      {
        kind: "p",
        text:
          "Medir por taza es rápido, pero puede fallar entre 10 y 25 por ciento con alimentos secos. La misma taza puede llevar 110 gramos de harina o 145 gramos de harina. Depende de cómo cuchareas. Esa diferencia es la que separa una galleta suave de una dura.",
      },
      { kind: "h2", text: "Qué cambia entre dos tazas de lo mismo" },
      {
        kind: "ul",
        items: [
          "Cómo cuchareas. Sumergir la taza en la bolsa compacta más harina que llenarla con cuchara.",
          "Asentamiento. Una bolsa de harina que se sacudió al volver de la tienda queda más compacta que una que estuvo quieta.",
          "Humedad. La harina absorbe agua del aire en días lluviosos. Pesa un poco más en la misma taza.",
          "Marca. La harina de una marca puede tener un tamaño de grano distinto que otra.",
        ],
      },
      {
        kind: "p",
        text:
          "El azúcar perdona más porque los granos se acomodan igual cada vez. La azúcar morena es lo contrario: hay que apretarla con firmeza. El cacao se apelmaza. La miel se mide bien por volumen pero ensucia. La regla: cuanto más depende la receta de proporciones exactas, más importa el peso.",
      },
      { kind: "h2", text: "Por qué los gramos arreglan el problema" },
      {
        kind: "p",
        text:
          "Un gramo es un gramo. No le importa cómo cuchareaste, cómo se sacudió la bolsa ni qué clima hace. Cuando la receta dice 120 gramos de harina y pones 120 gramos en la báscula, tienes lo que el autor quería.",
      },
      {
        kind: "p",
        text:
          "Hay un segundo beneficio: el peso escala limpio. Duplicar una receta en tazas también duplica el error de cuchareo. Duplicar en gramos es un número por dos. Por eso nuestro escalador muestra fracciones limpias para tazas y decimales exactos para gramos. Si tienes báscula, usa los gramos.",
      },
      { kind: "h2", text: "La herramienta que arregla ambas cosas" },
      {
        kind: "p",
        text:
          "Una báscula digital de cocina, cerca de 20 a 40 dólares. Busca una con precisión al gramo, botón de tara (para poner el bol a cero), 5 kilos de capacidad y una superficie plana lo bastante grande para un bol de mezclar. Eso es todo. Sin app, sin Bluetooth, sin Wi-Fi.",
      },
      {
        kind: "callout",
        text:
          "Si tu receta da pesos, úsalos. Si solo da tazas, convierte con nuestra herramienta de tazas a gramos y anota los pesos en la receta para no volver a hacerlo.",
      },
      { kind: "h2", text: "Cuándo las tazas están bien" },
      {
        kind: "p",
        text:
          "Sopas, guisos, salteados, pasta, arroz: en cualquier plato donde un 10 por ciento de diferencia en sazón o almidón no lo rompe, las tazas están bien. Los panaderos sí se preocupan porque el pan, la pastelería, las galletas y los bizcochos son química. La química necesita proporciones.",
      },
      { kind: "h2", text: "Si solo vas a hacer una cosa" },
      {
        kind: "p",
        text:
          "Pesa la harina. Tiene la mayor diferencia entre volumen y peso de cualquier alimento común. El error crece en cada tanda. La sal y el azúcar suelen estar bien en tazas para la repostería diaria. Las grandes ganancias están en la harina.",
      },
      {
        kind: "link",
        text: "Abrir el escalador de recetas",
        href: "/es/escalador-de-recetas",
        description: "Ajusta una receta a tus porciones con fracciones limpias.",
      },
    ],
  },
];
