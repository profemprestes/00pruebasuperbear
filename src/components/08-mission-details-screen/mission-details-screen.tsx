'use client';

import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock, User, CheckCircle2, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer } from '@/components/16-responsive-container';

type MissionDetailsScreenProps = {
  playerName: string;
  onNext: () => void;
};

export function MissionDetailsScreen({ playerName, onNext }: MissionDetailsScreenProps) {
  return (
    <ResponsiveContainer>
      <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-sky-blue py-10 px-4">
        
        <motion.div
          className="w-full max-w-2xl bg-white/95 backdrop-blur-sm border-8 border-teddy-brown rounded-3xl shadow-[12px_12px_0px_#4E342E] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-teddy-brown p-6 text-center border-b-4 border-[#4E342E]">
            <h1 className="font-milky text-3xl md:text-4xl text-golden-coin">
              Misión Confirmada: Facu Nivel 9 🛡️
            </h1>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 space-y-8">
            <p className="font-body text-xl text-gray-700 font-bold text-center">
              Toda la info para el escuadrón, {playerName}:
            </p>

            {/* Info List */}
            <div className="space-y-4 font-body text-lg text-[#4E342E] font-bold">
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl border-4 border-gray-200">
                <User className="text-sky-blue w-8 h-8" />
                <span>🎂 Festejado: Facu (Nivel 9)</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl border-4 border-gray-200">
                <MapPin className="text-red-500 w-8 h-8" />
                <span>📍 Lugar: KBOOM (Av. Italia 3421)</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl border-4 border-gray-200">
                <CalendarDays className="text-golden-coin w-8 h-8" />
                <span>📅 Fecha: Domingo 24 de Mayo</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl border-4 border-gray-200">
                <Clock className="text-grass-green w-8 h-8" />
                <span>⏰ Hora: 18:30 a 21:00 hs</span>
              </div>
            </div>

            {/* Alert/Warning */}
            <motion.div
              className="bg-red-100 border-4 border-red-500 p-4 rounded-2xl flex items-start gap-4 shadow-[0_4px_0_#991b1b]"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="text-red-600 text-2xl mt-1">⚠️</div>
              <p className="font-body text-red-900 font-bold">
                Importante: Traer medias y ropa cómoda (Obligatorio para los juegos).
              </p>
            </motion.div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => window.open('https://maps.google.com/?q=KBOOM+Salto', '_blank')}
                className="flex-1 btn-3d-blue h-14 font-milky text-lg shadow-[0_6px_0_#4E342E]"
              >
                📍 Ver en Mapa (GPS)
              </Button>
              <Button
                onClick={() => {
                  const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Cumple+Facu+Nivel+9&dates=20250524T213000Z/20250525T000000Z&details=Cumple+de+Facu+en+KBOOM.+Llevar+medias.&location=KBOOM,+Av.+Italia+3421';
                  window.open(url, '_blank');
                }}
                className="flex-1 btn-3d-gold h-14 font-milky text-lg shadow-[0_6px_0_#4E342E]"
              >
                📅 Agendar en Calendar
              </Button>
            </div>

            <Button
                onClick={onNext}
                className="w-full btn-3d-green h-14 font-milky text-lg mt-4 shadow-[0_6px_0_#2D6400]"
              >
                Siguiente ➔
            </Button>
          </div>
        </motion.div>

      </div>
    </ResponsiveContainer>
  );
}
