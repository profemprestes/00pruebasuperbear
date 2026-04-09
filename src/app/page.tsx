"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { MainWorld } from "@/components/main-world";
import { RsvpForm } from "@/components/rsvp-form";
import { CompletionScreen } from "@/components/completion-screen";
import { PresentationScreen } from "@/components/presentation-screen";
import { IntroVideoScreen } from "@/components/intro-video-screen";

type Screen = 'loading' | 'introVideo' | 'presentation' | 'mission' | 'rsvp' | 'completed';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('loading');
  
  const handleAllKeysCollected = () => {
    setTimeout(() => setCurrentScreen('rsvp'), 500);
  };

  const showMainContent = currentScreen === 'presentation' || currentScreen === 'mission';

  return (
    <div className="min-h-screen overflow-hidden relative">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        src="/fondo_web.mp4" 
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] animate-in fade-in-0 duration-1000 brightness-[.85] saturate-[1.2]"
      />
      
      {currentScreen === 'loading' && (
        <LoadingScreen onStart={() => setCurrentScreen('introVideo')} />
      )}
      
      {currentScreen === 'introVideo' && (
        <IntroVideoScreen onVideoEnd={() => setCurrentScreen('presentation')} />
      )}

      {/* Main content container */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${showMainContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {currentScreen === 'presentation' && <PresentationScreen onNext={() => setCurrentScreen('mission')} />}
          {currentScreen === 'mission' && <MainWorld onAllKeysCollected={handleAllKeysCollected} />}
      </div>
      
      {currentScreen === 'rsvp' && (
        <RsvpForm onRsvpSubmit={() => setCurrentScreen('completed')} />
      )}
      
      {currentScreen === 'completed' && (
        <CompletionScreen />
      )}
    </div>
  );
}
