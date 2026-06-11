import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dock, DockButton, DockDivider, DockPanel } from './Dock';

describe('Dock', () => {
  it('renders children correctly', () => {
    render(
      <Dock>
        <div data-testid="child">Child Content</div>
      </Dock>
    );
    expect(screen.getByTestId('child')).toBeDefined();
  });

  it('applies default position and variant classes', () => {
    const { container } = render(
      <Dock>
        <div>Content</div>
      </Dock>
    );
    const dockElement = container.firstChild as HTMLElement;
    expect(dockElement.className).toContain('dock');
    expect(dockElement.className).toContain('dock-right');
    expect(dockElement.className).toContain('dock-floating');
  });

  it('applies custom position and variant classes', () => {
    const { container } = render(
      <Dock position="left" variant="anchored">
        <div>Content</div>
      </Dock>
    );
    const dockElement = container.firstChild as HTMLElement;
    expect(dockElement.className).toContain('dock-left');
    expect(dockElement.className).toContain('dock-anchored');
  });

  it('applies custom className and style', () => {
    const { container } = render(
      <Dock className="custom-class" style={{ zIndex: 100 }}>
        <div>Content</div>
      </Dock>
    );
    const dockElement = container.firstChild as HTMLElement;
    expect(dockElement.className).toContain('custom-class');
    expect(dockElement.style.zIndex).toBe('100');
  });
});

describe('DockButton', () => {
  it('renders correctly with an icon', () => {
    render(<DockButton icon={<span data-testid="icon">Icon</span>} />);
    expect(screen.getByTestId('icon')).toBeDefined();
  });

  it('applies active class when active prop is true', () => {
    const { container } = render(<DockButton icon={<span>Icon</span>} active />);
    expect((container.firstChild as HTMLElement).className).toContain('active');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<DockButton icon={<span>Icon</span>} onClick={handleClick} />);
    fireEvent.click(screen.getByText('Icon').parentElement!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when onClick is undefined', () => {
    render(<DockButton icon={<span>Icon</span>} />);
    fireEvent.click(screen.getByText('Icon').parentElement!);
  });

  it('renders label and badge when provided', () => {
    const { container } = render(
      <DockButton icon={<span>Icon</span>} label="Test Label" badge />
    );
    expect(screen.getByText('Test Label')).toBeDefined();
    expect(container.querySelector('.dock-badge')).toBeDefined();
  });

  it('uses tooltip or label for title attribute', () => {
    const { container: container1 } = render(
      <DockButton icon={<span>Icon</span>} label="Label" />
    );
    expect((container1.firstChild as HTMLElement).getAttribute('title')).toBe('Label');

    const { container: container2 } = render(
      <DockButton icon={<span>Icon</span>} label="Label" tooltip="Tooltip" />
    );
    expect((container2.firstChild as HTMLElement).getAttribute('title')).toBe('Tooltip');
  });
});

describe('DockDivider', () => {
  it('renders a divider element', () => {
    const { container } = render(<DockDivider />);
    expect(container.querySelector('.dock-sep')).toBeDefined();
  });
});

describe('DockPanel', () => {
  it('renders children correctly', () => {
    render(
      <DockPanel>
        <div data-testid="panel-content">Panel Content</div>
      </DockPanel>
    );
    expect(screen.getByTestId('panel-content')).toBeDefined();
  });

  it('renders title and close button when provided', () => {
    const handleClose = vi.fn();
    const { container } = render(
      <DockPanel title="Panel Title" onClose={handleClose}>
        <div>Content</div>
      </DockPanel>
    );
    expect(screen.getByText('Panel Title')).toBeDefined();

    const closeButton = container.querySelector('.dock-panel-close');
    expect(closeButton).toBeDefined();

    fireEvent.click(closeButton!);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not render header if no title or onClose', () => {
    const { container } = render(
      <DockPanel>
        <div>Content</div>
      </DockPanel>
    );
    const header = container.querySelector('.dock-panel-header');
    expect(header).toBeNull();
  });

  it('applies custom width, height, and variant', () => {
    const { container } = render(
      <DockPanel width="300px" height={400} variant="anchored-left">
        <div>Content</div>
      </DockPanel>
    );
    const panelElement = container.firstChild as HTMLElement;
    expect(panelElement.className).toContain('dock-panel-anchored-left');
    expect(panelElement.style.width).toBe('300px');
    expect(panelElement.style.height).toBe('400px');
  });
});
