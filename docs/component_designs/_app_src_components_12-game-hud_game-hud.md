# Detalle de Diseño y Textos: /app/src/components/12-game-hud/game-hud.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `{cn("fixed top-0 left-0 right-0 z-50 pointer-events-none", className)}`
- `pointer-events-auto bg-gradient-to-b from-black/80 to-transparent pb-2 pt-2 px-3 sm:px-4`
- `max-w-5xl mx-auto flex items-center gap-2 sm:gap-4`
- `flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all active:scale-95 relative`
- `text-lg sm:text-xl`
- `font-arcade text-sm sm:text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]`
- `absolute -top-8 left-1/2 -translate-x-1/2 font-milky text-xs text-golden-coin whitespace-nowrap`
- `flex-1 min-w-0`
- `h-3 sm:h-4 rounded-full overflow-hidden border-2 border-teddy-brown bg-black/40`
- `h-full rounded-full`
- `hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full`
- `text-base`
- `font-milky text-xs text-golden-coin tracking-wide`
- `sm:hidden flex items-center justify-center gap-1.5 mt-2`
- `{cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all",
                  isActive && "scale-125",
                  isReachable && "pointer-events-auto active:scale-90",
                  !isReachable && "opacity-40 pointer-events-none"
                )}`
- `hidden sm:block pointer-events-auto max-w-5xl mx-auto px-4 mt-2`
- `flex items-center gap-2 flex-wrap justify-center`
- `{cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full font-amble text-xs transition-all",
                  isReachable && "hover:scale-105 active:scale-95",
                  !isReachable && "opacity-40 cursor-not-allowed"
                )}`
