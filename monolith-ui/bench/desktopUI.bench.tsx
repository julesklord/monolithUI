import { bench, describe } from "vitest";
import { render } from "@testing-library/react";
import { DesktopUI } from "../src/docs/sections/DesktopUI";
import React from "react";

describe("DesktopUI Component", () => {
  bench("render DesktopUI", () => {
    const { unmount } = render(<DesktopUI />);
    unmount();
  });
});
