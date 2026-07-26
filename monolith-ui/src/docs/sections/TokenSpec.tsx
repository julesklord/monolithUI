import React from 'react';

export const TokenSpec: React.FC = () => {
  return (
    <section className="doc-section" id="spec">
      <div className="section-eyebrow">11</div>
      <h2 className="section-title">Token <em>Spec</em></h2>
      <p className="section-desc">Complete reference for all semantic tokens. These are the exact values used in the system. Never hardcode hex values in component CSS — always use semantic slots.</p>

      <div className="subsection">
        <div className="subsection-title">Surface tokens · Dark / Light</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Dark default</th><th>Light default</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-surface-0</td><td className="td-val">#080808</td><td className="td-val">#c2c2c2</td><td className="td-use">Deepest layer, dock bg, modal backdrop</td></tr>
            <tr><td className="td-token">--ui-surface-1</td><td className="td-val">#0f0f0f</td><td className="td-val">#cbcbcb</td><td className="td-use">Command bar, nav, sidebar</td></tr>
            <tr><td className="td-token">--ui-surface-2</td><td className="td-val">#161616</td><td className="td-val">#d4d4d4</td><td className="td-use">Secondary panels, tab bars</td></tr>
            <tr><td className="td-token">--ui-surface-3</td><td className="td-val">#1e1e1e</td><td className="td-val">#dedede</td><td className="td-use">Root app background, concrete canvas</td></tr>
            <tr><td className="td-token">--ui-surface-4</td><td className="td-val">#262626</td><td className="td-val">#e8e8e8</td><td className="td-use">Main canvas, drawers, cards</td></tr>
            <tr><td className="td-token">--ui-surface-5</td><td className="td-val">#303030</td><td className="td-val">#f0f0f0</td><td className="td-use">Hover states, elevated cards</td></tr>
            <tr><td className="td-token">--ui-surface-6</td><td className="td-val">#3a3a3a</td><td className="td-val">#f8f8f8</td><td className="td-use">Active hover, border-adjacent elements</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Radius tokens · Sanded Industrial</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-r-xs</td><td className="td-val">3px</td><td className="td-use">Labels, micro-keys, small tags</td></tr>
            <tr><td className="td-token">--ui-r-sm</td><td className="td-val">4px</td><td className="td-use">Small buttons, command segments, sidebar links</td></tr>
            <tr><td className="td-token">--ui-r-md</td><td className="td-val">6px</td><td className="td-use">Standard buttons, items, cards</td></tr>
            <tr><td className="td-token">--ui-r-lg</td><td className="td-val">8px</td><td className="td-use">Containers, large panels, drawer handles</td></tr>
            <tr><td className="td-token">--ui-r-xl</td><td className="td-val">12px</td><td className="td-use">Main canvas corners</td></tr>
            <tr><td className="td-token">--ui-r-pill</td><td className="td-val">999px</td><td className="td-use">Status indicators, round badges</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Motion tokens · Mechanical Resistance</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-ease-spring</td><td className="td-val">cubic-bezier(0.2, 1, 0.3, 1)</td><td className="td-use">Precise mechanical entry, no overshoot</td></tr>
            <tr><td className="td-token">--ui-dur-fast</td><td className="td-val">160ms</td><td className="td-use">Snappy tactile feedback</td></tr>
            <tr><td className="td-token">--ui-dur-base</td><td className="td-val">240ms</td><td className="td-use">Standard component movement</td></tr>
            <tr><td className="td-token">--ui-dur-slow</td><td className="td-val">380ms</td><td className="td-use">Large surface transitions</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Tactile Depth · 2010 Skeuo-Modernism</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-inset-shallow</td><td className="td-val">inset 0 1px 2px rgba(0,0,0,0.2)</td><td className="td-use">Embossed feel for cards and active tabs</td></tr>
            <tr><td className="td-token">--ui-inset-deep</td><td className="td-val">inset 0 2px 4px rgba(0,0,0,0.4)</td><td className="td-use">Engraved feel for active buttons/inputs</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Z-index layers · Orbital stack</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Value</th><th>Layer</th></tr>
            <tr><td className="td-token">--ui-z-base</td><td className="td-val">1</td><td className="td-use">The Core — main content area</td></tr>
            <tr><td className="td-token">--ui-z-raised</td><td className="td-val">10</td><td className="td-use">Raised elements within content</td></tr>
            <tr><td className="td-token">--ui-z-sticky</td><td className="td-val">20</td><td className="td-use">Inner Orbit — toolbars, sticky nav</td></tr>
            <tr><td className="td-token">--ui-z-drawer</td><td className="td-val">30</td><td className="td-use">Bottom drawers, slide-out panels</td></tr>
            <tr><td className="td-token">--ui-z-dock</td><td className="td-val">40</td><td className="td-use">Outer Orbit — global nav, dock</td></tr>
            <tr><td className="td-token">--ui-z-tooltip</td><td className="td-val">50</td><td className="td-use">Contextual tooltips</td></tr>
            <tr><td className="td-token">--ui-z-modal</td><td className="td-val">60</td><td className="td-use">Deep Space — modals, urgent overlays</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Brand slot reference · ~10 variables to rebrand</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Brand Slot</th><th>→ Semantic Token</th><th>Description</th></tr>
            <tr><td className="td-token">--brand-primary</td><td className="td-val">--ui-accent-primary</td><td className="td-use">Base brand color (saturated, full opacity)</td></tr>
            <tr><td className="td-token">--brand-primary-text</td><td className="td-val">--</td><td className="td-use">Text on primary bg (dark or light for contrast)</td></tr>
            <tr><td className="td-token">--brand-primary-light</td><td className="td-val">--ui-accent-primary-light</td><td className="td-use">Tinted variant for text on dark surfaces</td></tr>
            <tr><td className="td-token">--brand-primary-bg</td><td className="td-val">--ui-accent-primary-bg</td><td className="td-use">Primary color at ~12% opacity for tint areas</td></tr>
            <tr><td className="td-token">--brand-primary-border</td><td className="td-val">--ui-accent-primary-border</td><td className="td-use">Primary color at ~25% opacity for borders</td></tr>
            <tr><td className="td-token">--brand-primary-glow</td><td className="td-val">--ui-accent-primary-glow</td><td className="td-use">Primary color at ~18% opacity for glows</td></tr>
            <tr><td className="td-token">--brand-secondary</td><td className="td-val">--ui-accent-secondary</td><td className="td-use">Complementary color to primary</td></tr>
            <tr><td className="td-token">--brand-secondary-bg</td><td className="td-val">--ui-accent-secondary-bg</td><td className="td-use">Secondary at ~12% opacity</td></tr>
            <tr><td className="td-token">--brand-gradient</td><td className="td-val">--ui-gradient-primary</td><td className="td-use">linear-gradient(primary → secondary)</td></tr>
            <tr><td className="td-token">--brand-font-sans</td><td className="td-val">--ui-font-sans</td><td className="td-use">Optional: override UI sans font</td></tr>
            <tr><td className="td-token">--brand-font-mono</td><td className="td-val">--ui-font-mono</td><td className="td-use">Optional: override monospace font</td></tr>
          </tbody>
        </table>
        <div className="canvas-label">Surface variables (--ui-surface-0…6) are strictly neutral grayscale across all themes and color schemes to guarantee background neutrality.</div>
      </div>

      <div className="subsection">
        <div className="subsection-title">Type scale · 9 steps</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-text-2xs</td><td className="td-val">9.5px</td><td className="td-use">Badges, timestamps, fine print, canvas labels</td></tr>
            <tr><td className="td-token">--ui-text-xs</td><td className="td-val">10.5px</td><td className="td-use">Command segments, sidebar links, tags</td></tr>
            <tr><td className="td-token">--ui-text-sm</td><td className="td-val">11.5px</td><td className="td-use">Session meta, MCP type, mono values</td></tr>
            <tr><td className="td-token">--ui-text-base</td><td className="td-val">13px</td><td className="td-use">Chat messages, card content, form labels</td></tr>
            <tr><td className="td-token">--ui-text-md</td><td className="td-val">14px</td><td className="td-use">Drawer titles, panel headers, button text</td></tr>
            <tr><td className="td-token">--ui-text-lg</td><td className="td-val">16px</td><td className="td-use">Section titles, page headers</td></tr>
            <tr><td className="td-token">--ui-text-xl</td><td className="td-val">20px</td><td className="td-use">Hero subtitles</td></tr>
            <tr><td className="td-token">--ui-text-2xl</td><td className="td-val">26px</td><td className="td-use">Page titles</td></tr>
            <tr><td className="td-token">--ui-text-3xl</td><td className="td-val">34px</td><td className="td-use">Display serif moments</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
