"use client"

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CircleDollarSign } from "lucide-react";

type LoadingScreenProps = {
  onLoadComplete: () => void;
  onStart: () => void;
};

export function LoadingScreen({ onLoadComplete, onStart }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100 && !loadingComplete) {
      setLoadingComplete(true);
      onLoadComplete();
    }
  }, [progress, loadingComplete, onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-500">
      <div className="relative flex flex-col items-center justify-center">
        <CircleDollarSign className="absolute -top-16 -left-24 h-16 w-16 text-accent animate-spin-and-bounce" />
        <CircleDollarSign className="absolute -bottom-20 -right-20 h-20 w-20 text-accent animate-spin-and-bounce [animation-delay:-1s]" />
        <CircleDollarSign className="absolute top-0 -right-24 h-12 w-12 text-accent animate-spin-and-bounce [animation-delay:-0.5s]" />

        <h1 className="font-headline text-8xl md:text-9xl text-white" style={{ WebkitTextStroke: '4px hsl(var(--foreground))', textShadow: '6px 6px 0px hsl(var(--foreground))' }}>
          FACU 9
        </h1>
        <p className="mt-4 font-headline text-2xl text-foreground">Cargando Mundo...</p>
      </div>

      <div className="w-64 mt-8">
        <Progress value={progress} className="h-6 border-2 border-foreground bg-white" />
        <p className="text-center mt-2 font-bold text-foreground">{progress}%</p>
      </div>
      
      <div className="h-28 mt-12">
        {loadingComplete && (
          <Button
            onClick={onStart}
            className="font-headline text-4xl h-auto px-12 py-4 border-4 border-foreground shadow-3d hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all animate-in fade-in zoom-in-95"
            size="lg"
          >
            ¡START!
          </Button>
        )}
      </div>
    </div>
  );
}
