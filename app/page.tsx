import Link from "next/link";
import { home } from "@/lib/content";

function Chips({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{label}</p>
      <ul className="flex flex-wrap gap-2 text-sm">
        {items.map((item) => (
          <li key={item} className="rounded-md bg-chip text-ink px-3 py-1.5 leading-none">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-20 sm:pt-32 pb-16">
      <h1 className="px text-[clamp(2.2rem,5vw,3.6rem)] max-w-[24ch]">{home.headline}</h1>
      <Link
        href="/work/"
        className="mt-10 inline-flex items-center gap-2 rounded-md bg-ink text-paper px-4 py-2.5 text-sm hover:opacity-85"
      >
        See work <span aria-hidden>→</span>
      </Link>

      <div className="mt-20 grid gap-x-12 gap-y-12 sm:grid-cols-2 max-w-[900px]">
        <div className="flex flex-col gap-12">
          <div>
            <p className="eyebrow mb-4">{home.now.label}</p>
            <div className="prose text-base" dangerouslySetInnerHTML={{ __html: home.now.html }} />
          </div>
          <div>
            <p className="eyebrow mb-4">{home.before.label}</p>
            <div className="prose text-base text-ink-2" dangerouslySetInnerHTML={{ __html: home.before.html }} />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <Chips {...home.capabilities} />
          <Chips {...home.tools} />
        </div>
      </div>
    </section>
  );
}
