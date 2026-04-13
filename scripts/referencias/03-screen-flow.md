# 03 - Screen Flow Architecture

## Main Invitation Flow (9 Sequential Screens)

The main user journey follows a gamified sequence of 9 screens, managed by the `use-rewards` hook state machine.

### Screen Flow Diagram
```
┌─────────────────────┐
│  01. Password       │ ← Entry point (private invitation)
│     Screen          │
└──────────┬──────────┘
           │ (correct password)
           ▼
┌─────────────────────┐
│  02. Loading        │ ← World loading animation
│     Screen          │   (3D logo, spinning coins, progress bar)
└──────────┬──────────┘
           │ (loading complete + "START!" click)
           ▼
┌─────────────────────┐
│  03. Intro Video    │ ← Cinematic introduction
│     Screen          │   (desktop: /intro_inicio_pc.mp4)
└──────────┬──────────┘ (mobile: /intro_inicio_movil.mp4)
           │ (video ends or skip)
           ▼
┌─────────────────────┐
│  04. Presentation   │ ← Welcome screen with Bear Village background
│     Screen          │   (Baaren character, floating icons)
└──────────┬──────────┘
           │ ("Continue" click)
           ▼
┌─────────────────────┐
│  05. Register       │ ← Guest registration + minigame
│     Screen          │   (collect 3 keys to unlock RSVP form)
└──────────┬──────────┘
           │ (registration complete)
           ▼
┌─────────────────────┐
│  06. Arcade World   │ ← Interactive arcade minigame area
│     Screen          │   (rewards, coins, achievements)
└──────────┬──────────┘
           │ (minigames complete)
           ▼
┌─────────────────────┐
│  07. Avatar Creator │ ← Character customization
│     Screen          │   (choose outfit, colors, accessories)
└──────────┬──────────┘
           │ (avatar saved)
           ▼
┌─────────────────────┐
│  08. Mission        │ ← Event details (date, time, location)
│     Details         │   (dialog boxes with Shicka, Baaren)
│     Screen          │
└──────────┬──────────┘
           │ ("View Bio Book" click)
           ▼
┌─────────────────────┐
│  09. Bio Book       │ ← Facu's profile (likes, photos, bio)
│     Screen          │   (memory chest, inventory of interests)
└─────────────────────┘
```

## Screen Details

### 01. Password Screen
- **Component:** `01-password-screen/password-screen.tsx`
- **Purpose:** Protect private invitation with password
- **State:** `password` (string), `error` (boolean)
- **UI Elements:**
  - Shield icon
  - Title: "Acceso Privado"
  - Description: "Esta es una invitación privada. Por favor, ingresa la contraseña."
  - Password input field
  - "Ingresar" button
- **Validation:** Password must match expected value
- **On Success:** Calls `onCorrectPassword()` callback

### 02. Loading Screen
- **Component:** `02-loading-screen/loading-screen.tsx`
- **Purpose:** Simulate game world loading
- **UI Elements:**
  - 3D animated "FACU 9" logo
  - Spinning coin animations
  - Progress bar (0-100%)
  - "¡START!" giant button (appears at 100%)
- **Animations:** Auto-progress simulation, coin rotation

### 03. Intro Video Screen
- **Component:** `03-intro-video-screen/intro-video-screen.tsx`
- **Purpose:** Cinematic introduction
- **Media:**
  - Desktop: `/intro_inicio_pc.mp4`
  - Mobile: `/intro_inicio_movil.mp4`
- **Features:** Auto-play, muted, loop, skip button
- **On Complete:** Triggers next screen automatically

### 04. Presentation Screen
- **Component:** `04-presentation-screen/presentation-screen.tsx`
- **Purpose:** Welcome screen with Bear Village atmosphere
- **Background:** `/mundos/bear_village/Hubbearvillage.webp`
- **UI Elements:**
  - Welcome message
  - Floating character icons (Shicka, Baaren)
  - "Continue" button
- **Animations:** Floating icons, subtle parallax

### 05. Register Screen
- **Component:** `05-register-screen/register-screen.tsx`
- **Purpose:** Guest registration + key collection minigame
- **Mechanics:**
  - Collect 3 yellow keys scattered across the page
  - Keys tracked via React state
  - Form unlocks only after all 3 keys collected
- **Form Fields:**
  - "Nombre del Jugador" (player name)
  - Confirmation checkbox
- **On Submit:** Triggers "Mission Complete" celebration

### 06. Arcade World Screen
- **Component:** `06-arcade-world-screen/arcade-world-screen.tsx`
- **Purpose:** Interactive minigame area
- **Features:**
  - Arcade machine UI
  - Coin rewards system
  - Score tracking
  - Roulette/spinner animations
