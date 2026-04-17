'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { missionData } from '@/lib/eventData';
import { CalendarDays, MapPin, Clock, Backpack, CalendarPlus, Check } from 'lucide-react';
import { CountdownTimer } from '@/components/13-countdown-timer';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { useBreakpoint } from '@/hooks/use-mobile';

type MissionDetailsScreenProps = {
  playerName: string;
  onNext: () => void;
};

// Sonido de celebración
function playCelebrationSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    
    // Fanfare de 3 notas
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.15);
      osc.stop(ctx.currentTime + i * 0.15 + 0.2);
    });
  } catch (e) {
    console.debug('Audio no disponible:', e);
  }
}

function playClickSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {
    console.debug('Audio no disponible:', e);
  }
}

export function MissionDetailsScreen({ playerName, onNext }: MissionDetailsScreenProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'mobile';

  // Generador de URL para Google Calendar
  const googleCalendarUrl = () => {
    const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
    const title = encodeURIComponent("Gran Facu Aventura - Nivel 9 🏀");
    const dates = "20260524T213000Z/20260525T000000Z";
    const location = encodeURIComponent(`${missionData.lugar}, ${missionData.direccion}`);
    const details = encodeURIComponent(`¡Misión de Cumpleaños de Facu! \n\n${missionData.nota}`);
    return `${baseUrl}&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const handleConfirm = useCallback(() => {
    if (isConfirmed) return;
    
    setIsConfirmed(true);
    setIsCelebrating(true);
    playCelebrationSound();
    
    setTimeout(() => setIsCelebrating(false), 3000);
  }, [isConfirmed]);

  const handleCalendarClick = () => {
    playClickSound();
  };

  // Colores de confeti
  const confettiColors = ['#FFD700', '#7CFC00', '#87CEEB', '#FF69B4', '#FF6347', '#9370DB'];

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      style={{ backgroundImage: "url('/mundos/bear_village/Hubbearvillage.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-0" />

      {/* Confeti digital de colores (solo cuando celebra) */}
      <AnimatePresence>
        {isCelebrating && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: confettiColors[i % confettiColors.length],
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                }}
                initial={{ y: 0, opacity: 1, rotate: 0 }}
                animate={{
                  y: ['0vh', '100vh'],
                  opacity: [1, 1, 0],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                  x: [0, Math.sin(i) * 100],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  ease: 'easeOut',
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Header estilo Quest */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-6"
      >
        <div className="bg-gradient-to-r from-golden-coin via-yellow-300 to-golden-coin border-4 border-teddy-brown px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_4px_0_#63340b]">
          <span className="font-arcade text-teddy-brown text-xs sm:text-sm md:text-base lg:text-lg tracking-widest whitespace-nowrap">
            ✦ MISIÓN: GRAN SLAM ✦
          </span>
        </div>
      </motion.div>

      {/* Contenedor principal responsive */}
      <Container size="lg" spacing="md">
        
        {/* MOBILE: Facu arriba saludando, luego bloques de info */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {/* Facu Bear con animación de saludo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Globo JRPG */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="bg-white border-4 border-sky-blue px-4 py-3 rounded-2xl shadow-xl mb-4 relative w-64"
            >
              <p className="font-body text-xs text-teddy-brown font-semibold text-center leading-tight">
                ¡Misión aceptada, equipo! 🏀 Ya tenemos el tablero táctico listo. No olvides guardar las coordenadas en tu calendario o la miel púrpura borrará el mapa. ¡Nos vemos en la cancha! 🎨
              </p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-sky-blue border-r-[10px] border-r-transparent" />
            </motion.div>

            {/* Facu Avatar */}
            <motion.div
              animate={isCelebrating ? {
                y: [0, -30, 0, -20, 0],
                rotate: [0, 15, -15, 10, 0],
              } : {
                y: [0, -12, 0],
              }}
              transition={isCelebrating ? {
                duration: 1,
                ease: 'easeOut',
              } : {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Aura dorada */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-40 h-40 rounded-full bg-golden-coin/30 blur-2xl" />
              </motion.div>

              <Image
                src="/facu_bear_sin_fondo.png"
                alt="Facu Bear MVP"
                width={160}
                height={160}
                className="relative z-10 drop-shadow-[0_15px_30px_rgba(255,215,0,0.5)]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Tablero de Misión (estilo pizarra de entrenador) */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="w-full bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-6 sm:border-8 border-teddy-brown rounded-3xl p-4 sm:p-6 shadow-[10px_10px_0px_#63340b] relative"
          >
            {/* Franja decorativa */}
            <div className="absolute top-0 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-sky-blue via-grass-green to-sky-blue rounded-t-3xl" />

            <h2 className="font-milky text-xl sm:text-2xl md:text-3xl text-teddy-brown mb-4 sm:mb-6 text-center pt-2">
              COORDENADAS DE LA ARENA 🏟️
            </h2>

            {/* Grid de info */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 font-amble">
              {/* Lugar */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-xl border-3 border-sky-blue flex items-center gap-3 sm:gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)]">
                <div className="bg-sky-blue/20 p-2 sm:p-3 rounded-lg">
                  <MapPin className="text-sky-blue w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs uppercase text-gray-500 font-semibold">🗺️ Lugar</p>
                  <p className="font-bold text-sm sm:text-base text-teddy-brown">{missionData.lugar}</p>
                  <p className="text-xs text-gray-600">{missionData.direccion}</p>
                </div>
              </div>

              {/* Fecha */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-xl border-3 border-sky-blue flex items-center gap-3 sm:gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)]">
                <div className="bg-sky-blue/20 p-2 sm:p-3 rounded-lg">
                  <CalendarDays className="text-sky-blue w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs uppercase text-gray-500 font-semibold">📅 Fecha</p>
                  <p className="font-bold text-sm sm:text-base text-teddy-brown">{missionData.fecha}</p>
                </div>
              </div>

              {/* Horario */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-xl border-3 border-sky-blue flex items-center gap-3 sm:gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)]">
                <div className="bg-sky-blue/20 p-2 sm:p-3 rounded-lg">
                  <Clock className="text-sky-blue w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs uppercase text-gray-500 font-semibold">⏰ Horario</p>
                  <p className="font-bold text-sm sm:text-base text-teddy-brown">{missionData.horario}</p>
                </div>
              </div>

              {/* Equipamiento */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-xl border-3 border-sky-blue flex items-center gap-3 sm:gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)]">
                <div className="bg-sky-blue/20 p-2 sm:p-3 rounded-lg">
                  <Backpack className="text-sky-blue w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs uppercase text-gray-500 font-semibold">🎒 Equipamiento</p>
                  <p className="font-bold text-xs sm:text-sm text-teddy-brown leading-tight">{missionData.nota}</p>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 sm:mt-6 bg-black/80 p-3 sm:p-4 rounded-2xl border-3 border-golden-coin text-center shadow-[0_6px_0_#63340b]"
            >
              <p className="font-arcade text-golden-coin text-[10px] sm:text-xs mb-2 tracking-widest">
                ⏱ TIEMPO PARA EL SAQUE INICIAL
              </p>
              <CountdownTimer targetDate={missionData.targetDate} />
            </motion.div>

            {/* Botones de acción */}
            <div className="mt-4 sm:mt-6 flex flex-col gap-3">
              {/* Botón Confirmar */}
              <Button
                onClick={handleConfirm}
                disabled={isConfirmed}
                variant={isConfirmed ? "3d-green" : "3d-gold"}
                size="game-lg"
                className={`w-full font-milky overflow-hidden relative ${
                  isConfirmed ? 'bg-green-500' : ''
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10">
                  {isConfirmed ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" />
                      ¡FICHADO! ✅
                    </span>
                  ) : (
                    '¡CONFIRMAR ASISTENCIA! 🏀'
                  )}
                </span>
              </Button>

              {/* Botón Google Calendar */}
              <a
                href={googleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCalendarClick}
                className="w-full font-amble text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-sky-blue to-blue-500 hover:from-sky-400 hover:to-blue-400 border-3 border-white/50 rounded-xl px-4 py-3 transition-all shadow-[0_4px_0_#0056b3] hover:shadow-[0_6px_0_#0056b3] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_#0056b3] flex items-center justify-center gap-2"
              >
                <CalendarPlus className="w-5 h-5" />
                <span>Sincronizar Reloj de Misión 📅</span>
              </a>

              {/* Link Bio */}
              <button
                onClick={onNext}
                className="w-full font-amble text-xs sm:text-sm font-semibold text-sky-blue hover:text-blue-600 hover:underline transition-all py-2"
              >
                ¿Quieres ver mis gustos y biografía? ➔
              </button>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP: Facu izquierda con globo JRPG, Tablero derecha */}
        <div className="hidden md:flex flex-row items-start gap-12 lg:gap-16">
          {/* IZQUIERDA: Facu + Globo JRPG */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-1/3 flex flex-col items-center"
          >
            {/* Globo de texto JRPG */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="bg-white border-4 border-sky-blue p-5 rounded-2xl shadow-xl mb-6 relative max-w-xs"
            >
              <p className="font-body text-sm text-teddy-brown font-semibold text-center leading-relaxed">
                ¡Misión aceptada, equipo! 🏀 Ya tenemos el tablero táctico listo. No olvides guardar las coordenadas en tu calendario o la miel púrpura borrará el mapa. ¡Nos vemos en la cancha! 🎨
              </p>
              {/* Puntero del globo (abajo derecha) */}
              <div className="absolute -bottom-4 right-12 w-0 h-0 border-l-[12px] border-l-transparent border-t-[16px] border-t-sky-blue border-r-[12px] border-r-transparent" />
            </motion.div>

            {/* Facu Bear Avatar */}
            <motion.div
              animate={isCelebrating ? {
                y: [0, -40, 0, -25, 0],
                rotate: [0, 20, -20, 15, 0],
                scale: [1, 1.1, 1],
              } : {
                y: [0, -15, 0],
              }}
              transition={isCelebrating ? {
                duration: 1.2,
                ease: 'easeOut',
              } : {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Aura dorada */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-64 h-64 rounded-full bg-golden-coin/30 blur-2xl" />
              </motion.div>

              <Image
                src="/facu_bear_sin_fondo.png"
                alt="Facu Bear MVP"
                width={320}
                height={320}
                className="relative z-10 drop-shadow-[0_15px_30px_rgba(255,215,0,0.5)]"
                priority
              />

              {/* Badge MVP */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-golden-coin to-yellow-500 text-teddy-brown font-arcade text-xs px-4 py-2 rounded-full border-3 border-white shadow-lg whitespace-nowrap"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🏆 MVP FACU 🏆
              </motion.div>
            </motion.div>
          </motion.div>

          {/* DERECHA: Tablero de Misión (estilo pizarra) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-8 border-teddy-brown rounded-3xl p-8 lg:p-10 shadow-[12px_12px_0px_#63340b] relative"
          >
            {/* Franja decorativa superior */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-sky-blue via-grass-green to-sky-blue rounded-t-3xl" />

            <h2 className="font-milky text-3xl md:text-4xl text-teddy-brown mb-8 text-center pt-2">
              COORDENADAS DE LA ARENA 🏟️
            </h2>

            {/* Grid de info - 2 columnas */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 font-amble">
              {/* Lugar */}
              <div className="bg-white/80 p-4 lg:p-5 rounded-xl border-3 border-sky-blue flex items-start gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.15)] transition-shadow">
                <div className="bg-sky-blue/20 p-3 rounded-lg">
                  <MapPin className="text-sky-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">🗺️ Lugar</p>
                  <p className="font-bold text-base text-teddy-brown">{missionData.lugar}</p>
                  <p className="text-xs text-gray-600">{missionData.direccion}</p>
                </div>
              </div>

              {/* Fecha */}
              <div className="bg-white/80 p-4 lg:p-5 rounded-xl border-3 border-sky-blue flex items-start gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.15)] transition-shadow">
                <div className="bg-sky-blue/20 p-3 rounded-lg">
                  <CalendarDays className="text-sky-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">📅 Fecha</p>
                  <p className="font-bold text-base text-teddy-brown">{missionData.fecha}</p>
                </div>
              </div>

              {/* Horario */}
              <div className="bg-white/80 p-4 lg:p-5 rounded-xl border-3 border-sky-blue flex items-start gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.15)] transition-shadow">
                <div className="bg-sky-blue/20 p-3 rounded-lg">
                  <Clock className="text-sky-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">⏰ Horario</p>
                  <p className="font-bold text-base text-teddy-brown">{missionData.horario}</p>
                </div>
              </div>

              {/* Equipamiento */}
              <div className="bg-white/80 p-4 lg:p-5 rounded-xl border-3 border-sky-blue flex items-start gap-4 shadow-[3px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.15)] transition-shadow">
                <div className="bg-sky-blue/20 p-3 rounded-lg">
                  <Backpack className="text-sky-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">🎒 Equipamiento</p>
                  <p className="font-bold text-sm text-teddy-brown leading-tight">{missionData.nota}</p>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 bg-black/80 p-5 rounded-2xl border-3 border-golden-coin text-center shadow-[0_6px_0_#63340b]"
            >
              <p className="font-arcade text-golden-coin text-xs mb-3 tracking-widest">
                ⏱ TIEMPO PARA EL SAQUE INICIAL
              </p>
              <CountdownTimer targetDate={missionData.targetDate} />
            </motion.div>

            {/* Botones de acción */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {/* Botón Confirmar */}
              <Button
                onClick={handleConfirm}
                disabled={isConfirmed}
                variant={isConfirmed ? "3d-green" : "3d-gold"}
                size="game-xl"
                className={`flex-1 font-milky overflow-hidden relative ${
                  isConfirmed ? 'bg-green-500' : ''
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10">
                  {isConfirmed ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check className="w-6 h-6" />
                      ¡FICHADO! ✅
                    </span>
                  ) : (
                    '¡CONFIRMAR ASISTENCIA! 🏀'
                  )}
                </span>
              </Button>

              {/* Botón Google Calendar */}
              <a
                href={googleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCalendarClick}
                className="font-amble text-base font-semibold text-white bg-gradient-to-r from-sky-blue to-blue-500 hover:from-sky-400 hover:to-blue-400 border-3 border-white/50 rounded-xl px-5 py-4 transition-all shadow-[0_4px_0_#0056b3] hover:shadow-[0_6px_0_#0056b3] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_#0056b3] flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <CalendarPlus className="w-5 h-5" />
                <span>Sincronizar Reloj de Misión 📅</span>
              </a>
            </div>

            {/* Link Bio */}
            <div className="mt-4 text-center">
              <button
                onClick={onNext}
                className="font-amble text-sm font-semibold text-sky-blue hover:text-blue-600 hover:underline transition-all"
              >
                ¿Quieres ver mis gustos y biografía? ➔
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

