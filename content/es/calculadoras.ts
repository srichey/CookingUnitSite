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
          description: "Matemática básica de cocina: cucharadas, cucharaditas, onzas líquidas y tazas.",
          href: "/es/calculadoras",
          status: "soon",
        },
        {
          title: "Mililitros a tazas",
          description: "Conversión rápida de métrico a tazas estadounidenses para líquidos.",
          href: "/es/calculadoras",
          status: "soon",
        },
      ],
    },
    {
      heading: "Conversiones de peso",
      tiles: [
        {
          title: "Onzas a gramos",
          description: "Onzas estadounidenses a gramos, y al revés.",
          href: "/es/calculadoras",
          status: "soon",
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
          description: "Convierte temperaturas del horno, con equivalencias de marca de gas.",
          href: "/es/calculadoras",
          status: "soon",
        },
      ],
    },
    {
      heading: "Pesos por ingrediente",
      tiles: [
        {
          title: "Harina: tazas a gramos",
          description: "Pesos de harina común, de pan, para pastel e integral.",
          href: "/es/calculadoras",
          status: "soon",
        },
        {
          title: "Azúcar: tazas a gramos",
          description: "Pesos de azúcar blanca, morena (compactada) y glas.",
          href: "/es/calculadoras",
          status: "soon",
        },
        {
          title: "Conversor de mantequilla",
          description: "Barras, cucharadas, tazas y gramos para mantequilla estadounidense.",
          href: "/es/calculadoras",
          status: "soon",
        },
        {
          title: "Cacao en polvo: tazas a gramos",
          description: "Pesos correctos por densidad para cacao en polvo sin azúcar.",
          href: "/es/calculadoras",
          status: "soon",
        },
        {
          title: "Avena: tazas a gramos",
          description: "Avena en hojuelas y avena cortada al gravado por taza.",
          href: "/es/calculadoras",
          status: "soon",
        },
        {
          title: "Miel: tazas a gramos",
          description: "Los líquidos pegajosos no pesan como el agua. Conversión por densidad.",
          href: "/es/calculadoras",
          status: "soon",
        },
      ],
    },
  ] satisfies CalculatorGroup[],
  liveBadge: "Disponible ahora",
  soonBadge: "Próximamente",
};
