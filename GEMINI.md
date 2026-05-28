# Project Overview

**MonolithUI** is an industrial-grade, brand-agnostic design system built for complex developer tools, orchestration scripts, and CLIs. It bridges the gap between terminal efficiency and vibrant graphical interfaces.

**Key Technologies:**
- React 19
- TypeScript
- Phosphor Icons
- Vite (Inferred from project structure `vite.config.ts`)

**Core Principles:**
- **Density over decoration.**
- **Native OS Physics:** Emulates real momentum using bezier curves or spring physics (no linear interpolation).
- **Terminal Feasibility:** Components should be translatable to a 16-color TUI.
- **Orbital Layouts:** Content dictates layout (toolbars orbit content, command bars float on top).
- **Brand-Agnostic Slots:** Highly themeable via semantic CSS variable overrides (`@layer brand`).
- **Industrial Duotone Iconography:** Custom CSS layers over Phosphor Icons to bind secondary shapes to brand colors at 15% opacity.

## Building and Running

The main codebase is located in the `monolith-ui` directory.

To install dependencies and start the development server:
```bash
cd monolith-ui
npm install
npm run dev
```

To build for production (inferred):
```bash
cd monolith-ui
npm run build
```

## Development Conventions

- **Language:** TypeScript is strictly used.
- **Styling:** The system heavily utilizes Vanilla CSS and CSS layers (e.g., `@layer brand`) for slot-based theming.
- **Iconography:** Use Phosphor Icons and apply the custom duotone styling rules defined by the system.
- **Motion:** When adding animations, strictly avoid linear interpolations and prefer physics-based or bezier curves.
- **Directory Structure:** 
  - `monolith-ui/src/`: Contains the React/TS UI components and logic.
  - `skill/`: Contains Gemini CLI skills related to the design system (e.g., `tropical-ui`).
  - `docs/`: Holds project documentation.

## Notes for AI Agents
- When generating code, prioritize density, strict structural typing, and native OS physics for any transitions.
- Ensure terminal feasibility where applicable for CLI implementations.
- Refer to `PROJECT-TYPES-GUIDE.md` when updating documentation for different types of projects that consume this design system.
