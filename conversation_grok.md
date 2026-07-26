## User

Puedes hacer improve en la consistencia del sistema de diseño y profesionalizarlo para hacerlo usable con cualquier diseño

## Assistant

<thinking>
The user wants me to improve the design system consistency and professionalize it to make it usable with any design. This is a substantial design system work task. Let me explore the codebase thoroughly to understand the current state, then plan improvements.

</thinking>

Voy a auditar el sistema de diseño actual (tokens, componentes, theming) y proponer mejoras de consistencia para que sea usable con cualquier identidad visual.

**Tool Call: Read `/mnt/DEV/Proyectos/repos/julesklord/monolithUI/.agents/skills/frontend-design/SKILL.md`**
Status: Completed

1→---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.
10→
## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.
20→
Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
30→- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

40→**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.


**Tool Call: Execute `codegraph explore "design tokens theme brand system ThemeProvider CSS variables components architecture" 2>/dev/null | head -200; ls -la .codegraph 2>/dev/null | head -10; ls monolith-ui/src/styles/ monolith-ui/src/components/ monolith-ui/src/constants/ monolith-ui/src/providers/`**
Status: Completed

**Dynamic-dispatch links among your symbols**
(synthesized — the indirect hops grep/Read would reconstruct; the `@file:line` is the wiring site)

- App → TokenSpec   [dynamic: renders <TokenSpec>]
- App → BrandTheming   [dynamic: renders <BrandTheming>]
- renderHeader → ThemeProvider   [dynamic: renders <ThemeProvider>]

> Full source for these symbols is below — the call flow among them, followed by their bodies.
**Exploration: design tokens theme brand system ThemeProvider CSS variables components architecture**

Found 11 symbols across 3 files.

**Blast radius — what depends on these (update/verify before editing)**

- `ThemeProvider` (monolith-ui/src/providers/ThemeProvider.tsx:15) — 4 callers in `monolith-ui/src/main.tsx`; tests: `monolith-ui/src/layout/Header.test.tsx`, `monolith-ui/src/providers/ThemeProvider.test.tsx`
- `TUIComponents` (monolith-ui/src/docs/sections/TUIComponents.tsx:3) — 3 callers in `monolith-ui/src/App.tsx`; ⚠️ no covering tests found
- `ComponentsSection` (monolith-ui/src/docs/sections/ComponentsSection.tsx:25) — 3 callers in `monolith-ui/src/App.tsx`; ⚠️ no covering tests found
- `BrandTheming` (monolith-ui/src/docs/sections/BrandTheming.tsx:9) — 3 callers in `monolith-ui/src/App.tsx`; ⚠️ no covering tests found
- `Theme` (monolith-ui/src/providers/ThemeProvider.tsx:4) — 1 caller in `monolith-ui/src/providers/ThemeProvider.tsx`; ⚠️ no covering tests found

**Source Code**

> The code below is the **verbatim, current on-disk source** of these files — re-read from disk on this call and line-numbered, byte-for-byte identical to what the Read tool returns. It is NOT a summary, outline, or stale cache. Treat each block as a Read you have already performed: do not Read a file shown here.

**`monolith-ui/src/providers/ThemeProvider.tsx`** — ThemeProvider(function), Theme(type_alias), useTheme(function), ThemeContext(constant), ThemeContextType(interface)

```tsx
1	import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
2	import { BRAND_MAP } from '../constants';
3	
4	type Theme = 'light' | 'dark';
5	
6	interface ThemeContextType {
7	  theme: Theme;
8	  setTheme: (theme: Theme) => void;
9	  brand: string;
10	  setBrand: (brand: string) => void;
11	}
12	
13	const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
14	
15	export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
16	  const [theme, setTheme] = useState<Theme>('dark');
17	  const [brand, setBrand] = useState('brand-plasma-core');
18	
19	  useEffect(() => {
20	    document.documentElement.dataset.theme = theme === 'light' ? 'light' : '';
21	  }, [theme]);
22	
23	  useEffect(() => {
24	    const brands = Object.keys(BRAND_MAP);
25	    brands.forEach((b) => document.documentElement.classList.remove(b));
26	    document.documentElement.classList.add(brand);
27	  }, [brand]);
28	
29	  return (
30	    <ThemeContext.Provider value={{ theme, setTheme, brand, setBrand }}>
31	      {children}
32	    </ThemeContext.Provider>
33	  );
34	};
35	
36	// eslint-disable-next-line react-refresh/only-export-components
37	export const useTheme = (): ThemeContextType => {
38	  const context = useContext(ThemeContext);
39	  if (context === undefined) {
40	    throw new Error('useTheme must be used within a ThemeProvider');
41	  }
42	  return context;
43	};
```

**`monolith-ui/src/App.tsx`** — components(route), App(function), tui-system(route), branding(route), App.tsx(file)

```tsx
1	import { Routes, Route } from "react-router-dom";
2	import { DocLayout } from "./docs/DocLayout";
3	import { Header } from "./layout";
4	import { useTheme } from "./providers";
5	import {
6	  Hero,
7	  Principles,
8	  Philosophy,
9	  ColorSystem,
10	  Typography,
11	  Motion,
12	  Layout,
13	  ComponentsSection,
14	  DesktopUI,
15	  WebUI,
16	  TerminalUI,
17	  BrandTheming,
18	  TokenSpec,
19	  IconSystem,
20	  TUIComponents,
21	} from "./docs/sections";
22	import "./styles/index.css";
23	
24	export default function App() {
25	  const { brand, setBrand } = useTheme();
26	
27	  return (
28	    <>
29	      <Header />
30	      <Routes>
31	        <Route path="/" element={<DocLayout />}>
32	          <Route index element={<Hero />} />
33	          <Route path="principles" element={<Principles />} />
34	          <Route path="philosophy" element={<Philosophy />} />
35	          <Route path="color" element={<ColorSystem />} />
36	          <Route path="typography" element={<Typography />} />
37	          <Route path="icons" element={<IconSystem />} />
38	          <Route path="tui-system" element={<TUIComponents />} />
39	          <Route path="motion" element={<Motion />} />
40	          <Route path="layout" element={<Layout />} />
41	          <Route
42	            path="branding"
43	            element={<BrandTheming brand={brand} handleBrandClick={setBrand} />}
44	          />
45	          <Route path="spec" element={<TokenSpec />} />
46	          <Route path="components" element={<ComponentsSection />} />
47	          <Route path="desktop" element={<DesktopUI />} />
48	          <Route path="web" element={<WebUI />} />
49	          <Route path="terminal" element={<TerminalUI />} />
50	        </Route>
51	      </Routes>
52	    </>
53	  );
54	}
```

