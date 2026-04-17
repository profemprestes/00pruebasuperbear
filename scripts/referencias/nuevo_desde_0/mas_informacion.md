Basado en el análisis de los archivos actuales y la documentación de diseño del repositorio `00pruebasuperbear`, aquí tienes los detalles estratégicos para la adaptación:

### 1. Mapeo de Funcionalidad

- **scripts\referencias\nuevo_desde_0\01-intro-aventura.html**: Representa el **Gatekeeper** (Pantalla de contraseña) y la **Presentación inicial**. Se debe conservar el sistema de diálogos RPG donde un personaje introduce la misión.
- **scripts\referencias\nuevo_desde_0\02-creditos-e-historia.html**: Mapea a la **Narrativa/Lore** y la sección de **RSVP**. La lógica de confirmación mediante "Save Slots" (ranuras de guardado) es obligatoria para mantener la inmersión.
- **scripts\referencias\nuevo_desde_0\facu-aventura.html**: Equivale al **Arcade World** (Hub principal) y **Detalles de la Misión**. Es fundamental conservar la lógica del HUD (monedas y estrellas), el mapa de nodos interactivos y las tarjetas de información que se despliegan al interactuar.

### 2. Identidad Visual y Assets

- **Transformaciones Voxel/SBA**:
  - Los botones estándar deben pasar a ser `btn-3d-gold` (estilo bloque de oro).
  - Los fondos de gradientes genéricos se sustituyen por `bg-sky-blue` (#87CEEB) para el día y texturas de madera o piedra para contenedores.
  - Los nodos del mapa deben usar el estilo de "botones de nivel" del juego original.
- **Reemplazo de Renders**:
  - El oso CSS del título será reemplazado por el render oficial `facu_bear_sin_fondo.png`.
  - El NPC "Amigo de Facu" se sustituye por `Shicka_render_.png` como guía.
  - El personaje principal en los niveles de plataforma será `Baarenrender.png`.

### 3. Narrativa y Tono Local

- **Adaptación Uruguaya**: Se debe cambiar el tono neutro por expresiones como: "¡Metele que sos un crack!", "¿Te sumás a la partida?", "Confirmá tu slot de guardado", "Agendate el día" y el uso constante de "vos" y "sos".
- **Personajes Guía**:
  - **Shicka**: Recibe al usuario en el Gatekeeper y explica la misión.
  - **Baaren**: Invita directamente a los juegos y al banquete en el mapa de mundo.
  - **Tristopio**: Puede aparecer en la sección de "reglas" o detalles técnicos para dar un toque de humor.

### 4. Objetivos de UX (Experiencia de Usuario)

- **Recompensa Final**: Al terminar la interacción en `facu-aventura.html`, el niño debe recibir una "Insignia de Héroe de la Fiesta" y el desbloqueo visual del "Save Slot" final para confirmar su asistencia.
- **Ruta de Adultos**: Debe ser un **Panel Directo**. Mientras que el niño "juega" para descubrir los datos, el adulto tendrá un botón de "Acceso Rápido" que muestra una lista limpia con Google Maps, botón de copiar dirección y añadir al calendario, eliminando la fricción lúdica.

### 5. Reglas de Negocio del Evento

- **Inyección de Datos Oficiales**: Sí, los contenedores actuales deben actualizarse con la información real del archivo de contexto:
  - **Lugar**: KBOOM (Salto, Uruguay).
  - **Fecha**: Sábado 24 de mayo de 2025.
  - **Horario**: 17:30 a 20:30 hs.
  - **Requisito Crítico**: "¡No te olvides las medias para saltar!" (Medias obligatorias).
