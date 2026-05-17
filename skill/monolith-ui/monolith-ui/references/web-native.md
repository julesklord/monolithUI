# Monolith UI: Web & Desktop App Guidelines

## Orbital Layouts
Content dictates layout. Toolbars and navigation **orbit** the content. 
- **Command bars** float on top of the content.
- **Docks** live on the sides.
- **Drawers** emerge from below (never use side-sliding panels).

## Web Dashboards & Platforms
- **High Information Density**: Do not fear density. A complex interface should display the entire application state at a glance. Avoid excessive padding that dilutes information.
- **Core Canvas**: The main interactive area or chart should dominate the center (e.g., the Pulse Core). Surrounding controls should be secondary and visually separated using subtle borders, not heavy chrome.
- **Top Bar**: Minimalist. Project name, global search floating in the center, subtle icon actions on the right.
- **Navigation Tabs**: Instead of large sprawling navs, use compact icon-based tabs (e.g., width 56px, subtle border, stacked icons).

## Text & Typography
- Monospace fonts are heavily encouraged for data, labels, timestamps, and badges.
- Use uppercase lettering for metadata or structural labels (e.g., `ARTICLE // 2026.05.16`).
- Font sizes trend smaller (e.g., 10px/11px for labels, 13px/14px for base text) to allow for greater density. 

## Landing Pages & Marketing
- High-contrast, typography-focused layouts.
- Hero sections should use large typography (e.g., 42px+) and concise, industrial copy.
- Actions (Buy Now, Pre-Order) should be compact blocks with distinct background colors (e.g., `--brand-primary`). 

## Native Desktop / Web UI Mapping
When building Native Desktop or Web components, translate the physics rules into the respective framework:
- In React: Use Framer Motion or similar to replicate the `--ui-ease-spring`.
- Avoid linear animations at all costs. 
- Prefer rendering blocks within `Surface 3` while the background is `Surface 0`.