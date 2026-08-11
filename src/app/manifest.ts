import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Düğün Davetiyesi",
    short_name: "Davetiye",
    description: "Dijital düğün davetiyesi",
    start_url: "/",
    display: "standalone",
    background_color: "#1f1914",
    theme_color: "#1f1914",
  };
}
