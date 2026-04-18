# Detalle de Diseño y Textos: /app/src/app/avatar/page.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

No se encontraron clases de Tailwind/CSS explícitas.

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
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


```
