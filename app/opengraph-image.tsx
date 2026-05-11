import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE_EN } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME}: ${SITE_TAGLINE_EN}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #fff8ef 0%, #f3e3c8 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: "#6b5d54",
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <span>🥄</span>
          <span>{SITE_NAME}</span>
        </div>
        <div
          style={{
            fontSize: 84,
            color: "#2f241d",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {SITE_TAGLINE_EN}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 32,
            color: "#7c9a6d",
          }}
        >
          Cups, grams, tablespoons, oven temps. English and Spanish.
        </div>
      </div>
    ),
    size,
  );
}
