'use client';

import { useState } from 'react';
import { missionData } from '@/lib/eventData';
import { Button } from './ui/button';
import type { AvatarConfig } from '@/lib/avatarOptions';
import { ArrowDown } from 'lucide-react';
import { CountdownTimer } from './countdown-timer';
import { AvatarDisplay } from './avatar-display';
import { useIsDesktop } from '@/hooks/use-media-query';

type MissionDetailsScreenProps = {
  playerName: string;
  onNext: () => void;
  playedMinigames: boolean;
  avatarConfig: AvatarConfig | null;
};

export function MissionDetailsScreen({ playerName, onNext, playedMinigames, avatarConfig }: MissionDetailsScreenProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const isDesktop = useIsDesktop();

  const guestName = 'Jugador';
  const displayName = playerName || guestName;

  /* ════════════════════════════════════════════
     VIP Version — Played minigames
  ════════════════════════════════════════════ */
  if (playedMinigames) {

    /* ── VIP MOBILE ── */
    if (!isDesktop) {
      return (
        <div
          className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 overflow-auto relative"
          style={{ backgroundImage: "url('/ciudad.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />

          {/* Confetti */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="confetti" />
            ))}
          </div>

          <div
            className="relative z-10 rounded-2xl w-[95%] max-w-lg p-6 space-y-4 text-center motion-safe:animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-8 duration-500"
            style={{
              background: 'linear-gradient(135deg, #fffde7 0%, #fff8e1 100%)',
              border: '8px solid #FFD700',
              boxShadow: '0 10px 30px rgba(255,215,0,0.5), 8px 8px 0px #b8860b',
            }}
          >
            {/* VIP Badge */}
            <div
              className="rounded-lg p-3 motion-safe:animate-pulse-badge"
              style={{ background: 'rgba(255,180,0,0.9)', border: '3px solid #b8860b', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)' }}
            >
              <h3 className="font-impact text-white text-lg tracking-[0.15em]">💎 ESTATUS VIP DESBLOQUEADO 💎</h3>
              <p className="font-amble font-bold text-white text-sm mt-0.5">Recompensa: ¡Sombrero de Pastel de Cumpleaños!</p>
            </div>

            <h2 className="font-milky text-2xl text-teddy-brown">¡Felicidades, {displayName}!</h2>

            {/* Event info */}
            <div
              className="space-y-2 font-calibri text-sm text-left p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.7)', border: '2px solid #FFD700' }}
            >
              <p>🗺️ <strong>Lugar:</strong> {missionData.lugar} ({missionData.direccion})</p>
              <p>🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
              <p>⏰ <strong>Horario:</strong> {missionData.horario}</p>
              <p>🎒 <strong>Equipamiento:</strong> {missionData.nota}</p>
            </div>

            {/* Avatar */}
            {avatarConfig && (
              <div
                className="flex flex-col items-center p-2 rounded-lg"
                style={{ background: 'rgba(135,206,235,0.2)', border: '2px solid #87CEEB' }}
              >
                <p className="font-amble font-bold text-teddy-brown text-sm">Tu Avatar Guardado:</p>
                <AvatarDisplay config={avatarConfig} className="scale-75" />
              </div>
            )}

            <CountdownTimer targetDate={missionData.targetDate} />

            {/* CTA button */}
            <div className="relative">
              {!isConfirmed && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
                  <span className="font-milky text-xs bg-white/90 px-2 rounded-full border-2 border-golden-coin shadow">¡CONFIRMA!</span>
                  <ArrowDown className="w-4 h-4 text-golden-coin motion-safe:animate-bounce" />
                </div>
              )}
              <Button
                id="btn-confirm-attendance-vip"
                onClick={() => setIsConfirmed(true)}
                disabled={isConfirmed}
                className={`w-full font-milky text-xl h-auto py-3 px-6 border-3 transition-all duration-150 ${
                  isConfirmed
                    ? 'text-white'
                    : 'text-white'
                }`}
                style={isConfirmed ? {
                  background: '#7CFC00',
                  border: '3px solid #2E8B57',
                  boxShadow: '0 5px 0 #2E8B57',
                } : {
                  background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
                  border: '3px solid #8B4513',
                  boxShadow: '0 6px 0 #63340b',
                }}
              >
                {isConfirmed ? '✅ ¡Asistencia Confirmada!' : '¡Confirmo mi asistencia!'}
              </Button>
            </div>

            <Button
              id="btn-see-bio"
              onClick={onNext}
              variant="link"
              className="font-amble text-sky-blue text-sm"
            >
              ¿Quieres conocer mis gustos y mi lore? ➔
            </Button>
          </div>
        </div>
      );
    }

    /* ── VIP DESKTOP — 3-column panoramic layout ── */
    return (
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: "url('/ciudad.webp')" }}
      >
        <div className="absolute inset-0 bg-black/45 backdrop-blur-md" />

        {/* Confetti */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, i) => <div key={i} className="confetti" />)}
        </div>

        {/* Quest Accepted header */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <div
            className="px-8 py-2 rounded-full"
            style={{ background: '#FFD700', border: '3px solid #8B4513', boxShadow: '0 6px 0 #63340b' }}
          >
            <span className="font-arcade text-teddy-brown text-lg tracking-[0.25em]">✦ MISIÓN ACEPTADA ✦</span>
          </div>
        </div>

        {/* 3-column layout */}
        <div className="relative z-10 flex flex-row items-stretch gap-6 w-full max-w-6xl px-8 mt-12 motion-safe:animate-in fade-in-0 duration-500">

          {/* COL 1: Avatar + Player info */}
          <div className="flex flex-col items-center justify-center gap-4 w-64 flex-shrink-0">
            {/* VIP badge */}
            <div
              className="w-full text-center px-3 py-2 rounded-xl motion-safe:animate-pulse-badge"
              style={{ background: 'rgba(255,180,0,0.95)', border: '3px solid #b8860b', boxShadow: '0 4px 0 #63340b' }}
            >
              <p className="font-impact text-white text-base tracking-[0.15em]">💎 VIP</p>
              <p className="font-amble text-white/90 text-xs">Sombrero desbloqueado</p>
            </div>

            {/* Avatar */}
            {avatarConfig ? (
              <div
                className="w-full flex flex-col items-center p-3 rounded-2xl"
                style={{ background: 'rgba(236,248,255,0.95)', border: '4px solid #8B4513', boxShadow: '0 6px 0 #63340b' }}
              >
                <AvatarDisplay config={avatarConfig} className="scale-90" />
                <p className="font-milky text-teddy-brown text-lg mt-1">{displayName}</p>
              </div>
            ) : (
              <div
                className="w-full flex flex-col items-center p-6 rounded-2xl"
                style={{ background: 'rgba(236,248,255,0.95)', border: '4px solid #8B4513', boxShadow: '0 6px 0 #63340b' }}
              >
                <span className="text-6xl">🐻</span>
                <p className="font-milky text-teddy-brown text-xl mt-2">{displayName}</p>
              </div>
            )}

            {/* Bio link */}
            <Button
              id="btn-see-bio-desktop"
              onClick={onNext}
              variant="link"
              className="font-amble text-sky-blue text-sm text-center"
            >
              ¿Quieres conocer mis gustos y mi lore? ➔
            </Button>
          </div>

          {/* COL 2: Quest Board (event info) */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Card header */}
            <div
              className="p-6 rounded-2xl flex-1 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, #fffde7, #fff8e1)',
                border: '6px solid #FFD700',
                boxShadow: '0 10px 30px rgba(255,215,0,0.3), 6px 6px 0 #b8860b',
              }}
            >
              <h2 className="font-milky text-3xl text-teddy-brown text-center mb-4">
                ¡Felicidades, {displayName}!
              </h2>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3 font-calibri text-base text-voxel-text">
                <div className="bg-white/60 rounded-xl p-3 border border-amber-200">
                  <p className="font-amble font-bold text-teddy-brown text-xs uppercase tracking-wider mb-1">🗺️ Lugar</p>
                  <p>{missionData.lugar}</p>
                  <p className="text-sm text-gray-500">{missionData.direccion}</p>
                </div>
                <div className="bg-white/60 rounded-xl p-3 border border-amber-200">
                  <p className="font-amble font-bold text-teddy-brown text-xs uppercase tracking-wider mb-1">🗓️ Fecha</p>
                  <p>{missionData.fecha}</p>
                </div>
                <div className="bg-white/60 rounded-xl p-3 border border-amber-200">
                  <p className="font-amble font-bold text-teddy-brown text-xs uppercase tracking-wider mb-1">⏰ Horario</p>
                  <p>{missionData.horario}</p>
                </div>
                <div className="bg-white/60 rounded-xl p-3 border border-amber-200">
                  <p className="font-amble font-bold text-teddy-brown text-xs uppercase tracking-wider mb-1">🎒 Nota</p>
                  <p className="text-sm">{missionData.nota}</p>
                </div>
              </div>
            </div>
          </div>

          {/* COL 3: Countdown + CTA */}
          <div className="flex flex-col items-center justify-center gap-6 w-72 flex-shrink-0">
            <div
              className="w-full p-4 rounded-2xl flex flex-col items-center gap-4"
              style={{
                background: 'rgba(0,0,0,0.7)',
                border: '3px solid #FFD700',
                boxShadow: '0 6px 0 #63340b, 0 0 30px rgba(255,215,0,0.2)',
              }}
            >
              <span className="font-arcade text-golden-coin text-sm tracking-[0.2em]">⏱ CUENTA REGRESIVA</span>
              <CountdownTimer targetDate={missionData.targetDate} />
            </div>

            {/* Confirm button */}
            <div className="relative w-full">
              {!isConfirmed && (
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none whitespace-nowrap">
                  <span className="font-milky text-sm bg-white/90 px-3 rounded-full border-2 border-golden-coin shadow">¡CONFIRMA TU ASISTENCIA!</span>
                  <ArrowDown className="w-4 h-4 text-golden-coin motion-safe:animate-bounce" />
                </div>
              )}
              <button
                id="btn-confirm-attendance-vip-desktop"
                onClick={() => setIsConfirmed(true)}
                disabled={isConfirmed}
                className="w-full font-milky text-2xl py-4 rounded-2xl transition-all duration-100 disabled:cursor-not-allowed"
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
                onMouseDown={(e) => { if(!isConfirmed) e.currentTarget.style.transform = 'translateY(4px)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                {isConfirmed ? '✅ ¡Confirmado!' : '¡Confirmo mi asistencia!'}
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

  /* ── STANDARD MOBILE ── */
  if (!isDesktop) {
    return (
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative overflow-hidden"
        style={{ backgroundImage: "url('/ciudad.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

        <div
          className="relative z-10 rounded-2xl w-[95%] max-w-lg p-6 space-y-4 text-center motion-safe:animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-8 duration-500"
          style={{
            background: '#fffbeb',
            border: '6px solid #8B4513',
            boxShadow: '8px 8px 0px #63340b',
          }}
        >
          <h2 className="font-milky text-2xl text-teddy-brown">{title}</h2>

          <div
            className="space-y-2 font-calibri text-base text-left p-4 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.6)', border: '2px solid #FFD700' }}
          >
            <p>🗺️ <strong>Lugar:</strong> {missionData.lugar} ({missionData.direccion})</p>
            <p>🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
            <p>⏰ <strong>Horario:</strong> {missionData.horario}</p>
          </div>

          <CountdownTimer targetDate={missionData.targetDate} />

          <div className="relative">
            {!isConfirmed && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
                <span className="font-milky text-xs bg-white/90 px-2 rounded-full border-2 border-golden-coin shadow">¡CONFIRMA!</span>
                <ArrowDown className="w-4 h-4 text-golden-coin motion-safe:animate-bounce" />
              </div>
            )}
            <Button
              id="btn-confirm-attendance-std"
              onClick={() => setIsConfirmed(true)}
              disabled={isConfirmed}
              className="w-full font-milky text-xl h-auto py-3 px-6 text-white transition-all duration-150"
              style={isConfirmed ? {
                background: '#7CFC00',
                border: '3px solid #2E8B57',
                boxShadow: '0 5px 0 #2E8B57',
              } : {
                background: '#FFD700',
                border: '3px solid #8B4513',
                boxShadow: '0 6px 0 #63340b',
              }}
            >
              {isConfirmed ? '✅ ¡Asistencia Confirmada!' : '¡Confirmo mi asistencia!'}
            </Button>
          </div>

          <Button
            id="btn-see-bio-std"
            onClick={onNext}
            variant="link"
            className="font-amble text-sky-blue text-sm"
          >
            ¿Quieres conocer mis gustos y mi lore? ➔
          </Button>
        </div>
      </div>
    );
  }

  /* ── STANDARD DESKTOP — 2-column layout ── */
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/ciudad.webp')" }}
    >
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />

      {/* Header tag */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <div
          className="px-8 py-2 rounded-full"
          style={{ background: '#8B4513', border: '3px solid #FFD700', boxShadow: '0 4px 0 #63340b' }}
        >
          <span className="font-arcade text-golden-coin text-base tracking-[0.25em]">COORDENADAS DE MISIÓN</span>
        </div>
      </div>

      {/* 2-column layout */}
      <div className="relative z-10 flex flex-row items-center gap-10 w-full max-w-5xl px-8 mt-10 motion-safe:animate-in fade-in-0 duration-500">

        {/* LEFT: Event info card */}
        <div className="flex-1">
          <div
            className="rounded-2xl p-8"
            style={{
              background: '#fffbeb',
              border: '6px solid #8B4513',
              boxShadow: '8px 8px 0px #63340b',
            }}
          >
            <h2 className="font-milky text-3xl text-teddy-brown mb-6 text-center">{title}</h2>

            <div className="grid grid-cols-2 gap-4 font-calibri text-base text-voxel-text">
              <div className="bg-white/70 rounded-xl p-4 border-2 border-amber-200">
                <p className="font-amble font-bold text-teddy-brown text-xs uppercase tracking-wider mb-1">🗺️ Lugar</p>
                <p className="font-semibold">{missionData.lugar}</p>
                <p className="text-sm text-gray-500">{missionData.direccion}</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 border-2 border-amber-200">
                <p className="font-amble font-bold text-teddy-brown text-xs uppercase tracking-wider mb-1">🗓️ Fecha</p>
                <p className="font-semibold">{missionData.fecha}</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 border-2 border-amber-200 col-span-2">
                <p className="font-amble font-bold text-teddy-brown text-xs uppercase tracking-wider mb-1">⏰ Horario</p>
                <p className="font-semibold">{missionData.horario}</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Button
                id="btn-see-bio-std-desktop"
                onClick={onNext}
                variant="link"
                className="font-amble text-sky-blue"
              >
                ¿Quieres conocer mis gustos y mi lore? ➔
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT: Countdown + confirm */}
        <div className="flex flex-col items-center gap-6 w-72 flex-shrink-0">
          <div
            className="w-full p-5 rounded-2xl flex flex-col items-center gap-4"
            style={{
              background: 'rgba(0,0,0,0.75)',
              border: '3px solid #FFD700',
              boxShadow: '0 6px 0 #63340b',
            }}
          >
            <span className="font-arcade text-golden-coin text-sm tracking-[0.2em]">⏱ CUENTA REGRESIVA</span>
            <CountdownTimer targetDate={missionData.targetDate} />
          </div>

          <div className="relative w-full">
            {!isConfirmed && (
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none whitespace-nowrap">
                <span className="font-milky text-sm bg-white/90 px-3 rounded-full border-2 border-golden-coin shadow">¡CONFIRMA!</span>
                <ArrowDown className="w-4 h-4 text-golden-coin motion-safe:animate-bounce" />
              </div>
            )}
            <button
              id="btn-confirm-attendance-std-desktop"
              onClick={() => setIsConfirmed(true)}
              disabled={isConfirmed}
              className="w-full font-milky text-2xl py-4 rounded-2xl transition-all duration-100 disabled:cursor-not-allowed"
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
              onMouseDown={(e) => { if(!isConfirmed) e.currentTarget.style.transform = 'translateY(4px)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
            >
              {isConfirmed ? '✅ ¡Confirmado!' : '¡Confirmo mi asistencia!'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
