"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface CarouselCard {
  title: string;
  body: string;
  mockup: ReactNode;
}

export function FeatureCarousel({ cards }: { cards: CarouselCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-proximity gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: "easeOut" }}
            className="w-[min(520px,82vw)] shrink-0 snap-start overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(20,20,31,0.04),0_8px_24px_rgba(20,20,31,0.06)]"
          >
            <div className="dotted-bg flex min-h-[260px] items-center justify-center bg-[var(--bg-alt)] p-9">
              {card.mockup}
            </div>
            <div className="p-6 pb-7">
              <h3 className="mb-2 text-[19px] font-bold">{card.title}</h3>
              <p className="text-[14.5px] text-[var(--text-muted)]">{card.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)]"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)]"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
