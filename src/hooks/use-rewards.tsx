"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode, useMemo } from "react";

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

// Storage key for localStorage
const STORAGE_KEY = "sba-rewards";

export function RewardsProvider({ children }: { children: ReactNode }) {
  // Initialize state directly from localStorage to avoid re-renders
  const getInitialState = () => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Failed to load rewards from localStorage", error);
    }
    return { coins: 0, steps: defaultSteps, currentStepIndex: 0 };
  };

  const initialState = useMemo(getInitialState, []);
  
  const [coins, setCoins] = useState<number>(initialState.coins ?? 0);
  const [steps, setSteps] = useState<MissionStep[]>(initialState.steps ?? defaultSteps);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(initialState.currentStepIndex ?? 0);

  // Debounced save to localStorage
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ coins, steps, currentStepIndex }));
      } catch (error) {
        console.error("Failed to save rewards to localStorage", error);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
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

  // Memoize computed values
  const totalSteps = useMemo(() => steps.length, [steps.length]);
  const progressPercent = useMemo(
    () => steps.filter((s) => s.completed).length / totalSteps,
    [steps, totalSteps]
  );

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      coins,
      steps,
      currentStepIndex,
      addCoins,
      completeStep,
      goToStep,
      totalSteps,
      progressPercent,
    }),
    [coins, steps, currentStepIndex, addCoins, completeStep, goToStep, totalSteps, progressPercent]
  );

  return (
    <RewardsContext.Provider value={contextValue}>
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

