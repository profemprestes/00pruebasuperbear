# Detalle de Diseño y Textos: /src/components/14-dialog-box/dialog-box.tsx

## Diseño del Cuerpo del Componente

El componente utiliza las siguientes clases y estilos:

- `{cn("bg-card/80 backdrop-blur-sm border-4 border-foreground shadow-3d w-full max-w-sm", className)}`
- `flex items-center gap-4`
- `text-foreground animate-bounce [animation-duration:2s]`
- `font-headline text-3xl text-foreground`
- `text-foreground font-body text-lg space-y-2`

## Textos del Componente

A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<div>**: {icon}
- **<CardTitle>**: {title}
- **<div>**: {children}

## Contenido Completo del Archivo

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DialogBoxProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function DialogBox({
  icon,
  title,
  children,
  className,
}: DialogBoxProps) {
  return (
    <Card
      className={cn(
        "bg-card/80 backdrop-blur-sm border-4 border-foreground shadow-3d w-full max-w-sm",
        className,
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="text-foreground animate-bounce [animation-duration:2s]">
            {icon}
          </div>
          <CardTitle className="font-headline text-3xl text-foreground">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-foreground font-body text-lg space-y-2">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
```
