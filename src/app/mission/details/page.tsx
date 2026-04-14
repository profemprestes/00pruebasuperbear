'use client';

import { MissionDetailsScreen } from '@/components/08-mission-details-screen/mission-details-screen';
import { useGameState } from '@/stores/game-store';
import { useRouter } from 'next/navigation';

export default function MissionDetailsPage() {
  const { playerName } = useGameState();
  const router = useRouter();
  
  const handleNext = () => {
    router.push('/mission/bio');
  };
  
  return (
    <MissionDetailsScreen 
      playerName={playerName || 'Aventurero'}
      onNext={handleNext}
    />
  );
}
