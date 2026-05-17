# MonolithUI — Complete Token Reference

## Surface Ramp

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--ui-surface-0` | #0a0c10 | #f0f2f5 | Deepest: dock bg, modal backdrop |
| `--ui-surface-1` | #0f1218 | #e8eaed | Command bar, nav, sidebar |
| `--ui-surface-2` | #14171f | #e2e5e9 | Secondary panels, tab bars |
| `--ui-surface-3` | #1a1e26 | #ffffff | Root canvas background |
| `--ui-surface-4` | #21252e | #f8f9fa | Cards, drawers, main canvas |
| `--ui-surface-5` | #292e38 | #f1f3f4 | Hover states, elevated cards |
| `--ui-surface-6` | #323845 | #e8eaed | Active hover, border-adjacent |

Enable light: `data-theme="light"` on `<html>`.

## Borders

```css
--ui-border-subtle:  rgba(255,255,255,0.06)
--ui-border-default: rgba(255,255,255,0.12)
--ui-border-hover:   rgba(255,255,255,0.22)
--ui-border-active:  var(--ui-accent-primary-border)
```

Light theme:
```css
--ui-border-subtle:  rgba(0,0,0,0.05)
--ui-border-default: rgba(0,0,0,0.12)
--ui-border-hover:   rgba(0,0,0,0.20)
```

## Text

```css
--ui-text-primary:   rgba(255,255,255,0.92)
--ui-text-secondary: rgba(255,255,255,0.65)
--ui-text-tertiary:  rgba(255,255,255,0.40)
--ui-text-disabled:  rgba(255,255,255,0.20)
```

## Brand Accent Slots

```css
/* Primary family */
--ui-accent-primary:        var(--brand-primary)
--ui-accent-primary-text:   var(--brand-primary-text)   /* text on primary bg */
--ui-accent-primary-light:  var(--brand-primary-light)  /* tint for text on dark */
--ui-accent-primary-bg:     var(--brand-primary-bg)     /* ~12% opacity fill */
--ui-accent-primary-border: var(--brand-primary-border) /* ~25% opacity borders */
--ui-accent-primary-glow:   var(--brand-primary-glow)   /* ~18% opacity glow */

/* Secondary family */
--ui-accent-secondary:        var(--brand-secondary)
--ui-accent-secondary-bg:     var(--brand-secondary-bg)
--ui-accent-secondary-border: var(--brand-secondary-border)
```

## Semantic Colors (Fixed — Never Override)

```css
/* Success */
--ui-success:        #34a853
--ui-success-light:  #81c995
--ui-success-bg:     rgba(52,168,83,0.12)
--ui-success-border: rgba(52,168,83,0.25)

/* Warning */
--ui-warning:        #fbbf24
--ui-warning-bg:     rgba(251,191,36,0.10)
--ui-warning-border: rgba(251,191,36,0.22)

/* Danger */
--ui-danger:         #f28b82
--ui-danger-bg:      rgba(242,139,130,0.12)
--ui-danger-border:  rgba(242,139,130,0.25)

/* Info */
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
--ui-text-2xs: 9.5px   /* badges, timestamps */
--ui-text-xs:  10.5px  /* command segments, sidebar links, tags */
--ui-text-sm:  11.5px  /* session meta, mono values */
--ui-text-base: 13px   /* chat messages, card content */
--ui-text-md:  14px    /* drawer titles, button text */
--ui-text-lg:  16px    /* section titles */
--ui-text-xl:  20px    /* hero subtitles */
--ui-text-2xl: 26px    /* page titles */
--ui-text-3xl: 34px    /* display serif */
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
--ui-r-md:   6px    /* standard buttons, cards */
--ui-r-lg:   8px    /* containers, large panels */
--ui-r-xl:   12px   /* main canvas corners */
--ui-r-pill: 999px  /* status indicators, round badges */
```

## Motion (Mechanical Resistance)

```css
--ui-ease-spring:  cubic-bezier(0.2, 1, 0.3, 1)      /* Precise mechanical */
--ui-ease-out:     cubic-bezier(0.16, 1, 0.3, 1)     /* page tx */
--ui-ease-default: cubic-bezier(0.4, 0, 0.2, 1)      /* hover colors */
--ui-ease-linear:  linear                            /* spinner only */

--ui-dur-instant: 60ms
--ui-dur-fast:    160ms    /* tactile feedback */
--ui-dur-base:    240ms    /* standard movement */
--ui-dur-slow:    380ms    /* surface transitions */
--ui-dur-drawer:  370ms
--ui-dur-page:    420ms
```

## Tactile Depth (2010 Skeuo-Modernism)

```css
--ui-inset-shallow: inset 0 1px 2px rgba(0,0,0,0.2)   /* embossed */
--ui-inset-deep:    inset 0 2px 4px rgba(0,0,0,0.4)   /* engraved */
--ui-glow-subtle:   0 0 8px var(--ui-accent-primary-glow)
```

## Shadows (Elevation)

```css
--ui-shadow-sm:     0 1px 4px rgba(0,0,0,0.3)
--ui-shadow-md:     0 4px 16px rgba(0,0,0,0.4)
--ui-shadow-lg:     0 8px 32px rgba(0,0,0,0.5)
--ui-shadow-dock:   0 4px 28px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.3)
--ui-shadow-drawer: 0 -4px 32px rgba(0,0,0,0.4)
```

## Z-Index (Orbital Stack)

```css
--ui-z-base:    1    /* The Core — main content */
--ui-z-raised:  10   /* raised elements within content */
--ui-z-sticky:  20   /* Inner Orbit — toolbars, sticky nav */
--ui-z-drawer:  30   /* Bottom drawers, slide-out panels */
--ui-z-dock:    40   /* Outer Orbit — global nav, dock */
--ui-z-tooltip: 50   /* Contextual tooltips */
--ui-z-modal:   60   /* Deep Space — modals, urgent overlays */
```

## Spacing Scale

```css
--ui-sp-1: 4px   --ui-sp-2: 8px   --ui-sp-3: 12px
--ui-sp-4: 16px  --ui-sp-5: 20px  --ui-sp-6: 24px
--ui-sp-8: 32px  --ui-sp-10: 40px --ui-sp-12: 48px
```

## Brand Slot Contract (10 vars to rebrand)

```css
.brand-myapp {
  --brand-primary:        #HEX;
  --brand-primary-text:   #fff or #000;   /* contrast on primary bg */
  --brand-primary-light:  #HEX;           /* tinted, for text on dark */
  --brand-primary-bg:     rgba(R,G,B,0.12);
  --brand-primary-border: rgba(R,G,B,0.25);
  --brand-primary-glow:   rgba(R,G,B,0.18);
  --brand-secondary:      #HEX;
  --brand-secondary-bg:   rgba(R,G,B,0.12);
  --brand-gradient:       linear-gradient(135deg, #PRIMARY, #SECONDARY);
  /* optional: */
  --brand-font-sans:      'YourFont', system-ui, sans-serif;
  --brand-font-mono:      'YourMono', monospace;
}
```

Apply to `<html class="brand-myapp">` or `<body class="brand-myapp">`.
