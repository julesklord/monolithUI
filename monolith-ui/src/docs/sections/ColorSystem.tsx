import React from "react";

const SURFACE_RAMP_DARK = [
  {
    name: "Surface 0",
    val: "#0a0c10",
    tok: "--ui-surface-0",
    use: "Deepest · dock bg · modal backdrop",
  },
  {
    name: "Surface 1",
    val: "#0f1218",
    tok: "--ui-surface-1",
    use: "Command bar · nav · sidebar",
  },
  {
    name: "Surface 2",
    val: "#14171f",
    tok: "--ui-surface-2",
    use: "Secondary panels · tab bars",
  },
  {
    name: "Surface 3",
    val: "#1a1e26",
    tok: "--ui-surface-3",
    use: "Root canvas background",
  },
  {
    name: "Surface 4",
    val: "#21252e",
    tok: "--ui-surface-4",
    use: "Cards · drawers · main canvas",
  },
  {
    name: "Surface 5",
    val: "#292e38",
    tok: "--ui-surface-5",
    use: "Hover states · elevated cards",
  },
  {
    name: "Surface 6",
    val: "#323845",
    tok: "--ui-surface-6",
    use: "Active hover · border-adjacent",
  },
];

const SURFACE_RAMP_LIGHT = [
  { name: "Surface 0", val: "#f0f2f5" },
  { name: "Surface 1", val: "#e8eaed" },
  { name: "Surface 2", val: "#e2e5e9" },
  { name: "Surface 3", val: "#ffffff" },
  { name: "Surface 4", val: "#f8f9fa" },
  { name: "Surface 5", val: "#f1f3f4" },
  { name: "Surface 6", val: "#e8eaed" },
];

const PRIMARY_TOKENS = [
  "--ui-accent-primary",
  "--ui-accent-primary-light",
  "--ui-accent-primary-bg",
  "--ui-accent-primary-border",
  "--ui-accent-primary-glow",
];
const SECONDARY_TOKENS = [
  "--ui-accent-secondary",
  "--ui-accent-secondary-bg",
  "--ui-accent-secondary-border",
];

const BRAND_PRESETS = [
  {
    name: "Plasma Core",
    primary: "#22d3ee",
    secondary: "#a855f7",
    class: "brand-plasma-core",
  },
  {
    name: "Oxidized Gold",
    primary: "#f59e0b",
    secondary: "#fbbf24",
    class: "brand-oxidized-gold",
  },
  {
    name: "Violet Reaction",
    primary: "#a855f7",
    secondary: "#e11d48",
    class: "brand-violet-reaction",
  },
  {
    name: "Coolant Liquid",
    primary: "#06b6d4",
    secondary: "#2dd4bf",
    class: "brand-coolant-liquid",
  },
  {
    name: "Critical Mass",
    primary: "#ef4444",
    secondary: "#991b1b",
    class: "brand-critical-mass",
  },
];

const FIXED_SEMANTIC_COLORS = [
  {
    name: "Success",
    val: "#34a853",
    light: "#81c995",
    tok: "--ui-success",
    use: "Connected · auth ok · tool done · online",
  },
  {
    name: "Warning",
    val: "#fbbf24",
    light: "",
    tok: "--ui-warning",
    use: "Checkpoint · degraded · tool running · caution",
  },
  {
    name: "Danger",
    val: "#f28b82",
    light: "",
    tok: "--ui-danger",
    use: "Error · auth fail · process dead · destructive",
  },
  {
    name: "Info",
    val: "#60a5fa",
    light: "",
    tok: "--ui-info",
    use: "Informational · rule boxes · system notes",
  },
];

const COLOR_SEMANTICS_RULES = [
  {
    color: "var(--ui-accent-primary)",
    label: "Primary",
    rule: "→ main action, selected state, active nav, streaming cursor, send buttons",
  },
  {
    color: "var(--ui-accent-secondary)",
    label: "Secondary",
    rule: "→ metadata, token counts, version info, decorative accents",
  },
  {
    color: "var(--ui-success)",
    label: "Success",
    rule: "→ connected, auth ok, tool completed, online, diff additions",
  },
  {
    color: "var(--ui-warning)",
    label: "Warning",
    rule: "→ checkpoints, degraded state, tool executing, caution, diff changes",
  },
  {
    color: "var(--ui-danger)",
    label: "Danger",
    rule: "→ error, auth fail, process dead, destructive action, diff deletions",
  },
  {
    color: "var(--ui-info)",
    label: "Info",
    rule: "→ informational messages, rule boxes, system documentation notes",
  },
];

