export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

      <div className="relative z-10 px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white/50">
          Independent Music Label
        </p>
        <h1 className="text-6xl font-extrabold tracking-[0.2em] text-white sm:text-8xl lg:text-9xl">
          4RGNL
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm uppercase tracking-[0.25em] text-white/60">
          Sound without compromise
        </p>
      </div>

      <a
        href="#artists"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white"
      >
        Scroll
      </a>
    </section>
  );
}
