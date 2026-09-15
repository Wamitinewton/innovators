import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Science Innovators Club — Meru University",
    short_name: "Innovators Club",
    description: "Membership onboarding for Meru University Science Innovators Club.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7f0",
    theme_color: "#fbf7f0",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
