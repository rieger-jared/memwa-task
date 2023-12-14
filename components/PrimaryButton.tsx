// PrimaryButton.tsx
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../constants/Colors";

interface PrimaryButtonProps {
  isValid: boolean;
  text: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  isValid,
  text,
  onPress,
}) => (
  <Pressable
    style={[
      styles.button,
      { backgroundColor: isValid ? colors.primary : colors.gray[500] },
    ]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default PrimaryButton;
