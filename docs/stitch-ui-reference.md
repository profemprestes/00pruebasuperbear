# Stitch UI Redesign Project - Referencia

## Proyecto en Stitch
**ID:** `12124558162526826616`  
**Título:** Facu's 9th Adventure - UI Redesign  
**URL:** https://stitch.google.com/projects/12124558162526826616

## Design System Creado
**Nombre:** Bearcade Pixel  
**ID:** `assets/ed820ef07ca544a6b7a27c48c18f9dfb`

### Filosofía de Diseño
**Creative North Star:** "The Tactile Pixel Quest"

Un sistema de diseño que combina la estética voxel/pixel-art de videojuegos retro con una experiencia moderna y jugable. Cada elemento UI se siente como un botón físico de una consola de los 90s.

### Paleta de Colores Principal
- **Primary (Sky World):** `#87CEEB` - Azul cielo
- **Secondary (Power-Up):** `#FFD700` - Dorado
- **Tertiary (Bear/Ground):** `#8B4513` - Marrón oso
- **Neutral:** `#F5F5F5` - Blanco crema

### Tipografía
- **Headlines:** Plus Jakarta Sans (redondeada, amigable)
- **Body:** Be Vietnam Pro (legible, instrucciones)
- **Labels/Accents:** Space Grotesk (técnico, pixel-lite)

### Principios de Diseño
1. **Sin líneas de 1px** - Usar extrusión 3D o cambios tonales
2. **Sombras con color** - Nada de sombras grises genéricas
3. **Asimetría intencional** - Romper bordes de contenedores
4. **Profundidad de bloque** - Sombras duras de 4-8px offset
5. **Texturas de firma** - Ruido sutil y overlays de pixel-grid

## Pantallas Generadas

### 1. Register Screen - Mobile
**Screen ID:** `98ae7883ece4495da4e4c3989e097dd7`  
**Dispositivo:** Mobile (375x812px)  
**Estilo:** JRPG Dialog Box
- Dialog box estilo RPG en parte inferior
- Personaje Shicka flotando arriba
- Botones 3D con sombras marrones
- Cactus/palmeras decorativas

### 2. Register Screen - Desktop  
**Screen ID:** `14b78e8fece8457c921d4080939a5830`  
**Dispositivo:** Desktop (1440x900px)  
**Estilo:** Character Select Screen
- Layout de 2 columnas (40/60)
- Character showcase con glow dorado
- Registration card con VIP badge
- Partículas flotantes decorativas

### 3. Avatar Creator - Mobile
**Screen ID:** _(generado)_  
**Dispositivo:** Mobile (375x812px)  
**Estilo:** Game Inventory Screen
- Avatar preview centrado
- Grid de personalización 2 columnas
- Items bloqueados con overlay
- Coin counter top-right

### 4. Mission Details - Mobile
**Screen ID:** `dc562f625c1a496ba1efc6f0f471a100`  
**Dispositivo:** Mobile (375x812px)  
**Estilo:** Mission Briefing
- Cards informativas apiladas
- Iconos grandes y coloridos
- Botón CTA dorado full-width
- Safe area padding bottom

### 5. RSVP Confirmation - Desktop
**Screen ID:** `128e8cc71f3c43f3a4b34c180c49e61d`  
**Dispositivo:** Desktop (1440x900px)  
**Estilo:** Quest Confirmation Form
- Layout 2 columnas (form + contact)
- Guest counter con botones +/-
- Contact info cards
- Green confirm button 3D

## Cómo Usar Esta Referencia

### Para Implementar en Código:
1. Revisar screenshots en Stitch para inspiración visual
2. Descargar HTML code como referencia de estructura
3. Aplicar design system tokens a Tailwind config
4. Seguir principios de "3D Voxel" para botones/cards
5. Usar paleta de colores definida

### Principios Clave a Recordar:
- Botones deben "hundirse" al hacer clic (translateY + shadow reduction)
- Cards sin bordes finos, usar sombras 3D o cambios tonales
- Safe areas siempre consideradas en móvil
- Touch targets mínimo 44x44px
- Textos legibles en todos los tamaños de pantalla

## Próximos Pasos Sugeridos
1. Generar pantallas faltantes (Password, Loading, Intro Video, Bio Book)
2. Crear variantes de pantallas existentes (night theme, diferentes personajes)
3. Generar versiones tablet (768-1023px)
4. Exportar assets y aplicar al código React/Next.js
5. Implementar animaciones Framer Motion basadas en transiciones del diseño
