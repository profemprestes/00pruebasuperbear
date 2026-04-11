"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export interface MissionStep {
  id: string;
  label: string;
  icon: string;
  coinReward: number;
  completed: boolean;
}

interface RewardsContextType {
  coins: number;
  steps: MissionStep[];
  currentStepIndex: number;
  addCoins: (amount: number) => void;
  completeStep: (stepId: string) => void;
  goToStep: (index: number) => void;
  totalSteps: number;
  progressPercent: number;
}

const defaultSteps: MissionStep[] = [
  { id: "intro", label: "Intro", icon: "🎮", coinReward: 10, completed: false },
  { id: "map", label: "Mapa", icon: "🗺️", coinReward: 20, completed: false },
  { id: "chest", label: "Cofre", icon: "📦", coinReward: 30, completed: false },
  { id: "rsvp", label: "RSVP", icon: "✉️", coinReward: 50, completed: false },
  { id: "shop", label: "Tienda", icon: "🛍️", coinReward: 25, completed: false },
  { id: "easter-egg", label: "???", icon: "🥚", coinReward: 100, completed: false },
];

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export function RewardsProvider({ children }: { children: ReactNode }) {
  const [coins, setCoins] = useState(0);
  const [steps, setSteps] = useState<MissionStep[]>(defaultSteps);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sba-rewards");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.coins) setCoins(data.coins);
        if (data.steps) setSteps(data.steps);
        if (data.currentStepIndex !== undefined) setCurrentStepIndex(data.currentStepIndex);
      }
    } catch (error) {
      console.error("Failed to load rewards from localStorage", error);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("sba-rewards", JSON.stringify({ coins, steps, currentStepIndex }));
    } catch (error) {
      console.error("Failed to save rewards to localStorage", error);
    }
  }, [coins, steps, currentStepIndex]);

  const addCoins = useCallback((amount: number) => {
    setCoins((prev) => prev + amount);
  }, []);

  const completeStep = useCallback((stepId: string) => {
    setSteps((prev) =>
      prev.map((step) =>
        step.id === stepId && !step.completed ? { ...step, completed: true } : step
      )
    );
  }, []);

  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  }, [steps.length]);

  const totalSteps = steps.length;
  const progressPercent = steps.filter((s) => s.completed).length / totalSteps;

  return (
    <RewardsContext.Provider
      value={{
        coins,
        steps,
        currentStepIndex,
        addCoins,
        completeStep,
        goToStep,
        totalSteps,
        progressPercent,
      }}
    >
      {children}
    </RewardsContext.Provider>
  );
}

export function useRewards() {
  const context = useContext(RewardsContext);
  if (!context) {
    throw new Error("useRewards must be used within a RewardsProvider");
  }
  return context;
}
