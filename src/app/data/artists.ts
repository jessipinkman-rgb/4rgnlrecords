export type Album = {
  title: string;
  year: string;
  gradient: string;
};

export type Video = {
  title: string;
  gradient: string;
};

export type Artist = {
  slug: string;
  nameEn: string;
  nameKr: string;
  role: string;
  gradient: string;
  bioKr: string[];
  bioEn: string[];
  social: { instagram?: string; twitter?: string };
  albums: Album[];
  videos: Video[];
};

export const artists: Artist[] = [
  {
    slug: "kosmo",
    nameEn: "KOSMO",
    nameKr: "코스모",
    role: "Producer / Rapper",
    gradient: "from-zinc-300 to-zinc-500",
    bioKr: [
      "KOSMO(코스모)는 독창적인 사운드와 깊이 있는 가사로 주목받는 4RGNL의 대표 프로듀서이자 래퍼이다.",
      "데뷔 이래 다수의 정규 앨범과 협업을 통해 신스 기반의 미래지향적 힙합 사운드를 구축해왔으며, 국내외 무대에서 그 역량을 증명하고 있다.",
    ],
    bioEn: [
      "KOSMO is a flagship producer and rapper of 4RGNL, recognized for an original sound and lyrics with depth.",
      "Since debut, KOSMO has built a futuristic, synth-driven hip-hop sound across multiple albums and collaborations.",
    ],
    social: { instagram: "https://instagram.com/", twitter: "https://twitter.com/" },
    albums: [
      { title: "ORBIT", year: "2025", gradient: "from-zinc-700 to-black" },
      { title: "NIGHT SIGNAL", year: "2024", gradient: "from-neutral-600 to-neutral-900" },
      { title: "STATIC", year: "2023", gradient: "from-stone-600 to-stone-900" },
      { title: "FIRST LIGHT", year: "2022", gradient: "from-zinc-500 to-zinc-800" },
    ],
    videos: [
      { title: "ORBIT (Official MV)", gradient: "from-zinc-700 to-black" },
      { title: "NIGHT SIGNAL (Live)", gradient: "from-neutral-700 to-black" },
      { title: "STATIC (Visualizer)", gradient: "from-stone-700 to-black" },
    ],
  },
  {
    slug: "neva",
    nameEn: "NÉVA",
    nameKr: "네바",
    role: "Vocalist",
    gradient: "from-rose-200 to-rose-400",
    bioKr: [
      "NÉVA(네바)는 몽환적인 음색과 섬세한 표현력으로 사랑받는 보컬리스트이다.",
      "R&B와 얼터너티브 팝을 넘나드는 작업으로 4RGNL 사운드의 폭을 넓히고 있다.",
    ],
    bioEn: [
      "NÉVA is a vocalist loved for a dreamy tone and delicate expression.",
      "Working across R&B and alternative pop, NÉVA widens the spectrum of the 4RGNL sound.",
    ],
    social: { instagram: "https://instagram.com/" },
    albums: [
      { title: "GLOW", year: "2025", gradient: "from-rose-400 to-rose-700" },
      { title: "VELVET", year: "2024", gradient: "from-pink-400 to-pink-700" },
      { title: "AURORA", year: "2023", gradient: "from-fuchsia-400 to-fuchsia-700" },
    ],
    videos: [
      { title: "GLOW (Official MV)", gradient: "from-rose-500 to-black" },
      { title: "VELVET (Live)", gradient: "from-pink-500 to-black" },
    ],
  },
  {
    slug: "ryu-seven",
    nameEn: "RYU SEVEN",
    nameKr: "류세븐",
    role: "Rapper",
    gradient: "from-stone-300 to-stone-500",
    bioKr: [
      "RYU SEVEN(류세븐)은 강렬한 플로우와 직설적인 메시지로 무대를 장악하는 래퍼이다.",
      "다수의 사이퍼와 페스티벌 무대를 통해 라이브 퍼포먼스의 강자로 자리매김했다.",
    ],
    bioEn: [
      "RYU SEVEN is a rapper who commands the stage with an intense flow and direct message.",
      "Through countless cyphers and festival stages, RYU SEVEN stands out as a live performer.",
    ],
    social: { instagram: "https://instagram.com/", twitter: "https://twitter.com/" },
    albums: [
      { title: "SEVEN", year: "2025", gradient: "from-stone-700 to-black" },
      { title: "NO BRAKES", year: "2023", gradient: "from-neutral-700 to-black" },
    ],
    videos: [{ title: "SEVEN (Official MV)", gradient: "from-stone-700 to-black" }],
  },
  {
    slug: "miro",
    nameEn: "MIRO",
    nameKr: "미로",
    role: "DJ / Producer",
    gradient: "from-sky-200 to-sky-400",
    bioKr: [
      "MIRO(미로)는 클럽과 페스티벌을 오가며 활동하는 DJ이자 프로듀서이다.",
      "하우스와 일렉트로닉을 기반으로 한 트랙으로 4RGNL의 댄스 라인을 이끈다.",
    ],
    bioEn: [
      "MIRO is a DJ and producer active across clubs and festivals.",
      "With house- and electronic-rooted tracks, MIRO leads the dance line of 4RGNL.",
    ],
    social: { instagram: "https://instagram.com/" },
    albums: [
      { title: "PULSE", year: "2025", gradient: "from-sky-600 to-black" },
      { title: "MIDNIGHT DRIVE", year: "2024", gradient: "from-cyan-600 to-black" },
    ],
    videos: [{ title: "PULSE (Visualizer)", gradient: "from-sky-600 to-black" }],
  },
  {
    slug: "ako",
    nameEn: "AKO",
    nameKr: "아코",
    role: "Singer-Songwriter",
    gradient: "from-amber-200 to-amber-400",
    bioKr: [
      "AKO(아코)는 따뜻한 멜로디와 진솔한 이야기를 담는 싱어송라이터이다.",
      "어쿠스틱한 감성과 현대적인 프로덕션을 조화시키는 작업으로 호평받고 있다.",
    ],
    bioEn: [
      "AKO is a singer-songwriter who carries warm melodies and honest stories.",
      "AKO is praised for blending acoustic sensibility with modern production.",
    ],
    social: { instagram: "https://instagram.com/", twitter: "https://twitter.com/" },
    albums: [
      { title: "LETTERS", year: "2025", gradient: "from-amber-600 to-black" },
      { title: "HOME", year: "2023", gradient: "from-orange-600 to-black" },
    ],
    videos: [{ title: "LETTERS (Official MV)", gradient: "from-amber-600 to-black" }],
  },
  {
    slug: "vanta",
    nameEn: "VANTA",
    nameKr: "반타",
    role: "Producer",
    gradient: "from-neutral-400 to-neutral-600",
    bioKr: [
      "VANTA(반타)는 어둡고 미니멀한 비트로 정체성을 구축한 프로듀서이다.",
      "트랩과 앰비언트를 결합한 사운드 디자인으로 다수의 아티스트와 협업하고 있다.",
    ],
    bioEn: [
      "VANTA is a producer who built an identity on dark, minimal beats.",
      "With sound design that fuses trap and ambient, VANTA collaborates with many artists.",
    ],
    social: { instagram: "https://instagram.com/" },
    albums: [
      { title: "VOID", year: "2024", gradient: "from-neutral-800 to-black" },
      { title: "BLACK NOISE", year: "2022", gradient: "from-zinc-800 to-black" },
    ],
    videos: [{ title: "VOID (Visualizer)", gradient: "from-neutral-800 to-black" }],
  },
  {
    slug: "lune",
    nameEn: "LUNE",
    nameKr: "룬",
    role: "Vocalist",
    gradient: "from-indigo-200 to-indigo-400",
    bioKr: [
      "LUNE(룬)은 청량하면서도 깊은 보컬로 폭넓은 장르를 소화하는 보컬리스트이다.",
      "발라드부터 시티팝까지 다채로운 작업으로 대중과 평단의 사랑을 받고 있다.",
    ],
    bioEn: [
      "LUNE is a vocalist with a crisp yet deep voice that spans a wide range of genres.",
      "From ballads to city pop, LUNE earns the love of both the public and critics.",
    ],
    social: { instagram: "https://instagram.com/", twitter: "https://twitter.com/" },
    albums: [
      { title: "MOONLIT", year: "2025", gradient: "from-indigo-600 to-black" },
      { title: "TIDES", year: "2024", gradient: "from-violet-600 to-black" },
    ],
    videos: [{ title: "MOONLIT (Official MV)", gradient: "from-indigo-600 to-black" }],
  },
  {
    slug: "dose",
    nameEn: "DOSE",
    nameKr: "도즈",
    role: "Rapper",
    gradient: "from-lime-200 to-lime-400",
    bioKr: [
      "DOSE(도즈)는 위트 있는 라임과 중독적인 훅으로 무장한 래퍼이다.",
      "신선한 감각의 트랙으로 4RGNL의 차세대 주자로 떠오르고 있다.",
    ],
    bioEn: [
      "DOSE is a rapper armed with witty rhymes and addictive hooks.",
      "With a fresh sensibility, DOSE is rising as the next generation of 4RGNL.",
    ],
    social: { instagram: "https://instagram.com/" },
    albums: [
      { title: "OVERDOSE", year: "2025", gradient: "from-lime-600 to-black" },
      { title: "REFILL", year: "2024", gradient: "from-green-600 to-black" },
    ],
    videos: [{ title: "OVERDOSE (Official MV)", gradient: "from-lime-600 to-black" }],
  },
];

export function getArtist(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
