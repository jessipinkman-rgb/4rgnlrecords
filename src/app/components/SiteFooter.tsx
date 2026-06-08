import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <Logo />
        <SocialLinks />
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
          © 2026 4RGNL RECORDS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
