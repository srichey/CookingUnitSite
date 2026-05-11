"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getCounterpartPath } from "@/lib/routes";
import { getStrings } from "@/lib/i18n";
import type { Locale } from "@/lib/site";

interface Props {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname() || "/";
  const strings = getStrings(locale);

  // For pages with a known translation, switch to its sibling.
  // For unknown pages (blog posts, etc.) fall back to the locale root.
  const englishHref = locale === "en" ? null : (getCounterpartPath(pathname, "en") ?? "/");
  const spanishHref = locale === "es" ? null : (getCounterpartPath(pathname, "es") ?? "/es");

  return (
    <div
      className="flex items-center gap-1 text-sm"
      aria-label={strings.nav.languageLabel}
    >
      {englishHref ? (
        <Link
          href={englishHref}
          hrefLang="en-US"
          className="rounded px-2 py-1 text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-line)]/50"
        >
          EN
        </Link>
      ) : (
        <span className="rounded px-2 py-1 font-semibold text-[color:var(--color-ink)]" aria-current="true">
          EN
        </span>
      )}
      <span className="text-[color:var(--color-ink-muted)]/40" aria-hidden="true">/</span>
      {spanishHref ? (
        <Link
          href={spanishHref}
          hrefLang="es-419"
          className="rounded px-2 py-1 text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)] hover:bg-[color:var(--color-line)]/50"
        >
          ES
        </Link>
      ) : (
        <span className="rounded px-2 py-1 font-semibold text-[color:var(--color-ink)]" aria-current="true">
          ES
        </span>
      )}
    </div>
  );
}
