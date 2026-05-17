# Monolith UI: CLI & TUI Guidelines

## Terminal Feasibility
If a component cannot be reasonably translated into a 16-color TUI using characters and ANSI sequences, it does not belong in this system.

## Command-Line Scripts & Logging (CLI)
1. **Never use plain text**. Output must be structured.
2. Use strong semantic colors:
   - Green (`\x1b[32m`): Success, OK.
   - Yellow (`\x1b[33m`): Warning, In progress.
   - Red (`\x1b[31m`): Error.
   - Blue (`\x1b[34m`): Info, brand highlight.
   - Dim/Gray (`\x1b[90m`): Timestamps, secondary information, structural lines.
3. **Structured Badges**: When logging steps, use brackets or background colors to represent badges. Example: `[INFO]`, `[WARN]`.
4. **Alignment**: Ensure that status logs are vertically aligned for high density and rapid reading. 
   Example:
   ```
   [2026.05.10] 🚀 SYSTEM_INIT    Running pre-flight checks...
   [2026.05.10] ✅ DB_CONNECT     Connected to cluster-1
   ```

## Terminal User Interfaces (TUI)
1. **Unicode Geometry**: Use solid blocks (`█`, `▓`, `▒`, `░`), lines (`│`, `─`, `┌`, `┐`, `└`, `┘`), and half-blocks (`▄`, `▀`) to simulate surfaces and shadows.
2. **Surfaces**: Emulate the "surface ramp" by using different character densities.
   - Example: A focused panel could be surrounded by a solid border `│` with normal text, while an unfocused panel could use dimmed borders.
3. **Density**: TUIs must support 80-column constraints but should comfortably expand.
4. **Orbital Layouts in TUI**:
   - Navigation should sit on the left (Dock) or bottom (Drawer-style status bar).
   - Content commands float at the top or bottom of the focused panel.
5. **No Decoration**: Only draw boxes around distinct structural areas. Do not draw separators between every list item.
