"use client";
import { useState } from "react";

export default function Showreel({ youtube, cover }: { youtube: string; cover: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="media relative aspect-video w-full bg-black">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1&rel=0&modestbranding=1`}
          title="Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full text-left"
          aria-label="Play showreel"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cover} alt="Showreel cover" className="card-img h-full w-full object-cover" />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 rounded-full bg-white/95 text-black pl-4 pr-6 py-3 text-sm font-medium shadow-lg transition-transform group-hover:scale-105">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
              <path d="M4 2.5v11l9-5.5z" />
            </svg>
            Play showreel
          </span>
        </button>
      )}
    </div>
  );
}
