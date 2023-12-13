import { Tabs } from "expo-router";

import { GalleryHorizontalEnd } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Memories",
          tabBarIcon: () => <GalleryHorizontalEnd />,
        }}
      />
    </Tabs>
  );
}
