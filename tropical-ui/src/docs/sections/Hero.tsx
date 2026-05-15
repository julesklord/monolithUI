import React from 'react';
import { TUIWindow, TUIStatusBar, TUIStatusSeg, TUIRow, TUIText } from '../../components';

export const Hero: React.FC = () => {
  return (
    <section className="doc-section" style={{ paddingTop: '0px' }}>
      
      {/* System Status / Header Block */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '32px' }}>
        <div style={{ 
          width: '56px', height: '56px', borderRadius: '14px', 
          background: 'var(--brand-primary-bg)', 
          border: '1px solid var(--brand-primary-border)', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.5C12 2.5 5 8 5 15c0 3.866 3.134 7 7 7s7-3.134 7-7c0-7-7-12.5-7-12.5z" fill="var(--brand-primary-bg)" />
            <path d="M12 2.5V22" stroke="var(--brand-secondary)" />
            <path d="M12 11l4-3" stroke="var(--brand-secondary)" />
            <path d="M12 15l3.5-2.5" stroke="var(--brand-secondary)" />
            <path d="M12 19l3-2" stroke="var(--brand-secondary)" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: '0 0 4px 0', fontSize: '24px', fontWeight: 500, color: 'var(--ui-text-primary)', letterSpacing: '-0.02em' }}>
            TropicalUI <span style={{ color: 'var(--ui-text-disabled)' }}>// Core System</span>
          </h1>
          <div style={{ display: 'flex', gap: '12px', fontFamily: 'var(--ui-font-mono)', fontSize: '11px', color: 'var(--ui-text-tertiary)', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div className="sdot on"></div> v1.0.0</span>
            <span>·</span>
            <span style={{ color: 'var(--brand-primary-light)' }}>status: active</span>
            <span>·</span>
            <span>target: multi-env (gui/tui)</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div className="tag primary">Desktop</div>
          <div className="tag secondary">Web</div>
          <div className="tag neutral">Terminal</div>
        </div>
      </div>

      <div className="rule-box">
        <p><strong>Density over decoration.</strong> TropicalUI is not a marketing site template. It is an industrial-grade design system built for complex developer tools, orchestration scripts, and CLIs. It prioritizes information density, strict layout rules, and seamless terminal translation.</p>
      </div>

      <div className="subsection">
        <div className="subsection-title">Architectural Pillars</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          <div style={{ display: 'flex', padding: '12px 16px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', gap: '16px' }}>
            <div style={{ color: 'var(--brand-primary)', width: '20px', display: 'flex', justifyContent: 'center' }}><i className="ti ti-meteor"></i></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ui-text-primary)', marginBottom: '4px' }}>Native OS Physics</div>
              <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.5 }}>Linear interpolation is banned. Every motion utilizes bezier curves or spring physics to emulate real momentum and tactile feedback, drawing heavily from native desktop environments.</div>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '12px 16px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', gap: '16px' }}>
            <div style={{ color: 'var(--ui-accent-secondary)', width: '20px', display: 'flex', justifyContent: 'center' }}><i className="ti ti-terminal-2"></i></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ui-text-primary)', marginBottom: '4px' }}>Terminal Feasibility</div>
              <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.5 }}>If a component cannot be reasonably translated into a 16-color TUI using characters and ANSI sequences, it does not belong in this system. This constraint forces clarity over decoration.</div>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '12px 16px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', gap: '16px' }}>
            <div style={{ color: 'var(--ui-success)', width: '20px', display: 'flex', justifyContent: 'center' }}><i className="ti ti-planet"></i></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ui-text-primary)', marginBottom: '4px' }}>Orbital Layouts</div>
              <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.5 }}>Content dictates layout. Toolbars and navigation do not trap content in rigid grids; they orbit it. Command bars float on top, docks on the side, and drawers emerge from below.</div>
            </div>
          </div>

        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Cross-Environment Translation (Example)</div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <div className="canvas-label" style={{ marginBottom: '8px' }}>GUI Representation</div>
            <div className="canvas" style={{ padding: '12px', minHeight: '180px', margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'var(--ui-surface-2)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', marginBottom: '12px' }}>
                <div className="sdot on"></div>
                <span style={{ fontSize: '12px', color: 'var(--ui-text-primary)' }}>Terminal Connected</span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                  <div className="tag primary">Active</div>
                </div>
              </div>
              <div style={{ flex: 1, padding: '12px', background: 'var(--ui-surface-1)', borderRadius: 'var(--ui-r-md)', border: '1px solid var(--ui-border-subtle)' }}>
                <div style={{ fontSize: '11px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-tertiary)' }}>~ $ npm run build</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-success-light)', marginTop: '4px' }}>Build completed in 1.42s</div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <div className="canvas-label" style={{ marginBottom: '8px' }}>TUI Representation</div>
            <TUIWindow>
              <TUIStatusBar>
                <TUIStatusSeg variant="success">● Connected</TUIStatusSeg>
                <TUIStatusSeg dim>│</TUIStatusSeg>
                <TUIStatusSeg variant="primary">[Active]</TUIStatusSeg>
              </TUIStatusBar>
              <div style={{ padding: '4px' }}>
                <TUIRow><TUIText variant="dim">~ $ npm run build</TUIText></TUIRow>
                <TUIRow><TUIText variant="success">Build completed in 1.42s</TUIText></TUIRow>
              </div>
            </TUIWindow>
          </div>

        </div>
      </div>

      <div className="subsection" style={{ marginTop: '48px' }}>
        <div className="subsection-title">System Origins</div>
        <div className="rule-box" style={{ background: 'var(--ui-surface-2)', borderLeftColor: 'var(--ui-accent-secondary)' }}>
          <p>
            Born in <strong>La Paz, Baja California Sur</strong>, TropicalUI draws its aesthetic spirit directly from its environment. It is deeply inspired by the coastal beaches, the relentless summer heat, and the vibrant, unapologetic colors of local tropical fruits like mangoes and pitahayas.
          </p>
          <p style={{ marginTop: '12px' }}>
            What started as an internal initiative for the <strong>Tropical Media Group</strong> to build cohesive, industrial-grade developer tools (CLIs, orchestration scripts, and dashboards) eventually evolved. By merging the freshness of the tropics with the strict precision of software engineering, TropicalUI became a standalone, open-source design system built to respect developers' time and focus.
          </p>
        </div>
      </div>

    </section>
  );
};
