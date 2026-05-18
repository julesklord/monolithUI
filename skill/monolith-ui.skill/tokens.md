# MonolithUI — Complete Token Reference (v2.1 — Depth Refactor)

## Surface Ramp

Progresión logarítmica — el salto entre cada nivel es visible a simple vista.

| Token | Dark | Light (Hormigón) | Usage |
|---|---|---|---|
| `--ui-surface-0` | #060608 | #bcc0c9 | Deepest: dock bg, modal backdrop |
| `--ui-surface-1` | #0c0e12 | #c5c9d2 | Command bar, nav, sidebar |
| `--ui-surface-2` | #131720 | #ced3db | Secondary panels, tab bars |
| `--ui-surface-3` | #1c2130 | #d7dce4 | Root canvas background |
| `--ui-surface-4` | #252a3a | #e0e4eb | Cards, drawers, main canvas |
| `--ui-surface-5` | #2e3445 | #e9ecf2 | Hover states, elevated cards |
| `--ui-surface-6` | #3a4055 | #f2f5f9 | Active hover, border-adjacent |

Enable light: `data-theme="light"` on `<html>`.

## Borders

```css
/* Dark */
--ui-border-subtle:  rgba(255,255,255,0.06)
--ui-border-default: rgba(255,255,255,0.12)
--ui-border-hover:   rgba(255,255,255,0.22)
--ui-border-active:  var(--ui-accent-primary-border)

/* Asymmetric (use explicit border-top/border-bottom) */
--ui-border-top-highlight: rgba(255,255,255,0.09)   /* lighter top edge */
--ui-border-bottom-shadow: rgba(0,0,0,0.25)         /* heavier bottom edge */
```

Light theme:
```css
--ui-border-subtle:  rgba(0,0,0,0.08)
--ui-border-default: rgba(0,0,0,0.18)
--ui-border-hover:   rgba(0,0,0,0.28)
--ui-border-active:  rgba(0,0,0,0.40)
```

## Text

```css
--ui-text-primary:   rgba(255,255,255,0.92)
--ui-text-secondary: rgba(255,255,255,0.65)
--ui-text-tertiary:  rgba(255,255,255,0.40)
--ui-text-disabled:  rgba(255,255,255,0.20)
```

Light:
```css
--ui-text-primary:   rgba(0,0,0,0.95)
--ui-text-secondary: rgba(0,0,0,0.78)
--ui-text-tertiary:  rgba(0,0,0,0.55)
--ui-text-disabled:  rgba(0,0,0,0.35)
```

## Tactile Depth (Skeuomorfismo Moderno)

The signature of this design system. Applied via the Triple Stack pattern.

```css
/* Interior shadows — give material texture without realism */
--ui-inset-micro:   inset 0 1px 1px rgba(0,0,0,0.15)
--ui-inset-shallow: inset 0 1px 3px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(0,0,0,0.08)
--ui-inset-deep:    inset 0 2px 6px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(0,0,0,0.15)
--ui-inset-well:    inset 0 3px 10px rgba(0,0,0,0.50), inset 0 1px 3px rgba(0,0,0,0.25)
```

Usage guide:
- `inset-micro` — hover state of cards, container walls
- `inset-shallow` — pressed buttons, active sidebar links, active dock buttons
- `inset-deep` — deeply pressed primary actions, error states
- `inset-well` — text inputs on focus, drop targets, textareas

Light theme overrides:
```css
--ui-inset-shallow: inset 0 1px 2px rgba(0,0,0,0.10)
--ui-inset-deep:    inset 0 2px 5px rgba(0,0,0,0.18)
--ui-inset-well:    inset 0 3px 8px rgba(0,0,0,0.22)
```

## Edge Highlights

Simulates the top-edge illumination of a physical surface. Subtle — never obvious.

```css
--ui-edge-light:        inset 0 1px 0 rgba(255,255,255,0.06)
--ui-edge-light-strong: inset 0 1px 0 rgba(255,255,255,0.10)
```

Light theme:
```css
--ui-edge-light:        inset 0 1px 0 rgba(255,255,255,0.60)
--ui-edge-light-strong: inset 0 1px 0 rgba(255,255,255,0.80)
```

## Elevation Shadows

Extensive spread, very low opacity. Elements anchor to the surface — never float.

```css
--ui-shadow-sm:     0 2px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)
--ui-shadow-md:     0 4px 48px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)
--ui-shadow-lg:     0 8px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)
--ui-shadow-dock:   0 6px 64px rgba(0,0,0,0.20), 0 2px 12px rgba(0,0,0,0.10)
--ui-shadow-drawer: 0 -6px 48px rgba(0,0,0,0.16)
```

Light theme:
```css
--ui-shadow-sm: 0 2px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)
--ui-shadow-md: 0 4px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)
```

## The Triple Stack Pattern

Every elevated or interactive element uses this composition:

```css
/* Formula */
box-shadow: var(--ui-edge-light), var(--ui-shadow-SIZE), [var(--ui-inset-LEVEL)];

/* Examples */
/* Surface card default */
box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);

/* Surface card hover */
box-shadow: var(--ui-edge-light), var(--ui-shadow-sm), var(--ui-inset-micro);

/* Button default */
box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);

/* Button hover */
box-shadow: var(--ui-edge-light-strong), var(--ui-shadow-md);

/* Button active / pressed */
box-shadow: var(--ui-inset-shallow);  /* edge-light intentionally removed — it's pressed */

/* Dock floating */
box-shadow: var(--ui-edge-light), var(--ui-shadow-dock), var(--ui-inset-micro);

/* Dock button active */
box-shadow: var(--ui-inset-shallow);

/* Input default */
box-shadow: var(--ui-inset-shallow);

/* Input focus */
box-shadow: var(--ui-inset-well), 0 0 0 2px var(--ui-accent-primary-bg);
```

