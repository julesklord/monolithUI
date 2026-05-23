---
name: monolithUI-final
description: >
  Apply the MonolithUI design system when building React components, HTML artifacts,
  dashboards, landing pages, CLI/TUI mockups, or any UI requiring a dark industrial
  aesthetic with physics-based motion and semantic color tokens. Use this skill whenever
  the user mentions MonolithUI, TropicalUI, FMG design system, or asks to build UI in
  the style Jules uses for his tools. Also trigger for requests like "build a component
  matching my design system", "use my UI style", "dark industrial interface",
  "orbital layout", "TUI console mockup", "brutalista detallado", "skeuomorfismo moderno",
  or any frontend work in Jules's developer ecosystem. Do NOT use for generic
  Material/Bootstrap/Tailwind requests. Always use this skill before writing any CSS
  custom property, component class, or shadow value for this system — never guess token
  names from memory.
targets: [gemini-cli, claude, codex, opencode, cursor]
---

# MonolithUI — Final Design System Reference
**Density over decoration. Industrial-grade. Brand-agnostic. Orbital layout.**

React 19 + TypeScript. Dark by default. Five brand presets. Physics motion.  
Skeuomorfismo moderno: no bevels, interior shadows give texture without realism.

---

## Core Philosophy (Non-Negotiable)

1. **Depth over flat** — 7-step greyscale surface ramp. Every level visibly distinct.
2. **Weight, not float** — Elements anchor via low-opacity shadows. Nothing floats like a widget.
3. **Inset = tactile** — Press states use `inset` box-shadow only. `transform: translateY()` for press is banned.
4. **Physics, not interpolation** — Spring curve for entrances. `ease-linear` is banned except on spinners.
5. **Orbital layout** — Content is the sun. Nav orbits it. Command bar top, dock side, drawers bottom.
6. **Semantic over decorative** — Green means connected/success only. Never decorate with semantic colors.
7. **Brand-agnostic slots** — ~10 CSS vars rebrand the entire system via `@layer brand`. No component changes.
8. **No frosted glass** — `backdrop-filter: blur()` is banned. Industrial, not translucent.

---

## The Triple Stack (Core Pattern)

Every elevated element uses this exact `box-shadow` composition:

```css
box-shadow: var(--ui-edge-light), var(--ui-shadow-*), var(--ui-inset-*);
```

- `--ui-edge-light` — top-edge highlight simulating physical surface curvature
- `--ui-shadow-*` — external shadow for anchoring (low opacity, wide spread)
- `--ui-inset-*` — interior shadow giving material texture

**Never** use a single `box-shadow` value on interactive or elevated elements.

---

## Token Reference

> Full token inventory: `references/tokens.md`  
> Read that file when you need values not shown here.

### Surfaces — Pure Greyscale, No Colour Tint

Surfaces use pure greyscale by default. Brand tint comes only from `--brand-*` accent tokens,
never from surface values. Lower number = deeper/darker.

```css
--ui-surface-0: #080808   /* deepest: modal backdrops, dock bg */
--ui-surface-1: #0f0f0f   /* command bar, nav, sidebar */
--ui-surface-2: #161616   /* secondary panels */
--ui-surface-3: #1e1e1e   /* root canvas */
--ui-surface-4: #262626   /* cards, drawers, main canvas */
--ui-surface-5: #303030   /* hover states */
--ui-surface-6: #3a3a3a   /* active hover, border-adjacent */
--ui-surface-terminal: #0a0c0f  /* TUI blocks only */
```

Light theme (applied via `[data-theme="light"]` on `<html>`):

```css
--ui-surface-0: #c2c2c2   /* deep concrete */
--ui-surface-3: #dedede   /* main concrete canvas */
--ui-surface-6: #f8f8f8   /* lightest */
```

### Tactile Depth

