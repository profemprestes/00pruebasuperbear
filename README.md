# 🐻 Facu's 9th Adventure & Super Bear Adventure - Documentación del Proyecto

Bienvenido a la documentación oficial del proyecto **Facu's 9th Adventure**, una invitación digital interactiva, y a la enciclopedia de contexto del juego en el que se basa: **Super Bear Adventure (SBA)**.

---

## 🎮 Parte 1: Proyecto Web "GRAN FACU AVENTURA"

### 📝 Descripción General

Este proyecto consiste en la creación de una **Single Page Application (SPA)** interactiva desarrollada en React y Tailwind CSS, que funciona como una invitación de cumpleaños digital [1]. El concepto central es transformar la experiencia de recibir una invitación en un **videojuego**, inspirada directamente en la estética (Low-Poly / Voxel Art) y las mecánicas de _Super Bear Adventure_ [1, 2].

El objetivo principal es generar emoción en los invitados mediante una interfaz inmersiva y animada que simule el inicio de una nueva "misión" [1].

### 📅 Datos Oficiales del Evento (Misión Principal)

Toda la información del cumpleaños que se renderiza en la web es la siguiente [3]:

- **Festejado:** Facu (¡Nivel 9 Desbloqueado!) [3]
- **Lugar:** **KBOOM** (Av. Italia 3421) [3]
- **Fecha:** Domingo 24 de mayo [3]
- **Horario:** Desde las 18:30 hasta las 21:00 hs [3]
- **Contacto/RSVP:** eventos@kboom.uy | Instagram: @kboom.uy [3]
- **Aviso Importante (Equipamiento):** ¡Llevar medias y ropa cómoda para disfrutar de la pista de patín, escaladas, ninja warrior y crazy carts! [3]

### 🖥️ Estructura de la Aplicación

1. **Pantalla de Título (Intro Screen):** Actúa como una pantalla de carga de un juego, mostrando el texto "¡FACU TE INVITA A SU CUMPLE! - NIVEL 9 DESBLOQUEADO" con una barra de progreso animada y un botón de "¡EMPEZAR!" en 3D [4, 5].
2. **Panel del Creador (Beendows XP):** Una pantalla de configuración exclusiva guiada por el "Oso Científico" para que Facu pueda ingresar sus datos, gustos y subir sus fotos simulando el sistema operativo retro de _The Hive_ [6, 7].
3. **El Mapa de la Invitación:**
   - **Info del Nivel:** Detalles de fecha y hora guiados por Shicka y Baaren [5].
   - **Cofre de Recuerdos:** Carrusel interactivo de fotos de Facu [8].
   - **RSVP / Recompensas:** Formulario de confirmación donde los invitados ganan "monedas" al registrarse [8].
4. **Outfit Shop (Tienda interactiva):** Integración de los gráficos reales del juego utilizando las URLs directas de la Wiki oficial alojadas en `docs/listas`.
5. **Easter Egg (The Backrooms):** Un área secreta oculta en la interfaz web a la que se accede mediante 3 clics (simulando un _noclip_), mostrando al aterrador _Shadow Bear_ en un laberinto amarillo infinito de los años 90 [9].

---

## 📖 Parte 2: Enciclopedia y Contexto de Super Bear Adventure

Para mantener la inmersión de la aplicación web, a continuación se detalla el _lore_ oficial del juego desarrollado por Earthkwak Games [10].

### La Historia (Lore)

El reino vivía en perfecta armonía bajo la Dinastía de las Abejas y su líder, la bondadosa Reina Beeatrice [11]. Sin embargo, el hermano de Baaren, enojado tras el rechazo de este a su propuesta de conquistar juntos el lugar, decidió robar un artefacto llamado "The Kernel" [11]. Con él, secuestró a la Reina y obligó a las abejas a fabricar **Miel Morada (Purple Honey)**, una sustancia que vuelve agresivos y sin mente a los animales [11].
Al descubrir que los osos eran inmunes al control mental de la miel (solo teñía su pelaje de morado y los volvía lentos [12]), las abejas asaltaron la Aldea y encerraron a todos en jaulas [11]. **Baaren**, quien se salvó por estar durmiendo una siesta en un árbol, despierta y se embarca en una aventura para liberar a sus amigos [11, 13].

