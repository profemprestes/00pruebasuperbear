'use client';

import { useState, useEffect, useCallback } from 'react';
import { useIsDesktop } from '@/hooks/use-media-query';

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
  const isDesktop = useIsDesktop();

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
      <div className="flex items-center justify-center gap-2 py-4">
        {['DÍAS', 'HRS', 'MIN', 'SEG'].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className="bg-black/70 border-2 border-golden-coin rounded-lg flex items-center justify-center"
              style={{ width: isDesktop ? 96 : 64, height: isDesktop ? 80 : 60 }}
            >
              <span className="font-impact text-golden-coin/40 text-3xl">--</span>
            </div>
            <span className="font-arcade text-cloud-white/60 text-xs mt-1 tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Party started!
  if (timeLeft === null) {
    return (
      <div
        className="flex items-center justify-center rounded-xl border-4 border-grass-green px-6 py-4"
        style={{ boxShadow: '0 6px 0 #2E8B57, 0 0 20px rgba(124,252,0,0.4)' }}
      >
        <span className="font-milky text-2xl text-grass-green motion-safe:animate-pulse">
          🎉 ¡La fiesta ha comenzado! 🎉
        </span>
      </div>
    );
  }

  const entries = Object.entries(timeLeft) as [string, number][];
  const boxSize = isDesktop
    ? { width: 96, height: 80, numSize: 'text-5xl', lblSize: 'text-xs' }
    : { width: 64, height: 56, numSize: 'text-3xl', lblSize: 'text-[10px]' };

  return (
    <div className="flex items-end justify-center gap-1">
      {entries.map(([unit, value], index) => (
        <div key={unit} className="flex items-end gap-1">
          {/* Time box */}
          <div className="flex flex-col items-center">
            <div
              className="flex items-center justify-center rounded-lg relative overflow-hidden"
              style={{
                width: boxSize.width,
                height: boxSize.height,
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
                className={`font-impact text-golden-coin relative z-10 ${boxSize.numSize}`}
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
              >
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className={`font-arcade text-cloud-white tracking-widest mt-1 ${boxSize.lblSize}`}>
              {UNIT_LABELS[unit] ?? unit.toUpperCase()}
            </span>
          </div>

          {/* Blinking separator (not after last) */}
          {index < entries.length - 1 && (
            <span
              className="font-impact text-golden-coin mb-5 motion-safe:animate-blink"
              style={{ fontSize: isDesktop ? '2.5rem' : '1.8rem', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
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
