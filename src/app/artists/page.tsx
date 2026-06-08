import type { Metadata } from "next";
import ArtistCard from "../components/ArtistCard";
import { artists } from "../data/artists";

export const metadata: Metadata = {
  title: "Artists — 4RGNL",
};

export default function ArtistsPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.slug} artist={artist} />
        ))}
      </div>
    </section>
  );
}
