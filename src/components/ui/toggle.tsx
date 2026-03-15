"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-[4px] font-mono font-medium uppercase tracking-[0.05em] whitespace-nowrap transition-all duration-150 outline-none cursor-pointer disabled:pointer-events-none disabled:opacity-60 focus-visible:ring-1 focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface aria-pressed:bg-primary aria-pressed:text-background aria-pressed:border-primary",
        outline:
          "border border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-accent aria-pressed:bg-primary aria-pressed:border-primary aria-pressed:text-background",
      },
      size: {
        default: "h-8 min-w-8 px-2 text-[11px]",
        sm: "h-7 min-w-7 px-1.5 text-[10px]",
        lg: "h-9 min-w-9 px-2.5 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
