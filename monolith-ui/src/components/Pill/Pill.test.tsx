import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Pill } from './Pill';

describe('Pill Component', () => {
  it('renders children correctly', () => {
    render(<Pill>Test Content</Pill>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the default neutral variant class', () => {
    render(<Pill>Default Pill</Pill>);
    const pillElement = screen.getByText('Default Pill');
    expect(pillElement).toHaveClass('pill');
    expect(pillElement).toHaveClass('neutral');
  });

  it('applies the specified variant class', () => {
    const variants: Array<'primary' | 'secondary' | 'success' | 'warning' | 'danger'> = [
      'primary', 'secondary', 'success', 'warning', 'danger'
    ];

    variants.forEach(variant => {
      render(<Pill variant={variant}>{variant} Pill</Pill>);
      const pillElement = screen.getByText(`${variant} Pill`);
      expect(pillElement).toHaveClass('pill');
      expect(pillElement).toHaveClass(variant);
    });
  });

  it('renders an icon when provided', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;
    render(<Pill icon={<MockIcon />}>With Icon</Pill>);

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(document.querySelector('.pill-icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Pill className="custom-class">Custom Class Pill</Pill>);
    const pillElement = screen.getByText('Custom Class Pill');
    expect(pillElement).toHaveClass('pill');
    expect(pillElement).toHaveClass('custom-class');
  });
});