**`monolith-ui/src/docs/sections/ComponentsSection.tsx`** — ComponentsSection(function), CommandBar(calls), CommandBarSegment(calls), CommandBarDivider(calls), StatusDot(calls), +7 more

```tsx
22	  Card
23	} from '../../components';
24	
25	export const ComponentsSection: React.FC = () => {
26	  return (
27	    <section className="doc-section" id="components">
28	      <div className="section-eyebrow">12</div>
29	      <h2 className="section-title"><em>Components</em> Library</h2>
30	      <p className="section-desc">Every component references only semantic tokens. Swap the brand layer and all components rebrand automatically.</p>
31	
32	      {/* — COMMAND BAR — */}
33	      <div className="subsection" id="command-bar">
34	        <div className="subsection-title">Command Bar · Multi-Platform</div>
35	        <div className="canvas col" style={{ gap: '20px' }}>
36	          <div>
37	            <div style={{ fontSize: '10px', color: 'var(--ui-text-disabled)', marginBottom: '6px', fontFamily: 'var(--ui-font-mono)' }}>macOS (Traffic Lights)</div>
38	            <CommandBar platform="macos" title="monolith-ui">
39	              <CommandBarSegment variant="primary">
40	                <svg width="9" height="9" viewBox="0 0 28 28" fill="none"><path d="M14 3L16.2 10.8L24 14L16.2 17.2L14 25L11.8 17.2L4 14L11.8 10.8Z" fill="currentColor"/></svg>
41	                gemini-2.0-flash
42	              </CommandBarSegment>
43	              <CommandBarDivider />
44	              <CommandBarSegment variant="success">
45	                <StatusDot on />
46	                connected
47	              </CommandBarSegment>
48	              <CommandBarSpacer />
49	              <CommandBarSegment>v0.5.2</CommandBarSegment>
50	            </CommandBar>
51	          </div>
52	          <div>
53	            <div style={{ fontSize: '10px', color: 'var(--ui-text-disabled)', marginBottom: '6px', fontFamily: 'var(--ui-font-mono)' }}>Windows (Native Controls)</div>
54	            <CommandBar platform="windows" title="monolith.dev Design">
55	              <CommandBarSegment>
56	                <Folder size={14} weight="duotone" />
57	                src/components
58	              </CommandBarSegment>
59	              <CommandBarDivider />
60	              <CommandBarSegment variant="warning">
61	                <GitBranch size={14} weight="duotone" />
62	                feature/dock-system
63	              </CommandBarSegment>
64	              <CommandBarSpacer />
65	              <CommandBarSegment variant="secondary">
66	                <Cpu size={14} weight="duotone" />
67	                1.2M tokens
68	              </CommandBarSegment>
69	            </CommandBar>
70	          </div>
71	        </div>
72	      </div>
73	
74	      {/* — DOCK & DRAWERS GRID — */}
75	      <div className="grid-2">
76	        <div className="subsection" id="dock">
77	          <div className="subsection-title">Dock System</div>
78	          <div className="canvas center" style={{ minHeight: '340px', gap: '20px', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
79	            <div className="dock dock-left dock-anchored">
80	              <div className="dock-btn active"><Sidebar size={18} weight="duotone" /></div>
81	              <div className="dock-btn"><MagnifyingGlass size={18} weight="duotone" /></div>
82	              <div className="dock-sep"></div>
83	              <div className="dock-btn"><Files size={18} weight="duotone" /></div>
84	            </div>
85	            <div className="dock dock-bottom dock-floating" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
86	              <div className="dock-btn"><TerminalWindow size={18} weight="duotone" /></div>
87	              <div className="dock-btn active"><Code size={18} weight="duotone" /></div>
total 1020
drwxr-xr-x  2 julesklord julesklord    4096 jul 25 19:42 .
drwxr-xr-x 12 julesklord julesklord    4096 jul 25 19:32 ..
-rw-r--r--  1 julesklord julesklord 1024000 jul 25 18:57 codegraph.db
-rw-r--r--  1 julesklord julesklord     772 jul 25 19:38 daemon.log
-rw-------  1 julesklord julesklord     162 jul 25 18:51 daemon.pid
srw-------  1 julesklord julesklord       0 jul 25 18:51 daemon.sock
-rw-r--r--  1 julesklord julesklord     229 jul 25 18:51 .gitignore
monolith-ui/src/components/:
Button	CommandBar  Drawer    Input	     Logo.tsx  StatusDot  TerminalView	TUI.tsx
Card	Dock	    index.ts  Logo.test.tsx  Pill      Tag	  TUI

monolith-ui/src/constants/:
index.ts  theme.test.ts  theme.ts

monolith-ui/src/providers/:
index.ts  ThemeProvider.test.tsx  ThemeProvider.tsx

monolith-ui/src/styles/:
base.css  brand.css  index.css	tokens.css


**Tool Call: Read `/mnt/DEV/Proyectos/repos/julesklord/monolithUI/skill/monolithUI-final/SKILL.md`**
Status: Completed

1→---
name: monolithUI-final
description: >
  Apply the MonolithUI design system when building React components, HTML artifacts,
  dashboards, landing pages, CLI/TUI mockups, or any UI requiring a dark industrial
  aesthetic with physics-based motion and semantic color tokens. Use this skill whenever
  the user mentions MonolithUI, TropicalUI, FMG design system, or asks to build UI in
  the style Jules uses for his tools. Also trigger for requests like "build a component
  matching my design system", "use my UI style", "dark industrial interface",
10→  "orbital layout", "TUI console mockup", "brutalista detallado", "skeuomorfismo moderno",
  or any frontend work in Jules's developer ecosystem. Do NOT use for generic
  Material/Bootstrap/Tailwind requests. Always use this skill before writing any CSS
  custom property, component class, or shadow value for this system — never guess token
  names from memory.
targets: [gemini-cli, claude, codex, opencode, cursor]
---

# MonolithUI — Final Design System Reference
**Density over decoration. Industrial-grade. Brand-agnostic. Orbital layout.**
20→
React 19 + TypeScript. Dark by default. Five brand presets. Physics motion.  
Skeuomorfismo moderno: no bevels, interior shadows give texture without realism.

---

## Core Philosophy (Non-Negotiable)

1. **Depth over flat** — 7-step greyscale surface ramp. Every level visibly distinct.
2. **Weight, not float** — Elements anchor via low-opacity shadows. Nothing floats like a widget.
30→3. **Inset = tactile** — Press states use `inset` box-shadow only. `transform: translateY()` for press is banned.
4. **Physics, not interpolation** — Spring curve for entrances. `ease-linear` is banned except on spinners.
5. **Orbital layout** — Content is the sun. Nav orbits it. Command bar top, dock side, drawers bottom.
6. **Semantic over decorative** — Green means connected/success only. Never decorate with semantic colors.
7. **Brand-agnostic slots** — ~10 CSS vars rebrand the entire system via `@layer brand`. No component changes.
8. **No frosted glass** — `backdrop-filter: blur()` is banned. Industrial, not translucent.

---

## The Triple Stack (Core Pattern)
40→
Every elevated element uses this exact `box-shadow` composition:

```css
box-shadow: var(--ui-edge-light), var(--ui-shadow-*), var(--ui-inset-*);
```

- `--ui-edge-light` — top-edge highlight simulating physical surface curvature
- `--ui-shadow-*` — external shadow for anchoring (low opacity, wide spread)
- `--ui-inset-*` — interior shadow giving material texture
50→
**Never** use a single `box-shadow` value on interactive or elevated elements.

---

## Token Reference

> Full token inventory: `references/tokens.md`  
> Read that file when you need values not shown here.

60→### Surfaces — Pure Greyscale, No Colour Tint

Surfaces use pure greyscale by default. Brand tint comes only from `--brand-*` accent tokens,
never from surface values. Lower number = deeper/darker.

```css
--ui-surface-0: #080808   /* deepest: modal backdrops, dock bg */
--ui-surface-1: #0f0f0f   /* command bar, nav, sidebar */
--ui-surface-2: #161616   /* secondary panels */
--ui-surface-3: #1e1e1e   /* root canvas */
70→--ui-surface-4: #262626   /* cards, drawers, main canvas */
--ui-surface-5: #303030   /* hover states */
--ui-surface-6: #3a3a3a   /* active hover, border-adjacent */
--ui-surface-terminal: #0a0c0f  /* TUI blocks only */
```

Light theme (applied via `[data-theme="light"]` on `<html>`):

```css
--ui-surface-0: #c2c2c2   /* deep concrete */
80→--ui-surface-3: #dedede   /* main concrete canvas */
--ui-surface-6: #f8f8f8   /* lightest */
```

### Tactile Depth

```css
--ui-inset-micro:   inset 0 1px 1px rgba(0,0,0,0.15)
--ui-inset-shallow: inset 0 1px 3px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(0,0,0,0.08)
--ui-inset-deep:    inset 0 2px 6px rgba(0,0,0,0.40), inset 0 0 0 1px rgba(0,0,0,0.15)
90→--ui-inset-well:    inset 0 3px 10px rgba(0,0,0,0.50), inset 0 1px 3px rgba(0,0,0,0.25)

