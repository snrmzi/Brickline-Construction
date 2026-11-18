import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const heading = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading-src",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
});

export const metadata: Metadata = {
  title: {
    default: "Brickline Construction",
    template: "%s | Brickline Construction",
  },
  description:
    "Brickline Construction: residential and commercial builds, renovations, and project management. Built right. Built to last.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}