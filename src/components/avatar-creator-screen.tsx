'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Lock } from 'lucide-react';

// Define types for customization
type FurColor = 'Marrón' | 'Polar' | 'Cósmico' | 'Arcoíris';
type HeadItem = 'Ninguno' | 'Gorra' | 'Gafas' | 'Pastel' | 'VR';
type TorsoItem = 'Ninguno' | 'Baloncesto' | 'Héroe' | 'Negocios';
type Backpacker = 'Ninguno' | 'Shicka' | 'Larry' | 'Pingüino';

export type AvatarConfig = {
  furColor: FurColor;
  headItem: HeadItem;
  torsoItem: TorsoItem;
  backpacker: Backpacker;
};

type AvatarCreatorScreenProps = {
  initialCoins: number;
  onAvatarCreate: (config: AvatarConfig) => void;
};

// Item definitions
const furOptions: { name: FurColor; color: string; locked: boolean; cost: number }[] = [
  { name: 'Marrón', color: 'bg-[#8B4513]', locked: false, cost: 0 },
  { name: 'Polar', color: 'bg-slate-200', locked: false, cost: 0 },
  { name: 'Cósmico', color: 'bg-purple-800', locked: true, cost: 50 },
  { name: 'Arcoíris', color: 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500', locked: true, cost: 100 },
];

const headOptions: { name: HeadItem; icon: string; locked: boolean; cost: number }[] = [
  { name: 'Ninguno', icon: '🚫', locked: false, cost: 0 },
  { name: 'Gorra', icon: '🧢', locked: false, cost: 0 },
  { name: 'Gafas', icon: '🕶️', locked: false, cost: 0 },
  { name: 'Pastel', icon: '🎂', locked: true, cost: 75 },
  { name: 'VR', icon: '🥽', locked: true, cost: 100 },
];

const torsoOptions: { name: TorsoItem; icon: string; locked: boolean; cost: number }[] = [
    { name: 'Ninguno', icon: '👕', locked: false, cost: 0 },
    { name: 'Baloncesto', icon: '🏀', locked: false, cost: 0 },
    { name: 'Héroe', icon: '🦸', locked: true, cost: 50 },
    { name: 'Negocios', icon: '👔', locked: true, cost: 50 },
];

const backpackerOptions: { name: Backpacker; icon: string; locked: boolean; cost: number }[] = [
    { name: 'Ninguno', icon: '🚫', locked: false, cost: 0 },
    { name: 'Shicka', icon: '🐤', locked: false, cost: 0 },
    { name: 'Larry', icon: '🐸', locked: true, cost: 40 },
    { name: 'Pingüino', icon: '🐧', locked: true, cost: 40 },
];


export function AvatarCreatorScreen({ initialCoins, onAvatarCreate }: AvatarCreatorScreenProps) {
  const [coins, setCoins] = useState(initialCoins);
  const [unlockedItems, setUnlockedItems] = useState<Set<string>>(new Set());

  const [furColor, setFurColor] = useState<FurColor>('Marrón');
  const [headItem, setHeadItem] = useState<HeadItem>('Ninguno');
  const [torsoItem, setTorsoItem] = useState<TorsoItem>('Ninguno');
  const [backpacker, setBackpacker] = useState<Backpacker>('Ninguno');

  const handlePurchase = (item: { name: string, cost: number, setter: (name: any) => void }) => {
    if (coins >= item.cost && !unlockedItems.has(item.name)) {
      setCoins(coins - item.cost);
      setUnlockedItems(new Set(unlockedItems).add(item.name));
      item.setter(item.name);
    }
  };

  const renderAvatar = () => {
    const selectedFur = furOptions.find(f => f.name === furColor);
    const selectedHead = headOptions.find(h => h.name === headItem);
    const selectedTorso = torsoOptions.find(t => t.name === torsoItem);
    const selectedBackpacker = backpackerOptions.find(b => b.name === backpacker);

    return (
      <div className="relative w-48 h-64">
        {/* Backpacker */}
        {selectedBackpacker && selectedBackpacker.name !== 'Ninguno' && (
          <div className="absolute text-5xl -right-8 top-1/3 z-0 animate-float">{selectedBackpacker.icon}</div>
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
  
  const renderOptionButton = (item: any, currentSelection: string, setter: (name: any) => void) => {
    const isUnlocked = !item.locked || unlockedItems.has(item.name);
    const canAfford = coins >= item.cost;

    return (
        <div className='relative'>
            <Button
                variant="outline"
                className={cn("w-20 h-20 flex flex-col items-center justify-center gap-1 border-4 shadow-md", currentSelection === item.name && "border-golden-coin ring-4 ring-golden-coin")}
                disabled={!isUnlocked}
                onClick={() => isUnlocked && setter(item.name)}
            >
                {item.icon ? <span className='text-3xl'>{item.icon}</span> : <div className={cn('w-10 h-10 rounded-full', item.color)}/>}
                <span className="text-xs">{item.name}</span>
            </Button>
            {!isUnlocked && (
                <div className="absolute inset-0 bg-black/60 rounded-lg flex flex-col items-center justify-center">
                    <Button size="sm" className="h-auto p-1" disabled={!canAfford} onClick={() => handlePurchase({...item, setter})}>
                        <Lock size={16} className="mr-1"/> {item.cost} 🪙
                    </Button>
                </div>
            )}
        </div>
    )
  }

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('/ciudad.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      <div className="absolute top-4 left-4 bg-black/50 p-2 rounded-lg text-white font-body text-base z-20 max-w-xs sm:max-w-sm">
        <p><span className='font-milky text-lg'>🐻‍❄️ Capitalus:</span> ¡Hoola! ¡Soy Capitalus! Súbete a la plataforma de piedra y usa tus monedas para crear tu propio avatar antes de la fiesta.</p>
      </div>
      <div className="absolute top-4 right-4 bg-golden-coin text-teddy-brown font-milky text-2xl p-3 rounded-full shadow-lg z-20">
        {coins} 🪙
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-24 md:mt-0">
        {/* Left Section: Avatar Preview */}
        <div className='flex flex-col items-center gap-4'>
            <div className='w-72 h-80 flex items-center justify-center'>
                 {renderAvatar()}
            </div>
            <div className="w-80 h-4 bg-gray-600 rounded-full border-2 border-gray-800 shadow-inner opacity-70 blur-sm" />
             <Button
                onClick={() => onAvatarCreate({ furColor, headItem, torsoItem, backpacker })}
                className="font-milky bg-grass-green text-white text-xl h-auto px-8 py-3 border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
                ¡Guardar Avatar y Confirmar! ➔
            </Button>
        </div>
        
        {/* Right Section: Customization Menu */}
        <div className='bg-white/90 p-2 sm:p-4 rounded-xl border-4 border-teddy-brown shadow-lg'>
             <Tabs defaultValue="fur" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="fur">Piel</TabsTrigger>
                    <TabsTrigger value="head">Cabeza</TabsTrigger>
                    <TabsTrigger value="torso">Cuerpo</TabsTrigger>
                    <TabsTrigger value="back">Compañero</TabsTrigger>
                </TabsList>
                <TabsContent value="fur">
                    <div className='grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4'>
                        {furOptions.map(opt => React.cloneElement(renderOptionButton(opt, furColor, setFurColor), { key: opt.name }))}
                    </div>
                </TabsContent>
                <TabsContent value="head">
                    <div className='grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4'>
                       {headOptions.map(opt => React.cloneElement(renderOptionButton(opt, headItem, setHeadItem), { key: opt.name }))}
                    </div>
                </TabsContent>
                <TabsContent value="torso">
                     <div className='grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4'>
                        {torsoOptions.map(opt => React.cloneElement(renderOptionButton(opt, torsoItem, setTorsoItem), { key: opt.name }))}
                    </div>
                </TabsContent>
                 <TabsContent value="back">
                     <div className='grid grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4'>
                        {backpackerOptions.map(opt => React.cloneElement(renderOptionButton(opt, backpacker, setBackpacker), { key: opt.name }))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  );
}
