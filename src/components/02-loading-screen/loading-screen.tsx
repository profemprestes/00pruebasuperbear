"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

type LoadingScreenProps = {
  onStart: () => void;
};

export function LoadingScreen({ onStart }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

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

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background: gradient on mobile, video on md+ */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{ background: "linear-gradient(180deg, #AAE5FF 0%, #ECF8FF 60%, #D4F0FF 100%)" }}
        aria-hidden="true"
      />
      <video
        autoPlay loop muted playsInline
        src="/intro_inicio_pc.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      />
      {/* Overlay for desktop video */}
      <div className="absolute inset-0 z-0 hidden md:block" style={{ background: "linear-gradient(180deg, rgba(170,229,255,0.6) 0%, rgba(236,248,255,0.55) 50%, rgba(0,51,66,0.55) 100%)" }} aria-hidden="true" />

      {/* Floating stars — mobile only */}
      <div className="absolute inset-0 pointer-events-none md:hidden" aria-hidden="true">
        {["top-6 left-4", "top-10 right-6", "top-16 left-1/4", "top-4 right-1/4"].map((pos, i) => (
          <span
            key={i}
            className={`absolute text-xl sm:text-2xl motion-safe:animate-subtle-float ${pos}`}
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {["⭐", "🌟", "✨", "⭐"][i]}
          </span>
        ))}
        <span className="absolute top-20 right-4 sm:right-6 text-2xl sm:text-3xl motion-safe:animate-subtle-float" style={{ animationDelay: "1.2s" }}>🍯</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 w-full max-w-5xl px-4 sm:px-8 md:px-12">
        {/* Bear */}
        <div className="motion-safe:animate-float flex-shrink-0">
          <Image
            src="/personajes/Baaren.render.png"
            alt="Baaren el oso héroe"
            width={140}
            height={140}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)] md:drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>

        {/* Title + progress */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-xs sm:max-w-sm md:max-w-lg">
          <Image
            src="/titulo_super_facu_1.png"
            alt="Super Facu Aventura"
            width={620}
            height={310}
            className="w-48 sm:w-64 md:w-80 lg:w-[32rem] drop-shadow-lg md:drop-shadow-[0_8px_20px_rgba(255,215,0,0.6)] hover:scale-105 transition-transform duration-300"
            priority
          />

          {/* Progress bar */}
          <div className="w-full">
            <div
              className="h-6 sm:h-8 md:h-10 rounded-full border-4 sm:border-[5px] md:border-[6px] border-teddy-brown overflow-hidden relative"
              style={{
                boxShadow: "0 4px 0 #63340b",
                background: "rgba(255,255,255,0.6)",
              }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Cargando: ${progress}%`}
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
            <p className="font-impact sm:font-arcade text-teddy-brown sm:text-golden-coin tracking-widest text-xs sm:text-sm md:text-xl text-center mt-1 sm:mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] sm:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              CARGANDO{progress > 0 ? `... ${progress}%` : "..."}
            </p>
          </div>

          {/* Decorative stars — desktop only */}
          <div className="hidden md:flex gap-4 text-2xl lg:text-3xl" aria-hidden="true">
            {["⭐", "🍯", "🌟", "🍯", "⭐"].map((e, i) => (
              <span key={i} className="motion-safe:animate-bounce-light" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Pixel grass — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 pixel-grass z-10" aria-hidden="true" />
    </div>
  );
}
