> Actúa como un Desarrollador Frontend Experto y Diseñador UX/UI especializado en experiencias interactivas y videojuegos web.
>
> Quiero que analices de manera completa el código de este repositorio (componentes, estilos CSS, configuración de Tailwind/React/Next.js) y me devuelvas una lista exhaustiva de los ajustes y sugerencias a realizar para llevar la experiencia de usuario (UX) y la interfaz (UI) al siguiente nivel.
>
> Por favor, enfócate en las siguientes 3 áreas principales:
>
> **1. Responsividad Total (Mobile-First a Desktop):**
>
> - Revisa todos los contenedores, grillas, modales y pantallas.
> - Asegúrate de que en dispositivos móviles (max-width: 768px) ocupen porcentajes fluidos (como 90% a 95%), y de que los elementos que tienen múltiples columnas en desktop pasen a 1 o 2 columnas en móvil de forma correcta usando Flexbox o CSS Grid.
> - Verifica que los textos no se desborden (`overflow`, `whitespace-normal`, etc.) y mantengan una legibilidad perfecta sin necesidad de hacer zoom.
> - Las imágenes y videos de fondo deben mantener propiedades como `object-fit: cover` o `contain` para evitar que se deformen.
>
> **2. Guías de Interfaz y Estados Claros (Estilo "Interaction Bubbles"):**
>
> - Evalúa la navegación y propone mejoras para guiar al usuario. Por ejemplo, sugiriendo agregar "burbujas de interacción" animadas o flechas parpadeantes (`animate-bounce`) sobre los botones de principal llamado a la acción (Call to Action).
> - Asegúrate de que los botones que no pueden usarse tengan un estado `:disabled` claro y universal (colores grisáceos, sin sombra, con `cursor-not-allowed`).
>
> **3. Animaciones, Transiciones y "Game Feel":**
>
> - **Transiciones entre pantallas:** Sugiere cómo y dónde envolver el renderizado condicional con animaciones CSS suaves (ej. `fade-in` de opacidad y `slide-up` en Y) que duren entre 0.3s y 0.5s para evitar que los elementos aparezcan bruscamente.
> - **Feedback táctil (Botones 3D):** Identifica botones y elementos interactivos para asegurar que todos tengan el efecto de hundirse al ser presionados (`:active` transformándose en `translateY` y reduciendo su `box-shadow`) y un feedback visual en `:hover`.
> - **Animaciones Idle (Inactivas):** Busca elementos estáticos que representen personajes u objetos clave de la experiencia y sugiere cómo aplicarles una animación de flotación suave y continua (usando `@keyframes` de tipo `infinite ease-in-out`) para darle "vida" a la interfaz.
>
> Primero, haz un análisis rápido de la estructura del proyecto y los archivos principales. Luego, entrégame un diagnóstico completo explicando los problemas actuales y proponiendo las soluciones técnicas exactas (incluyendo ejemplos de código y clases de Tailwind) que debo aplicar para cumplir con las reglas anteriores.
