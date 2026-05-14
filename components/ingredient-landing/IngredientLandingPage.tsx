// Shared layout for ingredient-specific landing pages (flour cups to grams,
// sugar cups to grams, etc). Each landing reuses the CupsGramsConverter locked
// to one ingredient and the IngredientChart filtered to that ingredient.

import Link from "next/link";
import { CupsGramsConverter } from "@/components/cups-grams/CupsGramsConverter";
import { IngredientChart } from "@/components/cups-grams/IngredientChart";
import { AdSlot } from "@/components/AdSlot";
import { buildMetadata } from "@/lib/seo";
import {
  sanitiseJsonLd,
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/lib/schema";
import {
  WEIGHT_SOURCES,
  SOURCES_HEADING,
  SOURCES_INTRO,
} from "@/lib/sources";
import type { Locale } from "@/lib/site";
import type { IngredientLanding } from "@/content/ingredient-landing";
import type { Metadata } from "next";

const LAST_UPDATED = "2026-05-11";

export function buildIngredientLandingMetadata(
  landing: IngredientLanding,
  locale: Locale,
): Metadata {
  const isEn = locale === "en";
  const copy = isEn ? landing.copyEn : landing.copyEs;
  const path = isEn ? landing.pathEn : landing.pathEs;
  const altPath = isEn ? landing.pathEs : landing.pathEn;
  return buildMetadata({
    title: copy.title,
    description: copy.metaDescription,
    path,
    alternatePath: altPath,
    locale,
  });
}

export function IngredientLandingPage({
  landing,
  locale,
}: {
  landing: IngredientLanding;
  locale: Locale;
}) {
  const isEn = locale === "en";
  const copy = isEn ? landing.copyEn : landing.copyEs;
  const path = isEn ? landing.pathEn : landing.pathEs;
  const altPath = isEn ? landing.pathEs : landing.pathEn;

  const calcLabel = isEn ? "Calculators" : "Calculadoras";
  const homeLabel = isEn ? "Home" : "Inicio";
  const calcHref = isEn ? "/calculators" : "/es/calculadoras";
  const homeHref = isEn ? "/" : "/es";

  const ldBreadcrumb = breadcrumbSchema([
    { name: homeLabel, path: homeHref },
    { name: calcLabel, path: calcHref },
    { name: copy.h1, path },
  ]);
  const ldFaq = faqSchema(copy.faqs);
  const ldWebApp = webApplicationSchema({
    name: copy.h1,
    description: copy.metaDescription,
    path,
    inLanguage: isEn ? "en-US" : "es-419",
  });

  const altLabel = isEn
    ? "¿Necesitas esta herramienta en español? Ver el conversor."
    : "Need this tool in English? Open the converter.";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href={homeHref} className="hover:text-[color:var(--color-ink)] hover:underline">
          {homeLabel}
        </Link>{" "}
        /{" "}
        <Link href={calcHref} className="hover:text-[color:var(--color-ink)] hover:underline">
          {calcLabel}
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">{copy.h1}</span>
      </nav>

      {/* Hero */}
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

      {/* Calculator, locked to this ingredient */}
      <div className="mt-8">
        <CupsGramsConverter
          locale={locale}
          defaultDirection="cups-to-grams"
          lockIngredientId={landing.ingredientId}
        />
      </div>

      {/* TL;DR */}
      <aside
        aria-label={isEn ? "Quick answer" : "Respuesta corta"}
        className="mt-8 rounded-lg border-l-4 border-[color:var(--color-warm)] bg-[color:var(--color-warm-soft)]/60 p-4 shadow-[var(--shadow-soft)]"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-warm-strong)]">
          {isEn ? "Quick answer" : "Respuesta corta"}
        </p>
        <p className="mt-1 text-base text-[color:var(--color-ink)]">{copy.tldr}</p>
      </aside>

      {/* Quick reference */}
      <section className="mt-10 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{copy.quickRefTitle}</h2>
        <p className="mt-3 text-base">{copy.quickRefBody}</p>
        <ul className="mt-4 list-disc space-y-1.5 pl-6 text-base text-[color:var(--color-ink)]">
          {copy.quickRefItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Chart filtered to this ingredient */}
      <IngredientChart
        locale={locale}
        direction="cups-to-grams"
        onlyIngredientId={landing.ingredientId}
      />

      <AdSlot size="inline" locale={locale} />

      {/* Details */}
      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{copy.detailsTitle}</h2>
        {copy.detailsBody.map((p, i) => (
          <p key={i} className="mt-3 text-base text-[color:var(--color-ink)]">
            {p}
          </p>
        ))}
      </section>

      <AdSlot size="rectangle" locale={locale} />

      {/* FAQ */}
      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{isEn ? "FAQ" : "Preguntas frecuentes"}</h2>
        <dl className="mt-4 space-y-5">
          {copy.faqs.map((f) => (
            <div key={f.question}>
              <dt className="font-serif text-lg font-semibold text-[color:var(--color-ink)]">{f.question}</dt>
              <dd className="mt-1 text-base text-[color:var(--color-ink)]">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related */}
      <section className="mt-10 max-w-prose">
        <h2 className="font-serif text-xl font-semibold">
          {isEn ? "Related tools" : "Herramientas relacionadas"}
        </h2>
        <ul className="mt-3 space-y-1">
          {copy.related.map((r) => (
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
          href={altPath}
          hrefLang={isEn ? "es-419" : "en-US"}
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        >
          {altLabel}
        </Link>
      </p>

      {/* Sources: outbound citations to weight-data authorities. Renders the
         same authority block as the calculator pages so every URL the user
         lands on shows transparent sourcing. */}
      <section
        className="mt-8 max-w-prose rounded-lg border border-[color:var(--color-line)] bg-white/60 p-5 shadow-[var(--shadow-soft)]"
        aria-label={SOURCES_HEADING[locale]}
      >
        <h2 className="font-serif text-base font-semibold text-[color:var(--color-ink)]">
          {SOURCES_HEADING[locale]}
        </h2>
        <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
          {SOURCES_INTRO[locale]}
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {WEIGHT_SOURCES.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                rel="noopener noreferrer"
                target="_blank"
                className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
              >
                {s.label}
              </a>
              {s.note && (
                <span className="text-[color:var(--color-ink-muted)]">. {s.note}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-xs text-[color:var(--color-ink-muted)]">
        {isEn ? "Last updated" : "Última actualización"}:{" "}
        <time dateTime={LAST_UPDATED}>
          {new Date(LAST_UPDATED).toLocaleDateString(isEn ? "en-US" : "es-419", {
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
