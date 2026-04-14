'use client';

import { ArcadeWorldScreen } from '@/components/06-arcade-world-screen/arcade-world-screen';
import { useGameState } from '@/stores/game-store';
import { useRouter } from 'next/navigation';

export default function ArcadePage() {
  const router = useRouter();
  const { setPlayedMinigames } = useGameState();
  
  const handleComplete = () => {
    setPlayedMinigames(true);
    router.push('/avatar');
  };
  
  return <ArcadeWorldScreen onComplete={handleComplete} />;
}
