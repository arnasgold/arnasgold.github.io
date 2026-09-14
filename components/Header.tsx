import Link from "next/link";
import { site } from "@/lib/content";

const nav = [
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/portfolio/", label: "Deck" },
  { href: `mailto:${site.email}`, label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b border-line">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/site/logo.png" alt="" className="h-6 w-6 dark:invert" />
          <span className="display text-[1.35rem] leading-none">
            Arnas <em>Goldberg</em>
          </span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="link-underline text-ink-2 hover:text-ink transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
