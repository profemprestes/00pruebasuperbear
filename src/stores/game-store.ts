import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AvatarConfig } from '@/lib/avatarOptions';

interface GameState {
  // Player info
  playerName: string;
  setPlayerName: (name: string) => void;
  
  // Progress
  playedMinigames: boolean;
  setPlayedMinigames: (played: boolean) => void;
  
  coins: number;
  addCoins: (amount: number) => void;
  
  // Avatar
  avatarConfig: AvatarConfig | null;
  setAvatarConfig: (config: AvatarConfig | null) => void;
  
  // Facu's config
  facuBio: string;
  setFacuBio: (bio: string) => void;
  
  facuLikes: string[];
  setFacuLikes: (likes: string[]) => void;
  
  photo1: string | null;
  photo2: string | null;
  setPhotos: (p1: string | null, p2: string | null) => void;
  
  // Reset
  resetGame: () => void;
}

export const useGameState = create<GameState>()(
  persist(
    (set) => ({
      // Initial state
      playerName: '',
      playedMinigames: false,
      coins: 0,
      avatarConfig: null,
      facuBio: '',
      facuLikes: [],
      photo1: null,
      photo2: null,
      
      // Actions
      setPlayerName: (name) => set({ playerName: name }),
      setPlayedMinigames: (played) => set({ playedMinigames: played }),
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      setAvatarConfig: (config) => set({ avatarConfig: config }),
      setFacuBio: (bio) => set({ facuBio: bio }),
      setFacuLikes: (likes) => set({ facuLikes: likes }),
      setPhotos: (p1, p2) => set({ photo1: p1, photo2: p2 }),
      
      resetGame: () => set({
        playerName: '',
        playedMinigames: false,
        coins: 0,
        avatarConfig: null,
      }),
    }),
    {
      name: 'facu-adventure-game-state',
    }
  )
);
