import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { BrandTheming } from './BrandTheming';

describe('BrandTheming', () => {
  it('renders the component with current brand selected', () => {
    render(<BrandTheming brand="brand-oxidized-gold" handleBrandClick={vi.fn()} />);

    // Check if component renders
    expect(screen.getByRole('heading', { name: /Brand System/i })).toBeInTheDocument();

    // Check if active brand has proper classes and attributes
    const activeBrand = screen.getByRole('tab', { name: /Oxidized Gold/i });
    expect(activeBrand).toHaveClass('active');
    expect(activeBrand).toHaveAttribute('aria-selected', 'true');

    // Non-active brand
    const inactiveBrand = screen.getByRole('tab', { name: /Plasma Core/i });
    expect(inactiveBrand).not.toHaveClass('active');
    expect(inactiveBrand).toHaveAttribute('aria-selected', 'false');
  });

  it('triggers handleBrandClick on brand click', async () => {
    const handleBrandClick = vi.fn();
    const user = userEvent.setup();
    render(<BrandTheming brand="brand-plasma-core" handleBrandClick={handleBrandClick} />);

    const violetBrand = screen.getByRole('tab', { name: /Violet Reaction/i });
    await user.click(violetBrand);

    expect(handleBrandClick).toHaveBeenCalledWith('brand-violet-reaction');
    expect(handleBrandClick).toHaveBeenCalledTimes(1);
  });

  it('triggers handleBrandClick on Enter key', async () => {
    const handleBrandClick = vi.fn();
    const user = userEvent.setup();
    render(<BrandTheming brand="brand-plasma-core" handleBrandClick={handleBrandClick} />);

    const coolantBrand = screen.getByRole('tab', { name: /Coolant Liquid/i });
    coolantBrand.focus();
    await user.keyboard('{Enter}');

    expect(handleBrandClick).toHaveBeenCalledWith('brand-coolant-liquid');
    expect(handleBrandClick).toHaveBeenCalledTimes(1);
  });

  it('triggers handleBrandClick on Space key', async () => {
    const handleBrandClick = vi.fn();
    const user = userEvent.setup();
    render(<BrandTheming brand="brand-plasma-core" handleBrandClick={handleBrandClick} />);

    const criticalBrand = screen.getByRole('tab', { name: /Critical Mass/i });
    criticalBrand.focus();
    await user.keyboard(' ');

    expect(handleBrandClick).toHaveBeenCalledWith('brand-critical-mass');
    expect(handleBrandClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger handleBrandClick on other keys', async () => {
    const handleBrandClick = vi.fn();
    const user = userEvent.setup();
    render(<BrandTheming brand="brand-plasma-core" handleBrandClick={handleBrandClick} />);

    const criticalBrand = screen.getByRole('tab', { name: /Critical Mass/i });
    criticalBrand.focus();
    await user.keyboard('{Escape}');
    await user.keyboard('a');

    expect(handleBrandClick).not.toHaveBeenCalled();
  });
});
