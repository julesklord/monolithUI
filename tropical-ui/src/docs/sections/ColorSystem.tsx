import React from 'react';

export const ColorSystem: React.FC = () => {
  return (
    <section className="doc-section" id="color">
      <div className="section-eyebrow">02</div>
      <h2 className="section-title">Color <em>System</em></h2>
      <p className="section-desc">Three layers: surface ramp, semantic fixed colors, and brand accent slots. Only the accent slots change per brand.</p>

      <div className="subsection">
        <div className="subsection-title">Surface ramp · dark mode (7 steps)</div>
        <div className="color-grid">
          <div className="swatch"><div className="swatch-block" style={{ background: '#0d1017' }}></div><div className="swatch-info"><div className="swatch-name">Surface 0</div><div className="swatch-val">#0d1017</div><div className="swatch-tok">--ui-surface-0</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#12151c' }}></div><div className="swatch-info"><div className="swatch-name">Surface 1</div><div className="swatch-val">#12151c</div><div className="swatch-tok">--ui-surface-1</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#161920' }}></div><div className="swatch-info"><div className="swatch-name">Surface 2</div><div className="swatch-val">#161920</div><div className="swatch-tok">--ui-surface-2</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#1a1d24' }}></div><div className="swatch-info"><div className="swatch-name">Surface 3</div><div className="swatch-val">#1a1d24</div><div className="swatch-tok">--ui-surface-3</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#1e2229' }}></div><div className="swatch-info"><div className="swatch-name">Surface 4</div><div className="swatch-val">#1e2229</div><div className="swatch-tok">--ui-surface-4</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#23272f' }}></div><div className="swatch-info"><div className="swatch-name">Surface 5</div><div className="swatch-val">#23272f</div><div className="swatch-tok">--ui-surface-5</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#2a2e38' }}></div><div className="swatch-info"><div className="swatch-name">Surface 6</div><div className="swatch-val">#2a2e38</div><div className="swatch-tok">--ui-surface-6</div></div></div>
        </div>
        <div className="canvas-label">Surface 0 = deepest (dock bg, modal backdrop) → Surface 6 = most raised (hover states, active cards)</div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Surface ramp · light mode</div>
        <div className="color-grid">
          <div className="swatch"><div className="swatch-block" style={{ background: '#f0f2f5' }}></div><div className="swatch-info"><div className="swatch-name">Surface 0</div><div className="swatch-val">#f0f2f5</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#e8eaed', border: '1px solid #ddd' }}></div><div className="swatch-info"><div className="swatch-name">Surface 1</div><div className="swatch-val">#e8eaed</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#e2e5e9', border: '1px solid #ddd' }}></div><div className="swatch-info"><div className="swatch-name">Surface 2</div><div className="swatch-val">#e2e5e9</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#ffffff', border: '1px solid #eee' }}></div><div className="swatch-info"><div className="swatch-name">Surface 3</div><div className="swatch-val">#ffffff</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#f8f9fa', border: '1px solid #eee' }}></div><div className="swatch-info"><div className="swatch-name">Surface 4</div><div className="swatch-val">#f8f9fa</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#f1f3f4', border: '1px solid #eee' }}></div><div className="swatch-info"><div className="swatch-name">Surface 5</div><div className="swatch-val">#f1f3f4</div></div></div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Brand accent slots (open · swap per project)</div>
        <div className="rule-box">
          <p>These two slots are the <strong>only</strong> colors that change between brands. Everything else is fixed. Primary = the main action color. Secondary = the complement, used for metadata and decorative accents.</p>
        </div>
        <div className="canvas row" style={{ alignItems: 'stretch' }}>
          <div style={{ flex: '1', minWidth: '180px' }}>
            <div style={{ height: '60px', background: 'var(--ui-gradient-primary)', borderRadius: 'var(--ui-r-md)', marginBottom: '10px' }}></div>
            <div style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-tertiary)', marginBottom: '4px' }}>--ui-accent-primary</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>→ --ui-accent-primary-light</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>→ --ui-accent-primary-bg</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>→ --ui-accent-primary-border</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>→ --ui-accent-primary-glow</div>
          </div>
          <div style={{ flex: '1', minWidth: '180px' }}>
            <div style={{ height: '60px', background: 'var(--ui-accent-secondary)', borderRadius: 'var(--ui-r-md)', marginBottom: '10px' }}></div>
            <div style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-tertiary)', marginBottom: '4px' }}>--ui-accent-secondary</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>→ --ui-accent-secondary-bg</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>→ --ui-accent-secondary-border</div>
          </div>
          <div style={{ flex: '1', minWidth: '180px' }}>
            <div className="open-slot" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
              <span>your brand</span>
            </div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>Fill with .brand-YourName {'{'}</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', paddingLeft: '12px' }}>--brand-primary: #YOURCOLOR;</div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>{'}'}</div>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Fixed semantic colors (never change per brand)</div>
        <div className="color-grid">
          <div className="swatch"><div className="swatch-block" style={{ background: '#34a853' }}></div><div className="swatch-info"><div className="swatch-name">Success</div><div className="swatch-val">#34a853</div><div className="swatch-tok">--ui-success</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#81c995' }}></div><div className="swatch-info"><div className="swatch-name">Success Light</div><div className="swatch-val">#81c995</div><div className="swatch-tok">--ui-success-light</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#fbbf24' }}></div><div className="swatch-info"><div className="swatch-name">Warning</div><div className="swatch-val">#fbbf24</div><div className="swatch-tok">--ui-warning</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#f28b82' }}></div><div className="swatch-info"><div className="swatch-name">Danger</div><div className="swatch-val">#f28b82</div><div className="swatch-tok">--ui-danger</div></div></div>
          <div className="swatch"><div className="swatch-block" style={{ background: '#60a5fa' }}></div><div className="swatch-info"><div className="swatch-name">Info</div><div className="swatch-val">#60a5fa</div><div className="swatch-tok">--ui-info</div></div></div>
        </div>
        <div className="canvas-label">These are universal. A green connected dot means connected in every brand using this system.</div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Color semantics · usage rules</div>
        <div className="canvas col" style={{ gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--ui-accent-primary)', borderRadius: '50%', flexShrink: '0' }}></div>
            <span style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-secondary)' }}>Primary → main action, selected state, active nav, streaming cursor</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--ui-accent-secondary)', borderRadius: '50%', flexShrink: '0' }}></div>
            <span style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-secondary)' }}>Secondary → metadata, token counts, version info, decorative</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--ui-success)', borderRadius: '50%', flexShrink: '0' }}></div>
            <span style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-secondary)' }}>Success → connected, auth ok, tool completed, online</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--ui-warning)', borderRadius: '50%', flexShrink: '0' }}></div>
            <span style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-secondary)' }}>Warning → checkpoints, degraded state, tool executing, caution</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--ui-danger)', borderRadius: '50%', flexShrink: '0' }}></div>
            <span style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-secondary)' }}>Danger → error, auth fail, process dead, destructive action</span>
          </div>
        </div>
      </div>
    </section>
  );
};
