export type Artist = {
  name: string;
  role: string;
  /** Tailwind gradient classes used as the card's dark background. */
  gradient: string;
};

export const artists: Artist[] = [
  { name: "KOSMO", role: "Producer / Rapper", gradient: "from-zinc-800 to-black" },
  { name: "NÉVA", role: "Vocalist", gradient: "from-neutral-700 to-neutral-950" },
  { name: "RYU SEVEN", role: "Rapper", gradient: "from-stone-800 to-black" },
  { name: "MIRO", role: "DJ / Producer", gradient: "from-zinc-700 to-zinc-950" },
  { name: "AKO", role: "Singer-Songwriter", gradient: "from-neutral-800 to-black" },
  { name: "VANTA", role: "Producer", gradient: "from-gray-800 to-black" },
  { name: "LUNE", role: "Vocalist", gradient: "from-stone-700 to-stone-950" },
  { name: "DOSE", role: "Rapper", gradient: "from-zinc-800 to-neutral-950" },
];
