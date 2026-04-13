# 🕵️‍♂️ PROMPT MAESTRO: Auditoría Autónoma de Estado del Proyecto

**Rol:** Lead Software Architect & Auditor
**Objetivo:** Generar un reporte de estado 100% real basado en la evidencia actual del código, sin asunciones previas.

---

## ⚙️ PROTOCOLO DE EJECUCIÓN

Tu misión es explorar el código "desde cero", identificar qué se ha implementado realmente y contrastarlo con los estándares de arquitectura (System Prompt V3).

### 1. Fase de Descubrimiento (Evidencia Pura)

Antes de escribir una sola palabra del reporte, debes ejecutar estas acciones internas:

1.  **Inventario de Migraciones (OBLIGATORIO):**
    - Revisa **TODO** el contenido de `supabase/migrations/`.
    - Identifica qué funciones SQL, tablas y políticas existen realmente.
    - **Regla de Oro:** Si una función no está en `migrations`, NO existe.

2.  **Inventario de Código (OBLIGATORIO):**
    - Busca en `src/` los componentes y acciones que ya están implementados.
    - Busca en `supabase/functions/` si hay funciones Edge.

3.  **Análisis de Arquitectura:**
    - Compara lo encontrado con el **System Prompt V3**.
    - ¿Se está usando el patrón de Server Actions? ¿Está activo RLS?

### 2. Estructura del Reporte de Auditoría

Genera un archivo Markdown con la siguiente estructura exacta:

```markdown
# 📊 REPORTE DE AUDITORÍA: [Nombre del Proyecto]

**Fecha:** [Fecha Actual]
**Versión del Sistema:** V3 (Shared Responsibility)

---

## 1. Estado de la Base de Datos (Supabase)

### 1.1 Migraciones Existentes

- **Total:** [Número] migraciones.
- **Última Migración:** `[Nombre del archivo]`
- **Análisis:**
  - [Describe si las migraciones siguen el patrón correcto]
  - [Menciona si hay funciones críticas (ej: recursos, tropas) implementadas]

### 1.2 Funciones SQL (RPCs)

- **Implementadas:** [Lista de funciones]
- **Faltantes:** [Funciones que deberían existir según el System Prompt pero no están]

### 1.3 Políticas RLS

- **Estado:** [Activas / Incompletas / Inexistentes]

---

## 2. Estado de la Aplicación (Next.js)

### 2.1 Arquitectura

- **App Router:** [Sí/No]
- **Server Actions:** [Sí/No - ¿Se usan para lógica de negocio?]
- **Server Components:** [Sí/No]

### 2.2 Componentes Clave

- **Login:** [Implementado / Parcial]
- **Registro:** [Implementado / Parcial]
- **Arcade/Juegos:** [Implementado / Parcial]
- **Avatar Creator:** [Implementado / Parcial]
- **Misiones:** [Implementado / Parcial]

### 2.3 Validación de Datos

- **Zod:** [Sí/No - ¿Se usa en las acciones?]

---

## 3. Cumplimiento del System Prompt V3

### 3.1 Responsabilidad Compartida

- **Base de Datos:** [¿Se usa para lógica crítica?]
- **Aplicación:** [¿Se usa para validación y orquestación?]

### 3.2 Gestión de Recursos

- **Cálculo:** [¿Se usa cálculo Lazy? ¿Hay cron jobs?]
- **Concurrencia:** [¿Se maneja el bloqueo pesimista?]

### 3.3 Tiempo Real

- **Broadcast:** [¿Se usa para eventos efímeros?]
- **Changes:** [¿Se usa para eventos persistentes?]

---

## 4. Conclusiones y Riesgos

- **Riesgo General:** [Bajo/Medio/Alto]
- **Puntos Críticos:**
  - [Lista de problemas encontrados]
- **Recomendaciones:**
  - [Pasos inmediatos para corregir]

---

## 5. Próximos Pasos

- **Tarea 1:** [Descripción]
- **Tarea 2:** [Descripción]
- **Tarea 3:** [Descripción]

---

**Nota:** Este reporte se basa únicamente en la evidencia encontrada en el código. No hay suposiciones.
```
