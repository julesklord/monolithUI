import React from 'react';
import { 
  Layout, 
  Users, 
  ChartBar, 
  Gear,
  Bell,
  MagnifyingGlass,
  Sparkle,
  Files
} from '@phosphor-icons/react';

export const WebUI: React.FC = () => {
  return (
    <section className="doc-section" id="web-ui">
      <div className="section-eyebrow">14</div>
      <h2 className="section-title">Mocks: Web-Based <em>UI</em></h2>
      <p className="section-desc">Web applications utilizing <strong>Orbital Layout</strong>. From complex dashboards to public-facing landing pages and minimal blogs.</p>

      {/* 1. VIBEPULSE DASHBOARD */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">1. VibePulse Dashboard</div>
          <p className="section-desc" style={{ marginBottom: '20px' }}>A high-fidelity data visualization platform. The **Pulse Core** (main chart) dominates the center.</p>
        </div>
        <div className="canvas" style={{ padding: '24px', background: 'radial-gradient(circle at 50% 50%, var(--ui-surface-1) 0%, var(--ui-surface-0) 100%)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', border: '1.5px solid var(--ui-border-default)', overflowX: 'auto' }}>
          <div style={{ minWidth: '800px', height: '360px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ width: '20px', height: '20px', background: 'var(--brand-primary)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)' }}></div>
                   <span style={{ fontWeight: 800, fontSize: '12px' }}>VIBEPULSE</span>
                </div>
                <div style={{ flex: 1, margin: '0 40px', maxWidth: '300px', position: 'relative' }}>
                   <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--ui-border-subtle)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', padding: '5px 12px 5px 32px', fontSize: '11px', color: 'var(--ui-text-disabled)' }}>Search metrics...</div>
                   <MagnifyingGlass size={12} weight="duotone" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
                </div>
                <div style={{ display: 'flex', gap: '12px', color: 'var(--ui-text-tertiary)' }}>
                   <Bell size={18} weight="duotone" /><Gear size={18} weight="duotone" />
                </div>
             </div>
             <div style={{ flex: 1, display: 'flex', gap: '16px' }}>
             <div style={{ width: '56px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--ui-border-subtle)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: '20px' }}>
                <div className="ui-tab-btn active" style={{ padding: '6px' }}><Layout size={18} weight="duotone" /></div>
                <Users size={18} weight="duotone" style={{ opacity: 0.5 }} />
                <ChartBar size={18} weight="duotone" style={{ opacity: 0.5 }} />
             </div>                <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--ui-border-subtle)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                         <div style={{ fontSize: '10px', color: 'var(--brand-primary)', fontWeight: 800 }}>LIVE_PULSE_RATE</div>
                         <div style={{ fontSize: '24px', fontWeight: 900 }}>84.2<span style={{ fontSize: '12px', opacity: 0.5 }}>% VIBE</span></div>
                      </div>
                      <div className="ui-tab-btn active" style={{ padding: '4px 10px', fontSize: '10px' }}>REAL_TIME</div>
                   </div>
                   <div style={{ flex: 1, borderBottom: '1px solid var(--ui-border-subtle)', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                      {[40, 70, 45, 90, 65, 80, 30, 50, 85, 60].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--brand-primary)', opacity: 0.6, borderRadius: '2px 2px 0 0' }}></div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. PERSONAL BLOG / PORTFOLIO */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">2. T-Blog Portfolio</div>
          <p className="section-desc">A minimal, typography-focused blog using <strong>BlogCard</strong> components. Focuses on readability and industrial aesthetics.</p>
        </div>
        <div className="canvas" style={{ padding: '24px', background: 'var(--ui-surface-0)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', border: '1.5px solid var(--ui-border-default)', overflowX: 'auto' }}>
          <div style={{ minWidth: '800px', height: '360px', display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '700px', margin: '0 auto' }}>
             <header style={{ borderBottom: '1px solid var(--ui-border-subtle)', paddingBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: '18px', letterSpacing: '-0.02em' }}>J_DEV<span style={{ color: 'var(--brand-primary)' }}>.log</span></div>
                <nav style={{ display: 'flex', gap: '20px', fontSize: '12px', fontWeight: 600, color: 'var(--ui-text-tertiary)' }}>
                   <span style={{ color: 'var(--ui-text-primary)' }}>Writing</span><span>Projects</span><span>About</span>
                </nav>
             </header>
             <main style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                   <div style={{ width: '140px', height: '100px', background: 'var(--ui-surface-2)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', border: '1px solid var(--ui-border-subtle)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconSparkles size={32} style={{ opacity: 0.1 }} />
                   </div>
                   <div>
                      <div style={{ fontSize: '10px', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '6px' }}>ARTICLE // 2026.05.16</div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>The Gravity of Minimal Design</h3>
                      <p style={{ fontSize: '13px', color: 'var(--ui-text-tertiary)', lineHeight: '1.6' }}>Exploring why orbital layouts feel more natural than rigid grids in modern workstations...</p>
                   </div>
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                   <div style={{ width: '140px', height: '100px', background: 'var(--ui-surface-2)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', border: '1px solid var(--ui-border-subtle)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconFiles size={32} style={{ opacity: 0.1 }} />
                   </div>
                   <div>
                      <div style={{ fontSize: '10px', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '6px' }}>GUIDE // 2026.05.10</div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>Mastering TUI Components</h3>
                      <p style={{ fontSize: '13px', color: 'var(--ui-text-tertiary)', lineHeight: '1.6' }}>A deep dive into Unicode block rendering for high-performance terminal tools.</p>
                   </div>
                </div>
             </main>
          </div>
        </div>
      </div>

      {/* 3. PRODUCT LANDING PAGE */}
      <div className="subsection technical-grid">
        <div className="subsection-meta">
          <div className="subsection-title">3. T-Sonic Pro Landing</div>
          <p className="section-desc">A marketing landing page using the <strong>HeroSectionComponent</strong>. Combines high-end tech branding with direct call-to-actions.</p>
        </div>
        <div className="canvas" style={{ padding: '0', background: 'var(--ui-surface-0)', borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', border: '1.5px solid var(--ui-border-default)', overflowX: 'auto', overflowY: 'hidden' }}>
          <div style={{ minWidth: '800px', height: '400px', display: 'flex', flexDirection: 'column' }}>
             <nav style={{ padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid var(--ui-border-subtle)' }}>
                <div style={{ fontWeight: 900, fontSize: '16px' }}>T-SONIC</div>
                <div style={{ display: 'flex', gap: '24px', fontSize: '11px', fontWeight: 700, color: 'var(--ui-text-tertiary)' }}>
                   <span>FEATURES</span><span>SPECS</span><span>PRICING</span>
                   <span style={{ color: 'var(--brand-primary)' }}>BUY_NOW</span>
                </div>
             </nav>
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '10px', color: 'var(--brand-primary)', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '12px' }}>THE_NEXT_STANDARD</div>
                <h1 style={{ fontSize: '42px', fontWeight: 900, lineHeight: '1', marginBottom: '16px', maxWidth: '500px' }}>Sound that <span style={{ color: 'var(--brand-primary)' }}>Orbits</span> You.</h1>
                <p style={{ fontSize: '14px', color: 'var(--ui-text-tertiary)', maxWidth: '400px', marginBottom: '32px' }}>Experience spatial audio with zero latency. Powered by the tropical.dev core engine.</p>
                <div style={{ display: 'flex', gap: '16px' }}>
                   <div style={{ padding: '12px 24px', background: 'var(--brand-primary)', color: 'var(--ui-surface-0)', fontWeight: 800, borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', fontSize: '12px' }}>PRE_ORDER_V1</div>
                   <div style={{ padding: '12px 24px', border: '1px solid var(--ui-border-default)', fontWeight: 700, borderRadius: 'var(--ui-r-md)', boxShadow: 'var(--ui-inset-shallow)', fontSize: '12px' }}>WATCH_REEL</div>
                </div>
             </div>
             <div style={{ display: 'flex', borderTop: '1px solid var(--ui-border-subtle)', background: 'var(--ui-surface-1)' }}>
                {[1,2,3].map(i => (
                  <div key={i} style={{ flex: 1, padding: '20px', borderRight: i < 3 ? '1px solid var(--ui-border-subtle)' : 'none', textAlign: 'center' }}>
                     <div style={{ fontSize: '11px', fontWeight: 800, marginBottom: '4px' }}>FEATURE_0{i}</div>
                     <div style={{ fontSize: '10px', color: 'var(--ui-text-tertiary)' }}>High-fidelity performance.</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
