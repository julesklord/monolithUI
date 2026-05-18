import React from "react";
import {
  CaretCircleDoubleRight,
  CaretCircleDoubleLeft,
  Cpu,
  GitBranch,
  SpeakerHigh,
  PlayCircle,
  TerminalWindow,
  MonitorPlay,
  Cube,
} from "@phosphor-icons/react";

export const DesktopUI: React.FC = () => {
  return (
    <section className="doc-section" id="desktop-ui">
      <div className="section-eyebrow">13</div>
      <h2 className="section-title">
        Mocks: Desktop Native <em>UI</em>
      </h2>
      <p className="section-desc">
        Native workstation simulations. These mocks demonstrate{" "}
        <strong>High-Density Windows</strong>, multi-layer depth, and the{" "}
        <strong>Orbital Context</strong> system designed for high-performance
        desktop applications.
      </p>

      {/* Mock 1: Gemini Station */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">Example 1: Gemini Station</div>
          <p className="section-desc" style={{ marginBottom: "20px" }}>
            A mission-control dashboard for AI orchestration. Features a{" "}
            <strong>Stacked Header</strong> and{" "}
            <strong>Floating Orbital Panels</strong>.
          </p>
          <div className="rule-box">
            <p>
              <strong>Density:</strong> Native desktop scale (1px borders, 11px
              mono labels). Focused on spatial economy.
            </p>
          </div>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-0)",
            borderRadius: "var(--ui-r-lg)",
            boxShadow: "var(--ui-shadow-lg), var(--ui-inset-deep)",
            border: "1px solid var(--ui-border-default)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Native System Bar */}
          <div
            style={{
              height: "32px",
              background: "var(--ui-surface-3)",
              borderBottom: "1px solid var(--ui-border-subtle)",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ff5f56",
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#27c93f",
                }}
              ></div>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
                fontWeight: 800,
                color: "var(--ui-text-tertiary)",
                letterSpacing: "0.1em",
              }}
            >
              GEMINI_STATION_CORE // v0.8.2-BETA
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                color: "var(--ui-text-disabled)",
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
              }}
            >
              <GitBranch size={12} /> MASTER*
              <div
                style={{
                  width: "1px",
                  height: "12px",
                  background: "var(--ui-border-subtle)",
                }}
              ></div>
              <Cpu size={12} /> 12.4%
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", minHeight: "360px" }}>
            {/* Left Context Nav */}
            <div
              style={{
                width: "220px",
                background: "var(--ui-surface-1)",
                borderRight: "1px solid var(--ui-border-subtle)",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 800,
                    color: "var(--brand-primary)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  WORKSPACE_MAP
                </div>
                <div
                  className="surface-card"
                  style={{
                    padding: "10px",
                    background: "var(--ui-surface-2)",
                    borderStyle: "dashed",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 700 }}>
                    Monolith_Design
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      color: "var(--ui-text-disabled)",
                      fontFamily: "var(--ui-font-mono)",
                    }}
                  >
                    /root/dev/monolith
                  </div>
                </div>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 800,
                    color: "var(--ui-text-disabled)",
                    marginBottom: "4px",
                  }}
                >
                  OPERATIONS
                </div>
                {[
                  {
                    icon: <TerminalWindow size={14} />,
                    label: "Active_Console",
                  },
                  {
                    icon: <MonitorPlay size={14} />,
                    label: "Neural_Visualizer",
                  },
                  { icon: <Cube size={14} />, label: "3D_Orbit_Render" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 8px",
                      borderRadius: "var(--ui-r-sm)",
                      background:
                        i === 0 ? "var(--brand-primary-bg)" : "transparent",
                      color:
                        i === 0
                          ? "var(--brand-primary)"
                          : "var(--ui-text-secondary)",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Viewport: The Sun */}
            <div
              style={{
                flex: 1,
                background: "var(--ui-surface-0)",
                padding: "24px",
                position: "relative",
              }}
            >
              <div
                className="surface-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  boxShadow: "var(--ui-edge-light), var(--ui-shadow-lg)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <div className="sdot on"></div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        fontFamily: "var(--ui-font-mono)",
                      }}
                    >
                      LIVE_NEURAL_LINK
                    </span>
                  </div>
                  <div className="tag primary">READY</div>
                </div>

                <div
                  style={{
                    flex: 1,
                    background: "var(--ui-surface-1)",
                    borderRadius: "var(--ui-r-sm)",
                    border: "1px solid var(--ui-border-subtle)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "200px",
                      height: "200px",
                      border: "1px dashed var(--brand-primary)",
                      borderRadius: "50%",
                      opacity: 0.2,
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "120px",
                      height: "120px",
                      border: "1px solid var(--brand-primary)",
                      borderRadius: "50%",
                      boxShadow: "0 0 20px var(--ui-accent-primary-glow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "var(--brand-primary)",
                        borderRadius: "50%",
                        opacity: 0.1,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock 2: T-Sonic Native Pro */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">Example 2: T-Sonic Engine</div>
          <p className="section-desc" style={{ marginBottom: "20px" }}>
            Precision audio engineering tool. Demonstrates{" "}
            <strong>Machined Control Surfaces</strong> and multi-state transport
            orbits.
          </p>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-1)",
            border: "1px solid var(--ui-border-default)",
            borderRadius: "var(--ui-r-lg)",
            boxShadow: "var(--ui-shadow-lg)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ height: "360px", display: "flex" }}>
            {/* Library Orbit */}
            <div
              style={{
                width: "180px",
                background: "var(--ui-surface-2)",
                borderRight: "1px solid var(--ui-border-subtle)",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  color: "var(--ui-text-disabled)",
                  marginBottom: "12px",
                }}
              >
                AUDIO_LIBRARY
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                {[
                  "kick_core_01.wav",
                  "snare_machined.wav",
                  "hat_orbital_v2.wav",
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "6px 8px",
                      fontSize: "11px",
                      color:
                        i === 0
                          ? "var(--brand-primary)"
                          : "var(--ui-text-secondary)",
                      background:
                        i === 0 ? "var(--ui-surface-3)" : "transparent",
                      borderRadius: "2px",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Transport View */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  flex: 1,
                  padding: "32px",
                  display: "flex",
                  gap: "32px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    background: "var(--ui-surface-3)",
                    border: "1px solid var(--ui-border-default)",
                    borderRadius: "var(--ui-r-md)",
                    boxShadow: "var(--ui-inset-shallow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "80%",
                      border: "1px solid var(--brand-primary)",
                      borderRadius: "50%",
                      borderStyle: "double",
                      opacity: 0.4,
                    }}
                  ></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--brand-primary)",
                      fontFamily: "var(--ui-font-mono)",
                      fontWeight: 800,
                    }}
                  >
                    SOURCE: CHANNEL_04
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    ORBITAL_SYNTH
                  </div>
                  <div
                    style={{
                      marginTop: "16px",
                      height: "32px",
                      display: "flex",
                      gap: "3px",
                      alignItems: "flex-end",
                    }}
                  >
                    {[
                      30, 50, 80, 40, 60, 90, 70, 50, 85, 30, 20, 60, 40, 80,
                      55,
                    ].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          background: "var(--brand-primary)",
                          opacity: 0.6,
                          borderRadius: "1px",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Machined Controls */}
              <div
                style={{
                  height: "80px",
                  background: "var(--ui-surface-3)",
                  borderTop: "1px solid var(--ui-border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 32px",
                  gap: "24px",
                }}
              >
                <CaretCircleDoubleLeft size={20} weight="duotone" />
                <div
                  className="icon-tactical"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--ui-r-md)",
                    background: "var(--brand-primary)",
                    borderColor: "var(--brand-primary-border)",
                    color: "#000",
                    boxShadow: "var(--ui-inset-deep)",
                  }}
                >
                  <PlayCircle size={28} weight="fill" />
                </div>
                <CaretCircleDoubleRight size={20} weight="duotone" />
                <div
                  style={{
                    flex: 1,
                    height: "6px",
                    background: "var(--ui-surface-5)",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "42%",
                      height: "100%",
                      background: "var(--brand-primary)",
                      boxShadow: "0 0 10px var(--ui-accent-primary-glow)",
                    }}
                  ></div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <SpeakerHigh size={18} weight="duotone" />
                  <div
                    style={{
                      width: "80px",
                      height: "10px",
                      background: "var(--ui-surface-2)",
                      border: "1px solid var(--ui-border-default)",
                      borderRadius: "2px",
                      padding: "1px",
                    }}
                  >
                    <div
                      style={{
                        width: "75%",
                        height: "100%",
                        background: "var(--ui-text-primary)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock 3: T-Edit Pro (Native IDE) */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">Example 3: T-Edit Professional</div>
          <p className="section-desc" style={{ marginBottom: "20px" }}>
            The ultimate native IDE experience. Featuring a{" "}
            <strong>Triple-Gutter</strong> system and{" "}
            <strong>Stacked Context</strong> orbits.
          </p>
          <div className="rule-box">
            <p>
              <strong>Architecture:</strong> Uses <code>Surface 0</code> for
              code focus, <code>Surface 1</code> for navigator, and{" "}
              <code>Surface 2</code> for terminal diagnostics.
            </p>
          </div>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-0)",
            border: "1px solid var(--ui-border-default)",
            borderRadius: "var(--ui-r-lg)",
            boxShadow: "var(--ui-shadow-lg)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Editor Header / Tab Bar */}
          <div
            style={{
              height: "36px",
              background: "var(--ui-surface-2)",
              borderBottom: "1px solid var(--ui-border-subtle)",
              display: "flex",
              alignItems: "center",
              padding: "0 4px",
              gap: "2px",
            }}
          >
            <div
              className="ui-tab-btn active"
              style={{ height: "28px", fontSize: "11px" }}
            >
              App.tsx
            </div>
            <div
              className="ui-tab-btn"
              style={{ height: "28px", fontSize: "11px", opacity: 0.6 }}
            >
              Schema.sql
            </div>
            <div
              className="ui-tab-btn"
              style={{ height: "28px", fontSize: "11px", opacity: 0.6 }}
            >
              Config.json
            </div>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "12px",
                display: "flex",
                gap: "8px",
              }}
            >
              <div
                className="tag primary"
                style={{ borderRadius: "2px", fontSize: "9px" }}
              >
                GIT_PUSH
              </div>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", minHeight: "340px" }}>
            {/* File Navigator */}
            <div
              style={{
                width: "200px",
                background: "var(--ui-surface-1)",
                borderRight: "1px solid var(--ui-border-subtle)",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  color: "var(--ui-text-disabled)",
                  marginBottom: "12px",
                }}
              >
                EXPLORER
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  fontSize: "11px",
                  fontFamily: "var(--ui-font-mono)",
                }}
              >
                <div style={{ color: "var(--brand-primary)", fontWeight: 700 }}>
                  ▼ src
                </div>
                <div style={{ paddingLeft: "12px" }}>▼ components</div>
                <div
                  style={{
                    paddingLeft: "24px",
                    color: "var(--brand-primary)",
                    background: "var(--brand-primary-bg)",
                    borderLeft: "2px solid var(--brand-primary)",
                    paddingRight: "4px",
                  }}
                >
                  Button.tsx
                </div>
                <div style={{ paddingLeft: "24px", opacity: 0.6 }}>
                  Card.tsx
                </div>
                <div style={{ paddingLeft: "12px" }}>▼ styles</div>
                <div style={{ paddingLeft: "24px", opacity: 0.6 }}>
                  index.css
                </div>
              </div>
            </div>

            {/* Code Buffer */}
            <div
              style={{
                flex: 1,
                display: "flex",
                background: "var(--ui-surface-0)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  background: "var(--ui-surface-1)",
                  borderRight: "1px solid var(--ui-border-subtle)",
                  padding: "12px 0",
                  textAlign: "right",
                  color: "var(--ui-text-disabled)",
                  fontSize: "11px",
                  fontFamily: "var(--ui-font-mono)",
                  lineHeight: "1.6",
                }}
              >
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
                10
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  fontSize: "12px",
                  fontFamily: "var(--ui-font-mono)",
                  lineHeight: "1.6",
                  color: "var(--ui-text-primary)",
                }}
              >
                <span style={{ color: "var(--ui-accent-secondary)" }}>
                  export const
                </span>{" "}
                <span style={{ color: "var(--brand-primary)" }}>Engine</span> =
                () =&gt; {"{"}
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "var(--ui-accent-secondary)" }}>
                  const
                </span>{" "}
                state ={" "}
                <span style={{ color: "var(--ui-success-light)" }}>
                  useOrbit()
                </span>
                ;<br />
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "var(--ui-accent-secondary)" }}>
                  return
                </span>{" "}
                (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span style={{ color: "var(--brand-primary)" }}>
                  MachinedLayer
                </span>
                &gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}state.active ?{" "}
                <span style={{ color: "var(--ui-success-light)" }}>'SYNC'</span>{" "}
                : <span style={{ color: "var(--ui-danger)" }}>'OFF'</span>
                {"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
                <span style={{ color: "var(--brand-primary)" }}>
                  MachinedLayer
                </span>
                &gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                {"}"};
              </div>
            </div>

            {/* Diagnostic Panel */}
            <div
              style={{
                width: "180px",
                background: "var(--ui-surface-2)",
                borderLeft: "1px solid var(--ui-border-subtle)",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  color: "var(--ui-text-disabled)",
                  marginBottom: "12px",
                }}
              >
                DIAGNOSTICS
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <div className="sdot on"></div>{" "}
                  <span style={{ opacity: 0.8 }}>Ready</span>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--ui-text-tertiary)",
                    borderTop: "1px solid var(--ui-border-subtle)",
                    paddingTop: "8px",
                    marginTop: "4px",
                  }}
                >
                  METRICS:
                  <br />
                  Heap: 42MB
                  <br />
                  FPS: 60.0
                </div>
              </div>
            </div>
          </div>

          {/* Editor Footer */}
          <div
            style={{
              height: "24px",
              background: "var(--brand-primary)",
              color: "var(--ui-surface-0)",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              fontSize: "10px",
              fontWeight: 800,
              fontFamily: "var(--ui-font-mono)",
            }}
          >
            <div style={{ display: "flex", gap: "16px" }}>
              <span>NORMAL_MODE</span>
              <span>MASTER*</span>
              <span>UTF-8</span>
            </div>
            <div style={{ marginLeft: "auto" }}>Ln 8, Col 32 (TSX)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
