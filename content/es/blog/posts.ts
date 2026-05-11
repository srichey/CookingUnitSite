import type { BlogPost } from "@/lib/blog";

export const postsEs: BlogPost[] = [
{
    slug: "por-que-bascula-y-taza-no-coinciden",
    locale: "es",
    author: "S. Richey",
    title: "Por qué tu báscula y tu taza medidora no coinciden",
    description:
      "Mediste 1 taza de harina y la pesaste. La báscula marcó 145 gramos. Tu receta quería 120. Las dos herramientas están bien. La taza solo llevaba más de lo que la receta esperaba.",
    publishedAt: "2026-05-14",
    readingMinutes: 4,
    alternateSlug: "why-scale-and-cup-disagree",
    tags: ["medicion", "utensilios", "reposteria"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "America's Test Kitchen: Why you should weigh your baking ingredients", url: "https://www.americastestkitchen.com/articles/2095-why-you-should-weigh-your-baking-ingredients" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Mediste 1 taza de harina. La pusiste en la báscula para revisar. La báscula marcó 145 gramos. La receta quería 120 gramos. Ninguna de las dos está rota. Las dos están diciendo la verdad. La diferencia de dos números es todo el problema con medir en taza.",
      },
      {
        kind: "callout",
        text:
          "Una taza medidora te dice volumen. Una báscula te dice peso. La misma taza de harina puede pesar de 110 a 145 gramos según cómo cuchareaste. El autor de la receta eligió uno de esos números, y no hay forma de saber cuál sin pesar. La báscula siempre gana en precisión.",
      },
      { kind: "h2", text: "Por qué dos tazas de lo mismo pesan distinto" },
      {
        kind: "p",
        text:
          "Tres cosas cambian cuánto pesa de verdad tu taza de harina (o azúcar, avena, cacao):",
      },
      {
        kind: "ol",
        items: [
          "Cómo cuchareas. Sumergir la taza directo en la bolsa compacta el alimento, sumando de 10 a 25 por ciento más que cuchararla suave.",
          "Qué tan asentado está el alimento. Una bolsa de harina recién sacudida en el carro se acomoda más densa que una que estuvo quieta una semana.",
          "Humedad. La harina, el cacao y la azúcar morena absorben humedad del aire. La misma taza pesa más en un día húmedo.",
        ],
      },
      { kind: "h2", text: "¿Qué número de peso es el \"correcto\"?" },
      {
        kind: "p",
        text:
          "El que el autor de la receta usó. King Arthur Baking publica 120 gramos por taza de harina común. America's Test Kitchen publica 142. Los dos son correctos para sus propias cocinas; solo miden distinto. Cuando dudes, revisa la tabla de pesos de ingredientes del sitio de la receta.",
      },
      {
        kind: "image",
        alt: "Una taza medidora de harina junto a una báscula que marca 145 gramos, con una nota que dice que la receta quería 120 gramos.",
        placeholder:
          "Foto plana: una taza medidora de metal llena de harina junto a una báscula digital marcando 145 g. Una nota cerca dice 'La receta pedía 120 g'. Luz natural suave.",
      },
      { kind: "h2", text: "Cuándo importa la diferencia y cuándo no" },
      { kind: "h3", text: "No importa" },
      {
        kind: "ul",
        items: [
          "Sopas, guisos y salsas. Una cucharada de diferencia se pierde en la olla.",
          "Arroz y pasta. El agua de cocción absorbe la diferencia.",
          "Salteados y cocina casual. Prueba, no midas.",
        ],
      },
      { kind: "h3", text: "Importa mucho" },
      {
        kind: "ul",
        items: [
          "Galletas. Un error de 20 gramos de harina vuelve galletas suaves en pucks de hockey.",
          "Pasteles. Demasiada harina mata la subida. El pastel sale bajo y seco.",
          "Pan. El porcentaje de hidratación importa. Harina mal pesada desbalancea la masa.",
          "Pastelería. La proporción grasa-harina decide la hojaldra.",
        ],
      },
      { kind: "h2", text: "La forma más rápida de cerrar la diferencia" },
      {
        kind: "p",
        text:
          "Una báscula digital de cocina. Cerca de 20 dólares, dura años, termina con la discusión. Pones el bol en la báscula, das tara, viertes hasta ver el número correcto. Sin técnica de cuchareo, sin asentamiento, sin preocupación de humedad. La báscula es la mejora de precisión más grande que puedes hacer en la cocina.",
      },
      { kind: "h2", text: "Si no quieres báscula" },
      {
        kind: "p",
        text:
          "Usa el método de cuchareo y nivelado siempre igual. Esponja la harina en la bolsa primero, cuchareala en la taza, nivela con un cuchillo. No golpees ni asientes. Mismo método cada vez. Vas a seguir un poco lejos de la intención del autor, pero al menos tus propias horneadas van a ser consistentes entre tandas.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas a gramos",
        href: "/es/tazas-a-gramos",
        description: "Mira los pesos de receta para cualquier alimento común, por taza.",
      },
    ],
  },
{
    slug: "recetas-metricas-con-tazas-estadounidenses",
    locale: "es",
    author: "S. Richey",
    title: "Cómo leer una receta métrica cuando solo tienes tazas estadounidenses",
    description:
      "Las recetas europeas y australianas dan gramos y mililitros. La cocina estadounidense da tazas y cucharadas. Aquí está la guía para traducir sin arruinar la receta.",
    publishedAt: "2026-05-11",
    readingMinutes: 5,
    alternateSlug: "reading-metric-recipes-with-us-cups",
    tags: ["medicion", "internacional", "fundamentos"],
    sources: [
      { label: "NIST Office of Weights and Measures", url: "https://www.nist.gov/pml/owm" },
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Encontraste una receta francesa perfecta de tarta. La harina son 250 gramos. La mantequilla son 200 gramos. El horno dice 180°C. Ninguno de esos números coincide con lo que tienes en tu cocina. Unas pocas conversiones simples te llevan a una receta en tazas estadounidenses que sí puedes seguir.",
      },
      {
        kind: "callout",
        text:
          "La traducción más rápida: compra una báscula. 250 gramos de harina son 250 gramos sin importar qué taza tengas. Si no, aprende cinco conversiones y puedes leer casi cualquier receta europea: 1 taza estadounidense = 237 ml, 1 barra de mantequilla = 113 g, 180°C = 350°F, 200°C = 400°F y 1 cucharada = 15 ml.",
      },
      { kind: "h2", text: "Las cinco conversiones que cubren casi todo" },
      {
        kind: "ol",
        items: [
          "Harina: 120 gramos = 1 taza estadounidense. Entonces 250 g harina ÷ 120 = cerca de 2 tazas más 1 cucharada.",
          "Azúcar: 200 gramos = 1 taza estadounidense. Entonces 100 g azúcar = 1/2 taza. Entonces 250 g azúcar = 1 1/4 tazas.",
          "Mantequilla: 113 gramos = 1 barra estadounidense (1/2 taza). Entonces 200 g mantequilla = cerca de 1 3/4 barras, o 7/8 de taza.",
          "Horno: 180°C = 350°F. 200°C = 400°F. 220°C = 425°F. (Fórmula: C × 1.8 + 32 = F.)",
          "Volumen: 1 taza estadounidense = 237 ml. 1 cucharada = 15 ml. 1 cucharadita = 5 ml.",
        ],
      },
      { kind: "h2", text: "Los líquidos son más fáciles que los sólidos" },
      {
        kind: "p",
        text:
          "Los mililitros son espacio, igual que las tazas. La conversión es fija para todos los líquidos:",
      },
      {
        kind: "ul",
        items: [
          "60 ml = 1/4 taza",
          "120 ml = 1/2 taza",
          "180 ml = 3/4 taza",
          "240 ml = 1 taza (redondeado; real 237 ml)",
          "500 ml = 2 tazas y un poco más",
          "1 litro = 4 tazas y un poco más",
        ],
      },
      { kind: "h2", text: "Los sólidos son más complicados" },
      {
        kind: "p",
        text:
          "Los gramos miden peso. Las tazas miden espacio. Cada alimento tiene su propio peso por taza:",
      },
      {
        kind: "ul",
        items: [
          "Harina común: 120 g por taza",
          "Harina de pan: 127 g por taza",
          "Azúcar blanca: 200 g por taza",
          "Azúcar morena (compactada): 213 g por taza",
          "Mantequilla: 227 g por taza (2 barras)",
          "Avena en hojuelas: 90 g por taza",
          "Cacao en polvo: 85 g por taza",
          "Miel: 336 g por taza",
        ],
      },
      {
        kind: "image",
        alt: "Una receta francesa escrita en gramos junto a un juego de tazas medidoras estadounidenses sobre la misma mesa.",
        placeholder:
          "Una impresión limpia de una receta francesa de tarta con medidas métricas pegada al lado de un juego de tazas medidoras estadounidenses anidadas y una báscula digital. Pie: 'Dos sistemas, una cocina.'",
      },
      { kind: "h2", text: "Cuando la receta dice \"taza métrica\"" },
      {
        kind: "p",
        text:
          "Una \"1 taza\" australiana o canadiense son 250 ml, no la estadounidense de 237 ml. Es 6 por ciento de diferencia. Para 1 taza métrica, usa 1 taza estadounidense más 1 cucharada. La cuenta: 1 taza estadounidense (237 ml) + 1 cda (15 ml) = 252 ml, lo bastante cerca de 250.",
      },
      { kind: "h2", text: "Atajos de temperatura del horno" },
      {
        kind: "ul",
        items: [
          "150°C = 300°F (baja)",
          "160°C = 325°F (baja)",
          "175°C = 350°F (la más usada para hornear)",
          "180°C = 350°F (lo bastante cerca)",
          "190°C = 375°F",
          "200°C = 400°F",
          "220°C = 425°F",
          "230°C = 450°F",
        ],
      },
      { kind: "h2", text: "Cuando dudes, pesa" },
      {
        kind: "p",
        text:
          "Una báscula digital de cocina termina con la pregunta para sólidos. La receta dice 250 gramos de harina, pones 250 gramos en la báscula, listo. Sin confusión de tazas, sin cuentas, sin calculadora. Una báscula simple cuesta menos que un juego de tazas y dura 10 años.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de mililitros a tazas",
        href: "/es/mililitros-a-tazas",
        description: "Conversiones rápidas de líquidos entre métrico y tazas estadounidenses.",
      },
    ],
  },
{
    slug: "como-medir-miel-pegajosa",
    locale: "es",
    author: "S. Richey",
    title: "Cómo medir miel pegajosa sin perder la mitad en la taza",
    description:
      "La miel se pega a la taza. Puedes perder 10 por ciento antes de que llegue al bol. Una capa fina de aceite lo arregla. Pesar lo arregla mejor.",
    publishedAt: "2026-05-09",
    readingMinutes: 3,
    alternateSlug: "how-to-measure-sticky-honey",
    tags: ["miel", "medicion", "reposteria"],
    sources: [
      { label: "National Honey Board: Science of honey", url: "https://www.honey.com/honey-industry/science-of-honey" },
      { label: "USDA FoodData Central: Honey", url: "https://fdc.nal.usda.gov/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Vertiste 1 taza de miel en la taza medidora. La inclinaste sobre el bol. Una capa gruesa de miel se quedó dentro. Tu receta perdió 10 por ciento de miel, y esa era la dulzura que necesitaba.",
      },
      {
        kind: "callout",
        text:
          "1 taza estadounidense de miel pesa 336 gramos. La forma más limpia de medir: pesa la miel directo. La segunda más limpia: unta la taza o cuchara medidora con una capa fina de spray de cocina o aceite vegetal primero. La miel se desliza limpia.",
      },
      { kind: "h2", text: "Por qué la miel se pega" },
      {
        kind: "p",
        text:
          "La miel es casi pura azúcar disuelta en un poco de agua. Su tensión superficial jala fuerte contra cualquier superficie seca que toca. Plástico, vidrio, metal: todos sujetan la miel. Agrega una película de aceite entre la taza y la miel, y la tensión superficial se rompe. La miel se suelta.",
      },
      { kind: "h2", text: "Los tres métodos que funcionan" },
      { kind: "h3", text: "1. Método de spray o aceite (por volumen)" },
      {
        kind: "p",
        text:
          "Rocía ligeramente el interior de la taza con spray de cocina. O frota unas gotas de aceite vegetal por dentro con una toalla de papel. Vierte la miel. Inclina hacia el bol. Casi toda sale.",
      },
      { kind: "h3", text: "2. Método de la báscula (el mejor)" },
      {
        kind: "p",
        text:
          "Pon tu bol de mezclar sobre una báscula. Dale tara. Vierte miel del frasco directo al bol hasta ver los gramos correctos. Sin taza medidora. Sin miel pegada.",
      },
      { kind: "h3", text: "3. El truco del otro líquido" },
      {
        kind: "p",
        text:
          "Si la receta también pide aceite o mantequilla, mide el aceite o la mantequilla primero. La taza ya queda untada. Vierte la miel después; sale limpia sin preparación extra.",
      },
      {
        kind: "image",
        alt: "Dos tazas medidoras lado a lado: una con miel pegada a las paredes y otra que salió limpia después de rociarla con spray de cocina.",
        placeholder:
          "Dos tazas medidoras de vidrio sobre una mesa de madera. Izquierda: miel residual cubriendo el interior. Derecha: casi vacía, solo una película fina. Pie: 'Taza normal pierde 10%. Taza untada gana.'",
      },
      { kind: "h2", text: "Miel cristalizada" },
      {
        kind: "p",
        text:
          "La miel se cristaliza cuando se queda en lugares frescos. Sigue siendo buena. Para volverla líquida, pon el frasco en un bol con agua tibia (no hirviendo) durante 10 minutos. No la calientes en microondas a alta potencia; se quema.",
      },
      { kind: "h2", text: "Pesos rápidos" },
      {
        kind: "ul",
        items: [
          "1 cucharada de miel = 21 gramos",
          "1/4 de taza de miel = 84 gramos",
          "1/2 taza de miel = 168 gramos",
          "1 taza de miel = 336 gramos",
          "2 tazas de miel = 672 gramos (cerca de 1.5 libras)",
        ],
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas de miel a gramos",
        href: "/es/miel-tazas-a-gramos",
        description: "Convierte cualquier cantidad de miel entre tazas y gramos.",
      },
    ],
  },
{
    slug: "levadura-sobres-vs-cucharadas",
    locale: "es",
    author: "S. Richey",
    title: "Levadura: por qué 1 sobre no es 1 cucharada",
    description:
      "Un sobre estándar de levadura son 7 gramos o cerca de 2 y 1/4 cucharaditas. Es 3/4 de cucharada, no una entera. Usar una cucharada completa agrega 33 por ciento más levadura.",
    publishedAt: "2026-05-07",
    readingMinutes: 4,
    alternateSlug: "yeast-packets-vs-tablespoons",
    tags: ["levadura", "reposteria", "medicion", "pan"],
    sources: [
      { label: "Fleischmann's Yeast: Baking with yeast", url: "https://www.fleischmannsyeast.com/baking-with-yeast/" },
      { label: "Red Star Yeast: Baking lessons", url: "https://redstaryeast.com/yeast-baking-lessons/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "La receta de pan dice \"1 sobre de levadura\". Abriste el armario y encontraste un frasco de levadura, no sobres. Mediste una cucharada, porque era la medida más cercana que recordabas. El pan subió muy rápido, supo a levadura y se aplastó en el horno. Usaste 33 por ciento de más.",
      },
      {
        kind: "callout",
        text:
          "1 sobre estándar de levadura = 7 gramos = 2 y 1/4 cucharaditas = 3/4 de cucharada. NO una cucharada entera. Una cucharada llena de levadura son 9 gramos, cerca de 33 por ciento más que un sobre. La cuenta: 1 cucharadita de levadura pesa 3 gramos. 3 cucharaditas hacen una cucharada, que hace 9 gramos.",
      },
      { kind: "h2", text: "Las cuentas del sobre, escritas" },
      {
        kind: "ul",
        items: [
          "1 sobre de levadura = 7 g = 2 1/4 cdtas = 1/4 oz",
          "1 cdta de levadura = 3 g (cerca de)",
          "1 cda de levadura = 9 g = 1 1/3 sobres",
          "2 sobres = 14 g = 4 1/2 cdtas = 1 1/2 cdas",
          "3 sobres = 21 g = cerca de 1 oz (medio tira de sobres)",
        ],
      },
      { kind: "h2", text: "Levadura seca activa vs instantánea: no las confundas" },
      {
        kind: "p",
        text:
          "Dos tipos principales de levadura llenan los armarios caseros:",
      },
      { kind: "h3", text: "Levadura seca activa" },
      {
        kind: "p",
        text:
          "Granos más grandes. Hay que \"activarla\" en agua tibia con azúcar antes de mezclarla en la masa. La receta casi siempre dice \"disuelve en agua tibia 5 minutos\". Si hace espuma, la levadura está viva.",
      },
      { kind: "h3", text: "Levadura instantánea (a veces llamada rapid-rise o de máquina de pan)" },
      {
        kind: "p",
        text:
          "Granos más pequeños. Se mezcla directo con la harina, sin activar. Actúa cerca de 25 por ciento más rápido que la seca activa. Cómoda para repostería manual.",
      },
      { kind: "h3", text: "Regla de cambio" },
      {
        kind: "p",
        text:
          "Para usar seca activa donde la receta pide instantánea, multiplica por 1.25 (usa 25 por ciento más). Para usar instantánea donde la receta pide seca activa, multiplica por 0.75 (usa 25 por ciento menos). Por peso, son lo bastante cercanas en cantidades pequeñas que 1 sobre de cualquiera sirve en la mayoría de recetas.",
      },
      {
        kind: "image",
        alt: "Un sobre de levadura de 7 gramos, una cucharadita con levadura y una báscula marcando 7 gramos de levadura, todos sobre una tabla de madera.",
        placeholder:
          "Foto plana: un sobre de levadura (estilo Fleischmann's rojo y amarillo), una cucharadita con levadura encima y una báscula digital marcando 7 g. Pie: 'Un sobre, tres formas de medir.'",
      },
      { kind: "h2", text: "Levadura fresca (cake yeast)" },
      {
        kind: "p",
        text:
          "Menos común en cocinas caseras. Se vende como un bloque pequeño húmedo en la sección refrigerada. La conversión: 1 sobre de levadura seca = cerca de 17 gramos de levadura fresca. La cuenta es 1:2.5 (seca a fresca) por peso. La fresca dura 2 a 3 semanas; la seca dura un año en el refri.",
      },
      { kind: "h2", text: "Guardar levadura para que viva" },
      {
        kind: "ul",
        items: [
          "Sobres cerrados: guarda a temperatura ambiente hasta la fecha de vencimiento del paquete.",
          "Frascos abiertos o tiras: pasa a un recipiente limpio hermético, guarda en el refri hasta 4 meses, o en congelador hasta un año.",
          "Siempre activa la levadura vieja (agua tibia + pizca de azúcar, espera 5 minutos por espuma). Si no hace espuma, está muerta.",
        ],
      },
      {
        kind: "link",
        text: "Abrir el conversor de cucharadas a tazas",
        href: "/es/cucharadas-a-tazas",
        description: "Convierte cucharadas, cucharaditas, tazas y mililitros.",
      },
    ],
  },
{
    slug: "avena-en-hojuelas-instantanea-cortada",
    locale: "es",
    author: "S. Richey",
    title: "Avena en hojuelas, instantánea y cortada: mismo nombre, distinto peso",
    description:
      "La avena en hojuelas y la instantánea pesan cerca de 90 gramos por taza. La avena cortada al gravado pesa 180 gramos por taza. Cambiar una por otra en la receta cambia todo.",
    publishedAt: "2026-05-05",
    readingMinutes: 4,
    alternateSlug: "rolled-vs-quick-vs-steel-cut-oats",
    tags: ["avena", "reposteria", "medicion"],
    sources: [
      { label: "Quaker Oats: Oats and grains", url: "https://www.quakeroats.com/oats-do-more/oats-and-grains" },
      { label: "USDA FoodData Central", url: "https://fdc.nal.usda.gov/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "El supermercado tiene cuatro estantes de avena. Todas dicen \"avena\" en el frente. La receta solo dice \"1 taza de avena\". Elegir mal puede hacer galletas que crujen como grava o avena de la noche que se queda cruda.",
      },
      {
        kind: "callout",
        text:
          "1 taza de avena en hojuelas (tradicional) son cerca de 90 gramos. La avena instantánea pesa lo mismo. 1 taza de avena cortada al gravado, cruda, son cerca de 180 gramos, el doble, porque los pedazos se acomodan más juntos. La avena instantánea de sobres queda en medio, cerca de 80 gramos por taza.",
      },
      { kind: "h2", text: "Qué es realmente cada tipo" },
      { kind: "h3", text: "Avena en hojuelas (tradicional)" },
      {
        kind: "p",
        text:
          "Granos enteros de avena al vapor y aplanados. Se ven como monedas. Tardan de 5 a 10 minutos en cocinarse. Mejor para galletas de avena, granola, crumbles y avena de la noche. 90 gramos por taza.",
      },
      { kind: "h3", text: "Avena instantánea (de cocción rápida)" },
      {
        kind: "p",
        text:
          "Avena en hojuelas cortada más pequeña para cocinarse en 1 a 3 minutos. Mismo peso por taza que las hojuelas. Da una textura más suave, como atole, al hornear. Casi siempre puedes cambiarla por hojuelas, pero las galletas y la granola quedan menos masticables.",
      },
      { kind: "h3", text: "Avena cortada al gravado (Irish oats)" },
      {
        kind: "p",
        text:
          "Granos enteros picados con cuchillas de acero, no aplanados. Parecen arroz grueso. Tiempo de cocción: 20 a 30 minutos. Se usa para avena en estufa, avena salada y platos estilo risotto. Casi nunca se usa en repostería.",
      },
      { kind: "h3", text: "Avena instantánea (de sobre)" },
      {
        kind: "p",
        text:
          "Precocida, secada y aplanada más fina aún. Lista en 1 minuto con agua caliente. Casi siempre viene en sobres saborizados de una porción. No se usa en repostería; la textura se deshace.",
      },
      {
        kind: "image",
        alt: "Cuatro boles pequeños en fila, cada uno con un tipo distinto de avena (hojuelas, instantánea, cortada, de sobre), etiquetados por nombre y peso por taza.",
        placeholder:
          "Cuatro boles blancos sobre una tabla de madera. Cada uno con una taza de avena. Etiquetas: 'Hojuelas 90 g', 'Instantánea 90 g', 'Cortada 180 g', 'De sobre 80 g'. Luz lateral muestra las distintas texturas.",
      },
      { kind: "h2", text: "Por qué la cortada pesa el doble" },
      {
        kind: "p",
        text:
          "Las hojuelas y la instantánea son casi puro aire. Cada hojuela mantiene su forma, dejando huecos. La cortada es grano sólido picado en pedazos, con mucho menos aire entre ellos. La misma taza guarda casi el doble de masa.",
      },
      { kind: "h2", text: "¿Puedo cambiarlas en una receta?" },
      {
        kind: "ul",
        items: [
          "Hojuelas ↔ instantánea: casi siempre sí. Las galletas quedan menos masticables con la instantánea. La granola queda más fina. La avena de la noche funciona con cualquiera.",
          "Hojuelas → cortada en repostería: no. La cortada necesita cocción para ablandarse. Lo horneado va a crujir.",
          "Cortada → hojuelas en avena de estufa: sí, pero el tiempo baja de 25 minutos a 10. La textura va de masticable a cremosa.",
          "De sobre → cualquier cosa en repostería: no. La textura es muy suave y se deshace.",
        ],
      },
      { kind: "h2", text: "¿Y la avena sin gluten?" },
      {
        kind: "p",
        text:
          "Mismos pesos por taza. La avena sin gluten es avena normal cultivada y procesada separada del trigo, así que el peso y la textura coinciden con la avena estándar del mismo corte.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas de avena a gramos",
        href: "/es/avena-tazas-a-gramos",
        description: "Convierte cualquier tipo de avena entre tazas y gramos.",
      },
    ],
  },
{
    slug: "como-partir-receta-con-un-huevo",
    locale: "es",
    author: "S. Richey",
    title: "Cómo partir una receta con un solo huevo",
    description:
      "La mitad de un huevo son 25 gramos o 2 cucharadas. Cásalo, bátelo hasta que esté liso y usa la mitad. Guarda el resto para la tortilla de mañana.",
    publishedAt: "2026-05-03",
    readingMinutes: 4,
    alternateSlug: "halve-recipe-with-one-egg",
    tags: ["ajuste de recetas", "huevos", "reposteria"],
    sources: [
      { label: "King Arthur Baking: How to reduce a recipe", url: "https://www.kingarthurbaking.com/blog/2020/11/23/how-to-reduce-a-recipe" },
      { label: "Food Network: How to halve an egg for baking", url: "https://www.foodnetwork.com/how-to/packages/food-network-essentials/how-to-halve-an-egg-for-baking" },
    ],
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
    slug: "duplicar-receta-tiempo-coccion",
    locale: "es",
    author: "S. Richey",
    title: "Duplicar una receta no duplica el tiempo de cocción",
    description:
      "Cuando duplicas una receta, la comida no necesita el doble de tiempo en el horno. Suma 25 a 30 por ciento, vigila de cerca y usa termómetro.",
    publishedAt: "2026-05-01",
    readingMinutes: 4,
    alternateSlug: "doubling-recipe-cook-time",
    tags: ["ajuste de recetas", "reposteria", "tiempo de coccion"],
    sources: [
      { label: "America's Test Kitchen: No, you can't always just double a recipe", url: "https://www.americastestkitchen.com/articles/8047-no-you-cant-always-just-double-a-recipe" },
      { label: "KitchenAid: Doubling a recipe", url: "https://www.kitchenaid.com/pinch-of-help/countertop-appliances/doubling-a-recipe.html" },
    ],
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
    slug: "por-que-cacao-en-polvo-es-dificil-medir",
    locale: "es",
    author: "S. Richey",
    title: "Por qué el cacao en polvo es tan difícil de medir en taza",
    description:
      "El cacao es ligero, esponjoso y se apelmaza. Una taza sumergida puede pesar entre 75 y 100 gramos. Aquí está el porqué, y cómo obtener un número confiable.",
    publishedAt: "2026-04-28",
    readingMinutes: 4,
    alternateSlug: "why-cocoa-powder-is-hard-to-measure",
    tags: ["reposteria", "cacao", "medicion"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "Wikipedia: Dutch process cocoa", url: "https://en.wikipedia.org/wiki/Dutch_process_cocoa" },
    ],
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
    slug: "tamanos-de-taza-en-el-mundo",
    locale: "es",
    author: "S. Richey",
    title: "Taza imperial vs métrica vs estadounidense: ¿cuál pide tu receta?",
    description:
      "Hay al menos tres tamaños de taza en cocina. Estadounidense 236.59 ml. Métrica 250 ml. Imperial 284 ml. Cómo identificar cuál quiere tu receta.",
    publishedAt: "2026-04-25",
    readingMinutes: 5,
    alternateSlug: "cup-sizes-around-the-world",
    tags: ["medicion", "internacional", "fundamentos"],
    sources: [
      { label: "NIST Office of Weights and Measures", url: "https://www.nist.gov/pml/owm" },
      { label: "Wikipedia: Cup (unit)", url: "https://en.wikipedia.org/wiki/Cup_(unit)" },
    ],
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
    slug: "horno-conveccion-bajar-25-grados",
    locale: "es",
    author: "S. Richey",
    title: "Horno de convección: baja 25°F (y aquí está el porqué)",
    description:
      "El ventilador de convección mueve aire caliente sobre tu comida. Cocina más rápido y más caliente al mismo número del dial. Baja la temperatura 25°F o acorta el tiempo cerca de 30 por ciento.",
    publishedAt: "2026-04-22",
    readingMinutes: 4,
    alternateSlug: "convection-oven-25-degrees",
    tags: ["horno", "reposteria", "temperatura"],
    sources: [
      { label: "America's Test Kitchen: Convection oven cooking", url: "https://support.americastestkitchen.com/hc/en-us/articles/22917926810779-Convection-Oven-Cooking" },
      { label: "GE Appliances: Adapting recipes for convection cooking", url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=18176" },
    ],
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
    slug: "mantequilla-europea-vs-barras-estadounidenses",
    locale: "es",
    author: "S. Richey",
    title: "Mantequilla europea vs barras estadounidenses: el problema de 250 g vs 113 g",
    description:
      "Una barra estadounidense son 113 gramos. Un bloque europeo son 250 gramos. No se dividen parejo y la grasa de leche cambia. Cómo intercambiar sin arruinar la receta.",
    publishedAt: "2026-04-20",
    readingMinutes: 5,
    alternateSlug: "european-butter-vs-american-sticks",
    tags: ["mantequilla", "reposteria", "internacional"],
    sources: [
      { label: "USDA AMS: Butter grading standards", url: "https://www.ams.usda.gov/grades-standards/butter-standard" },
      { label: "European Commission Regulation 1308/2013 (butter standards)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32013R1308" },
    ],
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
    slug: "250-ml-no-es-1-taza-estadounidense",
    locale: "es",
    author: "S. Richey",
    title: "La taza de 250 ml no es la taza estadounidense (el truco con recetas australianas)",
    description:
      "Una taza métrica australiana son 250 ml. Una taza estadounidense son 236.59 ml. La diferencia del 6 por ciento puede arruinar un pastel de tanda pequeña. Esto es lo que debes saber.",
    publishedAt: "2026-04-17",
    readingMinutes: 4,
    alternateSlug: "250-ml-is-not-1-us-cup",
    tags: ["medicion", "internacional", "reposteria"],
    sources: [
      { label: "NIST Handbook 44 (US customary units)", url: "https://www.nist.gov/pml/owm/publications/handbook-44" },
      { label: "Wikipedia: Cup (unit)", url: "https://en.wikipedia.org/wiki/Cup_(unit)" },
    ],
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
    slug: "azucar-glas-vs-blanca-por-peso",
    locale: "es",
    author: "S. Richey",
    title: "La azúcar glas pesa la mitad que la blanca (por taza)",
    description:
      "1 taza de azúcar blanca pesa 200 gramos. 1 taza de azúcar glas pesa 113 gramos. Cambiarlas por volumen va a endulzar de más o de menos tu receta.",
    publishedAt: "2026-04-14",
    readingMinutes: 4,
    alternateSlug: "powdered-sugar-vs-granulated-by-weight",
    tags: ["azucar", "reposteria", "medicion"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "USDA FoodData Central: Sugars", url: "https://fdc.nal.usda.gov/" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Una receta pide 1 taza de azúcar. Solo tienes azúcar glas en el armario. Encoges los hombros y la viertes. Las galletas salen planas y poco dulces. La taza se veía igual, pero las cuentas no.",
      },
      {
        kind: "callout",
        text:
          "1 taza estadounidense de azúcar blanca granulada = 200 gramos. 1 taza estadounidense de azúcar glas (de repostero) = 113 gramos. La misma taza, pero la glas pesa 43 por ciento menos porque las partículas son más pequeñas y tienen aire. No puedes cambiarlas por volumen.",
      },
      { kind: "h2", text: "Por qué la misma taza pesa tan distinto" },
      {
        kind: "p",
        text:
          "La azúcar granulada tiene cristales uniformes y densos. Se acomodan apretados en la taza. La azúcar glas es azúcar granulada molida hasta polvo fino, luego mezclada con 3 por ciento de almidón de maíz para que no se apelmaze. El polvo fino atrapa mucho aire. Una taza esponjosa pesa menos que una de cristales.",
      },
      { kind: "h2", text: "Cuándo el cambio es posible (y cuándo no)" },
      { kind: "h3", text: "Por peso: sí, a veces" },
      {
        kind: "p",
        text:
          "Si pesas, puedes cambiar glas por blanca por peso en algunas recetas. Glaseados, betunes y para espolvorear esperan glas. Pasteles y galletas esperan blanca para la estructura. La azúcar hace trabajos distintos en cada caso.",
      },
      { kind: "h3", text: "Por volumen: casi nunca" },
      {
        kind: "p",
        text:
          "Si cambias 1 taza de blanca por 1 taza de glas, acabas de quitar 43 por ciento del azúcar. Las galletas salen más secas y menos dulces. Las galletas y pasteles necesitan ese peso de azúcar para extenderse, dorarse y quedar tiernos.",
      },
      {
        kind: "image",
        alt: "Dos tazas lado a lado, una rebosante de azúcar blanca granulada y otra con azúcar glas esponjosa, ambas sobre una báscula que marca pesos diferentes.",
        placeholder:
          "Dos tazas de vidrio sobre una báscula. Izquierda: azúcar blanca, báscula marca 200 g. Derecha: azúcar glas, báscula marca 113 g. Llenas a la misma altura. Pie: 'Misma taza, la mitad del peso.'",
      },
      { kind: "h2", text: "Las tres azúcares blancas por taza" },
      {
        kind: "ul",
        items: [
          "Azúcar blanca granulada: 200 g por taza. La estándar para casi toda la repostería.",
          "Azúcar glas (de repostero): 113 g por taza. Se usa en glaseados, betunes, royal icing y para espolvorear.",
          "Azúcar superfina (caster): cerca de 195 g por taza. Queda entre las dos. Se usa en merengues y bizcochos esponjosos porque se disuelve más rápido que la granulada.",
        ],
      },
      { kind: "h2", text: "Si tu receta dice glas y solo tienes granulada" },
      {
        kind: "p",
        text:
          "Procesa azúcar granulada en un molinillo de café limpio o procesador de alimentos por 30 segundos para hacer una glas casera. Agrega 1 cucharadita de almidón de maíz por taza para imitar el antiapelmazante. La textura queda cerca pero no exacta; no la uses para glaseados delicados.",
      },
      { kind: "h2", text: "Si tu receta dice granulada y solo tienes glas" },
      {
        kind: "p",
        text:
          "No hay cambio limpio. La azúcar glas tiene almidón de maíz, que cambia la textura de galletas y pasteles. Mejor espera a tener la azúcar correcta o elige una receta distinta que use azúcar glas (como shortbread o polvorones).",
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas de azúcar a gramos",
        href: "/es/azucar-tazas-a-gramos",
        description: "Convierte cualquier azúcar entre tazas y gramos. Elige el tipo.",
      },
    ],
  },
{
    slug: "tazas-medidoras-liquidos-vs-secos",
    locale: "es",
    author: "S. Richey",
    title: "Tazas medidoras de líquidos vs de secos: cuándo importa la diferencia",
    description:
      "Una taza medidora de líquidos y una de secos guardan el mismo volumen. No son la misma herramienta. Usar la equivocada en repostería desbalancea la receta.",
    publishedAt: "2026-04-12",
    readingMinutes: 4,
    alternateSlug: "wet-vs-dry-measuring-cups",
    tags: ["medicion", "reposteria", "utensilios"],
    sources: [
      { label: "King Arthur Baking: When to use dry vs liquid measuring cups", url: "https://www.kingarthurbaking.com/blog/2025/07/28/dry-vs-liquid-measuring-cups" },
      { label: "America's Test Kitchen: Dry versus liquid measuring cups", url: "https://www.americastestkitchen.com/articles/5516-do-you-really-have-to-use-different-measuring-cups-for-liquid-and-dry-ingredients" },
    ],
    body: [
      {
        kind: "p",
        text:
          "Tu cajón de cocina tiene dos tipos de tazas medidoras. La de vidrio con pico es para líquidos. Las planas de metal o plástico son para sólidos. Las dos dicen \"1 taza\". Las dos guardan 240 ml. ¿Por qué tener las dos?",
      },
      {
        kind: "callout",
        text:
          "Las tazas de líquidos y las de secos guardan el mismo volumen, pero la forma y cómo mides es distinta. Las de líquidos son más altas con marcas debajo del borde y pico para verter. Las de secos se llenan hasta el borde para que niveles con un cuchillo. Usar una por la otra mete error real en repostería.",
      },
      { kind: "h2", text: "Para qué está diseñada cada taza" },
      { kind: "h3", text: "Taza medidora de líquidos" },
      {
        kind: "p",
        text:
          "Casi siempre de vidrio claro o plástico, con pico. Las marcas paran antes del borde para que tengas margen y veas el menisco (la curva donde el líquido toca el costado). Para agua, leche, aceite, caldo, jugo, miel y cualquier líquido vertible.",
      },
      { kind: "h3", text: "Taza medidora de secos" },
      {
        kind: "p",
        text:
          "Casi siempre de metal o plástico. Cada taza guarda exactamente la cantidad de su etiqueta, al ras del borde. Llenas pasando el borde y luego pasas un cuchillo para raspar el exceso. Para harina, azúcar, avena, nueces y cualquier cosa que puedas nivelar.",
      },
      {
        kind: "image",
        alt: "Una taza de vidrio con leche y una taza metálica con harina nivelada con un cuchillo, lado a lado.",
        placeholder:
          "Lado a lado sobre una mesa. Izquierda: taza alta de vidrio con leche, mostrando el menisco en la marca de 1 taza. Derecha: taza metálica plana llena de harina con un cuchillo apoyado encima, listo para raspar. Pie: 'Distintas herramientas, mismo volumen, distintos trabajos.'",
      },
      { kind: "h2", text: "Qué sale mal cuando las mezclas" },
      { kind: "h3", text: "Líquido en taza de secos" },
      {
        kind: "p",
        text:
          "No hay pico para verter limpio. La taza queda llena hasta el borde, así que derramas en el camino al bol. Leer el menisco es difícil porque la taza está llena. Resultado: casi siempre mide de menos porque parte del líquido se cae.",
      },
      { kind: "h3", text: "Harina en taza de líquidos" },
      {
        kind: "p",
        text:
          "Las marcas paran debajo del borde. No puedes nivelar la harina porque no hay referencia plana para raspar. O calculas la línea a ojo (impreciso) o llenas hasta arriba (mide de más entre 5 y 10 por ciento). De cualquier forma, la taza acaba más pesada de lo que la receta esperaba.",
      },
      { kind: "h2", text: "Cuándo no importa el error" },
      {
        kind: "p",
        text:
          "Para cocina, la diferencia se pierde en la olla. Salsa de pasta, sopa, guiso, salteado: una cucharada de diferencia no cambia nada. Las tazas son intercambiables para cocina casera.",
      },
      {
        kind: "p",
        text:
          "Para repostería, la diferencia se nota. Recetas de pastel, galletas, pan, pastelería: usa la taza correcta. O sáltate las tazas y pesa.",
      },
      { kind: "h2", text: "El atajo" },
      {
        kind: "p",
        text:
          "Si horneas seguido, tener las dos vale los 10 a 20 dólares. Si horneas rara vez, una báscula digital de cocina hace el trabajo de las dos por menos de 30 dólares. La báscula nunca pregunta qué taza agarraste.",
      },
      {
        kind: "link",
        text: "Abrir el conversor de tazas a gramos",
        href: "/es/tazas-a-gramos",
        description: "Sáltate la pregunta de la taza. Elige tu alimento, obtén el peso.",
      },
    ],
  },
{
    slug: "harina-tamizada-vs-sin-tamizar",
    locale: "es",
    author: "S. Richey",
    title: "Harina tamizada vs sin tamizar: la diferencia que rompe la receta",
    description:
      "Una taza de harina tamizada pesa cerca de 110 gramos. La misma taza sin tamizar pesa 142 gramos. Esa diferencia del 25 por ciento separa un pastel suave de uno duro.",
    publishedAt: "2026-04-10",
    readingMinutes: 5,
    alternateSlug: "sifted-vs-unsifted-flour",
    tags: ["reposteria", "medicion", "harina"],
    sources: [
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
      { label: "Food Science Institute: Sifting and measuring flour", url: "https://foodscienceinstitute.com/2018/12/18/sifting-and-measuring-flour/" },
    ],
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
    slug: "por-que-compactar-azucar-morena",
    locale: "es",
    author: "S. Richey",
    title: "Por qué debes compactar la azúcar morena (y qué pasa si no)",
    description:
      "Las tazas de azúcar morena asumen que la compactaste firme. Suelta pesa 30 por ciento menos y la receta sale rara. El arreglo en 60 segundos.",
    publishedAt: "2026-04-07",
    readingMinutes: 3,
    alternateSlug: "why-pack-brown-sugar",
    tags: ["reposteria", "medicion", "azucar"],
    sources: [
      { label: "King Arthur Baking: Measuring brown sugar", url: "https://www.kingarthurbaking.com/blog/2018/02/14/measuring-brown-sugar" },
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
    ],
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
    slug: "como-medir-la-harina-bien",
    locale: "es",
    author: "S. Richey",
    title: "Cómo medir bien la harina (cuchareo y nivelado, no sumergir)",
    description:
      "Casi todos los errores con la harina vienen del cuchareo. Cuchareo y nivelado pone la cantidad correcta. Sumergir compacta de más. Aquí está el truco en 30 segundos.",
    publishedAt: "2026-04-04",
    readingMinutes: 4,
    alternateSlug: "how-to-measure-flour-correctly",
    tags: ["reposteria", "medicion", "fundamentos"],
    sources: [
      { label: "King Arthur Baking: How to measure flour", url: "https://www.kingarthurbaking.com/blog/2020/10/29/how-to-measure-flour" },
      { label: "King Arthur Baking: Ingredient weight chart", url: "https://www.kingarthurbaking.com/learn/ingredient-weight-chart" },
    ],
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
    slug: "por-que-los-panaderos-pesan-ingredientes",
    locale: "es",
    author: "S. Richey",
    title: "Por qué los panaderos pesan los ingredientes en vez de usar tazas",
    description:
      "La razón corta por la que los panaderos serios se cambiaron a gramos: la taza miente. Guía sobre la variación de volumen, el método de cuchareo y la herramienta que arregla ambos.",
    publishedAt: "2026-04-01",
    readingMinutes: 4,
    alternateSlug: "why-bakers-weigh-ingredients",
    tags: ["reposteria", "medicion", "fundamentos"],
    sources: [
      { label: "King Arthur Baking: Why baking by weight is better", url: "https://www.kingarthurbaking.com/blog/2023/01/17/why-bake-by-weight" },
      { label: "America's Test Kitchen: Why you should weigh your baking ingredients", url: "https://www.americastestkitchen.com/articles/2095-why-you-should-weigh-your-baking-ingredients" },
    ],
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
