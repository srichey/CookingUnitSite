import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { EmailLink } from "@/components/EmailLink";

export const metadata: Metadata = buildMetadata({
  title: `Contact ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME}. Corrections, suggestions, and questions about cooking conversions are welcome.`,
  path: "/contact",
  alternatePath: "/es/contacto",
  locale: "en",
});

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-prose px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Contact</h1>
      <p className="mt-4 text-base">
        The fastest way to reach us is email. We read everything and respond when we can. Reasonable response time is a few days.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Found an error?</h2>
      <p className="mt-2 text-base">
        Tell us the calculator URL, what you searched for, what number you got, and what you expected. Paste the URL in the email so we can find the page fast. We will fix it and update the page.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Suggest a calculator</h2>
      <p className="mt-2 text-base">
        Missing a conversion you use often? Let us know which one. Long-tail ingredient conversions are easy to add when we know the demand is real.
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Email</h2>
      <p className="mt-2 text-base">
        Send a note to{" "}
        <EmailLink
          user="hello"
          domain="kitchenconverts.com"
          className="text-[color:var(--color-accent-strong)] underline hover:text-[color:var(--color-ink)]"
        />
        .
      </p>

      <h2 className="mt-8 font-serif text-xl font-semibold">Privacy</h2>
      <p className="mt-2 text-base">
        Anything you send is read by the person running the site. We do not use it for marketing, and we do not share it.
      </p>
    </article>
  );
}
