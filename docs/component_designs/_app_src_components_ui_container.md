# Detalle de Diseño y Textos: /app/src/components/ui/container.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `{cn(containerVariants({ size, spacing, className }))}`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const containerVariants = cva(
  "w-full mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-3xl px-4 sm:px-6 md:px-8",
        md: "max-w-4xl px-4 sm:px-6 md:px-8",
        lg: "max-w-5xl px-4 sm:px-6 md:px-8",
        xl: "max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12",
        full: "max-w-none px-4 sm:px-6 md:px-8",
      },
      spacing: {
        none: "",
        sm: "py-4",
        md: "py-8",
        lg: "py-12",
        xl: "py-16",
      },
    },
    defaultVariants: {
      size: "lg",
      spacing: "none",
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, spacing, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, spacing, className }))}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container, containerVariants }


```
