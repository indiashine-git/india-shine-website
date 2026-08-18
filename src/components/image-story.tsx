import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function ImageStory({
  src,
  alt,
  title,
  body,
  reverse,
}: {
  src: string;
  alt: string;
  title: string;
  body: string;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`grid grid-cols-1 overflow-hidden rounded-[24px] shadow-[var(--shadow-lg)] md:grid-cols-2 ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        <div className={`relative min-h-[280px] md:min-h-[380px] ${reverse ? "[direction:ltr]" : ""}`}>
          <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className={`flex flex-col justify-center bg-[var(--card)] p-9 md:p-11 ${reverse ? "[direction:ltr]" : ""}`}>
          <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-[32px]">{title}</h3>
          <p className="text-[var(--text-muted)] text-base">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}
