Actúa como un Creative Tech Lead & Experience Architect experto en Gamified UX/UI.

Tu misión es diseñar múltiples maquetas HTML/CSS/JS (prototipos visuales) para la invitación web del cumpleaños número 9 de Facu ("Facu's Level 9 Quest"). La temática mezcla el videojuego "Super Bear Adventure" (SBA) con elementos de Basketball.

El diseño debe aplicar estrictamente la "Dual-Mode UX Strategy":

1. Modo Aventurero (Niños): Lúdico, colores vibrantes (amarillos, celestes), estética low-poly, lenguaje épico de videojuegos.
2. Modo Guardián (Adultos): Limpio, legible, estructurado (azul profundo, blanco), enfocado en la logística del evento.

CONTEXTO OBLIGATORIO:
Para crear estas maquetas, debes leer, analizar y fusionar la información de los siguientes archivos de referencia que conforman el "Lore" y la estructura del proyecto:

- scripts/referencias/nuevo_desde_0/01-intro-aventura.html
- scripts/referencias/nuevo_desde_0/02-creditos-e-historia.html
- scripts/referencias/nuevo_desde_0/03-lanzamiento-completo.html
- scripts/referencias/nuevo_desde_0/adultos.html
- scripts/referencias/nuevo_desde_0/aventura.html
- scripts/referencias/nuevo_desde_0/BLUEPRINT_nueva_web.md
- scripts/referencias/nuevo_desde_0/contexto.md
- scripts/referencias/nuevo_desde_0/datos_evento.md
- scripts/referencias/nuevo_desde_0/facu-aventura.html
- scripts/referencias/nuevo_desde_0/index.html
- scripts/referencias/nuevo_desde_0/index_maqueta_sugerida.html
- scripts/referencias/nuevo_desde_0/mas_informacion.md
- scripts/referencias/nuevo_desde_0/minijuegos.html
- scripts/referencias/nuevo_desde_0/PROMPTS_CREACION_WEB.md
- scripts/referencias/nuevo_desde_0/PROMPTS_MEJORADOS.md

INSTRUCCIONES DE SALIDA (ESTRICTAS):

1. Genera diseños optimizados, proponiendo diferentes enfoques de layout (ej. una versión centrada en un mapa interactivo, otra versión tipo menú de consola de videojuegos, etc.).
2. No te limites en la cantidad de sugerencias. Explora diferentes arquitecturas visuales basadas en los documentos.
3. Para cada sugerencia, debes generar el código HTML COMPLETO. Utiliza Tailwind CSS vía CDN (`<script src="https://cdn.tailwindcss.com"></script>`) para el estilo y vanilla JS dentro del archivo para la interactividad (transiciones, cambio de modos).
4. REGLA DE ORO: Está PROHIBIDO usar placeholders como "". Cada archivo debe ser 100% funcional y renderizable inmediatamente en un navegador.
5. El output debe estar estructurado en bloques de código separados, e indicar claramente que el nombre del archivo debe ser `[numerodesugerencia]_inicio.html` (ejemplo: `01_inicio.html`, `02_inicio.html`).

Comienza generando la primera propuesta (`01_inicio.html`) integrando la pantalla de selección de clase (Niño/Adulto) y la pantalla principal de uno de los modos basada en la información de los .md.
