import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/content";
import Blocks from "@/components/Blocks";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p?.title ?? "Project", openGraph: p ? { images: [p.cover.src] } : undefined };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <article>
      <header className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-14 sm:pt-24">
        <p className="eyebrow mb-4">
          {project.year} · {project.category}
        </p>
        <h1 className="display text-[clamp(2.6rem,7vw,6rem)] max-w-[14ch]">{project.title}</h1>
      </header>

      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 mt-12">
        <figure className="media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover.src}
            alt={project.title}
            width={project.cover.width}
            height={project.cover.height}
            loading="eager"
          />
        </figure>
      </div>

      <section className="mx-auto max-w-[1200px] px-5 sm:px-8 mt-16 sm:mt-24 grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <aside className="flex flex-col gap-8 text-sm md:sticky md:top-24 self-start">
          <div>
            <p className="eyebrow mb-3">Deliverables</p>
            <ul className="flex flex-col gap-1 text-ink-2">
              {project.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Year</p>
            <p className="text-ink-2">{project.year}</p>
          </div>
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-ink px-5 py-2.5 font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              {project.link.text} <span aria-hidden>↗</span>
            </a>
          )}
        </aside>
        <div className="flex flex-col gap-8">
          <Blocks blocks={project.intro} />
        </div>
      </section>

      {project.introMedia.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-5 sm:px-8 mt-16 sm:mt-24">
          <Blocks blocks={project.introMedia} />
        </section>
      )}

      {project.sections.map((s, i) => (
        <section
          key={i}
          className={
            s.theme === "dark-bold"
              ? "mt-20 sm:mt-28 bg-ink text-paper py-16 sm:py-24"
              : s.theme === "bright"
                ? "mt-20 sm:mt-28 pt-16 sm:pt-24 border-t border-line"
                : "mt-20 sm:mt-28"
          }
        >
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <Blocks blocks={s.blocks} />
          </div>
        </section>
      ))}

      <nav className="mx-auto max-w-[1200px] px-5 sm:px-8 mt-28 grid grid-cols-2 gap-6 border-t border-line pt-10">
        <Link href={`/work/${prev.slug}/`} className="group">
          <p className="eyebrow mb-2">← Previous</p>
          <p className="display text-2xl sm:text-3xl group-hover:text-accent transition-colors">{prev.title}</p>
        </Link>
        <Link href={`/work/${next.slug}/`} className="group text-right">
          <p className="eyebrow mb-2">Next →</p>
          <p className="display text-2xl sm:text-3xl group-hover:text-accent transition-colors">{next.title}</p>
        </Link>
      </nav>
    </article>
  );
}
