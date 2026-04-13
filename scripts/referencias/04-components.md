# 04 - Component Architecture

## Component Organization

All components are numerically organized in `src/components/` following the pattern:
```
XX-component-name/
└── component-name.tsx
```

Where `XX` is a sequential number (01-23) indicating approximate order in the screen flow.

## Main Screen Components (01-09)

### 01-password-screen
**File:** `src/components/01-password-screen/password-screen.tsx`

**Props:**
```typescript
interface PasswordScreenProps {
  onCorrectPassword: () => void;
}
```

**State:**
- `password: string` - User input
- `error: boolean` - Validation error flag

**Dependencies:**
- `@/components/ui/input`
- `@/components/ui/button`
- `lucide-react` (Shield icon)

**Key Functions:**
- `handleSubmit()` - Validates password
- `handleKeyPress(event)` - Detects Enter key

---

### 02-loading-screen
**File:** `src/components/02-loading-screen/loading-screen.tsx`

**Props:**
```typescript
interface LoadingScreenProps {
  onComplete: () => void;
}
```

**State:**
- `progress: number` - Loading progress (0-100)
- `loaded: boolean` - Loading complete flag

**Features:**
- 3D animated logo
- Spinning coins
- Progress bar animation
- "¡START!" button appears at 100%

---

### 03-intro-video-screen
**File:** `src/components/03-intro-video-screen/intro-video-screen.tsx`

**Props:**
```typescript
interface IntroVideoScreenProps {
  onEnd: () => void;
}
```

**Media:**
- Desktop video: `/intro_inicio_pc.mp4`
- Mobile video: `/intro_inicio_movil.mp4`
- Responsive video switching based on viewport

---

### 04-presentation-screen
**File:** `src/components/04-presentation-screen/presentation-screen.tsx`

**Props:**
```typescript
interface PresentationScreenProps {
  onNext: () => void;
}
```

**Background:** `/mundos/bear_village/Hubbearvillage.webp`

---

### 05-register-screen
**File:** `src/components/05-register-screen/register-screen.tsx`

**Props:**
```typescript
interface RegisterScreenProps {
  onComplete: (playerName: string) => void;
}
```

**State:**
- `keys: number` - Collected keys (0-3)
- `playerName: string` - Guest name input
- `confirmed: boolean` - Confirmation checkbox
- `formUnlocked: boolean` - All keys collected

**Minigame:** 3 clickable yellow keys scattered across page

---

### 06-arcade-world-screen
**File:** `src/components/06-arcade-world-screen/arcade-world-screen.tsx`

**Props:**
```typescript
interface ArcadeWorldScreenProps {
  coins: number;
  onCoinsUpdate: (coins: number) => void;
  onComplete: () => void;
}
```

**Features:**
- Arcade machine UI
- Coin reward system
- Roulette/spinner
- Score tracking

---

### 07-avatar-creator-screen
**File:** `src/components/07-avatar-creator-screen/avatar-creator-screen.tsx`

**Props:**
```typescript
interface AvatarCreatorScreenProps {
  onSave: (avatarConfig: AvatarConfig) => void;
}
```

**State:**
- `selectedBody: string`
- `selectedOutfit: string`
- `selectedAccessories: string[]`
- `previewConfig: AvatarConfig`

**Data Source:** `src/lib/avatarOptions.ts`

---

### 08-mission-details-screen
**File:** `src/components/08-mission-details-screen/mission-details-screen.tsx`

**Props:**
```typescript
interface MissionDetailsScreenProps {
  onViewBio: () => void;
}
```

**Data Source:** `src/lib/eventData.ts`

**Event Info:**
- Date, Time, Location, Contact
- Dialog boxes with Shicka and Baaren

---

### 09-bio-book-screen
**File:** `src/components/09-bio-book-screen/bio-book-screen.tsx`

**Props:**
```typescript
interface BioBookScreenProps {
  facuBio: string;
  facuLikes: string[];
  photo1: string | null;
  photo2: string | null;
  avatarConfig: AvatarConfig;
}
```

**Sections:**
- Bio message display
- Likes inventory (grid)
- Memory chest (photo carousel)
- Avatar showcase

---

## Utility Components (10-23)

### 10-avatar-display
Shows configured avatar with selected options

### 11-game-flow
Manages screen transitions and flow state

### 12-game-hud
Heads-up display (coins, lives, progress)

### 13-countdown-timer
Countdown timer to event date (bomb timer style)

### 14-dialog-box
Game-style dialog boxes with character portraits

