import Link from "next/link";
import type { Artist } from "../data/artists";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <figure className="group">
      <Link
        href={`/artists/${artist.slug}`}
        aria-label={`${artist.nameEn} / ${artist.nameKr}`}
        className="block"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${artist.gradient} transition-transform duration-500 ease-out group-hover:scale-105`}
          />
          <span className="pointer-events-none absolute bottom-2 right-2 select-none text-[5rem] font-extrabold leading-none text-white/25 transition-transform duration-500 group-hover:scale-105">
            {artist.nameEn.charAt(0)}
          </span>
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>
        <figcaption className="mt-3 text-[15px] font-medium text-foreground transition-colors group-hover:text-accent">
          {artist.nameEn}/{artist.nameKr}
        </figcaption>
      </Link>
    </figure>
  );
}
