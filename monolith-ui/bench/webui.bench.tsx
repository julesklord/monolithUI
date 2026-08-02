import { bench, describe } from "vitest";
import { render } from "@testing-library/react";
import { WebUI } from "../src/docs/sections/WebUI";
import React from "react";

describe("WebUI Component", () => {
  bench("render WebUI", () => {
    const { unmount } = render(<WebUI />);
    unmount();
  });
});
