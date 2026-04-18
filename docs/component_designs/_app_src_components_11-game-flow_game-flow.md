# Detalle de Diseño y Textos: /app/src/components/11-game-flow/game-flow.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `relative`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<div>**: {renderCurrentSection()}

## Contenido Completo del Archivo
```tsx
"use client";

import { AnimatePresence } from "framer-motion";
import { useRewards } from "@/hooks/use-rewards";
import { GameHUD } from "@/components/12-game-hud";
import { MapSection } from "@/components/20-map-section";
import { ChestSection } from "@/components/19-chest-section";
import { RSVPSection } from "@/components/21-rsvp-section";
import { ShopSection } from "@/components/22-shop-section";
import { EasterEggSection } from "@/components/23-easter-egg-section";

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


```
