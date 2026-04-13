# 01 - Project Overview & Architecture

## Project Name: GRAN FACU AVENTURA (Misión Facu 9)

### Description
Interactive digital birthday invitation inspired by Super Bear Adventure (SBA) game aesthetics. A Single Page Application (SPA) that transforms the invitation experience into a gamified video game journey.

### Tech Stack
- **Framework:** Next.js 15.5.9 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4.19
- **UI Components:** Radix UI + ShadCN UI pattern
- **Animations:** Framer Motion 12.38.0
- **Package Manager:** pnpm 10.33.0
- **Deployment:** Vercel (apphosting.yaml configured)
- **AI Integration:** Genkit 1.32.0 (Google GenAI)

### Key Dependencies
```json
{
  "next": "15.5.9",
  "react": "^19.2.5",
  "framer-motion": "^12.38.0",
  "tailwindcss": "^3.4.19",
  "firebase": "^11.10.0",
  "genkit": "^1.32.0",
  "embla-carousel-react": "^8.6.0",
  "recharts": "^2.15.4"
}
```

### Development Commands
```bash
pnpm dev          # Start dev server on port 9002
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # TypeScript type checking
pnpm genkit:dev   # Start Genkit AI development
```

### Project Structure
```
00pruebasuperbear/
├── src/
│   ├── app/
│   │   ├── 01-home/              # Main invitation flow
│   │   ├── 02-admin-config/      # Admin configuration panel
│   │   ├── 03-admin-guide/       # Admin guide walkthrough
│   │   ├── admin/                # Admin route (alias)
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Entry point (redirects to 01-home)
│   │   └── globals.css           # Global styles + design tokens
│   ├── components/
│   │   ├── 01-password-screen/   # Password protection
│   │   ├── 02-loading-screen/    # Loading screen
│   │   ├── 03-intro-video-screen/
│   │   ├── 04-presentation-screen/
│   │   ├── 05-register-screen/
│   │   ├── 06-arcade-world-screen/
│   │   ├── 07-avatar-creator-screen/
│   │   ├── 08-mission-details-screen/
│   │   ├── 09-bio-book-screen/
│   │   ├── 10-avatar-display/
│   │   ├── 11-game-flow/
│   │   ├── 12-game-hud/
│   │   ├── 13-countdown-timer/
│   │   ├── 14-dialog-box/
│   │   ├── 15-coin-reward/
│   │   ├── 16-responsive-container/
│   │   ├── 18-mission-section/
│   │   ├── 19-chest-section/
│   │   ├── 20-map-section/
│   │   ├── 21-rsvp-section/
│   │   ├── 22-shop-section/
│   │   ├── 23-easter-egg-section/
│   │   └── ui/                   # ShadCN UI components
│   ├── hooks/
│   │   ├── use-rewards.tsx       # Game flow state management
│   │   ├── use-mobile.tsx        # Mobile detection
│   │   ├── use-media-query.ts    # Media query hooks
│   │   └── use-toast.ts          # Toast notifications
│   ├── lib/
│   │   ├── utils.ts              # Utility functions (cn)
│   │   ├── eventData.ts          # Event data configuration
│   │   └── avatarOptions.ts      # Avatar customization options
│   └── ai/                       # Genkit AI flows
├── docs/
│   ├── listas/                   # Image asset lists
│   ├── blueprint.md              # App feature blueprint
│   ├── contexto_proyecto_facu.md # Project context
│   ├── info_juego_sba.md         # SBA game lore/reference
│   └── stitch-ui-reference.md    # Stitch design reference
├── public/                       # Static assets
│   ├── mundos/                   # World backgrounds
│   ├── personajes/               # Character renders
│   └── *.mp4, *.png, *.webp      # Media files
├── scripts/referencias/          # AI reference prompts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

### Event Details (Mission Data)
- **Celebrant:** Facu (Level 9 Unlocked!)
- **Venue:** KBOOM (Av. Italia 3421)
- **Date:** Sunday, May 24th
- **Time:** 18:30 - 21:00 hs
- **Contact:** eventos@kboom.uy | Instagram: @kboom.uy
- **Important:** Bring comfortable clothes and socks for skating, climbing, ninja warrior, and crazy carts

### Related Documentation
- [02 - Design System & Style Guidelines](./02-design-system.md)
- [03 - Screen Flow Architecture](./03-screen-flow.md)
- [04 - Component Architecture](./04-components.md)
- [05 - Game Assets & Images](./05-assets.md)
- [06 - SBA Game Lore & Context](./06-sba-lore.md)
- [07 - Admin Configuration System](./07-admin-system.md)
