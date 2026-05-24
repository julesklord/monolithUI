import { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, CaretRight } from "@phosphor-icons/react";
import { DocLayout } from "./docs/DocLayout";
import { Logo } from "./components";
import {
  Hero,
  Principles,
  Philosophy,
  ColorSystem,
  Typography,
  Motion,
  Layout,
  ComponentsSection,
  DesktopUI,
  WebUI,
  TerminalUI,
  BrandTheming,
  TokenSpec,
  IconSystem,
  TUIComponents,
} from "./docs/sections";
import "./styles/index.css";

const BRAND_MAP: Record<string, { label: string; color: string }> = {
  "brand-plasma-core": { label: "Plasma Core", color: "#22d3ee" },
  "brand-oxidized-gold": { label: "Oxidized Gold", color: "#f59e0b" },
  "brand-violet-reaction": { label: "Violet Reaction", color: "#a855f7" },
  "brand-coolant-liquid": { label: "Coolant Liquid", color: "#06b6d4" },
  "brand-critical-mass": { label: "Critical Mass", color: "#ef4444" },
};

const SECTION_MAP: Record<string, string> = {
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
};


function SystemCommandBar() {
  return (
    <div className="doc-command-bar">
      <div className="cmd-status">
        <div className="sdot on" />
        <span>MONOLITH_UI</span>
      </div>
      <div className="cmd-sep" />
      <div className="cmd-meta">
        <span>v2.0.0</span>
        <span>BUILD: STABLE_X64</span>
        <span style={{ color: "var(--ui-warning)" }}>BRANCH: master*</span>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: "16px" }}>
        <span className="cmd-hint">
          <span className="cmd-key">CTRL</span> +{" "}
          <span className="cmd-key">K</span> SEARCH
        </span>
        <span className="cmd-hint">
          <span className="cmd-key">CTRL</span> +{" "}
          <span className="cmd-key">T</span> THEME
        </span>
      </div>
    </div>
  );
}

function NavigationBar({
  getBreadcrumb,
  BRAND_MAP,
  brand,
  setBrand,
  theme,
  setTheme,
}: {
  getBreadcrumb: () => string;
  BRAND_MAP: Record<string, { label: string; color: string }>;
  brand: string;
  setBrand: (b: string) => void;
  theme: string;
  setTheme: (t: string) => void;
}) {
  return (
    <nav className="doc-nav">
      <NavLink className="nav-logo" to="/">
        <Logo size={20} style={{ marginRight: "8px" }} />
        <span
          style={{
            fontWeight: 500,
            fontFamily: "var(--ui-font-serif)",
            color: "var(--ui-text-primary)",
            fontSize: "16px",
            letterSpacing: "-0.01em",
          }}
        >
          Monolith
        </span>
        <span
          style={{
            fontWeight: 400,
            opacity: 0.7,
            fontStyle: "italic",
            fontFamily: "var(--ui-font-serif)",
            color: "var(--brand-primary)",
          }}
        >
          UI
        </span>
      </NavLink>
      <div className="nav-sep" />
      <div className="nav-breadcrumb">
        <CaretRight size={14} style={{ opacity: 0.3 }} />
        <span>{getBreadcrumb()}</span>
      </div>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px 8px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "var(--ui-r-pill)",
            border: "1px solid var(--ui-border-subtle)",
          }}
        >
          {Object.entries(BRAND_MAP).map(([key, { label, color }]) => (
            <div
              key={key}
              title={label}
              onClick={() => setBrand(key)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: color,
                cursor: "pointer",
                border:
                  brand === key ? "2px solid #fff" : "2px solid transparent",
                boxShadow:
                  brand === key
                    ? "0 0 0 1px var(--ui-border-subtle)"
                    : "none",
                transition: "all var(--ui-dur-fast)",
              }}
            />
          ))}
        </div>
        <div className="nav-sep" />
        <button
          className="nav-theme-btn"
          id="themeBtn"
          title="Toggle theme (CTRL+T)"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}

function AppRoutes({ brand, setBrand }: { brand: string; setBrand: (b: string) => void }) {
  return (
    <Routes>
      <Route path="/" element={<DocLayout />}>
        <Route index element={<Hero />} />
        <Route path="principles" element={<Principles />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="color" element={<ColorSystem />} />
        <Route path="typography" element={<Typography />} />
        <Route path="icons" element={<IconSystem />} />
        <Route path="tui-system" element={<TUIComponents />} />
        <Route path="motion" element={<Motion />} />
        <Route path="layout" element={<Layout />} />
        <Route
          path="branding"
          element={<BrandTheming brand={brand} handleBrandClick={setBrand} />}
        />
        <Route path="spec" element={<TokenSpec />} />
        <Route path="components" element={<ComponentsSection />} />
        <Route path="desktop" element={<DesktopUI />} />
        <Route path="web" element={<WebUI />} />
        <Route path="terminal" element={<TerminalUI />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [brand, setBrand] = useState("brand-plasma-core");
  const location = useLocation();

  const getBreadcrumb = () => {
    const path = location.pathname.split("/")[1] || "";
    return SECTION_MAP[path] || path.toUpperCase();
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "light" ? "light" : "";
  }, [theme]);

  useEffect(() => {
    const brands = Object.keys(BRAND_MAP);
    brands.forEach((b) => document.documentElement.classList.remove(b));
    document.documentElement.classList.add(brand);
  }, [brand]);

  return (
    <>
      <SystemCommandBar />
      <NavigationBar
        getBreadcrumb={getBreadcrumb}
        BRAND_MAP={BRAND_MAP}
        brand={brand}
        setBrand={setBrand}
        theme={theme}
        setTheme={setTheme}
      />
      <AppRoutes brand={brand} setBrand={setBrand} />
    </>
  );
}