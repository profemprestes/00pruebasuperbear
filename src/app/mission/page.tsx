'use client';

import { useState, useEffect } from 'react';
import { RewardsProvider } from '@/hooks/use-rewards';
import { LoadingScreen } from '@/components/02-loading-screen';
import { IntroVideoScreen } from '@/components/03-intro-video-screen';
import { PresentationScreen } from '@/components/04-presentation-screen';
import { RegisterScreen } from '@/components/05-register-screen';
import { ArcadeWorldScreen } from '@/components/06-arcade-world-screen';
import { ShopSection } from '@/components/07-avatar-creator-screen';
import { GameFlow } from '@/components/11-game-flow';
import { useGameState } from '@/stores/game-store';
import type { AvatarConfig } from '@/lib/avatarOptions';
import { useRouter } from 'next/navigation';

type Screen = 'loading' | 'introVideo' | 'presentation' | 'register' | 'arcadeWorld' | 'avatarCreator' | 'gameFlow';

export default function MissionPage() {
  const router = useRouter();
  const { 
    playerName, 
    setPlayerName, 
    playedMinigames, 
    setPlayedMinigames,
    avatarConfig, 
    setAvatarConfig,
    facuBio,
    facuLikes,
    photo1,
    photo2,
  } = useGameState();
  
  const [currentScreen, setCurrentScreen] = useState<Screen>('loading');
  const [showNavControls, setShowNavControls] = useState(false);

  // Navigate to details or bio
  const navigateToDetails = () => {
    router.push('/mission/details');
  };

  const navigateToBio = () => {
    router.push('/mission/bio');
  };

  // Screen handlers
  const handleLoadingComplete = () => {
    setCurrentScreen('introVideo');
  };

  const handleIntroComplete = () => {
    setCurrentScreen('presentation');
  };

  const handlePresentationNext = () => {
    setCurrentScreen('register');
  };

  const handleRegisterComplete = (name: string) => {
    setPlayerName(name);
    setCurrentScreen('arcadeWorld');
  };

  const handleArcadeComplete = () => {
    setPlayedMinigames(true);
    setCurrentScreen('avatarCreator');
  };

  const handleAvatarConfirm = (config: AvatarConfig) => {
    setAvatarConfig(config);
    setCurrentScreen('gameFlow');
  };

  const handleGameFlowNav = (section: string) => {
    // Handle navigation within GameFlow
    console.log('Navigate to:', section);
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'loading':
        return <LoadingScreen onComplete={handleLoadingComplete} />;
      case 'introVideo':
        return <IntroVideoScreen onComplete={handleIntroComplete} />;
      case 'presentation':
        return (
          <PresentationScreen
            onNext={handlePresentationNext}
            facuBio={facuBio}
          />
        );
      case 'register':
        return (
          <RegisterScreen
            onComplete={handleRegisterComplete}
            onSkip={() => setCurrentScreen('arcadeWorld')}
          />
        );
      case 'arcadeWorld':
        return <ArcadeWorldScreen onComplete={handleArcadeComplete} />;
      case 'avatarCreator':
        return (
          <ShopSection
            onConfirm={handleAvatarConfirm}
            phase="intro"
          />
        );
      case 'gameFlow':
        return (
          <RewardsProvider>
            <GameFlow
              playerName={playerName}
              facuLikes={facuLikes}
              photo1={photo1}
              photo2={photo2}
              onNavigate={handleGameFlowNav}
              onGoToDetails={navigateToDetails}
              onGoToBio={navigateToBio}
            />
          </RewardsProvider>
        );
      default:
        return <LoadingScreen onComplete={handleLoadingComplete} />;
    }
  };

  return (
    <main className="min-h-screen">
      {renderScreen()}
    </main>
  );
}
