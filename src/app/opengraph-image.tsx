import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card LinkedIn, Messenger and Slack show when the link is shared.
const BARS: [number, string][][] = [
  [[120, "#5CC8D8"], [26, "#D5DEEA"], [120, "#5CC8D8"]],
  [[120, "#D5DEEA"], [120, "#B6E05E"], [66, "#5CC8D8"]],
  [[40, "#FF6496"], [120, "#B6E05E"], [240, "#D5DEEA"]],
  [[40, "#FF6496"], [190, "#D5DEEA"]],
  [[120, "#5CC8D8"], [26, "#FF6496"], [40, "#B9A3FF"]],
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#0D1726", padding: "72px 80px", color: "#EAF0F8" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {BARS.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: 10, paddingLeft: i === 3 || i === 4 ? 60 : 0 }}>
              {line.map(([w, c], j) => (
                <div key={j} style={{ width: w, height: 14, borderRadius: 7, background: c }} />
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>{SITE.name}</div>
          <div style={{ marginTop: 20, fontSize: 34, color: "#79ABFF" }}>{SITE.role}</div>
          <div style={{ marginTop: 14, fontSize: 28, color: "#A6B5CA" }}>{SITE.tagline.join("  ")}</div>
        </div>
      </div>
    ),
    size,
  );
}
