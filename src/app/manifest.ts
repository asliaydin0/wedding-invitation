import type { MetadataRoute } from "next";
import { weddingConfig } from "@/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: weddingConfig.meta.title,
    short_name: `${weddingConfig.brideName} & ${weddingConfig.groomName}`,
    description: weddingConfig.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1f1914",
    theme_color: "#1f1914",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
