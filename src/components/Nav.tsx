"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/interests", label: "Interests" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/about" && pathname === "/") return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
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
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "rounded-full px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                active
                  ? "bg-[var(--accent-soft)] text-foreground"
                  : "text-slate-500 hover:text-foreground hover:underline hover:decoration-2 hover:decoration-accent/80 hover:underline-offset-4",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


