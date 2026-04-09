"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { MainWorld } from "@/components/main-world";
import { RsvpForm } from "@/components/rsvp-form";
import { CompletionScreen } from "@/components/completion-screen";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [showRsvp, setShowRsvp] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const handleAllKeysCollected = () => {
    setTimeout(() => setShowRsvp(true), 500);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        src="/fondo_web.mp4" 
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
      />
      <div className={cn(
          "absolute inset-0 z-20 transition-opacity duration-500",
          isStarted ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        <LoadingScreen 
          onLoadComplete={() => setIsLoaded(true)} 
          onStart={() => {
            if (isLoaded) setIsStarted(true);
          }} 
        />
      </div>

      <div className={cn(
        "absolute inset-0 z-10 transition-transform duration-[1200ms] ease-in-out",
        isStarted ? 'translate-y-0' : 'translate-y-full'
      )}>
        <div className="h-full w-full overflow-y-auto">
          <MainWorld onAllKeysCollected={handleAllKeysCollected} />
        </div>
      </div>
      
      {showRsvp && !isCompleted && (
        <RsvpForm onRsvpSubmit={() => setIsCompleted(true)} />
      )}
      
      {isCompleted && (
        <CompletionScreen />
      )}
    </div>
  );
}
