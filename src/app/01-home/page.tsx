"use client";

import { useState, useEffect, useCallback } from "react";

import { PasswordScreen } from "@/components/01-password-screen";
import { LoadingScreen } from "@/components/02-loading-screen";
import { IntroVideoScreen } from "@/components/03-intro-video-screen";
import { PresentationScreen } from "@/components/04-presentation-screen";
import { RegisterScreen } from "@/components/05-register-screen";
import { ArcadeWorldScreen } from "@/components/06-arcade-world-screen";
import { ShopSection } from "@/components/07-avatar-creator-screen";
import { MissionDetailsScreen } from "@/components/08-mission-details-screen";
import { BioBookScreen } from "@/components/09-bio-book-screen";
import { GameFlow } from "@/components/11-game-flow";
import type { AvatarConfig } from "@/lib/avatarOptions";
import { cn } from "@/lib/utils";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Screens that should NOT show navigation controls
const NO_NAVIGATION_SCREENS = ['password', 'loading', 'introVideo'];

// Screens that can be navigated back TO (skip intro screens)
const NAVIGABLE_SCREENS: Screen[] = ['presentation', 'register', 'arcadeWorld', 'avatarCreator', 'gameFlow', 'missionDetails', 'bioBook'];

type Screen = 'password' | 'loading' | 'introVideo' | 'presentation' | 'register' | 'arcadeWorld' | 'avatarCreator' | 'missionDetails' | 'bioBook' | 'gameFlow';

// LocalStorage keys
const STORAGE_KEYS = {
  PASSWORD_VERIFIED: 'facu_adventure_password_verified',
  LAST_SCREEN: 'facu_adventure_last_screen',
  NAVIGATION_HISTORY: 'facu_adventure_nav_history',
  GAME_STATE: 'facu_adventure_game_state',
};

