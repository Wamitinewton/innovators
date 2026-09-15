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

const SITE_URL = "https://innovators.okoasem.app";
const SITE_TITLE = "Science Innovators Club — Meru University";
const SITE_DESCRIPTION =
  "One KES 100 membership unlocks every interest group's WhatsApp for the semester — Android, Cyber Security, Web Development, Data Science, Robotics & IoT, and UI/UX Design.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Science Innovators Club",
  },
  description: SITE_DESCRIPTION,
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
    type: "website",
    url: "/",
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/brand/lockup-900.png", width: 900, height: 899, alt: "Science Innovators Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
