import React from "react";
import {
  Layout,
  Users,
  ChartBar,
  Gear,
  Bell,
  MagnifyingGlass,
  Sparkle,
  ArrowUpRight,
} from "@phosphor-icons/react";

export const WebUI: React.FC = () => {
  return (
    <section className="doc-section" id="web-ui">
      <div className="section-eyebrow">14</div>
      <h2 className="section-title">
        Mocks: Web-Based <em>UI</em>
      </h2>
      <p className="section-desc">
        High-fidelity translations of the <strong>MonolithUI</strong> philosophy
        for browser environments. These mocks demonstrate orbital balance,
        high-density data, and industrial tactility.
      </p>

      {/* 1. VIBEPULSE DASHBOARD */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">1. VibePulse Dashboard</div>
          <p className="section-desc" style={{ marginBottom: "20px" }}>
            A mission-critical data console. Uses a{" "}
            <strong>Machined Sidebar</strong> and <strong>Depth-Stacked</strong>{" "}
            charts to maintain hierarchy in high-density environments.
          </p>
          <div className="rule-box">
            <p>
              <strong>Density:</strong> Optimized for 13" and 16" workstations.
              Zero whitespace waste.
            </p>
          </div>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-0)",
            borderRadius: "var(--ui-r-lg)",
            boxShadow: "var(--ui-inset-deep), var(--ui-shadow-lg)",
            border: "1px solid var(--ui-border-default)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Dashboard Header */}
          <div
            style={{
              height: "48px",
              borderBottom: "1px solid var(--ui-border-subtle)",
              background: "var(--ui-surface-1)",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  background: "var(--brand-primary)",
                  borderRadius: "2px",
                  boxShadow: "0 0 8px var(--ui-accent-primary-glow)",
                }}
              ></div>
              <span
                style={{
                  fontFamily: "var(--ui-font-mono)",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                }}
              >
                VIBE_OS v4.2
              </span>
            </div>
            <div style={{ flex: 1, position: "relative", maxWidth: "400px" }}>
              <MagnifyingGlass
                size={12}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--ui-text-tertiary)",
                }}
              />
              <div
                style={{
                  background: "var(--ui-surface-2)",
                  border: "1px solid var(--ui-border-default)",
                  borderRadius: "var(--ui-r-xs)",
                  padding: "4px 12px 4px 30px",
                  fontSize: "10px",
                  color: "var(--ui-text-disabled)",
                  fontFamily: "var(--ui-font-mono)",
                }}
              >
                SEARCH_QUERY_NODE...
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <Bell
                size={16}
                weight="duotone"
                style={{ color: "var(--ui-text-tertiary)" }}
              />
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "var(--ui-surface-3)",
                  border: "1px solid var(--ui-border-default)",
                }}
              ></div>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", minHeight: "340px" }}>
            {/* Industrial Sidebar */}
            <div
              style={{
                width: "50px",
                borderRight: "1px solid var(--ui-border-subtle)",
                background: "var(--ui-surface-1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 0",
                gap: "16px",
              }}
            >
              <div
                className="icon-tactical"
                style={{
                  width: "32px",
                  height: "32px",
                  background: "var(--brand-primary-bg)",
                  borderColor: "var(--brand-primary-border)",
                }}
              >
                <Layout
                  size={16}
                  weight="duotone"
                  style={{ color: "var(--brand-primary)" }}
                />
              </div>
              <Users size={18} weight="duotone" style={{ opacity: 0.3 }} />
              <ChartBar size={18} weight="duotone" style={{ opacity: 0.3 }} />
              <div style={{ marginTop: "auto" }}>
                <Gear size={18} weight="duotone" style={{ opacity: 0.3 }} />
              </div>
            </div>

            {/* Main Viewport */}
            <div
              style={{
                flex: 1,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <div
                  className="surface-card"
                  style={{ flex: 1, padding: "16px" }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--ui-text-tertiary)",
                      fontFamily: "var(--ui-font-mono)",
                    }}
                  >
                    SYSTEM_UPTIME
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "var(--ui-success)",
                    }}
                  >
                    99.98%
                  </div>
                </div>
                <div
                  className="surface-card"
                  style={{ flex: 1, padding: "16px" }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--ui-text-tertiary)",
                      fontFamily: "var(--ui-font-mono)",
                    }}
                  >
                    ACTIVE_NODES
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 800 }}>1,240</div>
                </div>
              </div>

              <div
                className="surface-card"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
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
                      fontFamily: "var(--ui-font-mono)",
                      fontSize: "11px",
                      fontWeight: 800,
                    }}
                  >
                    PULSE_NETWORK_TRAFFIC
                  </div>
                  <div className="tag success" style={{ fontSize: "9px" }}>
                    LIVE
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "3px",
                    paddingBottom: "8px",
                  }}
                >
                  {[
                    40, 65, 30, 85, 45, 90, 55, 70, 35, 60, 40, 80, 50, 75, 45,
                    95, 60, 40, 85, 50,
                  ].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background:
                          i === 15
                            ? "var(--brand-primary)"
                            : "var(--ui-surface-5)",
                        borderRadius: "1px",
                        boxShadow:
                          i === 15
                            ? "0 0 10px var(--ui-accent-primary-glow)"
                            : "none",
                        opacity: i === 15 ? 1 : 0.6,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE MACHINED PORTFOLIO */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">2. Tactical Dev Journal</div>
          <p className="section-desc">
            A portfolio for high-end developers. Focuses on{" "}
            <strong>Mono-spacing</strong> and{" "}
            <strong>Structural Outlines</strong> to convey technical competence.
          </p>
        </div>
        <div
          className="canvas"
          style={{
            padding: "32px",
            background: "var(--ui-surface-0)",
            borderRadius: "var(--ui-r-lg)",
            boxShadow: "var(--ui-inset-deep)",
            border: "1px solid var(--ui-border-default)",
          }}
        >
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                borderBottom: "1px solid var(--ui-border-default)",
                paddingBottom: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "var(--brand-primary)",
                    fontFamily: "var(--ui-font-mono)",
                    fontWeight: 800,
                    marginBottom: "4px",
                  }}
                >
                  OPERATOR_LOG // ID: 8829
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    fontFamily: "var(--ui-font-serif)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Jules
                  <span
                    style={{
                      color: "var(--ui-text-tertiary)",
                      fontStyle: "italic",
                    }}
                  >
                    .engineer
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: "11px",
                  fontFamily: "var(--ui-font-mono)",
                  fontWeight: 700,
                  color: "var(--ui-text-tertiary)",
                }}
              >
                <span style={{ color: "var(--brand-primary)" }}>[01] WORK</span>
                <span>[02] STACK</span>
                <span>[03] CONNECT</span>
              </div>
            </header>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              {[
                {
                  date: "2026.05.18",
                  title: "Hard-Surface UI Design",
                  desc: "Why technical interfaces require higher tactile feedback than generic web apps.",
                },
                {
                  date: "2026.05.12",
                  title: "The Physics of Motion",
                  desc: "Emulating physical inertia in virtual scrolling systems.",
                },
              ].map((post, i) => (
                <div key={i} style={{ display: "flex", gap: "24px" }}>
                  <div
                    style={{
                      width: "40px",
                      fontSize: "10px",
                      fontFamily: "var(--ui-font-mono)",
                      color: "var(--ui-text-disabled)",
                      paddingTop: "4px",
                    }}
                  >
                    {post.date}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 800,
                        marginBottom: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {post.title}
                      <ArrowUpRight
                        size={12}
                        style={{ color: "var(--brand-primary)" }}
                      />
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--ui-text-secondary)",
                        lineHeight: "1.6",
                      }}
                    >
                      {post.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rule-box"
              style={{ padding: "12px 16px", marginBottom: 0 }}
            >
              <p style={{ fontSize: "11px" }}>
                <strong style={{ fontSize: "9px" }}>SYSTEM_UPDATE:</strong>{" "}
                Currently exploring <strong>Neural Renderers</strong> for
                real-time UI generation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. HARD-TECH PRODUCT PAGE */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">3. T-Sonic Product Console</div>
          <p className="section-desc">
            B2B Product page redesign. Uses <strong>Asymmetric Borders</strong>{" "}
            and <strong>Glass-overlays</strong> to present hardware products as
            precision instruments.
          </p>
        </div>
        <div
          className="canvas"
          style={{
            padding: "0",
            background: "var(--ui-surface-0)",
            borderRadius: "var(--ui-r-lg)",
            boxShadow: "var(--ui-shadow-lg)",
            border: "1px solid var(--ui-border-default)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Product Nav */}
            <div
              style={{
                padding: "20px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontWeight: 900,
                  fontFamily: "var(--ui-font-serif)",
                  fontSize: "18px",
                }}
              >
                T-SONIC
                <span
                  style={{ color: "var(--brand-primary)", fontStyle: "italic" }}
                >
                  .v2
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  fontSize: "10px",
                  fontFamily: "var(--ui-font-mono)",
                  fontWeight: 800,
                }}
              >
                <span>SPECS</span>
                <span>CORE_ENGINE</span>
                <span
                  className="ui-tab-btn active"
                  style={{ padding: "4px 12px" }}
                >
                  ORDER_NOW
                </span>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                padding: "0 64px",
                position: "relative",
              }}
            >
              <div style={{ flex: 1, zIndex: 2 }}>
                <div
                  style={{
                    fontSize: "10px",
                    color: "var(--brand-primary)",
                    fontFamily: "var(--ui-font-mono)",
                    fontWeight: 800,
                    letterSpacing: "0.3em",
                    marginBottom: "16px",
                  }}
                >
                  PRECISION_AUDIO
                </div>
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: "20px",
                  }}
                >
                  MACHINED
                  <br />
                  SOUND.
                </h1>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--ui-text-secondary)",
                    maxWidth: "320px",
                    lineHeight: 1.6,
                    marginBottom: "32px",
                  }}
                >
                  Acoustic architecture carved from single-block aerospace grade
                  alloys. Zero resonance.
                </p>
                <button className="btn primary lg">CONFIGURE_MODULE</button>
              </div>

              {/* Visual Background Element (Abstract Shape) */}
              <div
                style={{
                  position: "absolute",
                  right: "-10%",
                  width: "60%",
                  height: "120%",
                  background:
                    "radial-gradient(circle, var(--brand-primary-bg) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 1,
                  opacity: 0.4,
                }}
              ></div>

              <div
                style={{
                  width: "280px",
                  height: "280px",
                  border: "1px solid var(--ui-border-default)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                  background: "var(--ui-surface-1)",
                  boxShadow: "var(--ui-edge-light), var(--ui-shadow-lg)",
                }}
              >
                <Sparkle
                  size={120}
                  weight="thin"
                  style={{ color: "var(--brand-primary)", opacity: 0.8 }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "1px",
                    background: "var(--ui-border-subtle)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "1px",
                    background: "var(--ui-border-subtle)",
                  }}
                ></div>
              </div>
            </div>

            {/* Technical Footer */}
            <div
              style={{
                background: "var(--ui-surface-1)",
                borderTop: "1px solid var(--ui-border-subtle)",
                display: "flex",
              }}
            >
              {[
                { label: "LATENCY", val: "0.04ms" },
                { label: "THD_RATIO", val: "<0.001%" },
                { label: "OUTPUT_BIT", val: "32-BIT" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: "16px",
                    borderRight:
                      i < 2 ? "1px solid var(--ui-border-subtle)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      fontFamily: "var(--ui-font-mono)",
                      color: "var(--ui-text-disabled)",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 800 }}>
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
