import React, { useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, CaretRight } from "@phosphor-icons/react";
import { Logo } from "../components";
import { useTheme } from "../providers";
import { BRAND_MAP, SECTION_MAP } from "../constants";

const BrandSwitcherItem = React.memo(
  ({
    brandKey,
    label,
    color,
    isActive,
    onClick,
  }: {
    brandKey: string;
    label: string;
    color: string;
    isActive: boolean;
    onClick: (key: string) => void;
  }) => {
    const handleClick = useCallback(
      () => onClick(brandKey),
      [brandKey, onClick],
    );

    return (
      <div
        title={label}
        onClick={handleClick}
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: color,
          cursor: "pointer",
          border: isActive ? "2px solid #fff" : "2px solid transparent",
          boxShadow: isActive ? "0 0 0 1px var(--ui-border-subtle)" : "none",
          transition: "all var(--ui-dur-fast)",
        }}
      />
    );
  },
);

export const Header: React.FC = () => {
  const { theme, setTheme, brand, setBrand } = useTheme();
  const location = useLocation();

  const getBreadcrumb = () => {
    const path = location.pathname.split("/")[1] || "";
    return SECTION_MAP[path] || path.toUpperCase();
  };

  return (
    <>
      {/* ── COMMAND BAR (top strip / OS bar) ── */}
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

      {/* ── NAV BAR ── */}
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
          {/* Brand switcher */}
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
              <BrandSwitcherItem
                key={key}
                brandKey={key}
                label={label}
                color={color}
                isActive={brand === key}
                onClick={setBrand}
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
    </>
  );
};
