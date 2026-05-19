import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { defaultMetadata } from "@/lib/metadata";
import { Footer } from "@/components/layouts/Footer";
import { MobileBottomBar } from "@/components/layouts/MobileBottomBar";
import { Navbar } from "@/components/layouts/Navbar";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} pb-20 md:pb-0`}><Navbar /><MobileBottomBar />{children}<Footer /></body>
    </html>
  );
}
