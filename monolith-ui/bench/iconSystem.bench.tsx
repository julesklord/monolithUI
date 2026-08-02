import { bench, describe } from "vitest";
import { render } from "@testing-library/react";
import { IconSystem } from "../src/docs/sections/IconSystem";
import React from "react";

describe("IconSystem Component", () => {
  bench("render IconSystem", () => {
    const { unmount } = render(<IconSystem />);
    unmount();
  });
});
