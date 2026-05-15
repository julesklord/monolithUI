import React from 'react';

export const Principles: React.FC = () => {
  return (
    <section className="doc-section" id="principles">
      <div className="section-eyebrow">01</div>
      <h2 className="section-title"><em>Principles</em></h2>
      <p className="section-desc">Five rules that govern every decision in this system. If a design choice conflicts with these, the choice is wrong.</p>

      <div className="canvas grid2" style={{ gap: '14px' }}>
        <div className="surface-card elevated" style={{ borderTop: '4px solid #64748b', background: 'rgba(100, 116, 139, 0.05)' }}>
          <div style={{ fontSize: '20px', marginBottom: '10px', color: '#64748b' }}><i className="ti ti-layers-subtract"></i></div>
          <div style={{ fontSize: 'var(--ui-text-base)', fontWeight: '600', color: 'var(--ui-text-primary)', marginBottom: '6px' }}>Depth over flat</div>
          <div style={{ fontSize: 'var(--ui-text-xs)', color: 'var(--ui-text-secondary)', lineHeight: 'var(--ui-leading-loose)' }}>Surfaces have weight. Use the 7-step surface ramp to create real visual hierarchy. Flat monochrome backgrounds are a failure of imagination.</div>
        </div>
        <div className="surface-card elevated" style={{ borderTop: '4px solid #a855f7', background: 'rgba(168, 85, 247, 0.05)' }}>
          <div style={{ fontSize: '20px', marginBottom: '10px', color: '#a855f7' }}><i className="ti ti-bounce-right"></i></div>
          <div style={{ fontSize: 'var(--ui-text-base)', fontWeight: '600', color: 'var(--ui-text-primary)', marginBottom: '6px' }}>Physics, not interpolation</div>
          <div style={{ fontSize: 'var(--ui-text-xs)', color: 'var(--ui-text-secondary)', lineHeight: 'var(--ui-leading-loose)' }}>Nothing in nature moves at constant speed. Every animation uses a bezier curve that mimics real physical force. ease-linear is banned except for looping animations.</div>
        </div>
        <div className="surface-card elevated" style={{ borderTop: '4px solid #06b6d4', background: 'rgba(6, 182, 212, 0.05)' }}>
          <div style={{ fontSize: '20px', marginBottom: '10px', color: '#06b6d4' }}><i className="ti ti-maximize"></i></div>
          <div style={{ fontSize: 'var(--ui-text-base)', fontWeight: '600', color: 'var(--ui-text-primary)', marginBottom: '6px' }}>Orbital, not grid</div>
          <div style={{ fontSize: 'var(--ui-text-xs)', color: 'var(--ui-text-secondary)', lineHeight: 'var(--ui-leading-loose)' }}>Navigation doesn't live in a sidebar. It orbits the content — a command bar on top, a floating dock on the side, drawers from below. The content always wins the prime real estate.</div>
        </div>
        <div className="surface-card elevated" style={{ borderTop: '4px solid #f59e0b', background: 'rgba(245, 158, 11, 0.05)' }}>
          <div style={{ fontSize: '20px', marginBottom: '10px', color: '#f59e0b' }}><i className="ti ti-contrast"></i></div>
          <div style={{ fontSize: 'var(--ui-text-base)', fontWeight: '600', color: 'var(--ui-text-primary)', marginBottom: '6px' }}>Semantic over decorative</div>
          <div style={{ fontSize: 'var(--ui-text-xs)', color: 'var(--ui-text-secondary)', lineHeight: 'var(--ui-leading-loose)' }}>Every color carries meaning. Blue = primary action. Green = success/connected. Amber = warning/checkpoint. Red = error. Purple/secondary = metadata. Never decorate with color.</div>
        </div>
        <div className="surface-card elevated" style={{ gridColumn: '1/-1', borderTop: '4px solid #ef4444', background: 'rgba(239, 68, 68, 0.05)' }}>
          <div style={{ fontSize: '20px', marginBottom: '10px', color: '#ef4444' }}><i className="ti ti-brand-open-source"></i></div>
          <div style={{ fontSize: 'var(--ui-text-base)', fontWeight: '600', color: 'var(--ui-text-primary)', marginBottom: '6px' }}>Brand-agnostic slots</div>
          <div style={{ fontSize: 'var(--ui-text-xs)', color: 'var(--ui-text-secondary)', lineHeight: 'var(--ui-leading-loose)' }}>The system uses semantic token slots. Each project fills those slots with its brand colors via @layer brand. The components never reference brand colors directly — they only reference semantic slots. This means the entire system rebrands with ~10 CSS variable overrides.</div>
        </div>
      </div>
    </section>
  );
};
