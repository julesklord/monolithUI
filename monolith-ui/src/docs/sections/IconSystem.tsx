import React from 'react';
import { 
  IconExclamationCircle, 
  IconCircleCheck, 
  IconAlertTriangle, 
  IconInfoCircle,
  IconSearch,
  IconCommand,
  IconTerminal,
  IconCode,
  IconCpu,
  IconDatabase,
  IconCloud,
  IconSettings,
  IconBell,
  IconLock,
  IconHistory,
  IconDeviceDesktop,
  IconDeviceLaptop,
  IconDeviceMobile
} from '@tabler/icons-react';

export const IconSystem: React.FC = () => {
  const ICON_GROUPS = [
    {
      title: 'Status & Semantic',
      icons: [
        { Icon: IconCircleCheck, label: 'Success', use: 'Process completed, healthy state' },
        { Icon: IconInfoCircle, label: 'Info', use: 'System telemetry, general info' },
        { Icon: IconAlertTriangle, label: 'Warning', use: 'Non-critical error, caution' },
        { Icon: IconExclamationCircle, label: 'Danger', use: 'Critical failure, urgent' },
      ]
    },
    {
      title: 'Industrial & Technical',
      icons: [
        { Icon: IconTerminal, label: 'Console', use: 'TUI, Command line' },
        { Icon: IconCode, label: 'Code', use: 'Editor, source data' },
        { Icon: IconCpu, label: 'Engine', use: 'Compute, core processing' },
        { Icon: IconDatabase, label: 'Data', use: 'Storage, memory nodes' },
        { Icon: IconCloud, label: 'Network', use: 'Remote sync, API' },
      ]
    },
    {
      title: 'Interface Control',
      icons: [
        { Icon: IconCommand, label: 'Command', use: 'System action, keyhint' },
        { Icon: IconSearch, label: 'Search', use: 'Global lookup' },
        { Icon: IconSettings, label: 'System', use: 'Configuration' },
        { Icon: IconBell, label: 'Signals', use: 'Notifications' },
        { Icon: IconLock, label: 'Security', use: 'Auth, permissions' },
        { Icon: IconHistory, label: 'Logs', use: 'Session history' },
      ]
    }
  ];

  return (
    <section className="doc-section" id="icon-system">
      <div className="section-eyebrow">06</div>
      <h2 className="section-title">Icon <em>System</em></h2>
      <p className="section-desc">Strict geometry using <strong>Tabler Icons</strong>. Icons must use a consistent 1.5px stroke weight (2px for status) and follow the 14px-32px scale.</p>

      <div className="rule-box secondary">
        <p><strong>Industrial Stroke Rule //</strong> Do not use filled icons. Only use outlined icons with squared caps and miter joins to maintain the architectural 'blueprint' feel.</p>
      </div>

      {ICON_GROUPS.map((group, idx) => (
        <div className="subsection" key={idx}>
          <div className="subsection-title">{group.title}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {group.icons.map((item, i) => (
              <div key={i} className="surface-card" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ padding: '12px', background: 'var(--ui-surface-2)', borderRadius: 'var(--ui-r-sm)', color: 'var(--brand-primary)', boxShadow: 'var(--ui-inset-shallow)' }}>
                  <item.Icon size={20} stroke={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, fontFamily: 'var(--ui-font-mono)', color: 'var(--ui-text-primary)' }}>{item.label}</div>
                  <div style={{ fontSize: '10px', color: 'var(--ui-text-tertiary)', marginTop: '2px' }}>{item.use}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="subsection">
        <div className="subsection-title">Platform Assets</div>
        <div className="canvas" style={{ display: 'flex', gap: '40px', padding: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
           <div style={{ textAlign: 'center' }}>
              <IconDeviceDesktop size={48} stroke={1} style={{ opacity: 0.5, marginBottom: '12px' }} />
              <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)' }}>STATION_X64</div>
           </div>
           <div style={{ textAlign: 'center' }}>
              <IconDeviceLaptop size={48} stroke={1} style={{ opacity: 0.5, marginBottom: '12px' }} />
              <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)' }}>STATION_MOBILE_LAB</div>
           </div>
           <div style={{ textAlign: 'center' }}>
              <IconDeviceMobile size={48} stroke={1} style={{ opacity: 0.5, marginBottom: '12px' }} />
              <div style={{ fontSize: '10px', fontFamily: 'var(--ui-font-mono)' }}>FIELD_TRANSCEIVER</div>
           </div>
        </div>
      </div>
    </section>
  );
};
