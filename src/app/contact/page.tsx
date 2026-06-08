import type { Metadata } from "next";
import SocialLinks from "../components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact — 4RGNL",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-600" />
          <div className="absolute inset-0 flex items-center justify-center gap-2 text-white/90">
            <span className="text-5xl font-extrabold tracking-tight">4R</span>
            <svg
              viewBox="0 0 100 100"
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="46" />
              <ellipse cx="50" cy="50" rx="20" ry="46" />
              <line x1="4" y1="50" x2="96" y2="50" />
              <line x1="50" y1="4" x2="50" y2="96" />
            </svg>
            <span className="text-5xl font-extrabold tracking-tight">NL</span>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-foreground">Contact</h1>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Information
            </p>
            <a
              href="mailto:info@4rgnlrecords.com"
              className="mt-2 inline-block border-b border-line text-[15px] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              info@4rgnlrecords.com
            </a>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Business
            </p>
            <a
              href="mailto:biz@4rgnlrecords.com"
              className="mt-2 inline-block border-b border-line text-[15px] text-muted transition-colors hover:border-accent hover:text-accent"
            >
              biz@4rgnlrecords.com
            </a>
          </div>

          <SocialLinks className="mt-10" size={20} />
        </div>
      </div>
    </section>
  );
}
