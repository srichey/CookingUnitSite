import type { BlogPost } from "@/lib/blog";

export const postsEs: BlogPost[] = [
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
          "Si alguna vez hiciste la misma receta de galletas dos veces y obtuviste galletas diferentes, lo más probable es que el problema fuera la harina. No la marca. La taza.",
      },
      {
        kind: "p",
        text:
          "La medida por volumen es rápida y se siente intuitiva, pero arrastra un error real de 10 a 25 por ciento para ingredientes secos. La misma taza puede contener 110 gramos de harina común o 145 gramos de harina común, dependiendo de si la cuchareaste suavemente o la sumergiste con presión. Esa diferencia es la que separa una galleta tierna de una dura.",
      },
      { kind: "h2", text: "Qué cambia entre dos tazas de lo mismo" },
      {
        kind: "ul",
        items: [
          "Método de cuchareo. Sumergir la taza en la bolsa compacta más harina que cuchararla.",
          "Asentamiento. Una bolsa de harina sacudida al regresar de la tienda queda más densa que una que estuvo quieta.",
          "Humedad. La harina absorbe humedad del aire en días lluviosos y pesa un poco más para el mismo volumen.",
          "Marca. La harina común de una marca y la de otra pueden tener tamaños de partícula distintos.",
        ],
      },
      {
        kind: "p",
        text:
          "El azúcar es más indulgente porque los cristales se acomodan de forma consistente. La azúcar morena es lo opuesto porque debe presionarse con firmeza. El cacao en polvo es pesadilla porque se apelmaza. La miel funciona bien por volumen pero ensucia. La regla general: cuanto más depende una receta de la proporción exacta, más importa el peso.",
      },
      { kind: "h2", text: "Por qué los gramos resuelven el problema" },
      {
        kind: "p",
        text:
          "Un gramo es un gramo. No le importa cómo cuchareaste, cómo se sacudió la bolsa ni la humedad. Cuando una receta dice 120 gramos de harina y pones 120 gramos de harina en la báscula, tienes lo que el autor de la receta tenía en mente.",
      },
      {
        kind: "p",
        text:
          "Hay un segundo beneficio: el peso escala limpio. Duplicar una receta en tazas duplica también la variabilidad del cuchareo. Duplicar una receta en gramos es mover un número. Por eso nuestro escalador devuelve fracciones limpias para volumen y decimales exactos para peso: si estás ajustando y tienes báscula, usa la báscula.",
      },
      { kind: "h2", text: "La herramienta que arregla ambos problemas" },
      {
        kind: "p",
        text:
          "Una báscula digital de cocina, cerca de 20 a 40 dólares. Busca una con precisión al gramo, botón de tara (para poner a cero el bol), capacidad de 5 kilos y superficie plana lo bastante grande para un bol de mezclar. Eso es todo. Sin app, sin Bluetooth, sin Wi-Fi.",
      },
      {
        kind: "callout",
        text:
          "Si tu receta da pesos, úsalos. Si solo da tazas, puedes convertir con nuestra herramienta de tazas a gramos (próximamente) y anotar los pesos en la receta para no tener que volver a hacerlo.",
      },
      { kind: "h2", text: "Cuándo las tazas están bien" },
      {
        kind: "p",
        text:
          "Sopas, guisos, salteados, pasta, arroz: en cualquier preparación donde una diferencia del 10 por ciento en sazón o almidón no rompe el plato, las tazas están bien. La industria del libro de cocina no se va a caer porque midas caldo en tazas. La razón por la que los panaderos sí se preocupan es que el pan, la pastelería, las galletas y los pasteles son química, y la química necesita proporciones.",
      },
      { kind: "h2", text: "Siguiente paso práctico" },
      {
        kind: "p",
        text:
          "Si solo vas a hacer una cosa, pesa la harina. Es el ingrediente con la mayor variación entre volumen y peso en la mayoría de recetas y el que más arrastra error compuesto. La sal y el azúcar suelen estar bien en tazas para la repostería casera diaria. Donde están las ganancias es en la harina.",
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
