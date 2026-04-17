# MEGA-PROMPT MEJORADO PARA LA CREACIÓN DE LA WEB COMPLETA

Copia y pega el siguiente bloque en tu LLM preferido (ChatGPT, Claude, etc.) para generar la versión final de la maqueta HTML. Este prompt consolida todas las referencias y define claramente el rol y el resultado esperado.

---

## Copiar desde aquí: 👇

**ROL:** Actúa como un Desarrollador Frontend Senior y un Experto Diseñador UX/UI especializado en experiencias gamificadas para web (estilo Voxel / Super Bear Adventure).

**CONTEXTO Y OBJETIVO:**
Quiero crear desde cero una página web interactiva (Single Page Application simulada) para una invitación de cumpleaños ("Gran Facu Aventura V2"). Actualmente, solo utilizaremos HTML, CSS (puedes usar CSS puro con variables o Tailwind CSS vía CDN) y JavaScript integrado en un solo archivo (o separados si es indispensable, pero preferiblemente consolidado para maquetación rápida).

Tengo varios archivos de referencia que definen el diseño, la historia, la estética y la experiencia de usuario esperada:
- `01-intro-aventura.html` / `index.html` (Presentación y Gatekeeper)
- `facu-aventura.html` / `aventura.html` / `minijuegos.html` (Módulo Arcade World y exploración)
- `02-creditos-e-historia.html` / `adultos.html` (RSVP, Slots de Guardado y Panel para Padres)
- Documentación clave: `contexto.md`, `BLUEPRINT_nueva_web.md`, `mas_informacion.md`.

**TU TAREA (LO QUE DEBES GENERAR):**
Basándote en todo este contexto de mis archivos de referencia, necesito que **generes el código completo (HTML/CSS/JS) de la maqueta sugerida**. La maqueta debe integrar todas las vistas en una experiencia fluida (SPA) que contenga:

1. **Gatekeeper (Pantalla de Inicio):**
   - Fondo `--sky-blue` (`#87CEEB`).
   - Botón "¡Entrar a la Partida! 🎮" estilo bloque 3D oro (`#FFD600`).
   - Transición de diálogo RPG introducida por el personaje "Shicka" (efecto typing).

2. **Arcade World (Mapa Principal):**
   - HUD superior con contador de estrellas.
   - Camino de nodos interactivos: "Casa de Facu" (Inicio), "Zona Gamer", "Festín Real", "Torre del Pastel", "Gran Fiesta!".
   - Al hacer clic en los nodos, se abren Modales Voxel con información de la fiesta (Lugar, Horario, Regla de las medias).
   - Barra de progreso que se llena al explorar.

3. **Módulo de Confirmación (RSVP) Dual:**
   - **Ruta Niños:** Pantalla con 3 "Save Slots" interactivos para guardar partida y confirmar asistencia.
   - **Ruta Adultos:** Panel inferior minimalista y rápido con la info clara (Lugar, Fecha, Horarios) y botones utilitarios limpios (Ver Mapa, Agendar).

4. **Transiciones y Estilos:**
   - Tipografía principal: `Milky Nice` o `Fredoka One` para títulos, `Amble` o `Nunito` para texto.
   - Elementos Low-Poly, botones con sombras fuertes (`box-shadow` desplazada para simular bloques 3D) y animaciones de partículas/confeti en la victoria.
   - La navegación entre estas "vistas" (Inicio -> Mapa -> RSVP) debe manejarse ocultando/mostrando contenedores con JavaScript y animaciones de "Fade In".

**ENTREGABLE:**
Por favor, genera el código completo del archivo HTML (por ejemplo, `index_maqueta_sugerida.html`) que integre este diseño y funcionalidad. Si el código es muy largo, puedes dividir la respuesta por secciones, pero asegúrate de que el resultado final sea completamente funcional al abrirlo en el navegador.

---
## 👆 Hasta aquí el prompt.
