import SocialLinks from "./components/SocialLinks";

const instagramTiles = [
  "from-zinc-300 to-zinc-500",
  "from-rose-300 to-rose-500",
  "from-sky-300 to-sky-500",
  "from-amber-300 to-amber-500",
  "from-neutral-400 to-neutral-600",
  "from-indigo-300 to-indigo-500",
  "from-lime-300 to-lime-500",
  "from-stone-300 to-stone-500",
  "from-fuchsia-300 to-fuchsia-500",
];

export default function Home() {
  return (
    <div>
      {/* Hero video */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-[1400px] px-0 sm:px-8 sm:py-8">
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/YE7VzlLtp-4?rel=0"
              title="4RGNL — Latest Release"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Images + Stream */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Instagram */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Images
            </p>
            <h1 className="mt-2 text-4xl font-bold text-foreground">Instagram</h1>
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {instagramTiles.map((gradient, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square overflow-hidden"
                  aria-label="View on Instagram"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-[11px] font-medium uppercase tracking-[0.15em] text-white opacity-0 transition-opacity duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                    View
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Spotify */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Stream
            </p>
            <h1 className="mt-2 text-4xl font-bold text-foreground">Spotify</h1>
            <div className="mt-6 overflow-hidden rounded-xl">
              <iframe
                title="4RGNL on Spotify"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                width="100%"
                height="420"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
            <div className="mt-10 flex justify-center lg:justify-start">
              <SocialLinks size={20} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
