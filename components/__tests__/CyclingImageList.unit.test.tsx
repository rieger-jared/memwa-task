import React from "react";
import { render, act } from "@testing-library/react-native";
import CyclingImageList from "../CyclingImageList";

const mockImages = [
  {
    url: "http://example.com/image1.jpg",
    caption: "Image 1",
    date: "2021-01-01",
  },
  {
    url: "http://example.com/image1.jpg",
    caption: "Image 1",
    date: "2021-01-01",
  },
  {
    url: "http://example.com/image1.jpg",
    caption: "Image 1",
    date: "2021-01-01",
  },
];

jest.useFakeTimers();

test("renders initial image and caption", () => {
  const { getByTestId, getByText } = render(
    <CyclingImageList images={mockImages} intervalSeconds={1} />
  );

  expect(getByTestId("cycling-image").props.source[0].uri).toBe(
    "http://example.com/image1.jpg"
  );
  expect(getByText("Image 1")).toBeTruthy();
});

test("loops back to first image and caption after reaching the end", () => {
  const { getByTestId, getByText, update } = render(
    <CyclingImageList images={mockImages} intervalSeconds={1} />
  );

  act(() => {
    jest.advanceTimersByTime(3000);
    update(<CyclingImageList images={mockImages} intervalSeconds={1} />);
  });

  expect(getByTestId("cycling-image").props.source[0].uri).toBe(
    "http://example.com/image1.jpg"
  );
  expect(getByText("Image 1")).toBeTruthy();
});
