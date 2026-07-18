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
            Advanced conversational agent for TUI. Features a{" "}
            <strong>Machined Sidebar</strong> and a scrolling chat buffer with
            precise timestamp alignment.
          </p>
          <div className="rule-box">
            <p>
              <strong>TUI Standard:</strong> Uses <code>UTF-8</code> block
              characters for borders. Zero anti-aliasing on lines.
            </p>
          </div>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "#0a0c0f",
            borderRadius: "var(--ui-r-md)",
            border: "1px solid var(--ui-border-default)",
            boxShadow: "var(--ui-inset-deep)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              minWidth: "800px",
              padding: "16px",
              fontFamily: '"DM Mono", monospace',
              fontSize: "12px",
              lineHeight: "1",
              color: "#d0d0d0",
              letterSpacing: "0",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {/* TOP STATUS BAR */}
            <div
              style={{
                color: "var(--brand-primary)",
                marginBottom: "8px",
                whiteSpace: "pre",
                fontFamily: '"DM Mono", monospace',
              }}
            >
              {
                "┌──────────────────────────────────────────────────────────────────────────────────────────┐\n"
              }
              {"│ "}
              <span style={{ fontWeight: 800 }}>TUNACHAT_PRO v2.0</span>
              {
                " ─── [ SESSION: 0xFD42 ] ─────────────────────────── [ STATUS: "
              }
              <span style={{ color: "var(--ui-success)" }}>ONLINE</span>
              {" ] │\n"}
              {
                "└──────────────────────────────────────────────────────────────────────────────────────────┘"
              }
            </div>

            <div style={{ display: "flex", gap: "0" }}>
              {/* USER LIST SIDEBAR */}
              <div
                style={{
                  width: "160px",
                  color: "var(--ui-text-tertiary)",
                  whiteSpace: "pre",
                  fontFamily: '"DM Mono", monospace',
                }}
              >
                {"┌─ USERS ──────┐\n"}
                {"│ "}
                <span style={{ color: "var(--ui-success)" }}>●</span>
                {" TunaBot   │\n"}
                {"│ "}
                <span style={{ color: "var(--ui-success)" }}>●</span>
                {" Julio_Dev │\n"}
                {"│ "}
                <span style={{ color: "#555" }}>○</span>
                {" Guest_02  │\n"}
                {"│              │\n"}
                {"│              │\n"}
                {"│              │\n"}
                {"│              │\n"}
                {"│              │\n"}
                {"└──────────────┘"}
              </div>

              {/* CHAT BUFFER */}
              <div
                style={{
                  flex: 1,
                  marginLeft: "8px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    color: "var(--brand-primary)",
                    opacity: 0.7,
                    whiteSpace: "nowrap",
                  }}
                >
                  ─── MESSAGE_HISTORY
                  ──────────────────────────────────────────────────────────
                </div>
                <div
                  style={{
                    padding: "8px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--ui-text-disabled)" }}>
                      [10:55:01]
                    </span>
                    <span
                      style={{ color: "var(--brand-primary)", fontWeight: 800 }}
                    >
                      &lt;TUNA&gt;
                    </span>
                    <span>System check complete. All orbits are stable.</span>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--ui-text-disabled)" }}>
                      [10:55:24]
                    </span>
                    <span
                      style={{
                        color: "var(--ui-text-primary)",
                        fontWeight: 800,
                      }}
                    >
                      &lt;JULIO&gt;
                    </span>
                    <span>
                      Excellent. Deploying the <strong>MangoFetch</strong> v1.0
                      update.
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--ui-text-disabled)" }}>
                      [10:56:10]
                    </span>
                    <span
                      style={{ color: "var(--brand-primary)", fontWeight: 800 }}
                    >
                      &lt;TUNA&gt;
                    </span>
                    <span style={{ color: "var(--ui-success)" }}>
                      Update received. Re-calculating manifold trajectories...
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    borderTop: "1px solid #333",
                    paddingTop: "12px",
                  }}
                >
                  <span
                    style={{ color: "var(--brand-primary)", fontWeight: 800 }}
                  >
                    &gt;
                  </span>{" "}
                  <span
                    style={{
                      background: "#fff",
                      color: "#000",
                      padding: "0 2px",
                    }}
                  >
                    _
                  </span>
                </div>
              </div>
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
            background: "#0a0c0f",
            borderRadius: "var(--ui-r-md)",
            border: "1px solid var(--ui-border-default)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              minWidth: "800px",
              padding: "24px",
              fontFamily: "var(--ui-font-mono)",
              fontSize: "11px",
              display: "flex",
              gap: "40px",
              color: "#d0d0d0",
            }}
          >
            {/* BRAND ASCII */}
            <div style={{ color: "var(--brand-primary)" }}>
              <pre
                style={{
                  lineHeight: "1",
                  margin: "0 0 20px 0",
                  fontWeight: 800,
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
      ▀▀▀▀▀▀▀
  M A N G O F E T C H`}
              </pre>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <div>
                  <span style={{ color: "var(--ui-text-disabled)" }}>OS:</span>{" "}
                  Monolith_OS x86_64
                </div>
                <div>
                  <span style={{ color: "var(--ui-text-disabled)" }}>
                    HOST:
                  </span>{" "}
                  Station_04_Baja
                </div>
                <div>
                  <span style={{ color: "var(--ui-text-disabled)" }}>
                    KERNEL:
                  </span>{" "}
                  6.8.4-orbital
                </div>
                <div>
                  <span style={{ color: "var(--ui-text-disabled)" }}>
                    SHELL:
                  </span>{" "}
                  msh 1.2
                </div>
                <div
                  style={{
                    marginTop: "12px",
                    height: "12px",
                    display: "flex",
                    gap: "2px",
                  }}
                >
                  <div style={{ flex: 1, background: "#111" }}></div>
                  <div style={{ flex: 1, background: "#333" }}></div>
                  <div
                    style={{ flex: 1, background: "var(--brand-primary)" }}
                  ></div>
                  <div
                    style={{
                      flex: 1,
                      background: "var(--ui-accent-secondary)",
                    }}
                  ></div>
                  <div
                    style={{ flex: 1, background: "var(--ui-success)" }}
                  ></div>
                  <div
                    style={{ flex: 1, background: "var(--ui-warning)" }}
                  ></div>
                  <div
                    style={{ flex: 1, background: "var(--ui-danger)" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* TELEMETRY */}
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    color: "var(--brand-primary)",
                    fontWeight: 800,
                    marginBottom: "4px",
                  }}
                >
                  CPU_LOAD_HISTORY
                </div>
                <div
                  style={{
                    color: "var(--ui-success)",
                    fontSize: "16px",
                    letterSpacing: "-1px",
                  }}
                >
                  ⡇⡎⡖⡭⡜⡸⡄⡒⡵⡹⡏⡗⡻⡟⡿⡿⡾⡷⡶⡵⡴⡳⡲⡱⡰⡯⡮⡭⡬⡫⡪⡩⡨⡧⡦⡥⡤⡣⡢⡡⡠
                </div>
              </div>

              <div style={{ border: "1px solid #333", padding: "12px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "10px",
                    color: "var(--ui-text-disabled)",
                    borderBottom: "1px solid #333",
                    paddingBottom: "4px",
                    marginBottom: "8px",
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
                    col: "var(--ui-text-disabled)",
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "10px",
                      padding: "2px 0",
                    }}
                  >
                    <span style={{ fontWeight: 800 }}>{row.name}</span>
                    <span style={{ color: row.col }}>[{row.status}]</span>
                    <span>{row.temp}</span>
                  </div>
                ))}
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
            background: "#0a0c0f",
            borderRadius: "var(--ui-r-md)",
            border: "1px solid var(--ui-border-default)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              minWidth: "800px",
              height: "400px",
              fontFamily: "var(--ui-font-mono)",
              fontSize: "12px",
              display: "flex",
              flexDirection: "column",
              color: "#d0d0d0",
            }}
          >
            {/* EDITOR VIEWPORT */}
            <div style={{ flex: 1, display: "flex" }}>
              {/* GUTTER */}
              <div
                style={{
                  width: "40px",
                  background: "#161920",
                  color: "#555",
                  textAlign: "right",
                  padding: "12px 8px",
                  borderRight: "1px solid #333",
                }}
              >
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
                10
                <br />
                11
              </div>
              {/* CODE */}
              <div style={{ flex: 1, padding: "12px", lineHeight: "1.4" }}>
                <span style={{ color: "var(--ui-accent-secondary)" }}>
                  import
                </span>{" "}
                {"{"}{" "}
                <span style={{ color: "var(--brand-primary)" }}>
                  GravityCore
                </span>{" "}
                {"}"}{" "}
                <span style={{ color: "var(--ui-accent-secondary)" }}>
                  from
                </span>{" "}
                <span style={{ color: "var(--ui-success-light)" }}>
                  "@monolith/ui"
                </span>
                ;<br />
                <br />
                <span style={{ color: "#555" }}>
                  // Initialize orbital system
                </span>
                <br />
                <span style={{ color: "var(--ui-accent-secondary)" }}>
                  const
                </span>{" "}
                <span style={{ color: "var(--brand-primary)" }}>station</span> ={" "}
                <span style={{ color: "var(--ui-accent-secondary)" }}>new</span>{" "}
                GravityCore({"{"}
                <br />
                &nbsp;&nbsp;id:{" "}
                <span style={{ color: "var(--ui-success-light)" }}>
                  "STATION_04"
                </span>
                ,<br />
                &nbsp;&nbsp;power:{" "}
                <span style={{ color: "var(--ui-warning)" }}>100</span>
                <br />
                {"}"});
                <br />
                <br />
                <span style={{ color: "var(--brand-primary)" }}>station</span>
                .ignite();
                <br />
                <br />
                <div
                  style={{
                    background: "#333",
                    width: "fit-content",
                    padding: "0 4px",
                  }}
                >
                  station.sync_orbits();
                </div>
              </div>
            </div>

            {/* VIM-LIKE STATUS LINE */}
            <div
              style={{
                display: "flex",
                height: "22px",
                fontSize: "11px",
                fontWeight: 800,
              }}
            >
              <div
                style={{
                  background: "var(--brand-primary)",
                  color: "#000",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                NORMAL
              </div>
              <div
                style={{
                  background: "var(--brand-primary-bg)",
                  color: "var(--brand-primary)",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                App.tsx
              </div>
              <div style={{ flex: 1, background: "#1a1d24" }}></div>
              <div
                style={{
                  background: "#1a1d24",
                  color: "#555",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                utf-8
              </div>
              <div
                style={{
                  background: "var(--ui-surface-3)",
                  color: "#fff",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                TypeScript
              </div>
              <div
                style={{
                  background: "var(--brand-primary)",
                  color: "#000",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
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
