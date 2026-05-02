import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cueserve",
    short_name: "Cueserve",
    description: "AI-native digital engineering",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c385a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
