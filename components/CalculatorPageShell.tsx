// Shared layout shell for converter pages. Keeps the structure identical
// across calculators so the SEO template stays consistent and the per-page
// files only carry the unique content + calculator widget.

import Link from "next/link";
import type { ReactNode } from "react";
import { AdSlot } from "./AdSlot";
import type { Locale } from "@/lib/site";
import {
  WEIGHT_SOURCES,
  SOURCES_HEADING,
  SOURCES_INTRO,
  type Source,
} from "@/lib/sources";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface RelatedLink {
  label: string;
  href: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SectionContent {
  title: string;
  body: string | string[];
}

interface ListSection {
  title: string;
  body: string;
  items: string[];
}

interface MistakesSection {
  title: string;
  items: string[];
}

interface RelatedSection {
  title: string;
  items: RelatedLink[];
}

interface Props {
  locale: Locale;
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  intro: string;
  tldr: string;
  calculator: ReactNode;
  chart?: ReactNode;
  quickRef: ListSection;
  howItWorks: SectionContent;
  accuracy: SectionContent;
  metric: SectionContent;
  geo: SectionContent;
  commonMistakes: MistakesSection;
  faqs: FaqItem[];
  related: RelatedSection;
  alternateLink: { label: string; href: string; hrefLang: string };
  lastUpdatedIso: string;
  // Outbound citations rendered as a Sources block above the Last Updated line.
  // Defaults to WEIGHT_SOURCES; override per-page for temperature, scaling, etc.
  sources?: Source[];
  jsonLdScripts: ReactNode;
}

export function CalculatorPageShell({
  locale,
  breadcrumbs,
  h1,
  intro,
  tldr,
  calculator,
  chart,
  quickRef,
  howItWorks,
  accuracy,
  metric,
  geo,
  commonMistakes,
  faqs,
  related,
  alternateLink,
  lastUpdatedIso,
  sources = WEIGHT_SOURCES,
  jsonLdScripts,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero with subtle warm blob behind the title */}
      <div className="relative isolate">
        <span
          aria-hidden="true"
          className="kc-hero-blob"
          style={{ width: 340, height: 340, top: -80, left: -60, zIndex: -1 }}
        />
        <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {h1}
        </h1>
        <p className="mt-4 max-w-prose text-base text-[color:var(--color-ink-soft)] sm:text-lg">{intro}</p>
      </div>

      {/* Calculator above the fold */}
      <div className="mt-8">{calculator}</div>

      {/* TL;DR: short, citation-friendly, near the top for AI extraction */}
      <aside
        aria-label={locale === "es" ? "Respuesta corta" : "Quick answer"}
        className="mt-8 rounded-lg border-l-4 border-[color:var(--color-warm)] bg-[color:var(--color-warm-soft)]/60 p-4 shadow-[var(--shadow-soft)]"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-warm-strong)]">
          {locale === "es" ? "Respuesta corta" : "Quick answer"}
        </p>
        <p className="mt-1 text-base text-[color:var(--color-ink)]">{tldr}</p>
      </aside>

      {/* Quick reference list: structured facts (ul) for both humans and AI */}
      <section className="mt-10 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{quickRef.title}</h2>
        <p className="mt-3 text-base">{quickRef.body}</p>
        <ul className="mt-4 list-disc space-y-1.5 pl-6 text-base text-[color:var(--color-ink)]">
          {quickRef.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {chart && <div className="mt-8">{chart}</div>}

      <AdSlot size="inline" locale={locale} />

      <Section title={howItWorks.title} body={howItWorks.body} />
      <Section title={accuracy.title} body={accuracy.body} />
      <Section title={metric.title} body={metric.body} />

      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">{commonMistakes.title}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[color:var(--color-ink)]">
          {commonMistakes.items.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <AdSlot size="rectangle" locale={locale} />

      <section className="mt-8 max-w-prose">
        <h2 className="font-serif text-2xl font-semibold">
          {locale === "es" ? "Preguntas frecuentes" : "FAQ"}
        </h2>
        <dl className="mt-4 space-y-5">
          {faqs.map((f) => (
            <div key={f.question}>
              <dt className="font-serif text-lg font-semibold text-[color:var(--color-ink)]">{f.question}</dt>
              <dd className="mt-1 text-base text-[color:var(--color-ink)]">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 max-w-prose">
        <h2 className="font-serif text-xl font-semibold">{related.title}</h2>
        <ul className="mt-3 space-y-1">
          {related.items.map((r) => (
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
          href={alternateLink.href}
          hrefLang={alternateLink.hrefLang}
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        >
          {alternateLink.label}
        </Link>
      </p>

      <section className="mt-8 max-w-prose">
        <h3 className="font-serif text-base font-semibold text-[color:var(--color-ink-muted)]">{geo.title}</h3>
        <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{geo.body}</p>
      </section>

      {sources && sources.length > 0 && (
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
            {sources.map((s) => (
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
      )}

      <p className="mt-8 text-xs text-[color:var(--color-ink-muted)]">
        {locale === "es" ? "Última actualización" : "Last updated"}:{" "}
        <time dateTime={lastUpdatedIso}>{formatDate(lastUpdatedIso, locale)}</time>
      </p>

      {jsonLdScripts}
    </div>
  );
}

function Section({ title, body }: { title: string; body: string | string[] }) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <section className="mt-8 max-w-prose">
      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-3 text-base text-[color:var(--color-ink)]">
          {p}
        </p>
      ))}
    </section>
  );
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? (
            <Link href={item.href} className="hover:text-[color:var(--color-ink)] hover:underline">
              {item.name}
            </Link>
          ) : (
            <span className="text-[color:var(--color-ink)]">{item.name}</span>
          )}
          {i < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "es" ? "es-419" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
