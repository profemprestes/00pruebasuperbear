# 07 - Admin Configuration System

## Overview

The admin configuration system allows Facu (the birthday boy) to customize his invitation profile before sharing it with guests. This includes:

1. **Presentation Message:** Custom welcome text
2. **Inventory of Likes:** List of interests and hobbies
3. **Memory Chest:** Upload 2 personal photos
4. **Live Preview:** Real-time preview of invitation

---

## Admin Routes

### `/admin` or `/02-admin-config`
**Main configuration panel**
- File: `src/app/02-admin-config/page.tsx` (or `src/app/admin/page.tsx`)
- Component: `AdminConfigPage`

### `/03-admin-guide`
**Step-by-step guide**
- File: `src/app/03-admin-guide/page.tsx`
- Component: `ProfileGuidePage`
- Purpose: Walkthrough for Facu to understand why and how to configure his profile

---

## AdminConfigPage Structure

### State Management
```typescript
const [bio, setBio] = useState('');              // Presentation message
const [likes, setLikes] = useState<string[]>([]); // List of interests
const [currentLike, setCurrentLike] = useState(''); // Current input
const [photo1File, setPhoto1File] = useState<string | null>(null);
const [photo2File, setPhoto2File] = useState<string | null>(null);
const [photo1Preview, setPhoto1Preview] = useState<string | null>(null);
const [photo2Preview, setPhoto2Preview] = useState<string | null>(null);
const [isCompiling, setIsCompiling] = useState(false);
```

### Sections

#### Section 1: Presentation Message
- **Component:** Textarea
- **Label:** "Mensaje de Presentación"
- **Description:** "Escribe tu mensaje de bienvenida para los invitados. ¡Haz que sea ÉPICO! 🎉"
- **Validation:** Max 150 characters
- **Counter:** Shows character count with validation badge
  - ✅ "Perfecto para la invitación" (within limit)
  - ❌ "Demasiado largo" (over limit)
- **Icon:** Shield (🛡️)

#### Section 2: Inventory of Likes
- **Component:** Input + Button + Tag list
- **Label:** "Inventario de Gustos"
- **Description:** "Agrega todas las cosas que te gustan. ¡Cuantas más agregues, más épico será tu inventario! ⚡"
- **Features:**
  - Text input for new like
  - "Añadir" button (Plus icon)
  - Tag list with remove buttons (X icon)
  - Empty state: "Aún no has agregado gustos. ¡Empieza ahora! 🎮"
  - Counter: "⭐ X items en inventario"
- **Icon:** Heart (❤️)

#### Section 3: Memory Chest
- **Component:** File upload inputs (2x)
- **Label:** "Cofre de Recuerdos"
- **Description:** "Sube 2 fotos tuyas para que los invitados vean al héroe detrás de la aventura. ¡Elige tus mejores momentos! 📸"
- **Features:**
  - 2 file upload areas
  - Preview thumbnails
  - Placeholder: "Sin foto aún" or "RECUERDO 1/2"
  - Default image: `/facu_bear_sin_fondo.png`
- **Icon:** Camera (📷)

### Compile Button
- **Label:** "🎮 ¡Compilar Nivel y Generar Invitación!"
- **Loading State:** "⚙️ Compilando Nivel..."
- **Action:** Saves configuration to Firebase/localStorage
- **Description:** "Al compilar, se guardará tu configuración y se generará la invitación web"

### Live Preview Panel
- **Position:** Right side (desktop) or below (mobile)
- **Title:** "💡 Vista Previa en Vivo"
- **Subtitle:** "Así se verá tu invitación"
- **Features:**
  - Mock phone frame
  - Real-time updates as Facu types
  - Shows bio message preview
  - Shows likes inventory preview
  - Shows photo previews
  - Status indicators:
    - 📝 Mensaje: ✅/⚡
    - 🎒 Inventario: ✅/⚡
    - 📸 Fotos: ✅/⚡
  - Progress bar: "Progreso total X%"
  - Tip: "💡 Consejo: Completa todas las secciones para que la invitación sea ¡INCREÍBLE!"

