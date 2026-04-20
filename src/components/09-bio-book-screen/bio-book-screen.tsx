'use client';

import { Button } from '@/components/ui/button';
import { ResponsiveContainer } from '@/components/16-responsive-container';
import { motion } from 'framer-motion';

type BioBookScreenProps = {
  onRestart: () => void;
  facuLikes: string[];
  photo1: string | null;
  photo2: string | null;
};

export function BioBookScreen({ onRestart, facuLikes, photo1, photo2 }: BioBookScreenProps) {
  const defaultInventory = [
    { icon: '🏀', text: 'Cosas de Básquet' },
    { icon: '🐻', text: 'Juegos de SBA' },
    { icon: '🛠️', text: 'Herramientas para crear' },
    { icon: '🎮', text: 'Accesorios Gamer' }
  ];

  const inventoryItems = facuLikes && facuLikes.length > 0
    ? facuLikes.map(like => ({ text: like, icon: '⭐' }))
    : defaultInventory;

  return (
    <ResponsiveContainer>
      <div className="min-h-screen w-full bg-sky-blue flex flex-col items-center justify-center p-4">

        <motion.div
          className="w-full max-w-3xl bg-[#f4e4bc] border-8 border-teddy-brown rounded-3xl shadow-[12px_12px_0px_#4E342E] overflow-hidden p-6 md:p-10 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-milky text-4xl md:text-5xl text-teddy-brown drop-shadow-[0_4px_0_rgba(255,255,255,0.8)]">
              El Inventario de Facu 🎁
            </h1>
            <p className="font-body text-xl text-[#4E342E] font-bold mt-4">
              Para seguir subiendo de nivel, a Facu le copa equiparse con:
            </p>
          </div>

          {/* Grid de Inventario */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {inventoryItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="aspect-square bg-[#d9c49a] border-4 border-[#8D6E63] rounded-xl flex flex-col items-center justify-center p-4 shadow-inner"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl md:text-5xl mb-2 drop-shadow-md">{item.icon}</span>
                <span className="font-body text-xs md:text-sm text-center text-[#4E342E] font-bold leading-tight">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Main Reward */}
          <motion.div
            className="bg-golden-coin/30 border-4 border-golden-coin p-6 rounded-2xl text-center mb-8 shadow-[0_4px_0_#FFD600]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="font-milky text-2xl text-teddy-brown">
              ¡Igual, la mejor recompensa es que vengas a jugar! 🎉
            </p>
          </motion.div>

          <Button
            onClick={onRestart}
            className="w-full btn-3d-blue h-16 font-milky text-2xl shadow-[0_6px_0_#0056b3]"
          >
            Volver al Inicio ➔
          </Button>

        </motion.div>

      </div>
    </ResponsiveContainer>
  );
}
