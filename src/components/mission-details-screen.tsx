'use client';

import { useState } from 'react';
import { missionData } from '@/lib/eventData';
import { Button } from './ui/button';

type MissionDetailsScreenProps = {
  playerName: string;
  onNext: () => void;
};

export function MissionDetailsScreen({ playerName, onNext }: MissionDetailsScreenProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const title = playerName 
    ? `¡Felicidades, ${playerName}! Aquí tienes las coordenadas:` 
    : "¡Felicidades, Jugador! Aquí tienes las coordenadas:";

  return (
    <div 
        className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: "url('/ciudad.webp')" }}
    >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="relative z-10 bg-white/90 border-[6px] border-teddy-brown rounded-xl shadow-[8px_8px_0px_#63340b] w-full max-w-2xl p-8 space-y-4 text-center animate-in fade-in-0 zoom-in-95 duration-500">
            <h2 className="font-milky text-3xl md:text-4xl text-teddy-brown animate-in fade-in slide-in-from-top-10 duration-500">
                {title}
            </h2>
            
            <div className='space-y-3 font-body text-lg md:text-xl text-left bg-amber-50 p-4 rounded-lg border-2 border-amber-200'>
                <p className="animate-in fade-in slide-in-from-left-10 duration-500 delay-200 fill-mode-forwards">🗺️ <strong>Lugar:</strong> {missionData.lugar} ({missionData.direccion})</p>
                <p className="animate-in fade-in slide-in-from-left-10 duration-500 delay-300 fill-mode-forwards">🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
                <p className="animate-in fade-in slide-in-from-left-10 duration-500 delay-400 fill-mode-forwards">⏰ <strong>Horario:</strong> {missionData.horario}</p>
                <p className="animate-in fade-in slide-in-from-left-10 duration-500 delay-500 fill-mode-forwards">🎒 <strong>Equipamiento:</strong> {missionData.nota}</p>
            </div>

            <div className='pt-4 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-700 fill-mode-forwards'>
                <Button
                    onClick={() => setIsConfirmed(true)}
                    disabled={isConfirmed}
                    className={`font-milky text-2xl h-auto py-3 px-8 border-2 border-teddy-brown transition-all duration-300 w-full md:w-auto ${
                        isConfirmed 
                        ? 'bg-grass-green text-white shadow-[0_5px_0_#2E8B57]' 
                        : 'bg-golden-coin text-white shadow-[0_5px_0_#b8860b] hover:bg-amber-400 active:translate-y-1 active:shadow-none'
                    }`}
                >
                    {isConfirmed ? "¡Asistencia Confirmada!" : "¡Confirmo mi asistencia!"}
                </Button>
                
                <Button
                    onClick={onNext}
                    className="bg-transparent text-sky-blue font-milky text-lg hover:underline"
                >
                    ¿Quieres conocer mis gustos y mi lore? ➔
                </Button>
            </div>
        </div>
    </div>
  );
}
