import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Política de privacidad: ${SITE_NAME}`,
  description: `Cómo ${SITE_NAME} trata los datos. Versión corta: no te pedimos tus datos.`,
  path: "/es/privacidad",
  alternatePath: "/privacy",
  locale: "es",
});

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Política de privacidad</h1>
      <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
        Última actualización: mayo de 2026
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">La versión corta</h2>
      <p className="mt-2 text-base">
        No te pedimos que inicies sesión. No corremos analíticas propias que
        identifiquen visitantes. No te vendemos nada, por lo que no
        necesitamos tu historial. Usa las calculadoras, obtén tu respuesta y
        sigue con tu día.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Lo que ve el servicio de hosting</h2>
      <p className="mt-2 text-base">
        El sitio funciona en Vercel, que recibe datos estándar de tráfico web
        como dirección IP, tipo de navegador y la página solicitada. Esos
        datos se usan para servir el sitio y se rigen por la política de
        privacidad de Vercel.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Publicidad</h2>
      <p className="mt-2 text-base">
        Planeamos mostrar anuncios mediante Google AdSense cuando el sitio
        califique. AdSense usa cookies para mostrar anuncios relevantes y
        medir su rendimiento. Puedes revisar o desactivar la publicidad
        personalizada en{" "}
        <a
          href="https://www.google.com/settings/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Configuración de anuncios de Google
        </a>
        . Hasta que los anuncios estén activos, no se establecen cookies
        publicitarias.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Medición de rendimiento</h2>
      <p className="mt-2 text-base">
        Si añadimos un proveedor de analíticas respetuoso con la privacidad
        (por ejemplo, Plausible o Web Analytics de Vercel), será sin cookies
        y no identificará a los visitantes. Actualizaremos esta página si eso
        cambia.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Niños</h2>
      <p className="mt-2 text-base">
        Este sitio está destinado a audiencias generales. No recolectamos
        datos de menores de 13 años de forma consciente.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Contacto</h2>
      <p className="mt-2 text-base">
        Las preguntas de privacidad pueden enviarse mediante el enlace de
        contacto al pie del sitio.
      </p>
    </article>
  );
}
