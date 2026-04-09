"use client";

import { useState } from "react";
import { PasswordScreen } from "@/components/password-screen";
import { LoadingScreen } from "@/components/loading-screen";
import { PresentationScreen } from "@/components/presentation-screen";
import { IntroVideoScreen } from "@/components/intro-video-screen";
import { RegisterScreen } from "@/components/register-screen";
import { ArcadeWorldScreen } from "@/components/arcade-world-screen";
import { MissionDetailsScreen } from "@/components/mission-details-screen";
import { BioBookScreen } from "@/components/bio-book-screen";

type Screen = 'password' | 'loading' | 'introVideo' | 'presentation' | 'register' | 'arcadeWorld' | 'missionDetails' | 'bioBook';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('password');
  const [playerName, setPlayerName] = useState('');
  const [playedMinigames, setPlayedMinigames] = useState(false);

  const handleRegisterAndPlay = (name: string) => {
    setPlayerName(name);
    setPlayedMinigames(true);
    setCurrentScreen('arcadeWorld');
  };
  
  const handleRegisterAndSkip = (name: string) => {
    setPlayerName(name);
    setPlayedMinigames(false);
    setCurrentScreen('missionDetails');
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
        return <RegisterScreen onPlayArcade={handleRegisterAndPlay} onSkipArcade={handleRegisterAndSkip} />;
      case 'arcadeWorld':
        return <ArcadeWorldScreen onArcadeEnd={() => setCurrentScreen('missionDetails')} />;
      case 'missionDetails':
        return <MissionDetailsScreen playerName={playerName} onNext={() => setCurrentScreen('bioBook')} playedMinigames={playedMinigames} />;
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
