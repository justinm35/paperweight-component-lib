"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const COLORS = [
  { name: "Orange", hex: "#ff6633", hover: "#ff7744", dim: "#cc4422", ring: "rgba(255,102,51,0.28)", ghost: "rgba(255,102,51,0.08)" },
  { name: "Blue", hex: "#3b82f6", hover: "#60a5fa", dim: "#2563eb", ring: "rgba(59,130,246,0.28)", ghost: "rgba(59,130,246,0.08)" },
  { name: "Green", hex: "#22c55e", hover: "#4ade80", dim: "#16a34a", ring: "rgba(34,197,94,0.28)", ghost: "rgba(34,197,94,0.08)" },
  { name: "Purple", hex: "#a855f7", hover: "#c084fc", dim: "#9333ea", ring: "rgba(168,85,247,0.28)", ghost: "rgba(168,85,247,0.08)" },
  { name: "Red", hex: "#ef4444", hover: "#f87171", dim: "#dc2626", ring: "rgba(239,68,68,0.28)", ghost: "rgba(239,68,68,0.08)" },
  { name: "Yellow", hex: "#eab308", hover: "#facc15", dim: "#ca8a04", ring: "rgba(234,179,8,0.28)", ghost: "rgba(234,179,8,0.08)" },
  { name: "Cyan", hex: "#06b6d4", hover: "#22d3ee", dim: "#0891b2", ring: "rgba(6,182,212,0.28)", ghost: "rgba(6,182,212,0.08)" },
  { name: "Pink", hex: "#f472b6", hover: "#f9a8d4", dim: "#ec4899", ring: "rgba(244,114,182,0.28)", ghost: "rgba(244,114,182,0.08)" },
]

const STORAGE_KEY = "pw-accent"

function applyColor(color: typeof COLORS[number]) {
  const el = document.documentElement
  el.style.setProperty("--primary", color.hex)
  el.style.setProperty("--accent", color.hex)
  el.style.setProperty("--primary-foreground", "#0a0a0a")
  el.style.setProperty("--accent-hover", color.hover)
  el.style.setProperty("--accent-dim", color.dim)
  el.style.setProperty("--ring", color.ring)
  el.style.setProperty("--accent-ghost", color.ghost)
}

export function ColorPicker() {
  const [active, setActive] = useState<string>("Orange")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const color = COLORS.find((c) => c.name === stored)
      if (color) {
        setActive(color.name)
        applyColor(color)
      }
    }
  }, [])

  function handleClick(color: typeof COLORS[number]) {
    setActive(color.name)
    applyColor(color)
    localStorage.setItem(STORAGE_KEY, color.name)
  }

  return (
    <div className="flex items-center gap-1.5">
      {COLORS.map((color) => (
        <button
          key={color.name}
          onClick={() => handleClick(color)}
          title={color.name}
          className={cn(
            "size-4 rounded-[3px] border border-border transition-all duration-150",
            active === color.name && "ring-2 ring-primary"
          )}
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
  )
}
