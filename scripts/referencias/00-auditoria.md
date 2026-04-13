# 🕵️‍♂️ PROMPT MAESTRO: Auditoría Autónoma de Estado del Proyecto

**Rol:** Lead Software Architect & Auditor
**Objetivo:** Generar un reporte de estado 100% real basado en la evidencia actual del código, sin asunciones previas.

---

## ⚙️ PROTOCOLO DE EJECUCIÓN

Tu misión es explorar el código "desde cero", identificar qué se ha implementado realmente y contrastarlo con los estándares de arquitectura definidos en `AI_CONTEXT.md` y `scripts/referencias/`.

---

### 1. Fase de Descubrimiento (Evidencia Pura)

Antes de escribir una sola palabra del reporte, debes ejecutar estas acciones internas:

#### 1.1 Inventario de Documentación (OBLIGATORIO):

- Revisa **TODO** el contenido de `scripts/referencias/01-07-*.md`
- Identifica qué pantallas, componentes y funcionalidades están documentadas
- **Regla de Oro:** Si algo no está documentado en referencias, verifica su existencia en el código

#### 1.2 Inventario de Código (OBLIGATORIO):

- Busca en `src/app/` las páginas que existen (01-home, 02-admin-config, etc.)
- Busca en `src/components/` los componentes numerados (01-23)
- Busca en `src/hooks/` los hooks personalizados
- Busca en `src/lib/` las utilidades y configuraciones
- Busca en `public/` los assets disponibles (imágenes, videos, fuentes)

#### 1.3 Análisis de Arquitectura:

Compara lo encontrado con `AI_CONTEXT.md`:

- ¿Está implementado el flujo de las 9 pantallas?
- ¿Se usa el sistema de diseño (voxel-card, btn-3d-gold)?
- ¿Las tipografías son correctas (font-milky, font-body)?
- ¿Las animaciones usan framer-motion?
- ¿Los formularios usan Zod + React Hook Form?

#### 1.4 Análisis de Estado y Persistencia:

- ¿Dónde se guarda la configuración de Facu? (localStorage / Firebase)
- ¿El hook `use-rewards` gestiona correctamente el estado?
- ¿Las transiciones entre pantallas funcionan?

---

### 2. Estructura del Reporte de Auditoría

Genera un archivo Markdown con la siguiente estructura exacta:

