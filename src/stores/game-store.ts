import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
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

// Custom storage with error handling
const safeLocalStorage = {
  getItem: (name: string) => {
    try {
      if (typeof window === 'undefined') return null;
      return localStorage.getItem(name);
    } catch (error) {
      console.error('Failed to get item from localStorage', error);
      return null;
    }
  },
  setItem: (name: string, value: string) => {
    try {
      if (typeof window === 'undefined') return;
      localStorage.setItem(name, value);
    } catch (error) {
      console.error('Failed to set item in localStorage', error);
    }
  },
  removeItem: (name: string) => {
    try {
      if (typeof window === 'undefined') return;
      localStorage.removeItem(name);
    } catch (error) {
      console.error('Failed to remove item from localStorage', error);
    }
  },
};

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
      
      // Actions - optimized with batched updates
      setPlayerName: (name) => set({ playerName: name }, false),
      setPlayedMinigames: (played) => set({ playedMinigames: played }, false),
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount }), false),
      setAvatarConfig: (config) => set({ avatarConfig: config }, false),
      setFacuBio: (bio) => set({ facuBio: bio }, false),
      setFacuLikes: (likes) => set({ facuLikes: likes }, false),
      setPhotos: (p1, p2) => set({ photo1: p1, photo2: p2 }, false),
      
      resetGame: () => set({
        playerName: '',
        playedMinigames: false,
        coins: 0,
        avatarConfig: null,
      }, false),
    }),
    {
      name: 'facu-adventure-game-state',
      storage: createJSONStorage(() => safeLocalStorage),
      // Partialize to only persist necessary data
      partialize: (state) => ({
        playerName: state.playerName,
        playedMinigames: state.playedMinigames,
        coins: state.coins,
        avatarConfig: state.avatarConfig,
      }),
    }
  )
);
