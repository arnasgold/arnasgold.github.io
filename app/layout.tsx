import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arnasgold.github.io"),
  title: { default: site.name, template: `%s — ${site.name}` },
  description:
    "Multidisciplinary designer helping businesses to create meaningful visual experiences. Product design, creative direction, design consulting and mentoring.",
  openGraph: {
    title: site.name,
    description: "Multidisciplinary designer helping businesses to create meaningful visual experiences.",
    images: ["/media/site/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
