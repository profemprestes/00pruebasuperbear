'use client';

import { useState, useEffect, useCallback } from 'react';

type CountdownTimerProps = {
  targetDate: string;
};

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  // Initialize with an empty object to ensure server and client initial renders match.
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // This effect runs only on the client, after hydration.
    // Set the initial time, and then update it every second.
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // If timeLeft is empty (which it will be on the server and initial client render),
  // we can render a placeholder to prevent layout shift.
  if (!Object.keys(timeLeft).length) {
    // We check against the static targetDate string to avoid using new Date() here.
    // A more robust solution might be needed if the targetDate itself could be in the past.
    if (new Date(targetDate).getTime() > Date.now()) {
      return (
        <div className="bg-black/50 border-2 border-golden-coin rounded-xl p-4 sm:p-6 shadow-lg min-h-[126px] flex items-center justify-center">
              <span className="font-headline text-xl text-white/50 animate-pulse">Calculando tiempo...</span>
        </div>
      );
    }
  }

  const timerComponents: JSX.Element[] = [];

  Object.entries(timeLeft).forEach(([interval, value]) => {
    if (value === undefined) return;
    
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="font-headline text-4xl sm:text-6xl text-golden-coin" style={{ textShadow: '2px 2px 0px hsl(var(--teddy-brown))' }}>
          {String(value).padStart(2, '0')}
        </span>
        <span className="font-body text-sm sm:text-lg uppercase text-cloud-white">{interval}</span>
      </div>
    );
  });

  return (
    <div className="bg-black/50 border-2 border-golden-coin rounded-xl p-4 sm:p-6 shadow-lg min-h-[126px] flex items-center justify-center">
      <div className="flex justify-around gap-4 w-full">
        {timerComponents.length ? timerComponents : <span className="font-headline text-3xl text-grass-green">¡La fiesta ha comenzado!</span>}
      </div>
    </div>
  );
}
