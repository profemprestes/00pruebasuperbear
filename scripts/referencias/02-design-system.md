# 02 - Design System & Style Guidelines

## Color Palette (Sky World Theme)

### Primary Colors
| Token | Hex Value | HSL | Usage |
|-------|-----------|-----|-------|
| `--sky-blue` | `#87CEEB` | `206 73% 73%` | Main background, sky theme |
| `--grass-green` | `#7CFC00` | Action buttons, interactive elements |
| `--teddy-brown` | `#8B4513` | Borders, text, earth elements |
| `--golden-coin` | `#FFD700` | Rewards, CTAs, highlights |
| `--cloud-white` | `#FFFFFF` | Cards, panels, clean backgrounds |

### Honey-Box Arcade Tokens
| Token | Hex Value | Usage |
|-------|-----------|-------|
| `--honey-box-primary` | `#FFD700` | Primary interactive elements |
| `--honey-box-secondary` | `#8B4513` | Secondary accents |
| `--honey-box-tertiary` | `#7CFC00` | Tertiary highlights |
| `--honey-box-sky` | `#ECF8FF` | Light sky backgrounds |
| `--honey-box-sky-variant` | `#AAE5FF` | Sky variant elements |
| `--honey-box-text` | `#003342` | Primary text color |
| `--honey-box-brown-shadow` | `#63340b` | 3D button shadows |

### Tailwind Color Aliases
```typescript
'sky-blue':      'var(--sky-blue)',
'grass-green':   'var(--grass-green)',
'teddy-brown':   'var(--teddy-brown)',
'golden-coin':   'var(--golden-coin)',
'cloud-white':   'var(--cloud-white)',
'sky-light':      'var(--honey-box-sky)',
'sky-variant':    'var(--honey-box-sky-variant)',
'brown-shadow':   'var(--honey-box-brown-shadow)',
'voxel-text':     'var(--honey-box-text)',
```

## Typography

### Font Families
| Name | CSS Font | Usage |
|------|----------|-------|
| `body` | `'Amble', 'Quicksand', sans-serif` | Body text, UI elements (SBA pre-2021) |
| `headline` | `'Fredoka One', sans-serif` | Headlines, titles |
| `milky` | `'Milky Nice', sans-serif` | **Main SBA font** (titles, CTA buttons) |
| `amble` | `'Amble', sans-serif` | HUD labels, subtitles |
| `arcade` | `'Gill Sans MT', 'Gill Sans', sans-serif` | ARCADE labels (in-game style) |
| `impact` | `'Impact', 'Arial Narrow Bold', sans-serif` | VIP badges, counters |
| `calibri` | `'Calibri', 'Carlito', sans-serif` | Event info cards (book-like) |

### Font Loading (layout.tsx)
```html
<!-- Amble — SBA's official UI font (Apache 2.0) -->
<link href="https://fonts.cdnfonts.com/css/amble" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
<!-- Milky Nice loaded locally from /public/MilkyNice_Clean.ttf -->
```

## Voxel/Low-Poly Style

### Design Principles
1. **Blocky Geometry:** Use simple geometric shapes (cubes, squares)
2. **Thick Borders:** 4-6px solid borders with `teddy-brown` or `golden-coin`
3. **3D Depth:** Heavy box-shadows to simulate depth
4. **Pixel-Art Feel:** Avoid smooth gradients, prefer flat colors
5. **Game UI Metaphor:** Dialog boxes, chests, maps, coins, keys

### CSS Utility Classes

#### Voxel Cards
```css
.voxel-card {
  border: 4px solid var(--teddy-brown);
  box-shadow: 0 6px 0 var(--honey-box-brown-shadow), 4px 4px 0 rgba(0,0,0,0.2);
  border-radius: 1rem;
}

.voxel-card-gold {
  border: 6px solid var(--golden-coin);
  box-shadow: 0 10px 30px rgba(255,215,0,0.5), 8px 8px 0 #b8860b;
  border-radius: 1rem;
}
```

#### 3D Buttons
```css
.btn-3d-gold {
  background: var(--golden-coin);
  border: 3px solid var(--honey-box-secondary);
  box-shadow: 0 6px 0 var(--honey-box-brown-shadow);
  border-radius: 1.5rem;
  transition: all 0.1s ease;
}
.btn-3d-gold:hover {
  box-shadow: 0 8px 0 var(--honey-box-brown-shadow);
  transform: translateY(-2px);
}
.btn-3d-gold:active {
  transform: translateY(3px);
  box-shadow: 0 3px 0 var(--honey-box-brown-shadow);
}
```

#### Pixel Grass Decoration
```css
.pixel-grass {
  background: linear-gradient(to bottom, #7CFC00 0%, #5DBB00 40%, #3E8B00 100%);
  clip-path: polygon(0% 30%, 3% 0%, 6% 30%, 9% 5%, ...);
}
```

## Shadows (Tailwind Config)
```typescript
boxShadow: {
  '3d': '4px 4px 0px 0px hsl(var(--foreground))',
  '3d-gold': '0 6px 0 #63340b',
  '3d-gold-pressed': '0 3px 0 #63340b',
  'glow-gold': '0 10px 30px rgba(255,215,0,0.5), 8px 8px 0 #b8860b',
  '3d-blue': '0 6px 0 #00008B',
  '3d-blue-pressed': '0 3px 0 #00008B',
  '3d-green': '0 6px 0 #2E8B57',
}
```

## Animations

### Keyframes (Tailwind Config)
| Name | Description | Duration |
|------|-------------|----------|
| `float` | Vertical floating motion | 3s infinite |
| `sway` | Horizontal swaying | 4s infinite |
| `roulette` | Rotation animation | 2s (spin) |
| `subtle-float` | Gentle float effect | 2s infinite |
| `blink` | Blinking opacity | 1.5s infinite |
| `pulse-badge` | Pulsing scale + shadow | 2s infinite |
| `shimmer` | Shimmer gradient shift | 3s infinite |
| `bounce-light` | Light bounce effect | 1.2s infinite |

### Confetti Animation
- Automatically triggers on celebration screens
- 15 confetti pieces with varied colors: `#f2d74e`, `#95c3de`, `#ff9a91`, `#FFD700`, `#7CFC00`
- 5s infinite loop with staggered delays

## Safe Area Utilities (Mobile Notch Support)
```css
.safe-p-top { padding-top: max(var(--spacing, 0px), var(--safe-top)); }
.safe-p-bottom { padding-bottom: max(var(--spacing, 0px), var(--safe-bottom)); }
.safe-p-left { padding-left: max(var(--spacing, 0px), var(--safe-left)); }
.safe-p-right { padding-right: max(var(--spacing, 0px), var(--safe-right)); }
```

## Dark Mode
- Enabled via `class` strategy
- Different color palette for dark theme
- Toggle available in admin panels

## Responsive Breakpoints
| Breakpoint | Width | Usage |
|------------|-------|-------|
| `xs` | 480px | Extra small mobile |
| `sm` | 640px | Small mobile |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

## Design Rules for AI Agents
1. **ALWAYS** use design tokens (CSS variables) instead of hardcoded colors
2. **PREFER** `.voxel-card`, `.btn-3d-gold` utility classes for consistency
3. **USE** `font-milky` for titles, `font-body` for text
4. **AVOID** smooth gradients, prefer flat voxel colors
5. **MAINTAIN** 3D button effect: border + box-shadow + translateY on active
6. **TEST** on mobile-first (max-width: 768px) before desktop
