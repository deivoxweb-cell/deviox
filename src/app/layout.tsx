import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deivox Engineering | Precision Industrial Solutions",
  description: "Specialized industrial services for Power Generation, BCW Pump maintenance, and high-performance Composite Materials. ISO 9001:2015 Certified.",
  keywords: ["BCW Pump", "Industrial Engineering", "Power Generation", "Composite Materials", "Thordon Bearings", "Pump Repair"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-full flex flex-col bg-background text-foreground`} suppressHydrationWarning>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
