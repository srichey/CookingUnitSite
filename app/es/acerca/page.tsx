import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { sanitiseJsonLd } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { EmailLink } from "@/components/EmailLink";

const LAST_UPDATED_ISO = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: `Acerca de ${SITE_NAME}`,
  description: `Quién opera ${SITE_NAME}, por qué existe el sitio y cómo se obtienen los números de las conversiones.`,
  path: "/es/acerca",
  alternatePath: "/about",
  locale: "es",
});

export default function AcercaPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about#scott-richey`,
    name: "Scott Richey",
    alternateName: "S. Richey",
    url: `${SITE_URL}/about`,
    jobTitle: "Fundador y editor",
    worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    knowsAbout: [
      "Medidas de cocina",
      "Proporciones de repostería",
      "Ajuste de recetas",
      "Densidad de ingredientes",
      "Calibración de horno",
    ],
    description:
      "Fundador y editor de Kitchen Converts. Ingeniero y cocinero casero que se cansó de los malos sitios de conversiones de cocina y construyó uno mejor.",
  };

  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
        Acerca de Kitchen Converts
      </h1>
      <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
        Última actualización:{" "}
        <time dateTime={LAST_UPDATED_ISO}>
          {new Date(LAST_UPDATED_ISO).toLocaleDateString("es-419", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Quién opera este sitio</h2>
      <p className="mt-2 text-base">
        Kitchen Converts es escrito y editado por Scott Richey (S. Richey).
        Scott es ingeniero aeroespacial y gerente de proyectos de día y
        operador de un pequeño portafolio de aplicaciones y herramientas
        respetuosas con la privacidad de noche. Cocina en serio desde hace
        dos décadas, pesa su harina y tiene opiniones sobre qué sitios de
        recetas redondean mal sus valores en gramos.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Por qué existe este sitio</h2>
      <p className="mt-2 text-base">
        La mayoría de los sitios de conversiones de cocina están hechos para
        los anuncios primero y las respuestas después. Los números a menudo
        están mal, la página es lenta y el popup aparece antes que la
        calculadora. Kitchen Converts es lo opuesto: la herramienta va
        primero, la respuesta está en la página en lenguaje claro, y la
        explicación está ahí si la quieres.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">De dónde salen los números</h2>
      <p className="mt-2 text-base">
        Los pesos de los ingredientes siguen a King Arthur Baking, USDA
        FoodData Central y la tabla de ingredientes de America&apos;s Test
        Kitchen. Cuando esas fuentes no coinciden, vamos con el estándar
        publicado por la fuente que más probablemente esté leyendo el
        cocinero casero. Cada página de calculadora lista sus fuentes al
        final para que puedas verificar cualquier número que publicamos.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Cómo nos pagamos</h2>
      <p className="mt-2 text-base">
        Algunas páginas muestran anuncios mediante Google AdSense. Eso
        mantiene el sitio gratis para el cocinero casero que llega aquí
        buscando un número rápido. No recolectamos tus datos de cocina, no
        vendemos listas de correo y no hacemos ventas adicionales. Mira la{" "}
        <Link
          href="/es/privacidad"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          política de privacidad
        </Link>{" "}
        para la imagen completa sobre cookies y consentimiento.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Correcciones bienvenidas</h2>
      <p className="mt-2 text-base">
        ¿Encontraste un número que se ve raro? Envía la URL y lo que
        esperabas a{" "}
        <EmailLink
          user="hello"
          domain="kitchenconverts.com"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        />
        . Las correcciones se aplican rápido.
      </p>

      <p className="mt-10 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
        Looking for this page in English?{" "}
        <Link
          href="/about"
          hrefLang="en-US"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          About Kitchen Converts
        </Link>
        .
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(personLd) }}
      />
    </article>
  );
}
