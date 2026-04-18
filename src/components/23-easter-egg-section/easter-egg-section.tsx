"use client";

import { useState, useEffect } from "react";
import { MissionSection } from "@/components/18-mission-section";
import { Button } from "@/components/ui/button";
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
      <MissionSection stepId="easter-egg" bgImage="/mundos/bear_village/Tutorialzone.webp">
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
            🎂 ¿Buscando la Fiesta Secreta?
          </h2>
          <p className="font-amble text-xs sm:text-sm text-voxel-text mb-4 sm:mb-6">
            Dicen que si tocas esta zona misteriosa 3 veces... entrarás al nivel oculto de Facu...
          </p>

          {/* Secret trigger area */}
          <button
            onClick={handleNoclip}
            aria-label="Zona secreta: toca 3 veces para entrar a la fiesta"
            className="mx-auto w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "3px dashed #FFD700",
              boxShadow: "inset 0 0 30px rgba(255,215,0,0.2)",
            }}
          >
            <div className="text-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl block mb-2">🎈</span>
              <span className="font-milky text-xs text-teddy-brown">
                {noclipCount > 0 ? `${noclipCount}/3...` : "¡Toca aquí!"}
              </span>
            </div>
          </button>

          {noclipCount > 0 && noclipCount < 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 font-amble text-xs text-voxel-text"
            >
              {noclipCount === 1 && "¡Sigue así, hay una sorpresa!"}
              {noclipCount === 2 && "¡Casi estás en la fiesta! Una vez más..."}
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
        background: "#1a0a2e", // Deep festive night blue
        backgroundImage: `radial-gradient(circle at 50% 50%, #2a1a4e 0%, #1a0a2e 100%)`,
      }}
    >
      {/* Sparkles effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='white' fill-opacity='0.2'/%3E%3Ccircle cx='50' cy='50' r='1.5' fill='gold' fill-opacity='0.3'/%3E%3Ccircle cx='80' cy='20' r='1' fill='white' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          animation: "float 10s linear infinite",
        }}
      />

      {/* Birthday Hero Facu */}
      {showShadowBear && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden flex items-center justify-center border-4 border-golden-coin"
            style={{
              background: "white",
              boxShadow: "0 0 50px rgba(255,215,0,0.5), 0 0 100px rgba(255,215,0,0.2)",
            }}
          >
            <img 
              src="/easter-egg/celebration-bear.png" 
              alt="Facu el Héroe del Cumpleaños"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-center"
          >
            <h2 
              className="font-milky text-2xl sm:text-3xl lg:text-4xl text-white tracking-wider mb-2"
              style={{
                textShadow: "0 0 10px rgba(255,215,0,0.8), 0 2px 4px rgba(0,0,0,1)",
              }}
            >
              ¡FACU SUPREMO!
            </h2>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-2xl animate-bounce">🎁</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>🎂</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: "0.4s" }}>🎉</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="font-amble text-sm sm:text-base text-white/90 text-center max-w-sm px-4"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
          >
            ¡Has descubierto la Zona VIP de la aventura! Facu el Héroe Dorado te agradece por ser parte de su noveno aniversario.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-col gap-3"
          >
            <Button
              onClick={onRestart}
              className="font-milky text-lg h-auto py-3 px-8 text-white transition-all hover:scale-110 active:scale-95"
              style={{
                background: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
                border: "3px solid #8B4513",
                boxShadow: "0 6px 0 #63340b",
              }}
            >
              🔄 Volver a la Misión
            </Button>

            <p className="font-arcade text-[10px] text-white/60 text-center">
              Misión Secreta: "La Fiesta Olvidada" - COMPLETADA
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Confetti decoration pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10L15 15M50 10L45 15M10 50L15 45M50 50L45 45' stroke='gold' stroke-width='2'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

