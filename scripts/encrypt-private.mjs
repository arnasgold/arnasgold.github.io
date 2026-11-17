// Encrypts the password-protected case studies for /work/gte/.
//
// Plaintext lives in private/gte/ (git-ignored): projects.json plus the media it
// references, at private/gte/<src>. Output goes to public/protected/: an encrypted
// manifest and one encrypted file per media item under a random name, so the
// public repo and site hold nothing readable.
//
// Usage: node scripts/encrypt-private.mjs   (prompts for the password)
// The page decrypts with the same scheme: PBKDF2-SHA256 -> AES-256-GCM.

import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import readline from "node:readline";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "private/gte");
const OUT = path.join(ROOT, "public/protected");
const ITERATIONS = 600_000;
const MIME = { ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".mp4": "video/mp4", ".json": "application/json" };

const { subtle } = globalThis.crypto;
const b64 = (bytes) => Buffer.from(bytes).toString("base64");
const random = (n) => globalThis.crypto.getRandomValues(new Uint8Array(n));

function ask(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    let muted = false;
    rl._writeToOutput = (s) => {
      if (!muted) rl.output.write(s);
    };
    rl.question(question, (answer) => {
      rl.output.write("\n");
      rl.close();
      resolve(answer);
    });
    muted = true;
  });
}

async function password() {
  if (process.env.PORTFOLIO_PASSWORD) return process.env.PORTFOLIO_PASSWORD;
  const first = await ask("Password for the protected case studies: ");
  if (first.length < 8) throw new Error("Use at least 8 characters.");
  if ((await ask("Repeat it: ")) !== first) throw new Error("The passwords don't match.");
  return first;
}

async function encrypt(key, bytes) {
  const iv = random(12);
  const data = new Uint8Array(await subtle.encrypt({ name: "AES-GCM", iv }, key, bytes));
  const out = new Uint8Array(iv.length + data.length);
  out.set(iv);
  out.set(data, iv.length);
  return out;
}

const projects = JSON.parse(readFileSync(path.join(SRC, "projects.json"), "utf8"));
const salt = random(16);
const material = await subtle.importKey("raw", new TextEncoder().encode(await password()), "PBKDF2", false, ["deriveKey"]);
const key = await subtle.deriveKey(
  { name: "PBKDF2", hash: "SHA-256", salt, iterations: ITERATIONS },
  material,
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt"],
);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// Swap every local media path for an opaque id, encrypting each file once.
const media = {};
const ids = new Map();
const swap = async (src) => {
  if (typeof src !== "string" || !src.startsWith("/media/")) return src;
  if (!ids.has(src)) {
    const id = b64(random(12)).replace(/[+/=]/g, (c) => ({ "+": "-", "/": "_", "=": "" })[c]);
    writeFileSync(path.join(OUT, `${id}.bin`), await encrypt(key, readFileSync(path.join(SRC, src))));
    media[id] = MIME[path.extname(src)] ?? "application/octet-stream";
    ids.set(src, id);
  }
  return `enc:${ids.get(src)}`;
};
const walk = async (value) => {
  if (Array.isArray(value)) return Promise.all(value.map(walk));
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (["src", "card", "video", "poster", "glow"].includes(k)) out[k] = await swap(v);
      else if (k === "extra" && Array.isArray(v)) out[k] = await Promise.all(v.map(swap));
      else out[k] = await walk(v);
    }
    return out;
  }
  return value;
};

const manifest = JSON.stringify({ projects: await walk(projects), media });
writeFileSync(
  path.join(OUT, "manifest.json"),
  JSON.stringify({
    v: 1,
    kdf: { name: "PBKDF2", hash: "SHA-256", iterations: ITERATIONS, salt: b64(salt) },
    data: b64(await encrypt(key, new TextEncoder().encode(manifest))),
  }),
);
console.log(`Encrypted ${projects.length} case stud${projects.length === 1 ? "y" : "ies"} and ${ids.size} media files into public/protected/.`);
