'use client';

import { ShopSection } from '@/components/07-avatar-creator-screen';
import { useGameState } from '@/stores/game-store';
import { useRouter } from 'next/navigation';

export default function AvatarPage() {
  const router = useRouter();
  const { setAvatarConfig } = useGameState();
  
  const handleConfirm = (config: any) => {
    setAvatarConfig(config);
    router.push('/mission');
  };
  
  return (
    <ShopSection
      onConfirm={handleConfirm}
      phase="intro"
    />
  );
}
