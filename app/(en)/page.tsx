import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { homeCopyEn as copy } from "@/content/en/home";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: "/",
  alternatePath: "/es",
  locale: "en",
});

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {copy.h1}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[color:var(--color-ink-muted)]">
          {copy.sub}
        </p>
        <Link
          href={copy.ctaPrimary.href}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-warm)] px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-[color:var(--color-warm-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus)]"
        >
          {copy.ctaPrimary.label}
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="mt-14 max-w-3xl rounded-lg border border-[color:var(--color-line)] bg-white/70 p-5 sm:p-6">
        <h2 className="font-serif text-2xl font-semibold">{copy.whyTitle}</h2>
        <p className="mt-3 text-base text-[color:var(--color-ink)]">{copy.whyBody}</p>
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-serif text-2xl font-semibold">{copy.popularTitle}</h2>
          <p className="text-sm text-[color:var(--color-ink-muted)]">{copy.popularSubtitle}</p>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {copy.tools.map((tool) => (
            <li key={tool.title}>
              <Link
                href={tool.href}
                className="block h-full rounded-lg border border-[color:var(--color-line)] bg-white p-5 transition-colors hover:border-[color:var(--color-accent)] hover:bg-white"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-lg font-semibold text-[color:var(--color-ink)]">
                    {tool.title}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      tool.tag === "Available now"
                        ? "bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent-strong)]"
                        : "bg-[color:var(--color-line)]/70 text-[color:var(--color-ink-muted)]"
                    }`}
                  >
                    {tool.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{tool.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-serif text-2xl font-semibold">{copy.promiseTitle}</h2>
        <p className="mt-3 text-base text-[color:var(--color-ink)]">{copy.promiseBody}</p>
      </section>
    </div>
  );
}
