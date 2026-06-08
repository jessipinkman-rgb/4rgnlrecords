import { artists } from "../data/artists";
import ArtistCard from "./ArtistCard";

export default function ArtistGrid() {
  return (
    <section id="artists" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-white sm:text-4xl">
            Artists
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            {artists.length} / Roster
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {artists.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
