import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neil Tripathi | Portfolio",
  description:
    "Portfolio of Neil Tripathi - CS @ NYU, working across AI/ML, crypto, UE5, and writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen bg-background text-foreground">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
            <Nav />
          </header>

          <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
