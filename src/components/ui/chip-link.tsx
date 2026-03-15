import { cn } from "@/lib/utils"

function ChipLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="chip-link"
      className={cn(
        "inline-flex items-center font-mono text-xs text-primary no-underline px-1 py-0.5 border border-border rounded-[3px] bg-surface transition-colors duration-200 hover:bg-border hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { ChipLink }
