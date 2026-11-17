import type { ReactNode } from "react";

export type Region = { from: number; to: number; label: string };

/**
 * Presents a screen capture as a MacBook display: aluminium edge, black bezel,
 * a base with its opening notch, and a drop shadow lifting it off the page.
 * `regions` (percent of the screen's width) draw labelled brackets above it.
 */
export default function LaptopFrame({ children, regions }: { children: ReactNode; regions?: Region[] }) {
  return (
    <div className="laptop">
      {regions && (
        <div className="laptop-annotations" aria-hidden>
          {regions.map((r) => (
            <div key={r.label} className="laptop-bracket" style={{ left: `${r.from}%`, width: `${r.to - r.from}%` }}>
              <span>{r.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="laptop-lid">
        <div className="laptop-bezel">
          <div className="laptop-screen">{children}</div>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  );
}
