import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zuhaib Akhtar — software engineering student",
  description:
    "Portfolio of Zuhaib Akhtar — software engineering student & competitive programmer. Tinkering with python, c++, javascript, react, dsa.",
  keywords: [
    "Zuhaib Akhtar",
    "Portfolio",
    "Software Engineer",
    "Competitive Programmer",
    "GIKI",
    "Codeforces",
  ],
  authors: [{ name: "Zuhaib Akhtar" }],
  openGraph: {
    title: "Zuhaib Akhtar — software engineering student",
    description:
      "Portfolio of Zuhaib Akhtar — software engineering student & competitive programmer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="font-mono bg-ink-950 text-ink-100 antialiased no-native-cursor">
        {children}
      </body>
    </html>
  );
}
