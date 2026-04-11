"use client";

import { motion } from "framer-motion";
import { type ReactNode, useEffect } from "react";
import { useRewards } from "@/hooks/use-rewards";
import { useIsDesktop } from "@/hooks/use-media-query";

interface MissionSectionProps {
  stepId: string;
  children: ReactNode;
  onSectionComplete?: () => void;
  className?: string;
  bgImage?: string;
  showBgOverlay?: boolean;
}

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn" as const,
    },
  },
};

export function MissionSection({
  stepId,
  children,
  onSectionComplete,
  className = "",
  bgImage,
  showBgOverlay = true,
}: MissionSectionProps) {
  const { steps, completeStep, addCoins, currentStepIndex } = useRewards();
  const isDesktop = useIsDesktop();

  const stepIndex = steps.findIndex((s) => s.id === stepId);
  const step = steps[stepIndex];

  // Auto-complete step and award coins on mount
  useEffect(() => {
    if (step && !step.completed) {
      completeStep(stepId);
      addCoins(step.coinReward);
      onSectionComplete?.();
    }
  }, [stepId]); // eslint-disable-line react-hooks/exhaustive-deps

  const showRewardNotification = step && !step.completed;

  return (
    <motion.div
      key={stepId}
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`min-h-screen w-full relative ${className}`}
      style={{
        ...(bgImage && {
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
      }}
    >
      {/* Background overlay */}
      {showBgOverlay && (
        <div
          className="absolute inset-0"
          style={{
            background: bgImage
              ? "linear-gradient(180deg, rgba(0,51,66,0.5) 0%, rgba(0,51,66,0.7) 100%)"
              : "linear-gradient(180deg, #AAE5FF 0%, #ECF8FF 60%, #D4F8FF 100%)",
          }}
        />
      )}

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Section header with coin reward */}
        {step && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-6 flex flex-col items-center gap-2"
          >
            {/* Step icon and label */}
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,51,66,0.85)",
                border: "2px solid #FFD700",
                boxShadow: "0 4px 0 #63340b",
              }}
            >
              <span className="text-2xl">{step.icon}</span>
              <span className="font-milky text-lg text-golden-coin tracking-wide">
                {step.label}
              </span>
            </div>

            {/* Coin reward badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                border: "2px solid #8B4513",
                boxShadow: "0 3px 0 #63340b",
              }}
            >
              <span className="text-sm">🪙</span>
              <span className="font-arcade text-xs text-white">+{step.coinReward} monedas</span>
            </motion.div>
          </motion.div>
        )}

        {/* Main content */}
        <div className="w-full max-w-5xl">{children}</div>
      </div>

      {/* Pixel grass decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pixel-grass" aria-hidden="true" />
    </motion.div>
  );
}
