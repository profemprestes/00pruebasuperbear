# Detalle de Diseño y Textos: /app/src/components/ui/toaster.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `grid gap-1`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<ToastProvider>**: {toasts.map(function ({ id, title, description, action, ...props }) { return ( <Toast key={id} {...props}> <div className="grid gap-1"> {title && <ToastTitle>{title}</ToastTitle>} {description && ( <ToastDescription>{description}</ToastDescription> )} </div> {action} <ToastClose /> </Toast> ) })}
- **<Toast>**: {action}
- **<div>**: {title && <ToastTitle>{title}</ToastTitle>} {description && ( <ToastDescription>{description}</ToastDescription> )}
- **<ToastTitle>**: {title}
- **<ToastDescription>**: {description}

## Contenido Completo del Archivo
```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}


```
