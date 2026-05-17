import React from 'react';
import { 
  IconSparkles, 
  IconArrowUp, 
  IconCode, 
  IconBug 
} from '@tabler/icons-react';

interface BrandThemingProps {
  brand: string;
  handleBrandClick: (selectedBrand: string) => void;
}

export const BrandTheming: React.FC<BrandThemingProps> = ({ brand, handleBrandClick }) => {
  return (
    <section className="doc-section" id="branding">
      <div className="section-eyebrow">10</div>
      <h2 className="section-title">Brand <em>System</em></h2>
      <p className="section-desc">The system ships with 5 base brand presets. Adding a new brand requires overriding only ~10 CSS variables in <span className="icode">@layer brand</span>.</p>

      <div className="subsection">
        <div className="subsection-title">Live brand switcher</div>
        <div className="brand-switcher" id="brandSwitcher">
          <div className={`brand-btn ${brand === 'brand-tropic-vibes' ? 'active' : ''}`} onClick={() => handleBrandClick('brand-tropic-vibes')}>
            <div className="brand-dot" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 35%, #06b6d4 70%, #a855f7 100%)' }}></div>
            Tropic Vibes
          </div>
          <div className={`brand-btn ${brand === 'brand-mango' ? 'active' : ''}`} onClick={() => handleBrandClick('brand-mango')}>
            <div className="brand-dot" style={{ background: 'linear-gradient(135deg,#f59e0b,#fbbf24)' }}></div>
            Mango
          </div>
          <div className={`brand-btn ${brand === 'brand-balandra' ? 'active' : ''}`} onClick={() => handleBrandClick('brand-balandra')}>
            <div className="brand-dot" style={{ background: 'linear-gradient(135deg,#a855f7,#e11d48)' }}></div>
            Balandra
          </div>
          <div className={`brand-btn ${brand === 'brand-playa' ? 'active' : ''}`} onClick={() => handleBrandClick('brand-playa')}>
            <div className="brand-dot" style={{ background: 'linear-gradient(135deg,#06b6d4,#2dd4bf)' }}></div>
            Playa
          </div>
          <div className={`brand-btn ${brand === 'brand-pitahaya' ? 'active' : ''}`} onClick={() => handleBrandClick('brand-pitahaya')}>
            <div className="brand-dot" style={{ background: 'linear-gradient(135deg,#ef4444,#991b1b)' }}></div>
            Pitahaya
          </div>
        </div>
        <div className="canvas row" style={{ gap: '10px', alignItems: 'center' }} id="brandPreview">
          <div className="pill primary"><IconSparkles size={10} /><span>{brand.replace('brand-', '')}</span></div>
          <div className="pill secondary">secondary accent</div>
          <div className="pill success"><div className="sdot on"></div>connected</div>
          <button className="btn primary"><IconSparkles size={12} />Primary action</button>
          <button className="btn ghost">Ghost</button>
          <div className="send-btn"><IconArrowUp size={13} /></div>
          <div className="progress-bar" style={{ width: '140px' }}><div className="progress-fill" style={{ width: '60%' }}></div></div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">How to add a new brand</div>
        <div className="code">
          <span className="c">/* 1. Add a brand class with your color variables */</span><br/>
          <span className="k">.brand-myapp</span> {'{'}<br/>
          &nbsp;&nbsp;<span className="v">--brand-primary</span>:        <span className="s">#YOUR_PRIMARY</span>;<br/>
          &nbsp;&nbsp;<span className="v">--brand-primary-light</span>:  <span className="s">#YOUR_LIGHT</span>;   <span className="c">/* tint for text on dark */</span><br/>
          &nbsp;&nbsp;<span className="v">--brand-primary-bg</span>:     <span className="s">rgba(R,G,B,0.12)</span>;<br/>
          &nbsp;&nbsp;<span className="v">--brand-primary-border</span>: <span className="s">rgba(R,G,B,0.25)</span>;<br/>
          &nbsp;&nbsp;<span className="v">--brand-primary-glow</span>:   <span className="s">rgba(R,G,B,0.18)</span>;<br/>
          &nbsp;&nbsp;<span className="v">--brand-secondary</span>:      <span className="s">#YOUR_COMPLEMENT</span>;<br/>
          &nbsp;&nbsp;<span className="v">--brand-secondary-bg</span>:   <span className="s">rgba(R,G,B,0.12)</span>;<br/>
          &nbsp;&nbsp;<span className="v">--brand-gradient</span>:       <span className="s">linear-gradient(135deg, #PRIMARY, #SECONDARY)</span>;<br/>
          &nbsp;&nbsp;<span className="c">/* optional font overrides: */</span><br/>
          &nbsp;&nbsp;<span className="v">--brand-font-sans</span>:      <span className="s">'Your Font', system-ui, sans-serif</span>;<br/>
          &nbsp;&nbsp;<span className="v">--brand-font-mono</span>:      <span className="s">'Your Mono', monospace</span>;<br/>
          {'}'}<br/>
          <br/>
          <span className="c">/* 2. Apply to the root element */</span><br/>
          <span className="k">&lt;body</span> <span className="n">class</span>=<span className="s">"brand-myapp"</span><span className="k">&gt;</span>
        </div>
      </div>

      <div className="subsection" id="darklight">
        <div className="subsection-title">Dark / Light mode</div>
        <div className="canvas grid2" style={{ gap: '14px' }}>
          <div style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 'var(--ui-r-lg)', padding: '16px' }}>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'rgba(255,255,255,0.25)', marginBottom: '10px' }}>dark (default)</div>
            <div className="sess-item active" style={{ background: 'var(--brand-primary-bg)' }}><div className="sess-icon" style={{ background: 'var(--brand-primary-bg)', borderColor: 'var(--brand-primary-border)', color: 'var(--brand-primary-light)' }}><IconCode size={16} /></div><div className="sess-info"><div className="sess-title" style={{ color: 'var(--brand-primary-light)' }}>Refactor Pipeline</div><div className="sess-meta">12 min ago</div></div></div>
            <div className="sess-item" style={{ padding: '8px 10px', cursor: 'pointer' }}><div className="sess-icon"><IconBug size={16} /></div><div className="sess-info"><div className="sess-title">Fix UVR crash</div><div className="sess-meta">yesterday</div></div></div>
          </div>
          <div data-theme="light" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 'var(--ui-r-lg)', padding: '16px' }}>
            <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'rgba(0,0,0,0.35)', marginBottom: '10px' }}>light</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '8px 10px', borderRadius: 'var(--ui-r-md)', background: 'var(--brand-primary-bg)', cursor: 'pointer' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: 'var(--ui-r-md)', background: 'var(--brand-primary-bg)', border: '1px solid var(--brand-primary-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'var(--brand-primary)' }}><IconCode size={16} /></div>
              <div style={{ flex: '1' }}><div style={{ fontSize: '13px', color: 'var(--brand-primary)' }}>Refactor Pipeline</div><div style={{ fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)', color: 'rgba(0,0,0,0.35)', marginTop: '2px' }}>12 min ago</div></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '8px 10px', borderRadius: 'var(--ui-r-md)', cursor: 'pointer' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: 'var(--ui-r-md)', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'rgba(0,0,0,0.35)' }}><IconBug size={16} /></div>
              <div style={{ flex: '1' }}><div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.65)' }}>Fix UVR crash</div><div style={{ fontSize: '10.5px', fontFamily: 'var(--ui-font-mono)', color: 'rgba(0,0,0,0.35)', marginTop: '2px' }}>yesterday</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
