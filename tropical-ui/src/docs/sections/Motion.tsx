import React from 'react';
import { 
  IconBounceRight, 
  IconArrowDownCircle, 
  IconMinus, 
  IconRotateClockwise, 
  IconDots 
} from '@tabler/icons-react';

export const Motion: React.FC = () => {
  return (
    <section className="doc-section" id="motion">
      <div className="section-eyebrow">08</div>
      <h2 className="section-title"><em>Motion</em></h2>
      <p className="section-desc">Physics-based animation is the primary differentiator of this system. Every curve is chosen to mimic a physical force. Never use ease-linear for anything a user interacts with.</p>

      <div className="subsection">
        <div className="subsection-title">Curve library</div>
        <div className="canvas col" style={{ padding: '20px 24px', gap: '0' }}>
          <div className="motion-row">
            <div className="motion-icon"><IconBounceRight size={20} /></div>
            <div className="motion-info">
              <div className="motion-name">Spring</div>
              <div className="motion-curve">cubic-bezier(0.34, 1.56, 0.64, 1)</div>
              <div className="motion-use">Drawers open · dock-btn hover (scale) · pills appear · send-btn press · any element entering the DOM</div>
            </div>
            <div className="motion-dur">360–420ms</div>
          </div>
          <div className="motion-row">
            <div className="motion-icon" style={{ background: 'var(--ui-accent-secondary-bg)', borderColor: 'var(--ui-accent-secondary-border)', color: 'var(--ui-accent-secondary)' }}><IconArrowDownCircle size={20} /></div>
            <div className="motion-info">
              <div className="motion-name">Ease Out</div>
              <div className="motion-curve">cubic-bezier(0.16, 1, 0.3, 1)</div>
              <div className="motion-use">Backdrop fade in · card appear · tooltip show · page transition · bubbles entering</div>
            </div>
            <div className="motion-dur">280–320ms</div>
          </div>
          <div className="motion-row">
            <div className="motion-icon" style={{ background: 'var(--ui-success-bg)', borderColor: 'var(--ui-success-border)', color: 'var(--ui-success-light)' }}><IconMinus size={20} /></div>
            <div className="motion-info">
              <div className="motion-name">Default</div>
              <div className="motion-curve">cubic-bezier(0.4, 0, 0.2, 1)</div>
              <div className="motion-use">Hover color transitions · border changes · toggle · background fade</div>
            </div>
            <div className="motion-dur">100–190ms</div>
          </div>
          <div className="motion-row">
            <div className="motion-icon" style={{ background: 'var(--ui-warning-bg)', borderColor: 'var(--ui-warning-border)', color: 'var(--ui-warning)' }}><IconRotateClockwise size={20} /></div>
            <div className="motion-info">
              <div className="motion-name">Linear (spinner only)</div>
              <div className="motion-curve">linear</div>
              <div className="motion-use">Loading spinner rotation · star logo spin. NEVER for interactive elements.</div>
            </div>
            <div className="motion-dur">600–900ms 8</div>
          </div>
          <div className="motion-row" style={{ borderBottom: 'none' }}>
            <div className="motion-icon" style={{ background: 'var(--ui-danger-bg)', borderColor: 'var(--ui-danger-border)', color: 'var(--ui-danger)' }}><IconDots size={20} /></div>
            <div className="motion-info">
              <div className="motion-name">Stagger</div>
              <div className="motion-curve">ease-in-out with 150ms delay per item</div>
              <div className="motion-use">List items appearing (sessions, MCP cards) · typing dots · skeleton loaders</div>
            </div>
            <div className="motion-dur">900ms 8</div>
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">The Spring rule</div>
        <div className="rule-box">
          <p>The <span className="icode">1.56</span> value in the spring curve's y2 parameter creates overshoot — the element goes slightly past its target then settles back. This is the physical behavior of a spring. It's the single most impactful detail that separates polished motion from generic CSS transitions. The overshoot is subtle (~3-4% past target) and lasts under 100ms. It should be felt, not seen.</p>
        </div>
        <div className="canvas" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>/* Spring — the correct way */</div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-success-light)' }}>transition: transform 360ms cubic-bezier(0.34, 1.56, 0.64, 1);</div>
          <div style={{ height: '8px' }}></div>
          <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-disabled)' }}>/* Banned — never use for UI interactions */</div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-danger)' }}>transition: transform 300ms linear; /* → */</div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-danger)' }}>transition: transform 300ms ease; /* → — same as ease-in-out */</div>
        </div>
      </div>
      <div className="subsection">
        <div className="subsection-title">Interactive test area</div>
        <p className="section-desc">Interact with these buttons to feel the difference between the physics engine and standard linear motion.</p>
        <div className="canvas row" style={{ gap: '16px' }}>
          <button className="btn primary" style={{ transition: 'transform 420ms var(--ui-ease-spring)' }}>
            SPRING_ACTION
          </button>
          <button className="btn secondary" style={{ transition: 'transform 320ms var(--ui-ease-out)' }}>
            EASE_OUT_ACTION
          </button>
          <button className="btn ghost" style={{ border: '1.5px solid var(--ui-border-default)' }}>
            DEFAULT_TRANSITION
          </button>
        </div>
        <div className="canvas-label">Try hovering or clicking to trigger the spring scaling effect</div>
      </div>
    </section>
  );
};
