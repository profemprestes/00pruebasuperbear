# 🎨 Patrón de Refactorización de Estilo UI/UX

Este documento describe el patrón unificado para refactorizar todos los componentes de pantalla y mantener consistencia visual en toda la aplicación.

## Componentes Base Creados

### 1. Button (`@/components/ui/button`)
**Variantes disponibles:**
- `3d-gold` - Botones dorados del juego
- `3d-green` - Botones verdes de acción  
- `3d-blue` - Botones secundarios azules
- `3d-brown` - Botones marrones

**Tamaños disponibles:**
- `game-sm` - Botones pequeños (10px alto)
- `game-md` - Botones medianos (12px alto)
- `game-lg` - Botones grandes (14px alto)
- `game-xl` - Botones extra grandes (16px alto)

**Ejemplo de uso:**
```tsx
import { Button } from '@/components/ui/button';

// Antes (código hardcodeado):
<button className="bg-gradient-to-b from-grass-green to-green-600 border-4 border-green-700 shadow-[0_6px_0_#1a5c2e] ...">
  ¡Aceptar Misión!
</button>

// Después (usando componente unificado):
<Button variant="3d-green" size="game-lg">
  ¡Aceptar Misión!
</Button>
```

### 2. Container (`@/components/ui/container`)
**Tamaños disponibles:**
- `sm` - max-w-3xl
- `md` - max-w-4xl
- `lg` - max-w-5xl (default)
- `xl` - max-w-7xl
- `full` - sin límite

**Espaciados disponibles:**
- `none` - sin padding vertical
- `sm` - py-4
- `md` - py-8
- `lg` - py-12
- `xl` - py-16

**Ejemplo de uso:**
```tsx
import { Container } from '@/components/ui/container';

// Antes:
<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
  {/* contenido */}
</div>

// Después:
<Container size="md" spacing="md">
  {/* contenido */}
</Container>
```

### 3. Typography (`@/components/ui/typography`)

#### Heading
```tsx
import { Heading } from '@/components/ui/typography';

// Antes:
<h2 className="font-milky text-2xl sm:text-3xl md:text-4xl text-teddy-brown">
  Título
</h2>

// Después:
<Heading level="h2">Título</Heading>
```

#### Body
```tsx
import { Body } from '@/components/ui/typography';

// Antes:
<p className="font-body text-base sm:text-lg text-honey-box-text">
  Párrafo de texto
</p>

// Después:
<Body size="md">Párrafo de texto</Body>
```

#### Label
```tsx
import { Label } from '@/components/ui/typography';

// Antes:
<span className="font-amble uppercase tracking-wider text-golden-coin text-sm">
  MISIÓN DISPONIBLE
</span>

// Después:
<Label size="sm" color="gold">MISIÓN DISPONIBLE</Label>
```

## Guía de Migración por Pantalla

### 04-presentation-screen ✅ COMPLETADO
- [x] Reemplazar botón "¡Aceptar Misión!" por `<Button variant="3d-green" size="game-lg">`
- [x] Mantener animaciones de shimmer y efectos de sonido

### 05-register-screen
**Botones a refactorizar:**
- "Entrar al Arcade World!" → `<Button variant="3d-gold" size="game-lg">`
- "Saltar al mapa" → `<Button variant="3d-blue" size="game-md">`

**Ubicación:** `src/components/05-register-screen/register-screen.tsx`
- Líneas con botones hardcodeados: buscar `bg-gradient-to-b from-golden-coin`
- Reemplazar imports: agregar `import { Button } from '@/components/ui/button';`

### 06-arcade-world-screen
**Botones a refactorizar:**
- "JUGAR" en cada minijuego → `<Button variant="3d-gold" size="game-sm">`

**Accesibilidad:**
- Reemplazar `<div onClick={...}>` por `<button onClick={...}>` o `<Button onClick={...}>`
- Agregar `aria-label` a botones con solo iconos

**Ubicación:** `src/components/06-arcade-world-screen/arcade-world-screen.tsx`

### 07-avatar-creator-screen
**Botones a refactorizar:**
- "ENTRAR A LA CANCHA!" → `<Button variant="3d-gold" size="game-xl">`
- Flechas de navegación ← → → `<Button variant="3d-gold" size="game-sm">`

**Ubicación:** `src/components/07-avatar-creator-screen/avatar-creator-screen.tsx`

### 08-mission-details-screen
**Botones a refactorizar:**
- "Confirmar Asistencia" → `<Button variant="3d-green" size="game-lg">`

**Contenedores a unificar:**
- Info board principal → `<Container size="lg" spacing="md">`

**Ubicación:** `src/components/08-mission-details-screen/mission-details-screen.tsx`

### 09-bio-book-screen
**Botones a refactorizar:**
- "Volver al Inicio" → `<Button variant="3d-gold" size="game-lg">`

**Contenedores a unificar:**
- Grid principal → `<Container size="lg" spacing="md">`

**Ubicación:** `src/components/09-bio-book-screen/bio-book-screen.tsx`

## Checklist de Accesibilidad

### Para cada componente:
1. **Reemplazar `<div onClick>` por `<button>` o `<Button>`**
   - Buscar todos los `div` con `onClick` y reemplazar
   - Ejemplo en `06-arcade-world-screen.tsx`:
     ```tsx
     // Antes
     <div onClick={handleWhack}>🔥</div>
     
     // Después
     <Button onClick={handleWhack} aria-label="Golpear topo" variant="ghost" size="icon">
       🔥
     </Button>
     ```

2. **Agregar `aria-label` a botones sin texto visible**
   - Iconos y emojis necesitan descripción
   - Ejemplo: `<Button aria-label="Girar ruleta">🎰</Button>`

3. **Verificar navegación por teclado**
   - Todos los elementos interactivos deben ser accesibles con Tab
   - Deben responder a Enter y Space

## Beneficios de esta Refactorización

1. **Consistencia Visual**: Todos los botones 3D usan exactamente las mismas sombras, bordes y gradientes
2. **Mantenibilidad**: Cambiar un color o sombra en un solo lugar afecta toda la app
3. **Escalabilidad**: Nuevos botones siguen el patrón establecido automáticamente
4. **Accesibilidad**: Componentes base ya incluyen atributos ARIA y manejo de teclado
5. **Type Safety**: TypeScript asegura que solo se usen variantes válidas

## Próximos Pasos

1. Aplicar el patrón a las pantallas restantes (05, 06, 07, 08, 09)
2. Ejecutar `pnpm dev` y verificar que todos los botones se ven igual
3. Probar navegación por teclado en todas las pantallas
4. Eliminar clases hardcodeadas duplicadas
5. Documentar nuevas convenciones en README del proyecto
