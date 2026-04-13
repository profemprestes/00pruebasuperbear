# 📊 Auditoría Completa del Proyecto - Super Bear Adventure

**Fecha de Auditoría:** 4/13/2026
**Total de Páginas:** 7
**Total de Componentes:** 58
**Total de Hooks:** 4
**Total de Utilidades:** 4

---

## 📁 Índice

1. [Páginas](#páginas)
   - [app](#app)
   - [app](#app)
   - [01-home](#01home)
   - [02-admin-config](#02adminconfig)
   - [03-admin-guide](#03adminguide)
   - [admin](#admin)
   - [guide](#guide)
2. [Componentes](#componentes)
   - [01-password-screen](#01passwordscreen)
   - [02-loading-screen](#02loadingscreen)
   - [03-intro-video-screen](#03introvideoscreen)
   - [04-presentation-screen](#04presentationscreen)
   - [05-register-screen](#05registerscreen)
   - [06-arcade-world-screen](#06arcadeworldscreen)
   - [07-avatar-creator-screen](#07avatarcreatorscreen)
   - [08-mission-details-screen](#08missiondetailsscreen)
   - [09-bio-book-screen](#09biobookscreen)
   - [10-avatar-display](#10avatardisplay)
   - [11-game-flow](#11gameflow)
   - [12-game-hud](#12gamehud)
   - [13-countdown-timer](#13countdowntimer)
   - [14-dialog-box](#14dialogbox)
   - [15-coin-reward](#15coinreward)
   - [16-responsive-container](#16responsivecontainer)
   - [17-config-screen](#17configscreen)
   - [18-mission-section](#18missionsection)
   - [19-chest-section](#19chestsection)
   - [20-map-section](#20mapsection)
   - [21-rsvp-section](#21rsvpsection)
   - [22-shop-section](#22shopsection)
   - [23-easter-egg-section](#23eastereggsection)
   - [accordion](#accordion)
   - [alert-dialog](#alertdialog)
   - [alert](#alert)
   - [avatar](#avatar)
   - [badge](#badge)
   - [button](#button)
   - [calendar](#calendar)
   - [card](#card)
   - [carousel](#carousel)
   - [chart](#chart)
   - [checkbox](#checkbox)
   - [collapsible](#collapsible)
   - [dialog](#dialog)
   - [dropdown-menu](#dropdownmenu)
   - [form](#form)
   - [input](#input)
   - [label](#label)
   - [menubar](#menubar)
   - [popover](#popover)
   - [progress](#progress)
   - [radio-group](#radiogroup)
   - [scroll-area](#scrollarea)
   - [select](#select)
   - [separator](#separator)
   - [sheet](#sheet)
   - [sidebar](#sidebar)
   - [skeleton](#skeleton)
   - [slider](#slider)
   - [switch](#switch)
   - [table](#table)
   - [tabs](#tabs)
   - [textarea](#textarea)
   - [toast](#toast)
   - [toaster](#toaster)
   - [tooltip](#tooltip)
3. [Hooks Personalizados](#hooks-personalizados)
4. [Librerías y Utilidades](#librerías-y-utilidades)
5. [Recursos del Proyecto](#recursos-del-proyecto)

---

## 📄 Páginas

### app

**📍 Ubicación:** `src/app/layout.tsx`

**📝 Descripción:**
Componente: RootLayout

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página |
| Client Component | No |
| Props | `Readonly<{   children: React.ReactNode; }>` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | next, ./globals.css, @/components/ui/toaster |

**🎨 Estructura JSX:**
```
├── html
  ├── head
    ├── {Expression}
    ├── link
    ├── link
    ├── link
    ├── link
    ├── link
  ├── body
    ├── {Expression}
    ├── Toaster
```

---

### app

**📍 Ubicación:** `src/app/page.tsx`

**📝 Descripción:**
Componente: Page

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | N/A |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### 01-home

**📍 Ubicación:** `src/app/01-home/page.tsx`

**📝 Descripción:**
Componente: Home

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | currentScreen, playerName, playedMinigames, coins, avatarConfig, facuBio, facuLikes, photo1, photo2 |
| Hooks Utilizados | useState, useEffect |
| Dependencias | react, @/hooks/use-rewards, @/components/01-password-screen, @/components/02-loading-screen, @/components/03-intro-video-screen, @/components/04-presentation-screen, @/components/05-register-screen, @/components/06-arcade-world-screen, @/components/07-avatar-creator-screen, @/components/08-mission-details-screen, @/components/09-bio-book-screen, @/components/11-game-flow, @/lib/avatarOptions, @/lib/utils |

**🎨 Estructura JSX:**
```
├── PasswordScreen
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| /fondo_web.mp4 | Video | autoPlay, loop, muted, playsInline |

---

### 02-admin-config

**📍 Ubicación:** `src/app/02-admin-config/page.tsx`

**📝 Descripción:**
Componente: AdminConfigPage

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | bio, likes, currentLike, photo1File, photo2File, photo1Preview, photo2Preview, isCompiling |
| Hooks Utilizados | useState, useRef, useRouter, useToast |
| Dependencias | react, next/navigation, @/components/ui/button, @/components/ui/input, @/components/ui/textarea, lucide-react, @/hooks/use-toast, next/image |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── div
    ├── {Expression}
  ├── {Expression}
  ├── div
    ├── div
      ├── Star
      ├── span
      ├── Star
    ├── h1
    ├── p
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── div
            ├── div
              ├── p
              ├── h2
                ├── Shield
        ├── div
          ├── p
          ├── Textarea
          ├── div
            ├── span
              ├── {Expression}
            ├── span
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── div
            ├── div
              ├── p
              ├── h2
                ├── Heart
        ├── div
          ├── p
          ├── {Expression}
          ├── div
            ├── Input
            ├── Button
              ├── Plus
          ├── {Expression}
          ├── div
            ├── {Expression}
          ├── div
            ├── span
              ├── {Expression}
            ├── span
              ├── {Expression}
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── div
            ├── div
              ├── p
              ├── h2
                ├── Camera
        ├── div
          ├── p
          ├── div
            ├── {Expression}
          ├── div
            ├── span
              ├── {Expression}
            ├── span
              ├── {Expression}
      ├── {Expression}
      ├── div
        ├── Button
          ├── {Expression}
        ├── p
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── div
          ├── span
          ├── div
            ├── h3
            ├── p
        ├── div
          ├── p
            ├── strong
      ├── {Expression}
      ├── div
        ├── div
          ├── {Expression}
          ├── div
            ├── span
            ├── div
              ├── div
              ├── div
              ├── div
          ├── {Expression}
          ├── div
            ├── {Expression}
            ├── div
              ├── div
              ├── div
                ├── div
                  ├── div
                    ├── Image
                  ├── h2
                  ├── p
                    ├── {Expression}
            ├── {Expression}
            ├── div
            ├── {Expression}
            ├── div
              ├── div
              ├── div
                ├── h2
                ├── {Expression}
                ├── div
                  ├── {Expression}
                ├── {Expression}
                ├── div
                  ├── {Expression}
                  ├── {Expression}
      ├── {Expression}
      ├── div
        ├── h4
        ├── div
          ├── div
            ├── span
            ├── {Expression}
          ├── div
            ├── span
            ├── {Expression}
          ├── div
            ├── span
            ├── {Expression}
        ├── div
          ├── div
            ├── span
            ├── span
              ├── {Expression}
          ├── div
            ├── div
  ├── {Expression}
  ├── div
    ├── p
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "PANEL DE CONFIGURACIÓN DE HÉROE" | span | UI Text |
| "🎮 Personaliza tu Personaje, Facu 🐻" | h1 | UI Text |
| "Nivel 9 — Completa tu perfil para generar la invitación épica" | p | UI Text |
| "📝" | div | UI Text |
| "Sección 1" | p | UI Text |
| "Mensaje de Presentación" | h2 | UI Text |
| "Escribe tu mensaje de bienvenida para los invitados. ¡Haz que sea ÉPICO! 🎉" | p | UI Text |
| "caracteres" | span | UI Text |
| "✅ Perfecto para la invitación" | span | UI Text |
| "🎒" | div | UI Text |
| "Sección 2" | p | UI Text |
| "Inventario de Gustos" | h2 | UI Text |
| "Agrega todas las cosas que te gustan. ¡Cuantas más agregues, más épico será tu inventario! ⚡" | p | UI Text |
| "Añadir" | Button | UI Text |
| "Aún no has agregado gustos. ¡Empieza ahora! 🎮" | p | UI Text |
| "⭐" | span | UI Text |
| "items en inventario" | span | UI Text |
| "📸" | div | UI Text |
| "Sección 3" | p | UI Text |
| "Cofre de Recuerdos" | h2 | UI Text |
| "Sube 2 fotos tuyas para que los invitados vean al héroe detrás de la aventura. ¡Elige tus mejores mo..." | p | UI Text |
| "Sin foto aún" | p | UI Text |
| "RECUERDO" | p | UI Text |
| "⚙️" | span | UI Text |
| "Compilando Nivel..." | span | UI Text |
| "🎮 ¡Compilar Nivel y Generar Invitación!" | span | UI Text |
| "Al compilar, se guardará tu configuración y se generará la invitación web" | p | UI Text |
| "🐻‍❄️" | span | UI Text |
| "Vista Previa en Vivo" | h3 | UI Text |
| "Así se verá tu invitación" | p | UI Text |
| "💡" | p | UI Text |
| "Tip:" | strong | UI Text |
| "Los cambios se reflejan aquí en tiempo real mientras editas" | p | UI Text |
| "9:41" | span | UI Text |
| "¡Nivel 9 Desbloqueado!" | h2 | UI Text |
| "🎒 Inventario de Facu" | h2 | UI Text |
| "RECUERDO 1" | p | UI Text |
| "RECUERDO 2" | p | UI Text |
| "📊 Estado del Perfil" | h4 | UI Text |
| "📝 Mensaje" | span | UI Text |
| "⚡" | span | UI Text |
| "🎒 Inventario" | span | UI Text |
| "⚡" | span | UI Text |
| "📸 Fotos" | span | UI Text |
| "⚡" | span | UI Text |
| "Progreso total" | span | UI Text |
| "%" | span | UI Text |
| "💡 Consejo: Completa todas las secciones para que la invitación sea ¡INCREÍBLE!" | p | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | style |
| N/A | Icon | style |
| N/A | Icon | None |
| N/A | Icon | placeholder, value, onChange, rows |
| N/A | Icon | None |
| N/A | Icon | size |
| N/A | Icon | size |
| N/A | Icon | None |
| N/A | Icon | size |
| Dynamic | Icon | alt, fill |
| N/A | Icon | size |
| N/A | Icon | None |
| /facu_bear_sin_fondo.png | Icon | alt, width, height |
| Dynamic | Icon | alt, width, height |
| Dynamic | Icon | alt, width, height |
| N/A | Icon | size |
| N/A | Icon | size |
| N/A | Icon | size |

---

### 03-admin-guide

**📍 Ubicación:** `src/app/03-admin-guide/page.tsx`

**📝 Descripción:**
Componente: ProfileGuidePage

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | currentStep, completedSteps |
| Hooks Utilizados | useRouter, useState |
| Dependencias | react, next/navigation, @/components/ui/button, lucide-react |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── div
    ├── {Expression}
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
      ├── div
        ├── Star
        ├── span
        ├── Star
      ├── h1
      ├── p
    ├── {Expression}
    ├── div
      ├── div
        ├── span
        ├── span
          ├── {Expression}
          ├── {Expression}
      ├── div
        ├── div
      ├── div
        ├── {Expression}
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── {Expression}
            ├── {Expression}
            ├── {Expression}
            ├── {Expression}
            ├── {Expression}
          ├── div
            ├── p
              ├── {Expression}
              ├── {Expression}
            ├── h2
              ├── {Expression}
              ├── {Expression}
              ├── {Expression}
              ├── {Expression}
              ├── {Expression}
      ├── {Expression}
      ├── div
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
      ├── {Expression}
      ├── div
        ├── div
          ├── Button
          ├── div
            ├── span
              ├── {Expression}
              ├── {Expression}
            ├── {Expression}
          ├── {Expression}
    ├── {Expression}
    ├── div
      ├── p
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "GUÍA DE CONFIGURACIÓN DE HÉROE" | span | UI Text |
| "🐻 ¡Bienvenido, Facu! 🎮" | h1 | UI Text |
| "Nivel 9 Desbloqueado — Es hora de personalizar tu personaje" | p | UI Text |
| "Progreso de Configuración" | span | UI Text |
| "/" | span | UI Text |
| "Pasos" | span | UI Text |
| "Paso" | p | UI Text |
| "de" | p | UI Text |
| "¿Por qué es importante tu perfil?" | h3 | UI Text |
| "¡Atención," | p | UI Text |
| "Facu" | strong | UI Text |
| "! Estás a punto de llegar al" | p | UI Text |
| "Nivel 9" | strong | UI Text |
| "🎉 y eso es ÉPICO.                          Pero antes de empezar esta nueva aventura, tus" | p | UI Text |
| "aliados" | strong | UI Text |
| "(sí, tus amigos y familia que vendrán a la fiesta)                          necesitan saber" | p | UI Text |
| "cómo ayudarte" | strong | UI Text |
| "en la misión." | p | UI Text |
| "Cuando completes tu perfil, cada invitado sabrá exactamente" | p | UI Text |
| "qué te gusta" | strong | UI Text |
| "," | p | UI Text |
| "qué te hace fuerte" | strong | UI Text |
| "y" | p | UI Text |
| "cómo hacer que esta fiesta sea LEGENDARIA" | strong | UI Text |
| ".                      ¡Es como preparar tu equipo antes de un boss fight! 🐉" | p | UI Text |
| "👥" | div | UI Text |
| "Tus aliados sabrán cómo ayudarte" | p | UI Text |
| "🎮" | div | UI Text |
| "La fiesta será personalizada para TI" | p | UI Text |
| "🏆" | div | UI Text |
| "Desbloquearás recompensas especiales" | p | UI Text |
| "Paso 1: Define tu Super Poder ⚡" | h3 | UI Text |
| "Facu, tienes" | p | UI Text |
| "9 años" | strong | UI Text |
| "de experiencia en este juego y eso te da poderes únicos.                          Tu" | p | UI Text |
| ""Super Poder"" | strong | UI Text |
| "es esa cosa que te hace especial, lo que te hace BRILLAR." | p | UI Text |
| "💡 Ejemplos de Super Poderes:" | h4 | UI Text |
| "🏀" | span | UI Text |
| ""Tiro Libre Perfecto"" | strong | UI Text |
| "— Eres increíble en el básquet" | p | UI Text |
| "🥋" | span | UI Text |
| ""Patada Dragón"" | strong | UI Text |
| "— Dominas el Taekwondo como un campeón" | p | UI Text |
| "🎮" | span | UI Text |
| ""Modo Aventura Activado"" | strong | UI Text |
| "— Siempre encuentras el camino en los juegos" | p | UI Text |
| "💬" | p | UI Text |
| "Tu misión:" | strong | UI Text |
| "Piensa qué es lo que MEJOR haces y escribe eso como tu Super Poder. ¡Sé creativo!" | p | UI Text |
| "Paso 2: Llena tu Inventario Épico 🎒" | h3 | UI Text |
| "Todo gran héroe tiene un inventario con sus" | p | UI Text |
| "cosas favoritas" | strong | UI Text |
| ".                          Estas son las cosas que te dan" | p | UI Text |
| "poderes especiales" | strong | UI Text |
| "y te hacen feliz." | p | UI Text |
| "📦 ¿Qué va en tu inventario?" | h4 | UI Text |
| "🏀" | div | UI Text |
| "Deportes" | p | UI Text |
| "Básquet, Taekwondo, lo que te haga mover" | p | UI Text |
| "🎮" | div | UI Text |
| "Videojuegos" | p | UI Text |
| "Super Bear Adventure, tus favoritos" | p | UI Text |
| "🎨" | div | UI Text |
| "Creatividad" | p | UI Text |
| "Dibujar, crear, inventar cosas nuevas" | p | UI Text |
| "🍕" | div | UI Text |
| "Comida Fav" | p | UI Text |
| "Pizza, helado, lo que te da energía" | p | UI Text |
| "💬" | p | UI Text |
| "Tu misión:" | strong | UI Text |
| "Agrega todas las cosas que te gustan. Cuantas más agregues, ¡más épico será tu inventario!" | p | UI Text |
| "Paso 3: ¡La Gran Aventura te Espera! 🗺️" | h3 | UI Text |
| "¡Casi listo, Facu! Con tu perfil completo, tus aliados podrán" | p | UI Text |
| "entender cómo es tu mundo" | strong | UI Text |
| "y prepararse para la" | p | UI Text |
| "mejor fiesta de cumpleaños" | strong | UI Text |
| "que hayan visto." | p | UI Text |
| "🎯 Lo que pasará cuando completes todo:" | h4 | UI Text |
| "Se generará tu invitación web" | strong | UI Text |
| "— Una página increíble que podrás compartir con todos" | p | UI Text |
| "Tus amigos verán quién eres" | strong | UI Text |
| "— Sabrán qué te gusta y cómo hacerte feliz" | p | UI Text |
| "La fiesta será personalizada" | strong | UI Text |
| "— Todo estará pensado para TI, el héroe del Nivel 9" | p | UI Text |
| "¡Será ÉPICO!" | strong | UI Text |
| "— Una aventura que todos recordarán siempre" | p | UI Text |
| "🐻 Recuerda, Facu:" | p | UI Text |
| "Tienes" | p | UI Text |
| "9 años" | strong | UI Text |
| "y eso significa que eres un" | p | UI Text |
| "aventurero experimentado" | strong | UI Text |
| ".                      Cada cosa que agregues a tu perfil hará que esta fiesta sea" | p | UI Text |
| "más increíble" | strong | UI Text |
| ".                      ¡Así que ponle todas tus cosas favoritas y que empiece la aventura!" | p | UI Text |
| "🎁" | div | UI Text |
| "¡RECOMPENSA DESBLOQUEADA!" | h3 | UI Text |
| "LOGRO: CONFIGURADOR EXPERTO" | span | UI Text |
| "¡Increíble, Facu! Has completado tu" | p | UI Text |
| "Guía de Configuración de Héroe" | strong | UI Text |
| ".                      Ahora sabes exactamente cómo preparar tu perfil para que la fiesta sea" | p | UI Text |
| "LEGENDARIA" | strong | UI Text |
| "." | p | UI Text |
| "🎉 Tu Recompensa Especial:" | h4 | UI Text |
| "✨" | div | UI Text |
| "Skin Exclusiva" | p | UI Text |
| "Desbloqueas un diseño especial para tu invitación" | p | UI Text |
| "🏆" | div | UI Text |
| "Título de Honor" | p | UI Text |
| ""Maestro del Nivel 9" aparecerá en tu perfil" | p | UI Text |
| "🎮" | div | UI Text |
| "Modo Aventura" | p | UI Text |
| "Tu invitación tendrá un juego secreto oculto" | p | UI Text |
| "🐻" | div | UI Text |
| "Sorpresas Bear" | p | UI Text |
| "Tus amigos encontrarán secretos de Super Bear Adventure" | p | UI Text |
| "🚀 ¡Estás listo, Héroe!" | p | UI Text |
| "Ahora haz clic en el botón de abajo para ir al" | p | UI Text |
| "Panel de Configuración" | strong | UI Text |
| "y" | p | UI Text |
| "completar tu perfil real" | strong | UI Text |
| ". ¡Que empiece la aventura!" | p | UI Text |
| "← Anterior" | Button | UI Text |
| "Paso" | span | UI Text |
| "de" | span | UI Text |
| "¡Completo! ✅" | span | UI Text |
| "Siguiente" | Button | UI Text |
| "🎮 ¡Ir al Panel de Configuración!" | Button | UI Text |
| "💡 Tip: Completa tu perfil con todo lo que te gusta para que la fiesta sea ¡INCREÍBLE!" | p | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | style |
| N/A | Icon | style |
| N/A | Icon | size |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |

---

### admin

**📍 Ubicación:** `src/app/admin/page.tsx`

**📝 Descripción:**
Componente: AdminConfigPage

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | bio, likes, currentLike, photo1File, photo2File, photo1Preview, photo2Preview, isCompiling |
| Hooks Utilizados | useState, useRef, useRouter, useToast |
| Dependencias | react, next/navigation, @/components/ui/button, @/components/ui/input, @/components/ui/textarea, lucide-react, @/hooks/use-toast, next/image |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── div
    ├── {Expression}
  ├── {Expression}
  ├── div
    ├── div
      ├── Star
      ├── span
      ├── Star
    ├── h1
    ├── p
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── div
            ├── div
              ├── p
              ├── h2
                ├── Shield
        ├── div
          ├── p
          ├── Textarea
          ├── div
            ├── span
              ├── {Expression}
            ├── span
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── div
            ├── div
              ├── p
              ├── h2
                ├── Heart
        ├── div
          ├── p
          ├── {Expression}
          ├── div
            ├── Input
            ├── Button
              ├── Plus
          ├── {Expression}
          ├── div
            ├── {Expression}
          ├── div
            ├── span
              ├── {Expression}
            ├── span
              ├── {Expression}
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── div
            ├── div
              ├── p
              ├── h2
                ├── Camera
        ├── div
          ├── p
          ├── div
            ├── {Expression}
          ├── div
            ├── span
              ├── {Expression}
            ├── span
              ├── {Expression}
      ├── {Expression}
      ├── div
        ├── Button
          ├── {Expression}
        ├── p
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── div
          ├── span
          ├── div
            ├── h3
            ├── p
        ├── div
          ├── p
            ├── strong
      ├── {Expression}
      ├── div
        ├── div
          ├── {Expression}
          ├── div
            ├── span
            ├── div
              ├── div
              ├── div
              ├── div
          ├── {Expression}
          ├── div
            ├── {Expression}
            ├── div
              ├── div
              ├── div
                ├── div
                  ├── div
                    ├── Image
                  ├── h2
                  ├── p
                    ├── {Expression}
            ├── {Expression}
            ├── div
            ├── {Expression}
            ├── div
              ├── div
              ├── div
                ├── h2
                ├── {Expression}
                ├── div
                  ├── {Expression}
                ├── {Expression}
                ├── div
                  ├── {Expression}
                  ├── {Expression}
      ├── {Expression}
      ├── div
        ├── h4
        ├── div
          ├── div
            ├── span
            ├── {Expression}
          ├── div
            ├── span
            ├── {Expression}
          ├── div
            ├── span
            ├── {Expression}
        ├── div
          ├── div
            ├── span
            ├── span
              ├── {Expression}
          ├── div
            ├── div
  ├── {Expression}
  ├── div
    ├── p
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "PANEL DE CONFIGURACIÓN DE HÉROE" | span | UI Text |
| "🎮 Personaliza tu Personaje, Facu 🐻" | h1 | UI Text |
| "Nivel 9 — Completa tu perfil para generar la invitación épica" | p | UI Text |
| "📝" | div | UI Text |
| "Sección 1" | p | UI Text |
| "Mensaje de Presentación" | h2 | UI Text |
| "Escribe tu mensaje de bienvenida para los invitados. ¡Haz que sea ÉPICO! 🎉" | p | UI Text |
| "caracteres" | span | UI Text |
| "✅ Perfecto para la invitación" | span | UI Text |
| "🎒" | div | UI Text |
| "Sección 2" | p | UI Text |
| "Inventario de Gustos" | h2 | UI Text |
| "Agrega todas las cosas que te gustan. ¡Cuantas más agregues, más épico será tu inventario! ⚡" | p | UI Text |
| "Añadir" | Button | UI Text |
| "Aún no has agregado gustos. ¡Empieza ahora! 🎮" | p | UI Text |
| "⭐" | span | UI Text |
| "items en inventario" | span | UI Text |
| "📸" | div | UI Text |
| "Sección 3" | p | UI Text |
| "Cofre de Recuerdos" | h2 | UI Text |
| "Sube 2 fotos tuyas para que los invitados vean al héroe detrás de la aventura. ¡Elige tus mejores mo..." | p | UI Text |
| "Sin foto aún" | p | UI Text |
| "RECUERDO" | p | UI Text |
| "⚙️" | span | UI Text |
| "Compilando Nivel..." | span | UI Text |
| "🎮 ¡Compilar Nivel y Generar Invitación!" | span | UI Text |
| "Al compilar, se guardará tu configuración y se generará la invitación web" | p | UI Text |
| "🐻‍❄️" | span | UI Text |
| "Vista Previa en Vivo" | h3 | UI Text |
| "Así se verá tu invitación" | p | UI Text |
| "💡" | p | UI Text |
| "Tip:" | strong | UI Text |
| "Los cambios se reflejan aquí en tiempo real mientras editas" | p | UI Text |
| "9:41" | span | UI Text |
| "¡Nivel 9 Desbloqueado!" | h2 | UI Text |
| "🎒 Inventario de Facu" | h2 | UI Text |
| "RECUERDO 1" | p | UI Text |
| "RECUERDO 2" | p | UI Text |
| "📊 Estado del Perfil" | h4 | UI Text |
| "📝 Mensaje" | span | UI Text |
| "⚡" | span | UI Text |
| "🎒 Inventario" | span | UI Text |
| "⚡" | span | UI Text |
| "📸 Fotos" | span | UI Text |
| "⚡" | span | UI Text |
| "Progreso total" | span | UI Text |
| "%" | span | UI Text |
| "💡 Consejo: Completa todas las secciones para que la invitación sea ¡INCREÍBLE!" | p | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | style |
| N/A | Icon | style |
| N/A | Icon | None |
| N/A | Icon | placeholder, value, onChange, rows |
| N/A | Icon | None |
| N/A | Icon | size |
| N/A | Icon | size |
| N/A | Icon | None |
| N/A | Icon | size |
| Dynamic | Icon | alt, fill |
| N/A | Icon | size |
| N/A | Icon | None |
| /facu_bear_sin_fondo.png | Icon | alt, width, height |
| Dynamic | Icon | alt, width, height |
| Dynamic | Icon | alt, width, height |
| N/A | Icon | size |
| N/A | Icon | size |
| N/A | Icon | size |

---

### guide

**📍 Ubicación:** `src/app/admin/guide/page.tsx`

**📝 Descripción:**
Componente: ProfileGuidePage

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | currentStep, completedSteps |
| Hooks Utilizados | useRouter, useState |
| Dependencias | react, next/navigation, @/components/ui/button, lucide-react |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── div
    ├── {Expression}
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
      ├── div
        ├── Star
        ├── span
        ├── Star
      ├── h1
      ├── p
    ├── {Expression}
    ├── div
      ├── div
        ├── span
        ├── span
          ├── {Expression}
          ├── {Expression}
      ├── div
        ├── div
      ├── div
        ├── {Expression}
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── div
          ├── div
            ├── {Expression}
            ├── {Expression}
            ├── {Expression}
            ├── {Expression}
            ├── {Expression}
          ├── div
            ├── p
              ├── {Expression}
              ├── {Expression}
            ├── h2
              ├── {Expression}
              ├── {Expression}
              ├── {Expression}
              ├── {Expression}
              ├── {Expression}
      ├── {Expression}
      ├── div
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
        ├── {Expression}
      ├── {Expression}
      ├── div
        ├── div
          ├── Button
          ├── div
            ├── span
              ├── {Expression}
              ├── {Expression}
            ├── {Expression}
          ├── {Expression}
    ├── {Expression}
    ├── div
      ├── p
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "GUÍA DE CONFIGURACIÓN DE HÉROE" | span | UI Text |
| "🐻 ¡Bienvenido, Facu! 🎮" | h1 | UI Text |
| "Nivel 9 Desbloqueado — Es hora de personalizar tu personaje" | p | UI Text |
| "Progreso de Configuración" | span | UI Text |
| "/" | span | UI Text |
| "Pasos" | span | UI Text |
| "Paso" | p | UI Text |
| "de" | p | UI Text |
| "¿Por qué es importante tu perfil?" | h3 | UI Text |
| "¡Atención," | p | UI Text |
| "Facu" | strong | UI Text |
| "! Estás a punto de llegar al" | p | UI Text |
| "Nivel 9" | strong | UI Text |
| "🎉 y eso es ÉPICO.                          Pero antes de empezar esta nueva aventura, tus" | p | UI Text |
| "aliados" | strong | UI Text |
| "(sí, tus amigos y familia que vendrán a la fiesta)                          necesitan saber" | p | UI Text |
| "cómo ayudarte" | strong | UI Text |
| "en la misión." | p | UI Text |
| "Cuando completes tu perfil, cada invitado sabrá exactamente" | p | UI Text |
| "qué te gusta" | strong | UI Text |
| "," | p | UI Text |
| "qué te hace fuerte" | strong | UI Text |
| "y" | p | UI Text |
| "cómo hacer que esta fiesta sea LEGENDARIA" | strong | UI Text |
| ".                      ¡Es como preparar tu equipo antes de un boss fight! 🐉" | p | UI Text |
| "👥" | div | UI Text |
| "Tus aliados sabrán cómo ayudarte" | p | UI Text |
| "🎮" | div | UI Text |
| "La fiesta será personalizada para TI" | p | UI Text |
| "🏆" | div | UI Text |
| "Desbloquearás recompensas especiales" | p | UI Text |
| "Paso 1: Define tu Super Poder ⚡" | h3 | UI Text |
| "Facu, tienes" | p | UI Text |
| "9 años" | strong | UI Text |
| "de experiencia en este juego y eso te da poderes únicos.                          Tu" | p | UI Text |
| ""Super Poder"" | strong | UI Text |
| "es esa cosa que te hace especial, lo que te hace BRILLAR." | p | UI Text |
| "💡 Ejemplos de Super Poderes:" | h4 | UI Text |
| "🏀" | span | UI Text |
| ""Tiro Libre Perfecto"" | strong | UI Text |
| "— Eres increíble en el básquet" | p | UI Text |
| "🥋" | span | UI Text |
| ""Patada Dragón"" | strong | UI Text |
| "— Dominas el Taekwondo como un campeón" | p | UI Text |
| "🎮" | span | UI Text |
| ""Modo Aventura Activado"" | strong | UI Text |
| "— Siempre encuentras el camino en los juegos" | p | UI Text |
| "💬" | p | UI Text |
| "Tu misión:" | strong | UI Text |
| "Piensa qué es lo que MEJOR haces y escribe eso como tu Super Poder. ¡Sé creativo!" | p | UI Text |
| "Paso 2: Llena tu Inventario Épico 🎒" | h3 | UI Text |
| "Todo gran héroe tiene un inventario con sus" | p | UI Text |
| "cosas favoritas" | strong | UI Text |
| ".                          Estas son las cosas que te dan" | p | UI Text |
| "poderes especiales" | strong | UI Text |
| "y te hacen feliz." | p | UI Text |
| "📦 ¿Qué va en tu inventario?" | h4 | UI Text |
| "🏀" | div | UI Text |
| "Deportes" | p | UI Text |
| "Básquet, Taekwondo, lo que te haga mover" | p | UI Text |
| "🎮" | div | UI Text |
| "Videojuegos" | p | UI Text |
| "Super Bear Adventure, tus favoritos" | p | UI Text |
| "🎨" | div | UI Text |
| "Creatividad" | p | UI Text |
| "Dibujar, crear, inventar cosas nuevas" | p | UI Text |
| "🍕" | div | UI Text |
| "Comida Fav" | p | UI Text |
| "Pizza, helado, lo que te da energía" | p | UI Text |
| "💬" | p | UI Text |
| "Tu misión:" | strong | UI Text |
| "Agrega todas las cosas que te gustan. Cuantas más agregues, ¡más épico será tu inventario!" | p | UI Text |
| "Paso 3: ¡La Gran Aventura te Espera! 🗺️" | h3 | UI Text |
| "¡Casi listo, Facu! Con tu perfil completo, tus aliados podrán" | p | UI Text |
| "entender cómo es tu mundo" | strong | UI Text |
| "y prepararse para la" | p | UI Text |
| "mejor fiesta de cumpleaños" | strong | UI Text |
| "que hayan visto." | p | UI Text |
| "🎯 Lo que pasará cuando completes todo:" | h4 | UI Text |
| "Se generará tu invitación web" | strong | UI Text |
| "— Una página increíble que podrás compartir con todos" | p | UI Text |
| "Tus amigos verán quién eres" | strong | UI Text |
| "— Sabrán qué te gusta y cómo hacerte feliz" | p | UI Text |
| "La fiesta será personalizada" | strong | UI Text |
| "— Todo estará pensado para TI, el héroe del Nivel 9" | p | UI Text |
| "¡Será ÉPICO!" | strong | UI Text |
| "— Una aventura que todos recordarán siempre" | p | UI Text |
| "🐻 Recuerda, Facu:" | p | UI Text |
| "Tienes" | p | UI Text |
| "9 años" | strong | UI Text |
| "y eso significa que eres un" | p | UI Text |
| "aventurero experimentado" | strong | UI Text |
| ".                      Cada cosa que agregues a tu perfil hará que esta fiesta sea" | p | UI Text |
| "más increíble" | strong | UI Text |
| ".                      ¡Así que ponle todas tus cosas favoritas y que empiece la aventura!" | p | UI Text |
| "🎁" | div | UI Text |
| "¡RECOMPENSA DESBLOQUEADA!" | h3 | UI Text |
| "LOGRO: CONFIGURADOR EXPERTO" | span | UI Text |
| "¡Increíble, Facu! Has completado tu" | p | UI Text |
| "Guía de Configuración de Héroe" | strong | UI Text |
| ".                      Ahora sabes exactamente cómo preparar tu perfil para que la fiesta sea" | p | UI Text |
| "LEGENDARIA" | strong | UI Text |
| "." | p | UI Text |
| "🎉 Tu Recompensa Especial:" | h4 | UI Text |
| "✨" | div | UI Text |
| "Skin Exclusiva" | p | UI Text |
| "Desbloqueas un diseño especial para tu invitación" | p | UI Text |
| "🏆" | div | UI Text |
| "Título de Honor" | p | UI Text |
| ""Maestro del Nivel 9" aparecerá en tu perfil" | p | UI Text |
| "🎮" | div | UI Text |
| "Modo Aventura" | p | UI Text |
| "Tu invitación tendrá un juego secreto oculto" | p | UI Text |
| "🐻" | div | UI Text |
| "Sorpresas Bear" | p | UI Text |
| "Tus amigos encontrarán secretos de Super Bear Adventure" | p | UI Text |
| "🚀 ¡Estás listo, Héroe!" | p | UI Text |
| "Ahora haz clic en el botón de abajo para ir al" | p | UI Text |
| "Panel de Configuración" | strong | UI Text |
| "y" | p | UI Text |
| "completar tu perfil real" | strong | UI Text |
| ". ¡Que empiece la aventura!" | p | UI Text |
| "← Anterior" | Button | UI Text |
| "Paso" | span | UI Text |
| "de" | span | UI Text |
| "¡Completo! ✅" | span | UI Text |
| "Siguiente" | Button | UI Text |
| "🎮 ¡Ir al Panel de Configuración!" | Button | UI Text |
| "💡 Tip: Completa tu perfil con todo lo que te gusta para que la fiesta sea ¡INCREÍBLE!" | p | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | style |
| N/A | Icon | style |
| N/A | Icon | size |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |

---

## 🧩 Componentes

### 01-password-screen

**📍 Ubicación:** `src/components/01-password-screen/password-screen.tsx`

**📝 Descripción:**
Componente: PasswordScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `PasswordScreenProps` |
| Estado Interno | password, error |
| Hooks Utilizados | useState |
| Dependencias | react, @/components/ui/input, @/components/ui/button, lucide-react |

**🎨 Estructura JSX:**
```
├── div
  ├── div
    ├── Shield
    ├── h1
    ├── p
    ├── div
      ├── Input
      ├── Button
      ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "Acceso Privado" | h1 | UI Text |
| "Esta es una invitación privada. Por favor, ingresa la contraseña." | p | UI Text |
| "Entrar" | Button | UI Text |
| "Contraseña incorrecta. Intenta de nuevo." | p | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | None |

---

### 02-loading-screen

**📍 Ubicación:** `src/components/02-loading-screen/loading-screen.tsx`

**📝 Descripción:**
Componente: LoadingScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `LoadingScreenProps` |
| Estado Interno | progress |
| Hooks Utilizados | useState, useEffect |
| Dependencias | react, next/image |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── div
  ├── video
  ├── {Expression}
  ├── div
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── span
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
      ├── Image
    ├── {Expression}
    ├── div
      ├── Image
      ├── {Expression}
      ├── div
        ├── div
          ├── div
        ├── p
          ├── {Expression}
      ├── {Expression}
      ├── div
        ├── {Expression}
  ├── {Expression}
  ├── div
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🍯" | span | UI Text |
| "CARGANDO" | p | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| /intro_inicio_pc.mp4 | Video | autoPlay, loop, muted, playsInline, aria-hidden |
| /personajes/Baaren.render.png | Imagen | alt, width, height, priority |
| /titulo_super_facu_1.png | Imagen | alt, width, height, priority |

---

### 03-intro-video-screen

**📍 Ubicación:** `src/components/03-intro-video-screen/intro-video-screen.tsx`

**📝 Descripción:**
Componente: IntroVideoScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `IntroVideoScreenProps` |
| Estado Interno | N/A |
| Hooks Utilizados | useIsMobile |
| Dependencias | @/hooks/use-mobile, @/components/ui/button |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── Button
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "Saltar Cinemática ➔" | Button | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Video | key, autoPlay, playsInline, onEnded, muted |

---

### 04-presentation-screen

**📍 Ubicación:** `src/components/04-presentation-screen/presentation-screen.tsx`

**📝 Descripción:**
Componente: PresentationScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `PresentationScreenProps` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | next/image |

**🎨 Estructura JSX:**
```
├── div
  ├── div
  ├── div
    ├── div
      ├── Image
    ├── div
      ├── h2
      ├── p
        ├── {Expression}
    ├── button
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "¡Nivel 9 Desbloqueado!" | h2 | UI Text |
| "Ver Misión ➔" | button | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| /facu_bear_sin_fondo.png | Imagen | alt, width, height |

---

### 05-register-screen

**📍 Ubicación:** `src/components/05-register-screen/register-screen.tsx`

**📝 Descripción:**
Componente: RegisterScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `RegisterScreenProps` |
| Estado Interno | playerName |
| Hooks Utilizados | useState, useBreakpoint |
| Dependencias | react, next/image, @/components/ui/input, @/components/ui/button, lucide-react, @/hooks/use-mobile |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── div
  ├── {Expression}
  ├── div
    ├── {Expression}
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
      ├── div
        ├── Image
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
      ├── div
      ├── p
        ├── em
      ├── {Expression}
      ├── Input
      ├── {Expression}
      ├── div
        ├── {Expression}
        ├── Button
      ├── {Expression}
      ├── Button
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "¡Alto ahí, viajero! Antes de darte los detalles," | p | UI Text |
| "necesito registrarte" | em | UI Text |
| "." | p | UI Text |
| "🪙 ¡Gana monedas jugando!" | span | UI Text |
| "¡Entrar al Arcade World! (VIP) 🎮" | Button | UI Text |
| "Ver Coordenadas Directamente" | Button | UI Text |
| "¡Alto ahí, viajero!" | h2 | UI Text |
| "Antes de darte los detalles, necesito registrarte." | p | UI Text |
| "¡Entrar al Arcade World! (VIP) 🎮" | Button | UI Text |
| "Ver Coordenadas Directamente" | Button | UI Text |
| "SHICKA" | span | UI Text |
| "Guía de aventureros del reino" | p | UI Text |
| "REGISTRO DE AVENTURERO" | span | UI Text |
| "¡Alto ahí, viajero!" | h2 | UI Text |
| "Antes de darte los detalles, necesito registrarte." | p | UI Text |
| "🪙" | span | UI Text |
| "MODO VIP — ARCADE WORLD" | p | UI Text |
| "¡Juega y gana monedas para desbloquear recompensas!" | p | UI Text |
| "Tu nombre de aventurero:" | label | UI Text |
| "¡Listo para la aventura!" | span | UI Text |
| "🎮 ¡Entrar al Arcade World!" | button | UI Text |
| "Ver las coordenadas directamente →" | button | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| /personajes/Shicka_render_.png | Icon | alt, width, height |
| N/A | Icon | None |
| /personajes/Shicka_render_.png | Icon | alt, width, height |
| /personajes/Shicka_render_.png | Icon | alt, width, height |
| N/A | Icon | None |

---

### 06-arcade-world-screen

**📍 Ubicación:** `src/components/06-arcade-world-screen/arcade-world-screen.tsx`

**📝 Descripción:**
Componente: ArcadeWorldScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `ArcadeWorldScreenProps` |
| Estado Interno | minigameLevel, levelComplete, showSuccess, coins, safePlatforms, clickedSafe, warning, moles, whacked, spinning |
| Hooks Utilizados | useState, useCallback, useEffect |
| Dependencias | react, @/components/ui/button, @/lib/utils |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `CoinCollectGame` | Auxiliary/Event handler |
| `LavaFloorGame` | Auxiliary/Event handler |
| `HoneyDodgeGame` | Auxiliary/Event handler |
| `MoleWhackGame` | Auxiliary/Event handler |
| `RouletteGame` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
├── CoinCollectGame
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "¡Recoge 5 monedas del Arcade!" | p | UI Text |
| "🪙" | button | UI Text |
| "¡Misión de Tristopio! El suelo es lava. Pisa solo las plataformas seguras." | p | UI Text |
| "¡Cuidado!" | p | UI Text |
| "¡La fábrica de The Hive! Atrapa la llave, pero NO toques la miel morada." | p | UI Text |
| "🔑" | div | UI Text |
| "🟣" | div | UI Text |
| "🟣" | div | UI Text |
| "¡Despierta a los 3 topos dormidos! (" | p | UI Text |
| "/3)" | p | UI Text |
| "️‍🔥" | div | UI Text |
| "¡Gira la ruleta de Capitalos para tu recompensa final!" | p | UI Text |
| "GIRAR" | button | UI Text |
| "¡Premio Legendario!" | div | UI Text |

---

### 07-avatar-creator-screen

**📍 Ubicación:** `src/components/07-avatar-creator-screen/avatar-creator-screen.tsx`

**📝 Descripción:**
Componente: AvatarCreatorScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `AvatarCreatorScreenProps` |
| Estado Interno | coins, unlockedItems, furColor, headItem, torsoItem, backpacker |
| Hooks Utilizados | useState |
| Dependencias | react, @/components/ui/button, @/components/ui/tabs, @/lib/utils, lucide-react, @/components/10-avatar-display, @/lib/avatarOptions |

**🎨 Estructura JSX:**
```
├── div
  ├── Button
    ├── {Expression}
    ├── span
      ├── {Expression}
  ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🪙" | span | UI Text |
| "🐻‍❄️ Capitalus:" | span | UI Text |
| "¡Hoola! ¡Soy Capitalus! Súbete a la plataforma de piedra y usa tus monedas para crear tu propio avat..." | span | UI Text |
| "¡Usa tus monedas para personalizar tu avatar!" | span | UI Text |
| "🪙" | div | UI Text |
| "¡Guardar Avatar y Confirmar! ➔" | Button | UI Text |
| "¡HAZ CLIC!" | span | UI Text |
| "Piel" | TabsTrigger | UI Text |
| "Cabeza" | TabsTrigger | UI Text |
| "Cuerpo" | TabsTrigger | UI Text |
| "Compañero" | TabsTrigger | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | size |
| N/A | Icon | config |
| N/A | Icon | None |
| N/A | Icon | defaultValue |
| N/A | Icon | None |
| N/A | Icon | value |
| N/A | Icon | value |
| N/A | Icon | value |
| N/A | Icon | value |
| N/A | Icon | value |
| N/A | Icon | value |
| N/A | Icon | value |
| N/A | Icon | value |

---

### 08-mission-details-screen

**📍 Ubicación:** `src/components/08-mission-details-screen/mission-details-screen.tsx`

**📝 Descripción:**
Componente: MissionDetailsScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `MissionDetailsScreenProps` |
| Estado Interno | isConfirmed |
| Hooks Utilizados | useState |
| Dependencias | react, @/lib/eventData, @/components/ui/button, @/lib/avatarOptions, lucide-react, @/components/13-countdown-timer, @/components/10-avatar-display |

**🎨 Estructura JSX:**
```
├── div
  ├── div
  ├── {Expression}
  ├── div
    ├── {Expression}
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
      ├── div
        ├── span
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── {Expression}
        ├── div
          ├── h3
          ├── p
        ├── {Expression}
        ├── {Expression}
      ├── {Expression}
      ├── div
        ├── div
          ├── h2
            ├── {Expression}
          ├── {Expression}
          ├── div
            ├── div
              ├── p
              ├── p
                ├── {Expression}
              ├── p
                ├── {Expression}
            ├── div
              ├── p
              ├── p
                ├── {Expression}
            ├── div
              ├── p
              ├── p
                ├── {Expression}
            ├── div
              ├── p
              ├── p
                ├── {Expression}
      ├── {Expression}
      ├── div
        ├── {Expression}
        ├── div
          ├── span
          ├── CountdownTimer
        ├── {Expression}
        ├── div
          ├── {Expression}
          ├── button
            ├── {Expression}
        ├── {Expression}
        ├── button
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "✦ MISIÓN ACEPTADA ✦" | span | UI Text |
| "💎 VIP DESBLOQUEADO 💎" | h3 | UI Text |
| "Sombrero de Pastel 🎂" | p | UI Text |
| "🐻" | span | UI Text |
| "¡Felicidades," | h2 | UI Text |
| "!" | h2 | UI Text |
| "🗺️ Lugar" | p | UI Text |
| "🗓️ Fecha" | p | UI Text |
| "⏰ Horario" | p | UI Text |
| "🎒 Equipamiento" | p | UI Text |
| "⏱ CUENTA REGRESIVA" | span | UI Text |
| "¡CONFIRMA!" | span | UI Text |
| "¿Quieres conocer mis gustos y mi lore? ➔" | button | UI Text |
| "COORDENADAS DE MISIÓN" | span | UI Text |
| "🗺️ Lugar" | p | UI Text |
| "🗓️ Fecha" | p | UI Text |
| "⏰ Horario" | p | UI Text |
| "¿Quieres conocer mis gustos y mi lore? ➔" | button | UI Text |
| "⏱ CUENTA REGRESIVA" | span | UI Text |
| "¡CONFIRMA!" | span | UI Text |
| "¿Quieres conocer mis gustos y mi lore? ➔" | button | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | config |
| N/A | Icon | targetDate |
| N/A | Icon | None |
| N/A | Icon | targetDate |
| N/A | Icon | None |

---

### 09-bio-book-screen

**📍 Ubicación:** `src/components/09-bio-book-screen/bio-book-screen.tsx`

**📝 Descripción:**
Componente: BioBookScreen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `BioBookScreenProps` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | next/image, @/components/ui/button, lucide-react |

**🎨 Estructura JSX:**
```
├── div
  ├── div
  ├── div
    ├── {Expression}
    ├── h2
    ├── {Expression}
    ├── div
      ├── {Expression}
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── Image
        ├── p
      ├── {Expression}
      ├── div
        ├── Image
        ├── p
    ├── {Expression}
    ├── p
    ├── {Expression}
    ├── div
      ├── div
        ├── span
        ├── ArrowDown
      ├── Button
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "📦 Inventario de Facu" | h2 | UI Text |
| "RECUERDO 1" | p | UI Text |
| "RECUERDO 2" | p | UI Text |
| "¡Gracias por llegar hasta aquí! Nos vemos en la partida. 🐻" | p | UI Text |
| "¡REINICIAR!" | span | UI Text |
| "Volver al Inicio" | Button | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| Dynamic | Icon | alt, width, height |
| Dynamic | Icon | alt, width, height |
| N/A | Icon | None |

---

### 10-avatar-display

**📍 Ubicación:** `src/components/10-avatar-display/avatar-display.tsx`

**📝 Descripción:**
Componente: AvatarDisplay

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `AvatarDisplayProps` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | @/lib/utils, @/lib/avatarOptions |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── {Expression}
  ├── {Expression}
  ├── div
    ├── {Expression}
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── div
    ├── div
    ├── div
  ├── {Expression}
  ├── {Expression}
  ├── {Expression}
  ├── {Expression}
```

---

### 11-game-flow

**📍 Ubicación:** `src/components/11-game-flow/game-flow.tsx`

**📝 Descripción:**
Componente: GameFlow

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `GameFlowProps` |
| Estado Interno | N/A |
| Hooks Utilizados | useRewards |
| Dependencias | framer-motion, @/hooks/use-rewards, @/components/12-game-hud, @/components/20-map-section, @/components/19-chest-section, @/components/21-rsvp-section, @/components/22-shop-section, @/components/23-easter-egg-section |

**🎨 Estructura JSX:**
```
├── MapSection
```

---

### 12-game-hud

**📍 Ubicación:** `src/components/12-game-hud/game-hud.tsx`

**📝 Descripción:**
Componente: GameHUD

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `GameHUDProps` |
| Estado Interno | showCoinPopup |
| Hooks Utilizados | useRewards, useState |
| Dependencias | framer-motion, @/hooks/use-rewards, @/lib/utils, react |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
  ├── div
    ├── div
      ├── {Expression}
      ├── button
        ├── span
        ├── span
          ├── {Expression}
        ├── {Expression}
        ├── AnimatePresence
          ├── {Expression}
      ├── {Expression}
      ├── div
        ├── {Expression}
        ├── div
          ├── motion.div
      ├── {Expression}
      ├── div
        ├── span
          ├── {Expression}
        ├── span
          ├── {Expression}
    ├── {Expression}
    ├── div
      ├── {Expression}
  ├── {Expression}
  ├── div
    ├── div
      ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🪙" | span | UI Text |
| "¡Monedas!" | motion.div | UI Text |
| "✓" | span | UI Text |

---

### 13-countdown-timer

**📍 Ubicación:** `src/components/13-countdown-timer/countdown-timer.tsx`

**📝 Descripción:**
Componente: CountdownTimer

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `CountdownTimerProps` |
| Estado Interno | timeLeft |
| Hooks Utilizados | useCallback, useState, useEffect |
| Dependencias | react |

**🎨 Estructura JSX:**
```
├── div
  ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "--" | span | UI Text |
| "🎉 ¡La fiesta ha comenzado! 🎉" | span | UI Text |
| ":" | span | UI Text |

---

### 14-dialog-box

**📍 Ubicación:** `src/components/14-dialog-box/dialog-box.tsx`

**📝 Descripción:**
Componente: DialogBox

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `DialogBoxProps` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | @/components/ui/card, @/lib/utils |

**🎨 Estructura JSX:**
```
├── Card
  ├── CardHeader
    ├── div
      ├── div
        ├── {Expression}
      ├── CardTitle
        ├── {Expression}
  ├── CardContent
    ├── div
      ├── {Expression}
```

---

### 15-coin-reward

**📍 Ubicación:** `src/components/15-coin-reward/coin-reward.tsx`

**📝 Descripción:**
Componente: CoinReward

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `CoinRewardProps` |
| Estado Interno | visible |
| Hooks Utilizados | useState, useEffect |
| Dependencias | framer-motion, react |

**🎨 Estructura JSX:**
```
├── AnimatePresence
  ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🪙" | div | UI Text |
| "+" | motion.div | UI Text |
| "¡RECOMPENSA DESBLOQUEADA!" | motion.div | UI Text |
| "🪙" | motion.div | UI Text |

---

### 16-responsive-container

**📍 Ubicación:** `src/components/16-responsive-container/responsive-container.tsx`

**📝 Descripción:**
Componente: ResponsiveContainer

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `ResponsiveContainerProps` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @/lib/utils |

**🎨 Estructura JSX:**
```
├── Component
  ├── {Expression}
```

---

### 17-config-screen

**📍 Ubicación:** `src/components/17-config-screen/config-screen.tsx`

**📝 Descripción:**
Componente: config-screen

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | N/A |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### 18-mission-section

**📍 Ubicación:** `src/components/18-mission-section/mission-section.tsx`

**📝 Descripción:**
Componente: MissionSection

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `MissionSectionProps` |
| Estado Interno | N/A |
| Hooks Utilizados | useRewards, useEffect |
| Dependencias | framer-motion, react, @/hooks/use-rewards |

**🎨 Estructura JSX:**
```
├── motion.div
  ├── {Expression}
  ├── {Expression}
  ├── {Expression}
  ├── div
    ├── {Expression}
    ├── {Expression}
    ├── {Expression}
    ├── div
      ├── {Expression}
  ├── {Expression}
  ├── div
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🪙" | span | UI Text |
| "+" | span | UI Text |
| "monedas" | span | UI Text |

---

### 19-chest-section

**📍 Ubicación:** `src/components/19-chest-section/chest-section.tsx`

**📝 Descripción:**
Componente: ChestSection

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `ChestSectionProps` |
| Estado Interno | isOpen |
| Hooks Utilizados | useIsDesktop, useState |
| Dependencias | react, @/components/18-mission-section, @/components/ui/button, @/hooks/use-media-query, next/image |

**🎨 Estructura JSX:**
```
├── MissionSection
  ├── div
    ├── h2
    ├── p
    ├── {Expression}
    ├── {Expression}
    ├── {Expression}
    ├── Button
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "📦 Cofre de Recuerdos" | h2 | UI Text |
| "¡Abre el cofre para descubrir los recuerdos de Facu!" | p | UI Text |
| "🎁" | div | UI Text |
| "¡Toca para abrir!" | span | UI Text |
| "📸" | span | UI Text |
| "¡Desliza para ver más recuerdos!" | p | UI Text |
| "Continuar al RSVP ✉️ →" | Button | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| Dynamic | Imagen | alt, width, height |
| Dynamic | Imagen | alt, width, height |

---

### 20-map-section

**📍 Ubicación:** `src/components/20-map-section/map-section.tsx`

**📝 Descripción:**
Componente: MapSection

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `MapSectionProps` |
| Estado Interno | N/A |
| Hooks Utilizados | useRewards, useIsDesktop |
| Dependencias | @/components/18-mission-section, @/components/ui/button, @/hooks/use-rewards, lucide-react, @/lib/eventData, @/hooks/use-media-query |

**🎨 Estructura JSX:**
```
├── MissionSection
  ├── div
    ├── h2
    ├── {Expression}
    ├── div
      ├── {Expression}
      ├── div
        ├── MapPin
        ├── div
          ├── p
          ├── p
            ├── {Expression}
          ├── p
            ├── {Expression}
      ├── {Expression}
      ├── div
        ├── Calendar
        ├── div
          ├── p
          ├── p
            ├── {Expression}
      ├── {Expression}
      ├── div
        ├── Clock
        ├── div
          ├── p
          ├── p
            ├── {Expression}
      ├── {Expression}
      ├── div
        ├── p
        ├── p
          ├── {Expression}
    ├── {Expression}
    ├── div
      ├── Button
        ├── span
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🗺️ Coordenadas de la Misión" | h2 | UI Text |
| "Lugar" | p | UI Text |
| "Fecha" | p | UI Text |
| "Horario" | p | UI Text |
| "🎒 Equipamiento Requerido" | p | UI Text |
| "Continuar al Cofre 📦 →" | span | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | stepId, bgImage |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |

---

### 21-rsvp-section

**📍 Ubicación:** `src/components/21-rsvp-section/rsvp-section.tsx`

**📝 Descripción:**
Componente: RSVPSection

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `RSVPSectionProps` |
| Estado Interno | confirmed, guestName, guestCount |
| Hooks Utilizados | useIsDesktop, useState |
| Dependencias | framer-motion, @/components/18-mission-section, @/hooks/use-media-query, lucide-react, react |

**🎨 Estructura JSX:**
```
├── MissionSection
  ├── div
    ├── h2
    ├── p
    ├── {Expression}
    ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "✉️ RSVP - Confirmar Asistencia" | h2 | UI Text |
| "¡Confirmá tu presencia en la misión para ganar 50 monedas!" | p | UI Text |
| "Tu Nombre" | label | UI Text |
| "Cantidad de Invitados" | label | UI Text |
| "−" | button | UI Text |
| "+" | button | UI Text |
| "Contacto del Evento" | p | UI Text |
| "eventos@kboom.uy" | span | UI Text |
| "@kboom.uy" | span | UI Text |
| "Av. Italia 3421, KBOOM" | span | UI Text |
| "✓ ¡Confirmar Asistencia!" | span | UI Text |
| "🎉" | motion.div | UI Text |
| "¡Asistencia Confirmada!" | p | UI Text |
| "Jugador:" | p | UI Text |
| "(" | p | UI Text |
| ")" | p | UI Text |
| "🪙 +50 monedas ganadas" | p | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | stepId, bgImage |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |

---

### 22-shop-section

**📍 Ubicación:** `src/components/22-shop-section/shop-section.tsx`

**📝 Descripción:**
Componente: ShopSection

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `ShopSectionProps` |
| Estado Interno | selectedItem |
| Hooks Utilizados | useIsDesktop, useState |
| Dependencias | @/components/18-mission-section, @/components/ui/button, @/hooks/use-media-query, lucide-react, react |

**🎨 Estructura JSX:**
```
├── MissionSection
  ├── div
    ├── h2
    ├── p
    ├── {Expression}
    ├── div
      ├── {Expression}
    ├── {Expression}
    ├── {Expression}
    ├── {Expression}
    ├── div
      ├── Button
        ├── span
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🛍️ Outfit Shop" | h2 | UI Text |
| "¡Personaliza tu look con artículos del juego!" | p | UI Text |
| "🪙" | span | UI Text |
| "¡" | p | UI Text |
| "seleccionado!" | p | UI Text |
| "Continuar al Secreto 🥚 →" | span | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | stepId, bgImage |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |

---

### 23-easter-egg-section

**📍 Ubicación:** `src/components/23-easter-egg-section/easter-egg-section.tsx`

**📝 Descripción:**
Componente: EasterEggSection

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `EasterEggSectionProps` |
| Estado Interno | noclipCount, isInBackrooms, showShadowBear |
| Hooks Utilizados | useIsDesktop, useState |
| Dependencias | react, @/components/18-mission-section, @/components/ui/button, @/hooks/use-media-query, framer-motion |

**🎨 Estructura JSX:**
```
├── MissionSection
  ├── div
    ├── h2
    ├── p
    ├── {Expression}
    ├── button
      ├── div
        ├── span
        ├── span
          ├── {Expression}
    ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "🥚 ¿Hay algo aquí?" | h2 | UI Text |
| "Dicen que si tocas esta zona secreta 3 veces... puedes caer en un lugar extraño..." | p | UI Text |
| "❓" | span | UI Text |
| "🐻" | span | UI Text |
| "SHADOW BEAR" | motion.h2 | UI Text |
| "Has descubierto el secreto más oscuro de Super Bear Adventure..." | motion.p | UI Text |
| "🔄 Volver al Inicio" | Button | UI Text |
| "¡Felicidades! Has completado toda la misión" | p | UI Text |

---

### accordion

**📍 Ubicación:** `src/components/ui/accordion.tsx`

**📝 Descripción:**
Componente: accordion

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-accordion, lucide-react, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | ref |

---

### alert-dialog

**📍 Ubicación:** `src/components/ui/alert-dialog.tsx`

**📝 Descripción:**
Componente: alert-dialog

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-alert-dialog, @/lib/utils, @/components/ui/button |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `AlertDialogHeader` | Auxiliary/Event handler |
| `AlertDialogFooter` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### alert

**📍 Ubicación:** `src/components/ui/alert.tsx`

**📝 Descripción:**
Componente: alert

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, class-variance-authority, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### avatar

**📍 Ubicación:** `src/components/ui/avatar.tsx`

**📝 Descripción:**
Componente: avatar

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-avatar, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### badge

**📍 Ubicación:** `src/components/ui/badge.tsx`

**📝 Descripción:**
Componente: Badge

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `BadgeProps` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, class-variance-authority, @/lib/utils |

**🎨 Estructura JSX:**
```
├── div
```

---

### button

**📍 Ubicación:** `src/components/ui/button.tsx`

**📝 Descripción:**
Componente: button

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-slot, class-variance-authority, @/lib/utils |

**🎨 Estructura JSX:**
```
├── Comp
```

---

### calendar

**📍 Ubicación:** `src/components/ui/calendar.tsx`

**📝 Descripción:**
Componente: Calendar

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `CalendarProps` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, lucide-react, react-day-picker, @/lib/utils, @/components/ui/button |

**🎨 Estructura JSX:**
```
├── DayPicker
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | showOutsideDays, classNames, components |
| N/A | Icon | None |
| N/A | Icon | None |

---

### card

**📍 Ubicación:** `src/components/ui/card.tsx`

**📝 Descripción:**
Componente: card

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### carousel

**📍 Ubicación:** `src/components/ui/carousel.tsx`

**📝 Descripción:**
Componente: carousel

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | useEmblaCarousel, useCarousel |
| Dependencias | react, embla-carousel-react, lucide-react, @/lib/utils, @/components/ui/button |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `useCarousel` | Auxiliary Function |

**🎨 Estructura JSX:**
```
├── CarouselContext.Provider
  ├── div
    ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "Previous slide" | span | UI Text |
| "Next slide" | span | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | value |
| N/A | Icon | None |
| N/A | Icon | None |

---

### chart

**📍 Ubicación:** `src/components/ui/chart.tsx`

**📝 Descripción:**
Componente: chart

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | useChart |
| Dependencias | react, recharts, @/lib/utils |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `useChart` | Auxiliary Function |
| `getPayloadConfigFromPayload` | Auxiliary Function |
| `ChartStyle` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
├── ChartContext.Provider
  ├── div
    ├── ChartStyle
    ├── RechartsPrimitive.ResponsiveContainer
      ├── {Expression}
```

---

### checkbox

**📍 Ubicación:** `src/components/ui/checkbox.tsx`

**📝 Descripción:**
Componente: checkbox

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-checkbox, lucide-react, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |

---

### collapsible

**📍 Ubicación:** `src/components/ui/collapsible.tsx`

**📝 Descripción:**
Componente: collapsible

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | @radix-ui/react-collapsible |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### dialog

**📍 Ubicación:** `src/components/ui/dialog.tsx`

**📝 Descripción:**
Componente: dialog

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-dialog, lucide-react, @/lib/utils |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `DialogHeader` | Auxiliary/Event handler |
| `DialogFooter` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "Close" | span | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | ref |

---

### dropdown-menu

**📍 Ubicación:** `src/components/ui/dropdown-menu.tsx`

**📝 Descripción:**
Componente: dropdown-menu

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-dropdown-menu, lucide-react, @/lib/utils |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `DropdownMenuShortcut` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
├── span
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | ref, sideOffset |
| N/A | Icon | ref |
| N/A | Icon | ref, checked |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | ref |

---

### form

**📍 Ubicación:** `src/components/ui/form.tsx`

**📝 Descripción:**
Componente: form

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | useFormContext, useFormField |
| Dependencias | react, @radix-ui/react-label, @radix-ui/react-slot, react-hook-form, @/lib/utils, @/components/ui/label |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `FormField` | Auxiliary/Event handler |
| `useFormField` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
├── FormFieldContext.Provider
  ├── Controller
```

---

### input

**📍 Ubicación:** `src/components/ui/input.tsx`

**📝 Descripción:**
Componente: input

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @/lib/utils |

**🎨 Estructura JSX:**
```
├── input
```

---

### label

**📍 Ubicación:** `src/components/ui/label.tsx`

**📝 Descripción:**
Componente: label

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-label, class-variance-authority, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### menubar

**📍 Ubicación:** `src/components/ui/menubar.tsx`

**📝 Descripción:**
Componente: MenubarMenu

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `React.ComponentProps<typeof MenubarPrimitive.Menu>` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-menubar, lucide-react, @/lib/utils |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `MenubarGroup` | Auxiliary Function |
| `MenubarPortal` | Auxiliary Function |
| `MenubarRadioGroup` | Auxiliary Function |
| `MenubarSub` | Auxiliary Function |
| `MenubarShortcut` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
├── MenubarPrimitive.Menu
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | data-slot |
| N/A | Icon | ref |
| N/A | Icon | ref |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | ref, align, alignOffset, sideOffset |
| N/A | Icon | ref |
| N/A | Icon | ref, checked |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | ref |

---

### popover

**📍 Ubicación:** `src/components/ui/popover.tsx`

**📝 Descripción:**
Componente: popover

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-popover, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### progress

**📍 Ubicación:** `src/components/ui/progress.tsx`

**📝 Descripción:**
Componente: progress

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-progress, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### radio-group

**📍 Ubicación:** `src/components/ui/radio-group.tsx`

**📝 Descripción:**
Componente: radio-group

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-radio-group, lucide-react, @/lib/utils |

**🎨 Estructura JSX:**
```
├── RadioGroupPrimitive.Root
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |

---

### scroll-area

**📍 Ubicación:** `src/components/ui/scroll-area.tsx`

**📝 Descripción:**
Componente: scroll-area

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-scroll-area, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### select

**📍 Ubicación:** `src/components/ui/select.tsx`

**📝 Descripción:**
Componente: select

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-select, lucide-react, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | asChild |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref, position |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |

---

### separator

**📍 Ubicación:** `src/components/ui/separator.tsx`

**📝 Descripción:**
Componente: separator

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-separator, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### sheet

**📍 Ubicación:** `src/components/ui/sheet.tsx`

**📝 Descripción:**
Componente: sheet

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-dialog, class-variance-authority, lucide-react, @/lib/utils |

**⚙️ Funciones Principales:**
| Función | Propósito |
|---------|-----------|
| `SheetHeader` | Auxiliary/Event handler |
| `SheetFooter` | Auxiliary/Event handler |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "Close" | span | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | None |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | ref |

---

### sidebar

**📍 Ubicación:** `src/components/ui/sidebar.tsx`

**📝 Descripción:**
Componente: useSidebar

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | useIsMobile, useSidebar |
| Dependencias | react, @radix-ui/react-slot, class-variance-authority, lucide-react, @/hooks/use-mobile, @/lib/utils, @/components/ui/button, @/components/ui/input, @/components/ui/separator, @/components/ui/sheet, @/components/ui/skeleton, @/components/ui/tooltip |

**🎨 Estructura JSX:**
```
├── SidebarContext.Provider
  ├── TooltipProvider
    ├── div
      ├── {Expression}
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "Toggle Sidebar" | span | UI Text |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | value |
| N/A | Icon | delayDuration |
| N/A | Icon | open, onOpenChange |
| N/A | Icon | data-sidebar, data-mobile, style, side |
| N/A | Icon | None |
| N/A | Icon | ref, data-sidebar |
| N/A | Icon | ref, data-sidebar |
| N/A | Icon | ref, data-sidebar |
| N/A | Icon | ref, data-sidebar, data-size, data-active |
| N/A | Icon | None |
| N/A | Icon | asChild |
| N/A | Icon | side, align, hidden |
| N/A | Icon | ref, data-sidebar |
| N/A | Icon | data-sidebar |
| N/A | Icon | data-sidebar, style |
| N/A | Icon | ref, data-sidebar, data-size, data-active |

---

### skeleton

**📍 Ubicación:** `src/components/ui/skeleton.tsx`

**📝 Descripción:**
Componente: Skeleton

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `React.HTMLAttributes<HTMLDivElement>` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | @/lib/utils |

**🎨 Estructura JSX:**
```
├── div
```

---

### slider

**📍 Ubicación:** `src/components/ui/slider.tsx`

**📝 Descripción:**
Componente: slider

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-slider, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### switch

**📍 Ubicación:** `src/components/ui/switch.tsx`

**📝 Descripción:**
Componente: switch

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-switch, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### table

**📍 Ubicación:** `src/components/ui/table.tsx`

**📝 Descripción:**
Componente: table

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### tabs

**📍 Ubicación:** `src/components/ui/tabs.tsx`

**📝 Descripción:**
Componente: tabs

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-tabs, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

### textarea

**📍 Ubicación:** `src/components/ui/textarea.tsx`

**📝 Descripción:**
Componente: textarea

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | No |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @/lib/utils |

**🎨 Estructura JSX:**
```
├── textarea
```

---

### toast

**📍 Ubicación:** `src/components/ui/toast.tsx`

**📝 Descripción:**
Componente: toast

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-toast, class-variance-authority, lucide-react, @/lib/utils |

**🎨 Estructura JSX:**
```
├── ToastPrimitives.Root
```

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Propiedades |
|---------|------|-------------|
| N/A | Icon | ref |
| N/A | Icon | ref |
| N/A | Icon | ref |
| N/A | Icon | ref, toast-close |
| N/A | Icon | None |
| N/A | Icon | ref |
| N/A | Icon | ref |

---

### toaster

**📍 Ubicación:** `src/components/ui/toaster.tsx`

**📝 Descripción:**
Componente: Toaster

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | useToast |
| Dependencias | @/hooks/use-toast, @/components/ui/toast |

**🎨 Estructura JSX:**
```
├── ToastProvider
  ├── {Expression}
  ├── ToastViewport
```

---

### tooltip

**📍 Ubicación:** `src/components/ui/tooltip.tsx`

**📝 Descripción:**
Componente: tooltip

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `N/A` |
| Estado Interno | N/A |
| Hooks Utilizados | N/A |
| Dependencias | react, @radix-ui/react-tooltip, @/lib/utils |

**🎨 Estructura JSX:**
```
JSX Content (No Root Render Detected directly)
```

---

## 🪝 Hooks Personalizados

### use-media-query

**📍 Ubicación:** `src/hooks/use-media-query.ts`

---

### use-mobile

**📍 Ubicación:** `src/hooks/use-mobile.tsx`

---

### use-rewards

**📍 Ubicación:** `src/hooks/use-rewards.tsx`

---

### use-toast

**📍 Ubicación:** `src/hooks/use-toast.ts`

---

## 📚 Librerías y Utilidades

### avatarOptions

**📍 Ubicación:** `src/lib/avatarOptions.ts`

---

### eventData

**📍 Ubicación:** `src/lib/eventData.ts`

---

### placeholder-images

**📍 Ubicación:** `src/lib/placeholder-images.ts`

---

### utils

**📍 Ubicación:** `src/lib/utils.ts`

---

## 📊 Resumen Estadístico

| Categoría | Cantidad |
|-----------|----------|
| Páginas | 7 |
| Componentes | 58 |
| Hooks Personalizados | 4 |
| Utilidades | 4 |

---

**📝 Nota:** Este documento fue generado automáticamente mediante auditoría de código.
**🔄 Última actualización:** 4/13/2026
