import React from "react";
import { X } from "@phosphor-icons/react";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  icon?: React.ReactNode;
  headerActions?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  onClose,
  title,
  icon,
  headerActions,
}) => {
  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
      <div className={`drawer-preview ${isOpen ? "open" : ""}`}>
        <div className="drawer-handle" onClick={onClose} />
        <div className="drawer-header">
          {icon && <span className="drawer-icon">{icon}</span>}
          {title && <div className="drawer-title">{title}</div>}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: "6px",
              alignItems: "center",
            }}
          >
            {headerActions}
            <div
              className="drawer-close"
              onClick={onClose}
            >
              <X size={16} weight="duotone" />
            </div>
          </div>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </>
  );
};
