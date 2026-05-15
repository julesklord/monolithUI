import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  IconCompass, IconBulb, IconPalette, IconTypography, 
  IconBounceRight, IconStack2,
  IconTerminal2,
  IconCards,
  IconBrandOpenSource, IconTable
} from '@tabler/icons-react';

export const Sidebar: React.FC = () => {
  const sections = [
    { 
      title: 'Overview', 
      items: [
        { id: '', label: 'Introduction', icon: <IconCompass size={16} /> },
        { id: 'principles', label: 'Principles', icon: <IconCompass size={16} /> },
        { id: 'philosophy', label: 'Philosophy', icon: <IconBulb size={16} /> },
      ]
    },
    { 
      title: 'Foundations', 
      items: [
        { id: 'color', label: 'Color System', icon: <IconPalette size={16} /> },
        { id: 'typography', label: 'Typography', icon: <IconTypography size={16} /> },
        { id: 'motion', label: 'Motion', icon: <IconBounceRight size={16} /> },
      ]
    },
    { 
      title: 'Layout', 
      items: [
        { id: 'layout', label: 'Orbital Layout', icon: <IconStack2 size={16} /> },
      ]
    },
    { 
      title: 'Components', 
      items: [
        { id: 'components', label: 'All Components', icon: <IconCards size={16} /> },
      ]
    },
    { 
      title: 'Interfaces', 
      items: [
        { id: 'tui', label: 'TUI Translation', icon: <IconTerminal2 size={16} /> },
      ]
    },
    { 
      title: 'Theming', 
      items: [
        { id: 'branding', label: 'Brand System', icon: <IconBrandOpenSource size={16} /> },
      ]
    },
    { 
      title: 'Reference', 
      items: [
        { id: 'spec', label: 'Token Spec', icon: <IconTable size={16} /> },
      ]
    }
  ];

  return (
    <aside className="doc-sidebar">
      {sections.map(section => (
        <div key={section.title} className="sidebar-section">
          <div className="sidebar-section-title">{section.title}</div>
          {section.items.map(item => (
            <NavLink 
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              end={item.id === ''}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
};