- `font-semibold`
- `text-[8px]`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<div>**: {/* Top HUD Bar */} {/* Step Navigation Pills (desktop) */}
- **<div>**: {/* Step Navigation Dots (mobile) */}
- **<div>**: {/* Coin Counter */} {/* Mission Progress */} {/* Current mission label */}
- **<button>**: {/* Coin popup animation */}
- **<span>**: 🪙
- **<span>**: {coins}
- **<AnimatePresence>**: {showCoinPopup && ( <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 0, y: -30 }} exit={{ opacity: 0 }} className="absolute -top-8 left-1/2 -translate-x-1/2 font-milky text-xs text-golden-coin whitespace-nowrap" > ¡Monedas! </motion.div> )}
- **<motion.div>**: ¡Monedas!
- **<div>**: {/* Progress bar */}
- **<span>**: {steps[currentStepIndex]?.icon}
- **<span>**: {steps[currentStepIndex]?.label}
- **<div>**: {steps.map((step, index) => { const isActive = index === currentStepIndex; const isCompleted = step.completed; const isReachable = index <= currentStepIndex; return ( <button key={step.id} onClick={() => handleStepClick(index)} disabled={!isReachable} className={cn( "w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all", isActive && "scale-125", isReachable && "pointer-events-auto active:scale-90", !isReachable && "opacity-40 pointer-events-none" )} style={{ background: isCompleted ? "#7CFC00" : isActive ? "#FFD700" : "rgba(255,255,255,0.3)", border: "1px solid #8B4513", boxShadow: isActive ? "0 2px 4px rgba(255,215,0,0.5)" : "none", }} aria-label={`Ir a ${step.label}`} aria-current={isActive ? "step" : undefined} > {isCompleted ? "✓" : step.icon} </button> ); })}
- **<button>**: {isCompleted ? "✓" : step.icon}
- **<div>**: {steps.map((step, index) => { const isActive = index === currentStepIndex; const isCompleted = step.completed; const isReachable = index <= currentStepIndex; return ( <button key={step.id} onClick={() => handleStepClick(index)} disabled={!isReachable} aria-label={`Ir a la sección ${step.label}${isCompleted ? ", completada" : ""}${isActive ? ", actual" : ""}`} className={cn( "flex items-center gap-1.5 px-3 py-1.5 rounded-full font-amble text-xs transition-all", isReachable && "hover:scale-105 active:scale-95", !isReachable && "opacity-40 cursor-not-allowed" )} style={{ background: isCompleted ? "linear-gradient(135deg, #7CFC00, #5DBB00)" : isActive ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(255,255,255,0.2)", border: "2px solid #8B4513", boxShadow: isActive ? "0 3px 0 #63340b" : "0 2px 0 #63340b", color: isActive || isCompleted ? "white" : "#003342", }} aria-current={isActive ? "step" : undefined} > <span>{step.icon}</span> <span className="font-semibold">{step.label}</span> {isCompleted && <span className="text-[8px]">✓</span>} </button> ); })}
- **<button>**: {isCompleted && <span className="text-[8px]">✓</span>}
- **<span>**: {step.icon}
- **<span>**: {step.label}
- **<span>**: ✓

## Contenido Completo del Archivo
```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRewards } from "@/hooks/use-rewards";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface GameHUDProps {
  onStepClick?: (index: number) => void;
  className?: string;
}

export function GameHUD({ onStepClick, className }: GameHUDProps) {
  const { coins, steps, currentStepIndex, progressPercent, goToStep } = useRewards();
  const [showCoinPopup, setShowCoinPopup] = useState(false);

  const handleStepClick = (index: number) => {
    // Allow navigation only to completed steps or current step
    if (index <= currentStepIndex) {
      goToStep(index);
      onStepClick?.(index);
    }
  };

  const handleCoinClick = () => {
    setShowCoinPopup(true);
    setTimeout(() => setShowCoinPopup(false), 1500);
  };

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 pointer-events-none", className)}>
      {/* Top HUD Bar */}
      <div className="pointer-events-auto bg-gradient-to-b from-black/80 to-transparent pb-2 pt-2 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 sm:gap-4">
          {/* Coin Counter */}
          <button
            onClick={handleCoinClick}
            aria-label={`Monedas acumuladas: ${coins}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all active:scale-95 relative"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              border: "2px solid #8B4513",
              boxShadow: "0 3px 0 #63340b",
            }}
          >
            <span className="text-lg sm:text-xl" role="img" aria-label="coin">🪙</span>
            <span className="font-arcade text-sm sm:text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {coins}
            </span>

            {/* Coin popup animation */}
            <AnimatePresence>
              {showCoinPopup && (
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -30 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 font-milky text-xs text-golden-coin whitespace-nowrap"
                >
                  ¡Monedas!
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mission Progress */}
          <div className="flex-1 min-w-0">
            {/* Progress bar */}
            <div
              className="h-3 sm:h-4 rounded-full overflow-hidden border-2 border-teddy-brown bg-black/40"
              style={{ boxShadow: "0 2px 0 #63340b" }}
              role="progressbar"
              aria-valuenow={Math.round(progressPercent * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #7CFC00, #FFD700, #FFA500)",
                  backgroundSize: "200% auto",
                }}
                animate={{ width: `${progressPercent * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Current mission label */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(0,51,66,0.9)",
              border: "2px solid #FFD700",
            }}
          >
            <span className="text-base">{steps[currentStepIndex]?.icon}</span>
            <span className="font-milky text-xs text-golden-coin tracking-wide">
              {steps[currentStepIndex]?.label}
            </span>
          </div>
        </div>

        {/* Step Navigation Dots (mobile) */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-2">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex;
            const isCompleted = step.completed;
            const isReachable = index <= currentStepIndex;

            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                disabled={!isReachable}
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all",
                  isActive && "scale-125",
                  isReachable && "pointer-events-auto active:scale-90",
                  !isReachable && "opacity-40 pointer-events-none"
                )}
                style={{
                  background: isCompleted
                    ? "#7CFC00"
                    : isActive
                    ? "#FFD700"
                    : "rgba(255,255,255,0.3)",
                  border: "1px solid #8B4513",
                  boxShadow: isActive ? "0 2px 4px rgba(255,215,0,0.5)" : "none",
                }}
                aria-label={`Ir a ${step.label}`}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? "✓" : step.icon}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Navigation Pills (desktop) */}
      <div className="hidden sm:block pointer-events-auto max-w-5xl mx-auto px-4 mt-2">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex;
            const isCompleted = step.completed;
            const isReachable = index <= currentStepIndex;

            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                disabled={!isReachable}
                aria-label={`Ir a la sección ${step.label}${isCompleted ? ", completada" : ""}${isActive ? ", actual" : ""}`}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full font-amble text-xs transition-all",
                  isReachable && "hover:scale-105 active:scale-95",
                  !isReachable && "opacity-40 cursor-not-allowed"
                )}
                style={{
                  background: isCompleted
                    ? "linear-gradient(135deg, #7CFC00, #5DBB00)"
                    : isActive
                    ? "linear-gradient(135deg, #FFD700, #FFA500)"
                    : "rgba(255,255,255,0.2)",
                  border: "2px solid #8B4513",
                  boxShadow: isActive ? "0 3px 0 #63340b" : "0 2px 0 #63340b",
                  color: isActive || isCompleted ? "white" : "#003342",
                }}
                aria-current={isActive ? "step" : undefined}
              >
                <span>{step.icon}</span>
                <span className="font-semibold">{step.label}</span>
                {isCompleted && <span className="text-[8px]">✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


```
