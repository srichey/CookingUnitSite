import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Terms of use: ${SITE_NAME}`,
  description: `Terms of use for ${SITE_NAME}. Free to use, no warranty, please cook responsibly.`,
  path: "/terms",
  alternatePath: "/es/terminos",
  locale: "en",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Terms of use</h1>
      <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
        Last updated: May 2026
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Use of the site</h2>
      <p className="mt-2 text-base">
        {SITE_NAME} is free to use for personal, non-commercial home cooking.
        You may share links to pages. You may not copy large portions of the
        content or republish the calculators as your own.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">No warranty</h2>
      <p className="mt-2 text-base">
        The conversions and calculators are provided as a helpful reference.
        Ingredient weights vary by brand, packing method, humidity, and how
        you scoop. For commercial baking, food safety, or anything where exact
        weight matters, weigh your ingredients with a kitchen scale and verify
        critical recipes against a trusted printed source. We make no warranty
        that any conversion is suitable for a particular recipe.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Affiliate links</h2>
      <p className="mt-2 text-base">
        Some links on the site may be affiliate links to retailers like Amazon.
        If we add them, they will be clearly marked. We only link to products
        we would use ourselves.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Changes</h2>
      <p className="mt-2 text-base">
        We may update these terms as the site grows. The last-updated date
        above tells you when the current version was posted.
      </p>
    </article>
  );
}
