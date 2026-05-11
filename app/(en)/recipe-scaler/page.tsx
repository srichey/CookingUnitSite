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
import { recipeScalerCopyEn as copy } from "@/content/en/recipe-scaler";

const PATH = "/recipe-scaler";
const ALT_PATH = "/es/escalador-de-recetas";
const LAST_UPDATED = "2026-05-12";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "en",
});

export default function Page() {
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Calculators", path: "/calculators" },
    { name: "Recipe scaler", path: PATH },
  ]);
  const ldFaq = faqSchema(copy.faqs);
  const ldWebApp = webApplicationSchema({
    name: copy.h1,
    description: copy.metaDescription,
    path: PATH,
    inLanguage: "en-US",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/" className="hover:text-[color:var(--color-ink)] hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/calculators" className="hover:text-[color:var(--color-ink)] hover:underline">
          Calculators
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">Recipe scaler</span>
      </nav>

      {/* Hero with subtle warm blob */}
      <div className="relative isolate">
        <span
          aria-hidden="true"
          className="kc-hero-blob"
          style={{ width: 340, height: 340, top: -80, left: -60, zIndex: -1 }}
        />
        <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {copy.h1}
        </h1>
        <p className="mt-4 max-w-prose text-base text-[color:var(--color-ink-soft)] sm:text-lg">
          {copy.intro}
        </p>
      </div>

      {/* Calculator above the fold */}
      <div className="mt-8">
        <RecipeScalerForm locale="en" />
      </div>

      {/* TL;DR callout, citation-friendly */}
      <aside
        aria-label="Quick answer"
        className="mt-8 rounded-lg border-l-4 border-[color:var(--color-warm)] bg-[color:var(--color-warm-soft)]/60 p-4 shadow-[var(--shadow-soft)]"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-warm-strong)]">
          Quick answer
        </p>
        <p className="mt-1 text-base text-[color:var(--color-ink)]">{copy.directAnswer}</p>
      </aside>

      <AdSlot size="inline" locale="en" />

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

      <AdSlot size="rectangle" locale="en" />

      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">FAQ</h2>
        <dl className="mt-4 space-y-5">
          {copy.faqs.map((q, i) => (
            <div key={i}>
              <dt className="font-serif text-lg font-semibold">{q.question}</dt>
              <dd className="mt-1 text-base text-[color:var(--color-ink)]">{q.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 max-w-prose">
        <h2 className="font-serif text-xl font-semibold">{copy.related.title}</h2>
        <ul className="mt-3 space-y-1">
          {copy.related.items.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
        <Link
          href={ALT_PATH}
          hrefLang="es-419"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        >
          ¿Necesitas esta herramienta en español? Ver el escalador de recetas.
        </Link>
      </p>

      <p className="mt-8 text-xs text-[color:var(--color-ink-muted)]">
        Last updated:{" "}
        <time dateTime={LAST_UPDATED}>
          {new Date(LAST_UPDATED).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(ldWebApp) }} />
    </div>
  );
}
