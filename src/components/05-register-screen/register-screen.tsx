'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Palette, Trophy, Key } from 'lucide-react';
import { ResponsiveContainer } from '@/components/16-responsive-container';

type RegisterScreenProps = {
  onPlayArcade: (name: string) => void;
  onSkipArcade: (name: string) => void;
};

export function RegisterScreen({ onPlayArcade, onSkipArcade }: RegisterScreenProps) {
  const [playerName, setPlayerName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlay = () => {
    if (!playerName.trim() || isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      onPlayArcade(playerName.trim());
    }, 500);
  };

  const handleSkip = () => {
    if (!playerName.trim() || isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      onSkipArcade(playerName.trim());
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && playerName.trim()) {
      handlePlay();
    }
  };

  return (
    <ResponsiveContainer>
      <div className="min-h-screen w-full bg-sky-blue flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-xl bg-white/95 backdrop-blur-sm border-8 border-teddy-brown rounded-[2rem] sm:rounded-[3rem] p-8 shadow-[12px_12px_0px_#4E342E] relative"
        >
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-teddy-brown via-golden-coin to-teddy-brown" />

          <div className="text-center mb-8 pt-4">
            <h1 className="font-milky text-4xl sm:text-5xl text-teddy-brown leading-tight mb-2">
              Fichaje de Aliados 🐻
            </h1>
            <p className="font-body text-base sm:text-lg text-[#555] font-bold">
              Facu precisa saber quién se suma a la partida en KBOOM. ¡Poné tu nombre para empezar!
            </p>
          </div>

          <div className="space-y-6">
            <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
              <Input
                type="text"
                placeholder="Ej: El Crack del Básquet..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-4 border-teddy-brown h-14 sm:h-16 text-center font-milky text-xl rounded-xl focus:ring-4 focus:ring-golden-coin/30 transition-all shadow-inner"
              />
              <Palette className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-blue w-6 h-6 opacity-70 pointer-events-none" />
              <Trophy className="absolute right-4 top-1/2 -translate-y-1/2 text-golden-coin w-6 h-6 opacity-80 pointer-events-none" />
            </motion.div>

            <AnimatePresence>
              {playerName.trim() && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center justify-center gap-2 text-sm"
                >
                  <Key className="w-4 h-4 text-golden-coin animate-pulse" />
                  <span className="font-amble text-golden-coin font-bold">
                    ¡Nombre desbloqueado!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-4 pt-2">
              <Button
                onClick={handlePlay}
                disabled={!playerName.trim() || isSubmitting}
                className="w-full btn-3d-gold h-16 font-milky text-xl flex flex-col items-center justify-center gap-0 leading-tight"
              >
                <span>¡ENTRAR A JUGAR! 🎮</span>
                <span className="text-xs opacity-80 font-amble">(Ruta Aventurero: Minijuegos + Info)</span>
              </Button>

              <Button
                onClick={handleSkip}
                disabled={!playerName.trim() || isSubmitting}
                className="w-full btn-3d-blue h-16 font-milky text-lg flex flex-col items-center justify-center gap-0 leading-tight"
              >
                <span>Saltar al mapa (Solo Padres) 🛡️</span>
                <span className="text-xs opacity-80 font-amble">(Ruta Guardián: Info Directa + RSVP)</span>
              </Button>
            </div>
          </div>

          <div className="mt-8 bg-sky-blue/10 border-t-4 border-sky-blue/20 p-4 text-center rounded-xl">
            <p className="font-amble text-sm text-[#666] font-bold">
              ⚠️ Recordá: En KBOOM las medias son tu equipamiento obligatorio.
            </p>
          </div>

        </motion.div>
      </div>
    </ResponsiveContainer>
  );
}