### 🐾 Personajes Principales

- **Baaren:** El héroe oso pardo jugable. Es valiente, inmune a la miel morada y su misión es rescatar a sus amigos y detener a su hermano [14-16].
- **Shicka:** La deuteragonista. Es una mochilera amarilla parecida a un pollito de peluche que guía a Baaren dándole consejos. Puede cargar hasta 7 llaves doradas a la vez e incluso se sacrifica para proteger a Baaren del láser final [17-20].
- **Reina Beeatrice:** La benevolente abeja líder, controlada mentalmente para actuar como jefa [21].
- **El Hermano de Baaren:** El dictador y antagonista final, cuyo pelaje se volvió púrpura por experimentar con la miel en sí mismo [12, 22].
- **Capitalus & Capitalos:** Dos hermanos osos de otra región [23]. Capitalus tiene una tienda para cambiar atuendos [23], y el elegante Capitalos vende artículos legendarios y maneja la Ruleta de la Fortuna [24, 25].
- **Tristopio:** Un amigable conejo rosado que actúa como entrenador, dando Misiones Diarias a cambio de _Tristopio Tokens_ [26, 27].
- **El Científico:** Un oso excéntrico, inventor de la máquina encogedora y dueño del nivel _Giant House_. Es bastante desordenado y le robaron el _Kernel_ [7, 28].
- **Maybee:** Una abeja dueña de una tienda de regalos en _The Hive_. Pese a odiar a los osos, hace negocios con Baaren [29, 30].

### 🌍 Mundos y Niveles

Los niveles se desbloquean al ir rescatando a una cantidad específica de osos [31]:

1. **Bear Village (El Nexo):** Aldea pacífica con los portales a los mundos y tiendas [32].
2. **Turtletown:** Nivel inicial boscoso con casas en forma de caparazón. Su jefe es el _Turtle Golem_ [33, 34].
3. **Snow Valley:** Valle helado con pingüinos, alces y un _Yeti_ [35]. Requiere 4 osos [36].
4. **Beemothep Desert:** Desierto de ruinas, pirámides y fennecs. Su jefe es _The Guardian_ y requiere 8 osos [37].
5. **Giant House:** Baaren es encogido en la desordenada casa del Científico (llena de ratas y cucarachas). Requiere 12 osos [38].
6. **The Hive:** La fábrica industrial contaminada final, hogar de la miel morada y del Hermano de Baaren [6].
7. **Arcade World:** Mundo espacial de minijuegos (carreras, parkour) para recolectar monedas. Requiere 6 osos [36].
8. **The Backrooms (Easter Egg):** Laberinto secreto espeluznante de pasillos amarillos al que se entra cayendo fuera del mapa (_noclip_). Custodiado por el siniestro _Shadow Bear_ [9, 39, 40].

### ⚙️ Mecánicas y Coleccionables

- **Monedas:** Moneda estándar para cosméticos y _Lootboxes_ [41].
- **Miel Morada:** Trampa ambiental tóxica que ralentiza a Baaren [42].
- **Llaves:** Cargadas por Shicka, necesarias para abrir jaulas geométricas de osos [43].
- **Corazones:** Curan 1 punto de vida al instante (hay 3 por nivel) [44].
- **VR Headsets:** Sirven como objeto cosmético épico y como el sistema de "vidas" (3 intentos diarios) para las Misiones Diarias [45].
- **Tristopio Tokens:** Moneda ganada (1 por día) completando Misiones Diarias de Tristopio. Permite comprar ropa exclusiva rosada [46].
- **Pegatinas (Stickers):** Tres coleccionables invisibles ocultos en cada nivel para decorar la aldea [47, 48].
- **Golden Bears (Trofeos):** Recompensas de la mecánica de _Speedrunning_ y contrarreloj por salvar osos en tiempo récord [49].
