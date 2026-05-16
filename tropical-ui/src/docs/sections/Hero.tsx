import React from 'react';
import { 
  IconMeteor, 
  IconPalette, 
  IconLayoutDashboard, 
  IconShoe, 
  IconHeart, 
  IconArrowUpRight 
} from '@tabler/icons-react';

export const Hero: React.FC = () => {
  return (
    <section className="doc-section" style={{ paddingTop: '0px' }}>
      <div className="section-eyebrow">01</div>
      {/* System Status / Header Block */}
      <div style={{ display: 'flex', alignItems: 'center', background: 'var(--ui-surface-1)', border: '1.5px solid var(--ui-border-default)', padding: '24px', borderRadius: '0', gap: '24px', marginBottom: '40px' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '0', 
          background: 'var(--brand-primary)', 
          border: '1.5px solid var(--brand-primary)', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary-text)" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
            <path d="M12 22V12" />
            <path d="M12 12L4 7" />
            <path d="M12 12l8-5" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 800, color: 'var(--ui-text-primary)', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
              Tropical<span style={{ color: 'var(--brand-primary)' }}>UI</span>
            </h1>
            <div className="tag primary" style={{ borderRadius: '0', fontWeight: 800 }}>v2.0.0</div>
          </div>
          <div style={{ display: 'flex', gap: '12px', fontFamily: 'var(--ui-font-mono)', fontSize: '11px', color: 'var(--ui-text-tertiary)', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div className="sdot on" style={{ borderRadius: '0' }}></div> CORE_ENGINE: ACTIVE</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span>BUILD: STABLE_X64</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ color: 'var(--ui-text-secondary)' }}>REGION: BAJA_CALIFORNIA_SUR</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div className="tag secondary" style={{ textAlign: 'center', borderRadius: '0', background: 'var(--ui-surface-3)' }}>STATION: 04</div>
          <div className="tag neutral" style={{ textAlign: 'center', borderRadius: '0', background: 'var(--ui-surface-3)' }}>ARCH: 64BIT</div>
        </div>
      </div>

      <div className="rule-box">
        <p><strong>The definitive guide to application theming.</strong> TropicalUI is not a narrow toolkit for a single use case. It is an advanced, comprehensive design system designed to be the "bible" for building any interface with a highly customizable UI. Whether you are building complex data dashboards, code editors, dynamic forms, or rich e-commerce platforms, this system provides the semantic tokens, structural rules, and physics required to make them feel native, robust, and effortlessly re-brandable.</p>
      </div>

      <div className="subsection">
        <div className="subsection-title">Architectural Pillars</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          <div style={{ display: 'flex', padding: '12px 16px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', gap: '16px' }}>
            <div style={{ color: 'var(--brand-primary)', width: '20px', display: 'flex', justifyContent: 'center' }}><IconMeteor size={20} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ui-text-primary)', marginBottom: '4px' }}>Native OS Physics</div>
              <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.5 }}>Linear interpolation is banned. Every motion utilizes bezier curves or spring physics to emulate real momentum and tactile feedback, ensuring web apps feel as solid as desktop software.</div>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '12px 16px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', gap: '16px' }}>
            <div style={{ color: 'var(--ui-accent-secondary)', width: '20px', display: 'flex', justifyContent: 'center' }}><IconPalette size={20} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ui-text-primary)', marginBottom: '4px' }}>Semantic Theming Engine</div>
              <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.5 }}>A rigid separation between brand colors and structural tokens. By changing a few base variables, the entire application—from buttons to complex charts—re-themes automatically without touching component code.</div>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '12px 16px', background: 'var(--ui-surface-1)', border: '1px solid var(--ui-border-default)', borderRadius: 'var(--ui-r-md)', gap: '16px' }}>
            <div style={{ color: 'var(--ui-success)', width: '20px', display: 'flex', justifyContent: 'center' }}><IconLayoutDashboard size={20} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ui-text-primary)', marginBottom: '4px' }}>Universal Scalability</div>
              <div style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.5 }}>Components are designed to scale. The same pill component used in a dense command bar works seamlessly in a sprawling e-commerce product filter or a data-heavy analytics dashboard.</div>
            </div>
          </div>

        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Cross-Domain Translation (Example)</div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <div className="canvas-label" style={{ marginBottom: '8px' }}>E-Commerce / B2C Context</div>
            <div className="canvas" style={{ padding: '12px', minHeight: '180px', margin: 0, display: 'flex', flexDirection: 'column', background: 'var(--ui-surface-0)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ui-text-primary)' }}>Premium Sneakers</span>
                <div className="tag primary">$129.00</div>
              </div>
              <div style={{ flex: 1, background: 'var(--ui-surface-1)', borderRadius: 'var(--ui-r-md)', border: '1px solid var(--ui-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ui-text-tertiary)' }}>
                <IconShoe size={32} />
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button className="btn primary" style={{ flex: 1 }}>Add to Cart</button>
                <button className="btn ghost icon-only"><IconHeart size={18} /></button>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <div className="canvas-label" style={{ marginBottom: '8px' }}>SaaS Dashboard Context</div>
            <div className="canvas" style={{ padding: '12px', minHeight: '180px', margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ui-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Revenue Metrics</span>
                <div className="sdot on"></div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                <div style={{ fontSize: '28px', fontWeight: 500, color: 'var(--ui-text-primary)' }}>$45,231.89</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div className="tag success"><IconArrowUpRight size={12} style={{ marginRight: '2px' }} /> 12.5%</div>
                  <span style={{ fontSize: '11px', color: 'var(--ui-text-tertiary)' }}>vs last month</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="subsection" style={{ marginTop: '48px' }}>
        <div className="subsection-title">System Origins</div>
        <div className="rule-box" style={{ background: 'var(--ui-surface-2)', borderLeftColor: 'var(--ui-accent-secondary)' }}>
          <p>
            Born in <strong>La Paz, Baja California Sur</strong>, TropicalUI draws its aesthetic spirit directly from its environment. It is deeply inspired by the coastal beaches, the relentless summer heat, and the vibrant, unapologetic colors of local tropical fruits like mangoes and pitahayas.
          </p>
          <p style={{ marginTop: '12px' }}>
            What started as an internal initiative for the <strong>Tropical Media Group</strong> to build cohesive developer tools evolved into something much larger. By merging the freshness of the tropics with the strict precision of semantic design tokens, TropicalUI became a standalone, universal "bible" for theming. It ensures that whether you are building a complex IDE or a consumer shopping app, the interface remains deeply customizable, structurally sound, and undeniably beautiful.
          </p>
        </div>
      </div>

    </section>
  );
};
