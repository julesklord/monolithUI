import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card Component", () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <div data-testid="child-element">Hello World</div>
      </Card>,
    );
    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies the default variant class", () => {
    const { container } = render(<Card>Content</Card>);
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass("surface-card");
    expect(cardElement).not.toHaveClass("elevated");
  });

  it("applies the elevated variant class when specified", () => {
    const { container } = render(<Card variant="elevated">Content</Card>);
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass("surface-card");
    expect(cardElement).toHaveClass("elevated");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Card className="my-custom-class">Content</Card>,
    );
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass("surface-card");
    expect(cardElement).toHaveClass("my-custom-class");
  });

  it("applies custom style props", () => {
    const { container } = render(
      <Card style={{ backgroundColor: "red" }}>Content</Card>,
    );
    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveStyle("background-color: rgb(255, 0, 0)");
  });
});
