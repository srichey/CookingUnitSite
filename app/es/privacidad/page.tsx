import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { EmailLink } from "@/components/EmailLink";

const LAST_UPDATED_ISO = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: `Política de privacidad: ${SITE_NAME}`,
  description: `Cómo ${SITE_NAME} trata los datos. En lenguaje claro, sin sorpresas.`,
  path: "/es/privacidad",
  alternatePath: "/privacy",
  locale: "es",
});

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Política de privacidad</h1>
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

      <h2 className="mt-8 font-serif text-xl font-semibold">La versión corta</h2>
      <p className="mt-2 text-base">
        No te pedimos que inicies sesión. No corremos analíticas propias que
        identifiquen visitantes. No te vendemos nada, por lo que no
        necesitamos tu historial. El sitio muestra anuncios mediante Google
        AdSense para mantenerlo gratis; AdSense usa cookies como se describe
        abajo. Usa las calculadoras, obtén tu respuesta y sigue con tu día.
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
        Mostramos anuncios mediante Google AdSense cuando el sitio califique.
        AdSense y sus socios usan cookies y tecnologías similares para mostrar
        anuncios, medir su rendimiento y (cuando se permite) personalizar
        anuncios según tus visitas previas a este y otros sitios. El uso de
        cookies publicitarias por parte de Google se describe en sus{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          políticas de publicidad
        </a>
        . Puedes revisar o desactivar la publicidad personalizada en{" "}
        <a
          href="https://www.google.com/settings/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Configuración de anuncios de Google
        </a>
        . A los visitantes en la UE, el Reino Unido y Suiza se les presenta
        una elección de consentimiento antes de cargar anuncios personalizados,
        de acuerdo con la política de consentimiento de usuarios de la UE de
        Google. Hasta que los anuncios estén activos en una página dada, no se
        establecen cookies publicitarias.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Medición de rendimiento</h2>
      <p className="mt-2 text-base">
        Podemos usar Vercel Web Analytics o un proveedor de analíticas
        respetuoso con la privacidad y sin cookies (por ejemplo, Plausible)
        para entender los patrones de tráfico. Estas herramientas no
        identifican a los visitantes individuales. Actualizaremos esta página
        si eso cambia.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Tus derechos</h2>
      <p className="mt-2 text-base">
        Los visitantes en el Espacio Económico Europeo, el Reino Unido y
        California tienen derechos para acceder, corregir, eliminar o
        restringir el procesamiento de sus datos personales, y para oponerse
        a ciertos procesamientos como la publicidad personalizada. Como no
        mantenemos cuentas de usuario, la solicitud más común es ayudar con
        la desactivación de anuncios personalizados, lo cual puedes hacer
        directamente a través de{" "}
        <a
          href="https://www.google.com/settings/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Configuración de anuncios de Google
        </a>{" "}
        y{" "}
        <a
          href="https://www.youronlinechoices.eu"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Your Online Choices
        </a>
        . Para cualquier otra solicitud, escríbenos al correo de abajo y
        responderemos en un plazo de 30 días.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Retención de datos</h2>
      <p className="mt-2 text-base">
        No almacenamos datos a nivel de visitante por nuestra cuenta. Los
        registros del proveedor de hosting y de los proveedores de anuncios
        se conservan según las políticas estándar de esos proveedores
        (normalmente de 30 a 90 días para registros de tráfico y más tiempo
        para registros de facturación). Los correos que envíes se conservan
        hasta que la conversación se resuelva y luego se archivan o eliminan.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Niños</h2>
      <p className="mt-2 text-base">
        Este sitio está destinado a audiencias generales. No recolectamos
        datos de menores de 13 años de forma consciente. Si crees que un
        menor nos ha proporcionado información, contáctanos y la
        eliminaremos.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Contacto</h2>
      <p className="mt-2 text-base">
        Las preguntas de privacidad pueden enviarse a{" "}
        <EmailLink
          user="hello"
          domain="kitchenconverts.com"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        />
        .
      </p>
    </article>
  );
}
