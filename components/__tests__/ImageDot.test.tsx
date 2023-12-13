import React from "react";
import ImageDots from "../ImageDots";
import { render, screen } from "@testing-library/react-native";

test("renders correct number of active dots", () => {
  render(<ImageDots count={5} currentIndex={2} />);

  const activeDots = screen.getAllByTestId("dot-active");
  expect(activeDots.length).toBe(3);

  const inactiveDots = screen.getAllByTestId("dot-inactive");
  expect(inactiveDots.length).toBe(2);

  expect(activeDots.length + inactiveDots.length).toBe(5);
});

test("renders no dots when count is 0", () => {
  render(<ImageDots count={0} currentIndex={0} />);

  const dots = screen.queryAllByTestId(/dot-/);
  expect(dots.length).toBe(0);
});

test("renders all dots as inactive when currentIndex is 0", () => {
  render(<ImageDots count={5} currentIndex={0} />);

  const activeDots = screen.getAllByTestId("dot-inactive");
  expect(activeDots.length).toBe(4);
});

test("renders all dots as active when currentIndex is count - 1", () => {
  render(<ImageDots count={5} currentIndex={4} />);

  const inactiveDots = screen.getAllByTestId("dot-active");
  expect(inactiveDots.length).toBe(5);
});
