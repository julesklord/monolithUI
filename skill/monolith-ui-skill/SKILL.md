---
name: monolith-ui
description: >
  Apply the MonolithUI design system when building React components, HTML artifacts,
  dashboards, CLI/TUI mockups, design system docs, or any UI requiring a dark industrial
  aesthetic with physics-based motion and semantic color tokens. Use this skill whenever
  the user mentions MonolithUI, FMG design system, or asks to build UI in the style Jules
  uses for his tools (Gemini Station, ducer-cli, poshbuddy, etc.). Also trigger for requests
  like "build a component matching my design system", "use my UI style", "dark industrial
  interface", "orbital layout", "TUI console mockup", or any frontend work in Jules's
  developer ecosystem. Do NOT use for generic Material/Bootstrap/Tailwind UI requests.
---

# MonolithUI Design System

**Density over decoration. Industrial-grade, brand-agnostic, orbital layout.**

Built on React 19 + TypeScript. Dark by default. Five brand presets. Physics motion.

---

## Core Principles (Non-Negotiable)

1. **Depth over flat** — 7-step surface ramp (#0a0c10 → #323845). Never pure black.
2. **Physics, not interpolation** — Spring curve for entrances. `ease-linear` banned except spinners.
3. **Orbital layout** — Content is the sun. Nav/toolbars orbit it. Command bar floats on top, docks on side, drawers from below.
4. **Semantic over decorative** — Green = connected/success ONLY. Never decorate with semantic colors.
5. **Measurable** — Every decision has a spec: exact bezier values, exact hex steps, exact spacing.
6. **Brand-agnostic slots** — ~10 CSS vars to rebrand the entire system via `@layer brand`.

---

## Token Reference (Critical Subset)

Read `references/tokens.md` for the full spec. Key values:

```css
/* Surfaces (dark default) */
--ui-surface-0: #0a0c10   /* deepest: dock bg, modal backdrop */
--ui-surface-1: #0f1218   /* command bar, nav, sidebar */
--ui-surface-3: #1a1e26   /* root canvas / body */
--ui-surface-4: #21252e   /* cards, drawers */

/* Motion */
--ui-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)  /* entrances, dock hover */
--ui-ease-out:    cubic-bezier(0.16, 1, 0.3, 1)       /* backdrops, page transitions */
--ui-ease-default: cubic-bezier(0.4, 0, 0.2, 1)       /* hover colors, borders */
--ui-dur-fast:   110ms
--ui-dur-drawer: 370ms

/* Radius */
--ui-r-sm: 4px  --ui-r-md: 6px  --ui-r-lg: 8px  --ui-r-xl: 12px  --ui-r-pill: 999px

/* Z-index orbital stack */
--ui-z-sticky: 20   /* inner orbit: toolbars */
--ui-z-dock:   40   /* outer orbit: global nav */
--ui-z-modal:  60   /* deep space: overlays */
```

### Semantic Colors (Fixed Across All Brands)
| Token | Value | Meaning |
|---|---|---|
| `--ui-success` | #34a853 | Connected · done · online |
| `--ui-warning` | #fbbf24 | In progress · caution |
| `--ui-danger`  | #f28b82 | Error · destructive |
| `--ui-info`    | #60a5fa | Informational |

### Brand Slots (Change Per Project)
```css
--brand-primary        /* base action color */
--brand-primary-light  /* tinted text on dark */
--brand-primary-bg     /* ~12% opacity fill */
--brand-primary-border /* ~25% opacity borders */
--brand-primary-glow   /* ~18% opacity glow */
--brand-secondary      /* complement color */
--brand-gradient       /* linear-gradient(135deg, primary, secondary) */
```

**5 Built-in Presets:** `brand-tropic-vibes` (cyan+purple), `brand-mango` (amber), `brand-balandra` (purple+crimson), `brand-playa` (cyan+teal), `brand-pitahaya` (scarlet).

---

## Typography

Three fonts, distinct roles:
- **DM Serif Display** — display moments, section titles with `<em>`
- **DM Sans** — all UI text (weights 300/400/500/600)
- **DM Mono** — data, values, status, code

Type scale: 9.5px · 10.5px · 11.5px · 13px · 14px · 16px · 20px · 26px · 34px

---

## Component Patterns

### Command Bar
```tsx
// Platform-aware: macos | windows | linux-gnome
<CommandBar platform="macos" title="my-tool">
  <CommandBarSegment variant="primary">gemini-2.0-flash</CommandBarSegment>
  <CommandBarDivider />
  <CommandBarSegment variant="success"><StatusDot on /> connected</CommandBarSegment>
  <CommandBarSpacer />
  <CommandBarSegment>v0.5.2</CommandBarSegment>
</CommandBar>
```

### Status Indicators
```tsx
<StatusDot on />        // green + glow
<StatusDot status="warn" />  // amber
<StatusDot status="err" />   // red
<Pill variant="primary">gemini-2.5</Pill>
<Pill variant="success"><StatusDot on /> online</Pill>
<Tag variant="primary">trusted</Tag>
```

### Buttons
```tsx
<Button variant="primary">Primary</Button>     // brand bg
<Button variant="secondary">Secondary</Button> // brand tint
<Button variant="ghost">Ghost</Button>         // transparent
<Button variant="danger" iconOnly><IconTrash /></Button>
// Active state: transform: scale(0.97)
// Primary hover: filter: brightness(1.05) + glow shadow
```

### Dock
```tsx
<Dock position="right" variant="floating">
  <DockButton icon={<IconLayoutSidebar size={18} />} active />
  <DockDivider />
  <DockButton icon={<IconSettings size={18} />} badge />
</Dock>
// Hover: transform scale(1.08) with spring
// Active: brand-primary-bg + indicator bar on edge
```

### Drawer (Spring Physics)
```tsx
<Drawer isOpen={open} onClose={() => setOpen(false)} title="Sessions" icon={<IconHistory />}>
  {/* content */}
</Drawer>
// Opens with: transition: transform 370ms cubic-bezier(0.34, 1.56, 0.64, 1)
// Has backdrop + handle + close btn
```

### Cards & Surfaces
```tsx
<Card>Default (surface-4)</Card>
<Card variant="elevated">Elevated (surface-3 + shadow)</Card>
// Hover: surface-5 + border-hover
```

### Info Boxes
```tsx
// rule-box  = blue info (--ui-info)
// warn-box  = amber warning
// error-box = red danger
// note-box  = secondary accent
<div className="rule-box"><p><strong>Rule:</strong> ...</p></div>
```

---

## Orbital Layout Rules

```
┌──────────────────────────────────────────────────┐
│  OUTER ORBIT: Command Bar (top) z:20-40          │
├────────────┬─────────────────────────────────────┤
│ INNER ORBIT│         THE CORE (75% min)          │
│  Sidebar   │    Main canvas · surface-0          │
│  surface-2 │    Content always wins              │
│   ~25%     │                                     │
├────────────┴──────────────┬──────────────────────┤
│     DRAWER (bottom)       │   DOCK (floating)    │
│     spring physics        │   right/left/bottom  │
└───────────────────────────┴──────────────────────┘
```

**Monolith Ratio (1:4):** Side panels never exceed 280px or 25% of viewport.  
**Z-stack:** Core(1) → Toolbars(20) → Drawers(30) → Dock(40) → Tooltips(50) → Modals(60)

---

## TUI (Terminal UI) Mode

When building TUI mockups or Ratatui-style layouts:

- Use box-drawing chars: `┌ ─ ┐ ├ ┤ └ ┘ │ ┣ ┗ ┃`
- Density gradients: `░ ▒ ▓ █`
- Status bar: inverted (brand-primary bg, surface-0 text), ALL CAPS, mono
- No gradients, no shadows, no border-radius in TUI
- Motion = character-by-character reveals, progress bar fills

**Layout Archetypes:**
- **TYPE_A (Command Station):** 25% sidebar / 75% main / 2-line status — for chat/editors
- **TYPE_B (Telemetry Dashboard):** Quad-grid + global header — for monitoring
- **TYPE_C (Focused Utility):** Centered + logo art + prompt — for single-purpose tools

Read `references/tui.md` for full TUI spec and Ratatui code patterns.

---

## Motion Rules

| Curve | Value | Use |
|---|---|---|
| Spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Entrances, dock hover, drawer open |
| Ease Out | `cubic-bezier(0.16, 1, 0.3, 1)` | Backdrop fade, card appear |
| Default | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover colors, borders, toggle |
| Linear | `linear` | **AVOID** — spinner only |

Spring overshoot is ~3-4% past target, <100ms. Should be felt, not seen.

---

## Implementation Checklist

When generating a component or UI:

- [ ] Use CSS custom properties (`--ui-*`, `--brand-*`), never hardcode hex
- [ ] Surface depth: deeper containers = lower surface number
- [ ] Semantic colors for meaning only (green ≠ decoration)
- [ ] Spring for DOM entrances, ease-out for fades, default for hovers
- [ ] Button active: `scale(0.97)` — primary hover: `brightness(1.05)`
- [ ] Command bar: `height: 38px`, rounded `var(--ui-r-xl)`
- [ ] Dock buttons: `32px × 32px`, `r-md`, spring scale on hover
- [ ] DM Mono for all status/data/code text
- [ ] Sidebar links: `r-sm`, active = `brand-primary` text + left border indicator
- [ ] Status dots: `6px`, green always has `box-shadow` glow

---

## Reference Files

- `references/tokens.md` — Complete CSS variable reference (all tokens)
- `references/tui.md` — TUI spec, box-drawing guide, Ratatui patterns
- `references/brands.md` — All 5 brand preset definitions (full CSS)