---

## Profile Guide (03-admin-guide)

### Purpose
Step-by-step wizard to help Facu understand:
1. Why his profile is important
2. How to define his "Super Power"
3. How to fill his "Epic Inventory"
4. What happens after completion

### Steps

#### Intro Screen
- **Title:** "🐻 ¡Bienvenido, Facu! 🎮"
- **Subtitle:** "Nivel 9 Desbloqueado — Es hora de personalizar tu personaje"
- **Progress:** "Progreso de Configuración: X/5 Pasos"

#### Step 1: Why is your profile important?
- **Title:** "¿Por qué es importante tu perfil?"
- **Message:**
  - "¡Atención, **Facu**! Estás a punto de llegar al **Nivel 9** 🎉 y eso es ÉPICO."
  - "Pero antes de empezar esta nueva aventura, tus **aliados** (sí, tus amigos y familia que vendrán a la fiesta) necesitan saber **cómo ayudarte** en la misión."
  - "Cuando completes tu perfil, cada invitado sabrá exactamente **qué te gusta**, **qué te hace fuerte** y **cómo hacer que esta fiesta sea LEGENDARIA**."
  - "¡Es como preparar tu equipo antes de un boss fight! 🐉"

- **Benefits:**
  - 👥 "Tus aliados sabrán cómo ayudarte"
  - 🎮 "La fiesta será personalizada para TI"
  - 🏆 "Desbloquearás recompensas especiales"

#### Step 2: Define your Super Power
- **Title:** "Paso 1: Define tu Super Poder ⚡"
- **Message:** "Facu, tienes **9 años** de experiencia en este juego y eso te da poderes únicos. Tu **'Super Poder'** es esa cosa que te hace especial, lo que te hace BRILLAR."

- **Examples:**
  - 🏀 **"Tiro Libre Perfecto"** — Eres increíble en el básquet
  - 🥋 **"Patada Dragón"** — Dominas el Taekwondo como un campeón
  - 🎮 **"Modo Aventura Activado"** — Siempre encuentras el camino en los juegos

- **Mission:** "Piensa qué es lo que MEJOR haces y escribe eso como tu Super Poder. ¡Sé creativo!"

#### Step 3: Fill your Epic Inventory
- **Title:** "Paso 2: Llena tu Inventario Épico 🎒"
- **Message:** "Todo gran héroe tiene un inventario con sus **cosas favoritas**. Estas son las cosas que te dan **poderes especiales** y te hacen feliz."

- **Categories:**
  - 🏀 **Deportes** — Básquet, Taekwondo, lo que te haga mover
  - 🎮 **Videojuegos** — Super Bear Adventure, tus favoritos
  - 🎨 **Creatividad** — Dibujar, crear, inventar cosas nuevas
  - 🍕 **Comida Fav** — Pizza, helado, lo que te da energía

- **Mission:** "Agrega todas las cosas que te gustan. Cuantas más agregues, ¡más épico será tu inventario!"

#### Step 4: The Great Adventure Awaits
- **Title:** "Paso 3: ¡La Gran Aventura te Espera! 🗺️"
- **Message:** "¡Casi listo, Facu! Con tu perfil completo, tus aliados podrán **entender cómo es tu mundo** y prepararse para la **mejor fiesta de cumpleaños** que hayan visto."

- **What happens:**
  - ✅ **Se generará tu invitación web** — Una página increíble que podrás compartir con todos
  - ✅ **Tus amigos verán quién eres** — Sabrán qué te gusta y cómo hacerte feliz
  - ✅ **La fiesta será personalizada** — Todo estará pensado para TI, el héroe del Nivel 9
  - ✅ **¡Será ÉPICO!** — Una aventura que todos recordarán siempre

