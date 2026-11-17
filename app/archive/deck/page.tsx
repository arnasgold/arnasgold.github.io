import type { Metadata } from "next";
import Redirect from "@/components/Redirect";

export const metadata: Metadata = { title: "Portfolio deck", robots: { index: false } };

export default function DeckRedirect() {
  return <Redirect to="/work/deck/" />;
}
