# 05 - Game Assets & Images

## Asset Organization

All assets are stored in `/public/` directory with the following structure:

```
public/
├── mundos/                 # World backgrounds
│   ├── bear_village/       # Bear Village areas
│   ├── turtletown/         # Turtletown level
│   ├── snow_valley/        # Snow Valley level
│   ├── beemothep_desert/   # Beemothep Desert
│   ├── giant_house/        # Giant House
│   └── the_hive/           # The Hive
├── personajes/             # Character renders
├── *.webp, *.png           # Root-level images
├── *.mp4                   # Videos
└── MilkyNice_Clean.ttf     # Custom font
```

---

## Videos

| File | Usage | Properties |
|------|-------|------------|
| `/fondo_web.mp4` | Main background video | autoPlay, loop, muted, playsInline |
| `/intro_inicio_pc.mp4` | Intro cinematic (desktop) | autoPlay, muted |
| `/intro_inicio_movil.mp4` | Intro cinematic (mobile) | autoPlay, muted |

---

## Character Renders

### Main Characters
| File | Character | Description |
|------|-----------|-------------|
| `/personajes/Baaren.render.png` | Baaren | Hero bear (brown bear, protagonist) |
| `/personajes/Shicka_render_.png` | Shicka | Yellow backpacker chick (guide) |
| `/personajes/Queen_Beeatrice_render.png` | Queen Beeatrice | Bee queen (mind-controlled boss) |
| `/personajes/Capitalus_render.png` | Capitalus | Clothing shop owner |
| `/personajes/Tristopio_render.png` | Tristopio | Pink rabbit (daily missions) |
| `/personajes/Cientifico_render.png` | The Scientist | Eccentric inventor (Giant House) |

### Enemies & NPCs
| File | Character | Description |
|------|-----------|-------------|
| `/personajes/Bee_render.png` | Bee | Common enemy |
| `/personajes/Turtle_render.png` | Turtle | Turtletown inhabitant |
| `/personajes/Penguin_render.png` | Penguin | Snow Valley inhabitant |
| `/personajes/Crogo_render_.png` | Crogo | Crocodile enemy |
| `/personajes/Rats_render_.png` | Rats | Giant House enemies |
| `/personajes/Cockroach_render.png` | Cockroach | Giant House enemy |
| `/personajes/Violette_render.png` | Violette | The Hive enemy |
| `/personajes/Caterpillar_render.png` | Caterpillar | Caterpillar enemy |
| `/Baaren_brother_transparent.webp` | Baaren's Brother | Final boss (purple bear) |

---

## Facu's Assets

| File | Description | Usage |
|------|-------------|-------|
| `/facu.jpg` | Facu's photo (Taekwondo uniform) | Profile/identity |
| `/facu2.jpeg` | Facu's portrait | Alternative photo |
| `/facu_bear.png` | Facu as bear mascot (with background) | Avatar/branding |
| `/facu_bear_sin_fondo.png` | Facu as bear mascot (no background) | Avatar overlay |

---

## World Backgrounds

### Bear Village
| File | Location | Description |
|------|----------|-------------|
| `/mundos/bear_village/Hubbearvillage.webp` | Spawnpoint | Main village hub |
| `/mundos/bear_village/Spawnpoint.webp` | Spawnpoint | Center circle with Capitalus shops |
| `/mundos/bear_village/Outfitshopplatform.webp` | Outfit Shop | Stone platform for outfit changes |
| `/mundos/bear_village/River.webp` | River | Water from Snow Valley |
| `/mundos/bear_village/Lowerarea.webp` | Lower Area | Turtle house, Arcade World, DJ Pierre |
| `/mundos/bear_village/Tutorialzone.webp` | Tutorial Zone | Training area |
| `/mundos/bear_village/Tristopioshop.webp` | Tristopio's Shop | Shop near Beemothep entrance |
| `/mundos/bear_village/Turtletownentrancearea.webp` | Turtletown Entrance | Entrance with vines |
| `/mundos/bear_village/Snowvalleyentrancearea.webp` | Snow Valley Entrance | Snowy area with saw |
| `/mundos/bear_village/Beemothepdesertentrancearea.webp` | Beemothep Entrance | Desert with bear statue |
| `/mundos/bear_village/Gianthouseentrancearea.webp` | Giant House Entrance | Shrinking machine |
| `/mundos/bear_village/Newhiveentrancearea.webp` | The Hive Entrance | Purple honey platforms |

