'use client';

import { useState, useEffect, useCallback } from 'react';

type CountdownTimerProps = {
  targetDate: string;
};

type TimeLeft = {
  días: number;
  horas: number;
  minutos: number;
  segundos: number;
} | null;

const UNIT_LABELS: Record<string, string> = {
  días: 'DÍAS',
  horas: 'HRS',
  minutos: 'MIN',
  segundos: 'SEG',
};

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        días:     Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas:    Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos:  Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // SSR placeholder
  if (typeof timeLeft === 'undefined') {
    return (
      <div className="flex items-center justify-center gap-1 sm:gap-2 py-4" aria-label="Cuenta regresiva cargando...">
        {['DÍAS', 'HRS', 'MIN', 'SEG'].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className="bg-black/70 border-2 border-golden-coin rounded-lg flex items-center justify-center w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 lg:w-24 lg:h-16"
            >
              <span className="font-impact text-golden-coin/40 text-xl sm:text-2xl md:text-3xl">--</span>
            </div>
            <span className="font-arcade text-cloud-white/60 text-[8px] sm:text-[10px] md:text-xs mt-1 tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Party started!
  if (timeLeft === null) {
    return (
      <div
        className="flex items-center justify-center rounded-xl border-4 border-grass-green px-4 py-3 sm:px-6 sm:py-4"
        style={{ boxShadow: '0 6px 0 #2E8B57, 0 0 20px rgba(124,252,0,0.4)' }}
      >
        <span className="font-milky text-lg sm:text-xl md:text-2xl text-grass-green motion-safe:animate-pulse">
          🎉 ¡La fiesta ha comenzado! 🎉
        </span>
      </div>
    );
  }

  const entries = Object.entries(timeLeft) as [string, number][];

  return (
    <div className="flex items-end justify-center gap-0.5 sm:gap-1">
      {entries.map(([unit, value], index) => (
        <div key={unit} className="flex items-end gap-0.5 sm:gap-1">
          {/* Time box */}
          <div className="flex flex-col items-center">
            <div
              className="flex items-center justify-center rounded-lg relative overflow-hidden
                w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 lg:w-24 lg:h-16"
              style={{
                background: 'rgba(0,0,0,0.75)',
                border: '2px solid #FFD700',
                boxShadow: '0 4px 0 #63340b, inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Inner shine */}
              <div
                className="absolute top-0 left-0 right-0 h-1/3 rounded-t-md"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)' }}
                aria-hidden="true"
              />
              <span
                className="font-impact text-golden-coin relative z-10
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
              >
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className="font-arcade text-cloud-white tracking-widest mt-0.5 sm:mt-1
              text-[7px] sm:text-[9px] md:text-xs">
              {UNIT_LABELS[unit] ?? unit.toUpperCase()}
            </span>
          </div>

          {/* Blinking separator (not after last) */}
          {index < entries.length - 1 && (
            <span
              className="font-impact text-golden-coin mb-3 sm:mb-4 md:mb-5 motion-safe:animate-blink
                text-lg sm:text-2xl md:text-3xl lg:text-4xl"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
              aria-hidden="true"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

