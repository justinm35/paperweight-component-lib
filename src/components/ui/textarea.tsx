import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "font-mono flex field-sizing-content min-h-16 w-full rounded-[6px] border border-border bg-[rgba(255,255,255,0.04)] px-2.5 py-2 text-sm transition-colors duration-150 outline-none placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_0_0_1px_var(--ring)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
