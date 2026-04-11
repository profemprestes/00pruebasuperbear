"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { useIsDesktop } from "@/hooks/use-media-query";

type LoadingScreenProps = {
  onStart: () => void;
};

export function LoadingScreen({ onStart }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onStart, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 40ms × 100 = 4 seconds

    return () => clearInterval(timer);
  }, [onStart]);

  /* ── MOBILE LAYOUT ─────────────────────────────────── */
  if (!isDesktop) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden"
        style={{ background: "linear-gradient(180deg, #AAE5FF 0%, #ECF8FF 60%, #D4F0FF 100%)" }}
      >
        {/* Floating stars */}
        <div className="absolute inset-0 pointer-events-none">
          {["top-8 left-6", "top-12 right-8", "top-20 left-1/4", "top-6 right-1/3"].map((pos, i) => (
            <span
              key={i}
              className="absolute text-2xl motion-safe:animate-subtle-float"
              style={{ animationDelay: `${i * 0.5}s` }}
              aria-hidden="true"
            >
              {["⭐", "🌟", "✨", "⭐"][i]}
            </span>
          ))}
          <span className="absolute top-24 right-6 text-3xl motion-safe:animate-subtle-float" style={{ animationDelay: "1.2s" }}>🍯</span>
        </div>

        {/* Bear + Title */}
        <div className="flex flex-col items-center flex-1 justify-center gap-4 px-4 z-10">
          {/* Floating bear */}
          <div className="motion-safe:animate-float">
            <Image
              src="/Baaren_brother_transparent.webp"
              alt="Baaren el oso"
              width={140}
              height={140}
              className="drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]"
              priority
            />
          </div>

          {/* Game title */}
          <Image
            src="/titulo_super_facu_1.png"
            alt="Super Facu Aventura"
            width={400}
            height={200}
            className="w-full max-w-xs drop-shadow-lg hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Progress bar */}
        <div className="z-10 w-full px-8 pb-6 flex flex-col items-center gap-2">
          <div className="w-full max-w-xs">
            <div
              className="h-7 rounded-full border-[5px] border-teddy-brown bg-white/60 overflow-hidden relative"
              style={{ boxShadow: "0 4px 0 #63340b" }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full transition-all duration-75"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 1.5s linear infinite",
                }}
              />
            </div>
          </div>
          <p className="font-impact text-teddy-brown tracking-widest text-sm">
            CARGANDO... {progress}%
          </p>
        </div>

        {/* Pixel grass strip */}
        <div className="w-full h-16 pixel-grass" aria-hidden="true" />
      </div>
    );
  }

  /* ── DESKTOP LAYOUT ────────────────────────────────── */
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay loop muted playsInline
        src="/intro_inicio_pc.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(180deg, rgba(170,229,255,0.6) 0%, rgba(236,248,255,0.55) 50%, rgba(0,51,66,0.55) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-row items-center justify-center gap-16 w-full max-w-5xl px-12">
        {/* Bear — left side */}
        <div className="flex-shrink-0 motion-safe:animate-float">
          <Image
            src="/Baaren_brother_transparent.webp"
            alt="Baaren el oso"
            width={260}
            height={260}
            className="drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>

        {/* Title + progress — right side */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/titulo_super_facu_1.png"
            alt="Super Facu Aventura"
            width={620}
            height={310}
            className="drop-shadow-[0_8px_20px_rgba(255,215,0,0.6)] hover:scale-105 transition-transform duration-300"
            priority
          />

          {/* Wide progress bar */}
          <div className="w-full">
            <div
              className="h-10 rounded-full border-[6px] border-teddy-brown bg-black/40 overflow-hidden relative"
              style={{ boxShadow: "0 6px 0 #63340b, inset 0 2px 4px rgba(0,0,0,0.4)" }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full transition-all duration-75"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #b8860b, #FFD700, #FFF8A0, #FFD700, #b8860b)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 1.5s linear infinite",
                }}
              />
              {/* Shine overlay */}
              <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />
            </div>
            <p className="font-arcade text-golden-coin tracking-[0.3em] text-xl text-center mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              CARGANDO MUNDO... {progress}%
            </p>
          </div>

          {/* Decorative stars */}
          <div className="flex gap-4 text-3xl" aria-hidden="true">
            {["⭐", "🍯", "🌟", "🍯", "⭐"].map((e, i) => (
              <span key={i} className="motion-safe:animate-bounce-light" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Pixel grass — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pixel-grass z-10" aria-hidden="true" />
    </div>
  );
}
