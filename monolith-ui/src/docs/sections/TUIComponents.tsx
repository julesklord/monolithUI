import React from 'react';

export const TUIComponents: React.FC = () => {
  return (
    <section className="doc-section" id="tui-system">
      <div className="section-eyebrow">07</div>
      <h2 className="section-title">Terminal UI <em>System</em></h2>
      <p className="section-desc">The official specification for high-density, industrial terminal interfaces. MonolithUI TUIs are built for technical excellence, using ASCII/Unicode primitives as the primary design language.</p>

      {/* SECTION 1: CORE PHILOSOPHY */}
      <div className="subsection">
        <div className="subsection-title">1. The Monolith Industrial Philosophy</div>
        <p className="section-desc">A MonolithUI terminal is not a "minimalist" console; it is a <strong>Command Station</strong>. It follows three core laws:</p>
        <div className="grid-2" style={{ marginTop: '20px' }}>
          <div className="rule-box">
             <div style={{ color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '8px' }}>I. DENSITY IS UTILITY</div>
             <p>A professional TUI should provide maximum information at a glance. We use every pixel of the 80-120 column grid to display telemetry, status, and navigation.</p>
          </div>
          <div className="rule-box">
             <div style={{ color: 'var(--ui-success)', fontWeight: 800, marginBottom: '8px' }}>II. CHARACTER DEPTH</div>
             <p>Depth is achieved through character gradients (░ ▒ ▓ █). These blocks simulate shadows and light without relying on transparency or complex GPU rendering.</p>
          </div>
        </div>
      </div>

      {/* SECTION 2: VISUAL PRIMITIVES */}
      <div className="subsection">
        <div className="subsection-title">2. Visual Primitives & Anatomy</div>
        <div className="grid-2">
           <div className="subsection-meta">
              <p className="section-desc">We use the <strong>Box Drawing Unicode Block</strong> (U+2500–U+257F) to build structure. These characters provide seamless connections for borders and tree views.</p>
              <div className="rule-box" style={{ background: 'var(--ui-surface-1)', fontFamily: 'var(--ui-font-mono)' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', fontSize: '14px' }}>
                    <span>┌ ─ ┐</span><span>├ ─ ┤</span><span>└ ─ ┘</span><span>│ ┃ ╽</span>
                 </div>
              </div>
           </div>
           <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', fontFamily: 'var(--ui-font-mono)', fontSize: '12px' }}>
              <div style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>STRUCTURE_EXAMPLE</div>
              <div style={{ color: 'var(--ui-text-tertiary)', marginTop: '8px' }}>
                 ┌──────────────────┐<br/>
                 │ <span style={{ color: 'var(--ui-success)' }}>●</span> ACTIVE_NODE&nbsp;&nbsp;&nbsp;&nbsp;│<br/>
                 ├──────────────────┤<br/>
                 │ ┣━ sub_process_A │<br/>
                 │ ┗━ sub_process_B │<br/>
                 └──────────────────┘
              </div>
           </div>
        </div>
      </div>

      {/* SECTION 3: COMPONENT LIBRARY */}
      <div className="subsection">
        <div className="subsection-title">3. TUI Component Specification</div>
        
        <div className="grid-2">
          {/* TUI_BRAND_HEADER */}
          <div className="subsection">
            <div className="subsection-title">TUI_BRAND_HEADER</div>
            <p className="section-desc">High-impact ASCII art for application identity.</p>
            <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', fontFamily: 'var(--ui-font-mono)', color: 'var(--brand-primary)', fontSize: '7px', lineHeight: '1.1' }}>
<pre style={{ margin: 0 }}>
{`       _.._
     .'    '.
    /   __   \\
 ,_|   /  \\   |_ ,
'-,|   \\__/   |,-'
   \\        /
    '.____.'
  M A N G O F E T C H`}
</pre>
            </div>
          </div>

          {/* TUI_DENSITY_BAR */}
          <div className="subsection">
            <div className="subsection-title">TUI_STATUS_BAR (DENSE)</div>
            <p className="section-desc">Information-heavy horizontal bar with semantic segments.</p>
            <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', display: 'flex', alignItems: 'center' }}>
               <div style={{ width: '100%', background: 'var(--brand-primary)', color: 'var(--ui-surface-0)', fontFamily: 'var(--ui-font-mono)', fontSize: '10px', padding: '4px 10px', display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                     <span>[ MODE: SUDO ]</span>
                     <span>UTC-5 // 2026</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px' }}>
                     <span>MEM: 1.2GB/16GB</span>
                     <span style={{ color: 'var(--ui-surface-0)', background: 'rgba(255,255,255,0.2)', padding: '0 4px' }}>0x8FAC</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid-2">
          {/* TUI_NAV_ORBIT */}
          <div className="subsection">
            <div className="subsection-title">TUI_NAV_ORBIT</div>
            <p className="section-desc">Vertical navigation using block indicators.</p>
            <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', fontFamily: 'var(--ui-font-mono)', fontSize: '12px' }}>
               <div style={{ borderLeft: '2px solid var(--brand-primary)', paddingLeft: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ opacity: 0.5 }}>01. OVERVIEW</div>
                  <div style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>❯ 02. TELEMETRY</div>
                  <div style={{ opacity: 0.5 }}>03. SETTINGS</div>
               </div>
            </div>
          </div>

          {/* TUI_SPARKLINE_ARRAY */}
          <div className="subsection">
            <div className="subsection-title">TUI_TELEMETRY_ARRAY</div>
            <p className="section-desc">Real-time data visualization using character height.</p>
            <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', fontFamily: 'var(--ui-font-mono)', fontSize: '14px' }}>
               <div style={{ color: 'var(--ui-text-tertiary)', fontSize: '10px', marginBottom: '8px' }}>CPU_LOAD_HISTORY [30s]</div>
               <div style={{ color: 'var(--ui-success)', letterSpacing: '4px' }}>
                  ▂ ▃ ▅ ▇ █ ▇ ▅ ▃ ▂   ▂ ▃ ▅ ▇ █
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '9px', opacity: 0.4 }}>
                  <span>30s ago</span><span>NOW</span>
               </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: INTERACTION */}
        <div className="subsection">
          <div className="subsection-title">4. Interaction & Commands</div>
          <div className="grid-2">
             <div className="subsection-meta">
                <p className="section-desc">Interactive prompts must follow the **Solar Context**. The active command line is the center of gravity, highlighted with the primary brand color.</p>
             </div>
             <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', fontFamily: 'var(--ui-font-mono)', fontSize: '12px' }}>
                <div style={{ color: 'var(--ui-text-tertiary)', marginBottom: '8px' }}># Waiting for input...</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                   <span style={{ color: 'var(--brand-primary)', marginRight: '10px' }}>❯❯</span>
                   <span style={{ color: 'var(--ui-text-primary)' }}>monolith deploy --env production</span>
                   <span style={{ marginLeft: '4px', width: '8px', height: '16px', background: 'var(--brand-primary)', display: 'inline-block' }}></span>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 5: TECHNICAL IMPLEMENTATION (RATATUI) */}
        <div className="subsection">
          <div className="subsection-title">5. Technical Implementation: Ratatui</div>
          <p className="section-desc">When implementing MonolithUI in Rust using **Ratatui**, we utilize a constraint-based layout engine. Below is the standard boilerplate for a Monolith Orbital view.</p>
          
          <div className="grid-2">
             <div className="subsection-meta">
                <div className="rule-box" style={{ background: 'var(--ui-surface-1)' }}>
                   <p><strong>The Rect Strategy:</strong> Divide the root area into horizontal and vertical chunks using <code>Layout::default()</code>. Apply the 1:4 ratio using percentages.</p>
                </div>
                <div className="code">
<span className="c">// Master-Detail Layout in Ratatui</span><br/>
<span className="k">let</span> chunks = <span className="v">Layout</span>::<span className="n">default</span>()<br/>
&nbsp;&nbsp;.<span className="n">direction</span>(<span className="v">Direction</span>::<span className="n">Horizontal</span>)<br/>
&nbsp;&nbsp;.<span className="n">constraints</span>([<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="v">Constraint</span>::<span className="n">Percentage</span>(<span className="s">25</span>), <span className="c">// Planetary Sidebar</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="v">Constraint</span>::<span className="n">Percentage</span>(<span className="s">75</span>), <span className="c">// The Solar Core</span><br/>
&nbsp;&nbsp;])<br/>
&nbsp;&nbsp;.<span className="n">split</span>(frame.<span className="n">size</span>());
                </div>
             </div>
             <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', fontFamily: 'var(--ui-font-mono)', fontSize: '12px' }}>
                <div style={{ color: 'var(--ui-text-tertiary)', marginBottom: '10px' }}>LAYOUT_RECURSION_TREE</div>
                <div style={{ color: 'var(--ui-success)' }}>
                   ROOT_AREA (100x40)<br/>
                   ┣━ HORIZONTAL_STACK [25%, 75%]<br/>
                   ┃&nbsp;&nbsp;┣━ SIDEBAR (Rect [ x: 0, y: 0, w: 25, h: 38 ])<br/>
                   ┃&nbsp;&nbsp;┗━ MAIN_CORE (Rect [ x: 25, y: 0, w: 75, h: 38 ])<br/>
                   ┗━ STATUS_BAR (Rect [ x: 0, y: 38, w: 100, h: 2 ])
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 6: STANDARD LAYOUT ARCHETYPES */}
        <div className="subsection">
          <div className="subsection-title">6. Standard Layout Archetypes</div>
          <p className="section-desc">To ensure coherence across all tropical.dev CLI tools, every application must follow one of these three architectural patterns.</p>
          
          <div className="grid-2">
            {/* ARCHETYPE A */}
            <div className="rule-box">
               <div style={{ color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '8px' }}>TYPE_A: THE COMMAND STATION</div>
               <p>Best for interactive apps (Chat, Editors). Provides persistent navigation and a large workspace.</p>
               <div className="code" style={{ marginTop: '10px', fontSize: '9px' }}>
                  <span className="c">// 25% Sidebar / 75% Main / 2-line Status</span><br/>
                  <span className="v">Constraint</span>::<span className="n">Percentage</span>(<span className="s">25</span>),<br/>
                  <span className="v">Constraint</span>::<span className="n">Min</span>(<span className="s">50</span>)
               </div>
               <pre style={{ padding: '20px', background: 'var(--ui-surface-0)', fontFamily: '"Cascadia Code", "Fira Code", "Courier New", monospace', fontSize: '13px', marginTop: '10px', whiteSpace: 'pre', lineHeight: '1.1', border: '1px solid var(--ui-border-subtle)', color: 'var(--ui-text-secondary)', margin: 0, overflowX: 'auto' }}>
{`┌────────────────┬────────────────────────────────┐
│      SIDE      │              MAIN              │
│                │                                │
│                │                                │
├────────────────┴────────────────────────────────┤
│ STATUS_BAR (2-LINE TELEMETRY)                   │
└─────────────────────────────────────────────────┘`}
               </pre>
            </div>

            {/* ARCHETYPE B */}
            <div className="rule-box" style={{ borderLeftColor: 'var(--ui-success)' }}>
               <div style={{ color: 'var(--ui-success)', fontWeight: 800, marginBottom: '8px' }}>TYPE_B: TELEMETRY DASHBOARD</div>
               <p>Best for monitoring tools. Prioritizes data density and multiple simultaneous metrics.</p>
               <div className="code" style={{ marginTop: '10px', fontSize: '9px' }}>
                  <span className="c">// Quad-Grid + Global Header</span><br/>
                  <span className="v">Constraint</span>::<span className="n">Length</span>(<span className="s">3</span>),<br/>
                  <span className="v">Constraint</span>::<span className="n">Ratio</span>(<span className="s">1, 2</span>)
               </div>
               <pre style={{ padding: '20px', background: 'var(--ui-surface-0)', fontFamily: '"Cascadia Code", "Fira Code", "Courier New", monospace', fontSize: '13px', marginTop: '10px', whiteSpace: 'pre', lineHeight: '1.1', border: '1px solid var(--ui-border-subtle)', color: 'var(--ui-text-secondary)', margin: 0, overflowX: 'auto' }}>
{`┌─────────────────────────────────────────────────┐
│               BRAND_HEADER_STRIP                │
├────────────────────────┬────────────────────────┤
│        METRIC_1        │        METRIC_2        │
├────────────────────────┼────────────────────────┤
│        METRIC_3        │        METRIC_4        │
└────────────────────────┴────────────────────────┘`}
               </pre>
            </div>
          </div>

          <div className="grid-2">
            {/* ARCHETYPE C */}
            <div className="rule-box" style={{ borderLeftColor: 'var(--ui-accent-secondary)' }}>
               <div style={{ color: 'var(--ui-accent-secondary)', fontWeight: 800, marginBottom: '8px' }}>TYPE_C: FOCUSED UTILITY</div>
               <p>Best for single-purpose tools (Fetch, Generators). High brand impact with centered data.</p>
               <div className="code" style={{ marginTop: '10px', fontSize: '9px' }}>
                  <span className="c">// Centered Main with Padding</span><br/>
                  <span className="v">Constraint</span>::<span className="n">Length</span>(<span className="s">8</span>),<br/>
                  <span className="v">Constraint</span>::<span className="n">Min</span>(<span className="s">0</span>)
               </div>
               <pre style={{ padding: '20px', background: 'var(--ui-surface-0)', fontFamily: '"Cascadia Code", "Fira Code", "Courier New", monospace', fontSize: '13px', marginTop: '10px', whiteSpace: 'pre', lineHeight: '1.1', border: '1px solid var(--ui-border-subtle)', color: 'var(--ui-text-secondary)', margin: 0, overflowX: 'auto' }}>
{`┌─────────────────────────────────────────────────┐
│                    LOGO_ART                     │
├─────────────────────────────────────────────────┤
│                                                 │
│                 CENTRAL_OUTPUT                  │
│                                                 │
├─────────────────────────────────────────────────┤
│ [PROMPT] > _                                    │
└─────────────────────────────────────────────────┘`}
               </pre>
            </div>

            <div className="subsection-meta">
               <div className="rule-box">
                  <p><strong>Standard Padding:</strong> All archetypes must maintain a 1-character horizontal padding from terminal edges unless using full-width border containers.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
