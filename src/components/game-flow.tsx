"use client";

import { AnimatePresence } from "framer-motion";
import { useRewards } from "@/hooks/use-rewards";
import { GameHUD } from "./game-hud";
import { MapSection } from "./map-section";
import { ChestSection } from "./chest-section";
import { RSVPSection } from "./rsvp-section";
import { ShopSection } from "./shop-section";
import { EasterEggSection } from "./easter-egg-section";

type GameFlowProps = {
  photo1?: string | null;
  photo2?: string | null;
};

export function GameFlow({ photo1, photo2 }: GameFlowProps) {
  const { currentStepIndex, goToStep } = useRewards();

  const handleStepClick = (index: number) => {
    goToStep(index);
  };

  const handleNext = (nextStep: number) => {
    goToStep(nextStep);
  };

  const handleRestart = () => {
    localStorage.removeItem("sba-rewards");
    window.location.reload();
  };

  const renderCurrentSection = () => {
    switch (currentStepIndex) {
      case 0: // Intro
      case 1: // Map
        return <MapSection onNext={() => handleNext(2)} />;
      case 2: // Chest
        return <ChestSection onNext={() => handleNext(3)} photo1={photo1} photo2={photo2} />;
      case 3: // RSVP
        return <RSVPSection onNext={() => handleNext(4)} />;
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
      <GameHUD onStepClick={handleStepClick} />

      <AnimatePresence mode="wait">
        <div key={currentStepIndex}>{renderCurrentSection()}</div>
      </AnimatePresence>
    </div>
  );
}
