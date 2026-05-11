import type { CalculatorGroup } from "@/content/en/calculators";

export const calculadorasCopyEs = {
  title: "Todas las Calculadoras: Conversores de Cocina y Recetas",
  metaDescription:
    "Todas las calculadoras de cocina y repostería de Kitchen Converts, agrupadas por uso. Conversiones de volumen, peso, temperatura del horno, pesos por ingrediente y ajuste de recetas.",
  h1: "Todas las calculadoras",
  intro:
    "Todas las herramientas de cocina y repostería del sitio, agrupadas por lo que quieres hacer. Cada semana publicamos nuevas; guarda esta página o síguenos en Pinterest.",
  groups: [
    {
      heading: "Herramientas de recetas",
      tiles: [
        {
          title: "Escalador de recetas",
          description: "Ajusta una receta a las porciones que necesitas. Mitad, doble, triple o un número personalizado.",
          href: "/es/escalador-de-recetas",
          status: "live",
        },
        {
          title: "Conversor de tamaño de molde",
          description: "Cambia un molde redondo por uno cuadrado o rectangular y ajusta el volumen de masa.",
          href: "/es/calculadoras",
          status: "soon",
        },
      ],
    },
    {
      heading: "Volumen a peso",
      tiles: [
        {
          title: "Tazas a gramos",
          description: "Convierte tazas a gramos con la densidad correcta por ingrediente. Harina, azúcar, mantequilla y más.",
          href: "/es/tazas-a-gramos",
          status: "live",
        },
        {
          title: "Gramos a tazas",
          description: "Inverso del anterior. Mismo motor, misma precisión, densidad por ingrediente.",
          href: "/es/gramos-a-tazas",
          status: "live",
        },
      ],
    },
    {
      heading: "Conversiones de volumen",
      tiles: [
        {
          title: "Cucharadas a tazas",
          description: "Cuentas básicas de cocina: cucharadas, cucharaditas, onzas líquidas y tazas.",
          href: "/es/cucharadas-a-tazas",
          status: "live",
        },
        {
          title: "Mililitros a tazas",
          description: "Conversión rápida de métrico a tazas estadounidenses.",
          href: "/es/mililitros-a-tazas",
          status: "live",
        },
      ],
    },
    {
      heading: "Conversiones de peso",
      tiles: [
        {
          title: "Onzas a gramos",
          description: "Onzas estadounidenses a gramos, y al revés.",
          href: "/es/onzas-a-gramos",
          status: "live",
        },
        {
          title: "Libras a kilogramos",
          description: "Pesos mayores para cocina en lotes y panadería.",
          href: "/es/calculadoras",
          status: "soon",
        },
      ],
    },
    {
      heading: "Temperatura",
      tiles: [
        {
          title: "Fahrenheit a Celsius (horno)",
          description: "Convierte temperaturas del horno con marcas de gas.",
          href: "/es/fahrenheit-a-celsius",
          status: "live",
        },
      ],
    },
    {
      heading: "Pesos por ingrediente",
      tiles: [
        {
          title: "Conversor de mantequilla",
          description: "Barras, cucharadas, tazas y gramos para mantequilla estadounidense.",
          href: "/es/conversor-de-mantequilla",
          status: "live",
        },
        {
          title: "Harina: tazas a gramos",
          description: "Peso de harina común con tips de cuchareo y nivelado.",
          href: "/es/harina-tazas-a-gramos",
          status: "live",
        },
        {
          title: "Azúcar: tazas a gramos",
          description: "Peso de azúcar blanca granulada por taza.",
          href: "/es/azucar-tazas-a-gramos",
          status: "live",
        },
        {
          title: "Azúcar morena: tazas a gramos",
          description: "Peso compactado, con el valor suelto de referencia.",
          href: "/es/azucar-morena-tazas-a-gramos",
          status: "live",
        },
        {
          title: "Cacao en polvo: tazas a gramos",
          description: "El cacao sin azúcar es ligero y difícil de medir en taza.",
          href: "/es/cacao-tazas-a-gramos",
          status: "live",
        },
        {
          title: "Miel: tazas a gramos",
          description: "Pegajosa y densa, la miel pesa más que el agua por taza.",
          href: "/es/miel-tazas-a-gramos",
          status: "live",
        },
        {
          title: "Avena: tazas a gramos",
          description: "Avena en hojuelas, instantánea y cortada al gravado.",
          href: "/es/avena-tazas-a-gramos",
          status: "live",
        },
      ],
    },
  ] satisfies CalculatorGroup[],
  liveBadge: "Disponible ahora",
  soonBadge: "Próximamente",
};
