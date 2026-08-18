"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps hero content and moves it at a different rate than scroll
 * (classic parallax) using useScroll + useTransform, tied to actual
 * scroll progress rather than a fixed-duration tween.
 */
export function ParallaxHeroBg({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y, opacity }} className="pointer-events-none absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}
