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
        aria-hidden="true"
      />
      <div
        className={`drawer-preview ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          type="button"
          className="drawer-handle"
          onClick={onClose}
          aria-label="Close drawer handle"
        />
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
            <button
              type="button"
              className="drawer-close"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <X size={16} weight="duotone" />
            </button>
          </div>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </>
  );
};
