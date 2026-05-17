# MonolithUI — TUI Specification

## Three Laws of Monolith TUI

1. **DENSITY IS UTILITY** — Every column of the 80-120 col grid is information.
2. **CHARACTER DEPTH** — Depth via `░ ▒ ▓ █`. No transparency, no GPU.
3. **SOLAR CONTEXT** — Active command line is the center of gravity, in brand color.

## What TUI Has (and Only This)

- Unicode box-drawing (U+2500–U+257F)
- ANSI colors: 16 base + 256 extended + truecolor
- Text modifiers: bold / italic / underline / dim / reverse
- Block elements: `█ ▓ ▒ ░ ▂ ▃ ▄ ▅ ▆ ▇`
- Animation: character-by-character reveal, timed redraws (60fps in Ratatui), progress bar fills

**No:** gradients, shadows, border-radius, transparency, overlapping elements, arbitrary positioning.

If a component requires any of the above → implement as modal panel or skip entirely.

## Box Drawing Reference

```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
│  ┣━ branch mid                              │
│  ┗━ branch end                             │
│  ┃  vertical bar                           │
├─────────────────────────────────────────────┤
│  ╔═══╗  double borders (emphasis)          │
│  ║   ║                                     │
│  ╚═══╝                                     │
└─────────────────────────────────────────────┘
```

## Color Mapping: GUI → TUI

| GUI Token | TUI ANSI | TUI Truecolor |
|---|---|---|
| `--ui-accent-primary` | Blue | `#4285f4` |
| `--ui-accent-secondary` | Magenta | `#c5a9f5` |
| `--ui-success` | Green | `#34a853` |
| `--ui-warning` | Yellow | `#fbbf24` |
| `--ui-danger` | Red | `#f28b82` |
| `--ui-text-secondary` | White dim | — |
| `--ui-text-tertiary` | Black bright | — |

**Rule:** Use ANSI named colors as semantic base. Truecolor is additive enhancement only (for terminals that support it). Design must work in 16-color terminals.

## Standard Layout Archetypes

### TYPE_A: Command Station
Best for: interactive apps (chat, editors, agent UIs)

```
┌─────────────────────────────────────────────────────┐
│  SIDEBAR (25%)   │         MAIN CORE (75%)          │
│                  │                                  │
│  nav items       │  primary workspace               │
│  history         │  content canvas                  │
│                  │                                  │
├──────────────────┴──────────────────────────────────┤
│  STATUS_BAR — dense telemetry, 2 lines max          │
└─────────────────────────────────────────────────────┘
```

Ratatui constraints:
```rust
let chunks = Layout::default()
  .direction(Direction::Horizontal)
  .constraints([
    Constraint::Percentage(25),  // Planetary Sidebar
    Constraint::Percentage(75),  // The Solar Core
  ])
  .split(frame.size());
```

### TYPE_B: Telemetry Dashboard
Best for: monitoring, system dashboards

```
┌─────────────────────────────────────────────────────┐
│               BRAND_HEADER_STRIP (3 lines)          │
├────────────────────────┬────────────────────────────┤
│        METRIC_1        │        METRIC_2            │
├────────────────────────┼────────────────────────────┤
│        METRIC_3        │        METRIC_4            │
└────────────────────────┴────────────────────────────┘
```

Ratatui constraints:
```rust
Constraint::Length(3),   // Brand header
Constraint::Ratio(1, 2)  // Equal metric panels
```

### TYPE_C: Focused Utility
Best for: single-purpose tools (generators, converters, fetchers)

```
┌─────────────────────────────────────────────────────┐
│                    LOGO_ASCII_ART                   │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  CENTRAL_OUTPUT                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│  [PROMPT] > _                                       │
└─────────────────────────────────────────────────────┘
```

## TUI Component Patterns

### Status Bar (Dense)
```
█ [ MODE: SUDO ] UTC-5 // 2026      MEM: 1.2GB/16GB  0x8FAC █
```
- Full-width, brand-primary background, surface-0 text
- ALL CAPS, monospace, bold
- Segments separated by spaces or `│`
- Max 2 lines

### Navigation (Sidebar)
```
┃  01. OVERVIEW
❯  02. TELEMETRY   ← active: brand color
┃  03. SETTINGS
```
- Left border in brand color
- Active item: `❯` prefix + brand color text + optional bg highlight
- Inactive: dim text, `·` or number prefix

### Sparkline / Telemetry
```
CPU_LOAD_HISTORY [30s]
▂ ▃ ▅ ▇ █ ▇ ▅ ▃ ▂   ▂ ▃ ▅ ▇ █
30s ago                        NOW
```
- Use `▂▃▄▅▆▇█` for height variations
- Color: success for normal, warning for elevated, danger for critical
- Label with time axis

### Interactive Prompt
```
julio@monolith : ~/workspace$ monolith deploy --env production█
```
- Username: success color
- Path: brand-primary color
- Cursor: brand-primary filled block `█` (animate with pulse)
- Previous output in dim/secondary text

### Modal Panel
```
┌──────────── Sessions ─────────────┐
│ ● Refactor PipelineOrchestrator   │
│   12m · 24msg                     │
├───────────────────────────────────┤
│ ○ Fix UVR integration crash       │
│   yday · 18msg                    │
└───────────────────────────────────┘
[↑↓] navigate  [Enter] open  [q] close
```
- Centered on screen
- Title in top border
- Action shortcuts in footer (dim text)
- Active row: reverse or bg highlight

## ASCII Art Brand Headers (TYPE_C)

Template for mango/monolith style:
```
       _.._
     .'    '.
    /   __   \
 ,_|   /  \   |_ ,
'-,|   \__/   |,-'
   \        /
    '.____.'
  A P P _ N A M E
```

Use for tool identity. Color in brand-primary.

## Ratatui Boilerplate (Rust)

```rust
use ratatui::{
    layout::{Constraint, Direction, Layout, Rect},
    style::{Color, Modifier, Style},
    widgets::{Block, Borders, Paragraph},
    Frame,
};

fn ui(f: &mut Frame) {
    // Root: status bar at bottom
    let root = Layout::default()
        .direction(Direction::Vertical)
        .constraints([
            Constraint::Min(0),     // Main area
            Constraint::Length(2),  // Status bar
        ])
        .split(f.size());

    // Main: sidebar + core
    let main = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([
            Constraint::Percentage(25), // Planetary
            Constraint::Percentage(75), // Solar Core
        ])
        .split(root[0]);

    // Brand color (truecolor)
    let brand = Color::Rgb(34, 211, 238); // tropic-vibes cyan

    // Status bar
    let status = Paragraph::new("[ MODE: NORMAL ] UTC-5 // 2026")
        .style(Style::default()
            .fg(Color::Black)
            .bg(brand)
            .add_modifier(Modifier::BOLD));
    f.render_widget(status, root[1]);

    // Sidebar
    let sidebar = Block::default()
        .borders(Borders::RIGHT)
        .border_style(Style::default().fg(brand));
    f.render_widget(sidebar, main[0]);

    // Core
    let core = Block::default()
        .borders(Borders::NONE);
    f.render_widget(core, main[1]);
}
```

## TUI Feasibility Gate

Before implementing any GUI component in TUI, ask:
- Does it require overlapping elements? → Modal panel or skip
- Does it require transparency? → Use `░ ▒` density instead
- Does it require arbitrary positioning? → Use layout constraints
- Does it require gradients? → Use character density gradients
- Does it need spring animation? → Use character-reveal timing instead
