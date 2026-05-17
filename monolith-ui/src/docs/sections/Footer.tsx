import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '32px 0 0', borderTop: '1px solid var(--ui-border-subtle)' }}>
      <div style={{ fontFamily: 'var(--ui-font-serif)', fontSize: '22px', color: 'var(--ui-text-primary)', marginBottom: '6px' }}>Monolith <em>UI</em></div>
      <div style={{ fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>
        v1.0 · Jules Martins / Tropical Media Group · orbital layout edition ·
        <svg width="9" height="9" viewBox="0 0 28 28" fill="none" style={{ verticalAlign: 'middle', margin: '0 2px' }}><path className="anim-star" d="M14 3L16.2 10.8L24 14L16.2 17.2L14 25L11.8 17.2L4 14L11.8 10.8Z" fill="currentColor" style={{ color: 'var(--ui-accent-primary-light)' }}/></svg>
        MIT License
      </div>
    </div>
  );
};
