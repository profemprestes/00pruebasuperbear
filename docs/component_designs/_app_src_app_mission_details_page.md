# Detalle de Diseño y Textos: /app/src/app/mission/details/page.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

No se encontraron clases de Tailwind/CSS explícitas.

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
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


```
