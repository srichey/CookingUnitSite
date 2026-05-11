# KitchenConverts logo exports

Generated from `KITCHENCONVERTS.COM.svg`.

## Core files
- `kitchenconverts-logo.svg` — original scalable SVG
- `favicon.ico` — multi-size favicon containing 16, 32, 48, and 64 px
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-48x48.png`
- `apple-touch-icon.png` — 180 x 180
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `maskable-icon-192x192.png`
- `maskable-icon-512x512.png`
- `logo-square-256.png`
- `logo-square-512.png`
- `logo-square-1024.png`
- `social-profile-1024.png`
- `og-image-1200x630.png`
- `social-card-1200x675.png`
- `site.webmanifest` — starter manifest snippet

## Suggested Next.js/public placement
Put these in `/public`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `maskable-icon-192x192.png`
- `maskable-icon-512x512.png`
- `og-image-1200x630.png`
- `site.webmanifest`

## Suggested metadata
```tsx
export const metadata = {
  title: "KitchenConverts.com",
  description: "Convert and scale recipes without guessing.",
  themeColor: "#FFF8EF",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    images: [{ url: "/og-image-1200x630.png", width: 1200, height: 630 }],
  },
};
```
