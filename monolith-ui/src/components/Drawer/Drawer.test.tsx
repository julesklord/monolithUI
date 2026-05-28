import { render, screen, fireEvent } from "@testing-library/react";
import { Drawer } from "./Drawer";
import { describe, it, expect, vi } from "vitest";

describe("Drawer", () => {
  it("renders children when isOpen is true", () => {
    render(
      <Drawer isOpen={true} onClose={() => {}}>
        <div data-testid="child">Drawer Content</div>
      </Drawer>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it('does not apply "open" class when isOpen is false', () => {
    render(
      <Drawer isOpen={false} onClose={() => {}}>
        <div data-testid="child">Drawer Content</div>
      </Drawer>,
    );

    const backdrop = document.querySelector(".drawer-backdrop");
    expect(backdrop).not.toHaveClass("open");

    const preview = document.querySelector(".drawer-preview");
    expect(preview).not.toHaveClass("open");
  });

  it("calls onClose when backdrop is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>,
    );

    const backdrop = document.querySelector(".drawer-backdrop");
    if (backdrop) {
      fireEvent.click(backdrop);
    }
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when handle is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>,
    );

    const handle = document.querySelector(".drawer-handle");
    if (handle) {
      fireEvent.click(handle);
    }
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when close icon is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Drawer>,
    );

    const closeButton = document.querySelector(".drawer-close");
    if (closeButton) {
      fireEvent.click(closeButton);
    }
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders title and icon if provided", () => {
    render(
      <Drawer
        isOpen={true}
        onClose={() => {}}
        title="Test Title"
        icon={<span data-testid="icon">Icon</span>}
      >
        <div>Content</div>
      </Drawer>,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders header actions if provided", () => {
    render(
      <Drawer
        isOpen={true}
        onClose={() => {}}
        headerActions={<button data-testid="action-btn">Action</button>}
      >
        <div>Content</div>
      </Drawer>,
    );

    expect(screen.getByTestId("action-btn")).toBeInTheDocument();
  });
});
