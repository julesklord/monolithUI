import React from 'react';

export const TerminalUI: React.FC = () => {
  return (
    <section className="doc-section" id="terminal-ui">
      <div className="section-eyebrow">15</div>
      <h2 className="section-title">Mocks: TUI <em>Console</em></h2>
      <p className="section-desc">Live examples of MonolithUI applied to terminal interfaces. Every mock follows the TUI System spec (section 07) — high-density, theme-reactive, ASCII/Unicode native. Zero web-like elements.</p>

      {/* 1. TUNACHAT (Agent with Personality & Sidebar) */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">1. TunaChat Pro</div>
          <p className="section-desc" style={{ marginBottom: '20px' }}>Advanced conversational agent. Features a <strong>Presence Sidebar</strong> and contextual action bars.</p>
          <div className="rule-box">
             <p><strong>Layout:</strong> Uses a 1:4 ratio for the sidebar, maintaining the Orbital center for the chat buffer.</p>
          </div>
        </div>
        <div className="canvas" style={{ padding: '20px', background: 'var(--ui-surface-0)', borderRadius: '3px', border: '1.5px solid var(--ui-border-default)', overflowX: 'auto' }}>
          <div style={{ minWidth: '800px', height: '360px', fontFamily: 'var(--ui-font-mono)', fontSize: '11px', display: 'flex', gap: '2px' }}>
             {/* USER LIST SIDEBAR */}
             <div style={{ width: '160px', border: '1px solid var(--brand-primary)', padding: '10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ color: 'var(--brand-primary)', fontWeight: 800, borderBottom: '1px solid var(--brand-primary)', paddingBottom: '4px' }}>ONLINE_USERS</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                   <div style={{ width: '8px', height: '8px', background: 'var(--ui-success)', borderRadius: '50%' }}></div>
                   <span>TunaBot_24</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                   <div style={{ width: '8px', height: '8px', background: 'var(--ui-success)', borderRadius: '50%' }}></div>
                   <span style={{ fontWeight: 800 }}>Julio_Dev</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.5 }}>
                   <div style={{ width: '8px', height: '8px', background: 'var(--ui-text-disabled)', borderRadius: '50%' }}></div>
                   <span>Guest_402</span>
                </div>
                <div style={{ marginTop: 'auto', color: 'var(--brand-primary)', fontSize: '9px' }}>[ ROOM: #DEV_OPS ]</div>
             </div>

             {/* CHAT BUFFER */}
             <div style={{ flex: 1, border: '1px solid var(--brand-primary)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'hidden' }}>
                   <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--brand-primary)', fontWeight: 800, whiteSpace: 'nowrap' }}>[ TUNA ]</span>
                      <div>
                         <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ opacity: 0.4 }}>10:55:01</span>
                         </div>
                         <div style={{ color: 'var(--ui-text-primary)', marginTop: '2px' }}>System check complete. All orbits are stable. ▒▒▒▒▒▒▒▒▒▒ 100%</div>
                      </div>
                   </div>
                   <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--ui-text-secondary)', fontWeight: 800, whiteSpace: 'nowrap' }}>[ JULIO ]</span>
                      <div>
                         <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ opacity: 0.4 }}>10:55:24</span>
                         </div>
                         <div style={{ color: 'var(--ui-text-primary)', marginTop: '2px' }}>Excellent. Finalize the <strong>MangoFetch</strong> v1.0 release notes.</div>
                      </div>
                   </div>
                </div>
                <div style={{ borderTop: '1px solid var(--brand-primary)', padding: '10px 15px', display: 'flex', alignItems: 'center', fontFamily: 'var(--ui-font-mono)' }}>
                   <span style={{ color: 'var(--ui-success)', marginRight: '8px' }}>julio@monolith</span>
                   <span style={{ color: 'var(--ui-text-tertiary)', marginRight: '8px' }}>:</span>
                   <span style={{ color: 'var(--brand-primary)', marginRight: '10px' }}>~/workspace$</span>
                   <span style={{ color: 'var(--ui-text-primary)' }}>mangofetch --release-notes</span>
                   <span style={{ marginLeft: '4px', width: '8px', height: '14px', background: 'var(--brand-primary)', display: 'inline-block', animation: 'pulse 1s infinite' }}></span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. MANGOFETCH (Brand & Telemetry Graphs) */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">2. MangoFetch Manager</div>
          <p className="section-desc">The industry-standard fetch tool. Includes <strong>ASCII Sparklines</strong> and enhanced brand headers.</p>
        </div>
        <div className="canvas" style={{ padding: '20px', background: 'var(--ui-surface-0)', borderRadius: '3px', border: '1.5px solid var(--ui-border-default)', overflowX: 'auto' }}>
          <div style={{ minWidth: '800px', height: '360px', fontFamily: 'var(--ui-font-mono)', fontSize: '10px', display: 'flex', gap: '30px' }}>
             {/* BRAND & STATS */}
             <div style={{ color: 'var(--brand-primary)', width: '220px' }}>
