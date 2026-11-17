import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-16 sm:pt-24">
      <h1 className="px text-[clamp(2.2rem,5vw,3.6rem)] max-w-[24ch]">Selected work.</h1>
      <p className="mt-6 max-w-[60ch] leading-[1.75] text-ink-2">
        Product, brand and motion work from Ready, Hanno and early-stage teams, from healthcare apps to crypto wallets.
      </p>

      <div className="mt-14">
        <Link href="/work/gte/" className="row-link">
          <span className="eyebrow">2025</span>
          <span className="flex items-center gap-3">
            <span className="text-[1.05rem]">GTE</span>
            <span className="rounded-md bg-chip px-2 py-1 text-xs leading-none text-ink">Password protected</span>
          </span>
          <span className="text-sm text-ink-2 text-right hidden sm:block">AI Trading Platform</span>
        </Link>
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}/`} className="row-link">
            <span className="eyebrow">{p.year.split(" ")[0]}</span>
            <span className="text-[1.05rem]">{p.title}</span>
            <span className="text-sm text-ink-2 text-right hidden sm:block">{p.category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
