'use client';

import Image from 'next/image';

type PresentationScreenProps = {
  onNext: () => void;
  facuBio: string;
};

export function PresentationScreen({ onNext, facuBio }: PresentationScreenProps) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-3 sm:p-4 relative overflow-auto"
      style={{ backgroundImage: "url('/ciudad.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative bg-white border-6 sm:border-8 border-[hsl(var(--foreground))] rounded-2xl p-4 sm:p-8 pt-16 sm:pt-20 shadow-[8px_8px_0px_hsl(var(--foreground))] max-w-2xl w-full m-4 motion-safe:animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-8 duration-500">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-top-16 sm:-left-12 z-10">
          <Image
            src="/facu_bear_sin_fondo.png"
            alt="Facu Bear Avatar"
            width={150}
            height={150}
            className="drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)] w-[100px] sm:w-[130px] md:w-[150px] transition-transform duration-300 hover:scale-110 motion-safe:animate-float"
          />
        </div>

        <div className="text-center sm:text-left sm:ml-0 md:ml-32 relative">
            <h2 className="font-milky text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[hsl(var(--foreground))]">
                ¡Nivel 9 Desbloqueado!
            </h2>
            <p className="font-body text-sm sm:text-base text-[#333] mt-3 sm:mt-4 leading-relaxed break-words whitespace-normal">
                {facuBio || '¡Hola! Soy Facu. He llegado al Nivel 9 con la barra de energía al máximo y te invito a celebrarlo conmigo en esta nueva aventura multijugador.'}
            </p>
        </div>

        <button
          onClick={onNext}
          aria-label="Ver los detalles de la misión de cumpleaños"
          className="absolute -bottom-5 right-4 font-milky text-white text-lg sm:text-xl px-6 py-3 rounded-lg bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-200 hover:bg-green-500 hover:shadow-[0_8px_0_#2E8B57] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none motion-safe:animate-blink"
        >
          Ver Misión ➔
        </button>
      </div>
    </div>
  );
}
