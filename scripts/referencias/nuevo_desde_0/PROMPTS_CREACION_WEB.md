# Prompts para la Creación de la Web "Gran Facu Aventura V2"

A continuación se presentan 3 prompts secuenciales diseñados para que un LLM (como ChatGPT o Claude) genere paso a paso el código HTML/CSS/JS de la nueva versión de la web "Gran Facu Aventura". Los prompts integran las reglas de negocio, diseño y narrativa extraídas de los documentos `contexto.md`, `BLUEPRINT_nueva_web.md` y los archivos HTML originales.

---

## 🛑 Consideraciones Previas para el LLM
Antes de ejecutar los prompts, asegúrate de mantener el contexto de que estás construyendo una **Single Page Application (SPA)** simulada en un solo archivo HTML (o archivos interconectados si el LLM lo prefiere, pero el objetivo inicial es maquetar las vistas). Debes usar:
- **Tailwind CSS** (via CDN para prototipado rápido) o CSS puro pero muy bien estructurado y modular con variables. (Nos apegaremos a CSS puro con variables como se solicita en el blueprint para mantener la fidelidad a los archivos originales).
- **Fuentes de Google Fonts**: `Milky Nice` (puedes usar `Fredoka One` como fallback para títulos si `Milky Nice` no está en Google Fonts) y `Amble` (o `Nunito` como fallback para el cuerpo).
- Paleta de colores definida:
  - `--sky-blue`: `#87CEEB`
  - `--teddy-brown`: `#8D6E63`
  - `--golden-coin`: `#FFD600`
  - `--dark-wood`: `#4E342E`
  - `--grass-green`: `#4CAF50`

---

## 🟩 PROMPT 1: Módulo Gatekeeper y Presentación Inicial

**Actúa como un experto Desarrollador Frontend y Diseñador UX/UI.**
Tu objetivo es crear la primera pantalla de una invitación de cumpleaños interactiva llamada "Gran Facu Aventura V2". Esta web está inspirada en el videojuego *Super Bear Adventure (SBA)*.

**Requerimientos del Módulo 1 (Gatekeeper):**
1. **Fondo y Estética**: Usa un fondo color `--sky-blue` (`#87CEEB`). Todo debe tener una estética "Voxel" (bloques, bordes duros, sombras profundas).
2. **Personaje Principal**: En el centro de la pantalla, coloca un contenedor (un `div` con una imagen placeholder `facu_bear_sin_fondo.png`) que represente a Facu, con una animación de flotación suave (arriba y abajo).
3. **Botón Start**: Crea un botón que diga "¡Entrar a la Partida! 🎮". Debe usar una clase `btn-3d-gold` (que parezca un bloque de oro: fondo `#FFD600`, borde `#4E342E`, y un desplazamiento fuerte de sombra `box-shadow: 0 6px 0 #4E342E`). Al hacer `:active`, la sombra debe reducirse simulando que se presiona.
4. **Diálogo RPG**: Cuando el usuario hace clic en el botón Start, la pantalla inicial se desvanece (fade-out) y aparece un personaje guía llamado **Shicka** (usa un placeholder `Shicka_render_.png`).
   - Muestra una caja de diálogo interactiva en la parte inferior de la pantalla (estilo juego de rol, borde grueso `#333`, fondo blanco).
   - El texto debe aparecer con un **efecto de máquina de escribir** (letra por letra usando JavaScript).
   - **Texto exacto a usar (Tono uruguayo)**: *"¡Che, despertate! ¿Te vas a perder la partida de Facu? ¡Metele que sos un crack y ayudame a organizar este cumple de nivel 9!"*
   - Al hacer clic en la caja de diálogo después de que termine de escribir, esta sección entera debe ocultarse (simulando el paso a la siguiente pantalla).

**Entregable:** Genera un archivo HTML completo (con CSS y JS incrustados) que contenga exclusivamente este módulo Gatekeeper y su transición de diálogo.

---

## 🟦 PROMPT 2: Módulo Arcade World (El Mapa de la Misión)

**Actúa como un experto Desarrollador Frontend y Diseñador UX/UI.**
Asume que el usuario ya pasó el Gatekeeper. Ahora debes crear el "Mundo Principal", que es la sección central de la invitación "Gran Facu Aventura V2".

