"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { MainWorld } from "@/components/main-world";
import { PresentationScreen } from "@/components/presentation-screen";
import { IntroVideoScreen } from "@/components/intro-video-screen";
import { InventoryScreen } from "@/components/inventory-screen";
import { BioScreen } from "@/components/bio-screen";

type Screen = 'loading' | 'introVideo' | 'presentation' | 'mission' | 'likes' | 'bio';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('loading');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'loading':
        return <LoadingScreen onStart={() => setCurrentScreen('introVideo')} />;
      case 'introVideo':
        return <IntroVideoScreen onVideoEnd={() => setCurrentScreen('presentation')} />;
      case 'presentation':
        return <PresentationScreen onNext={() => setCurrentScreen('mission')} />;
      case 'mission':
        return <MainWorld onMissionAccept={() => setCurrentScreen('likes')} />;
      case 'likes':
        return <InventoryScreen onNext={() => setCurrentScreen('bio')} />;
      case 'bio':
        return <BioScreen onRestart={() => setCurrentScreen('presentation')} />;
      default:
        return <LoadingScreen onStart={() => setCurrentScreen('introVideo')} />;
    }
  };

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
      
      <div className="absolute inset-0 z-10">
        {renderScreen()}
      </div>
    </div>
  );
}
