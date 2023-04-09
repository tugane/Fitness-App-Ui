import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
};

const IconButton: React.FC<Props> = ({
  onPress,
  style,
  name,
  color = Colors.text,
  size = 24,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: Colors.border,
          borderRadius: Spacing.borderRadius.sm,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