```markdown
# 📊 REPORTE DE AUDITORÍA: GRAN FACU AVENTURA

**Fecha:** [Fecha Actual]
**Versión del Sistema:** 1.0.0 (Frontend-First SPA)

---

## 1. Estado de la Documentación

### 1.1 Archivos de Referencia

- **Total:** [Número] archivos en `scripts/referencias/`
- **AI_CONTEXT.md:** [Existe / No existe / ¿Está completo?]
- **EXPERT_PROMPTS_GUIDE.md:** [Existe / No existe / ¿Está completo?]

### 1.2 Cobertura

- **Arquitectura:** [Documentada / Parcial / No documentada]
- **Sistema de Diseño:** [Documentado / Parcial / No documentado]
- **Flujo de Pantallas:** [Documentado / Parcial / No documentado]
- **Componentes:** [Documentados / Parcial / No documentados]
- **Assets:** [Documentados / Parcial / No documentados]

---

## 2. Estado de la Aplicación (Next.js)

### 2.1 Arquitectura

- **App Router:** [Sí/No]
- **Client Components:** [Sí/No - ¿Usan "use client" correctamente?]
- **TypeScript:** [Sí/No - ¿Strict mode activo?]

### 2.2 Pantallas Principales (Flujo de 9)

| # | Pantalla | Estado | Ubicación |
|---|----------|--------|-----------|
| 01 | Password Screen | [Implementada / Parcial / No existe] | `src/components/01-password-screen/` |
| 02 | Loading Screen | [Implementada / Parcial / No existe] | `src/components/02-loading-screen/` |
| 03 | Intro Video Screen | [Implementada / Parcial / No existe] | `src/components/03-intro-video-screen/` |
| 04 | Presentation Screen | [Implementada / Parcial / No existe] | `src/components/04-presentation-screen/` |
| 05 | Register Screen | [Implementada / Parcial / No existe] | `src/components/05-register-screen/` |
| 06 | Arcade World Screen | [Implementada / Parcial / No existe] | `src/components/06-arcade-world-screen/` |
| 07 | Avatar Creator Screen | [Implementada / Parcial / No existe] | `src/components/07-avatar-creator-screen/` |
| 08 | Mission Details Screen | [Implementada / Parcial / No existe] | `src/components/08-mission-details-screen/` |
| 09 | Bio Book Screen | [Implementada / Parcial / No existe] | `src/components/09-bio-book-screen/` |

### 2.3 Componentes Utilitarios (10-23)

- **Total:** [Número] componentes implementados
- **Lista:** [Mencionar los que existen]
- **Faltantes:** [Mencionar los que deberían existir según documentación]

### 2.4 Hooks Personalizados

| Hook | Estado | Ubicación | Propósito |
|------|--------|-----------|-----------|
| use-rewards | [Implementado / Parcial / No existe] | `src/hooks/` | Gestión de flujo de juego |
| use-mobile | [Implementado / Parcial / No existe] | `src/hooks/` | Detección de móvil |
| use-media-query | [Implementado / Parcial / No existe] | `src/hooks/` | Media queries |
| use-toast | [Implementado / Parcial / No existe] | `src/hooks/` | Notificaciones toast |

### 2.5 Utilidades y Configuraciones

| Archivo | Estado | Ubicación | Propósito |
|---------|--------|-----------|-----------|
| utils.ts | [Existe / No existe] | `src/lib/` | Función cn() |
| eventData.ts | [Existe / No existe] | `src/lib/` | Datos del evento |
| avatarOptions.ts | [Existe / No existe] | `src/lib/` | Opciones de avatar |

---

## 3. Estado del Sistema de Diseño

### 3.1 Colores (Design Tokens)

| Token | Definido en globals.css | Usado Correctamente | Hardcodeado Detectado |
|-------|-------------------------|---------------------|-----------------------|
| --sky-blue | [Sí/No] | [Sí/No] | [Sí/No - Mencionar dónde] |
| --grass-green | [Sí/No] | [Sí/No] | [Sí/No] |
| --teddy-brown | [Sí/No] | [Sí/No] | [Sí/No] |
| --golden-coin | [Sí/No] | [Sí/No] | [Sí/No] |
| --cloud-white | [Sí/No] | [Sí/No] | [Sí/No] |

### 3.2 Tipografías

| Fuente | Configurada en Tailwind | Usada Correctamente |
|--------|-------------------------|---------------------|
| font-milky | [Sí/No] | [Sí/No] |
| font-body | [Sí/No] | [Sí/No] |
| font-amble | [Sí/No] | [Sí/No] |
| font-headline | [Sí/No] | [Sí/No] |

### 3.3 Clases CSS Personalizadas

| Clase | Definida en globals.css | Usada en Componentes |
|-------|-------------------------|----------------------|
| .voxel-card | [Sí/No] | [Sí/No - Mencionar componentes] |
| .voxel-card-gold | [Sí/No] | [Sí/No] |
| .btn-3d-gold | [Sí/No] | [Sí/No] |
| .pixel-grass | [Sí/No] | [Sí/No] |

### 3.4 Animaciones

| Animación | Configurada en Tailwind | Usada en Componentes |
|-----------|-------------------------|----------------------|
| animate-float | [Sí/No] | [Sí/No] |
| animate-sway | [Sí/No] | [Sí/No] |
| animate-blink | [Sí/No] | [Sí/No] |
| framer-motion (transiciones) | [Sí/No] | [Sí/No] |

---

## 4. Estado de Assets y Recursos

### 4.1 Videos

| Archivo | Existe | Ubicación | Uso |
|---------|--------|-----------|-----|
| fondo_web.mp4 | [Sí/No] | `/public/` | Background principal |
| intro_inicio_pc.mp4 | [Sí/No] | `/public/` | Intro desktop |
| intro_inicio_movil.mp4 | [Sí/No] | `/public/` | Intro mobile |

### 4.2 Imágenes Críticas

| Archivo | Existe | Ubicación | Uso |
|---------|--------|-----------|-----|
| Bear Village (Hubbearvillage.webp) | [Sí/No] | `/public/mundos/bear_village/` | Fondo presentación |
| Baaren.render.png | [Sí/No] | `/public/personajes/` | Personaje principal |
| Shicka_render_.png | [Sí/No] | `/public/personajes/` | Guía |
| facu_bear_sin_fondo.png | [Sí/No] | `/public/` | Avatar/mascota |

### 4.3 Fuentes

| Fuente | Existe | Formato | Ubicación |
|--------|--------|---------|-----------|
| Milky Nice | [Sí/No] | .ttf | `/public/MilkyNice_Clean.ttf` |
| Amble | [Sí/No] | CDN (fonts.cdnfonts.com) | `layout.tsx` |
| Fredoka One | [Sí/No] | CDN (Google Fonts) | `layout.tsx` |

---

## 5. Cumplimiento de Estándares

### 5.1 Design Tokens

- **¿Se usan variables CSS?** [Sí/No/Parcial]
- **¿Hay colores hardcodeados?** [Sí/No - Mencionar dónde]
- **¿Se usan clases voxel?** [Sí/No - Mencionar componentes]

### 5.2 Tipado TypeScript

- **¿Strict mode activo?** [Sí/No]
- **¿Interfaces definidas para props?** [Sí/No/Parcial]
- **¿Hay uso de `any`?** [Sí/No - Mencionar dónde]

### 5.3 Responsive Design

- **¿Mobile-first?** [Sí/No/Parcial]
- **¿Usa ResponsiveContainer?** [Sí/No]
- **¿Safe area insets?** [Sí/No]
- **¿Testado en 320px, 768px, 1024px?** [Sí/No]

### 5.4 Animaciones

- **¿Transiciones entre pantallas?** [Sí/No - framer-motion]
- **¿Feedback táctil en botones?** [Sí/No - :active]
- **¿Respeta prefers-reduced-motion?** [Sí/No]

### 5.5 Accesibilidad

- **¿Alt texts en imágenes?** [Sí/No/Parcial]
- **¿Aria-labels en botones?** [Sí/No/Parcial]
- **¿Contraste de colores adecuado?** [Sí/No/Parcial]

### 5.6 Performance

- **¿Next.js Image para imágenes?** [Sí/No/Parcial]
- **¿Videos muted para autoplay?** [Sí/No]
- **¿Priority solo en above-the-fold?** [Sí/No]
- **¿Lazy loading implementado?** [Sí/No]

---

## 6. Estado de Persistencia (Configuración de Facu)

### 6.1 Almacenamiento

- **Método:** [localStorage / Firebase / No implementado]
- **Datos Guardados:** [bio, likes, photo1, photo2, avatarConfig]
- **Estructura:** [Tipada con interface / No tipada]

### 6.2 Validación

- **¿Usa Zod?** [Sí/No]
- **¿Validación en tiempo real?** [Sí/No]
- **¿Manejo de errores?** [Sí/No]

---

## 7. Conclusiones y Riesgos

### 7.1 Riesgo General

**Nivel:** [Bajo/Medio/Alto]

### 7.2 Puntos Críticos

- [Lista de problemas encontrados con descripción breve]

### 7.3 Fortalezas

- [Lista de aspectos positivos encontrados]

### 7.4 Recomendaciones

- [Pasos inmediatos para corregir problemas]

---

## 8. Próximos Pasos

### Prioridad Alta (Crítico)
1. **[Tarea 1]:** [Descripción y por qué es crítica]
2. **[Tarea 2]:** [Descripción]

### Prioridad Media (Importante)
3. **[Tarea 3]:** [Descripción]
4. **[Tarea 4]:** [Descripción]

### Prioridad Baja (Mejora)
5. **[Tarea 5]:** [Descripción]
6. **[Tarea 6]:** [Descripción]

---

**Nota:** Este reporte se basa únicamente en la evidencia encontrada en el código y la documentación existente. No hay suposiciones.

**Documentación Revisada:**
- AI_CONTEXT.md
- EXPERT_PROMPTS_GUIDE.md
- scripts/referencias/01-07-*.md
- README.md
```

---

## 📋 Ejemplo de Uso

Cuando necesites auditar el proyecto, ejecuta este prompt y genera el reporte en:

```
scripts/agente/auditorias/YYYYMMDDHHMMSS_auditoria_descripcion.md
```

**Ejemplo:**
```
scripts/agente/auditorias/20260413120000_auditoria_inicial.md
```

---

**Última actualización:** 2026-04-13
**Versión:** 1.0.0 (Adaptado para GRAN FACU AVENTURA)
**Proyecto:** Invitación gamificada inspirada en Super Bear Adventure
