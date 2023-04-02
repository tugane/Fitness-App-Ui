import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";

type Props = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress?: () => void;
};

const Button: React.FC<Props> = ({ style, textStyle, text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          paddingHorizontal: Spacing.padding.lg,
          paddingVertical: Spacing.padding.base,
          backgroundColor: Colors.accent,
          borderRadius: Spacing.borderRadius.base,
          alignItems: "center",
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            fontSize: FontSize.lg,
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
