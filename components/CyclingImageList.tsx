import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { spacing } from "../constants/theme-system";
import { ImageData } from "../models/Events";
import ImageDots from "./ImageDots";

interface CyclingImageListProps {
  images: ImageData[];
  interval: number;
}

const CyclingImageList: React.FC<CyclingImageListProps> = ({
  images,
  interval,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    images.forEach((image) => {
      Image.prefetch(image.url);
    });
  }, [images]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (imageLoaded) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval * 1000); // Convert to milliseconds from user input
    }

    return () => clearInterval(timer);
  }, [images, interval, imageLoaded]);

  return (
    <View style={styles.container}>
      <Animated.View
        key={images[currentIndex].url}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
      >
        <Image
          onLoad={() => setImageLoaded(true)} // only needs to happen once
          testID="cycling-image"
          style={styles.image}
          source={{ uri: images[currentIndex].url }}
          contentFit="contain"
        />
      </Animated.View>
      <Text style={styles.captionText}>{images[currentIndex].caption}</Text>
      <ImageDots count={images.length} currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    gap: spacing[4],
  },
  captionText: {
    color: "#fff",
    textAlign: "center",
    opacity: 0.9,
    fontStyle: "italic",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default React.memo(CyclingImageList);
