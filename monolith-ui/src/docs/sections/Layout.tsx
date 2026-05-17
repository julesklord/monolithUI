import React from 'react';
import { 
  IconSun
} from '@tabler/icons-react';

export const Layout: React.FC = () => {
  return (
    <section className="doc-section" id="layout">
      <div className="section-eyebrow">09</div>
      <h2 className="section-title">Orbital <em>Layout</em></h2>
      <p className="section-desc">Traditional grids are static. Our layout is a solar system. Information orbits a focal point based on gravity (priority) and visual mass.</p>

      {/* SECTION 1: THE CORE */}
      <div className="subsection">
        <div className="subsection-title">1. The Solar Principle (The Core)</div>
        <p className="section-desc">Every view has a <strong>Core</strong> (The Sun). All sub-panels, tools, and meta-info act as <strong>Planets</strong> orbiting that core. When the core changes, the orbits re-align to maintain balance.</p>
      </div>

      <div className="canvas center" style={{ height: '400px', background: 'radial-gradient(circle at 50% 50%, var(--ui-surface-2) 0%, var(--ui-surface-0) 70%)', position: 'relative', overflow: 'hidden' }}>
          {/* THE CORE */}
          <div className="orbital-sun">
             <IconSun size={40} style={{ color: 'var(--brand-primary)', filter: 'drop-shadow(0 0 20px var(--brand-primary-bg))' }} />
             <div style={{ marginTop: '12px', fontSize: '10px', fontWeight: 800, color: 'var(--brand-primary)', letterSpacing: '0.1em' }}>THE_CORE</div>
          </div>

          {/* INNER ORBIT */}
          <div className="orbit-line" style={{ width: '220px', height: '220px' }}></div>
          <div className="orbit-node" style={{ top: 'calc(50% - 110px)', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg) translateY(-110px) rotate(-45deg)' }}>
             <div className="orbit-tag">INNER_ORBIT</div>
          </div>

          {/* OUTER ORBIT */}
          <div className="orbit-line" style={{ width: '340px', height: '340px', borderStyle: 'dashed' }}></div>
          <div className="orbit-node" style={{ top: 'calc(50% - 170px)', left: '50%', transform: 'translate(-50%, -50%) rotate(-30deg) translateY(-170px) rotate(30deg)' }}>
             <div className="orbit-tag" style={{ background: 'var(--ui-surface-4)' }}>OUTER_ORBIT</div>
          </div>
      </div>

      {/* SECTION 2: GRAVITY STATES */}
      <div className="subsection">
        <div className="subsection-title">2. The 4 Gravity States (Z-Stack)</div>
        <div className="grid-2">
            <div className="rule-box">
               <div style={{ color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '8px' }}>1. THE CORE (SOLAR)</div>
               <p>The primary action area. It takes 100% of the visual gravity. <strong>Z-index: 1</strong>. Surface: 0.</p>
            </div>
            <div className="rule-box">
               <div style={{ color: 'var(--ui-accent-secondary)', fontWeight: 800, marginBottom: '8px' }}>2. INNER ORBIT (PLANETARY)</div>
               <p>Tools directly related to the core. <strong>Z-index: 20</strong>. Examples: Toolbars, active sidebars.</p>
            </div>
            <div className="rule-box">
               <div style={{ color: 'var(--ui-text-tertiary)', fontWeight: 800, marginBottom: '8px' }}>3. OUTER ORBIT (SATELLITE)</div>
               <p>System-wide information. <strong>Z-index: 40</strong>. Examples: Global navigation, system bars.</p>
            </div>
            <div className="rule-box">
               <div style={{ color: 'var(--ui-success)', fontWeight: 800, marginBottom: '8px' }}>4. ZERO-GRAVITY (DEEP SPACE)</div>
               <p>Temporary overlays. <strong>Z-index: 60</strong>. Examples: Modals, urgent alerts.</p>
            </div>
        </div>
      </div>

      {/* SECTION 3: TECHNICAL RATIOS */}
      <div className="subsection">
        <div className="subsection-title">3. Orbital Ratios & Spacing</div>
        <div className="grid-2">
           <div className="subsection-meta">
              <p className="section-desc">To maintain balance, we follow the <strong>Monolith Ratio (1:4)</strong>. The core must always occupy at least 75% of the total visual mass to ensure focus.</p>
              <div className="rule-box" style={{ background: 'var(--ui-surface-1)' }}>
                 <p><strong>Rule:</strong> Side panels (Planetary) should never exceed 280px in desktop or 25% of viewport width.</p>
              </div>
           </div>
           <div className="canvas" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', height: '160px', gap: '8px' }}>
                 <div style={{ width: '25%', background: 'var(--ui-surface-2)', border: '1px solid var(--ui-border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--ui-text-tertiary)' }}>PLANET (25%)</div>
                 <div style={{ flex: 1, background: 'var(--brand-primary-bg)', border: '1.5px solid var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: 'var(--brand-primary)' }}>THE CORE (75%)</div>
              </div>
              <div className="canvas-label">The 1:4 Visual Gravity Balance</div>
           </div>
        </div>
      </div>
    </section>
  );
};
