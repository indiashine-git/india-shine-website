"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Animates a number counting up when it scrolls into view, using a
 * spring (not a linear tween) so it settles with real physics instead
 * of a flat ramp. Non-numeric labels (e.g. "24/7", "∞") pass through
 * unanimated — only used where the value is a plain number.
 */
export function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 22, stiffness: 90 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [spring, suffix]);

  return (
    <span className={className} ref={ref}>
      0{suffix}
    </span>
  );
}
