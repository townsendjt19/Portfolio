import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#0a0a0a",
          color: "#ededed",
          fontSize: 32,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 600 }}>{site.name}</div>
        <div style={{ marginTop: 20, color: "#a3a3a3" }}>{site.role}</div>
        <div style={{ marginTop: 30, maxWidth: 900, fontSize: 28, color: "#d4d4d4" }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