**Requerimientos del Módulo 2 (Arcade World):**
1. **El HUD (Heads Up Display)**: En la parte superior de la pantalla, crea una barra de estado que muestre un contador de "Estrellas" recolectadas (inicializado en 0).
2. **El Mapa de Nodos**: El usuario navegará por un mapa de progreso vertical (estilo Candy Crush o Super Mario World). Cada nodo del mapa es circular, tiene un estilo de botón 3D y representa un dato del cumpleaños.
   - **Nodos Requeridos**:
     1. "Base KBOOM" (Lugar)
     2. "Día de la Batalla" (Fecha y Hora)
     3. "Reglas de Supervivencia" (Condiciones)
3. **Interactividad (Tarjetas Voxel Popups)**: Al hacer clic en un nodo, debe abrirse un modal centrado en la pantalla. El modal debe tener una textura que simule madera o piedra (Voxel) y un botón de cierre 3D.
   - **Datos a inyectar en los modales**:
     - *Nodo 1 (Base KBOOM)*: Lugar: KBOOM (Av. Italia 3421).
     - *Nodo 2 (Día de la Batalla)*: Fecha: Domingo 24 de Mayo. Hora: 18:30 a 21:00 hs.
     - *Nodo 3 (Reglas de Supervivencia)*: Personaje 'Tristopio' advierte: *"¡Cuidado héroe! Hay una regla de oro en este nivel: ¡No te olvides las medias para saltar! Sin medias, hay game over."*
4. **Progreso y Recompensa**: Usa un objeto JavaScript `gameState` para llevar la cuenta de los nodos abiertos. Cada vez que se abre un nodo nuevo, suma 1 al contador del HUD.
   - Cuando se abren los 3 nodos, lanza una animación de confeti en pantalla completa (usando CSS o JS simple).
   - Muestra visualmente la "Insignia de Héroe de la Fiesta" y habilita un botón grande en la parte inferior que diga "¡Avanzar al Punto de Guardado! 💾", que permita pasar a la siguiente sección.

**Entregable:** Genera el código HTML/CSS/JS para esta sección del Arcade World. Asegúrate de incluir la lógica de JavaScript para manejar el HUD, los modales y la verificación de victoria.

---

## 🟨 PROMPT 3: Módulo RSVP (Confirmación) y Panel de Adultos

**Actúa como un experto Desarrollador Frontend y Diseñador UX/UI.**
Esta es la última sección de la aplicación "Gran Facu Aventura V2". Aquí manejamos la confirmación de asistencia (RSVP) utilizando un concepto de "Bifurcación de UX".

**Requerimientos del Módulo 3 (RSVP & Panel Adultos):**
1. **Estructura Dual (Las dos caras de la moneda)**: En la misma pantalla, deben convivir dos experiencias distintas pero que llevan al mismo resultado (confirmar asistencia).
2. **Ruta Infantil (Inmersiva) - Parte Superior/Principal**:
   - Título: *"¡Misión completada! Elegí tu Slot de Guardado para confirmar tu lugar en la partida."*
   - Diseño: Muestra tres "Save Slots" (Ranuras de Guardado) estilo videojuego retro. Cada slot debe parecer un bloque de consola interactivo.
   - Interactividad: Al hacer clic en cualquier Slot, se abre un modal de confirmación `confirmPopup` que pregunta "¿Guardar Partida?". Al aceptar, muestra una alerta de éxito estilizada indicando que la asistencia ha sido confirmada.
3. **Panel de Adultos (Guardián) - Parte Inferior (Acceso Rápido y Limpio)**:
   - Diseño: Un contenedor minimalista o una pestaña inferior discreta, pensada para los padres. Sin fricción lúdica.
   - Texto directo: *"Info para Padres. Lugar: KBOOM, Salto. Fecha: 24/05/2025."*
   - **Botones de Utilidad**:
     - Botón `[📍 Ver Mapa]` que abra Google Maps con la ubicación: `https://maps.google.com/?q=KBOOM+Salto`.
     - Botón `[📅 Agendar]` que visualmente parezca que descarga o abre un evento en el calendario.
4. **Estilo General Voxel**: Mantén los botones 3D (`box-shadow: 0 6px 0 var(--dark-wood)`) y el diseño de bloques establecido en los prompts anteriores.

**Entregable:** Genera el código HTML/CSS/JS final para esta sección. Proporciona el código de manera que pueda ser integrado lógicamente después del Módulo Arcade World.
