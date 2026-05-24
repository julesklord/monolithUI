import React from "react";
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
  MagnifyingGlass,
  Command,
  TerminalWindow,
  Code,
  Cpu,
  Database,
  Gear,
  Bell,
  LockKey,
  ClockCounterClockwise,
  Desktop,
  Laptop,
  DeviceMobile,
  Fingerprint,
  Cube,
  ShieldCheck,
  IdentificationCard,
} from "@phosphor-icons/react";

export const IconSystem: React.FC = () => {
  const ICON_GROUPS = [
    {
      title: "Status & Semantic (Duotone)",
      icons: [
        {
          Icon: CheckCircle,
          label: "Success",
          use: "Process completed",
          class: "success",
        },
        { Icon: Info, label: "Info", use: "System telemetry", class: "" },
        {
          Icon: Warning,
          label: "Warning",
          use: "Caution required",
          class: "warning",
        },
        {
          Icon: WarningCircle,
          label: "Danger",
          use: "Critical failure",
          class: "danger",
        },
      ],
    },
    {
      title: "Industrial Core",
      icons: [
        {
          Icon: TerminalWindow,
          label: "Console",
          use: "TUI / CLI Root",
          class: "",
        },
        { Icon: Code, label: "Source", use: "Data processing", class: "" },
        { Icon: Cpu, label: "Processor", use: "Logic engine", class: "" },
        { Icon: Database, label: "Vault", use: "Memory storage", class: "" },
        { Icon: Cube, label: "Module", use: "Component unit", class: "" },
      ],
    },
    {
      title: "Tactical Operations",
      icons: [
        {
          Icon: Fingerprint,
          label: "Auth",
          use: "Biometric access",
          class: "",
        },
        {
          Icon: ShieldCheck,
          label: "Secure",
          use: "Validated state",
          class: "",
        },
        {
          Icon: IdentificationCard,
          label: "Identity",
          use: "User credentials",
          class: "",
        },
        { Icon: LockKey, label: "Encypt", use: "Security layer", class: "" },
      ],
    },
    {
      title: "System Interface",
      icons: [
        { Icon: Command, label: "Action", use: "System command", class: "" },
        {
          Icon: MagnifyingGlass,
          label: "Lookup",
          use: "Global search",
          class: "",
        },
        { Icon: Gear, label: "Config", use: "Control panel", class: "" },
        { Icon: Bell, label: "Signals", use: "Notification", class: "" },
        {
          Icon: ClockCounterClockwise,
          label: "Log",
          use: "History trace",
          class: "",
        },
      ],
    },
  ];

  return (
    <section className="doc-section" id="icon-system">
      <div className="section-eyebrow">06</div>
      <h2 className="section-title">
        Icon <em>System</em>
      </h2>
      <p className="section-desc">
        We use <strong>Phosphor Icons (Duotone)</strong> as the primary visual
        language. This adds a second layer of brand depth, where the background
        shape inherits the primary brand tint at 15% opacity.
      </p>

      <div className="rule-box secondary">
        <p>
          <strong>Industrial Blueprint Rule //</strong> Force{" "}
          <span className="icode">stroke-linecap: square</span> and{" "}
          <span className="icode">stroke-linejoin: miter</span> globally. This
          transforms generic curves into sharp, architectural segments that
          integrate with the orbital layout.
        </p>
      </div>

      {ICON_GROUPS.map((group, idx) => (
        <div className="subsection" key={idx}>
          <div className="subsection-title">{group.title}</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {group.icons.map((item, i) => (
              <div
                key={i}
                className="surface-card"
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  padding: "16px",
                }}
              >
                <div className={`icon-tactical ui-icon-duotone ${item.class}`}>
                  <item.Icon size={20} weight="duotone" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      fontFamily: "var(--ui-font-mono)",
                      color: "var(--ui-text-primary)",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--ui-text-tertiary)",
                      marginTop: "2px",
                    }}
                  >
                    {item.use}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="subsection">
        <div className="subsection-title">Platform Assets (Thin Lineage)</div>
        <div
          className="canvas"
          style={{
            display: "flex",
            gap: "48px",
            padding: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "var(--ui-surface-0)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Desktop
              size={56}
              weight="thin"
              style={{
                color: "var(--brand-primary)",
                opacity: 0.6,
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
                letterSpacing: "0.1em",
              }}
            >
              STATION_X64
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Laptop
              size={56}
              weight="thin"
              style={{
                color: "var(--brand-primary)",
                opacity: 0.6,
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
                letterSpacing: "0.1em",
              }}
            >
              STATION_MOBILE
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <DeviceMobile
              size={56}
              weight="thin"
              style={{
                color: "var(--brand-primary)",
                opacity: 0.6,
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--ui-font-mono)",
                letterSpacing: "0.1em",
              }}
            >
              FIELD_UNIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
