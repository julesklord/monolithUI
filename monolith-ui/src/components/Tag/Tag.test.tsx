import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';
import { describe, it, expect } from 'vitest';

describe('Tag component', () => {
  it('renders children correctly', () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('applies the default variant (primary)', () => {
    render(<Tag>Default</Tag>);
    const tagElement = screen.getByText('Default');
    expect(tagElement).toHaveClass('tag');
    expect(tagElement).toHaveClass('primary');
  });

  it('applies specific variants correctly', () => {
    const variants = ['secondary', 'success', 'warning'] as const;

    variants.forEach(variant => {
      const { unmount } = render(<Tag variant={variant}>{variant}</Tag>);
      const tagElement = screen.getByText(variant);
      expect(tagElement).toHaveClass('tag');
      expect(tagElement).toHaveClass(variant);
      unmount();
    });
  });

  it('merges custom className correctly', () => {
    render(<Tag className="custom-class">Custom</Tag>);
    const tagElement = screen.getByText('Custom');
    expect(tagElement).toHaveClass('tag');
    expect(tagElement).toHaveClass('primary'); // default variant
    expect(tagElement).toHaveClass('custom-class');
  });
});