```css
--ui-inset-micro:   inset 0 1px 1px rgba(0,0,0,0.15)
--ui-inset-shallow: inset 0 1px 3px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(0,0,0,0.08)
--ui-inset-deep:    inset 0 2px 6px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(0,0,0,0.15)
--ui-inset-well:    inset 0 3px 10px rgba(0,0,0,0.50), inset 0 1px 3px rgba(0,0,0,0.25)

--ui-edge-light:        inset 0 1px 0 rgba(255,255,255,0.06)
--ui-edge-light-strong: inset 0 1px 0 rgba(255,255,255,0.10)
```

### Shadows

```css
--ui-shadow-sm:     0 1px 2px rgba(0,0,0,0.4)
--ui-shadow-md:     0 2px 4px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)
--ui-shadow-lg:     0 4px 8px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)
--ui-shadow-dock:   0 2px 8px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.4)
--ui-shadow-drawer: 0 -4px 20px rgba(0,0,0,0.4)
```

### Borders

```css
--ui-border-subtle:         rgba(255,255,255,0.06)
--ui-border-default:        rgba(255,255,255,0.12)
--ui-border-hover:          rgba(255,255,255,0.22)
--ui-border-active:         rgba(255,255,255,0.22)   /* same as hover */
--ui-border-top-highlight:  rgba(255,255,255,0.09)
--ui-border-bottom-shadow:  rgba(0,0,0,0.25)
```

### Accent Tokens (Brand-Reactive)

```css
/* Primary — filled by --brand-primary. Default: neutral white. */
--ui-accent-primary:        var(--brand-primary, rgba(255,255,255,0.82))
--ui-accent-primary-text:   var(--brand-primary-text, #0a0a0a)
--ui-accent-primary-light:  var(--brand-primary-light, rgba(255,255,255,0.65))
--ui-accent-primary-bg:     var(--brand-primary-bg, rgba(255,255,255,0.06))
--ui-accent-primary-border: var(--brand-primary-border, rgba(255,255,255,0.14))
--ui-accent-primary-glow:   var(--brand-primary-glow, rgba(255,255,255,0.08))

/* Secondary — filled by --brand-secondary. Default: neutral white. */
--ui-accent-secondary:        var(--brand-secondary, rgba(255,255,255,0.45))
--ui-accent-secondary-bg:     var(--brand-secondary-bg, rgba(255,255,255,0.04))
--ui-accent-secondary-border: var(--brand-secondary-border, rgba(255,255,255,0.10))
```

### Semantic Colors (Fixed Across All Brands)

| Token | Value | Meaning |
|---|---|---|
| `--ui-success` / `--ui-success-light` | `#34a853` / `#81c995` | Connected · done · online |
| `--ui-warning` | `#fbbf24` | In progress · caution |
| `--ui-danger` | `#f28b82` | Error · destructive |
| `--ui-info` | `#60a5fa` | Informational |

Each has `--ui-*-bg` (12% opacity) and `--ui-*-border` (25% opacity) variants.

### Motion

