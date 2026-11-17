import type { Metadata } from "next";
import { projects } from "@/lib/content";
import Redirect from "@/components/Redirect";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const metadata: Metadata = { robots: { index: false } };

export default async function ProjectRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Redirect to={`/work/${slug}/`} />;
}
