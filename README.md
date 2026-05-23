<table border="0">
  <tr>
    <td width="200" align="center" valign="top">
      <img src="monolith-ui/logo.svg" width="180" alt="MonolithUI logo">
    </td>
    <td valign="top">
      <h1>MonolithUI</h1>
      <p><strong>Density over decoration.</strong><br/>
      <em>An industrial-grade, brand-agnostic design system built for complex developer tools, orchestration scripts, and CLIs.</em></p>
      <p>
        <img src="https://img.shields.io/badge/version-0.1.0-863bff?style=plastic" alt="Version">
        <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=plastic" alt="License MIT"></a>
        <img src="https://img.shields.io/badge/Built%20With-React%20+%20TypeScript-0ea5e9?style=plastic" alt="Built with React + TypeScript">
        <img src="https://img.shields.io/badge/Brands-5_presets-f59e0b?style=plastic" alt="5 brand presets">
      </p>
    </td>
  </tr>
</table>

---

## Overview

**MonolithUI** is a brand-agnostic design system that bridges the gap between industrial terminal efficiency and vibrant, physics-based graphical interfaces.

Built on **React 19**, **TypeScript**, and **Phosphor Icons**, it provides a unified design language that scales from high-resolution displays down to 80-column terminal environments. The system is defined entirely through semantic CSS custom properties — swapping a brand requires overriding roughly 10 variables in `@layer brand`. No component code changes.

---

## Core Principles

- **Density over decoration.** Every pixel earns its place. No decorative gradients, no ambient glows, no frosted glass.
- **Native OS physics.** Linear interpolation is banned. All motion uses bezier curves or spring physics (`cubic-bezier(0.2, 1, 0.3, 1)`) to emulate real momentum and tactile feedback.
- **Terminal feasibility.** Every component must have a viable 16-color TUI equivalent using box-drawing characters and ANSI sequences. If it can't survive the terminal, it doesn't belong in the system.
- **Orbital layout.** Content is the sun. Command bars float above it, docks orbit the sides, drawers emerge from below. The core canvas always gets at least 75% of the viewport.
- **Brand-agnostic slots.** Semantic token slots (`--ui-*`) hold structure. Brand tokens (`--brand-*`) hold color. The two never mix directly.
- **Industrial duotone iconography.** Phosphor Icons with a custom CSS layer binding the secondary duotone shape to the active brand color at 15% opacity.

---

## Token System

The system uses a 7-step greyscale surface ramp as its structural foundation. Surfaces are pure greyscale by default — brand tint is applied only through `--brand-*` accent tokens, never through surface values.

```css
--ui-surface-0: #080808  /* deepest: modal backdrops, dock backgrounds */
--ui-surface-1: #0f0f0f  /* command bar, nav, sidebar */
--ui-surface-2: #161616  /* secondary panels */
--ui-surface-3: #1e1e1e  /* root canvas */
--ui-surface-4: #262626  /* cards, drawers */
--ui-surface-5: #303030  /* hover states */
--ui-surface-6: #3a3a3a  /* active hover, border-adjacent */
```

Every elevated element uses the triple-stack shadow pattern:

```css
box-shadow: var(--ui-edge-light), var(--ui-shadow-*), var(--ui-inset-*);
```

Full token reference: [`skill/monolith-ui.skill/SKILL.md`](skill/monolith-ui.skill/SKILL.md)

---

## Brand Presets

Five presets ship out of the box. Apply via class on `<html>`:

| Class | Primary | Secondary | Character |
|---|---|---|---|
| `brand-plasma-core` | `#22d3ee` cyan | `#a855f7` violet | Master neutral — the reference implementation |
| `brand-oxidized-gold` | `#f59e0b` amber | `#fbbf24` gold | Industrial warmth |
| `brand-violet-reaction` | `#a855f7` purple | `#e11d48` crimson | High-voltage |
| `brand-coolant-liquid` | `#06b6d4` cyan | `#2dd4bf` teal | System process |
| `brand-critical-mass` | `#ef4444` scarlet | `#991b1b` deep red | Alert state |

Each preset defines its own surface ramp (dark + light), accent scale, and gradient. Light theme: `data-theme="light"` on `<html>`.

---

## Installation

```bash
git clone https://github.com/julesklord/MonolithUI.git
cd MonolithUI/monolith-ui
npm install
npm run dev
```

Production build:

```bash
npm run build
```

---

## Agent Integration

The [`skill/monolith-ui.skill/SKILL.md`](skill/monolith-ui.skill/SKILL.md) file is a machine-readable skill for Gemini CLI, Claude, and other code agents. It covers component patterns, motion rules, orbital layout, TUI archetypes, and a full grounding ruleset that prevents models from hallucinating token names or inventing component APIs that don't exist.

To use with Gemini CLI:

```bash
gemini --skill skill/monolith-ui.skill/SKILL.md
```

---

## Origins

Born in **La Paz, Baja California Sur**, MonolithUI draws its aesthetic from its environment — the weight of concrete architecture, the heat shimmer on asphalt, the contrast between industrial structure and tropical color. It is not a pretty system. It is a precise one.

---

## License

<p align="center">
  Engineered by <a href="https://github.com/julesklord">julesklord</a>.<br>
  Released under the terms of the MIT License.
</p>
