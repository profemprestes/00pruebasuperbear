'use client';

import { BioBookScreen } from '@/components/09-bio-book-screen/bio-book-screen';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/stores/game-store';

export default function BioBookPage() {
  const router = useRouter();
  const { facuLikes, photo1, photo2 } = useGameState();
  
  const handleRestart = () => {
    router.push('/mission');
  };
  
  return (
    <BioBookScreen 
      onRestart={handleRestart}
      facuLikes={facuLikes}
      photo1={photo1}
      photo2={photo2}
    />
  );
}

