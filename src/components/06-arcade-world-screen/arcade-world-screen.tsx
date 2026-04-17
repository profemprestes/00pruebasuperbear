'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ArcadeWorldScreenProps = {
  onArcadeEnd: (coins: number) => void;
};

export function ArcadeWorldScreen({ onArcadeEnd }: ArcadeWorldScreenProps) {
  const [minigameLevel, setMinigameLevel] = useState(1);
  const [levelComplete, setLevelComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNextLevel = useCallback(() => {
    setShowSuccess(true);
    setTimeout(() => {
      if (minigameLevel < 5) {
        setMinigameLevel(minigameLevel + 1);
        setShowSuccess(false);
        setLevelComplete(false);
      } else {
        // End of arcade, award coins
        onArcadeEnd(150);
      }
    }, 2000);
  }, [minigameLevel, onArcadeEnd]);

  useEffect(() => {
    if (levelComplete) {
      handleNextLevel();
    }
  }, [levelComplete, handleNextLevel]);

  const renderMinigame = () => {
    switch (minigameLevel) {
      case 1:
        return <CoinCollectGame onComplete={() => setLevelComplete(true)} />;
      case 2:
        return <LavaFloorGame onComplete={() => setLevelComplete(true)} />;
      case 3:
        return <HoneyDodgeGame onComplete={() => setLevelComplete(true)} />;
      case 4:
        return <MoleWhackGame onComplete={() => setLevelComplete(true)} />;
      case 5:
        return <RouletteGame onComplete={() => setLevelComplete(true)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full stars flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="relative bg-white border-6 sm:border-8 border-teddy-brown rounded-2xl p-3 sm:p-6 shadow-3d w-full max-w-3xl text-center motion-safe:animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-8 duration-500">
        <h2 className="font-milky text-2xl sm:text-3xl md:text-4xl text-teddy-brown mb-3 sm:mb-4">
          {showSuccess ? "¡NIVEL COMPLETADO!" : `Misión ${minigameLevel} / 5`}
        </h2>
        <div className="relative bg-gray-200 h-72 sm:h-80 md:h-96 w-full rounded-lg border-4 border-gray-400 overflow-hidden">
          {renderMinigame()}
        </div>
      </div>
    </div>
  );
}

// --- Minigame Components ---

const CoinCollectGame = ({ onComplete }: { onComplete: () => void }) => {
  const [coins, setCoins] = useState(
    Array.from({ length: 5 }, (_, i) => ({ id: i, collected: false, top: `${10 + Math.random() * 70}%`, left: `${5 + Math.random() * 80}%` }))
  );
  const collectedCount = coins.filter(c => c.collected).length;

  const handleCollect = (id: number) => {
    setCoins(coins.map(c => c.id === id ? { ...c, collected: true } : c));
  };

  useEffect(() => {
    if (collectedCount === 5) {
      onComplete();
    }
  }, [collectedCount, onComplete]);

  return (
    <div className="p-3 sm:p-4 h-full flex flex-col items-center">
      <p className="font-body font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-center">¡Recoge 5 monedas del Arcade!</p>
      <div className="relative w-full h-full">
        {coins.map(coin => !coin.collected && (
          <button key={coin.id} onClick={() => handleCollect(coin.id)} aria-label={`Recoger moneda ${coin.id + 1} del Arcade`} className="absolute text-3xl sm:text-4xl motion-safe:animate-float" style={{ top: coin.top, left: coin.left }}>
            🪙
          </button>
        ))}
      </div>
    </div>
  );
};

const LavaFloorGame = ({ onComplete }: { onComplete: () => void }) => {
    const [safePlatforms, setSafePlatforms] = useState(() => new Set(Array.from({length: 3}, () => Math.floor(Math.random() * 9))));
    const [clickedSafe, setClickedSafe] = useState<Set<number>>(new Set());
    const [warning, setWarning] = useState(false);

    const handleClick = (index: number) => {
        if (safePlatforms.has(index)) {
            setClickedSafe(prev => new Set(prev).add(index));
        } else {
            setWarning(true);
            setTimeout(() => setWarning(false), 1000);
        }
    };

    useEffect(() => {
        if(safePlatforms.size > 0 && clickedSafe.size === safePlatforms.size) {
            onComplete();
        }
    }, [clickedSafe, onComplete, safePlatforms]);

    return (
        <div className="p-3 sm:p-4 h-full flex flex-col items-center">
            <p className="font-body font-bold text-xs sm:text-sm md:text-lg mb-2 text-center leading-tight">¡Misión de Tristopio! El suelo es lava. Pisa solo las plataformas seguras.</p>
            {warning && <p className="text-red-500 font-bold motion-safe:animate-pulse text-sm sm:text-base">¡Cuidado!</p>}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full max-w-[16rem] sm:max-w-[20rem] aspect-square mx-auto mt-2 sm:mt-4">
                {Array.from({ length: 9 }).map((_, i) => (
                    <Button
                        key={i}
                        onClick={() => handleClick(i)}
                        aria-label={`Plataforma ${i + 1}`}
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "w-full h-full rounded-md flex items-center justify-center",
                            safePlatforms.has(i) ? 'bg-green-500 hover:bg-green-600' : 'bg-red-600 hover:bg-red-700',
                            clickedSafe.has(i) && 'opacity-50'
                        )}
                    >
                       {clickedSafe.has(i) && '✅'}
                    </Button>
                ))}
            </div>
        </div>
    );
};


const HoneyDodgeGame = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="p-3 sm:p-4 h-full flex flex-col items-center justify-center">
      <p className="font-body font-bold text-xs sm:text-sm md:text-lg mb-3 sm:mb-4 text-center leading-tight">¡La fábrica de The Hive! Atrapa la llave, pero NO toques la miel morada.</p>
      <div className="relative w-full h-4/5">
        <Button
          onClick={onComplete}
          aria-label="Atrapar la llave"
          variant="ghost"
          size="icon"
          className="absolute text-4xl sm:text-5xl motion-safe:animate-float hover:bg-transparent"
          style={{ top: '40%', left: '20%' }}
        >
          🔑
        </Button>
        <div className="absolute text-4xl sm:text-5xl motion-safe:animate-sway" style={{ top: '20%', left: '60%' }}>🟣</div>
        <div className="absolute text-4xl sm:text-5xl motion-safe:animate-sway" style={{ top: '60%', left: '80%', animationDelay: '-2s' }}>🟣</div>
      </div>
    </div>
  );
};

