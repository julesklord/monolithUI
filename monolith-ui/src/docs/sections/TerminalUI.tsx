import React from "react";

export const TerminalUI: React.FC = () => {
  return (
    <section className="doc-section" id="terminal-ui">
      <div className="section-eyebrow">15</div>
      <h2 className="section-title">
        Mocks: TUI <em>Console</em>
      </h2>
      <p className="section-desc">
        High-fidelity <strong>Terminal User Interfaces</strong>. These mocks are
        designed to be 100% replicable in advanced terminal emulators (WezTerm,
        Alacritty) using block characters and RGB escape sequences.
      </p>

      {/* 1. TUNACHAT (Agent with Personality & Sidebar) */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">1. TunaChat Pro</div>
          <p className="section-desc" style={{ marginBottom: "20px" }}>
            Advanced conversational agent for TUI. Features an
            inverted status header bar, a clean monospace layout, and a scrolling chat buffer with
            precise timestamp alignment.
          </p>
          <div className="rule-box">
            <p>
              <strong>TUI Standard:</strong> Uses <code>UTF-8</code> block
              characters for borders and inverted status line banners for clean layout separation.
            </p>
          </div>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-terminal)",
            borderRadius: "var(--ui-r-md)",
            border: "1px solid var(--ui-border-default)",
            boxShadow: "var(--ui-inset-deep)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              minWidth: "800px",
              display: "flex",
              flexDirection: "column",
              fontFamily: "var(--ui-font-mono)",
              fontSize: "12px",
              lineHeight: "1.4",
              color: "var(--ui-text-secondary)",
              userSelect: "none",
            }}
          >
            {/* TOP STATUS BAR (INVERTED AS SPECIFIED IN TUI MODE) */}
            <div
              style={{
                background: "var(--brand-primary)",
                color: "var(--ui-surface-0)",
                padding: "4px 10px",
                fontWeight: 800,
                display: "flex",
                justifyContent: "space-between",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <div>TUNACHAT_PRO v2.0 // SESSION: 0xFD42</div>
              <div>STATUS: ONLINE</div>
            </div>

            {/* MAIN CONTENT AREA WITH BORDER GRID */}
            <div style={{ display: "flex", background: "var(--ui-surface-terminal)", borderBottom: "1px solid var(--ui-border-subtle)" }}>
              {/* SIDEBAR */}
              <div
                style={{
                  width: "180px",
                  borderRight: "1px solid var(--ui-border-subtle)",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ color: "var(--brand-primary)", fontWeight: 800, fontSize: "11px", letterSpacing: "0.05em", marginBottom: "4px" }}>
                  ┌─ USERS ────────┐
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: "var(--ui-success)" }}>●</span>
                  <span>TunaBot</span>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: "var(--ui-success)" }}>●</span>
                  <span style={{ color: "var(--ui-text-primary)", fontWeight: 700 }}>Julio_Dev</span>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", opacity: 0.5 }}>
                  <span>○</span>
                  <span>Guest_02</span>
                </div>
                <div style={{ flex: 1 }} />
                <div style={{ color: "var(--brand-primary)", fontWeight: 800, fontSize: "11px", letterSpacing: "0.05em" }}>
                  └────────────────┘
                </div>
              </div>

              {/* CHAT BUFFER */}
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minHeight: "200px",
                }}
              >
                <div style={{ color: "var(--ui-text-disabled)", fontSize: "11px", borderBottom: "1px solid var(--ui-border-subtle)", paddingBottom: "4px" }}>
                  ─── MESSAGE_HISTORY ──────────────────────────────────────────────────
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--ui-text-disabled)" }}>[10:55:01]</span>
                    <span style={{ color: "var(--brand-primary)", fontWeight: 700 }}>&lt;TUNA&gt;</span>
                    <span>System check complete. All orbits are stable.</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--ui-text-disabled)" }}>[10:55:24]</span>
                    <span style={{ color: "var(--ui-text-primary)", fontWeight: 700 }}>&lt;JULIO&gt;</span>
                    <span>Deploying update to <strong style={{ color: "var(--ui-accent-secondary)" }}>MangoFetch</strong> v1.0.</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--ui-text-disabled)" }}>[10:56:10]</span>
                    <span style={{ color: "var(--brand-primary)", fontWeight: 700 }}>&lt;TUNA&gt;</span>
                    <span style={{ color: "var(--ui-success-light)" }}>Update received. Trajectories stable.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* INPUT PROMPT */}
            <div
              style={{
                padding: "8px 12px",
                background: "var(--ui-surface-0)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "var(--brand-primary)", fontWeight: 800 }}>❯</span>
              <span style={{ color: "var(--ui-text-primary)" }}>monolith deploy --env production</span>
              <span style={{ background: "var(--brand-primary)", width: "8px", height: "15px", display: "inline-block" }} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MANGOFETCH (Brand & Telemetry Graphs) */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">2. MangoFetch Manager</div>
          <p className="section-desc">
            The industry-standard fetch tool. Includes{" "}
            <strong>Braille-rendered sparklines</strong> and high-contrast
            system telemetry.
          </p>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-terminal)",
            borderRadius: "var(--ui-r-md)",
            border: "1px solid var(--ui-border-default)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              minWidth: "800px",
              display: "flex",
              flexDirection: "column",
              fontFamily: "var(--ui-font-mono)",
              fontSize: "12px",
              lineHeight: "1.4",
              color: "var(--ui-text-secondary)",
              userSelect: "none",
            }}
          >
            {/* TOP STATUS BAR */}
            <div
              style={{
                background: "var(--brand-primary)",
                color: "var(--ui-surface-0)",
                padding: "4px 10px",
                fontWeight: 800,
                display: "flex",
                justifyContent: "space-between",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <div>MANGOFETCH v1.2</div>
              <div>HOST: Station_04_Baja</div>
            </div>

            {/* MAIN CONTENT SPLIT */}
            <div style={{ display: "flex", padding: "20px", gap: "32px", background: "var(--ui-surface-terminal)" }}>
              {/* LEFT: BRAND ASCII */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <pre
                  style={{
                    margin: 0,
                    color: "var(--brand-primary)",
                    fontWeight: 800,
                    lineHeight: "1.1",
                    fontSize: "11px",
                  }}
                >
                  {`      ▄▄▄▄▄▄▄
    ▄███████████▄
  ▄█████▀▀▀▀▀█████▄
 █████▀       ▀█████
 █████         █████
 █████▄       ▄█████
  ▀█████▄▄▄▄▄█████▀
    ▀███████████▀
       ▀▀▀▀▀▀▀`}
                </pre>
                <div style={{ fontSize: "11px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div><span style={{ color: "var(--ui-text-disabled)" }}>OS:</span> Monolith_OS x86_64</div>
                  <div><span style={{ color: "var(--ui-text-disabled)" }}>KERNEL:</span> 6.8.4-orbital</div>
                  <div><span style={{ color: "var(--ui-text-disabled)" }}>SHELL:</span> msh 1.2</div>
                </div>
              </div>

              {/* RIGHT: TELEMETRY */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* CPU LOAD SPARKLINE */}
                <div>
                  <div style={{ color: "var(--brand-primary)", fontWeight: 800, fontSize: "11px", marginBottom: "4px" }}>
                    CPU_LOAD_HISTORY
                  </div>
                  <div
                    style={{
                      color: "var(--ui-success)",
                      fontSize: "14px",
                      letterSpacing: "1px",
                    }}
                  >
                    ⡇⡎⡖⡭⡜⡸⡄⡒⡵⡹⡏⡗⡻⡟⡿⡿⡾⡷⡶⡵⡴⡳⡲⡱⡰
                  </div>
                </div>

                {/* COMPONENT STATUS TABLE */}
                <div style={{ border: "1px solid var(--ui-border-default)", background: "var(--ui-surface-1)", padding: "10px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.5fr 1fr 1fr",
                      gap: "8px",
                      color: "var(--ui-text-disabled)",
                      borderBottom: "1px solid var(--ui-border-default)",
                      paddingBottom: "6px",
                      marginBottom: "8px",
                      fontSize: "10px",
                      fontWeight: 800,
                    }}
                  >
                    <span>COMPONENT</span>
                    <span>STATUS</span>
                    <span>TEMP</span>
                  </div>
                  {[
                    {
                      name: "CORE_ENGINE",
                      status: "STABLE",
                      temp: "42°C",
                      col: "var(--ui-success)",
                    },
                    {
                      name: "GRAVITY_DRIVE",
                      status: "ACTIVE",
                      temp: "68°C",
                      col: "var(--ui-warning)",
                    },
                    {
                      name: "NEURAL_LINK",
                      status: "IDLE",
                      temp: "31°C",
                      col: "var(--ui-text-tertiary)",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr 1fr 1fr",
                        gap: "8px",
                        fontSize: "11px",
                      }}
                    >
                      <span style={{ fontWeight: 700, color: "var(--ui-text-primary)" }}>{row.name}</span>
                      <span style={{ color: row.col }}>[{row.status}]</span>
                      <span>{row.temp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THAYA EDITOR (The IDE Console) */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">3. Thaya Editor Pro</div>
          <p className="section-desc">
            Ultimate code terminal. A grid-based IDE mock using{" "}
            <strong>Powerline Symbols</strong> and <strong>Vim-inspired</strong>{" "}
            layout rules.
          </p>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-terminal)",
            borderRadius: "var(--ui-r-md)",
            border: "1px solid var(--ui-border-default)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              minWidth: "800px",
              display: "flex",
              flexDirection: "column",
              fontFamily: "var(--ui-font-mono)",
              fontSize: "12px",
              lineHeight: "1.4",
              color: "var(--ui-text-secondary)",
              userSelect: "none",
            }}
          >
            {/* EDITOR VIEWPORT */}
            <div style={{ display: "flex", flex: 1, background: "var(--ui-surface-terminal)", minHeight: "220px" }}>
              {/* GUTTER */}
              <div
                style={{
                  width: "40px",
                  background: "var(--ui-surface-0)",
                  color: "var(--ui-text-disabled)",
                  textAlign: "right",
                  padding: "12px 8px 12px 0",
                  borderRight: "1px solid var(--ui-border-subtle)",
                }}
              >
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11
              </div>

              {/* CODE */}
              <div style={{ flex: 1, padding: "12px", lineHeight: "1.4" }}>
                <span style={{ color: "var(--ui-accent-secondary)" }}>import</span> {"{"}{" "}
                <span style={{ color: "var(--brand-primary)" }}>GravityCore</span> {"}"}{" "}
                <span style={{ color: "var(--ui-accent-secondary)" }}>from</span>{" "}
                <span style={{ color: "var(--ui-success-light)" }}>"@monolith/ui"</span>;<br />
                <br />
                <span style={{ color: "var(--ui-text-disabled)" }}>// Initialize orbital system</span><br />
                <span style={{ color: "var(--ui-accent-secondary)" }}>const</span>{" "}
                <span style={{ color: "var(--brand-primary)" }}>station</span> ={" "}
                <span style={{ color: "var(--ui-accent-secondary)" }}>new</span> GravityCore({"{"}<br />
                &nbsp;&nbsp;id: <span style={{ color: "var(--ui-success-light)" }}>"STATION_04"</span>,<br />
                &nbsp;&nbsp;power: <span style={{ color: "var(--ui-warning)" }}>100</span><br />
                {"}"});<br />
                <br />
                <span style={{ color: "var(--brand-primary)" }}>station</span>.ignite();<br />
                <br />
                <div
                  style={{
                    background: "var(--ui-surface-2)",
                    width: "fit-content",
                    padding: "0 4px",
                    borderLeft: "2px solid var(--brand-primary)",
                  }}
                >
                  station.sync_orbits();
                </div>
              </div>
            </div>

            {/* VIM-LIKE STATUS LINE (TUI BLOCK CHARACTERS) */}
            <div
              style={{
                display: "flex",
                height: "22px",
                fontSize: "11px",
                fontWeight: 800,
                lineHeight: "22px",
                background: "var(--ui-surface-1)",
                borderTop: "1px solid var(--ui-border-default)",
              }}
            >
              <div
                style={{
                  background: "var(--brand-primary)",
                  color: "var(--ui-surface-0)",
                  padding: "0 12px",
                }}
              >
                █ NORMAL
              </div>
              <div
                style={{
                  background: "var(--ui-accent-primary-bg)",
                  color: "var(--ui-accent-primary-light)",
                  padding: "0 12px",
                }}
              >
                App.tsx
              </div>
              <div style={{ flex: 1, background: "var(--ui-surface-terminal)" }}></div>
              <div
                style={{
                  background: "var(--ui-surface-terminal)",
                  color: "var(--ui-text-tertiary)",
                  padding: "0 12px",
                }}
              >
                utf-8
              </div>
              <div
                style={{
                  background: "var(--ui-surface-2)",
                  color: "var(--ui-text-primary)",
                  padding: "0 12px",
                }}
              >
                TypeScript
              </div>
              <div
                style={{
                  background: "var(--brand-primary)",
                  color: "var(--ui-surface-0)",
                  padding: "0 12px",
                }}
              >
                10:42
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
