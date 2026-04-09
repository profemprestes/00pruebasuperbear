'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type RegisterScreenProps = {
  onPlayArcade: (name: string) => void;
  onSkipArcade: (name: string) => void;
};

export function RegisterScreen({ onPlayArcade, onSkipArcade }: RegisterScreenProps) {
  const [playerName, setPlayerName] = useState('');

  const handlePlay = () => {
    onPlayArcade(playerName.trim());
  };

  const handleSkip = () => {
    onSkipArcade(playerName.trim());
  };

  return (
    <div 
        className="h-screen w-full bg-cover bg-bottom flex items-center justify-center p-4"
        style={{ backgroundImage: "url('/desierto.webp')" }}
    >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="relative z-10 bg-cloud-white border-[6px] border-teddy-brown rounded-xl shadow-[8px_8px_0px_#63340b] w-full max-w-lg p-8 flex flex-col items-center gap-6 animate-in fade-in-0 zoom-in-95 duration-500">
            <div className="flex-shrink-0">
                <Image 
                    src="/Shicka_the_backpacker.webp" 
                    alt="Shicka" 
                    width={150} 
                    height={150}
                    className="drop-shadow-[5px_5px_0px_rgba(0,0,0,0.4)] animate-sway w-[130px]"
                />
            </div>
            <div className="flex-grow text-teddy-brown text-center">
                <p className='font-body text-xl font-bold mb-6'>
                    ¡Alto ahí, viajero! Antes de darte los detalles de esta misión secreta, necesito registrarte en el sistema.
                </p>

                <div className="flex flex-col gap-4">
                    <Input 
                        type="text" 
                        placeholder="Ingresa tu Nombre de Jugador" 
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="border-4 border-teddy-brown h-14 text-lg text-center font-milky rounded-lg"
                    />
                    <Button
                        onClick={handlePlay}
                        disabled={!playerName.trim()}
                        className="bg-golden-coin text-white font-milky text-2xl h-14 px-6 border-2 border-amber-600 shadow-[0_5px_0_#b8860b] hover:bg-amber-400 active:translate-y-1 active:shadow-none transition-all disabled:bg-gray-400 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                        ¡Entrar al Arcade World! (Jugar para obtener VIP)
                    </Button>
                    <Button
                        onClick={handleSkip}
                        className="bg-sky-blue text-white font-milky text-lg h-12 px-6 border-2 border-blue-800 shadow-[0_5px_0_#00008B] hover:bg-blue-400 active:translate-y-1 active:shadow-none transition-all"
                    >
                        Ver Coordenadas Directamente (Saltar Juego)
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
