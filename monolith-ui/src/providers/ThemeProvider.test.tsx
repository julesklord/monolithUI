import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeProvider';

const ThemeConsumer = () => {
  const { theme, setTheme, brand, setBrand } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <span data-testid="brand-value">{brand}</span>
      <button onClick={() => setTheme('light')}>Set Light Theme</button>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
      <button onClick={() => setBrand('brand-violet-reaction')}>Set Brand Violet</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    document.documentElement.className = '';
    document.documentElement.dataset.theme = '';
  });

  it('provides default theme and brand and updates document.documentElement', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    expect(screen.getByTestId('brand-value')).toHaveTextContent('brand-plasma-core');

    expect(document.documentElement.dataset.theme).toBe('');
    expect(document.documentElement).toHaveClass('brand-plasma-core');
  });

  it('updates theme correctly when setTheme is called', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Set Light Theme'));

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    expect(document.documentElement.dataset.theme).toBe('light');

    await user.click(screen.getByText('Set Dark Theme'));

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    expect(document.documentElement.dataset.theme).toBe('');
  });

  it('updates brand correctly and removes old brand classes', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass('brand-plasma-core');

    await user.click(screen.getByText('Set Brand Violet'));

    expect(screen.getByTestId('brand-value')).toHaveTextContent('brand-violet-reaction');
    expect(document.documentElement).not.toHaveClass('brand-plasma-core');
    expect(document.documentElement).toHaveClass('brand-violet-reaction');
  });

  it('throws an error if useTheme is used outside of ThemeProvider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<ThemeConsumer />)).toThrow('useTheme must be used within a ThemeProvider');

    consoleSpy.mockRestore();
  });
});
