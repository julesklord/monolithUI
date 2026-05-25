
import { render } from '@testing-library/react';
import { StatusDot } from './StatusDot';
import { describe, it, expect } from 'vitest';

describe('StatusDot Component', () => {
  it('renders with default status "off"', () => {
    const { container } = render(<StatusDot />);
    const dot = container.firstChild as HTMLElement;
    expect(dot).toHaveClass('sdot');
    expect(dot).toHaveClass('off');
  });

  it('renders with custom status prop', () => {
    const { container } = render(<StatusDot status="warn" />);
    const dot = container.firstChild as HTMLElement;
    expect(dot).toHaveClass('sdot');
    expect(dot).toHaveClass('warn');
  });

  it('overrides status with "on" prop', () => {
    const { container } = render(<StatusDot status="off" on />);
    const dot = container.firstChild as HTMLElement;
    expect(dot).toHaveClass('sdot');
    expect(dot).toHaveClass('on');
  });

  describe('variant prop overrides', () => {
    it('sets status to "on" for variant "success"', () => {
      const { container } = render(<StatusDot variant="success" />);
      const dot = container.firstChild as HTMLElement;
      expect(dot).toHaveClass('on');
    });

    it('sets status to "on" for variant "on"', () => {
      const { container } = render(<StatusDot variant="on" />);
      const dot = container.firstChild as HTMLElement;
      expect(dot).toHaveClass('on');
    });

    it('sets status to "warn" for variant "warning"', () => {
      const { container } = render(<StatusDot variant="warning" />);
      const dot = container.firstChild as HTMLElement;
      expect(dot).toHaveClass('warn');
    });

    it('sets status to "err" for variant "danger"', () => {
      const { container } = render(<StatusDot variant="danger" />);
      const dot = container.firstChild as HTMLElement;
      expect(dot).toHaveClass('err');
    });

    it('sets status to "off" for variant "off"', () => {
      const { container } = render(<StatusDot status="on" variant="off" />);
      const dot = container.firstChild as HTMLElement;
      expect(dot).toHaveClass('off');
    });
  });

  it('applies custom className', () => {
    const { container } = render(<StatusDot className="custom-class" />);
    const dot = container.firstChild as HTMLElement;
    expect(dot).toHaveClass('sdot');
    expect(dot).toHaveClass('custom-class');
  });
});
