import type { Metadata } from "next";
import Redirect from "@/components/Redirect";

export const metadata: Metadata = { title: "Work", robots: { index: false } };

export default function ArchiveRedirect() {
  return <Redirect to="/work/" />;
}
