import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="4RGNL home"
      className={`flex items-center gap-1.5 text-2xl font-extrabold uppercase leading-none tracking-tight text-foreground ${className}`}
    >
      <span>4R</span>
      <Globe className="h-[1.05em] w-[1.05em] -mx-[0.04em]" />
      <span>NL</span>
    </Link>
  );
}

function Globe({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" />
      <ellipse cx="50" cy="50" rx="20" ry="45" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <line x1="12" y1="28" x2="88" y2="28" />
      <line x1="12" y1="72" x2="88" y2="72" />
      <line x1="50" y1="5" x2="50" y2="95" />
    </svg>
  );
}
