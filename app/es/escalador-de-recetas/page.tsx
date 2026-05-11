import type { Metadata } from "next";
import Link from "next/link";
import { RecipeScalerForm } from "@/components/recipe-scaler/RecipeScalerForm";
import { AdSlot } from "@/components/AdSlot";
import { buildMetadata } from "@/lib/seo";
import {
  sanitiseJsonLd,
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/lib/schema";
import { recipeScalerCopyEs as copy } from "@/content/es/escalador-de-recetas";

const PATH = "/es/escalador-de-recetas";
const ALT_PATH = "/recipe-scaler";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "es",
});

export default function Page() {
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Inicio", path: "/es" },
    { name: "Escalador de recetas", path: PATH },
  ]);
  const ldFaq = faqSchema(copy.faqs);
  const ldWebApp = webApplicationSchema({
    name: copy.h1,
    description: copy.metaDescription,
    path: PATH,
    inLanguage: "es-419",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/es" className="hover:text-[color:var(--color-ink)] hover:underline">
          Inicio
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">Escalador de recetas</span>
      </nav>

      <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
        {copy.h1}
      </h1>
      <p className="mt-3 max-w-prose text-base text-[color:var(--color-ink-muted)] sm:text-lg">
        {copy.intro}
      </p>

      <div className="mt-6">
        <RecipeScalerForm locale="es" />
      </div>

      <p className="mt-6 max-w-prose text-base text-[color:var(--color-ink)]">
        <strong className="font-semibold">Respuesta corta.</strong> {copy.directAnswer}
      </p>

      <AdSlot size="inline" locale="es" />

      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{copy.sections.howItWorks.title}</h2>
        {copy.sections.howItWorks.body.map((p, i) => (
          <p key={i} className="mt-3 text-base text-[color:var(--color-ink)]">
            {p}
          </p>
        ))}
      </section>

      <section className="mt-8 max-w-prose rounded-md border-l-4 border-[color:var(--color-warm)] bg-white/70 p-4">
        <h2 className="font-serif text-xl font-semibold">{copy.sections.cookTimeWarning.title}</h2>
        <p className="mt-2 text-base">{copy.sections.cookTimeWarning.body}</p>
      </section>

      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{copy.sections.bakingNote.title}</h2>
        <p className="mt-3 text-base">{copy.sections.bakingNote.body}</p>
      </section>

      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{copy.sections.commonMistakes.title}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base">
          {copy.sections.commonMistakes.body.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>

      <AdSlot size="rectangle" locale="es" />

      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">Preguntas frecuentes</h2>
        <dl className="mt-4 space-y-5">
          {copy.faqs.map((q, i) => (
            <div key={i}>
              <dt className="font-serif text-lg font-semibold">{q.question}</dt>
              <dd className="mt-1 text-base text-[color:var(--color-ink)]">{q.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-10 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
        Need this tool in English?{" "}
        <Link href={ALT_PATH} hrefLang="en-US" className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]">
          Open the recipe scaler
        </Link>
        .
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldWebApp) }}
      />
    </div>
  );
}
