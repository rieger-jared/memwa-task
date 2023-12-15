import { render, fireEvent } from "@testing-library/react-native";
import PrimaryButton from "../PrimaryButton";
import { colors } from "../../constants/Colors";
import "@testing-library/jest-native/extend-expect";

test("renders the correct text", () => {
  const { getByText } = render(
    <PrimaryButton isValid={true} text="Test Button" onPress={jest.fn()} />
  );
  expect(getByText("Test Button")).toBeTruthy();
});

test("calls onPress when pressed", () => {
  const mockOnPress = jest.fn();
  const { getByText } = render(
    <PrimaryButton isValid={true} text="Test Button" onPress={mockOnPress} />
  );

  fireEvent.press(getByText("Test Button"));
  expect(mockOnPress).toHaveBeenCalled();
});

test("does not call onPress when pressed and isValid is false", () => {
  const mockOnPress = jest.fn();
  const { getByText } = render(
    <PrimaryButton isValid={false} text="Test Button" onPress={mockOnPress} />
  );

  fireEvent.press(getByText("Test Button"));
  expect(mockOnPress).not.toHaveBeenCalled();
});
