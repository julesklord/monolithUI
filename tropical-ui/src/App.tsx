import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { DocLayout } from './docs/DocLayout';
import { 
  Hero, 
  Principles, 
  Philosophy, 
  ColorSystem, 
  Typography, 
  Motion, 
  Layout, 
  ComponentsSection, 
  TUITranslation, 
  BrandTheming, 
  TokenSpec 
} from './docs/sections';
import './styles/index.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [brand, setBrand] = useState('brand-antinatura');

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : '';
  }, [theme]);

  useEffect(() => {
    const brands = ['brand-antinatura', 'brand-mango', 'brand-balandra', 'brand-playa', 'brand-pitahaya'];
    brands.forEach(b => document.documentElement.classList.remove(b));
    document.documentElement.classList.add(brand);
  }, [brand]);

  const handleBrandClick = (selectedBrand: string) => {
    setBrand(selectedBrand);
    const bpPillText = document.getElementById('bpPillText');
    if (bpPillText) {
      const texts: Record<string, string> = {
        'brand-antinatura': 'industrial-mono',
        'brand-mango': 'mango-yellow',
        'brand-balandra': 'balandra-purple',
        'brand-playa': 'playa-turquoise',
        'brand-pitahaya': 'pitahaya-scarlet'
      };
      bpPillText.textContent = texts[selectedBrand] || selectedBrand;
    }
  };

  return (
    <>
      <nav className="doc-nav">
        <NavLink className="nav-logo" to="/">
          <div className="nav-logo-mark" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.5C12 2.5 5 8 5 15c0 3.866 3.134 7 7 7s7-3.134 7-7c0-7-7-12.5-7-12.5z" fill="var(--brand-primary-bg)" />
              <path d="M12 2.5V22" stroke="var(--brand-secondary)" />
              <path d="M12 11l4-3" stroke="var(--brand-secondary)" />
              <path d="M12 15l3.5-2.5" stroke="var(--brand-secondary)" />
              <path d="M12 19l3-2" stroke="var(--brand-secondary)" />
            </svg>
          </div>
          <span style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>Tropical</span>
          <span style={{ fontWeight: 400, opacity: 0.7 }}>UI</span>
        </NavLink>
        <div className="nav-sep"></div>
        <nav className="nav-links">
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/principles">Principles</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/color">Color</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/typography">Type</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/motion">Motion</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/layout">Layout</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/components">Components</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/tui">TUI</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/branding">Branding</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/spec">Spec</NavLink>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--ui-r-pill)', border: '1px solid var(--ui-border-subtle)' }}>
            <div title="Antinatura" onClick={() => handleBrandClick('brand-antinatura')} style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(135deg,#64748b,#334155)', cursor: 'pointer', border: brand === 'brand-antinatura' ? '2px solid #fff' : '2px solid transparent', boxShadow: brand === 'brand-antinatura' ? '0 0 0 1px var(--ui-border-subtle)' : 'none' }} />
            <div title="Mango" onClick={() => handleBrandClick('brand-mango')} style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(135deg,#f59e0b,#fbbf24)', cursor: 'pointer', border: brand === 'brand-mango' ? '2px solid #fff' : '2px solid transparent', boxShadow: brand === 'brand-mango' ? '0 0 0 1px var(--ui-border-subtle)' : 'none' }} />
            <div title="Balandra" onClick={() => handleBrandClick('brand-balandra')} style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(135deg,#a855f7,#e11d48)', cursor: 'pointer', border: brand === 'brand-balandra' ? '2px solid #fff' : '2px solid transparent', boxShadow: brand === 'brand-balandra' ? '0 0 0 1px var(--ui-border-subtle)' : 'none' }} />
            <div title="Playa" onClick={() => handleBrandClick('brand-playa')} style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(135deg,#06b6d4,#2dd4bf)', cursor: 'pointer', border: brand === 'brand-playa' ? '2px solid #fff' : '2px solid transparent', boxShadow: brand === 'brand-playa' ? '0 0 0 1px var(--ui-border-subtle)' : 'none' }} />
            <div title="Pitahaya" onClick={() => handleBrandClick('brand-pitahaya')} style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(135deg,#ef4444,#991b1b)', cursor: 'pointer', border: brand === 'brand-pitahaya' ? '2px solid #fff' : '2px solid transparent', boxShadow: brand === 'brand-pitahaya' ? '0 0 0 1px var(--ui-border-subtle)' : 'none' }} />
          </div>
          <button className="nav-theme-btn" id="themeBtn" title="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <i className="ti ti-sun"></i>
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<DocLayout />}>
          <Route index element={<Hero />} />
          <Route path="principles" element={<Principles />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="color" element={<ColorSystem />} />
          <Route path="typography" element={<Typography />} />
          <Route path="motion" element={<Motion />} />
          <Route path="layout" element={<Layout />} />
          <Route path="components" element={<ComponentsSection />} />
          <Route path="tui" element={<TUITranslation />} />
          <Route path="branding" element={<BrandTheming brand={brand} handleBrandClick={handleBrandClick} />} />
          <Route path="spec" element={<TokenSpec />} />
        </Route>
      </Routes>
    </>
  );
}
