"use client";

import { useState, useEffect } from "react";
import { RewardsProvider } from "@/hooks/use-rewards";
import { PasswordScreen } from "@/components/01-password-screen";
import { LoadingScreen } from "@/components/02-loading-screen";
import { IntroVideoScreen } from "@/components/03-intro-video-screen";
import { PresentationScreen } from "@/components/04-presentation-screen";
import { RegisterScreen } from "@/components/05-register-screen";
import { ArcadeWorldScreen } from "@/components/06-arcade-world-screen";
import { AvatarCreatorScreen } from "@/components/07-avatar-creator-screen";
import { MissionDetailsScreen } from "@/components/08-mission-details-screen";
import { BioBookScreen } from "@/components/09-bio-book-screen";
import { GameFlow } from "@/components/11-game-flow";
import type { AvatarConfig } from "@/lib/avatarOptions";
import { cn } from "@/lib/utils";

type Screen = 'password' | 'loading' | 'introVideo' | 'presentation' | 'register' | 'arcadeWorld' | 'avatarCreator' | 'missionDetails' | 'bioBook' | 'gameFlow';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('password');
  const [playerName, setPlayerName] = useState('');
  const [playedMinigames, setPlayedMinigames] = useState(false);
  const [coins, setCoins] = useState(0);
  const [avatarConfig, setAvatarConfig] = useState<AvatarConfig | null>(null);

  // State for configured data
  const [facuBio, setFacuBio] = useState('');
  const [facuLikes, setFacuLikes] = useState<string[]>([]);
  const [photo1, setPhoto1] = useState<string | null>(null);
  const [photo2, setPhoto2] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs on the client to load configuration from localStorage
    try {
      const savedConfig = localStorage.getItem('facuConfig');
      if (savedConfig) {
        const { bio, likes, photo1, photo2 } = JSON.parse(savedConfig);
        if (bio) setFacuBio(bio);
        if (likes) setFacuLikes(likes);
        if (photo1) setPhoto1(photo1);
        if (photo2) setPhoto2(photo2);
      }
    } catch (error) {
      console.error("Failed to load config from localStorage", error);
    }
  }, []);


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
    setCurrentScreen('gameFlow');
  };

  const handleRestart = () => {
    // Reset game state, but not config data
    setCurrentScreen('password');
    setPlayerName('');
    setPlayedMinigames(false);
    setCoins(0);
    setAvatarConfig(null);
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
        return <PresentationScreen onNext={() => setCurrentScreen('register')} facuBio={facuBio} />;
      case 'register':
        return <RegisterScreen onPlayArcade={handleRegisterAndPlay} onSkipArcade={handleRegisterAndSkip} />;
      case 'arcadeWorld':
        return <ArcadeWorldScreen onArcadeEnd={handleArcadeEnd} />;
      case 'avatarCreator':
        return <AvatarCreatorScreen initialCoins={coins} onAvatarCreate={handleAvatarCreate} />;
      case 'gameFlow':
        return (
          <RewardsProvider>
            <GameFlow photo1={photo1} photo2={photo2} />
          </RewardsProvider>
        );
      case 'missionDetails':
        return <MissionDetailsScreen playerName={playerName} onNext={() => setCurrentScreen('bioBook')} />;
      case 'bioBook':
        return <BioBookScreen onRestart={handleRestart} facuLikes={facuLikes} photo1={photo1} photo2={photo2} />;
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
          !['password', 'loading', 'introVideo'].includes(currentScreen) && "motion-safe:animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out"
        )}
      >
        {renderScreen()}
      </div>
    </div>
  );
}
