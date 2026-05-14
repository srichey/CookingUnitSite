import type { NextConfig } from "next";

// Security headers applied to every response. Tuned for a static-mostly site
// that calls out to Google AdSense, Google Fonts (next/font), and Vercel
// analytics. Tighten further once the site stops loading any third-party
// scripts beyond AdSense.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Cross-origin isolation pair. COEP intentionally omitted — it breaks
  // AdSense and other third-party embeds. COOP and CORP are safe and
  // give us the remaining headroom on securityheaders.com.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // Conservative CSP. AdSense needs Google ad domains; tighten as the
  // ad stack stabilises. Report-only first if Google rejects the policy
  // by switching the header key to "Content-Security-Policy-Report-Only".
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "img-src 'self' data: https://*.googlesyndication.com https://*.google.com https://*.gstatic.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://*.googleadservices.com https://*.google.com https://va.vercel-scripts.com",
      "connect-src 'self' https://*.googlesyndication.com https://*.google.com https://*.doubleclick.net https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      "frame-src https://*.googlesyndication.com https://*.google.com https://*.doubleclick.net",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
