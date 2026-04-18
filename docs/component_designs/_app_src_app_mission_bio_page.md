# Detalle de Diseño y Textos: /app/src/app/mission/bio/page.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

No se encontraron clases de Tailwind/CSS explícitas.

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
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


```
