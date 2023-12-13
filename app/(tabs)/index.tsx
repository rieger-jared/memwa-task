import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { spacing } from "../../constants/theme-system";

export default function Memories() {
  const [showcaseDelay, setShowcaseDelay] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (text: string) => {
    const value = parseInt(text, 10);
    if (value >= 1 && value <= 10) {
      setShowcaseDelay(text);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.center}>
      <View style={styles.vStack}>
        <Text style={styles.boldText}>Transition Delay in Seconds</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          keyboardType="number-pad"
          textAlign="right"
        />
        {!isValid && (
          <Text style={styles.errorText}>
            Please enter a value between 1 and 10
          </Text>
        )}
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/showcase",
            params: { transitionDelay: showcaseDelay },
          })
        }
      >
        <Text style={styles.buttonText}>Showcase</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: spacing[4],
    justifyContent: "center",
    alignItems: "center",
  },
  vStack: {
    marginBottom: spacing[4],
    width: "66%",
    gap: spacing[2],
  },
  boldText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#8d214a",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
  },
});
