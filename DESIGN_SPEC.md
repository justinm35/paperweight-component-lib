# Paperweight Design System — Style Specification

Reference: https://signet.watch/incident/68

## Design Philosophy
Ultra-dark, utilitarian, data-dense UI. Think mission control / ops dashboard. 
No decorative elements. Every pixel serves a purpose.

## Color Tokens

### Dark Mode (primary)
```
--background:        #0a0a0a     (near-black base)
--surface:           #111111     (cards, panels)
--surface-raised:    #161616     (elevated cards, popovers)
--border:            #1a1a1a     (subtle borders)
--border-strong:     #2a2a2a     (emphasized borders)

--text-primary:      #cccccc     (bright text - headings, values)
--text-secondary:    #888888     (body text, descriptions)
--text-muted:        #444444     (labels, hints, placeholders)

--accent:            #ff6633     (primary action - warm orange)
--accent-hover:      #ff7744     (accent hover state)
--accent-dim:        #cc4422     (accent pressed/muted)
--accent-ghost:      rgba(255, 102, 51, 0.08)  (accent bg tint)
--accent-border:     rgba(255, 102, 51, 0.28)  (accent focus rings)

--destructive:       #ff4444
--warning:           #ffaa00
--success:           #44aa66

--ring:              rgba(255, 102, 51, 0.28)  (focus ring color)
```

### Light Mode
Invert the scale, keep the orange accent:
```
--background:        #fafafa
--surface:           #ffffff
--surface-raised:    #ffffff
--border:            #e5e5e5
--border-strong:     #d4d4d4

--text-primary:      #171717
--text-secondary:    #525252
--text-muted:        #a3a3a3

--accent:            #e5581a     (slightly darker orange for contrast on white)
--accent-hover:      #d14d15
--accent-dim:        #c44512
--accent-ghost:      rgba(229, 88, 26, 0.06)
--accent-border:     rgba(229, 88, 26, 0.24)

--destructive:       #dc2626
--warning:           #d97706
--success:           #16a34a

--ring:              rgba(229, 88, 26, 0.24)
```

## Typography
- Font: Geist Sans (already installed) — keep it
- Base size: 13px (0.8125rem) — smaller than typical, denser
- Line height: 1.6
- Headings: --text-primary color, font-weight 600, tracking-tight
- Body: --text-secondary color
- Labels/captions: --text-muted, 10-11px, uppercase, letter-spacing 0.08em, font-weight 600
- Monospace data: Geist Mono for numbers, codes, timestamps

## Component Styling

### Buttons
- Primary: bg accent, text background, no shadow, 4px radius
  - Height: 36px (default), 32px (sm), 40px (lg)
  - Font: 11px uppercase, letter-spacing 0.08em, font-weight 600
  - Hover: accent-hover bg
  - Disabled: opacity 0.6
- Secondary: transparent bg, border border-color, text-secondary
  - Hover: border accent, text-primary
- Ghost: no border, no bg
  - Hover: surface bg
- Destructive: same pattern as primary but with destructive color

### Inputs
- Height: 36px
- Background: rgba(255,255,255,0.04) dark / white light
- Border: 1px solid --border
- Border-radius: 6px
- Text: --text-primary, 12px
- Placeholder: --text-muted
- Focus: border accent, box-shadow 0 0 0 1px var(--ring)
- No outline, no default focus ring — custom ring only

### Cards
- Background: --surface
- Border: 1px solid --border
- Border-radius: 6px
- No shadow (dark mode relies on borders, not shadows)
- Card header: border-bottom 1px solid --border, padding 16px 20px
- Card title: --text-primary, 13px, font-weight 600, uppercase optional

### Badges
- Default: bg accent-ghost, text accent, border accent-border, 4px radius
- Secondary: bg transparent, border border-color, text text-secondary  
- Outline: border border-color, text text-muted
- All: 10px uppercase, letter-spacing 0.06em

### Tabs
- No background on tab list
- Tab trigger: text-muted, uppercase, 11px, letter-spacing 0.08em
- Active: text-primary, 2px solid accent bottom border (not rounded indicator)
- No pill/rounded container around tabs

### Table
- No outer border
- Header: text-muted, 10px uppercase, letter-spacing 0.08em, border-bottom
- Rows: border-bottom --border, hover surface bg
- Cells: text-secondary, 13px

### Checkbox
- 15px × 15px
- Border: 1px solid rgba(255,255,255,0.18) dark / --border light
- Rounded: 3px
- Checked: bg accent, border accent, inset shadow (box-shadow: inset 0 0 0 2px var(--background))
- Focus: ring accent-border

### Switch
- Track: --border bg unchecked, accent bg checked
- Thumb: --text-muted unchecked, white checked

### Dialog/Sheet
- Overlay: rgba(0,0,0,0.7), backdrop-filter blur(4px)
- Card: --background bg, 1px --border, 6px radius
- Max-width: 440px
- Header: border-bottom, title is uppercase 13px --text-primary

### Select/Dropdown
- Same input styling
- Dropdown panel: --surface-raised bg, 1px --border, 6px radius
- Items: hover surface bg, 12px text

### Separator
- 1px solid --border
- No extra margin by default

### Tooltip
- Background: --surface-raised
- Border: 1px solid --border
- Text: --text-secondary, 11px
- No arrow / minimal arrow

### Avatar
- Border: 1px solid --border
- Fallback bg: --surface, text: --text-muted

### Scroll Area
- Scrollbar thumb: --border-strong
- Scrollbar track: transparent

## Focus States (global)
- All interactive: outline none, box-shadow 0 0 0 1px var(--ring)
- No browser default outlines

## Transitions
- All color/bg transitions: 150ms ease
- No bouncy or springy animations
- Subtle opacity transitions on hover

## Border Radius Scale
- Default (--radius): 6px
- Small elements (badges): 4px  
- Buttons: 4px
- Full round: avatars, status dots only
