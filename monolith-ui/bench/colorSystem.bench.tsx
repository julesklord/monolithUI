import { bench, describe } from "vitest";
import { render } from "@testing-library/react";
import { ColorSystem } from "../src/docs/sections/ColorSystem";
import React from "react";

describe("ColorSystem Component", () => {
  bench("render ColorSystem", () => {
    const { unmount } = render(<ColorSystem />);
    unmount();
  });
});