| Token | Value | Use |
|---|---|---|
| `--ui-ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Entrances, dock hover, drawer open |
| `--ui-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Backdrop fade, card appear |
| `--ui-ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover colors, borders, toggle |
| `--ui-ease-linear` | `linear` | **Spinner ONLY — never elsewhere** |
| `--ui-dur-instant` | `60ms` | Micro-feedback |
| `--ui-dur-fast` | `110ms` | Hover transitions |
| `--ui-dur-base` | `190ms` | Standard state changes |
| `--ui-dur-slow` | `320ms` | Theme transitions |
| `--ui-dur-drawer` | `370ms` | Drawer spring |
| `--ui-dur-page` | `420ms` | Page transitions |

### Radius

```
--ui-r-xs: 3px   --ui-r-sm: 5px   --ui-r-md: 7px
--ui-r-lg: 10px  --ui-r-xl: 13px  --ui-r-2xl: 18px  --ui-r-pill: 999px
```

### Z-index Orbital Stack

```
Core(1) → Raised(10) → Toolbars(20) → Drawers(30) → Dock(40) → Tooltips(50) → Modals(60)
```

### Typography

Three fonts, distinct roles — never swap them:

- `--ui-font-serif` → **DM Serif Display** — display titles, section headers with `<em>`
- `--ui-font-sans`  → **DM Sans** — all UI body text (weights 300–600)
- `--ui-font-mono`  → **DM Mono** — data, status, values, code, labels, command segments

Type scale tokens: `--ui-text-2xs` (9.5px) · `--ui-text-xs` (10.5px) · `--ui-text-sm` (11.5px) · `--ui-text-base` (13px) · `--ui-text-md` (14px) · `--ui-text-lg` (16px) · `--ui-text-xl` (20px) · `--ui-text-2xl` (26px) · `--ui-text-3xl` (34px) · `--ui-text-4xl` (44px)

---

## Brand Presets

Apply via class on `<html>`. Full CSS in `references/brands.md`.

| Class | Primary | Secondary | Dark surfaces |
|---|---|---|---|
| `brand-plasma-core` | `#22d3ee` cyan | `#a855f7` violet | `#050505` → `#323232` pure grey |
| `brand-oxidized-gold` | `#f59e0b` amber | `#fbbf24` gold | `#11100d` → `#312d27` warm |
| `brand-violet-reaction` | `#a855f7` purple | `#e11d48` crimson | `#0e0d12` → `#2e2936` purple tint |
| `brand-coolant-liquid` | `#06b6d4` cyan | `#2dd4bf` teal | `#080b0c` → `#333c40` cool tint |
| `brand-critical-mass` | `#ef4444` scarlet | `#991b1b` deep red | `#120c0d` → `#352a2c` red tint |

**Brand slot variables** (the only vars a brand must define):

```css
--brand-primary         /* base action color */
--brand-primary-text    /* accessible text on primary bg */
--brand-primary-light   /* tinted text on dark surfaces */
--brand-primary-bg      /* ~12% opacity fill */
--brand-primary-border  /* ~25% opacity borders */
--brand-primary-glow    /* ~18% opacity glow */
--brand-secondary
--brand-secondary-bg
--brand-secondary-border
--brand-gradient        /* linear-gradient(135deg, primary, secondary) */
--brand-surface-0 through --brand-surface-6
--brand-surface-light-0 through --brand-surface-light-6
```

---

## Component Patterns

### Cards & Surfaces

```css
.surface-card {
  background: var(--ui-surface-3);
  border-top:    1px solid var(--ui-border-top-highlight);
  border-left:   1px solid var(--ui-border-default);
  border-right:  1px solid var(--ui-border-default);
  border-bottom: 1px solid var(--ui-border-bottom-shadow);
  border-radius: var(--ui-r-md);
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);
}
.surface-card:hover {
  border-color: var(--ui-border-hover);
  background: var(--ui-surface-4);
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm), var(--ui-inset-micro);
  /* NO transform: translateY() */
}
```

### Buttons

```css
.btn {
  background: var(--ui-surface-2);
  border: 1.5px solid var(--ui-border-default);
  border-radius: var(--ui-r-sm);
  font-family: var(--ui-font-mono);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);
}
.btn:hover {
  background: var(--ui-surface-3);
  border-color: var(--ui-border-hover);
  box-shadow: var(--ui-edge-light-strong), var(--ui-shadow-md);
  transform: translateY(-1px);  /* rise on hover only, NOT on press */
}
.btn:active {
  background: var(--ui-surface-4);
  box-shadow: var(--ui-inset-shallow);
  transform: translateY(0);  /* NO translateY for press — inset only */
}
.btn.primary {
  background: var(--ui-accent-primary);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 70%);
  border-color: var(--ui-accent-primary-border);
  color: var(--brand-primary-text, #ffffff);
}
```

### Inputs (They Are Wells, Not Boxes)

```css
.gd-input-wrap {
  background: rgba(0,0,0,0.15);          /* darker than surrounding surface */
  border: 1px solid var(--ui-border-default);
  border-radius: var(--ui-r-md);         /* NOT --ui-r-lg */
  box-shadow: var(--ui-inset-shallow);   /* already sunken by default */
}
.gd-input-wrap:focus-within {
  border-color: var(--ui-accent-primary-border);
  box-shadow: var(--ui-inset-well), 0 0 0 2px var(--ui-accent-primary-bg);
}
```

### Chat Bubbles

