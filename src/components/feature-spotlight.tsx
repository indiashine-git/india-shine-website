"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface SpotlightTab {
  key: string;
  label: string;
  title: string;
  body: string;
  cta: string;
  visual: ReactNode;
}

export function FeatureSpotlight({ tabs }: { tabs: SpotlightTab[] }) {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-alt)] p-1.5 mx-auto w-fit">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              active === t.key
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight md:text-[38px]">{current.title}</h3>
            <p className="mb-7 max-w-md text-[15.5px] text-[var(--text-muted)]">{current.body}</p>
            <Link
              href="#contact"
              className="inline-flex rounded-xl bg-[var(--text)] px-5 py-3 text-sm font-bold text-[var(--bg)]"
            >
              {current.cta}
            </Link>
          </div>
          <div className="dotted-bg flex min-h-[320px] items-center justify-center rounded-[24px] border border-[var(--border)] bg-[var(--bg-alt)] p-8">
            {current.visual}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
