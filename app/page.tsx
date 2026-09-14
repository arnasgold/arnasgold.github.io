import { home, site } from "@/lib/content";

export default function Home() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-20 sm:pt-32 pb-16">
      <h1 className="px text-[clamp(2.4rem,7vw,5.6rem)] max-w-[18ch]">
        {home.headline}
        <span className="blink" aria-hidden>
          _
        </span>
      </h1>

      <div className="mt-20 grid gap-10 sm:grid-cols-2 max-w-[820px]">
        <div>
          <p className="eyebrow mb-4">Specialties</p>
          <ul className="flex flex-col gap-2 text-[1.05rem]">
            {home.specialties.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
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
