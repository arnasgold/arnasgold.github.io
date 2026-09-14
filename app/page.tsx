import Link from "next/link";
import { home, projects, about, site } from "@/lib/content";
import Showreel from "@/components/Showreel";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [lead, ...rest] = home.headline.split(" helping ");
  const aboutIntro = about.find((b) => b.type === "paragraph");
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 sm:pt-28 pb-14">
        <p className="eyebrow reveal mb-6">Product design · Creative direction</p>
        <h1 className="display reveal reveal-2 text-[clamp(2.6rem,8vw,7rem)] max-w-[16ch]">
          {lead} <em>helping</em> {rest.join(" helping ")}
        </h1>
        <div className="reveal reveal-3 mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <a
            href="#showreel"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            View showreel
          </a>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-2">
            {home.specialties.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="showreel" className="mx-auto max-w-[1200px] px-5 sm:px-8 scroll-mt-24">
        <Showreel youtube={home.showreel.youtube} cover={home.showreel.cover} />
      </section>

      <section className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-24 sm:pt-32">
        <div className="flex items-end justify-between mb-10">
          <h2 className="display text-[2.2rem] sm:text-[3rem]">Selected work</h2>
          <Link href="/work/" className="link-underline text-sm text-ink-2 hover:text-ink">
            All projects
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-20" : ""}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-28 sm:pt-40">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-center">
          <div className="media aspect-square max-w-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/about/profile-photo.webp" alt={site.name} loading="lazy" />
          </div>
          <div>
            <p className="eyebrow mb-5">About</p>
            {aboutIntro && aboutIntro.type === "paragraph" && (
              <div
                className="display text-[1.6rem] sm:text-[2.1rem] leading-[1.2]"
                dangerouslySetInnerHTML={{ __html: aboutIntro.html }}
              />
            )}
            <Link href="/about/" className="link-underline inline-block mt-8 text-sm text-ink-2 hover:text-ink">
              Read the full story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
