import type { Metadata, Viewport } from "next";
import { Fredoka, Karla } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meruinnovators.club"),
  title: {
    default: "Science Innovators Club — Meru University",
    template: "%s · Science Innovators Club",
  },
  description:
    "Join Meru University Science Innovators Club for KES 100 a semester and unlock every interest group's WhatsApp — Android, Cyber Security, Web Development, Data Science, Robotics & IoT, and UI/UX Design.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Science Innovators Club — Meru University",
    description:
      "One KES 100 membership unlocks every interest group's WhatsApp for the semester.",
    images: ["/brand/lockup-900.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${karla.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
