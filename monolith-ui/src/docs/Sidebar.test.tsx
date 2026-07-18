import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  const renderSidebar = () => {
    return render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
  };

  it("renders fixed texts correctly", () => {
    renderSidebar();
    expect(screen.getByText("MONOLITH_UI · v2.0.0")).toBeInTheDocument();
    expect(screen.getByText("SYSTEM: ACTIVE")).toBeInTheDocument();
    expect(screen.getByText("REGION: BAJA_CALIFORNIA_SUR")).toBeInTheDocument();
    expect(screen.getByText("tropical.dev © 2026")).toBeInTheDocument();
  });

  it("renders section titles", () => {
    renderSidebar();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Foundations")).toBeInTheDocument();
    expect(screen.getByText("Structural Theory")).toBeInTheDocument();
    expect(screen.getByText("Theming")).toBeInTheDocument();
    expect(screen.getByText("Components")).toBeInTheDocument();
    expect(screen.getByText("Mocks · Live Examples")).toBeInTheDocument();
  });

  it("renders section links and labels", () => {
    renderSidebar();
    expect(screen.getByText("01 · Introduction")).toBeInTheDocument();
    expect(screen.getByText("02 · Principles")).toBeInTheDocument();
    expect(screen.getByText("03 · Philosophy")).toBeInTheDocument();

    // Testing a few other random ones
    expect(screen.getByText("04 · Color System")).toBeInTheDocument();
    expect(screen.getByText("09 · Orbital Layout")).toBeInTheDocument();
    expect(screen.getByText("12 · Library")).toBeInTheDocument();
    expect(screen.getByText("15 · TUI Console")).toBeInTheDocument();
  });
});
