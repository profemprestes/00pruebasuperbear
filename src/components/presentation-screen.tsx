'use client';

import Image from 'next/image';

type PresentationScreenProps = {
  onNext: () => void;
  facuBio: string;
};

export function PresentationScreen({ onNext, facuBio }: PresentationScreenProps) {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('/ciudad.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative bg-white border-8 border-[hsl(var(--foreground))] rounded-2xl p-6 sm:p-8 pt-20 sm:pt-12 shadow-[8px_8px_0px_hsl(var(--foreground))] max-w-2xl w-[95%] sm:w-full m-4 motion-safe:animate-subtle-float">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-top-20 sm:-left-12 z-10">
          <Image
            src="/facu_bear_sin_fondo.png"
            alt="Facu Bear Avatar"
            width={150}
            height={150}
            className="drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)] w-[120px] sm:w-[150px] transition-transform duration-300 hover:scale-110 motion-safe:animate-subtle-float"
          />
        </div>
        
        <div className="text-center sm:text-left sm:ml-0 md:ml-32 relative">
            <h2 className="font-milky text-3xl sm:text-4xl md:text-5xl text-[hsl(var(--foreground))]">
                ¡Nivel 9 Desbloqueado!
            </h2>
            <p className="font-body text-md sm:text-lg text-[#333] mt-4">
                {facuBio || '¡Hola! Soy Facu. He llegado al Nivel 9 con la barra de energía al máximo y te invito a celebrarlo conmigo en esta nueva aventura multijugador.'}
            </p>
        </div>

        <button
          onClick={onNext}
          className="absolute -bottom-5 right-4 font-milky text-white text-lg sm:text-xl px-6 py-3 rounded-lg bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-150 hover:bg-green-500 hover:shadow-[0_4px_0_#2E8B57] active:translate-y-1 active:shadow-none motion-safe:animate-blink"
        >
          Ver Misión ➔
        </button>
      </div>
    </div>
  );
}
