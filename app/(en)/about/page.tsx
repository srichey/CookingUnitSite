import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { sanitiseJsonLd } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { EmailLink } from "@/components/EmailLink";

const LAST_UPDATED_ISO = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: `About ${SITE_NAME}`,
  description: `Who runs ${SITE_NAME}, why the site exists, and how the conversion numbers are sourced.`,
  path: "/about",
  alternatePath: "/es/acerca",
  locale: "en",
});

export default function AboutPage() {
  // Person schema. Linked from every BlogPosting so author entity is
  // resolvable for Google E-E-A-T and AI Overview attribution.
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about#scott-richey`,
    name: "Scott Richey",
    alternateName: "S. Richey",
    url: `${SITE_URL}/about`,
    jobTitle: "Founder and editor",
    worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    knowsAbout: [
      "Cooking measurements",
      "Baking ratios",
      "Recipe scaling",
      "Ingredient density",
      "Oven calibration",
    ],
    description:
      "Founder and editor of Kitchen Converts. Engineer and home cook who got tired of bad cooking conversion sites and built a better one.",
  };

  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
        About Kitchen Converts
      </h1>
      <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
        Last updated:{" "}
        <time dateTime={LAST_UPDATED_ISO}>
          {new Date(LAST_UPDATED_ISO).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Who runs this site</h2>
      <p className="mt-2 text-base">
        Kitchen Converts is written and edited by Scott Richey (S. Richey).
        Scott is an aerospace engineer and project manager by day and the
        operator of a small portfolio of privacy-first apps and tools by
        night. He has cooked seriously for two decades, weighs his flour, and
        has opinions about which recipe sites round their gram values.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Why this site exists</h2>
      <p className="mt-2 text-base">
        Most cooking conversion sites are built around ads first and answers
        second. The numbers are often wrong, the page is slow, and the popup
        appears before the calculator does. Kitchen Converts is the opposite:
        the tool comes first, the answer is on the page in plain language,
        and the explanation is there if you want it.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">How we source numbers</h2>
      <p className="mt-2 text-base">
        Ingredient weights follow King Arthur Baking, USDA FoodData Central,
        and the America&apos;s Test Kitchen ingredient chart. Where those
        sources disagree, we go with the published standard from the source
        most home bakers are likely to be reading from. Each calculator page
        lists its sources at the bottom so you can verify any number we
        publish.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">How we make money</h2>
      <p className="mt-2 text-base">
        Some pages display ads through Google AdSense. That keeps the site
        free for the home cook who lands here looking for a quick number.
        We do not collect your cooking data, sell email lists, or run
        upsells. See the{" "}
        <Link
          href="/privacy"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          privacy policy
        </Link>{" "}
        for the full picture on cookies and consent.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Corrections welcome</h2>
      <p className="mt-2 text-base">
        Found a number that looks off? Send the URL and what you expected to{" "}
        <EmailLink
          user="hello"
          domain="kitchenconverts.com"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        />
        . Corrections get applied fast.
      </p>

      <p className="mt-10 max-w-prose text-sm text-[color:var(--color-ink-muted)]">
        ¿Buscas esta página en español?{" "}
        <Link
          href="/es/acerca"
          hrefLang="es-419"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Acerca de Kitchen Converts
        </Link>
        .
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(personLd) }}
      />
    </article>
  );
}