```css
.bubble-ai {
  background: var(--ui-surface-3);
  border: 1px solid var(--ui-border-default);
  color: var(--ui-text-primary);
  border-radius: var(--ui-r-xs) var(--ui-r-lg) var(--ui-r-lg) var(--ui-r-lg);
  /* NO box-shadow on bubbles */
}
.bubble-user {
  background: var(--ui-surface-4);
  border: 1px solid var(--ui-border-hover);
  color: var(--ui-text-primary);
  border-radius: var(--ui-r-lg) var(--ui-r-xs) var(--ui-r-lg) var(--ui-r-lg);
  /* NO accent color tint — user bubble is NOT branded */
}
```

### Command Bar

```css
.command-bar {
  height: 38px;
  background: var(--ui-surface-1);
  border: 1px solid var(--ui-border-subtle);
  border-radius: var(--ui-r-xl);
  box-shadow: var(--ui-edge-light), var(--ui-inset-micro);
}
/* Segments use DM Mono, 10.5px, uppercase */
/* Active segment: surface-3 bg + inset-shallow + border-default */
```

### Dock

```css
.dock {
  background: var(--ui-surface-1);
  border: 1px solid var(--ui-border-default);
}
.dock-floating {
  border-radius: var(--ui-r-2xl);
  box-shadow: var(--ui-edge-light), var(--ui-shadow-dock), var(--ui-inset-micro);
}
.dock-btn:hover {
  transform: scale(1.08);
  transition: transform var(--ui-dur-fast) var(--ui-ease-spring);
  /* Never translateY on dock buttons */
}
.dock-btn.active {
  background: var(--ui-accent-primary-bg);
  color: var(--ui-accent-primary-light);
  box-shadow: var(--ui-inset-shallow);
  /* Active indicator: 2px bar on edge (::after), NOT a glow ring */
}
```

### Sidebar

```css
.sidebar-link.active {
  background: var(--ui-surface-3);
  color: var(--brand-primary);
  border-left: 2px solid var(--brand-primary);
  padding-left: 8px;   /* compensate border width — text doesn't jump */
  box-shadow: var(--ui-edge-light), var(--ui-inset-shallow);
  /* NO transform: translateX() */
}
```

### Drawer

```css
.drawer-preview {
  background: var(--ui-surface-4);
  border-radius: var(--ui-r-xl) var(--ui-r-xl) 0 0;
  box-shadow: var(--ui-edge-light), var(--ui-shadow-lg);
  /* Opens with: transition: transform var(--ui-dur-drawer) var(--ui-ease-spring) */
  /* NO backdrop-filter: blur() */
}
```

### Status & Labels

```css
/* Pills — use DM Mono, border-radius: pill */
.pill.primary   { background: var(--ui-accent-primary-bg);  color: var(--ui-accent-primary-light);  border-color: var(--ui-accent-primary-border); }
.pill.success   { background: var(--ui-success-bg);          color: var(--ui-success-light);         border-color: var(--ui-success-border); }
.pill.warning   { background: var(--ui-warning-bg);          color: var(--ui-warning);               border-color: var(--ui-warning-border); }
.pill.danger    { background: var(--ui-danger-bg);           color: var(--ui-danger);                border-color: var(--ui-danger-border); }
.pill.neutral   { background: rgba(255,255,255,0.05);        color: var(--ui-text-tertiary);         border-color: var(--ui-border-default); }

/* Status dot: 6px circle */
.sdot.on   { background: var(--ui-success); box-shadow: 0 0 5px rgba(52,168,83,0.5); }
.sdot.warn { background: var(--ui-warning); }
.sdot.err  { background: var(--ui-danger); }
.sdot.off  { background: var(--ui-text-tertiary); }
```

### Info Boxes

```css
/* rule-box  → border: 1px solid border-default,  strong = brand-primary */
/* warn-box  → border: 1.5px solid warning-border, strong = ui-warning */
/* error-box → border: 2.5px solid danger-border,  box-shadow: inset-deep */
/* note-box  → border-left: 3px solid accent-secondary, bg: accent-secondary-bg */
```

