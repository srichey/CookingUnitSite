import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { sanitiseJsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL, SITE_TAGLINE_EN } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8ef",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: ${SITE_TAGLINE_EN}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE_EN,
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitiseJsonLd(websiteSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[color:var(--color-bg)] text-[color:var(--color-ink)]">
        <Header locale="en" />
        <main className="flex-1">{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
