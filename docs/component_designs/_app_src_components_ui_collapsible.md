# Detalle de Diseño y Textos: /app/src/components/ui/collapsible.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

No se encontraron clases de Tailwind/CSS explícitas.

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
"use client"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }


```
