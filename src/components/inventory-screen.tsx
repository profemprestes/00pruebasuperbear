'use client';

import { Award, Gamepad2 } from 'lucide-react';

type InventoryScreenProps = {
  onNext: () => void;
};

export function InventoryScreen({ onNext }: InventoryScreenProps) {
  const inventoryItems = [
    { icon: '🥋', text: 'Taekwondo' },
    { icon: '🎮', text: 'Videojuegos' },
    { icon: '🐻', text: 'Super Bear Adventure' },
    { icon: '🏀', text: 'Baloncesto' },
  ];

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('/casa.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0" />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <h2 className="font-milky text-5xl md:text-7xl text-white mb-8" style={{ textShadow: '4px 4px 0px hsl(var(--teddy-brown))' }}>
          INVENTARIO DE FACU
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {inventoryItems.map((item, index) => (
            <div key={index} className="aspect-square bg-white/20 border-4 border-teddy-brown rounded-lg shadow-inner-strong flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105 hover:bg-white/30">
              <div className="text-6xl md:text-7xl drop-shadow-lg">{item.icon}</div>
              <p className="font-body text-white font-bold text-lg md:text-xl mt-2 text-center">{item.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onNext}
          className="mt-12 font-milky text-white text-2xl px-8 py-4 rounded-lg bg-sky-blue border-0 shadow-[0_6px_0_#00008B] transition-all duration-150 active:translate-y-[6px] active:shadow-none"
        >
          Ver Archivos Clasificados ➔
        </button>
      </div>
    </div>
  );
}
