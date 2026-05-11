import Link from "next/link";
import { getStrings } from "@/lib/i18n";
import type { Locale } from "@/lib/site";
import { SITE_NAME } from "@/lib/site";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const strings = getStrings(locale);
  const year = new Date().getFullYear();
  const privacyHref = locale === "en" ? "/privacy" : "/es/privacidad";
  const termsHref = locale === "en" ? "/terms" : "/es/terminos";
  const faqHref = locale === "en" ? "/faq" : "/es/preguntas";
  const blogHref = locale === "en" ? "/blog" : "/es/blog";

  return (
    <footer className="mt-auto border-t border-[color:var(--color-line)] bg-white/60">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-[color:var(--color-ink-muted)] sm:px-6">
        <p className="font-serif text-base text-[color:var(--color-ink)]">{strings.footer.tagline}</p>
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-wrap">
          <Link href={faqHref} className="hover:text-[color:var(--color-ink)] hover:underline">
            {strings.footer.faq}
          </Link>
          <Link href={blogHref} className="hover:text-[color:var(--color-ink)] hover:underline">
            {strings.footer.blog}
          </Link>
          <Link href={privacyHref} className="hover:text-[color:var(--color-ink)] hover:underline">
            {strings.footer.privacy}
          </Link>
          <Link href={termsHref} className="hover:text-[color:var(--color-ink)] hover:underline">
            {strings.footer.terms}
          </Link>
        </div>
        <p className="mt-6 text-xs">
          {year} {SITE_NAME}. {strings.footer.rights}
        </p>
      </div>
    </footer>
  );
}
