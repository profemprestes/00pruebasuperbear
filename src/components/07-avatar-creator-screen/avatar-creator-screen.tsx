'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MissionSection } from "@/components/18-mission-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

// Listado de personajes con frases graciosas y descripciones
const characters = [
  {
    id: 'baaren',
    name: 'Baaren',
    img: '/personajes/Baarenrender_.png',
    description: 'El héroe legendario',
    phrase: '¡Prepárense para el impacto! O al menos para un abrazo muy peludo. 🐻'
  },
  {
    id: 'shicka',
    name: 'Shicka',
    img: '/personajes/Shicka_render_.png',
    description: 'La guía audaz',
    phrase: '¡Si nos perdemos, es culpa del mapa! Yo siempre sé a dónde voy. 🗺️'
  },
  {
    id: 'penguin',
    name: 'Pingüino',
    img: '/personajes/Penguin_render.png',
    description: 'Experto en clima frío',
    phrase: '¿Alguien trajo helado? No es broma, me estoy derritiendo aquí. 🍦'
  },
  {
    id: 'turtle',
    name: 'Tortuga',
    img: '/personajes/Turtle_render.png',
    description: 'Defensa impenetrable',
    phrase: 'Despacio se llega lejos... pero si alguien me empuja, mejor. 🐢'
  }
];

type AvatarCreatorScreenProps = {
  onNext: () => void;
};

export function ShopSection({ onNext }: AvatarCreatorScreenProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"selecting" | "confirmed">("selecting");

  const nextChar = () => setIndex((i) => (i + 1) % characters.length);
  const prevChar = () => setIndex((i) => (i - 1 + characters.length) % characters.length);

  const handleConfirm = () => {
    setPhase("confirmed");
    setTimeout(onNext, 1500);
  };

  return (
    <MissionSection stepId="avatar" className="bg-sky-blue overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-sky-blue to-sky-blue pointer-events-none" />

      <Container className="relative z-10 py-12 md:py-24 flex flex-col items-center">

        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className="font-milky text-4xl md:text-6xl text-teddy-brown drop-shadow-[0_4px_0_rgba(255,255,255,0.8)] uppercase">
            ¡ELEGÍ TU SKIN!
          </h2>
          <p className="font-body text-[#4E342E] font-bold text-lg md:text-xl mt-2">
            Selecciona tu favorito para la partida.
          </p>
        </motion.div>

        {/* Character Viewer (Voxel Box) */}
        <motion.div
          className="w-full max-w-3xl bg-white/90 border-8 border-teddy-brown rounded-3xl shadow-[12px_12px_0px_#4E342E] p-8 md:p-12 relative flex flex-col items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {/* Controls */}
          <button
            onClick={prevChar}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-golden-coin border-4 border-[#4E342E] rounded-xl p-3 text-[#4E342E] shadow-[0_6px_0_#4E342E] active:translate-y-1 active:shadow-none hover:-translate-y-1 transition-all z-20"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          <button
            onClick={nextChar}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-golden-coin border-4 border-[#4E342E] rounded-xl p-3 text-[#4E342E] shadow-[0_6px_0_#4E342E] active:translate-y-1 active:shadow-none hover:-translate-y-1 transition-all z-20"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>

          {/* Character Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={characters[index].id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image Container with Glow */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 motion-safe:animate-float">
                <div className="absolute inset-0 bg-sky-blue/30 blur-3xl rounded-full" />
                <Image
                  src={characters[index].img}
                  alt={characters[index].name}
                  fill
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] relative z-10"
                />
              </div>

              {/* Texts */}
              <h3 className="font-milky text-3xl md:text-4xl text-[#4E342E] mb-2">
                {characters[index].name}
              </h3>
              <div className="bg-[#4E342E] text-white font-body px-4 py-1.5 rounded-full text-sm md:text-base font-bold mb-4 inline-block shadow-inner">
                {characters[index].description}
              </div>
              <p className="font-amble text-[#8D6E63] italic text-sm md:text-lg max-w-sm">
                "{characters[index].phrase}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Confirm Button */}
          <div className="mt-8 w-full max-w-xs">
            <Button
              onClick={handleConfirm}
              disabled={phase === "confirmed"}
              className="w-full btn-3d-gold h-16 font-milky text-2xl uppercase"
            >
              <Sparkles className="w-6 h-6 mr-2 animate-pulse" />
              {phase === "confirmed" ? "¡ELEGIDO!" : "¡ENTRAR A LA CANCHA!"}
            </Button>
          </div>
        </motion.div>

      </Container>
    </MissionSection>
  );
}
