import Link from "next/link";
import type { Project } from "@/lib/content";
import Blocks from "@/components/Blocks";
import LaptopFrame from "@/components/LaptopFrame";

type Neighbour = { href: string; title: string };

/** A case study page; shared by the public /work/[slug] pages and the password-protected ones. */
export default function CaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Neighbour | null;
  next: Neighbour | null;
}) {
  return (
    <article>
      <header className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-14 sm:pt-24">
        <Link href="/work/" className="eyebrow inline-block mb-8 hover:text-ink">← Work</Link>
        <p className="eyebrow mb-4">
          {project.year} · {project.category}
        </p>
        <h1 className="px text-[clamp(2.6rem,7vw,6rem)] max-w-[14ch]">{project.title}</h1>
      </header>

      {project.cover.frame === "laptop" ? (
        <div className="mx-auto max-w-[1240px] px-3 sm:px-6 mt-12 sm:mt-16 mb-6">
          <LaptopFrame>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.cover.src}
              alt={project.title}
              width={project.cover.width}
              height={project.cover.height}
              loading="eager"
            />
          </LaptopFrame>
        </div>
      ) : (
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
      )}

      <section className="mx-auto max-w-[1100px] px-5 sm:px-8 mt-16 sm:mt-24 grid gap-10 md:grid-cols-[1fr_1.6fr]">
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
              className="btn w-fit"
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
        <section className="mx-auto max-w-[1100px] px-5 sm:px-8 mt-16 sm:mt-24">
          <Blocks blocks={project.introMedia} />
        </section>
      )}

      {project.sections.map((s, i) => (
        <section
          key={i}
          className={
            s.theme === "dark-bold"
              ? project.sections[i - 1]?.theme === "dark-bold"
                ? "bg-black pb-16 sm:pb-24"
                : "mt-20 sm:mt-28 bg-black py-16 sm:py-24"
              : s.theme === "bright"
                ? "mt-20 sm:mt-28 pt-16 sm:pt-24 border-t border-line"
                : "mt-20 sm:mt-28"
          }
        >
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <Blocks blocks={s.blocks} />
          </div>
        </section>
      ))}

      {prev && next && (
      <nav
        className={`mx-auto max-w-[1100px] px-5 sm:px-8 grid grid-cols-2 gap-6 ${
          project.sections.at(-1)?.theme === "dark-bold" ? "pt-12" : "mt-28 border-t border-line pt-10"
        }`}
      >
        <Link href={prev.href} className="group">
          <p className="eyebrow mb-2">← Previous</p>
          <p className="px text-2xl sm:text-3xl group-hover:text-ink-2">{prev.title}</p>
        </Link>
        <Link href={next.href} className="group text-right">
          <p className="eyebrow mb-2">Next →</p>
          <p className="px text-2xl sm:text-3xl group-hover:text-ink-2">{next.title}</p>
        </Link>
      </nav>
      )}
    </article>
  );
}
