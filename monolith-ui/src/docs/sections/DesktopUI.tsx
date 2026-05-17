import React from 'react';
import { 
  IconPlayerPlay, 
  IconPlayerSkipForward, 
  IconPlayerSkipBack,
  IconCpu,
  IconGitBranch,
  IconCode,
  IconDatabase,
  IconVolume
} from '@tabler/icons-react';

export const DesktopUI: React.FC = () => {
  return (
    <section className="doc-section" id="desktop-ui">
      <div className="section-eyebrow">13</div>
      <h2 className="section-title">Mocks: Desktop Native <em>UI</em></h2>
      <p className="section-desc">Practical implementation of the <strong>Orbital Layout</strong> for desktop environments. These examples demonstrate high-density workstations where everything orbits the core action.</p>

      {/* Mock 1: Gemini Station */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">Example 1: Gemini Station</div>
          <p className="section-desc" style={{ marginBottom: '20px' }}>A high-density workstation for Gemini CLI. The **Chat Core** is the sun, with workspace context orbiting in reactive panels.</p>
          <div className="rule-box" style={{ background: 'var(--ui-surface-1)' }}>
             <p><strong>Orbital Focus:</strong> The chat canvas is Surface 0. The sidebar is Surface 2 (Inner Orbit). The system bar is Surface 3 (Outer Orbit).</p>
          </div>
        </div>
        <div className="canvas" style={{ padding: '0', background: '#05070a', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', border: '1.5px solid var(--ui-border-default)', overflowX: 'auto', overflowY: 'hidden' }}>
          <div style={{ minWidth: '800px' }}>
            {/* Outer Orbit: System Bar */}
            <div style={{ height: '28px', background: 'var(--ui-surface-3)', borderBottom: '1px solid var(--ui-border-subtle)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '16px', fontSize: '10px', color: 'var(--ui-text-tertiary)', fontFamily: 'var(--ui-font-mono)' }}>
              <div style={{ display: 'flex', gap: '8px', color: 'var(--ui-text-primary)', fontWeight: 800 }}><span>GEMINI_STATION v0.8</span></div>
              <div style={{ opacity: 0.3 }}>|</div>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', color: 'var(--ui-text-secondary)' }}>
                <IconGitBranch size={12} /> master*
              </div>
              <div style={{ flex: 1 }}></div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <IconCpu size={12} /> 12%
                <span>10:42 AM</span>
              </div>
            </div>

            <div style={{ height: '380px', display: 'flex' }}>
              {/* Inner Orbit: Left Context */}
              <div style={{ width: '240px', background: 'var(--ui-surface-2)', borderRight: '1px solid var(--ui-border-subtle)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                   <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--ui-text-disabled)', marginBottom: '8px' }}>ACTIVE_CONTEXT</div>
                   <div style={{ padding: '10px', background: 'var(--ui-surface-0)', border: '1px solid var(--brand-primary)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)' }}>
                     <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>monolith.dev-Design</div>
                     <div style={{ fontSize: '10px', color: 'var(--ui-text-tertiary)', marginTop: '2px' }}>k:/source/repos/monolith-ui</div>
                   </div>
                </div>
                <div>
                   <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--ui-text-disabled)', marginBottom: '8px' }}>SESSION_HISTORY</div>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                     <div style={{ fontSize: '11px', padding: '6px 10px', background: 'var(--ui-surface-3)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', color: 'var(--ui-text-primary)' }}>Refactor: Tabs System</div>
                     <div style={{ fontSize: '11px', padding: '6px 10px', color: 'var(--ui-text-tertiary)' }}>Fix: Black Screen</div>
                   </div>
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="ui-tab-btn" style={{ width: '100%', justifyContent: 'center' }}>NEW_CHAT</div>
              </div>

              {/* The Core: Chat Canvas */}
              <div style={{ flex: 1, background: 'var(--ui-surface-0)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '40px', background: 'var(--ui-surface-1)', borderBottom: '1px solid var(--ui-border-subtle)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px' }}>
                    <div className="ui-tab-btn active">Live_Session</div>
                    <div className="ui-tab-btn">Token_Usage</div>
                    <div className="ui-tab-btn">Graph_View</div>
                </div>
                <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto' }}>
                    <div style={{ alignSelf: 'flex-start', maxWidth: '85%', padding: '16px', background: 'var(--ui-surface-2)', border: '1px solid var(--ui-border-subtle)', borderRadius: '3px 3px 3px 0', fontSize: '12px', lineHeight: '1.6' }}>
                      Welcome to the Gemini Station. I am ready to process your codebase.
                    </div>
                    <div style={{ alignSelf: 'flex-end', maxWidth: '85%', padding: '16px', background: 'var(--brand-primary)', color: '#fff', borderRadius: '3px 3px 0 3px', fontSize: '12px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}>
                      Analyze the Orbital Layout implementation in the current view.
                    </div>
                    <div style={{ alignSelf: 'flex-start', maxWidth: '90%', padding: '16px', background: 'var(--ui-surface-1)', border: '1.5px solid var(--brand-primary)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', fontSize: '12px', fontFamily: 'var(--ui-font-mono)' }}>
                       <div style={{ color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '8px' }}>✦ GEMINI_SYSTEM_CORE</div>
                       &gt; Scanning UI nodes...<br/>
                       &gt; Gravity Core: detected at [main_canvas]<br/>
                       &gt; Inner Orbit: [context_sidebar, tab_bar]<br/>
                       &gt; Outer Orbit: [system_bar, git_monitor]
                    </div>
                </div>
                <div style={{ padding: '16px', borderTop: '1px solid var(--ui-border-subtle)', background: 'var(--ui-surface-1)', display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1, background: 'var(--ui-surface-0)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', padding: '10px 16px', fontSize: '12px', color: 'var(--ui-text-disabled)' }}>Command Gemini...</div>
                    <div style={{ padding: '0 24px', background: 'var(--brand-primary)', color: '#fff', borderRadius: 'var(--ui-r-md)', fontSize: '11px', fontWeight: 800, display: 'flex', alignItems: 'center', boxShadow: 'var(--ui-inset-deep)' }}>EXECUTE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock 2: T-Sonic Pro */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">Example 2: T-Sonic Pro</div>
          <p className="section-desc" style={{ marginBottom: '20px' }}>Orbital audio workstation. The **Waveform Core** is surrounded by transport and library orbits.</p>
        </div>
        <div className="canvas" style={{ padding: '0', background: 'var(--ui-surface-1)', border: '1.5px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', overflowX: 'auto', overflowY: 'hidden' }}>
          <div style={{ minWidth: '800px', display: 'flex', height: '360px' }}>
            <div style={{ width: '180px', background: 'var(--ui-surface-2)', borderRight: '1px solid var(--ui-border-subtle)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
               <div className="ui-tab-btn active" style={{ width: '100%', justifyContent: 'center' }}>HI-RES_MODE</div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--ui-text-disabled)', fontWeight: 800 }}>ORBITS</div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-primary)', fontWeight: 600 }}>Library</div>
                  <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)' }}>Mixer</div>
                  <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)' }}>Engine</div>
               </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
               <div style={{ flex: 1, padding: '40px', display: 'flex', gap: '32px', alignItems: 'center' }}>
                  <div style={{ width: '160px', height: '160px', background: 'var(--ui-surface-3)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', position: 'relative', overflow: 'hidden' }}>
                     <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '60%', background: 'linear-gradient(to top, var(--brand-primary-bg), transparent)', opacity: 0.3 }}></div>
                  </div>
                  <div style={{ flex: 1 }}>
                     <div style={{ fontSize: '24px', fontWeight: 900, marginBottom: '4px' }}>SYNTH_WAVE_04</div>
                     <div style={{ fontSize: '14px', color: 'var(--brand-primary)', fontFamily: 'var(--ui-font-mono)', fontWeight: 700 }}>MONOLITH_ENGINE // 192KHZ</div>
                     <div style={{ marginTop: '24px', height: '40px', background: 'var(--ui-surface-0)', border: '1px solid var(--ui-border-subtle)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '4px' }}>
                        {[20,40,60,80,100,70,50,30,60,90,40,20,30,50,70].map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--brand-primary)', opacity: 0.5 }}></div>)}
                     </div>
                  </div>
               </div>
               <div style={{ height: '80px', background: 'var(--ui-surface-3)', borderTop: '1px solid var(--ui-border-subtle)', padding: '0 32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <IconPlayerSkipBack size={20} />
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--ui-r-md)', background: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: 'var(--ui-inset-deep)' }}>
                    <IconPlayerPlay size={24} fill="currentColor" />
                  </div>
                  <IconPlayerSkipForward size={20} />
                  <div style={{ flex: 1, height: '4px', background: 'var(--ui-surface-4)', borderRadius: '2px' }}>
                    <div style={{ width: '35%', height: '100%', background: 'var(--brand-primary)', borderRadius: '2px' }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <IconVolume size={18} />
                    <div style={{ width: '80px', height: '14px', background: 'var(--ui-surface-2)', border: '1px solid var(--ui-border-subtle)', borderRadius: '2px', padding: '0 2px', display: 'flex', alignItems: 'center' }}>
                       <div style={{ width: '70%', height: '8px', background: 'var(--ui-text-primary)', borderRadius: '1px' }}></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock 3: T-Edit Pro */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">Example 3: T-Edit Pro</div>
          <p className="section-desc" style={{ marginBottom: '20px' }}>Orbital IDE. The **Code Core** is central, with diagnostics and documentation orbiting in specialized tiers.</p>
        </div>
        <div className="canvas" style={{ padding: '0', background: 'var(--ui-surface-0)', border: '1.5px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', overflowX: 'auto', overflowY: 'hidden' }}>
           <div style={{ minWidth: '800px', display: 'flex', flexDirection: 'column', height: '400px' }}>
             <div style={{ height: '40px', background: 'var(--ui-surface-2)', borderBottom: '1px solid var(--ui-border-subtle)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '8px' }}>
                <div className="ui-tab-btn active"><IconCode size={14}/> App.tsx</div>
                <div className="ui-tab-btn"><IconDatabase size={14}/> Schema.sql</div>
                <div style={{ flex: 1 }}></div>
                <div className="ui-tab-btn active">DEPLOY</div>
             </div>
             <div style={{ flex: 1, display: 'flex' }}>
                <div style={{ width: '56px', background: 'var(--ui-surface-1)', borderRight: '1px solid var(--ui-border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: '20px' }}>
                   <div style={{ fontSize: '10px', fontWeight: 800, opacity: 0.5 }}>01</div>
                   <div style={{ fontSize: '10px', fontWeight: 800, opacity: 0.5 }}>02</div>
                   <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--brand-primary)' }}>03</div>
                </div>
                <div style={{ flex: 1, padding: '24px', fontFamily: 'var(--ui-font-mono)', fontSize: '13px', lineHeight: '1.6' }}>
                   <div style={{ color: 'var(--ui-text-tertiary)' }}>// MonolithUI v0.8 Core</div>
                   <div><span style={{ color: 'var(--brand-primary)' }}>export const</span> <span style={{ color: '#fff' }}>OrbitalSystem</span> = () =&gt; {'{'}</div>
                   <div style={{ paddingLeft: '20px' }}>
                      <span style={{ color: 'var(--brand-primary)' }}>return</span> (<br/>
                      &nbsp;&nbsp;&lt;<span style={{ color: 'var(--brand-primary)' }}>GravityCore</span>&gt;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: 'var(--brand-primary)' }}>MainView</span> /&gt;<br/>
                      &nbsp;&nbsp;&lt;/<span style={{ color: 'var(--brand-primary)' }}>GravityCore</span>&gt;<br/>
                      );
                   </div>
                   <div>{'}'};</div>
                </div>
                <div style={{ width: '220px', background: 'var(--ui-surface-2)', borderLeft: '1px solid var(--ui-border-subtle)', padding: '16px' }}>
                   <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--ui-text-disabled)', marginBottom: '12px' }}>DIAGNOSTICS</div>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--ui-success)' }}>● 0 errors</div>
                      <div style={{ fontSize: '11px', color: 'var(--ui-warning)' }}>● 2 warnings</div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
