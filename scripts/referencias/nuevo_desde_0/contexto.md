# 🐻 DOCUMENTO DE CONTEXTO MAESTRO
## "GRAN FACU AVENTURA V2"

---

### 1. Visión General y Objetivos
**Propósito:** Evolución técnica y narrativa de una invitación de cumpleaños digital hacia una **Single Page Application (SPA)** interactiva en Next.js. Funciona como la puerta de entrada al **"Nivel 9"** (cumpleaños de Facundo), inspirada en el videojuego *Super Bear Adventure (SBA)*.

#### 👥 Público Objetivo (Branching Flow)
*   **👾 Niños (9-11 años):** Amigos de Facu. Buscan jugar, explorar y divertirse.
*   **🛡️ Adultos/Padres:** Buscan información logística rápida (cuándo, dónde y cómo confirmar).

> [!NOTE]
> **Tono Narrativo:** Lúdico, épico y gamificado para los niños (Estilo "Aventurero/RPG"). Claro, amigable y directo al grano para los padres (Estilo "Guardián").

---

### 2. Análisis: Repositorio vs. Prototipos HTML
#### ✅ Funcionalidades Clave a Mantener
- **Progreso Visual:** De `01-intro-aventura.html` y la estética de las transiciones.
- **Interactividad SBA:** Formato de "Mundo" y cajas de diálogo estilo in-game.
- **Easter Eggs:** Mantener el soporte para secretos (tipo Código Konami o Backrooms).

#### 🛠️ Mejoras Técnicas (Next.js)
- **Gatekeeper:** Introducción de una bifurcación desde el segundo 0 para evitar que los padres pasen por cinemáticas obligatorias.
- **Estado Global:** Manejo de selección de avatar y progreso de minijuegos sin recargas.

---

### 3. Definición de la Experiencia (UX)
#### 🗺️ Flujo Deseado (Bifurcado)
1.  **Inicio:** Pantalla de Carga ("Sincronizando mundos...").
2.  **Gatekeeper:** Selección de ruta:
    *   **👾 Modo Aventurero:** Experiencia completa.
    *   **🛡️ Modo Guardián:** Información logística directa.
3.  **Rutas Específicas:**
    *   **Ruta Adultos:** Panel de Misión -> RSVP Express.
    *   **Ruta Niños:** Intro con Shicka -> Selector de Héroe -> Arcade (3 Minijuegos).
4.  **Cierre (Común):** El Inventario del Héroe (Guía de Regalos).

---

### 4. Requerimientos de Contenido
#### 📋 Información Logística (Datos Reales)
| Campo | Detalle |
| :--- | :--- |
| **Festejado** | Facu (Nivel 9) |
| **Lugar** | KBOOM (Av. Italia 3421) |
| **Fecha** | Domingo 24 de Mayo |
| **Hora** | 18:30 a 21:00 hs |
| **Condición** | **Traer medias y ropa cómoda** (Obligatorio) |

#### 🎭 Personajes y Diálogos
*   **Shicka:** Guía del sistema. Introduce la misión y los minijuegos.
*   **Héroes Seleccionables:**
    *   *Baaren:* "¡Prepárense para el impacto! O al menos para un abrazo muy peludo. 🐻"
    *   *Shicka, Pingüino, Tortuga, Abeja:* Frases únicas programadas.

---

### 5. Estética y Assets (Design System)
#### 🎨 Identidad Visual (Voxel/SBA)
*   **Tipografía:**
    *   `Milky Nice`: Titulares y CTA.
    *   `Amble`: Cuerpo de texto.
*   **Paleta Sky World:**
    *   `--sky-blue` | `--teddy-brown` | `--golden-coin` | `--grass-green`
*   **Estilo UI:** Elementos Low-Poly, tarjetas Voxel (`.voxel-card`) con bordes duros y sombras profundas.

#### 📂 Recursos Multimedia
*   **Personajes:** `/public/personajes/` (Renders PNG sin fondo).
*   **Escenarios:** `/public/` (Fondos WEBP como `Hubbearvillage.webp`).
*   **Branding:** `/public/LOGO_FACU.png`.

---
*Documento generado para la sincronización de activos del proyecto "Gran Facu Aventura V2".*
