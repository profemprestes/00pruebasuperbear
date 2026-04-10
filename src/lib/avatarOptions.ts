export type FurColor = 'Marrón' | 'Polar' | 'Cósmico' | 'Arcoíris';
export type HeadItem = 'Ninguno' | 'Gorra' | 'Gafas' | 'Pastel' | 'VR';
export type TorsoItem = 'Ninguno' | 'Baloncesto' | 'Héroe' | 'Negocios';
export type Backpacker = 'Ninguno' | 'Shicka' | 'Larry' | 'Pingüino';

export type AvatarConfig = {
  furColor: FurColor;
  headItem: HeadItem;
  torsoItem: TorsoItem;
  backpacker: Backpacker;
};

export const furOptions: { name: FurColor; color: string; locked: boolean; cost: number }[] = [
  { name: 'Marrón', color: 'bg-[#8B4513]', locked: false, cost: 0 },
  { name: 'Polar', color: 'bg-slate-200', locked: false, cost: 0 },
  { name: 'Cósmico', color: 'bg-purple-800', locked: true, cost: 50 },
  { name: 'Arcoíris', color: 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500', locked: true, cost: 100 },
];

export const headOptions: { name: HeadItem; icon: string; locked: boolean; cost: number }[] = [
  { name: 'Ninguno', icon: '🚫', locked: false, cost: 0 },
  { name: 'Gorra', icon: '🧢', locked: false, cost: 0 },
  { name: 'Gafas', icon: '🕶️', locked: false, cost: 0 },
  { name: 'Pastel', icon: '🎂', locked: true, cost: 75 },
  { name: 'VR', icon: '🥽', locked: true, cost: 100 },
];

export const torsoOptions: { name: TorsoItem; icon: string; locked: boolean; cost: number }[] = [
    { name: 'Ninguno', icon: '👕', locked: false, cost: 0 },
    { name: 'Baloncesto', icon: '🏀', locked: false, cost: 0 },
    { name: 'Héroe', icon: '🦸', locked: true, cost: 50 },
    { name: 'Negocios', icon: '👔', locked: true, cost: 50 },
];

export const backpackerOptions: { name: Backpacker; icon: string; locked: boolean; cost: number }[] = [
    { name: 'Ninguno', icon: '🚫', locked: false, cost: 0 },
    { name: 'Shicka', icon: '🐤', locked: false, cost: 0 },
    { name: 'Larry', icon: '🐸', locked: true, cost: 40 },
    { name: 'Pingüino', icon: '🐧', locked: true, cost: 40 },
];
