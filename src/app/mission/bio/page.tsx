'use client';

import { BioBookScreen } from '@/components/09-bio-book-screen/bio-book-screen';
import { useRouter } from 'next/navigation';

export default function BioBookPage() {
  const router = useRouter();
  
  const handleRestart = () => {
    router.push('/mission');
  };
  
  return <BioBookScreen onRestart={handleRestart} />;
}
