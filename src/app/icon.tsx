import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C385A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
          fontWeight: 700,
          color: "#2384C6",
          fontSize: 22,
          letterSpacing: "-0.04em",
        }}
      >
        C
      </div>
    ),
    size,
  );
}
