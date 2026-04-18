# Detalle de Diseño y Textos: /app/src/components/10-avatar-display/avatar-display.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `{cn("relative w-48 h-64", className)}`
- `absolute text-5xl -right-8 top-1/3 z-0 motion-safe:animate-float`
- `{cn("absolute w-32 h-40 left-1/2 -translate-x-1/2 top-16 rounded-t-3xl rounded-b-lg", selectedFur?.color)}`
- `absolute inset-0 stars opacity-50`
- `{cn("absolute w-36 h-36 left-1/2 -translate-x-1/2 top-0 rounded-full", selectedFur?.color)}`
- `absolute inset-0 rounded-full stars opacity-50`
- `absolute top-1/3 left-1/4 w-6 h-8 bg-white rounded-full border-2 border-black`
- `absolute top-1/3 right-1/4 w-6 h-8 bg-white rounded-full border-2 border-black`
- `absolute top-1/2 left-1/2 -translate-x-1/2 w-8 h-6 bg-amber-200 rounded-lg border-2 border-black`
- `absolute text-6xl left-1/2 -translate-x-1/2 -top-4 z-20`
- `absolute text-6xl left-1/2 -translate-x-1/2 top-20 z-20`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<div>**: {/* Backpacker */} {selectedBackpacker && selectedBackpacker.name !== 'Ninguno' && ( <div className="absolute text-5xl -right-8 top-1/3 z-0 motion-safe:animate-float">{selectedBackpacker.icon}</div> )} {/* Body */} {/* Head */} {/* Head Item */} {selectedHead && selectedHead.name !== 'Ninguno' && ( <div className="absolute text-6xl left-1/2 -translate-x-1/2 -top-4 z-20">{selectedHead.icon}</div> )} {/* Torso Item */} {selectedTorso && selectedTorso.name !== 'Ninguno' && ( <div className="absolute text-6xl left-1/2 -translate-x-1/2 top-20 z-20">{selectedTorso.icon}</div> )}
- **<div>**: {selectedBackpacker.icon}
- **<div>**: {selectedFur?.name === 'Cósmico' && <div className="absolute inset-0 stars opacity-50"/>}
- **<div>**: {selectedFur?.name === 'Cósmico' && <div className="absolute inset-0 rounded-full stars opacity-50"/>}
- **<div>**: {selectedHead.icon}
- **<div>**: {selectedTorso.icon}

## Contenido Completo del Archivo
```tsx
import { cn } from '@/lib/utils';
import { AvatarConfig, furOptions, headOptions, torsoOptions, backpackerOptions } from '@/lib/avatarOptions';

type AvatarDisplayProps = {
    config: AvatarConfig;
    className?: string;
}

export function AvatarDisplay({ config, className }: AvatarDisplayProps) {
    const selectedFur = furOptions.find(f => f.name === config.furColor);
    const selectedHead = headOptions.find(h => h.name === config.headItem);
    const selectedTorso = torsoOptions.find(t => t.name === config.torsoItem);
    const selectedBackpacker = backpackerOptions.find(b => b.name === config.backpacker);

    return (
        <div className={cn("relative w-48 h-64", className)}>
            {/* Backpacker */}
            {selectedBackpacker && selectedBackpacker.name !== 'Ninguno' && (
                <div className="absolute text-5xl -right-8 top-1/3 z-0 motion-safe:animate-float">{selectedBackpacker.icon}</div>
            )}
            {/* Body */}
            <div className={cn("absolute w-32 h-40 left-1/2 -translate-x-1/2 top-16 rounded-t-3xl rounded-b-lg", selectedFur?.color)}>
                {selectedFur?.name === 'Cósmico' && <div className="absolute inset-0 stars opacity-50"/>}
            </div>
            {/* Head */}
            <div className={cn("absolute w-36 h-36 left-1/2 -translate-x-1/2 top-0 rounded-full", selectedFur?.color)}>
                {selectedFur?.name === 'Cósmico' && <div className="absolute inset-0 rounded-full stars opacity-50"/>}
                <div className="absolute top-1/3 left-1/4 w-6 h-8 bg-white rounded-full border-2 border-black"></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-8 bg-white rounded-full border-2 border-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-8 h-6 bg-amber-200 rounded-lg border-2 border-black"></div>
            </div>
            {/* Head Item */}
            {selectedHead && selectedHead.name !== 'Ninguno' && (
                <div className="absolute text-6xl left-1/2 -translate-x-1/2 -top-4 z-20">{selectedHead.icon}</div>
            )}
            {/* Torso Item */}
            {selectedTorso && selectedTorso.name !== 'Ninguno' && (
                <div className="absolute text-6xl left-1/2 -translate-x-1/2 top-20 z-20">{selectedTorso.icon}</div>
            )}
        </div>
    );
};


```
