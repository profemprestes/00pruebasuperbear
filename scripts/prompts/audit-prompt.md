# Prompt para Agente: Auditoría Completa del Proyecto Next.js

## Instrucciones del Agente

Eres un agente experto en auditoría de código Next.js/React. Tu misión es revisar exhaustivamente TODO el proyecto ubicado en `E:\proyectos\00pruebasuperbear\` y generar un archivo Markdown (`AUDIT.md`) con un informe detallado de CADA página y componente.

---

## 📋 Tareas a Realizar

### 1. Explorar la Estructura del Proyecto
- Lee TODOS los archivos `.tsx` y `.ts` en:
  - `src/app/` (todas las páginas)
  - `src/components/` (todos los componentes numerados 01-23)
  - `src/hooks/` (todos los hooks personalizados)
  - `src/lib/` (todas las utilidades y configuraciones)
  - `src/ai/` (si existe contenido)

### 2. Analizar Cada Página y Componente

Para CADA página y componente encontrado, debes documentar:

#### **Estructura del Componente**
```
- Nombre del componente
- Ubicación del archivo
- Tipo (Página/Componente/Hook/Utilidad)
- Props que recibe (nombre, tipo, valor por defecto, requerido/opcional)
- Estado interno (useState, useEffect, etc.)
- Hooks personalizados que utiliza
- Dependencias externas (librerías de terceros)
- Funciones principales (nombre y propósito)
- Estructura JSX (árbol de elementos principales)
- Estilos utilizados (Tailwind classes, custom CSS, etc.)
- Rutas de navegación (links, redirects, router.push)
```

#### **Contenido de Texto**
```
- Todos los textos visibles en la UI (títulos, párrafos, botones, labels, placeholders)
- Textos dinámicos o interpolados
- Mensajes de error o validación
- Tooltips y aria-labels
- Textos en diferentes idiomas (si aplica)
```

#### **Recursos de Imágenes y Multimedia**
```
- Imágenes estáticas (src, alt, dimensiones, formato)
- Videos (src, propiedades, autoplay, loop, etc.)
- Iconos (lucide-react, emojis, custom SVG)
- Fondos y backgrounds
- Assets públicos (public/...)
- Data URIs o base64
```

### 3. Generar el Archivo AUDIT.md

Crea un archivo `AUDIT.md` en la raíz del proyecto (`E:\proyectos\00pruebasuperbear\AUDIT.md`) con la siguiente estructura:

```markdown
# 📊 Auditoría Completa del Proyecto - Super Bear Adventure

**Fecha de Auditoría:** [Fecha actual]  
**Total de Páginas:** [número]  
**Total de Componentes:** [número]  
**Total de Hooks:** [número]  
**Total de Utilidades:** [número]

---

## 📁 Índice