### Example World Renders
| File | Description |
|------|-------------|
| `/public/casa.webp` | Giant House interior (cluttered kitchen) |
| `/public/ciudad.webp` | Turtletown outdoor scene |
| `/public/desierto.webp` | Beemothep Desert with HUD |
| `/public/frio.webp` | Snow Valley winter landscape |

---

## Logo & Branding

| File | Description | Usage |
|------|-------------|-------|
| `/titulo_super_facu_1.png` | Main title image | OG image, hero |
| `/ejemplo1.png` | "FACU AVENTURAS!" promotional | Example/branding |
| `/ejemplo2.png` | "SUPER BEAR ADVENTURE" logo | Reference logo |
| `/ejemplo3.jpg` | Turtletown landscape | Background reference |
| `/ejemplo4.jpg` | Nintendo Switch promo | Marketing |
| `/ejemplo5.webp` | Red panda character | Style reference |
| `/ejemplo6.jpg` | "KIT DE FIESTA SUPER BEAR" | Party kit branding |

---

## Font Files

| File | Font | License | Usage |
|------|------|---------|-------|
| `/MilkyNice_Clean.ttf` | Milky Nice | Apache 2.0 | Main SBA game font (titles, CTAs) |

**Other Fonts (Loaded from CDN):**
- **Amble:** `https://fonts.cdnfonts.com/css/amble` (SBA UI font, Apache 2.0)
- **Fredoka One:** Google Fonts (headlines)
- **Quicksand:** Google Fonts (body text)

---

## Image Optimization Guidelines

### Preferred Formats
1. **WebP:** For all backgrounds and large images (better compression)
2. **PNG:** For character renders with transparency
3. **JPG:** For photos (Facu's pictures)
4. **MP4:** For videos (compressed, muted, looped)

### Naming Conventions
- Use lowercase with underscores: `bear_village.webp`
- Character renders: `CharacterName_render.png`
- World areas: `LocationArea.webp`

### Responsive Images
Use Next.js `<Image>` component for optimization:
```typescript
import Image from 'next/image';

<Image
  src="/mundos/bear_village/Hubbearvillage.webp"
  alt="Bear Village"
  width={1920}
  height={1080}
  priority  // For above-the-fold images
/>
```

---

## Asset Loading Patterns

### Background Video
```typescript
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/fondo_web.mp4" type="video/mp4" />
</video>
```

### Character with Float Animation
```typescript
<div className="animate-float">
  <Image
    src="/personajes/Shicka_render_.png"
    alt="Shicka"
    width={120}
    height={120}
  />
</div>
```

### Responsive Image Switching
```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
const videoSrc = isMobile ? '/intro_inicio_movil.mp4' : '/intro_inicio_pc.mp4';
```

---

## Complete Asset List (from rutas_imagenes.md)

The full asset list with AI generation prompts is available in:
- `scripts/referencias/rutas_imagenes.md` (392 lines, detailed prompts for each image)
- `scripts/referencias/detalles_imagenes.md` (master guide with world locations)

---

## Rules for AI Agents

1. **ALWAYS** use relative paths from `/public/` (e.g., `/mundos/bear_village/River.webp`)
2. **PREFER** `.webp` files for backgrounds (better performance)
3. **USE** `<Image>` component for automatic optimization
4. **AVOID** hotlinking external images (use local assets only)
5. **INCLUDE** `alt` text for accessibility
6. **SPECIFY** `width` and `height` to prevent layout shift
7. **USE** `priority` prop for above-the-fold images
8. **TEST** image loading on slow connections (3G simulation)
9. **COMPRESS** new images before adding to `/public/`
10. **DOCUMENT** new assets in this file
