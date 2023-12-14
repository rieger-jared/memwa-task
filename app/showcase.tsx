import { useQuery } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import { X } from "lucide-react-native";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { typography } from "../constants/Typography";
import Urls from "../constants/Urls";
import { Events } from "../models/Events";

import { SafeAreaView } from "react-native";
import CyclingImageList from "../components/CyclingImageList";
import IconButton from "../components/IconButton";
import { spacing } from "../constants/theme-system";
import { Image } from "expo-image";

export default function ShowcaseModal() {
  const params = useLocalSearchParams<{
    transitionDelay: string;
  }>();

  const memoriesQuery = useQuery<Events>({
    queryKey: ["memories"],
    queryFn: async () => {
      const response = await fetch(Urls.s3Bucket);
      if (!response.ok) {
        throw new Error("Could not connect to the server.");
      }
      return response.json();
    },
  });

  if (memoriesQuery.isPending) {
    return (
      <ShowcaseBase>
        <Text style={styles.text}>Loading...</Text>
      </ShowcaseBase>
    );
  }

  if (memoriesQuery.isError) {
    return (
      <ShowcaseBase>
        <Text style={styles.text}>
          An error occurred loading your memory. Close and reopen to try again.
        </Text>
      </ShowcaseBase>
    );
  }

  return (
    <ShowcaseBase>
      <Text style={styles.memoryTitle}>
        {memoriesQuery.data.events[0].name}
      </Text>
      <View style={styles.imageListContainer}>
        <CyclingImageList
          intervalSeconds={parseInt(params.transitionDelay || "1")}
          images={memoriesQuery.data.events[0].images}
        />
      </View>
    </ShowcaseBase>
  );
}

interface ShowcaseBaseProps {
  children: ReactNode;
}

const ShowcaseBase: React.FC<ShowcaseBaseProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <IconButton IconComponent={X} onPress={router.back} />
          <Pressable
            onPress={async () => {
              await Image.clearMemoryCache();
              await Image.clearDiskCache();
              router.back();
            }}
          >
            <X color="grey"></X>
          </Pressable>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    gap: spacing[2],
  },
  memoryTitle: {
    color: "#fff",
    ...typography.heading.h1,
    paddingHorizontal: spacing[3],
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: spacing[3],
  },
  text: {
    color: "#fff",
  },
  imageListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: 200,
  },
});