### 15-coin-reward
Coin animation and reward effects

### 16-responsive-container
Responsive wrapper with safe area support

### 18-mission-section
Mission info section (date, time, location)

### 19-chest-section
Memory chest photo carousel

### 20-map-section
Interactive map with floating icons

### 21-rsvp-section
RSVP confirmation form

### 22-shop-section
Outfit shop with SBA graphics

### 23-easter-egg-section
The Backrooms easter egg (Shadow Bear)

---

## UI Components (ShadCN Pattern)

Located in `src/components/ui/`:

| Component | File | Usage |
|-----------|------|-------|
| Accordion | `accordion.tsx` | Expandable sections |
| Alert Dialog | `alert-dialog.tsx` | Confirmation dialogs |
| Avatar | `avatar.tsx` | User avatars |
| Badge | `badge.tsx` | Status badges |
| Button | `button.tsx` | All buttons |
| Calendar | `calendar.tsx` | Date pickers |
| Card | `card.tsx` | Card containers |
| Carousel | `carousel.tsx` | Photo carousels (embla-carousel) |
| Checkbox | `checkbox.tsx` | Checkboxes |
| Dialog | `dialog.tsx` | Modal dialogs |
| Dropdown Menu | `dropdown-menu.tsx` | Dropdown menus |
| Form | `form.tsx` | Form wrappers (react-hook-form) |
| Input | `input.tsx` | Text inputs |
| Label | `label.tsx` | Form labels |
| Popover | `popover.tsx` | Popovers |
| Progress | `progress.tsx` | Progress bars |
| Radio Group | `radio-group.tsx` | Radio buttons |
| Scroll Area | `scroll-area.tsx` | Custom scroll |
| Select | `select.tsx` | Select dropdowns |
| Separator | `separator.tsx` | Dividers |
| Slider | `slider.tsx` | Range sliders |
| Switch | `switch.tsx` | Toggle switches |
| Tabs | `tabs.tsx` | Tab navigation |
| Textarea | `textarea.tsx` | Multi-line inputs |
| Toast | `toast.tsx` | Toast notifications |
| Toaster | `toaster.tsx` | Toast container |
| Tooltip | `tooltip.tsx` | Tooltips |

---

## Component Patterns

### Client Components
All interactive components use `"use client"` directive:
```typescript
"use client";

import { useState } from 'react';

interface MyComponentProps {
  onAction: () => void;
}

export function MyComponent({ onAction }: MyComponentProps) {
  const [state, setState] = useState(initialValue);
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Voxel Card Pattern
```typescript
<div className="voxel-card p-6 bg-cloud-white">
  <h2 className="font-milky text-2xl text-teddy-brown">
    Title
  </h2>
  <p className="font-body text-voxel-text">
    Content
  </p>
</div>
```

### 3D Button Pattern
```typescript
<button className="btn-3d-gold px-8 py-4 font-milky text-xl">
  Click Me
</button>
```

### Dialog Box Pattern
```typescript
<div className="voxel-card-gold p-6 relative">
  <div className="absolute -top-12 left-4">
    <img src="/personajes/Shicka_render_.png" alt="Shicka" />
  </div>
  <p className="font-amble text-voxel-text mt-4">
    Dialog text here...
  </p>
</div>
```

---

## Component Dependencies

### External Libraries
- **framer-motion:** Animations and transitions
- **lucide-react:** Icon library
- **embla-carousel-react:** Photo carousels
- **react-hook-form:** Form handling
- **zod:** Form validation schemas

### Internal Dependencies
- **@/hooks/use-rewards:** Game flow state
- **@/hooks/use-toast:** Toast notifications
- **@/lib/utils:** `cn()` class merger
- **@/lib/eventData:** Event configuration
- **@/lib/avatarOptions:** Avatar customization data

---

## Best Practices for AI Agents

1. **ALWAYS** extract reusable components to `src/components/`
2. **USE** numeric prefix naming (XX-component-name)
3. **PREFER** composition over inheritance
4. **DEFINE** TypeScript interfaces for all props
5. **USE** `"use client"` only when needed (interactivity, hooks)
6. **IMPORT** UI components from `@/components/ui/` (ShadCN pattern)
7. **APPLY** voxel design tokens (`.voxel-card`, `.btn-3d-gold`)
8. **TEST** responsiveness at 3 breakpoints (mobile, tablet, desktop)
9. **AVOID** inline styles, use Tailwind classes
10. **DOCUMENT** complex component logic with comments
