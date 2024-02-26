import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "prefixinline-flex prefixitems-center prefixjustify-center prefixwhitespace-nowrap prefixrounded-md prefixtext-sm prefixfont-medium prefixring-offset-background prefixtransition-colors focus-visible:prefixoutline-none focus-visible:prefixring-2 focus-visible:prefixring-ring focus-visible:prefixring-offset-2 disabled:prefixpointer-events-none disabled:prefixopacity-50",
  {
    variants: {
      variant: {
        default: "prefixbg-primary prefixtext-primary-foreground hover:prefixbg-primary/90",
        destructive:
          "prefixbg-destructive prefixtext-destructive-foreground hover:prefixbg-destructive/90",
        outline:
          "prefixborder prefixborder-input prefixbg-background hover:prefixbg-accent hover:prefixtext-accent-foreground",
        secondary:
          "prefixbg-secondary prefixtext-secondary-foreground hover:prefixbg-secondary/80",
        ghost: "hover:prefixbg-accent hover:prefixtext-accent-foreground",
        link: "prefixtext-primary prefixunderline-offset-4 hover:prefixunderline",
      },
      size: {
        default: "prefixh-10 prefixpx-4 prefixpy-2",
        sm: "prefixh-9 prefixrounded-md prefixpx-3",
        lg: "prefixh-11 prefixrounded-md prefixpx-8",
        icon: "prefixh-10 prefixw-10",
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
