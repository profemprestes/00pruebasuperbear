'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
    onSkipArcade(playerName.trim() || "Invitado");
  };

  return (
    <div 
        className="h-screen w-full bg-cover bg-bottom flex items-center justify-center p-4"
        style={{ backgroundImage: "url('/desierto.webp')" }}
    >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 bg-cloud-white border-[6px] border-teddy-brown rounded-xl shadow-[8px_8px_0px_#63340b] w-[90%] sm:w-full max-w-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 hidden sm:block">
                <Image 
                    src="/Shicka_the_backpacker.webp" 
                    alt="Shicka" 
                    width={150} 
                    height={150}
                    className="drop-shadow-[5px_5px_0px_rgba(0,0,0,0.4)] motion-safe:animate-float w-[150px]"
                />
            </div>
            <div className="flex-grow text-teddy-brown text-center sm:text-left">
                <p className='font-body text-base sm:text-xl font-bold mb-4 sm:mb-6'>
                    ¡Alto ahí, viajero! Antes de darte los detalles, necesito registrarte.
                </p>

                <div className="flex flex-col gap-4 mt-4 sm:mt-0">
                    <Input 
                        type="text" 
                        placeholder="Ingresa tu Nombre"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="border-4 border-teddy-brown h-12 sm:h-14 text-base sm:text-lg text-center font-milky rounded-lg"
                    />
                    <div className="relative mt-12 sm:mt-10">
                        {playerName.trim() && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-golden-coin motion-safe:animate-bounce flex flex-col items-center z-20 pointer-events-none">
                                <span className="font-milky text-xs bg-white px-2 rounded-full border-2 border-golden-coin shadow-md">¡A JUGAR!</span>
                                <ArrowDown className="w-4 h-4" />
                            </div>
                        )}
                        <Button
                            onClick={handlePlay}
                            disabled={!playerName.trim()}
                            className="w-full bg-golden-coin text-white font-milky text-sm sm:text-2xl h-auto py-3 sm:h-14 px-4 sm:px-6 border-2 border-amber-600 shadow-[0_5px_0_#b8860b] hover:bg-amber-400 active:translate-y-1 active:shadow-none transition-all disabled:bg-gray-400 disabled:shadow-none disabled:cursor-not-allowed whitespace-normal leading-tight"
                        >
                            ¡Entrar al Arcade World! (VIP)
                        </Button>
                    </div>
                    <Button
                        onClick={handleSkip}
                        className="bg-sky-blue text-white font-milky text-sm sm:text-lg h-auto py-3 sm:h-12 px-4 sm:px-6 border-2 border-blue-800 shadow-[0_5px_0_#00008B] hover:bg-blue-400 active:translate-y-1 active:shadow-none transition-all whitespace-normal"
                    >
                        Ver Coordenadas Directamente
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
