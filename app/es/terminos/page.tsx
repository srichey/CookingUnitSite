import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Términos de uso: ${SITE_NAME}`,
  description: `Términos de uso de ${SITE_NAME}. Gratis, sin garantía, cocina con responsabilidad.`,
  path: "/es/terminos",
  alternatePath: "/terms",
  locale: "es",
});

export default function TerminosPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Términos de uso</h1>
      <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
        Última actualización: mayo de 2026
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Uso del sitio</h2>
      <p className="mt-2 text-base">
        {SITE_NAME} es de uso gratuito para cocina personal en casa, sin fines
        comerciales. Puedes compartir enlaces a las páginas. No puedes copiar
        partes grandes del contenido ni republicar las calculadoras como si
        fueran tuyas.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Sin garantía</h2>
      <p className="mt-2 text-base">
        Las conversiones y calculadoras se entregan como referencia útil. El
        peso de los ingredientes varía por marca, forma de empacar, humedad y
        el método de medir. Para repostería comercial, seguridad alimentaria
        o cualquier cosa donde el peso exacto importa, pesa los ingredientes
        con báscula y verifica recetas críticas con una fuente impresa de
        confianza. No garantizamos que ninguna conversión sea adecuada para
        una receta particular.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Enlaces de afiliados</h2>
      <p className="mt-2 text-base">
        Algunos enlaces en el sitio pueden ser de afiliados a tiendas como
        Amazon. Si los añadimos, estarán claramente marcados. Solo
        recomendamos productos que usaríamos nosotros.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Cambios</h2>
      <p className="mt-2 text-base">
        Podemos actualizar estos términos a medida que crezca el sitio. La
        fecha de última actualización arriba indica cuándo se publicó la
        versión actual.
      </p>
    </article>
  );
}
