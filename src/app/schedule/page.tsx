import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule — 4RGNL",
};

const events = [
  {
    date: "2026.07.12",
    day: "SAT",
    title: "4RGNL LABEL SHOWCASE 2026",
    venue: "YES24 LIVE HALL",
    city: "Seoul, KR",
  },
  {
    date: "2026.07.26",
    day: "SAT",
    title: "KOSMO — ORBIT TOUR",
    venue: "MUV HALL",
    city: "Seoul, KR",
  },
  {
    date: "2026.08.09",
    day: "SAT",
    title: "NÉVA — GLOW NIGHT",
    venue: "WEST BRIDGE",
    city: "Busan, KR",
  },
  {
    date: "2026.08.23",
    day: "SAT",
    title: "MIRO presents PULSE",
    venue: "CAKESHOP",
    city: "Seoul, KR",
  },
  {
    date: "2026.09.06",
    day: "SAT",
    title: "4RGNL WORLD TOUR — TOKYO",
    venue: "ZEPP SHINJUKU",
    city: "Tokyo, JP",
  },
  {
    date: "2026.09.20",
    day: "SAT",
    title: "RYU SEVEN — SEVEN LIVE",
    venue: "ROLLING HALL",
    city: "Seoul, KR",
  },
];

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        Upcoming
      </p>
      <h1 className="mt-2 text-4xl font-bold text-foreground">Schedule</h1>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {events.map((event) => (
          <li
            key={`${event.date}-${event.title}`}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:gap-8"
          >
            <div className="flex w-32 shrink-0 items-baseline gap-2">
              <span className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                {event.date}
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                {event.day}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">{event.title}</h2>
              <p className="text-sm text-muted">
                {event.venue} · {event.city}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
