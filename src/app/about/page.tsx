import type { Metadata } from "next";
import SocialLinks from "../components/SocialLinks";

export const metadata: Metadata = {
  title: "About — 4RGNL",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex flex-col items-center">
        <BigLogo />
        <SocialLinks className="mt-10" size={22} />
      </div>

      <div className="mx-auto mt-16 max-w-[760px] space-y-6 text-[15px] leading-7 text-muted">
        <p>
          4RGNL은 설립 초기부터 현재까지 다양하고 감각적인 음악과 컨텐츠들을 꾸준히
          선보이며 힙합씬은 물론 가요계 전체가 주목하는 레이블이자 크리에이티브
          그룹으로 성장해왔다. 레이블 콘서트 투어, 아티스트 별 단독 콘서트 및 월드
          투어, 그 외 다양한 방송 출연 및 공연 등을 통해 국내외 각지에서 그 저력을
          입증하며 하나의 글로벌 브랜드로 자리 잡았다.
        </p>
        <p>
          또한 신인 발굴과 아티스트 매니지먼트를 넘어 패션, 영상, 비주얼 아트 등
          다방면으로 그 영향력을 넓혀가며 음악을 중심으로 한 라이프스타일 브랜드를
          지향한다.
        </p>
        <p>
          4RGNL is a full-service entertainment company and creative group that
          serves as a hip-hop and R&amp;B record label and artist management. The
          company has become significant not only in the hip-hop scene but also in
          the wider music industry through the diversity of its captivating music
          and related content.
        </p>
        <p>
          4RGNL has also proven itself as a global brand through the success of
          multiple concerts, world tours, and a variety of events in both domestic
          and international markets, while continuously expanding its scope into
          fashion, film, and visual art.
        </p>
      </div>
    </section>
  );
}

function BigLogo() {
  return (
    <div className="flex w-full items-center justify-center gap-3 text-foreground sm:gap-5">
      <span className="text-[clamp(3rem,14vw,9rem)] font-extrabold leading-none tracking-tight">
        4R
      </span>
      <svg
        viewBox="0 0 100 100"
        className="h-[clamp(3rem,14vw,9rem)] w-[clamp(3rem,14vw,9rem)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" />
        <ellipse cx="50" cy="50" rx="20" ry="46" />
        <line x1="4" y1="50" x2="96" y2="50" />
        <line x1="10" y1="27" x2="90" y2="27" />
        <line x1="10" y1="73" x2="90" y2="73" />
        <line x1="50" y1="4" x2="50" y2="96" />
      </svg>
      <span className="text-[clamp(3rem,14vw,9rem)] font-extrabold leading-none tracking-tight">
        NL
      </span>
    </div>
  );
}
