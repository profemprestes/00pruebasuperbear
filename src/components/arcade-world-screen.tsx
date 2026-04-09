'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type ArcadeWorldScreenProps = {
  onArcadeEnd: (coins: number) => void;
};

export function ArcadeWorldScreen({ onArcadeEnd }: ArcadeWorldScreenProps) {
  const [minigameLevel, setMinigameLevel] = useState(1);
  const [levelComplete, setLevelComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNextLevel = () => {
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
  };

  useEffect(() => {
    if (levelComplete) {
      handleNextLevel();
    }
  }, [levelComplete]);

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
    <div className="h-screen w-full stars flex flex-col items-center justify-center p-4">
      <div className="relative bg-white border-8 border-teddy-brown rounded-2xl p-6 shadow-3d w-full max-w-3xl text-center">
        <h2 className="font-milky text-4xl text-teddy-brown mb-4">
          {showSuccess ? "¡NIVEL COMPLETADO!" : `Misión ${minigameLevel} / 5`}
        </h2>
        <div className="relative bg-gray-200 h-96 w-full rounded-lg border-4 border-gray-400 overflow-hidden">
          {renderMinigame()}
        </div>
      </div>
    </div>
  );
}

// --- Minigame Components ---

const CoinCollectGame = ({ onComplete }: { onComplete: () => void }) => {
  const [coins, setCoins] = useState(
    Array.from({ length: 5 }, (_, i) => ({ id: i, collected: false, top: `${Math.random() * 85}%`, left: `${Math.random() * 85}%` }))
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
    <div className="p-4 h-full flex flex-col items-center">
      <p className="font-body font-bold text-lg mb-2">¡Recoge 5 monedas del Arcade!</p>
      <div className="relative w-full h-full">
        {coins.map(coin => !coin.collected && (
          <button key={coin.id} onClick={() => handleCollect(coin.id)} className="absolute text-4xl animate-float" style={{ top: coin.top, left: coin.left }}>
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
        if(clickedSafe.size === safePlatforms.size && safePlatforms.size > 0) {
            onComplete();
        }
    }, [clickedSafe, onComplete, safePlatforms]);

    return (
        <div className="p-4 h-full flex flex-col items-center">
            <p className="font-body font-bold text-lg mb-2">¡Misión de Tristopio! El suelo es lava. Pisa solo las plataformas seguras.</p>
            {warning && <p className="text-red-500 font-bold animate-pulse">¡Cuidado!</p>}
            <div className="grid grid-cols-3 gap-2 w-48 h-48 mx-auto mt-4">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} onClick={() => handleClick(i)} className={cn("w-14 h-14 rounded-md cursor-pointer flex items-center justify-center", 
                        safePlatforms.has(i) ? 'bg-green-500' : 'bg-red-600',
                        clickedSafe.has(i) && 'opacity-50'
                    )}>
                       {clickedSafe.has(i) && '✅'}
                    </div>
                ))}
            </div>
        </div>
    );
};


const HoneyDodgeGame = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center">
      <p className="font-body font-bold text-lg mb-4">¡La fábrica de The Hive! Atrapa la llave, pero NO toques la miel morada.</p>
      <div className="relative w-full h-4/5">
        <div onClick={onComplete} className="absolute text-5xl cursor-pointer animate-float" style={{ top: '40%', left: '20%' }}>🔑</div>
        <div className="absolute text-5xl animate-sway" style={{ top: '20%', left: '60%' }}>🟣</div>
        <div className="absolute text-5xl animate-sway" style={{ top: '60%', left: '80%', animationDelay: '-2s' }}>🟣</div>
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
        <div className="p-4 h-full flex flex-col items-center">
            <p className="font-body font-bold text-lg mb-2">¡Despierta a los 3 topos dormidos en las minas! ({whacked}/3)</p>
            <div className="flex justify-around w-full mt-8">
                {moles.map(mole => (
                    <div key={mole.id} className="w-24 h-24 bg-stone-700 rounded-full flex items-center justify-center">
                        {mole.active && <div onClick={handleWhack} className="text-5xl cursor-pointer animate-in fade-in-0 zoom-in-75">️‍🔥</div>}
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
        <div className="p-4 h-full flex flex-col items-center justify-center">
             <p className="font-body font-bold text-lg mb-4">¡Gira la ruleta de Capitalos para tu recompensa final!</p>
            {!spinning ? (
                <button onClick={handleSpin} className="w-48 h-48 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500 flex items-center justify-center font-milky text-white text-2xl shadow-lg">
                    GIRAR
                </button>
            ) : (
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500 animate-roulette flex items-center justify-center">
                     <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center font-milky text-teddy-brown text-lg text-center p-2">
                        ¡Premio Legendario!
                    </div>
                </div>
            )}
        </div>
    );
};