- **Reminder:** "🐻 Recuerda, Facu: Tienes **9 años** y eso significa que eres un **aventurero experimentado**. Cada cosa que agregues a tu perfil hará que esta fiesta sea **más increíble**. ¡Así que ponle todas tus cosas favoritas y que empiece la aventura!"

#### Step 5: Reward Unlocked
- **Title:** "🎁 ¡RECOMPENSA DESBLOQUEADA!"
- **Badge:** "LOGRO: CONFIGURADOR EXPERTO"
- **Message:** "¡Increíble, Facu! Has completado tu **Guía de Configuración de Héroe**. Ahora sabes exactamente cómo preparar tu perfil para que la fiesta sea **LEGENDARIA**."

- **Special Rewards:**
  - ✨ **Skin Exclusiva** — Desbloqueas un diseño especial para tu invitación
  - 🏆 **Título de Honor** — "**Maestro del Nivel 9**" aparecerá en tu perfil
  - 🎮 **Modo Aventura** — Tu invitación tendrá un juego secreto oculto
  - 🐻 **Sorpresas Bear** — Tus amigos encontrarán secretos de Super Bear Adventure

- **CTA:** "🚀 ¡Estás listo, Héroe! Ahora haz clic en el botón de abajo para ir al **Panel de Configuración** y **completar tu perfil real**. ¡Que empiece la aventura!"

- **Button:** "🎮 ¡Ir al Panel de Configuración!" (navigates to `/admin`)

---

## Data Storage

### Current Implementation
- **Option 1:** localStorage (for testing/development)
- **Option 2:** Firebase Firestore (for production)

### Data Structure
```typescript
interface FacuConfig {
  bio: string;              // Presentation message
  likes: string[];          // Array of interests
  photo1: string | null;    // Base64 or URL of photo 1
  photo2: string | null;    // Base64 or URL of photo 2
  avatarConfig?: {          // Optional avatar customization
    body: string;
    outfit: string;
    accessories: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Save Function
```typescript
const handleCompile = async () => {
  setIsCompiling(true);
  
  // Save to localStorage or Firebase
  const config: FacuConfig = {
    bio,
    likes,
    photo1: photo1File,
    photo2: photo2File,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  localStorage.setItem('facuConfig', JSON.stringify(config));
  // OR: await saveDoc(db, 'facuConfig', config);
  
  setIsCompiling(false);
  toast({ title: '¡Nivel compilado! 🎮' });
};
```

### Load Function (in main invitation flow)
```typescript
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
```

---

## UI Components Used

### ShadCN UI Components
- `Button` - All buttons
- `Input` - Text inputs
- `Textarea` - Bio message
- `Toast` - Notifications
- `Card` - Section containers
- `Progress` - Progress bars

### Lucide Icons
- `Shield` - Security/presentation
- `Heart` - Likes/inventory
- `Camera` - Photos/memory chest
- `Plus` - Add button
- `X` - Remove button
- `Star` - Progress/stars
- `Settings` - Compile button

---

## Validation Rules

### Bio Message
- Max length: 150 characters
- Required: Yes
- Validation: Real-time character counter

### Likes
- Min items: 0 (but recommended 3+)
- Max items: 20 (soft limit)
- Validation: No duplicates, no empty strings

### Photos
- Max files: 2
- Allowed formats: JPG, PNG, WebP
- Max size: 5MB per file
- Validation: File type and size check

---

## Best Practices for AI Agents

1. **ALWAYS** validate user input before saving
2. **USE** toast notifications for success/error messages
3. **SHOW** loading state during compilation
4. **PROVIDE** real-time preview as Facu types
5. **STORE** data in localStorage for dev, Firebase for prod
6. **HANDLE** file uploads with proper validation
7. **DISPLAY** progress indicators for each section
8. **ENABLE** "Compile" button only when all sections complete
9. **TEST** on mobile (admin panel should work on phones too)
10. **DOCUMENT** all config fields in TypeScript interfaces