export const ColorSystem: React.FC = () => {
  return (
    <section className="doc-section" id="color">
      <div className="section-eyebrow">04</div>
      <h2 className="section-title">
        Color <em>System</em>
      </h2>
      <p className="section-desc">
        Three layers: surface ramp (structural depth), semantic fixed colors
        (universal meaning), and brand accent slots (brand-agnostic, swappable).
        Only the accent slots change per brand. The other two layers are
        constant.
      </p>

      {/* SURFACE RAMP */}
      <div className="subsection">
        <div className="subsection-title">
          Surface ramp · dark mode (7 steps)
        </div>
        <div className="color-grid">
          {SURFACE_RAMP_DARK.map((s) => (
            <div className="swatch" key={s.tok}>
              <div className="swatch-block" style={{ background: s.val }} />
              <div className="swatch-info">
                <div className="swatch-name">{s.name}</div>
                <div className="swatch-val">{s.val}</div>
                <div className="swatch-tok">{s.tok}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="canvas-label">
          Surface 0 = deepest (dock bg, modal backdrop) → Surface 6 = most
          raised (hover states, active cards). Each step is ~4-6 lightness units
          apart.
        </div>
      </div>

      {/* LIGHT MODE SURFACE */}
      <div className="subsection">
        <div className="subsection-title">
          Surface ramp · light mode (7 steps)
        </div>
        <div className="color-grid">
          {SURFACE_RAMP_LIGHT.map((s) => (
            <div className="swatch" key={s.name}>
              <div
                className="swatch-block"
                style={{ background: s.val, border: "1px solid #ddd" }}
              />
              <div className="swatch-info">
                <div className="swatch-name">{s.name}</div>
                <div className="swatch-val">{s.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="canvas-label">
          In light mode the ramp inverts: Surface 0 is the lightest grey (body)
          and Surface 3 is pure white (cards). Enable via{" "}
          <span className="icode">data-theme="light"</span> on &lt;html&gt;.
        </div>
      </div>

      {/* BRAND ACCENT SLOTS */}
      <div className="subsection">
        <div className="subsection-title">
          Brand accent slots · the only 2 colors that change per brand
        </div>
        <div className="rule-box">
          <p>
            These two slots are the <strong>only</strong> colors that change
            between brands. Everything else is fixed. <strong>Primary</strong> =
            the main action color and all its derived tints.{" "}
            <strong>Secondary</strong> = the complement, used for metadata and
            decorative accents.
          </p>
        </div>
        <div className="canvas row" style={{ alignItems: "stretch" }}>
          <div style={{ flex: "1", minWidth: "180px" }}>
            <div
              style={{
                height: "56px",
                background: "var(--ui-gradient-primary)",
                borderRadius: "var(--ui-r-md)",
                marginBottom: "12px",
              }}
            />
            <div
              style={{
                fontSize: "var(--ui-text-xs)",
                fontFamily: "var(--ui-font-mono)",
                color: "var(--ui-text-tertiary)",
                marginBottom: "6px",
                fontWeight: 700,
              }}
            >
              PRIMARY FAMILY
            </div>
            {PRIMARY_TOKENS.map((t) => (
              <div
                key={t}
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--ui-font-mono)",
                  color: "var(--ui-text-disabled)",
                  lineHeight: 1.7,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ flex: "1", minWidth: "180px" }}>
            <div
              style={{
                height: "56px",
                background: "var(--ui-accent-secondary)",
                borderRadius: "var(--ui-r-md)",
                marginBottom: "12px",
              }}
            />
            <div
              style={{
                fontSize: "var(--ui-text-xs)",
                fontFamily: "var(--ui-font-mono)",
                color: "var(--ui-text-tertiary)",
                marginBottom: "6px",
                fontWeight: 700,
              }}
            >
              SECONDARY FAMILY
            </div>
            {SECONDARY_TOKENS.map((t) => (
              <div
                key={t}
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--ui-font-mono)",
                  color: "var(--ui-text-disabled)",
                  lineHeight: 1.7,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ flex: "1", minWidth: "180px" }}>
            <div
              className="open-slot"
              style={{
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
                fontSize: "11px",
              }}
            >
              <span>your brand</span>
            </div>
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
                color: "var(--ui-text-disabled)",
                lineHeight: 1.7,
              }}
            >
              <div>.brand-myapp {"{"}</div>
              <div style={{ paddingLeft: "12px" }}>--brand-primary: #HEX;</div>
              <div style={{ paddingLeft: "12px" }}>
                --brand-secondary: #HEX;
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 BRAND PRESETS */}
      <div className="subsection">
        <div className="subsection-title">The 5 base brand presets</div>
        <div
          className="color-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          }}
        >
          {BRAND_PRESETS.map((b) => (
            <div className="swatch" key={b.class}>
              <div
                style={{
                  height: "40px",
                  background: `linear-gradient(135deg, ${b.primary}, ${b.secondary})`,
                }}
              />
              <div className="swatch-info">
                <div className="swatch-name">{b.name}</div>
                <div className="swatch-val">{b.primary}</div>
                <div className="swatch-tok">.{b.class}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED SEMANTIC COLORS */}
      <div className="subsection">
        <div className="subsection-title">
          Fixed semantic colors · universal meaning across all brands
        </div>
        <div className="color-grid">
          {FIXED_SEMANTIC_COLORS.map((s) => (
            <div className="swatch" key={s.tok}>
              <div className="swatch-block" style={{ background: s.val }} />
              <div className="swatch-info">
                <div className="swatch-name">{s.name}</div>
                <div className="swatch-val">{s.val}</div>
                <div className="swatch-tok">{s.tok}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="canvas-label">
          These are universal. A green dot means "connected" in every brand that
          uses this system. Never override semantic colors with brand colors.
        </div>
      </div>

      {/* COLOR SEMANTICS RULES */}
      <div className="subsection">
        <div className="subsection-title">
          Color usage rules · when to use what
        </div>
        <div className="canvas col" style={{ gap: "10px" }}>
          {COLOR_SEMANTICS_RULES.map((row) => (
            <div
              key={row.label}
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  background: row.color,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "var(--ui-text-xs)",
                  fontFamily: "var(--ui-font-mono)",
                  color: "var(--ui-text-disabled)",
                  width: "70px",
                }}
              >
                {row.label}
              </span>
              <span
                style={{
                  fontSize: "var(--ui-text-xs)",
                  fontFamily: "var(--ui-font-mono)",
                  color: "var(--ui-text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                {row.rule}
              </span>
            </div>
          ))}
        </div>
        <div
          className="warn-box"
          style={{ marginTop: "16px", marginBottom: 0 }}
        >
          <p>
            <strong>Never decorate with semantic colors.</strong> If something
            is green because it "looks nice," that is a failure. Green means
            connected/success — full stop.
          </p>
        </div>
      </div>
    </section>
  );
};
