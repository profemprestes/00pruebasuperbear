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

### 1. Password Screen - Mobile ✅ NEW
**Screen ID:** `0ea0a4125c3441549dc264026ba40963`
**Dispositivo:** Mobile (375x812px)
**Estilo:** Secure Vault/Lock Screen
- Fondo oscuro misterioso con partículas doradas flotantes
- Card central crema con candado dorado grande (80px)
- 4 input boxes para dígitos (60x60px cada uno)
- Keypad numérico 3x4 con botones circulares dorados (70px)
- Efecto 3D en botones al presionar
- Paw prints de oso en esquinas decorativas
- Animación de brillo dorado en candado

### 2. Register Screen - Mobile
**Screen ID:** `98ae7883ece4495da4e4c3989e097dd7`
**Dispositivo:** Mobile (375x812px)
**Estilo:** JRPG Dialog Box
- Dialog box estilo RPG en parte inferior
- Personaje Shicka flotando arriba
- Botones 3D con sombras marrones
- Cactus/palmeras decorativas

### 3. Register Screen - Desktop
**Screen ID:** `14b78e8fece8457c921d4080939a5830`
**Dispositivo:** Desktop (1440x900px)
**Estilo:** Character Select Screen
- Layout de 2 columnas (40/60)
- Character showcase con glow dorado
- Registration card con VIP badge
- Partículas flotantes decorativas

### 4. Avatar Creator - Mobile
**Screen ID:** _(ver proyecto)_
**Dispositivo:** Mobile (375x812px)
**Estilo:** Game Inventory Screen
- Avatar preview centrado
- Grid de personalización 2 columnas
- Items bloqueados con overlay
- Coin counter top-right

### 5. Mission Details - Mobile
**Screen ID:** `dc562f625c1a496ba1efc6f0f471a100`
**Dispositivo:** Mobile (375x812px)
**Estilo:** Mission Briefing
- Cards informativas apiladas
- Iconos grandes y coloridos
- Botón CTA dorado full-width
- Safe area padding bottom

### 6. RSVP Confirmation - Desktop
**Screen ID:** `128e8cc71f3c43f3a4b34c180c49e61d`
**Dispositivo:** Desktop (1440x900px)
**Estilo:** Quest Confirmation Form
- Layout 2 columnas (form + contact)
- Guest counter con botones +/-
- Contact info cards
- Green confirm button 3D

### 7. Loading Screen - Desktop ✅ NEW
**Screen ID:** `ca03b8f42eba42b8b3d12ab5694f3a13`
**Dispositivo:** Desktop (1440x900px)
**Estilo:** AAA Game Loading Screen
- Título masivo "FACU'S 9TH ADVENTURE" con gradiente dorado (64px)
- Barra de progreso 3D (67%) con estilo arcade
- Botón "¡COMENZAR MISIÓN!" con glow pulsante
- Frascos de miel, coronas y monedas flotantes
- Partículas doradas ascendentes
- Footer con versión y mensaje de cumpleaños

### 8. Bio Book Screen - Mobile ✅ NEW
**Screen ID:** `5b0277566e504c7db0f182792b563da7`
**Dispositivo:** Mobile (375x812px)
**Estilo:** RPG Lore Book
- Libro abierto con textura de papel crema y encuadernación cuero
- Foto de Facu en marco circular dorado
- Bio: "¡Cumple 9 años!" con texto descriptivo
- Grid de badges de intereses (2 columnas):
  * 🎮 Videojuegos (Pastel Blue)
  * 🍕 Pizza (Pastel Orange)
  * 🦸 Superhéroes (Pastel Red)
  * ⚽ Fútbol (Pastel Green)
  * 🎬 Películas (Pastel Purple)
  * 🐻 Osos (Pastel Brown)
- Navegación "Página 1 de 2" con flechas
- Botón "Continuar" con gradiente verde/dorado

## Pantallas Pendientes de Generar
- [ ] Intro Video Screen (Mobile/Desktop)
- [ ] Arcade World Screen (Mobile/Desktop)
- [ ] Chest/Reward Screen (Mobile/Desktop)
- [ ] Easter Egg Screen (Mobile/Desktop)
- [ ] Game Flow/HUD Components
- [ ] Success/Confirmation States
- [ ] Error States (password incorrecto, etc.)

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
