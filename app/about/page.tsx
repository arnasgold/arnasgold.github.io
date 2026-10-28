import type { Metadata } from "next";
import { about, site } from "@/lib/content";
import Blocks from "@/components/Blocks";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const heading = about.find((b) => b.type === "heading");
  const rest = about.filter((b) => b !== heading && b.type !== "image").map((b) => ({ ...b, col: "full" as const }));
  return (
    <section className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-16 sm:pt-24">
      <div className="max-w-[680px]">
        <p className="eyebrow mb-4">About</p>
        <h1 className="px text-[clamp(2.2rem,5vw,3.6rem)] mb-10">
          {heading && heading.type === "heading" ? heading.text : site.name}
        </h1>
        <Blocks blocks={rest} />
      </div>
    </section>
  );
}
