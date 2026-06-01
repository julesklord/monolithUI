# Architecture

MonolithUI uses a semantic design system to provide consistency across graphical and terminal interfaces.

## System Components

### 1. Semantic Token Engine
The system uses CSS custom properties (`--ui-*`) to define structural elements including surface ramps, spacing, and elevation. A 7-step greyscale ramp provides the foundation for all UI panels.

### 2. Branding Layer
Color application occurs through the `@layer brand` CSS layer. Brand tokens (`--brand-*`) override structural defaults to apply specific color palettes without modifying component logic.

### 3. Physics-Based Motion
Motion utilizes cubic-bezier and spring physics to simulate momentum. The system prohibits linear interpolation for transitions.

### 4. Layout Engine
Content occupies the primary viewport. Support elements (command bars, docks, and drawers) orbit the central canvas.

## Architecture Decision Records (ADRs)

### ADR 0001: Greyscale Foundations
**Status**: Accepted  
**Date**: 2026-05-10  

#### Context
Fragmented color systems across projects increased maintenance difficulty and prevented rapid rebranding.

#### Decision
Implement pure greyscale foundations for all structural tokens. Apply branding exclusively via accent token injection.

#### Consequences
- **Theming**: Swapping brand presets requires overriding 10 tokens.
- **Visuals**: Maintains high contrast for accessibility across all presets.
