# Monolith UI: Design Tokens

These tokens should be rigorously applied when building UIs or writing styles.

## 1. Surfaces (Dark Mode Defaults)
- `--ui-surface-0`: #0d1017 (Background floor)
- `--ui-surface-1`: #12151c
- `--ui-surface-2`: #161920
- `--ui-surface-3`: #1a1d24 (Primary Canvas)
- `--ui-surface-4`: #1e2229
- `--ui-surface-5`: #23272f
- `--ui-surface-6`: #2a2e38 (Highest elevation)

## 2. Borders
- `--ui-border-subtle`: rgba(255,255,255,0.05)
- `--ui-border-default`: rgba(255,255,255,0.08)
- `--ui-border-hover`: rgba(255,255,255,0.14)
- `--ui-border-active`: rgba(255,255,255,0.22)

## 3. Typography
- **Sans-serif**: `DM Sans`, `system-ui`, `sans-serif`
- **Monospace**: `DM Mono`, `Fira Code`, `monospace`
- **Serif**: `DM Serif Display`, `Georgia`, `serif`

### Type Scale (Dense)
- `--ui-text-2xs`: 9.5px
- `--ui-text-xs`: 10.5px
- `--ui-text-sm`: 11.5px
- `--ui-text-base`: 13px (Default body size)
- `--ui-text-md`: 14px
- `--ui-text-lg`: 16px
- `--ui-text-xl`: 20px

## 4. Radii (Rounding)
- `--ui-r-xs`: 3px (Standard for small buttons, badges, tabs)
- `--ui-r-sm`: 5px
- `--ui-r-md`: 7px
- `--ui-r-lg`: 10px

## 5. Motion (Physics)
- `--ui-ease-spring`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (Mandatory for physical interactions)
- `--ui-dur-instant`: 60ms
- `--ui-dur-fast`: 110ms
- `--ui-dur-base`: 190ms
- `--ui-dur-drawer`: 370ms

## 6. Shadows
- `--ui-shadow-sm`: `0 1px 4px rgba(0,0,0,0.3)`
- `--ui-shadow-md`: `0 4px 16px rgba(0,0,0,0.4)`
- `--ui-shadow-dock`: `0 4px 28px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.3)`

## Note on Light Mode
In Light mode, `--ui-surface-0` is `#f5f5f5` and `--ui-surface-1` is `#ffffff`. Text uses high-contrast dark blue-grey (`#2c3e50`). Keep borders subtle (`rgba(0,0,0,0.06)`).
