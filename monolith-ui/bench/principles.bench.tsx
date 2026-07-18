import { bench, describe } from "vitest";
import { render } from "@testing-library/react";
import { Principles } from "../src/docs/sections/Principles";
import React from "react";

describe("Principles Component", () => {
  bench("render Principles", () => {
    const { unmount } = render(<Principles />);
    unmount();
  });
});
