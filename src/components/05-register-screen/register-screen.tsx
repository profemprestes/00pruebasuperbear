'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useBreakpoint } from '@/hooks/use-mobile';

type RegisterScreenProps = {
  onPlayArcade: (name: string) => void;
  onSkipArcade: (name: string) => void;
};

export function RegisterScreen({ onPlayArcade, onSkipArcade }: RegisterScreenProps) {
  const [playerName, setPlayerName] = useState('');
  const breakpoint = useBreakpoint();
  
  // Smooth transitions between breakpoints
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isDesktop = breakpoint === 'desktop';

  const handlePlay = () => onPlayArcade(playerName.trim());
  const handleSkip = () => onSkipArcade(playerName.trim() || 'Invitado');

  /* ── MOBILE: JRPG Dialog Box ──────────────────────── */
  if (isMobile) {
    return (
      <div
        className="min-h-screen w-full bg-cover bg-bottom flex flex-col items-center justify-end pb-8 sm:pb-10 p-3 sm:p-4 relative overflow-auto transition-all duration-300 ease-in-out"
        style={{ backgroundImage: "url('/mundos/bear_village/Beemothepdesertentrancearea.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" />

        {/* Pixel tree strip */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-2 sm:px-4 pb-0 z-10 pointer-events-none" aria-hidden="true">
          {['🌵', '🌴', '🌵', '🌴', '🌵'].map((t, i) => (
            <span key={i} className="text-3xl sm:text-4xl leading-none" style={{ marginBottom: -4 }}>{t}</span>
          ))}
        </div>

        {/* Dialog card — JRPG style */}
        <div className="relative z-20 w-full max-w-sm mx-auto motion-safe:animate-in fade-in-0 slide-in-from-bottom-6 duration-500">
          {/* Shicka avatar floating above the dialog box */}
          <div className="flex justify-start pl-2 sm:pl-4 mb-[-1.5rem] z-30 relative">
            <div className="motion-safe:animate-float">
              <Image
                src="/personajes/Shicka_render_.png"
                alt="Shicka la guía del reino"
                width={100}
                height={100}
                className="w-20 sm:w-[120px] h-20 sm:h-[120px] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Dialog bubble with CSS pointer */}
          <div
            className="relative bg-sky-light text-voxel-text rounded-xl p-4 sm:p-5"
            style={{
              border: '4px solid #8B4513',
              boxShadow: '0 6px 0 #63340b, 4px 4px 0 rgba(0,0,0,0.2)',
            }}
          >
            {/* JRPG bubble pointer (triangle pointing up-left toward Shicka) */}
            <div
              className="absolute -top-4 left-8 sm:left-10 w-0 h-0"
              style={{
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderBottom: '14px solid #8B4513',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-[9px] left-[34px] sm:left-[42px] w-0 h-0"
              style={{
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '12px solid #ECF8FF',
              }}
              aria-hidden="true"
            />

            <p className="font-amble text-sm sm:text-base font-bold mb-3 sm:mb-4 leading-snug">
              ¡Alto ahí, viajero! Antes de darte los detalles, <em>necesito registrarte</em>.
            </p>

            {/* Input */}
            <Input
              id="player-name-input"
              type="text"
              placeholder="Nombre de Aventurero"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && playerName.trim() && handlePlay()}
              aria-label="Nombre del aventurero"
              className="border-4 border-teddy-brown h-11 sm:h-12 text-sm sm:text-base text-center font-milky rounded-lg bg-white/90 focus:ring-2 focus:ring-golden-coin focus:border-golden-coin outline-none mb-3 sm:mb-4"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
            />

            {/* Play button */}
            <div className="relative mb-2 sm:mb-3">
              {playerName.trim() && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
                  <span className="font-milky text-[10px] sm:text-xs bg-amber-400 text-white px-2 py-0.5 rounded-full border-2 border-teddy-brown shadow-md whitespace-nowrap">
                    🪙 ¡Gana monedas jugando!
                  </span>
                  <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-golden-coin motion-safe:animate-bounce" />
                </div>
              )}
              <Button
                id="btn-play-arcade"
                onClick={handlePlay}
                disabled={!playerName.trim()}
                aria-label="Entrar al Arcade World para jugar y ganar monedas VIP"
                className="w-full font-milky text-base sm:text-lg h-11 sm:h-12 border-3 border-teddy-brown transition-all whitespace-normal leading-tight disabled:opacity-50 active:translate-y-1 active:shadow-[0_0_0_transparent]"
                style={{
                  background: playerName.trim() ? '#FFD700' : '#ccc',
                  boxShadow: playerName.trim() ? '0 6px 0 #63340b' : 'none',
                  border: '3px solid #8B4513',
                  color: 'white',
                }}
              >
                ¡Entrar al Arcade World! (VIP) 🎮
              </Button>
            </div>

            {/* Skip button */}
            <Button
              id="btn-skip-arcade"
              onClick={handleSkip}
              aria-label="Saltar los minijuegos e ir directo a las coordenadas"
              className="w-full font-amble text-xs sm:text-sm h-9 sm:h-10 transition-all active:translate-y-1 active:shadow-[0_0_0_transparent]"
              style={{
                background: '#87CEEB',
                border: '3px solid #00008B',
                boxShadow: '0 5px 0 #00008B',
                color: 'white',
              }}
            >
              Ver Coordenadas Directamente
            </Button>
          </div>
        </div>
      </div>
    );
  }

  /* ── TABLET: Hybrid Layout ────────────────────────── */
  if (isTablet) {
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative overflow-auto transition-all duration-300 ease-in-out"
        style={{ backgroundImage: "url('/mundos/bear_village/Beemothepdesertentrancearea.webp')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)' }} />

        {/* Main content: centered card with character beside */}
        <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-2xl px-6 motion-safe:animate-in fade-in-0 slide-in-from-bottom-8 duration-500">
          
          {/* Shicka character */}
          <div className="motion-safe:animate-float relative">
            <Image
              src="/personajes/Shicka_render_.png"
              alt="Shicka te da la bienvenida"
              width={180}
              height={180}
              className="drop-shadow-[0_8px_16px_rgba(255,215,0,0.4)]"
            />
          </div>

          {/* Registration panel */}
          <div
            className="w-full max-w-md rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: 'rgba(236,248,255,0.97)',
              border: '5px solid #8B4513',
              boxShadow: '0 8px 0 #63340b, 0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div className="text-center">
              <h2 className="font-milky text-2xl text-teddy-brown leading-tight">
                ¡Alto ahí, viajero!
              </h2>
              <p className="font-amble text-voxel-text/80 text-sm mt-1">
                Antes de darte los detalles, necesito registrarte.
              </p>
            </div>

            {/* Input */}
            <Input
              id="player-name-tablet"
              type="text"
              placeholder="Nombre de Aventurero"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && playerName.trim() && handlePlay()}
              className="border-4 border-teddy-brown h-12 text-lg text-center font-milky rounded-lg bg-white/90 focus:ring-2 focus:ring-golden-coin focus:border-golden-coin outline-none"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
            />

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                id="btn-play-arcade-tablet"
                onClick={handlePlay}
                disabled={!playerName.trim()}
                className="w-full font-milky text-lg h-12 border-3 border-teddy-brown transition-all disabled:opacity-50 active:translate-y-1 active:shadow-[0_0_0_transparent]"
                style={{
                  background: playerName.trim() ? '#FFD700' : '#ccc',
                  boxShadow: playerName.trim() ? '0 6px 0 #63340b' : 'none',
                  border: '3px solid #8B4513',
                  color: 'white',
                }}
              >
                ¡Entrar al Arcade World! (VIP) 🎮
              </Button>

              <Button
                id="btn-skip-arcade-tablet"
                onClick={handleSkip}
                className="w-full font-amble text-sm h-10 transition-all active:translate-y-1 active:shadow-[0_0_0_transparent]"
                style={{
                  background: '#87CEEB',
                  border: '3px solid #00008B',
                  boxShadow: '0 5px 0 #00008B',
                  color: 'white',
                }}
              >
                Ver Coordenadas Directamente
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── DESKTOP: Character Select Screen ─────────────── */
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative overflow-auto transition-all duration-300 ease-in-out"
      style={{ backgroundImage: "url('/mundos/bear_village/Beemothepdesertentrancearea.webp')" }}
    >
      {/* Gradient overlay — stronger on left, lighter on right */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.55) 100%)' }} />

      {/* Floating dust particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200/20 motion-safe:animate-subtle-float"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content: 2 columns */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-5xl px-12 motion-safe:animate-in fade-in-0 slide-in-from-bottom-8 duration-500">

        {/* LEFT: Shicka character showcase */}
        <div className="flex flex-col items-center gap-4 flex-shrink-0">
          {/* Glow ring behind Shicka */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
                transform: 'scale(1.5)',
              }}
              aria-hidden="true"
            />
            <div className="motion-safe:animate-float relative">
              <Image
                src="/personajes/Shicka_render_.png"
                alt="Shicka te da la bienvenida"
                width={280}
                height={280}
                className="drop-shadow-[0_12px_24px_rgba(255,215,0,0.5)] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          {/* Character name badge */}
          <div
            className="px-4 py-2 rounded-full"
            style={{ background: '#8B4513', border: '3px solid #FFD700', boxShadow: '0 4px 0 #63340b' }}
          >
            <span className="font-arcade text-golden-coin text-lg tracking-widest">SHICKA</span>
          </div>
          <p className="font-amble text-cloud-white/80 text-sm text-center max-w-[200px] italic">
            Guía de aventureros del reino
          </p>
        </div>

        {/* RIGHT: Registration panel */}
        <div
          className="flex-1 max-w-md rounded-2xl p-8 flex flex-col gap-5"
          style={{
            background: 'rgba(236,248,255,0.97)',
            border: '5px solid #8B4513',
            boxShadow: '0 8px 0 #63340b, 0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          {/* Header */}
          <div className="text-center">
            <div
              className="inline-block px-4 py-1 rounded-full mb-3"
              style={{ background: '#FFD700', border: '3px solid #8B4513', boxShadow: '0 3px 0 #63340b' }}
            >
              <span className="font-arcade text-teddy-brown text-sm tracking-[0.2em]">REGISTRO DE AVENTURERO</span>
            </div>
            <h2 className="font-milky text-3xl text-teddy-brown leading-tight">
              ¡Alto ahí, viajero!
            </h2>
            <p className="font-amble text-voxel-text/80 text-base mt-1">
              Antes de darte los detalles, necesito registrarte.
            </p>
          </div>

          {/* VIP Reward badge */}
          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: 'rgba(255,215,0,0.15)', border: '2px solid #FFD700' }}
          >
            <span className="text-3xl motion-safe:animate-pulse-badge">🪙</span>
            <div>
              <p className="font-impact text-teddy-brown text-sm tracking-wide">MODO VIP — ARCADE WORLD</p>
              <p className="font-amble text-voxel-text text-xs">¡Juega y gana monedas para desbloquear recompensas!</p>
            </div>
          </div>

          {/* Input */}
          <div>
            <label htmlFor="player-name-desktop" className="font-amble text-teddy-brown font-bold text-sm block mb-1">
              Tu nombre de aventurero:
            </label>
            <Input
              id="player-name-desktop"
              type="text"
              placeholder="Escribe tu nombre..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && playerName.trim() && handlePlay()}
              className="border-4 border-teddy-brown h-14 text-xl text-center font-milky rounded-lg bg-white focus:ring-2 focus:ring-golden-coin focus:border-golden-coin outline-none"
              style={{ boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.1)', color: '#003342' }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <div className="relative">
              {playerName.trim() && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20 pointer-events-none whitespace-nowrap">
                  <span className="font-arcade text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-400">
                    ¡Listo para la aventura!
                  </span>
                  <ArrowDown className="w-3 h-3 text-golden-coin motion-safe:animate-bounce" />
                </div>
              )}
              <button
                id="btn-play-arcade-desktop"
                onClick={handlePlay}
                disabled={!playerName.trim()}
                aria-label="Jugar minijuegos del Arcade para ganar monedas"
                className="w-full font-milky text-2xl py-4 rounded-2xl transition-all duration-100 disabled:opacity-40 disabled:cursor-not-allowed active:translate-y-1 active:shadow-[0_0_0_transparent]"
                style={{
                  background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                  border: '4px solid #8B4513',
                  boxShadow: '0 7px 0 #63340b',
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}



              >
                🎮 ¡Entrar al Arcade World!
              </button>
            </div>

            <button
              id="btn-skip-arcade-desktop"
              onClick={handleSkip}
              aria-label="Saltar los minijuegos e ir directo a la misión"
              className="w-full font-amble text-base py-3 rounded-xl transition-all duration-100 active:translate-y-1 active:shadow-[0_0_0_transparent]"
              style={{
                background: '#87CEEB',
                border: '3px solid #00008B',
                boxShadow: '0 5px 0 #00008B',
                color: 'white',
              }}



            >
              Ver las coordenadas directamente →
            </button>
          </div>
        </div>
      </div>

      {/* Pixel tree strip bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-8 pb-0 z-20 pointer-events-none" aria-hidden="true">
        {['🌵', '🌴', '🌵', '🌴', '🌵', '🌴', '🌵'].map((t, i) => (
          <span key={i} className="text-5xl leading-none" style={{ marginBottom: -4 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
