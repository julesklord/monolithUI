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
      <div className="section-eyebrow">07</div>
      <h2 className="section-title">TUI <em>Translation</em></h2>
      <p className="section-desc">Every GUI component has a TUI equivalent that can be implemented with <span className="icode">ratatui</span> (Rust), <span className="icode">blessed</span> (Node), or <span className="icode">textual</span> (Python) without overengineering. The principle: translate information architecture, not visual style.</p>

      <div className="subsection">
        <div className="subsection-title">TUI principles</div>
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

        <div className="subsection-title mt-4">TUI — Chat Interface</div>
        <TUIWindow>
          <div style={{ padding: '4px' }}>
            <div style={{ color: 'var(--tui-dim)', marginBottom: '4px' }}>──────────────────────────────────────────────────</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <TUIText variant="dim">You:</TUIText>
              <span>--yolo only for trusted pipelines</span>
            </div>
            <div style={{ color: 'var(--tui-dim)', margin: '4px 0' }}>──────────────────────────────────────────────────</div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
              <TUIText variant="primary">✦ TropicalUI:</TUIText>
              <span>Reading the orchestrator first.</span>
            </div>
            <div style={{ paddingLeft: '16px' }}>
              <TUIRow>
                <TUIText variant="warning">[tool]</TUIText> <span>read_file</span>
                <TUIText variant="dim">pipeline-orchestrator.ts</TUIText>
                <TUIText variant="success">→ ok</TUIText>
              </TUIRow>
              <div style={{ margin: '4px 0' }}>No <TUIText variant="primary">trusted</TUIText> field in PipelineConfig. Adding it and patching executeStep().</div>
              <TUIRow>
                <TUIText variant="warning">[tool]</TUIText> <span>write_file</span>
                <TUIText variant="dim">types/pipeline.ts</TUIText>
                <TUIText variant="warning">→ running</TUIText>
              </TUIRow>
            </div>
            <div style={{ color: 'var(--tui-dim)', margin: '8px 0 4px' }}>──────────────────────────────────────────────────</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <TUIText variant="primary">❯</TUIText>
              <span style={{ opacity: 0.7 }}>Type a prompt...</span>
              <span className="tui-cursor" style={{ width: '8px', height: '14px', background: 'var(--tui-primary)', display: 'inline-block' }}></span>
            </div>
          </div>
        </TUIWindow>
        <div className="canvas-label">Chat flow with separators · colored prefixes for agents · tool blocks with status colors</div>
      </div>
    </section>
  );
};