- **Background:** Arcade world theme

### 07. Avatar Creator Screen
- **Component:** `07-avatar-creator-screen/avatar-creator-screen.tsx`
- **Purpose:** Character customization
- **Options (from `avatarOptions.ts`):**
  - Body colors
  - Outfit selection
  - Accessories (hats, glasses)
  - facial features
- **Preview:** Real-time avatar display
- **On Save:** Stores `avatarConfig` in state

### 08. Mission Details Screen
- **Component:** `08-mission-details-screen/mission-details-screen.tsx`
- **Purpose:** Display event information
- **Event Data (from `eventData.ts`):**
  - **Date:** Sunday, May 24th
  - **Time:** 18:30 - 21:00 hs
  - **Location:** KBOOM (Av. Italia 3421)
  - **Contact:** eventos@kboom.uy | @kboom.uy
- **UI Elements:**
  - Dialog boxes with characters (Shicka, Baaren)
  - Floating icons (calendar, clock, map)
  - "View Bio Book" button

### 09. Bio Book Screen
- **Component:** `09-bio-book-screen/bio-book-screen.tsx`
- **Purpose:** Facu's profile and memories
- **Sections:**
  - **Bio Message:** Custom welcome message from Facu
  - **Inventory of Likes:** List of Facu's interests (basketball, Taekwondo, etc.)
  - **Memory Chest:** Photo carousel (2 photos of Facu)
  - **Avatar Display:** Shows created avatar
- **Data Source:** Admin configuration (stored in Firebase/localStorage)

## Admin Panels (Separate Flow)

### 02-admin-config/page.tsx
- **Purpose:** Facu's configuration panel
- **Sections:**
  1. **Presentation Message:** Custom welcome text (max chars: 150)
  2. **Inventory of Likes:** Add/remove interests
  3. **Memory Chest:** Upload 2 photos
- **Features:**
  - Live preview of invitation
  - Progress tracking
  - "Compile Level" button (saves configuration)
- **Storage:** Firebase or localStorage

### 03-admin-guide/page.tsx
- **Purpose:** Step-by-step guide for Facu
- **Steps:**
  1. Define your Super Power (basketball, Taekwondo, etc.)
  2. Fill Epic Inventory (sports, games, creativity, food)
  3. The Great Adventure awaits (preview of what happens)
- **Rewards:** Unlocks exclusive skins, titles, secret games

## Game Flow State Management

### use-rewards Hook
```typescript
interface GameFlowState {
  currentScreen: string;        // Current active screen
  playerName: string;           // Guest name (from registration)
  playedMinigames: number;      // Minigames completed
  coins: number;                // Earned coins
  avatarConfig: AvatarConfig;   // Avatar customization data
  facuBio: string;              // Facu's bio message
  facuLikes: string[];          // Facu's interests list
  photo1: string | null;        // Memory photo 1
  photo2: string | null;        // Memory photo 2
}
```

### Navigation Pattern
```typescript
// In 01-home/page.tsx
const renderScreen = () => {
  switch (currentScreen) {
    case 'password': return <PasswordScreen onCorrectPassword={...} />;
    case 'loading': return <LoadingScreen onComplete={...} />;
    case 'introVideo': return <IntroVideoScreen onEnd={...} />;
    case 'presentation': return <PresentationScreen onNext={...} />;
    case 'register': return <RegisterScreen onComplete={...} />;
    case 'arcadeWorld': return <ArcadeWorldScreen onComplete={...} />;
    case 'avatarCreator': return <AvatarCreatorScreen onSave={...} />;
    case 'missionDetails': return <MissionDetailsScreen onViewBio={...} />;
    case 'bioBook': return <BioBookScreen />;
    default: return <PasswordScreen />;
  }
};
```

## Easter Eggs

### The Backrooms (Shadow Bear)
- **Access:** Triple-click hidden area (noclip simulation)
- **Component:** `23-easter-egg-section/easter-egg-section.tsx`
- **UI:** Creepy yellow labyrinth, Shadow Bear character
- **Reference:** SBA's secret Backrooms level

## Responsive Behavior

### Mobile-First Strategy
- All screens use `ResponsiveContainer` component
- Single column layout on mobile (max-width: 768px)
- Touch-friendly buttons (min 44px height)
- Safe area insets for iOS notch/Android bars

### Breakpoints
- **Mobile (< 640px):** Stacked layout, large touch targets
- **Tablet (640px - 1024px):** 2-column grids where applicable
- **Desktop (> 1024px):** Full-width with centered content (max-width: 1280px)
