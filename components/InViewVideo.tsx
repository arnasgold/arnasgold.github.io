"use client";

import { useEffect, useRef } from "react";

type Props = { src: string; poster?: string; width?: number; height?: number };

/** Muted looping video that only plays while at least half of it is on screen. */
export default function InViewVideo({ src, poster, width, height }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

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

  return (
    <video ref={ref} src={src} poster={poster} width={width} height={height} muted loop playsInline preload="metadata" />
  );
}
