'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Lock, ArrowDown } from 'lucide-react';
import { AvatarDisplay } from './avatar-display';
import { furOptions, headOptions, torsoOptions, backpackerOptions, type AvatarConfig, type FurColor, type HeadItem, type TorsoItem, type Backpacker } from '@/lib/avatarOptions';

type AvatarCreatorScreenProps = {
  initialCoins: number;
  onAvatarCreate: (config: AvatarConfig) => void;
};

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
  
  const renderOptionButton = (item: any, currentSelection: string, setter: (name: any) => void) => {
    const isUnlocked = !item.locked || unlockedItems.has(item.name);
    const canAfford = coins >= item.cost;

    return (
        <div key={item.name} className='relative'>
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
                    <Button size="sm" className="h-auto p-1 disabled:cursor-not-allowed" disabled={!canAfford} onClick={() => handlePurchase({...item, setter})}>
                        <Lock size={16} className="mr-1"/> {item.cost} 🪙
                    </Button>
                </div>
            )}
        </div>
    )
  }

  const avatarConfig = { furColor, headItem, torsoItem, backpacker };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center p-2 sm:p-4 relative"
      style={{ backgroundImage: "url('/ciudad.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      <div className="absolute top-4 left-4 bg-black/50 p-2 rounded-lg text-white font-body text-base z-20 max-w-xs sm:max-w-sm">
        <p><span className='font-milky text-lg'>🐻‍❄️ Capitalus:</span> ¡Hoola! ¡Soy Capitalus! Súbete a la plataforma de piedra y usa tus monedas para crear tu propio avatar antes de la fiesta.</p>
      </div>
      <div className="absolute top-4 right-4 bg-golden-coin text-teddy-brown font-milky text-2xl p-3 rounded-full shadow-lg z-20">
        {coins} 🪙
      </div>

      <div className="relative z-10 w-[95%] sm:w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-28 md:mt-0">
        {/* Left Section: Avatar Preview */}
        <div className='flex flex-col items-center gap-4'>
            <div className='w-64 sm:w-72 h-80 flex items-center justify-center'>
                 <AvatarDisplay config={avatarConfig} />
            </div>
            <div className="w-64 sm:w-80 h-4 bg-gray-600 rounded-full border-2 border-gray-800 shadow-inner opacity-70 blur-sm" />
             <div className="relative mt-4">
                <Button
                    onClick={() => onAvatarCreate(avatarConfig)}
                    className="font-milky bg-grass-green text-white text-lg sm:text-xl h-auto px-6 sm:px-8 py-3 border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
                >
                    ¡Guardar Avatar y Confirmar! ➔
                </Button>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-grass-green motion-safe:animate-bounce flex flex-col items-center">
                    <span className="font-milky text-sm bg-white/80 px-2 rounded-full border-2 border-grass-green">¡HAZ CLIC!</span>
                    <ArrowDown className="w-8 h-8" />
                </div>
              </div>
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
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4'>
                        {furOptions.map(opt => renderOptionButton(opt, furColor, setFurColor))}
                    </div>
                </TabsContent>
                <TabsContent value="head">
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4'>
                       {headOptions.map(opt => renderOptionButton(opt, headItem, setHeadItem))}
                    </div>
                </TabsContent>
                <TabsContent value="torso">
                     <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4'>
                        {torsoOptions.map(opt => renderOptionButton(opt, torsoItem, setTorsoItem))}
                    </div>
                </TabsContent>
                 <TabsContent value="back">
                     <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4'>
                        {backpackerOptions.map(opt => renderOptionButton(opt, backpacker, setBackpacker))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  );
}
