"use client";
import { useState } from 'react';
import Image from 'next/image';
import { missionData } from '@/lib/eventData';
import { Button } from './ui/button';
import { Input } from './ui/input';

type MissionScreenProps = {
  onMissionAccept: () => void;
};

export function MainWorld({ onMissionAccept }: MissionScreenProps) {
  const [playerName, setPlayerName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleAcceptMission = () => {
    if (playerName.trim()) {
      setIsRegistered(true);
    } else {
      alert('¡Por favor, ingresa tu nombre de jugador!');
    }
  };

  return (
    <div 
        className="h-screen w-full bg-cover bg-bottom flex items-center justify-center p-4"
        style={{ backgroundImage: "url('/desierto.webp')" }}
    >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10 bg-cloud-white border-[6px] border-teddy-brown rounded-xl shadow-[8px_8px_0px_#63340b] w-full max-w-4xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
                <Image 
                    src="/Shicka_the_backpacker.webp" 
                    alt="Shicka" 
                    width={150} 
                    height={150}
                    className="drop-shadow-[5px_5px_0px_rgba(0,0,0,0.4)] animate-sway w-[130px]"
                />
            </div>
            <div className="flex-grow text-teddy-brown text-center md:text-left">
                <h2 className="font-milky text-4xl text-teddy-brown mb-4">
                    ¡Nueva Misión de la Reina!
                </h2>
                <div className='space-y-2 font-body text-lg'>
                    <p>🗺️ <strong>Punto de encuentro:</strong> {missionData.lugar} ({missionData.direccion})</p>
                    <p>🗓️ <strong>Fecha:</strong> {missionData.fecha}</p>
                    <p>⏰ <strong>Tiempo:</strong> {missionData.horario}</p>
                    <p>🎒 <strong>Equipamiento:</strong> {missionData.nota}</p>
                </div>

                {!isRegistered ? (
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <Input 
                            type="text" 
                            placeholder="Ingresa tu nombre de jugador" 
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            className="border-4 border-teddy-brown h-14 text-lg flex-grow"
                        />
                        <Button
                            onClick={handleAcceptMission}
                            className="bg-golden-coin text-white font-milky text-2xl h-14 px-6 border-2 border-teddy-brown shadow-[0_5px_0_#b8860b] hover:bg-amber-400 active:translate-y-1 active:shadow-none transition-all"
                        >
                            ¡ACEPTAR MISIÓN!
                        </Button>
                    </div>
                ) : (
                    <div className="mt-6 text-center">
                        <p className="text-3xl font-milky text-grass-green drop-shadow-md mb-4">
                            ¡Misión Aceptada!
                        </p>
                        <Button
                            onClick={onMissionAccept}
                            className="bg-sky-blue text-white font-milky text-2xl h-auto py-3 px-6 border-2 border-blue-800 shadow-[0_5px_0_#00008b] hover:bg-sky-400 active:translate-y-1 active:shadow-none transition-all"
                        >
                            Ver Inventario ➔
                        </Button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
