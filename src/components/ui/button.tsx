import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Game-specific 3D button variants
        "3d-gold": `
          bg-gradient-to-b from-golden-coin to-yellow-500
          text-teddy-brown font-bold
          border-4 border-yellow-700
          shadow-[0_6px_0_#b8860b]
          hover:-translate-y-0.5 hover:shadow-[0_8px_0_#b8860b]
          active:translate-y-1 active:shadow-[0_2px_0_#b8860b]
          rounded-2xl
        `,
        "3d-green": `
          bg-gradient-to-b from-grass-green to-green-600
          text-white font-bold
          border-4 border-green-700
          shadow-[0_6px_0_#1a5c2e]
          hover:-translate-y-0.5 hover:shadow-[0_8px_0_#1a5c2e]
          active:translate-y-1 active:shadow-[0_2px_0_#1a5c2e]
          rounded-2xl
        `,
        "3d-blue": `
          bg-gradient-to-b from-sky-blue to-blue-500
          text-white font-bold
          border-4 border-blue-700
          shadow-[0_6px_0_#1e3a5f]
          hover:-translate-y-0.5 hover:shadow-[0_8px_0_#1e3a5f]
          active:translate-y-1 active:shadow-[0_2px_0_#1e3a5f]
          rounded-2xl
        `,
        "3d-brown": `
          bg-gradient-to-b from-teddy-brown to-amber-900
          text-cloud-white font-bold
          border-4 border-amber-950
          shadow-[0_6px_0_#3d1f08]
          hover:-translate-y-0.5 hover:shadow-[0_8px_0_#3d1f08]
          active:translate-y-1 active:shadow-[0_2px_0_#3d1f08]
          rounded-2xl
        `,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        // Game-specific sizes
        "game-sm": "h-10 px-6 text-sm rounded-xl",
        "game-md": "h-12 px-8 text-base rounded-2xl",
        "game-lg": "h-14 px-10 text-lg rounded-2xl",
        "game-xl": "h-16 px-12 text-xl rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
