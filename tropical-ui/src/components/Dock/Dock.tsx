import React from 'react';

interface DockProps {
  children: React.ReactNode;
}

export const Dock: React.FC<DockProps> = ({ children }) => {
  return (
    <div className="dock">
      {children}
    </div>
  );
};

interface DockButtonProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  badge?: boolean;
}

export const DockButton: React.FC<DockButtonProps> = ({
  icon,
  active,
  onClick,
  badge
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('DockButton clicked');
    if (onClick) onClick();
  };

  return (
    <div 
      className={`dock-btn ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {icon}
      {badge && <div className="dock-badge" />}
    </div>
  );
};

export const DockDivider: React.FC = () => <div className="dock-sep" />;
