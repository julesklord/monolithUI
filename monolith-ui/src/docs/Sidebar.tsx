import React from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  Sparkle,
  Lightbulb,
  Palette,
  TextAa,
  ArrowBendUpRight,
  Sun,
  TerminalWindow,
  GridFour,
  Cards,
  CodeBlock,
  Table,
  Laptop,
  Browser,
} from "@phosphor-icons/react";

export const Sidebar: React.FC = () => {
  const sections = [
    {
      title: "Overview",
      items: [
        {
          id: "",
          label: "01 · Introduction",
          icon: <House weight="duotone" size={15} />,
        },
        {
          id: "principles",
          label: "02 · Principles",
          icon: <Sparkle weight="duotone" size={15} />,
        },
        {
          id: "philosophy",
          label: "03 · Philosophy",
          icon: <Lightbulb weight="duotone" size={15} />,
        },
      ],
    },
    {
      title: "Foundations",
      items: [
        {
          id: "color",
          label: "04 · Color System",
          icon: <Palette weight="duotone" size={15} />,
        },
        {
          id: "typography",
          label: "05 · Typography",
          icon: <TextAa weight="duotone" size={15} />,
        },
        {
          id: "icons",
          label: "06 · Icon System",
          icon: <GridFour weight="duotone" size={15} />,
        },
        {
          id: "tui-system",
          label: "07 · Terminal UI",
          icon: <TerminalWindow weight="duotone" size={15} />,
        },
        {
          id: "motion",
          label: "08 · Motion",
          icon: <ArrowBendUpRight weight="duotone" size={15} />,
        },
      ],
    },
    {
      title: "Structural Theory",
      items: [
        {
          id: "layout",
          label: "09 · Orbital Layout",
          icon: <Sun weight="duotone" size={15} />,
        },
      ],
    },
    {
      title: "Theming",
      items: [
        {
          id: "branding",
          label: "10 · Brand System",
          icon: <CodeBlock weight="duotone" size={15} />,
        },
        {
          id: "spec",
          label: "11 · Token Spec",
          icon: <Table weight="duotone" size={15} />,
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          id: "components",
          label: "12 · Library",
          icon: <Cards weight="duotone" size={15} />,
        },
      ],
    },
    {
      title: "Mocks · Live Examples",
      items: [
        {
          id: "desktop",
          label: "13 · Desktop Native",
          icon: <Laptop weight="duotone" size={15} />,
        },
        {
          id: "web",
          label: "14 · Web Dashboard",
          icon: <Browser weight="duotone" size={15} />,
        },
        {
          id: "terminal",
          label: "15 · TUI Console",
          icon: <TerminalWindow weight="duotone" size={15} />,
        },
      ],
    },
  ];
  return (
    <aside className="doc-sidebar">
      <div
        style={{
          padding: "8px 8px 12px",
          marginBottom: "8px",
          borderBottom: "1px solid var(--ui-border-subtle)",
        }}
      >
        <div
          style={{
            fontSize: "9px",
            fontFamily: "var(--ui-font-mono)",
            color: "var(--ui-text-disabled)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          MONOLITH_UI · v2.0.0
        </div>
        <div
          style={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <div className="sdot on" />
          <span
            style={{
              fontSize: "10px",
              fontFamily: "var(--ui-font-mono)",
              color: "var(--ui-text-tertiary)",
            }}
          >
            SYSTEM: ACTIVE
          </span>
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="sidebar-section">
          <div className="sidebar-section-title">{section.title}</div>
          {section.items.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              end={item.id === ""}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}

      <div
        style={{
          marginTop: "auto",
          paddingTop: "16px",
          borderTop: "1px solid var(--ui-border-subtle)",
          padding: "12px 8px 0",
        }}
      >
        <div
          style={{
            fontSize: "9px",
            fontFamily: "var(--ui-font-mono)",
            color: "var(--ui-text-disabled)",
            lineHeight: 1.6,
          }}
        >
          <div>REGION: BAJA_CALIFORNIA_SUR</div>
          <div style={{ color: "var(--brand-primary)", opacity: 0.7 }}>
            tropical.dev © 2026
          </div>
        </div>
      </div>
    </aside>
  );
};
