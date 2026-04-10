'use client';

import Image from 'next/image';
import { Button } from './ui/button';

type BioBookScreenProps = {
  onRestart: () => void;
  facuLikes: string[];
  photo1: string | null;
  photo2: string | null;
};

export function BioBookScreen({ onRestart, facuLikes, photo1, photo2 }: BioBookScreenProps) {
  const defaultInventory = [
    { icon: '🥋', text: 'Taekwondo' },
    { icon: '🎮', text: 'Videojuegos' },
    { icon: '🐻', text: 'Super Bear Adventure' },
    { icon: '🏀', text: 'Baloncesto' },
  ];

  const inventoryItems = facuLikes.length > 0
    ? facuLikes.map(like => ({ text: like, icon: '⭐' }))
    : defaultInventory;

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center p-4 relative overflow-y-auto"
      style={{ backgroundImage: "url('/casa.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg z-0" />
      
      <div className="relative z-10 text-center w-[95%] max-w-4xl mx-auto">
        <h2 className="font-milky text-4xl sm:text-5xl md:text-6xl text-white mb-8" style={{ textShadow: '4px 4px 0px hsl(var(--teddy-brown))' }}>
          Inventario de Facu
        </h2>
        <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-12 max-w-xl mx-auto">
          {inventoryItems.map((item, index) => (
            <div key={index} className="bg-white/10 border-2 border-golden-coin rounded-lg shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 aspect-square transition-transform hover:scale-105">
              <span className="text-3xl sm:text-5xl">{item.icon}</span>
              <p className="font-body text-white font-bold text-sm sm:text-md mt-2 text-center">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12 p-4">
            <div className="group bg-white p-4 pb-12 shadow-lg border-4 border-gray-300 relative transform md:-rotate-6 transition-all duration-300 ease-in-out hover:scale-105 md:hover:rotate-0 hover:z-10 w-full max-w-[250px] sm:max-w-[300px]">
                <Image src={photo1 || "/facu.jpg"} alt="Foto 1 de Facu" width={300} height={300} className="w-full object-cover aspect-square" />
                 <p className="absolute bottom-2 left-1/2 -translate-x-1/2 font-milky text-lg text-teddy-brown">RECUERDO 1</p>
            </div>
            <div className="group bg-white p-4 pb-12 shadow-lg border-4 border-gray-300 relative transform md:rotate-6 transition-all duration-300 ease-in-out hover:scale-105 md:hover:rotate-0 hover:z-10 w-full max-w-[250px] sm:max-w-[300px]">
                <Image src={photo2 || "/facu2.jpeg"} alt="Foto 2 de Facu" width={300} height={300} className="w-full object-cover aspect-square" />
                 <p className="absolute bottom-2 left-1/2 -translate-x-1/2 font-milky text-lg text-teddy-brown">RECUERDO 2</p>
            </div>
        </div>
        
        <p className="font-body text-lg sm:text-xl text-white/90 mt-12">
          ¡Gracias por llegar hasta aquí! Nos vemos en la partida.
        </p>
        
        <div className="relative inline-block mt-8">
            <Button
              onClick={onRestart}
              className="font-milky text-white text-xl sm:text-2xl px-8 py-4 rounded-lg bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-150 hover:bg-green-500 hover:shadow-[0_4px_0_#2E8B57] active:translate-y-[2px] active:shadow-none"
            >
              Volver al Inicio
            </Button>
        </div>
      </div>
    </div>
  );
}
