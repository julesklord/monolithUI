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
│  ┗━ branch end                              │
│  ┃  vertical bar                            │
├─────────────────────────────────────────────┤
│  ╔═══╗  double borders (emphasis)           │
│  ║   ║                                      │
│  ╚═══╝                                      │
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

**Rule:** Use ANSI named colors as semantic base. Truecolor is additive enhancement only. Design must work in 16-color terminals.

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
- Segments separated by `│`
- Max 2 lines

### Navigation (Sidebar)
```
┃  01. OVERVIEW
❯  02. TELEMETRY   ← active: brand color
┃  03. SETTINGS
```
- Left border in brand color
- Active: `❯` prefix + brand color text
- Inactive: dim, number prefix

### Sparkline / Telemetry
```
CPU_LOAD_HISTORY [30s]
▂ ▃ ▅ ▇ █ ▇ ▅ ▃ ▂   ▂ ▃ ▅ ▇ █
30s ago                        NOW
```
- Color: success → warning → danger by threshold

### Interactive Prompt
```
julio@monolith : ~/workspace$ monolith deploy --env production█
```
- Username: success color · Path: brand-primary · Cursor: brand `█` pulsing

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

## ASCII Art Brand Headers (TYPE_C)

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

Color in brand-primary.

## Ratatui Boilerplate (Rust)

```rust
use ratatui::{
    layout::{Constraint, Direction, Layout},
    style::{Color, Modifier, Style},
    widgets::{Block, Borders, Paragraph},
    Frame,
};

fn ui(f: &mut Frame) {
    let root = Layout::default()
        .direction(Direction::Vertical)
        .constraints([Constraint::Min(0), Constraint::Length(2)])
        .split(f.size());

    let main = Layout::default()
        .direction(Direction::Horizontal)
        .constraints([Constraint::Percentage(25), Constraint::Percentage(75)])
        .split(root[0]);

    let brand = Color::Rgb(34, 211, 238); // plasma-core cyan

    let status = Paragraph::new("[ MODE: NORMAL ] UTC-5 // 2026")
        .style(Style::default().fg(Color::Black).bg(brand).add_modifier(Modifier::BOLD));
    f.render_widget(status, root[1]);

    let sidebar = Block::default()
        .borders(Borders::RIGHT)
        .border_style(Style::default().fg(brand));
    f.render_widget(sidebar, main[0]);
}
```

## TUI Feasibility Gate

Before implementing any GUI component in TUI:
- Overlapping elements? → Modal panel or skip
- Transparency? → `░ ▒` density instead
- Arbitrary positioning? → Layout constraints
- Gradients? → Character density gradients
- Spring animation? → Character-reveal timing
