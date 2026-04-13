'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

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
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center p-[max(0.75rem,var(--safe-left))] sm:p-[max(1rem,var(--safe-left))] lg:p-8 pt-[max(2rem,var(--safe-top))] pb-[max(2rem,var(--safe-bottom))] relative overflow-y-auto"
      style={{ backgroundImage: "url('/mundos/bear_village/Gianthouseentrancearea.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg z-0" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-2 sm:px-4 text-center">
        {/* ── Title ── */}
        <h2
          className="font-milky text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 sm:mb-8"
          style={{ textShadow: '3px 3px 0px hsl(var(--teddy-brown))' }}
        >
          📦 Inventario de Facu
        </h2>

        {/* ── Inventory Grid: 2-col mobile → 4-col desktop ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 max-w-xs sm:max-w-md lg:max-w-xl mx-auto">
          {inventoryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border-2 border-golden-coin rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center p-2 sm:p-3 lg:p-4 aspect-square transition-transform hover:scale-105 active:scale-95"
            >
              <span className="text-2xl sm:text-3xl lg:text-5xl">{item.icon}</span>
              <p className="font-body text-white font-bold text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-2 text-center leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Photos: stacked mobile → side-by-side desktop ── */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Photo 1 */}
          <div
            className="group bg-white p-3 sm:p-4 pb-8 sm:pb-10 shadow-lg border-4 border-gray-300 relative sm:-rotate-3 transition-all duration-300 ease-in-out hover:scale-105 sm:hover:rotate-0 hover:z-10 w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]"
          >
            <Image
              src={photo1 || "/facu.jpg"}
              alt="Foto 1 de Facu"
              width={300}
              height={300}
              className="w-full object-cover aspect-square rounded-sm"
            />
            <p className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 font-milky text-sm sm:text-lg text-teddy-brown whitespace-nowrap">
              RECUERDO 1
            </p>
          </div>

          {/* Photo 2 */}
          <div
            className="group bg-white p-3 sm:p-4 pb-8 sm:pb-10 shadow-lg border-4 border-gray-300 relative sm:rotate-3 transition-all duration-300 ease-in-out hover:scale-105 sm:hover:rotate-0 hover:z-10 w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]"
          >
            <Image
              src={photo2 || "/facu2.jpeg"}
              alt="Foto 2 de Facu"
              width={300}
              height={300}
              className="w-full object-cover aspect-square rounded-sm"
            />
            <p className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 font-milky text-sm sm:text-lg text-teddy-brown whitespace-nowrap">
              RECUERDO 2
            </p>
          </div>
        </div>

        {/* ── Thank you message ── */}
        <p className="font-body text-base sm:text-lg lg:text-xl text-white/90 mt-4 sm:mt-8 mb-6 sm:mb-8">
          ¡Gracias por llegar hasta aquí! Nos vemos en la partida. 🐻
        </p>

        {/* ── Restart button ── */}
        <div className="relative inline-block">
          <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 text-grass-green motion-safe:animate-bounce flex flex-col items-center pointer-events-none">
            <span className="font-milky text-xs sm:text-sm bg-white/90 px-2 sm:px-3 rounded-full border-2 border-grass-green text-black">
              ¡REINICIAR!
            </span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <Button
            onClick={onRestart}
            className="font-milky text-white text-lg sm:text-xl lg:text-2xl px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-200 hover:bg-green-500 hover:shadow-[0_8px_0_#2E8B57] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
          >
            Volver al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
