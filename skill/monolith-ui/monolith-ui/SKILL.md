---
name: monolith-ui
description: Apply the Monolith UI design system. Use when asked to style, design, or build a webapp, CLI, TUI, or Native interface to ensure it adheres to the industrial-grade, density-focused, brand-agnostic Monolith UI principles.
---

# Monolith UI Design System Skill

You are applying **Monolith UI**, an industrial-grade, brand-agnostic design system built for complex developer tools, orchestration scripts, and CLIs.

Your primary directive is: **Density over decoration.**

## How to Apply Monolith UI

When implementing an interface or updating a design, follow these guidelines based on the platform:

1. **For Core Principles & Aesthetics**:
   Read `[Philosophy](references/philosophy.md)`. This outlines the system's stance on surfaces, density, chrome, and motion.

2. **For Specific CSS Values & Tokens**:
   Read `[Tokens](references/tokens.md)`. Use these exact sizes, curves, colors, and shadows to ensure precision.

3. **For Web Dashboards, Sites, or Native Desktop Apps**:
   Read `[Web & Native Guidelines](references/web-native.md)`. Pay special attention to Orbital Layouts, heavy typography, and high information density.

4. **For Command-Line Interfaces (CLI) or Terminal UIs (TUI)**:
   Read `[CLI & TUI Guidelines](references/cli-tui.md)`. Ensure that your terminal outputs follow strict structural and semantic rules using ANSI colors and Unicode geometry.

## Immediate Action

Before you write code or design a component:
1. Determine the target platform (Web/Native/CLI).
2. Load the corresponding reference file(s) into your context.
3. Validate your implementation against the Core Philosophy. Does it feel like a professional tool? Is it dense? Does it avoid unnecessary chrome?
