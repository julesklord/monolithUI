import React from 'react';

export const TokenSpec: React.FC = () => {
  return (
    <section className="doc-section" id="spec">
      <div className="section-eyebrow">09</div>
      <h2 className="section-title">Token <em>Spec</em></h2>
      <p className="section-desc">Complete reference for all semantic tokens. These are the values components must use. Never hardcode hex values in component CSS.</p>

      <div className="subsection">
        <div className="subsection-title">Surface tokens</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Dark value</th><th>Light value</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-surface-0</td><td className="td-val">#0d1017</td><td className="td-val">#f0f2f5</td><td className="td-use">Dock bg, deepest layer</td></tr>
            <tr><td className="td-token">--ui-surface-1</td><td className="td-val">#12151c</td><td className="td-val">#e8eaed</td><td className="td-use">Command bar, nav</td></tr>
            <tr><td className="td-token">--ui-surface-2</td><td className="td-val">#161920</td><td className="td-val">#e2e5e9</td><td className="td-use">Sidebar, secondary panels</td></tr>
            <tr><td className="td-token">--ui-surface-3</td><td className="td-val">#1a1d24</td><td className="td-val">#ffffff</td><td className="td-use">Root app background</td></tr>
            <tr><td className="td-token">--ui-surface-4</td><td className="td-val">#1e2229</td><td className="td-val">#f8f9fa</td><td className="td-use">Chat canvas, drawers, cards</td></tr>
            <tr><td className="td-token">--ui-surface-5</td><td className="td-val">#23272f</td><td className="td-val">#f1f3f4</td><td className="td-use">Hover states, elevated cards</td></tr>
            <tr><td className="td-token">--ui-surface-6</td><td className="td-val">#2a2e38</td><td className="td-val">#e8eaed</td><td className="td-use">Active hover, border-adjacent</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Motion tokens</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-ease-spring</td><td className="td-val">cubic-bezier(0.34, 1.56, 0.64, 1)</td><td className="td-use">Entering elements, spring physics</td></tr>
            <tr><td className="td-token">--ui-ease-out</td><td className="td-val">cubic-bezier(0.16, 1, 0.3, 1)</td><td className="td-use">Fades, backdrop, page transitions</td></tr>
            <tr><td className="td-token">--ui-ease-default</td><td className="td-val">cubic-bezier(0.4, 0, 0.2, 1)</td><td className="td-use">Hover colors, border changes</td></tr>
            <tr><td className="td-token">--ui-dur-instant</td><td className="td-val">60ms</td><td className="td-use">Focus rings, immediate feedback</td></tr>
            <tr><td className="td-token">--ui-dur-fast</td><td className="td-val">110ms</td><td className="td-use">Hover state transitions</td></tr>
            <tr><td className="td-token">--ui-dur-base</td><td className="td-val">190ms</td><td className="td-use">Toggle, color change</td></tr>
            <tr><td className="td-token">--ui-dur-slow</td><td className="td-val">320ms</td><td className="td-use">Theme switch, backdrop</td></tr>
            <tr><td className="td-token">--ui-dur-drawer</td><td className="td-val">370ms</td><td className="td-use">Drawer open/close</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Radius tokens</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
            <tr><td className="td-token">--ui-r-xs</td><td className="td-val">3px</td><td className="td-use">Tags, tool card, code inline</td></tr>
            <tr><td className="td-token">--ui-r-sm</td><td className="td-val">5px</td><td className="td-use">Small buttons, sidebar links</td></tr>
            <tr><td className="td-token">--ui-r-md</td><td className="td-val">7px</td><td className="td-use">Buttons, command segments, items</td></tr>
            <tr><td className="td-token">--ui-r-lg</td><td className="td-val">10px</td><td className="td-use">Cards, inputs, bubbles, MCP cards</td></tr>
            <tr><td className="td-token">--ui-r-xl</td><td className="td-val">13px</td><td className="td-use">Command bar, canvas, drawer top</td></tr>
            <tr><td className="td-token">--ui-r-2xl</td><td className="td-val">18px</td><td className="td-use">Dock floating panel</td></tr>
            <tr><td className="td-token">--ui-r-pill</td><td className="td-val">999px</td><td className="td-use">Pills, status indicators</td></tr>
          </tbody>
        </table>
      </div>

      <div className="subsection">
        <div className="subsection-title">Brand slot reference</div>
        <table className="spec-table">
          <tbody>
            <tr><th>Slot</th><th>Derived tokens</th><th>How to set</th></tr>
            <tr><td className="td-token">--brand-primary</td><td className="td-val">--ui-accent-primary</td><td className="td-use">Base brand color (saturated)</td></tr>
            <tr><td className="td-token">--brand-primary-light</td><td className="td-val">--ui-accent-primary-light</td><td className="td-use">Tinted for text on dark surfaces</td></tr>
            <tr><td className="td-token">--brand-primary-bg</td><td className="td-val">--ui-accent-primary-bg</td><td className="td-use">primary color at ~12% opacity</td></tr>
            <tr><td className="td-token">--brand-primary-border</td><td className="td-val">--ui-accent-primary-border</td><td className="td-use">primary color at ~25% opacity</td></tr>
            <tr><td className="td-token">--brand-primary-glow</td><td className="td-val">--ui-accent-primary-glow</td><td className="td-use">primary color at ~18% opacity</td></tr>
            <tr><td className="td-token">--brand-secondary</td><td className="td-val">--ui-accent-secondary</td><td className="td-use">Complementary color to primary</td></tr>
            <tr><td className="td-token">--brand-gradient</td><td className="td-val">--ui-gradient-primary</td><td className="td-use">linear-gradient primary?secondary</td></tr>
            <tr><td className="td-token">--brand-font-sans</td><td className="td-val">--ui-font-sans</td><td className="td-use">Optional — override UI font</td></tr>
            <tr><td className="td-token">--brand-font-mono</td><td className="td-val">--ui-font-mono</td><td className="td-use">Optional — override mono font</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
