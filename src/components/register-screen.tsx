'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type RegisterScreenProps = {
  onRegister: (name: string) => void;
};

export function RegisterScreen({ onRegister }: RegisterScreenProps) {
  const [playerName, setPlayerName] = useState('');

  const handleRegister = () => {
    if (playerName.trim()) {
      onRegister(playerName);
    }
  };

  const handleGuest = () => {
    onRegister(''); // Empty string for guest
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
                        onClick={handleRegister}
                        disabled={!playerName.trim()}
                        className="bg-grass-green text-white font-milky text-2xl h-14 px-6 border-2 border-green-800 shadow-[0_5px_0_#2E8B57] hover:bg-green-500 active:translate-y-1 active:shadow-none transition-all disabled:bg-gray-400 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                        Siguiente ➔
                    </Button>
                    <Button
                        onClick={handleGuest}
                        variant="link"
                        className="text-teddy-brown/80 font-milky text-md"
                    >
                        Entrar como invitado (Sin nombre)
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
