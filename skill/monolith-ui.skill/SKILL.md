---
name: monolith-ui
description: >
  Apply the MonolithUI design system when building React components, HTML artifacts,
  dashboards, CLI/TUI mockups, design system docs, or any UI requiring a dark industrial
  aesthetic with physics-based motion and semantic color tokens. Use this skill whenever
  the user mentions MonolithUI, TropicalUI, FMG design system, or asks to build UI in
  the style Jules uses for his tools (Gemini Station, ducer-cli, poshbuddy, etc.).
  Also trigger for requests like "build a component matching my design system",
  "use my UI style", "dark industrial interface", "orbital layout", "TUI console mockup",
  "brutalista detallado", "skeuomorfismo moderno", or any frontend work in Jules's
  developer ecosystem. Do NOT use for generic Material/Bootstrap/Tailwind UI requests.
targets: [gemini-cli, claude, codex, opencode]
---

# MonolithUI Design System
**Density over decoration. Industrial-grade, brand-agnostic, orbital layout.**

Built on React 19 + TypeScript. Dark by default. Five brand presets. Physics motion.
Skeuomorfismo moderno: sin biseles, con sombras interiores que dan textura sin realismo.

---

## Core Philosophy (Non-Negotiable)

1. **Depth over flat** — 7-step surface ramp with logarithmic progression. Visible difference between every level.
2. **Weight, not float** — Elements anchor via extensive low-opacity shadows. Nothing hovers like a widget.
3. **Inset = tactile** — Pressed states use `inset` box-shadow only. No `transform: translateY()` for press simulation.
4. **Physics, not interpolation** — Spring curve for entrances. `ease-linear` banned except spinners.
5. **Orbital layout** — Content is the sun. Nav/toolbars orbit it. Command bar top, dock side, drawers bottom.
6. **Semantic over decorative** — Green = connected/success ONLY. Never decorate with semantic colors.
7. **Brand-agnostic slots** — ~10 CSS vars rebrand the entire system via `@layer brand`.

---

## The Triple Stack (Core Pattern)

Every elevated element in this system uses this `box-shadow` composition:

```css
box-shadow: var(--ui-edge-light), var(--ui-shadow-*), var(--ui-inset-*);
```

- `--ui-edge-light` — subtle top-edge highlight simulating physical surface curvature
- `--ui-shadow-*` — extensive but low-opacity external shadow for anchoring
- `--ui-inset-*` — interior shadow giving material texture

**Never** use a single `box-shadow` value on interactive or elevated elements.

---

## Token Reference (Critical Subset)

Read `references/tokens.md` for the full spec. Key values:

