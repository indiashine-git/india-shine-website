export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg-alt)] py-7">
      <div className="flex w-max animate-marquee items-center gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-2xl font-extrabold tracking-tight text-[var(--text)] md:text-3xl">{item}</span>
            <span className="size-2 rounded-full bg-[var(--accent)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
