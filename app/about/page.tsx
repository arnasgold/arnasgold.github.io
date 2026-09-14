import type { Metadata } from "next";
import { about, site } from "@/lib/content";
import Blocks from "@/components/Blocks";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const heading = about.find((b) => b.type === "heading");
  const rest = about.filter((b) => b !== heading).map((b) => ({ ...b, col: "full" as const }));
  return (
    <section className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 sm:pt-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <div className="md:sticky md:top-24 self-start">
          <p className="eyebrow mb-4">About</p>
          <h1 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
            {heading && heading.type === "heading" ? heading.text : site.name}
          </h1>
          <div className="media mt-10 aspect-square max-w-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/about/profile-photo.webp" alt={site.name} loading="eager" />
          </div>
        </div>
        <div className="pt-2 md:pt-16">
          <Blocks blocks={rest} />
        </div>
      </div>
    </section>
  );
}
