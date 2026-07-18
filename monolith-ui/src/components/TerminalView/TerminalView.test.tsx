import { render, screen } from "@testing-library/react";
import { TerminalView } from "./TerminalView";

describe("TerminalView", () => {
  it("renders terminal window and basic structure", () => {
    render(
      <TerminalView>
        <p>Terminal Content</p>
      </TerminalView>,
    );

    const window = screen.getByText("bash — 80x24");
    expect(window).toBeInTheDocument();

    const closeBtn = document.querySelector(".terminal-btn.close");
    const minBtn = document.querySelector(".terminal-btn.min");
    const maxBtn = document.querySelector(".terminal-btn.max");

    expect(closeBtn).toBeInTheDocument();
    expect(minBtn).toBeInTheDocument();
    expect(maxBtn).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(
      <TerminalView>
        <div data-testid="test-child">Test Content</div>
      </TerminalView>,
    );

    const child = screen.getByTestId("test-child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Test Content");

    // Also check it's within the tui-block
    const tuiBlock = document.querySelector(".tui-block");
    expect(tuiBlock).toContainElement(child);
  });
});
