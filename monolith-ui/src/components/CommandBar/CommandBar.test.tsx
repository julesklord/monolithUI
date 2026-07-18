import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import {
  CommandBar,
  CommandBarSegment,
  CommandBarDivider,
  CommandBarSpacer,
} from "./CommandBar";

describe("CommandBar Component", () => {
  it("renders children correctly", () => {
    render(
      <CommandBar>
        <div data-testid="child">Test Child</div>
      </CommandBar>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <CommandBar title="My Title">
        <div>Content</div>
      </CommandBar>,
    );
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("applies default platform macos", () => {
    const { container } = render(
      <CommandBar>
        <div>Content</div>
      </CommandBar>,
    );
    expect(container.firstChild).toHaveClass("cb-platform-macos");
    expect(container.querySelector(".cb-traffic-lights")).toBeInTheDocument();
  });

  it("renders windows platform controls correctly", () => {
    const { container } = render(
      <CommandBar platform="windows">
        <div>Content</div>
      </CommandBar>,
    );
    expect(container.firstChild).toHaveClass("cb-platform-windows");
    expect(container.querySelector(".cb-win-controls")).toBeInTheDocument();
  });

  it("renders linux-gnome platform controls correctly", () => {
    const { container } = render(
      <CommandBar platform="linux-gnome">
        <div>Content</div>
      </CommandBar>,
    );
    expect(container.firstChild).toHaveClass("cb-platform-linux-gnome");
    expect(container.querySelector(".cb-gnome-controls")).toBeInTheDocument();
    expect(container.querySelector(".cb-gnome-actions")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <CommandBar className="custom-class">
        <div>Content</div>
      </CommandBar>,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});

describe("CommandBarSegment Component", () => {
  it("renders segment content", () => {
    render(
      <CommandBarSegment>
        <span data-testid="segment-content">Seg Content</span>
      </CommandBarSegment>,
    );
    expect(screen.getByTestId("segment-content")).toBeInTheDocument();
  });

  it("applies active class when active prop is true", () => {
    const { container } = render(
      <CommandBarSegment active>Content</CommandBarSegment>,
    );
    expect(container.firstChild).toHaveClass("active");
  });

  it("applies variant class correctly", () => {
    const { container } = render(
      <CommandBarSegment variant="primary">Content</CommandBarSegment>,
    );
    expect(container.firstChild).toHaveClass("primary");
  });

  it("handles onClick events", () => {
    const handleClick = vi.fn();
    const { container } = render(
      <CommandBarSegment onClick={handleClick}>Content</CommandBarSegment>,
    );

    if (container.firstChild) {
      fireEvent.click(container.firstChild as HTMLElement);
    }

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom style", () => {
    const { container } = render(
      <CommandBarSegment style={{ backgroundColor: "red" }}>
        Content
      </CommandBarSegment>,
    );
    expect(container.firstChild).toHaveStyle(
      "background-color: rgb(255, 0, 0)",
    );
  });
});

describe("CommandBarDivider and Spacer", () => {
  it("renders divider", () => {
    const { container } = render(<CommandBarDivider />);
    expect(container.firstChild).toHaveClass("cb-div");
  });

  it("renders spacer", () => {
    const { container } = render(<CommandBarSpacer />);
    expect(container.firstChild).toHaveClass("cb-spacer");
  });
});
