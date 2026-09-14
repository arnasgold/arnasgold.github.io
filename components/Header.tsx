import Link from "next/link";
import { site } from "@/lib/content";

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="pixel text-[0.95rem] uppercase">
          Arnas Goldberg
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/about/" className="text-ink-2 hover:text-ink">
            About
          </Link>
          <a href={`mailto:${site.email}`} className="text-ink-2 hover:text-ink">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
