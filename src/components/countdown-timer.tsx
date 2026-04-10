'use client';

import { useState, useEffect } from 'react';

type CountdownTimerProps = {
  targetDate: string;
};

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

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
    <div className="bg-black/50 border-2 border-golden-coin rounded-xl p-4 sm:p-6 shadow-lg">
      <div className="flex justify-around gap-4">
        {timerComponents.length ? timerComponents : <span className="font-headline text-3xl text-grass-green">¡La fiesta ha comenzado!</span>}
      </div>
    </div>
  );
}
