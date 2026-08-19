"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavLink {
  href: string;
  label: string;
}

export function SiteNav({
  brandHref,
  brandLabel,
  links,
}: {
  brandHref: string;
  brandLabel: string;
  links: NavLink[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={brandHref}
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight"
        >
          <Image src="/logo.png" alt={brandLabel} width={28} height={28} className="size-7" />
          {brandLabel}
        </Link>

        {/* Desktop nav — hidden below md, where it can't fit horizontally. */}
        <nav className="hidden items-center gap-7 text-sm text-[var(--text-muted)] md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--text)] transition-colors">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile: theme toggle stays visible, links move into the
            hamburger panel below. */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-md text-[var(--text)] hover:bg-[var(--border)]/40"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--border)] bg-[var(--bg)] px-6 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-[15px] text-[var(--text-muted)] hover:bg-[var(--border)]/30 hover:text-[var(--text)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
