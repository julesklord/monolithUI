# Changelog

All notable changes to this project will be documented in this file.
Format: [keepachangelog.com](https://keepachangelog.com) · Versioning: [semver.org](https://semver.org)

## [Unreleased]

## [0.3.0] - 2026-08-02

### Added

- Interactive Landing page with product presentation showcase (`Landing.tsx`).
- Full documentation routing structure (`/docs/...`).
- Comprehensive unit test coverage for `BrandTheming` component and new layout routes.

### Changed

- Moved static data structures (`Sidebar`, `ColorSystem`, `DesktopUI`) to module level to eliminate allocation overhead during re-renders.
- Upgraded list rendering keys across `IconSystem`, `TerminalUI`, `DesktopUI`, and `WebUI` from index-based keys to unique stable identifiers.

### Fixed

- Cleaned up debug logging statements across UI components (`Drawer`).
- Extracted and deduplicated brand accent markup into reusable `ColorFamilyColumn` helper.

## [0.2.0] - 2026-07-25

### Added

- ThemeProvider with brand and light/dark theme switching.
- Header layout with brand switcher and theme controls.
- Theme constants and shared layout extraction.
- Component test suite (Button, Card, CommandBar, Dock, Drawer, Input, Logo, Pill, StatusDot, Tag, TerminalView, Header, Sidebar, ThemeProvider).
- Typecheck gate as part of `npm test` (`tsc -b --noEmit`).

### Changed

- Identity rebrand to MonolithUI (Elegant Semi-Brutalism / industrial mechanism).
- Documentation structure overhaul and stop-slop cleanup.
- Performance: memoized brand handlers, extracted static data from render paths (Principles, ColorSystem, IconSystem, Header).
- Dock, Drawer, and brand switcher accessibility (semantic buttons, dialog roles, keyboard activation).

### Fixed

- GitHub Pages base paths and brand configuration white-screen issues.
- Theme switcher presets and logo consistency.
- Surface card hover borders using explicit asymmetric borders.
- Removed leftover `console.log` debug statements from Button and Drawer.

### Removed

- Obsolete `PROJECT-TYPES-GUIDE.md` scaffold.

## [0.1.0] - 2026-05-16

### Added

- Repository initialization and initial design system baseline.
