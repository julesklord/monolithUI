import { describe, it, expect } from 'vitest';
import { BRAND_MAP, SECTION_MAP } from './theme';

describe('theme constants', () => {
  describe('BRAND_MAP', () => {
    it('should contain the correct brand mapping', () => {
      expect(BRAND_MAP).toEqual({
        "brand-plasma-core": { label: "Plasma Core", color: "#22d3ee" },
        "brand-oxidized-gold": { label: "Oxidized Gold", color: "#f59e0b" },
        "brand-violet-reaction": { label: "Violet Reaction", color: "#a855f7" },
        "brand-coolant-liquid": { label: "Coolant Liquid", color: "#06b6d4" },
        "brand-critical-mass": { label: "Critical Mass", color: "#ef4444" },
      });
    });
  });

  describe('SECTION_MAP', () => {
    it('should contain the correct section mapping', () => {
      expect(SECTION_MAP).toEqual({
        "": "01 · INTRODUCTION",
        principles: "02 · PRINCIPLES",
        philosophy: "03 · PHILOSOPHY",
        color: "04 · COLOR SYSTEM",
        typography: "05 · TYPOGRAPHY",
        icons: "06 · ICON SYSTEM",
        "tui-system": "07 · TERMINAL UI SYSTEM",
        motion: "08 · MOTION",
        layout: "09 · ORBITAL LAYOUT",
        branding: "10 · BRAND SYSTEM",
        spec: "11 · TOKEN SPEC",
        components: "12 · COMPONENTS",
        desktop: "13 · MOCK: DESKTOP",
        web: "14 · MOCK: WEB DASHBOARD",
        terminal: "15 · MOCK: TUI CONSOLE",
      });
    });
  });
});
