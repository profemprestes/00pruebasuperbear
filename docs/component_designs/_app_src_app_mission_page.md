# Detalle de Diseño y Textos: /app/src/app/mission/page.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `min-h-screen`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<main>**: {renderScreen()}

## Contenido Completo del Archivo
```tsx
'use client';

import { useState, useEffect } from 'react';

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

  // Navigate to details or bio
  const navigateToDetails = () => {
    router.push('/mission/details');
  };

  const navigateToBio = () => {
    router.push('/mission/bio');
  };

  // Screen handlers - matching actual component props
  const handleLoadingStart = () => {
    setCurrentScreen('introVideo');
  };

  const handleIntroSkip = () => {
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

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'loading':
        return <LoadingScreen onStart={handleLoadingStart} />;
      case 'introVideo':
        return <IntroVideoScreen onVideoEnd={handleIntroSkip} />;
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
            onPlayArcade={handleRegisterComplete}
            onSkipArcade={() => setCurrentScreen('arcadeWorld')}
          />
        );
      case 'arcadeWorld':
        return <ArcadeWorldScreen onArcadeEnd={handleArcadeComplete} />;
      case 'avatarCreator':
        return (
          <ShopSection
            onNext={handleAvatarConfirm as any}
          />
        );
      case 'gameFlow':
        return <GameFlow />;
      default:
        return <LoadingScreen onStart={handleLoadingStart} />;
    }
  };

  return (
    <main className="min-h-screen">
      {renderScreen()}
    </main>
  );
}


```
