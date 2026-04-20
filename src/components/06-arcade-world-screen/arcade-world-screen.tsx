'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ResponsiveContainer } from '@/components/16-responsive-container';

type ArcadeWorldScreenProps = {
  onArcadeEnd: (coins: number) => void;
};

export function ArcadeWorldScreen({ onArcadeEnd }: ArcadeWorldScreenProps) {
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const handleLevelClick = (levelId: number) => {
    if (!completedLevels.includes(levelId)) {
      setCompletedLevels([...completedLevels, levelId]);
    }
  };

  const allCompleted = completedLevels.length === 3;

  return (
    <ResponsiveContainer>
      <div className="min-h-screen w-full flex flex-col items-center justify-start bg-sky-blue py-10 px-4">

        <h1 className="font-milky text-4xl md:text-6xl text-teddy-brown mb-8 text-center drop-shadow-[0_4px_0_rgba(255,255,255,0.5)]">
          Arcade World 🐻
        </h1>

        {/* Dialog Baaren */}
        <motion.div
          className="flex items-start gap-4 bg-white/90 border-4 border-teddy-brown rounded-2xl p-4 max-w-2xl w-full mb-8 shadow-[0_6px_0_#4E342E]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 shrink-0 bg-amber-100 rounded-full border-4 border-teddy-brown overflow-hidden flex items-center justify-center">
            <Image src="/personajes/Baarenrender_.png" alt="Baaren" width={60} height={60} />
          </div>
          <div>
            <h3 className="font-milky text-teddy-brown text-xl mb-1">Baaren</h3>
            <p className="font-body text-[#4E342E] font-bold">
              "¡Metele que sos un crack! Para entrar al banquete en KBOOM tenés que superar estos 3 minijuegos."
            </p>
          </div>
        </motion.div>

        {/* Level Buttons (Minigames) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          {[
            { id: 1, title: "🏀 El Tiro de Facu" },
            { id: 2, title: "🧦 Rescate de Medias" },
            { id: 3, title: "❓ Trivia Pro-Facu" }
          ].map((level) => {
            const isCompleted = completedLevels.includes(level.id);
            return (
              <Button
                key={level.id}
                onClick={() => handleLevelClick(level.id)}
                className={`h-24 font-milky text-xl border-4 border-[#4E342E] rounded-xl transition-all shadow-[0_8px_0_#4E342E] hover:translate-y-1 hover:shadow-[0_4px_0_#4E342E] active:translate-y-2 active:shadow-none ${isCompleted ? 'bg-grass-green text-green-900 opacity-80' : 'bg-golden-coin text-amber-900'}`}
              >
                {isCompleted ? '✅ Completado' : level.title}
              </Button>
            )
          })}
        </div>

        {/* Dialog Tristopio & Continue */}
        <AnimatePresence>
          {allCompleted && (
            <motion.div
              className="flex flex-col items-center gap-6 w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-start gap-4 bg-white/90 border-4 border-teddy-brown rounded-2xl p-4 w-full shadow-[0_6px_0_#4E342E]">
                <div className="w-16 h-16 shrink-0 bg-pink-100 rounded-full border-4 border-teddy-brown overflow-hidden flex items-center justify-center text-4xl">
                  🐰
                </div>
                <div>
                  <h3 className="font-milky text-teddy-brown text-xl mb-1">Tristopio</h3>
                  <p className="font-body text-[#4E342E] font-bold">
                    "¡Re bien! Ya tenés todo el equipamiento y las reglas claras. Ahora pasá a guardar tu progreso."
                  </p>
                </div>
              </div>

              <Button
                onClick={() => onArcadeEnd(150)}
                className="btn-3d-green h-16 px-8 font-milky text-2xl animate-pulse hover:animate-none shadow-[0_8px_0_#2D6400]"
              >
                Ir al Punto de Guardado 💾
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </ResponsiveContainer>
  );
}
