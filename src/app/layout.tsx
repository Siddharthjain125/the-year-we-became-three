import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Year We Became Three",
  description:
    "A cinematic birthday celebration — from two hearts to three, a journey of love and becoming.",
  openGraph: {
    title: "The Year We Became Three",
    description: "A love letter to our little family.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0f] text-white">{children}</body>
    </html>
  );
}
