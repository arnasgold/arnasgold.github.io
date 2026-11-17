"use client";

import { useEffect, useRef } from "react";

type Props = { src: string; poster?: string; width?: number; height?: number; glow?: string };

/** One glow sample: time (ms), centre x/y, width/height (fractions of the frame), opacity, colour. */
type Sample = [number, number, number, number, number, number, string];

/** Muted looping video that only plays while at least half of it is on screen. */
export default function InViewVideo({ src, poster, width, height, glow }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const light = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.5 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Redraws the app's glow over the recording from its captured track, so the
  // gradient never goes through video compression and can't band.
  useEffect(() => {
    if (!glow) return;
    let samples: Sample[] = [];
    let frame = 0;
    let cancelled = false;
    const draw = () => {
      const v = ref.current;
      const el = light.current;
      if (v && el && samples.length) {
        const t = v.currentTime * 1000;
        let i = 0;
        let hi = samples.length - 1;
        while (i < hi) {
          const mid = (i + hi + 1) >> 1;
          if (samples[mid][0] <= t) i = mid;
          else hi = mid - 1;
        }
        const a = samples[i];
        const b = samples[Math.min(i + 1, samples.length - 1)];
        const k = b[0] > a[0] ? Math.min(Math.max((t - a[0]) / (b[0] - a[0]), 0), 1) : 0;
        const at = (n: 1 | 2 | 3 | 4 | 5) => a[n] + (b[n] - a[n]) * k;
        const [cx, cy, w, h] = [at(1), at(2), at(3), at(4)];
        el.style.left = `${(cx - w / 2) * 100}%`;
        el.style.top = `${(cy - h / 2) * 100}%`;
        el.style.width = `${w * 100}%`;
        el.style.height = `${h * 100}%`;
        el.style.opacity = String(at(5));
        el.style.color = a[6];
      }
      frame = requestAnimationFrame(draw);
    };
    fetch(glow)
      .then((r) => r.json())
      .then((track: { samples: Sample[] }) => {
        if (cancelled) return;
        samples = track.samples;
        frame = requestAnimationFrame(draw);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [glow]);

  const video = (
    <video ref={ref} src={src} poster={poster} width={width} height={height} muted loop playsInline preload="metadata" />
  );
  if (!glow) return video;
  return (
    <div className="relative">
      {video}
      <div className="glow-overlay" aria-hidden>
        <div ref={light} style={{ opacity: 0 }} />
      </div>
    </div>
  );
}
