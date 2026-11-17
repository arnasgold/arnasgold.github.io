"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/content";
import CaseStudy from "@/components/CaseStudy";

type Manifest = {
  v: 1;
  kdf: { name: "PBKDF2"; hash: "SHA-256"; iterations: number; salt: string };
  data: string;
};

const fromB64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function decrypt(key: CryptoKey, bytes: Uint8Array) {
  return new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes.slice(0, 12) }, key, bytes.slice(12)));
}

/** Decrypts the manifest and every media file, swapping each `enc:<id>` for a blob URL. */
async function unlock(password: string): Promise<Project[]> {
  const manifest: Manifest = await fetch("/protected/manifest.json").then((r) => r.json());
  const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt: fromB64(manifest.kdf.salt), iterations: manifest.kdf.iterations },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
  // A wrong password fails GCM authentication here.
  const plain = await decrypt(key, fromB64(manifest.data));
  const { projects, media } = JSON.parse(new TextDecoder().decode(plain)) as {
    projects: Project[];
    media: Record<string, string>;
  };
  const urls = Object.fromEntries(
    await Promise.all(
      Object.entries(media).map(async ([id, type]) => {
        const res = await fetch(`/protected/${id}.bin`);
        const bytes = new Uint8Array(await res.arrayBuffer());
        return [id, URL.createObjectURL(new Blob([await decrypt(key, bytes)], { type }))] as const;
      }),
    ),
  );
  const swap = (value: unknown): unknown => {
    if (typeof value === "string" && value.startsWith("enc:")) return urls[value.slice(4)] ?? value;
    if (Array.isArray(value)) return value.map(swap);
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, swap(v)]));
    return value;
  };
  return swap(projects) as Project[];
}

export default function ProtectedWork() {
  const [password, setPassword] = useState("");
  const [state, setState] = useState<"locked" | "unlocking" | "wrong" | "error">("locked");
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onHash = () => {
      setActive(location.hash.slice(1) || null);
      window.scrollTo(0, 0);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("unlocking");
    try {
      setProjects(await unlock(password));
    } catch (err) {
      setState(err instanceof DOMException && err.name === "OperationError" ? "wrong" : "error");
    }
  };

  if (projects) {
    const idx = Math.max(0, projects.findIndex((p) => p.slug === active));
    const project = projects[idx];
    const neighbour = (p: Project) => ({ href: `#${p.slug}`, title: p.title });
    const many = projects.length > 1;
    return (
      <CaseStudy
        project={project}
        prev={many ? neighbour(projects[(idx - 1 + projects.length) % projects.length]) : null}
        next={many ? neighbour(projects[(idx + 1) % projects.length]) : null}
      />
    );
  }

  return (
    <section className="mx-auto max-w-[1100px] px-5 sm:px-8 pt-16 sm:pt-24 pb-24">
      <h1 className="px text-[clamp(2.2rem,5vw,3.6rem)] max-w-[24ch]">GTE</h1>
      <p className="mt-6 max-w-[60ch] text-ink-2">
        These case studies cover unreleased work, so they&apos;re password protected. Get in touch if you&apos;d like
        access.
      </p>
      <form onSubmit={submit} className="mt-10 flex max-w-[420px] flex-col gap-3 sm:flex-row">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (state !== "unlocking") setState("locked");
          }}
          placeholder="Password"
          className="flex-1 rounded-md border border-line bg-paper-2 px-3 py-2.5 text-sm outline-none focus:border-ink-2"
        />
        <button
          type="submit"
          disabled={!password || state === "unlocking"}
          className="rounded-md bg-ink px-4 py-2.5 text-sm text-paper hover:opacity-85 disabled:opacity-50"
        >
          {state === "unlocking" ? "Unlocking…" : "Unlock"}
        </button>
      </form>
      <p className="mt-3 text-sm text-ink-2" aria-live="polite">
        {state === "wrong" && "That password didn't work."}
        {state === "error" && "Something went wrong loading the case studies. Try again."}
      </p>
    </section>
  );
}