---

## Orbital Layout

```
┌──────────────────────────────────────────────────┐
│  OUTER ORBIT: Command Bar (top) z:20-40          │
├────────────┬─────────────────────────────────────┤
│ INNER ORBIT│         THE CORE (75% min)          │
│  Sidebar   │    Main canvas · surface-0          │
│  surface-1 │    Content always wins              │
│  max 280px │                                     │
├────────────┴──────────────┬──────────────────────┤
│     DRAWER (bottom)       │   DOCK (floating)    │
│  spring · surface-4       │   right/left/bottom  │
└───────────────────────────┴──────────────────────┘
```

Side panels: never exceed 280px or 25% of viewport.

---

## Background Pattern

```css
body {
  background: var(--ui-surface-0);
  background-image: radial-gradient(rgba(255,255,255,0.055) 0.75px, transparent 0.75px);
  background-size: 20px 20px;
  background-attachment: fixed;
}
[data-theme="light"] body {
  background-image: radial-gradient(rgba(0,0,0,0.06) 0.75px, transparent 0.75px);
}
```

---

## TUI Mode

When building TUI/terminal mockups:

- Box-drawing chars: `┌ ─ ┐ ├ ┤ └ ┘ │ ┣ ┗ ┃`
- Density: `░ ▒ ▓ █`
- Status bar: inverted (brand-primary bg, surface-0 text), ALL CAPS, DM Mono
- **No gradients, no shadows, no border-radius in TUI**
- Motion = character reveals, progress bar fills

Layout archetypes:
- **TYPE_A (Command Station):** 25% sidebar / 75% main / 2-line status — chat/editors
- **TYPE_B (Telemetry Dashboard):** Quad-grid + global header — monitoring
- **TYPE_C (Focused Utility):** Centered + logo art + prompt — single-purpose tools

Full TUI spec: `references/tui.md`

---

## Implementation Checklist

Before submitting any component:

- [ ] All colours via CSS custom properties — no hardcoded hex
- [ ] Surface depth: deeper container = lower surface number
- [ ] Triple stack on every elevated element: `edge-light + shadow-* + inset-*`
- [ ] Asymmetric card borders: top highlight, bottom shadow
- [ ] Inputs darker than surrounding surface + `inset-shallow` default
- [ ] Button hover = `translateY(-1px)` — Button press = `inset-shallow` only, `translateY(0)`
- [ ] Dock hover = `scale(1.08)` spring — Dock active = `inset-shallow` + edge bar
- [ ] Sidebar active = left border, compensated padding — no `translateX`
- [ ] Semantic colors for meaning only (success ≠ decoration)
- [ ] Spring for entrances, ease-out for fades, default for hover states
- [ ] DM Mono for all status / data / code / label text
- [ ] Background dot pattern: `0.75px` dots, `20px 20px` grid
- [ ] No `backdrop-filter: blur()` anywhere
- [ ] Chat bubbles: no shadow, no accent tint — surface tokens only

---

## Grounding Rules — No Hallucinated API

**These rules are non-negotiable. Violating them produces code that silently breaks at runtime.**

### Rule 1 — Only use names that exist in this document

If a token, class, prop, or function is not listed here or in `monolith-ui/src/`, it does not exist.

```
❌ var(--ui-surface-elevated)           ✅ var(--ui-surface-4)
❌ var(--ui-shadow-float)               ✅ var(--ui-shadow-dock)
❌ var(--ui-glow-primary)               ✅ 0 0 12px var(--ui-accent-primary-glow)
❌ <Button variant="elevated" glow>     ✅ <button className="btn primary">
❌ <Pill size="lg" accent>              ✅ <span className="pill primary">
```

### Rule 2 — Copy token names exactly, never paraphrase

```
❌ --ui-borders-default    ✅ --ui-border-default
❌ --ui-surface-bg-1       ✅ --ui-surface-1
❌ --brand-primary-color   ✅ --brand-primary
❌ --ui-shadow-subtle      ✅ --ui-shadow-sm
❌ --ui-ease-bouncy        ✅ --ui-ease-spring
❌ --ui-dur-normal         ✅ --ui-dur-base
```

