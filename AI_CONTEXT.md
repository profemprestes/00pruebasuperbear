# AI_CONTEXT.md - Guía de Contexto para IA

> **Propósito:** Permitir que cualquier inteligencia artificial entienda rápidamente este proyecto y pueda trabajar eficientemente manteniendo consistencia arquitectónica y de diseño.

---

## 📋 Índice

1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Estructura de Carpetas](#estructura-de-carpetas)
3. [Flujo de las 9 Pantallas Secuenciales](#flujo-de-las-9-pantallas-secuenciales)
4. [Sistema de Diseño](#sistema-de-diseño)
5. [Patrones de Implementación](#patrones-de-implementación)
6. [Reglas: Qué Hacer y Qué Evitar](#reglas-qué-hacer-y-qué-evitar)
7. [Comandos de Desarrollo](#comandos-de-desarrollo)
8. [Debugging Tips](#debugging-tips)
9. [Referencias Rápidas](#referencias-rápidas)

---

## Arquitectura del Proyecto

### Tech Stack Principal
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 15.5.9 | Framework (App Router) |
| **React** | 19.2.5 | Biblioteca UI |
| **TypeScript** | 5.9.3 | Tipado estátrico |
| **Tailwind CSS** | 3.4.19 | Estilos utility-first |
| **Framer Motion** | 12.38.0 | Animaciones |
| **Radix UI** | Varios | Componentes base accesibles |
| **Genkit** | 1.32.0 | Integración AI (Google GenAI) |
| **Firebase** | 11.10.0 | Backend (auth, firestore) |
| **pnpm** | 10.33.0 | Package manager |

### Arquitectura de Carpetas
```
src/
├── app/                    # Next.js App Router (rutas)
│   ├── 01-home/            # Flujo principal de invitación
│   ├── 02-admin-config/    # Panel de configuración de Facu
│   ├── 03-admin-guide/     # Guía paso a paso para Facu
│   ├── admin/              # Alias de admin
│   ├── layout.tsx          # Layout raíz (fuentes, metadata)
│   ├── page.tsx            # Entry point (redirige a 01-home)
│   └── globals.css         # Variables CSS + utilidades globales
│
├── components/             # Componentes React
│   ├── 01-password-screen/  # (9 pantallas principales)
│   ├── 02-loading-screen/
│   ├── 03-intro-video-screen/
│   ├── 04-presentation-screen/
│   ├── 05-register-screen/
│   ├── 06-arcade-world-screen/
│   ├── 07-avatar-creator-screen/
│   ├── 08-mission-details-screen/
│   ├── 09-bio-book-screen/
│   ├── 10-avatar-display/   # Componentes utilitarios
│   ├── 11-game-flow/
│   ├── 12-game-hud/
│   ├── 13-countdown-timer/
│   ├── 14-dialog-box/
│   ├── 15-coin-reward/
│   ├── 16-responsive-container/
│   ├── 18-mission-section/
│   ├── 19-chest-section/
│   ├── 20-map-section/
│   ├── 21-rsvp-section/
│   ├── 22-shop-section/
│   ├── 23-easter-egg-section/
│   └── ui/                 # Componentes ShadCN UI
│
├── hooks/                  # Hooks personalizados
│   ├── use-rewards.tsx     # Estado del flujo de juego
│   ├── use-mobile.tsx      # Detección de móvil
│   ├── use-media-query.ts  # Media queries
│   └── use-toast.ts        # Notificaciones toast
│
├── lib/                    # Utilidades y configuraciones
│   ├── utils.ts            # Función cn() para clases
│   ├── eventData.ts        # Datos del evento
│   └── avatarOptions.ts    # Opciones de avatar
│
└── ai/                     # Flujos Genkit AI
```

### Modelo de Datos
```typescript
// Estado principal del juego (01-home/page.tsx)
interface GameFlowState {
  currentScreen: string;           // Pantalla activa
  playerName: string;              // Nombre del invitado
  playedMinigames: number;         // Minijuegos completados
  coins: number;                   // Monedas ganadas
  avatarConfig: AvatarConfig;      // Configuración del avatar
  facuBio: string;                 // Mensaje de Facu
  facuLikes: string[];             // Gustos de Facu
  photo1: string | null;           // Foto 1 (Cofre de Recuerdos)
  photo2: string | null;           // Foto 2
}

// Configuración de Facu (admin)
interface FacuConfig {
  bio: string;                     // Mensaje de presentación
  likes: string[];                 // Lista de gustos
  photo1: string | null;           // Base64/URL foto 1
  photo2: string | null;           // Base64/URL foto 2
  avatarConfig?: AvatarConfig;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Estructura de Carpetas

### Principales Directorios

| Directorio | Propósito | Contenido Clave |
|------------|-----------|-----------------|
| `src/app/` | Rutas Next.js | Páginas principales (01-home, 02-admin-config, etc.) |
| `src/components/` | Componentes UI | 23 componentes numerados + ui/ |
| `src/hooks/` | Hooks React | use-rewards, use-mobile, use-toast |
| `src/lib/` | Utilidades | utils.ts, eventData.ts, avatarOptions.ts |
| `src/ai/` | Flujos Genkit | Configuración de AI |
| `public/` | Assets estáticos | Videos, imágenes, fuentes |
| `docs/` | Documentación | Blueprint, contexto, lore de SBA |
| `scripts/referencias/` | Referencias IA | 7 guías numeradas para agentes |

### Convención de Nomenclatura

- **Componentes:** `XX-nombre-componente/` (número secuencial 01-23)
- **Archivos:** kebab-case (`password-screen.tsx`)
- **Hooks:** camelCase con prefijo `use-` (`use-rewards.tsx`)
- **Variables:** camelCase (`currentScreen`, `playerName`)
- **Constantes:** UPPER_SNAKE_CASE (si aplica)

---

## Flujo de las 9 Pantallas Secuenciales

```
┌──────────────────────────────────────────────────────────┐
│ 01. PASSWORD SCREEN                                      │
│ Propósito: Proteger invitación con contraseña            │
│ Estado: password (string), error (boolean)               │
│ Éxito: onCorrectPassword() → siguiente pantalla          │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 02. LOADING SCREEN                                       │
│ Propósito: Simular carga del mundo (barra de progreso)   │
│ UI: Logo 3D "FACU 9", monedas giratorias, barra 0-100%   │
│ Botón: "¡START!" aparece al 100%                         │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 03. INTRO VIDEO SCREEN                                   │
│ Propósito: Cinemática de introducción                    │
│ Video: /intro_inicio_pc.mp4 (desktop)                    │
│        /intro_inicio_movil.mp4 (mobile)                  │
│ Skip: Botón para omitir                                  │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 04. PRESENTATION SCREEN                                  │
│ Propósito: Pantalla de bienvenida (Bear Village)         │
│ Fondo: /mundos/bear_village/Hubbearvillage.webp          │
│ UI: Mensaje de bienvenida, iconos flotantes              │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 05. REGISTER SCREEN                                      │
│ Propósito: Registro de invitados + minijuego de llaves   │
│ Mecánica: Recolectar 3 llaves amarillas (clic)           │
│ Formulario: "Nombre del Jugador" + checkbox confirmación │
│ Desbloqueo: Solo después de 3 llaves                     │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 06. ARCADE WORLD SCREEN                                  │
│ Propósito: Área de minijuegos interactivos               │
│ UI: Máquina arcade, ruleta, monedas, puntaje             │
│ Recompensas: Monedas por minijuegos completados          │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 07. AVATAR CREATOR SCREEN                                │
│ Propósito: Personalización de personaje                  │
│ Opciones: Colores, outfit, accesorios (avatarOptions.ts) │
│ Preview: Avatar en tiempo real                           │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 08. MISSION DETAILS SCREEN                               │
│ Propósito: Mostrar info del evento (fecha, hora, lugar)  │
│ Datos: eventData.ts                                      │
│   Fecha: Domingo 24 de mayo                              │
│   Hora: 18:30 - 21:00 hs                                 │
│   Lugar: KBOOM (Av. Italia 3421)                         │
│ UI: Cajas de diálogo con Shicka y Baaren                 │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ 09. BIO BOOK SCREEN                                      │
│ Propósito: Perfil de Facu (gustos, fotos, bio)           │
│ Secciones:                                                │
│   - Mensaje de presentación (facuBio)                    │
│   - Inventario de gustos (facuLikes)                     │
│   - Cofre de Recuerdos (photo1, photo2)                  │
│   - Avatar display (avatarConfig)                        │
└──────────────────────────────────────────────────────────┘
```

### Estado de Navegación
```typescript
// En 01-home/page.tsx
const [currentScreen, setCurrentScreen] = useState('password');

const goToScreen = (screen: string) => {
  setCurrentScreen(screen);
};

// Patrón de renderizado condicional
const renderScreen = () => {
  switch (currentScreen) {
    case 'password': return <PasswordScreen onCorrectPassword={() => goToScreen('loading')} />;
    case 'loading': return <LoadingScreen onComplete={() => goToScreen('introVideo')} />;
    // ... etc
  }
};
```

---

## Sistema de Diseño

### Paleta de Colores (Sky World Theme)

| Token CSS | Hex | Uso Principal |
|-----------|-----|---------------|
| `--sky-blue` / `#87CEEB` | Fondo principal, tema cielo |
| `--grass-green` / `#7CFC00` | Botones de acción, elementos interactivos |
| `--teddy-brown` / `#8B4513` | Bordes, texto principal, tierra |
| `--golden-coin` / `#FFD700` | Recompensas, CTA, highlights |
| `--cloud-white` / `#FFFFFF` | Tarjetas, paneles, fondos limpios |
| `--honey-box-text` / `#003342` | Color de texto principal |
| `--brown-shadow` / `#63340b` | Sombras de botones 3D |

**Acceso en Tailwind:** `bg-sky-blue`, `text-teddy-brown`, `border-golden-coin`

### Tipografías

| Nombre | CSS Font | Uso |
|--------|----------|-----|
| `font-body` | `'Amble', 'Quicksand', sans-serif` | Texto cuerpo, UI |
| `font-headline` | `'Fredoka One', sans-serif` | Titulares |
| `font-milky` | `'Milky Nice', sans-serif` | **Títulos principales, botones CTA** |
| `font-amble` | `'Amble', sans-serif` | Etiquetas HUD, subtítulos |
| `font-arcade` | `'Gill Sans MT', sans-serif` | Etiquetas ARCADE (estilo juego) |

### Clases CSS Personalizadas

#### Tarjetas Voxel
```css
.voxel-card {
  border: 4px solid var(--teddy-brown);
  box-shadow: 0 6px 0 var(--brown-shadow), 4px 4px 0 rgba(0,0,0,0.2);
  border-radius: 1rem;
}

.voxel-card-gold {
  border: 6px solid var(--golden-coin);
  box-shadow: 0 10px 30px rgba(255,215,0,0.5), 8px 8px 0 #b8860b;
  border-radius: 1rem;
}
```

#### Botones 3D
```css
.btn-3d-gold {
  background: var(--golden-coin);
  border: 3px solid var(--teddy-brown);
  box-shadow: 0 6px 0 var(--brown-shadow);
  border-radius: 1.5rem;
  transition: all 0.1s ease;
}
.btn-3d-gold:hover { transform: translateY(-2px); }
.btn-3d-gold:active {
  transform: translateY(3px);
  box-shadow: 0 3px 0 var(--brown-shadow);
}
```

#### Decoraciones
```css
.pixel-grass { /* Franja de pasto voxel */ }
.confetti { /* Animación de confeti (solo si prefers-reduced-motion: no-preference) */ }
```

### Animaciones (Tailwind Config)

| Clase | Duración | Descripción |
|-------|----------|-------------|
| `animate-float` | 3s infinite | Flotación vertical |
| `animate-sway` | 4s infinite | Balanceo horizontal |
| `animate-blink` | 1.5s infinite | Parpadeo de opacidad |
| `animate-pulse-badge` | 2s infinite | Pulso con escala + sombra |
| `animate-shimmer` | 3s infinite | Gradiente brillante |

### Sombras Personalizadas
```typescript
// tailwind.config.ts
boxShadow: {
  '3d': '4px 4px 0px 0px hsl(var(--foreground))',
  '3d-gold': '0 6px 0 #63340b',
  '3d-gold-pressed': '0 3px 0 #63340b',
  'glow-gold': '0 10px 30px rgba(255,215,0,0.5), 8px 8px 0 #b8860b',
  '3d-blue': '0 6px 0 #00008B',
}
```

---

## Patrones de Implementación

### 1. Componente de Pantalla (Client Component)
```typescript
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MyScreenProps {
  onNext: () => void;
  coins: number;
}

export function MyScreen({ onNext, coins }: MyScreenProps) {
  const [localState, setLocalState] = useState(initialValue);

  const handleAction = () => {
    // Lógica
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <div className="voxel-card p-8 bg-cloud-white max-w-2xl w-full">
        <h2 className="font-milky text-3xl text-teddy-brown mb-4">
          Título
        </h2>
        <p className="font-body text-voxel-text">
          Contenido
        </p>
        <button
          onClick={handleAction}
          className="btn-3d-gold px-8 py-4 font-milky text-xl mt-6"
        >
          Acción
        </button>
      </div>
    </motion.div>
  );
}
```

### 2. Caja de Diálogo con Personaje
```typescript
<div className="voxel-card-gold p-6 relative">
  {/* Personaje flotante */}
  <div className="absolute -top-12 left-4 animate-float">
    <Image
      src="/personajes/Shicka_render_.png"
      alt="Shicka"
      width={120}
      height={120}
    />
  </div>
  
  {/* Texto de diálogo */}
  <p className="font-amble text-voxel-text mt-8">
    ¡Hola! Soy Shicka y te guiaré en esta misión...
  </p>
</div>
```

### 3. Formulario con React Hook Form + Zod
```typescript
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  playerName: z.string().min(2, 'Mínimo 2 caracteres'),
  confirmed: z.boolean().refine(val => val === true, {
    message: 'Debes confirmar para continuar',
  }),
});

type FormData = z.infer<typeof formSchema>;

export function RegisterForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { playerName: '', confirmed: false },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="playerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del Jugador</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Tu nombre..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
```

### 4. Carga de Imágenes con Next.js Image
```typescript
import Image from 'next/image';

<Image
  src="/mundos/bear_village/Hubbearvillage.webp"
  alt="Bear Village"
  width={1920}
  height={1080}
  priority  // Above-the-fold
  className="object-cover"
/>
```

### 5. Video de Fondo Responsivo
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

### 6. Hook use-media-query
```typescript
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

// Uso
const isMobile = useMediaQuery('(max-width: 768px)');
```

---

## Reglas: Qué Hacer y Qué Evitar

### ✅ QUÉ HACER

| Regla | Ejemplo |
|-------|---------|
| **USAR design tokens CSS** | `bg-sky-blue`, `text-teddy-brown` (NO hardcoded colors) |
| **USAR clases voxel** | `.voxel-card`, `.btn-3d-gold` |
| **USAR font-milky para títulos** | `className="font-milky text-3xl"` |
| **USAR "use client" solo cuando necesario** | Componentes interactivos, hooks, useState |
| **USAR Next.js Image** | `<Image src="..." width={800} height={600} />` |
| **USAR framer-motion para transiciones** | `motion.div` con initial/animate/exit |
| **USAR responsive-container** | `<ResponsiveContainer>` para wrapper |
| **PROBAR mobile-first** | Max-width 768px primero |
| **USAR safe-area-inset** | `.safe-p-top`, `.safe-p-bottom` |
| **TIPIFICAR con TypeScript** | Interfaces para props, estados |

### ❌ QUÉ EVITAR

| Regla | MAL | BIEN |
|-------|-----|------|
| **NO hardcodear colores** | `style={{backgroundColor: '#87CEEB'}}` | `className="bg-sky-blue"` |
| **NO usar inline styles** | `style={{marginTop: '20px'}}` | `className="mt-5"` |
| **NO usar <img> sin optimizar** | `<img src="..." />` | `<Image src="..." width={800} height={600} />` |
| **NO gradientes suaves** | `background: linear-gradient(...)` | Colores planos (estilo voxel) |
| **NO olvidar tipado** | `function MyComponent(props)` | `function MyComponent({ name }: MyComponentProps)` |
| **NO omitir alt en imágenes** | `<Image src="..." />` | `<Image src="..." alt="Descripción" />` |
| **NO usar <a> para navegación interna** | `<a href="/admin">` | `<Link href="/admin">` |
| **NO efectos bruscos** | Aparición instantánea | Transiciones 0.3-0.5s |
| **NO ignorar accesibilidad** | Sin aria-labels | `aria-label="Botón de registro"` |
| **NO hardcodear rutas de imágenes** | `/mundos/bear_village/...` repetido | Definir constante o importar |

### Patrones Anti-Patrones Comunes

#### ❌ MAL
```typescript
// Colores hardcodeados
<div style={{backgroundColor: '#87CEEB', color: '#8B4513'}}>
  <button style={{backgroundColor: '#FFD700', boxShadow: '0 6px 0 #63340b'}}>
    Click
  </button>
</div>
```

#### ✅ BIEN
```typescript
// Design tokens
<div className="bg-sky-blue text-teddy-brown">
  <button className="btn-3d-gold">
    Click
  </button>
</div>
```

---

## Comandos de Desarrollo

### Desarrollo
```bash
pnpm dev          # Iniciar servidor dev en puerto 9002
pnpm genkit:dev   # Iniciar Genkit AI
pnpm genkit:watch # Genkit con watch mode
```

### Build & Producción
```bash
pnpm build        # Build de producción
pnpm start        # Iniciar servidor de producción
pnpm typecheck    # Verificación de tipos TypeScript
pnpm lint         # ESLint
```

### Git
```bash
git status        # Ver estado
git add .         # Stage all changes
git commit -m "message"  # Commit
git push          # Push to remote
```

---

## Debugging Tips

### 1. Hydration Mismatch
**Problema:** Error de hidratación entre server y client
**Solución:**
```typescript
// Agregar suppressHydrationWarning
<body suppressHydrationWarning>

// O usar useEffect para estado client-only
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

### 2. Imágenes No Cargan
**Problema:** Imagen no se muestra o layout shift
**Solución:**
```typescript
// Especificar width/height o usar fill
<Image
  src="/path/to/image.webp"
  alt="Description"
  width={800}
  height={600}
  className="object-cover"
/>
```

### 3. Video No Autoplay
**Problema:** Video no reproduce automáticamente
**Solución:** Videos DEBEN ser muted para autoplay
```typescript
<video autoPlay loop muted playsInline>
  <source src="/video.mp4" type="video/mp4" />
</video>
```

### 4. Animaciones No Funcionaron
**Problema:** framer-motion no anima
**Solución:** Verificar que componente sea client component
```typescript
"use client";  // Debe estar al inicio
import { motion } from 'framer-motion';
```

### 5. Responsive Issues
**Problema:** Diseño se rompe en móvil
**Solución:**
```typescript
// Usar ResponsiveContainer
import { ResponsiveContainer } from '@/components/16-responsive-container';

<ResponsiveContainer>
  {/* Content */}
</ResponsiveContainer>

// O clases responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### 6. Estado No Persiste
**Problema:** Datos se pierden al recargar
**Solución:** Guardar en localStorage o Firebase
```typescript
// Guardar
localStorage.setItem('facuConfig', JSON.stringify(config));

// Cargar
useEffect(() => {
  const saved = localStorage.getItem('facuConfig');
  if (saved) {
    const config = JSON.parse(saved);
    // Restaurar estado
  }
}, []);
```

### 7. Tailwind Classes Not Applied
**Problema:** Clases no tienen efecto
**Solución:** Verificar que archivo está en `content` de tailwind.config.ts
```typescript
// tailwind.config.ts
content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
```

---

## Referencias Rápidas

### Documentación del Proyecto
| Archivo | Contenido |
|---------|-----------|
| `scripts/referencias/01-project-overview.md` | Arquitectura general, tech stack |
| `scripts/referencias/02-design-system.md` | Colores, tipografías, estilos voxel |
| `scripts/referencias/03-screen-flow.md` | Flujo de las 9 pantallas |
| `scripts/referencias/04-components.md` | Arquitectura de componentes |
| `scripts/referencias/05-assets.md` | Imágenes, videos, assets |
| `scripts/referencias/06-sba-lore.md` | Lore de Super Bear Adventure |
| `scripts/referencias/07-admin-system.md` | Sistema de configuración admin |

### Documentos en docs/
| Archivo | Contenido |
|---------|-----------|
| `docs/blueprint.md` | Blueprint de características |
| `docs/contexto_proyecto_facu.md` | Contexto del proyecto |
| `docs/info_juego_sba.md` | Wiki de SBA |
| `docs/detalles_imagenes.md` | Guía de imágenes |
| `docs/stitch-ui-reference.md` | Referencia de diseño Stitch |

### Datos del Evento
```
Festejado: Facu (Nivel 9 Desbloqueado!)
Lugar: KBOOM (Av. Italia 3421)
Fecha: Domingo 24 de mayo
Horario: 18:30 - 21:00 hs
Contacto: eventos@kboom.uy | Instagram: @kboom.uy
Importante: Llevar medias y ropa cómoda para patín, escalada, ninja warrior, crazy carts
```

### Assets Críticos
| Asset | Ruta |
|-------|------|
| Video de fondo | `/fondo_web.mp4` |
| Intro desktop | `/intro_inicio_pc.mp4` |
| Intro mobile | `/intro_inicio_movil.mp4` |
| Bear Village | `/mundos/bear_village/Hubbearvillage.webp` |
| Baaren | `/personajes/Baaren.render.png` |
| Shicka | `/personajes/Shicka_render_.png` |
| Facu Bear (sin fondo) | `/facu_bear_sin_fondo.png` |
| Fuente principal | `/MilkyNice_Clean.ttf` |

---

## Checklist para IA Agentes

Antes de hacer cambios:
- [ ] Leí `scripts/referencias/01-project-overview.md`
- [ ] Entiendo el flujo de las 9 pantallas
- [ ] Conozco el sistema de diseño (colores, fuentes, voxel)
- [ ] Sé qué componentes existen y su organización numérica
- [ ] Conozco los assets disponibles
- [ ] Entiendo el contexto de Super Bear Adventure

Al implementar:
- [ ] Uso design tokens (NO hardcodeo colores)
- [ ] Uso clases voxel (.voxel-card, .btn-3d-gold)
- [ ] Tipifico con TypeScript (interfaces para props)
- [ ] Agrego "use client" solo cuando es necesario
- [ ] Uso Next.js Image para imágenes
- [ ] Uso framer-motion para animaciones
- [ ] Pruebo responsive en móvil
- [ ] Incluyo alt texts para accesibilidad
- [ ] Uso Next.js Link para navegación interna

---

**Última actualización:** 2026-04-13
**Versión:** 1.0.0
**Mantenido por:** AI Agent Team
