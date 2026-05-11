// Smart number and fraction formatting for cooking. People do not measure
// 0.6667 cups; they measure 2/3 cup. Snap reasonably close values to common
// kitchen fractions so the output looks like a real recipe.

const COMMON_FRACTIONS: Array<{ value: number; display: string }> = [
  { value: 1 / 8, display: "1/8" },
  { value: 1 / 6, display: "1/6" },
  { value: 1 / 4, display: "1/4" },
  { value: 1 / 3, display: "1/3" },
  { value: 3 / 8, display: "3/8" },
  { value: 1 / 2, display: "1/2" },
  { value: 5 / 8, display: "5/8" },
  { value: 2 / 3, display: "2/3" },
  { value: 3 / 4, display: "3/4" },
  { value: 7 / 8, display: "7/8" },
];

const SNAP_TOLERANCE = 0.02; // 2 percent of a whole unit

export interface FormatOptions {
  // Force decimal output, no fractions. Useful for metric weights.
  decimal?: boolean;
  // Number of decimal places when using decimal output.
  decimals?: number;
}

export function formatAmount(value: number, opts: FormatOptions = {}): string {
  if (!Number.isFinite(value)) return "0";

  const decimals = opts.decimals ?? 2;

  if (opts.decimal) {
    return trimTrailingZeros(value.toFixed(decimals));
  }

  if (value < 0) return `-${formatAmount(-value, opts)}`;

  const whole = Math.trunc(value);
  const remainder = value - whole;

  if (remainder < SNAP_TOLERANCE) {
    return `${whole}`;
  }
  if (1 - remainder < SNAP_TOLERANCE) {
    return `${whole + 1}`;
  }

  // Snap to the nearest common fraction within tolerance.
  let best: { display: string; diff: number } | null = null;
  for (const frac of COMMON_FRACTIONS) {
    const diff = Math.abs(remainder - frac.value);
    if (diff <= SNAP_TOLERANCE && (best === null || diff < best.diff)) {
      best = { display: frac.display, diff };
    }
  }

  if (best) {
    return whole > 0 ? `${whole} ${best.display}` : best.display;
  }

  // No clean fraction match: render as decimal with sensible precision.
  if (value < 1) return trimTrailingZeros(value.toFixed(decimals));
  if (value < 10) return trimTrailingZeros(value.toFixed(2));
  if (value < 100) return trimTrailingZeros(value.toFixed(1));
  return Math.round(value).toString();
}

function trimTrailingZeros(s: string): string {
  if (!s.includes(".")) return s;
  return s.replace(/\.?0+$/, "");
}

// Parse user input like "1 1/2", "1.5", "1/2", "2", ".5".
export function parseAmount(input: string): number | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Mixed number "1 1/2"
  const mixed = trimmed.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (mixed) {
    const whole = Number(mixed[1]);
    const num = Number(mixed[2]);
    const den = Number(mixed[3]);
    if (den === 0) return null;
    return whole + num / den;
  }

  // Simple fraction "1/2"
  const frac = trimmed.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (frac) {
    const num = Number(frac[1]);
    const den = Number(frac[2]);
    if (den === 0) return null;
    return num / den;
  }

  const n = Number(trimmed);
  if (Number.isNaN(n)) return null;
  return n;
}
