import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies default classes (ghost variant, no size modifier)", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button", { name: "Default" });
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("ghost");
    expect(button).not.toHaveClass("md"); // size='md' doesn't add 'md' class based on the implementation
    expect(button).not.toHaveClass("sm");
    expect(button).not.toHaveClass("lg");
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn primary");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn secondary");

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn danger");
  });

  it("applies size classes correctly for non-md sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn ghost sm");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn ghost lg");
  });

  it("applies iconOnly class", () => {
    render(<Button iconOnly>Icon</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn ghost icon-only");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn ghost custom-class");
  });

  it("renders left and right icons", () => {
    const LeftIcon = <svg data-testid="left-icon" />;
    const RightIcon = <svg data-testid="right-icon" />;

    render(
      <Button leftIcon={LeftIcon} rightIcon={RightIcon}>
        With Icons
      </Button>,
    );

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    expect(screen.getByText("With Icons")).toBeInTheDocument();
  });

  it("handles onClick events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes standard HTML button props", () => {
    render(
      <Button disabled type="submit" aria-label="Submit Button">
        Submit
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Submit Button" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "submit");
  });
});
