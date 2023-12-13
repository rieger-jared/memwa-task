import React from "react";
import { Pressable, View, ViewStyle } from "react-native";

interface IconButtonProps {
  IconComponent: React.ComponentType<{ size: string; color?: string }>;
  onPress: () => void;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  IconComponent,
  onPress,
  style,
}) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <IconComponent size="md" color="grey" />
      </Pressable>
    </View>
  );
};

export default IconButton;
