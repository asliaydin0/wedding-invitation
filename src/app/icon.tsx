import { ImageResponse } from "next/og";
import { weddingConfig } from "@/config";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Dynamic favicon from couple initials — avoids /favicon.ico 404 */
export default function Icon() {
  const initials = `${weddingConfig.brideName.charAt(0)}${weddingConfig.groomName.charAt(0)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5e1727",
          color: "#faf7f2",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        {initials}
      </div>
    ),
    { ...size },
  );
}
