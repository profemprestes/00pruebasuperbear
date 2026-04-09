'use client';

import { useState } from 'react';
import { missionData } from '@/lib/eventData';
import { Button } from './ui/button';
import type { AvatarConfig } from './avatar-creator-screen';
import { ArrowDown } from 'lucide-react';

type MissionDetailsScreenProps = {
  playerName: string;
  onNext: () => void;
  playedMinigames: boolean;
  avatarConfig: AvatarConfig | null;
};

export function MissionDetailsScreen({ playerName, onNext, playedMinigames, avatarConfig }: MissionDetailsScreenProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const guestName = "Jugador";
  const title = playedMinigames 
    ? `¡Felicidades, ${playerName || guestName}!`
    : `Misión Estándar: Coordenadas de ${playerName || guestName}`;

  const getAvatarEmoji = (config: AvatarConfig | null) => {
    if (!config) return "";
    const head = {
        'Ninguno': '',
        'Gorra': '🧢',
        'Gafas': '🕶️',
        'Pastel': '🎂',
        'VR': '🥽'
    }[config.headItem];
    const fur = {
        'Marrón': '🐻',
        'Polar': '🐻‍❄️',
        'Cósmico': '🌌',
        'Arcoíris': '🌈'
    }[config.furColor]
    return `${head}${fur}`;
  }

  if (playedMinigames) {
    return ( // VIP Version
      <div 
          className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4 overflow-hidden"
          style={{ backgroundImage: "url('/ciudad.webp')" }}
      >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="confetti"></div>
            ))}
          </div>
          <div className="relative z-10 bg-gradient-to-br from-yellow-50 to-amber-100 border-[8px] border-golden-coin rounded-2xl shadow-[0_10px_30px_rgba(255,215,0,0.5),_8px_8px_0px_#b8860b] w-full max-w-2xl p-6 sm:p-8 space-y-4 text-center">
              <div className="bg-amber-400/80 rounded-lg p-3 mb-4 border-2 border-amber-500 shadow-inner">
                  <h3 className="font-milky text-xl sm:text-2xl text-white animate-pulse">💎 ESTATUS VIP DESBLOQUEADO 💎</h3>
                  <p className="font-body font-bold text-white text-md sm:text-lg">Recompensa: ¡Sombrero de Pastel de Cumpleaños!</p>
              </div>

              <h2 className="font-milky text-3xl sm:text-4xl text-teddy-brown">
                  {title}
              </h2>
              
              <div className='space-y-3 font-body text-base sm:text-lg text-left bg-white/50 p-4 rounded-lg border-2 border-amber-200'>
                  <p>🗺️ <strong>Lugar:</strong> {missionData.lugar} ({missionData.direccion})</p>
                  <p>🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
                  <p>⏰ <strong>Horario:</strong> {missionData.horario}</p>
                  <p>🎒 <strong>Equipamiento:</strong> {missionData.nota}</p>
              </div>

              <div className='pt-4 flex flex-col items-center gap-4'>
                {avatarConfig && (
                  <div className="text-center font-body bg-sky-blue/20 p-2 rounded-md border border-sky-blue">
                    <p className="font-bold text-teddy-brown">Tu Avatar Guardado: <span className='text-2xl'>{getAvatarEmoji(avatarConfig)}</span></p>
                    <p className="text-xs">{avatarConfig.furColor}, {avatarConfig.headItem}, {avatarConfig.torsoItem}, {avatarConfig.backpacker}</p>
                  </div>
                )}
                <div className="relative w-full md:w-auto">
                    <Button
                        onClick={() => setIsConfirmed(true)}
                        disabled={isConfirmed}
                        className={`font-milky text-xl sm:text-2xl h-auto py-3 px-6 sm:px-8 border-2 border-teddy-brown transition-all duration-300 w-full md:w-auto ${
                            isConfirmed 
                            ? 'bg-grass-green text-white shadow-[0_5px_0_#2E8B57]' 
                            : 'bg-golden-coin text-white shadow-[0_5px_0_#b8860b] hover:bg-amber-400 active:translate-y-1 active:shadow-none'
                        }`}
                    >
                        {isConfirmed ? "¡Asistencia Confirmada!" : "¡Confirmo mi asistencia!"}
                    </Button>
                    {!isConfirmed && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-golden-coin animate-blink">
                          <span className='font-milky text-sm'>¡CONFIRMA!</span>
                          <ArrowDown className="w-6 h-6 mx-auto" />
                      </div>
                    )}
                  </div>
                  
                  <Button
                      onClick={onNext}
                      variant="link"
                      className="text-sky-blue font-milky text-base sm:text-lg"
                  >
                      ¿Quieres conocer mis gustos y mi lore? ➔
                  </Button>
              </div>
          </div>
      </div>
    );
  }

  return ( // Standard Version
    <div 
        className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: "url('/ciudad.webp')" }}
    >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="relative z-10 bg-amber-50 border-[6px] border-teddy-brown rounded-xl shadow-[8px_8px_0px_#63340b] w-full max-w-2xl p-6 sm:p-8 space-y-4 text-center">
            <h2 className="font-milky text-2xl sm:text-4xl text-teddy-brown">
                {title}
            </h2>
            
            <div className='space-y-3 font-body text-base sm:text-lg text-left bg-white/50 p-4 rounded-lg border-2 border-amber-200'>
                <p>🗺️ <strong>Lugar:</strong> {missionData.lugar} ({missionData.direccion})</p>
                <p>🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
                <p>⏰ <strong>Horario:</strong> {missionData.horario}</p>
            </div>

            <div className='pt-4 flex flex-col items-center gap-4'>
                <div className="relative w-full md:w-auto">
                    <Button
                        onClick={() => setIsConfirmed(true)}
                        disabled={isConfirmed}
                        className={`font-milky text-xl sm:text-2xl h-auto py-3 px-6 sm:px-8 border-2 border-teddy-brown transition-all duration-300 w-full md:w-auto ${
                            isConfirmed 
                            ? 'bg-grass-green text-white shadow-[0_5px_0_#2E8B57]' 
                            : 'bg-golden-coin text-white shadow-[0_5px_0_#b8860b] hover:bg-amber-400 active:translate-y-1 active:shadow-none'
                        }`}
                    >
                        {isConfirmed ? "¡Asistencia Confirmada!" : "¡Confirmo mi asistencia!"}
                    </Button>
                    {!isConfirmed && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-golden-coin animate-blink">
                          <span className='font-milky text-sm'>¡CONFIRMA!</span>
                          <ArrowDown className="w-6 h-6 mx-auto" />
                      </div>
                    )}
                </div>
                
                <Button
                    onClick={onNext}
                    variant="link"
                    className="text-sky-blue font-milky text-base sm:text-lg"
                >
                    ¿Quieres conocer mis gustos y mi lore? ➔
                </Button>
            </div>
        </div>
    </div>
  );
}