1. [Páginas](#páginas)
   - [01-home](#01-home)
   - [02-admin-config](#02-admin-config)
   - [03-admin-guide](#03-admin-guide)
   - [admin](#admin)
   - [admin/guide](#adminguide)
2. [Componentes](#componentes)
   - [01-password-screen](#01-password-screen)
   - [02-loading-screen](#02-loading-screen)
   - [...continuar para cada componente...]
3. [Hooks Personalizados](#hooks-personalizados)
4. [Librerías y Utilidades](#librerías-y-utilidades)
5. [Recursos del Proyecto](#recursos-del-proyecto)

---

## 📄 Páginas

### 01-home

**📍 Ubicación:** `src/app/01-home/page.tsx`

**📝 Descripción:**  
[Descripción breve de la página y su propósito]

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Página (Route Component) |
| Client Component | Sí/No |
| Props | N/A (es página raíz) |
| Estado Interno | `currentScreen`, `playerName`, `playedMinigames`, `coins`, `avatarConfig`, `facuBio`, `facuLikes`, `photo1`, `photo2` |
| Hooks Utilizados | `useState`, `useEffect` |
| Dependencias | `framer-motion`, `lucide-react` (si aplica) |

**📦 Componentes Hijos:**
- `PasswordScreen` (01-password-screen)
- `LoadingScreen` (02-loading-screen)
- [Listar TODOS los componentes que importa y utiliza]

**🎨 Estructura JSX:**
```
div.min-h-screen
├── video (background)
└── div.absolute.inset-0
    └── renderScreen()
        ├── PasswordScreen
        ├── LoadingScreen
        ├── IntroVideoScreen
        └── [... todos los screens ...]
```

**📝 Textos Utilizados:**
| Texto | Ubicación | Propósito |
|-------|-----------|-----------|
| "Acceso Privado" | PasswordScreen | Título del modal |
| [... listar TODOS los textos ...] | | |

**🖼️ Imágenes y Multimedia:**
| Recurso | Tipo | Ruta/URL | Propiedades | Uso |
|---------|------|----------|-------------|-----|
| fondo_web.mp4 | Video | /fondo_web.mp4 | autoplay, loop, muted | Background principal |
| [... listar TODOS los recursos ...] | | | | |

**🔀 Lógica de Navegación:**
```typescript
// Flujo de screens
password → loading → introVideo → presentation → register → arcadeWorld → avatarCreator → gameFlow
                                                                         → missionDetails → bioBook
```

---

### 02-admin-config

**📍 Ubicación:** `src/app/02-admin-config/page.tsx`

[Repetir la misma estructura que 01-home para TODAS las páginas]

---

### 03-admin-guide

**📍 Ubicación:** `src/app/03-admin-guide/page.tsx`

[Repetir la misma estructura]

---

## 🧩 Componentes

### 01-password-screen

**📍 Ubicación:** `src/components/01-password-screen/password-screen.tsx`

**📝 Descripción:**  
[Descripción del componente y su funcionalidad]

**🔧 Estructura del Código:**

| Propiedad | Detalle |
|-----------|---------|
| Tipo | Componente UI |
| Client Component | Sí |
| Props | `onCorrectPassword: () => void` (requerido) |
| Estado Interno | `password` (string), `error` (boolean) |
| Hooks Utilizados | `useState` |
| Dependencias | `@/components/ui/input`, `@/components/ui/button`, `lucide-react` |

**⚙️ Funciones Principales:**
| Función | Propósito | Parámetros | Retorno |
|---------|-----------|------------|---------|
| `handleSubmit` | Valida contraseña | Ninguno | void |
| `handleKeyPress` | Detecta Enter | `event` | void |

**🎨 Estructura JSX:**
```
div.fixed.inset-0
├── Shield icon
├── h1 "Acceso Privado"
├── p "Esta es una invitación privada..."
├── Input (password)
└── Button "Ingresar"
```

**📝 Textos Utilizados:**
| Texto | Propósito |
|-------|-----------|
| "Acceso Privado" | Título |
| "Esta es una invitación privada. Por favor, ingresa la contraseña." | Descripción |
| "Ingresar" | Botón principal |

**🖼️ Iconos:**
| Icono | Librería | Uso |
|-------|----------|-----|
| Shield | lucide-react | Icono de seguridad |

---

### 02-loading-screen

[Repetir la misma estructura detallada para CADA componente del 01 al 23]

---

### 03-intro-video-screen

[Repetir estructura]

---

[... CONTINUAR PARA CADA COMPONENTE HASTA EL 23 ...]

---

## 🪝 Hooks Personalizados

### use-rewards

**📍 Ubicación:** `src/hooks/use-rewards.tsx`

**📝 Descripción:**  
[Descripción del hook y su propósito]

**🔧 API:**
| Función/Estado | Tipo | Descripción |
|----------------|------|-------------|
| `currentStepIndex` | number | Índice del paso actual |
| `goToStep` | (step: number) => void | Navega a un paso específico |
| [... listar toda la API ...] | | |

**📦 Dependencias:**
- [Listar dependencias]

---

### use-mobile

[Repetir estructura para cada hook]

### use-media-query

[Repetir estructura]

### use-toast

[Repetir estructura]

---

## 📚 Librerías y Utilidades

### utils.ts

**📍 Ubicación:** `src/lib/utils.ts`

**📝 Descripción:**  
Funciones utilitarias del proyecto

**🔧 Funciones Exportadas:**
| Función | Propósito | Parámetros | Retorno |
|---------|-----------|------------|---------|
| `cn` | Combinar classes | `...inputs` | string |

---

### eventData.ts

**📍 Ubicación:** `src/lib/eventData.ts`

[Repetir estructura detallando TODOS los datos del evento]

---

### avatarOptions.ts

**📍 Ubicación:** `src/lib/avatarOptions.ts`

[Repetir estructura detallando TODAS las opciones de avatar]

---

## 🖼️ Recursos del Proyecto

### Imágenes Públicas

| Ruta | Formato | Dimensiones | Uso |
|------|---------|-------------|-----|
| /fondo_web.mp4 | MP4 | - | Background principal |
| /facu_bear_sin_fondo.png | PNG | - | Avatar de Facu |
| [... TODAS las imágenes ...] | | | |

### Videos

| Ruta | Formato | Duración | Uso |
|------|---------|----------|-----|
| /intro_inicio_pc.mp4 | MP4 | - | Intro en desktop |
| /intro_inicio_movil.mp4 | MP4 | - | Intro en móvil |

### Mundos/Backgrounds

| Ruta | Uso |
|------|-----|
| /mundos/bear_village/Hubbearvillage.webp | Background presentación |
| /mundos/bear_village/Spawnpoint.webp | Background mapa |
| [... TODOS los mundos ...] | |

---

## 📊 Resumen Estadístico

| Categoría | Cantidad |
|-----------|----------|
| Páginas | X |
| Componentes | 23 |
| Hooks Personalizados | 4 |
| Utilidades | 5 |
| Imágenes Estáticas | X |
| Videos | X |
| Iconos Lucide | X |
| Textos Totales | X |

---

## 🔍 Observaciones y Recomendaciones

### Fortalezzas
- [Listar aspectos positivos encontrados]

### Áreas de Mejora
- [Listar posibles mejoras]

### Notas Adicionales
- [Cualquier otra observación relevante]

---

**📝 Nota:** Este documento fue generado automáticamente mediante auditoría de código.  
**🔄 Última actualización:** [Fecha]
```

---

## ✅ Checklist de Verificación

Antes de finalizar, verifica que hayas documentado:

- [ ] TODAS las páginas en `src/app/` (incluyendo subdirectorios)
- [ ] TODOS los componentes 01-23 en `src/components/`
- [ ] TODOS los hooks en `src/hooks/`
- [ ] TODAS las utilidades en `src/lib/`
- [ ] TODOS los componentes UI en `src/components/ui/` (mencionarlos en resumen)
- [ ] TODOS los textos visibles en cada componente
- [ ] TODAS las imágenes, videos e iconos
- [ ] TODAS las rutas y navegación entre páginas
- [ ] TODOS los estados y props de cada componente
- [ ] La estructura JSX de cada componente

---

## 🎯 Reglas Importantes

1. **NO omitas ningún componente o página** - Debes revisar CADA archivo
2. **Sé exhaustivo con los textos** - Incluye incluso los textos dinámicos
3. **Documenta TODAS las imágenes** - Incluso las que vienen de librerías
4. **Incluye ejemplos de código** cuando sea relevante (estructura JSX, lógica compleja)
5. **Mantén un formato consistente** en todo el documento
6. **Usa tablas** para organizar información repetitiva
7. **Agrega diagramas ASCII** para mostrar jerarquías y flujos complejos
8. **NO asumas nada** - Lee cada archivo para verificar

---

## 🚀 Instrucciones de Ejecución

1. Comienza explorando la estructura del proyecto con `glob` y `list_directory`
2. Lee CADA archivo `.tsx` y `.ts` mencionado
3. Extrae la información requerida de cada archivo
4. Genera el archivo `AUDIT.md` completo en `E:\proyectos\00pruebasuperbear\AUDIT.md`
5. Verifica que el archivo esté completo antes de finalizar

**IMPORTANTE:** Este es un trabajo exhaustivo. NO tomes atajos. Lee CADA archivo y documenta TODO lo que encuentres.
