# Detalle de Diseño y Textos: /app/src/components/15-coin-reward/coin-reward.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `{`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none ${className}`}`
- `absolute inset-0 bg-black/40 backdrop-blur-sm`
- `relative z-10 flex flex-col items-center gap-4`
- `w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-5xl sm:text-6xl`
- `font-milky text-3xl sm:text-4xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]`
- `font-arcade text-lg sm:text-xl text-golden-coin tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`
- `absolute text-2xl`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<AnimatePresence>**: {visible && ( <motion.div className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none ${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} > {/* Background dim */} <motion.div className="absolute inset-0 bg-black/40 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} /> {/* Coin animation */} <motion.div initial={{ scale: 0, rotate: 0 }} animate={{ scale: 1.2, rotate: 360 }} exit={{ scale: 1.5, opacity: 0, y: -100 }} transition={{ type: "spring", stiffness: 150, damping: 12 }} className="relative z-10 flex flex-col items-center gap-4" > {/* Coin icon */} <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-5xl sm:text-6xl" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500, #FFD700)", border: "6px solid #8B4513", boxShadow: "0 0 60px rgba(255,215,0,0.8), 0 8px 0 #63340b", }} > 🪙 </div> {/* Amount */} <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="font-milky text-3xl sm:text-4xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" > +{amount} </motion.div> {/* Label */} <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-arcade text-lg sm:text-xl text-golden-coin tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" > ¡RECOMPENSA DESBLOQUEADA! </motion.div> </motion.div> {/* Floating coins particles */} {Array.from({ length: 8 }).map((_, i) => ( <motion.div key={i} className="absolute text-2xl" initial={{ x: 0, y: 0, opacity: 1, scale: 0, }} animate={{ x: (Math.random() - 0.5) * 400, y: -200 - Math.random() * 300, opacity: [1, 1, 0], scale: [0, 1.2, 0.8], rotate: Math.random() * 720, }} transition={{ duration: 2, delay: i * 0.1, ease: "easeOut", }} > 🪙 </motion.div> ))} </motion.div> )}
- **<motion.div>**: {/* Background dim */} {/* Coin animation */} {/* Floating coins particles */} {Array.from({ length: 8 }).map((_, i) => ( <motion.div key={i} className="absolute text-2xl" initial={{ x: 0, y: 0, opacity: 1, scale: 0, }} animate={{ x: (Math.random() - 0.5) * 400, y: -200 - Math.random() * 300, opacity: [1, 1, 0], scale: [0, 1.2, 0.8], rotate: Math.random() * 720, }} transition={{ duration: 2, delay: i * 0.1, ease: "easeOut", }} > 🪙 </motion.div> ))}
- **<motion.div>**: {/* Coin icon */} {/* Amount */} {/* Label */}
- **<div>**: 🪙
- **<motion.div>**: +{amount}
- **<motion.div>**: ¡RECOMPENSA DESBLOQUEADA!
- **<motion.div>**: 🪙

## Contenido Completo del Archivo
```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CoinRewardProps {
  amount: number;
  onComplete?: () => void;
  className?: string;
}

export function CoinReward({ amount, onComplete, className }: CoinRewardProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background dim */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Coin animation */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1.2, rotate: 360 }}
            exit={{ scale: 1.5, opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            {/* Coin icon */}
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-5xl sm:text-6xl"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500, #FFD700)",
                border: "6px solid #8B4513",
                boxShadow: "0 0 60px rgba(255,215,0,0.8), 0 8px 0 #63340b",
              }}
            >
              🪙
            </div>

            {/* Amount */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="font-milky text-3xl sm:text-4xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              +{amount}
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-arcade text-lg sm:text-xl text-golden-coin tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              ¡RECOMPENSA DESBLOQUEADA!
            </motion.div>
          </motion.div>

          {/* Floating coins particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 400,
                y: -200 - Math.random() * 300,
                opacity: [1, 1, 0],
                scale: [0, 1.2, 0.8],
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              🪙
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}


```
