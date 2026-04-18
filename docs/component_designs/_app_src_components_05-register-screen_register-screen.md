# Detalle de Diseño y Textos: /src/components/05-register-screen/register-screen.tsx

## Diseño del Cuerpo del Componente

El componente utiliza las siguientes clases y estilos:

- `relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden`
- `absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-0`
- `absolute inset-0 pointer-events-none overflow-hidden z-0`
- `absolute text-xl sm:text-2xl`
- `flex flex-col items-center mb-6 md:mb-0 md:hidden order-1`
- `relative bg-white border-4 border-sky-blue px-4 py-3 rounded-2xl shadow-xl mb-4 w-64 sm:w-72 z-30`
- `font-body text-xs sm:text-sm text-teddy-brown font-semibold text-center leading-tight`
- `absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-sky-blue border-r-[10px] border-r-transparent`
- `relative cursor-pointer`
- `absolute inset-0 flex items-center justify-center`
- `w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-sky-blue/25 blur-2xl`
- `relative z-10 drop-shadow-[0_10px_20px_rgba(135,206,235,0.6)] transition-transform duration-300`
- `absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-blue to-blue-400 text-white font-arcade text-[10px] px-3 py-1 rounded-full border-2 border-white shadow-lg whitespace-nowrap z-10`
- `hidden md:flex flex-row items-center justify-center gap-12 lg:gap-16 order-1`
- `flex flex-col items-center relative`
- `relative bg-white border-4 border-sky-blue px-5 py-4 rounded-2xl shadow-xl mb-6 w-72 z-30`
- `font-body text-sm text-teddy-brown font-semibold text-center leading-tight`
- `w-60 h-60 rounded-full bg-sky-blue/25 blur-2xl`
- `absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-blue to-blue-400 text-white font-arcade text-xs px-4 py-1.5 rounded-full border-3 border-white shadow-lg whitespace-nowrap z-10`
- `w-full max-w-md bg-white/95 backdrop-blur-sm border-8 border-teddy-brown rounded-3xl p-8 shadow-[10px_10px_0px_#63340b] relative`
- `absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-golden-coin via-grass-green to-golden-coin rounded-t-3xl`
- `text-center mb-8 pt-2`
- `flex items-center justify-center gap-2 mb-3`
- `w-8 h-8 text-sky-blue`
- `w-8 h-8 text-golden-coin`
- `font-milky text-4xl text-teddy-brown leading-tight mb-3`
- `font-amble text-voxel-text/80 text-base leading-snug`
- `space-y-6`
- `relative`
- `border-4 border-sky-blue h-16 text-center font-milky text-xl rounded-xl focus:ring-4 focus:ring-sky-blue/30 focus:border-sky-blue transition-all`
- `absolute left-4 top-1/2 -translate-y-1/2 text-sky-blue w-6 h-6 pointer-events-none opacity-70`
- `absolute right-4 top-1/2 -translate-y-1/2 text-golden-coin w-6 h-6 pointer-events-none opacity-80`
- `flex items-center justify-center gap-2 text-sm`
- `w-4 h-4 text-golden-coin`
- `font-amble text-golden-coin font-semibold`
- `flex flex-col gap-4 pt-2`
- `w-full overflow-hidden relative group font-milky`
- `absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent`
- `relative z-10 font-bold`
- `w-full font-amble`
- `w-full max-w-md bg-white/95 backdrop-blur-sm border-6 sm:border-8 border-teddy-brown rounded-3xl p-6 sm:p-8 shadow-[10px_10px_0px_#63340b] relative md:hidden order-2`
- `absolute top-0 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-golden-coin via-grass-green to-golden-coin rounded-t-3xl`
- `text-center mb-6 sm:mb-8 pt-2`
- `w-6 h-6 sm:w-8 sm:h-8 text-sky-blue`
- `w-6 h-6 sm:w-8 sm:h-8 text-golden-coin`
- `font-milky text-2xl sm:text-3xl md:text-4xl text-teddy-brown leading-tight mb-3`
- `font-amble text-voxel-text/80 text-sm sm:text-base leading-snug`
- `space-y-5 sm:space-y-6`
- `border-4 border-sky-blue h-14 sm:h-16 text-center font-milky text-lg sm:text-xl rounded-xl focus:ring-4 focus:ring-sky-blue/30 focus:border-sky-blue transition-all`
- `absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-sky-blue w-5 h-5 sm:w-6 sm:h-6 pointer-events-none opacity-70`
- `absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-golden-coin w-5 h-5 sm:w-6 sm:h-6 pointer-events-none opacity-80`
- `flex flex-col gap-3 sm:gap-4 pt-2`
- `w-full font-milky text-lg sm:text-xl h-14 sm:h-16 bg-gradient-to-b from-golden-coin to-yellow-500 text-teddy-brown border-4 border-teddy-brown rounded-xl transition-all active:translate-y-1 shadow-[0_6px_0_#63340b] hover:shadow-[0_8px_0_#63340b] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none overflow-hidden relative group`
- `w-full font-amble text-xs sm:text-sm font-bold text-white bg-[#0095da] hover:bg-[#0081bc] border-3 border-white/30 rounded-lg px-3 py-2.5 transition-all shadow-[0_4px_0_#0056b3] hover:shadow-[0_6px_0_#0056b3] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_#0056b3] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2`
- `text-center mt-6 sm:mt-8`
- `font-amble text-xs sm:text-sm text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`

