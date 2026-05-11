import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Contacto: ${SITE_NAME}`,
  description: `Escríbenos a ${SITE_NAME}. Correcciones, sugerencias y preguntas sobre conversiones de cocina son bienvenidas.`,
  path: "/es/contacto",
  alternatePath: "/contact",
  locale: "es",
});

export default function ContactoPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Contacto</h1>
      <p className="mt-4 text-base">
        La forma más rápida de contactarnos es por correo. Leemos todo y respondemos cuando podemos. El tiempo razonable de respuesta es de unos días.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">¿Encontraste un error?</h2>
      <p className="mt-2 text-base">
        Cuéntanos la URL de la calculadora, qué buscaste, qué número obtuviste y qué esperabas. Lo arreglamos y actualizamos la página.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Sugiere una calculadora</h2>
      <p className="mt-2 text-base">
        ¿Te falta una conversión que usas seguido? Cuéntanos cuál. Las conversiones de ingredientes de cola larga son fáciles de agregar cuando sabemos que hay demanda real.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Correo</h2>
      <p className="mt-2 text-base">
        Escribe a{" "}
        <a
          href="mailto:hello@kitchenconverts.com"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        >
          hello@kitchenconverts.com
        </a>
        .
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Privacidad</h2>
      <p className="mt-2 text-base">
        Lo que envíes lo lee la persona que opera el sitio. No lo usamos para marketing y no lo compartimos.
      </p>
    </article>
  );
}
