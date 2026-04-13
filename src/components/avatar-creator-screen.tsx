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
                className={cn(
                  "w-full aspect-square flex flex-col items-center justify-center gap-0.5 border-3 sm:border-4 shadow-md text-xs",
                  currentSelection === item.name && "border-golden-coin ring-2 sm:ring-4 ring-golden-coin"
                )}
                disabled={!isUnlocked}
                onClick={() => isUnlocked && setter(item.name)}
            >
                {item.icon ? <span className='text-2xl sm:text-3xl'>{item.icon}</span> : <div className={cn('w-8 h-8 sm:w-10 sm:h-10 rounded-full', item.color)}/>}
                <span className="text-[10px] sm:text-xs leading-tight truncate max-w-full px-1">{item.name}</span>
            </Button>
            {!isUnlocked && (
                <div className="absolute inset-0 bg-black/60 rounded-md sm:rounded-lg flex flex-col items-center justify-center">
                    <Button size="sm" aria-label={`Comprar ${item.name} por ${item.cost} monedas`} className="h-auto p-1 sm:p-1.5 disabled:cursor-not-allowed" disabled={!canAfford} onClick={() => handlePurchase({...item, setter})}>
                        <Lock size={12} className="sm:w-4 sm:h-4 mr-0.5 sm:mr-1"/> <span className="text-[10px] sm:text-xs">{item.cost} 🪙</span>
                    </Button>
                </div>
            )}
        </div>
    )
  }

  const avatarConfig = { furColor, headItem, torsoItem, backpacker };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col p-2 sm:p-4 relative overflow-y-auto"
      style={{ backgroundImage: "url('/mundos/bear_village/Outfitshopplatform.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      {/* Content wrapper — avoids HUD overlap and dialog overlap */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-14 sm:pt-16 lg:pt-4 px-[max(0.5rem,var(--safe-left))] sm:px-[max(1rem,var(--safe-left))]">

        {/* Capitalus dialog — responsive: compact on mobile, full on desktop */}
        <div className="mb-2 sm:mb-4">
          <div className="bg-black/50 p-2 sm:p-3 rounded-lg text-white font-body text-xs sm:text-base z-20 max-w-full sm:max-w-md">
            <p><span className='font-milky text-sm sm:text-lg'>🐻‍❄️ Capitalus:</span> <span className="hidden sm:inline">¡Hoola! ¡Soy Capitalus! Súbete a la plataforma de piedra y usa tus monedas para crear tu propio avatar antes de la fiesta.</span><span className="sm:hidden">¡Usa tus monedas para personalizar tu avatar!</span></p>
          </div>
        </div>

        {/* Coin counter — stays top-right */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-golden-coin text-teddy-brown font-milky text-lg sm:text-2xl p-2 sm:p-3 rounded-full shadow-lg z-20">
          {coins} 🪙
        </div>

        {/* Main layout: stacked mobile → side-by-side desktop */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-6 gap-4">

          {/* Avatar preview section */}
          <div className='flex flex-col items-center gap-3 sm:gap-4 md:w-72 md:flex-shrink-0 order-1'>
            <div className='w-40 sm:w-48 md:w-64 h-48 sm:h-56 md:h-64 flex items-center justify-center'>
                 <AvatarDisplay config={avatarConfig} className="scale-75 sm:scale-90 md:scale-100" />
            </div>
            {/* Platform shadow */}
            <div className="w-32 sm:w-40 md:w-48 h-2 sm:h-3 bg-gray-600 rounded-full border-2 border-gray-800 shadow-inner opacity-70 blur-sm" />

            {/* CTA button */}
            <div className="relative mt-1">
              <Button
                onClick={() => onAvatarCreate(avatarConfig)}
                aria-label="Guardar avatar creado y confirmar asistencia"
                className="font-milky bg-grass-green text-white text-sm sm:text-base md:text-lg h-auto px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-200 hover:bg-green-500 hover:shadow-[0_8px_0_#2E8B57] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              >
                ¡Guardar Avatar y Confirmar! ➔
              </Button>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-grass-green motion-safe:animate-bounce flex flex-col items-center pointer-events-none">
                <span className="font-milky text-[8px] sm:text-xs bg-white/80 px-1.5 sm:px-2 rounded-full border border-grass-green whitespace-nowrap">¡HAZ CLIC!</span>
                <ArrowDown className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>

          {/* Customization menu */}
          <div className='bg-white/90 p-2 sm:p-3 md:p-4 rounded-xl border-3 sm:border-4 border-teddy-brown shadow-lg flex-1 order-2 min-w-0'>
             <Tabs defaultValue="fur" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="fur" className="text-[10px] sm:text-sm px-0.5 sm:px-1 leading-tight">Piel</TabsTrigger>
                    <TabsTrigger value="head" className="text-[10px] sm:text-sm px-0.5 sm:px-1 leading-tight">Cabeza</TabsTrigger>
                    <TabsTrigger value="torso" className="text-[10px] sm:text-sm px-0.5 sm:px-1 leading-tight">Cuerpo</TabsTrigger>
                    <TabsTrigger value="back" className="text-[8px] sm:text-xs px-0.5 sm:px-1 leading-tight">Compañero</TabsTrigger>
                </TabsList>
                <TabsContent value="fur">
                    <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 p-1.5 sm:p-2 md:p-3'>
                        {furOptions.map(opt => renderOptionButton(opt, furColor, setFurColor))}
                    </div>
                </TabsContent>
                <TabsContent value="head">
                    <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 p-1.5 sm:p-2 md:p-3'>
                       {headOptions.map(opt => renderOptionButton(opt, headItem, setHeadItem))}
                    </div>
                </TabsContent>
                <TabsContent value="torso">
                     <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 p-1.5 sm:p-2 md:p-3'>
                        {torsoOptions.map(opt => renderOptionButton(opt, torsoItem, setTorsoItem))}
                    </div>
                </TabsContent>
                 <TabsContent value="back">
                     <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 p-1.5 sm:p-2 md:p-3'>
                        {backpackerOptions.map(opt => renderOptionButton(opt, backpacker, setBackpacker))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
        </div>
      </div>
    </div>
  );
}
