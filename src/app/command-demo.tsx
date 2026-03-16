"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Search, Plus, FileText, User, Palette, Keyboard } from "lucide-react"

export function CommandDemo() {
  return (
    <div className="w-[400px]">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem>
              <Search />
              <span>Search</span>
            </CommandItem>
            <CommandItem>
              <Plus />
              <span>Create Resource</span>
            </CommandItem>
            <CommandItem>
              <FileText />
              <span>Generate Report</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <Palette />
              <span>Theme</span>
            </CommandItem>
            <CommandItem>
              <Keyboard />
              <span>Keyboard Shortcuts</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
