# MonolithUI — Brand Presets (Full CSS)

Apply a preset by adding the class to `<html>` or `<body>`.
Source of truth: `index.css`. This file is the portable reference copy.

---

## 1. PLASMA_CORE (Default Master)

Electric Cyan + Violet. Pure neutral surfaces — no color tint.

```css
.brand-plasma-core {
  --brand-primary:        #22d3ee;
  --brand-primary-text:   #0a0a0a;
  --brand-primary-light:  #67e8f9;
  --brand-primary-bg:     rgba(34, 211, 238, 0.12);
  --brand-primary-border: rgba(34, 211, 238, 0.30);
  --brand-primary-glow:   rgba(34, 211, 238, 0.20);
  --brand-secondary:      #a855f7;
  --brand-secondary-bg:   rgba(168, 85, 247, 0.12);
  --brand-secondary-border: rgba(168, 85, 247, 0.22);
  --brand-gradient:       linear-gradient(135deg, #22d3ee, #a855f7);

  --brand-surface-0: #050505; --brand-surface-1: #0a0a0a;
  --brand-surface-2: #111111; --brand-surface-3: #181818;
  --brand-surface-4: #202020; --brand-surface-5: #282828;
  --brand-surface-6: #323232;

  --brand-surface-light-0: #f8f8f8; --brand-surface-light-1: #f0f0f0;
  --brand-surface-light-2: #e8e8e8; --brand-surface-light-3: #ffffff;
  --brand-surface-light-4: #fafafa; --brand-surface-light-5: #f2f2f2;
  --brand-surface-light-6: #e8e8e8;
}
```

TUI truecolor: `Color::Rgb(34, 211, 238)` / `Color::Rgb(168, 85, 247)`

---

## 2. OXIDIZED_GOLD

Amber yellow. Warm tech. Slight brown surface tint.

```css
.brand-oxidized-gold {
  --brand-primary:        #f59e0b;
  --brand-primary-text:   #451a03;
  --brand-primary-light:  #fbbf24;
  --brand-primary-bg:     rgba(245, 158, 11, 0.12);
  --brand-primary-border: rgba(245, 158, 11, 0.25);
  --brand-primary-glow:   rgba(245, 158, 11, 0.18);
  --brand-secondary:      #fbbf24;
  --brand-secondary-bg:   rgba(251, 191, 36, 0.12);
  --brand-secondary-border: rgba(251, 191, 36, 0.22);
  --brand-gradient:       linear-gradient(135deg, #f59e0b, #fbbf24);

  --brand-surface-0: #11100d; --brand-surface-1: #161511;
  --brand-surface-2: #1b1915; --brand-surface-3: #1f1d19;
  --brand-surface-4: #25221d; --brand-surface-5: #2a2722;
  --brand-surface-6: #312d27;

  --brand-surface-light-0: #f5f3f0; --brand-surface-light-1: #ebe9e5;
  --brand-surface-light-2: #e2e0db; --brand-surface-light-3: #ffffff;
  --brand-surface-light-4: #fbfaf8; --brand-surface-light-5: #f4f2ee;
  --brand-surface-light-6: #ebe9e5;
}

[data-theme="light"].brand-oxidized-gold {
  --brand-primary:        #b45309;
  --brand-primary-bg:     rgba(245, 158, 11, 0.20);
  --brand-primary-border: rgba(245, 158, 11, 0.35);
}
```

TUI truecolor: `Color::Rgb(245, 158, 11)`

---

## 3. VIOLET_REACTION

Purple + Crimson. High-energy industrial violet.

```css
.brand-violet-reaction {
  --brand-primary:        #a855f7;
  --brand-primary-text:   #ffffff;
  --brand-primary-light:  #c084fc;
  --brand-primary-bg:     rgba(168, 85, 247, 0.12);
  --brand-primary-border: rgba(168, 85, 247, 0.25);
  --brand-primary-glow:   rgba(168, 85, 247, 0.18);
  --brand-secondary:      #e11d48;
  --brand-secondary-bg:   rgba(225, 29, 72, 0.12);
  --brand-secondary-border: rgba(225, 29, 72, 0.22);
  --brand-gradient:       linear-gradient(135deg, #a855f7, #e11d48);

  --brand-surface-0: #0e0d12; --brand-surface-1: #131118;
  --brand-surface-2: #18151d; --brand-surface-3: #1c1922;
  --brand-surface-4: #211e28; --brand-surface-5: #27232e;
  --brand-surface-6: #2e2936;

  --brand-surface-light-0: #f3f0f5; --brand-surface-light-1: #e9e6ec;
  --brand-surface-light-2: #dfdbe4; --brand-surface-light-3: #ffffff;
  --brand-surface-light-4: #f9f7fa; --brand-surface-light-5: #f2eff4;
  --brand-surface-light-6: #e9e6ec;
}

[data-theme="light"].brand-violet-reaction {
  --brand-primary:        #9333ea;
  --brand-primary-bg:     rgba(168, 85, 247, 0.15);
}
```

