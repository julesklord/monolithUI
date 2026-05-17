<table border="0">
  <tr>
    <td width="200" align="center" valign="top">
      <img src="logo.svg" width="180" alt="MonolithUI logo">
    </td>
    <td valign="top">
      <h1>MonolithUI</h1>
      <p><strong>Density over decoration.</strong><br/>
      <em>An industrial-grade, brand-agnostic design system built for complex developer tools, orchestration scripts, and CLIs.</em></p>
      <p>
        <img src="https://img.shields.io/badge/version-0.1.0-863bff?style=plastic" alt="Version">
        <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=plastic" alt="License MIT"></a>
        <img src="https://img.shields.io/badge/Built%20With-React%20+%20TypeScript-0ea5e9?style=plastic" alt="Built with React + TypeScript">
      </p>
    </td>
  </tr>
</table>

---

## Overview

**MonolithUI** is a brand-agnostic design system that bridges the gap between industrial terminal efficiency and vibrant, physics-based graphical interfaces.

Built upon **React 19**, **TypeScript**, and **Phosphor Icons**, it provides a unified, uncompromising design language that scales seamlessly from ultra-high-definition displays down to 80-column terminal environments.

---

## Core Principles

- **Native OS Physics:** Linear interpolation is banned. Every motion utilizes bezier curves or spring physics to emulate real momentum and tactile feedback.
- **Terminal Feasibility:** If a component cannot be reasonably translated into a 16-color TUI using characters and ANSI sequences, it does not belong in this system.
- **Orbital Layouts:** Content dictates layout. Toolbars and navigation orbit the content. Command bars float on top, docks on the side, and drawers emerge from below.
- **Brand-Agnostic Slots:** The system uses semantic token slots. The entire system rebrands with ~10 CSS variable overrides (`@layer brand`).
- **Industrial Duotone Iconography:** Leverages Phosphor Icons with a custom CSS layer that binds the secondary duotone shape to the active brand's base color at 15% opacity.

---

## Installation

### From Source

```bash
git clone https://github.com/julesklord/MonolithUI.git
cd MonolithUI/monolith-ui
npm install
npm run dev
```

---

## Origins

Born in **La Paz, Baja California Sur**, MonolithUI draws its aesthetic spirit directly from its environment. It is deeply inspired by the coastal beaches, the relentless summer heat, and the vibrant colors of local tropical fruits like mangoes and pitahayas.

---

## License

<p align="center">
  Engineered by <a href="https://github.com/julesklord">julesklord</a>.<br>
  Released under the terms of the MIT License.
</p>
