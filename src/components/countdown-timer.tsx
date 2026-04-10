'use client';

import { useState, useEffect, useCallback } from 'react';

type CountdownTimerProps = {
  targetDate: string;
};

// Define a specific type for the time left, or null if time is up.
type TimeLeft = {
  días: number;
  horas: number;
  minutos: number;
  segundos: number;
} | null;

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      return {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    // Return null when the countdown is over.
    return null;
  }, [targetDate]);

  // Initialize state as `undefined` to detect the initial server/client render.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | undefined>(undefined);

  useEffect(() => {
    // This effect runs only on the client, after hydration.
    // Set the initial time, and then update it every second.
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount.
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // On the server and during initial client render, show a placeholder.
  if (typeof timeLeft === 'undefined') {
    return (
      <div className="bg-black/50 border-2 border-golden-coin rounded-xl p-4 sm:p-6 shadow-lg min-h-[126px] flex items-center justify-center">
        <span className="font-headline text-xl text-white/50 animate-pulse">Calculando tiempo...</span>
      </div>
    );
  }

  // After hydration, if time is up (timeLeft is null), show the "party started" message.
  if (timeLeft === null) {
    return (
      <div className="bg-black/50 border-2 border-golden-coin rounded-xl p-4 sm:p-6 shadow-lg min-h-[126px] flex items-center justify-center">
        <div className="flex justify-around gap-4 w-full">
          <span className="font-headline text-3xl text-grass-green">¡La fiesta ha comenzado!</span>
        </div>
      </div>
    );
  }
  
  // If time is left, render the countdown.
  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div key={interval} className="flex flex-col items-center">
      <span className="font-headline text-4xl sm:text-6xl text-golden-coin" style={{ textShadow: '2px 2px 0px hsl(var(--teddy-brown))' }}>
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-body text-sm sm:text-lg uppercase text-cloud-white">{interval}</span>
    </div>
  ));

  return (
    <div className="bg-black/50 border-2 border-golden-coin rounded-xl p-4 sm:p-6 shadow-lg min-h-[126px] flex items-center justify-center">
      <div className="flex justify-around gap-4 w-full">
        {timerComponents}
      </div>
    </div>
  );
}
