import { render, fireEvent } from "@testing-library/react-native";
import IconButton from "../IconButton";
import { X } from "lucide-react-native";

test("renders icon button", () => {
  const { getByTestId } = render(
    <IconButton IconComponent={X} onPress={() => {}} />
  );

  expect(getByTestId("icon-button")).toBeTruthy();
});

test("calls onPress when pressed", () => {
  const onPressMock = jest.fn();
  const { getByTestId } = render(
    <IconButton IconComponent={X} onPress={onPressMock} />
  );

  fireEvent.press(getByTestId("icon-button"));

  expect(onPressMock).toHaveBeenCalled();
});