## Brand Accent Slots

```css
--ui-accent-primary:        var(--brand-primary)
--ui-accent-primary-text:   var(--brand-primary-text)
--ui-accent-primary-light:  var(--brand-primary-light)
--ui-accent-primary-bg:     var(--brand-primary-bg)
--ui-accent-primary-border: var(--brand-primary-border)
--ui-accent-primary-glow:   var(--brand-primary-glow)

--ui-accent-secondary:        var(--brand-secondary)
--ui-accent-secondary-bg:     var(--brand-secondary-bg)
--ui-accent-secondary-border: var(--brand-secondary-border)
```

## Semantic Colors (Fixed — Never Override)

```css
--ui-success:        #34a853
--ui-success-light:  #81c995
--ui-success-bg:     rgba(52,168,83,0.12)
--ui-success-border: rgba(52,168,83,0.25)

--ui-warning:        #fbbf24
--ui-warning-bg:     rgba(251,191,36,0.10)
--ui-warning-border: rgba(251,191,36,0.22)

--ui-danger:         #f28b82
--ui-danger-bg:      rgba(242,139,130,0.12)
--ui-danger-border:  rgba(242,139,130,0.25)

--ui-info:           #60a5fa
--ui-info-bg:        rgba(96,165,250,0.12)
--ui-info-border:    rgba(96,165,250,0.25)
```

## Typography

```css
--ui-font-sans:  var(--brand-font-sans,  'DM Sans', system-ui, sans-serif)
--ui-font-mono:  var(--brand-font-mono,  'DM Mono', 'Fira Code', monospace)
--ui-font-serif: var(--brand-font-serif, 'DM Serif Display', Georgia, serif)
```

### Type Scale
```css
--ui-text-2xs:  9.5px   /* badges, timestamps */
--ui-text-xs:  10.5px   /* command segments, sidebar links, tags */
--ui-text-sm:  11.5px   /* session meta, mono values */
--ui-text-base: 13px    /* chat messages, card content */
--ui-text-md:   14px    /* drawer titles, button text */
--ui-text-lg:   16px    /* section titles */
--ui-text-xl:   20px    /* hero subtitles */
--ui-text-2xl:  26px    /* page titles */
--ui-text-3xl:  34px    /* display serif */
```

### Line Heights
```css
--ui-leading-tight: 1.3
--ui-leading-base:  1.55
--ui-leading-loose: 1.75
```

## Radius Scale (Sanded Industrial)

```css
--ui-r-xs:   3px    /* micro-keys, tags */
--ui-r-sm:   4px    /* sidebar links, segments */
--ui-r-md:   6px    /* standard buttons, cards, inputs */
--ui-r-lg:   8px    /* containers, large panels */
--ui-r-xl:   12px   /* main canvas corners, command bar */
--ui-r-pill: 999px  /* status indicators, pills */
```

## Motion (Mechanical Resistance)

```css
--ui-ease-spring:  cubic-bezier(0.2, 1, 0.3, 1)
--ui-ease-out:     cubic-bezier(0.16, 1, 0.3, 1)
--ui-ease-default: cubic-bezier(0.4, 0, 0.2, 1)
--ui-ease-linear:  linear   /* spinner ONLY */

--ui-dur-instant: 60ms
--ui-dur-fast:   160ms
--ui-dur-base:   240ms
--ui-dur-slow:   380ms
--ui-dur-drawer: 370ms
--ui-dur-page:   420ms
```

## Z-Index (Orbital Stack)

```css
--ui-z-base:    1    /* The Core */
--ui-z-raised:  10
--ui-z-sticky:  20   /* Inner Orbit — toolbars */
--ui-z-drawer:  30
--ui-z-dock:    40   /* Outer Orbit — global nav */
--ui-z-tooltip: 50
--ui-z-modal:   60   /* Deep Space */
```

## Spacing Scale

```css
--ui-sp-1: 4px   --ui-sp-2: 8px   --ui-sp-3: 12px
--ui-sp-4: 16px  --ui-sp-5: 20px  --ui-sp-6: 24px
--ui-sp-8: 32px  --ui-sp-10: 40px --ui-sp-12: 48px
```

## Brand Slot Contract

```css
.brand-myapp {
  --brand-primary:        #HEX;
  --brand-primary-text:   #fff or #000;
  --brand-primary-light:  #HEX;
  --brand-primary-bg:     rgba(R,G,B,0.12);
  --brand-primary-border: rgba(R,G,B,0.25);
  --brand-primary-glow:   rgba(R,G,B,0.18);
  --brand-secondary:      #HEX;
  --brand-secondary-bg:   rgba(R,G,B,0.12);
  --brand-gradient:       linear-gradient(135deg, #PRIMARY, #SECONDARY);
  /* optional surface tint overrides */
  --brand-surface-0 through --brand-surface-6: #HEX each;
}
```

Apply to `<html class="brand-myapp">`.
