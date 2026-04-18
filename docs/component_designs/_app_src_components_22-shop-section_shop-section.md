# Detalle de Diseño y Textos: /app/src/components/22-shop-section/shop-section.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `{`rounded-2xl p-4 sm:p-6 lg:p-8 text-center ${
          isDesktop ? "max-w-4xl mx-auto" : "w-full"
        }`}`
- `font-milky text-xl sm:text-2xl lg:text-3xl text-teddy-brown mb-1 sm:mb-2`
- `font-amble text-xs sm:text-sm text-voxel-text mb-4 sm:mb-6`
- `{`grid gap-2 sm:gap-3 lg:gap-4 ${
            isDesktop ? "grid-cols-3" : "grid-cols-2"
          }`}`
- `{`p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition-all ${
                  isSelected ? "scale-105" : "hover:scale-102"
                }`}`
- `text-4xl sm:text-5xl mb-2`
- `font-amble font-bold text-xs sm:text-sm`
- `flex items-center justify-center gap-1 mt-2`
- `w-3 h-3 text-golden-coin`
- `w-3 h-3 text-purple-600`
- `w-3 h-3 text-sky-blue`
- `font-arcade text-[10px] text-voxel-text uppercase`
- `text-xs`
- `font-arcade text-xs text-voxel-text`
- `mt-4 p-3 rounded-xl`
- `font-milky text-sm text-golden-coin`
- `mt-6 sm:mt-8 pb-[max(2rem,var(--safe-bottom))]`
- `w-full font-milky text-base sm:text-lg lg:text-xl h-auto py-3 sm:py-4 px-4 sm:px-6 text-white transition-all duration-150 whitespace-normal leading-tight active:translate-y-1 active:shadow-[0_0_0_transparent]`
- `text-sm sm:text-base`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<div>**: {/* Shop grid */} {/* Selected item info */} {selectedItem && ( <div className="mt-4 p-3 rounded-xl" style={{ background: "rgba(0,51,66,0.85)", border: "2px solid #FFD700", }} > <p className="font-milky text-sm text-golden-coin"> ¡{shopItems.find((i) => i.id === selectedItem)?.name} seleccionado! </p> </div> )} {/* CTA Button */}
- **<h2>**: 🛍️ Outfit Shop
- **<p>**: ¡Personaliza tu look con artículos del juego!
- **<div>**: {shopItems.map((item) => { const colors = rarityColors[item.rarity]; const isSelected = selectedItem === item.id; return ( <button key={item.id} onClick={() => setSelectedItem(item.id)} aria-label={`Ver detalle de ${item.name}, precio ${item.price} monedas, rareza ${item.rarity}`} className={`p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition-all ${ isSelected ? "scale-105" : "hover:scale-102" }`} style={{ background: colors.bg, border: isSelected ? `3px solid ${colors.border}` : `2px solid ${colors.border}`, boxShadow: isSelected ? `0 4px 0 ${colors.border}, 0 0 20px rgba(255,215,0,0.3)` : "0 3px 0 rgba(0,0,0,0.2)", }} > {/* Item icon */} <div className="text-4xl sm:text-5xl mb-2">{item.icon}</div> {/* Item name */} <p className="font-amble font-bold text-xs sm:text-sm" style={{ color: colors.text }} > {item.name} </p> {/* Rarity badge */} <div className="flex items-center justify-center gap-1 mt-2"> {item.rarity === "legendary" && <Crown className="w-3 h-3 text-golden-coin" />} {item.rarity === "epic" && <Star className="w-3 h-3 text-purple-600" />} {item.rarity === "common" && <Shirt className="w-3 h-3 text-sky-blue" />} <span className="font-arcade text-[10px] text-voxel-text uppercase"> {item.rarity} </span> </div> {/* Price */} <div className="flex items-center justify-center gap-1 mt-2"> <span className="text-xs">🪙</span> <span className="font-arcade text-xs text-voxel-text">{item.price}</span> </div> </button> ); })}
- **<button>**: {/* Item icon */} {/* Item name */} {/* Rarity badge */} {/* Price */}
- **<div>**: {item.icon}
- **<p>**: {item.name}
- **<div>**: {item.rarity === "legendary" && <Crown className="w-3 h-3 text-golden-coin" />} {item.rarity === "epic" && <Star className="w-3 h-3 text-purple-600" />} {item.rarity === "common" && <Shirt className="w-3 h-3 text-sky-blue" />}
- **<span>**: {item.rarity}
- **<span>**: 🪙
- **<span>**: {item.price}
- **<p>**: ¡{shopItems.find((i) => i.id === selectedItem)?.name} seleccionado!
- **<span>**: Continuar al Secreto 🥚 →

