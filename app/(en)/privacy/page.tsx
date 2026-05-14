import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { EmailLink } from "@/components/EmailLink";

const LAST_UPDATED_ISO = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: `Privacy policy: ${SITE_NAME}`,
  description: `How ${SITE_NAME} treats data. Plain English, no surprises.`,
  path: "/privacy",
  alternatePath: "/es/privacidad",
  locale: "en",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Privacy policy</h1>
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

      <h2 className="mt-8 font-serif text-xl font-semibold">The short version</h2>
      <p className="mt-2 text-base">
        We do not ask you to sign in. We do not run our own analytics that
        identify visitors. We do not sell anything to you, so we do not need
        your shopping history. The site shows ads through Google AdSense to
        keep it free; AdSense sets cookies as described below. Use the
        calculators, get your answer, leave.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">What our hosting provider sees</h2>
      <p className="mt-2 text-base">
        The site runs on Vercel, which receives standard web traffic data
        like IP address, browser type, and the page you requested. That data
        is used to serve the site and is governed by Vercel&rsquo;s privacy notice.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Advertising</h2>
      <p className="mt-2 text-base">
        We display ads through Google AdSense once the site qualifies. AdSense
        and its partners use cookies and similar technologies to serve ads,
        measure ad performance, and (where permitted) personalise ads based on
        your prior visits to this and other websites. Google&rsquo;s use of
        advertising cookies is described in their{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          advertising policies
        </a>
        . You can review or opt out of personalised advertising at{" "}
        <a
          href="https://www.google.com/settings/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Google Ads Settings
        </a>
        . Visitors in the EU, UK, and Switzerland are presented with a consent
        choice before personalised ads are loaded, in line with Google&rsquo;s
        EU User Consent Policy. Until ads are live on a given page, no
        advertising cookies are set.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Performance measurement</h2>
      <p className="mt-2 text-base">
        We may use Vercel Web Analytics or a privacy-friendly cookieless
        analytics provider (for example, Plausible) to understand traffic
        patterns. These tools do not identify individual visitors. We will
        update this page if that changes.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Your rights</h2>
      <p className="mt-2 text-base">
        Visitors in the European Economic Area, the United Kingdom, and
        California have rights to access, correct, delete, or restrict the
        processing of their personal data, and to object to certain processing
        such as personalised advertising. Because we do not maintain user
        accounts, the most common request is for help opting out of
        personalised ads, which you can do directly through{" "}
        <a
          href="https://www.google.com/settings/ads"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Google Ads Settings
        </a>{" "}
        and{" "}
        <a
          href="https://www.youronlinechoices.eu"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[color:var(--color-accent-strong)] underline"
        >
          Your Online Choices
        </a>
        . For any other request, email us at the address below and we will
        respond within 30 days.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Data retention</h2>
      <p className="mt-2 text-base">
        We do not store visitor-level data ourselves. Hosting and ad provider
        logs are retained according to those providers&rsquo; standard policies
        (typically 30 to 90 days for traffic logs and longer for billing
        records). Emails you send are kept until the conversation is resolved
        and then archived or deleted.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Children</h2>
      <p className="mt-2 text-base">
        This site is intended for general audiences. We do not knowingly
        collect any data from children under 13. If you believe a child has
        provided us with information, contact us and we will remove it.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-base">
        Privacy questions can be sent to{" "}
        <EmailLink
          user="hello"
          domain="kitchenconverts.com"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        />
        .
      </p>
    </article>
  );
}
