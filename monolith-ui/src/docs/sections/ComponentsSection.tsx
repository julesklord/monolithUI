import React from 'react';
import { 
  IconFolder, IconGitBranch, IconCpu, IconTerminal2, 
  IconLayoutSidebar, IconSearch, IconFiles, IconCode, 
  IconSettings, 
  IconHistory, 
  IconBug, 
  IconSparkles, IconDownload, IconTrash, 
  IconKey, IconAlertCircle,
  IconChevronRight
} from '@tabler/icons-react';
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
      <div className="section-eyebrow">12</div>
      <h2 className="section-title"><em>Components</em> Library</h2>
      <p className="section-desc">Every component references only semantic tokens. Swap the brand layer and all components rebrand automatically.</p>

      {/* — COMMAND BAR — */}
      <div className="subsection" id="command-bar">
        <div className="subsection-title">Command Bar · Multi-Platform</div>
        <div className="canvas col" style={{ gap: '20px' }}>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--ui-text-disabled)', marginBottom: '6px', fontFamily: 'var(--ui-font-mono)' }}>macOS (Traffic Lights)</div>
            <CommandBar platform="macos" title="monolith-ui">
              <CommandBarSegment variant="primary">
                <svg width="9" height="9" viewBox="0 0 28 28" fill="none"><path d="M14 3L16.2 10.8L24 14L16.2 17.2L14 25L11.8 17.2L4 14L11.8 10.8Z" fill="currentColor"/></svg>
                gemini-2.0-flash
              </CommandBarSegment>
              <CommandBarDivider />
              <CommandBarSegment variant="success">
                <StatusDot on />
                connected
              </CommandBarSegment>
              <CommandBarSpacer />
              <CommandBarSegment>v0.5.2</CommandBarSegment>
            </CommandBar>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--ui-text-disabled)', marginBottom: '6px', fontFamily: 'var(--ui-font-mono)' }}>Windows (Native Controls)</div>
            <CommandBar platform="windows" title="monolith.dev Design">
              <CommandBarSegment>
                <IconFolder size={14} />
                src/components
              </CommandBarSegment>
              <CommandBarDivider />
              <CommandBarSegment variant="warning">
                <IconGitBranch size={14} />
                feature/dock-system
              </CommandBarSegment>
              <CommandBarSpacer />
              <CommandBarSegment variant="secondary">
                <IconCpu size={14} />
                1.2M tokens
              </CommandBarSegment>
            </CommandBar>
          </div>
        </div>
      </div>

      {/* — DOCK & DRAWERS GRID — */}
      <div className="grid-2">
        <div className="subsection" id="dock">
          <div className="subsection-title">Dock System</div>
          <div className="canvas center" style={{ minHeight: '340px', gap: '20px', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div className="dock dock-left dock-anchored">
              <div className="dock-btn active"><IconLayoutSidebar size={18} /></div>
              <div className="dock-btn"><IconSearch size={18} /></div>
              <div className="dock-sep"></div>
              <div className="dock-btn"><IconFiles size={18} /></div>
            </div>
            <div className="dock dock-bottom dock-floating" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="dock-btn"><IconTerminal2 size={18} /></div>
              <div className="dock-btn active"><IconCode size={18} /></div>
              <div className="dock-sep"></div>
              <div className="dock-btn"><IconSettings size={18} /></div>
            </div>
            <div className="dock-panel dock-panel-anchored-right" style={{ width: '160px', height: '100%', position: 'absolute', right: '0' }}>
                <div className="dock-panel-header"><span className="dock-panel-title">Props</span></div>
                <div className="dock-panel-content">
                  <div className="dock-panel-section"><div className="dock-panel-section-title">Visual</div></div>
                </div>
            </div>
          </div>
          <div className="canvas-label">Multi-position support (top/bottom/left/right) · Variants: floating or anchored.</div>
        </div>

        <div className="subsection" id="drawers">
          <div className="subsection-title">Drawers · Sessions</div>
          <div className="canvas" style={{ padding: '0' }}>
            <div className="drawer-preview" style={{ width: '100%' }}>
              <div className="drawer-header">
                <IconHistory size={15} style={{ color: 'var(--ui-text-tertiary)' }} />
                <div className="drawer-title">History</div>
              </div>
              <div className="drawer-body">
                <div className="sess-item active"><div className="sess-icon"><IconCode size={16} /></div><div className="sess-info"><div className="sess-title">Refactor: Layout</div></div></div>
                <div className="sess-item"><div className="sess-icon"><IconBug size={16} /></div><div className="sess-info"><div className="sess-title">Fix: Routing</div></div></div>
              </div>
            </div>
          </div>
          <div className="canvas-label">Spring physics for entry/exit · Handle-based interaction.</div>
        </div>
      </div>

      {/* — WEB-BASED EXTRAS — */}
      <div className="subsection" id="web-extras">
        <div className="subsection-title">Web-based UI Components</div>
        <div className="grid-2">
           <div>
              <div style={{ fontSize: '10px', color: 'var(--ui-text-disabled)', marginBottom: '8px', fontFamily: 'var(--ui-font-mono)' }}>BLOG_CARD</div>
              <Card style={{ padding: '0', overflow: 'hidden' }}>
                 <div style={{ height: '120px', background: 'var(--ui-surface-3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconSparkles size={40} style={{ opacity: 0.2 }} />
                 </div>
                 <div style={{ padding: '16px' }}>
                    <div style={{ fontSize: '10px', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '4px' }}>ENGINEERING // MAY 16</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '8px' }}>Refactoring the Orbital Grid</div>
                    <div style={{ fontSize: '12px', color: 'var(--ui-text-tertiary)', lineHeight: '1.6' }}>How we migrated a boxy grid to a gravity-based system.</div>
                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, color: 'var(--ui-text-primary)' }}>READ_MORE <IconChevronRight size={14}/></div>
                 </div>
              </Card>
           </div>
           <div>
              <div style={{ fontSize: '10px', color: 'var(--ui-text-disabled)', marginBottom: '8px', fontFamily: 'var(--ui-font-mono)' }}>HERO_SECTION_COMPONENT</div>
              <div style={{ padding: '32px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-subtle)', borderRadius: 'var(--ui-r-md)', textAlign: 'center' }}>
                 <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '12px' }}>Build the <span style={{ color: 'var(--brand-primary)' }}>Future</span></h3>
                 <p style={{ fontSize: '13px', color: 'var(--ui-text-tertiary)', marginBottom: '24px' }}>The industrial-modern design system for professional workstations.</p>
                 <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <Button variant="primary">Get Started</Button>
                    <Button variant="ghost">Documentation</Button>
                 </div>
              </div>
           </div>
        </div>
        <div className="canvas-label">Web-specific components use broader spacing and typography ramps for public-facing content.</div>
      </div>

      {/* — BUTTONS & INPUTS GRID — */}
      <div className="grid-2">
        <div className="subsection" id="buttons">
          <div className="subsection-title">Buttons</div>
          <div className="canvas col" style={{ gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="ghost" leftIcon={<IconDownload size={14} />}>Download</Button>
              <Button variant="danger" iconOnly><IconTrash size={16} /></Button>
            </div>
          </div>
          <div className="canvas-label">Transitions: fast (110ms) · Active scale down (0.97).</div>
        </div>

        <div className="subsection" id="inputs">
          <div className="subsection-title">Inputs</div>
          <div className="canvas col" style={{ gap: '12px' }}>
            <Input placeholder="Search..." leftIcon={<IconSearch size={14} />} />
            <Input placeholder="Password" type="password" leftIcon={<IconKey size={14} />} />
            <Input placeholder="Invalid field" leftIcon={<IconAlertCircle size={14} />} status="invalid" />
          </div>
          <div className="canvas-label">Focus rings use primary-glow · Semantic error states.</div>
        </div>
      </div>

      {/* — PILLS, TAGS & FEEDBACK — */}
      <div className="grid-2">
        <div className="subsection" id="pills">
          <div className="subsection-title">Pills & Tags</div>
          <div className="canvas col" style={{ gap: '12px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <Pill variant="primary">gemini-2.5</Pill>
              <Pill variant="success"><StatusDot on /> online</Pill>
              <Pill variant="warning">checkpoint</Pill>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <Tag variant="primary">trusted</Tag>
              <Tag variant="secondary">1M ctx</Tag>
              <Tag variant="success">resolved</Tag>
            </div>
          </div>
          <div className="canvas-label">Semantic color ramps · Monospace meta labels.</div>
        </div>

        <div className="subsection" id="feedback">
          <div className="subsection-title">Feedback & Progress</div>
          <div className="canvas col" style={{ gap: '20px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
               <div className="spinner"></div>
               <div className="typing"><div className="td"></div><div className="td"></div><div className="td"></div></div>
               <div className="toggle on"></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '68%' }}></div></div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '35%', background: 'var(--ui-warning)' }}></div></div>
            </div>
          </div>
          <div className="canvas-label">Indeterminate spinners · Linear progress tracking.</div>
        </div>
      </div>

      {/* — CARDS — */}
      <div className="subsection" id="cards">
        <div className="subsection-title">Surface Cards</div>
        <div className="grid-2">
          <Card>
            <div style={{ fontSize: '11px', color: 'var(--ui-text-disabled)', marginBottom: '8px' }}>SURFACE_4</div>
            <div style={{ fontSize: '13px', color: 'var(--ui-text-secondary)' }}>Default container for main canvas items.</div>
          </Card>
          <Card variant="elevated">
            <div style={{ fontSize: '11px', color: 'var(--ui-text-disabled)', marginBottom: '8px' }}>SURFACE_5</div>
            <div style={{ fontSize: '13px', color: 'var(--ui-text-secondary)' }}>Elevated surface for hover states.</div>
          </Card>
        </div>
      </div>
      {/* — TUI PRIMITIVES — */}
      <div className="subsection" id="tui-primitives">
        <div className="subsection-title">TUI Primitives</div>
        <div className="grid-2">
          <Card style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '11px' }}>
            <div style={{ color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '12px' }}>DENSITY_GRADIENTS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
               <div>█ FULL_BLOCK</div>
               <div>▓ DARK_SHADE</div>
               <div>▒ MEDIUM_SHADE</div>
               <div>░ LIGHT_SHADE</div>
            </div>
          </Card>
          <Card style={{ fontFamily: 'var(--ui-font-mono)', fontSize: '11px' }}>
            <div style={{ color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '12px' }}>CONNECTORS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
               <div>┣━ BRANCH_MID</div>
               <div>┗━ BRANCH_END</div>
               <div>┃&nbsp;&nbsp;VERTICAL_BAR</div>
               <div>─&nbsp;&nbsp;HORIZONTAL_BAR</div>
            </div>
          </Card>
        </div>
      </div>

    </section>
  );
};
