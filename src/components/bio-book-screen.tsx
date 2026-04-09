'use client';

import Image from 'next/image';

type BioBookScreenProps = {
  onRestart: () => void;
};

export function BioBookScreen({ onRestart }: BioBookScreenProps) {
  const inventoryItems = [
    { icon: '🥋', text: 'Taekwondo' },
    { icon: '🎮', text: 'Videojuegos' },
    { icon: '🐻', text: 'Super Bear Adventure' },
    { icon: '🏀', text: 'Baloncesto' },
  ];

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center p-4 relative overflow-y-auto"
      style={{ backgroundImage: "url('/casa.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg z-0" />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto animate-in fade-in-0 duration-500">
        <h2 className="font-milky text-5xl md:text-6xl text-white mb-8" style={{ textShadow: '4px 4px 0px hsl(var(--teddy-brown))' }}>
          Inventario de Facu
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {inventoryItems.map((item, index) => (
            <div key={index} className="bg-white/10 border-2 border-golden-coin rounded-full shadow-lg flex items-center justify-center py-2 px-4">
              <span className="text-2xl mr-2">{item.icon}</span>
              <p className="font-body text-white font-bold text-md">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 p-4">
            <div className="group bg-white p-4 pb-12 shadow-lg border-4 border-gray-300 relative transform -rotate-6 transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-0 hover:z-10">
                <Image src="/facu.jpg" alt="Facu en Taekwondo" width={250} height={250} className="w-full object-cover" />
            </div>
            <div className="group bg-white p-4 pb-12 shadow-lg border-4 border-gray-300 relative transform rotate-6 transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-0 hover:z-10">
                <Image src="/facu2.jpeg" alt="Retrato de Facu" width={250} height={250} className="w-full object-cover" />
            </div>
        </div>
        
        <p className="font-body text-xl text-white/90 mt-12">
          ¡Gracias por llegar hasta aquí! Nos vemos en la partida.
        </p>

        <button
          onClick={onRestart}
          className="mt-8 font-milky text-white text-2xl px-8 py-4 rounded-lg bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-150 active:translate-y-[6px] active:shadow-none"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
