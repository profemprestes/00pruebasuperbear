# 📘 BLUEPRINT: Nueva Web "Gran Facu Aventura Voxel"

## 1. Módulo Gatekeeper y Presentación (Basado en `scripts\referencias\nuevo_desde_0\01-intro-aventura.html`)

### Objetivos Visuales y Funcionales

- **Gatekeeper Inicial:** Una pantalla de bienvenida que bloquea el contenido hasta que el usuario interactúa (ej. "¡Presioná Start!").
- **Estética Voxel:** Se abandona el gradiente genérico por un fondo `bg-sky-blue` (#87CEEB). Los botones usarán la clase `btn-3d-gold` emulando bloques de oro del juego original.
- **Personaje Central:** El oso CSS original se elimina y se inyecta el asset oficial `facu_bear_sin_fondo.png` con una animación de flotación suave.
- **Diálogos RPG Guiados:** **Shicka** (`Shicka_render_.png`) es el NPC que recibe al usuario y le explica la misión mediante una caja de diálogo interactiva.

### Detalles Técnicos

- **Mecánica de Diálogos:** Conservar el efecto "typing" (escritura letra por letra) con JavaScript y el avance de mensajes mediante clics en la caja de texto.
- **Gestión del DOM:** Uso de transiciones CSS (fade-out) para ocultar esta sección y revelar el siguiente módulo una vez que Shicka termina de hablar.

### Textos y Tono Narrativo (Localización: Uruguay / 9 años)

- **Shicka:** "¡Che, despertate! ¿Te vas a perder la partida de Facu? ¡Metele que sos un crack y ayudame a organizar este cumple de nivel 9!"
- **Call to Action (Botón):** "¡Entrar a la Partida! 🎮"

---

## 2. Módulo Arcade World y Misión (Basado en `scripts\referencias\nuevo_desde_0\facu-aventura.html`)

### Objetivos Visuales y Funcionales

- **Hub Principal (Mapa):** El usuario navega por un mapa de nodos que emula la selección de niveles de SBA. Cada nodo representa un dato clave del cumpleaños.
- **Personaje Explorador:** **Baaren** (`Baarenrender.png`) será el avatar que ilustra la sección de exploración.
- **Tarjetas de Nivel (Popups):** Al hacer clic en un nodo, se abre un modal texturizado (madera/piedra Voxel) con los datos del evento inyectados.
- **Recompensa UX:** Al interactuar con todos los nodos, se lanza una animación de confeti y se otorga visualmente la "Insignia de Héroe de la Fiesta", habilitando el pase a la etapa final.

### Detalles Técnicos

- **HUD y Estado (gameState):** Conservar el objeto `gameState` de JS para contar las estrellas recolectadas al abrir tarjetas y manejar el progreso.
- **Inyección de Datos Duros:** Los contenedores HTML deben estar pre-cargados con las siguientes variables estáticas:
  - **Lugar:** KBOOM (Salto, Uruguay).
  - **Fecha:** Sábado 24 de mayo de 2025.
  - **Horario:** 17:30 a 20:30 hs.

### Textos y Tono Narrativo

- **Regla de Negocio (Tristopio):** "¡Cuidado héroe! Hay una regla de oro en este nivel: **¡No te olvides las medias para saltar!** Sin medias, hay game over."
- **Nodos del Mapa:** "Base KBOOM", "Día de la Batalla", "Reglas de Supervivencia".

---

## 3. Módulo RSVP y Panel de Adultos (Basado en `scripts\referencias\nuevo_desde_0\02-creditos-e-historia.html`)

### Objetivos Visuales y Funcionales

- **Bifurcación de UX:** Este módulo presenta dos rutas visuales distintas conviviendo en el mismo estado final:
  1. **Ruta Infantil (Inmersiva):** Un selector visual de "Save Slots" (Ranuras de guardado). Para confirmar asistencia, el niño debe "Guardar su partida" en uno de los slots de Facu.
  2. **Panel de Adultos (Acceso Rápido):** Un contenedor inferior o pestaña minimalista, diseñado sin fricción lúdica. Contiene la información directa en formato lista y botones de utilidad.

### Detalles Técnicos

- **Sistema Save Slot:** Utilizar modales de confirmación (`confirmPopup`) con la lógica JS del archivo `02`. Al hacer clic en el Slot A o B, se muestra una alerta estilizada de éxito.
- **Integración de Utilidades (Adultos):** Enlaces directos utilizando esquemas de URL estándar:
  - Botón _Google Maps_ (`href="https://maps.google.com/?q=KBOOM+Salto"`).
  - Botón _Añadir a Calendar_ (Generación de enlace `.ics` o URL de Google Calendar).
- **Transiciones:** Mantener el efecto de transición "zigzag" o "cortina" al pasar del Arcade World a la pantalla de Guardado.

### Textos y Tono Narrativo

- **Ruta Niños:** "¡Misión completada! Elegí tu Slot de Guardado para confirmar tu lugar en la partida."
- **Ruta Adultos (Bajo nivel de fricción):** "Info para Padres. Lugar: KBOOM, Salto. Fecha: 24/05/2025. [Ver Mapa] [Agendar]"

---

### 🛠️ Especificaciones Generales de CSS/Identidad para la IA

- **Paleta Base SBA:** Sky Blue (`#87CEEB`), Gold (`#FFD600`), Earth Brown (`#8D6E63`), Dark Wood (`#4E342E`).
- **Tipografía:** Conservar importación de `Fredoka One` para los títulos (apariencia de videojuego) y `Nunito` para legibilidad de párrafos.
- **Botones 3D:** Todos los botones interactivos deben tener sombra desplazada (`box-shadow: 0 6px 0 var(--dark-wood)`) y estado `:active` que reduzca el desplazamiento para simular un botón físico de máquina arcade.
