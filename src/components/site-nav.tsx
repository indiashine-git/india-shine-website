import Image from "next/image";
import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={brandHref} className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight">
          <Image src="/logo.png" alt={brandLabel} width={28} height={28} className="size-7" />
          {brandLabel}
        </Link>
        <nav className="flex items-center gap-7 text-sm text-[var(--text-muted)]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--text)] transition-colors">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
