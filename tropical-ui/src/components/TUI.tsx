import React from 'react';

export const TUIWindow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="tui-window tui-theme">
    {children}
  </div>
);

export const TUIStatusBar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="tui-status-bar">
    {children}
  </div>
);

export const TUIStatusSeg: React.FC<{ children: React.ReactNode; dim?: boolean; variant?: string }> = ({ children, dim, variant }) => (
  <div className={`tui-status-seg ${dim ? 'dim' : ''} ${variant ? `tui-text-${variant}` : ''}`}>
    {children}
  </div>
);

export const TUIPanel: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="tui-panel">
    {title && <div className="tui-panel-header">{title}</div>}
    <div className="tui-panel-content">
      {children}
    </div>
  </div>
);

export const TUIRow: React.FC<{ children: React.ReactNode; active?: boolean; selected?: boolean }> = ({ children, active, selected }) => (
  <div className={`tui-row ${active ? 'active' : ''} ${selected ? 'selected' : ''}`}>
    {children}
  </div>
);

export const TUIText: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'success' | 'warning' | 'danger' | 'dim' }> = ({ children, variant }) => (
  <span className={variant ? `tui-text-${variant}` : ''}>
    {children}
  </span>
);

export const TUIDivider: React.FC = () => <div className="tui-divider" />;
