import { ADSENSE_CLIENT } from "@/lib/site";
import { getStrings } from "@/lib/i18n";
import type { Locale } from "@/lib/site";

interface AdSlotProps {
  // AdSense slot ID. When AdSense is wired up, pass real slot IDs here.
  slot?: string;
  // Approximate size; we reserve space at build time to prevent layout shift.
  size?: "leaderboard" | "rectangle" | "inline";
  locale: Locale;
  className?: string;
}

const SIZES: Record<NonNullable<AdSlotProps["size"]>, { minHeight: string; maxWidth: string }> = {
  leaderboard: { minHeight: "90px", maxWidth: "728px" },
  rectangle: { minHeight: "250px", maxWidth: "336px" },
  inline: { minHeight: "120px", maxWidth: "100%" },
};

export function AdSlot({ slot, size = "inline", locale, className }: AdSlotProps) {
  const strings = getStrings(locale);
  const dims = SIZES[size];
  const isLive = Boolean(ADSENSE_CLIENT && slot);

  return (
    <aside
      aria-label={strings.adSlot.label}
      className={`mx-auto my-6 w-full ${className || ""}`}
      style={{ maxWidth: dims.maxWidth }}
    >
      <div
        className="flex items-center justify-center rounded-md border border-dashed border-[color:var(--color-line-strong)] bg-white/40 text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)]"
        style={{ minHeight: dims.minHeight }}
      >
        {isLive ? (
          // When AdSense is live, render the real ins element.
          <ins
            className="adsbygoogle block"
            style={{ display: "block", width: "100%", height: dims.minHeight }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <span>{strings.adSlot.label}</span>
        )}
      </div>
    </aside>
  );
}
