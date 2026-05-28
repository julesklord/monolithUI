import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section className="doc-section" id="philosophy">
      <div className="section-eyebrow">03</div>
      <h2 className="section-title">Philosophy</h2>
      <p className="section-desc">The design decisions that look arbitrary until you understand why they exist. These are not preferences — they are load-bearing truths derived from building hundreds of real interfaces.</p>

      <div className="subsection">
        <div className="subsection-title">On surfaces and depth</div>
        <div className="rule-box">
          <p><strong>Dark is not black.</strong> The darkest surface in this system is <span className="icode">--ui-surface-0</span> (#0a0c10), not <span className="icode">#000000</span>. Pure black kills depth perception. The 7-step ramp from near-black to barely-raised creates the illusion of natural light falling on physical surfaces — the human eye reads this as weight and structure.</p>
        </div>
        <div className="rule-box">
          <p><strong>Surface 3 is not background.</strong> It is the canvas — the primary working area. Surface 0 is the floor beneath everything. This distinction matters because UI elements need somewhere to sink into when they are inactive, and somewhere to rise toward when they are active.</p>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">On density and information</div>
        <div className="rule-box">
          <p><strong>Density is not clutter.</strong> The system is designed to handle high information density gracefully. A professional user looking at a complex interface should see their entire application state at a glance. Whether it's a sprawling e-commerce filter, a data-heavy analytics dashboard, or a developer's command bar, every segment remains legible and actionable. This is professional density — not noise.</p>
        </div>
        <div className="warn-box">
          <p><strong>Whitespace is earned, not default.</strong> Empty space must serve a purpose — it should separate logically distinct sections, not simply exist because a designer was afraid of content. Over-padded interfaces feel like they are hiding how little information they actually contain.</p>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">On navigation and chrome</div>
        <div className="rule-box">
          <p><strong>The drawer is the new panel.</strong> Panels that slide from the side are 2015. Drawers that emerge from below with spring physics feel native on both desktop and mobile, and they return full canvas width to the content when closed. The content always wins the prime real estate.</p>
        </div>
        <div className="warn-box">
          <p><strong>When in doubt, don't add chrome.</strong> Every border, every shadow, every separator is a cost — it takes visual attention away from content. Only add visual elements that carry information or create necessary separation. Decorative lines are noise. If you can remove it and the interface still communicates clearly, remove it.</p>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">On color and meaning</div>
        <div className="error-box">
          <p><strong>Color carries weight.</strong> In this system, green always means "connected / success." Amber always means "caution / in-progress." Red always means "error / destructive." These meanings are non-negotiable across every brand. The brand accent color (primary) changes. The semantic colors do not. Using green for decoration dilutes its meaning system-wide.</p>
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-title">On motion and interaction</div>
        <div className="rule-box">
          <p><strong>Physics makes interfaces feel real.</strong> A button that scales down on press with spring physics feels like you're actually pressing something. A drawer that opens with overshoot then settles feels like it has mass. These are sub-100ms differences in animation that don't consciously register, but they are the entire difference between an interface that feels <em>built</em> and one that feels <em>assembled from templates.</em></p>
        </div>
      </div>
    </section>
  );
};
