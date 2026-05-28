Auditoría post-refactor

### Issues detectados

| # | Archivo | Línea | Problema |
|---|---------|-------|----------|
| 1 | index.css | 944 | `.surface-card:hover` usa `border-color` general — **pierde los bordes asimétricos** en hover |
| 2 | index.css | 690 | `.icon-tactical:hover` — `box-shadow: var(--ui-shadow-sm), var(--ui-inset-shallow)` **sin edge-light** |
| 3 | index.css | 1488 | `.ui-tab-btn.active` — `box-shadow: var(--ui-inset-deep)` sin edge-light, y mantiene `translateY(1px)` |
| 4 | index.css | 1088 | `.cb-seg.active` — `box-shadow: var(--ui-inset-shallow)` sin edge-light, mantiene `translateY(0.5px)` |
| 5 | index.css | 440 | `.doc-nav` — `box-shadow: 0 2px 10px rgba(0,0,0,0.25)` hardcodeado, sin edge-light |
| 6 | components.css | 222 | `.terminal-window` — `box-shadow: var(--ui-shadow-md)` sin edge-light |
| 7 | components.css | 226 | `[data-theme="light"] .terminal-window` — `0 4px 16px` raw, sin edge-light |

### Problemas estructurales

| # | Archivo | Problema |
|---|---------|----------|
| 8 | index.css vs components.css | Duplicación masiva: `.surface-card`, `.btn`, `.dock`, `.drawer-preview` definidos en **ambos** archivos. Quien cargue `components.css` sobreescribe/duplica lo de `index.css` |
| 9 | index.css:394-407 | `body` está fuera de `@layer base` — rompe la arquitectura de capas declarada |
| 10 | docs.css | Duplica `.doc-sidebar`, `.doc-nav`, `.section-title`, etc. que ya están en `index.css` |
| 11 | index.css:2343, components.css:268 | `.tui-block` definido **tres veces** (index.css, components.css ×2) |
| 12 | tokens.css | Radius tokens difieren de index.css (`--ui-r-sm: 5px` vs `4px`, `--ui-r-md: 7px` vs `6px`, etc.) |
| 13 | tokens.css | Durations difieren (`--ui-dur-fast: 110ms` vs `160ms`, `--ui-dur-base: 190ms` vs `240ms`) |

---

## Mejoras propuestas

### FIX — Correcciones directas

1. **Fix `.surface-card:hover`** — Reemplazar `border-color` con bordes asimétricos explícitos
2. **Fix `.icon-tactical:hover`** — Agregar `var(--ui-edge-light)` al stack
3. **Fix `.ui-tab-btn.active`** — Agregar edge-light, eliminar `translateY(1px)`
4. **Fix `.cb-seg.active`** — Agregar edge-light, eliminar `translateY`
5. **Fix `.doc-nav`** — Convertir a `var(--ui-edge-light), var(--ui-shadow-sm)`
6. **Fix `.terminal-window`** — Agregar edge-light en ambos themes

### ENHANCE — Extensiones del sistema visual

7. **Token `--ui-surface-terminal`** — Centralizar `#0a0c0f` como token en lugar de hardcodearlo
8. **`.nav-link.active` (docs.css)** — Agregar edge-light al box-shadow
9. **`.ui-switch`** — Agregar `var(--ui-edge-light)` al estado default
10. **`.toggle`** — Agregar `var(--ui-inset-micro)` al fondo default
11. **`.cb-seg.active`** — Cambiar fondo a `var(--ui-surface-3)` + `border` explícito + `inset-shallow` (consistente con sidebar-link.active)

### REFACTOR — Arquitectura del proyecto

12. **Deduplicación** — Elegir un solo archivo como fuente de verdad para cada componente. Sugerencia: mover todo a `index.css` dentro de `@layer components`, eliminar las definiciones duplicadas de `components.css`
13. **Body dentro de `@layer base`** — Mover `body { }` dentro de `@layer base` para respetar la arquitectura declarada
14. **Unificar radius/duration** — `tokens.css` e `index.css` tienen valores diferentes. Sincronizar a un solo set
15. **`components.css`** — Reducir a solo los componentes que no están en `index.css` (terminal-window, tui-block), o convertirlo en un archivo de override puro para proyectos externos

### UX — Mejoras de experiencia

16. **`.btn` transiciones** — La transición actual `all var(--ui-dur-fast)` (160ms) puede sentirse brusca en hover→active. Considerar `var(--ui-dur-base)` (240ms) para el hover para que el "levantamiento" se sienta más sustancial
17. **`.surface-card` padding** — 24px está bien para contenido, pero para cards con poco contenido se siente espacioso. Considerar `20px` (consistente con components.css)
18. **Micro-interacción dock-btn** — El `transform: scale(1.08)` en hover combinado con `inset-shallow` en active daría una sensación táctil excelente
