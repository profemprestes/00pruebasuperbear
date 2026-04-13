# EXPERT_PROMPTS_GUIDE.md - Colección de Prompts Expertos

> **Propósito:** Guía paso a paso con prompts listos para usar que permiten recrear el proyecto GRAN FACU AVENTURA desde cero, manteniendo consistencia arquitectónica y de diseño.

---

## 📋 Índice

1. [Prompt de Configuración Inicial](#1-prompt-de-configuración-inicial-del-proyecto)
2. [Sistema de Diseño y Layout Base](#2-sistema-de-diseño-y-layout-base)
3. [Componente Principal con Gestión de Estados](#3-componente-principal-con-gestión-de-estados)
4. [Prompts Individuales para Cada Pantalla](#4-prompts-individuales-para-cada-pantalla)
   - [4.1 Password Screen](#41-password-screen)
   - [4.2 Loading Screen](#42-loading-screen)
   - [4.3 Intro Video Screen](#43-intro-video-screen)
   - [4.4 Presentation Screen](#44-presentation-screen)
   - [4.5 Register Screen](#45-register-screen)
   - [4.6 Arcade World Screen](#46-arcade-world-screen)
   - [4.7 Avatar Creator Screen](#47-avatar-creator-screen)
   - [4.8 Mission Details Screen](#48-mission-details-screen)
   - [4.9 Bio Book Screen](#49-bio-book-screen)
5. [Componentes de Utilería](#5-componentes-de-utilería)
   - [5.1 CountdownTimer](#51-countdowntimer)
   - [5.2 AvatarDisplay](#52-avatardisplay)
6. [Configuración de Datos y Hooks](#6-configuración-de-datos-y-hooks-personalizados)
7. [Integración Final y Verificaciones](#7-integración-final-y-verificaciones)
8. [Prompt para README Profesional](#8-prompt-para-readme-profesional)

---

## 1. Prompt de Configuración Inicial del Proyecto

### Objetivo
Crear un proyecto Next.js 15+ con TypeScript, Tailwind CSS, y las dependencias necesarias.

### Prompt
```
Crea un proyecto Next.js 15+ con las siguientes especificaciones:

**Tech Stack:**
- Next.js 15.5.9 (App Router)
- React 19.2.5
- TypeScript 5.9.3 (strict mode)
- Tailwind CSS 3.4.19
- pnpm como package manager

**Dependencias requeridas:**
- framer-motion (animaciones)
- lucide-react (iconos)
- embla-carousel-react (carruseles)
- react-hook-form + @hookform/resolvers/zod + zod (formularios)
- @radix-ui/react-* (componentes UI accesibles)
- class-variance-authority + clsx + tailwind-merge (utilidades)
- date-fns (fechas)
- firebase (backend)
- dotenv (variables de entorno)

**Estructura de carpetas:**
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/
├── hooks/
├── lib/
└── ai/

**Configuración de Tailwind:**
- Dark mode: class strategy
- Content: src/**/*.{js,ts,jsx,tsx,mdx}
- Plugins: tailwindcss-animate

**Configuración de TypeScript:**
- Strict mode: true
- Path aliases: @/* -> ./src/*

**Scripts:**
- dev: next dev --turbopack -p 9002
- build: next build
- start: next start
- lint: next lint
- typecheck: tsc --noEmit

Genera: package.json, next.config.ts, tsconfig.json, tailwind.config.ts, postcss.config.mjs, .gitignore
```

---

## 2. Sistema de Diseño y Layout Base

### Objetivo
Configurar el sistema de diseño con paleta de colores SBA, tipografías, y clases voxel.

### Prompt
```
Configura el sistema de diseño para una invitación gamificada inspirada en Super Bear Adventure (SBA).

**1. En src/app/globals.css, agrega:**

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Paleta Sky World */
    --sky-blue: #87CEEB;
    --grass-green: #7CFC00;
    --teddy-brown: #8B4513;
    --golden-coin: #FFD700;
    --cloud-white: #FFFFFF;
    
    /* Honey-Box Arcade Tokens */
    --honey-box-sky: #ECF8FF;
    --honey-box-sky-variant: #AAE5FF;
    --honey-box-text: #003342;
    --honey-box-brown-shadow: #63340b;
    
    /* Tailwind CSS Variables (HSL) */
    --background: 206 73% 73%;
    --foreground: 25 76% 28%;
    --primary: 51 100% 50%;
    --border: 25 76% 30%;
    --ring: 51 100% 50%;
  }
}

/* Clases utilitarias personalizadas */
@layer components {
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

  .btn-3d-gold {
    background: var(--golden-coin);
    border: 3px solid var(--teddy-brown);
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

  .pixel-grass {
    background: linear-gradient(to bottom, #7CFC00 0%, #5DBB00 40%, #3E8B00 100%);
    clip-path: polygon(0% 30%, 3% 0%, 6% 30%, 9% 5%, 12% 30%, 15% 0%, 18% 30%, 21% 8%, 24% 30%, 27% 2%, 30% 30%, 33% 10%, 36% 30%, 39% 0%, 42% 30%, 45% 6%, 48% 30%, 51% 0%, 54% 30%, 57% 4%, 60% 30%, 63% 0%, 66% 30%, 69% 8%, 72% 30%, 75% 2%, 78% 30%, 81% 10%, 84% 30%, 87% 0%, 90% 30%, 93% 6%, 96% 30%, 100% 0%, 100% 100%, 0% 100%);
  }
}

/* Animaciones */
@media (prefers-reduced-motion: no-preference) {
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
}

**2. En tailwind.config.ts, agrega:**

fontFamily: {
  body: ['Amble', 'Quicksand', 'sans-serif'],
  headline: ['"Fredoka One"', 'sans-serif'],
  milky: ['"Milky Nice"', 'sans-serif'],
  amble: ['Amble', 'sans-serif'],
  arcade: ['"Gill Sans MT"', '"Gill Sans"', 'sans-serif'],
  impact: ['Impact', '"Arial Narrow Bold"', 'sans-serif'],
  calibri: ['Calibri', 'Carlito', 'sans-serif'],
}

colors: {
  'sky-blue': 'var(--sky-blue)',
  'grass-green': 'var(--grass-green)',
  'teddy-brown': 'var(--teddy-brown)',
  'golden-coin': 'var(--golden-coin)',
  'cloud-white': 'var(--cloud-white)',
  'sky-light': 'var(--honey-box-sky)',
  'sky-variant': 'var(--honey-box-sky-variant)',
  'brown-shadow': 'var(--honey-box-brown-shadow)',
  'voxel-text': 'var(--honey-box-text)',
}

boxShadow: {
  '3d': '4px 4px 0px 0px hsl(var(--foreground))',
  '3d-gold': '0 6px 0 #63340b',
  '3d-gold-pressed': '0 3px 0 #63340b',
  'glow-gold': '0 10px 30px rgba(255,215,0,0.5), 8px 8px 0 #b8860b',
}

keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-15px)' },
  },
  sway: {
    '0%, 100%': { transform: 'rotate(-3deg) translateX(-5px)' },
    '50%': { transform: 'rotate(3deg) translateX(5px)' },
  },
}

animation: {
  float: 'float 3s ease-in-out infinite',
  sway: 'sway 4s ease-in-out infinite',
}

**3. En src/app/layout.tsx, carga las fuentes:**

<head>
  <link href="https://fonts.cdnfonts.com/css/amble" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
</head>

**Nota:** La fuente Milky Nice se carga localmente desde /public/MilkyNice_Clean.ttf
```

---

## 3. Componente Principal con Gestión de Estados

### Objetivo
Crear `01-home/page.tsx` con gestión de estado para las 9 pantallas.

### Prompt
```
Crea el componente principal en src/app/01-home/page.tsx que gestione el flujo de 9 pantallas secuenciales para una invitación gamificada.

**Requisitos:**

1. **Estado principal:**
```typescript
const [currentScreen, setCurrentScreen] = useState('password');
const [playerName, setPlayerName] = useState('');
const [playedMinigames, setPlayedMinigames] = useState(0);
const [coins, setCoins] = useState(0);
const [avatarConfig, setAvatarConfig] = useState<AvatarConfig | null>(null);
const [facuBio, setFacuBio] = useState('');
const [facuLikes, setFacuLikes] = useState<string[]>([]);
const [photo1, setPhoto1] = useState<string | null>(null);
const [photo2, setPhoto2] = useState<string | null>(null);
```

2. **Función de navegación:**
```typescript
const goToScreen = (screen: string) => {
  setCurrentScreen(screen);
};
```

3. **Renderizado condicional:**
```typescript
const renderScreen = () => {
  switch (currentScreen) {
    case 'password':
      return <PasswordScreen onCorrectPassword={() => goToScreen('loading')} />;
    case 'loading':
      return <LoadingScreen onComplete={() => goToScreen('introVideo')} />;
    case 'introVideo':
      return <IntroVideoScreen onEnd={() => goToScreen('presentation')} />;
    case 'presentation':
      return <PresentationScreen onNext={() => goToScreen('register')} />;
    case 'register':
      return <RegisterScreen onComplete={(name) => {
        setPlayerName(name);
        goToScreen('arcadeWorld');
      }} />;
    case 'arcadeWorld':
      return <ArcadeWorldScreen 
        coins={coins}
        onCoinsUpdate={setCoins}
        onComplete={() => goToScreen('avatarCreator')}
      />;
    case 'avatarCreator':
      return <AvatarCreatorScreen onSave={(config) => {
        setAvatarConfig(config);
        goToScreen('missionDetails');
      }} />;
    case 'missionDetails':
      return <MissionDetailsScreen onViewBio={() => goToScreen('bioBook')} />;
    case 'bioBook':
      return <BioBookScreen 
        facuBio={facuBio}
        facuLikes={facuLikes}
        photo1={photo1}
        photo2={photo2}
        avatarConfig={avatarConfig}
      />;
    default:
      return <PasswordScreen onCorrectPassword={() => goToScreen('loading')} />;
  }
};
```

4. **Estructura JSX:**
```typescript
export default function Home() {
  // Cargar configuración de Facu desde localStorage
  useEffect(() => {
    const savedConfig = localStorage.getItem('facuConfig');
    if (savedConfig) {
      const config = JSON.parse(savedConfig);
      setFacuBio(config.bio);
      setFacuLikes(config.likes);
      setPhoto1(config.photo1);
      setPhoto2(config.photo2);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/fondo_web.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-blue/30" />
      
      {/* Contenido de pantallas */}
      <div className="relative z-10">
        {renderScreen()}
      </div>
    </div>
  );
}
```

5. **Imports necesarios:**
```typescript
"use client";

import { useState, useEffect } from 'react';
import { PasswordScreen } from '@/components/01-password-screen/password-screen';
import { LoadingScreen } from '@/components/02-loading-screen/loading-screen';
import { IntroVideoScreen } from '@/components/03-intro-video-screen/intro-video-screen';
import { PresentationScreen } from '@/components/04-presentation-screen/presentation-screen';
import { RegisterScreen } from '@/components/05-register-screen/register-screen';
import { ArcadeWorldScreen } from '@/components/06-arcade-world-screen/arcade-world-screen';
import { AvatarCreatorScreen } from '@/components/07-avatar-creator-screen/avatar-creator-screen';
import { MissionDetailsScreen } from '@/components/08-mission-details-screen/mission-details-screen';
import { BioBookScreen } from '@/components/09-bio-book-screen/bio-book-screen';
```

**Notas:**
- Usa framer-motion para transiciones entre pantallas
- Cada pantalla debe ocupar toda la pantalla (min-h-screen)
- El video de fondo debe ser responsive
- Cargar datos de Facu desde localStorage al montar
```

---

## 4. Prompts Individuales para Cada Pantalla

### 4.1 Password Screen

### Prompt
```
Crea el componente PasswordScreen en src/components/01-password-screen/password-screen.tsx

**Propósito:** Proteger la invitación con contraseña privada.

**Props:**
```typescript
interface PasswordScreenProps {
  onCorrectPassword: () => void;
}
```

**Estado:**
- `password: string` - Input del usuario
- `error: boolean` - Flag de error

**UI:**
- Modal centrado (fixed inset-0 flex items-center justify-center)
- Fondo oscuro semitransparente (bg-black/50)
- Tarjeta voxel-card-gold con padding grande
- Icono Shield de lucide-react (tamaño 48, color golden-coin)
- Título: "Acceso Privado" (font-milky, text-3xl, text-teddy-brown)
- Descripción: "Esta es una invitación privada. Por favor, ingresa la contraseña." (font-body)
- Input de contraseña con placeholder "Contraseña..."
- Botón "Ingresar" (btn-3d-gold)
- Mensaje de error si falla: "Contraseña incorrecta" (text-red-500)

**Lógica:**
```typescript
const CORRECT_PASSWORD = 'facu9'; // O la que definas

const handleSubmit = () => {
  if (password === CORRECT_PASSWORD) {
    onCorrectPassword();
  } else {
    setError(true);
    setTimeout(() => setError(false), 2000);
  }
};

const handleKeyPress = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') handleSubmit();
};
```

**Animaciones:**
- Modal aparece con fade-in (framer-motion)
- Shake animation en input si error

**Estilo:**
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
>
  <motion.div
    initial={{ scale: 0.9, y: 20 }}
    animate={{ scale: 1, y: 0 }}
    className="voxel-card-gold p-8 bg-cloud-white max-w-md w-full"
  >
    {/* Contenido */}
  </motion.div>
</motion.div>
```
```

### 4.2 Loading Screen

### Prompt
```
Crea el componente LoadingScreen en src/components/02-loading-screen/loading-screen.tsx

**Propósito:** Simular carga del mundo del juego con barra de progreso.

**Props:**
```typescript
interface LoadingScreenProps {
  onComplete: () => void;
}
```

**Estado:**
- `progress: number` - Progreso (0-100)
- `loaded: boolean` - Carga completada

**UI:**
- Pantalla completa (min-h-screen flex flex-col items-center justify-center)
- Fondo: sky-blue
- Logo 3D "FACU 9" (font-milky, text-6xl, text-golden-coin, animate-float)
- 2-3 monedas giratorias a los lados (animate-roulette o custom spin)
- Barra de progreso:
  - Container: bg-white/30 rounded-full h-8
  - Fill: bg-golden-coin rounded-full transition-all duration-300
  - Width: `${progress}%`
- Texto: "Cargando mundo..." (font-amble)
- Cuando loaded=true: Botón "¡START!" (btn-3d-gold, text-4xl) aparece con bounce

**Lógica:**
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        setLoaded(true);
        return 100;
      }
      return prev + Math.random() * 10; // Simular carga
    });
  }, 200);
  
  return () => clearInterval(interval);
}, []);
```

**Animaciones:**
- Logo flota (animate-float)
- Monedas giran (animate-roulette)
- Barra progresa suavemente
- Botón "¡START!" aparece con bounce (framer-motion)
```

### 4.3 Intro Video Screen

### Prompt
```
Crea el componente IntroVideoScreen en src/components/03-intro-video-screen/intro-video-screen.tsx

**Propósito:** Reproducir video cinemático de introducción.

**Props:**
```typescript
interface IntroVideoScreenProps {
  onEnd: () => void;
}
```

**Estado:**
- `isMobile: boolean` - Detección de dispositivo

**UI:**
- Video a pantalla completa
- Botón "Skip" en esquina superior derecha (btn-3d-gold pequeño)

**Lógica:**
```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
const videoSrc = isMobile ? '/intro_inicio_movil.mp4' : '/intro_inicio_pc.mp4';

const handleVideoEnd = () => {
  onEnd();
};

const handleSkip = () => {
  onEnd();
};
```

**Video:**
```typescript
<video
  autoPlay
  muted
  playsInline
  onEnded={handleVideoEnd}
  className="w-full h-full object-cover"
>
  <source src={videoSrc} type="video/mp4" />
</video>

<button
  onClick={handleSkip}
  className="absolute top-4 right-4 btn-3d-gold px-4 py-2 text-sm"
>
  Skip ▶
</button>
```

**Nota:** Detectar móvil con hook use-media-query
```

### 4.4 Presentation Screen

### Prompt
```
Crea el componente PresentationScreen en src/components/04-presentation-screen/presentation-screen.tsx

**Propósito:** Pantalla de bienvenida con fondo de Bear Village.

**Props:**
```typescript
interface PresentationScreenProps {
  onNext: () => void;
}
```

**UI:**
- Fondo: Imagen `/mundos/bear_village/Hubbearvillage.webp` (object-cover, absolute inset-0)
- Overlay: bg-sky-blue/40
- Centro: Tarjeta voxel-card-gold
  - Título: "¡GRAN FACU AVENTURA!" (font-milky, text-5xl, text-golden-coin)
  - Subtítulo: "Nivel 9 Desbloqueado" (font-amble, text-2xl)
  - Mensaje de bienvenida (font-body)
- Personajes flotantes:
  - Baaren: `/personajes/Baaren.render.png` (izquierda, animate-float)
  - Shicka: `/personajes/Shicka_render_.png` (derecha, animate-float)
- Botón: "¡Continuar!" (btn-3d-gold, text-2xl)

**Estilo:**
```typescript
<div className="relative min-h-screen flex items-center justify-center p-4">
  <Image
    src="/mundos/bear_village/Hubbearvillage.webp"
    alt="Bear Village"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-sky-blue/40" />
  
  <div className="relative z-10 voxel-card-gold p-12 max-w-2xl">
    <h1 className="font-milky text-5xl text-golden-coin text-center mb-4">
      ¡GRAN FACU AVENTURA!
    </h1>
    <p className="font-amble text-2xl text-center mb-6">
      Nivel 9 Desbloqueado
    </p>
    <p className="font-body text-center">
      ¡Facu te invita a su cumpleaños! Una misión épica te espera...
    </p>
  </div>
  
  <div className="absolute left-10 top-1/2 -translate-y-1/2 animate-float">
    <Image src="/personajes/Baaren.render.png" alt="Baaren" width={150} height={150} />
  </div>
  <div className="absolute right-10 top-1/2 -translate-y-1/2 animate-float">
    <Image src="/personajes/Shicka_render_.png" alt="Shicka" width={120} height={120} />
  </div>
  
  <button onClick={onNext} className="absolute bottom-10 btn-3d-gold px-12 py-6 text-2xl">
    ¡Continuar!
  </button>
</div>
```
```

### 4.5 Register Screen

### Prompt
```
Crea el componente RegisterScreen en src/components/05-register-screen/register-screen.tsx

**Propósito:** Registro de invitados + minijuego de recolección de 3 llaves.

**Props:**
```typescript
interface RegisterScreenProps {
  onComplete: (playerName: string) => void;
}
```

**Estado:**
- `keys: number` - Llaves recolectadas (0-3)
- `playerName: string` - Nombre input
- `confirmed: boolean` - Checkbox confirmado
- `formUnlocked: boolean` - keys === 3

**UI:**
- Fondo: sky-blue con pixel-grass en bottom
- 3 llaves amarillas distribuidas en la página (position: absolute)
  - Cada llave: Icono Key de lucide-react (animate-float, cursor-pointer)
  - Al hacer clic: Desaparece con animation, keys++
- Barra de progreso de llaves: "Llaves: X/3"
- Formulario (aparece cuando keys === 3):
  - Input: "Nombre del Jugador"
  - Checkbox: "Confirmo mi asistencia"
  - Botón: "¡Confirmar Misión!" (btn-3d-gold, disabled si no confirmed)

**Lógica:**
```typescript
const handleKeyClick = (keyIndex: number) => {
  if (!collectedKeys.includes(keyIndex)) {
    setCollectedKeys([...collectedKeys, keyIndex]);
    setKeys(prev => prev + 1);
  }
};

useEffect(() => {
  if (keys >= 3) {
    setFormUnlocked(true);
  }
}, [keys]);

const handleSubmit = () => {
  if (playerName && confirmed) {
    onComplete(playerName);
  }
};
```

**Estilo de Llaves:**
```typescript
{[0, 1, 2].map((keyIndex) => (
  !collectedKeys.includes(keyIndex) && (
    <motion.div
      key={keyIndex}
      className={`absolute cursor-pointer animate-float`}
      style={{
        top: `${20 + keyIndex * 25}%`,
        left: `${15 + keyIndex * 35}%`,
      }}
      onClick={() => handleKeyClick(keyIndex)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Key size={48} className="text-golden-coin drop-shadow-lg" />
    </motion.div>
  )
))}
```
```

### 4.6 Arcade World Screen

### Prompt
```
Crea el componente ArcadeWorldScreen en src/components/06-arcade-world-screen/arcade-world-screen.tsx

**Propósito:** Área de minijuegos interactivos con sistema de monedas.

**Props:**
```typescript
interface ArcadeWorldScreenProps {
  coins: number;
  onCoinsUpdate: (coins: number) => void;
  onComplete: () => void;
}
```

**Estado:**
- `score: number` - Puntaje actual
- `spinning: boolean` - Ruleta girando

**UI:**
- Fondo: Tema arcade (espacial o colorido)
- HUD superior:
  - Monedas: Icono Coin + `${coins}` (text-golden-coin, font-impact)
  - Puntaje: `${score} pts`
- Máquina arcade (voxel-card-gold):
  - Título: "ARCADE WORLD" (font-arcade, text-3xl)
  - Ruleta/Spinner (animate-roulette cuando spinning)
  - Botón: "¡Girar!" (btn-3d-gold)
  - Resultado: "+X monedas!"
- Botón: "Continuar" (aparece después de jugar)

**Lógica de Ruleta:**
```typescript
const spinRoulette = () => {
  setSpinning(true);
  setTimeout(() => {
    const reward = Math.floor(Math.random() * 10) + 5; // 5-15 monedas
    onCoinsUpdate(coins + reward);
    setScore(prev => prev + reward * 10);
    setSpinning(false);
  }, 2000);
};
```

**Estilo:**
```typescript
<div className="min-h-screen flex flex-col items-center justify-center p-4">
  {/* HUD */}
  <div className="absolute top-4 right-4 flex gap-4">
    <div className="voxel-card px-4 py-2 flex items-center gap-2">
      <CircleDollarSign className="text-golden-coin" />
      <span className="font-impact text-xl">{coins}</span>
    </div>
  </div>
  
  {/* Máquina Arcade */}
  <div className="voxel-card-gold p-8 max-w-lg w-full">
    <h2 className="font-arcade text-3xl text-center mb-6">ARCADE WORLD</h2>
    
    <div className={`transition-transform ${spinning ? 'animate-roulette' : ''}`}>
      <Image src="/arcade-wheel.png" alt="Wheel" width={300} height={300} />
    </div>
    
    <button
      onClick={spinRoulette}
      disabled={spinning}
      className="btn-3d-gold px-8 py-4 mt-6 w-full disabled:opacity-50"
    >
      {spinning ? 'Girando...' : '¡Girar!'}
    </button>
  </div>
  
  {/* Botón continuar */}
  {coins > 0 && (
    <button onClick={onComplete} className="btn-3d-gold px-12 py-6 mt-8 text-xl">
      Continuar →
    </button>
  )}
</div>
```
```

### 4.7 Avatar Creator Screen

### Prompt
```
Crea el componente AvatarCreatorScreen en src/components/07-avatar-creator-screen/avatar-creator-screen.tsx

**Propósito:** Personalización de personaje con opciones de avatar.

**Props:**
```typescript
interface AvatarCreatorScreenProps {
  onSave: (avatarConfig: AvatarConfig) => void;
}
```

**Estado:**
- `selectedBody: string`
- `selectedOutfit: string`
- `selectedAccessories: string[]`

**Datos:** Importar de `@/lib/avatarOptions`
```typescript
const { bodyColors, outfits, accessories } = avatarOptions;
```

**UI:**
- Fondo: cloud-white
- Título: "Crea Tu Avatar" (font-milky, text-4xl, text-teddy-brown)
- Preview del avatar (centro, grande)
- Secciones de personalización:
  1. **Color de Cuerpo:** Grid de colores (clic para seleccionar)
  2. **Outfit:** Grid de trajes (cards con imágenes)
  3. **Accesorios:** Checkbox o toggles (sombrero, lentes, etc.)
- Botones:
  - "Guardar" (btn-3d-gold)
  - "Aleatorio" (secundario)

**AvatarConfig Interface:**
```typescript
interface AvatarConfig {
  body: string;
  outfit: string;
  accessories: string[];
}
```

**Lógica:**
```typescript
const handleSave = () => {
  const config: AvatarConfig = {
    body: selectedBody,
    outfit: selectedOutfit,
    accessories: selectedAccessories,
  };
  onSave(config);
};

const handleRandom = () => {
  setSelectedBody(bodyColors[Math.floor(Math.random() * bodyColors.length)].id);
  setSelectedOutfit(outfits[Math.floor(Math.random() * outfits.length)].id);
  setSelectedAccessories([]);
};
```

**Estilo:**
```typescript
<div className="min-h-screen p-8">
  <h1 className="font-milky text-4xl text-center text-teddy-brown mb-8">
    Crea Tu Avatar
  </h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Preview */}
    <div className="voxel-card-gold p-8 flex items-center justify-center">
      <AvatarDisplay config={{ body: selectedBody, outfit: selectedOutfit, accessories: selectedAccessories }} />
    </div>
    
    {/* Opciones */}
    <div className="space-y-6">
      {/* Color de Cuerpo */}
      <div className="voxel-card p-6">
        <h3 className="font-milky text-xl mb-4">Color de Cuerpo</h3>
        <div className="grid grid-cols-4 gap-2">
          {bodyColors.map(color => (
            <button
              key={color.id}
              className={`w-12 h-12 rounded-full border-4 ${selectedBody === color.id ? 'border-golden-coin' : 'border-gray-300'}`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedBody(color.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Outfit y Accesorios similares */}
    </div>
  </div>
  
  <div className="flex gap-4 justify-center mt-8">
    <button onClick={handleRandom} className="btn-3d-gold px-6 py-3">
      🎲 Aleatorio
    </button>
    <button onClick={handleSave} className="btn-3d-gold px-8 py-4">
      💾 Guardar
    </button>
  </div>
</div>
```
```

### 4.8 Mission Details Screen

### Prompt
```
Crea el componente MissionDetailsScreen en src/components/08-mission-details-screen/mission-details-screen.tsx

**Propósito:** Mostrar detalles del evento (fecha, hora, lugar) con estilo de diálogo de juego.

**Props:**
```typescript
interface MissionDetailsScreenProps {
  onViewBio: () => void;
}
```

**Datos:** Importar de `@/lib/eventData`
```typescript
const { date, time, location, contact, important } = eventData;
```

**UI:**
- Fondo: Bear Village (`/mundos/bear_village/Spawnpoint.webp`)
- Título: "Detalles de la Misión" (font-milky, text-4xl, text-golden-coin)
- Cajas de diálogo con personajes:
  1. **Shicka** (izquierda): Fecha y Hora
  2. **Baaren** (derecha): Lugar y Contacto
- Tarjetas de información (voxel-card):
  - 📅 Fecha: Domingo 24 de mayo
  - ⏰ Hora: 18:30 - 21:00 hs
  - 📍 Lugar: KBOOM (Av. Italia 3421)
  - 📧 Contacto: eventos@kboom.uy | @kboom.uy
- Aviso importante (voxel-card-gold):
  - ⚠️ "¡Llevar medias y ropa cómoda para patín, escalada, ninja warrior y crazy carts!"
- Botón: "Ver Bio Book de Facu" (btn-3d-gold)

**Estilo:**
```typescript
<div className="relative min-h-screen p-8">
  <Image
    src="/mundos/bear_village/Spawnpoint.webp"
    alt="Spawnpoint"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-sky-blue/30" />
  
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="font-milky text-4xl text-center text-golden-coin mb-8">
      Detalles de la Misión
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Shicka - Fecha/Hora */}
      <div className="voxel-card-gold p-6 relative">
        <div className="absolute -top-12 left-4 animate-float">
          <Image src="/personajes/Shicka_render_.png" alt="Shicka" width={100} height={100} />
        </div>
        <p className="font-amble mt-8">
          📅 <strong>Fecha:</strong> {date}<br />
          ⏰ <strong>Hora:</strong> {time}
        </p>
      </div>
      
      {/* Baaren - Lugar/Contacto */}
      <div className="voxel-card-gold p-6 relative">
        <div className="absolute -top-12 right-4 animate-float">
          <Image src="/personajes/Baaren.render.png" alt="Baaren" width={100} height={100} />
        </div>
        <p className="font-amble mt-8">
          📍 <strong>Lugar:</strong> {location}<br />
          📧 <strong>Contacto:</strong> {contact}
        </p>
      </div>
    </div>
    
    {/* Aviso Importante */}
    <div className="voxel-card-gold p-6 mt-6">
      <p className="font-amble text-voxel-text">
        ⚠️ <strong>Importante:</strong> {important}
      </p>
    </div>
    
    <button onClick={onViewBio} className="btn-3d-gold px-10 py-5 mt-8 w-full text-xl">
      📖 Ver Bio Book de Facu
    </button>
  </div>
</div>
```
```

### 4.9 Bio Book Screen

### Prompt
```
Crea el componente BioBookScreen en src/components/09-bio-book-screen/bio-book-screen.tsx

**Propósito:** Mostrar perfil de Facu (bio, gustos, fotos, avatar).

**Props:**
```typescript
interface BioBookScreenProps {
  facuBio: string;
  facuLikes: string[];
  photo1: string | null;
  photo2: string | null;
  avatarConfig: AvatarConfig | null;
}
```

**UI:**
- Fondo: Tema de libro/álbum (color cálido)
- Título: "Bio Book de Facu" (font-milky, text-5xl, text-teddy-brown)
- Secciones:
  1. **Mensaje de Presentación:** Texto de Facu (voxel-card)
  2. **Inventario de Gustos:** Grid de tags/likes (flex wrap)
  3. **Cofre de Recuerdos:** Carrusel de 2 fotos
  4. **Avatar de Facu:** AvatarDisplay con config guardado
- Decoraciones: Iconos de corazón, estrella, cámara

**Estilo:**
```typescript
<div className="min-h-screen p-8 bg-sky-light">
  <h1 className="font-milky text-5xl text-center text-teddy-brown mb-8">
    📖 Bio Book de Facu
  </h1>
  
  <div className="max-w-4xl mx-auto space-y-8">
    {/* Mensaje */}
    <div className="voxel-card-gold p-8">
      <h2 className="font-milky text-2xl mb-4">💬 Mensaje de Facu</h2>
      <p className="font-body text-lg text-voxel-text">{facuBio || '¡Hola! Soy Facu y tengo 9 años...'}</p>
    </div>
    
    {/* Gustos */}
    <div className="voxel-card p-8">
      <h2 className="font-milky text-2xl mb-4">🎒 Inventario de Gustos</h2>
      <div className="flex flex-wrap gap-2">
        {facuLikes.length > 0 ? (
          facuLikes.map((like, i) => (
            <span key={i} className="voxel-card px-4 py-2 bg-grass-green/20">
              ⭐ {like}
            </span>
          ))
        ) : (
          <p className="text-gray-500">Aún no hay gustos...</p>
        )}
      </div>
    </div>
    
    {/* Fotos */}
    <div className="voxel-card p-8">
      <h2 className="font-milky text-2xl mb-4">📸 Cofre de Recuerdos</h2>
      <div className="grid grid-cols-2 gap-4">
        {photo1 && (
          <div className="voxel-card overflow-hidden">
            <img src={photo1} alt="Recuerdo 1" className="w-full h-48 object-cover" />
          </div>
        )}
        {photo2 && (
          <div className="voxel-card overflow-hidden">
            <img src={photo2} alt="Recuerdo 2" className="w-full h-48 object-cover" />
          </div>
        )}
      </div>
    </div>
    
    {/* Avatar */}
    {avatarConfig && (
      <div className="voxel-card-gold p-8 flex flex-col items-center">
        <h2 className="font-milky text-2xl mb-4">🐻 Avatar de Facu</h2>
        <AvatarDisplay config={avatarConfig} size="large" />
      </div>
    )}
  </div>
</div>
```
```

---

## 5. Componentes de Utilería

### 5.1 CountdownTimer

### Prompt
```
Crea el componente CountdownTimer en src/components/13-countdown-timer/countdown-timer.tsx

**Propósito:** Mostrar cuenta regresiva hasta el evento (estilo temporizador de bomba).

**Props:**
```typescript
interface CountdownTimerProps {
  targetDate: Date; // Fecha del evento
  size?: 'small' | 'medium' | 'large';
}
```

**Estado:**
- `timeLeft: { days: number, hours: number, minutes: number, seconds: number }`

**UI:**
- Grid de 4 bloques (Días, Horas, Minutos, Segundos)
- Cada bloque: voxel-card con número grande + label
- Números: font-impact, text-4xl, text-golden-coin
- Labels: font-amble, text-sm
- Animación: Pulse en segundos cuando < 10

**Lógica:**
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    
    if (diff <= 0) {
      clearInterval(interval);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    
    setTimeLeft({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    });
  }, 1000);
  
  return () => clearInterval(interval);
}, [targetDate]);
```

**Estilo:**
```typescript
<div className={`grid grid-cols-4 gap-${size === 'large' ? '4' : '2'}`}>
  {[
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ].map((item, i) => (
    <div
      key={i}
      className={`voxel-card p-${size === 'large' ? '6' : '4'} text-center ${
        item.value < 10 ? 'animate-pulse' : ''
      }`}
    >
      <div className="font-impact text-4xl text-golden-coin">{item.value}</div>
      <div className="font-amble text-sm text-voxel-text">{item.label}</div>
    </div>
  ))}
</div>
```
```

### 5.2 AvatarDisplay

### Prompt
```
Crea el componente AvatarDisplay en src/components/10-avatar-display/avatar-display.tsx

**Propósito:** Mostrar avatar personalizado con configuración.

**Props:**
```typescript
interface AvatarDisplayProps {
  config: AvatarConfig;
  size?: 'small' | 'medium' | 'large';
}
```

**UI:**
- Contenedor cuadrado (width = height)
- Fondo: Círculo o cuadrado con color del cuerpo
- Capas:
  1. Cuerpo (color base)
  2. Outfit (imagen superpuesta)
  3. Accesorios (iconos o imágenes)
- Tamaño responsive:
  - small: 64x64
  - medium: 128x128
  - large: 256x256

**Lógica:**
```typescript
const sizeMap = {
  small: 'w-16 h-16',
  medium: 'w-32 h-32',
  large: 'w-64 h-64',
};

const { body, outfit, accessories } = config;
const bodyColor = bodyColors.find(c => c.id === body)?.value || '#8B4513';
```

**Estilo:**
```typescript
<div className={`${sizeMap[size]} relative`}>
  {/* Cuerpo */}
  <div
    className="absolute inset-0 rounded-lg"
    style={{ backgroundColor: bodyColor }}
  />
  
  {/* Outfit */}
  {outfit && (
    <img
      src={`/avatars/outfits/${outfit}.png`}
      alt="Outfit"
      className="absolute inset-0 w-full h-full object-contain"
    />
  )}
  
  {/* Accesorios */}
  {accessories.map((acc, i) => (
    <img
      key={i}
      src={`/avatars/accessories/${acc}.png`}
      alt={acc}
      className="absolute inset-0 w-full h-full object-contain"
    />
  ))}
</div>
```
```

---

## 6. Configuración de Datos y Hooks Personalizados

### Prompt para eventData.ts
```
Crea el archivo src/lib/eventData.ts con los datos del evento:

```typescript
export const eventData = {
  date: 'Domingo 24 de mayo',
  time: '18:30 - 21:00 hs',
  location: 'KBOOM (Av. Italia 3421)',
  contact: 'eventos@kboom.uy | Instagram: @kboom.uy',
  important: '¡Llevar medias y ropa cómoda para disfrutar de la pista de patín, escaladas, ninja warrior y crazy carts!',
  eventName: 'GRAN FACU AVENTURA',
  level: 9,
  celebrant: 'Facu',
};
```
```

### Prompt para avatarOptions.ts
```
Crea el archivo src/lib/avatarOptions.ts con opciones de personalización:

```typescript
export const bodyColors = [
  { id: 'brown', value: '#8B4513', name: 'Marrón' },
  { id: 'golden', value: '#FFD700', name: 'Dorado' },
  { id: 'blue', value: '#87CEEB', name: 'Azul' },
  { id: 'green', value: '#7CFC00', name: 'Verde' },
];

export const outfits = [
  { id: 'basketball', name: 'Basketball Jersey', image: '/avatars/outfits/basketball.png' },
  { id: 'taekwondo', name: 'Taekwondo Dobok', image: '/avatars/outfits/taekwondo.png' },
  { id: 'adventure', name: 'Adventure Gear', image: '/avatars/outfits/adventure.png' },
];

export const accessories = [
  { id: 'hat', name: 'Sombrero', image: '/avatars/accessories/hat.png' },
  { id: 'glasses', name: 'Lentes', image: '/avatars/accessories/glasses.png' },
  { id: 'backpack', name: 'Mochila', image: '/avatars/accessories/backpack.png' },
];

export interface AvatarConfig {
  body: string;
  outfit: string;
  accessories: string[];
}
```
```

### Prompt para use-rewards.tsx
```
Crea el hook use-rewards.tsx en src/hooks/use-rewards.tsx para gestión de estado del juego:

```typescript
"use client";

import { useState, useCallback } from 'react';

interface GameFlowState {
  currentScreen: string;
  playerName: string;
  playedMinigames: number;
  coins: number;
  avatarConfig: AvatarConfig | null;
  facuBio: string;
  facuLikes: string[];
  photo1: string | null;
  photo2: string | null;
}

export function useRewards() {
  const [state, setState] = useState<GameFlowState>({
    currentScreen: 'password',
    playerName: '',
    playedMinigames: 0,
    coins: 0,
    avatarConfig: null,
    facuBio: '',
    facuLikes: [],
    photo1: null,
    photo2: null,
  });

  const goToScreen = useCallback((screen: string) => {
    setState(prev => ({ ...prev, currentScreen: screen }));
  }, []);

  const addCoins = useCallback((amount: number) => {
    setState(prev => ({ ...prev, coins: prev.coins + amount }));
  }, []);

  const incrementMinigames = useCallback(() => {
    setState(prev => ({ ...prev, playedMinigames: prev.playedMinigames + 1 }));
  }, []);

  return {
    state,
    setState,
    goToScreen,
    addCoins,
    incrementMinigames,
  };
}
```
```

---

## 7. Integración Final y Verificaciones

### Prompt
```
Ahora integra todos los componentes creados en el flujo principal y verifica:

**1. Verificar imports en 01-home/page.tsx:**
- Todos los componentes 01-09 importados correctamente
- Interfaces de props coinciden
- Estado tipado con TypeScript

**2. Verificar rutas de imágenes:**
- Todas las imágenes existen en /public/
- Rutas relativas correctas (/personajes/..., /mundos/...)
- Videos: /fondo_web.mp4, /intro_inicio_pc.mp4, /intro_inicio_movil.mp4

**3. Verificar sistema de diseño:**
- globals.css tiene variables CSS
- tailwind.config.ts tiene fuentes, colores, animaciones
- Clases .voxel-card, .btn-3d-gold funcionan

**4. Probar flujo completo:**
```
password → loading → introVideo → presentation → register → arcadeWorld → avatarCreator → missionDetails → bioBook
```

**5. Verificar responsive:**
- Mobile: < 640px (1 columna)
- Tablet: 640px - 1024px (2 columnas)
- Desktop: > 1024px (max-width: 1280px)

**6. Ejecutar comandos:**
```bash
pnpm typecheck   # Sin errores de tipos
pnpm lint        # Sin errores de linting
pnpm build       # Build exitoso
pnpm dev         # Funciona en localhost:9002
```

**7. Checklist final:**
- [ ] Todas las pantallas navegan correctamente
- [ ] Animaciones funcionan (framer-motion)
- [ ] Videos autoplay (muted)
- [ ] Imágenes cargan (Next.js Image)
- [ ] Responsive en móvil
- [ ] Botones 3D tienen efecto press
- [ ] Textos legibles (contraste)
- [ ] Sin errores en consola
```

---

## 8. Prompt para README Profesional

### Prompt
```
Crea un README.md profesional para el proyecto GRAN FACU AVENTURA:

```markdown
# 🐻 GRAN FACU AVENTURA

> Invitación digital interactiva gamificada inspirada en Super Bear Adventure

## 📝 Descripción

GRAN FACU AVENTURA es una Single Page Application (SPA) que transforma la experiencia de recibir una invitación de cumpleaños en un videojuego interactivo. Desarrollada con Next.js 15, React 19, TypeScript y Tailwind CSS.

## ✨ Características

- 🎮 **9 Pantallas Secuenciales:** Flujo gamificado desde password hasta Bio Book
- 🎨 **Estética Voxel/Low-Poly:** Inspirada en Super Bear Adventure (SBA)
- 🐻 **Personalización de Avatar:** Crea tu personaje único
- 🎯 **Minijuegos Interactivos:** Recolecta llaves, gana monedas
- 📱 **Responsive Design:** Mobile-first con safe-area support
- ⏰ **Countdown Timer:** Cuenta regresiva hasta el evento
- 🎬 **Cinemáticas:** Videos de introducción (desktop + mobile)
- 🥚 **Easter Eggs:** The Backrooms con Shadow Bear

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.9 (App Router)
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 3.4.19
- **Animations:** Framer Motion 12.38.0
- **UI Components:** Radix UI + ShadCN pattern
- **Package Manager:** pnpm 10.33.0

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start development server
pnpm dev

# Open http://localhost:9002
```

## 📁 Project Structure

```
src/
├── app/              # Next.js routes (01-home, 02-admin-config, etc.)
├── components/       # 23 numbered components + ui/
├── hooks/            # Custom hooks (use-rewards, use-mobile)
├── lib/              # Utilities (eventData, avatarOptions)
└── ai/               # Genkit AI flows
```

## 🎨 Design System

### Colors
- Sky Blue (#87CEEB) - Background
- Grass Green (#7CFC00) - Action buttons
- Teddy Brown (#8B4513) - Borders, text
- Golden Coin (#FFD700) - Rewards, CTAs

### Fonts
- Milky Nice - Main titles, CTA buttons
- Amble - Body text, UI
- Fredoka One - Headlines

## 📊 Event Details

- **Celebrant:** Facu (Level 9 Unlocked!)
- **Venue:** KBOOM (Av. Italia 3421)
- **Date:** Sunday, May 24th
- **Time:** 18:30 - 21:00 hs

## 📖 Documentation

- [AI Context Guide](AI_CONTEXT.md)
- [Expert Prompts Collection](EXPERT_PROMPTS_GUIDE.md)
- [Reference Files](scripts/referencias/)

## 🤝 Contributing

1. Read AI_CONTEXT.md before making changes
2. Follow design system (colors, fonts, voxel style)
3. Test responsive on mobile first
4. Run `pnpm typecheck && pnpm lint` before commit

## 📄 License

Private project for Facu's birthday invitation.

---

**Made with 🐻 and ❤️ for Facu's Level 9 Adventure**
```
```

---

## Notas Finales para IA Agentes

### Cómo Usar Esta Guía

1. **Para recrear el proyecto desde cero:**
   - Sigue los prompts en orden secuencial (1 → 8)
   - Cada prompt es independiente y puede ejecutarse por separado
   - Verifica cada paso antes de continuar al siguiente

2. **Para modificar componentes existentes:**
   - Lee primero `AI_CONTEXT.md` para entender el contexto
   - Usa el prompt específico de la pantalla/componente
   - Adapta según necesidades específicas

3. **Para agregar nuevas funcionalidades:**
   - Sigue patrones establecidos (numeración, interfaces, diseño)
   - Mantén consistencia con el sistema de diseño
   - Documenta cambios en archivos de referencia

4. **Para debugging:**
   - Consulta sección "Debugging Tips" en AI_CONTEXT.md
   - Verifica imports, rutas, y estado de componentes
   - Usa consola del navegador y React DevTools

### Reglas de Oro

1. **SIEMPRE** usa design tokens (NO hardcodear colores)
2. **SIEMPRE** tipifica con TypeScript
3. **SIEMPRE** prueba en móvil primero
4. **NUNCA** omitir "use client" en componentes interactivos
5. **NUNCA** usar inline styles (usa Tailwind)
6. **SIEMPRE** incluir alt texts en imágenes
7. **SIEMPRE** seguir patrón de numeración de componentes
8. **NUNCA** hardcodear datos del evento (usa eventData.ts)

---

**Última actualización:** 2026-04-13
**Versión:** 1.0.0
**Mantenido por:** AI Expert Team
