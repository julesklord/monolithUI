import React from 'react';

export const Typography: React.FC = () => {
  return (
    <section className="doc-section" id="typography">
      <div className="section-eyebrow">05</div>
      <h2 className="section-title"><em>Typography</em></h2>
      <p className="section-desc">Three fonts with distinct roles. DM Serif for display moments, DM Sans for all UI, DM Mono for data and code. These can be overridden per brand via <span className="icode">--brand-font-*</span> tokens.</p>

      <div className="subsection">
        <div className="subsection-title">Type specimen</div>
        <div className="canvas col" style={{ padding: '0', gap: '0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', padding: '16px 20px', borderBottom: '1px solid var(--ui-border-subtle)' }}>
            <div style={{ width: '140px', flexShrink: '0', fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', lineHeight: '1.6' }}><strong style={{ color: 'var(--ui-text-tertiary)', display: 'block' }}>DM Serif Display</strong>serif · display · titles</div>
            <div style={{ fontFamily: 'var(--ui-font-serif)', fontSize: '30px', color: 'var(--ui-text-primary)', lineHeight: '1.2' }}>MonolithUI</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', padding: '16px 20px', borderBottom: '1px solid var(--ui-border-subtle)' }}>
            <div style={{ width: '140px', flexShrink: '0', fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', lineHeight: '1.6' }}><strong style={{ color: 'var(--ui-text-tertiary)', display: 'block' }}>DM Sans 600</strong>heavy · section labels</div>
            <div style={{ fontWeight: '600', fontSize: '16px', color: 'var(--ui-text-primary)' }}>Sessions · MCP Servers · Checkpoints</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', padding: '16px 20px', borderBottom: '1px solid var(--ui-border-subtle)' }}>
            <div style={{ width: '140px', flexShrink: '0', fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', lineHeight: '1.6' }}><strong style={{ color: 'var(--ui-text-tertiary)', display: 'block' }}>DM Sans 500</strong>medium · UI labels</div>
            <div style={{ fontWeight: '500', fontSize: '14px', color: 'var(--ui-text-primary)' }}>Workspace · Auth Manager · Settings</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', padding: '16px 20px', borderBottom: '1px solid var(--ui-border-subtle)' }}>
            <div style={{ width: '140px', flexShrink: '0', fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', lineHeight: '1.6' }}><strong style={{ color: 'var(--ui-text-tertiary)', display: 'block' }}>DM Sans 400</strong>base · body · messages</div>
            <div style={{ fontSize: '13px', color: 'var(--ui-text-secondary)', lineHeight: '1.55', maxWidth: '420px' }}>The PipelineOrchestrator doesn't have a trusted field yet. I'll add it and modify executeStep() to skip confirmation when active.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', padding: '16px 20px', borderBottom: '1px solid var(--ui-border-subtle)' }}>
            <div style={{ width: '140px', flexShrink: '0', fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', lineHeight: '1.6' }}><strong style={{ color: 'var(--ui-text-tertiary)', display: 'block' }}>DM Sans 300</strong>light · timestamps · meta</div>
            <div style={{ fontWeight: '300', fontSize: '11px', color: 'var(--ui-text-tertiary)' }}>12 minutes ago · 24 messages · ducer-cli workspace</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', padding: '16px 20px', borderBottom: '1px solid var(--ui-border-subtle)' }}>
            <div style={{ width: '140px', flexShrink: '0', fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', lineHeight: '1.6' }}><strong style={{ color: 'var(--ui-text-tertiary)', display: 'block' }}>DM Mono 400</strong>data · values · status</div>
            <div style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '11px', color: 'var(--ui-success-light)' }}>gemini-2.5-pro · oauth-personal · 1M ctx · 8% used</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', padding: '16px 20px' }}>
            <div style={{ width: '140px', flexShrink: '0', fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', lineHeight: '1.6' }}><strong style={{ color: 'var(--ui-text-tertiary)', display: 'block' }}>DM Mono 500</strong>code · tokens · emphasis</div>
            <div style={{ fontFamily: 'var(--ui-font-mono)', fontWeight: '500', fontSize: '11px', color: 'var(--ui-accent-primary-light)' }}>trusted?: boolean — <span style={{ color: 'var(--ui-text-disabled)' }}>// skip confirm loop</span></div>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Type scale</div>
        <div className="canvas col" style={{ gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>2xs · 9.5px</span><span style={{ fontSize: '9.5px', color: 'var(--ui-text-tertiary)' }}>Badges, timestamps, fine print</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>xs · 10.5px</span><span style={{ fontSize: '10.5px', color: 'var(--ui-text-tertiary)' }}>Command bar segments, sidebar links, canvas labels</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>sm · 11.5px</span><span style={{ fontSize: '11.5px', color: 'var(--ui-text-secondary)' }}>Session meta, MCP type, monospace values</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>base · 13px</span><span style={{ fontSize: '13px', color: 'var(--ui-text-primary)' }}>Chat messages, card content, form labels</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>md · 14px</span><span style={{ fontSize: '14px', color: 'var(--ui-text-primary)' }}>Drawer titles, panel headers, button text</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>lg · 16px</span><span style={{ fontSize: '16px', color: 'var(--ui-text-primary)' }}>Section titles, page headers</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>xl · 20px</span><span style={{ fontSize: '20px', color: 'var(--ui-text-primary)' }}>Hero subtitles</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>2xl · 26px</span><span style={{ fontSize: '26px', color: 'var(--ui-text-primary)', fontWeight: '300' }}>Page titles</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><span style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '10px', color: 'var(--ui-text-disabled)', width: '100px' }}>3xl · 34px</span><span style={{ fontSize: '34px', color: 'var(--ui-text-primary)', fontWeight: '300', fontFamily: 'var(--ui-font-serif)' }}>Display serif</span></div>
        </div>
      </div>
    </section>
  );
};
