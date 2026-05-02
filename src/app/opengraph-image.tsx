import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Cueserve — AI-Native Digital Engineering";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c385a",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 120, letterSpacing: "0.06em", fontWeight: 700 }}>
          CUESERVE
        </div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#2384c6" }}>
          AI-Native Digital Engineering
        </div>
      </div>
    ),
    { ...size },
  );
}