### Rule 3 — When uncertain, declare it and fall back

If a needed token isn't confirmed in this document:
1. State it is not confirmed
2. Use the nearest real equivalent
3. Never fill the gap silently with an invented name

### Rule 4 — Complete confirmed token inventory

Any `--ui-*` token not in this table does not exist in the system:

| Group | Confirmed tokens |
|---|---|
| Surfaces | `--ui-surface-0` – `--ui-surface-6`, `--ui-surface-terminal` |
| Borders | `--ui-border-subtle` `--ui-border-default` `--ui-border-hover` `--ui-border-active` `--ui-border-top-highlight` `--ui-border-bottom-shadow` |
| Insets | `--ui-inset-micro` `--ui-inset-shallow` `--ui-inset-deep` `--ui-inset-well` |
| Edge | `--ui-edge-light` `--ui-edge-light-strong` |
| Shadows | `--ui-shadow-sm` `--ui-shadow-md` `--ui-shadow-lg` `--ui-shadow-dock` `--ui-shadow-drawer` |
| Glow | `--ui-glow-subtle` |
| Text | `--ui-text-primary` `--ui-text-secondary` `--ui-text-tertiary` `--ui-text-disabled` |
| Accent primary | `--ui-accent-primary` `--ui-accent-primary-text` `--ui-accent-primary-light` `--ui-accent-primary-bg` `--ui-accent-primary-border` `--ui-accent-primary-glow` |
| Accent secondary | `--ui-accent-secondary` `--ui-accent-secondary-bg` `--ui-accent-secondary-border` |
| Semantic | `--ui-success` `--ui-success-light` `--ui-success-bg` `--ui-success-border` `--ui-warning` `--ui-warning-bg` `--ui-warning-border` `--ui-danger` `--ui-danger-bg` `--ui-danger-border` `--ui-info` `--ui-info-bg` `--ui-info-border` |
| Gradient | `--ui-gradient-primary` |
| Typography | `--ui-font-sans` `--ui-font-mono` `--ui-font-serif` |
| Type scale | `--ui-text-2xs` `--ui-text-xs` `--ui-text-sm` `--ui-text-base` `--ui-text-md` `--ui-text-lg` `--ui-text-xl` `--ui-text-2xl` `--ui-text-3xl` `--ui-text-4xl` |
| Leading | `--ui-leading-tight` `--ui-leading-base` `--ui-leading-loose` |
| Spacing | `--ui-sp-1` `--ui-sp-2` `--ui-sp-3` `--ui-sp-4` `--ui-sp-5` `--ui-sp-6` `--ui-sp-8` `--ui-sp-10` `--ui-sp-12` |
| Radius | `--ui-r-xs` `--ui-r-sm` `--ui-r-md` `--ui-r-lg` `--ui-r-xl` `--ui-r-2xl` `--ui-r-pill` |
| Easing | `--ui-ease-spring` `--ui-ease-out` `--ui-ease-in` `--ui-ease-default` `--ui-ease-linear` |
| Duration | `--ui-dur-instant` `--ui-dur-fast` `--ui-dur-base` `--ui-dur-slow` `--ui-dur-drawer` `--ui-dur-page` |
| Z-index | `--ui-z-base` `--ui-z-raised` `--ui-z-sticky` `--ui-z-drawer` `--ui-z-dock` `--ui-z-tooltip` `--ui-z-modal` |
| Brand slots | `--brand-primary` `--brand-primary-text` `--brand-primary-light` `--brand-primary-bg` `--brand-primary-border` `--brand-primary-glow` `--brand-secondary` `--brand-secondary-bg` `--brand-secondary-border` `--brand-gradient` `--brand-font-sans` `--brand-font-mono` `--brand-font-serif` `--brand-surface-0`–`6` `--brand-surface-light-0`–`6` |

---

## Reference Files

- `references/tokens.md` — Complete CSS variable reference with all values
- `references/brands.md` — Full CSS for all 5 brand presets
- `references/tui.md` — TUI spec, box-drawing guide, layout archetypes
