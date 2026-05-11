import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { sanitiseJsonLd, breadcrumbSchema } from "@/lib/schema";
import { CalculatorsIndex } from "@/components/CalculatorsIndex";
import { calculadorasCopyEs as copy } from "@/content/es/calculadoras";

const PATH = "/es/calculadoras";
const ALT_PATH = "/calculators";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "es",
});

export default function CalculadorasPage() {
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Inicio", path: "/es" },
    { name: "Calculadoras", path: PATH },
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/es" className="hover:text-[color:var(--color-ink)] hover:underline">
          Inicio
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">Calculadoras</span>
      </nav>

      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">{copy.h1}</h1>
      <p className="mt-3 max-w-prose text-base text-[color:var(--color-ink-muted)] sm:text-lg">
        {copy.intro}
      </p>

      <CalculatorsIndex
        groups={copy.groups}
        liveBadge={copy.liveBadge}
        soonBadge={copy.soonBadge}
        searchPlaceholder="Busca una calculadora (ej. harina, tazas, horno)"
        searchEmptyLabel="No hay calculadoras que coincidan con tu búsqueda. Prueba otra palabra o usa el menú de arriba."
      />

      <p className="mt-12 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
        Looking for these calculators in English?{" "}
        <Link
          href={ALT_PATH}
          hrefLang="en-US"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        >
          Open the calculators
        </Link>
        .
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldBreadcrumb) }}
      />
    </div>
  );
}
