# Monolith UI: Core Philosophy

The design decisions in Monolith UI are not preferences — they are load-bearing truths derived from building hundreds of real interfaces.

## 1. On surfaces and depth
- **Dark is not black.** Pure black kills depth perception. Use the 7-step surface ramp from near-black to barely-raised. This creates the illusion of natural light falling on physical surfaces, conveying weight and structure.
- **Surface 3 is not background.** It is the canvas — the primary working area. Surface 0 is the floor beneath everything. UI elements need somewhere to sink into when inactive, and somewhere to rise toward when active.

## 2. On density and information
- **Density is not clutter.** A professional user should see their entire application state at a glance. Every segment must remain legible and actionable. This is professional density — not noise.
- **Whitespace is earned, not default.** Empty space must serve a purpose — it should separate logically distinct sections. Over-padded interfaces hide how little information they contain.

## 3. On navigation and chrome
- **The drawer is the new panel.** Use drawers that emerge from below with spring physics. They feel native and return full canvas width to the content when closed. The content always wins prime real estate. Avoid side-sliding panels if possible.
- **When in doubt, don't add chrome.** Every border, shadow, and separator costs visual attention. Only add visual elements that carry information or create necessary separation. Remove decorative lines.

## 4. On color and meaning
- **Color carries weight.**
  - **Green**: "connected / success."
  - **Amber/Yellow**: "caution / in-progress."
  - **Red**: "error / destructive."
  - **Blue**: "info / brand highlight."
  These meanings are non-negotiable. Do not use semantic colors for decoration.

## 5. On motion and interaction
- **Physics makes interfaces feel real.** Linear interpolation is banned. Every motion must utilize bezier curves or spring physics to emulate real momentum and tactile feedback (e.g., a button scales down on press with spring physics).
