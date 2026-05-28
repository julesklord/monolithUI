import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('passes standard HTML input attributes to the input element', () => {
    render(<Input type="password" disabled data-testid="my-input" />);
    const input = screen.getByTestId('my-input');
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toBeDisabled();
  });

  it('renders left and right icons when provided', () => {
    render(
      <Input
        leftIcon={<span data-testid="left-icon">Left</span>}
        rightIcon={<span data-testid="right-icon">Right</span>}
      />
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('renders a hint when provided', () => {
    render(<Input hint="This is a hint message" />);
    expect(screen.getByText('This is a hint message')).toBeInTheDocument();
    expect(screen.getByText('This is a hint message')).toHaveClass('input-hint');
  });

  it('applies error class when error prop is true', () => {
    const { container } = render(<Input error={true} />);
    expect(container.firstChild).toHaveClass('gd-input-wrap');
    expect(container.firstChild).toHaveClass('error');
  });

  it('applies error class and invalid span when status is invalid', () => {
    const { container } = render(<Input status="invalid" />);
    expect(container.firstChild).toHaveClass('gd-input-wrap');
    expect(container.firstChild).toHaveClass('error');
    const invalidSpan = screen.getByText('invalid');
    expect(invalidSpan).toBeInTheDocument();
    expect(invalidSpan.tagName).toBe('SPAN');
  });

  it('applies custom className to the wrapper', () => {
    const { container } = render(<Input className="my-custom-class" />);
    expect(container.firstChild).toHaveClass('gd-input-wrap');
    expect(container.firstChild).toHaveClass('my-custom-class');
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} data-testid="test-input" />);

    const input = screen.getByTestId('test-input');
    await user.type(input, 'hello');

    expect(input).toHaveValue('hello');
    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
