"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

type LoadingScreenProps = {
  onStart: () => void;
};

export function LoadingScreen({ onStart }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onStart, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 40ms * 100 = 4000ms = 4 seconds

    return () => clearInterval(timer);
  }, [onStart]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cloud-white transition-opacity duration-500 p-4">
      <div className="relative flex flex-col items-center justify-center w-full">
        <Image 
          src="/titulo_super_facu_1.png"
          alt="Super Facu Aventura"
          width={500}
          height={250}
          className="motion-safe:animate-float w-full max-w-sm sm:max-w-md md:max-w-lg transition-transform duration-300 ease-in-out hover:scale-105"
          priority
        />
      </div>

      <div className="w-64 mt-8 h-12">
        <>
          <Progress value={progress} className="h-6 border-4 border-teddy-brown bg-white" />
          <p className="text-center mt-2 font-bold text-teddy-brown">{progress}%</p>
        </>
      </div>
    </div>
  );
}
