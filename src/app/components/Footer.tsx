const SOCIALS = ["Instagram", "YouTube", "Spotify", "SoundCloud"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <span className="text-2xl font-extrabold tracking-[0.3em] text-white">
              4RGNL
            </span>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
              hello@4rgnlrecords.com
            </p>
          </div>

          <nav aria-label="Social">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {SOCIALS.map((s) => (
                <li key={s}>
                  <a
                    href="#contact"
                    className="text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
            © 2026 4RGNL RECORDS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
