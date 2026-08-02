import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, Button, Tag, StatusDot } from "../../components";
import {
  TerminalWindow,
  Cpu,
  PaintBrush,
  ArrowRight,
  Play,
  ArrowsClockwise,
  Globe,
  DesktopTower,
  GitBranch,
  Bell,
  MagnifyingGlass,
  Layout,
  ChartBar,
} from "@phosphor-icons/react";
import { useTheme } from "../../providers";
import { Footer } from "./Footer";

export const Landing: React.FC = () => {
  const { brand, setBrand } = useTheme();
  const [activeTab, setActiveTab] = useState<"terminal" | "telemetry" | "mixer">("terminal");
  const [showcaseTab, setShowcaseTab] = useState<"web" | "desktop" | "cli">("web");
  
  // Terminal Simulator State
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "system-04: waiting for command...",
  ]);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installProgress, setInstallProgress] = useState(0);

  // Telemetry Simulator State
  const [cpuLoad, setCpuLoad] = useState<number[]>([10, 20, 15, 30, 45, 20, 25, 40, 60, 50, 70, 85, 40, 30, 20]);
  const [selectedCore, setSelectedCore] = useState<string>("CORE_ENGINE");

  // Terminal Simulator Loop
  useEffect(() => {
    if (!isInstalling) return;
    
    const messages = [
      "Initializing orbital trajectory build...",
      "Resolving @monolith/ui dependencies...",
      "Compiling FiraMono Compressed typography...",
      "Linking grayscale surface ramps...",
      "Building static assets [vite]...",
      "Running 97 unit tests... SUCCESS",
      "Deploying to Baja_California_Sur gateway...",
      "System fully initialized. Orbits stable.",
    ];

    const timer = setInterval(() => {
      setInstallProgress((prev) => {
        const next = prev + 12.5;
        const msgIndex = Math.floor(next / 12.5) - 1;
        if (messages[msgIndex]) {
          setTerminalLogs((logs) => [...logs, `[BUILD] ${messages[msgIndex]}`]);
        }
        if (next >= 100) {
          setIsInstalling(false);
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [isInstalling]);

  const handleRunBuild = () => {
    if (isInstalling) return;
    setTerminalLogs(["system-04: initiating build process..."]);
    setInstallProgress(0);
    setIsInstalling(true);
  };

  const handleSimulateLoad = () => {
    setCpuLoad((prev) => {
      const next = [...prev.slice(1)];
      next.push(Math.floor(Math.random() * 70) + 20);
      return next;
    });
  };

  // Convert telemetry values to Braille/Block characters
  const getBlockRepresentation = (val: number) => {
    if (val < 15) return " ";
    if (val < 30) return "▂";
    if (val < 45) return "▃";
    if (val < 60) return "▅";
    if (val < 75) return "▆";
    if (val < 90) return "▇";
    return "█";
  };

  return (
    <div className="landing-page" style={{ padding: "80px 24px 120px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* ── HERO SECTION ── */}
      <header style={{ textAlign: "center", marginBottom: "80px", marginTop: "40px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <Logo size={40} />
          <span className="tag primary" style={{ borderRadius: "0", fontWeight: 800 }}>v2.1.0</span>
        </div>
        
        <h1 style={{ 
          fontFamily: "var(--ui-font-serif)", 
          fontSize: "64px", 
          lineHeight: "0.9", 
          fontWeight: 900,
          color: "var(--ui-text-primary)",
          letterSpacing: "-0.03em",
          marginBottom: "24px",
          textTransform: "uppercase"
        }}>
          Density over <span style={{ color: "var(--brand-primary)", fontStyle: "italic" }}>Decoration</span>
        </h1>
        
        <p style={{ 
          fontSize: "18px", 
          color: "var(--ui-text-secondary)", 
          maxWidth: "680px", 
          margin: "0 auto 36px",
          lineHeight: "1.5",
          fontWeight: 400
        }}>
          An industrial-grade, brand-agnostic design system built for complex developer tools, orchestration scripts, and CLIs. Built on React 19, TypeScript, and absolute visual density.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Link to="/docs" className="btn primary" style={{ 
            padding: "12px 24px", 
            fontSize: "12px", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px" 
          }}>
            Explore Docs <ArrowRight size={14} />
          </Link>
          <a href="#interactive-preview" className="btn" style={{ 
            padding: "12px 24px", 
            fontSize: "12px", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px" 
          }}>
            Run Telemetry Mock <Play size={14} />
          </a>
        </div>
      </header>

      {/* ── VIRTUES / FEATURES GRID ── */}
      <section className="grid-2" style={{ marginBottom: "100px" }}>
        <div className="surface-card" style={{ padding: "24px" }}>
          <div style={{ color: "var(--brand-primary)", fontWeight: 800, fontFamily: "var(--ui-font-mono)", fontSize: "11px", marginBottom: "8px" }}>01 · TACTILE DEPTH</div>
          <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px", color: "var(--ui-text-primary)" }}>Modern Skeuomorphism</h3>
          <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
            Elements anchor via low-opacity shadows and edge highlights. Focus and press states are strictly inset, simulating high-end laboratory instrumentation.
          </p>
        </div>

        <div className="surface-card" style={{ padding: "24px" }}>
          <div style={{ color: "var(--ui-success)", fontWeight: 800, fontFamily: "var(--ui-font-mono)", fontSize: "11px", marginBottom: "8px" }}>02 · ABSOLUTE NEUTRALITY</div>
          <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px", color: "var(--ui-text-primary)" }}>Grayscale Surfaces</h3>
          <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
            Surfaces never inherit primary tints. A strict 7-level grayscale surface ramp guarantees background neutrality, letting brand colors serve purely as interactive accents.
          </p>
        </div>

        <div className="surface-card" style={{ padding: "24px" }}>
          <div style={{ color: "var(--ui-accent-secondary)", fontWeight: 800, fontFamily: "var(--ui-font-mono)", fontSize: "11px", marginBottom: "8px" }}>03 · NATURAL MOMENTUM</div>
          <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px", color: "var(--ui-text-primary)" }}>Physics-Based Motion</h3>
          <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
            Linear transitions are strictly banned. Entrances and interactions utilize custom spring bezier curves to mimic physical mass and organic momentum.
          </p>
        </div>

        <div className="surface-card" style={{ padding: "24px" }}>
          <div style={{ color: "var(--ui-info)", fontWeight: 800, fontFamily: "var(--ui-font-mono)", fontSize: "11px", marginBottom: "8px" }}>04 · DUAL COMPATIBILITY</div>
          <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px", color: "var(--ui-text-primary)" }}>TUI Feasibility</h3>
          <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
            Every component is designed to translate directly to text-based terminals (TUI) using box-drawing primitives, block layouts, and inverted text regions.
          </p>
        </div>
      </section>

      {/* ── INTERACTIVE MOCKUP ── */}
      <section id="interactive-preview" style={{ marginBottom: "60px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "var(--ui-font-serif)", fontSize: "28px", fontWeight: 900, textTransform: "uppercase", color: "var(--ui-text-primary)" }}>
            Interactive Control Center
          </h2>
          <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px" }}>
            Click the tabs to preview interactive MonolithUI behaviors in real time.
          </p>
        </div>

        <div className="surface-card" style={{ padding: 0, overflow: "hidden" }}>
          {/* Mock Header Tabs */}
          <div style={{ 
            display: "flex", 
            borderBottom: "1px solid var(--ui-border-default)", 
            background: "var(--ui-surface-2)",
            padding: "0 12px"
          }}>
            <button 
              onClick={() => setActiveTab("terminal")}
              className={`doc-tab-btn ${activeTab === "terminal" ? "active" : ""}`}
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", padding: "12px 16px" }}
            >
              <TerminalWindow size={14} /> TUI_CONSOLE
            </button>
            <button 
              onClick={() => setActiveTab("telemetry")}
              className={`doc-tab-btn ${activeTab === "telemetry" ? "active" : ""}`}
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", padding: "12px 16px" }}
            >
              <Cpu size={14} /> SYSTEM_TELEMETRY
            </button>
            <button 
              onClick={() => setActiveTab("mixer")}
              className={`doc-tab-btn ${activeTab === "mixer" ? "active" : ""}`}
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", padding: "12px 16px" }}
            >
              <PaintBrush size={14} /> THEME_MIXER
            </button>
          </div>

          {/* Canvas Wrapper */}
          <div style={{ background: "var(--ui-surface-terminal)", padding: "24px", minHeight: "340px" }}>
            
            {/* TAB 1: TERMINAL CONSOLE */}
            {activeTab === "terminal" && (
              <div style={{ fontFamily: "var(--ui-font-mono)", fontSize: "12px", color: "var(--ui-text-secondary)" }}>
                {/* Simulated TUI Frame */}
                <div style={{ border: "1px solid var(--ui-border-default)", background: "var(--ui-surface-0)", display: "flex", flexDirection: "column" }}>
                  <div style={{ 
                    background: "var(--brand-primary)", 
                    color: "var(--ui-surface-0)", 
                    padding: "4px 10px", 
                    fontWeight: 800, 
                    display: "flex", 
                    justifyContent: "space-between",
                    fontSize: "10px"
                  }}>
                    <span>ORBITAL_DEPLOYMENT_CONSOLE // SESSION: 0x921A</span>
                    <span>TUI_MODE: ACTIVE</span>
                  </div>

                  <div style={{ padding: "16px", minHeight: "180px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {terminalLogs.map((log, idx) => (
                      <div key={idx} style={{ whiteSpace: "pre-wrap" }}>
                        <span style={{ color: "var(--brand-primary)", marginRight: "8px" }}>❯</span>
                        {log}
                      </div>
                    ))}
                    {isInstalling && (
                      <div style={{ color: "var(--ui-success)", marginTop: "8px" }}>
                        Progress: [
                        {Array.from({ length: 15 }).map((_, i) => 
                          i < Math.floor(installProgress / 6.6) ? "█" : "░"
                        ).join("")}
                        ] {Math.round(installProgress)}%
                      </div>
                    )}
                  </div>

                  <div style={{ 
                    borderTop: "1px solid var(--ui-border-default)", 
                    padding: "10px 16px", 
                    background: "var(--ui-surface-1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <button 
                      onClick={handleRunBuild} 
                      disabled={isInstalling}
                      className="btn primary"
                      style={{ padding: "6px 12px", fontSize: "10px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                    >
                      <ArrowsClockwise size={12} /> {isInstalling ? "BUILDING..." : "RUN BUILD"}
                    </button>
                    <span style={{ fontSize: "10px", color: "var(--ui-text-disabled)" }}>Press button to ignite telemetry compilation</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SYSTEM TELEMETRY */}
            {activeTab === "telemetry" && (
              <div style={{ fontFamily: "var(--ui-font-mono)", fontSize: "12px", color: "var(--ui-text-secondary)" }}>
                <div style={{ border: "1px solid var(--ui-border-default)", background: "var(--ui-surface-0)", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--ui-border-default)", paddingBottom: "10px", marginBottom: "16px" }}>
                    <span style={{ fontWeight: 800, color: "var(--ui-text-primary)" }}>TELEMETRY_ENGINE_V2</span>
                    <button 
                      onClick={handleSimulateLoad}
                      className="btn" 
                      style={{ padding: "6px 12px", fontSize: "10px" }}
                    >
                      SPIKE SIGNAL
                    </button>
                  </div>

                  <div className="grid-2" style={{ gap: "20px" }}>
                    {/* Live Sparkline Panel */}
                    <div style={{ border: "1px solid var(--ui-border-default)", padding: "12px", background: "var(--ui-surface-1)" }}>
                      <div style={{ color: "var(--brand-primary)", fontWeight: 800, fontSize: "10px", marginBottom: "8px" }}>
                        ORBIT_LOAD_FACTOR (LIVE)
                      </div>
                      <div style={{ 
                        color: "var(--ui-success)", 
                        fontSize: "20px", 
                        letterSpacing: "2px",
                        lineHeight: "1.1",
                        minHeight: "24px"
                      }}>
                        {cpuLoad.map(getBlockRepresentation).join("")}
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", fontSize: "9px", color: "var(--ui-text-disabled)" }}>
                        <span>t-15s</span>
                        <span>now</span>
                      </div>
                    </div>

                    {/* Controller Selection Panel */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {["CORE_ENGINE", "GRAVITY_DRIVE", "NEURAL_LINK"].map((core) => (
                        <div 
                          key={core}
                          onClick={() => setSelectedCore(core)}
                          style={{
                            padding: "8px 12px",
                            border: "1px solid var(--ui-border-default)",
                            background: selectedCore === core ? "var(--ui-surface-2)" : "transparent",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                          }}
                        >
                          <span style={{ fontWeight: selectedCore === core ? 800 : 400 }}>{core}</span>
                          <span style={{ 
                            color: core === "CORE_ENGINE" ? "var(--ui-success)" : core === "GRAVITY_DRIVE" ? "var(--ui-warning)" : "var(--ui-text-disabled)" 
                          }}>
                            {core === "CORE_ENGINE" ? "[STABLE]" : core === "GRAVITY_DRIVE" ? "[ACTIVE]" : "[IDLE]"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: THEME MIXER */}
            {activeTab === "mixer" && (
              <div style={{ fontFamily: "var(--ui-font-mono)", fontSize: "12px", color: "var(--ui-text-secondary)" }}>
                <div style={{ border: "1px solid var(--ui-border-default)", background: "var(--ui-surface-0)", padding: "16px" }}>
                  <h3 style={{ fontWeight: 800, color: "var(--ui-text-primary)", marginBottom: "8px" }}>Brand Trajectory Preset Mixer</h3>
                  <p style={{ color: "var(--ui-text-secondary)", fontSize: "11px", marginBottom: "20px" }}>
                    Select a preset. Watch the accents update on this landing page while background surfaces remain strictly grayscale.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                      { key: "plasma-core", label: "Plasma Core (Neon Cyan/Purple)", color: "#22d3ee" },
                      { key: "oxidized-gold", label: "Oxidized Gold (Amber/Amber)", color: "#f59e0b" },
                      { key: "violet-reaction", label: "Violet Reaction (Purple/Crimson)", color: "#a855f7" },
                      { key: "coolant-liquid", label: "Coolant Liquid (Cyan/Teal)", color: "#06b6d4" },
                      { key: "critical-mass", label: "Critical Mass (Scarlet/Deep Red)", color: "#ef4444" },
                    ].map((themeItem) => (
                      <div 
                        key={themeItem.key}
                        onClick={() => setBrand(themeItem.key)}
                        style={{
                          padding: "10px 16px",
                          border: "1px solid var(--ui-border-default)",
                          background: brand === themeItem.key ? "var(--ui-surface-2)" : "transparent",
                          borderRadius: "var(--ui-r-sm)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px"
                        }}
                      >
                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: themeItem.color }} />
                        <span style={{ fontWeight: brand === themeItem.key ? 800 : 400 }}>{themeItem.label}</span>
                        {brand === themeItem.key && <span style={{ marginLeft: "auto", color: "var(--brand-primary)", fontWeight: 800 }}>ACTIVE</span>}
                      </div>
                    ))}
                  </div>

                  {/* Live Component Preview — proves the "watch the accents update" claim with real components, not just a swatch dot */}
                  <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid var(--ui-border-default)" }}>
                    <div style={{ color: "var(--ui-text-tertiary)", fontSize: "10px", fontWeight: 800, letterSpacing: "0.05em", marginBottom: "12px" }}>
                      LIVE_PREVIEW // grayscale surfaces stay fixed, only accents react
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", padding: "16px", background: "var(--ui-surface-1)", border: "1px solid var(--ui-border-default)" }}>
                      <Button variant="primary" size="sm">Deploy</Button>
                      <Button variant="secondary" size="sm">Cancel</Button>
                      <Tag variant="primary">v2.1.0</Tag>
                      <Tag variant="secondary">stable</Tag>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "var(--ui-text-secondary)" }}>
                        <StatusDot variant="success" /> orbit_stable
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── COMPLETE APP SHOWCASE ── */}
      <section style={{ marginBottom: "80px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "var(--ui-font-serif)", fontSize: "28px", fontWeight: 900, textTransform: "uppercase", color: "var(--ui-text-primary)" }}>
            One Language, Three Surfaces
          </h2>
          <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", maxWidth: "560px", margin: "0 auto" }}>
            The same tokens, spacing rhythm, and industrial tactility carry across a web dashboard, a native desktop window, and a raw terminal — full screens, not fragments.
          </p>
        </div>

        <div className="surface-card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{
            display: "flex",
            borderBottom: "1px solid var(--ui-border-default)",
            background: "var(--ui-surface-2)",
            padding: "0 12px"
          }}>
            <button onClick={() => setShowcaseTab("web")} className={`doc-tab-btn ${showcaseTab === "web" ? "active" : ""}`} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", padding: "12px 16px" }}>
              <Globe size={14} /> WEB_APP
            </button>
            <button onClick={() => setShowcaseTab("desktop")} className={`doc-tab-btn ${showcaseTab === "desktop" ? "active" : ""}`} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", padding: "12px 16px" }}>
              <DesktopTower size={14} /> DESKTOP_APP
            </button>
            <button onClick={() => setShowcaseTab("cli")} className={`doc-tab-btn ${showcaseTab === "cli" ? "active" : ""}`} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", padding: "12px 16px" }}>
              <TerminalWindow size={14} /> CLI_TUI
            </button>
          </div>

          <div style={{ background: "var(--ui-surface-terminal)", padding: "24px", minHeight: "420px" }}>

            {/* WEB APP: VibePulse-style dashboard */}
            {showcaseTab === "web" && (
              <div className="canvas" style={{ padding: 0, background: "var(--ui-surface-0)", borderRadius: "var(--ui-r-lg)", boxShadow: "var(--ui-inset-deep), var(--ui-shadow-lg)", border: "1px solid var(--ui-border-default)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "44px", borderBottom: "1px solid var(--ui-border-subtle)", background: "var(--ui-surface-1)", display: "flex", alignItems: "center", padding: "0 16px", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "10px", height: "10px", background: "var(--brand-primary)", borderRadius: "2px", boxShadow: "0 0 8px var(--ui-accent-primary-glow)" }} />
                    <span style={{ fontFamily: "var(--ui-font-mono)", fontSize: "10px", fontWeight: 800, letterSpacing: "0.05em" }}>ORBIT_OS v2.1</span>
                  </div>
                  <div style={{ flex: 1, position: "relative", maxWidth: "300px" }}>
                    <MagnifyingGlass size={11} style={{ position: "absolute", left: "9px", top: "50%", transform: "translateY(-50%)", color: "var(--ui-text-tertiary)" }} />
                    <div style={{ background: "var(--ui-surface-2)", border: "1px solid var(--ui-border-default)", borderRadius: "var(--ui-r-xs)", padding: "4px 10px 4px 26px", fontSize: "9px", color: "var(--ui-text-disabled)", fontFamily: "var(--ui-font-mono)" }}>SEARCH...</div>
                  </div>
                  <Bell size={14} weight="duotone" style={{ color: "var(--ui-text-tertiary)", marginLeft: "auto" }} />
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--ui-surface-3)", border: "1px solid var(--ui-border-default)" }} />
                </div>
                <div style={{ flex: 1, display: "flex", minHeight: "320px" }}>
                  <div style={{ width: "44px", borderRight: "1px solid var(--ui-border-subtle)", background: "var(--ui-surface-1)", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: "14px" }}>
                    <div className="icon-tactical" style={{ width: "28px", height: "28px", background: "var(--brand-primary-bg)", borderColor: "var(--brand-primary-border)" }}>
                      <Layout size={14} weight="duotone" style={{ color: "var(--brand-primary)" }} />
                    </div>
                    <ChartBar size={16} weight="duotone" style={{ opacity: 0.3 }} />
                  </div>
                  <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <div className="surface-card" style={{ flex: 1, padding: "14px" }}>
                        <div style={{ fontSize: "9px", color: "var(--ui-text-tertiary)", fontFamily: "var(--ui-font-mono)" }}>SYSTEM_UPTIME</div>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--ui-success)" }}>99.98%</div>
                      </div>
                      <div className="surface-card" style={{ flex: 1, padding: "14px" }}>
                        <div style={{ fontSize: "9px", color: "var(--ui-text-tertiary)", fontFamily: "var(--ui-font-mono)" }}>ACTIVE_NODES</div>
                        <div style={{ fontSize: "18px", fontWeight: 800 }}>1,240</div>
                      </div>
                    </div>
                    <div className="surface-card" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontFamily: "var(--ui-font-mono)", fontSize: "10px", fontWeight: 800 }}>NETWORK_TRAFFIC</div>
                        <div className="tag success" style={{ fontSize: "9px" }}>LIVE</div>
                      </div>
                      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "3px", paddingBottom: "6px" }}>
                        {[40, 65, 30, 85, 45, 90, 55, 70, 35, 60, 40, 80, 50, 75, 45, 95, 60, 40, 85, 50].map((h, i) => (
                          <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 15 ? "var(--brand-primary)" : "var(--ui-surface-5)", borderRadius: "1px", opacity: i === 15 ? 1 : 0.6 }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DESKTOP APP: Gemini Station-style native window */}
            {showcaseTab === "desktop" && (
              <div className="canvas" style={{ padding: 0, background: "var(--ui-surface-0)", borderRadius: "var(--ui-r-lg)", boxShadow: "var(--ui-shadow-lg), var(--ui-inset-deep)", border: "1px solid var(--ui-border-default)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "30px", background: "var(--ui-surface-3)", borderBottom: "1px solid var(--ui-border-subtle)", display: "flex", alignItems: "center", padding: "0 12px", gap: "14px" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f56" }} />
                    <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#27c93f" }} />
                  </div>
                  <div style={{ flex: 1, textAlign: "center", fontSize: "9px", fontFamily: "var(--ui-font-mono)", fontWeight: 800, color: "var(--ui-text-tertiary)", letterSpacing: "0.1em" }}>
                    ORBITAL_STATION_CORE // v0.8.2
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "var(--ui-text-disabled)", fontSize: "9px", fontFamily: "var(--ui-font-mono)" }}>
                    <GitBranch size={11} /> MASTER*
                    <Cpu size={11} /> 12.4%
                  </div>
                </div>
                <div style={{ flex: 1, display: "flex", minHeight: "330px" }}>
                  <div style={{ width: "180px", background: "var(--ui-surface-1)", borderRight: "1px solid var(--ui-border-subtle)", padding: "14px", display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div>
                      <div style={{ fontSize: "9px", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "8px" }}>WORKSPACE_MAP</div>
                      <div className="surface-card" style={{ padding: "8px", background: "var(--ui-surface-2)", borderStyle: "dashed" }}>
                        <div style={{ fontSize: "10px", fontWeight: 700 }}>Monolith_Design</div>
                        <div style={{ fontSize: "9px", color: "var(--ui-text-disabled)", fontFamily: "var(--ui-font-mono)" }}>/root/dev/monolith</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {["Active_Console", "Neural_Visualizer"].map((label, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", borderRadius: "var(--ui-r-sm)", background: i === 0 ? "var(--brand-primary-bg)" : "transparent", color: i === 0 ? "var(--brand-primary)" : "var(--ui-text-secondary)", fontSize: "10px", fontWeight: 600 }}>
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ flex: 1, background: "var(--ui-surface-0)", padding: "20px" }}>
                    <div className="surface-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <div className="sdot on" />
                          <span style={{ fontSize: "10px", fontWeight: 800, fontFamily: "var(--ui-font-mono)" }}>LIVE_NEURAL_LINK</span>
                        </div>
                        <div className="tag primary">READY</div>
                      </div>
                      <div style={{ flex: 1, background: "var(--ui-surface-1)", borderRadius: "var(--ui-r-sm)", border: "1px solid var(--ui-border-subtle)", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "160px", height: "160px", border: "1px dashed var(--brand-primary)", borderRadius: "50%", opacity: 0.2 }} />
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100px", height: "100px", border: "1px solid var(--brand-primary)", borderRadius: "50%", boxShadow: "0 0 20px var(--ui-accent-primary-glow)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CLI / TUI: TunaChat-style terminal console */}
            {showcaseTab === "cli" && (
              <div className="canvas" style={{ padding: 0, background: "var(--ui-surface-terminal)", borderRadius: "var(--ui-r-md)", border: "1px solid var(--ui-border-default)", boxShadow: "var(--ui-inset-deep)", overflowX: "auto" }}>
                <div style={{ minWidth: "560px", display: "flex", flexDirection: "column", fontFamily: "var(--ui-font-mono)", fontSize: "11px", lineHeight: "1.4", color: "var(--ui-text-secondary)" }}>
                  <div style={{ background: "var(--brand-primary)", color: "var(--ui-surface-0)", padding: "4px 10px", fontWeight: 800, display: "flex", justifyContent: "space-between", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    <div>TUNACHAT_PRO v2.0 // SESSION: 0xFD42</div>
                    <div>STATUS: ONLINE</div>
                  </div>
                  <div style={{ display: "flex", background: "var(--ui-surface-terminal)", borderBottom: "1px solid var(--ui-border-subtle)" }}>
                    <div style={{ width: "140px", borderRight: "1px solid var(--ui-border-subtle)", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ color: "var(--brand-primary)", fontWeight: 800, fontSize: "10px", marginBottom: "2px" }}>┌─ USERS ──┐</div>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}><span style={{ color: "var(--ui-success)" }}>●</span><span>TunaBot</span></div>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}><span style={{ color: "var(--ui-success)" }}>●</span><span style={{ color: "var(--ui-text-primary)", fontWeight: 700 }}>Jules_Dev</span></div>
                      <div style={{ flex: 1 }} />
                      <div style={{ color: "var(--brand-primary)", fontWeight: 800, fontSize: "10px" }}>└──────────┘</div>
                    </div>
                    <div style={{ flex: 1, padding: "10px", display: "flex", flexDirection: "column", gap: "8px", minHeight: "180px" }}>
                      <div style={{ color: "var(--ui-text-disabled)", fontSize: "10px", borderBottom: "1px solid var(--ui-border-subtle)", paddingBottom: "4px" }}>─── MESSAGE_HISTORY ──────────────</div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <span style={{ color: "var(--ui-text-disabled)" }}>[10:55:01]</span>
                        <span style={{ color: "var(--brand-primary)", fontWeight: 700 }}>&lt;TUNA&gt;</span>
                        <span>System check complete. All orbits are stable.</span>
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <span style={{ color: "var(--ui-text-disabled)" }}>[10:55:24]</span>
                        <span style={{ color: "var(--ui-text-primary)", fontWeight: 700 }}>&lt;JULES&gt;</span>
                        <span>Deploying update to <strong style={{ color: "var(--ui-accent-secondary)" }}>MonolithUI</strong> v2.1.</span>
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <span style={{ color: "var(--ui-text-disabled)" }}>[10:56:10]</span>
                        <span style={{ color: "var(--brand-primary)", fontWeight: 700 }}>&lt;TUNA&gt;</span>
                        <span style={{ color: "var(--ui-success-light)" }}>Update received. Trajectories stable.</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "8px 10px", background: "var(--ui-surface-0)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--brand-primary)", fontWeight: 800 }}>❯</span>
                    <span style={{ color: "var(--ui-text-primary)" }}>monolith deploy --env production</span>
                    <span style={{ background: "var(--brand-primary)", width: "7px", height: "13px", display: "inline-block" }} />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── FEATURE REVIEW ── */}
      <section style={{ marginBottom: "80px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "var(--ui-font-serif)", fontSize: "28px", fontWeight: 900, textTransform: "uppercase", color: "var(--ui-text-primary)" }}>
            What Actually Matters Here
          </h2>
          <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", maxWidth: "560px", margin: "0 auto" }}>
            A short, honest review of the system's core characteristics — ranked by how load-bearing each one is.
          </p>
        </div>

        <div className="grid-2" style={{ gap: "16px" }}>
          {[
            {
              rank: "CRITICAL",
              color: "var(--ui-danger)",
              title: "Grayscale-only surfaces",
              body: "Surfaces (--ui-surface-0..6) never carry brand tint. Only accents (--brand-primary/secondary) change. This is what actually makes 5 brand presets drop in without redesigning a single screen.",
            },
            {
              rank: "CRITICAL",
              color: "var(--ui-danger)",
              title: "Web ↔ Desktop ↔ TUI parity",
              body: "The same spacing scale, border logic, and status-bar/inverted-header pattern translate directly to box-drawing terminals. Proven above with three real, full screens, not fragments.",
            },
            {
              rank: "CORE",
              color: "var(--ui-warning)",
              title: "Physics-based motion only",
              body: "Linear easing is banned by convention (--ui-ease-spring / --ui-ease-out). Every transition is meant to feel like it has mass. This is a discipline, not a toggle — worth enforcing in a lint rule if it isn't already.",
            },
            {
              rank: "CORE",
              color: "var(--ui-warning)",
              title: "Token layering (semantic → brand)",
              body: "--ui-* tokens resolve through --brand-* with sane neutral fallbacks. Components never read brand tokens directly, so a 6th preset is a CSS-only change.",
            },
            {
              rank: "SUPPORTING",
              color: "var(--ui-info)",
              title: "Dark/light with accessibility overrides",
              body: "Light theme isn't just inverted grays — oxidized-gold, coolant-liquid, violet-reaction, and critical-mass all get darker, higher-contrast primaries specifically for light backgrounds.",
            },
            {
              rank: "SUPPORTING",
              color: "var(--ui-info)",
              title: "Skeuomorphic depth, sparingly",
              body: "Inset shadows and edge highlights (--ui-inset-*, --ui-edge-light) exist for tactility, but they stay subtle enough not to fight the flat grayscale base.",
            },
          ].map((item, i) => (
            <div key={i} className="surface-card" style={{ padding: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ color: item.color, fontWeight: 800, fontFamily: "var(--ui-font-mono)", fontSize: "10px", letterSpacing: "0.05em" }}>{item.rank}</span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", color: "var(--ui-text-primary)" }}>{item.title}</h3>
              <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", lineHeight: "1.55", margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section style={{ textAlign: "center", marginBottom: "60px", paddingTop: "40px", borderTop: "1px solid var(--ui-border-subtle)" }}>
        <h2 style={{ fontFamily: "var(--ui-font-serif)", fontSize: "26px", fontWeight: 900, textTransform: "uppercase", color: "var(--ui-text-primary)", marginBottom: "12px" }}>
          Ready to build <span style={{ color: "var(--brand-primary)", fontStyle: "italic" }}>dense</span>?
        </h2>
        <p style={{ color: "var(--ui-text-secondary)", fontSize: "13px", maxWidth: "480px", margin: "0 auto 24px" }}>
          Read the token spec, browse every component, and see the TUI translation layer in the full documentation.
        </p>
        <Link to="/docs" className="btn primary" style={{
          padding: "12px 24px",
          fontSize: "12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px"
        }}>
          Explore Docs <ArrowRight size={14} />
        </Link>
      </section>

      <Footer />
    </div>
  );
};
