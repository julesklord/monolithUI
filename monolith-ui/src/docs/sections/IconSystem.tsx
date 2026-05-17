import React from 'react';
import { 
  IconBox, 
  IconGridDots, 
  IconVector, 
  IconLineHeight, 
  IconBorderAll, 
  IconCircleFilled, 
  IconSquareRoundedFilled,
  IconBrandTabler
} from '@tabler/icons-react';

export const IconSystem: React.FC = () => {
  return (
    <section className="doc-section" id="icons">
      <div className="section-eyebrow">06</div>
      <h2 className="section-title">Icon <em>System</em></h2>
      <p className="section-desc">A rigid, industrial iconography language. Icons are not decorative illustrations; they are functional components of the machine interface.</p>

      <div className="subsection">
        <div className="subsection-title">Construction Rules</div>
        <div className="canvas grid2" style={{ gap: '20px' }}>
          <div className="surface-card">
            <div style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}><IconVector size={24} /></div>
            <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>STRICT GEOMETRY</div>
            <p style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.6 }}>
              Use <span className="icode">stroke-linecap: square</span> and <span className="icode">stroke-linejoin: miter</span>. Avoid rounded caps. Every icon must feel like a technical drawing.
            </p>
          </div>
          <div className="surface-card">
            <div style={{ color: 'var(--ui-accent-secondary)', marginBottom: '12px' }}><IconLineHeight size={24} /></div>
            <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>STROKE WEIGHT</div>
            <p style={{ fontSize: '12px', color: 'var(--ui-text-secondary)', lineHeight: 1.6 }}>
              Standard weight is <span className="icode">1.5px</span> for 24px icons. Increase to <span className="icode">2px</span> for high-emphasis system status indicators.
            </p>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Size Matrix</div>
        <div className="canvas row" style={{ gap: '32px', alignItems: 'flex-end', padding: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <IconBox size={14} stroke={1.5} />
            <div style={{ fontSize: '9px', marginTop: '8px', color: 'var(--ui-text-disabled)' }}>14px (Micro)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconBox size={18} stroke={1.5} />
            <div style={{ fontSize: '9px', marginTop: '8px', color: 'var(--ui-text-disabled)' }}>18px (Compact)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconBox size={24} stroke={1.5} />
            <div style={{ fontSize: '9px', marginTop: '8px', color: 'var(--ui-text-disabled)' }}>24px (Base)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconBox size={32} stroke={2} />
            <div style={{ fontSize: '9px', marginTop: '8px', color: 'var(--ui-text-disabled)' }}>32px (Header)</div>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Library Integration</div>
        <div className="rule-box">
          <p>
            We utilize <strong>@tabler/icons-react</strong> as the base engine. However, we force-override their default soft rendering via global CSS to match our industrial specification.
          </p>
        </div>
        <div className="canvas" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <IconGridDots size={20} />
          <IconBorderAll size={20} />
          <IconCircleFilled size={20} />
          <IconSquareRoundedFilled size={20} />
          <IconBrandTabler size={20} />
        </div>
      </div>
    </section>
  );
};
