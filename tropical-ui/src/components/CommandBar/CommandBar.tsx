import React from 'react';

interface CommandBarProps {
  children: React.ReactNode;
}

export const CommandBar: React.FC<CommandBarProps> = ({ children }) => {
  return (
    <div className="command-bar">
      <div className="cb-dots">
        <div className="cb-dot r" />
        <div className="cb-dot y" />
        <div className="cb-dot g" />
      </div>
      {children}
    </div>
  );
};

interface CommandBarSegmentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'neutral';
  onClick?: () => void;
  active?: boolean;
  style?: React.CSSProperties;
}

export const CommandBarSegment: React.FC<CommandBarSegmentProps> = ({
  children,
  variant = 'neutral',
  onClick,
  active,
  style
}) => {
  return (
    <div 
      className={`cb-seg ${variant} ${active ? 'active' : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export const CommandBarDivider: React.FC = () => <div className="cb-div" />;
export const CommandBarSpacer: React.FC = () => <div className="cb-spacer" />;
