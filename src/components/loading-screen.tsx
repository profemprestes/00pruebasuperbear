"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

type LoadingScreenProps = {
  onStart: () => void;
};

export function LoadingScreen({ onStart }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setLoadingComplete(true);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 40ms * 100 = 4000ms = 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cloud-white transition-opacity duration-500 p-4">
      <div className="relative flex flex-col items-center justify-center w-full">
        <Image 
          src="/titulo_super_facu_1.png"
          alt="Super Facu Aventura"
          width={500}
          height={250}
          className="animate-float w-full max-w-sm sm:max-w-md md:max-w-lg"
          priority
        />
      </div>

      <div className="w-64 mt-8 h-12">
        {!loadingComplete && (
          <>
            <Progress value={progress} className="h-6 border-4 border-teddy-brown bg-white" />
            <p className="text-center mt-2 font-bold text-teddy-brown">{progress}%</p>
          </>
        )}
      </div>
      
      <div className="h-28 mt-4 flex items-center justify-center">
        {loadingComplete && (
          <div className="relative animate-in fade-in-0 zoom-in-95">
            <Button
              onClick={onStart}
              className="font-milky bg-grass-green text-white text-3xl sm:text-4xl h-auto px-12 py-4 border-4 border-foreground shadow-3d hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all active:shadow-none active:translate-x-0 active:translate-y-0"
              size="lg"
            >
              ¡PULSA START!
            </Button>
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-grass-green animate-subtle-float">
                <ArrowDown className="w-8 h-8" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