## Textos del Componente

A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<div>**: {/_ Overlay de profundidad _/} {/_ Partículas de "Polvo de Estrellas/Pintura" _/} {/_ Contenedor principal responsive _/}
- **<div>**: {[...Array(8)].map((\_, i) => ( <motion.div key={i} className="absolute text-xl sm:text-2xl" style={{ left: `${10 + i * 12}%` }} animate={{ y: [0, -120, -20], x: [0, Math.sin(i) * 30, Math.cos(i) * 20], opacity: [0, 0.8, 0], scale: [0.5, 1, 0.8], rotate: [0, 180, 360], }} transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.6, }} > {i % 3 === 0 ? '🏀' : i % 3 === 1 ? '🎨' : '⭐'} </motion.div> ))}
- **<motion.div>**: {i % 3 === 0 ? '🏀' : i % 3 === 1 ? '🎨' : '⭐'}
- **<Container>**: {/_ SHICKA - SIEMPRE VISIBLE ARRIBA (mobile first) _/} {/_ Layout Desktop: Shicka izquierda, Tarjeta derecha _/} {/_ TARJETA DE REGISTRO - Mobile (debajo de Shicka) _/} {/_ Footer decorativo _/}
- **<div>**: {/_ Globo de texto - Posición fija y visible _/} {/_ Personaje Shicka _/}
- **<motion.div>**: {/_ Puntero del globo _/}
- **<p>**: {shickaPhrase}
- **<motion.div>**: {/_ Aura _/} {/_ Etiqueta _/}
- **<div>**: ✦ GUÍA ALIADA ✦
- **<div>**: {/_ IZQUIERDA: SHICKA _/} {/_ DERECHA: TARJETA DE REGISTRO _/}
- **<div>**: {/_ Globo de texto - Posición visible _/} {/_ Personaje Shicka _/}
- **<motion.div>**: {/_ Puntero del globo (abajo) _/}
- **<p>**: {shickaPhrase}
- **<motion.div>**: {/_ Aura _/} {/_ Etiqueta _/}
- **<div>**: ✦ GUÍA ALIADA ✦
- **<motion.div>**: {/_ Franja decorativa superior _/}
- **<h2>**: {content.title}
- **<p>**: {content.instructions}
- **<AnimatePresence>**: {playerName.trim() && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex items-center justify-center gap-2 text-sm" > <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }}> <Key className="w-4 h-4 text-golden-coin" /> </motion.div> <span className="font-amble text-golden-coin font-semibold"> ¡Nombre desbloqueado! </span> </motion.div> )}
- **<span>**: ¡Nombre desbloqueado!
- **<span>**: {isSubmitting ? '🎵 Cargando...' : '🎮 ¡Entrar al Arcade World!'}
- **<span>**: 🗺️
- **<span>**: Saltar al mapa y ver coordenadas
- **<span>**: →
- **<motion.div>**: {/_ Franja decorativa superior _/}
- **<h2>**: {content.title}
- **<p>**: {content.instructions}
- **<AnimatePresence>**: {playerName.trim() && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex items-center justify-center gap-2 text-sm" > <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }}> <Key className="w-4 h-4 text-golden-coin" /> </motion.div> <span className="font-amble text-golden-coin font-semibold"> ¡Nombre desbloqueado! </span> </motion.div> )}
- **<span>**: ¡Nombre desbloqueado!
- **<span>**: {isSubmitting ? '🎵 Cargando...' : '🎮 ¡Entrar al Arcade World!'}
- **<span>**: 🗺️
- **<span>**: Saltar al mapa y ver coordenadas
- **<span>**: →
- **<p>**: 🏀 El equipo de Facu te espera...

## Contenido Completo del Archivo

```tsx
"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Palette, Trophy, Key, Heart, Star } from "lucide-react";
import { useBreakpoint } from "@/hooks/use-mobile";

type RegisterScreenProps = {
  onPlayArcade: (name: string) => void;
  onSkipArcade: (name: string) => void;
};

// Frases de Shicka según contexto
const SHICKA_PHRASES = {
  welcome:
    "¡Hola! Soy Shicka, tu guía del Reino. ¡Únete al equipo de Facu para salvar la fiesta! 🎨",
  idle: [
    "¿Estás listo para la aventura? 🏀",
    "¡Facu te necesita en su equipo! ⭐",
    "¡Vamos, escribe tu nombre! 🎮",
  ],
  typing: "¡Eso! ¡Escribe tu nombre de jugador! ✍️",
  nameEntered: (name: string) => `¡Genial ${name}! ¡Bienvenido al equipo! 🎉`,
  clicked: [
    "¡Jeje! ¡Eso cosquillea! 😄",
    "¡Aquí estoy para ayudarte! 💪",
    "¡Vamos a salvar la fiesta! 🎈",
  ],
};

// Sonido de clic estilo videojuego
function playClickSound() {
  try {
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1046.5, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {
    console.debug("Audio no disponible:", e);
  }
}

// Sonido de hover suave
function playHoverSound() {
  try {
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {
    // Silenciar
  }
}

export function RegisterScreen({
  onPlayArcade,
  onSkipArcade,
}: RegisterScreenProps) {
  const [playerName, setPlayerName] = useState("");
  const [isShickaHovered, setIsShickaHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shickaPhrase, setShickaPhrase] = useState(SHICKA_PHRASES.welcome);
  const [clickCount, setClickCount] = useState(0);
  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === "mobile";
  const isTablet = breakpoint === "tablet";
  const isDesktop = breakpoint === "desktop";

  // Cambiar frase de Shicka según contexto del input
  useEffect(() => {
    if (playerName.trim().length === 0) {
      setShickaPhrase(SHICKA_PHRASES.welcome);
    } else if (playerName.trim().length < 3) {
      setShickaPhrase(SHICKA_PHRASES.typing);
    } else {
      setShickaPhrase(SHICKA_PHRASES.nameEntered(playerName.trim()));
    }
  }, [playerName]);

  // Frases idle aleatorias cada 8 segundos si no hay interacción
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerName.trim().length === 0) {
        const randomPhrase =
          SHICKA_PHRASES.idle[
            Math.floor(Math.random() * SHICKA_PHRASES.idle.length)
          ];
        setShickaPhrase(randomPhrase);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [playerName]);

  const handlePlay = useCallback(() => {
    if (!playerName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    playClickSound();
    setShickaPhrase(`¡${playerName.trim()} está listo para la aventura! 🚀`);

    setTimeout(() => {
      onPlayArcade(playerName.trim());
      setIsSubmitting(false);
    }, 200);
  }, [playerName, onPlayArcade, isSubmitting]);

  const handleSkip = useCallback(() => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    playClickSound();
    setShickaPhrase("¡No te preocupes, también puedes ver el mapa! 🗺️");

    setTimeout(() => {
      onSkipArcade(playerName.trim() || "Invitado");
      setIsSubmitting(false);
    }, 200);
  }, [playerName, onSkipArcade, isSubmitting]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && playerName.trim()) {
        handlePlay();
      }
    },
    [playerName, handlePlay],
  );

  const handleShickaClick = useCallback(() => {
    playClickSound();
    setIsShickaHovered(true);
    setClickCount((prev) => prev + 1);

    const randomPhrase =
      SHICKA_PHRASES.clicked[
        Math.floor(Math.random() * SHICKA_PHRASES.clicked.length)
      ];
    setShickaPhrase(randomPhrase);

    setTimeout(() => setIsShickaHovered(false), 600);
  }, []);

  const content = {
    title: "¡Registro de Súper Aliado! 🏀",
    instructions:
      "Estás a un paso de entrar a la cancha. ¡Ingresa tu nombre de jugador para desbloquear tu equipo de arte y básquet!",
    placeholder: "Tu nombre de jugador...",
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/mundos/bear_village/Beemothepdesertentrancearea.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay de profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-0" />

      {/* Partículas de "Polvo de Estrellas/Pintura" */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xl sm:text-2xl"
            style={{ left: `${10 + i * 12}%` }}
            animate={{
              y: [0, -120, -20],
              x: [0, Math.sin(i) * 30, Math.cos(i) * 20],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            {i % 3 === 0 ? "🏀" : i % 3 === 1 ? "🎨" : "⭐"}
          </motion.div>
        ))}
      </div>

      {/* Contenedor principal responsive */}
      <Container size="lg" spacing="lg">
        {/* SHICKA - SIEMPRE VISIBLE ARRIBA (mobile first) */}
        <div className="flex flex-col items-center mb-6 md:mb-0 md:hidden order-1">
          {/* Globo de texto - Posición fija y visible */}
          <motion.div
            key={shickaPhrase}
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="relative bg-white border-4 border-sky-blue px-4 py-3 rounded-2xl shadow-xl mb-4 w-64 sm:w-72 z-30"
          >
            <p className="font-body text-xs sm:text-sm text-teddy-brown font-semibold text-center leading-tight">
              {shickaPhrase}
            </p>
            {/* Puntero del globo */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-sky-blue border-r-[10px] border-r-transparent" />
          </motion.div>

          {/* Personaje Shicka */}
          <motion.div
            className="relative cursor-pointer"
            animate={
              isShickaHovered
                ? {
                    y: [0, -25, -15, -25, 0],
                  }
                : {
                    y: [0, -12, 0],
                  }
            }
            transition={
              isShickaHovered
                ? {
                    duration: 0.6,
                    ease: "easeOut",
                  }
                : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            onClick={handleShickaClick}
            onHoverStart={() => {
              setIsShickaHovered(true);
              playHoverSound();
            }}
            onHoverEnd={() => setIsShickaHovered(false)}
          >
            {/* Aura */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-sky-blue/25 blur-2xl" />
            </motion.div>

            <Image
              src="/personajes/Shicka_render_.png"
              alt="Shicka la guía aliada"
              width={140}
              height={140}
              className="relative z-10 drop-shadow-[0_10px_20px_rgba(135,206,235,0.6)] transition-transform duration-300"
              priority
            />

            {/* Etiqueta */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-blue to-blue-400 text-white font-arcade text-[10px] px-3 py-1 rounded-full border-2 border-white shadow-lg whitespace-nowrap z-10">
              ✦ GUÍA ALIADA ✦
            </div>
          </motion.div>
        </div>

        {/* Layout Desktop: Shicka izquierda, Tarjeta derecha */}
        <div className="hidden md:flex flex-row items-center justify-center gap-12 lg:gap-16 order-1">
          {/* IZQUIERDA: SHICKA */}
          <div className="flex flex-col items-center relative">
            {/* Globo de texto - Posición visible */}
            <motion.div
              key={shickaPhrase}
              initial={{ scale: 0.8, opacity: 0, x: -20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="relative bg-white border-4 border-sky-blue px-5 py-4 rounded-2xl shadow-xl mb-6 w-72 z-30"
            >
              <p className="font-body text-sm text-teddy-brown font-semibold text-center leading-tight">
                {shickaPhrase}
              </p>
              {/* Puntero del globo (abajo) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-sky-blue border-r-[10px] border-r-transparent" />
            </motion.div>

            {/* Personaje Shicka */}
            <motion.div
              className="relative cursor-pointer"
              animate={
                isShickaHovered
                  ? {
                      y: [0, -25, -15, -25, 0],
                    }
                  : {
                      y: [0, -12, 0],
                    }
              }
              transition={
                isShickaHovered
                  ? {
                      duration: 0.6,
                      ease: "easeOut",
                    }
                  : {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              onClick={handleShickaClick}
              onHoverStart={() => {
                setIsShickaHovered(true);
                playHoverSound();
              }}
              onHoverEnd={() => setIsShickaHovered(false)}
            >
              {/* Aura */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-60 h-60 rounded-full bg-sky-blue/25 blur-2xl" />
              </motion.div>

              <Image
                src="/personajes/Shicka_render_.png"
                alt="Shicka la guía aliada"
                width={250}
                height={250}
                className="relative z-10 drop-shadow-[0_10px_20px_rgba(135,206,235,0.6)] transition-transform duration-300"
                priority
              />

              {/* Etiqueta */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-blue to-blue-400 text-white font-arcade text-xs px-4 py-1.5 rounded-full border-3 border-white shadow-lg whitespace-nowrap z-10">
                ✦ GUÍA ALIADA ✦
              </div>
            </motion.div>
          </div>

          {/* DERECHA: TARJETA DE REGISTRO */}
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-md bg-white/95 backdrop-blur-sm border-8 border-teddy-brown rounded-3xl p-8 shadow-[10px_10px_0px_#63340b] relative"
          >
            {/* Franja decorativa superior */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-golden-coin via-grass-green to-golden-coin rounded-t-3xl" />

            <div className="text-center mb-8 pt-2">
              <div className="flex items-center justify-center gap-2 mb-3">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Palette className="w-8 h-8 text-sky-blue" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Trophy className="w-8 h-8 text-golden-coin" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, -15, 15, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Palette className="w-8 h-8 text-sky-blue" />
                </motion.div>
              </div>

              <h2 className="font-milky text-4xl text-teddy-brown leading-tight mb-3">
                {content.title}
              </h2>
              <p className="font-amble text-voxel-text/80 text-base leading-snug">
                {content.instructions}
              </p>
            </div>

            <div className="space-y-6">
              <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                <Input
                  type="text"
                  placeholder={content.placeholder}
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="border-4 border-sky-blue h-16 text-center font-milky text-xl rounded-xl focus:ring-4 focus:ring-sky-blue/30 focus:border-sky-blue transition-all"
                />
                <Palette className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-blue w-6 h-6 pointer-events-none opacity-70" />
                <Trophy className="absolute right-4 top-1/2 -translate-y-1/2 text-golden-coin w-6 h-6 pointer-events-none opacity-80" />
              </motion.div>

              <AnimatePresence>
                {playerName.trim() && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center justify-center gap-2 text-sm"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Key className="w-4 h-4 text-golden-coin" />
                    </motion.div>
                    <span className="font-amble text-golden-coin font-semibold">
                      ¡Nombre desbloqueado!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-4 pt-2">
                <Button
                  onClick={handlePlay}
                  disabled={!playerName.trim() || isSubmitting}
                  variant="3d-gold"
                  size="game-xl"
                  className="w-full overflow-hidden relative group font-milky"
                  onMouseEnter={() => playHoverSound()}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10 font-bold">
                    {isSubmitting
                      ? "🎵 Cargando..."
                      : "🎮 ¡Entrar al Arcade World!"}
                  </span>
                </Button>

                <Button
                  onClick={handleSkip}
                  disabled={isSubmitting}
                  variant="3d-blue"
                  size="game-md"
                  className="w-full font-amble"
                  onMouseEnter={() => playHoverSound()}
                >
                  <span>🗺️</span>
                  <span>Saltar al mapa y ver coordenadas</span>
                  <span>→</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TARJETA DE REGISTRO - Mobile (debajo de Shicka) */}
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-md bg-white/95 backdrop-blur-sm border-6 sm:border-8 border-teddy-brown rounded-3xl p-6 sm:p-8 shadow-[10px_10px_0px_#63340b] relative md:hidden order-2"
        >
          {/* Franja decorativa superior */}
          <div className="absolute top-0 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-golden-coin via-grass-green to-golden-coin rounded-t-3xl" />

          <div className="text-center mb-6 sm:mb-8 pt-2">
            <div className="flex items-center justify-center gap-2 mb-3">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-sky-blue" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-golden-coin" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-sky-blue" />
              </motion.div>
            </div>

            <h2 className="font-milky text-2xl sm:text-3xl md:text-4xl text-teddy-brown leading-tight mb-3">
              {content.title}
            </h2>
            <p className="font-amble text-voxel-text/80 text-sm sm:text-base leading-snug">
              {content.instructions}
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
              <Input
                type="text"
                placeholder={content.placeholder}
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-4 border-sky-blue h-14 sm:h-16 text-center font-milky text-lg sm:text-xl rounded-xl focus:ring-4 focus:ring-sky-blue/30 focus:border-sky-blue transition-all"
              />
              <Palette className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-sky-blue w-5 h-5 sm:w-6 sm:h-6 pointer-events-none opacity-70" />
              <Trophy className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-golden-coin w-5 h-5 sm:w-6 sm:h-6 pointer-events-none opacity-80" />
            </motion.div>

            <AnimatePresence>
              {playerName.trim() && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center justify-center gap-2 text-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Key className="w-4 h-4 text-golden-coin" />
                  </motion.div>
                  <span className="font-amble text-golden-coin font-semibold">
                    ¡Nombre desbloqueado!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-3 sm:gap-4 pt-2">
              <motion.button
                onClick={handlePlay}
                disabled={!playerName.trim() || isSubmitting}
                whileHover={{ scale: playerName.trim() ? 1.03 : 1 }}
                whileTap={{ scale: playerName.trim() ? 0.97 : 1 }}
                className="w-full font-milky text-lg sm:text-xl h-14 sm:h-16 bg-gradient-to-b from-golden-coin to-yellow-500 text-teddy-brown border-4 border-teddy-brown rounded-xl transition-all active:translate-y-1 shadow-[0_6px_0_#63340b] hover:shadow-[0_8px_0_#63340b] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none overflow-hidden relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10 font-bold">
                  {isSubmitting
                    ? "🎵 Cargando..."
                    : "🎮 ¡Entrar al Arcade World!"}
                </span>
              </motion.button>

              <motion.button
                onClick={handleSkip}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                className="w-full font-amble text-xs sm:text-sm font-bold text-white bg-[#0095da] hover:bg-[#0081bc] border-3 border-white/30 rounded-lg px-3 py-2.5 transition-all shadow-[0_4px_0_#0056b3] hover:shadow-[0_6px_0_#0056b3] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_#0056b3] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
              >
                <span>🗺️</span>
                <span>Saltar al mapa y ver coordenadas</span>
                <span>→</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer decorativo */}
        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <p className="font-amble text-xs sm:text-sm text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            🏀 El equipo de Facu te espera...
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
```
