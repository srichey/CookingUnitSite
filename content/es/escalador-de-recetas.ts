export const recipeScalerCopyEs = {
  title: "Escalador de Recetas: Ajusta las Porciones",
  metaDescription:
    "Ajusta cualquier receta a más o menos porciones. Mitad, doble, triple o un número personalizado. Fracciones inteligentes para tazas, cucharadas, cucharaditas, gramos y onzas.",
  h1: "Escalador de recetas",
  intro:
    "Escribe tu receta abajo y elige cuántas porciones quieres. Cada ingrediente se actualiza al instante. Fracciones cuando tienen sentido, decimales cuando no.",
  directAnswer:
    "Para ajustar una receta, divide las porciones que quieres entre las porciones de la receta. Eso te da el número de escala. Multiplica cada ingrediente por él. Una receta para 4, duplicada a 8, multiplica cada cantidad por 2. Reducida a 2, por 0.5.",
  sections: {
    howItWorks: {
      title: "Cómo funciona el ajuste de recetas",
      body: [
        "Ajustar una receta es una pequeña cuenta, repetida por cada ingrediente. El número de escala es las porciones nuevas divididas entre las viejas. Multiplica cada ingrediente por ese número y la receta queda equilibrada.",
        "Lo difícil es qué hacer con los resultados incómodos. Una escala de 1.5 convierte 2/3 de taza en 1 taza, pero también convierte 1 cucharadita en 1.5 cucharaditas (que son 1/2 cucharada más 1/2 cucharadita). El escalador redondea a fracciones limpias cuando puede. Si el resultado no tiene fracción limpia cerca, muestra un decimal para que midas con báscula.",
      ],
    },
    cookTimeWarning: {
      title: "El tiempo no se duplica al duplicar la receta",
      body:
        "Duplicar un guiso no duplica el tiempo en el horno. Una bandeja más grande o una masa más profunda cambia cómo entra el calor. Como regla, súmale cerca de 25 por ciento al tiempo cuando dupliques y revisa con frecuencia. Para masas delgadas en bandejas anchas, el cambio se parece a lineal. Para asados, panes y todo lo profundo, usa termómetro.",
    },
    bakingNote: {
      title: "La repostería es más sensible que la cocina",
      body:
        "Galletas, bizcochos, panes y pasteles dependen de proporciones estrictas entre harina, grasa, azúcar y líquido. Escalarlos por un número raro (1.3, 1.7) puede romper la textura. Si una receta horneada necesita cambiar de tamaño, reducir a la mitad o duplicar es más seguro que un múltiplo extraño. Pesar en gramos siempre gana a las tazas.",
    },
    commonMistakes: {
      title: "Errores comunes al escalar",
      body: [
        "La sal y las especias no escalan lineal. Una receta duplicada con sal duplicada puede saber muy salada. Empieza con 1.5 veces la sal y ajusta al final.",
        "Los leudantes (bicarbonato, polvo de hornear, levadura) suelen escalar lineal en cambios moderados, pero tandas muy pequeñas o muy grandes se comportan distinto. Para pan con levadura, pesa la levadura.",
        "Los huevos son unidades enteras. Una escala de 1.5 sobre 3 huevos da 4.5 huevos. Redondea a huevos enteros y ajusta otros líquidos con una cucharada o dos.",
      ],
    },
  },
  faqs: [
    {
      question: "¿Cómo reduzco a la mitad una receta con 3 huevos?",
      answer:
        "La mitad de 3 huevos es 1.5 huevos. Bate un huevo entero y usa la mitad por volumen. Guarda la otra mitad para una tortilla mañana o congélala para repostería. Algunos panaderos cambian una yema por medio huevo en cremas.",
    },
    {
      question: "¿Puedo duplicar una receta de repostería?",
      answer:
        "Sí para la mayoría de galletas, magdalenas y panes rápidos. Ten cuidado con bizcochos delicados, pasta choux y merengues, donde el volumen al mezclar cambia la textura. Si puedes hornear la receta duplicada en dos moldes del tamaño original, es más seguro que en un molde grande.",
    },
    {
      question: "¿Por qué aparece 0.667 tazas en el resultado?",
      answer:
        "El escalador muestra 2/3 de taza en vez de 0.667 cuando el resultado está cerca de una fracción común. Si ves un decimal, la cuenta no quedó cerca de 1/8, 1/4, 1/3, 1/2, 2/3 o 3/4. Puedes medir con báscula o redondear a la fracción más cercana.",
    },
    {
      question: "¿Tengo que cambiar la temperatura del horno?",
      answer:
        "No. La temperatura se queda igual. Solo cambian las cantidades de ingredientes (y a veces el tiempo de cocción) al escalar.",
    },
    {
      question: "¿Es mejor pesar los ingredientes al escalar?",
      answer:
        "Para repostería, sí. Las medidas por volumen como la taza arrastran pequeños errores que crecen al escalar. Pesar en gramos mantiene las proporciones exactas, sin importar el número de escala. Por eso las panaderías profesionales siempre trabajan en peso.",
    },
  ],
  related: {
    title: "Herramientas relacionadas",
    items: [
      { label: "Tazas a gramos", href: "/es/tazas-a-gramos" },
      { label: "Cucharadas a tazas", href: "/es/cucharadas-a-tazas" },
      { label: "Fahrenheit a Celsius del horno", href: "/es/fahrenheit-a-celsius" },
    ],
  },
};