```css
/* Surfaces (dark default) — logarithmic progression, visible between every level */
--ui-surface-0: #060608   /* deepest: dock bg, modal backdrop */
--ui-surface-1: #0c0e12   /* command bar, nav, sidebar */
--ui-surface-2: #131720   /* secondary panels, tab bars */
--ui-surface-3: #1c2130   /* root canvas background */
--ui-surface-4: #252a3a   /* cards, drawers, main canvas */
--ui-surface-5: #2e3445   /* hover states */
--ui-surface-6: #3a4055   /* active hover, border-adjacent */

/* Tactile depth — the signature of this style */
--ui-inset-micro:   inset 0 1px 1px rgba(0,0,0,0.15)
--ui-inset-shallow: inset 0 1px 3px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(0,0,0,0.08)
--ui-inset-deep:    inset 0 2px 6px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(0,0,0,0.15)
--ui-inset-well:    inset 0 3px 10px rgba(0,0,0,0.50), inset 0 1px 3px rgba(0,0,0,0.25)

/* Edge highlights — simulates top-edge illumination on a physical surface */
--ui-edge-light:        inset 0 1px 0 rgba(255,255,255,0.06)
--ui-edge-light-strong: inset 0 1px 0 rgba(255,255,255,0.10)

/* Shadows — extensive spread, very low opacity */
--ui-shadow-sm:     0 2px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)
--ui-shadow-md:     0 4px 48px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)
--ui-shadow-lg:     0 8px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)
--ui-shadow-dock:   0 6px 64px rgba(0,0,0,0.20), 0 2px 12px rgba(0,0,0,0.10)
--ui-shadow-drawer: 0 -6px 48px rgba(0,0,0,0.16)

/* Border asymmetry — top lighter, bottom heavier */
--ui-border-top-highlight: rgba(255,255,255,0.09)
--ui-border-bottom-shadow: rgba(0,0,0,0.25)

/* Motion */
--ui-ease-spring:  cubic-bezier(0.2, 1, 0.3, 1)   /* entrances, dock hover, drawer */
--ui-ease-out:     cubic-bezier(0.16, 1, 0.3, 1)  /* backdrops, page transitions */
--ui-ease-default: cubic-bezier(0.4, 0, 0.2, 1)   /* hover colors, borders */
--ui-ease-linear:  linear                          /* spinner ONLY — never elsewhere */
--ui-dur-fast:    160ms
--ui-dur-drawer:  370ms

/* Radius — sanded industrial, never sharp */
--ui-r-xs: 3px  --ui-r-sm: 4px  --ui-r-md: 6px
--ui-r-lg: 8px  --ui-r-xl: 12px --ui-r-pill: 999px

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

**5 Built-in Presets:** `brand-plasma-core` (cyan+purple), `brand-oxidized-gold` (amber),
`brand-violet-reaction` (purple+crimson), `brand-coolant-liquid` (cyan+teal), `brand-critical-mass` (scarlet).

See `references/brands.md` for full CSS of each preset.

---

## Typography

Three fonts, distinct roles — never swap them:
- **DM Serif Display** — display moments, section titles with `<em>` italic
- **DM Sans** — all UI body text (weights 300/400/500/600)
- **DM Mono** — data, values, status, code, labels, command segments

Type scale: 9.5px · 10.5px · 11.5px · 13px · 14px · 16px · 20px · 26px · 34px

---

## Component Patterns

### Cards & Surfaces
```css
.surface-card {
  background: var(--ui-surface-4);
  /* Asymmetric borders — physical weight distribution */
  border-top:    1px solid var(--ui-border-top-highlight);
  border-left:   1px solid var(--ui-border-default);
  border-right:  1px solid var(--ui-border-default);
  border-bottom: 1px solid var(--ui-border-bottom-shadow);
  border-radius: var(--ui-r-md);
  /* Triple stack */
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);
}
.surface-card:hover {
  border-color: var(--ui-border-hover);
  /* Add micro inset on hover — card "accepts" the cursor */
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm), var(--ui-inset-micro);
  /* NO transform: translateY() */
}
```

### Buttons — Physics Feedback
```css
.btn {
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);
}
.btn:hover {
  box-shadow: var(--ui-edge-light-strong), var(--ui-shadow-md);
  /* Button rises slightly via shadow expansion, not transform */
}
.btn:active {
  box-shadow: var(--ui-inset-shallow);
  /* Button sinks via inset — NO transform: translateY(1px) */
}
.btn.primary {
  /* Subtle top-face gradient simulates surface curvature */
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, transparent 60%);
}
```

### Inputs — They Are Wells, Not Boxes
```css
.input-wrap {
  background: rgba(0,0,0,0.15);         /* darker than surrounding surface */
  border-radius: var(--ui-r-md);        /* NOT --ui-r-lg — industrial */
  box-shadow: var(--ui-inset-shallow);  /* default: already sunken */
}
.input-wrap:focus-within {
  box-shadow: var(--ui-inset-well), 0 0 0 2px var(--ui-accent-primary-bg);
  border-color: var(--ui-accent-primary-border);
}
```

### Command Bar
```tsx
<CommandBar platform="macos" title="my-tool">
  <CommandBarSegment variant="primary">gemini-2.0-flash</CommandBarSegment>
  <CommandBarDivider />
  <CommandBarSegment variant="success"><StatusDot on /> connected</CommandBarSegment>
  <CommandBarSpacer />
  <CommandBarSegment>v0.5.2</CommandBarSegment>
