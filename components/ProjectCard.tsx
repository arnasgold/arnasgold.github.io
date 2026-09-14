import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}/`} className="group block">
      <div className="media aspect-[16/10]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.card}
          alt={project.title}
          loading={index < 2 ? "eager" : "lazy"}
          className="card-img h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="display text-[1.75rem] sm:text-[2rem] group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <span className="eyebrow whitespace-nowrap">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-ink-2">
        {project.category} · {project.deliverables.join(", ")}
      </p>
    </Link>
  );
}
