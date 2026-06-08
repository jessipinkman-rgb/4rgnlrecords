import type { Artist } from "../data/artists";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <a
      href="#artists"
      className="group relative block aspect-[3/4] overflow-hidden bg-zinc-900"
      aria-label={`${artist.name} — ${artist.role}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${artist.gradient} transition-transform duration-500 ease-out group-hover:scale-105`}
      />

      <span className="pointer-events-none absolute -right-2 bottom-0 select-none text-[7rem] font-extrabold leading-none text-white/5 transition-transform duration-500 group-hover:scale-105">
        {artist.name.charAt(0)}
      </span>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-white">
          {artist.name}
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
          {artist.role}
        </p>
      </div>

      <div className="absolute inset-0 border border-white/0 transition-colors duration-300 group-hover:border-white/20" />
    </a>
  );
}
