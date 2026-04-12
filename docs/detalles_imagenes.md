# 🗺️ Guía Maestra de Activos y Contexto: Super Bear Adventure

Este documento constituye la referencia central para los recursos visuales y el contexto narrativo del juego. Combina la información de las localizaciones del mundo (Bear Village) con el catálogo detallado de personajes y criaturas.

---

## 🌍 Parte 1: Mundos y Escenarios (Bear Village)

### 🏘️ Apariencia General
**The Bear Village** es un área exuberante con senderos de hierba. La zona principal está dividida en dos secciones por un río que fluye desde la entrada de **Snow Valley**. 
- **Post-Game:** Tras derrotar al jefe final, la aldea adquiere un ambiente festivo con confeti y banderines, organizada por la **Reina Beeatrice**. La entrada a *The Hive* se sella con tablones de madera.
- **Corrupción:** A medida que el jugador progresa, la presencia de miel púrpura en la aldea disminuye notablemente.

### 📍 Localizaciones Principales (Main)

| Localización | Imagen Referencial | Descripción Detallada |
| :--- | :--- | :--- |
| **Spawnpoint** | `/mundos/bear_village/Spawnpoint.webp` | Centro de la aldea en forma de círculo. Aquí se encuentran los hermanos Capitalus con sus puestos de venta. |
| **Outfit Shop** | `/mundos/bear_village/Outfitshopplatform.webp` | Plataforma de piedra donde el jugador cambia su atuendo bajo la supervisión de Capitalus. |
| **River** | `/mundos/bear_village/River.webp` | Agua proveniente del deshielo de Snow Valley. Divide la zona superior en dos partes. |
| **Lower Area** | `/mundos/bear_village/Lowerarea.webp` | Contiene la casa tortuga, el acceso al Arcade World, el Club de DJ Pierre y el campo de fútbol. |
| **Tutorial Zone** | `/mundos/bear_village/Tutorialzone.webp` | Zona de entrenamiento donde se aprenden movimientos básicos como nadar y el "Stomp Boost". |
| **Tristopio's Shop** | `/mundos/bear_village/Tristopioshop.webp` | Puesto comercial de Tristopio, ubicado junto a la entrada de Beemothep Desert. |
| **Dark Water Cave**| *Cueva Oculta* | Entre Snow Valley y la tienda de Tristopio. Esconde el refugio secreto del hermano de Baaren. |

### 🚪 Áreas de Entrada a Niveles (Level Entrances)

| Nivel | Imagen de Entrada | Contexto y Detalles |
| :--- | :--- | :--- |
| **Turtletown** | `/mundos/bear_village/Turtletownentrancearea.webp` | Entrada abierta situada sobre las enredaderas de la zona baja. No tiene un área temática separada. |
| **Snow Valley** | `/mundos/bear_village/Snowvalleyentrancearea.webp` | Área temática con nieve. El cartel tiene una sierra del aserradero clavada. Incluye el acceso a la cueva de agua oscura. |
| **Beemothep Desert**| `/mundos/bear_village/Beemothepdesertentrancearea.webp` | Terreno de arena con una estatua de oso. El cartel es un muro de ladrillos astillado. |
| **Giant House** | `/mundos/bear_village/Gianthouseentrancearea.webp` | Única por usar una **Máquina Reductora** en lugar de teletransportador. El nombre del nivel está en la casa del Científico. |
| **The Hive** | `/mundos/bear_village/Newhiveentrancearea.webp` | Serie de plataformas de miel púrpura sobre agua con estalactitas. Peligro de caída al inicio. |

---

## 🎭 Parte 2: Diccionario de Personajes y Criaturas

Referencia técnica de los habitantes y enemigos encontrados en cada sección.

### 🏘️ Habitantes de Bear Village
| Personaje | Ruta de Imagen | Notas |
| :--- | :--- | :--- |
| **Queen Beeatrice** | `/personajes/Queen_Beeatrice_render.png` | Reina de las abejas. |
| **Baaren** | `/personajes/Baaren.render.png` | El héroe oso. |
| **Shicka** | `/personajes/Shicka_render_.png` | El explorador/mochilero. |
| **Baaren's Brother** | `/Baaren_brother_transparent.webp` | Localizado en la cueva oculta. |
| **Capitalus** | `/personajes/Capitalus_render.png` | Dueño de la tienda de ropa. |
| **Tristopio** | `/personajes/Tristopio_render.png` | Vendedor melancólico. |

### 🌍 Criaturas por Región

#### Turtletown & General
- **Turtle:** `/personajes/Turtle_render.png`
- **Bee:** `/personajes/Bee_render.png` (Comunes en todo el mapa)

#### Snow Valley & Desert
- **Penguin:** `/personajes/Penguin_render.png`
- **Crocodile:** `/personajes/Crogo_render_.png` (Referenciado como Crogo)

#### Giant House & The Hive
- **Rat:** `/personajes/Rats_render_.png`
- **Cockroach:** `/personajes/Cockroach_render.png`
- **Violette:** `/personajes/Violette_render_.png`
- **Caterpillar:** `/personajes/Caterpillar_render.png`

---

### 🛠️ Notas de Implementación
- **Rutas Relativas:** Para uso en frontend, omitir el prefijo `/public`. Ejemplo: `src="/mundos/bear_village/River.webp"`.
- **Placeholder:** Si un recurso figura como *Sin Imagen*, utilizar el render genérico de Baaren o de una Abeja común.
- **Optimización:** Se prefieren los archivos `.webp` en la carpeta `/mundos/` para mejorar el rendimiento de carga de fondos.

---
*Última actualización: 12 de Abril, 2026 - Documentación Unificada:* [detalles_imagenes.md](file:///e:/proyectos/00pruebasuperbear/docs/detalles_imagenes.md)