TUI truecolor: `Color::Rgb(168, 85, 247)`

---

## 4. COOLANT_LIQUID

Cyan + Teal. Clean industrial coolant. Uses neutral surfaces.

```css
.brand-coolant-liquid {
  --brand-primary:        #06b6d4;
  --brand-primary-text:   #083344;
  --brand-primary-light:  #22d3ee;
  --brand-primary-bg:     rgba(6, 182, 212, 0.12);
  --brand-primary-border: rgba(6, 182, 212, 0.25);
  --brand-primary-glow:   rgba(6, 182, 212, 0.18);
  --brand-secondary:      #2dd4bf;
  --brand-secondary-bg:   rgba(45, 212, 191, 0.12);
  --brand-secondary-border: rgba(45, 212, 191, 0.22);
  --brand-gradient:       linear-gradient(135deg, #06b6d4, #2dd4bf);
  /* No surface overrides — uses default neutral ramp */
}

[data-theme="light"].brand-coolant-liquid {
  --brand-primary:        #0891b2;
  --brand-primary-bg:     rgba(6, 182, 212, 0.20);
  --brand-primary-border: rgba(6, 182, 212, 0.35);
}
```

TUI truecolor: `Color::Rgb(6, 182, 212)`

---

## 5. CRITICAL_MASS

Scarlet Red. High-stress thermal warning.

```css
.brand-critical-mass {
  --brand-primary:        #ef4444;
  --brand-primary-text:   #ffffff;
  --brand-primary-light:  #f87171;
  --brand-primary-bg:     rgba(239, 68, 68, 0.12);
  --brand-primary-border: rgba(239, 68, 68, 0.25);
  --brand-primary-glow:   rgba(239, 68, 68, 0.18);
  --brand-secondary:      #991b1b;
  --brand-secondary-bg:   rgba(153, 27, 27, 0.12);
  --brand-secondary-border: rgba(153, 27, 27, 0.22);
  --brand-gradient:       linear-gradient(135deg, #ef4444, #991b1b);

  --brand-surface-0: #120c0d; --brand-surface-1: #181112;
  --brand-surface-2: #1c1516; --brand-surface-3: #22191a;
  --brand-surface-4: #281e20; --brand-surface-5: #2e2325;
  --brand-surface-6: #352a2c;

  --brand-surface-light-0: #f5f0f0; --brand-surface-light-1: #ebe5e5;
  --brand-surface-light-2: #e2dbdb; --brand-surface-light-3: #ffffff;
  --brand-surface-light-4: #fbf7f7; --brand-surface-light-5: #f4efef;
  --brand-surface-light-6: #ebe5e5;
}

[data-theme="light"].brand-critical-mass {
  --brand-primary:        #dc2626;
  --brand-primary-bg:     rgba(239, 68, 68, 0.15);
}
```

TUI truecolor: `Color::Rgb(239, 68, 68)`

---

## Creating a New Brand

```css
.brand-myapp {
  /* Required — 9 vars minimum */
  --brand-primary:          #YOUR_HEX;
  --brand-primary-text:     #fff;               /* or #000 for dark-on-light */
  --brand-primary-light:    #YOUR_LIGHTER;
  --brand-primary-bg:       rgba(R,G,B,0.12);
  --brand-primary-border:   rgba(R,G,B,0.25);
  --brand-primary-glow:     rgba(R,G,B,0.18);
  --brand-secondary:        #YOUR_COMPLEMENT;
  --brand-secondary-bg:     rgba(R2,G2,B2,0.12);
  --brand-gradient:         linear-gradient(135deg, #PRIMARY, #SECONDARY);

  /* Optional — tinted surfaces (omit for neutral default) */
  --brand-surface-0: #HEX; /* darkest */
  /* ... through ... */
  --brand-surface-6: #HEX; /* lightest */

  /* Optional — font overrides */
  --brand-font-sans: 'YourFont', system-ui, sans-serif;
  --brand-font-mono: 'YourMono', monospace;
}

/* Always add light theme contrast fix */
[data-theme="light"].brand-myapp {
  --brand-primary:        #DARKER_HEX;
  --brand-primary-bg:     rgba(R,G,B,0.20);
  --brand-primary-border: rgba(R,G,B,0.35);
}
```

Apply: `<html class="brand-myapp">` or `<body class="brand-myapp">`.
