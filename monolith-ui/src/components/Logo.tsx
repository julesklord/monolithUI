import React from 'react';

interface LogoProps {
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({ size = 100, className, style }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Monolith Body: A brutalist, geometric slab */}
      <path d="M60 40 L140 40 L140 160 L60 160 Z" fill="url(#monolith_grad_comp)" stroke="var(--brand-primary, #4285f4)" strokeWidth="2"/>
      
      {/* Perspective/Depth lines */}
      <path d="M60 40 L70 30 L150 30 L150 150 L140 160" stroke="var(--brand-primary, #4285f4)" strokeWidth="1.5" strokeOpacity="0.5"/>
      <path d="M140 40 L150 30" stroke="var(--brand-primary, #4285f4)" strokeWidth="1.5" strokeOpacity="0.5"/>
      
      {/* "Density" details: Grid lines inside the monolith */}
      <path d="M60 70 H140 M60 100 H140 M60 130 H140" stroke="var(--brand-primary, #4285f4)" strokeWidth="0.5" strokeOpacity="0.3"/>
      <path d="M85 40 V160 M115 40 V160" stroke="var(--brand-primary, #4285f4)" strokeWidth="0.5" strokeOpacity="0.3"/>
      
      {/* The "Core": A central glowing point of gravity */}
      <circle cx="100" cy="100" r="12" fill="var(--brand-primary, #4285f4)" fillOpacity="0.1">
        <animate attributeName="r" values="10;14;10" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="4" fill="var(--brand-primary, #4285f4)"/>
      
      {/* Terminal/Code hints */}
      <rect x="70" y="145" width="15" height="4" fill="var(--brand-secondary, #c5a9f5)" fillOpacity="0.8"/>
      <rect x="90" y="145" width="8" height="4" fill="var(--ui-text-tertiary, #888)" fillOpacity="0.5"/>
      
      <defs>
        <linearGradient id="monolith_grad_comp" x1="60" y1="40" x2="140" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--ui-surface-1, #12151c)"/>
          <stop offset="1" stopColor="var(--ui-surface-2, #1a1d24)"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
