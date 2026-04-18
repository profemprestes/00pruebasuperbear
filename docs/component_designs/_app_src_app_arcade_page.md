# Detalle de Diseño y Textos: /app/src/app/arcade/page.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

No se encontraron clases de Tailwind/CSS explícitas.

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
'use client';

import { ArcadeWorldScreen } from '@/components/06-arcade-world-screen/arcade-world-screen';
import { useGameState } from '@/stores/game-store';
import { useRouter } from 'next/navigation';

export default function ArcadePage() {
  const router = useRouter();
  const { setPlayedMinigames, addCoins } = useGameState();

  const handleArcadeEnd = (coins: number) => {
    setPlayedMinigames(true);
    addCoins(coins);
    router.push('/avatar');
  };

  return <ArcadeWorldScreen onArcadeEnd={handleArcadeEnd} />;
}


```
