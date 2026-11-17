import type { Metadata } from "next";
import ProtectedWork from "@/components/ProtectedWork";

export const metadata: Metadata = { title: "GTE", robots: { index: false, follow: false } };

export default function GtePage() {
  return <ProtectedWork />;
}
