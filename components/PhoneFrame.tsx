import type { ReactNode } from "react";

/**
 * Presents a phone screen capture in an abstract handset: aluminium edge, black bezel and iPhone-like corners,
 * all sized from the frame's own width, with a drop shadow lifting it off the page.
 */
export default function PhoneFrame({ children, maxWidth = 320 }: { children: ReactNode; maxWidth?: number }) {
  return (
    <div className="phone" style={{ maxWidth }}>
      <div className="phone-body">
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}
