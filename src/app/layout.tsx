import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Portfolio of Neil Tripathi – CS @ NYU, working across AI/ML, crypto, UE5, and writing.",
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
            <nav
              className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
              aria-label="Primary"
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-800 shadow-sm"
              >
                NT
              </Link>
              <div className="hidden gap-2 text-xs font-medium text-slate-500 sm:flex">
                <Link
                  href="/about"
                  className="rounded-full px-3 py-1 text-slate-500 hover:text-foreground hover:underline hover:decoration-2 hover:decoration-accent/80 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  About
                </Link>
                <Link
                  href="/interests"
                  className="rounded-full px-3 py-1 text-slate-500 hover:text-foreground hover:underline hover:decoration-2 hover:decoration-accent/80 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Interests
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full px-3 py-1 text-slate-500 hover:text-foreground hover:underline hover:decoration-2 hover:decoration-accent/80 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Projects
                </Link>
                <Link
                  href="/papers"
                  className="rounded-full px-3 py-1 text-slate-500 hover:text-foreground hover:underline hover:decoration-2 hover:decoration-accent/80 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Papers
                </Link>
                <Link
                  href="/experience"
                  className="rounded-full px-3 py-1 text-slate-500 hover:text-foreground hover:underline hover:decoration-2 hover:decoration-accent/80 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Experience
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full px-3 py-1 text-slate-500 hover:text-foreground hover:underline hover:decoration-2 hover:decoration-accent/80 hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </header>

          <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
