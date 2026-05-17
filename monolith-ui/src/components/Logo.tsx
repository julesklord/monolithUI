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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Main Circular Container */}
      <circle cx="50" cy="50" r="48" stroke="var(--brand-primary)" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.2"/>

      {/* Background Sky (Blue) */}
      <path d="M50 50m-48 0a48 48 0 1 0 96 0a48 48 0 1 0 -96 0" fill="var(--brand-primary)" opacity="0.05"/>

      {/* The Setting Sun (Center) */}
      <circle cx="50" cy="52" r="24" fill="url(#logo-sunset-grad)">
        <animate attributeName="r" values="24;25;24" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Ground / Desert (Brown Circular Segment) */}
      <path d="M2 50 A48 48 0 0 0 98 50 L98 100 L2 100 Z" fill="var(--ui-surface-3)" opacity="0.9" clipPath="url(#logo-circle-clip)"/>

      {/* Technical Grid Overlay (Inside the Circle) */}
      <circle cx="50" cy="50" r="48" stroke="var(--brand-primary)" strokeWidth="1" opacity="0.3"/>

      {/* Reactive Reflection Lines */}
      <rect x="35" y="75" width="30" height="1.5" rx="0.75" fill="var(--brand-primary)" opacity="0.7">
        <animate attributeName="width" values="30;45;30" dur="3s" repeatCount="indefinite" />
        <animate attributeName="x" values="35;27.5;35" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* Horizontal "Scanlines" (Technical Industrial feel) */}
      <path d="M10 40H90M10 60H90M10 80H90" stroke="white" strokeWidth="0.2" opacity="0.1"/>

      <defs>
        <clipPath id="logo-circle-clip">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
        <linearGradient id="logo-sunset-grad" x1="50" y1="30" x2="50" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--brand-primary)" />
          <stop offset="100%" stopColor="var(--brand-secondary, #f59e0b)" />
        </linearGradient>
      </defs>
    </svg>
  );
};
