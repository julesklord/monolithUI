import React from 'react';
import { 
  CommandBar, 
  CommandBarSegment, 
  CommandBarDivider, 
  CommandBarSpacer,
  Button,
  Pill,
  Tag,
  StatusDot,
  Input,
  Card
} from '../../components';

export const ComponentsSection: React.FC = () => {
  return (
    <section className="doc-section" id="components">
      <div className="section-eyebrow">06</div>
      <h2 className="section-title"><em>Components</em></h2>
      <p className="section-desc">Every component references only semantic tokens. Swap the brand layer and all components rebrand automatically.</p>

      {/* — COMMAND BAR — */}
      <div className="subsection" id="command-bar">
        <div className="subsection-title">Command Bar</div>
        <div className="canvas col">
          <CommandBar>
            <CommandBarSegment variant="primary">
              <svg width="9" height="9" viewBox="0 0 28 28" fill="none"><path className="anim-star" d="M14 3L16.2 10.8L24 14L16.2 17.2L14 25L11.8 17.2L4 14L11.8 10.8Z" fill="currentColor"/></svg>
              gemini-2.5-pro
            </CommandBarSegment>
            <CommandBarDivider />
            <CommandBarSegment variant="success">
              <StatusDot on />
              oauth-personal
            </CommandBarSegment>
            <CommandBarDivider />
            <CommandBarSegment>
              <i className="ti ti-folder" style={{ fontSize: '10px' }}></i>
              ducer-cli
            </CommandBarSegment>
            <CommandBarDivider />
            <CommandBarSegment variant="secondary">
              <i className="ti ti-cpu" style={{ fontSize: '10px' }}></i>
              1M · 8%
            </CommandBarSegment>
            <CommandBarDivider />
            <CommandBarSegment variant="warning">
              <i className="ti ti-git-commit" style={{ fontSize: '10px' }}></i>
              3 checkpoints
            </CommandBarSegment>
            <CommandBarDivider />
            <CommandBarSegment>
              <i className="ti ti-plug" style={{ fontSize: '10px' }}></i>
              2/3 mcp
            </CommandBarSegment>
            <CommandBarSpacer />
            <CommandBarSegment style={{ fontSize: '9.5px' }}>
              v0.40.1
            </CommandBarSegment>
          </CommandBar>
          <div className="canvas-label">height: 38px · DM Mono 10.5px · every segment clickable→opens its drawer · leftmost = highest priority</div>
        </div>
        <div className="rule-box mt-2">
          <p><strong>Segment priority order (left to right):</strong> model→auth→workspace→context/tokens→warnings→services→version. When space is constrained, remove from right first.</p>
        </div>
      </div>

      {/* — DOCK — */}
      <div className="subsection" id="dock">
        <div className="subsection-title">Floating Dock</div>
        <div className="canvas center" style={{ minHeight: '200px', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', marginBottom: '10px', textAlign: 'center' }}>default (right edge)</div>
            <div className="dock">
              <div className="dock-btn active"><i className="ti ti-history"></i></div>
              <div className="dock-btn" style={{ position: 'relative' }}><i className="ti ti-plug"></i><div className="dock-badge"></div></div>
              <div className="dock-btn"><i className="ti ti-folders"></i></div>
              <div className="dock-sep"></div>
              <div className="dock-btn"><i className="ti ti-puzzle"></i></div>
              <div className="dock-sep"></div>
              <div className="dock-btn"><i className="ti ti-key"></i></div>
              <div className="dock-btn"><i className="ti ti-settings"></i></div>
            </div>
          </div>
          <div style={{ fontSize: 'var(--ui-text-xs)', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)', maxWidth: '200px', lineHeight: '1.9' }}>
            width: 46px<br/>
            border-radius: var(--ui-r-2xl)<br/>
            draggable via mousedown<br/>
            active→accent bar right side<br/>
            badge→service status dot<br/>
            hover→scale(1.08) spring<br/>
            position: absolute z-40
          </div>
        </div>
      </div>

      {/* — DRAWERS — */}
      <div className="subsection" id="drawers">
        <div className="subsection-title">Drawers · Sessions</div>
        <div className="canvas" style={{ padding: '0' }}>
          <div className="drawer-preview" style={{ width: '100%' }}>
            <div className="drawer-handle"></div>
            <div className="drawer-header">
              <i className="ti ti-history" style={{ fontSize: '15px', color: 'var(--ui-text-tertiary)' }}></i>
              <div className="drawer-title">Sessions</div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
                <button className="btn ghost sm"><i className="ti ti-search" style={{ fontSize: '11px' }}></i>Search</button>
                <div className="drawer-close"><i className="ti ti-x"></i></div>
              </div>
            </div>
            <div className="drawer-body">
              <div className="sess-item active"><div className="sess-icon"><i className="ti ti-code"></i></div><div className="sess-info"><div className="sess-title">Refactor PipelineOrchestrator</div><div className="sess-meta">12 min ago · 24 msgs</div></div><div className="tag primary" style={{ alignSelf: 'flex-start', marginTop: '4px' }}>ducer-cli</div></div>
              <div className="sess-item"><div className="sess-icon"><i className="ti ti-bug"></i></div><div className="sess-info"><div className="sess-title">Fix UVR integration crash</div><div className="sess-meta">yesterday · 18 msgs</div></div></div>
              <div className="sess-item"><div className="sess-icon"><i className="ti ti-music"></i></div><div className="sess-info"><div className="sess-title">REAPER Lua template audit</div><div className="sess-meta">Sunday · 9 msgs</div></div></div>
            </div>
          </div>
        </div>
        <div className="canvas-label">Enters from bottom with spring(0.34, 1.56, 0.64, 1) · backdrop rgba(0,0,0,0.45) · handle for drag-to-dismiss</div>

        <div className="subsection-title mt-4">Drawers · MCP Servers</div>
        <div className="canvas" style={{ padding: '0' }}>
          <div className="drawer-preview" style={{ width: '100%' }}>
            <div className="drawer-handle"></div>
            <div className="drawer-header">
              <i className="ti ti-plug" style={{ fontSize: '15px', color: 'var(--ui-text-tertiary)' }}></i>
              <div className="drawer-title">MCP Servers</div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
                <button className="btn ghost sm"><i className="ti ti-plus" style={{ fontSize: '11px' }}></i>Add</button>
                <div className="drawer-close"><i className="ti ti-x"></i></div>
              </div>
            </div>
            <div className="drawer-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div className="mcp-card on"><div className="mcp-card-top"><div className="sdot on"></div><div className="mcp-name">context7</div></div><div className="mcp-type">stdio · npx</div><div className="mcp-tools">8 tools active</div></div>
                <div className="mcp-card on"><div className="mcp-card-top"><div className="sdot on"></div><div className="mcp-name">github</div></div><div className="mcp-type">stdio · npx</div><div className="mcp-tools">12 tools active</div></div>
                <div className="mcp-card"><div className="mcp-card-top"><div className="sdot off"></div><div className="mcp-name">google-workspace</div></div><div className="mcp-type">sse · url</div><div className="mcp-tools" style={{ color: 'var(--ui-text-disabled)' }}>disconnected</div></div>
                <div className="mcp-card" style={{ borderStyle: 'dashed', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '.45' }}><span style={{ fontSize: '11px', color: 'var(--ui-text-tertiary)', display: 'flex', alignItems: 'center', gap: '5px' }}><i className="ti ti-plus" style={{ fontSize: '13px' }}></i>add server</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="subsection-title mt-4">Drawers · Checkpoints</div>
        <div className="canvas" style={{ padding: '0' }}>
          <div className="drawer-preview" style={{ width: '100%' }}>
            <div className="drawer-handle"></div>
            <div className="drawer-header">
              <i className="ti ti-git-commit" style={{ fontSize: '15px', color: 'rgba(251,191,36,.6)' }}></i>
              <div className="drawer-title">Checkpoints</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
                <div className="toggle on" style={{ cursor: 'pointer' }}></div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-tertiary)' }}>enabled</span>
                <div className="drawer-close"><i className="ti ti-x"></i></div>
              </div>
            </div>
            <div className="drawer-body">
              <div className="cp-item"><div className="cp-line"><div className="cp-dot"></div><div className="cp-vline"></div></div><div className="cp-content"><div className="cp-title">pipeline-orchestrator.ts · write_file</div><div className="cp-meta">3 min ago</div><div className="cp-action"><i className="ti ti-corner-up-left" style={{ fontSize: '10px' }}></i>restore</div></div></div>
              <div className="cp-item"><div className="cp-line"><div className="cp-dot ok"></div><div className="cp-vline"></div></div><div className="cp-content"><div className="cp-title">types/pipeline.ts · write_file</div><div className="cp-meta">9 min ago</div><div className="cp-action"><i className="ti ti-corner-up-left" style={{ fontSize: '10px' }}></i>restore</div></div></div>
              <div className="cp-item"><div className="cp-line"><div className="cp-dot ok"></div></div><div className="cp-content"><div className="cp-title">src/index.ts · replace</div><div className="cp-meta">22 min ago</div><div className="cp-action"><i className="ti ti-corner-up-left" style={{ fontSize: '10px' }}></i>restore</div></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* — CHAT — */}
      <div className="subsection" id="chat">
        <div className="subsection-title">Chat Interface</div>
        <div className="canvas col" style={{ gap: '14px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <div className="avatar sm ai">â¨</div>
            <div className="bubble-ai">
              I'll read the orchestrator first.
              <div className="tool-card">
                <div className="tool-card-hd"><i className="ti ti-file-search" style={{ fontSize: '11px' }}></i>read_file<div className="tool-ok"><i className="ti ti-check" style={{ fontSize: '9px' }}></i>ok</div></div>
                <div className="tool-card-body">packages/core/src/pipeline-orchestrator.ts</div>
              </div>
              <div style={{ marginTop: '8px' }}>No <span className="icode">trusted</span> field in <span className="icode">PipelineConfig</span>. I'll add it and patch <span className="icode">executeStep()</span>.</div>
              <div className="tool-card" style={{ marginTop: '8px' }}>
                <div className="tool-card-hd"><i className="ti ti-pencil" style={{ fontSize: '11px' }}></i>write_file<div className="tool-run">executing...</div></div>
                <div className="tool-card-body">types/pipeline.ts</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
            <div className="avatar sm user"><i className="ti ti-user" style={{ fontSize: '12px' }}></i></div>
            <div className="bubble-user">--yolo only for trusted pipelines, rest keeps confirmation</div>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <div className="avatar sm ai">â¨</div>
            <div className="bubble-ai"><div className="typing"><div className="td"></div><div className="td"></div><div className="td"></div></div></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="gd-input-wrap" style={{ flex: '1' }}><input placeholder="Type a prompt or use / for commands..." style={{ fontSize: '13px' }}/><div className="input-hint"><span>/ cmd</span><span>@ mcp</span></div></div>
            <button className="send-btn"><i className="ti ti-arrow-up" style={{ fontSize: '13px' }}></i></button>
          </div>
        </div>
        <div className="canvas-label">AI bubble: border-radius 3px 10px 10px 10px · User: 10px 3px 10px 10px · Tool card: left border accent + amber color family</div>
      </div>

      {/* — PILLS & TAGS — */}
      <div className="subsection" id="pills">
        <div className="subsection-title">Pills & Tags</div>
        <div className="canvas row" style={{ gap: '8px', alignItems: 'center' }}>
          <Pill variant="primary"><i className="ti ti-sparkles" style={{ fontSize: '10px' }}></i>gemini-2.5-pro</Pill>
          <Pill variant="secondary"><i className="ti ti-cpu" style={{ fontSize: '10px' }}></i>1M context</Pill>
          <Pill variant="success"><StatusDot on />connected</Pill>
          <Pill variant="warning"><i className="ti ti-git-commit" style={{ fontSize: '10px' }}></i>checkpoint</Pill>
          <Pill variant="danger"><StatusDot variant="danger" />sandbox error</Pill>
          <Pill variant="neutral"><i className="ti ti-folder" style={{ fontSize: '10px' }}></i>workspace</Pill>
        </div>
        <div className="canvas row mt-2" style={{ gap: '6px', alignItems: 'center' }}>
          <Tag variant="primary">trusted</Tag>
          <Tag variant="secondary">1M ctx</Tag>
          <Tag variant="success">resolved</Tag>
          <Tag variant="warning">stdio</Tag>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><StatusDot on /><span className="text-muted">online</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><StatusDot variant="warning" /><span className="text-muted">degraded</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><StatusDot variant="danger" /><span className="text-muted">error</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><StatusDot /><span className="text-muted">offline</span></div>
        </div>
      </div>

      {/* — BUTTONS — */}
      <div className="subsection" id="buttons">
        <div className="subsection-title">Buttons</div>
        <div className="canvas row" style={{ gap: '8px', alignItems: 'center' }}>
          <Button variant="primary" leftIcon={<i className="ti ti-sparkles" style={{ fontSize: '12px' }}></i>}>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost" leftIcon={<i className="ti ti-download" style={{ fontSize: '12px' }}></i>}>Ghost</Button>
          <Button variant="danger" leftIcon={<i className="ti ti-trash" style={{ fontSize: '12px' }}></i>}>Danger</Button>
        </div>
        <div className="canvas row mt-2" style={{ gap: '8px', alignItems: 'center' }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="ghost" size="sm">Small Ghost</Button>
          <Button variant="primary" size="lg" leftIcon={<i className="ti ti-rocket" style={{ fontSize: '14px' }}></i>}>Large</Button>
          <Button variant="ghost" iconOnly><i className="ti ti-dots-vertical"></i></Button>
          <Button variant="ghost" size="sm" iconOnly><i className="ti ti-x"></i></Button>
          <button className="send-btn"><i className="ti ti-arrow-up" style={{ fontSize: '13px' }}></i></button>
        </div>
        <div className="canvas-label">All buttons: transition all var(--ui-dur-fast) · active: scale(0.97) · send-btn: spring scale hover</div>
      </div>

      {/* — INPUTS — */}
      <div className="subsection" id="inputs">
        <div className="subsection-title">Inputs</div>
        <div className="canvas col" style={{ gap: '10px' }}>
          <Input placeholder="Search sessions..." leftIcon={<i className="ti ti-search" style={{ fontSize: '14px', color: 'var(--ui-text-tertiary)' }}></i>} />
          <Input 
            placeholder="API key" 
            type="password" 
            leftIcon={<i className="ti ti-key" style={{ fontSize: '14px', color: 'var(--ui-text-tertiary)' }}></i>}
            rightIcon={<Button variant="ghost" size="sm" iconOnly><i className="ti ti-eye"></i></Button>}
          />
          <Input 
            placeholder="Type a prompt or use / for commands..." 
            defaultValue="refactor the pipeline orchestrator"
            leftIcon={<i className="ti ti-message-2" style={{ fontSize: '14px', color: 'var(--ui-accent-primary-light)' }}></i>}
            style={{ borderColor: 'var(--ui-accent-primary-border)', boxShadow: '0 0 0 3px var(--ui-accent-primary-bg)' }}
            hint={<div className="input-hint"><span>/ cmd</span><span>@ mcp</span></div>}
          />
          <Input 
            placeholder="Invalid URL" 
            leftIcon={<i className="ti ti-alert-circle" style={{ fontSize: '14px', color: 'var(--ui-danger)' }}></i>}
            style={{ borderColor: 'var(--ui-danger-border)' }}
            status="invalid"
          />
        </div>
        <div className="canvas-label">States: default→hover (border-hover)→focus (border-primary + glow)→error (border-danger)</div>
      </div>

      {/* — CARDS — */}
      <div className="subsection" id="cards">
        <div className="subsection-title">Surface Cards</div>
        <div className="canvas grid2" style={{ gap: '10px' }}>
          <Card>
            <div style={{ fontSize: '12px', color: 'var(--ui-text-disabled)', fontFamily: 'var(--ui-font-mono)', marginBottom: '6px' }}>default</div>
            <div style={{ fontSize: 'var(--ui-text-base)', color: 'var(--ui-text-secondary)' }}>background: surface-4 · border: border-default</div>
          </Card>
          <Card variant="elevated">
            <div style={{ fontSize: '12px', color: 'var(--ui-text-disabled)', fontFamily: 'var(--ui-font-mono)', marginBottom: '6px' }}>elevated</div>
            <div style={{ fontSize: 'var(--ui-text-base)', color: 'var(--ui-text-secondary)' }}>background: surface-5 · shadow-sm</div>
          </Card>
          <Card style={{ borderColor: 'var(--ui-accent-primary-border)', background: 'var(--ui-accent-primary-bg)' }}>
            <div style={{ fontSize: '12px', color: 'var(--ui-accent-primary-light)', fontFamily: 'var(--ui-font-mono)', marginBottom: '6px' }}>active / selected</div>
            <div style={{ fontSize: 'var(--ui-text-base)', color: 'var(--ui-text-secondary)' }}>border-primary · bg-primary-bg</div>
          </Card>
          <Card style={{ borderColor: 'var(--ui-success-border)', background: 'var(--ui-success-bg)' }}>
            <div style={{ fontSize: '12px', color: 'var(--ui-success-light)', fontFamily: 'var(--ui-font-mono)', marginBottom: '6px' }}>success state</div>
            <div style={{ fontSize: 'var(--ui-text-base)', color: 'var(--ui-text-secondary)' }}>border-success · bg-success</div>
          </Card>
        </div>
      </div>

      {/* — STATUS & FEEDBACK — */}
      <div className="subsection" id="feedback">
        <div className="subsection-title">Feedback · Loading & Progress</div>
        <div className="canvas row" style={{ gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div className="spinner"></div>
            <span className="text-muted">spinner</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div className="typing"><div className="td"></div><div className="td"></div><div className="td"></div></div>
            <span className="text-muted">typing</span>
          </div>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '68%' }}></div></div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '23%', background: 'var(--ui-warning)' }}></div></div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '100%', background: 'var(--ui-success)' }}></div></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="toggle on"></div>
            <div className="toggle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
