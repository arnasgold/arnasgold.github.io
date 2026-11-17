import Link from "next/link";

// Static export can't send HTTP redirects, so old URLs forward with a meta refresh.
export default function Redirect({ to }: { to: string }) {
  return (
    <section className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-16 sm:pt-24">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
      <p className="text-ink-2">
        This page has moved to <Link href={to} className="underline underline-offset-4">{to}</Link>.
      </p>
    </section>
  );
}
