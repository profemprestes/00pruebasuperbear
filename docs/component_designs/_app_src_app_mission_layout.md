# Detalle de Diseño y Textos: /app/src/app/mission/layout.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

No se encontraron clases de Tailwind/CSS explícitas.

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gran Facu Aventura - Misión',
  description: '¡Únete a la aventura épica de Facu!',
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}


```
