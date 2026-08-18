import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

interface PhotoStat {
  src: string;
  alt: string;
  num: string;
  label: string;
}

export function PhotoStats({ stats }: { stats: PhotoStat[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((s, i) => {
        const match = s.num.match(/^(\d+)(%?)$/);
        return (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-[var(--shadow-lg)]">
              <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/5 to-black/10" />
              <div className="absolute left-5 top-5 text-white">
                <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  {match ? <CountUp value={Number(match[1])} suffix={match[2]} /> : s.num}
                </div>
                <div className="mt-1.5 max-w-[70%] text-sm opacity-90">{s.label}</div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
