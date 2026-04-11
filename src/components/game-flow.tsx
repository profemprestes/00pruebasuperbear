"use client";

import { AnimatePresence } from "framer-motion";
import { useRewards } from "@/hooks/use-rewards";
import { GameHUD } from "./game-hud";
import { MapSection } from "./map-section";
import { ChestSection } from "./chest-section";
import { ShopSection } from "./shop-section";
import { EasterEggSection } from "./easter-egg-section";
import { useState } from "react";

type GameFlowProps = {
  photo1?: string | null;
  photo2?: string | null;
};

export function GameFlow({ photo1, photo2 }: GameFlowProps) {
  const { currentStepIndex, goToStep } = useRewards();
  const [hasCompletedRSVP, setHasCompletedRSVP] = useState(false);

  const handleStepClick = (index: number) => {
    goToStep(index);
  };

  const handleNext = (nextStep: number) => {
    goToStep(nextStep);
  };

  const handleRSVPComplete = () => {
    setHasCompletedRSVP(true);
  };

  const handleRestart = () => {
    // Clear localStorage and reload
    localStorage.removeItem("sba-rewards");
    window.location.reload();
  };

  const renderCurrentSection = () => {
    switch (currentStepIndex) {
      case 0: // Intro (handled by existing flow)
      case 1: // Map
        return <MapSection onNext={() => handleNext(2)} />;
      case 2: // Chest
        return <ChestSection onNext={() => handleNext(3)} photo1={photo1} photo2={photo2} />;
      case 3: // RSVP
        // For now, just navigate to next step
        // In production, you'd integrate the actual RSVP form here
        return (
          <div className="min-h-screen flex items-center justify-center px-4">
            <div
              className="rounded-2xl p-6 sm:p-8 text-center w-full max-w-3xl"
              style={{
                background: "linear-gradient(135deg, #fffde7 0%, #fff8e1 100%)",
                border: "6px solid #FFD700",
                boxShadow: "0 10px 30px rgba(255,215,0,0.3), 6px 6px 0 #b8860b",
              }}
            >
              <h2 className="font-milky text-2xl sm:text-3xl text-teddy-brown mb-4">
                ✉️ RSVP - Confirmar Asistencia
              </h2>
              <p className="font-amble text-sm text-voxel-text mb-6">
                ¡Confirma tu asistencia para ganar 50 monedas!
              </p>
              <button
                onClick={() => {
                  handleRSVPComplete();
                  handleNext(4);
                }}
                className="font-milky text-lg sm:text-xl h-auto py-3 px-6 text-white transition-all duration-150"
                style={{
                  background: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
                  border: "3px solid #8B4513",
                  boxShadow: "0 6px 0 #63340b",
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(3px)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
              >
                Confirmar Asistencia ✓
              </button>
            </div>
          </div>
        );
      case 4: // Shop
        return <ShopSection onNext={() => handleNext(5)} />;
      case 5: // Easter Egg
        return <EasterEggSection onRestart={handleRestart} />;
      default:
        return <MapSection onNext={() => handleNext(2)} />;
    }
  };

  return (
    <div className="relative">
      {/* Game HUD */}
      <GameHUD onStepClick={handleStepClick} />

      {/* Main content with transitions */}
      <AnimatePresence mode="wait">
        <div key={currentStepIndex}>{renderCurrentSection()}</div>
      </AnimatePresence>
    </div>
  );
}
