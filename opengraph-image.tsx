import { ImageResponse } from "next/og";

export const alt = "Licences — Vous payez des logiciels que personne n'utilise.";
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
          justifyContent: "space-between",
          background: "#faf7f2",
          color: "#14213d",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 44, fontWeight: 700 }}>
          Licences
          <div style={{ width: 14, height: 14, background: "#c2410c", marginLeft: 8 }} />
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.08 }}>
          Vous payez des logiciels que personne n&apos;utilise.
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#c2410c", fontWeight: 600 }}>
          Repérez les comptes inutilisés et les doublons.
        </div>
      </div>
    ),
    size,
  );
}
