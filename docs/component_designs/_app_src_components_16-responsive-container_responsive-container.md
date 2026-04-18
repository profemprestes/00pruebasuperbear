# Detalle de Diseño y Textos: /app/src/components/16-responsive-container/responsive-container.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `{cn(
        'w-full max-w-[min(95vw,1280px)] mx-auto',
        spacingClasses[spacing],
        safeAreaClasses,
        className
      )}`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<Component>**: {children}

## Contenido Completo del Archivo
```tsx
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ResponsiveContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
  /**
   * Spacing scale: 'sm' | 'md' | 'lg' | 'xl'
   * Controls vertical padding scale across all breakpoints
   */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Add safe area padding for iOS notch and Android bars
   */
  safeAreas?: boolean;
};

/**
 * Responsive container component with consistent spacing and safe area support.
 * Replaces ad-hoc padding values with a unified system.
 */
export function ResponsiveContainer({
  children,
  className,
  as: Component = 'div',
  spacing = 'md',
  safeAreas = true,
}: ResponsiveContainerProps) {
  // Vertical spacing scale
  const spacingClasses = {
    sm: 'py-4 sm:py-6 md:py-8',
    md: 'py-6 sm:py-8 md:py-12',
    lg: 'py-8 sm:py-12 md:py-16',
    xl: 'py-12 sm:py-16 md:py-20',
  };

  // Safe area classes
  const safeAreaClasses = safeAreas
    ? 'pl-[max(1rem,var(--safe-left))] pr-[max(1rem,var(--safe-right))] sm:pl-[max(1.5rem,var(--safe-left))] sm:pr-[max(1.5rem,var(--safe-right))]'
    : 'px-4 sm:px-6';

  return (
    <Component
      className={cn(
        'w-full max-w-[min(95vw,1280px)] mx-auto',
        spacingClasses[spacing],
        safeAreaClasses,
        className
      )}
    >
      {children}
    </Component>
  );
}


```
