import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../providers/ThemeProvider";
import { Header } from "./Header";
import { SECTION_MAP } from "../constants";

const renderHeader = (initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MemoryRouter>,
  );
};

describe("Header component", () => {
  it("renders correctly with static text and command bar info", () => {
    renderHeader();

    // Command bar info
    expect(screen.getByText("MONOLITH_UI")).toBeInTheDocument();
    expect(screen.getByText("BUILD: STABLE_X64")).toBeInTheDocument();
    expect(screen.getByText("BRANCH: master*")).toBeInTheDocument();

    // Nav brand info
    expect(screen.getByText("Monolith")).toBeInTheDocument();
    expect(screen.getByText("UI")).toBeInTheDocument();
  });

  it("updates breadcrumbs correctly based on the route and SECTION_MAP", () => {
    // Empty path
    renderHeader("/");
    expect(screen.getByText(SECTION_MAP[""])).toBeInTheDocument();
  });

  it("updates breadcrumbs correctly for 'principles' route", () => {
    renderHeader("/principles");
    expect(screen.getByText(SECTION_MAP["principles"])).toBeInTheDocument();
  });

  it("uses fallback text for unknown routes", () => {
    renderHeader("/unknown");
    expect(screen.getByText("UNKNOWN")).toBeInTheDocument();
  });

  it("toggles theme correctly when theme button is clicked", async () => {
    renderHeader();
    const user = userEvent.setup();
    const themeBtn = screen.getByRole("button", { name: /Toggle theme/i });

    // Initial state is dark, button shows Sun
    expect(document.documentElement.dataset.theme).toBe("");

    // Click to light
    await user.click(themeBtn);
    expect(document.documentElement.dataset.theme).toBe("light");

    // Click back to dark
    await user.click(themeBtn);
    expect(document.documentElement.dataset.theme).toBe("");
  });

  it("switches brand correctly when brand switcher item is clicked", async () => {
    renderHeader();
    const user = userEvent.setup();

    // Initial brand is 'brand-plasma-core'
    expect(
      document.documentElement.classList.contains("brand-plasma-core"),
    ).toBe(true);

    const oxidizedGoldItem = screen.getByTitle("Oxidized Gold");
    await user.click(oxidizedGoldItem);

    expect(
      document.documentElement.classList.contains("brand-oxidized-gold"),
    ).toBe(true);
    expect(
      document.documentElement.classList.contains("brand-plasma-core"),
    ).toBe(false);
  });
});
