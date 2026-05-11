import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `Privacy policy: ${SITE_NAME}`,
  description: `How ${SITE_NAME} treats data. Short version: we don't ask for your data.`,
  path: "/privacy",
  alternatePath: "/es/privacidad",
  locale: "en",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Privacy policy</h1>
      <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
        Last updated: May 2026
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">The short version</h2>
      <p className="mt-2 text-base">
        We do not ask you to sign in. We do not run our own analytics that
        identify visitors. We do not sell anything to you, so we do not need
        your shopping history. Use the calculators, get your answer, leave.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">What our hosting provider sees</h2>
      <p className="mt-2 text-base">
        The site runs on Vercel, which receives standard web traffic data
        like IP address, browser type, and the page you requested. That data
        is used to serve the site and is governed by Vercel's privacy notice.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Advertising</h2>
      <p className="mt-2 text-base">
        We plan to display ads through Google AdSense once the site qualifies.
        AdSense uses cookies to serve relevant ads and measure ad performance.
        You can review or opt out of personalised advertising at{" "}
        <a
          href="https://www.google.com/settings/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Google Ads Settings
        </a>
        . Until ads are live, no advertising cookies are set.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Performance measurement</h2>
      <p className="mt-2 text-base">
        If we add a privacy-friendly analytics provider (for example, Plausible
        or Vercel's built-in Web Analytics), it will be cookieless and will
        not identify visitors. We will update this page if that changes.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Children</h2>
      <p className="mt-2 text-base">
        This site is intended for general audiences. We do not knowingly
        collect any data from children under 13.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-base">
        Privacy questions can be sent through the contact link in the footer.
      </p>
    </article>
  );
}
