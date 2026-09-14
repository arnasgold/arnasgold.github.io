import type { Metadata } from "next";
import { projects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 sm:pt-24">
      <p className="eyebrow mb-4">Work</p>
      <h1 className="display text-[clamp(2.4rem,6vw,5rem)] max-w-[18ch]">
        Selected projects from <em>2017</em> to today.
      </h1>
      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
