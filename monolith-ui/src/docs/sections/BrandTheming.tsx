import React from "react";
import { Sparkle, Code, Bug } from "@phosphor-icons/react";

interface BrandThemingProps {
  brand: string;
  handleBrandClick: (selectedBrand: string) => void;
}

export const BrandTheming: React.FC<BrandThemingProps> = ({
  brand,
  handleBrandClick,
}) => {
  const onBrandClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const selectedBrand = e.currentTarget.getAttribute("data-brand");
      if (selectedBrand) {
        handleBrandClick(selectedBrand);
      }
    },
    [handleBrandClick]
  );

  const onBrandKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const selectedBrand = e.currentTarget.getAttribute("data-brand");
        if (selectedBrand) {
          handleBrandClick(selectedBrand);
        }
      }
    },
    [handleBrandClick]
  );
  return (
    <section className="doc-section" id="branding">
      <div className="section-eyebrow">10</div>
      <h2 className="section-title">
        Brand <em>System</em>
      </h2>
      <p className="section-desc">
        The system ships with 5 base brand presets. Adding a new brand requires
        overriding only ~10 CSS variables in{" "}
        <span className="icode">@layer brand</span>.
      </p>

      <div className="subsection">
        <div className="subsection-title">Live brand switcher</div>
        <div className="brand-switcher" id="brandSwitcher">
          <div
            className={`brand-btn ${brand === "brand-plasma-core" ? "active" : ""}`}
            data-brand="brand-plasma-core"
            onClick={onBrandClick}
            onKeyDown={onBrandKeyDown}
            role="tab"
            aria-selected={brand === "brand-plasma-core"}
            tabIndex={0}
          >
            <div className="brand-dot" style={{ background: "#22d3ee" }}></div>
            Plasma Core
          </div>
          <div
            className={`brand-btn ${brand === "brand-oxidized-gold" ? "active" : ""}`}
            data-brand="brand-oxidized-gold"
            onClick={onBrandClick}
            onKeyDown={onBrandKeyDown}
            role="tab"
            aria-selected={brand === "brand-oxidized-gold"}
            tabIndex={0}
          >
            <div className="brand-dot" style={{ background: "#f59e0b" }}></div>
            Oxidized Gold
          </div>
          <div
            className={`brand-btn ${brand === "brand-violet-reaction" ? "active" : ""}`}
            data-brand="brand-violet-reaction"
            onClick={onBrandClick}
            onKeyDown={onBrandKeyDown}
            role="tab"
            aria-selected={brand === "brand-violet-reaction"}
            tabIndex={0}
          >
            <div className="brand-dot" style={{ background: "#a855f7" }}></div>
            Violet Reaction
          </div>
          <div
            className={`brand-btn ${brand === "brand-coolant-liquid" ? "active" : ""}`}
            data-brand="brand-coolant-liquid"
            onClick={onBrandClick}
            onKeyDown={onBrandKeyDown}
            role="tab"
            aria-selected={brand === "brand-coolant-liquid"}
            tabIndex={0}
          >
            <div className="brand-dot" style={{ background: "#06b6d4" }}></div>
            Coolant Liquid
          </div>
          <div
            className={`brand-btn ${brand === "brand-critical-mass" ? "active" : ""}`}
            data-brand="brand-critical-mass"
            onClick={onBrandClick}
            onKeyDown={onBrandKeyDown}
            role="tab"
            aria-selected={brand === "brand-critical-mass"}
            tabIndex={0}
          >
            <div className="brand-dot" style={{ background: "#ef4444" }}></div>
            Critical Mass
          </div>
        </div>

        <div
          className="canvas"
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            background: "var(--ui-surface-0)",
            borderRadius: "var(--ui-r-lg)",
            boxShadow: "var(--ui-inset-deep)",
          }}
        >
          <div className="canvas-label">Modular Brand Integration</div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              className="surface-card"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  background: "var(--brand-primary)",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px var(--ui-accent-primary-glow)",
                }}
              ></div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  fontFamily: "var(--ui-font-mono)",
                  textTransform: "uppercase",
                }}
              >
                {brand.replace("brand-", "")}
              </span>
            </div>

            <button className="btn primary">
              <Sparkle weight="duotone" size={14} stroke="2" />
              Execute Command
            </button>

            <div
              className="surface-card"
              style={{ padding: "10px 14px", borderStyle: "dashed" }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--ui-text-tertiary)",
                  fontFamily: "var(--ui-font-mono)",
                }}
              >
                SECONDARY_SLOT
              </span>
            </div>

            <div
              className="progress-bar"
              style={{
                width: "120px",
                height: "8px",
                background: "var(--ui-surface-3)",
                border: "1px solid var(--ui-border-default)",
                borderRadius: "var(--ui-r-pill)",
                overflow: "hidden",
              }}
            >
              <div
                className="progress-fill"
                style={{
                  width: "65%",
                  height: "100%",
                  background: "var(--brand-primary)",
                  boxShadow: "0 0 10px var(--ui-accent-primary-glow)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Technical Contract</div>
        <p className="section-desc">
          Override these variables in{" "}
          <span className="icode">@layer brand</span> to create a new station
          skin.
        </p>
        <div className="code">
          <span className="c">/* Station Skin Definition */</span>
          <br />
          <span className="k">.brand-station-x64</span> {"{"}
          <br />
          &nbsp;&nbsp;<span className="v">--brand-primary</span>:{" "}
          <span className="s">#22D3EE</span>;<br />
          &nbsp;&nbsp;<span className="v">--brand-primary-light</span>:{" "}
          <span className="s">#67E8F9</span>;<br />
          &nbsp;&nbsp;<span className="v">--brand-primary-bg</span>:{" "}
          <span className="s">rgba(34,211,238,0.12)</span>;<br />
          &nbsp;&nbsp;<span className="v">--brand-primary-border</span>:{" "}
          <span className="s">rgba(34,211,238,0.25)</span>;<br />
          &nbsp;&nbsp;<span className="v">--brand-primary-glow</span>:{" "}
          <span className="s">rgba(34,211,238,0.18)</span>;<br />
          &nbsp;&nbsp;<span className="v">--brand-secondary</span>:{" "}
          <span className="s">#A855F7</span>;<br />
          &nbsp;&nbsp;<span className="v">--brand-secondary-bg</span>:{" "}
          <span className="s">rgba(168,85,247,0.12)</span>;<br />
          &nbsp;&nbsp;<span className="c">/* typography: */</span>
          <br />
          &nbsp;&nbsp;<span className="v">--brand-font-sans</span>:{" "}
          <span className="s">'DM Sans'</span>;<br />
          &nbsp;&nbsp;<span className="v">--brand-font-mono</span>:{" "}
          <span className="s">'DM Mono'</span>;<br />
          {"}"}
        </div>
      </div>

      <div className="subsection" id="darklight">
        <div className="subsection-title">Depth Polarity: Dark / Light</div>
        <div className="grid2" style={{ gap: "20px" }}>
          <div
            className="surface-card elevated"
            style={{ padding: "24px", background: "var(--ui-surface-1)" }}
          >
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
                color: "var(--ui-text-disabled)",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              POLARITY: DARK
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                className="surface-card"
                style={{
                  background: "var(--brand-primary-bg)",
                  borderColor: "var(--brand-primary-border)",
                  padding: "12px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    background: "var(--brand-primary)",
                    borderRadius: "var(--ui-r-sm)",
                    color: "#000",
                  }}
                >
                  <Code weight="duotone" size={16} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--brand-primary-light)",
                    }}
                  >
                    ENGINE_REFACTOR
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--ui-font-mono)",
                      color: "var(--ui-text-tertiary)",
                    }}
                  >
                    ACTIVE_SESSION // 12m
                  </div>
                </div>
              </div>
              <div
                className="surface-card"
                style={{
                  padding: "12px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  opacity: 0.6,
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    background: "var(--ui-surface-3)",
                    borderRadius: "var(--ui-r-sm)",
                    color: "var(--ui-text-secondary)",
                  }}
                >
                  <Bug weight="duotone" size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700 }}>
                    FIX_KERNEL_PANIC
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--ui-font-mono)",
                    }}
                  >
                    LOG_ENTRY // 2d
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-theme="light"
            className="surface-card elevated"
            style={{ padding: "24px", background: "#d7dce4", color: "#000" }}
          >
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
                color: "rgba(0,0,0,0.4)",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              POLARITY: CONCRETE
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                className="surface-card"
                style={{
                  background: "rgba(0,0,0,0.05)",
                  borderColor: "var(--brand-primary)",
                  borderLeftWidth: "4px",
                  padding: "12px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    background: "var(--brand-primary)",
                    borderRadius: "var(--ui-r-sm)",
                    color: "#fff",
                  }}
                >
                  <Code weight="duotone" size={16} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "13px", fontWeight: 700, color: "#000" }}
                  >
                    ENGINE_REFACTOR
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--ui-font-mono)",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    ACTIVE_SESSION // 12m
                  </div>
                </div>
              </div>
              <div
                className="surface-card"
                style={{
                  padding: "12px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  opacity: 0.6,
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    background: "rgba(0,0,0,0.08)",
                    borderRadius: "var(--ui-r-sm)",
                    color: "#444",
                  }}
                >
                  <Bug weight="duotone" size={16} />
                </div>
                <div>
                  <div
                    style={{ fontSize: "13px", fontWeight: 700, color: "#000" }}
                  >
                    FIX_KERNEL_PANIC
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--ui-font-mono)",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    LOG_ENTRY // 2d
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
