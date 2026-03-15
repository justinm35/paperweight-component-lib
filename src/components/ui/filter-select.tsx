"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface FilterOption {
  value: string
  label: string
}

interface FilterSelectProps {
  options: FilterOption[]
  defaultSelected?: string[]
  onChange?: (selected: string[]) => void
  className?: string
}

function FilterSelect({ options, defaultSelected, onChange, className }: FilterSelectProps) {
  const [selected, setSelected] = useState<string[]>(defaultSelected ?? options.map(o => o.value))

  function handleValueChange(next: string[]) {
    setSelected(next)
    onChange?.(next)
  }

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "inline-flex items-center gap-1.5 min-h-[26px] px-2 bg-background text-muted-foreground border border-border rounded-[3px] font-mono text-[10px] uppercase tracking-[0.05em] cursor-pointer transition-colors duration-150 hover:text-foreground",
          className
        )}
      >
        Filters <span>{selected.length}/{options.length}</span>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={6}
        className="min-w-[150px] w-auto bg-surface border-border rounded-[6px] p-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.24)] gap-0"
      >
        <ToggleGroup
          multiple
          value={selected}
          onValueChange={handleValueChange}
          orientation="vertical"
          spacing={1}
          variant="outline"
          size="sm"
          className="w-full flex-col items-stretch gap-0"
        >
          {options.map((option) => {
            const isOn = selected.includes(option.value)
            return (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className={cn(
                  "w-full justify-start text-left px-2 py-1.5 mb-1 last:mb-0 rounded-[4px] font-mono text-[9px] font-medium uppercase tracking-[0.05em] border cursor-pointer transition-all duration-150 h-auto min-w-0",
                  isOn
                    ? "bg-primary border-primary text-background hover:bg-primary hover:text-background"
                    : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:bg-transparent"
                )}
              >
                {isOn ? "\u25CF" : "\u25CB"}&nbsp;{option.label}
              </ToggleGroupItem>
            )
          })}
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  )
}

export { FilterSelect }
export type { FilterOption, FilterSelectProps }
