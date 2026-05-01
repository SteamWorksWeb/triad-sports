import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Triad Sports Foundation | Empowering Communities Through Sports",
  description:
    "Triad Sports Foundation builds facilities and provides resources so communities can focus on what matters: the game. Fund the future of sports today.",
  keywords: [
    "sports foundation",
    "community sports",
    "sports facilities",
    "Triad Sports",
  ],
  openGraph: {
    title: "Triad Sports Foundation",
    description:
      "Empowering communities through the power of sports. We build the facilities and provide the resources.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} style={{ fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}>
      <body className="min-h-full flex flex-col antialiased">{children}<Footer /></body>
    </html>
  );
}
