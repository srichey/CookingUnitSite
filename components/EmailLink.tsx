"use client";

import { useState, useCallback } from "react";

interface EmailLinkProps {
  user: string;
  domain: string;
  className?: string;
  // Optional visible label override. If omitted, the email is rendered after
  // hydration. Pre-hydration we render obfuscated text so basic spam crawlers
  // (which fetch HTML and harvest mailtos) cannot pick the address up.
  label?: string;
}

/**
 * Client-rendered email link. The address is split into two props and only
 * assembled in the browser, so plain HTTP scrapers see no usable address.
 * Falls back to a visible "[user] at [domain]" string before hydration.
 */
export function EmailLink({ user, domain, className, label }: EmailLinkProps) {
  const [revealed, setRevealed] = useState(false);
  const address = `${user}@${domain}`;

  const reveal = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Build the mailto on click so the href is never in the static HTML.
      const a = e.currentTarget;
      a.href = `mailto:${address}`;
      setRevealed(true);
    },
    [address]
  );

  if (revealed) {
    return (
      <a href={`mailto:${address}`} className={className}>
        {label ?? address}
      </a>
    );
  }

  return (
    <a
      href="#"
      onClick={reveal}
      className={className}
      aria-label={`Email ${user} at ${domain}`}
    >
      {label ?? `${user} (at) ${domain}`}
    </a>
  );
}
