'use client';

import { useState, useEffect, useCallback } from 'react';

type MinigameScreenProps = {
  onGameEnd: () => void;
};

export function MinigameScreen({ onGameEnd }: MinigameScreenProps) {
  const [keys, setKeys] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [isGameWon, setIsGameWon] = useState(false);
  const [showPlusOne, setShowPlusOne] = useState(false);

  const moveKey = useCallback(() => {
    const gameArea = document.getElementById('game-area');
    if (gameArea) {
      const x = Math.random() * (gameArea.clientWidth - 50);
      const y = Math.random() * (gameArea.clientHeight - 50);
      setPosition({ top: `${y}px`, left: `${x}px` });
    }
  }, []);

  useEffect(() => {
    if (isGameWon) {
      const timer = setTimeout(() => {
        onGameEnd();
      }, 2000);
      return () => clearTimeout(timer);
    }
    
    if (typeof window !== "undefined") {
      moveKey(); // Initial position
      const interval = setInterval(moveKey, 800);
      return () => clearInterval(interval);
    }
  }, [isGameWon, onGameEnd, moveKey]);

  const handleKeyClick = () => {
    if (isGameWon) return;

    setShowPlusOne(true);
    setTimeout(() => setShowPlusOne(false), 500);

    const newKeyCount = keys + 1;
    setKeys(newKeyCount);

    if (newKeyCount >= 3) {
      setIsGameWon(true);
    } else {
      moveKey();
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-bottom flex flex-col items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('/desierto.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto animate-in fade-in-0 duration-500">
        {!isGameWon ? (
          <>
            <h2 className="font-milky text-5xl md:text-7xl text-white mb-4" style={{ textShadow: '4px 4px 0px hsl(var(--teddy-brown))' }}>
              ¡Desbloquea los datos del Nivel 9!
            </h2>
            <p className="font-body text-3xl text-white font-bold mb-8">
              Llaves recolectadas: {keys}/3
            </p>
            <div id="game-area" className="relative w-full h-[40vh] bg-black/20 rounded-lg border-4 border-teddy-brown shadow-inner-strong">
              <div 
                className="absolute text-5xl cursor-pointer transition-all duration-300"
                style={{ top: position.top, left: position.left }}
                onClick={handleKeyClick}
              >
                🔑
              </div>
              {showPlusOne && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-milky text-golden-coin animate-out fade-out zoom-out-150 duration-500">
                    +1
                 </div>
              )}
            </div>
          </>
        ) : (
          <h2 className="font-milky text-6xl md:text-8xl text-golden-coin animate-bounce" style={{ textShadow: '6px 6px 0px hsl(var(--teddy-brown))' }}>
            ¡MISIÓN DESBLOQUEADA!
          </h2>
        )}
      </div>
    </div>
  );
}
