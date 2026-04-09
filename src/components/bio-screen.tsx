'use client';

import Image from 'next/image';

type BioScreenProps = {
  onRestart: () => void;
};

export function BioScreen({ onRestart }: BioScreenProps) {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center p-4 relative bg-sky-blue overflow-y-auto"
    >
      <div className="text-center mb-8 space-y-4">
        <h2 className="font-milky text-5xl md:text-6xl text-white" style={{ WebkitTextStroke: '3px hsl(var(--foreground))', textShadow: '4px 4px 0px hsl(var(--foreground))' }}>
          El Jugador Detrás del Avatar
        </h2>
        <div className="bg-white/80 backdrop-blur-sm border-4 border-teddy-brown p-6 rounded-lg max-w-2xl mx-auto shadow-lg">
            <p className="font-body text-xl md:text-2xl text-teddy-brown font-bold">
                Facu ha superado todos los niveles de este año con máxima energía. ¡Un maestro del Taekwondo, amante de los videojuegos y listo para disfrutar con sus amigos en KBOOM!
            </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 p-4">
        <div className="bg-white p-4 pb-12 shadow-lg border border-gray-300 relative transform -rotate-3 transition-transform hover:scale-105 hover:rotate-0">
            <Image src="/facu.jpg" alt="Facu en Taekwondo" width={250} height={250} className="w-full object-cover" />
        </div>
        <div className="bg-white p-4 pb-12 shadow-lg border border-gray-300 relative transform rotate-4 transition-transform hover:scale-105 hover:rotate-0">
            <Image src="/facu2.jpeg" alt="Retrato de Facu" width={250} height={250} className="w-full object-cover" />
        </div>
      </div>

      <button
        onClick={onRestart}
        className="mt-12 font-milky text-white text-2xl px-8 py-4 rounded-lg bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-150 active:translate-y-[6px] active:shadow-none"
      >
        Volver al Inicio
      </button>
    </div>
  );
}
