# Mapeo de Pantallas Stitch → Código Local

## 📋 Tabla de Referencia Completa

Este documento asocia cada pantalla del proyecto Stitch con su archivo local correspondiente en el código.

---

## 🎨 Pantallas Generadas en Stitch

### Mobile Screens (375-390px)

| # | Stitch Screen | Dimensiones | Ruta Local del Archivo | Componente | Estado |
|---|---------------|-------------|------------------------|------------|--------|
| 1 | [Register Screen](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=98ae7883ece4495da4e4c3989e097dd7) | 390×884 | `src/components/register-screen.tsx` | `RegisterScreen` | ✅ Implementado |
| 2 | [Password Screen](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=0ea0a4125c3441549dc264026ba40963) | 390×884 | `src/components/password-screen.tsx` | `PasswordScreen` | ✅ Implementado |
| 3 | [Avatar Creator](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=8e0e715d8ccc408bb1a45afc1c6e3a01) | 390×884 | `src/components/avatar-creator-screen.tsx` | `AvatarCreatorScreen` | ✅ Implementado |
| 4 | [Mission Details](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=dc562f625c1a496ba1efc6f0f471a100) | 390×1116 | `src/components/mission-details-screen.tsx` | `MissionDetailsScreen` | ✅ Implementado |
| 5 | [Bio Book](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=5b0277566e504c7db0f182792b563da7) | 390×1045 | `src/components/bio-book-screen.tsx` | `BioBookScreen` | ✅ Implementado |
| 6 | [Arcade World](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=d715155b42f54b4d9295246c27cebb6b) | 390×1177 | `src/components/arcade-world-screen.tsx` | `ArcadeWorldScreen` | ✅ Implementado |
| 7 | [Chest Section](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=c6ebfcd75ace41c39ed1beab83261cf6) | 390×884 | `src/components/chest-section.tsx` | `ChestSection` | ⚠️ Pendiente revisar |
| 8 | [Intro Video](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=c1dba5509a2f4e54aaeeb6b29f240999) | 390×884 | `src/components/intro-video-screen.tsx` | `IntroVideoScreen` | ✅ Implementado |
| 9 | [Easter Egg](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=a8035081a8254e9fbad4e690e5299f66) | 390×1109 | `src/components/easter-egg-section.tsx` | `EasterEggSection` | ⚠️ Pendiente revisar |

### Desktop Screens (1280px)

| # | Stitch Screen | Dimensiones | Ruta Local del Archivo | Componente | Estado |
|---|---------------|-------------|------------------------|------------|--------|
| 1 | [Register Desktop](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=14b78e8fece8457c921d4080939a5830) | 1280×1024 | `src/components/register-screen.tsx` | `RegisterScreen` (variante desktop) | ✅ Implementado (mismo archivo) |
| 2 | [RSVP Desktop](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=128e8cc71f3c43f3a4b34c180c49e61d) | 1280×1024 | `src/components/rsvp-section.tsx` | `RSVPSection` | ⚠️ Pendiente revisar |
| 3 | [Loading Desktop](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=ca03b8f42eba42b8b3d12ab5694f3a13) | 1280×910 | `src/components/loading-screen.tsx` | `LoadingScreen` | ✅ Implementado |
| 4 | [❓ Sin Identificar](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=ffc11db36aba4c188c51c79d45478ee4) | 1280×1024 | *(Verificar)* | *(Pendiente identificar)* | ❓ Sin identificar |

### Pantalla Adicional Detectada

