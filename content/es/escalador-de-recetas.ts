export const recipeScalerCopyEs = {
  title: "Escalador de Recetas: Ajusta las Porciones",
  metaDescription:
    "Ajusta cualquier receta a más o menos porciones. Reduce a la mitad, duplica, triplica o elige una cantidad personalizada. Funciona con tazas, cucharadas, cucharaditas, gramos y onzas.",
  h1: "Escalador de recetas",
  intro:
    "Escribe tu receta abajo y elige cuántas porciones quieres. Cada ingrediente se actualiza al instante, con fracciones cuando tienen sentido y decimales cuando no.",
  directAnswer:
    "Para ajustar una receta, divide las porciones deseadas entre las porciones originales y multiplica cada ingrediente por ese factor. Una receta para 4 personas, duplicada a 8, multiplica cada cantidad por 2; reducida a 2, por 0.5.",
  sections: {
    howItWorks: {
      title: "Cómo funciona el ajuste de recetas",
      body: [
        "Ajustar una receta es un solo cálculo repetido por cada ingrediente. El factor de escala es las porciones nuevas divididas entre las originales. Multiplica cada cantidad por ese número y las proporciones se mantienen.",
        "La matemática es simple. Lo difícil es qué hacer con los números incómodos. Un factor de 1.5 convierte 2/3 de taza en 1 taza, pero también convierte 1 cucharadita en 1.5 cucharaditas, que es media cucharada más media cucharadita. El escalador redondea a fracciones comunes de cocina cuando el resultado está cerca de una, y muestra decimal limpio cuando no.",
      ],
    },
    cookTimeWarning: {
      title: "El tiempo de cocción no escala de forma lineal",
      body:
        "Duplicar un guiso no duplica su tiempo en el horno. Una bandeja más grande o una masa más profunda cambian cómo entra el calor. Como regla, aumenta el tiempo cerca de 25 por ciento al duplicar y revisa con frecuencia. Para masas delgadas y bandejas anchas, el escalado se parece más a lineal. Para asados, panes y todo lo profundo, usa termómetro.",
    },
    bakingNote: {
      title: "La repostería es más sensible que la cocina",
      body:
        "Galletas, bizcochos, panes y pasteles dependen de la proporción entre harina, grasa, azúcar y líquido. Escalarlos por un factor raro (1.3, 1.7) puede romper la estructura. Si una receta horneada necesita cambiar de tamaño, reducirla a la mitad o duplicarla es más seguro que un múltiplo fraccionario, y medir en gramos siempre gana a las tazas.",
    },
    commonMistakes: {
      title: "Errores comunes al escalar",
      body: [
        "La sal y las especias no siempre escalan de forma lineal. Una receta duplicada con sal duplicada puede saber mucho más salada de lo esperado. Empieza con 1.5x la sal y ajusta al final.",
        "Los leudantes (bicarbonato, polvo de hornear, levadura) suelen escalar de forma lineal en cambios moderados, pero en tandas muy pequeñas o muy grandes se comportan distinto. Para pan con levadura, pesa la levadura.",
        "El tamaño de los huevos es cuantizado. Un factor de 1.5 sobre 3 huevos da 4.5 huevos. Redondea a huevos enteros y ajusta otros líquidos con una cucharada o dos.",
      ],
    },
  },
  faqs: [
    {
      question: "¿Cómo reduzco a la mitad una receta con 3 huevos?",
      answer:
        "La mitad de 3 huevos son 1.5 huevos. Bate un huevo entero y usa la mitad. Guarda el resto para una tortilla mañana o congélalo para repostería. Algunos panaderos sustituyen medio huevo por una yema en cremas.",
    },
    {
      question: "¿Puedo duplicar una receta de repostería?",
      answer:
        "Sí para la mayoría de galletas, magdalenas y panes rápidos. Ten cuidado con bizcochos delicados, pasta choux y merengues donde el volumen de la mezcla cambia la textura. Si puedes repartir la receta duplicada en dos moldes del tamaño original, esa es la opción más segura.",
    },
    {
      question: "¿Por qué aparece 0.667 tazas en el resultado?",
      answer:
        "El escalador muestra 2/3 de taza en lugar de 0.667 cuando el valor está suficientemente cerca de una fracción común. Si ves un decimal, la cuenta no quedó cerca de 1/8, 1/4, 1/3, 1/2, 2/3 o 3/4. Puedes medir con báscula para más precisión o redondear a la fracción más cercana.",
    },
    {
      question: "¿Tengo que ajustar la temperatura del horno?",
      answer:
        "No. La temperatura se queda igual. Solo cambian las cantidades de ingredientes y a veces el tiempo de cocción.",
    },
    {
      question: "¿Es mejor pesar los ingredientes al escalar?",
      answer:
        "Para repostería, sí. Las medidas por volumen como la taza arrastran error compuesto al escalar. Pesar en gramos mantiene las proporciones exactas sin importar el factor, por eso las panaderías profesionales trabajan siempre en peso.",
    },
  ],
  related: {
    title: "Herramientas relacionadas",
    items: [
      { label: "Tazas a gramos", href: "/es/escalador-de-recetas" },
      { label: "Cucharadas a cucharaditas", href: "/es/escalador-de-recetas" },
      { label: "Fahrenheit a Celsius del horno", href: "/es/escalador-de-recetas" },
    ],
  },
};
