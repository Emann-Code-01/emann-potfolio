export default function HeroBackground() {
  return (
    <>
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]
          bg-size-[80px_80px]
        "
      />
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_0%,#080808_100%)]
        "
      />
    </>
  );
}
