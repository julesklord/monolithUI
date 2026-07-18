import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from './Logo';

describe('Logo Component', () => {
  it('renders correctly with default size', () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '100');
    expect(svg).toHaveAttribute('height', '100');
  });

  it('renders correctly with a custom number size', () => {
    const { container } = render(<Logo size={50} />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '50');
    expect(svg).toHaveAttribute('height', '50');
  });

  it('renders correctly with a custom string size', () => {
    const { container } = render(<Logo size="50%" />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '50%');
    expect(svg).toHaveAttribute('height', '50%');
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="custom-logo-class" />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveClass('custom-logo-class');
  });

  it('applies custom inline styles', () => {
    const { container } = render(<Logo style={{ marginTop: '10px', color: 'red' }} />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveStyle({ marginTop: '10px' });
  });
});
