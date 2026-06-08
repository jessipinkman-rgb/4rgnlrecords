"use client";

import { useRef } from "react";

export type CarouselItem = {
  title: string;
  subtitle?: string;
  gradient: string;
  video?: boolean;
};

export default function MediaCarousel({
  title,
  items,
}: {
  title: string;
  items: CarouselItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 600), behavior: "smooth" });
  };

  return (
    <section className="mt-16">
      <header className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll(-1)}
            className="flex h-9 w-9 items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll(1)}
            className="flex h-9 w-9 items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Arrow dir="right" />
          </button>
        </div>
      </header>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {items.map((item, i) => (
          <article
            key={`${item.title}-${i}`}
            className="group w-40 shrink-0 snap-start sm:w-48"
          >
            <div
              className={`relative aspect-square overflow-hidden bg-gradient-to-br ${item.gradient}`}
            >
              {item.video && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-300 group-hover:scale-110">
                    <Play />
                  </span>
                </span>
              )}
            </div>
            <p className="mt-2 truncate text-[13px] font-medium text-foreground">
              {item.title}
            </p>
            {item.subtitle && (
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
                {item.subtitle}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function Play() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
