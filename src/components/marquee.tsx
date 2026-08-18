export function Marquee({ items }: { items: string[] }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg-alt)] py-12">
      <div className="flex w-max animate-marquee items-center">
        {tripled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-12 whitespace-nowrap pr-12">
            <span className="text-4xl font-semibold tracking-wide [-webkit-text-stroke:0.75px_var(--text)] text-transparent md:text-5xl">
              {item}
            </span>
            <span className="size-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
