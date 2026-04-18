# Detalle de Diseño y Textos: /app/src/components/ui/typography.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `{cn(headingVariants({ level, className }))}`
- `{cn(bodyVariants({ size, className }))}`
- `{cn(labelVariants({ size, variant, className }))}`
- `{cn(subtitleVariants({ size, className }))}`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

No se encontraron textos estáticos.

## Contenido Completo del Archivo
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ── Heading Component ──
const headingVariants = cva(
  "font-milky text-teddy-brown",
  {
    variants: {
      level: {
        h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
        h2: "text-2xl sm:text-3xl md:text-4xl",
        h3: "text-xl sm:text-2xl md:text-3xl",
        h4: "text-lg sm:text-xl md:text-2xl",
      },
    },
    defaultVariants: {
      level: "h2",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h2", ...props }, ref) => {
    const Comp = level || "h2"
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

// ── Body Text Component ──
const bodyVariants = cva(
  "font-body text-honey-box-text",
  {
    variants: {
      size: {
        xs: "text-xs sm:text-sm",
        sm: "text-sm sm:text-base",
        md: "text-base sm:text-lg",
        lg: "text-lg sm:text-xl",
        xl: "text-xl sm:text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface BodyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof bodyVariants> {}

const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(bodyVariants({ size, className }))}
        {...props}
      />
    )
  }
)
Body.displayName = "Body"

// ── Label Component (for HUD-style labels) ──
const labelVariants = cva(
  "font-amble uppercase tracking-wider text-honey-box-text",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      variant: {
        default: "text-honey-box-text",
        gold: "text-golden-coin",
        green: "text-grass-green",
        brown: "text-teddy-brown",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

export interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(labelVariants({ size, variant, className }))}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"

// ── Subtitle Component ──
const subtitleVariants = cva(
  "font-amble text-honey-box-text",
  {
    variants: {
      size: {
        sm: "text-sm sm:text-base",
        md: "text-base sm:text-lg",
        lg: "text-lg sm:text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof subtitleVariants> {}

const Subtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(subtitleVariants({ size, className }))}
        {...props}
      />
    )
  }
)
Subtitle.displayName = "Subtitle"

export { Heading, Body, Label, Subtitle, headingVariants, bodyVariants, labelVariants, subtitleVariants }


```