interface PersistedGameState {
  playerName: string;
  playedMinigames: boolean;
  coins: number;
  avatarConfig: AvatarConfig | null;
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('password');
  const [playerName, setPlayerName] = useState('');
  const [playedMinigames, setPlayedMinigames] = useState(false);
  const [coins, setCoins] = useState(0);
  const [avatarConfig, setAvatarConfig] = useState<AvatarConfig | null>(null);
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showNavControls, setShowNavControls] = useState(false);

  // State for configured data (persisted)
  const [facuBio, setFacuBio] = useState('');
  const [facuLikes, setFacuLikes] = useState<string[]>([]);
  const [photo1, setPhoto1] = useState<string | null>(null);
  const [photo2, setPhoto2] = useState<string | null>(null);

  // ─── LOAD PERSISTED STATE ON MOUNT ───────────────────────────
  useEffect(() => {
    try {
      // Load Facu's config
      const savedConfig = localStorage.getItem('facuConfig');
      if (savedConfig) {
        const { bio, likes, photo1, photo2 } = JSON.parse(savedConfig);
        if (bio) setFacuBio(bio);
        if (likes) setFacuLikes(likes);
        if (photo1) setPhoto1(photo1);
        if (photo2) setPhoto2(photo2);
      }

      // Check if password was already verified
      const passwordVerified = localStorage.getItem(STORAGE_KEYS.PASSWORD_VERIFIED);
      
      // Load game state
      const savedGameState = localStorage.getItem(STORAGE_KEYS.GAME_STATE);
      const gameState: PersistedGameState | null = savedGameState ? JSON.parse(savedGameState) : null;
      if (gameState) {
        if (gameState.playerName) setPlayerName(gameState.playerName);
        if (gameState.playedMinigames !== undefined) setPlayedMinigames(gameState.playedMinigames);
        if (gameState.coins !== undefined) setCoins(gameState.coins);
        if (gameState.avatarConfig) setAvatarConfig(gameState.avatarConfig);
      }

      // Load navigation history
      const savedHistory = localStorage.getItem(STORAGE_KEYS.NAVIGATION_HISTORY);
      let history: Screen[] = [];
      if (savedHistory) {
        history = JSON.parse(savedHistory);
      }

      // Determine starting screen
      const lastScreen = localStorage.getItem(STORAGE_KEYS.LAST_SCREEN) as Screen;
      
      if (passwordVerified === 'true' && lastScreen && NAVIGABLE_SCREENS.includes(lastScreen)) {
        // User has verified before and has a saved position - restore it
        setCurrentScreen(lastScreen);
        setNavigationHistory(history);
        setShowNavControls(history.length > 0);
      } else if (passwordVerified === 'true') {
        // Verified but no valid saved position - start from presentation
        setCurrentScreen('presentation');
        setNavigationHistory([]);
        setShowNavControls(false);
      } else {
        // First time - start from password
        setCurrentScreen('password');
        setNavigationHistory([]);
        setShowNavControls(false);
      }
    } catch (error) {
      console.error("Failed to load persisted state", error);
      setCurrentScreen('password');
    }
    
    setIsInitialized(true);
  }, []);

  // ─── SAVE STATE WHENEVER IT CHANGES ───────────────────────────
  useEffect(() => {
    if (!isInitialized) return;

    // Save current screen
    localStorage.setItem(STORAGE_KEYS.LAST_SCREEN, currentScreen);
  }, [currentScreen, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    // Save game state
    const gameState: PersistedGameState = {
      playerName,
      playedMinigames,
      coins,
      avatarConfig,
    };
    localStorage.setItem(STORAGE_KEYS.GAME_STATE, JSON.stringify(gameState));
  }, [playerName, playedMinigames, coins, avatarConfig, isInitialized]);

  // ─── NAVIGATION FUNCTIONS ─────────────────────────────────────
  const navigateTo = useCallback((screen: Screen) => {
    setCurrentScreen((prev) => {
      // Add previous screen to history (only if navigable)
      if (NAVIGABLE_SCREENS.includes(prev)) {
        setNavigationHistory((h) => {
          const newHistory = [...h, prev];
          localStorage.setItem(STORAGE_KEYS.NAVIGATION_HISTORY, JSON.stringify(newHistory));
          setShowNavControls(true);
          return newHistory;
        });
      }
      return screen;
    });
  }, []);

  const goBack = useCallback(() => {
    setNavigationHistory((h) => {
      if (h.length === 0) {
        setShowNavControls(false);
        return h;
      }

      const newHistory = [...h];
      const previousScreen = newHistory.pop();
      
      localStorage.setItem(STORAGE_KEYS.NAVIGATION_HISTORY, JSON.stringify(newHistory));
      localStorage.setItem(STORAGE_KEYS.LAST_SCREEN, previousScreen || 'presentation');
      
      if (previousScreen) {
        setCurrentScreen(previousScreen);
      }
      
      setShowNavControls(newHistory.length > 0);
      return newHistory;
    });
  }, []);

  const handlePasswordVerified = useCallback(() => {
    localStorage.setItem(STORAGE_KEYS.PASSWORD_VERIFIED, 'true');
    setCurrentScreen('loading');
    setNavigationHistory([]);
    setShowNavControls(false);
  }, []);

  const handleRestart = useCallback(() => {
    // Clear navigation and game state, but keep Facu's config
    localStorage.removeItem(STORAGE_KEYS.PASSWORD_VERIFIED);
    localStorage.removeItem(STORAGE_KEYS.LAST_SCREEN);
    localStorage.removeItem(STORAGE_KEYS.NAVIGATION_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.GAME_STATE);
    
    setCurrentScreen('password');
    setPlayerName('');
    setPlayedMinigames(false);
    setCoins(0);
    setAvatarConfig(null);
    setNavigationHistory([]);
    setShowNavControls(false);
  }, []);

  // ─── SCREEN HANDLERS ─────────────────────────────────────────
  const handleRegisterAndPlay = useCallback((name: string) => {
    setPlayerName(name);
    setPlayedMinigames(true);
    navigateTo('arcadeWorld');
  }, [navigateTo]);

  const handleRegisterAndSkip = useCallback((name: string) => {
    setPlayerName(name);
    setPlayedMinigames(false);
    navigateTo('missionDetails');
  }, [navigateTo]);

  const handleArcadeEnd = useCallback((earnedCoins: number) => {
    setCoins(earnedCoins);
    navigateTo('avatarCreator');
  }, [navigateTo]);

  const handleAvatarCreate = useCallback((config: AvatarConfig) => {
    setAvatarConfig(config);
    navigateTo('gameFlow');
  }, [navigateTo]);

  // ─── RENDER SCREEN ───────────────────────────────────────────
  const renderScreen = () => {
    switch (currentScreen) {
      case 'password':
        return <PasswordScreen onCorrectPassword={handlePasswordVerified} />;
      case 'loading':
        return <LoadingScreen onStart={() => navigateTo('introVideo')} />;
      case 'introVideo':
        return <IntroVideoScreen onVideoEnd={() => navigateTo('presentation')} />;
      case 'presentation':
        return <PresentationScreen onNext={() => navigateTo('register')} facuBio={facuBio} />;
      case 'register':
        return <RegisterScreen onPlayArcade={handleRegisterAndPlay} onSkipArcade={handleRegisterAndSkip} />;
      case 'arcadeWorld':
        return <ArcadeWorldScreen onArcadeEnd={handleArcadeEnd} />;
      case 'avatarCreator':
        return <ShopSection onNext={() => navigateTo('gameFlow')} />;
      case 'gameFlow':
        return <GameFlow photo1={photo1} photo2={photo2} />;
      case 'missionDetails':
        return <MissionDetailsScreen playerName={playerName} onNext={() => navigateTo('bioBook')} />;
      case 'bioBook':
        return <BioBookScreen onRestart={handleRestart} facuLikes={facuLikes} photo1={photo1} photo2={photo2} />;
      default:
        return <PasswordScreen onCorrectPassword={handlePasswordVerified} />;
    }
  };

  // ─── LOADING STATE ───────────────────────────────────────────
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-blue">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-golden-coin border-t-transparent rounded-full mx-auto mb-4" />
          <p className="font-milky text-xl text-teddy-brown">Cargando aventura...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/fondo_web.mp4"
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] motion-safe:animate-in fade-in-0 duration-1000 brightness-[.85] saturato-[1.2]"
      />

      {/* ─── NAVIGATION CONTROLS (top-left) ─────────────────── */}
      <AnimatePresence>
        {showNavControls && !NO_NAVIGATION_SCREENS.includes(currentScreen) && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-4 z-50 flex gap-2"
          >
            {/* Back button */}
            <button
              onClick={goBack}
              aria-label="Volver a la pantalla anterior"
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border-3 border-teddy-brown rounded-xl px-3 py-2 shadow-[3px_3px_0px_#63340b] hover:shadow-[5px_5px_0px_#63340b] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#63340b] transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-teddy-brown" />
              <span className="font-amble text-xs sm:text-sm text-teddy-brown font-semibold">
                Volver
              </span>
            </button>

            {/* Restart button */}
            <button
              onClick={handleRestart}
              aria-label="Reiniciar la aventura desde el inicio"
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border-3 border-golden-coin rounded-xl px-3 py-2 shadow-[3px_3px_0px_#63340b] hover:shadow-[5px_5px_0px_#63340b] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#63340b] transition-all"
            >
              <RotateCcw className="w-4 h-4 text-golden-coin" />
              <span className="font-amble text-xs sm:text-sm text-teddy-brown font-semibold hidden sm:inline">
                Reiniciar
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── SCREEN CONTENT ─────────────────────────────────── */}
      <div
        key={currentScreen}
        className={cn(
          "absolute inset-0 z-10",
          !NO_NAVIGATION_SCREENS.includes(currentScreen) && "motion-safe:animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out"
        )}
      >
        {renderScreen()}
      </div>
    </div>
  );
}