const MoleWhackGame = ({ onComplete }: { onComplete: () => void }) => {
    const [moles, setMoles] = useState([ {id: 0, active: false}, {id: 1, active: false}, {id: 2, active: false} ]);
    const [whacked, setWhacked] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * moles.length);
            setMoles(moles.map((mole, i) => i === randomIndex ? {...mole, active: true} : {...mole, active: false}));
            setTimeout(() => setMoles(moles.map(m => ({...m, active: false}))), 1000);
        }, 1500);
        return () => clearInterval(interval);
    }, [moles]);

    const handleWhack = () => {
        const newCount = whacked + 1;
        setWhacked(newCount);
        if (newCount >= 3) {
            onComplete();
        }
    }

    return (
        <div className="p-3 sm:p-4 h-full flex flex-col items-center">
            <p className="font-body font-bold text-sm sm:text-lg mb-2 text-center">¡Despierta a los 3 topos dormidos! ({whacked}/3)</p>
            <div className="flex justify-around w-full mt-4 sm:mt-8">
                {moles.map(mole => (
                    <div key={mole.id} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-stone-700 rounded-full flex items-center justify-center">
                        {mole.active && (
                            <Button
                                onClick={handleWhack}
                                aria-label="Golpear topo"
                                variant="ghost"
                                size="icon"
                                className="text-3xl sm:text-4xl md:text-5xl motion-safe:animate-in fade-in-0 zoom-in-75 hover:bg-transparent"
                            >
                                🔥
                            </Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const RouletteGame = ({ onComplete }: { onComplete: () => void }) => {
    const [spinning, setSpinning] = useState(false);

    const handleSpin = () => {
        setSpinning(true);
        setTimeout(() => {
            onComplete();
        }, 2000);
    }
    return (
        <div className="p-3 sm:p-4 h-full flex flex-col items-center justify-center">
             <p className="font-body font-bold text-xs sm:text-sm md:text-lg mb-3 sm:mb-4 text-center leading-tight">¡Gira la ruleta de Capitalos para tu recompensa final!</p>
            {!spinning ? (
                <Button
                    onClick={handleSpin}
                    aria-label="Girar la ruleta de Capitalos para obtener recompensa"
                    variant="3d-gold"
                    size="game-lg"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500 font-milky text-base sm:text-lg md:text-2xl shadow-lg motion-safe:animate-float"
                >
                    GIRAR
                </Button>
            ) : (
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500 motion-safe:animate-roulette flex items-center justify-center">
                     <div className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full bg-white flex items-center justify-center font-milky text-teddy-brown text-xs sm:text-sm md:text-lg text-center p-2">
                        ¡Premio Legendario!
                    </div>
                </div>
            )}
        </div>
    );
};

