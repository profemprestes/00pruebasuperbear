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
import { AvatarCreatorScreen } from "@/components/avatar-creator-screen";
import type { AvatarConfig } from "@/lib/avatarOptions";
import { cn } from "@/lib/utils";

type Screen = 'password' | 'loading' | 'introVideo' | 'presentation' | 'register' | 'arcadeWorld' | 'avatarCreator' | 'missionDetails' | 'bioBook';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('password');
  const [playerName, setPlayerName] = useState('');
  const [playedMinigames, setPlayedMinigames] = useState(false);
  const [coins, setCoins] = useState(0);
  const [avatarConfig, setAvatarConfig] = useState<AvatarConfig | null>(null);


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

  const handleArcadeEnd = (earnedCoins: number) => {
    setCoins(earnedCoins);
    setCurrentScreen('avatarCreator');
  };

  const handleAvatarCreate = (config: AvatarConfig) => {
    setAvatarConfig(config);
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
        return <ArcadeWorldScreen onArcadeEnd={handleArcadeEnd} />;
      case 'avatarCreator':
        return <AvatarCreatorScreen initialCoins={coins} onAvatarCreate={handleAvatarCreate} />;
      case 'missionDetails':
        return <MissionDetailsScreen playerName={playerName} onNext={() => setCurrentScreen('bioBook')} playedMinigames={playedMinigames} avatarConfig={avatarConfig} />;
      case 'bioBook':
        return <BioBookScreen onRestart={() => setCurrentScreen('password')} />;
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
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] motion-safe:animate-in fade-in-0 duration-1000 brightness-[.85] saturate-[1.2]"
      />
      
      <div 
        key={currentScreen} 
        className={cn(
          "absolute inset-0 z-10",
          !['password', 'loading', 'introVideo'].includes(currentScreen) && "motion-safe:animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
        )}
      >
        {renderScreen()}
      </div>
    </div>
  );
}
