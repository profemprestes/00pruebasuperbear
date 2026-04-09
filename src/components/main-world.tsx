"use client";
import { useState } from 'react';
import { DialogBox } from './dialog-box';
import { Calendar, Clock, KeyRound, MapPin, ClipboardCheck, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { missionData } from '@/lib/eventData';

type MainWorldProps = {
  onAllKeysCollected: () => void;
};

export function MainWorld({ onAllKeysCollected }: MainWorldProps) {
  const [collectedKeys, setCollectedKeys] = useState<boolean[]>([false, false, false]);
  const keysCount = collectedKeys.filter(Boolean).length;

  const handleKeyCollect = (index: number) => {
    if (collectedKeys[index]) return;

    const newKeys = [...collectedKeys];
    newKeys[index] = true;
    setCollectedKeys(newKeys);

    if (newKeys.filter(Boolean).length === 3) {
      onAllKeysCollected();
    }
  };
  
  const keyPositions = [
    'sm:top-1/4 sm:left-1/4 top-20 left-10',
    'sm:bottom-1/4 sm:right-1/3 bottom-32 right-12',
    'sm:top-1/3 sm:right-1/4 top-48 right-20',
  ];

  return (
    <main className="min-h-screen w-full bg-transparent pt-24 pb-48 px-4 md:px-8 relative">
      <div className="text-center mb-12 space-y-4">
        <h2 className="font-headline text-6xl text-white" style={{ WebkitTextStroke: '3px hsl(var(--foreground))', textShadow: '4px 4px 0px hsl(var(--foreground))' }}>
          Mapa de la Aldea
        </h2>
        <p className="font-headline text-2xl text-foreground">¡Misión Cumpleaños de {missionData.festejado}!</p>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-8 z-10 relative">
        <DialogBox icon={<Calendar size={48} />} title="Fecha">
          <p>Misión programada para el <strong>{missionData.fecha}</strong>.</p>
        </DialogBox>
        <DialogBox icon={<Clock size={48} />} title="Hora">
          <p>El portal se abrirá de <strong>{missionData.horario}</strong>.</p>
        </DialogBox>
        <DialogBox icon={<MapPin size={48} />} title="Ubicación">
          <p>El encuentro será en <strong>{missionData.lugar}</strong>.</p>
          <p>{missionData.direccion}</p>
        </DialogBox>
        <DialogBox icon={<ClipboardCheck size={48} />} title="Nota de Misión">
            <p>{missionData.nota}</p>
        </DialogBox>
        <DialogBox icon={<Mail size={48} />} title="Contacto">
            <p>Email: {missionData.contacto.email}</p>
            <p>IG: {missionData.contacto.instagram}</p>
        </DialogBox>
      </div>
      
      <div className="absolute inset-0 z-0">
        {collectedKeys.map((isCollected, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => handleKeyCollect(index)}
            disabled={isCollected}
            aria-label={`Recolectar llave ${index + 1}`}
            className={cn(
              'absolute h-16 w-16 transform transition-all duration-300',
              keyPositions[index],
              isCollected ? 'opacity-25 scale-75' : 'hover:scale-110'
            )}
          >
            <KeyRound className="h-full w-full text-accent fill-accent/50" />
          </Button>
        ))}
      </div>

      <div className="fixed bottom-4 right-4 bg-card/80 backdrop-blur-sm border-4 border-foreground shadow-3d p-4 rounded-lg z-20">
        <h3 className="font-headline text-xl text-foreground">Misión Principal</h3>
        <p className="font-body text-foreground">¡Recolecta las 3 llaves!</p>
        <div className="flex items-center gap-2 mt-2">
            <KeyRound className="h-6 w-6 text-accent" />
            <span className="font-headline text-2xl text-foreground">{keysCount} / 3</span>
        </div>
      </div>
    </main>
  );
}
