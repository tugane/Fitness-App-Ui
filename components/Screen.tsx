import {
  Platform,
  SafeAreaView,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Screen: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView
      style={[
        {
          paddingVertical: Platform.OS === "android" ? 30 : 0,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default Screen;
