import Link from "next/link";
import { getStrings } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/lib/site";
import { SITE_NAME } from "@/lib/site";

interface HeaderProps {
  locale: Locale;
}

interface NavLink {
  href: string;
  label: string;
}

export function Header({ locale }: HeaderProps) {
  const strings = getStrings(locale);
  const homeHref = locale === "en" ? "/" : "/es";

  const links: NavLink[] = locale === "en"
    ? [
        { href: "/calculators", label: strings.nav.calculators },
        { href: "/faq", label: strings.nav.faq },
        { href: "/blog", label: strings.nav.blog },
      ]
    : [
        { href: "/es/calculadoras", label: strings.nav.calculators },
        { href: "/es/preguntas", label: strings.nav.faq },
        { href: "/es/blog", label: strings.nav.blog },
      ];

  return (
    <header className="border-b border-[color:var(--color-line)] bg-[color:var(--color-bg)]/95 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href={homeHref}
          aria-label={SITE_NAME}
          className="flex items-center gap-2 text-[color:var(--color-ink)] whitespace-nowrap"
        >
          {/* SVG is already a vector; serve directly from /public without next/image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kitchenconverts-logo.svg"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-md shadow-[var(--shadow-soft)] sm:h-10 sm:w-10"
          />
          <span className="hidden font-serif text-lg font-semibold sm:inline">
            {SITE_NAME}
          </span>
        </Link>
        <nav
          className="flex items-center gap-0.5 sm:gap-1"
          aria-label={locale === "en" ? "Main navigation" : "Navegación principal"}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-sm text-[color:var(--color-ink)] hover:bg-[color:var(--color-line)]/50 sm:px-3"
            >
              {link.label}
            </Link>
          ))}
          <span className="hidden h-4 w-px bg-[color:var(--color-line)] sm:mx-1 sm:block" aria-hidden="true" />
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
