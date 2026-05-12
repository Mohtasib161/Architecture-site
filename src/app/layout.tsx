import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/layout/NavMenu";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mireya – Architecture & Interior Design Studio",
  description:
    "Award-winning architecture and interior design studio based in Toronto. Explore our portfolio of residential and commercial projects.",
  keywords: "architecture, interior design, portfolio, Toronto, studio",
  openGraph: {
    title: "Mireya – Architecture & Interior Design Studio",
    description: "Award-winning architecture and interior design studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefin.variable}>
      <body className="font-sans bg-bg text-body antialiased overflow-x-hidden">
        {/* Preloader */}
        <Preloader />

        {/* Custom cursor (desktop only) */}
        <CustomCursor />

        {/* Navigation */}
        <NavMenu />

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