## Contenido Completo del Archivo
```tsx
"use client";

import { MissionSection } from "@/components/18-mission-section";
import { Button } from "@/components/ui/button";
import { useIsDesktop } from "@/hooks/use-media-query";
import { Shirt, Star, Crown } from "lucide-react";
import { useState } from "react";

type ShopSectionProps = {
  onNext: () => void;
};

const shopItems = [
  { id: 1, name: "Sombrero de Pastel", icon: "🎂", rarity: "legendary", price: 100 },
  { id: 2, name: "Gafas de Sol", icon: "🕶️", rarity: "epic", price: 75 },
  { id: 3, name: "Corona VIP", icon: "👑", rarity: "legendary", price: 150 },
  { id: 4, name: "Camiseta Bear", icon: "👕", rarity: "common", price: 50 },
  { id: 5, name: "Mochila Shicka", icon: "🎒", rarity: "epic", price: 80 },
  { id: 6, name: "Zapaturas Voxel", icon: "👟", rarity: "common", price: 60 },
];

const rarityColors: Record<string, { bg: string; border: string; text: string }> = {
  common: { bg: "rgba(255,255,255,0.6)", border: "#87CEEB", text: "#003342" },
  epic: { bg: "rgba(138,43,226,0.2)", border: "#8A2BE2", text: "#8A2BE2" },
  legendary: { bg: "rgba(255,215,0,0.2)", border: "#FFD700", text: "#FFD700" },
};

export function ShopSection({ onNext }: ShopSectionProps) {
  const isDesktop = useIsDesktop();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <MissionSection stepId="shop" bgImage="/mundos/bear_village/Outfitshopplatform.webp">
      <div
        className={`rounded-2xl p-4 sm:p-6 lg:p-8 text-center ${
          isDesktop ? "max-w-4xl mx-auto" : "w-full"
        }`}
        style={{
          background: "linear-gradient(135deg, #fffde7 0%, #fff8e1 100%)",
          border: "6px solid #FFD700",
          boxShadow: "0 10px 30px rgba(255,215,0,0.3), 6px 6px 0 #b8860b",
        }}
      >
        <h2 className="font-milky text-xl sm:text-2xl lg:text-3xl text-teddy-brown mb-1 sm:mb-2">
          🛍️ Outfit Shop
        </h2>
        <p className="font-amble text-xs sm:text-sm text-voxel-text mb-4 sm:mb-6">
          ¡Personaliza tu look con artículos del juego!
        </p>

        {/* Shop grid */}
        <div
          className={`grid gap-2 sm:gap-3 lg:gap-4 ${
            isDesktop ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {shopItems.map((item) => {
            const colors = rarityColors[item.rarity];
            const isSelected = selectedItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                aria-label={`Ver detalle de ${item.name}, precio ${item.price} monedas, rareza ${item.rarity}`}
                className={`p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl transition-all ${
                  isSelected ? "scale-105" : "hover:scale-102"
                }`}
                style={{
                  background: colors.bg,
                  border: isSelected ? `3px solid ${colors.border}` : `2px solid ${colors.border}`,
                  boxShadow: isSelected
                    ? `0 4px 0 ${colors.border}, 0 0 20px rgba(255,215,0,0.3)`
                    : "0 3px 0 rgba(0,0,0,0.2)",
                }}
              >
                {/* Item icon */}
                <div className="text-4xl sm:text-5xl mb-2">{item.icon}</div>

                {/* Item name */}
                <p
                  className="font-amble font-bold text-xs sm:text-sm"
                  style={{ color: colors.text }}
                >
                  {item.name}
                </p>

                {/* Rarity badge */}
                <div className="flex items-center justify-center gap-1 mt-2">
                  {item.rarity === "legendary" && <Crown className="w-3 h-3 text-golden-coin" />}
                  {item.rarity === "epic" && <Star className="w-3 h-3 text-purple-600" />}
                  {item.rarity === "common" && <Shirt className="w-3 h-3 text-sky-blue" />}
                  <span className="font-arcade text-[10px] text-voxel-text uppercase">
                    {item.rarity}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-xs">🪙</span>
                  <span className="font-arcade text-xs text-voxel-text">{item.price}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected item info */}
        {selectedItem && (
          <div
            className="mt-4 p-3 rounded-xl"
            style={{
              background: "rgba(0,51,66,0.85)",
              border: "2px solid #FFD700",
            }}
          >
            <p className="font-milky text-sm text-golden-coin">
              ¡{shopItems.find((i) => i.id === selectedItem)?.name} seleccionado!
            </p>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-6 sm:mt-8 pb-[max(2rem,var(--safe-bottom))]">
          <Button
            onClick={onNext}
            className="w-full font-milky text-base sm:text-lg lg:text-xl h-auto py-3 sm:py-4 px-4 sm:px-6 text-white transition-all duration-150 whitespace-normal leading-tight active:translate-y-1 active:shadow-[0_0_0_transparent]"
            style={{
              background: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
              border: "3px solid #8B4513",
              boxShadow: "0 6px 0 #63340b",
            }}



          >
            <span className="text-sm sm:text-base">Continuar al Secreto 🥚 →</span>
          </Button>
        </div>
      </div>
    </MissionSection>
  );
}


```
