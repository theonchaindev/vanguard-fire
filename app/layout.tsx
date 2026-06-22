import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const display = Oswald({
  variable: "--font-display-custom",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans-custom",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SurturFire — Engineered Fire Protection",
    template: "%s — SurturFire",
  },
  description:
    "SurturFire Fire Protection designs, installs and maintains life-safety systems: sprinklers, suppression, detection and passive fire protection. BAFE & FIA accredited.",
  keywords: [
    "fire protection",
    "fire sprinkler systems",
    "fire suppression",
    "passive fire protection",
    "fire safety engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
