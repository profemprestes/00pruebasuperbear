# Migración SPA a Rutas Reales - Next.js

## Estructura Actual
```
/01-home/page.tsx - SPA con 10 pantallas:
  - password
  - loading  
  - introVideo
  - presentation
  - register
  - arcadeWorld
  - avatarCreator
  - gameFlow (6 sub-secciones)
  - missionDetails
  - bioBook
```

## Nueva Estructura Propuesta
```
/ - Redirect to /mission
/mission - Flujo principal (presentation → register → arcade → avatar → gameFlow)
/mission/details - Mission Details (info del evento)
/mission/bio - Bio Book
/admin - Panel de configuración
/admin/guide - Wizard de onboarding
```

## Estrategia de Migración

### Opción 1: Rutas Completas (Recomendada)
- Cada pantalla es una ruta independiente
- Estado se maneja con URL params + Zustand
- Mejor para SEO y compartibilidad
- **Ventaja:** Cada pantalla es accesible directamente
- **Desventaja:** Requiere refactorizar gestión de estado

### Opción 2: Rutas Agrupadas (Hybrida)
- Mantener SPA para flujo secuencial (password → loading → intro → presentation)
- Separar pantallas independientes en rutas:
  - `/mission/details` - Info del evento
  - `/mission/bio` - Bio Book
  - `/arcade` - Arcade World
  - `/avatar` - Avatar Creator
- **Ventaja:** Menos disruptivo, mantiene fluidez
- **Desventaja:** No todas las pantallas son accesibles directamente

### Opción 3: Rutas con Parallel Routes (Avanzada)
- Usar Next.js Parallel Routes para layouts
- Estado global con Zustand
- **Ventaja:** Máxima flexibilidad
- **Desventaja:** Complejidad alta

## Recomendación: Opción 2 (Hybrida)

**Razones:**
1. Preserva la experiencia de usuario actual
2. Mejora accesibilidad y SEO para pantallas clave
3. Permite compartir URLs específicas
4. Menor riesgo de bugs en migración
5. Mantiene animaciones fluidas donde importa

## Plan de Implementación

### Paso 1: Crear Zustand Store
- Instalar `zustand`
- Crear store global para estado del juego
- Migrar localStorage a Zustand + persist middleware

### Paso 2: Crear Rutas Independientes
- `/mission/details` - MissionDetailsScreen
- `/mission/bio` - BioBookScreen
- `/arcade` - ArcadeWorldScreen
- `/avatar` - AvatarCreatorScreen

### Paso 3: Actualizar Navegación
- Reemplazar `setCurrentScreen()` por `router.push()`
- Preservar animaciones con `<AnimatePresence>`
- Agregar loading states entre rutas

### Paso 4: Testing
- Verificar que todas las rutas funcionan
- Probar navegación directa por URL
- Verificar que estado persiste entre rutas

## Estado a Preservar
- `playerName` - Nombre del jugador
- `playedMinigames` - Si completó arcade
- `coins` - Monedas ganadas
- `avatarConfig` - Avatar seleccionado
- `facuBio`, `facuLikes`, `photos` - Configuración de Facu
