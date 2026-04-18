'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heading, Body, Label } from '@/components/ui/typography';
import { Container } from '@/components/ui/container';

type PresentationScreenProps = {
  onNext: () => void;
  facuBio?: string;
};

// Sonido de clic estilo videojuego (generado con Web Audio API)
function playClickSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // Tono principal (moneda/coin sound)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(880, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.1);
    gain1.gain.setValueAtTime(0.3, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.15);

    // Armónico secundario
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(1320, ctx.currentTime + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(2640, ctx.currentTime + 0.15);
    gain2.gain.setValueAtTime(0.2, ctx.currentTime + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.05);
    osc2.stop(ctx.currentTime + 0.2);
  } catch (e) {
    console.debug('Audio no disponible:', e);
  }
}

// Sonido de hover suave
function playHoverSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {
    // Silenciar
  }
}

export function PresentationScreen({ onNext, facuBio }: PresentationScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = useCallback(() => {
    if (isPlaying) return;

    setIsPlaying(true);
    playClickSound();

    setTimeout(() => {
      onNext();
      setIsPlaying(false);
    }, 200);
  }, [onNext, isPlaying]);

  const defaultBio = '¡Che, qué de más que llegaste! Mi mundo acaba de subir de nivel porque... ¡desbloqueé los 9 años! 🏀 Armé una misión épica en KBOOM llena de saltos, básquet y recompensas. ¿Estás listo para unirte a mi equipo y mandarnos tremenda partida?';

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/mundos/bear_village/Hubbearvillage.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

      {/* Partículas decorativas (estrellas flotantes) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-golden-coin rounded-full opacity-60"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Contenedor principal responsive */}
      <Container size="md" spacing="md">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-white/95 backdrop-blur-sm border-[6px] sm:border-8 border-[hsl(var(--foreground))] rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_hsl(var(--foreground))] overflow-hidden"
        >
          {/* Franja decorativa superior (estilo juego) */}
          <div className="absolute top-0 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-grass-green via-golden-coin to-grass-green" />

          {/* Layout: Mobile (columna), Desktop (fila) */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 md:p-10 pt-12 sm:pt-14 md:pt-12">
            
            {/* Sección Imagen - Izquierda en desktop, Arriba en mobile */}
            <div className="flex-shrink-0 relative w-full md:w-auto flex justify-center md:justify-start">
              {/* Círculo decorativo detrás */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-dashed border-golden-coin/30" />
              </motion.div>

              {/* Aura brillante detrás del avatar */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-golden-coin/20 blur-xl" />
              </motion.div>

              {/* Imagen principal */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                onHoverStart={() => playHoverSound()}
              >
                <Image
                  src="/facu_bear_sin_fondo.png"
                  alt="Facu Bear Avatar"
                  width={250}
                  height={250}
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-125 hover:rotate-6 cursor-pointer"
                  onLoad={() => setImageLoaded(true)}
                  priority
                />

                {/* Badge "Nivel 9" */}
                <motion.div
                  className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-golden-coin border-3 border-[hsl(var(--foreground))] rounded-full px-2 py-1 sm:px-3 sm:py-1 shadow-[3px_3px_0px_hsl(var(--foreground))]"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="font-impact text-xs sm:text-sm text-[hsl(var(--foreground))]">
                    LVL 9
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Sección Texto - Abajo en mobile, Derecha en desktop */}
            <motion.div
              className="flex-1 text-center md:text-left space-y-4 sm:space-y-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Título con efecto */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Heading level="h1" className="leading-tight">
                  <span className="inline-block">Gran Facu</span>
                  <br />
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-grass-green via-golden-coin to-grass-green">
                    Aventura ⭐
                  </span>
                </Heading>
              </motion.div>

              {/* Línea decorativa */}
              <motion.div
                className="w-20 sm:w-24 h-1 bg-gradient-to-r from-grass-green to-golden-coin mx-auto md:mx-0 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />

              {/* Bio */}
              <motion.p
                className="font-body text-sm sm:text-base md:text-lg text-[#333] leading-relaxed break-words"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {facuBio || defaultBio}
              </motion.p>

              {/* Stats decorativos */}
              <motion.div
                className="flex flex-wrap gap-3 justify-center md:justify-start pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="voxel-card px-3 py-2 bg-grass-green/10">
                  <Label size="sm">🏀 Básquet</Label>
                </div>
                <div className="voxel-card px-3 py-2 bg-golden-coin/10">
                  <Label size="sm">🥋 Taekwondo</Label>
                </div>
                <div className="voxel-card px-3 py-2 bg-sky-blue/20">
                  <Label size="sm">🎮 Jugador Pro</Label>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Botón de acción - Posicionado en la parte inferior */}
          <motion.div
            className="relative bg-gradient-to-r from-sky-light/50 via-white to-sky-light/50 border-t-4 border-[hsl(var(--foreground))] p-4 sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Indicador de progreso */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-grass-green animate-pulse" />
                <span className="font-amble text-xs sm:text-sm text-[hsl(var(--foreground))]">
                  ¡Misión de Nivel 9 detectada!
                </span>
              </div>

              {/* Botón principal */}
              <Button
                onClick={handleClick}
                disabled={isPlaying}
                aria-label="Aceptar misión de cumpleaños"
                variant="3d-green"
                size="game-lg"
                className="relative overflow-hidden group font-milky"
                onMouseEnter={() => playHoverSound()}
              >
                {/* Efecto shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <span className="relative z-10">
                  {isPlaying ? '🎵 Sincronizando...' : '¡ACEPTAR MISIÓN! ➔'}
                </span>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer decorativo */}
        <motion.div
          className="text-center mt-4 sm:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Body size="sm" className="text-white/80 drop-shadow-lg">
            🐻 Prepará las medias, la partida está por empezar...
          </Body>
        </motion.div>
      </Container>
    </div>
  );
}

