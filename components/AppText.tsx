import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

const AppText: React.FC<Props> = ({ children, style, ...OtherProps }) => {
  return (
    <Text
      style={[
        {
          color: Colors.text,
          fontFamily: Font["poppins-regular"],
          fontSize: FontSize.base,
        },
        style,
      ]}
      {...OtherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
