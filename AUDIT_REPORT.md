# 🔍 Reporte de Auditoría Técnica y Visual UI/UX - Gran Facu Aventura

Este documento detalla los hallazgos de la auditoría arquitectónica, de UI/UX y accesibilidad del proyecto Next.js, con enfoque en las inconsistencias sistémicas y la deuda técnica, finalizando con una hoja de ruta de refactorización.

## 🚨 Inconsistencias de Alto Impacto

### 1. Arquitectura de Componentes Fragmentada y Mezclada
- **Problema:** El directorio `src/components/` no sigue un patrón escalable (como Atomic Design o Feature-based). Mezcla componentes de UI genéricos (dentro de `ui/`), secciones de páginas (ej. `18-mission-section`, `19-chest-section`) y vistas completas ("screens" como `01-password-screen`, `07-avatar-creator-screen`).
- **Impacto:** Fomenta la duplicación de código y dificulta la localización de lógica de negocio versus lógica de presentación.
- **Archivos Afectados:** Todo el directorio `src/components/`, estructurado únicamente por numeración secuencial.

### 2. Fractura en el Sistema de Diseño y Tokens
- **Problema:** Aunque existen tokens definidos en `tailwind.config.ts` y abstracciones CSS útiles en `src/app/globals.css` (como `.voxel-card`, `.btn-3d-gold`), a lo largo de los componentes se "inventan" valores y se abusa de utilidades arbitrarias (magic strings) en lugar de aprovechar el sistema.
- **Ejemplo Específico:** En `src/components/04-presentation-screen/presentation-screen.tsx` y `src/components/09-bio-book-screen/bio-book-screen.tsx`, los botones principales implementan estilos 3D manualmente con clases larguísimas:
  `bg-gradient-to-b from-grass-green to-green-600 border-4 border-green-700 shadow-[0_6px_0_#1a5c2e] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_2px_0_#1a5c2e]`.
- **Impacto:** Si se desea cambiar la profundidad de la sombra o el color de los botones 3D del juego, hay que buscar y reemplazar en múltiples archivos.

### 3. Falta de Cohesión UI/UX entre Páginas
- **Botones Inconsistentes:** Mientras algunos componentes usan la clase monstruosa descrita arriba, otros como `src/components/07-avatar-creator-screen/avatar-creator-screen.tsx` usan un estilo simplificado (`bg-grass-green border-b-4 border-green-800`). A su vez, `src/components/ui/button.tsx` tiene sus propias reglas para el estado active (`active:translate-y-1 active:shadow-[0_0_0_transparent]`).
- **Layouts Desalineados:** Los contenedores principales difieren en sus anchos máximos (`max-w-6xl` vs `max-w-4xl` vs `max-w-5xl`) y en su escala de espaciados base (padding `px-4 sm:px-6 md:px-8` vs `p-4 md:p-8`), rompiendo la consistencia de la retícula.
- **Tipografía Redundante:** El uso de títulos se repite con las mismas combinaciones de Tailwind (ej. `className="font-milky text-xl sm:text-2xl text-teddy-brown"`) en lugar de usar componentes tipográficos semánticos (ej. `<Heading level={2}>`).

### 4. Implementación Next.js (Anti-patrón de SPA en App Router)
- **Problema:** En lugar de aprovechar el sistema de rutas nativo de Next.js (`layout.tsx`, directorios anidados y pre-fetching), el archivo `src/app/01-home/page.tsx` importa decenas de componentes pesados y gestiona la navegación con un `useState` (`currentScreen`) guardado en `localStorage`.
- **Impacto:** Se genera un único "Client Component" colosal. El navegador del usuario debe descargar gran parte del JavaScript de toda la experiencia de una vez. Se pierde el propósito de Server Components y las transiciones de ruta optimizadas de Next.js.

### 5. Accesibilidad (a11y) y Semántica Pobre en Interacciones
- **Problema:** Se abusa de la etiqueta `<div>` para elementos interactivos en lugar de `<button>` nativos, careciendo de roles ARIA y manejo de eventos de teclado.
- **Archivos Afectados:** `src/components/06-arcade-world-screen/arcade-world-screen.tsx` usa `div` con `onClick` para interacciones críticas (ej. recoger llaves `<div onClick={onComplete} ...>🔑</div>` y minijuegos `<div onClick={handleWhack} ...>️‍🔥</div>`).
- **Impacto:** Excluye por completo a usuarios que navegan mediante teclado o usan lectores de pantalla, disminuyendo drásticamente la calidad y accesibilidad de la aplicación.

---

## 🗺️ Hoja de Ruta de Refactorización

### Fase 1: Saneamiento Semántico y de Accesibilidad (Corto Plazo)
1. Reemplazar todos los `div` interactivos por elementos `<button>`.
2. Asegurar que los botones sin texto visible (como emojis o iconos) posean el atributo `aria-label`.
3. Revisar que la estructura de encabezados (`<h1>`, `<h2>`, `<h3>`) siga un orden lógico por vista.

### Fase 2: Unificación del Sistema de Diseño (Mediano Plazo)
1. **Consolidar Componentes UI:** Trasladar la lógica de "botones 3D" del juego a variantes extendidas dentro de `src/components/ui/button.tsx` usando `cva` (Class Variance Authority).
2. **Componentes de Layout y Tipografía:** Crear componentes envolvedores como `<Container>` y `<Typography>` para asegurar que los márgenes, anchos máximos y tamaños de fuente respondan al mismo sistema base.
3. Eliminar utilidades "hardcodeadas" y reutilizar las abstracciones presentes en `globals.css` (ej. aplicar sistemáticamente `.voxel-card` a los contenedores).

### Fase 3: Reestructuración Arquitectónica y Next.js (Largo Plazo)
1. **Reestructurar Directorios:** Separar el directorio `components/` en `ui/` (componentes tontos), `features/` (lógica de dominio/juego) y `layouts/`.
2. **Migrar SPA a App Router:** Mapear las "screens" principales a rutas reales de Next.js (ej. `/invite`, `/arcade`, `/avatar-creator`).
3. **Manejo del Estado Global:** Reemplazar el `useState` gigante de navegación por un contexto global o store (Zustand) persistido, manteniendo la fluidez mediante `framer-motion` acoplado al `<AnimatePresence>` en el layout raíz para mantener la sensación de SPA sin sacrificar el bundle splitting.
