import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line mt-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-16 sm:py-24">
        <p className="eyebrow mb-6">Get in touch</p>
        <a
          href={`mailto:${site.email}`}
          className="display block text-[clamp(2rem,7vw,5.5rem)] break-words hover:text-accent transition-colors"
        >
          {site.email}
        </a>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-sm text-ink-2">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.social.map((s) => (
              <li key={s.name}>
                <a className="link-underline hover:text-ink" href={s.href} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-muted">
            © {new Date().getFullYear()} {site.name}. Based in Italy.{" "}
            <Link href="/" className="hover:text-ink">
              {site.domain}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
