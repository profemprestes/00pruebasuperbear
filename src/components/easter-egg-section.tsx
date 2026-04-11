"use client";

import { useState, useEffect } from "react";
import { MissionSection } from "./mission-section";
import { Button } from "./ui/button";
import { useIsDesktop } from "@/hooks/use-media-query";
import { motion } from "framer-motion";

type EasterEggSectionProps = {
  onRestart: () => void;
};

export function EasterEggSection({ onRestart }: EasterEggSectionProps) {
  const isDesktop = useIsDesktop();
  const [noclipCount, setNoclipCount] = useState(0);
  const [isInBackrooms, setIsInBackrooms] = useState(false);
  const [showShadowBear, setShowShadowBear] = useState(false);

  // Easter egg: click 3 times to "noclip" into the backrooms
  const handleNoclip = () => {
    const newCount = noclipCount + 1;
    setNoclipCount(newCount);

    if (newCount >= 3) {
      setIsInBackrooms(true);
      setTimeout(() => setShowShadowBear(true), 2000);
    }
  };

  if (!isInBackrooms) {
    return (
      <MissionSection stepId="easter-egg" bgImage="/ciudad.webp">
        <div
          className={`rounded-2xl p-4 sm:p-6 lg:p-8 text-center ${
            isDesktop ? "max-w-3xl mx-auto" : "w-full"
          }`}
          style={{
            background: "linear-gradient(135deg, #fffde7 0%, #fff8e1 100%)",
            border: "6px solid #FFD700",
            boxShadow: "0 10px 30px rgba(255,215,0,0.3), 6px 6px 0 #b8860b",
          }}
        >
          <h2 className="font-milky text-xl sm:text-2xl lg:text-3xl text-teddy-brown mb-3 sm:mb-4">
            🥚 ¿Hay algo aquí?
          </h2>
          <p className="font-amble text-xs sm:text-sm text-voxel-text mb-4 sm:mb-6">
            Dicen que si tocas esta zona secreta 3 veces... puedes caer en un lugar extraño...
          </p>

          {/* Secret trigger area */}
          <button
            onClick={handleNoclip}
            aria-label="Zona secreta: toca 3 veces para acceder al Easter Egg"
            className="mx-auto w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "3px dashed #FFD700",
              boxShadow: "inset 0 0 30px rgba(255,215,0,0.2)",
            }}
          >
            <div className="text-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl block mb-2">❓</span>
              <span className="font-milky text-xs text-teddy-brown">
                {noclipCount > 0 ? `${noclipCount}/3...` : "Toca aquí"}
              </span>
            </div>
          </button>

          {noclipCount > 0 && noclipCount < 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 font-amble text-xs text-voxel-text"
            >
              {noclipCount === 1 && "Hmm, algo pasó..."}
              {noclipCount === 2 && "¡Casi! Una vez más..."}
            </motion.p>
          )}
        </div>
      </MissionSection>
    );
  }

  // Backrooms layout
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: "#c4a842",
        backgroundImage: `repeating-linear-gradient(
          0deg,
          #c4a842,
          #c4a842 40px,
          #b89c3a 40px,
          #b89c3a 80px
        ), repeating-linear-gradient(
          90deg,
          #c4a842,
          #c4a842 40px,
          #b89c3a 40px,
          #b89c3a 80px
        )`,
      }}
    >
      {/* Fluorescent light effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,200,0.3) 0%, transparent 70%)",
          animation: "blink 2s ease-in-out infinite",
        }}
      />

      {/* Shadow Bear */}
      {showShadowBear && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, #1a0a00 0%, #000000 100%)",
              boxShadow: "0 0 100px rgba(255,0,0,0.5), 0 0 200px rgba(0,0,0,0.8)",
            }}
          >
            <span className="text-7xl sm:text-8xl">🐻</span>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="font-milky text-2xl sm:text-3xl text-white tracking-wider"
            style={{
              textShadow: "0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.5), 0 2px 4px rgba(0,0,0,1)",
            }}
          >
            SHADOW BEAR
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="font-amble text-sm text-white/90 text-center max-w-xs"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
          >
            Has descubierto el secreto más oscuro de Super Bear Adventure...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-col gap-3"
          >
            <Button
              onClick={onRestart}
              className="font-milky text-lg h-auto py-3 px-6 text-white"
              style={{
                background: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
                border: "3px solid #8B4513",
                boxShadow: "0 6px 0 #63340b",
              }}
            >
              🔄 Volver al Inicio
            </Button>

            <p className="font-arcade text-xs text-black/60 text-center">
              ¡Felicidades! Has completado toda la misión
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Wallpaper pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
