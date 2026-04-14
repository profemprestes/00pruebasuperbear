'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MissionSection } from "@/components/18-mission-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { useIsDesktop } from "@/hooks/use-media-query";

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
  },
  {
    id: 'bee',
    name: 'Abeja',
    img: '/personajes/Bee_render.png',
    description: 'Velocidad aérea',
    phrase: '¡Zzz-per listo para el despegue! ¡Cuidado con el aguijón! 🐝'
  },
];

export function ShopSection({ onNext }: { onNext: () => void }) {
  const isDesktop = useIsDesktop();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'selection' | 'confirmed'>('intro');

  const nextCharacter = () => setIndex((prev) => (prev + 1) % characters.length);
  const prevCharacter = () => setIndex((prev) => (prev - 1 + characters.length) % characters.length);

  const handleConfirm = () => {
    setPhase('confirmed');
    setTimeout(() => {
      onNext();
    }, 2500); // Dar tiempo a leer el mensaje positivo
  };

  return (
    <MissionSection stepId="shop" bgImage="/mundos/bear_village/Outfitshopplatform.webp">
      <Container size="xl" spacing="md">

        {/* DIÁLOGO DINÁMICO DE FACU */}
        <div className="w-full flex justify-center mb-4 md:mb-8">
          <AnimatePresence mode="wait">
            {phase === 'intro' ? (
              <motion.div
                key="intro-msg"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: -20 }}
                className="bg-white/95 p-5 md:p-8 rounded-[2rem] border-6 border-sky-blue shadow-2xl max-w-2xl flex flex-col md:flex-row items-center gap-6"
              >
                <div className="relative shrink-0">
                  <Image src="/facu_bear_sin_fondo.png" alt="Facu" width={120} height={120} className="animate-float" />
                  <div className="absolute -top-2 -right-2 bg-golden-coin rounded-full p-2 border-2 border-white">
                    <Sparkles className="w-4 h-4 text-teddy-brown" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-milky text-xl md:text-2xl text-teddy-brown mb-2">¡Hola, soy Facu! 👋</h3>
                  <p className="font-body text-sm md:text-base text-teddy-brown font-bold leading-relaxed mb-4">
                    "¡Bienvenidos a mi fiesta número 9! 🏀 Estamos en el Arcade World y necesito un equipo legendario. Elige al aliado que más te guste para entrar a la cancha conmigo."
                  </p>
                  <Button
                    onClick={() => setPhase('selection')}
                    className="bg-grass-green border-b-4 border-green-800 text-white font-milky text-lg px-8 hover:bg-green-500 rounded-xl"
                  >
                    ¡ENTENDIDO! ➔
                  </Button>
                </div>
              </motion.div>
            ) : phase === 'confirmed' ? (
              <motion.div
                key="confirm-msg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/95 p-6 rounded-3xl border-6 border-grass-green shadow-2xl max-w-lg flex items-center gap-5"
              >
                <Image src="/facu_bear_sin_fondo.png" alt="Facu" width={80} height={80} className="animate-bounce" />
                <p className="font-milky text-lg md:text-xl text-teddy-brown font-bold leading-tight">
                  "¡Esa es una elección épica! 😎 ¡Prepárate, {characters[index].name} y yo te esperamos en la cancha!"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="selection-msg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 bg-white/90 p-3 md:p-4 rounded-2xl border-4 border-sky-blue shadow-lg max-w-md"
              >
                <Image src="/facu_bear_sin_fondo.png" alt="Facu" width={60} height={60} className="shrink-0" />
                <p className="font-body text-[10px] md:text-xs text-teddy-brown font-bold leading-tight">
                  "Usa las flechas para buscar a tu campeón. ¡Cada uno tiene un estilo único! 🎨"
                </p>
              </motion.div>
            )
            }
          </AnimatePresence>
        </div>

        {/* CONTENEDOR DE LA ESCENA DE PRESENTACIÓN (Solo visible en fase selection/confirmed) */}
        {phase !== 'intro' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex-1 flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[320px] md:h-[480px] flex items-center justify-center">

              {/* Luces de escenario */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full flex justify-between pointer-events-none opacity-20">
                <div className="w-32 h-full bg-gradient-to-b from-sky-blue to-transparent transform -rotate-12 blur-3xl" />
                <div className="w-32 h-full bg-gradient-to-b from-sky-blue to-transparent transform rotate-12 blur-3xl" />
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Personajes Laterales */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {[-1, 1].map((offset) => {
                        const charIndex = (index + offset + characters.length) % characters.length;
                        const char = characters[charIndex];
                        return (
                          <motion.div
                            key={`side-${char.id}`}
                            className="absolute hidden md:block opacity-20 grayscale-[0.8] blur-md"
                            style={{ x: offset * (isDesktop ? 400 : 200), scale: 0.5 }}
                          >
                            <Image src={char.img} alt={char.name} width={200} height={200} />
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Aura central */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-sky-blue/20 blur-[100px] rounded-full"
                    />

                    {/* Personaje Central */}
                    <motion.div
                      animate={phase === 'confirmed' ? { scale: [1, 1.2], y: [0, -50], opacity: [1, 0] } : { y: [0, -10, 0] }}
                      transition={phase === 'confirmed' ? { duration: 1 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-20"
                    >
                      <Image
                        src={characters[index].img}
                        alt={characters[index].name}
                        width={isDesktop ? 350 : 220}
                        height={isDesktop ? 350 : 220}
                        className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                        priority
                      />
                    </motion.div>

                    {/* Globo de frase graciosa - Mejor posicionamiento */}
                    {phase === 'selection' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute -top-12 md:-top-16 right-[-25%] md:right-[-45%] bg-white border-4 border-sky-blue p-3 rounded-2xl shadow-xl w-36 md:w-52 z-30"
                      >
                        <p className="font-body text-[9px] md:text-[11px] text-teddy-brown font-bold text-center leading-tight">
                          {characters[index].phrase}
                        </p>
                        <div className="absolute -bottom-3 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-sky-blue border-r-[8px] border-r-transparent" />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Controles de Navegación Mejorados */}
                {phase === 'selection' && (
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-6 z-40 pointer-events-none">
                    <button
                      onClick={prevCharacter}
                      className="pointer-events-auto bg-white/90 p-2 md:p-3 rounded-full border-4 border-sky-blue text-sky-blue shadow-xl hover:scale-110 active:scale-90 transition-all"
                    >
                      <ChevronLeft size={isDesktop ? 44 : 32} />
                    </button>
                    <button
                      onClick={nextCharacter}
                      className="pointer-events-auto bg-white/90 p-2 md:p-3 rounded-full border-4 border-sky-blue text-sky-blue shadow-xl hover:scale-110 active:scale-90 transition-all"
                    >
                      <ChevronRight size={isDesktop ? 44 : 32} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* INFO Y BOTÓN FINAL */}
            <div className="mt-2 md:mt-4 flex flex-col items-center w-full max-w-sm">
              <motion.div
                key={`title-${characters[index].id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-4"
              >
                <div className="inline-block bg-gradient-to-b from-golden-coin to-yellow-600 border-4 border-teddy-brown px-6 py-1.5 rounded-full shadow-lg mb-1">
                  <span className="font-arcade text-white text-lg md:text-xl tracking-widest uppercase">
                    {characters[index].name}
                  </span>
                </div>
                <p className="font-amble text-white text-xs md:text-sm italic font-semibold drop-shadow-md">
                  {characters[index].description}
                </p>
              </motion.div>

              <Button
                onClick={handleConfirm}
                disabled={phase === 'confirmed'}
                variant="3d-gold"
                size="game-xl"
                className="w-full font-milky"
              >
                <Sparkles className="w-6 h-6 animate-pulse" />
                {phase === 'confirmed' ? '¡ELEGIDO!' : '¡ENTRAR A LA CANCHA!'}
              </Button>

              <div className="mt-3 flex items-center gap-2 text-white/50 font-amble text-[10px] uppercase tracking-widest">
                <span>Selecciona tu favorito</span>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </MissionSection>
  );
}