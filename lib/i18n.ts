// Lightweight i18n. Because the site uses literal route folders (/es/...)
// instead of a dynamic [lang] segment, we don't need runtime detection.
// Each route knows its locale at the source.

import type { Locale } from "./site";

export interface CommonStrings {
  nav: {
    home: string;
    recipeScaler: string;
    languageLabel: string;
    languageEnglish: string;
    languageSpanish: string;
  };
  footer: {
    legal: string;
    privacy: string;
    terms: string;
    contact: string;
    tagline: string;
    rights: string;
  };
  adSlot: {
    label: string;
  };
}

const STRINGS: Record<Locale, CommonStrings> = {
  en: {
    nav: {
      home: "Home",
      recipeScaler: "Recipe scaler",
      languageLabel: "Language",
      languageEnglish: "English",
      languageSpanish: "Español",
    },
    footer: {
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      tagline: "Convert and scale recipes without guessing.",
      rights: "All rights reserved.",
    },
    adSlot: {
      label: "Advertisement",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      recipeScaler: "Escalador de recetas",
      languageLabel: "Idioma",
      languageEnglish: "English",
      languageSpanish: "Español",
    },
    footer: {
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
      tagline: "Convierte y ajusta recetas sin adivinar.",
      rights: "Todos los derechos reservados.",
    },
    adSlot: {
      label: "Publicidad",
    },
  },
};

export function getStrings(locale: Locale): CommonStrings {
  return STRINGS[locale];
}