<pre style={{ lineHeight: '1.1', margin: '0 0 20px 0', fontSize: '8px', color: 'var(--brand-primary)' }}>
{`       _.._
     .'    '.
    /   __   \\
 ,_|   /  \\   |_ ,
'-,|   \\__/   |,-'
   \\        /
    '.____.'
  M A N G O F E T C H`}
</pre>
                <div style={{ background: 'var(--brand-primary)', color: 'var(--ui-surface-0)', padding: '2px 6px', fontWeight: 800, marginBottom: '10px' }}>SYSTEM_STATS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', opacity: 0.9 }}>
                   <div>KERNEL: MONOLITH_X86_64</div>
                   <div>NODES: 12 ACTIVE</div>
                   <div style={{ marginTop: '10px' }}>NETWORK_LOAD:</div>
                   <div style={{ color: 'var(--ui-success)', letterSpacing: '2px' }}>  ▂ ▃ ▅ ▇ █ ▇ ▅ ▃</div>
                </div>
             </div>

             {/* TASK TABLE */}
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 300px 100px 100px', gap: '10px', color: 'var(--brand-primary)', borderBottom: '1px solid var(--brand-primary)', paddingBottom: '4px', fontWeight: 800 }}>
                   <span>PID/NAME</span><span>PROGRESS_DENSITY</span><span>SPEED</span><span>EST_TIME</span>
                </div>
                {[
                  { name: 'mangofetch_bin', progress: '█████████████████░░░', perc: '84%', speed: '124MB/s', time: '1.2s' },
                  { name: 'thaya_editor_v2', progress: '██████░░░░░░░░░░░░░░', perc: '32%', speed: '42.1MB/s', time: '14s' },
                  { name: 'tunachat_core_lib', progress: '░░░░░░░░░░░░░░░░░░░░', perc: '00%', speed: 'WAITING', time: '--' }
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 300px 100px 100px', gap: '10px', padding: '4px 0', borderBottom: '1px solid var(--ui-border-subtle)', color: 'var(--ui-text-primary)' }}>
                     <span>{row.name}</span>
                     <span style={{ color: i === 0 ? 'var(--ui-success)' : 'var(--brand-primary)' }}>{row.progress} {row.perc}</span>
                     <span>{row.speed}</span>
                     <span style={{ textAlign: 'right' }}>{row.time}</span>
                  </div>
                ))}
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', border: '1px solid var(--brand-primary)', padding: '6px 12px', background: 'var(--brand-primary-bg)' }}>
                   <span style={{ fontWeight: 800 }}>[ TOTAL_THROUGHPUT: 166.1 MB/s ]</span>
                   <span style={{ color: 'var(--brand-primary)' }}>M_ID: 0x8FAC</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. THAYA EDITOR (The IDE Console) */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">3. Thaya Editor Pro</div>
          <p className="section-desc">Ultimate code terminal. Features a <strong>Project Navigator</strong> and multi-layer <strong>Gutter System</strong>.</p>
        </div>
        <div className="canvas" style={{ padding: '0', background: 'var(--ui-surface-0)', borderRadius: '3px', border: '1.5px solid var(--ui-border-default)', overflowX: 'auto' }}>
          <div style={{ minWidth: '800px', height: '400px', fontFamily: 'var(--ui-font-mono)', fontSize: '11px', display: 'flex', flexDirection: 'column' }}>
             {/* TOP BAR */}
             <div style={{ background: 'var(--ui-surface-2)', padding: '6px 15px', borderBottom: '1px solid var(--ui-border-subtle)', display: 'flex', gap: '20px', fontWeight: 600 }}>
                <span style={{ color: 'var(--brand-primary)' }}>[ FILE ]</span>
                <span style={{ opacity: 0.6 }}>[ EDIT ]</span>
                <span style={{ opacity: 0.6 }}>[ SOURCE ]</span>
                <span style={{ opacity: 0.6 }}>[ BUILD ]</span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
                   <span style={{ color: 'var(--ui-success)' }}>● ONLINE</span>
                   <span style={{ color: 'var(--ui-text-tertiary)' }}>v1.0.42</span>
                </div>
             </div>
             
             <div style={{ flex: 1, display: 'flex' }}>
                {/* NAVIGATOR */}
                <div style={{ width: '180px', background: 'var(--ui-surface-1)', borderRight: '1px solid var(--ui-border-subtle)', padding: '15px' }}>
                   <div style={{ color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '10px' }}>▼ MONOLITH_UI</div>
                   <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ color: 'var(--ui-text-tertiary)' }}>┣━ index.ts</div>
                      <div style={{ color: 'var(--ui-text-primary)' }}>┣━ ▼ sections</div>
                      <div style={{ paddingLeft: '12px', color: 'var(--brand-primary)', background: 'var(--brand-primary-bg)' }}>┃&nbsp;&nbsp;┗━ Mocks.tsx</div>
                      <div style={{ color: 'var(--ui-text-tertiary)' }}>┗━ styles.css</div>
                   </div>
                </div>
                
                {/* EDITOR */}
                <div style={{ flex: 1, display: 'flex' }}>
                   <div style={{ width: '45px', background: 'var(--ui-surface-1)', color: 'var(--ui-text-disabled)', textAlign: 'right', padding: '15px 10px', borderRight: '1px solid var(--ui-border-subtle)', lineHeight: '1.6' }}>
                      1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10
                   </div>
                   <div style={{ flex: 1, padding: '15px', color: 'var(--ui-text-primary)', lineHeight: '1.6' }}>
                      <span style={{ color: 'var(--ui-accent-secondary)' }}>import</span> {'{'} <span style={{ color: 'var(--brand-primary)' }}>DesignSystem</span> {'}'} <span style={{ color: 'var(--ui-accent-secondary)' }}>from</span> <span style={{ color: 'var(--ui-success-light)' }}>'@monolith/core'</span>;<br/>
                      <br/>
                      <span style={{ color: 'var(--ui-text-tertiary)' }}>// Initialize the Thaya Engine</span><br/>
                      <span style={{ color: 'var(--ui-accent-secondary)' }}>const</span> <span style={{ color: 'var(--ui-success-light)' }}>editor</span> = <span style={{ color: 'var(--ui-accent-secondary)' }}>new</span> DesignSystem({'{'}<br/>
                      &nbsp;&nbsp;theme: <span style={{ color: 'var(--ui-success-light)' }}>'monolith-dark'</span>,<br/>
                      &nbsp;&nbsp;density: <span style={{ color: 'var(--ui-success-light)' }}>'high'</span><br/>
                      {'}'});<br/>
                      <br/>
                      <div style={{ display: 'inline-block', background: 'var(--brand-primary)', color: 'var(--ui-surface-0)', padding: '0 4px' }}>█</div> <span style={{ opacity: 0.5 }}>Waiting for command...</span>
                   </div>
                </div>
             </div>

             {/* DENSE STATUS BAR */}
             <div style={{ background: 'var(--brand-primary)', color: 'var(--ui-surface-0)', padding: '4px 15px', display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '10px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                   <span>[ MODE: COMMAND ]</span>
                   <span>master*</span>
                   <span>UTF-8 // CRLF</span>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                   <span>Ln 8, Col 42</span>
                   <span>TypeScript (TSX)</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
