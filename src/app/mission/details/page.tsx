'use client';

import { MissionDetailsScreen } from '@/components/08-mission-details-screen/mission-details-screen';
import { useGameState } from '@/stores/game-store';

export default function MissionDetailsPage() {
  const { playerName, facuBio } = useGameState();
  
  return (
    <MissionDetailsScreen 
      playerName={playerName || 'Aventurero'}
      facuBio={facuBio}
    />
  );
}
