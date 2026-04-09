"use client";

import { useState } from "react";
import { PasswordScreen } from "@/components/password-screen";
import { LoadingScreen } from "@/components/loading-screen";
import { PresentationScreen } from "@/components/presentation-screen";
import { IntroVideoScreen } from "@/components/intro-video-screen";
import { RegisterScreen } from "@/components/register-screen";
import { MinigameScreen } from "@/components/minigame-screen";
import { MissionDetailsScreen } from "@/components/mission-details-screen";
import { BioBookScreen } from "@/components/bio-book-screen";

type Screen = 'password' | 'loading' | 'introVideo' | 'presentation' | 'register' | 'minigame' | 'missionDetails' | 'bioBook';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('password');
  const [playerName, setPlayerName] = useState('');

  const handleRegister = (name: string) => {
    setPlayerName(name);
    setCurrentScreen('minigame');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'password':
        return <PasswordScreen onCorrectPassword={() => setCurrentScreen('loading')} />;
      case 'loading':
        return <LoadingScreen onStart={() => setCurrentScreen('introVideo')} />;
      case 'introVideo':
        return <IntroVideoScreen onVideoEnd={() => setCurrentScreen('presentation')} />;
      case 'presentation':
        return <PresentationScreen onNext={() => setCurrentScreen('register')} />;
      case 'register':
        return <RegisterScreen onRegister={handleRegister} />;
      case 'minigame':
        return <MinigameScreen onGameEnd={() => setCurrentScreen('missionDetails')} />;
      case 'missionDetails':
        return <MissionDetailsScreen playerName={playerName} onNext={() => setCurrentScreen('bioBook')} />;
      case 'bioBook':
        return <BioBookScreen onRestart={() => setCurrentScreen('presentation')} />;
      default:
        return <PasswordScreen onCorrectPassword={() => setCurrentScreen('loading')} />;
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
