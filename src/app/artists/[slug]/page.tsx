import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MediaCarousel, { type CarouselItem } from "../../components/MediaCarousel";
import { artists, getArtist } from "../../data/artists";

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  return { title: artist ? `${artist.nameEn} — 4RGNL` : "Artist — 4RGNL" };
}

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtist(slug);

  if (!artist) {
    notFound();
  }

  const albumItems: CarouselItem[] = artist.albums.map((a) => ({
    title: a.title,
    subtitle: a.year,
    gradient: a.gradient,
  }));
  const videoItems: CarouselItem[] = artist.videos.map((v) => ({
    title: v.title,
    gradient: v.gradient,
    video: true,
  }));

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
          <div className={`absolute inset-0 bg-gradient-to-br ${artist.gradient}`} />
          <span className="pointer-events-none absolute bottom-3 right-4 select-none text-[9rem] font-extrabold leading-none text-white/25">
            {artist.nameEn.charAt(0)}
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {artist.nameEn} / {artist.nameKr}
          </h1>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-accent">
            {artist.role}
          </p>

          <div className="mt-6 space-y-4 text-[14px] leading-7 text-muted">
            {artist.bioKr.map((p, i) => (
              <p key={`kr-${i}`}>{p}</p>
            ))}
            {artist.bioEn.map((p, i) => (
              <p key={`en-${i}`}>{p}</p>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-foreground">
            {artist.social.instagram && (
              <a
                href={artist.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram
              </a>
            )}
            {artist.social.instagram && artist.social.twitter && (
              <span className="text-muted">/</span>
            )}
            {artist.social.twitter && (
              <a
                href={artist.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>

      {albumItems.length > 0 && <MediaCarousel title="Album" items={albumItems} />}
      {videoItems.length > 0 && <MediaCarousel title="Videos" items={videoItems} />}
    </section>
  );
}
