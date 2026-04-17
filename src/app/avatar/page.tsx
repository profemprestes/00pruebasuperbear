'use client';

import { ShopSection } from '@/components/07-avatar-creator-screen';
import { useGameState } from '@/stores/game-store';
import { useRouter } from 'next/navigation';

export default function AvatarPage() {
  const router = useRouter();
  const { setAvatarConfig } = useGameState();
  
  const handleNext = () => {
    // ShopSection doesn't pass config, so we'll just navigate
    router.push('/mission');
  };
  
  return (
    <ShopSection
      onNext={handleNext}
    />
  );
}

