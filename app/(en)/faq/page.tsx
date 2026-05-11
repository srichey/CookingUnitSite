import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { sanitiseJsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { faqEn as copy } from "@/content/en/faq";

const PATH = "/faq";
const ALT_PATH = "/es/preguntas";

export const metadata: Metadata = buildMetadata({
  title: copy.title,
  description: copy.metaDescription,
  path: PATH,
  alternatePath: ALT_PATH,
  locale: "en",
});

export default function FAQPage() {
  const allQuestions = copy.groups.flatMap((g) => g.questions);
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: PATH },
  ]);
  const ldFaq = faqSchema(allQuestions);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-[color:var(--color-ink-muted)]">
        <Link href="/" className="hover:text-[color:var(--color-ink)] hover:underline">
          Home
        </Link>{" "}
        / <span className="text-[color:var(--color-ink)]">FAQ</span>
      </nav>

      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">{copy.h1}</h1>
      <p className="mt-3 max-w-prose text-base text-[color:var(--color-ink-muted)] sm:text-lg">
        {copy.intro}
      </p>

      <div className="mt-10 space-y-12">
        {copy.groups.map((group) => (
          <section key={group.heading}>
            <h2 className="font-serif text-2xl font-semibold">{group.heading}</h2>
            <dl className="mt-4 space-y-6">
              {group.questions.map((q) => (
                <div key={q.question}>
                  <dt className="font-serif text-lg font-semibold text-[color:var(--color-ink)]">
                    {q.question}
                  </dt>
                  <dd className="mt-1 text-base text-[color:var(--color-ink)]">{q.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <p className="mt-12 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
        ¿Buscas estas respuestas en español?{" "}
        <Link
          href={ALT_PATH}
          hrefLang="es-419"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        >
          Ir a las preguntas frecuentes
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
    </div>
  );
}
