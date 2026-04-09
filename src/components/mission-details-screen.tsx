'use client';

import { useState } from 'react';
import { missionData } from '@/lib/eventData';
import { Button } from './ui/button';

type MissionDetailsScreenProps = {
  playerName: string;
  onNext: () => void;
  playedMinigames: boolean;
};

export function MissionDetailsScreen({ playerName, onNext, playedMinigames }: MissionDetailsScreenProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const guestName = "Jugador";
  const title = playedMinigames 
    ? `¡Felicidades, ${playerName || guestName}!`
    : `Misión Estándar: Coordenadas de ${playerName || guestName}`;

  if (playedMinigames) {
    return ( // VIP Version
      <div 
          className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4 overflow-hidden"
          style={{ backgroundImage: "url('/ciudad.webp')" }}
      >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className={`confetti confetti-${i}`}></div>
            ))}
          </div>
          <div className="relative z-10 bg-gradient-to-br from-yellow-50 to-amber-100 border-[8px] border-golden-coin rounded-2xl shadow-[0_10px_30px_rgba(255,215,0,0.5),_8px_8px_0px_#b8860b] w-full max-w-2xl p-6 sm:p-8 space-y-4 text-center animate-in fade-in-0 zoom-in-95 duration-500">
              <div className="bg-amber-400/80 rounded-lg p-3 mb-4 border-2 border-amber-500 shadow-inner">
                  <h3 className="font-milky text-xl sm:text-2xl text-white animate-pulse">💎 ESTATUS VIP DESBLOQUEADO 💎</h3>
                  <p className="font-body font-bold text-white text-md sm:text-lg">Recompensa: ¡Sombrero de Pastel de Cumpleaños!</p>
              </div>

              <h2 className="font-milky text-2xl sm:text-4xl text-teddy-brown">
                  {title}
              </h2>
              
              <div className='space-y-3 font-body text-base sm:text-lg text-left bg-white/50 p-4 rounded-lg border-2 border-amber-200'>
                  <p>🗺️ <strong>Lugar:</strong> {missionData.lugar} ({missionData.direccion})</p>
                  <p>🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
                  <p>⏰ <strong>Horario:</strong> {missionData.horario}</p>
                  <p>🎒 <strong>Equipamiento:</strong> {missionData.nota}</p>
              </div>

              <div className='pt-4 flex flex-col items-center gap-4'>
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
        <div className="relative z-10 bg-amber-50 border-[6px] border-teddy-brown rounded-xl shadow-[8px_8px_0px_#63340b] w-full max-w-2xl p-6 sm:p-8 space-y-4 text-center animate-in fade-in-0 zoom-in-95 duration-500">
            <h2 className="font-milky text-2xl sm:text-4xl text-teddy-brown">
                {title}
            </h2>
            
            <div className='space-y-3 font-body text-base sm:text-lg text-left bg-white/50 p-4 rounded-lg border-2 border-amber-200'>
                <p>🗺️ <strong>Lugar:</strong> {missionData.lugar} ({missionData.direccion})</p>
                <p>🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
                <p>⏰ <strong>Horario:</strong> {missionData.horario}</p>
            </div>

            <div className='pt-4 flex flex-col items-center gap-4'>
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
