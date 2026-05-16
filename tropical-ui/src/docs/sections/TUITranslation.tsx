import React from 'react';
import { 
  TUIWindow, 
  TUIStatusBar, 
  TUIStatusSeg, 
  TUIPanel, 
  TUIRow, 
  TUIText, 
  TUIDivider 
} from '../../components';

export const TUITranslation: React.FC = () => {
  return (
    <section className="doc-section" id="tui">
      <div className="section-eyebrow">10</div>
      <h2 className="section-title">Interfaces</h2>
      <p className="section-desc">The system specifies three distinct design lines to ensure consistency across all computing environments, from high-performance desktop tools to terminal-based utilities.</p>

      <div className="subsection">
        <div className="subsection-title">1. Desktop Native UI</div>
        <p className="section-desc">Focus on extreme information density, OS-level integration, and precision toolkits. This line is designed for tools like IDEs, Video Editors, or CAD software.</p>
        <div className="rule-box">
          <p><strong>Density is a feature.</strong> Use smaller font sizes (11px-12px) and minimal padding (4px-8px). Borders must be 1px and solid. Radii are strictly 3px or 0px.</p>
        </div>
        <div className="canvas">
          <div style={{ background: 'var(--ui-surface-2)', border: '1.5px solid var(--ui-border-default)', borderRadius: '3px', width: '100%', overflow: 'hidden' }}>
            <div style={{ height: '28px', background: 'var(--ui-surface-3)', borderBottom: '1px solid var(--ui-border-subtle)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '8px', fontSize: '11px', fontWeight: 600 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ui-danger)' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ui-warning)' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ui-success)' }}></div>
              <div style={{ flex: 1, textAlign: 'center', opacity: 0.5 }}>TropicalUI_Project — Workspace</div>
            </div>
            <div style={{ padding: '12px', display: 'flex', gap: '12px' }}>
              <div style={{ width: '120px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-subtle)', height: '80px', padding: '8px', fontSize: '10px', color: 'var(--ui-text-tertiary)' }}>
                PROJECT_FILES<br/>index.tsx<br/>styles.css
              </div>
              <div style={{ flex: 1, background: 'var(--ui-surface-0)', border: '1px solid var(--ui-border-subtle)', padding: '8px', fontFamily: 'var(--ui-font-mono)', fontSize: '10px' }}>
                <span style={{ color: 'var(--brand-primary)' }}>const</span> App = () =&gt; &#123; ... &#125;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">2. Web-based UI</div>
        <p className="section-desc">Focus on rich interactions, cross-platform accessibility, and visual wow-factor. Designed for dashboards, e-commerce, and SaaS platforms.</p>
        <div className="rule-box">
          <p><strong>Depth and Softness.</strong> Use glassmorphism (backdrop-filter), larger hit areas (40px+), and smooth spring animations. Gradients are allowed for brand accents but never for structural elements.</p>
        </div>
        <div className="canvas">
          <div style={{ 
            background: 'linear-gradient(135deg, var(--ui-surface-1), var(--ui-surface-2))', 
            border: '1px solid var(--ui-border-default)', 
            borderRadius: '12px', 
            padding: '24px', 
            width: '100%',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '20px' }}>Analytics Overview</h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1, height: '60px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--ui-border-subtle)', borderRadius: '8px' }}></div>
              <div style={{ flex: 1, height: '60px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--ui-border-subtle)', borderRadius: '8px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">3. TUI (Terminal User Interface)</div>
        <p className="section-desc">Focus on ASCII/Unicode rendering and keyboard-only efficiency. Designed for CLI tools and server-side monitors.</p>
        <div className="rule-box">
          <p><strong>No gradients, no shadows, no border-radius.</strong> TUI only has: Unicode box-drawing chars, ANSI colors (16 base + 256 + truecolor), bold/italic/underline/dim/reverse. Work within these constraints.</p>
        </div>
        <div className="rule-box">
          <p><strong>Physics becomes keyframe.</strong> Spring curves don't exist in TUI. Animate with character-by-character reveals, timed redraw loops (60fps in ratatui), and progress bars that fill smoothly. That's your motion system.</p>
        </div>
        <div className="rule-box">
          <p><strong>The color map is fixed.</strong> Use ANSI named colors for semantic meaning, not truecolor hex. This ensures the design works in 16-color terminals. Truecolor is additive enhancement only.</p>
        </div>
        <div className="warn-box">
          <p><strong>TUI feasibility gate:</strong> If a component requires overlapping elements, transparency, or arbitrary positioning — it doesn't translate to TUI. Implement it as a modal panel or skip it entirely. Don't overengineer.</p>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Color mapping — GUI → TUI</div>
        <div className="canvas col" style={{ gap: '6px' }}>
          <div style={{ display: 'flex', gap: '16px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ width: '180px', color: 'var(--ui-text-disabled)' }}>--ui-accent-primary</span>
            <span style={{ color: 'var(--ui-accent-primary-light)' }}>→ Blue (ANSI) / #4285f4 truecolor</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ width: '180px', color: 'var(--ui-text-disabled)' }}>--ui-accent-secondary</span>
            <span style={{ color: 'var(--ui-accent-secondary)' }}>→ Magenta (ANSI) / #c5a9f5 truecolor</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ width: '180px', color: 'var(--ui-text-disabled)' }}>--ui-success</span>
            <span style={{ color: 'var(--ui-success-light)' }}>→ Green (ANSI) / #34a853 truecolor</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ width: '180px', color: 'var(--ui-text-disabled)' }}>--ui-warning</span>
            <span style={{ color: 'var(--ui-warning)' }}>→ Yellow (ANSI) / #fbbf24 truecolor</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ width: '180px', color: 'var(--ui-text-disabled)' }}>--ui-danger</span>
            <span style={{ color: 'var(--ui-danger)' }}>→ Red (ANSI) / #f28b82 truecolor</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ width: '180px', color: 'var(--ui-text-disabled)' }}>--ui-text-secondary</span>
            <span style={{ color: 'var(--ui-text-tertiary)' }}>→ White dim (ANSI)</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)' }}>
            <span style={{ width: '180px', color: 'var(--ui-text-disabled)' }}>--ui-text-tertiary</span>
            <span style={{ color: 'var(--ui-text-disabled)' }}>→ Black bright / Dark gray</span>
          </div>
        </div>
      </div>

      <div className="subsection" id="tui-components">
        <div className="subsection-title">TUI — Command Bar → Status Bar</div>
        <TUIWindow>
          <TUIStatusBar>
            <TUIStatusSeg>gemini-2.5-pro</TUIStatusSeg>
            <TUIStatusSeg dim>│</TUIStatusSeg>
            <TUIStatusSeg variant="success">oauth</TUIStatusSeg>
            <TUIStatusSeg dim>│</TUIStatusSeg>
            <TUIStatusSeg>ducer-cli</TUIStatusSeg>
            <TUIStatusSeg dim>│</TUIStatusSeg>
            <TUIStatusSeg variant="primary">1M · 8%</TUIStatusSeg>
            <TUIStatusSeg dim>│</TUIStatusSeg>
            <TUIStatusSeg variant="warning">3cp</TUIStatusSeg>
            <TUIStatusSeg dim>│</TUIStatusSeg>
            <TUIStatusSeg variant="success">2/3 mcp</TUIStatusSeg>
            <div style={{ flex: 1 }} />
            <TUIStatusSeg dim>v0.40.1</TUIStatusSeg>
          </TUIStatusBar>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tui-dim)' }}>
            ( terminal content area )
          </div>
        </TUIWindow>
        <div className="canvas-label">Status bar at top (inverted) · segments separated by bars · fits 80-col terminal</div>

        <div className="subsection-title mt-4">TUI — Floating Dock → Side Panel</div>
        <TUIWindow>
          <div style={{ display: 'flex', gap: '12px', minHeight: '120px' }}>
            <TUIPanel title="Nav">
              <TUIRow selected><TUIText variant="primary">→</TUIText> Sessions</TUIRow>
              <TUIRow><TUIText variant="dim">·</TUIText> MCP</TUIRow>
              <TUIRow><TUIText variant="dim">·</TUIText> Workspace</TUIRow>
              <TUIDivider />
              <TUIRow><TUIText variant="dim">·</TUIText> Auth</TUIRow>
              <TUIRow><TUIText variant="dim">·</TUIText> Config</TUIRow>
            </TUIPanel>
            <div style={{ flex: 1, paddingTop: '12px', color: 'var(--tui-dim)' }}>
              &gt; Select an item to view details
            </div>
          </div>
        </TUIWindow>
        <div className="canvas-label">Side panel with Unicode borders · active item highlighted · width: ~16 cols</div>

        <div className="subsection-title mt-4">TUI — Drawers → Modal Panels</div>
        <TUIWindow>
          <div style={{ padding: '20px' }}>
            <TUIPanel title=" Sessions ">
              <TUIRow active>
                <TUIText variant="success">●</TUIText> Refactor PipelineOrchestrator
                <div style={{ flex: 1 }} />
                <TUIText variant="dim">12m · 24msg</TUIText>
              </TUIRow>
              <TUIRow>
                <TUIText variant="dim">○</TUIText> Fix UVR integration crash
                <div style={{ flex: 1 }} />
                <TUIText variant="dim">yday · 18msg</TUIText>
              </TUIRow>
              <TUIRow>
                <TUIText variant="dim">○</TUIText> REAPER Lua template audit
                <div style={{ flex: 1 }} />
                <TUIText variant="dim">Sun · 9msg</TUIText>
              </TUIRow>
              <TUIDivider />
              <div style={{ fontSize: '10px', display: 'flex', gap: '12px', color: 'var(--tui-dim)', padding: '0 4px' }}>
                <span>[↑↓] navigate</span>
                <span>[Enter] open</span>
                <span>[d] delete</span>
                <span>[q] close</span>
              </div>
            </TUIPanel>
          </div>
        </TUIWindow>
        <div className="canvas-label">Centered modal with border · action shortcuts in footer · active row selection</div>

        <div className="subsection-title mt-4">TUI — Command & Form Interface</div>
        <TUIWindow>
          <div style={{ padding: '8px' }}>
            <div className="tui-dim" style={{ marginBottom: '4px' }}>──────────────────────────────────────────────────────────────────</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <TUIText variant="dim" className="tui-bold">SYSTEM:</TUIText>
              <span className="tui-italic">User record loaded successfully.</span>
            </div>
            <div className="tui-dim" style={{ margin: '4px 0' }}>──────────────────────────────────────────────────────────────────</div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <TUIText variant="primary" className="tui-bold">✦ EDITOR:</TUIText>
              <span className="tui-bold">Update user permissions.</span>
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <TUIRow>
                <TUIText variant="warning" className="tui-bold">[FIELD]</TUIText> 
                <span className="tui-bold">Role</span>
                <TUIText variant="dim" className="tui-italic">Editor -&gt; Admin</TUIText>
                <TUIText variant="success" className="tui-bold">→ VALID</TUIText>
              </TUIRow>
              <div style={{ margin: '6px 0' }} className="tui-dim">
                Granting <TUIText variant="primary" className="tui-bold tui-italic">sudo</TUIText> access to user. <span className="tui-bold">Requires confirmation.</span>
              </div>
              <TUIRow>
                <TUIText variant="warning" className="tui-bold">[ACTION]</TUIText> 
                <span className="tui-bold">commit_changes</span>
                <TUIText variant="dim" className="tui-italic">user_id: 8492</TUIText>
                <TUIText variant="warning" className="tui-bold">→ PENDING</TUIText>
              </TUIRow>
            </div>
            <div className="tui-dim" style={{ margin: '12px 0 6px' }}>──────────────────────────────────────────────────────────────────</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <TUIText variant="primary" className="tui-bold">❯</TUIText>
              <span className="tui-bold">Confirm (Y/n)...</span>
              <span className="tui-cursor" style={{ width: '8px', height: '16px', background: 'var(--tui-primary)', display: 'inline-block' }}></span>
            </div>
          </div>
        </TUIWindow>
        <div className="canvas-label">Interactive command flow · Colored prefixes for system events · Field validation with status colors</div>
      </div>
    </section>
  );
};
