import React from "react";
import { StyleSheet, View } from "react-native";

export interface ImageDotsProps {
  count: number;
  currentIndex: number;
}

export const ImageDots: React.FC<ImageDotsProps> = ({
  count,
  currentIndex,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          testID={index <= currentIndex ? "dot-active" : "dot-inactive"}
          style={[
            styles.dot,
            { backgroundColor: index <= currentIndex ? "white" : "gray" },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
});

export default ImageDots;
