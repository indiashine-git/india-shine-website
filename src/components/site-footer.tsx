import Image from "next/image";
import Link from "next/link";

interface FooterCol {
  heading: string;
  links: { href: string; label: string; external?: boolean }[];
}

export function SiteFooter({
  blurb,
  columns,
}: {
  blurb: string;
  columns: FooterCol[];
}) {
  return (
    <footer className="mt-0 bg-[#0a0a0f] px-6 pb-8 pt-16 text-[#9c9cae]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-12 pb-14">
          <div className="max-w-[300px]">
            <div className="mb-4 flex items-center gap-2.5">
              <Image src="/logo.png" alt="India-Shine" width={32} height={32} className="size-8" />
              <span className="text-lg font-bold text-[#f4f4f8]">India-Shine</span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-[#7c7c8e]">{blurb}</p>
            <div className="space-y-1.5 text-sm">
              <a href="mailto:info@india-shine.com" className="block text-[#c8c8d4] hover:text-[#f4f4f8]">
                info@india-shine.com
              </a>
              <a href="tel:+919893049006" className="block text-[#c8c8d4] hover:text-[#f4f4f8]">
                +91 98930 49006
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-14">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#f4f4f8]">{col.heading}</h4>
                {col.links.map((l) =>
                  l.external ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block py-1.5 text-sm text-[#9c9cae] hover:text-[#f4f4f8]"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.href} href={l.href} className="block py-1.5 text-sm text-[#9c9cae] hover:text-[#f4f4f8]">
                      {l.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#24242f] pt-6 text-[13px] text-[#7c7c8e]">
          <span>© 2026 India-Shine Business Support Services</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-[#f4f4f8]">Privacy Policy</Link>
            <Link href="/terms-of-usage" className="hover:text-[#f4f4f8]">Terms of Usage</Link>
            <Link href="/data-deletion" className="hover:text-[#f4f4f8]">Data Deletion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