--ui-edge-light:        inset 0 1px 0 rgba(255,255,255,0.06)
--ui-edge-light-strong: inset 0 1px 0 rgba(255,255,255,0.10)
```

### Shadows

```css
--ui-shadow-sm:     0 1px 2px rgba(0,0,0,0.4)
100→--ui-shadow-md:     0 2px 4px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)
--ui-shadow-lg:     0 4px 8px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)
--ui-shadow-dock:   0 2px 8px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.4)
--ui-shadow-drawer: 0 -4px 20px rgba(0,0,0,0.4)
```

### Borders

```css
--ui-border-subtle:         rgba(255,255,255,0.06)
110→--ui-border-default:        rgba(255,255,255,0.12)
--ui-border-hover:          rgba(255,255,255,0.22)
--ui-border-active:         rgba(255,255,255,0.22)   /* same as hover */
--ui-border-top-highlight:  rgba(255,255,255,0.09)
--ui-border-bottom-shadow:  rgba(0,0,0,0.25)
```

### Accent Tokens (Brand-Reactive)

```css
120→/* Primary — filled by --brand-primary. Default: neutral white. */
--ui-accent-primary:        var(--brand-primary, rgba(255,255,255,0.82))
--ui-accent-primary-text:   var(--brand-primary-text, #0a0a0a)
--ui-accent-primary-light:  var(--brand-primary-light, rgba(255,255,255,0.65))
--ui-accent-primary-bg:     var(--brand-primary-bg, rgba(255,255,255,0.06))
--ui-accent-primary-border: var(--brand-primary-border, rgba(255,255,255,0.14))
--ui-accent-primary-glow:   var(--brand-primary-glow, rgba(255,255,255,0.08))

/* Secondary — filled by --brand-secondary. Default: neutral white. */
--ui-accent-secondary:        var(--brand-secondary, rgba(255,255,255,0.45))
130→--ui-accent-secondary-bg:     var(--brand-secondary-bg, rgba(255,255,255,0.04))
--ui-accent-secondary-border: var(--brand-secondary-border, rgba(255,255,255,0.10))
```

### Semantic Colors (Fixed Across All Brands)

| Token | Value | Meaning |
|---|---|---|
| `--ui-success` / `--ui-success-light` | `#34a853` / `#81c995` | Connected · done · online |
| `--ui-warning` | `#fbbf24` | In progress · caution |
140→| `--ui-danger` | `#f28b82` | Error · destructive |
| `--ui-info` | `#60a5fa` | Informational |

Each has `--ui-*-bg` (12% opacity) and `--ui-*-border` (25% opacity) variants.

### Motion

| Token | Value | Use |
|---|---|---|
| `--ui-ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Entrances, dock hover, drawer open |
150→| `--ui-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Backdrop fade, card appear |
| `--ui-ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover colors, borders, toggle |
| `--ui-ease-linear` | `linear` | **Spinner ONLY — never elsewhere** |
| `--ui-dur-instant` | `60ms` | Micro-feedback |
| `--ui-dur-fast` | `110ms` | Hover transitions |
| `--ui-dur-base` | `190ms` | Standard state changes |
| `--ui-dur-slow` | `320ms` | Theme transitions |
| `--ui-dur-drawer` | `370ms` | Drawer spring |
| `--ui-dur-page` | `420ms` | Page transitions |

160→### Radius

```
--ui-r-xs: 3px   --ui-r-sm: 5px   --ui-r-md: 7px
--ui-r-lg: 10px  --ui-r-xl: 13px  --ui-r-2xl: 18px  --ui-r-pill: 999px
```

### Z-index Orbital Stack

```
170→Core(1) → Raised(10) → Toolbars(20) → Drawers(30) → Dock(40) → Tooltips(50) → Modals(60)
```

### Typography

Three fonts, distinct roles — never swap them:

- `--ui-font-serif` → **DM Serif Display** — display titles, section headers with `<em>`
- `--ui-font-sans`  → **DM Sans** — all UI body text (weights 300–600)
- `--ui-font-mono`  → **DM Mono** — data, status, values, code, labels, command segments
180→
Type scale tokens: `--ui-text-2xs` (9.5px) · `--ui-text-xs` (10.5px) · `--ui-text-sm` (11.5px) · `--ui-text-base` (13px) · `--ui-text-md` (14px) · `--ui-text-lg` (16px) · `--ui-text-xl` (20px) · `--ui-text-2xl` (26px) · `--ui-text-3xl` (34px) · `--ui-text-4xl` (44px)

---

## Brand Presets

Apply via class on `<html>`. Full CSS in `references/brands.md`.

| Class | Primary | Secondary | Dark surfaces |
190→|---|---|---|---|
| `brand-plasma-core` | `#22d3ee` cyan | `#a855f7` violet | `#050505` → `#323232` pure grey |
| `brand-oxidized-gold` | `#f59e0b` amber | `#fbbf24` gold | `#11100d` → `#312d27` warm |
| `brand-violet-reaction` | `#a855f7` purple | `#e11d48` crimson | `#0e0d12` → `#2e2936` purple tint |
| `brand-coolant-liquid` | `#06b6d4` cyan | `#2dd4bf` teal | `#080b0c` → `#333c40` cool tint |
| `brand-critical-mass` | `#ef4444` scarlet | `#991b1b` deep red | `#120c0d` → `#352a2c` red tint |

**Brand slot variables** (the only vars a brand must define):

```css
200→--brand-primary         /* base action color */
--brand-primary-text    /* accessible text on primary bg */
--brand-primary-light   /* tinted text on dark surfaces */
--brand-primary-bg      /* ~12% opacity fill */
--brand-primary-border  /* ~25% opacity borders */
--brand-primary-glow    /* ~18% opacity glow */
--brand-secondary
--brand-secondary-bg
--brand-secondary-border
--brand-gradient        /* linear-gradient(135deg, primary, secondary) */
210→--brand-surface-0 through --brand-surface-6
--brand-surface-light-0 through --brand-surface-light-6
```

---

## Component Patterns

### Cards & Surfaces

220→```css
.surface-card {
  background: var(--ui-surface-3);
  border-top:    1px solid var(--ui-border-top-highlight);
  border-left:   1px solid var(--ui-border-default);
  border-right:  1px solid var(--ui-border-default);
  border-bottom: 1px solid var(--ui-border-bottom-shadow);
  border-radius: var(--ui-r-md);
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);
}
230→.surface-card:hover {
  border-top-color: var(--ui-border-hover);
  border-left-color: var(--ui-border-hover);
  border-right-color: var(--ui-border-hover);
  border-bottom-color: var(--ui-border-hover);
  background: var(--ui-surface-4);
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm), var(--ui-inset-micro);
  /* NO transform: translateY() */
}
```
240→
### Buttons

```css
.btn {
  background: var(--ui-surface-2);
  border: 1.5px solid var(--ui-border-default);
  border-radius: var(--ui-r-sm);
  font-family: var(--ui-font-mono);
  font-size: 11px;
250→  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--ui-edge-light), var(--ui-shadow-sm);
}
.btn:hover {
  background: var(--ui-surface-3);
  border-top-color: var(--ui-border-hover);
  border-left-color: var(--ui-border-hover);
  border-right-color: var(--ui-border-hover);
260→  border-bottom-color: var(--ui-border-hover);
  box-shadow: var(--ui-edge-light-strong), var(--ui-shadow-md);
  transform: translateY(-1px);  /* rise on hover only, NOT on press */
}
.btn:active {
  background: var(--ui-surface-4);
  box-shadow: var(--ui-inset-shallow);
  transform: translateY(0);  /* NO translateY for press — inset only */
}
.btn.primary {
270→  background: var(--ui-accent-primary);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 70%);
  border-color: var(--ui-accent-primary-border);
  color: var(--brand-primary-text, #ffffff);
}
```

### Inputs (They Are Wells, Not Boxes)

```css
280→.gd-input-wrap {
  background: rgba(0,0,0,0.15);          /* darker than surrounding surface */
  border: 1px solid var(--ui-border-default);
  border-radius: var(--ui-r-md);         /* NOT --ui-r-lg */
  box-shadow: var(--ui-inset-shallow);   /* already sunken by default */
}
.gd-input-wrap:focus-within {
  border-color: var(--ui-accent-primary-border);
  box-shadow: var(--ui-inset-well), 0 0 0 2px var(--ui-accent-primary-bg);
}
290→```

### Chat Bubbles

```css
.bubble-ai {
  background: var(--ui-surface-3);
  border: 1px solid var(--ui-border-default);
  color: var(--ui-text-primary);
  border-radius: var(--ui-r-xs) var(--ui-r-lg) var(--ui-r-lg) var(--ui-r-lg);
300→  /* NO box-shadow on bubbles */
}
.bubble-user {
  background: var(--ui-surface-4);
  border: 1px solid var(--ui-border-hover);
  color: var(--ui-text-primary);
  border-radius: var(--ui-r-lg) var(--ui-r-xs) var(--ui-r-lg) var(--ui-r-lg);
  /* NO accent color tint — user bubble is NOT branded */
}
```
310→
### Command Bar

```css
.command-bar {
  height: 38px;
  background: var(--ui-surface-1);
  border: 1px solid var(--ui-border-subtle);
  border-radius: var(--ui-r-xl);
  box-shadow: var(--ui-edge-light), var(--ui-inset-micro);
320→}
/* Segments use DM Mono, 10.5px, uppercase */
/* Active segment: surface-3 bg + inset-shallow + border-default */
```

### Dock

```css
.dock {
  background: var(--ui-surface-1);
330→  border: 1px solid var(--ui-border-default);
}
.dock-floating {
  border-radius: var(--ui-r-2xl);
  box-shadow: var(--ui-edge-light), var(--ui-shadow-dock), var(--ui-inset-micro);
}
.dock-btn:hover {
  transform: scale(1.08);
  transition: transform var(--ui-dur-fast) var(--ui-ease-spring);
  /* Never translateY on dock buttons */
340→}
.dock-btn.active {
  background: var(--ui-accent-primary-bg);
  color: var(--ui-accent-primary-light);
  box-shadow: var(--ui-inset-shallow);
  /* Active indicator: 2px bar on edge (::after), NOT a glow ring */
}
```

### Sidebar
350→
```css
.sidebar-link.active {
  background: var(--ui-surface-3);
  color: var(--brand-primary);
  border-left: 2px solid var(--brand-primary);
  padding-left: 8px;   /* compensate border width — text doesn't jump */
  box-shadow: var(--ui-edge-light), var(--ui-inset-shallow);
  /* NO transform: translateX() */
}
360→```

### Drawer

```css
.drawer-preview {
  background: var(--ui-surface-4);
  border-radius: var(--ui-r-xl) var(--ui-r-xl) 0 0;
  box-shadow: var(--ui-edge-light), var(--ui-shadow-lg);
  /* Opens with: transition: transform var(--ui-dur-drawer) var(--ui-ease-spring) */
370→  /* NO backdrop-filter: blur() */
}
```

### Status & Labels

```css
/* Pills — use DM Mono, border-radius: pill */
.pill.primary   { background: var(--ui-accent-primary-bg);  color: var(--ui-accent-primary-light);  border-color: var(--ui-accent-primary-border); }
.pill.success   { background: var(--ui-success-bg);          color: var(--ui-success-light);         border-color: var(--ui-success-border); }
380→.pill.warning   { background: var(--ui-warning-bg);          color: var(--ui-warning);               border-color: var(--ui-warning-border); }
.pill.danger    { background: var(--ui-danger-bg);           color: var(--ui-danger);                border-color: var(--ui-danger-border); }
.pill.neutral   { background: rgba(255,255,255,0.05);        color: var(--ui-text-tertiary);         border-color: var(--ui-border-default); }

/* Status dot: 6px circle */
.sdot.on   { background: var(--ui-success); box-shadow: 0 0 5px rgba(52,168,83,0.5); }
.sdot.warn { background: var(--ui-warning); }
.sdot.err  { background: var(--ui-danger); }
.sdot.off  { background: var(--ui-text-tertiary); }
```
390→
### Info Boxes

```css
/* rule-box  → border: 1px solid border-default,  strong = brand-primary */
/* warn-box  → border: 1.5px solid warning-border, strong = ui-warning */
/* error-box → border: 2.5px solid danger-border,  box-shadow: inset-deep */
/* note-box  → border-left: 3px solid accent-secondary, bg: accent-secondary-bg */
```

400→---

## Orbital Layout

```
┌──────────────────────────────────────────────────┐
│  OUTER ORBIT: Command Bar (top) z:20-40          │
├────────────┬─────────────────────────────────────┤
│ INNER ORBIT│         THE CORE (75% min)          │
│  Sidebar   │    Main canvas · surface-0          │
410→│  surface-1 │    Content always wins              │
│  max 280px │                                     │
├────────────┴──────────────┬──────────────────────┤
│     DRAWER (bottom)       │   DOCK (floating)    │
│  spring · surface-4       │   right/left/bottom  │
└───────────────────────────┴──────────────────────┘
```

Side panels: never exceed 280px or 25% of viewport.

420→---

## Background Pattern

```css
body {
  background: var(--ui-surface-0);
  background-image: radial-gradient(rgba(255,255,255,0.055) 0.75px, transparent 0.75px);
  background-size: 20px 20px;
  background-attachment: fixed;
430→}
[data-theme="light"] body {
  background-image: radial-gradient(rgba(0,0,0,0.06) 0.75px, transparent 0.75px);
}
```

---

## TUI Mode

440→When building TUI/terminal mockups:

- Box-drawing chars: `┌ ─ ┐ ├ ┤ └ ┘ │ ┣ ┗ ┃`
- Density: `░ ▒ ▓ █`
- Status bar: inverted (brand-primary bg, surface-0 text), ALL CAPS, DM Mono
- **No gradients, no shadows, no border-radius in TUI**
- Motion = character reveals, progress bar fills

Layout archetypes:
- **TYPE_A (Command Station):** 25% sidebar / 75% main / 2-line status — chat/editors
450→- **TYPE_B (Telemetry Dashboard):** Quad-grid + global header — monitoring
- **TYPE_C (Focused Utility):** Centered + logo art + prompt — single-purpose tools

Full TUI spec: `references/tui.md`

---

## Implementation Checklist

Before submitting any component:
460→
- [ ] All colours via CSS custom properties — no hardcoded hex
- [ ] Surface depth: deeper container = lower surface number
- [ ] Triple stack on every elevated element: `edge-light + shadow-* + inset-*`
- [ ] Asymmetric card borders: top highlight, bottom shadow
- [ ] Inputs darker than surrounding surface + `inset-shallow` default
- [ ] Button hover = `translateY(-1px)` — Button press = `inset-shallow` only, `translateY(0)`
- [ ] Dock hover = `scale(1.08)` spring — Dock active = `inset-shallow` + edge bar
- [ ] Sidebar active = left border, compensated padding — no `translateX`
- [ ] Semantic colors for meaning only (success ≠ decoration)
470→- [ ] Spring for entrances, ease-out for fades, default for hover states
- [ ] DM Mono for all status / data / code / label text
- [ ] Background dot pattern: `0.75px` dots, `20px 20px` grid
- [ ] No `backdrop-filter: blur()` anywhere
- [ ] Chat bubbles: no shadow, no accent tint — surface tokens only

---

## Grounding Rules — No Hallucinated API

480→**These rules are non-negotiable. Violating them produces code that silently breaks at runtime.**

### Rule 1 — Only use names that exist in this document

If a token, class, prop, or function is not listed here or in `monolith-ui/src/`, it does not exist.

```
❌ var(--ui-surface-elevated)           ✅ var(--ui-surface-4)
❌ var(--ui-shadow-float)               ✅ var(--ui-shadow-dock)
❌ var(--ui-glow-primary)               ✅ 0 0 12px var(--ui-accent-primary-glow)
490→❌ <Button variant="elevated" glow>     ✅ <button className="btn primary">
❌ <Pill size="lg" accent>              ✅ <span className="pill primary">
```

### Rule 2 — Copy token names exactly, never paraphrase

```
❌ --ui-borders-default    ✅ --ui-border-default
❌ --ui-surface-bg-1       ✅ --ui-surface-1
❌ --brand-primary-color   ✅ --brand-primary
500→❌ --ui-shadow-subtle      ✅ --ui-shadow-sm
❌ --ui-ease-bouncy        ✅ --ui-ease-spring
❌ --ui-dur-normal         ✅ --ui-dur-base
```

### Rule 3 — When uncertain, declare it and fall back

If a needed token isn't confirmed in this document:
1. State it is not confirmed
2. Use the nearest real equivalent
510→3. Never fill the gap silently with an invented name

### Rule 4 — Complete confirmed token inventory

Any `--ui-*` token not in this table does not exist in the system:

| Group | Confirmed tokens |
|---|---|
| Surfaces | `--ui-surface-0` – `--ui-surface-6`, `--ui-surface-terminal` |
| Borders | `--ui-border-subtle` `--ui-border-default` `--ui-border-hover` `--ui-border-active` `--ui-border-top-highlight` `--ui-border-bottom-shadow` |
520→| Insets | `--ui-inset-micro` `--ui-inset-shallow` `--ui-inset-deep` `--ui-inset-well` |
| Edge | `--ui-edge-light` `--ui-edge-light-strong` |
| Shadows | `--ui-shadow-sm` `--ui-shadow-md` `--ui-shadow-lg` `--ui-shadow-dock` `--ui-shadow-drawer` |
| Glow | `--ui-glow-subtle` |
| Text | `--ui-text-primary` `--ui-text-secondary` `--ui-text-tertiary` `--ui-text-disabled` |
| Accent primary | `--ui-accent-primary` `--ui-accent-primary-text` `--ui-accent-primary-light` `--ui-accent-primary-bg` `--ui-accent-primary-border` `--ui-accent-primary-glow` |
| Accent secondary | `--ui-accent-secondary` `--ui-accent-secondary-bg` `--ui-accent-secondary-border` |
| Semantic | `--ui-success` `--ui-success-light` `--ui-success-bg` `--ui-success-border` `--ui-warning` `--ui-warning-bg` `--ui-warning-border` `--ui-danger` `--ui-danger-bg` `--ui-danger-border` `--ui-info` `--ui-info-bg` `--ui-info-border` |
| Gradient | `--ui-gradient-primary` |
| Typography | `--ui-font-sans` `--ui-font-mono` `--ui-font-serif` |
530→| Type scale | `--ui-text-2xs` `--ui-text-xs` `--ui-text-sm` `--ui-text-base` `--ui-text-md` `--ui-text-lg` `--ui-text-xl` `--ui-text-2xl` `--ui-text-3xl` `--ui-text-4xl` |
| Leading | `--ui-leading-tight` `--ui-leading-base` `--ui-leading-loose` |
| Spacing | `--ui-sp-1` `--ui-sp-2` `--ui-sp-3` `--ui-sp-4` `--ui-sp-5` `--ui-sp-6` `--ui-sp-8` `--ui-sp-10` `--ui-sp-12` |
| Radius | `--ui-r-xs` `--ui-r-sm` `--ui-r-md` `--ui-r-lg` `--ui-r-xl` `--ui-r-2xl` `--ui-r-pill` |
| Easing | `--ui-ease-spring` `--ui-ease-out` `--ui-ease-in` `--ui-ease-default` `--ui-ease-linear` |
| Duration | `--ui-dur-instant` `--ui-dur-fast` `--ui-dur-base` `--ui-dur-slow` `--ui-dur-drawer` `--ui-dur-page` |
| Z-index | `--ui-z-base` `--ui-z-raised` `--ui-z-sticky` `--ui-z-drawer` `--ui-z-dock` `--ui-z-tooltip` `--ui-z-modal` |
| Brand slots | `--brand-primary` `--brand-primary-text` `--brand-primary-light` `--brand-primary-bg` `--brand-primary-border` `--brand-primary-glow` `--brand-secondary` `--brand-secondary-bg` `--brand-secondary-border` `--brand-gradient` `--brand-font-sans` `--brand-font-mono` `--brand-font-serif` `--brand-surface-0`–`6` `--brand-surface-light-0`–`6` |

---
540→
## Reference Files

- `references/tokens.md` — Complete CSS variable reference with all values
- `references/brands.md` — Full CSS for all 5 brand presets
- `references/tui.md` — TUI spec, box-drawing guide, layout archetypes


**Tool Call: List `/mnt/DEV/Proyectos/repos/julesklord/monolithUI/monolith-ui/src`**
Status: Completed

```json
{
  "type": "ListDir",
  "Content": {
    "content": "- /mnt/DEV/Proyectos/repos/julesklord/monolithUI/monolith-ui/src/\n  - App.tsx\n  - assets/\n    - hero.png\n    - react.svg\n    - vite.svg\n  - components/\n    - Button/\n      - Button.test.tsx\n      - Button.tsx\n    - Card/\n      - Card.test.tsx\n      - Card.tsx\n    - CommandBar/\n      - CommandBar.test.tsx\n      - CommandBar.tsx\n    - Dock/\n      - Dock.test.tsx\n      - Dock.tsx\n    - Drawer/\n      - Drawer.test.tsx\n      - Drawer.tsx\n    - index.ts\n    - Input/\n      - Input.test.tsx\n      - Input.tsx\n    - Logo.test.tsx\n    - Logo.tsx\n    - Pill/\n      - Pill.test.tsx\n      - Pill.tsx\n    - StatusDot/\n      - StatusDot.test.tsx\n      - StatusDot.tsx\n    - Tag/\n      - Tag.test.tsx\n      - Tag.tsx\n    - TerminalView/\n      - TerminalView.test.tsx\n      - TerminalView.tsx\n    - TUI.tsx\n    - TUI/\n  - constants/\n    - index.ts\n    - theme.test.ts\n    - theme.ts\n  - docs/\n    - DocLayout.tsx\n    - sections/\n      - BrandTheming.tsx\n      - ColorSystem.tsx\n      - ComponentsSection.tsx\n      - DesktopUI.tsx\n      - Footer.tsx\n      - Hero.tsx\n      - IconSystem.tsx\n      - index.ts\n      - Layout.tsx\n      - Motion.tsx\n      - Philosophy.tsx\n      - Principles.tsx\n      - TerminalUI.tsx\n      - TokenSpec.tsx\n      - TUIComponents.tsx\n      - TUITranslation.tsx\n      - Typography.tsx\n      - WebUI.tsx\n    - Sidebar.test.tsx\n    - Sidebar.tsx\n  - layout/\n    - Header.test.tsx\n    - Header.tsx\n    - index.ts\n  - main.tsx\n  - providers/\n    - index.ts\n    - ThemeProvider.test.tsx\n    - ThemeProvider.tsx\n  - setupTests.ts\n  - styles/\n    - base.css\n    - brand.css\n    - index.css\n    - tokens.css\n  - test/\n    - setup.ts",
    "absolute_root_path": "/mnt/DEV/Proyectos/repos/julesklord/monolithUI/monolith-ui/src"
  }
}
```

## Assistant

<thinking>
This is a large design system professionalization task. Let me dig deeper into the actual CSS tokens, brand system, components, and identify inconsistencies. The user wants:

</thinking>

Voy a auditar tokens, brands y componentes en detalle para localizar inconsistencias y endurecer el contrato brand-agnostic.

**Tool Call: Read `/mnt/DEV/Proyectos/repos/julesklord/monolithUI/monolith-ui/src/styles/tokens.css`**
Status: Completed

1→@layer tokens {
    :root {
        /* Surface ramp — Pure greyscale fallbacks (brand overrides via --brand-surface-*)
           These are only consulted when index.css :root tokens are NOT set,
           which in practice never happens. Kept for standalone token usage. */
        --ui-surface-0: var(--brand-surface-0, #080808);
        --ui-surface-1: var(--brand-surface-1, #0f0f0f);
        --ui-surface-2: var(--brand-surface-2, #161616);
        --ui-surface-3: var(--brand-surface-3, #1e1e1e);
10→        --ui-surface-4: var(--brand-surface-4, #262626);
        --ui-surface-5: var(--brand-surface-5, #303030);
        --ui-surface-6: var(--brand-surface-6, #3a3a3a);
        --ui-surface-terminal: #0a0c0f;

        --ui-border-subtle: var(--brand-border-subtle, rgba(255, 255, 255, 0.06));
        --ui-border-default: var(--brand-border-default, rgba(255, 255, 255, 0.12));
        --ui-border-hover: var(--brand-border-hover, rgba(255, 255, 255, 0.22));
        --ui-border-active: var(--brand-border-active, rgba(255, 255, 255, 0.22));

20→        --ui-text-primary: var(--brand-text-primary, rgba(255, 255, 255, 0.92));
        --ui-text-secondary: var(--brand-text-secondary, rgba(255, 255, 255, 0.65));
        --ui-text-tertiary: var(--brand-text-tertiary, rgba(255, 255, 255, 0.4));
        --ui-text-disabled: var(--brand-text-disabled, rgba(255, 255, 255, 0.2));

        --ui-accent-primary: var(--brand-primary);
        --ui-accent-primary-light: var(--brand-primary-light);
        --ui-accent-primary-bg: var(--brand-primary-bg);
        --ui-accent-primary-border: var(--brand-primary-border);
        --ui-accent-primary-glow: var(--brand-primary-glow);
30→
        --ui-accent-secondary: var(--brand-secondary);
        --ui-accent-secondary-bg: var(--brand-secondary-bg);
        --ui-accent-secondary-border: var(--brand-secondary-border);

        --ui-font-sans: var(--brand-font-sans, "DM Sans", system-ui, sans-serif);
        --ui-font-mono: var(--brand-font-mono, "DM Mono", "Fira Code", monospace);
        --ui-font-serif: var(--brand-font-serif, "DM Serif Display", Georgia, serif);

        --ui-text-2xs: 9.5px;
40→        --ui-text-xs: 10.5px;
        --ui-text-sm: 11.5px;
        --ui-text-base: 13px;
        --ui-text-md: 14px;
        --ui-text-lg: 16px;
        --ui-text-xl: 20px;
        --ui-text-2xl: 26px;
        --ui-text-3xl: 34px;
        --ui-text-4xl: 44px;

50→        --ui-leading-tight: 1.3;
        --ui-leading-base: 1.55;
        --ui-leading-loose: 1.75;

        --ui-sp-1: 4px;
        --ui-sp-2: 8px;
        --ui-sp-3: 12px;
        --ui-sp-4: 16px;
        --ui-sp-5: 20px;
        --ui-sp-6: 24px;
60→        --ui-sp-8: 32px;
        --ui-sp-10: 40px;
        --ui-sp-12: 48px;

        --ui-r-xs: 3px;
        --ui-r-sm: 5px;
        --ui-r-md: 7px;
        --ui-r-lg: 10px;
        --ui-r-xl: 13px;
        --ui-r-2xl: 18px;
70→        --ui-r-pill: 999px;

        --ui-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
        --ui-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
        --ui-ease-in: cubic-bezier(0.4, 0, 1, 1);
        --ui-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
        --ui-ease-linear: linear;

        --ui-dur-instant: 60ms;
        --ui-dur-fast: 110ms;
80→        --ui-dur-base: 190ms;
        --ui-dur-slow: 320ms;
        --ui-dur-drawer: 370ms;
        --ui-dur-page: 420ms;

        --ui-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
        --ui-shadow-md:
            0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3);
        --ui-shadow-lg:
            0 4px 8px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3);
90→        --ui-shadow-dock:
            0 2px 8px rgba(0, 0, 0, 0.5), 0 10px 30px rgba(0, 0, 0, 0.4);
        --ui-shadow-drawer: 0 -4px 20px rgba(0, 0, 0, 0.4);

        --ui-z-base: 1;
        --ui-z-raised: 10;
        --ui-z-sticky: 20;
        --ui-z-drawer: 30;
        --ui-z-dock: 40;
        --ui-z-tooltip: 50;
100→        --ui-z-modal: 60;
    }

    /* Light theme tokens are defined in index.css — this file only holds dark root tokens */
}


**Tool Call: Read `/mnt/DEV/Proyectos/repos/julesklord/monolithUI/monolith-ui/src/styles/brand.css`**
Status: Completed

1→@layer brand {
  /* ── CUSTOM BRANDS ──
     This file is for custom brand overrides used by external projects.
     Source of truth for all preset brands is monolith-ui/src/styles/index.css.
     To create a custom brand, define --brand-* tokens here and apply the
     class to the <html> element alongside the theme attribute:
       <html class="my-custom-brand" data-theme="dark">
  */
}
10→

**Tool Call: Read `/mnt/DEV/Proyectos/repos/julesklord/monolithUI/monolith-ui/src/constants/theme.ts`**
Status: Completed

1→export const BRAND_MAP: Record<string, { label: string; color: string }> = {
  "brand-plasma-core": { label: "Plasma Core", color: "#22d3ee" },
  "brand-oxidized-gold": { label: "Oxidized Gold", color: "#f59e0b" },
  "brand-violet-reaction": { label: "Violet Reaction", color: "#a855f7" },
  "brand-coolant-liquid": { label: "Coolant Liquid", color: "#06b6d4" },
  "brand-critical-mass": { label: "Critical Mass", color: "#ef4444" },
};

export const SECTION_MAP: Record<string, string> = {
10→  "": "01 · INTRODUCTION",
  principles: "02 · PRINCIPLES",
  philosophy: "03 · PHILOSOPHY",
  color: "04 · COLOR SYSTEM",
  typography: "05 · TYPOGRAPHY",
  icons: "06 · ICON SYSTEM",
  "tui-system": "07 · TERMINAL UI SYSTEM",
  motion: "08 · MOTION",
  layout: "09 · ORBITAL LAYOUT",
  branding: "10 · BRAND SYSTEM",
20→  spec: "11 · TOKEN SPEC",
  components: "12 · COMPONENTS",
  desktop: "13 · MOCK: DESKTOP",
  web: "14 · MOCK: WEB DASHBOARD",
  terminal: "15 · MOCK: TUI CONSOLE",
};


**Tool Call: Read `/mnt/DEV/Proyectos/repos/julesklord/monolithUI/monolith-ui/src/components/index.ts`**
Status: Completed

1→export * from "./Button/Button";
export * from "./Pill/Pill";
export * from "./Tag/Tag";
export * from "./StatusDot/StatusDot";
export * from "./Card/Card";
export * from "./Input/Input";
export * from "./CommandBar/CommandBar";
export * from "./Dock/Dock";
export * from "./Drawer/Drawer";
10→export * from "./TerminalView/TerminalView";
export * from "./Logo";
export * from "./TUI";


**Tool Call: Execute `# Measure hardcoded colors and token inconsistencies in components/styles
echo '=== Hardcoded hex in components ==='
rg -n '#[0-9a-fA-F]{3,8}' monolith-ui/src/components --glob '!*.test.*' | head -40
echo '=== Hardcoded rgba in components ==='
rg -n 'rgba?\(' monolith-ui/src/components --glob '!*.test.*' | head -40
echo '=== Hardcoded in styles (non-token) ==='
wc -l monolith-ui/src/styles/*.css
echo '=== index.css structure ==='
rg -n '^\.|^@layer|^:root|^\[data-theme|^html|^body' monolith-ui/src/styles/index.css | head -80
echo '=== brand.css structure ==='
rg -n '^\.|@layer|^:root|brand-' monolith-ui/src/styles/brand.css | head -60
`**
Status: Completed

=== Hardcoded hex in components ===
monolith-ui/src/components/Logo.tsx:21:      <path d="M60 40 L140 40 L140 160 L60 160 Z" fill="url(#monolith_grad_comp)" stroke="var(--brand-primary, #4285f4)" strokeWidth="2"/>
monolith-ui/src/components/Logo.tsx:24:      <path d="M60 40 L70 30 L150 30 L150 150 L140 160" stroke="var(--brand-primary, #4285f4)" strokeWidth="1.5" strokeOpacity="0.5"/>
monolith-ui/src/components/Logo.tsx:25:      <path d="M140 40 L150 30" stroke="var(--brand-primary, #4285f4)" strokeWidth="1.5" strokeOpacity="0.5"/>
monolith-ui/src/components/Logo.tsx:28:      <path d="M60 70 H140 M60 100 H140 M60 130 H140" stroke="var(--brand-primary, #4285f4)" strokeWidth="0.5" strokeOpacity="0.3"/>
monolith-ui/src/components/Logo.tsx:29:      <path d="M85 40 V160 M115 40 V160" stroke="var(--brand-primary, #4285f4)" strokeWidth="0.5" strokeOpacity="0.3"/>
monolith-ui/src/components/Logo.tsx:32:      <circle cx="100" cy="100" r="12" fill="var(--brand-primary, #4285f4)" fillOpacity="0.1">
monolith-ui/src/components/Logo.tsx:35:      <circle cx="100" cy="100" r="4" fill="var(--brand-primary, #4285f4)"/>
monolith-ui/src/components/Logo.tsx:38:      <rect x="70" y="145" width="15" height="4" fill="var(--brand-secondary, #c5a9f5)" fillOpacity="0.8"/>
monolith-ui/src/components/Logo.tsx:39:      <rect x="90" y="145" width="8" height="4" fill="var(--ui-text-tertiary, #888)" fillOpacity="0.5"/>
monolith-ui/src/components/Logo.tsx:43:          <stop stopColor="var(--ui-surface-1, #12151c)"/>
monolith-ui/src/components/Logo.tsx:44:          <stop offset="1" stopColor="var(--ui-surface-2, #1a1d24)"/>
=== Hardcoded rgba in components ===
=== Hardcoded in styles (non-token) ===
   21 monolith-ui/src/styles/base.css
    9 monolith-ui/src/styles/brand.css
 2884 monolith-ui/src/styles/index.css
  104 monolith-ui/src/styles/tokens.css
 3018 total
=== index.css structure ===
16:@layer base {
69::root {
205:[data-theme="light"] {
260:[data-theme="light"] body {
273:.brand-plasma-core {
309:.brand-oxidized-gold {
337:.brand-violet-reaction {
365:.brand-coolant-liquid {
396:.brand-critical-mass {
424:[data-theme="light"].brand-oxidized-gold {
429:[data-theme="light"].brand-coolant-liquid {
434:[data-theme="light"].brand-violet-reaction {
438:[data-theme="light"].brand-critical-mass {
447:.doc-nav {
464:[data-theme="light"] .doc-nav {
467:.nav-logo {
477:.nav-sep {
483:.nav-breadcrumb {
493:.nav-breadcrumb span {
497:.nav-theme-btn {
510:.nav-theme-btn:hover {
515:.nav-theme-btn:active {
521:.doc-layout {
526:.doc-sidebar {
541:.doc-sidebar::-webkit-scrollbar {
544:.sidebar-section {
547:.sidebar-section-title {
557:.sidebar-link {
570:.sidebar-link:hover {
575:.sidebar-link.active {
584:.sidebar-link i {
591:.doc-main {
599:.doc-section {
610:[data-theme="light"] .doc-section {
615:.section-eyebrow {
625:.section-title {
634:.section-title em {
639:.section-desc {
646:.subsection {
649:.subsection-title {
664:.subsection-title::after {
679:.ui-icon-duotone {
688:.ui-icon-duotone [opacity="0.2"] {
693:.ui-icon-duotone.success [opacity="0.2"] {
696:.ui-icon-duotone.warning [opacity="0.2"] {
699:.ui-icon-duotone.danger [opacity="0.2"] {
702:.ui-icon-duotone.secondary [opacity="0.2"] {
707:.icon-tactical {
720:.icon-tactical:hover {
727:.icon-tactical::before {
739:.rule-box {
749:.rule-box:hover {
753:.rule-box p {
758:.rule-box strong {
766:.rule-box.secondary {
769:.rule-box.secondary strong {
772:.rule-box.success {
775:.rule-box.success strong {
780:.warn-box {
789:.warn-box p {
794:.warn-box strong {
802:.error-box {
811:.error-box p {
816:.error-box strong {
825:.ui-switch {
837:.ui-switch::after {
849:.ui-switch.on {
853:.ui-switch.on::after {
858:.ui-switch:active::after {
862:.note-box {
869:.note-box p {
874:.note-box strong {
879:.canvas {
886:.canvas.dark {
889:.canvas.center {
896:.canvas.col {
901:.canvas.row {
907:.canvas.grid2 {
912:.canvas.grid3 {
917:.canvas-label {
=== brand.css structure ===
1:@layer brand {
5:     To create a custom brand, define --brand-* tokens here and apply the