| Stitch Screen | Posición | Dimensiones | Posible Uso |
|---------------|----------|-------------|-------------|
| [Variante Extra](https://stitch.withgoogle.com/preview/12124558162526826616?node-id=6917e34ebbc64069a681b149f13b97d3) | X: 1344, Y: 1168 | 390×1117 | Posible variante de Mission o pantalla extra |

---

## 📂 Estructura Local de Componentes

### Screens (Pantallas completas)

```
src/components/
├── password-screen.tsx          → Pantalla de contraseña
├── loading-screen.tsx           → Pantalla de carga
├── intro-video-screen.tsx       → Video de introducción
├── presentation-screen.tsx      → Pantalla de presentación
├── register-screen.tsx          → Registro (Mobile + Desktop)
├── arcade-world-screen.tsx      → Mundo Arcade
├── avatar-creator-screen.tsx    → Creador de Avatar
├── mission-details-screen.tsx   → Detalles de Misión
├── bio-book-screen.tsx          → Libro Bio de Facu
└── config-screen.tsx            → Pantalla de configuración
```

### Sections (Secciones dentro del flujo)

```
src/components/
├── mission-section.tsx          → Wrapper de sección de misión
├── map-section.tsx              → Sección de mapa/coordenadas
├── chest-section.tsx            → Sección de cofre/recompensa
├── shop-section.tsx             → Sección de tienda
├── rsvp-section.tsx             → Sección de confirmación RSVP
└── easter-egg-section.tsx       → Sección de huevo de pascua
```

---

## 🔄 Flujo de Navegación Actual

```
PasswordScreen (src/components/password-screen.tsx)
    ↓
LoadingScreen (src/components/loading-screen.tsx)
    ↓
IntroVideoScreen (src/components/intro-video-screen.tsx)
    ↓
PresentationScreen (src/components/presentation-screen.tsx)
    ↓
RegisterScreen (src/components/register-screen.tsx)
    ↓
    ├─→ ArcadeWorldScreen (src/components/arcade-world-screen.tsx)
    │       ↓
    │   AvatarCreatorScreen (src/components/avatar-creator-screen.tsx)
    │       ↓
    │   GameFlow (src/components/game-flow.tsx)
    │       ↓ (secciones internas)
    │       ├─→ MapSection (src/components/map-section.tsx)
    │       ├─→ ChestSection (src/components/chest-section.tsx)
    │       ├─→ ShopSection (src/components/shop-section.tsx)
    │       ├─→ EasterEggSection (src/components/easter-egg-section.tsx)
    │       └─→ RSVPSection (src/components/rsvp-section.tsx)
    │
    └─→ MissionDetailsScreen (src/components/mission-details-screen.tsx)
            ↓
        BioBookScreen (src/components/bio-book-screen.tsx)
```

---

## ✅ Estado de Implementación

### Pantallas 100% Implementadas
| Componente | Archivo | Mobile | Desktop | Safe Areas | Responsive |
|-----------|---------|--------|---------|------------|------------|
| PasswordScreen | `password-screen.tsx` | ✅ | ❌ N/A | ❌ Pendiente | ⚠️ Parcial |
| LoadingScreen | `loading-screen.tsx` | ✅ | ❌ N/A | ❌ Pendiente | ⚠️ Parcial |
| IntroVideoScreen | `intro-video-screen.tsx` | ✅ | ❌ N/A | ❌ Pendiente | ⚠️ Parcial |
| PresentationScreen | `presentation-screen.tsx` | ✅ | ❌ N/A | ✅ Implementado | ✅ Completo |
| RegisterScreen | `register-screen.tsx` | ✅ | ✅ | ✅ Implementado | ✅ Completo |
| AvatarCreatorScreen | `avatar-creator-screen.tsx` | ✅ | ❌ N/A | ✅ Implementado | ✅ Completo |
| MissionDetailsScreen | `mission-details-screen.tsx` | ✅ | ❌ N/A | ✅ Implementado | ✅ Completo |
| BioBookScreen | `bio-book-screen.tsx` | ✅ | ❌ N/A | ✅ Implementado | ✅ Completo |
| ArcadeWorldScreen | `arcade-world-screen.tsx` | ✅ | ❌ N/A | ❌ Pendiente | ⚠️ Parcial |

### Secciones (dentro de GameFlow)
| Componente | Archivo | Mobile | Safe Areas | Responsive |
|-----------|---------|--------|------------|------------|
| MissionSection | `mission-section.tsx` | ✅ | ✅ Implementado | ✅ Completo |
| MapSection | `map-section.tsx` | ✅ | ✅ Implementado | ✅ Completo |
| ChestSection | `chest-section.tsx` | ✅ | ❌ Pendiente | ⚠️ Parcial |
| ShopSection | `shop-section.tsx` | ✅ | ✅ Implementado | ✅ Completo |
| RSVPSection | `rsvp-section.tsx` | ✅ | ✅ Implementado | ✅ Completo |
| EasterEggSection | `easter-egg-section.tsx` | ✅ | ❌ Pendiente | ⚠️ Parcial |

---

## 🎯 Próximos Pasos de Implementación

### 1. Revisar y Actualizar según Diseños Stitch
- [ ] Comparar `chest-section.tsx` con diseño Stitch (`c6ebfcd75ace41c39ed...`)
- [ ] Comparar `easter-egg-section.tsx` con diseño Stitch (`a8035081a8254e9fbad...`)
- [ ] Comparar `rsvp-section.tsx` con diseño Stitch Desktop (`128e8cc71f3c43f3a4b...`)
- [ ] Actualizar estilos para match exacto con diseños Stitch

### 2. Pantallas sin Implementación Local Aún
- [ ] Identificar Stitch Screen `ffc11db36aba4c188c51c79d45478ee4` (Desktop 1280×1024)
- [ ] Identificar Stitch Screen `6917e34ebbc64069a681b149f13b97d3` (variante)

### 3. Safe Areas Pendientes
- [ ] `password-screen.tsx` - Agregar safe areas
- [ ] `loading-screen.tsx` - Agregar safe areas
- [ ] `intro-video-screen.tsx` - Agregar safe areas
- [ ] `arcade-world-screen.tsx` - Agregar safe areas
- [ ] `chest-section.tsx` - Agregar safe areas
- [ ] `easter-egg-section.tsx` - Agregar safe areas

### 4. Desktop Variants Faltantes
Todos los desktop variants de Stitch deben ser implementados en los archivos locales existentes usando el sistema de breakpoints:
- [ ] Password Screen Desktop
- [ ] Avatar Creator Desktop
- [ ] Mission Details Desktop
- [ ] Bio Book Desktop
- [ ] Arcade World Desktop
- [ ] Treasure Chest Desktop
- [ ] Intro Video Desktop
- [ ] Easter Egg Desktop

---

## 📍 Referencia Rápida

**Proyecto Stitch:** https://stitch.google.com/projects/12124558162526826616  
**Código Local:** `E:\proyectos\00pruebasuperbear\src\components\`  
**Documentación Stitch:** `docs/stitch-ui-reference.md`

---

**Última actualización:** 2026-04-13
