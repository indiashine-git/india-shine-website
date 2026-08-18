"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface HelpCard {
  tag: string;
  tagColor: string;
  title: string;
  href: string;
  external?: boolean;
}

export function HelpScrollRow({ cards }: { cards: HelpCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={trackRef}
      className="no-scrollbar flex cursor-grab snap-x snap-proximity gap-5 overflow-x-auto pb-2 active:cursor-grabbing"
    >
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="w-[240px] shrink-0 snap-start"
        >
          {c.external ? (
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer noopener"
              className="block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors hover:border-[var(--accent)]/40"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${c.tagColor}`}>
                  {c.tag}
                </span>
                <ArrowUpRight size={16} className="text-[var(--text-muted)]" />
              </div>
              <div className="text-[15px] font-bold">{c.title}</div>
            </a>
          ) : (
            <Link
              href={c.href}
              className="block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors hover:border-[var(--accent)]/40"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${c.tagColor}`}>
                  {c.tag}
                </span>
                <ArrowUpRight size={16} className="text-[var(--text-muted)]" />
              </div>
              <div className="text-[15px] font-bold">{c.title}</div>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}
