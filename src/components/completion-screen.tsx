"use client";

import { Button } from "./ui/button";
import { Trophy } from 'lucide-react';

export function CompletionScreen() {
    const handleRewardClick = () => {
        alert("¡Tu recompensa es un día lleno de diversión, juegos y torta! ¡Gracias por venir!");
    };
    
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md animate-in fade-in-0 zoom-in-95">
      <div className="text-center p-8">
        <Trophy className="h-32 w-32 text-accent mx-auto animate-bounce" />
        <h1 className="font-headline text-7xl md:text-8xl text-white mt-8" style={{ WebkitTextStroke: '4px hsl(var(--foreground))', textShadow: '6px 6px 0px hsl(var(--foreground))' }}>
          ¡Nivel Completado!
        </h1>
        <p className="font-body text-2xl text-foreground mt-4">¡Tu misión ha sido registrada con éxito!</p>
        <Button
          onClick={handleRewardClick}
          className="mt-12 font-headline bg-accent text-accent-foreground text-3xl h-auto px-10 py-4 border-4 border-foreground shadow-3d hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
        >
          Ver Recompensas
        </Button>
      </div>
    </div>
  );
}
