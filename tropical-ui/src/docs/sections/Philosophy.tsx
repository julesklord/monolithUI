import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section className="doc-section" id="philosophy">
      <div className="section-eyebrow">01b</div>
      <h2 className="section-title">Philosophy</h2>
      <div className="rule-box">
        <p><strong>Dark is not black.</strong> The darkest surface in this system is <span className="icode">#0d1017</span>, not <span className="icode">#000000</span>. Pure black kills depth. The 7-step ramp goes from near-black to barely-raised, creating a perception of natural light falling on surfaces.</p>
      </div>
      <div className="rule-box">
        <p><strong>Density is not clutter.</strong> The command bar is dense by design. A developer looking at it sees their entire application state at a glance. Every segment is actionable. This is professional density, not noise.</p>
      </div>
      <div className="rule-box">
        <p><strong>The drawer is the new panel.</strong> Panels that slide from the side are 2015. Drawers that emerge from below with spring physics feel native on both desktop and mobile, and they return full canvas width to the content when closed.</p>
      </div>
      <div className="warn-box">
        <p><strong>When in doubt, don't add chrome.</strong> Every border, every shadow, every separator is a cost. Only add visual elements that carry information or create necessary separation. Decorative lines are noise.</p>
      </div>
    </section>
  );
};
