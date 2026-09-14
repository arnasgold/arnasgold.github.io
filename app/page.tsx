import { home, site } from "@/lib/content";

export default function Home() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-20 sm:pt-32 pb-16">
      <h1 className="px text-[clamp(2.4rem,7vw,5.6rem)] max-w-[18ch]">{home.headline}</h1>

      <div className="mt-20 grid gap-x-12 gap-y-12 sm:grid-cols-2 max-w-[900px]">
        <div>
          <p className="eyebrow mb-4">{home.now.label}</p>
          <div className="prose text-[1.05rem]" dangerouslySetInnerHTML={{ __html: home.now.html }} />
        </div>
        <div>
          <p className="eyebrow mb-4">{home.stack.label}</p>
          <ul className="flex flex-col gap-2 text-[1.05rem]">
            {home.stack.groups.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">{home.before.label}</p>
          <div className="prose text-[1.05rem] text-ink-2" dangerouslySetInnerHTML={{ __html: home.before.html }} />
        </div>
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <a href={`mailto:${site.email}`} className="text-[1.05rem] underline underline-offset-4 hover:text-ink-2">
            {site.email}
          </a>
          <p className="mt-2 text-ink-2">Based in Italy, working remotely.</p>
        </div>
      </div>
    </section>
  );
}
