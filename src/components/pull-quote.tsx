import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="mx-auto max-w-3xl text-center text-2xl font-bold leading-snug tracking-tight md:text-[30px]">
        {children}
      </p>
    </Reveal>
  );
}
