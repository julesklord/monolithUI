import React from 'react';
import { 
  IconLayersSubtract, 
  IconBounceRight, 
  IconSun, 
  IconContrast, 
  IconBrandOpenSource,
  IconRuler
} from '@tabler/icons-react';

export const Principles: React.FC = () => {
  const principles = [
    {
      icon: <IconLayersSubtract size={22} />,
      color: 'var(--ui-text-secondary)',
      border: 'var(--ui-border-hover)',
      title: 'Depth over flat',
      desc: 'Surfaces have weight. Use the 7-step surface ramp to create real visual hierarchy. Flat monochrome backgrounds are a failure of imagination — they cannot communicate elevation, focus, or state.'
    },
    {
      icon: <IconBounceRight size={22} />,
      color: 'var(--ui-accent-secondary)',
      border: 'var(--ui-accent-secondary-border)',
      title: 'Physics, not interpolation',
      desc: 'Nothing in nature moves at constant speed. Every animation uses a bezier curve that mimics real physical force — spring overshoot for entrances, ease-out for fades. ease-linear is banned except for looping spinners.'
    },
    {
      icon: <IconSun size={22} />,
      color: 'var(--ui-info)',
      border: 'var(--ui-info-border)',
      title: 'Orbital, not grid',
      desc: 'Navigation doesn\'t live in a sidebar. It orbits the content — a command bar on top, a floating dock on the side, drawers from below. The content always wins the prime real estate. The chrome always serves the core.'
    },
    {
      icon: <IconContrast size={22} />,
      color: 'var(--ui-warning)',
      border: 'var(--ui-warning-border)',
      title: 'Semantic over decorative',
      desc: 'Every color carries exactly one meaning. Primary = main action. Success = connected. Warning = caution. Danger = error. Secondary = metadata. Never decorate with semantic colors. Their power comes from their consistency.'
    },
    {
      icon: <IconRuler size={22} />,
      color: 'var(--ui-success)',
      border: 'var(--ui-success-border)',
      title: 'Measurable, not subjective',
      desc: 'Every decision in this system has a specification: motion uses exact bezier values, surfaces use exact hex steps, spacing follows a defined scale. "It looks good" is not an argument. If it\'s not in the spec, it\'s not in the system.'
    },
    {
      icon: <IconBrandOpenSource size={22} />,
      color: 'var(--ui-danger)',
      border: 'var(--ui-danger-border)',
      title: 'Brand-agnostic slots',
      desc: 'The system uses semantic token slots. Each project fills those slots with its brand colors via @layer brand. Components never reference brand colors directly — only semantic slots. The entire system rebrands with ~10 CSS variable overrides.'
    },
  ];

  return (
    <section className="doc-section" id="principles">
      <div className="section-eyebrow">02</div>
      <h2 className="section-title"><em>Principles</em></h2>
      <p className="section-desc">Six rules that govern every decision in this system. If a design choice conflicts with these, the choice is wrong — not the rule.</p>

      <div className="grid-2" style={{ gap: '12px' }}>
        {principles.map((p, i) => (
          <div
            key={i}
            className="surface-card elevated"
            style={{ borderTop: `3px solid ${p.border}` }}
          >
            <div style={{ color: p.color, marginBottom: '12px' }}>{p.icon}</div>
            <div style={{ fontSize: 'var(--ui-text-base)', fontWeight: 700, color: 'var(--ui-text-primary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em', fontFamily: 'var(--ui-font-mono)' }}>
              {String(i + 1).padStart(2, '0')} — {p.title}
            </div>
            <div style={{ fontSize: 'var(--ui-text-xs)', color: 'var(--ui-text-secondary)', lineHeight: 'var(--ui-leading-loose)' }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="warn-box" style={{ marginTop: '32px' }}>
        <p><strong>These are not guidelines — they are axioms.</strong> Guidelines can be broken when the situation warrants it. Axioms cannot. If your design breaks one of these principles, you are building a different system, not a variant of this one.</p>
      </div>
    </section>
  );
};
