import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { sanitiseJsonLd, breadcrumbSchema } from "@/lib/schema";
import { CalculatorsIndex } from "@/components/CalculatorsIndex";
import { calculatorsCopyEn as copy } from "@/content/en/calculators";

const PATH = "/calculators";
const ALT_PATH = "/es/calculadoras";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "en",
});

export default function CalculatorsPage() {
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Calculators", path: PATH },
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/" className="hover:text-[color:var(--color-ink)] hover:underline">
          Home
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">Calculators</span>
      </nav>

      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">{copy.h1}</h1>
      <p className="mt-3 max-w-prose text-base text-[color:var(--color-ink-muted)] sm:text-lg">
        {copy.intro}
      </p>

      <CalculatorsIndex
        groups={copy.groups}
        liveBadge={copy.liveBadge}
        soonBadge={copy.soonBadge}
      />

      <p className="mt-12 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
        ¿Buscas estas calculadoras en español?{" "}
        <Link
          href={ALT_PATH}
          hrefLang="es-419"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        >
          Ver las calculadoras
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
