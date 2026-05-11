export const fahrenheitACelsiusEs = {
  title: "Fahrenheit a Celsius para el Horno (con marcas de gas)",
  metaDescription:
    "Convierte temperaturas del horno de Fahrenheit a Celsius y al revés. Incluye marcas de gas para recetas del Reino Unido. Presets rápidos para repostería.",
  h1: "Fahrenheit a Celsius para el horno",
  tldr:
    "350°F son 177°C, que es marca de gas 4. Para pasar Fahrenheit a Celsius: resta 32, multiplica por 5, divide entre 9. Al revés: multiplica Celsius por 9, divide entre 5, suma 32.",
  intro:
    "La mayoría de recetas estadounidenses usan Fahrenheit. La mayoría de recetas métricas usan Celsius. Las recetas británicas a veces usan marcas de gas. Esta herramienta da las tres para que puedas ajustar tu horno a cualquier receta.",
  sections: {
    quickRef: {
      title: "Temperaturas comunes del horno",
      body: "Las temperaturas más comunes de repostería y lo que significan en cada sistema:",
      items: [
        "275°F = 135°C = marca de gas 1 (baja)",
        "300°F = 150°C = marca de gas 2 (baja)",
        "325°F = 163°C = marca de gas 3 (moderada)",
        "350°F = 177°C = marca de gas 4 (moderada, la más usada para repostería)",
        "375°F = 191°C = marca de gas 5 (moderada-alta)",
        "400°F = 204°C = marca de gas 6 (alta)",
        "425°F = 218°C = marca de gas 7 (alta)",
        "450°F = 232°C = marca de gas 8 (muy alta, asados)",
        "475°F = 246°C = marca de gas 9 (muy alta, pizza)",
      ],
    },
    howItWorks: {
      title: "Las cuentas",
      body: [
        "De Fahrenheit a Celsius: toma el número Fahrenheit, resta 32, multiplica por 5, luego divide entre 9. Ejemplo: 350 menos 32 son 318. 318 por 5 son 1590. 1590 dividido 9 son 177.",
        "De Celsius a Fahrenheit: toma Celsius, multiplica por 9, divide entre 5, luego suma 32. Ejemplo: 177 por 9 son 1593. 1593 dividido 5 son 318.6. 318.6 más 32 son 350.6.",
      ],
    },
    accuracy: {
      title: "Por qué tu horno aún cocina distinto",
      body: [
        "Los diales del horno no son exactos. Un horno marcado en 350°F puede estar 25 grados arriba o abajo. Compra un termómetro de horno barato y revisa el tuyo. El número en el dial es más una guía que un hecho.",
        "Los hornos de convección (con ventilador) cocinan más caliente al mismo número. Baja el dial 25°F (15°C) o revisa la comida antes. El tiempo baja entre 10 y 15 por ciento.",
      ],
    },
    metric: {
      title: "Marcas de gas para recetas británicas",
      body:
        "Las marcas de gas británicas van del 1/2 (muy baja) al 9 (muy alta). La marca 4 es el estándar de repostería, igual a 350°F o 177°C. La tabla arriba tiene todas.",
    },
    geo: {
      title: "Por qué la fórmula es así",
      body:
        "La escala Fahrenheit pone el agua congelando en 32 y hirviendo en 212. La escala Celsius pone el agua congelando en 0 y hirviendo en 100. Las cuentas (resta 32, escala por 5/9) alinean las dos escalas. Las marcas de gas británicas suben en pasos de 25°F desde 275°F.",
    },
  },
  commonMistakes: {
    title: "Errores comunes con Fahrenheit y Celsius",
    items: [
      "Olvidar restar 32 antes de escalar. Sin eso, 350°F parece 194°C, lo cual está mal.",
      "Confundir la dirección de las cuentas. De C a F sumas 32 al final. De F a C lo restas al principio.",
      "Usar la conversión en un horno de convección sin bajar el dial. Los hornos de convección cocinan más caliente al mismo número.",
      "Confiar en el dial en vez de un termómetro. La mayoría de hornos caseros están de 10 a 25 grados desviados.",
      "Tratar las marcas de gas como si fueran Fahrenheit. La marca de gas 5 no son 5°F. Son 375°F.",
    ],
  },
  faqs: [
    {
      question: "¿Cuánto es 350°F en Celsius?",
      answer:
        "350°F son cerca de 177°C. La mayoría de libros redondean a 175°C o 180°C. Cualquiera de los dos sirve para hornear. En el Reino Unido, es la marca de gas 4.",
    },
    {
      question: "¿Cuál es la fórmula de Fahrenheit a Celsius?",
      answer:
        "Resta 32 al número Fahrenheit, multiplica por 5, divide entre 9. Es decir, (F menos 32) por 5 entre 9 igual a C.",
    },
    {
      question: "¿200°C son lo mismo que 400°F?",
      answer:
        "Casi. 200°C son 392°F, que la mayoría de recetas redondea a 400°F. Al revés, 400°F son 204°C, casi siempre redondeado a 200°C.",
    },
    {
      question: "¿Bajo la temperatura para horno de convección?",
      answer:
        "Sí. Baja la temperatura de la receta cerca de 25°F o 15°C cuando usas convección con una receta escrita para horno normal. O mantén la temperatura y revisa la comida 10 a 15 por ciento antes.",
    },
    {
      question: "¿Por qué las recetas británicas usan marcas de gas?",
      answer:
        "Los hornos a gas británicos usaban una escala numerada mucho antes de los diales digitales. La escala se quedó incluso en hornos modernos. La marca 4 es el estándar de repostería, igual a 350°F (177°C).",
    },
  ],
  related: {
    title: "Herramientas relacionadas",
    items: [
      { label: "Todas las calculadoras", href: "/es/calculadoras" },
      { label: "Escalador de recetas", href: "/es/escalador-de-recetas" },
      { label: "Tazas a gramos", href: "/es/tazas-a-gramos" },
      { label: "Preguntas frecuentes", href: "/es/preguntas" },
    ],
  },
};
