'use client';

import { useState } from 'react';
import { missionData } from '@/lib/eventData';
import { Button } from './ui/button';
import type { AvatarConfig } from '@/lib/avatarOptions';
import { ArrowDown } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';
import { AvatarDisplay } from './avatar-display';

type MissionDetailsScreenProps = {
  playerName: string;
  onNext: () => void;
  playedMinigames: boolean;
  avatarConfig: AvatarConfig | null;
};

export function MissionDetailsScreen({ playerName, onNext, playedMinigames, avatarConfig }: MissionDetailsScreenProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const guestName = 'Jugador';
  const displayName = playerName || guestName;

  /* ════════════════════════════════════════════
     VIP Version — Played minigames
  ════════════════════════════════════════════ */
  if (playedMinigames) {
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-[max(0.75rem,var(--safe-left))] sm:p-[max(1rem,var(--safe-left))] lg:p-8 pt-[max(2rem,var(--safe-top))] pb-[max(2rem,var(--safe-bottom))] overflow-auto relative"
        style={{ backgroundImage: "url('/mundos/bear_village/Hubbearvillage.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />

        {/* Confetti */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="confetti" />
          ))}
        </div>

        {/* ── MOBILE-FIRST: Single column → desktop 3-col ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-0">
          {/* Quest Accepted header */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div
              className="px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8 rounded-full"
              style={{ background: '#FFD700', border: '3px solid #8B4513', boxShadow: '0 4px 0 #63340b' }}
            >
              <span className="font-arcade text-teddy-brown text-xs sm:text-sm lg:text-lg tracking-[0.2em] sm:tracking-[0.25em]">
                ✦ MISIÓN ACEPTADA ✦
              </span>
            </div>
          </div>

          {/* Desktop 3-col / Mobile stacked */}
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-6 gap-4">

            {/* COL 1: Avatar + VIP Badge (full-width on mobile, fixed on desktop) */}
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full lg:w-64 lg:flex-shrink-0 order-1">
              {/* VIP Badge */}
              <div
                className="w-full text-center px-3 py-2 sm:py-3 rounded-xl motion-safe:animate-pulse-badge"
                style={{ background: 'rgba(255,180,0,0.9)', border: '3px solid #b8860b', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)' }}
              >
                <h3 className="font-impact text-white text-sm sm:text-base lg:text-lg tracking-[0.15em]">💎 VIP DESBLOQUEADO 💎</h3>
                <p className="font-amble font-bold text-white text-xs sm:text-sm mt-0.5">Sombrero de Pastel 🎂</p>
              </div>

              {/* Avatar */}
              {avatarConfig ? (
                <div
                  className="w-full flex flex-col items-center p-3 sm:p-4 rounded-2xl"
                  style={{ background: 'rgba(236,248,255,0.95)', border: '4px solid #8B4513', boxShadow: '0 6px 0 #63340b' }}
                >
                  <AvatarDisplay config={avatarConfig} className="scale-75 sm:scale-90" />
                  <p className="font-milky text-teddy-brown text-base sm:text-lg mt-1">{displayName}</p>
                </div>
              ) : (
                <div
                  className="w-full flex flex-col items-center p-6 sm:p-8 rounded-2xl"
                  style={{ background: 'rgba(236,248,255,0.95)', border: '4px solid #8B4513', boxShadow: '0 6px 0 #63340b' }}
                >
                  <span className="text-4xl sm:text-6xl">🐻</span>
                  <p className="font-milky text-teddy-brown text-lg sm:text-xl mt-2">{displayName}</p>
                </div>
              )}
            </div>

            {/* COL 2: Quest Board (event info) */}
            <div className="flex-1 order-2">
              <div
                className="p-4 sm:p-5 lg:p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #fffde7, #fff8e1)',
                  border: '6px solid #FFD700',
                  boxShadow: '0 10px 30px rgba(255,215,0,0.3), 6px 6px 0 #b8860b',
                }}
              >
                <h2 className="font-milky text-xl sm:text-2xl lg:text-3xl text-teddy-brown text-center mb-3 sm:mb-4">
                  ¡Felicidades, {displayName}!
                </h2>

                {/* Info grid: 1-col mobile → 2-col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 font-calibri text-sm sm:text-base text-voxel-text">
                  <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 border border-amber-200">
                    <p className="font-amble font-bold text-teddy-brown text-[10px] sm:text-xs uppercase tracking-wider mb-1">🗺️ Lugar</p>
                    <p className="text-sm sm:text-base">{missionData.lugar}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{missionData.direccion}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 border border-amber-200">
                    <p className="font-amble font-bold text-teddy-brown text-[10px] sm:text-xs uppercase tracking-wider mb-1">🗓️ Fecha</p>
                    <p className="text-sm sm:text-base">{missionData.fecha}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 border border-amber-200">
                    <p className="font-amble font-bold text-teddy-brown text-[10px] sm:text-xs uppercase tracking-wider mb-1">⏰ Horario</p>
                    <p className="text-sm sm:text-base">{missionData.horario}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg sm:rounded-xl p-3 border border-amber-200">
                    <p className="font-amble font-bold text-teddy-brown text-[10px] sm:text-xs uppercase tracking-wider mb-1">🎒 Equipamiento</p>
                    <p className="text-xs sm:text-sm">{missionData.nota}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* COL 3: Countdown + CTA */}
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-6 w-full lg:w-72 lg:flex-shrink-0 order-3">
              {/* Countdown */}
              <div
                className="w-full p-3 sm:p-4 rounded-2xl flex flex-col items-center gap-2 sm:gap-4"
                style={{
                  background: 'rgba(0,0,0,0.7)',
                  border: '3px solid #FFD700',
                  boxShadow: '0 6px 0 #63340b, 0 0 30px rgba(255,215,0,0.2)',
                }}
              >
                <span className="font-arcade text-golden-coin text-xs sm:text-sm tracking-[0.2em]">⏱ CUENTA REGRESIVA</span>
                <CountdownTimer targetDate={missionData.targetDate} />
              </div>

              {/* Confirm button */}
              <div className="relative w-full">
                {!isConfirmed && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none whitespace-nowrap">
                    <span className="font-milky text-xs sm:text-sm bg-white/90 px-2 sm:px-3 rounded-full border-2 border-golden-coin shadow">
                      ¡CONFIRMA!
                    </span>
                    <ArrowDown className="w-4 h-4 text-golden-coin motion-safe:animate-bounce" />
                  </div>
                )}
                <button
                  id="btn-confirm-attendance-vip"
                  onClick={() => setIsConfirmed(true)}
                  disabled={isConfirmed}
                  aria-label={isConfirmed ? "Asistencia ya confirmada" : "Confirmar asistencia al evento de Facu"}
                  className="w-full font-milky text-lg sm:text-xl lg:text-2xl py-3 sm:py-4 rounded-2xl transition-all duration-100 disabled:cursor-not-allowed active:translate-y-1 active:shadow-[0_0_0_transparent]"
                  style={isConfirmed ? {
                    background: '#7CFC00',
                    border: '4px solid #2E8B57',
                    boxShadow: '0 6px 0 #2E8B57',
                    color: 'white',
                  } : {
                    background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                    border: '4px solid #8B4513',
                    boxShadow: '0 8px 0 #63340b',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}

                >
                  {isConfirmed ? '✅ ¡Confirmado!' : '¡Confirmo mi asistencia!'}
                </button>
              </div>

              {/* Bio link */}
              <button
                id="btn-see-bio"
                onClick={onNext}
                aria-label="Ver los gustos y biografía de Facu"
                className="font-amble text-sky-blue text-sm sm:text-base hover:underline"
              >
                ¿Quieres conocer mis gustos y mi lore? ➔
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════
     Standard Version — Skipped minigames
  ════════════════════════════════════════════ */
  const title = `Misión Estándar: Coordenadas de ${displayName}`;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-[max(0.75rem,var(--safe-left))] sm:p-[max(1rem,var(--safe-left))] lg:p-8 pt-[max(2rem,var(--safe-top))] pb-[max(2rem,var(--safe-bottom))] overflow-auto relative"
      style={{ backgroundImage: "url('/mundos/bear_village/Hubbearvillage.webp')" }}
    >
      <div className="absolute inset-0 bg-black/45 backdrop-blur-md" />

      {/* Header tag */}
      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20">
        <div
          className="px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8 rounded-full"
          style={{ background: '#8B4513', border: '3px solid #FFD700', boxShadow: '0 4px 0 #63340b' }}
        >
          <span className="font-arcade text-golden-coin text-xs sm:text-sm lg:text-base tracking-[0.2em] sm:tracking-[0.25em]">
            COORDENADAS DE MISIÓN
          </span>
        </div>
      </div>

      {/* ── MOBILE-FIRST: Single column → desktop 2-col ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-2 sm:px-4 lg:px-0 mt-14 sm:mt-16 lg:mt-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-4 sm:gap-6">

          {/* LEFT: Event info card */}
          <div className="flex-1 order-1">
            <div
              className="rounded-2xl p-4 sm:p-6 lg:p-8"
              style={{
                background: '#fffbeb',
                border: '6px solid #8B4513',
                boxShadow: '8px 8px 0px #63340b',
              }}
            >
              <h2 className="font-milky text-xl sm:text-2xl lg:text-3xl text-teddy-brown mb-4 sm:mb-6 text-center">
                {title}
              </h2>

              {/* Info grid: 1-col mobile → 2-col desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-calibri text-sm sm:text-base text-voxel-text">
                <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-amber-200">
                  <p className="font-amble font-bold text-teddy-brown text-[10px] sm:text-xs uppercase tracking-wider mb-1">🗺️ Lugar</p>
                  <p className="font-semibold text-sm sm:text-base">{missionData.lugar}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{missionData.direccion}</p>
                </div>
                <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-amber-200">
                  <p className="font-amble font-bold text-teddy-brown text-[10px] sm:text-xs uppercase tracking-wider mb-1">🗓️ Fecha</p>
                  <p className="font-semibold text-sm sm:text-base">{missionData.fecha}</p>
                </div>
                <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-amber-200 sm:col-span-2">
                  <p className="font-amble font-bold text-teddy-brown text-[10px] sm:text-xs uppercase tracking-wider mb-1">⏰ Horario</p>
                  <p className="font-semibold text-sm sm:text-base">{missionData.horario}</p>
                </div>
              </div>

              {/* Bio link — visible only on mobile inline */}
              <div className="mt-4 text-center lg:hidden">
                <button
                  id="btn-see-bio-std-mobile"
                  onClick={onNext}
                  aria-label="Ver los gustos y biografía de Facu"
                  className="font-amble text-sky-blue text-sm hover:underline"
                >
                  ¿Quieres conocer mis gustos y mi lore? ➔
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Countdown + confirm */}
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-6 w-full lg:w-72 lg:flex-shrink-0 order-2">
            {/* Countdown */}
            <div
              className="w-full p-3 sm:p-5 rounded-2xl flex flex-col items-center gap-2 sm:gap-4"
              style={{
                background: 'rgba(0,0,0,0.75)',
                border: '3px solid #FFD700',
                boxShadow: '0 6px 0 #63340b',
              }}
            >
              <span className="font-arcade text-golden-coin text-xs sm:text-sm tracking-[0.2em]">⏱ CUENTA REGRESIVA</span>
              <CountdownTimer targetDate={missionData.targetDate} />
            </div>

            {/* Confirm button */}
            <div className="relative w-full">
              {!isConfirmed && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none whitespace-nowrap">
                  <span className="font-milky text-xs sm:text-sm bg-white/90 px-2 sm:px-3 rounded-full border-2 border-golden-coin shadow">
                    ¡CONFIRMA!
                  </span>
                  <ArrowDown className="w-4 h-4 text-golden-coin motion-safe:animate-bounce" />
                </div>
              )}
              <button
                id="btn-confirm-attendance-std"
                onClick={() => setIsConfirmed(true)}
                disabled={isConfirmed}
                aria-label={isConfirmed ? "Asistencia ya confirmada" : "Confirmar asistencia al evento de Facu"}
                className="w-full font-milky text-lg sm:text-xl lg:text-2xl py-3 sm:py-4 rounded-2xl transition-all duration-100 disabled:cursor-not-allowed active:translate-y-1 active:shadow-[0_0_0_transparent]"
                style={isConfirmed ? {
                  background: '#7CFC00',
                  border: '4px solid #2E8B57',
                  boxShadow: '0 6px 0 #2E8B57',
                  color: 'white',
                } : {
                  background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                  border: '4px solid #8B4513',
                  boxShadow: '0 8px 0 #63340b',
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}

              >
                {isConfirmed ? '✅ ¡Confirmado!' : '¡Confirmo mi asistencia!'}
              </button>
            </div>

            {/* Bio link — desktop only */}
            <div className="hidden lg:block text-center">
              <button
                id="btn-see-bio-std-desktop"
                onClick={onNext}
                aria-label="Ver los gustos y biografía de Facu"
                className="font-amble text-sky-blue text-sm hover:underline"
              >
                ¿Quieres conocer mis gustos y mi lore? ➔
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
