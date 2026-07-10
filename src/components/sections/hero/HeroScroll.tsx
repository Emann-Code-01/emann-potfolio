export default function HeroScroll() {
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
      <div className="relative h-px w-16 overflow-hidden bg-white/15">
        <div className="absolute -left-full top-0 h-full w-full bg-primary animate-scroll-line" />
      </div>
      <span>Scroll to explore</span>
    </div>
  );
}
