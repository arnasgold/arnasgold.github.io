# Arnas Goldberg — portfolio

Static Next.js site rebuilt from the original Squarespace portfolio.

- Content lives in `lib/content.ts` (generated from the Squarespace export, safe to edit by hand).
- Media lives in `public/media/`.
- `npm run dev` for local development, `npm run build` produces the static export in `out/`.
- Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
