import React from 'react';

export const Layout: React.FC = () => {
  return (
    <section className="doc-section" id="layout">
      <div className="section-eyebrow">05</div>
      <h2 className="section-title">Orbital <em>Layout</em></h2>
      <p className="section-desc">The layout pattern that defines this system. Content wins the prime real estate. Navigation orbits it from the top, the side, and below.</p>

      <div className="subsection">
        <div className="subsection-title">Structure</div>
        <div className="layout-diagram">
          <div className="ld-bar">
            <i className="ti ti-stars" style={{ fontSize: '10px', marginRight: '5px' }}></i>
            Command Bar — model · auth · workspace · tokens · warnings · version
          </div>
          <div className="ld-body">
            <div className="ld-main">
              <i className="ti ti-message-2" style={{ fontSize: '22px', opacity: '.15' }}></i>
              <span style={{ fontSize: '10px' }}>main content canvas</span>
              <span style={{ fontSize: '9px', opacity: '.5' }}>chat / editor / view</span>
            </div>
            <div className="ld-col">
              <div className="ld-mini-dock">
                <div className="ld-mini-btn"><i className="ti ti-history"></i></div>
                <div className="ld-mini-btn"><i className="ti ti-plug"></i></div>
                <div className="ld-mini-btn"><i className="ti ti-folders"></i></div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '2px 2px' }}></div>
                <div className="ld-mini-btn"><i className="ti ti-settings"></i></div>
              </div>
            </div>
          </div>
          <div className="ld-drawer-strip">
            <i className="ti ti-layout-bottom-bar" style={{ fontSize: '12px' }}></i>
            Drawer emerges from below — sessions / MCP / checkpoints / workspaces / auth / settings
            <span style={{ marginLeft: 'auto', color: 'var(--ui-text-disabled)' }}>spring(0.34, 1.56, 0.64, 1) · 360ms</span>
          </div>
        </div>
      </div>

      <div className="subsection" id="zindex">
        <div className="subsection-title">Z-index stack</div>
        <div className="canvas col" style={{ gap: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ color: 'var(--ui-text-disabled)', width: '56px' }}>z-60</span>
            <div style={{ flex: '1', padding: '5px 10px', background: 'var(--ui-danger-bg)', border: '1px solid var(--ui-danger-border)', borderRadius: '4px', color: 'var(--ui-danger)' }}>Modals / alerts</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ color: 'var(--ui-text-disabled)', width: '56px' }}>z-50</span>
            <div style={{ flex: '1', padding: '5px 10px', background: 'var(--ui-info-bg)', border: '1px solid var(--ui-info-border)', borderRadius: '4px', color: 'var(--ui-info)' }}>Tooltips</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ color: 'var(--ui-text-disabled)', width: '56px' }}>z-40</span>
            <div style={{ flex: '1', padding: '5px 10px', background: 'var(--ui-accent-secondary-bg)', border: '1px solid var(--ui-accent-secondary-border)', borderRadius: '4px', color: 'var(--ui-accent-secondary)' }}>Floating dock</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ color: 'var(--ui-text-disabled)', width: '56px' }}>z-30</span>
            <div style={{ flex: '1', padding: '5px 10px', background: 'var(--ui-accent-primary-bg)', border: '1px solid var(--ui-accent-primary-border)', borderRadius: '4px', color: 'var(--ui-accent-primary-light)' }}>Drawers</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ color: 'var(--ui-text-disabled)', width: '56px' }}>z-20</span>
            <div style={{ flex: '1', padding: '5px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--ui-border-subtle)', borderRadius: '4px', color: 'var(--ui-text-tertiary)' }}>Backdrop overlay</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ color: 'var(--ui-text-disabled)', width: '56px' }}>z-10</span>
            <div style={{ flex: '1', padding: '5px 10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--ui-border-subtle)', borderRadius: '4px', color: 'var(--ui-text-disabled)' }}>Command bar (sticky)</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ color: 'var(--ui-text-disabled)', width: '56px' }}>z-1</span>
            <div style={{ flex: '1', padding: '5px 10px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--ui-border-subtle)', borderRadius: '4px', color: 'var(--ui-text-disabled)' }}>Main content</div>
          </div>
        </div>
      </div>

      <div className="subsection" id="grid">
        <div className="subsection-title">Grid & spacing rules</div>
        <div className="rule-box">
          <p><strong>Base unit: 4px.</strong> All spacing uses multiples of 4. Component internal padding: 8px/12px/16px. Section gaps: 24px/32px/48px. Never use odd or arbitrary values.</p>
        </div>
        <div className="rule-box">
          <p><strong>Min content width: 320px.</strong> The command bar collapses segments gracefully by hiding low-priority items (version, sandbox) first. The dock collapses to an icon-only strip below 640px.</p>
        </div>
      </div>
    </section>
  );
};