</CommandBar>
// height: 38px, border-radius: var(--ui-r-xl)
// box-shadow: var(--ui-edge-light), var(--ui-inset-micro)
```

### Status Indicators
```tsx
<StatusDot on />               // green + glow
<StatusDot status="warn" />    // amber
<StatusDot status="err" />     // red
<Pill variant="primary">gemini-2.5</Pill>
<Tag variant="success">trusted</Tag>
```

### Dock
```css
/* Floating dock */
.dock {
  box-shadow: var(--ui-edge-light), var(--ui-shadow-dock), var(--ui-inset-micro);
}
/* Active button — sunken, not highlighted */
.dock-btn.active {
  background: var(--ui-accent-primary-bg);
  box-shadow: var(--ui-inset-shallow);
  /* Active indicator: thin bar on the edge, NOT a glow */
}
/* Hover: spring scale, never translateY */
.dock-btn:hover { transform: scale(1.08); transition: transform 160ms cubic-bezier(0.2,1,0.3,1); }
```

### Drawer (Spring Physics)
```tsx
<Drawer isOpen={open} onClose={() => setOpen(false)} title="Sessions">
  {/* content */}
</Drawer>
// Opens with: transition: transform 370ms cubic-bezier(0.2,1,0.3,1)
// box-shadow: var(--ui-edge-light), var(--ui-shadow-lg)
// NO backdrop-filter blur — industrial, not frosted glass
```

### Sidebar Links
```css
.sidebar-link.active {
  border-left: 2px solid var(--brand-primary);
  padding-left: 8px;  /* compensate border width — text doesn't jump */
  box-shadow: var(--ui-inset-shallow);
  /* NO transform: translateX() */
}
```

### Info Boxes
```css
/* rule-box  = blue info */
/* warn-box  = amber warning */
/* error-box = red danger, thicker border (2.5px), inset-deep */
/* note-box  = secondary accent, left-border only */
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

## Background Pattern

```css
body {
  background: var(--ui-surface-0);
  background-image: radial-gradient(rgba(255,255,255,0.055) 0.75px, transparent 0.75px);
  background-size: 20px 20px;
  background-attachment: fixed;
}
[data-theme="light"] body {
  /* Override explicitly — don't rely on --ui-border-subtle (varies by brand) */
  background-image: radial-gradient(rgba(0,0,0,0.06) 0.75px, transparent 0.75px);
  background-size: 20px 20px;
}
```

---

## TUI (Terminal UI) Mode

When building TUI mockups or Ratatui-style layouts:

- Box-drawing chars: `┌ ─ ┐ ├ ┤ └ ┘ │ ┣ ┗ ┃`
- Density gradients: `░ ▒ ▓ █`
- Status bar: inverted (brand-primary bg, surface-0 text), ALL CAPS, mono
- **No gradients, no shadows, no border-radius in TUI**
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
| Spring | `cubic-bezier(0.2, 1, 0.3, 1)` | Entrances, dock hover, drawer open |
| Ease Out | `cubic-bezier(0.16, 1, 0.3, 1)` | Backdrop fade, card appear |
| Default | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover colors, borders, toggle |
| Linear | `linear` | **AVOID** — spinner only |

Spring overshoot is ~3-4% past target, <100ms. Should be felt, not seen.

---

## Implementation Checklist

When generating any component or UI with this system:

- [ ] Use CSS custom properties (`--ui-*`, `--brand-*`), never hardcode hex
- [ ] Surface depth: deeper containers = lower surface number
- [ ] **Triple stack on every elevated element:** `var(--ui-edge-light), var(--ui-shadow-*), var(--ui-inset-*)`
- [ ] Asymmetric borders on cards: top highlight, bottom shadow
- [ ] Inputs darker than surrounding surface + `inset-shallow` by default
- [ ] Button press = `inset-shallow` only, NO `translateY`
- [ ] Dock hover = `scale(1.08)` spring, active = `inset-shallow`
- [ ] Sidebar active = left border indicator, NO `translateX`
- [ ] Semantic colors for meaning only (green ≠ decoration)
- [ ] Spring for DOM entrances, ease-out for fades, default for hovers
- [ ] DM Mono for all status/data/code/label text
- [ ] Background dot pattern: `0.75px`, `20px 20px` grid
- [ ] No `backdrop-filter: blur()` — industrial, not frosted glass
- [ ] NO `transform: translateY()` for press simulation — inset shadows only

---

## Reference Files

- `references/tokens.md` — Complete CSS variable reference (all tokens + updated depth system)
- `references/tui.md` — TUI spec, box-drawing guide, Ratatui patterns
- `references/brands.md` — All 5 brand preset definitions (full CSS)
